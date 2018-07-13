####json-server.json 配置说明
```
--config	-c	指定配置文件	[默认值: "json-server.json"]
--port	-p	设置端口 [默认值: 3000]	Number
--host	-H	设置域 [默认值: "0.0.0.0"]	String
--watch	-w	Watch file(s)	是否监听
--routes	-r	指定自定义路由	 
--middlewares	-m	指定中间件 files	[数组]
--static	-s	Set static files directory	静态目录,类比：express的静态目录
--readonly	--ro	Allow only GET requests [布尔]	 
--nocors	--nc	Disable Cross-Origin Resource Sharing [布尔]	 
--no	gzip	, --ng Disable GZIP Content-Encoding [布尔]	 
--snapshots	-S	Set snapshots directory [默认值: "."]	 
--delay	-d	Add delay to responses (ms)	 
--id	-i	Set database id property (e.g. _id) [默认值: "id"]	 
--foreignKeySuffix	--	fks Set foreign key suffix (e.g. _id as in post_id)	[默认值: "Id"]
--help	-h	显示帮助信息	[布尔]
--version	-v	显示版本号	[布尔]
```