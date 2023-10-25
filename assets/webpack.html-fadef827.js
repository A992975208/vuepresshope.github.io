import{_ as s,o as n,c as a,a as e}from"./app-1631cab8.js";const p={},t=e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h1 id="_1、基本配置" tabindex="-1"><a class="header-anchor" href="#_1、基本配置" aria-hidden="true">#</a> 1、基本配置</h1><p>在项目根目录创建webpack.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Webpack 是基于 Node<span class="token punctuation">.</span>js 运行的，所以采用 Common<span class="token punctuation">.</span>js 模块化规范
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件" aria-hidden="true">#</a> 2.修改配置文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Node.js的核心模块，专门用来处理文件路径</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token comment">// 相对路径和绝对路径都行</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// path: 文件输出目录，必须是绝对路径</span>
    <span class="token comment">// path.resolve()方法返回一个绝对路径</span>
    <span class="token comment">// __dirname 当前文件的文件夹绝对路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// filename: 输出文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-处理样式资源" tabindex="-1"><a class="header-anchor" href="#_3-处理样式资源" aria-hidden="true">#</a> 3.处理样式资源</h1><p>处理css资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i css-loader style-loader <span class="token parameter variable">-D</span>

css-loader：负责将 Css 文件编译成 Webpack 能识别的模块
style-loader：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理Less资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i less-loader <span class="token parameter variable">-D</span>

less-loader：负责将 Less 文件编译成 Css 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理Sass资源和Scss</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i sass-loader sass <span class="token parameter variable">-D</span>

sass-loader：负责将 Sass 文件编译成 css 文件
sass：sass-loader 依赖 sass 进行编译
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理styl资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i stylus-loader <span class="token parameter variable">-D</span>

stylus-loader：负责将 Styl 文件编译成 Css 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-处理图片资源" tabindex="-1"><a class="header-anchor" href="#_4-处理图片资源" aria-hidden="true">#</a> 4.处理图片资源</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>过去在 Webpack4 时，我们处理图片资源通过 file-loader 和 url-loader 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-自动清空上次打包资源" tabindex="-1"><a class="header-anchor" href="#_6-自动清空上次打包资源" aria-hidden="true">#</a> 6.自动清空上次打包资源</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>clean:true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_7-处理js资源" tabindex="-1"><a class="header-anchor" href="#_7-处理js资源" aria-hidden="true">#</a> 7.处理js资源</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>针对js的兼容性处理，我们选择使用bable处理
针对代码的格式化处理使用eslint来格式化代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-css处理" tabindex="-1"><a class="header-anchor" href="#_8-css处理" aria-hidden="true">#</a> 8.css处理</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>把css文件单独分离出来，使其性能更好

<span class="token function">npm</span> i mini-css-extract-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-css兼容性处理" tabindex="-1"><a class="header-anchor" href="#_9-css兼容性处理" aria-hidden="true">#</a> 9.css兼容性处理</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i postcss-loader postcss postcss-preset-env <span class="token parameter variable">-D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-css压缩" tabindex="-1"><a class="header-anchor" href="#_10-css压缩" aria-hidden="true">#</a> 10.css压缩</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i css-minimizer-webpack-plugin <span class="token parameter variable">-D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-提升开发体验" tabindex="-1"><a class="header-anchor" href="#_11-提升开发体验" aria-hidden="true">#</a> 11.提升开发体验</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sourceMap<span class="token punctuation">(</span>源代码映射<span class="token punctuation">)</span>
开发环境：打包速度快，只有行映射，没有列映射
生产环境：打包速度慢，行映射和列映射
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-提升打包构建速度" tabindex="-1"><a class="header-anchor" href="#_12-提升打包构建速度" aria-hidden="true">#</a> 12.提升打包构建速度</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>HotMoudleReplacement

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他省略</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器域名</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;3000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器端口号</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动打开浏览器</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启HMR功能（只能用于开发环境，生产环境不需要了）</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OneOf</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>打包的时候每个loader都会进行处理，比较慢
顾名思义就是只匹配上一个loader，剩下的不匹配
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式没有输出，不需要指定输出目录</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/js/main.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将 js 文件输出到 static/js 目录中</span>
    <span class="token comment">// clean: true, // 开发模式没有输出，不需要清空输出结果</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 用来匹配 .css 结尾的文件</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// use 数组里面 Loader 执行顺序是从右到左</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 小于10kb的图片会被base64处理</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 将图片文件输出到 static/imgs 目录中</span>
              <span class="token comment">// 将图片文件命名 [hash:8][ext][query]</span>
              <span class="token comment">// [hash:8]: hash值取8位</span>
              <span class="token comment">// [ext]: 使用之前的文件扩展名</span>
              <span class="token comment">// [query]: 添加之前的query参数</span>
              <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(ttf|woff2?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/media/[hash:8][ext][query]&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除node_modules代码不编译</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定检查文件的根目录</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 以 public/index.html 为模板创建文件</span>
      <span class="token comment">// 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../public/index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 开发服务器</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器域名</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;3000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器端口号</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动打开浏览器</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启HMR功能</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;cheap-module-source-map&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>include/Exclude<br> include只处理xxx文件<br> Exclude除了xxx文件其他的都处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token punctuation">{</span>  
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// exclude: /node_modules/, // 排除node_modules代码不编译</span>
            <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 也可以用包含</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cache</p><p>每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。<br> 我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了<br> 对 Eslint 检查 和 Babel 编译结果进行缓存。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启babel编译缓存</span>
              <span class="token literal-property property">cacheCompression</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 缓存文件不要压缩</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thead 开启多线程打包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// nodejs核心模块，直接使用</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;os&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// cpu核数</span>
<span class="token keyword">const</span> threads <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>减少代码体积</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Tree shaking 移除不需要的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Image Minimizer 图片压缩</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i image<span class="token operator">-</span>minimizer<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin imagemin <span class="token operator">-</span><span class="token constant">D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>优化代码运行性能<br> CodeSplit代码分割<br> 1.将打包生成的文件进行分割 ，生成多个js文件<br> 2.按需加载，需要哪个文件就加载那个文件</p><p>Preload / Prefetch<br> Preload 浏览器立即加载资源<br> Prefetch 浏览器空闲时间加载资源</p><p>core-js 是专门用来做 ES6 以及以上 API 的 polyfill。</p><p>PWA<br> 渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。<br> 其中最重要的是，在 离线(offline) 时应用程序能够继续运行功能。</p>`,48),o=[t];function l(i,c){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","webpack.html.vue"]]);export{u as default};
