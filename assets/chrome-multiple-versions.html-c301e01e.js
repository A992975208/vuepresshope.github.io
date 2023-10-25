import{_ as a,r as l,o as i,c,d as e,e as o,b as n,f as h,a as t}from"./app-1631cab8.js";const d={},s=e("h1",{id:"手动制作-chrome-浏览器多版本共存-可快速切换各个版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#手动制作-chrome-浏览器多版本共存-可快速切换各个版本","aria-hidden":"true"},"#"),o(" 手动制作 Chrome 浏览器多版本共存，可快速切换各个版本")],-1),m=e("br",null,null,-1),_=e("br",null,null,-1),u={href:"https://www.cnblogs.com/xiangyuecn/p/10583788.html",target:"_blank",rel:"noopener noreferrer"},p=t('<blockquote><p><strong>本文只针对 Windows 下的 Chrome 浏览器的使用。</strong></p></blockquote><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ol><li>安全绿色免安装，可直接拷贝到 U 盘等随声携带，不用担心被植入一些其他东西。</li><li>支持任意版本，可随意选择。</li><li>和现有日常使用的 Chrome 共存，不会有冲突。</li></ol><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>利用<code>GoogleChromePortable.exe</code>启动器来启动 Chrome 主程序，所有 Chrome 用户数据都指向本程序所在的<code>Data</code>目录，从而实现和系统安装的 Chrome 隔离。</p><h2 id="制作步骤" tabindex="-1"><a class="header-anchor" href="#制作步骤" aria-hidden="true">#</a> 制作步骤</h2><h3 id="目录建立" tabindex="-1"><a class="header-anchor" href="#目录建立" aria-hidden="true">#</a> 目录建立</h3><p>可以现在任意地方新建一个目录，用于存放多版本 chrome，例如我们可以新建一个<code>chromes</code>目录</p><h3 id="下载并提取启动器" tabindex="-1"><a class="header-anchor" href="#下载并提取启动器" aria-hidden="true">#</a> 下载并提取启动器</h3>',9),g={href:"https://portableapps.com/apps/internet/google_chrome_portable",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),f=e("br",null,null,-1),x=e("code",null,"zip",-1),C=e("code",null,"GoogleChromePortable.exe",-1),w=e("code",null,"chromes",-1),z=e("figure",null,[e("img",{src:"https://image.liubing.me/2019/12/26/64bd6b3403098.png",alt:"image",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image")],-1),k={href:"https://www.lanzous.com/i7mnqfi",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"提取-chrome-主程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提取-chrome-主程序","aria-hidden":"true"},"#"),o(" 提取 Chrome 主程序")],-1),I=e("br",null,null,-1),V={href:"https://www.chromedownloads.net/chrome64win",target:"_blank",rel:"noopener noreferrer"},y=e("br",null,null,-1),N=e("code",null,"exe",-1),q=e("code",null,"提取启动器",-1),v=e("code",null,"zip",-1),G=e("br",null,null,-1),B=e("code",null,"chrome.7z",-1),P=t('<figure><img src="https://image.liubing.me/2019/12/26/7d299ad486c7f.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="制作便携版" tabindex="-1"><a class="header-anchor" href="#制作便携版" aria-hidden="true">#</a> 制作便携版</h3><ol><li>在上面新建的<code>chromes</code>目录中新建一个版本号的目录<code>76</code>，为了方便区分（我们上面下载的 Chrome 版本就是 76）。</li><li>复制<code>GoogleChromePortable.exe</code>到这个文件夹，可以改名成自己想要的名称，比如<code>Chrome76.exe</code>。</li><li>新建<code>App</code>目录，将上面提取的 Chrome 主程序<code>chrome.7z</code>复制进来，右键<code>chrome.7z</code>选择<code>解压到当前文件夹</code>（解压出来后就是<code>Chrome-bin</code>，解压完成后可以删除<code>chrome.7z</code>或留着备用）</li></ol><p>最终形成以下的目录形式即可</p><figure><img src="https://image.liubing.me/2019/12/26/36287b24f5c1d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/9b699a5556b7a.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>然后双击<code>Chrome76.exe</code>即可运行，首次运行会在当前目录生成一个<code>Data</code>目录，用于存放 Chrome 的数据，这样就不会和系统的安装的 Chrome 有冲突了。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2>',8),j=e("br",null,null,-1),D=e("code",null,"49.0.2623.75",-1),L=e("br",null,null,-1),T=e("br",null,null,-1),A={href:"https://www.lanzous.com/i7mojhe",target:"_blank",rel:"noopener noreferrer"};function M(S,U){const r=l("ExternalLinkIcon");return i(),c("div",null,[s,e("p",null,[o("由于某些原因需要切换 Chrome 的版本做些测试性的工作，如果重新下载旧版本安装的话，本机的新版本就被会覆盖。"),m,o(" 这不是我想要的，上古时代做些 IE 兼容性的工作的时候往往会下载一个 IETester，可以切换各个版本的 IE，而且和本机的 IE 互相不冲突。所以去 google 了一下，有没有类似的 Chrome 多版本共存的软件，找了一圈不怎么理想，然后找到一篇关于自己动手制作多版本 Chrome 共存的文章。"),_,o(" 自己尝试了下，觉得很不错，留存记录下，参考文章："),e("a",u,[o("点击查看"),n(r)])]),h(" more "),p,e("p",null,[o("下载地址："),e("a",g,[o("https://portableapps.com/apps/internet/google_chrome_portable"),n(r)]),b,o(" 下载下来是个 exe 文件，不要直接双击打开，如果你电脑上的压缩软件支持右键以压缩包的形式打开的可以直接以压缩包的形式打开，"),f,o(" 如果不支持的话可以将文件后缀改成"),x,o("打开，提取里面的"),C,o("，放到上面新建的"),w,o("目录。")]),z,e("p",null,[o("如果上面的下载地址打不开或者速度过慢的话，可以用我已经提取的，下载地址："),e("a",k,[o("https://www.lanzous.com/i7mnqfi"),n(r)])]),E,e("p",null,[o("这里我们可以下载所需要的任意版本的 Chrome，注意下载的必须是离线版本的，不是在线安装的。"),I,o(" 这里推荐一个较为安全的网站，收集了 Chrome 的各个版本："),e("a",V,[o("https://www.chromedownloads.net/chrome64win"),n(r)]),y,o(" 找到自己想要的 Chrome 版本，下载完成后也是一个"),N,o("安装包，同上"),q,o("，不要直接双击打开安装，修改下扩展名，改为"),v,o("后打开。"),G,o(" 打开后里面就一个"),B,o("的压缩文件，将其提取出来。")]),P,e("p",null,[o("由于文件太大就不放 Github 了，懒人可直接下载本人制作好的参考或者使用都行，"),j,o(" 由于大小限制问题只内置 Chrome 较老的一个稳定版的"),D,o("，解压即可使用。"),L,o(" 如果需要其他的版本的 Chrome 可按照上面的方法制作即可。"),T,o(" 下载地址："),e("a",A,[o("https://www.lanzous.com/i7mojhe"),n(r)])])])}const F=a(d,[["render",M],["__file","chrome-multiple-versions.html.vue"]]);export{F as default};