<template>
  <div>
    <monaco
      ref="monaco"
      @change="handleChange"
      :monacoOptions="monacoOptions"
    ></monaco>
    <button @click="format" style="margin-top: 20px">格式化</button>
  </div>
</template>
<script>
import Monaco from "@/components/monaco-env.vue";
export default {
  name: "demo",
  data() {
    return {
      monacoOptions: {
        value: `{"a": 10}`,
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
    },
    format() {
      this.$refs.monaco.format()
    }
  }
};
</script>