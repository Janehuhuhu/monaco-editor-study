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