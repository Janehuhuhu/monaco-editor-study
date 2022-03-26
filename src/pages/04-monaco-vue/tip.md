## monaco-editor 在 vue-cli3 使用
### 1. 安装依赖
```js
yarn add monaco-editor-webpack-plugin -D
```
⚠️注意： 这里 `monaco-editor-webpack-plugin` 和 `monaco-editor` 版本需要对应，否则构建会报错，这里选择的版本分别为 *0.26.1* 和 *4.1.1*
<div style="margin-bottom: 50px"></div>

### 2. 在 vue.config.js 文件下配置
```js
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")
configureWebpack: {
	plugins: [
		new MonacoWebpackPlugin({
			languages: ["json"],// 配置需要的languages，减少打包后的体积
		})
	]
}
```
<div style="margin-bottom: 50px"></div>

### 3. 定义 monaco 组件
```js
<template>
  <div ref="container" :style="`height: ${height}px`"></div>
</template>
<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

export default {
  name: 'mocano',
  data() {
    return {
       monacoEditor: ''
    }
  },
  props: {
    monacoOptions: {
      type: Object,
      default: () => {
        return {
          value: "hello world", // 编辑器的值
          theme: "vs-dark", // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
          roundedSelection: false, // 右侧不显示编辑器预览框
          autoIndent: true, // 自动缩进
          language: 'json',
        };
      }
    },
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = ""
      this.monacoEditor = monaco.editor.create(this.$refs.container, this.monacoOptions)
      // 编辑器内容发生改变时触发
      this.monacoEditor.onDidChangeModelContent(() => {
        this.$emit("change", this.monacoEditor.getValue())
      })
    }
  }
}
</script>
```

<div style="margin-bottom: 50px"></div>

### 4. 使用组件
```js
<template>
  <div>
    <monaco
      ref="monaco"
      @change="handleChange"
      :monacoOptions="monacoOptions"
    ></monaco>
  </div>
</template>
<script>
import Monaco from "@/components/monaco.vue";
export default {
  name: "demo",
  data() {
    return {
      monacoOptions: {
        value: "hello",
        readOnly: false, // 是否只读
        language: "json", // 语言类型
        theme: "vs-dark", // 编辑器主题
      }
    };
  },
  components: {
    Monaco
  },
  methods:{
    handleChange(val){
      console.log(val)
    }
  }
};
</script>
```

注意： 正确的配置 `vue.config.js`，并且打包语言和 `monaco` 配置语言一致，会在编辑器中显示语言高亮，且格式不规范的会显示红色下划线
<div style="margin-bottom: 50px"></div>


### 5. 格式化输入内容
```js
this.editor.getAction('editor.action.formatDocument').run()
```
<div style="margin-bottom: 50px"></div>


### 6. monaco-editor-webpack-plugin option
`monaco-editor-webpack-plugin` 选项可以传递给 `MonacoWebpackPlugin`。通过仅选择某些语言或某些编辑器功能，可以使用它们生成较小的编辑器包, 如 `features` [详情](https://www.npmjs.com/package/monaco-editor-webpack-plugin)
```js
new MonacoEditorPlugin({
  languages: ['json'],
  features: ['coreCommands', 'find', 'format'], // 具体功能可以从 node_modules 中查看
}),
```