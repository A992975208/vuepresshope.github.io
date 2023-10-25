const n=JSON.parse('{"key":"v-4b160f0a","path":"/notes/js/debounce-throttle.html","title":"防抖节流","lang":"zh-CN","frontmatter":{"order":4,"category":["代码笔记"]},"headers":[{"level":2,"title":"防抖函数（debounce）","slug":"防抖函数-debounce","link":"#防抖函数-debounce","children":[]},{"level":2,"title":"节流函数（throttle）","slug":"节流函数-throttle","link":"#节流函数-throttle","children":[]}],"git":{"createdTime":1698238424000,"updatedTime":1698238424000,"contributors":[{"name":"”hngkkkl”","email":"2410892131@qq.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"notes/js/debounce-throttle.md","localizedDate":"2023年10月25日","excerpt":"<h1> 防抖节流</h1>\\n<figure><img src=\\"https://image.liubing.me/2021/03/25/ec6edc3e84fa6.gif\\" alt=\\"image\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image</figcaption></figure>\\n<h2> 防抖函数（debounce）</h2>\\n<p>防抖函数原理：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">fn<span class=\\"token punctuation\\">,</span> time</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> timer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span>\\n    timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> time<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};