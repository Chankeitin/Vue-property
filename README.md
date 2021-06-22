# 物业管理App

## 前言

#### 关于本人

本人学生，主要后端方向，有很多技术尚未成熟，欢迎各位提意见和指正错误，谢谢！

#### 关于APP

后台管理页面和后台为本人独自开发，是想把所学知识进行整合成一个项目。该管理APP还有很多功能和接口未开发和实现，缓存还有oss也都没实现。其他也差不多是CRUD。

#### 前后端链接

APP前端页面



APP后台页面



APP后台springboot

https://github.com/Chanchitin/SpringBoot-property



## 物业管理前端

基于uniapp，vue2，element-ui

#### 内置功能（前后端交互功能）

1. 登录功能：通过后台查询用户实现登录。

2. 注册功能：注册用户。

3. 社区功能：社区发布评论帖子、筛选评论帖子。

4. 角色管理页面：显示角色信息，编辑角色。

5. 权益功能：显示用户所拥有的商家优惠券

   

#### 页面展示

![物业前端首页](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E7%89%A9%E4%B8%9A%E5%89%8D%E7%AB%AF%E9%A6%96%E9%A1%B5.png?raw=true)

![物业前端集市](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E7%89%A9%E4%B8%9A%E5%89%8D%E7%AB%AF%E9%9B%86%E5%B8%82.png?raw=true)

![物业前端社区](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E7%89%A9%E4%B8%9A%E5%89%8D%E7%AB%AF%E7%A4%BE%E5%8C%BA.png?raw=true)

![物业前端我的](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E7%89%A9%E4%B8%9A%E5%89%8D%E7%AB%AF%E6%88%91%E7%9A%84.png?raw=true)

## 物业管理页面

基于vue2，vue-cil，element-ui，echarts，moven-editor

#### 内置功能（前后端交互功能）

1. 用户管理页面：显示用户信息，动态查询用户。

2. 角色管理页面：显示角色信息，编辑角色。

3. 登录功能：通过后台查询用户实现登录。

4. 用户评论：显示用户评论信息

   

#### 页面展示

![后台管理登录](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%99%BB%E5%BD%95.png?raw=true)

![后台管理用户管理](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png?raw=true)



![后台管理评论管理](C:\Users\admin\Desktop\大三下\web前端开发\1811030048-陈祁天-web大作业\后台管理评论管理.png)

![后台管理角色管理](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86.png?raw=true)

![后台管理个人中心](https://github.com/Chanchitin/SpringBoot-property/blob/master/imageForMd/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83.png?raw=true)

## 物业管理后台

基于springboot，springsecurity，mybatisplus开发

#### 内置功能

1. 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2. 角色管理：接口权限分配，设置匿名用户。
3. 登录日志：系统登录日志记录查询包含登录ip和地址。
4. 用户评论：查询用户评论信息
5. 商家权益：查询商家所给的优惠券



|      依赖      |     版本      |
| :------------: | :-----------: |
|   Springboot   | 2.3.2.RELEASE |
| Springsecurity | 2.3.2.RELEASE |
|     Mysql      |       8       |
|     Druid      |     1.1.6     |
|  MybatisPlus   |     3.3.2     |
|    Fastjson    |    1.2.72     |
|    Swagger3    |     3.0.0     |
|    Knife4j     |     3.0.2     |
|     hutool     |     5.5.9     |

