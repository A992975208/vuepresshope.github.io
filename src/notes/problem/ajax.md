---
title: ajax
date: 2023-08-05 18:33:24
categories:
  - foo
tags:
  - 
---
#### ajax 的五个步骤
1、创建XMLHttpRequest对象
```js
var xmlHttpRequest = new XMLHttpRequest();
```
2、创建http请求
```js
XMLHttpRequest.open(method,URL,flag,name,password);

method：该参数用于指定HTTP的请求方法，一共有get、post、head、put、delete五种方法，常用的方法为get和post。

URL：该参数用于指定HTTP请求的URL地址，可以是绝对URL，也可以是相对URL。

flag：该参数为可选，参数值为布尔型。该参数用于指定是否使用异步方式。true表示异步、false表示同步，默认为true。
```
3、设置响应HTTP请求状态变化的函数
```js
1.未初始化值 XMLHttpRequest对象的readyState的值为0
2.初始化状态 XMLHttpRequest对象的readyState的值为1
3.发送数据状态 XMLHttpRequest对象的readyState的值为2
4.接收数据状态 XMLHttpRequest对象的readyState的值为3
5.完成状态 XMLHttpRequest对象的readyState的值为4
```
4、设置获取服务器返回数据的语句
```js
 if(xmlHttpRequst.status == 200) {
    document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
    //document.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
 }
```
5、发送http请求
```js
XMLHttpRequest.send(data);
```
6、完整的ajax实例
```js
<script language="javascript" type="text/javascript">   
    function ajaxHttpRequestFunc(){
		let xmlHttpRequest;  // 创建XMLHttpRequest对象，即一个用于保存异步调用对象的变量
		if(window.ActiveXObject){ // IE浏览器的创建方式
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(window.XMLHttpRequest){ // Netscape浏览器中的创建方式
            xmlHttpRequest = new XMLHttpRequest();
        }
		xmlHttpRequest.onreadystatechange=function(){ // 设置响应http请求状态变化的事件
            console.log('请求过程', xmlHttpRequest.readyState);
			if(xmlHttpRequest.readyState == 4){ // 判断异步调用是否成功,若成功开始局部更新数据
				console.log('状态码为', xmlHttpRequest.status);
				if(xmlHttpRequest.status == 200) {
					console.log('异步调用返回的数据为：', xmlHttpRequest .responseText);
					document.getElementById("myDiv").innerHTML = xmlHttpRequest .responseText; // 局部刷新数据到页面
				} else { // 如果异步调用未成功,弹出警告框,并显示错误状态码
					alert("error:HTTP状态码为:"+xmlHttpRequest.status);
				}
			}
		}
		xmlHttpRequest.open("GET","https://www.runoob.com/try/ajax/ajax_info.txt",true); // 创建http请求，并指定请求得方法（get）、url（https://www.runoob.com/try/ajax/ajax_info.txt）以及验证信息
		xmlHttpRequest.send(null); // 发送请求
    }
</script>
```


