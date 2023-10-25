import{_ as n,o as s,c as a,a as t}from"./app-1631cab8.js";const e="/assets/img-98f46502.png",p={},i=t(`<h1 id="tailwindcss的使用" tabindex="-1"><a class="header-anchor" href="#tailwindcss的使用" aria-hidden="true">#</a> tailwindcss的使用</h1><h3 id="_1-使用npn安装tailwindcss" tabindex="-1"><a class="header-anchor" href="#_1-使用npn安装tailwindcss" aria-hidden="true">#</a> 1.使用npn安装tailwindcss</h3><p>第一步安装tailwindcss<br> 安装 Tailwind CSS 并创建 tailwind.config.js 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 tailwindcss</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> tailwindcss
<span class="token comment"># 初始化会生成 tailwind.config.js 配置文件</span>
npx tailwindcss init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编辑tailwindcss.config.js配置文件<br> 添加文件到配置文件中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;./src/**/*.{vue,js,ts,jsx,tsx}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：添加Tailwindcss样式指令到css文件中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>有警告的在vscode中安装PostCSS Language Support插件</p></div><p>第四步：就可以在我们的项目中使用了</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-3xl  w-[3.23rem] border border-green-500 font-bold underline hover:font-bold flex justify-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
Hello world!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果是vscode开发需要安装Tailwind CSS IntelliSense插件更方便开发</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果是使用webstrom开发会出现报错的情况<br> 根据官网的安装步骤，Install Tailwind CSS with Vite<br> 安装完成后，在 Webstorm 中 Tailwind 始终无法自动补全，查看 Webstorm 的日志，提示报错</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>Tailwind CSS: Tailwind CSS: require() of ES Module xxx ailwind.config.js from xxxWebStormxxxplugins ailwindcssserver ailwindcss</p></div><p>解决方案：<br> 使用 cjs 修改生成的配置文件，并将 export default 写法改为 module.exports 写法<br> 把 tailwind.config.js 修改为 tailwind.config.cjs<br> tailwind.config.cjs 的内容需要改为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/**/*.{js,ts,jsx,tsx}&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 postcss.config.js 修改为 postcss.config.cjs</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到最后就可以使用tailwindcss了<br><img src="`+e+'" alt="img.png" loading="lazy"></p>',19),l=[i];function c(o,r){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","useTailwindcss.html.vue"]]);export{d as default};
