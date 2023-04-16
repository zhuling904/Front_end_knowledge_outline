# 文章

[详细总结](https://blog.csdn.net/m0_55221239/article/details/115313923)



# 补充

## 一、js中的类型总结

### 1.数据类型

| 类型                 | 描述                                                   | 例子                                      |
| -------------------- | ------------------------------------------------------ | ----------------------------------------- |
| **原始类型**         |                                                        |                                           |
| 数字（Number）       | 表示数字，可以是整数或浮点数。                         | 42, 3.14                                  |
| 字符串（String）     | 表示文本字符串。                                       | "Hello, World!"                           |
| 布尔（Boolean）      | 表示真或假。                                           | true, false                               |
| undefined            | 表示变量未定义。                                       | let x;                                    |
| null                 | 表示变量没有值。                                       | let y = null;                             |
| Symbol               | 表示独一无二的值，用于创建对象的唯一标识符。           | const mySymbol = Symbol();                |
|                      |                                                        |                                           |
| **引用类型**         |                                                        |                                           |
| 对象（Object）       | 表示复杂数据结构，可以包含多个属性和方法。             | const person = { name: "John", age: 30 }; |
| 数组（Array）        | 是一种特殊的对象，可以存储多个值，并使用索引访问它们。 | const numbers = [1, 2, 3];                |
| 函数（Function）     | 是一种可执行的对象，可以包含代码块并接受参数。         | function add(a, b) { return a + b; }      |
| 日期（Date）         | 表示日期和时间。                                       | const today = new Date();                 |
| 正则表达式（RegExp） | 用于匹配字符串的模式。                                 | const regex = /[a-z]+/;                   |

引用类型与原始类型的主要区别在于，原始类型的值是简单的数据，而引用类型的值是对象，它们可以包含多个值。引用类型的值保存在堆内存中，而原始类型的值则保存在栈内存中。此外，引用类型的值是可变的，而原始类型的值是不可变的。



## 二、判断JS的的数据类型

| 方法                             | 优点                                           | 缺点                                                     |
| -------------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| typeof                           | 简单易用，可以快速判断大多数变量类型           | 不能准确判断null和数组类型，对于对象类型只能区分为object |
| instanceof                       | 可以准确判断对象的类型，支持自定义类型         | 不能判断基本类型的数据，不能准确判断null的类型           |
| Object.prototype.toString.call() | 可以准确判断大多数变量类型，包括null和数组类型 | 写起来稍微麻烦一些                                       |
| isNaN()                          | 可以准确判断变量是否为NaN                      | 不能区分其他类型                                         |
| Array.isArray()                  | 可以准确判断变量是否为数组类型                 | 不能区分其他类型                                         |
| typeof + instanceof              | 可以结合使用，提高判断准确度                   | 代码稍微复杂一些                                         |
| Symbol类型                       | 可以用来标识某个变量的类型，可以自定义         | 需要使用ES6以上的版本                                    |

```js
typeof "hello"  // "string"
typeof 123  // "number"
typeof true  // "boolean"
typeof undefined  // "undefined"
typeof null  // "object"
typeof []  // "object"
typeof {}  // "object"
typeof function(){}  // "function"

const mySymbol = Symbol("mySymbol");
console.log(typeof mySymbol);  // "symbol"
```



```js
const obj = {};
console.log(obj instanceof Object);  // true

class MyClass {}
const myObj = new MyClass();
console.log(myObj instanceof MyClass);  // true

```



```js
Object.prototype.toString.call("hello");  // "[object String]"
Object.prototype.toString.call(123);  // "[object Number]"
Object.prototype.toString.call(true);  // "[object Boolean]"
Object.prototype.toString.call(undefined);  // "[object Undefined]"
Object.prototype.toString.call(null);  // "[object Null]"
Object.prototype.toString.call([]);  // "[object Array]"
Object.prototype.toString.call({});  // "[object Object]"
Object.prototype.toString.call(function(){});  // "[object Function]"
```



```js
isNaN(NaN);  // true
isNaN(123);  // false
isNaN("hello");  // true
```



```js
Array.isArray([]);  // true
Array.isArray({});  // false
```



```js
const arr = [];
console.log(typeof arr === "object" && arr instanceof Array);  // true

const num = 123;
console.log(typeof num === "number" && !(num instanceof Array));  // true
```

