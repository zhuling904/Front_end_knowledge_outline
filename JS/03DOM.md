# 文章

[详细总结](https://juejin.cn/post/6844903604445249543)



# 补充

## 一、什么是DOM树？

DOM树是由浏览器解析`HTML/XML`文档后生成的一种树形结构，用于表示文档中的元素和对象。它由多个节点组成，每个节点代表文档中的一个元素、属性、文本或注释。根节点是文档对象（`Document`），它包含整个文档，其他节点则是文档中的元素、属性、文本或注释。节点之间的关系形成了树形结构，每个节点可以有一个或多个子节点，也可以有一个父节点和多个兄弟节点。在JavaScript中，可以使用DOM API操作DOM树，例如添加、删除、修改节点等操作。



## 二、DOM和HTML之间有什么区别？

HTML是一种用于描述网页内容和结构的标记语言，它通过标签和属性来定义页面上的各种元素。浏览器会解析HTML文档，并将其转换为DOM树，以便能够在浏览器中显示和操作网页的内容。

DOM是一种表示HTML和XML文档的树形结构模型，它提供了一种访问和操作文档的方式。DOM树由多个节点组成，每个节点代表文档中的一个元素、属性、文本或注释。JavaScript可以使用DOM API对DOM树进行访问和操作，例如添加、删除、修改节点等操作。



## 三、什么是节点

节点（Node）是DOM树中的基本组成单元，它可以代表文档中的一个元素、属性、文本或注释。在DOM树中，节点通过父子关系组成了一个树形结构，根节点是文档对象（Document），其他节点则是文档中的元素、属性、文本或注释。节点可以有一个或多个子节点，也可以有一个父节点和多个兄弟节点。

节点在DOM中具有一些共同的特征和属性，例如节点类型（Node Type）、节点名称（Node Name）、节点值（Node Value）、子节点列表（Child Nodes）、父节点（Parent Node）等。不同类型的节点还具有不同的属性和方法，例如元素节点（Element Node）有标签名（Tag Name）、属性列表（Attribute List）、样式列表（Style List）等属性，以及添加、删除、修改子节点的方法。



## 四、节点有哪些

| 节点类型     | nodeType | nodeName           | 示例               |
| ------------ | -------- | ------------------ | ------------------ |
| 元素节点     | 1        | 元素的标签名       | `<div>`            |
| 属性节点     | 2        | 属性的名称         | `class`            |
| 文本节点     | 3        | #text              | `Some Text`        |
| 注释节点     | 8        | #comment           | `<!-- Comment -->` |
| 文档节点     | 9        | #document          | 整个HTML或XML文档  |
| 文档类型节点 | 10       | !doctype           | `<!DOCTYPE html>`  |
| 文档片段节点 | 11       | #document-fragment | 文档的一个片段     |



## 五、如何遍历

1. **递归遍历**

   可以使用递归来遍历整个DOM树，例如：

   ```js
   function traverse(node) {
     console.log(node.nodeName);
     node = node.firstChild;
     while (node) {
       traverse(node);
       node = node.nextSibling;
     }
   }
   
   traverse(document);
   ```
   
   这样会从文档节点开始遍历整个DOM树，依次输出每个节点的节点名。需要注意的是，递归遍历整个DOM树的效率可能不太高，因为在遍历大型DOM树时，可能会耗费大量的时间和内存。
   
2. **使用`childNodes`属性**

   可以使用节点的`childNodes`属性来获取该节点的所有子节点，例如：

   ```js
   const parent = document.getElementById('parent');
   const childNodes = parent.childNodes;
   for (let i = 0; i < childNodes.length; i++) {
     console.log(childNodes[i].nodeName);
   }
   ```
   
   这样可以获取到ID为`parent`元素的所有子节点，并依次输出每个节点的节点名。需要注意的是，`childNodes`属性返回的是一个包含所有子节点的NodeList对象，需要使用循环来依次遍历每个子节点。
   
3. **使用`querySelectorAll()`方法**

   可以使用`querySelectorAll()`方法来选择指定元素下符合条件的所有子元素，例如：

   ```js
   const elements = document.querySelectorAll('#parent > *');
   for (let i = 0; i < elements.length; i++) {
     console.log(elements[i].nodeName);
   }
   ```
   
这样可以选择ID为`parent`元素下的所有子元素，并依次输出每个元素的元素名。需要注意的是，`querySelectorAll()`方法返回的是一个包含所有符合条件的元素的NodeList对象，需要使用循环来依次遍历每个元素。

## 六、什么是节点列表

节点列表是指由多个DOM节点组成的集合，可以通过DOM API中提供的一些方法来获取。常见的节点列表有：

1. `childNodes`

   `childNodes`是一个包含指定节点的所有子节点的列表，返回的是一个包含子节点的`NodeList`对象，可以通过循环遍历该列表中的每个节点。

2. `getElementsByTagName()`

   `getElementsByTagName()`方法是一个包含指定元素标签名的所有节点的列表，返回的是一个包含节点的`HTMLCollection`对象，可以通过循环遍历该列表中的每个节点。

3. `getElementsByClassName()`

   `getElementsByClassName()`方法是一个包含指定类名的所有节点的列表，返回的是一个包含节点的`HTMLCollection`对象，可以通过循环遍历该列表中的每个节点。

4. `querySelectorAll()`

   `querySelectorAll()`方法是一个包含指定选择器的所有节点的列表，返回的是一个包含节点的`NodeList`对象，可以通过循环遍历该列表中的每个节点。

节点列表和数组类似，但是不同于数组，节点列表是只读的，不能使用数组的修改、添加、删除等方法来操作节点列表中的节点。

## 七、事件相关

1. 什么是事件处理程序？

   事件处理程序是用来处理特定事件的函数。在Web开发中，常见的事件包括鼠标点击、键盘输入、窗口滚动等。

2. 如何注册事件处理程序？

   注册事件处理程序可以通过DOM API中提供的`addEventListener()`方法来完成，该方法可以在指定元素上注册一个事件监听器，当指定的事件被触发时，该监听器就会被调用。

   语法如下：

   ```js
   element.addEventListener(event, function, useCapture);
   ```
   
   其中，`element`是要注册事件监听器的元素，`event`是要监听的事件类型（比如`click`、`keydown`等），`function`是要执行的函数，`useCapture`是一个布尔值，表示事件是否在捕获阶段触发（默认为`false`，即在冒泡阶段触发）。
   
3. 如何移除事件处理程序？

   移除事件处理程序可以使用`removeEventListener()`方法，该方法接收三个参数：要移除事件监听器的元素、要移除的事件类型、要移除的函数。

   语法如下：

   ```js
   element.removeEventListener(event, function, useCapture);
   ```
   
   其中，`event`、`function`和`useCapture`的含义与`addEventListener()`方法相同。
   
4. 如何取消事件默认行为？

   取消事件默认行为可以使用`preventDefault()`方法，该方法可以阻止事件的默认行为，比如在链接上点击时阻止跳转页面、在表单上提交时阻止刷新页面等。

   语法如下：

   ```js
   event.preventDefault();
   ```
   
其中，`event`是要取消默认行为的事件对象。注意，`preventDefault()`方法只能阻止浏览器的默认行为，无法阻止事件传递。如果要阻止事件传递，可以使用`stopPropagation()`方法。



下表列举了一些常见的事件及其描述：

| 事件名      | 描述                             |
| ----------- | -------------------------------- |
| `click`     | 当元素被单击时触发。             |
| `dblclick`  | 当元素被双击时触发。             |
| `mousedown` | 当鼠标按钮在元素上按下时触发。   |
| `mouseup`   | 当鼠标按钮在元素上释放时触发。   |
| `mousemove` | 当鼠标在元素上移动时触发。       |
| `mouseover` | 当鼠标移动到元素上方时触发。     |
| `mouseout`  | 当鼠标移出元素时触发。           |
| `keydown`   | 当键盘上的键被按下时触发。       |
| `keyup`     | 当键盘上的键被释放时触发。       |
| `keypress`  | 当键盘上的键被按下并释放时触发。 |
| `load`      | 当页面或图像加载完成时触发。     |
| `unload`    | 当页面或图像被卸载时触发。       |
| `resize`    | 当窗口大小改变时触发。           |
| `scroll`    | 当元素滚动时触发。               |
| `submit`    | 当表单提交时触发。               |
| `reset`     | 当表单重置时触发。               |
| `focus`     | 当元素获得焦点时触发。           |
| `blur`      | 当元素失去焦点时触发。           |
| `change`    | 当元素的值改变时触发。           |
| `select`    | 当文本被选中时触发。             |



## 八、属性类名相关

| 操作           | 方法                                                  | 示例                                                       |
| -------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| 获取元素的样式 | `getComputedStyle(element)`                           | `const styles = window.getComputedStyle(element);`         |
| 设置元素的样式 | `element.style.property = value`                      | `element.style.color = 'red';`                             |
| 添加类名       | `element.classList.add(className)`                    | `element.classList.add('my-class');`                       |
| 删除类名       | `element.classList.remove(className)`                 | `element.classList.remove('my-class');`                    |
| 切换类名       | `element.classList.toggle(className)`                 | `element.classList.toggle('my-class');`                    |
| 获取元素的属性 | `element.getAttribute(attributeName)`                 | `const value = element.getAttribute('data-my-attribute');` |
| 设置元素的属性 | `element.setAttribute(attributeName, attributeValue)` | `element.setAttribute('data-my-attribute', 'my-value');`   |
| 删除元素的属性 | `element.removeAttribute(attributeName)`              | `element.removeAttribute('data-my-attribute');`            |



## 九、AJAX

- AJAX（Asynchronous JavaScript and XML）指的是使用JavaScript、XML和HTTP请求实现异步数据交互的一种技术。
- 使用AJAX发送请求的常用方法是使用XMLHttpRequest对象。XMLHttpRequest对象是一个可以在后台与服务器进行数据交互的JavaScript对象，它可以实现异步的HTTP请求。在使用XMLHttpRequest对象发送请求时，需要设置请求的方法（GET或POST）、URL、请求头、请求体等参数，然后发送请求。
- 处理AJAX响应可以使用XMLHttpRequest对象的readyState属性和onreadystatechange事件来实现。XMLHttpRequest对象有一个readyState属性，表示请求的状态，它的值会从0到4不断变化，分别表示请求初始化、发送请求、等待服务器响应、接收到部分响应和接收到全部响应。可以通过监听onreadystatechange事件来获取请求状态的变化，并根据状态的变化来处理响应。
- XMLHttpRequest对象有一个重要的属性responseText，它包含了服务器响应的内容。可以通过responseText属性来获取响应的数据。对于XML格式的响应，还可以使用responseXML属性来获取XML文档对象。
- 在现代浏览器中，还可以使用Fetch API或者Axios等第三方库来实现AJAX请求。这些库的API更为简洁易用，而且能够自动处理跨域请求等问题。

```js

function loadDoc() {
  // 创建XMLHttpRequest对象
  var xhttp = new XMLHttpRequest();

  // 监听请求状态的变化
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // 请求成功，处理响应
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  // 发送请求
  xhttp.open("GET", "example.txt", true);
  xhttp.send();
}

```



## 十、跨域

跨域请求指的是在浏览器中使用JavaScript向不同域名、不同端口或不同协议的服务器发送请求，因为浏览器的同源策略（Same-Origin Policy）限制，这种跨域请求会受到安全限制，无法获取到服务器的响应数据或执行请求。例如，如果一个网站想从另一个域名的服务器获取数据，就会发生跨域请求。

为了解决跨域问题，可以采用以下几种方法：

1. JSONP（JSON with Padding）：通过动态创建一个<script>元素来请求另一个域名的脚本文件，在脚本文件中执行一个回调函数，并将需要传递的数据作为参数传入该函数。这种方法需要服务端配合，支持返回指定回调函数名的响应。
2. CORS（Cross-Origin Resource Sharing）：通过在服务器端设置Access-Control-Allow-Origin响应头，允许浏览器跨域请求该服务器的资源。此方法需要服务器端支持，客户端无需做额外处理。
3. 代理服务器：在同源策略限制下，使用一个代理服务器作为中介，从同一域名下发送请求，再将请求结果返回给客户端。这种方法需要开发者自己维护代理服务器，并对服务器端和客户端进行额外的配置和开发。
4. postMessage：在浏览器中使用JavaScript向另一个窗口（包括不同域名、不同端口或不同协议的窗口）发送消息。这种方法需要配合window.postMessage()方法使用。

以上方法中，CORS是目前较为常用的解决跨域问题的方法。



## 十一、如何优化DOM操作

DOM操作指的是通过JavaScript代码对HTML文档中的DOM节点进行增、删、改、查等操作。由于JavaScript和HTML文档是在同一线程中运行的，因此DOM操作的过程中会阻塞JavaScript的执行，从而影响页面的性能。

DOM操作会影响性能的原因包括：

1. 浏览器渲染引擎需要不断地更新页面布局和重新绘制，来反映DOM操作的变化。
2. DOM操作会导致浏览器的回流（reflow）和重绘（repaint），回流会重新计算页面布局，重绘会重新绘制页面元素，这两种操作都很消耗性能。

为了减少DOM操作对性能的影响，可以采用以下几种方法：

1. 减少DOM操作的次数：将多个DOM操作合并为一个操作，可以减少浏览器的回流和重绘次数。
2. 缓存DOM查询结果：将DOM查询结果缓存到变量中，避免重复查询，可以提高代码的执行效率。
3. 批量修改DOM节点：将DOM节点添加到文档流之前，先将它们添加到一个离线的文档片段中，再将整个文档片段一次性添加到文档流中，可以减少回流和重绘的次数。
4. 使用CSS3动画代替JavaScript操作DOM：CSS3动画使用硬件加速，效率更高，可以减少JavaScript操作DOM的次数。
5. 使用事件委托：将事件处理程序添加到祖先节点上，通过事件冒泡机制捕获事件并处理，可以减少事件处理程序的数量，提高代码效率。
6. 使用虚拟DOM：通过创建虚拟DOM对象，将DOM操作转换为对虚拟DOM的操作，再一次性对实际DOM进行修改，可以减少DOM操作的次数，提高性能。















