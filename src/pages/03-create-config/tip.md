## 常用配置
| 参数 | 说明 | 类型 | 默认值 | 可选值 
| :----: | :----: | :----: | :----: | :----: |
| value | 编辑器的初始值 | string | - | -
| theme | 编辑器的主题样式,除了提供的可选值外，也可以通过monaco.editor.defineTheme自定义主题 | string | 'vs' | 'vs','vs-dark','hc-black'
| language | 编辑器的初始语言,例如可以设置为javascript, json等 | string | - | -
| lineNumbers | 控制行数的渲染，如果是function，那么会使用return的内容作为行数展示 | string/Function | 'on' | 'on','off','relative', 'interval', '(lineNumber: number) => string'
| readOnly | 控制编辑器是否只读	 | boolean | false | -
| autoClosingBrackets | 自动闭合括号		 | string | 'languageDefined' | 'always'/'languageDefined'/'beforeWhitespace'/'never'


*参考文档中部分属性未复现

[参考文档](https://novaalone.github.io/monaco-editor-doc-zh/guide/create.html#%E5%B8%B8%E7%94%A8%E9%80%89%E9%A1%B9)
