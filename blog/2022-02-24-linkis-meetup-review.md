
---
Feature introduction and application practices of Linkis 1.0.3

Linkis 1.0.3 新版本的特性介绍以及使用实践

---
>Recently，The first meetup in 2022 was held by the WeDataSphere and Apache Linkis（incubating）communities.
This event invited Sargent Di of Linkis PPMC and Zhang Yanzhao of Linkis contributor to share the《Features of the New Version of Linkis1.0.3》 and 《The Transformation of Enterprise Big Data Platform Based on Linkis》

近日，WeDataSphere和Apache Linkis (Incubating)社区举办了2022年第一场 Meetup。
本次活动邀请了Linkis PPMC 邸帅 和 Linkis Contributor 张延召，给大家带来《Linkis 1.0.3 新版本特性介绍》和《基于Linkis的企业大数据平台改造之路》的分享。


##  《Features of the New Version of Linkis1.0.3》by Sargent Di Linkis PPMC 

### 1.Introduction to Linkis

Linkis builds a layer of computing middleware between the upper application and the lower engine, solves the problem of "computing governance" in a standardized and reusable way, and provides powerful connectivity, control, orchestration, expansion and reuse capabilities.
By using the rest / websocket / JDBC and other standard interfaces provided by linkis, the upper application can easily connect and access the lower engine such as MySQL / spark / hive / Presto / Flink, and realize the horizontal interworking of user resources such as variables, functions and script files across the upper application.
By decoupling the upper application from the lower engine, linkis simplifies the complex network call relationship of the data platform, reduces the overall complexity, saves the development and operation and maintenance costs, and makes the data platform more flexible and controllable.

● Linkis 在上层应用程序和底层引擎之间构建了一层计算中间件，以标准化可重用的方式解决“计算治理”问题，提供了强大的连通、管控、编排、扩展和复用能力。

● 通过使用Linkis 提供的REST/WebSocket/JDBC 等标准接口，上层应用可以方便地连接访问MySQL/Spark/Hive/Presto/Flink等底层引擎，同时实现了变量、 函数、脚本文件等用户资源的跨上层应用横向互通。

● 通过将上层应用和底层引擎解耦，Linkis 简化了数据平台复杂的网状调用关系，降低了整体复杂度，节约了开发和运维成本，让数据平台变得更加灵活柔性可控。


Github repo：https://github.com/apache/incubator-Linkis


### 2. New Feature in Linkis 1.0.3 

Apache Linkis(Incubating) 1.0.3 contains all Project Linkis-1.0.3.  
Linkis 1.0.3 is the first version update into Apache incubation.
It mainly completed the construction of ASF infrastructure，including license improvement /package name modification，added EngineConn's support for Operator and other functions，and fixed the bugs in version1.0.2 fed back by the community.

该版本是Linkis进入Apache孵化的第一个版本。主要完成ASF基础设施建设，包括License完善/包名修改等，增加EngineConn对Operator的支持等功能，修复社区反馈的1.0.2版本中的bug。


#### Main functions:

a)  HTTP restful API style replaces jersey with spring MVC.

b)  Replace codehaus JSON with fastxml JSON.

c)  Support engineconn / onceengineconn universal operator.

d)  Support for proxy users using Kerberos.

Learning more: https://github.com/apache/incubator-linkis

## 《The Transformation of Enterprise Big Data Platform Based on Linkis》by Zhang Yanzhao  Linkis contributor、Big Data Development Engineer

### 1.Introduction to Troila Big Data Platform

Troila Big Data Platform is a self-developed enterprise level big data platform product, which aims to help enterprises realize convenient development and data capitalization. As an upper layer application, it submits the workflow scheduling task to dolphin scheduler and the temporary task to linkis directly. It can also analyze the task parameters and submit the real-time task to linkis directly.

郎数大数据平台，是自研的企业级大数据平台产品，旨在助力企业实现开发便捷化、数据资产化。其作为上层应用，将工作流调度任务提交至DolphinScheduler，临时任务直接提交至Linkis，也可以实现解析任务参数，将实时任务直接提交至Linkis。  


### 2.Why introduce Linkis

