import{_ as n,o as s,c as a,a as t}from"./app-1631cab8.js";const p={},e=t(`<h4 id="ajax-的五个步骤" tabindex="-1"><a class="header-anchor" href="#ajax-的五个步骤" aria-hidden="true">#</a> ajax 的五个步骤</h4><p>1、创建XMLHttpRequest对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xmlHttpRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、创建http请求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>XMLHttpRequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span><span class="token constant">URL</span><span class="token punctuation">,</span>flag<span class="token punctuation">,</span>name<span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>

method：该参数用于指定<span class="token constant">HTTP</span>的请求方法，一共有<span class="token keyword">get</span>、post、head、put、<span class="token keyword">delete</span>五种方法，常用的方法为<span class="token keyword">get</span>和post。

<span class="token constant">URL</span>：该参数用于指定<span class="token constant">HTTP</span>请求的<span class="token constant">URL</span>地址，可以是绝对<span class="token constant">URL</span>，也可以是相对<span class="token constant">URL</span>。

flag：该参数为可选，参数值为布尔型。该参数用于指定是否使用异步方式。<span class="token boolean">true</span>表示异步、<span class="token boolean">false</span>表示同步，默认为<span class="token boolean">true</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、设置响应HTTP请求状态变化的函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>未初始化值 XMLHttpRequest对象的readyState的值为<span class="token number">0</span>
<span class="token number">2.</span>初始化状态 XMLHttpRequest对象的readyState的值为<span class="token number">1</span>
<span class="token number">3.</span>发送数据状态 XMLHttpRequest对象的readyState的值为<span class="token number">2</span>
<span class="token number">4.</span>接收数据状态 XMLHttpRequest对象的readyState的值为<span class="token number">3</span>
<span class="token number">5.</span>完成状态 XMLHttpRequest对象的readyState的值为<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、设置获取服务器返回数据的语句</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">if</span><span class="token punctuation">(</span>xmlHttpRequst<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>xmlHttpRequest<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将返回结果以字符串形式输出</span>
    <span class="token comment">//document.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、发送http请求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>XMLHttpRequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、完整的ajax实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script language<span class="token operator">=</span><span class="token string">&quot;javascript&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>   
    <span class="token keyword">function</span> <span class="token function">ajaxHttpRequestFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> xmlHttpRequest<span class="token punctuation">;</span>  <span class="token comment">// 创建XMLHttpRequest对象，即一个用于保存异步调用对象的变量</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// IE浏览器的创建方式</span>
            xmlHttpRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// Netscape浏览器中的创建方式</span>
            xmlHttpRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		xmlHttpRequest<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 设置响应http请求状态变化的事件</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请求过程&#39;</span><span class="token punctuation">,</span> xmlHttpRequest<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>xmlHttpRequest<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 判断异步调用是否成功,若成功开始局部更新数据</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;状态码为&#39;</span><span class="token punctuation">,</span> xmlHttpRequest<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>xmlHttpRequest<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;异步调用返回的数据为：&#39;</span><span class="token punctuation">,</span> xmlHttpRequest <span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
					document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myDiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xmlHttpRequest <span class="token punctuation">.</span>responseText<span class="token punctuation">;</span> <span class="token comment">// 局部刷新数据到页面</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 如果异步调用未成功,弹出警告框,并显示错误状态码</span>
					<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;error:HTTP状态码为:&quot;</span><span class="token operator">+</span>xmlHttpRequest<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		xmlHttpRequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;https://www.runoob.com/try/ajax/ajax_info.txt&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建http请求，并指定请求得方法（get）、url（https://www.runoob.com/try/ajax/ajax_info.txt）以及验证信息</span>
		xmlHttpRequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发送请求</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","ajax.html.vue"]]);export{k as default};
