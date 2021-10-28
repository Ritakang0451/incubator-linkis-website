import{o as t,c as e,m as i,r as n,l as s,u as d}from"./vendor.1180558b.js";const r={class:"markdown-body"},a=[i("<h1>Linkis1.0 Configurations</h1><blockquote><p>The configuration of Linkis1.0 is simplified on the basis of Linkis0.x. A public configuration file linkis.properties is provided in the conf directory to avoid the need for common configuration parameters to be configured in multiple microservices at the same time. This document will list the parameters of Linkis1.0 in modules.</p></blockquote><p>        Please be noticed: This article only lists all the configuration parameters related to Linkis that have an impact on operating performance or environment dependence. Many configuration parameters that do not need users to care about have been omitted. If users are interested, they can browse through the source code.</p><h3>1 General configuration</h3><p>        The general configuration can be set in the global linkis.properties, one setting, each microservice can take effect.</p><h4>1.1 Global configurations</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.encoding | utf-8 | Linkis default encoding format | | wds.linkis.date.pattern | yyyy-MM-dd’T’HH:mm:ssZ | Default date format | | wds.linkis.test.mode | false | Whether to enable debugging mode, if set to true, all microservices support password-free login, and all EngineConn open remote debugging ports | | wds.linkis.test.user | None | When wds.linkis.test.mode=true, the default login user for password-free login | | wds.linkis.home | /appcom/Install/LinkisInstall | Linkis installation directory, if it does not exist, it will automatically get the value of LINKIS_HOME | | wds.linkis.httpclient.default.connect.timeOut | 50000 | Linkis HttpClient default connection timeout |</p><h4>1.2 LDAP configurations</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.ldap.proxy.url | None | LDAP URL address | | wds.linkis.ldap.proxy.baseDN | None | LDAP baseDN address | | wds.linkis.ldap.proxy.userNameFormat | None | |</p><h4>1.3 Hadoop configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.hadoop.root.user | hadoop | HDFS super user | | wds.linkis.filesystem.hdfs.root.path | None | User’s HDFS default root path | | wds.linkis.keytab.enable | false | Whether to enable kerberos | | wds.linkis.keytab.file | /appcom/keytab | Kerberos keytab path, effective only when wds.linkis.keytab.enable=true | | wds.linkis.keytab.host.enabled | false | | | wds.linkis.keytab.host | 127.0.0.1 | | | hadoop.config.dir | None | If not configured, it will be read from the environment variable HADOOP_CONF_DIR | | wds.linkis.hadoop.external.conf.dir.prefix | /appcom/config/external-conf/hadoop | hadoop additional configuration |</p><h4>1.4 Linkis RPC configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.rpc.broadcast.thread.num | 10 | Linkis RPC broadcast thread number (<strong>Recommended default value</strong>) | | wds.linkis.ms.rpc.sync.timeout | 60000 | Linkis RPC Receiver’s default processing timeout time | | wds.linkis.rpc.eureka.client.refresh.interval | 1s | Refresh interval of Eureka client’s microservice list (<strong>Recommended default value</strong>) | | wds.linkis.rpc.eureka.client.refresh.wait.time.max | 1m | Refresh maximum waiting time (<strong>recommended default value</strong>) | | wds.linkis.rpc.receiver.asyn.consumer.thread.max | 10 | Maximum number of Receiver Consumer threads (<strong>If there are many online users, it is recommended to increase this parameter appropriately</strong>) | | wds.linkis.rpc.receiver.asyn.consumer.freeTime.max | 2m | Receiver Consumer maximum idle time | | wds.linkis.rpc.receiver.asyn.queue.size.max | 1000 | The maximum number of buffers in the receiver consumption queue (<strong>If there are many online users, it is recommended to increase this parameter appropriately</strong>) | | wds.linkis.rpc.sender.asyn.consumer.thread.max&quot;, 5 | Sender Consumer maximum number of threads | | wds.linkis.rpc.sender.asyn.consumer.freeTime.max | 2m | Sender Consumer Maximum Free Time | | wds.linkis.rpc.sender.asyn.queue.size.max | 300 | Sender consumption queue maximum buffer number |</p><h3>2. Calculate governance configuration parameters</h3><h4>2.1 Entrance configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.spark.engine.version | 2.4.3 | The default Spark version used when the user submits a script without specifying a version | | wds.linkis.hive.engine.version | 1.2.1 | The default Hive version used when the user submits a script without a specified version | | wds.linkis.python.engine.version | python2 | The default Python version used when the user submits a script without specifying a version | | wds.linkis.jdbc.engine.version | 4 | The default JDBC version used when the user submits the script without specifying the version | | wds.linkis.shell.engine.version | 1 | The default shell version used when the user submits a script without specifying a version | | wds.linkis.appconn.engine.version | v1 | The default AppConn version used when the user submits a script without a specified version | | wds.linkis.entrance.scheduler.maxParallelismUsers | 1000 | Maximum number of concurrent users supported by Entrance | | wds.linkis.entrance.job.persist.wait.max | 5m | Maximum time for Entrance to wait for JobHistory to persist a Job | | wds.linkis.entrance.config.log.path | None | If not configured, the value of wds.linkis.filesystem.hdfs.root.path is used by default | | wds.linkis.default.requestApplication.name | IDE | The default submission system when the submission system is not specified | | wds.linkis.default.runType | sql | The default script type when the script type is not specified | | wds.linkis.warn.log.exclude | org.apache,hive.ql,hive.metastore,com.netflix,com.webank.wedatasphere | Real-time WARN-level logs that are not output to the client by default | | wds.linkis.log.exclude | org.apache, hive.ql, hive.metastore, com.netflix, com.webank.wedatasphere, com.webank | Real-time INFO-level logs that are not output to the client by default | | wds.linkis.instance | 3 | User’s default number of concurrent jobs per engine | | wds.linkis.max.ask.executor.time | 5m | Apply to LinkisManager for the maximum time available for EngineConn | | wds.linkis.hive.special.log.include | org.apache.hadoop.hive.ql.exec.Task | When pushing Hive logs to the client, which logs are not filtered by default | | wds.linkis.spark.special.log.include | com.webank.wedatasphere.linkis.engine.spark.utils.JobProgressUtil | When pushing Spark logs to the client, which logs are not filtered by default | | wds.linkis.entrance.shell.danger.check.enabled | false | Whether to check and block dangerous shell syntax | | wds.linkis.shell.danger.usage | rm,sh,find,kill,python,for,source,hdfs,hadoop,spark-sql,spark-submit,pyspark,spark-shell,hive,yarn | Shell default Dangerous grammar | | wds.linkis.shell.white.usage | cd,ls | Shell whitelist syntax | | wds.linkis.sql.default.limit | 5000 | SQL default maximum return result set rows |</p><h4>2.2 EngineConn configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.engineconn.resultSet.default.store.path | hdfs:///tmp | Job result set default storage path | | wds.linkis.engine.resultSet.cache.max | 0k | When the size of the result set is lower than how much, EngineConn will return to Entrance without placing the disk. | | wds.linkis.engine.default.limit | 5000 | | | wds.linkis.engine.lock.expire.time | 120000 | The maximum idle time of the engine lock, that is, after Entrance applies for the lock, how long does it take to submit code to EngineConn will be released | | wds.linkis.engineconn.ignore.words | org.apache.spark.deploy.yarn.Client | Logs that are ignored by default when the Engine pushes logs to the Entrance side | | wds.linkis.engineconn.pass.words | org.apache.hadoop.hive.ql.exec.Task | The log that must be pushed by default when the Engine pushes logs to the Entrance side | | wds.linkis.engineconn.heartbeat.time | 3m | Default heartbeat interval from EngineConn to LinkisManager | | wds.linkis.engineconn.max.free.time | 1h | EngineConn’s maximum free time |</p><h4>2.3 EngineConnManager configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.ecm.memory.max | 80g | ECM’s maximum bootable EngineConn memory | | wds.linkis.ecm.cores.max | 50 | ECM’s maximum number of CPUs that can start EngineConn | | wds.linkis.ecm.engineconn.instances.max | 50 | The maximum number of EngineConn that can be started, it is generally recommended to set the same as wds.linkis.ecm.cores.max | | wds.linkis.ecm.protected.memory | 4g | ECM protected memory, that is, the memory used by ECM to start EngineConn cannot exceed wds.linkis.ecm.memory.max-wds.linkis.ecm.protected.memory | | wds.linkis.ecm.protected.cores.max | 2 | The number of protected CPUs of ECM, the meaning is the same as wds.linkis.ecm.protected.memory | | wds.linkis.ecm.protected.engine.instances | 2 | Number of protected instances of ECM | | wds.linkis.engineconn.wait.callback.pid | 3s | Waiting time for EngineConn to return pid |</p><h4>2.4 LinkisManager configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.manager.am.engine.start.max.time&quot; | 10m | The maximum start time for LinkisManager to start a new EngineConn | | wds.linkis.manager.am.engine.reuse.max.time | 5m | LinkisManager reuses an existing EngineConn’s maximum selection time | | wds.linkis.manager.am.engine.reuse.count.limit | 10 | LinkisManager reuses an existing EngineConn’s maximum polling times | | wds.linkis.multi.user.engine.types | jdbc,es,presto | When LinkisManager reuses an existing EngineConn, which engine users are not used as reuse rules | | wds.linkis.rm.instance | 10 | The default maximum number of instances per user per engine | | wds.linkis.rm.yarnqueue.cores.max | 150 | Maximum number of cores per user in each engine usage queue | | wds.linkis.rm.yarnqueue.memory.max | 450g | The maximum amount of memory per user in each engine’s use queue | | wds.linkis.rm.yarnqueue.instance.max | 30 | The maximum number of applications launched by each user in the queue of each engine |</p><h3>3. Each engine configuration parameter</h3><h4>3.1 JDBC engine configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.jdbc.default.limit | 5000 | The default maximum return result set rows | | wds.linkis.jdbc.support.dbs | mysql=&gt;com.mysql.jdbc.Driver,postgresql=&gt;org.postgresql.Driver,oracle=&gt;oracle.jdbc.driver.OracleDriver,hive2=&gt;org.apache.hive .jdbc.HiveDriver,presto=&gt;com.facebook.presto.jdbc.PrestoDriver | Drivers supported by JDBC engine | | wds.linkis.engineconn.jdbc.concurrent.limit | 100 | Maximum number of concurrent SQL executions |</p><h4>3.2 Python engine configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | pythonVersion | /appcom/Install/anaconda3/bin/python | Python command path | | python.path | None | Specify an additional path for Python, which only accepts shared storage paths |</p><h4>3.3 Spark engine configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.engine.spark.language-repl.init.time | 30s | Maximum initialization time for Scala and Python command interpreters | | PYSPARK_DRIVER_PYTHON | python | Python command path | | wds.linkis.server.spark-submit | spark-submit | spark-submit command path |</p><h3>4. PublicEnhancements configuration parameters</h3><h4>4.1 BML configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.bml.dws.version | v1 | Version number requested by Linkis Restful | | wds.linkis.bml.auth.token.key | Validation-Code | Password-free token-key for BML request | | wds.linkis.bml.auth.token.value | BML-AUTH | Password-free token-value requested by BML | | wds.linkis.bml.hdfs.prefix | /tmp/linkis | The prefix file path of the BML file stored on hdfs |</p><h4>4.2 Metadata configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | hadoop.config.dir | /appcom/config/hadoop-config | If it does not exist, the value of the environment variable HADOOP_CONF_DIR is used by default | | hive.config.dir | /appcom/config/hive-config | If it does not exist, the value of the environment variable HIVE_CONF_DIR is used by default | | hive.meta.url | None | The URL of the HiveMetaStore database. If hive.config.dir is not configured, this value must be configured | | hive.meta.user | None | User of the HiveMetaStore database | | hive.meta.password | None | Password of the HiveMetaStore database |</p><h4>4.3 JobHistory configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.jobhistory.admin | None | The default Admin account is used to specify which users can view the execution history of everyone |</p><h4>4.4 FileSystem configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.filesystem.root.path | file:///tmp/linkis/ | User’s Linux local root directory | | wds.linkis.filesystem.hdfs.root.path | hdfs:///tmp/ | User’s HDFS root directory | | wds.linkis.workspace.filesystem.hdfsuserrootpath.suffix | /linkis/ | The first-level prefix after the user’s HDFS root directory. The user’s actual root directory is: ${hdfs.root.path}${user}${ hdfsuserrootpath.suffix} | | wds.linkis.workspace.resultset.download.is.limit | true | When Client downloads the result set, whether to limit the number of downloads | | wds.linkis.workspace.resultset.download.maxsize.csv | 5000 | When the result set is downloaded as a CSV file, the number of downloads is limited | | wds.linkis.workspace.resultset.download.maxsize.excel | 5000 | When the result set is downloaded as an Excel file, the number of downloads is limited | | wds.linkis.workspace.filesystem.get.timeout | 2000L | The maximum timeout period for requesting the underlying file system. (<strong>If the performance of your HDFS or Linux machine is low, it is recommended to increase the check number appropriately</strong>) |</p><h4>4.5 UDF configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.udf.share.path | /mnt/bdap/udf | The storage path of the shared UDF, it is recommended to set it to the HDFS path |</p><h3>5. MicroService configuration parameters</h3><h4>5.1 Gateway configuration parameters</h4><p>| Parameter name | Default value | Description | | ------------------------- | ------- | --------------- --------------------------------------------| | wds.linkis.gateway.conf.enable.proxy.user | false | Whether to enable proxy user mode, if enabled, the login user’s request will be proxied to the proxy user for execution | | wds.linkis.gateway.conf.proxy.user.config | proxy.properties | Storage file of proxy rules | | wds.linkis.gateway.conf.proxy.user.scan.interval | 600000 | Proxy file refresh interval | | wds.linkis.gateway.conf.enable.token.auth | false | Whether to enable the Token login mode, if enabled, allow access to Linkis in the form of tokens | | wds.linkis.gateway.conf.token.auth.config | token.properties | Token rule storage file | | wds.linkis.gateway.conf.token.auth.scan.interval | 600000 | Token file refresh interval | | wds.linkis.gateway.conf.url.pass.auth | /dws/ | Request for default release without login verification | | wds.linkis.gateway.conf.enable.sso | false | Whether to enable SSO user login mode | | wds.linkis.gateway.conf.sso.interceptor | None | If the SSO login mode is enabled, the user needs to implement SSOInterceptor to jump to the SSO login page | | wds.linkis.admin.user | hadoop | Administrator user list | | wds.linkis.login_encrypt.enable | false | When the user logs in, does the password enable RSA encryption transmission | | wds.linkis.enable.gateway.auth | false | Whether to enable the Gateway IP whitelist mechanism | | wds.linkis.gateway.auth.file | auth.txt | IP whitelist storage file |</p>",43)],o={setup:(i,{expose:n})=>(n({frontmatter:{}}),(i,n)=>(t(),e("div",r,a)))},l={class:"markdown-body"},h=[i("<h1>Linkis1.0 参数列表</h1><blockquote><p>Linkis1.0 在 Linkis0.x 配置基础上进行了简化，在conf目录提供了一个公共配置文件 linkis.properties，避免通用的配置参数需要同时在多个微服务里面配置。本文档将会把Linkis1.0的参数分模块列举出来。</p></blockquote><p>        请注意：本文只给出了 Linkis 所有对运行性能有影响或是环境依赖相关的配置参数，很多无需用户关心的配置参数已略去，如果用户感兴趣，可以翻阅源码查看。</p><h3>1 通用配置</h3><p>        通用配置可在全局的linkis.properties当中设置即可，一处设置，各个微服务都可生效。</p><h4>1.1 全局配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.encoding</td><td>utf-8</td><td>Linkis默认编码格式</td></tr><tr><td>wds.linkis.date.pattern</td><td>yyyy-MM-dd’T’HH:mm:ssZ</td><td>默认日期格式</td></tr><tr><td>wds.linkis.test.mode</td><td>false</td><td>是否打开调试模式，如果设置为 true，所有微服务都支持免密登录，且所有EngineConn打开远程调试端口</td></tr><tr><td>wds.linkis.test.user</td><td>无</td><td>当wds.linkis.test.mode=true时，免密登录的默认登录用户</td></tr><tr><td>wds.linkis.home</td><td>/appcom/Install/LinkisInstall</td><td>Linkis 安装目录，如果不存在，会自动获取 LINKIS_HOME的值</td></tr><tr><td>wds.linkis.httpclient.default.connect.timeOut</td><td>50000</td><td>Linkis HttpClient的默认连接超时时间</td></tr></tbody></table><h4>1.2 LDAP配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.ldap.proxy.url</td><td>无</td><td>LDAP URL地址</td></tr><tr><td>wds.linkis.ldap.proxy.baseDN</td><td>无</td><td>LDAP baseDN地址</td></tr><tr><td>wds.linkis.ldap.proxy.userNameFormat</td><td>无</td><td></td></tr></tbody></table><h4>1.3 Hadoop配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.hadoop.root.user</td><td>hadoop</td><td>HDFS super 用户</td></tr><tr><td>wds.linkis.filesystem.hdfs.root.path</td><td>无</td><td>用户的HDFS默认根路径</td></tr><tr><td>wds.linkis.keytab.enable</td><td>false</td><td>是否打开kerberos</td></tr><tr><td>wds.linkis.keytab.file</td><td>/appcom/keytab</td><td>kerberos的keytab路径，仅wds.linkis.keytab.enable=true时生效</td></tr><tr><td>wds.linkis.keytab.host.enabled</td><td>false</td><td></td></tr><tr><td>wds.linkis.keytab.host</td><td>127.0.0.1</td><td></td></tr><tr><td>hadoop.config.dir</td><td>无</td><td>如果不配置，将从环境变量 HADOOP_CONF_DIR读取</td></tr><tr><td>wds.linkis.hadoop.external.conf.dir.prefix</td><td>/appcom/config/external-conf/hadoop</td><td>hadoop额外配置</td></tr></tbody></table><h4>1.4 Linkis RPC配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.rpc.broadcast.thread.num</td><td>10</td><td>Linkis RPC 广播线程数量（<strong>建议采用默认值</strong>）</td></tr><tr><td>wds.linkis.ms.rpc.sync.timeout</td><td>60000</td><td>Linkis RPC Receiver端的默认处理超时时间</td></tr><tr><td>wds.linkis.rpc.eureka.client.refresh.interval</td><td>1s</td><td>Eureka client的微服务列表刷新间隔（<strong>建议采用默认值</strong>）</td></tr><tr><td>wds.linkis.rpc.eureka.client.refresh.wait.time.max</td><td>1m</td><td>刷新最大等待时间（<strong>建议采用默认值</strong>）</td></tr><tr><td>wds.linkis.rpc.receiver.asyn.consumer.thread.max</td><td>10</td><td>Receiver Consumer最大线程数量（<strong>如果在线用户多，建议适当调大该参数</strong>）</td></tr><tr><td>wds.linkis.rpc.receiver.asyn.consumer.freeTime.max</td><td>2m</td><td>Receiver Consumer最大空闲时间</td></tr><tr><td>wds.linkis.rpc.receiver.asyn.queue.size.max</td><td>1000</td><td>Receiver 消费队列最大缓存数（<strong>如果在线用户多，建议适当调大该参数</strong>）</td></tr><tr><td>wds.linkis.rpc.sender.asyn.consumer.thread.max&quot;, 5</td><td>Sender Consumer最大线程数量</td><td></td></tr><tr><td>wds.linkis.rpc.sender.asyn.consumer.freeTime.max</td><td>2m</td><td>Sender Consumer最大空闲时间</td></tr><tr><td>wds.linkis.rpc.sender.asyn.queue.size.max</td><td>300</td><td>Sender 消费队列最大缓存数</td></tr></tbody></table><h3>2. 计算治理配置参数</h3><h4>2.1 Entrance配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.spark.engine.version</td><td>2.4.3</td><td>当用户提交脚本没有指定版本时，采用的默认Spark版本</td></tr><tr><td>wds.linkis.hive.engine.version</td><td>1.2.1</td><td>当用户提交脚本没有指定版本时，采用的默认Hive版本</td></tr><tr><td>wds.linkis.python.engine.version</td><td>python2</td><td>当用户提交脚本没有指定版本时，采用的默认Python版本</td></tr><tr><td>wds.linkis.jdbc.engine.version</td><td>4</td><td>当用户提交脚本没有指定版本时，采用的默认JDBC版本</td></tr><tr><td>wds.linkis.shell.engine.version</td><td>1</td><td>当用户提交脚本没有指定版本时，采用的默认Shell版本</td></tr><tr><td>wds.linkis.appconn.engine.version</td><td>v1</td><td>当用户提交脚本没有指定版本时，采用的默认AppConn版本</td></tr><tr><td>wds.linkis.entrance.scheduler.maxParallelismUsers</td><td>1000</td><td>Entrance支持的最大并发用户数</td></tr><tr><td>wds.linkis.entrance.job.persist.wait.max</td><td>5m</td><td>Entrance等待JobHistory持久化Job的最大时间</td></tr><tr><td>wds.linkis.entrance.config.log.path</td><td>无</td><td>如果不配置，默认采用wds.linkis.filesystem.hdfs.root.path的值</td></tr><tr><td>wds.linkis.default.requestApplication.name</td><td>IDE</td><td>不指定提交系统时的默认提交系统</td></tr><tr><td>wds.linkis.default.runType</td><td>sql</td><td>不指定脚本类型时的默认脚本类型</td></tr><tr><td>wds.linkis.warn.log.exclude</td><td>org.apache,hive.ql,hive.metastore,com.netflix,com.webank.wedatasphere</td><td>默认不向Client端输出的实时WARN级别日志</td></tr><tr><td>wds.linkis.log.exclude</td><td>org.apache,hive.ql,hive.metastore,com.netflix,com.webank.wedatasphere,com.webank</td><td>默认不向Client端输出的实时INFO级别日志</td></tr><tr><td>wds.linkis.instance</td><td>3</td><td>用户每个引擎的默认并发Job数</td></tr><tr><td>wds.linkis.max.ask.executor.time</td><td>5m</td><td>向LinkisManager申请可用EngineConn的最大时间</td></tr><tr><td>wds.linkis.hive.special.log.include</td><td>org.apache.hadoop.hive.ql.exec.Task</td><td>向Client端推送Hive日志时，默认不过滤哪些日志</td></tr><tr><td>wds.linkis.spark.special.log.include</td><td>com.webank.wedatasphere.linkis.engine.spark.utils.JobProgressUtil</td><td>向Client端推送Spark日志时，默认不过滤哪些日志</td></tr><tr><td>wds.linkis.entrance.shell.danger.check.enabled</td><td>false</td><td>是否检查并拦截Shell危险语法</td></tr><tr><td>wds.linkis.shell.danger.usage</td><td>rm,sh,find,kill,python,for,source,hdfs,hadoop,spark-sql,spark-submit,pyspark,spark-shell,hive,yarn</td><td>Shell默认的危险语法</td></tr><tr><td>wds.linkis.shell.white.usage</td><td>cd,ls</td><td>Shell白名单语法</td></tr><tr><td>wds.linkis.sql.default.limit</td><td>5000</td><td>SQL默认的最大返回结果集行数</td></tr></tbody></table><h4>2.2 EngineConn配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.engineconn.resultSet.default.store.path</td><td>hdfs:///tmp</td><td>Job结果集默认存储路径</td></tr><tr><td>wds.linkis.engine.resultSet.cache.max</td><td>0k</td><td>当结果集大小低于多少时，EngineConn端不落盘直接返回给Entrance</td></tr><tr><td>wds.linkis.engine.default.limit</td><td>5000</td><td></td></tr><tr><td>wds.linkis.engine.lock.expire.time</td><td>120000</td><td>引擎锁的最大空闲时间，即Entrance申请到锁后，多久不向EngineConn提交代码则被释放</td></tr><tr><td>wds.linkis.engineconn.ignore.words</td><td>org.apache.spark.deploy.yarn.Client</td><td>Engine向Entrance端推送日志时，默认忽略的日志</td></tr><tr><td>wds.linkis.engineconn.pass.words</td><td>org.apache.hadoop.hive.ql.exec.Task</td><td>Engine向Entrance端推送日志时，默认必须推送的日志</td></tr><tr><td>wds.linkis.engineconn.heartbeat.time</td><td>3m</td><td>EngineConn向LinkisManager的默认心跳间隔</td></tr><tr><td>wds.linkis.engineconn.max.free.time</td><td>1h</td><td>EngineConn的最大空闲时间</td></tr></tbody></table><h4>2.3 EngineConnManager的配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.ecm.memory.max</td><td>80g</td><td>ECM的最大可启动EngineConn的内存</td></tr><tr><td>wds.linkis.ecm.cores.max</td><td>50</td><td>ECM的最大可启动EngineConn的CPU个数</td></tr><tr><td>wds.linkis.ecm.engineconn.instances.max</td><td>50</td><td>最大可启动EngineConn个数，一般建议设置与wds.linkis.ecm.cores.max相同</td></tr><tr><td>wds.linkis.ecm.protected.memory</td><td>4g</td><td>ECM的保护内存，即ECM用于启动EngineConn的内存不能超过 wds.linkis.ecm.memory.max - wds.linkis.ecm.protected.memory</td></tr><tr><td>wds.linkis.ecm.protected.cores.max</td><td>2</td><td>ECM的保护CPU个数，意义与wds.linkis.ecm.protected.memory相同</td></tr><tr><td>wds.linkis.ecm.protected.engine.instances</td><td>2</td><td>ECM的保护实例数</td></tr><tr><td>wds.linkis.engineconn.wait.callback.pid</td><td>3s</td><td>等待EngineConn回传pid的等待时间</td></tr></tbody></table><h4>2.4 LinkisManager的配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.manager.am.engine.start.max.time&quot;</td><td>10m</td><td>LinkisManager启动一个新EngineConn的最大启动时间</td></tr><tr><td>wds.linkis.manager.am.engine.reuse.max.time</td><td>5m</td><td>LinkisManager复用一个已有的EngineConn的最大选择时间</td></tr><tr><td>wds.linkis.manager.am.engine.reuse.count.limit</td><td>10</td><td>LinkisManager复用一个已有的EngineConn的最大轮询次数</td></tr><tr><td>wds.linkis.multi.user.engine.types</td><td>jdbc,es,presto</td><td>LinkisManager在复用一个已有的EngineConn时，哪些引擎的用户不作为复用规则使用</td></tr><tr><td>wds.linkis.rm.instance</td><td>10</td><td>每个用户在每个引擎的默认最大实例数</td></tr><tr><td>wds.linkis.rm.yarnqueue.cores.max</td><td>150</td><td>每个用户在每个引擎的使用队列最大核数</td></tr><tr><td>wds.linkis.rm.yarnqueue.memory.max</td><td>450g</td><td>每个用户在每个引擎的使用队列的最大内存数</td></tr><tr><td>wds.linkis.rm.yarnqueue.instance.max</td><td>30</td><td>每个用户在每个引擎的队列中最多启动的应用数</td></tr></tbody></table><h3>3. 各引擎配置参数</h3><h4>3.1 JDBC引擎配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.jdbc.default.limit</td><td>5000</td><td>默认的最大返回结果集行数</td></tr><tr><td>wds.linkis.jdbc.support.dbs</td><td>mysql=&gt;com.mysql.jdbc.Driver,postgresql=&gt;org.postgresql.Driver,oracle=&gt;oracle.jdbc.driver.OracleDriver,hive2=&gt;org.apache.hive.jdbc.HiveDriver,presto=&gt;com.facebook.presto.jdbc.PrestoDriver</td><td>JDBC引擎支持的驱动</td></tr><tr><td>wds.linkis.engineconn.jdbc.concurrent.limit</td><td>100</td><td>最大并行SQL执行数</td></tr></tbody></table><h4>3.2 Python引擎配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>pythonVersion</td><td>/appcom/Install/anaconda3/bin/python</td><td>Python命令路径</td></tr><tr><td>python.path</td><td>无</td><td>指定Python额外的path，该路径只接受共享存储的路径</td></tr></tbody></table><h4>3.3 Spark引擎配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.engine.spark.language-repl.init.time</td><td>30s</td><td>Scala和Python命令解释器的最大初始化时间</td></tr><tr><td>PYSPARK_DRIVER_PYTHON</td><td>python</td><td>Python命令路径</td></tr><tr><td>wds.linkis.server.spark-submit</td><td>spark-submit</td><td>spark-submit命令路径</td></tr></tbody></table><h3>4. PublicEnhancements配置参数</h3><h4>4.1 BML配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.bml.dws.version</td><td>v1</td><td>Linkis Restful请求的版本号</td></tr><tr><td>wds.linkis.bml.auth.token.key</td><td>Validation-Code</td><td>BML请求的免密token-key</td></tr><tr><td>wds.linkis.bml.auth.token.value</td><td>BML-AUTH</td><td>BML请求的免密token-value</td></tr><tr><td>wds.linkis.bml.hdfs.prefix</td><td>/tmp/linkis</td><td>BML文件存储在hdfs上的前缀文件路径</td></tr></tbody></table><h4>4.2 Metadata配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>hadoop.config.dir</td><td>/appcom/config/hadoop-config</td><td>如果不存在，则默认采用环境变量HADOOP_CONF_DIR的值</td></tr><tr><td>hive.config.dir</td><td>/appcom/config/hive-config</td><td>如果不存在，则默认采用环境变量HIVE_CONF_DIR的值</td></tr><tr><td>hive.meta.url</td><td>无</td><td>HiveMetaStore数据库的URL。如果没有配置hive.config.dir，则该值必须配置</td></tr><tr><td>hive.meta.user</td><td>无</td><td>HiveMetaStore数据库的user</td></tr><tr><td>hive.meta.password</td><td>无</td><td>HiveMetaStore数据库的password</td></tr></tbody></table><h4>4.3 JobHistory配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.jobhistory.admin</td><td>无</td><td>默认的Admin账号，用于指定哪些用户可以查看所有人的执行历史</td></tr></tbody></table><h4>4.4 FileSystem配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.filesystem.root.path</td><td>file:///tmp/linkis/</td><td>用户的Linux本地根目录</td></tr><tr><td>wds.linkis.filesystem.hdfs.root.path</td><td>hdfs:///tmp/</td><td>用户的HDFS根目录</td></tr><tr><td>wds.linkis.workspace.filesystem.hdfsuserrootpath.suffix</td><td>/linkis/</td><td>用户的HDFS根目录后的一级前缀，用户实际根目录为：${hdfs.root.path}${user}${hdfsuserrootpath.suffix}</td></tr><tr><td>wds.linkis.workspace.resultset.download.is.limit</td><td>true</td><td>Client下载结果集时，是否限制下载条数</td></tr><tr><td>wds.linkis.workspace.resultset.download.maxsize.csv</td><td>5000</td><td>当结果集下载为CSV文件时，限制的下载条数</td></tr><tr><td>wds.linkis.workspace.resultset.download.maxsize.excel</td><td>5000</td><td>当结果集下载为Excel文件时，限制的下载条数</td></tr><tr><td>wds.linkis.workspace.filesystem.get.timeout</td><td>2000L</td><td>请求底层文件系统的最大超时时间。（<strong>如果您的HDFS或Linux机器性能较低，建议适当调大该查数</strong>）</td></tr></tbody></table><h4>4.5 UDF配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.udf.share.path</td><td>/mnt/bdap/udf</td><td>共享UDF的存储路径，建议设置为HDFS路径</td></tr></tbody></table><h3>5. MicroService配置参数</h3><h4>5.1 Gateway配置参数</h4><table><thead><tr><th>参数名</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>wds.linkis.gateway.conf.enable.proxy.user</td><td>false</td><td>是否开启代理用户模式，如果开启，则登录用户的请求都会代理到代理用户去执行</td></tr><tr><td>wds.linkis.gateway.conf.proxy.user.config</td><td>proxy.properties</td><td>代理规则的存储文件</td></tr><tr><td>wds.linkis.gateway.conf.proxy.user.scan.interval</td><td>600000</td><td>代理文件的刷新间隔</td></tr><tr><td>wds.linkis.gateway.conf.enable.token.auth</td><td>false</td><td>是否开启Token登录模式，如果开启，则允许以token的方式访问Linkis</td></tr><tr><td>wds.linkis.gateway.conf.token.auth.config</td><td>token.properties</td><td>Token规则的存储文件</td></tr><tr><td>wds.linkis.gateway.conf.token.auth.scan.interval</td><td>600000</td><td>Token文件的刷新间隔</td></tr><tr><td>wds.linkis.gateway.conf.url.pass.auth</td><td>/dws/</td><td>默认放行、不作登录校验的请求</td></tr><tr><td>wds.linkis.gateway.conf.enable.sso</td><td>false</td><td>是否开启SSO用户登录模式</td></tr><tr><td>wds.linkis.gateway.conf.sso.interceptor</td><td>无</td><td>如果开启了SSO登录模式，则需要用户实现SSOInterceptor，用于跳转SSO登录页面</td></tr><tr><td>wds.linkis.admin.user</td><td>hadoop</td><td>管理员用户列表</td></tr><tr><td>wds.linkis.login_encrypt.enable</td><td>false</td><td>用户登录时，密码是否开启RSA加密传输</td></tr><tr><td>wds.linkis.enable.gateway.auth</td><td>false</td><td>是否开启Gateway IP白名单机制</td></tr><tr><td>wds.linkis.gateway.auth.file</td><td>auth.txt</td><td>IP白名单存储文件</td></tr></tbody></table>",43)],m={setup:(i,{expose:n})=>(n({frontmatter:{}}),(i,n)=>(t(),e("div",l,h)))},c={setup(e){const i=n(localStorage.getItem("locale")||"en");return(e,n)=>"en"===i.value?(t(),s(d(o),{key:0})):(t(),s(d(m),{key:1}))}};export{c as default};