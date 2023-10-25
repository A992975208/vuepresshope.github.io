import{_ as e,r as p,o as l,c as o,f as i,d as n,e as a,b as t,a as c}from"./app-1631cab8.js";const r={},u=n("h1",{id:"lb-element-table-基于-element-ui-tabel-封装的表格组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lb-element-table-基于-element-ui-tabel-封装的表格组件","aria-hidden":"true"},"#"),a(" lb-element-table 基于 Element UI Tabel 封装的表格组件")],-1),d=n("p",null,[a("由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件，"),n("br"),a(" 方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！")],-1),k=n("h2",{id:"github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),a(" Github")],-1),v={href:"https://github.com/liub1934/lb-element-table",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"更多示例及参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#更多示例及参考","aria-hidden":"true"},"#"),a(" 更多示例及参考")],-1),m={href:"https://github.liubing.me/lb-element-table/zh/guide/",target:"_blank",rel:"noopener noreferrer"},g=c(`<h2 id="简单示例参考" tabindex="-1"><a class="header-anchor" href="#简单示例参考" aria-hidden="true">#</a> 简单示例参考</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lb-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData.column<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData.data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lb-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;日期&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;姓名&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;地址&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-02&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王小虎1&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;上海市普陀区金沙江路 1518 弄&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-02&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王小虎2&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;上海市普陀区金沙江路 1518 弄&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-02&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王小虎3&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;上海市普陀区金沙江路 1518 弄&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><figure><img src="https://image.liubing.me/2019/12/26/c1530a5da8b76.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,4);function h(y,_){const s=p("ExternalLinkIcon");return l(),o("div",null,[u,d,i(" more "),k,n("p",null,[n("a",v,[a("点击前往"),t(s)])]),b,n("p",null,[n("a",m,[a("点击前往"),t(s)])]),g])}const x=e(r,[["render",h],["__file","lb-element-table.html.vue"]]);export{x as default};
