# yapi-plugin-qcas 

第三方cas登录插件，配置方法如下：   

第一步： 在生成的配置文件config.json中加入如下配置：  

```
"plugins": [
    {
      "name": "qcas",
      "options": {
        "loginUrl": "http://cas.example.com/service/verifytoken.php?sid=",
        "AUTH_SERVER" : "https://cas.example.com/login.php"
      }
    }
  ]
```   
这里面的配置项含义如下：  
- `loginUrl` 服务端在获取token之后，可以通过这个url来获取用户的详细信息
- `AUTH_SERVER` 点击登陆按钮式需要跳转的url，用户通过该页面登录以后会向服务器发送一个token


第二步：在config.json 这层目录下运行 ```yapi plugin --name yapi-plugin-qcas```   重新下载插件  

第三步： 重启服务器

