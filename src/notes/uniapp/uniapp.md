---
title: uniapp
date: 2023-08-15 00:11:19
comments: true
categories:
  - uniapp
tags:
  - 
---

# uniapp

# uniapp本地打包

# 1.在HbuilderX在我们项目的manifest.json文件配置我们的AppId，应用版本号

![img.png](./img.png)

# 2.进行项目的本地打包

![img_1.png](./img_1.png)

# 3.打包完之后路径下的文件夹保存下来后面会用到

![img_2.png](./img_2.png)

# 4.下载Android离线SDK[Android离线SDK ](https://nativesupport.dcloud.net.cn/AppDocs/download/android.html#)

![img_3.png](./img_3.png)

# 5.生成appkey的网站：DCLOUD的开发者中心[开发者中心](https://dev.dcloud.net.cn/pages/app/list)

![img_4.png](./img_4.png)

# 6.生成appkey需要我们去生成Android的签名文件

![img_5.png](./img_5.png)

# 7.生成Android的签名文件

(1.)首先在官网下载[JRE8](https://www.oracle.com/java/technologies/downloads/#java8-windows)
![img_6.png](./img_6.png)
(2.)解压完压缩包在文件夹的bin目录下打开终端 输入以下命令可以直接生成证书

```bash
keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore
```

(3.)根据自己个人习惯输入密钥
![img_7.png](./img_7.png)
(4.)根据命令可以查看具体的证书信息

```bash
keytool -list -v -keystore test.keystore
```

![img_8.png](./img_8.png)
(4.)由于现在的jdk生成的签名文件中没有MD5，我们需要在jre的bin目录下，通过Git Bash here就可以查看证书的md5，test.keystore是我的证书名

```bash
./keytool -exportcert -keystore test.keystore | openssl dgst -md5
```

![img_9.png](./img_9.png)

# 8.以上步骤完成之后在[开发者中心](https://dev.dcloud.net.cn/pages/app/list)应用信息填写我们的Android签名然后生成我们索需要的appkey

![img_10.png](./img_10.png)

# 9.下载Android Studio[Android Studio](https://developer.android.google.cn/studio/)

![img_11.png](./img_11.png)

# 10.把我们下载好的Android SDK离线包解压完之后把这个文件夹HBuilder-Integrate-AS在我们的Android Studio打开

![img_12.png](./img_12.png)

# 11.打开之后等待项目进行编译

:::warning
这里有个我没意识到的问题因为我之前破解过jetbrains系列导致编译报错，若果大家之前破解过别的编译器或者mysql之类的要注意项目编译会报错
Could not initialize class org.gradle.internal.classloader.FilteringClassLoader
:::
![img_13.png](./img_13.png)
我在这个路径下执行了如下脚本，导致android studio出现问题：
![img_14.png](./img_14.png)
处理方案:首先先执行uninstall-all-users.vbs和uninstall-current-user.vbs这两个，然后把整个文件夹放到桌面或者路径没有中文的地方执行install-current-user.vbs.
关闭android studio后重新打开，发现可以使用

# 12.修改文件的配置

(1.)首先把我们在HbuilderX生成的打包文件放进来
![img_17.png](./img_17.png)
(2.)左上角切换到package 保证我们manifest.json的appId和这一块的appId相同
![img_18.png](./img_18.png)
(3.)版本号也要保持一致
![img_19.png](./img_19.png)
(4.)这块的包名保持一致
![img_20.png](./img_20.png)
(5.)Android包名：包名不能随便写，否则安装apk打开后会报错！它的值在离线SDK的simpleDemo\src\main\AndroidManifest.xml
默认是com.android.simple
![img_15.png](./img_15.png)
(6.)在AndroidManifest.xml中配置我们在开发者中心生成的appKey
![img_16.png](./img_16.png)
(7.)这块修改我们打包后apk的名字
![img_21.png](./img_21.png)
(8.)开始打APK
![img_22.png](./img_22.png)
(9.)这里选择APK

![img_23.png](./img_23.png)

(10.)这里把我们生成的test.keystore文件导入进来 密码是我们之前的密码 key alias别名是我们签名文件里面有的可以去看一下

![img_24.png](./img_24.png)

(11.)最后一步

![img_25.png](./img_25.png)

(12.)打包完就会生成一个APK

![img_26.png](./img_26.png)

