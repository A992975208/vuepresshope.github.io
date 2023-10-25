import{_ as o,r as i,o as c,c as p,d as s,e as n,b as e,f as l,a as t}from"./app-1631cab8.js";const d={},r=s("h1",{id:"uni-app-微信小程序引入-vant-weapp",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#uni-app-微信小程序引入-vant-weapp","aria-hidden":"true"},"#"),n(" uni-app 微信小程序引入 vant weapp")],-1),u=s("br",null,null,-1),v={href:"https://github.com/liub1934/uniapp-use-vant",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="下载-vant-weapp" tabindex="-1"><a class="header-anchor" href="#下载-vant-weapp" aria-hidden="true">#</a> 下载 Vant Weapp</h2><p>下载有 2 种方法：</p><p>方法 1：克隆 Vant Weapp 的仓库，运行下面的命令将仓库克隆到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/youzan/vant-weapp.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将<code>dist</code>目录复制到 uniapp 项目的<code>wxcomponents</code>目录中，<code>wxcomponents</code>和<code>components</code>同级，如果没有<code>wxcomponents</code>，自己建一个就行，<br> 修改<code>dist</code>文件夹名称为<code>vant</code>。</p><p>方法 2：通过<code>npm</code>安装 Vant Weapp，如果项目中存在<code>package.json</code>，执行下方的命令安装 Vant Weapp，如果没有，则在项目根目录使用命令<code>npm init</code>，一路回车即可，会自动生成 package.json。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vant-weapp <span class="token parameter variable">-S</span> <span class="token parameter variable">--production</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后在项目根目录<code>node_modules</code>中找到<code>@vant</code>，同上找到<code>dist</code>目录,复制到<code>wxcomponents</code>中并改名为<code>vant</code></p><p>个人更倾向与方法二，因为几个星期或者几个月后估计就不知道具体用的什么版本了。</p><h2 id="引入-vant-weapp" tabindex="-1"><a class="header-anchor" href="#引入-vant-weapp" aria-hidden="true">#</a> 引入 Vant Weapp</h2><p>找到<code>pages.json</code>，在<code>globalStyle</code>或者具体<code>page</code>的<code>style</code>中引入 Vant 的组件，<br> 如果需要全局使用该组件，可以在<code>globalStyle</code>中<code>usingComponents</code>中全局引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;van-button&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/wxcomponents/vant/button/index&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;van-grid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/wxcomponents/vant/grid/index&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;van-grid-item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/wxcomponents/vant/grid-item/index&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;van-index-bar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/wxcomponents/vant/index-bar/index&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;van-index-anchor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/wxcomponents/vant/index-anchor/index&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2020/01/17/6cd551a3f245d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>如果只需要单独在个别页面使用，可在具体页面的<code>style</code>中配置<code>usingComponents</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;path&quot;: &quot;pages/test&quot;,
  &quot;style&quot;: {
    &quot;navigationBarTitleText&quot;: &quot;测试&quot;,
    &quot;usingComponents&quot;: {
      &quot;van-button&quot;: &quot;/wxcomponents/vant/button/index&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置样式" tabindex="-1"><a class="header-anchor" href="#内置样式" aria-hidden="true">#</a> 内置样式</h2><p>Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用，如<code>van-ellipsis</code>，各种边框的 class<code>van-hairline--top</code> 。<br> 官网介绍的引入方式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 app.wxss 中引入内置样式</span>
@import <span class="token string">&quot;path/to/@vant/weapp/dist/common/index.wxss&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 uni-app 中是不存在<code>app.wxss</code>，只有经过编译后才会生成<code>app.wxss</code>，自己试了下，发现可以在<code>App.vue</code>中的<code>style</code>中引入可以正常使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style&gt;
<span class="token comment">/*每个页面公共css */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;/wxcomponents/vant/common/index.wxss&quot;</span><span class="token punctuation">;</span></span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式覆盖" tabindex="-1"><a class="header-anchor" href="#样式覆盖" aria-hidden="true">#</a> 样式覆盖</h2><p>有时候 Vant 的样式不满足现在的需求，需要对其做些简单的调整，我们不太可能直接去修改别人的源 CSS，根据官网提供的几种方案，整理了以下方法供大家参考：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;van-button type=&quot;primary&quot; block class=&quot;custom-button&quot;&gt;自定义样式覆盖按钮&lt;/van-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过定义个<code>class</code>直接进行样式覆盖</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot;&gt;
.custom-button</span> <span class="token punctuation">{</span>
  <span class="token selector">.van-button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的<code>style</code>样式中存在<code>scoped</code>，我们可以利用<code>vue</code>中的语法，加个<code>/deep/</code>进行样式覆盖，如下所示：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
/deep/ .custom-button</span> <span class="token punctuation">{</span>
  <span class="token selector">.van-button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定制主题" tabindex="-1"><a class="header-anchor" href="#定制主题" aria-hidden="true">#</a> 定制主题</h2><p>如果你对 Vant 的颜色样式不满意，可以通过官方提供的方法进行主题定制。<br> 官方的介绍：</p>`,29),b={href:"https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},k=s("br",null,null,-1),h={href:"https://caniuse.com/#feat=css-variables",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="全局定制" tabindex="-1"><a class="header-anchor" href="#全局定制" aria-hidden="true">#</a> 全局定制</h3><p>为了目录更清晰，我们可以在项目根目录建立<code>assets\\styles</code>文件夹，用于存放和样式相关的代码。<br><code>assets\\styles</code>中新建 2 个文件：<code>index.scss</code>和定制主题的<code>vant-theme.scss</code>文件，<br><code>index.scss</code>引入<code>vant-theme.scss</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;./vant-theme.scss&#39;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在<code>main.js</code>中引入<code>index.scss</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./assets/styles/index.scss&#39;</span> <span class="token comment">// 引入index.scss</span>
<span class="token comment">// 其他省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x=s("code",null,"vant-theme.scss",-1),y=s("br",null,null,-1),q={href:"https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// Component Colors
<span class="token atrule"><span class="token rule">@text-color</span><span class="token punctuation">:</span> #323233<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@border-color</span><span class="token punctuation">:</span> #ebedf0<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@active-color</span><span class="token punctuation">:</span> #f2f3f5<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@background-color-light</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后在<code>vant-theme.scss</code>根据配置文件的内容进行需要的变量定制，如下所示，也可以使用<code>uni.scss</code>中的变量：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">page</span> <span class="token punctuation">{</span>
  <span class="token property">--button-info-background-color</span><span class="token punctuation">:</span> $uni-text-color<span class="token punctuation">;</span>
  <span class="token property">--button-info-border-color</span><span class="token punctuation">:</span> $uni-text-color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部定制" tabindex="-1"><a class="header-anchor" href="#局部定制" aria-hidden="true">#</a> 局部定制</h3><p>可能我们会对某个页面的某个组件进行单独的定制，官方提供 2 中方法：<br> 方法 1：通过设置 class，单独设置设置变量</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;van-button type=&quot;info&quot; block class=&quot;my-button&quot;&gt;class局部定制主题的信息按钮&lt;/van-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.my-button</span> <span class="token punctuation">{</span>
  <span class="token property">--button-info-background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
  <span class="token property">--button-info-border-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2：通过 style 属性来动态设置变量</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;van-button type=&quot;info&quot; block :style=&quot;buttonStyle&quot;&gt;style局部定制主题的信息按钮&lt;/van-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">buttonStyle</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      --button-info-background-color: pink;
      --button-info-border-color: pink;
    </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入-iconfont" tabindex="-1"><a class="header-anchor" href="#引入-iconfont" aria-hidden="true">#</a> 引入 iconfont</h2>`,11),w={href:"https://www.iconfont.cn",target:"_blank",rel:"noopener noreferrer"},V=s("br",null,null,-1),T=s("code",null,"iconfont",-1),H=t(`<figure><img src="https://image.liubing.me/2020/01/26/f3a567e9da682.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2020/01/26/b54316bd343ef.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>修改好后点击复制链接然后打开，可以看到相关的图标字体的链接和图标的 class。</p><figure><img src="https://image.liubing.me/2020/01/26/366ddf8e46340.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>在<code>asssets/styles</code>中新建一个<code>icon.scss</code>用于管理字体图标，然后再<code>index.scss</code>中引入。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;./icon.scss&#39;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后将上面复制的链接看到的内容复制下，写入到<code>icon.scss</code>中，去除掉一些不需要的字体链接和其他的一些修改，变成如下形式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;iconfont&#39;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://at.alicdn.com/t/font_998792_mo2p0a3obyo.ttf?t=1579424702259&#39;</span><span class="token punctuation">)</span></span>
    <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[class^=&#39;iconfont-&#39;],
[class*=&#39; iconfont-&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;iconfont&#39;</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">text-rendering</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.iconfont-edit:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;\\e61d&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.iconfont-drag:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;\\e636&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.iconfont-rectangle:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;\\e790&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>[class^=&quot;iconfont-&quot;]</code>和<code>[class*=&quot; iconfont-&quot;]</code>中的<code>iconfont</code>保持和上面的图标前缀一致，不建议使用<code>icon</code>前缀。<br> 如果图标有变动后重新将<code>.ttf</code>的字体链接复制过来替换原来的<code>font-face</code>中的字体链接，重新将图标的 class 的复制过来即可。<br> 配合<code>van-icon</code>组件，指定<code>class-prefix</code>为<code>iconfont</code>，<code>name</code>为图标的名称，不带<code>iconfont-</code>。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;van-icon class-prefix=&quot;iconfont&quot; name=&quot;edit&quot; /&gt;
&lt;van-icon class-prefix=&quot;iconfont&quot; name=&quot;drag&quot; /&gt;
&lt;van-icon class-prefix=&quot;iconfont&quot; name=&quot;rectangle&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样内置的图标也可以正常使用，不会有影响。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;van-icon name=&quot;chat-o&quot; /&gt;
&lt;van-icon name=&quot;https://b.yzcdn.cn/vant/icon-demo-1126.png&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2020/01/26/a7b835cb1cd84.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2>`,14),L=s("br",null,null,-1),M={href:"https://github.com/liub1934/uniapp-use-vant",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"HbuilderX",-1);function j(S,z){const a=i("ExternalLinkIcon");return c(),p("div",null,[r,s("p",null,[n("总结下使用 uni-app 开发微信小程序过程中引入及使用 Vant Weapp 的方法及问题。"),u,n(" GitHub："),s("a",v,[n("https://github.com/liub1934/uniapp-use-vant"),e(a)])]),l(" more "),m,s("p",null,[n("小程序基于 "),s("a",b,[n("Shadow DOM"),e(a)]),n(" 来实现自定义组件，所以 Vant Weapp 使用与之配套的 "),s("a",g,[n("Css 变量"),e(a)]),n(" 来实现定制主题。链接中的内容可以帮助你对这两个概念有基本的认识，避免许多不必要的困扰。"),k,n(" Css 变量 的兼容性要求可以在 "),s("a",h,[n("这里"),e(a)]),n(" 查看。对于不支持 Css 变量 的设备，定制主题将不会生效，不过不必担心，默认样式仍会生效。")]),f,s("p",null,[n("最后我们就可以在"),x,n("中根据官方所说的进行主题定制了："),y,n(" 以下是官方配置文件中变量，完整内容请参考"),s("a",q,[n("配置文件"),e(a)])]),_,s("p",null,[n("vant-weapp 中虽然内置了不少 icon 图标，但实际开发过程中肯定不满足我们的需要，这里以"),s("a",w,[n("iconfont"),e(a)]),n("的图标为例子。"),V,n(" 将需要的图标加入到项目后点击编辑操作，将图标的前缀改成"),T,n("。")]),H,s("p",null,[n("以上是我用 uni-app 开发微信小程序使用 Vant Weapp 的一些经验总结，希望可以帮到有需要的人，如有不懂的地方可以评论回复，一般看到都会及时回复。"),L,n(" 最后附上 github 的链接："),s("a",M,[n("https://github.com/liub1934/uniapp-use-vant"),e(a)]),n("，可以直接用"),C,n("导入即可在微信开发者工具中运行。")])])}const N=o(d,[["render",j],["__file","uni-app-use-vant-weapp.html.vue"]]);export{N as default};
