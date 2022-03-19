<template>
  <div class="hello">
    <h1>欢迎来到 Monaco Editor</h1>
    <p>Monaco Editor 是微软提供的开源的 Web 端代码编辑器</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  margin-top: 30%;
}
</style>
