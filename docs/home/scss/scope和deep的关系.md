scoped
vue 项目一般是单页面、多组件，整个项目共用一个 css 样式表，有时候我们在写组件的过程中并不希望组件的样式污染全局作用域（毕竟不同组件之间重名的 class 很正常），因此我们会在组件的样式标签上加上 scoped，例如下面这个最基本 vue 组件框架：
```
<template>
...
</template>

<script>
import ...
export defualt {
	data(){
	...
	}
	...
}
</script>

<style lang="less" scoped>
...
</style>
```

那么这个 scoped 是什么意思呢？其实就是给每条样式的 最后面 加上一个属性选择器[哈希值]，这个哈希值在项目里全局唯一，代表了当前这个组件。例如当前组件用到了 haha.vue ， 那么在打包的时候就会编译出一个 data-v-5cfc4ef6 来唯一代表这个组件。注意一个 vue 文件里可能有多个哈希值，因为一个组件里还可能嵌套了其他组件。

废话不多说，直接看 scoped 是怎么工作的。例如：
```
<style lang="less" scoped>
	.a{
		.b{
			background-color:#bfa
		}
	}
</style>
```
则打包编译后这个属性会变成这样：
```
    .a .b[data-v-5cfc4ef6]
```
注意了，.a 和.b 之间有空格，表示父子元素；.b 和[data-v-5cfc4ef6]无空格，表示并集。那么这条 css 语句什么意思呢？class 为 a 的元素下的 class 为 b 且具有 data-v-5cfc4ef6 属性的元素。这样就做到了 css 样式只针对本组件（哈希值为 data-v-5cfc4ef6）的元素

/deep/
那么 deep 是什么呢？博主找遍全网，找到的信息大意都是：“能够让被 scoped 限制住的样式属性穿透到子组件”，简直 tm 在坑爹！这话是不错，但是说了等于没说：为什么平时写项目，同样都是引用自组件，有些地方用/deep/有些地方不用呢？经过我自己的摸索，发现/deep/的工作规律是这样的：
`/deep/ === [哈希值]`
啥意思呢？还是刚才那个例子，加一个 deep：
```
<style lang="less" scoped>
	.a{
		/deep/.b{
			background-color:#bfa
		}
	}
</style>

```
那么编译后的结果就会是：
```
    .a[data-v-5cfc4ef6] .b
```
注意这个.a 和[data-v-5cfc4ef6]之间没有空格，表示并集；.a[data-v-5cfc4ef6]和.b 之间是有空格的，表示子元素。
结合 less 的嵌套语法，我们发现是这样的：
/deep/某个属性前，表示父元素要拥有 哈希值这个属性，而如果没有写/deep/，这个 哈希值是会被 scoped 到叶子元素上的（最深的子元素，就像上一个例子所演示的那样）。
再举个例子：
```
/deep/div
```
会被打包编译成
```
[data-v-5cfc4ef6] div
```
注意有空格，表示父元素有 哈希值这个属性的所有 div 元素，也就是这个组件下的所有 div 元素了。

实战
有同学会问了，既然 scoped 会自己帮我们把哈希值放在叶子元素上，为什么还要自己写/deep/来调整哈希值的位置呢？我曾经也有这样的疑问，直到我用了 antd…
话不多说，直接看代码：
```
<template>
  <div class="user-detail-wrap">
    <a-card :bodyStyle="{padding:'20px'}">
      <a-row
        :gutter="8"
      >
        <a-col :sm="5" :xs="5" class="title">编辑角色
          <a @click="goBack">
            <img
              :src="returnIcon"
              style="height: 18px" />
          </a>
        </a-col>
        <a-col :sm="3" :xs="3" style="float:right;">
          <a-button type="primary" style="width:80px;float:right;" v-action:save @click="goSave">保存</a-button>
          <a-modal
            :visible="confirmVisible"
            @cancel="handleCancel"
          >
            <p class="title">
              <img :src="warningIcon" alt="" class="warning-icon">
              <span class="confirm-title">{{ confirmTitle }}</span>
            </p>
            <p class='confirm-text'>{{ confirmText }}</p>
            <template slot="footer">
              <a-button key="back" @click="handleCancel">取消</a-button>
              <a-button key="submit" type="primary" :loading="confirmLoading" @click="handleConfirm">修改</a-button>
            </template>
          </a-modal>
        </a-col>
      </a-row>
    </a-card>
    <a-card :bodyStyle="{padding:'20px'}" class="table-card">
      <a-row
        :gutter="8"
      >
        <a-col :sm="5" :xs="5" class="title">基础信息</a-col>
      </a-row>
      <a-card-grid
        style="width:25%;padding:10px"
        v-for="(record, index) in roleInfoColums"
        :key="index"
      >{{ record.title }}: {{ roleInfo[record.dataIndex] }}</a-card-grid>
    </a-card>
    <a-card :bodyStyle="{padding:'20px'}" class="table-card">
      <a-row
        :gutter="8"
      >
        <a-col :sm="5" :xs="5" class="title">权限信息</a-col>
      </a-row>
      <permission-tree
        :treeData="treeData"
        :disableAll="false"
        @onSelectChange="onSelectChange"
      ></permission-tree>
    </a-card>
  </div>
</template>
```
打包之后呈现出的部分DOM树是这样的：

可以看到，父元素 ant-modal-root 有哈希值，而子元素 ant-modal-footer 却没有，但是 ant-modal-footer 的两个 button 自元素又有哈希值了（可能是因为 ant-modal-footer 是我插入的另一个 template slot 的根元素）
```
 <template slot="footer">
 	<a-button key="back" @click="handleCancel">取消</a-button>
 	<a-button key="submit" type="primary" :loading="confirmLoading" @click="handleConfirm">修改</a-button>
 </template>
```
这时候，如果不写deep，而是让scoped自己来的话
```
.ant-modal-root {
.ant-modal-footer {
border-top: 0;
overflow: hidden;
padding: 32px;
padding-top:18px;
}
}
```
就会编译出这样的 css 样式：
```
.ant-modal-root .ant-modal-footer[data-v-5cfc4ef6]
```
可是我 tm 上哪里找有 data-v-5cfc4ef6 属性的 ant-modal-footer…

写上 deep：
```
.ant-modal-root {
/deep/.ant-modal-footer {
border-top: 0;
overflow: hidden;
padding: 32px;
padding-top:18px;
}
}
```
就编译成了：
```
.ant-modal-root[data-v-5cfc4ef6] .ant-modal-footer
```
这下就能选中了。

总结
用到第三方组件的时候，经常会自己定义插槽 slot 来替换原组件里的内容，这时候就很容易遇到要手动用/deep/的问题。遇到这类问题的时候，不要盲目地用!important 来提高优先级（这样不管用），甚至不加 scoped 写样式，或者直接通过 import .less 引入外部样式来污染全局了（这样会有副作用）

