import{_ as n,r as t,o as s,c as d,f as c,d as e,e as i,b as g,a as o}from"./app-1631cab8.js";const r={},l=e("h1",{id:"vuepress-借助-buddy-自动构建打包部署到自己的服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-借助-buddy-自动构建打包部署到自己的服务器","aria-hidden":"true"},"#"),i(" VuePress 借助 Buddy 自动构建打包部署到自己的服务器")],-1),p=e("p",null,[i("近期将自己的博客由 "),e("code",null,"WordPress"),i(" 迁移到了 "),e("code",null,"VuePress"),i("，一开始想到的是用 Github 提供的 Action 功能，代码推送到 main 分支后自动构建打包并将打包后的文件通过 FTP 的形式发送到自己的服务器上面，尴尬的是之前利用 Action 做了些非法用途，用于各种脚本签到导致 Action 功能被封了 😂，最后这个方法被弃用了，然后就找到了今天的主角：Buddy，记录下自动构建打包配置过程。")],-1),u=e("h2",{id:"注册",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注册","aria-hidden":"true"},"#"),i(" 注册")],-1),m=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"如果打不开 Buddy 官网，请开启魔法上网。")],-1),f={href:"https://buddy.works",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>注册登录完毕后自动进去控制台，点击控制台右上角的 <code>New project</code> 按钮新建项目。</p><figure><img src="https://image.liubing.me/2023/01/02/12eaed79b6b9f.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择仓库提供者为 Github，下面会列出自己的仓库列表，如果仓库列表出不来的话点击 <code>Can&#39;t see your repositories?</code>进行授权，选择一个仓库进入下一步。</p><figure><img src="https://image.liubing.me/2023/01/02/6fb9e53a38638.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="添加管道" tabindex="-1"><a class="header-anchor" href="#添加管道" aria-hidden="true">#</a> 添加管道</h2><p>点击右上角的 <code>New pipeline</code> 按钮新增一个管道。</p><figure><img src="https://image.liubing.me/2023/01/02/aff9cc1dc453f.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择配置类型为 <code>New</code>，填写 <code>Name</code> 名称，自己定义即可，选择触发类型为 <code>On events</code>，选择一个自己的分支。</p><figure><img src="https://image.liubing.me/2023/01/02/9cfe376fe9aa7.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择技术栈为 Node.js</p><figure><img src="https://image.liubing.me/2023/01/02/8ceeca0aa31b4.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>填写 VuePress 打包打包命令，可以使用 <code>npm</code> 或者 <code>yarn</code>，按需使用，考虑都打包后文件过多，如果单个单个发送的话耗时可能比较多，这里将打包的好的 <code>dist</code> 打成压缩包，完成后点击 <code>Add this action</code> 按钮添加步骤。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> docs:build
<span class="token builtin class-name">cd</span> src/.vuepress
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> dist.tar.gz dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2023/01/02/1463771ba9845.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="添加-ftp-配置" tabindex="-1"><a class="header-anchor" href="#添加-ftp-配置" aria-hidden="true">#</a> 添加 FTP 配置</h2><p>以上就配置好了打包的步骤，打完包后需要将打包好的文件通过 FTP 的形式发送到自己的服务器上。点击下方的 <code>+</code> 号添加其他步骤。</p><figure><img src="https://image.liubing.me/2023/01/02/ced3e027f638e.png" alt="ced3e027f638e" tabindex="0" loading="lazy"><figcaption>ced3e027f638e</figcaption></figure><p>可以通过搜索输入框输入 <code>FTP</code> 找到我们想要的服务，选择 <code>FTP</code>。</p><figure><img src="https://image.liubing.me/2023/01/02/d6da4a5fdbea5.png" alt="d6da4a5fdbea5" tabindex="0" loading="lazy"><figcaption>d6da4a5fdbea5</figcaption></figure><figure><img src="https://image.liubing.me/2023/01/02/0982bce304cc5.png" alt="0982bce304cc5" tabindex="0" loading="lazy"><figcaption>0982bce304cc5</figcaption></figure><p>配置需要发送的源文件，这里选择 Pipeline Filesystem，填写源文件路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/src/.vuepress/dist.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2023/01/02/427048aebfdc2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>点击 Target 进行 FTP 相关的配置，此时需要填写一些 FTP 的配置信息，包括 FTP 地址、端口号、用户名、密码、路径信息。</p><figure><img src="https://image.liubing.me/2023/01/02/9a317774277b6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>由于这些信息里面有敏感信息，可以在选择左侧的 <code>Variables, Keys &amp; Assets</code> 菜单进行一些变量的配置。</p><figure><img src="https://image.liubing.me/2023/01/02/bc4f320bdf561.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2023/01/02/15f45c594b7b0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>变量配置完成后可以通过输入框右侧的$符号的按钮进行变量的选择。</p><figure><img src="https://image.liubing.me/2023/01/02/42bf030f39504.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>配置完成后可以点击下方的测试按钮进行测试联通性，联通性 OK 的话 <code>PATH</code> 选择可以点击右侧的按钮进行选择。这个<code>PATH</code>就是打包后的文件发送到服务器的位置。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>填写的 PATH 是个相对路径，比如你配置的 FTP 用户所在的目录是<code>/www/wwwroot/</code>，那么这里填写的 PATH 就是相对这个目录，如图上填写的<code>/vuepress</code>，对应的服务器目录就是<code>/www/wwwroot/vuepress</code>。</p></div><figure><img src="https://image.liubing.me/2023/01/02/a08fff8e90312.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="添加-ssh-配置" tabindex="-1"><a class="header-anchor" href="#添加-ssh-配置" aria-hidden="true">#</a> 添加 SSH 配置</h2><p>打包后的压缩文件发送到服务器的具体位置后还需要进行解压操作，用同样的方法添加 SSH 步骤，填入相关配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入到 vuepress 的目录，执行解压命令，完成后删除压缩包。</span>
<span class="token builtin class-name">cd</span> /www/wwwroot/liubing.me/vuepress
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> dist.tar.gz
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> dist.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2023/01/02/d25b2251377e6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2023/01/02/c60dfbe00771d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="测试打包" tabindex="-1"><a class="header-anchor" href="#测试打包" aria-hidden="true">#</a> 测试打包</h2><p>全部配置完成后就可以点击 Run 按钮执行管道任务，如果有出现红色的的提示，可以点击 <code>Logs</code> 按钮查看相关的日志信息排查问题。</p><figure><img src="https://image.liubing.me/2023/01/02/e61da9a90204c.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2023/01/02/673eaf93d0546.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,43);function h(v,x){const a=t("ExternalLinkIcon");return s(),d("div",null,[l,p,c(" more "),u,m,e("p",null,[i("没注册过的同学可以自行去 Buddy 官网注册："),e("a",f,[i("点击前往"),g(a)]),i("，推荐大家使用 GitHub 方式进行登录。")]),b])}const _=n(r,[["render",h],["__file","vuepress-automatically-deploys-to-own-servers-with-buddy.html.vue"]]);export{_ as default};
