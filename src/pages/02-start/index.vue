<template>
  <div id="container" style="height:100%;"></div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

export default {
  name: 'start',
  mounted() {
    monaco.editor.create(document.getElementById("container"), {
      value: "hello world",
    });
  }
}
</script>