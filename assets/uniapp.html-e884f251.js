import{_ as t,r,o,c as d,d as a,e as i,b as n,a as s}from"./app-1631cab8.js";const g="/assets/img-338d3890.png",p="/assets/img_1-9573cfdc.png",l="/assets/img_2-8f32ab8c.png",c="/assets/img_3-86779916.png",_="/assets/img_4-4e076d10.png",m="/assets/img_5-6bcee226.png",h="/assets/img_6-b264305a.png",u="/assets/img_7-de72162f.png",b="/assets/img_8-ad540220.png",f="/assets/img_9-4a2a2acc.png",k="/assets/img_10-a072d4cf.png",y="/assets/img_11-4269cc04.png",v="/assets/img_12-28036514.png",x="/assets/img_13-2eb89b35.png",z="/assets/img_14-e065e6be.png",A="/assets/img_17-e3cebaf0.png",S="/assets/img_18-4b146dd8.png",j="/assets/img_19-844468f3.png",D="/assets/img_20-4a14610f.png",w="/assets/img_15-fc159061.png",K="/assets/img_16-c29917a4.png",I="/assets/img_21-66fa4284.png",B="/assets/img_22-bf954401.png",C="/assets/img_23-36d67937.png",E="/assets/img_24-a63edbe2.png",L="/assets/img_25-2e370a40.png",N="/assets/img_26-0ba471c8.png",V={},H=s('<h1 id="uniapp" tabindex="-1"><a class="header-anchor" href="#uniapp" aria-hidden="true">#</a> uniapp</h1><h1 id="uniapp本地打包" tabindex="-1"><a class="header-anchor" href="#uniapp本地打包" aria-hidden="true">#</a> uniapp本地打包</h1><h1 id="_1-在hbuilderx在我们项目的manifest-json文件配置我们的appid-应用版本号" tabindex="-1"><a class="header-anchor" href="#_1-在hbuilderx在我们项目的manifest-json文件配置我们的appid-应用版本号" aria-hidden="true">#</a> 1.在HbuilderX在我们项目的manifest.json文件配置我们的AppId，应用版本号</h1><figure><img src="'+g+'" alt="img.png" tabindex="0" loading="lazy"><figcaption>img.png</figcaption></figure><h1 id="_2-进行项目的本地打包" tabindex="-1"><a class="header-anchor" href="#_2-进行项目的本地打包" aria-hidden="true">#</a> 2.进行项目的本地打包</h1><figure><img src="'+p+'" alt="img_1.png" tabindex="0" loading="lazy"><figcaption>img_1.png</figcaption></figure><h1 id="_3-打包完之后路径下的文件夹保存下来后面会用到" tabindex="-1"><a class="header-anchor" href="#_3-打包完之后路径下的文件夹保存下来后面会用到" aria-hidden="true">#</a> 3.打包完之后路径下的文件夹保存下来后面会用到</h1><figure><img src="'+l+'" alt="img_2.png" tabindex="0" loading="lazy"><figcaption>img_2.png</figcaption></figure>',8),M={id:"_4-下载android离线sdkandroid离线sdk",tabindex:"-1"},P=a("a",{class:"header-anchor",href:"#_4-下载android离线sdkandroid离线sdk","aria-hidden":"true"},"#",-1),R={href:"https://nativesupport.dcloud.net.cn/AppDocs/download/android.html#",target:"_blank",rel:"noopener noreferrer"},X=a("figure",null,[a("img",{src:c,alt:"img_3.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img_3.png")],-1),q={id:"_5-生成appkey的网站-dcloud的开发者中心开发者中心",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#_5-生成appkey的网站-dcloud的开发者中心开发者中心","aria-hidden":"true"},"#",-1),G={href:"https://dev.dcloud.net.cn/pages/app/list",target:"_blank",rel:"noopener noreferrer"},J=s('<figure><img src="'+_+'" alt="img_4.png" tabindex="0" loading="lazy"><figcaption>img_4.png</figcaption></figure><h1 id="_6-生成appkey需要我们去生成android的签名文件" tabindex="-1"><a class="header-anchor" href="#_6-生成appkey需要我们去生成android的签名文件" aria-hidden="true">#</a> 6.生成appkey需要我们去生成Android的签名文件</h1><figure><img src="'+m+'" alt="img_5.png" tabindex="0" loading="lazy"><figcaption>img_5.png</figcaption></figure><h1 id="_7-生成android的签名文件" tabindex="-1"><a class="header-anchor" href="#_7-生成android的签名文件" aria-hidden="true">#</a> 7.生成Android的签名文件</h1>',4),O={href:"https://www.oracle.com/java/technologies/downloads/#java8-windows",target:"_blank",rel:"noopener noreferrer"},T=a("br",null,null,-1),U=a("img",{src:h,alt:"img_6.png",loading:"lazy"},null,-1),Q=a("br",null,null,-1),W=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-alias</span> testalias <span class="token parameter variable">-keyalg</span> RSA <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> <span class="token parameter variable">-validity</span> <span class="token number">36500</span> <span class="token parameter variable">-keystore</span> test.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3.)根据自己个人习惯输入密钥<br><img src="`+u+`" alt="img_7.png" loading="lazy"><br> (4.)根据命令可以查看具体的证书信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-keystore</span> test.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+`" alt="img_8.png" loading="lazy"><br> (4.)由于现在的jdk生成的签名文件中没有MD5，我们需要在jre的bin目录下，通过Git Bash here就可以查看证书的md5，test.keystore是我的证书名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./keytool <span class="token parameter variable">-exportcert</span> <span class="token parameter variable">-keystore</span> test.keystore <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-md5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="img_9.png" tabindex="0" loading="lazy"><figcaption>img_9.png</figcaption></figure>',6),Y={id:"_8-以上步骤完成之后在开发者中心应用信息填写我们的android签名然后生成我们索需要的appkey",tabindex:"-1"},Z=a("a",{class:"header-anchor",href:"#_8-以上步骤完成之后在开发者中心应用信息填写我们的android签名然后生成我们索需要的appkey","aria-hidden":"true"},"#",-1),$={href:"https://dev.dcloud.net.cn/pages/app/list",target:"_blank",rel:"noopener noreferrer"},aa=a("figure",null,[a("img",{src:k,alt:"img_10.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img_10.png")],-1),ia={id:"_9-下载android-studioandroid-studio",tabindex:"-1"},ea=a("a",{class:"header-anchor",href:"#_9-下载android-studioandroid-studio","aria-hidden":"true"},"#",-1),na={href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"},sa=s('<figure><img src="'+y+'" alt="img_11.png" tabindex="0" loading="lazy"><figcaption>img_11.png</figcaption></figure><h1 id="_10-把我们下载好的android-sdk离线包解压完之后把这个文件夹hbuilder-integrate-as在我们的android-studio打开" tabindex="-1"><a class="header-anchor" href="#_10-把我们下载好的android-sdk离线包解压完之后把这个文件夹hbuilder-integrate-as在我们的android-studio打开" aria-hidden="true">#</a> 10.把我们下载好的Android SDK离线包解压完之后把这个文件夹HBuilder-Integrate-AS在我们的Android Studio打开</h1><figure><img src="'+v+'" alt="img_12.png" tabindex="0" loading="lazy"><figcaption>img_12.png</figcaption></figure><h1 id="_11-打开之后等待项目进行编译" tabindex="-1"><a class="header-anchor" href="#_11-打开之后等待项目进行编译" aria-hidden="true">#</a> 11.打开之后等待项目进行编译</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里有个我没意识到的问题因为我之前破解过jetbrains系列导致编译报错，若果大家之前破解过别的编译器或者mysql之类的要注意项目编译会报错<br> Could not initialize class org.gradle.internal.classloader.FilteringClassLoader</p></div><p><img src="'+x+'" alt="img_13.png" loading="lazy"><br> 我在这个路径下执行了如下脚本，导致android studio出现问题：<br><img src="'+z+'" alt="img_14.png" loading="lazy"><br> 处理方案:首先先执行uninstall-all-users.vbs和uninstall-current-user.vbs这两个，然后把整个文件夹放到桌面或者路径没有中文的地方执行install-current-user.vbs.<br> 关闭android studio后重新打开，发现可以使用</p><h1 id="_12-修改文件的配置" tabindex="-1"><a class="header-anchor" href="#_12-修改文件的配置" aria-hidden="true">#</a> 12.修改文件的配置</h1><p>(1.)首先把我们在HbuilderX生成的打包文件放进来<br><img src="'+A+'" alt="img_17.png" loading="lazy"><br> (2.)左上角切换到package 保证我们manifest.json的appId和这一块的appId相同<br><img src="'+S+'" alt="img_18.png" loading="lazy"><br> (3.)版本号也要保持一致<br><img src="'+j+'" alt="img_19.png" loading="lazy"><br> (4.)这块的包名保持一致<br><img src="'+D+'" alt="img_20.png" loading="lazy"><br> (5.)Android包名：包名不能随便写，否则安装apk打开后会报错！它的值在离线SDK的simpleDemo\\src\\main\\AndroidManifest.xml<br> 默认是com.android.simple<br><img src="'+w+'" alt="img_15.png" loading="lazy"><br> (6.)在AndroidManifest.xml中配置我们在开发者中心生成的appKey<br><img src="'+K+'" alt="img_16.png" loading="lazy"><br> (7.)这块修改我们打包后apk的名字<br><img src="'+I+'" alt="img_21.png" loading="lazy"><br> (8.)开始打APK<br><img src="'+B+'" alt="img_22.png" loading="lazy"><br> (9.)这里选择APK</p><figure><img src="'+C+'" alt="img_23.png" tabindex="0" loading="lazy"><figcaption>img_23.png</figcaption></figure><p>(10.)这里把我们生成的test.keystore文件导入进来 密码是我们之前的密码 key alias别名是我们签名文件里面有的可以去看一下</p><figure><img src="'+E+'" alt="img_24.png" tabindex="0" loading="lazy"><figcaption>img_24.png</figcaption></figure><p>(11.)最后一步</p><figure><img src="'+L+'" alt="img_25.png" tabindex="0" loading="lazy"><figcaption>img_25.png</figcaption></figure><p>(12.)打包完就会生成一个APK</p><figure><img src="'+N+'" alt="img_26.png" tabindex="0" loading="lazy"><figcaption>img_26.png</figcaption></figure>',15);function ta(ra,oa){const e=r("ExternalLinkIcon");return o(),d("div",null,[H,a("h1",M,[P,i(" 4.下载Android离线SDK"),a("a",R,[i("Android离线SDK "),n(e)])]),X,a("h1",q,[F,i(" 5.生成appkey的网站：DCLOUD的开发者中心"),a("a",G,[i("开发者中心"),n(e)])]),J,a("p",null,[i("(1.)首先在官网下载"),a("a",O,[i("JRE8"),n(e)]),T,U,Q,i(" (2.)解压完压缩包在文件夹的bin目录下打开终端 输入以下命令可以直接生成证书")]),W,a("h1",Y,[Z,i(" 8.以上步骤完成之后在"),a("a",$,[i("开发者中心"),n(e)]),i("应用信息填写我们的Android签名然后生成我们索需要的appkey")]),aa,a("h1",ia,[ea,i(" 9.下载Android Studio"),a("a",na,[i("Android Studio"),n(e)])]),sa])}const ga=t(V,[["render",ta],["__file","uniapp.html.vue"]]);export{ga as default};
