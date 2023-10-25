---
title: react
date: 2023-07-31 13:33:29
categories:
  - foo
tags:
  - 
---
### 闭包
闭包的应用场景防抖与节流
防抖:当持续触发某种事件时，一定时间没有执行该事件，处理函数才会调用。
节流：当持续触发某种事件时，在一定时间范围内，限定执行处理函数的次数。

### 闭包的作用有两种：

将函数需要用到的变量在函数作用域内声明，避免全局污染
将函数内部的变量给外部作用域开放一个访问渠道(将变量设置为私有变量)

### 闭包的优点：

1.可以读取函数内部的变量。

2.让局部变量始终保存到内存中。

### 闭包的缺点：

和它的优点一样，有时候常驻内存是好事，但是也是坏事。在早期计算机内存很小，如果出现太多的常驻内存变量就导致内存泄漏，怎样解决这个问题呢？只需要在使用过这个变量之后给它赋值null就可以将内存释放掉。

### Es6新特性

1.let和const

2.symbol

3.字符串新方法

```js
includes()判断字符串是否包含参数字符串，返回boolean值。
startsWith() / endsWith()，判断字符串是否以参数字符串开头或结尾。返回boolean值。这两个方法可以有第二个参数，一个数字，表示开始查找的位置。

let str = 'blue,red,orange,white';

str.includes('blue');//true
str.startsWith('blue');//true
str.endsWith('blue');//false

```

4.`repeat()`方法按指定次数返回一个新的字符串。

```js
console.log('hello'.repeat(2));   //'hellohello'
```

5.对象解构

```js
let obj = { 
	name: "ren", 
	age: 12, 
	sex: "male" 
};

let { name, age, sex } = obj;
console.log(name, age, sex); //'ren' 12 'male'

let { name: myName, age: myAge, sex: mySex } = obj; //自定义变量名
console.log(myName, myAge, mySex); //'ren' 12 'male'
```

6. Map和Set

```js
Map和Set属于es6新增加的对象
1.Map对象用于保存键值对，任何值JavaScript支持的值都可以作为一个键（key）或者一个值（value）。
与对象不同的是
let myMap = new Map([['name','ren'],['age',12]]);
console.log(myMap);  //{'name'=>'ren','age'=>12}

myMap.set('sex','male');
console.log(myMap);  //{'name'=>'ren','age'=>12,'sex'=>'male'}
console.log(myMap.size);  //3

myMap.get('name');  //'ren'
myMap.has('age');  //true
myMap.delete('age');  //true
myMap.has('age');  //false
myMap.get('age');  //undefined



2.Set对象和Map对象类似，但它存储不是键值对。类似数组，但它的每个元素都是唯一的。
let mySet = new Set([1,2,3]);//里面要传一个数组，否则会报错
console.log(mySet);  //{1,2,3}

mySet.add(4);
console.log(mySet);  //{1,2,3,4}

mySet.delete(1);  //true
mySet.has(1);  //false
console.log(mySet);  //{2,3,4}

利用Set对象唯一性的特点，可以轻松实现数组的去重
let arr = [1,1,2,3,4,4];

let mySet = new Set(arr);

let newArr = Array.from(mySet);
console.log(newArr);  //[1,2,3,4]

```

7.数组的新方法

```js
Array.from()方法可以将可迭代对象转换为新的数组。
let arr = [1, 2, 3];
let obj = {
    double(n) {
        return n * 2;
    }
}
console.log(Array.from(arr, function (n){
    return this.double(n);
}, obj)); // [2, 4, 6]

includes()方法------是查看数组中是否存在这个元素，存在就返回true,不存在就返回false
let arr = [1,33,44,22,6,9]
let ary = arr.includes(22)
console.log(ary)


map()方法-----要利用原数组经过运算后的数组，或者从对象数组中拿某个属性
filter()方法------是将符合挑选的筛选出来成为一个新数组，新数组不会影响旧数组。
<script>
	let arr = [1, 33, 44, 2, 6, 9];

	let newarr1 = arr.filter((v) => v > 10); //newarr1-------[33, 44]
	let newarr2 = arr.filter((v) => v * 2);  //newarr2-------[1, 33, 44, 2, 6, 9]

	let newarr3 = arr.map((v) => v > 10);    //newarr3-------[false, true, true, false, false, false]
	let newarr4 = arr.map((v) => v * 2);     //newarr4-------  [2, 66, 88, 4, 12, 18]
</script>


some()方法------找到一个符合条件的就返回true,所有都不符合返回false。
every()方法------数组所有值都符合条件才会返回true,有一个不符合返回false。
let arr = [1,2,3,4,6,11]

let newarr = arr.some(function(v){
  return v > 10
})
console.log(newarr) //true

let newarr2 = arr.every(function(v){
  return v > 10
})
console.log(newarr2) //false

```

