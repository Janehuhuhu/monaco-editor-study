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