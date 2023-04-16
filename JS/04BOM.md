# 文章

[详细总结1](https://blog.csdn.net/DDxuexi/article/details/121799345)

[详细总结2](http://c.biancheng.net/view/9363.html)



# 补充



## 一、BOM中关于URL的操作

以下是一个表格，列举了BOM中对URL进行操作的常用对象、属性和方法：

| 对象/方法                   | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `window.location`           | 当前窗口的URL对象，提供了对URL的访问和操作。                 |
| `window.location.href`      | 获取或设置当前URL的完整路径。                                |
| `window.location.host`      | 获取当前URL的主机名和端口号。                                |
| `window.location.protocol`  | 获取当前URL的协议。                                          |
| `window.location.pathname`  | 获取当前URL的路径部分。                                      |
| `window.location.search`    | 获取当前URL的查询字符串部分。                                |
| `window.location.hash`      | 获取当前URL的锚点部分。                                      |
| `window.location.replace()` | 用指定的URL替换当前页面，而不将当前页面添加到浏览器历史记录中。 |
| `window.history`            | 提供了对浏览器历史记录的访问和操作。                         |
| `window.history.back()`     | 回到上一页。                                                 |
| `window.history.forward()`  | 前进到下一页。                                               |
| `window.history.go(n)`      | 前进或后退n个页面，负数表示后退。                            |

[前端常见URL操作](https://juejin.cn/post/7033570440224178189#heading-1)



## 二、屏幕相关

以下是一个表格，列出了获取用户屏幕尺寸和分辨率的常用属性和方法：

| 属性/方法                   | 描述                           |
| --------------------------- | ------------------------------ |
| `window.screen.width`       | 屏幕的宽度（像素）             |
| `window.screen.height`      | 屏幕的高度（像素）             |
| `window.screen.availWidth`  | 屏幕的可用宽度（像素）         |
| `window.screen.availHeight` | 屏幕的可用高度（像素）         |
| `window.screen.colorDepth`  | 屏幕的颜色深度（位数）         |
| `window.screen.pixelDepth`  | 屏幕的像素深度（位数）         |
| `screen.width`              | 同 `window.screen.width`       |
| `screen.height`             | 同 `window.screen.height`      |
| `screen.availWidth`         | 同 `window.screen.availWidth`  |
| `screen.availHeight`        | 同 `window.screen.availHeight` |
| `screen.colorDepth`         | 同 `window.screen.colorDepth`  |
| `screen.pixelDepth`         | 同 `window.screen.pixelDepth`  |

这些属性可用于JavaScript中，用于获取用户屏幕的尺寸和分辨率，以便进行响应式设计、调整网页元素的大小、判断设备类型等等。

```js
// 获取屏幕的宽度和高度
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

// 获取屏幕的可用宽度和高度
var availScreenWidth = window.screen.availWidth;
var availScreenHeight = window.screen.availHeight;

// 获取屏幕的颜色深度和像素深度
var colorDepth = window.screen.colorDepth;
var pixelDepth = window.screen.pixelDepth;

// 获取屏幕的分辨率（宽度 x 高度）
var screenResolution = screenWidth + "x" + screenHeight;
```



## 三、cookie操作

| 属性/方法         | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| `document.cookie` | 用于读取、写入和删除cookie的属性。读取cookie时，返回一个包含所有cookie的字符串；写入cookie时，可以指定cookie的名称、值、过期时间和路径等；删除cookie时，需要指定cookie的名称、过去的时间和路径。 |
| `cookieName`      | cookie的名称。需要注意的是，cookie的名称和值不能包含特殊字符（如分号、逗号、等号等），需要进行编码。 |
| `cookieValue`     | cookie的值。                                                 |
| `expires`         | cookie的过期时间。可以指定一个UTC格式的日期字符串，表示cookie应该在何时过期。例如，"Thu, 01 Jan 1970 00:00:00 UTC"表示cookie已经过期，"Fri, 16 Apr 2023 00:00:00 UTC"表示cookie将在2023年4月16日过期。 |
| `path`            | cookie的路径。指定cookie在哪个路径下可用。例如，"/"表示整个网站都可以使用该cookie，"/subdir"表示只有网站的子目录subdir下可以使用该cookie。 |
| `max-age`         | cookie的最大存活时间。以秒为单位指定cookie应该存活多久。如果指定了该参数，则忽略`expires`参数。例如，`max-age=3600`表示cookie应该在一小时后过期。 |
| `secure`          | cookie是否应该只通过HTTPS协议发送。如果设置了该属性，则只有在HTTPS连接下才能发送该cookie。 |
| `HttpOnly`        | cookie是否应该只能通过HTTP协议发送。如果设置了该属性，则脚本无法访问该cookie，以防止跨站点脚本攻击。 |
| `SameSite`        | 控制浏览器是否应该将cookie发送到第三方站点。可选值有`Strict`、`Lax`和`None`。`Strict`表示只有在当前站点的URL与请求的URL完全相同时才发送cookie；`Lax`表示只有在当前站点的URL与请求的URL在同一个站点内且请求方法为GET时才发送cookie；`None`表示总是发送cookie，但必须同时设置`Secure`属性。默认值是`None`。需要注意的是，这个属性在旧版本的浏览器中不被支持。 |
| `navigator`       | 一个包含用户代理（User Agent）信息的对象。可以使用`navigator.userAgent`属性获取用户代理字符串。用户代理字符串中包含了浏览器类型、版本号、操作系统类型等信息，可以用于检测用户浏览器类型和版本。 |

1. 读取cookie：

   ```js
   var cookieValue = document.cookie;
   ```

   这个方法将返回所有cookie的字符串，多个cookie之间用分号加空格（"; ")分隔。

2. 写入cookie：

   ```js
   document.cookie = "cookieName=cookieValue; expires=expiryDate; path=pathValue";
   ```

   在这个方法中，cookieName是cookie的名称，cookieValue是cookie的值。expires是cookie的过期时间（以UTC格式的字符串表示），path是cookie的路径。expires和path是可选的参数。

   例如，以下代码将一个名为 `username` 的cookie设置为 `John`，过期时间为一天后，路径为整个网站：

   ```js
   var expiryDate = new Date();
   expiryDate.setTime(expiryDate.getTime() + (24 * 60 * 60 * 1000));
   document.cookie = "username=John; expires=" + expiryDate.toUTCString() + "; path=/";
   ```

3. 删除cookie：

   ```js
   document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=pathValue;";
   ```

   在这个方法中，cookieName是要删除的cookie的名称，expires是过去的时间（以UTC格式的字符串表示），path是cookie的路径。expires和path是必需的参数。

   例如，以下代码将名为 `username` 的cookie删除：

   ```js
   document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   ```

需要注意的是，cookie的值和名称不能包含空格、分号或逗号等特殊字符，需要进行编码。同时，cookie的数量和大小也是有限制的，过多或过大的cookie会影响性能和浏览器的稳定性。



## 四、如何使用JavaScript实现页面的自动刷新？

可以使用JavaScript中的 `location` 对象来实现页面的自动刷新。具体方法如下：

```js
// 自动刷新页面
function refreshPage() {
  location.reload();
}

// 设置自动刷新时间间隔（单位：毫秒）
var refreshInterval = 5000; // 5秒钟

// 每隔指定时间间隔自动刷新页面
setInterval(refreshPage, refreshInterval);
```

使用 `location.reload()` 方法来刷新页面，使用 `setInterval()` 方法来设置自动刷新的时间间隔。

需要注意的是，自动刷新页面可能会影响用户体验，因此在使用时应该谨慎考虑。建议在必要的情况下才使用自动刷新功能，并且要注意设置合适的刷新时间间隔。



如何使用JavaScript控制浏览器的下载功能？





## 五、如何使用JavaScript控制浏览器的下载功能？

可以使用JavaScript中的 `Blob` 和 `URL` 对象来控制浏览器的下载功能。具体方法如下：

```js
// 创建要下载的数据（这里以字符串为例）
var data = "要下载的数据";

// 创建Blob对象
var blob = new Blob([data], {type: "text/plain;charset=utf-8"});

// 创建URL对象
var url = URL.createObjectURL(blob);

// 创建a标签
var link = document.createElement("a");
link.href = url;
link.download = "文件名.txt"; // 设置下载文件的名称

// 将a标签添加到页面中
document.body.appendChild(link);

// 触发点击事件，开始下载
link.click();

// 释放URL对象
URL.revokeObjectURL(url);
```

使用 `Blob` 对象来创建要下载的数据，使用 `URL.createObjectURL()` 方法来创建URL对象，使用 `a` 标签来触发下载操作，使用 `URL.revokeObjectURL()` 方法来释放URL对象。

需要注意的是，下载操作需要用户授权，因此在使用时应该谨慎考虑用户体验，同时还应该注意浏览器对下载操作的安全限制，例如某些浏览器可能会禁止自动触发下载操作。















