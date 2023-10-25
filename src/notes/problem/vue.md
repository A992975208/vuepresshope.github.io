---
title: vue
date: 2023-07-31 13:33:14
categories:
  - foo
tags:
  - 
---

### Vue生态

1.说说你对 Vue的理解，有何优缺点?

```js
优点：
1、vue两大特点：响应式编程、组件化。

2、vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、数据和结构的分离、虚拟DOM、运行速度快。

3、vue是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和dom，这样大大加快了访问速度和提升用户体验。而且他的第三方ui库很多节省开发时间。

4、响应式的数据绑定

4.1、这也就是vue.js最大的优点，通过MVVM思想实现数据的双向绑定，让开发者不用再操作dom对象，有更多的时间去思考业务逻辑

5、组件化开发

6、VirtualDOM

```

2.Vue 和 React 有什么不同?

```js

```

3.什么是虚拟 DOM?

```js
虚拟dom就是一个js对象 比如一个元素对象tag、children、props这些属性。通过vue的render函数把虚拟dom转化为真实dom
，再通过appendChild把真实dom插入到html页面。
{
    sel: 'div',// 表述标签，如p、sapn
    data: {},
    children: undefined,
    text: 'virtual dom', //标签内的文本，
    ele: undefined,
    key: undefined
}

```

4.描述下 vue的diff算法

```js
diff的过程就是调用名为patch的函数，比较新旧节点
可以通过Snabbdom实现diff算法

判断是不是同一个节点，如果不是同一个节点就暴力删除旧节点替换新节点

如果是同一个节点又分为新旧节点是不是含有子节点：

    1.如果新节点是一个文本节点直接更新文本为新节点的内容

    2.如果新节点有旧节点也有(diff算法核心)
        新前旧前 指针都+1
        新前旧后 新节点指针++ 旧节点指针--
        新后旧前 新节点指针-- 旧节点指针++
        新后旧后 新节点指针-- 旧节点指针--

    3.如果新节点有子节点旧节点没有子节点，就说明所有的节点都是最新的，
    就直接创建出所有的节点插入到父节点

```

5.watch 怎么深度监听对象变化

```js
    deep:true
```

6.删除数组用 delete 和 Vue.delete 有什么区别?

```js

```

7.watch 和 computed 有什么区别?

```js
1.功能上：computed是计算属性，watch是监听一个值的变化，然后执行对应的回调。

2.是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。

3.是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。

4.computed默认第一次加载的时候就开始监听；watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate属性，设置为true（immediate:true）

5.使用场景：computed----当一个属性受多个属性影响的时候，使用computed-----购物车商品结算。watch–当一条数据影响多条数据的时候，使用watch-----搜索框.

```

8.v-for 没有 key 会发生什么问题?

```js
key属性主要用在Vue的虚拟DOM算法，在新旧节点对比时辨识VNodes；
```

9.谈谈 Vue双向绑定原理

```js
vue数据的双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。
其核心就是通过Object.defineProperty()方法设置set和get函数来实现数据的劫持，在数据变化时发布消息给订阅者，触发相应的监听回调。
var obj = {}
Object.defineProperty(obj,'prototypeName',{
	get: function() { 
		console.log("调用了get") 
	},
	set: function(newValue) {
		console.log("调用了set,新值是"+newValue)  
	}
})

obj.prototypeName    // 调用了get
obj.prototypeName = 'hello'   // 调用了set,新值是hello


```

10.v-model 是什么? 有什么用呢?

```js

```

11.在 vue项日中如何引入第三方库?有哪些具体操作方法?

```js

```

12.Vue3.0 里为什么要用 Proxy API 代 defineProperty API?

```js

```

13.Vue3.0 编译做了哪些优化?

```js

```

14.Vue3.0 新特性 -- Composition API 与 React.js 中 Hooks 的异同点15.Vue3.0 是如何变得更快的? dom diff 算法有何优化?

```js

```

15.vue 要做权限管理该怎么做?如果控制到按钮级别的权限怎么做?

```js
接口权限
按钮权限
import Vue from 'vue'
/**权限指令**/
const has = Vue.directive('has', {
    bind: function (el, binding, vnode) {
        // 获取页面按钮权限
        let btnPermissionsArr = [];
        if(binding.value){
            // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。
            btnPermissionsArr = Array.of(binding.value);
        }else{
            // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
            btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
        }
        if (!Vue.prototype.$_has(btnPermissionsArr)) {
            el.parentNode.removeChild(el);
        }
    }
});
菜单权限
路由权限
1.登录后，获取用户的权限信息，然后筛选有权限访问的路由，在全局路由守卫里进行调用addRoutes添加路由

```

16.vue在created 和 mounted 这两个生命周期中请求数据有什么区别呢?

```js

```

17.说说你对 Proxy 的理解。

```js
Proxy 对象用于定义或修改某些操作的自定义行为，可以在外界对目标对象进行访问前，对外界的访问进行改写。

proxy拦截get和set操作

let handler = {
    get: function(target, key, receiver) {
        console.log(`getter ${key}!`)
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
        console.log(`setter ${key}=${value}`)
        return Reflect.set(target, key, value, receiver)
    }
}
var obj = new Proxy({}, handler)
obj.a = 1          // setter a=1
obj.b = undefined  // setter b=undefined
console.log(obj.a, obj.b)
// getter a!
// getter b!
// 1 undefined
console.log('c' in obj, obj.c)
// getter c!
// false undefined
```
