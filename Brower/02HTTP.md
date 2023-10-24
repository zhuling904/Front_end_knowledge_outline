# HTTP

# 1.HTTP的几种请求方法用途

## GET

方法：

- 用途：发送一个请求来获取服务器上的某一资源。
- 面试可能涉及的问题：
  1. GET方法的特点是什么？
     - GET方法是HTTP的一种请求方法，用于从服务器获取资源。
     - 它是一种幂等的方法，多次发送相同的GET请求会返回相同的结果。
  2. GET请求和POST请求的区别是什么？
     - GET请求将参数附加在URL的查询字符串中，而POST请求将参数放在请求体中。
     - GET请求的数据会显示在URL中，而POST请求的数据不会显示在URL中。
     - GET请求一般用于获取数据，而POST请求一般用于提交数据。
  3. GET请求可以有请求体吗？
     - 根据HTTP规范，GET请求不应该有请求体，参数应该通过URL的查询字符串传递。
  4. GET请求的参数如何传递？
     - GET请求的参数可以通过URL的查询字符串传递，例如：`/api/users?id=123&name=poetry`。
  5. GET请求的安全性和幂等性如何保证？
     - GET请求不会对服务器端的资源产生副作用，因此被视为安全的。
     - GET请求是幂等的，多次发送相同的GET请求不会对服务器端产生影响。

## POST

方法：

- 用途：向`URL`指定的资源提交数据或附加新的数据。
- 面试可能涉及的问题：
  1. POST方法的特点是什么？
     - POST方法是HTTP的一种请求方法，用于向服务器提交数据。
     - 它不是幂等的，多次发送相同的POST请求可能会产生不同的结果。
  2. POST请求和GET请求的区别是什么？
     - POST请求将参数放在请求体中，而GET请求将参数附加在URL的查询字符串中。
     - POST请求的数据不会显示在URL中，而GET请求的数据会显示在URL中。
     - POST请求一般用于提交数据，而GET请求一般用于获取数据。
  3. POST请求的请求体如何传递数据？
     - POST请求的数据可以通过请求体以表单形式传递，或者以JSON等格式传递。
  4. POST请求的安全性和幂等性如何保证？
     - POST请求可能对服务器端的资源产生副作用，因此被视为不安全的。
     - POST请求不是幂等的，多次发送相同的POST请求可能会对服务器端产生影响。

## PUT

- 用途：将数据发送给服务器，并将其存储在指定的URL位置。与POST方法不同的是，PUT方法指定了资源在服务器上的位置。
- 面试可能涉及的问题：
  - PUT方法的特点是什么？
    - PUT方法是HTTP的一种请求方法，用于将数据发送给服务器并存储在指定的URL位置。
    - 它是一种幂等的方法，多次发送相同的PUT请求会对服务器端产生相同的结果。
  - PUT请求和POST请求有什么区别？
    - PUT请求用于指定资源在服务器上的位置，而POST请求没有指定位置。
    - PUT请求一般用于更新或替换资源，而POST请求一般用于新增资源或提交数据。
  - PUT请求的幂等性如何保证？
    - PUT请求的幂等性保证是由服务器端实现的。
    - 服务器端应该根据请求中的资源位置来处理请求，多次发送相同的PUT请求会对该位置上的资源进行相同的更新或替换操作。

## 其他方法

- HEAD方法
  - 只请求页面的首部
- DELETE方法
  - 删除服务器上的某资源
- OPTIONS方法
  - 它用于获取当前`URL`所支持的方法。如果请求成功，会有一个`Allow`的头包含类似`“GET,POST”`这样的信息
- TRACE方法
  - `TRACE`方法被用于激发一个远程的，应用层的请求消息回路
- CONNECT方法
  - 把请求连接转换到透明的`TCP/IP`通道

# 2.HTTP状态码及其含义

- 1XX：信息状态码
  - `100 Continue` 继续，一般在发送`post`请求时，已发送了`http header`之后服务端将返回此信息，表示确认，之后发送具体参数信息
- 2XX：成功状态码
  - `200 OK` 正常返回信息
  - `201 Created` 请求成功并且服务器创建了新的资源
  - `202 Accepted` 服务器已接受请求，但尚未处理

- 3XX：重定向
  - `301 Moved Permanently` 请求的网页已永久移动到新位置。
  - `302 Found` 临时性重定向。
  - `303 See Other` 临时性重定向，且总是使用 `GET` 请求新的 `URI`。
  - `304 Not Modified` 自从上次请求后，请求的网页未修改过。

- 4XX：客户端错误
  - `400 Bad Request` 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
  - `401 Unauthorized` 请求未授权。
  - `403 Forbidden` 禁止访问。
  - `404 Not Found` 找不到如何与 `URI` 相匹配的资源。

- 5XX:服务器错误
  - `500 Internal Server Error` 最常见的服务器端错误。
  - `503 Service Unavailable` 服务器端暂时无法处理请求（可能是过载或维护）

# 3.HTTP request报文结构是怎样的

1. 首行是**Request-Line**包括：**请求方法**，**请求URI**，**协议版本**，**CRLF**
2. 首行之后是若干行**请求头**，包括**general-header**，**request-header**或者**entity-header**，每个一行以CRLF结束
3. 请求头和消息实体之间有一个**CRLF分隔**
4. 根据实际请求需要可能包含一个**消息实体** 一个请求报文例子如下

```
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

# 4.HTTP response报文结构是怎样的

- 首行是状态行包括：**HTTP版本，状态码，状态描述**，后面跟一个CRLF
- 首行之后是**若干行响应头**，包括：**通用头部，响应头部，实体头部**
- 响应头部和响应实体之间用**一个CRLF空行**分隔
- 最后是一个可能的**消息实体**

响应报文例子如下：

```
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

# 5.title与h1的区别、b与strong的区别、i与em的区别

- `title`属性用于提供元素的额外信息，通常以工具提示的形式显示。它没有语义化的意义，仅表示一个标题或描述性文本。它在SEO中没有直接影响，但可以提供更好的用户体验和辅助工具提示。
- `<h1>`是HTML中的标题元素，用于表示页面的主标题。它具有层次结构，表示文档的结构和内容。搜索引擎通常会将`<h1>`标签中的文本作为页面的主要标题，并根据其重要性进行权重分配。
- `<b>`是用于粗体显示文本的HTML元素，仅仅表示展示的效果，没有语义上的强调意义。在使用屏幕阅读器等辅助工具阅读网页时，`<b>`不会改变读取方式，仅仅呈现粗体效果。
- `<strong>`是表示文本的强调元素，具有语义化的含义，用于强调重要内容。在屏幕阅读器等辅助工具中，会以更加强调的方式读取`<strong>`标签中的文本，传达给用户更强的语气。
- `<i>`用于将文本显示为斜体，仅表示展示的效果，没有语义上的强调意义。
- `<em>`表示强调的文本，具有语义化的含义，用于强调某些内容。在屏幕阅读器等辅助工具中，会以更加强调的方式读取`<em>`标签中的文本，传达给用户更强的强调效果。

**总结：**

- `<title>`和`<h1>`在语义化和SEO方面有区别，一个用于页面标题，一个用于内容标题。
- `<b>`和`<strong>`都可以用于加粗文本，但`<strong>`具有语义化的强调效果。
- `<i>`和`<em>`都可以用于斜体文本，但`<em>`具有语义化的强调效果。

# 6.http2.0 做了哪些改进 http3.0 呢

