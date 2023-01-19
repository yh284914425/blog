## husky 使用总结

在做前端工程化时 husky 可以说是一个必不可少的工具。husky 可以让我们向项目中方便添加 git hooks。通常情况下我只需要如下两步就可在项目中引入并设置好 husky：

将 husky 添加到项目的开发依赖中
npm install -D husky

2. 在 package.json 中设置我们需要的 git hooks

{
"husky": {
"hooks": {
"pre-commit": "npm run test", // 在 commit 之前先执行 npm run test 命令
"commit-msg": "commitlint -e $HUSKY_GIT_PARAMS" // 校验 commit 时添加的备注信息是否符合我们要求的规范
}
}
}
在之前的项目中我们通常都是这样完成对 husky 的引入和设置的。但是今天在我新建的项目中这样设置竟然不起作用了，经过一番查看才知道原来最新版本的 husky（6.0.0）已经做了破坏性的变更，之前的设置方式已经失效了。

## husky 为什么放弃了之前的配置方式

根据官方的说法，之前 husky 的工作方式是这样的，为了能够让用户设置任何类型的 git hooks 都能正常工作，husky 不得不创建所有类型的 git hooks。这样在 git 工作的每个阶段都会调用 husky 所设置的脚本，在这个脚本中 husky 会检查用户是否配置该 hook，如果有就运行用户配置的命令，如果没有就继续往下执行。

这样做的好处就是无论用户设置什么类型的 git hook husky 都能确保其正常运行。但是缺点也是显而易见的，即使用户没有设置任何 git hook，husky 也向 git 中添加了所有类型的 git hook。

那有没有可能让 husky 只添加我们需要的 git hook 呢？作者尝试过解决这个问题，但是失败了。究其失败的根本原因，就是因为 husky 需要在两个地方进行配置才能完成一个完整的 git hook 功能。一个是在 package.json 中配置 git hook 所要执行的真正命令，一个是在.git/hooks/中配置相对应的 git hook。也就是说无论是添加还是删除 git hook 就要保证在这两个地方同步执行对应的操作。作者无法找到一个可靠的方法来同步这两个地方的配置，因此失败了。

作者认为这个问题是由 husky 工作模型的自身缺陷导致的，如果想要解决就不得不另辟蹊径采用一种新的工作模型。因此新版 husky 做了破坏性的变更。

## 新版 husky 的工作原理

新版的 husky 使用了从 git 2.9 开始引入的一个新功能 core.hooksPath。core.hooksPath 可以让你指定 git hooks 所在的目录而不是使用默认的.git/hooks/。这样 husky 可以使用 husky install 将 git hooks 的目录指定为.husky/，然后使用 husky add 命令向.husky/中添加 hook。通过这种方式我们就可以只添加我们需要的 git hook，而且所有的脚本都保存在了一个地方（.husky/目录下）因此也就不存在同步文件的问题了。

## 新版 husky 实践

安装 husky
`npm install -D husky`

2. 在 packgae.json 中添加 prepare 脚本

```
{
"scripts": {
"prepare": "husky install"
}
}
```

prepare 脚本会在 npm install（不带参数）之后自动执行。也就是说当我们执行 npm install 安装完项目依赖后会执行 husky install 命令，该命令会创建.husky/目录并指定该目录为 git hooks 所在的目录。

3. 添加 git hooks，运行一下命令创建 git hooks

`npx husky add .husky/pre-commit "npm run test"`

运行完该命令后我们会看到.husky/目录下新增了一个名为 pre-commit 的 shell 脚本。也就是说在在执行 git commit 命令时会先执行 pre-commit 这个脚本。pre-commit 脚本内容如下：

```
#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"

npm run test
```

可以看到该脚本的功能就是执行 npm run test 这个命令

需要注意的点
在项目中我们会使用 commit-msg 这个 git hook 来校验我们 commit 时添加的备注信息是否符合规范。在以前的我们通常是这样配置：

```
{
"husky": {
"hooks": {
"commit-msg": "commitlint -e $HUSKY_GIT_PARAMS" // 校验commit时添加的备注信息是否符合我们要求的规范
    }
  }
}
```

在新版 husky 中$HUSKY_GIT_PARAMS 这个变量不再使用了，取而代之的是$1。在新版 husky 中我们的 commit-msg 脚本内容如下：

```
#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"
```

#--no-install 参数表示强制 npx 使用项目中 node_modules 目录中的 commitlint 包
npx --no-install commitlint --edit $1
这个脚本应该也能使用类似于 `npx husk add .husky/commit-msg "npx --no-install commitlint --edit $1"`这样的命令进行添加，但是由于本人对 shell 编程不熟，不知道如何将$1 当成一个普通的字符串输出的文件中去，所以一直没有成功。希望有知道的大神能够告诉我一下。

对于 commit-msg hook 我们可以使用以下命令来创建 git hook 所要执行的脚本

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
