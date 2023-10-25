---
title: webpack
date: 2023-08-14 12:19:06
categories:
  - foo
tags:
  - 
---

# webpack
# 1、基本配置
在项目根目录创建webpack.config.js
```js
module.exports = {
  // 入口
  entry: "",
  // 输出
  output: {},
  // 加载器
  module: {
    rules: [],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "",
};
Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范
```
# 2.修改配置文件
```js
// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};

```
# 3.处理样式资源
处理css资源
```bash
npm i css-loader style-loader -D

css-loader：负责将 Css 文件编译成 Webpack 能识别的模块
style-loader：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容
```
处理Less资源
```bash
npm i less-loader -D

less-loader：负责将 Less 文件编译成 Css 文件
```
处理Sass资源和Scss
```bash
npm i sass-loader sass -D

sass-loader：负责将 Sass 文件编译成 css 文件
sass：sass-loader 依赖 sass 进行编译
```
处理styl资源
```bash
npm i stylus-loader -D

stylus-loader：负责将 Styl 文件编译成 Css 文件
```
# 4.处理图片资源
```bash
过去在 Webpack4 时，我们处理图片资源通过 file-loader 和 url-loader 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源
```
# 6.自动清空上次打包资源
```bash 
clean:true
```
# 7.处理js资源
```bash
针对js的兼容性处理，我们选择使用bable处理
针对代码的格式化处理使用eslint来格式化代码
```
# 8.css处理
```bash
把css文件单独分离出来，使其性能更好

npm i mini-css-extract-plugin -D
```
# 9.css兼容性处理
```bash
npm i postcss-loader postcss postcss-preset-env -D

```
# 10.css压缩
```bash
npm i css-minimizer-webpack-plugin -D

```
# 11.提升开发体验
```bash
sourceMap(源代码映射)
开发环境：打包速度快，只有行映射，没有列映射
生产环境：打包速度慢，行映射和列映射
```
# 12.提升打包构建速度
```js
HotMoudleReplacement

module.exports = {
  // 其他省略
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
  },
};

```
OneOf
```js
打包的时候每个loader都会进行处理，比较慢
顾名思义就是只匹配上一个loader，剩下的不匹配
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    // clean: true, // 开发模式没有输出，不需要清空输出结果
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
          {
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.styl$/,
            use: ["style-loader", "css-loader", "stylus-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
              },
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: "static/imgs/[hash:8][ext][query]",
            },
          },
          {
            test: /\.(ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
              filename: "static/media/[hash:8][ext][query]",
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules代码不编译
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能
  },
  mode: "development",
  devtool: "cheap-module-source-map",
};

```
include/Exclude
include只处理xxx文件
Exclude除了xxx文件其他的都处理
```js
            {  
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"), // 也可以用包含
            loader: "babel-loader",
          },
```
Cache

每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。
我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了
对 Eslint 检查 和 Babel 编译结果进行缓存。
```js
options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false, // 缓存文件不要压缩
            },
```
Thead 开启多线程打包
```js
// nodejs核心模块，直接使用
const os = require("os");
// cpu核数
const threads = os.cpus().length;

```
减少代码体积
```js
Tree shaking 移除不需要的代码
```
Image Minimizer 图片压缩
```js
npm i image-minimizer-webpack-plugin imagemin -D

```
优化代码运行性能
CodeSplit代码分割 
1.将打包生成的文件进行分割 ，生成多个js文件
2.按需加载，需要哪个文件就加载那个文件  

Preload / Prefetch
Preload 浏览器立即加载资源
Prefetch 浏览器空闲时间加载资源

core-js 是专门用来做 ES6 以及以上 API 的 polyfill。

PWA
渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。
其中最重要的是，在 离线(offline) 时应用程序能够继续运行功能。