With the development of business，there are more and more system modules, complex dependencies and huge deployment packages, resulting in long deployment time.When running data analysis，it is easy to make mistake，which will interfere with other tasks，cause memory overflow，affect the whole application and reduce the stability of the service.
Moreover, in the connection between the upper application and the lower engine, the connection, execution and state management of various components need to be maintained. The code is becoming more and more complex and difficult to expand. After investigation, it is found that the design idea and core features of linkis are a good solution.
As the computing middleware between the upper application and the lower engine, linkis decouples the application layer and the engine layer, simplifies the complex call relationship, reduces the overall complexity, and effectively saves the overall development and maintenance cost. In addition, with the support of linkis's unified entrance, stability and rich computing and storage engine, it can effectively help us solve the above business pain points.

![image.png](https://s2.loli.net/2022/03/08/uMiNwABHGhbmjfU.png)

随着业务发展，系统模块越来越多，依赖繁杂，部署包庞大，导致部署耗时长。在运行数据分析时，容易出错会干扰其它任务，造成内存溢出，影响到整个应用，使服务稳定性降低。并且，上层应用和底层引擎的连接中，需要维护各个组件的连接、执行、状态管理等，代码日渐复杂，也不易扩展。经过调研， 发现 Linkis 的设计思路和核心特性是一个很好的解决方案 。

Linkis 作为上层应用和底层引擎之间的计算中间件，将应用层和引擎层解耦，简化了复杂的调用关系，降低了整体复杂度，有效节约了整体开发和维护成本。另外，在 Linkis 的统一入口、稳定性和丰富的计算存储引擎的加持下，能够有效的帮助我们解决上述业务痛点。

### 3.Dolphin scheduler on Linkis Practice

In terms of task addition, in order to avoid supporting both dolphin schedule and linkis at the same time, we hand over the specific operations to perform tasks to linkis for unified completion. Dolphin schedule only configures and schedules the workflow, and encapsulates its split tasks into submittableinteractive job as the task of linkis, Submit to linki for unified operation of jobs.

在任务新增方面，为了避免在 DolphinSchedule 和Linkis两边同时要做支持，我们将具体去执行任务的操作都交给 Linkis 来统一完成， DolphinSchedule只进行工作流的配置调度，并把它拆分后的任务封装成 SubmittableInteractiveJob，作为 Linkis的任务，提交到 linki 统一进行作业的运行。    

![image.png](https://s2.loli.net/2022/03/08/IkcnVterX1YoAE5.png)

In terms of installation and testing, it is inevitable to encounter some small problems. I share it with you as a reference.
Permission problem: error: could not find or load main class com webank. wedatasphere. Linkis. engineconn. launch. The engine connserver reported an error. After troubleshooting, it was found that the engine could not be started due to the failure to read the configuration file, insufficient permissions or unable to load the main class. WDS is turned on Linkis. storage. enable. io. Proxy proxy configuration and engine initialization to engineconn_ ROOT_ The dir directory is solved after recursive authorization.

The JDBC engine supports Clickhouse: no obvious error is reported, and the task is always running; Manually introduce dependencies into the JDBC engine to eliminate conflicting dependencies and enable it to support the Clickhouse data source.

在安装测试方面，在所难免的遇到了点小问题，在此分享给大家，作为借鉴。
权限问题 ：出现Error: Could not find or load main class com.webank.wedatasphere.Linkis.engineconn.launch.EngineConnServer的报错， 排查后发现是由于无法读取配置文件、权限不足或无法加载主类等报错，导致引擎无法启动。在开启了wds.Linkis.storage.enable.io.proxy 代理配置和引擎初始化对 ENGINECONN_ROOT_DIR 目录递归授权后得到了解决。
JDBC引擎支持ClickHouse ：无明显报错，任务一直处于运行状态；在JDBC引擎中手动引入依赖，排除冲突的依赖，使其支持ClickHouse数据源之后问题得到解决。

In the future, we will continue to optimize the application of linkis in the business system, and look forward to exchanging experience with you.

在未来我们会继续优化Linkis在业务系统中的应用，也期待和大家交流经验。 


####   *The above is a brief introduction. Please visit video playback for details.playback:https://www.bilibili.com/video/BV1La411h7Pf?spm_id_from=333.999.0.0*




