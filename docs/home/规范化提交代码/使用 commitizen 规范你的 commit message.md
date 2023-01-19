## 什么是 Commit 规范

### Commit Message 格式

```
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```

上面是一次 Commit 后 Message 格式规范，分成标题，内容详情，结尾三个部分，各有各的用处，没有多余项。

头部即首行，是可以直接在页面中预览的部分，入上面图中所示，一共有三个部分 `<type>，<scope>，<subject>`，含义分别如下:

### Type

feat：新功能（feature）

fix：修补 bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动

### Scope

用来说明本次 Commit 影响的范围，即简要说明修改会涉及的部分。这个本来是选填项，但从 AngularJS 实际项目中可以看出基本上也成了必填项了。

### Subject

用来简要描述本次改动，概述就好了，因为后面还会在 Body 里给出具体信息。并且最好遵循下面三条:

以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes

首字母不要大写

结尾不用句号 (.)

### Body

body 里的内容是对上面 subject 里内容的展开，在此做更加详尽的描述，内容里应该包含修改动机和修改前后的对比。

### Footer

footer 里的主要放置不兼容变更和 Issue 关闭的信息

### Revert

此外如果需要撤销之前的 Commit，那么本次 Commit Message 中必须以 revert 开头，后面紧跟前面描述的 Header 部分，格式不变。并且，Body 部分的格式也是固定的，必须要记录撤销前 Commit 的值。

## Commitizen 是什么？

是一个格式化 commit message 的工具.

### Commitizen 安装

第一步
全局安装

```
npm install -g commitizen
```

第二步
全局安装

```
npm install -g cz-conventional-changelog
npm install -g conventional-changelog
npm install -g conventional-changelog-cli
```

然后，运行下面命令，使其支持 Angular 的 Commit message 格式。

```
commitizen init cz-conventional-changelog --save --save-exact

```

此时，你的 package.json 会多出以下配置：

```
"devDependencies": {
  "cz-conventional-changelog": "^3.3.0"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

之后在需要 git commit 的地方使用 git cz 即可。

第三步
项目内安装 commitlint

```
npm install @commitlint/config-conventional @commitlint/cli
```

之后你的 package.json 又会多出一部分的配置

```
"dependencies": {
  "@commitlint/cli": "^8.3.5",
  "@commitlint/config-conventional": "^8.3.4"
}
```

接着在 package.json 统计目录新建 commitlint.config.js 文件 然后写入

```
module.exports = { extends: ["@commitlint/config-conventional"] };
```

第四步
项目中安装 husky，用于校验 commit message

```
npm install husky
```

接着配置 husky

```
"dependencies": {
    "@commitlint/cli": "^8.3.5",
    "@commitlint/config-conventional": "^8.3.4",
    "husky": "^4.2.5"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  }
```

当我们去以不合法的提交信息进行提交代码时，会进行检查。

Commitizen 完整使用流程 (简述)
全局安装

```
npm install -g commitizen
npm install -g cz-conventional-changelog
npm install -g conventional-changelog
npm install -g conventional-changelog-cli
```

新建项目文件夹，快速初始化 package.json 文件

```
npm init --y
```

初始化 git 仓库：

```
git init
```

项目内执行：

```
commitizen init cz-conventional-changelog --save --save-exact
npm install @commitlint/config-conventional @commitlint/cli
npm install husky
```

新建 commitlint.config.js 并写入以下配置：

```
module.exports = { extends: ["@commitlint/config-conventional"] };
```

暂存文件

```
git add .
```

提交 commit message

```
git cz
```

控制台会显示：

```
git cz
cz-cli@4.2.2, cz-conventional-changelog@3.3.0
 // 选择type
? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
(Move up and down to reveal more choices)

? Select the type of change that you're committing: feat:     A new feature
// scope范围
? What is the scope of this change (e.g. component or file name): (press enter to skip) add config
//简述
? Write a short, imperative tense description of the change (max 82 chars):
 (5) 添加了配置
 // 详细描述
? Provide a longer description of the change: (press enter to skip)
 添加了commit message格式化工具的配置
? Are there any breaking changes? No
? Does this change affect any open issues? No
[master (root-commit) c830fad] feat(add config): 添加了配置
 4 files changed, 1977 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 CHANGELOG.md
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

输出 log

```
conventional-changelog -p angular -i CHANGELOG.md -s
```
