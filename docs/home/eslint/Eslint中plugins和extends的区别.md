Eslint 中 plugins 和 extends 的区别
前言

eslint 基础的就不说什么了，直接说下 plugins 和 extends 的区别吧

plugins 插件
eslint 的规则可以通过 rules 配置，举个比较简单的例子：

```
//	.eslintrc.js
module.exports = {
	rules: {
    'indent': 'off'
  }
}

```

但是，不同场景、不同规范下有些定制的 eslint 检查需求，eslint 默认提供的可选规则中如果没有，这个时候就需要做一些扩展了。

plugin 插件主要是为 eslint 新增一些检查规则，举个例子：eslint-plugin-react 就会对 react 项目做了一些定制的 eslint 规则，下面是截取了 eslint-plugin-react 中的 jsx-boolean-value 一段简化，具体的可以直接看 eslint-plugin-react 源码。

```
//	eslint-plugin-react
module.exports = {
  rules: {
    'jsx-boolean-value': {
      meta: {
        docs: {
          description: 'Enforce boolean attributes notation in JSX',
          category: 'Stylistic Issues',
          recommended: false,
          url: docsUrl('jsx-boolean-value')
        },
        fixable: 'code'
      },
      create(context) {}
    }
    // ...
  },
  configs: {
    // ...
    // 后面会说 和extends相关
  }
}

```

那对于 eslint-plugin-react 新增加的规则，要如何在自己的项目使用呢，还是以上面的的新规则为例

第一步肯定是先把 eslint-plugin-react 安装了，yarn add eslint-plugin-react --dev。

第二步就是加载插件了，plugins 只是加载了插件，可以理解赋予了 eslint 解析 jsx-boolean-value 规则的检查能力，真正开启这个规则的检查能力还是要通过 rules 配置。（一个插件库里面往往有几十个新规则，并不是每一个规则都需要开启的，这是时候就要根据自己的需求来配置相关检查规则）

```
//	.eslintrc.js
module.exports = {
  plugins: [
    'eslint-plugin-react'
  ],
  rules: {
    'eslint-plugin-react/jsx-boolean-value': 2
  }
}

```

这样一条新的 eslint 规则就设置好了。

extends 集成
plugins 与 rules 结合是 eslint 基础能力，extends 可以看做是去集成一个个配置方案的最佳实践。

虽然说需要根据不同的需求、风格、规范去配置不同的 eslint 规则，但往往相似的项目之间需要配置的规则都是大同小异的。如果每一个项目都是重新一步步开始选择配置规则就比较显得不太人性了；这个时候就是 extends 体现作用的时候。

个人比较喜欢把 extends 理解为去集成 eslint 风格或者 eslint 插件的最佳实践，它配置的内容实际就是一份份别人配置好的.eslintrc.js。

还是以上述的 eslint-plugin-react 为例，它实现了几十种配置规则，为了方便其他人使用，它默认实现了两种最佳实践 all 以及 recommened（在 configs 中可以看到具体的名称）

原先还需要自己一条条选择，这样就可以直接把官方配置好的最佳实践直接拿来用。如果碰到和自己风格或者规范有冲突的规则，那直接在 rules 中重新定义就可以了，毕竟冲突的规则往往都没有多少

```
module.export = {
	extends: [
    	'eslint-plugin-react/recommended'
    ]
}

```

extends 除了使用 plugin 中 config name 的加载方式，往往也会使用 eslint-config-xxxx 这样命名的包。主要是因为有些最佳实践往往不需要自己去重新实现规则检查的方法，只需要去导出一份 eslint 配置即可。