8. object的新方法

   ```js
   在 ES6 中，添加了Object.is()、Object.assign()、Object.keys()、Object.values()、Object.entries()等方法。
   
   
   Object.keys() 返回对象所有属性
   Object.values() 返回对象所有属性值
   Object.entries() 返回多个数组，每个数组是 key–value
   <script>
   	let person = {
   		name: "admin",
   		age: 12,
   		language: ["java", "js", "css"],
   	};
   	console.log(Object.keys(person)); //[ 'name', 'age', 'language' ]
   	
   	console.log(Object.values(person)); //[ 'admin', 12, [ 'java', 'js', 'css' ] ]
   	
   	console.log(Object.entries(person));    /* [
   	                                                     ["name", "admin"],
   	                                                     ["age", 12],
   	                                                     ["language", ["java", "js", "css"]],
   	                                                 ]; */
   </script>
   
   ```

   9.…(对象扩展符)  ===> 深拷贝

   ```js
   <script>
   	let person={
   		name: "admin",
   		age: 12,
   		wife:"迪丽热巴"
   	}
   	
   	let person2={...person}
   	
   	console.log(person2===person);//false
   	console.log(person2);//{name: 'admin', age: 12, wife: "迪丽热巴"}
   </script>
   
   例子1
   let obj1 = { a: 1, b: 2};
   let obj2 = { ...obj1, b: '2-edited'};
   console.log(obj1); // {a: 1, b: 2}
   console.log(obj2); //  {a: 1, b: "2-edited"}
   
   上面这个例子扩展运算符拷贝的对象是基础数据类型，因此对obj2的修改并不会影响obj1，如果改成这样：
   
   let obj1 = { a: 1, b: 2, c: {nickName: 'd'}};
   let obj2 = { ...obj1};
   obj2.c.nickName = 'd-edited';
   console.log(obj1); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
   console.log(obj2); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
   这里可以看到，对obj2的修改影响到了被拷贝对象obj1，原因上面已经说了，因为obj1中的对象c是一个引用数据类型，拷贝的时候拷贝的是对象的引用。
   ```

   10.箭头函数

   箭头函数实现了一种更加简洁的书写方式。箭头函数内部没有`arguments`，也没有`prototype`属性，所以不能用`new`关键字调用箭头函数。

   ```js
   let add = (a,b) => {
       return a+b;
   }
   let print = () => {
       console.log('hi');
   }
   let fn = a => a * a;
   //当只有一个参数时，括号可以省略，函数体只有单行return语句时，大括号也可以省略。
   箭头函数和普通函数最大的区别在于其内部this永远指向其父级对象的this。(重点)
    var age = 123;
    let obj = {
        age:456,
        say:() => {
            console.log(this.age);  //this指向window
        }
    };
   obj.say();   //123
   
   
   ```

   11.可选链 `?.`

   12.应用场景

   ```js
   防抖：
   
   1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源
   2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
   节流：
   
   1.鼠标不断点击触发，mousedown(单位时间内只触发一次)
   2.监听滚动事件，比如是否滑到底部自动加载更多
   
   防抖和节流相同点：
   1.防抖和节流都是为了阻止操作高频触发，从而浪费性能。
   
   防抖和节流区别：
   1.防抖是触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。适用于可以多次触发但触发只生效最后一次的场景
   2.节流是高频事件触发，但在n秒内只会执行一次，如果n秒内触发多次函数，只有一次生效，节流会稀释函数的执行频率。
   
   
   ```



### 在浏览器输入URL后回车，经历了哪些过程？

一、DNS的[域名解析](https://so.csdn.net/so/search?q=域名解析&spm=1001.2101.3001.7020)
二、建立tcp连接
三、发送一个http请求
四、服务器处理相关请求
五、返回响应的结果
六、关闭tcp连接
七、浏览器解析HTML
八、浏览器进行布局渲染

bind、call、apply的作用

```js
fn.call(thisArg, arg1, arg2, arg3, ...)
        
调用fn.call时会将fn中的this指向修改为传入的第一个参数thisArg；将后面的参数传入给fn,并立即执行函数fn。        
let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。


    let obj1 = {
        name: "lihua",
        age: 30
    }
    // obj1.sayHello(); // Uncaught TypeError: obj1.sayHello is not a function
    obj.sayHello.call(obj1, '设计师', '画画'); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。


apply(thisArg, [argsArr])
fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。
let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。


    let obj1 = {
        name: "lihua",
        age: 30
    }
    
    obj.sayHello.apply(obj1, ['设计师', '画画']); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。


bind(thisArg, arg1, arg2, arg3, ...)
fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。需要调用才会执行:bind(thisArg, arg1, arg2, arg3, ...)()。bind的传参和call相同。
    let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    // obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: "lihua",
        age: 30
    }
    
    obj.sayHello.bind(obj1, '设计师', '画画'); // 无输出结果
    obj.sayHello.bind(obj1, '设计师', '画画')(); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。


bind、call、apply的区别
1、相同点
三个都是用于改变this指向；
接收的第一个参数都是this要指向的对象；
都可以利用后续参数传参。
2、不同点
call和bind传参相同，多个参数依次传入的；
apply只有两个参数，第二个参数为数组；
call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。
```

