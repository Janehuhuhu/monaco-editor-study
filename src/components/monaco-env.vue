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
      window.MonacoEnvironment = {
        getWorkerUrl: (moduleId, label) => {
          return label === 'json' ? this.setWorkerUrl('json') : this.setWorkerUrl('editor') // label 可以为 javascript、css、html等，这里仅举例
        },
      }
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = ""
      this.monacoEditor = monaco.editor.create(this.$refs.container, this.monacoOptions)
      // 编辑器内容发生改变时触发
      this.monacoEditor.onDidChangeModelContent(() => {
        this.$emit("change", this.monacoEditor.getValue())
      })
    },
    format() {
      this.monacoEditor.getAction('editor.action.formatDocument').run()
    },
    setWorkerUrl(key) {
      const { NODE_ENV, BASE_URL } = process.env
      return NODE_ENV === 'development'
        ? `./${key}.worker.js` // 本地环境读取本地服务 worker 文件
        : `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          importScripts('https:${BASE_URL}${key}.worker.js');`)}` // 发布环境通过 importScripts() 函数将外部脚本文件或库加载到 Worker 中
    },
  }
}
</script>