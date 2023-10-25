import{_ as n,o as s,c as a,a as e}from"./app-4937edf6.js";const t={},p=e(`<h3 id="vue生态" tabindex="-1"><a class="header-anchor" href="#vue生态" aria-hidden="true">#</a> Vue生态</h3><p>1.说说你对 Vue的理解，有何优缺点?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>优点：
<span class="token number">1</span>、vue两大特点：响应式编程、组件化。

<span class="token number">2</span>、vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、数据和结构的分离、虚拟<span class="token constant">DOM</span>、运行速度快。

<span class="token number">3</span>、vue是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和dom，这样大大加快了访问速度和提升用户体验。而且他的第三方ui库很多节省开发时间。

<span class="token number">4</span>、响应式的数据绑定

<span class="token number">4.1</span>、这也就是vue<span class="token punctuation">.</span>js最大的优点，通过<span class="token constant">MVVM</span>思想实现数据的双向绑定，让开发者不用再操作dom对象，有更多的时间去思考业务逻辑

<span class="token number">5</span>、组件化开发

<span class="token number">6</span>、VirtualDOM

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Vue 和 React 有什么不同?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.什么是虚拟 DOM?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>虚拟dom就是一个js对象 比如一个元素对象tag、children、props这些属性。通过vue的render函数把虚拟dom转化为真实dom
，再通过appendChild把真实dom插入到html页面。
<span class="token punctuation">{</span>
    <span class="token literal-property property">sel</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token comment">// 表述标签，如p、sapn</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;virtual dom&#39;</span><span class="token punctuation">,</span> <span class="token comment">//标签内的文本，</span>
    <span class="token literal-property property">ele</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.描述下 vue的diff算法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>diff的过程就是调用名为patch的函数，比较新旧节点
可以通过Snabbdom实现diff算法

判断是不是同一个节点，如果不是同一个节点就暴力删除旧节点替换新节点

如果是同一个节点又分为新旧节点是不是含有子节点：

    <span class="token number">1.</span>如果新节点是一个文本节点直接更新文本为新节点的内容

    <span class="token number">2.</span><span class="token function">如果新节点有旧节点也有</span><span class="token punctuation">(</span>diff算法核心<span class="token punctuation">)</span>
        新前旧前 指针都<span class="token operator">+</span><span class="token number">1</span>
        新前旧后 新节点指针<span class="token operator">++</span> 旧节点指针<span class="token operator">--</span>
        新后旧前 新节点指针<span class="token operator">--</span> 旧节点指针<span class="token operator">++</span>
        新后旧后 新节点指针<span class="token operator">--</span> 旧节点指针<span class="token operator">--</span>

    <span class="token number">3.</span>如果新节点有子节点旧节点没有子节点，就说明所有的节点都是最新的，
    就直接创建出所有的节点插入到父节点

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.watch 怎么深度监听对象变化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.删除数组用 delete 和 Vue.delete 有什么区别?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.watch 和 computed 有什么区别?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>功能上：computed是计算属性，watch是监听一个值的变化，然后执行对应的回调。

<span class="token number">2.</span>是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。

<span class="token number">3.</span>是否调用<span class="token keyword">return</span>：computed中的函数必须要用<span class="token keyword">return</span>返回，watch中的函数不是必须要用<span class="token keyword">return</span>。

<span class="token number">4</span><span class="token punctuation">.</span>computed默认第一次加载的时候就开始监听；watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate属性，设置为<span class="token boolean">true</span><span class="token literal-property property">（immediate</span><span class="token operator">:</span><span class="token boolean">true</span>）

<span class="token number">5.</span>使用场景：computed<span class="token operator">--</span><span class="token operator">--</span>当一个属性受多个属性影响的时候，使用computed<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>购物车商品结算。watch–当一条数据影响多条数据的时候，使用watch<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>搜索框<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.v-for 没有 key 会发生什么问题?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>key属性主要用在Vue的虚拟<span class="token constant">DOM</span>算法，在新旧节点对比时辨识VNodes；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9.谈谈 Vue双向绑定原理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vue数据的双向绑定是通过数据劫持结合发布者<span class="token operator">-</span>订阅者模式的方式来实现的。
其核心就是通过Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法设置<span class="token keyword">set</span>和<span class="token keyword">get</span>函数来实现数据的劫持，在数据变化时发布消息给订阅者，触发相应的监听回调。
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;prototypeName&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;调用了get&quot;</span><span class="token punctuation">)</span> 
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;调用了set,新值是&quot;</span><span class="token operator">+</span>newValue<span class="token punctuation">)</span>  
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>prototypeName    <span class="token comment">// 调用了get</span>
obj<span class="token punctuation">.</span>prototypeName <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>   <span class="token comment">// 调用了set,新值是hello</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.v-model 是什么? 有什么用呢?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>11.在 vue项日中如何引入第三方库?有哪些具体操作方法?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12.Vue3.0 里为什么要用 Proxy API 代 defineProperty API?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>13.Vue3.0 编译做了哪些优化?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>14.Vue3.0 新特性 -- Composition API 与 React.js 中 Hooks 的异同点15.Vue3.0 是如何变得更快的? dom diff 算法有何优化?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>15.vue 要做权限管理该怎么做?如果控制到按钮级别的权限怎么做?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>接口权限
按钮权限
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token doc-comment comment">/**权限指令**/</span>
<span class="token keyword">const</span> has <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;has&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">bind</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取页面按钮权限</span>
        <span class="token keyword">let</span> btnPermissionsArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。</span>
            btnPermissionsArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。</span>
            btnPermissionsArr <span class="token operator">=</span> vnode<span class="token punctuation">.</span>context<span class="token punctuation">.</span>$route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>btnPermissions<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">$_has</span><span class="token punctuation">(</span>btnPermissionsArr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
菜单权限
路由权限
<span class="token number">1.</span>登录后，获取用户的权限信息，然后筛选有权限访问的路由，在全局路由守卫里进行调用addRoutes添加路由

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16.vue在created 和 mounted 这两个生命周期中请求数据有什么区别呢?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>17.说说你对 Proxy 的理解。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Proxy 对象用于定义或修改某些操作的自定义行为，可以在外界对目标对象进行访问前，对外界的访问进行改写。

proxy拦截<span class="token keyword">get</span>和<span class="token keyword">set</span>操作

<span class="token keyword">let</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setter </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>          <span class="token comment">// setter a=1</span>
obj<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token keyword">undefined</span>  <span class="token comment">// setter b=undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">,</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
<span class="token comment">// getter a!</span>
<span class="token comment">// getter b!</span>
<span class="token comment">// 1 undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">,</span> obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
<span class="token comment">// getter c!</span>
<span class="token comment">// false undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","vue.html.vue"]]);export{r as default};
