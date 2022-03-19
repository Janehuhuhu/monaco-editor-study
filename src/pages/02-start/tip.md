## 快速上手
### 1. 安装依赖
```js
yarn add monaco-editor
```
<div style="margin-top: 30px"><div>

### 2. 容器
一个渲染编辑器的容器节点，我们假设是一个 `id` 为 `container` 的 `div`
```js
<div id="container" style="height:100%;"></div>
```
<div style="margin-top: 30px"><div>

### 3. 创建编辑器
```js
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
monaco.editor.create(document.getElementById("container"), {
	value: "hello world"
});
```