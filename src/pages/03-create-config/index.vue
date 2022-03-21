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
      theme: "vs", // hc-black
      language: 'javascript',
      lineNumbers: 'relative',
      readOnly: false,
      // autoClosingBrackets: 'never',
      // autoClosingOvertype: "always",
      // autoClosingQuotes: 'always',
      autoIndent: 'keep',
      renderValidationDecorations: 'on',
    });
  }
}
</script>