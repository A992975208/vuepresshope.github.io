---
title: git
date: 2023-08-06 21:36:26
categories:
  - tools
tags:
  - 
---

# 使用git命令上传代码到仓库
1.首先在Gitee创建一个仓库
![img_1.png](./img_1.png)

2.配置你的用户名和邮箱
```bash
git config --global user.name "xxx"
git config --global user.email "xxx"
```
3.查看用户名和邮箱
```bash
git config user.name
git config user.email
```
4.在项目内空白处右键Git Bash Here，命令行输入下列命令，初始化本地仓库
```bash
git init
```
5.添加项目目录下所有文件至本地仓库
```bash
git add .
```
6.使用如下命令加入注释提交（此步骤必不可少！）
```bash
 git commit -m "项目初始化"
```
7.将本地仓库与远程仓库相连接
```bash
git remote add origin xxx
```
8.强制将远程仓库文件更新至指定远程仓库中（如果仓库为空可以跳过这一步骤）
```bash
git pull --rebase origin master
```
9.将本地仓库中的文件推送至指定的远程仓库中
```bash
git push -u origin master
```
