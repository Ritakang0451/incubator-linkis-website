"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[5206],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(i),m=a,k=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return i?n.createElement(k,l(l({ref:t},u),{},{components:i})):n.createElement(k,l({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},2135:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),l=["components"],o={title:"Release Notes",sidebar_position:.1},s=void 0,p={unversionedId:"release-notes-rc",id:"release-notes-rc",title:"Release Notes",description:"Apache Linkis(incubating) 1.0.3 includes all of Project Linkis-1.0.3.",source:"@site/docs/release-notes-rc.md",sourceDirName:".",slug:"/release-notes-rc",permalink:"/docs/1.0.3/release-notes-rc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release-notes-rc.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"Release Notes",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.0.3/introduction"},next:{title:"Quick Deployment",permalink:"/docs/1.0.3/deployment/quick_deploy"}},u=[{value:"New Feature",id:"new-feature",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"Others",id:"others",children:[],level:2},{value:"Credits",id:"credits",children:[],level:2}],c={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.0.3 includes all of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/13"},"Project Linkis-1.0.3"),"."),(0,r.kt)("p",null,"This version is the first version of Linkis entering Apache incubation. It mainly completes the ASF infrastructure construction including license improvement/package name modification, etc., adds EngineConn support for Operator and other features, and fixes community feedback about 1.0.2 version bugs."),(0,r.kt)("p",null,"The following key features are added: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the http restful api uses springmvc instead of jersey"),(0,r.kt)("li",{parentName:"ul"},"replace codehaus json with fastxml json"),(0,r.kt)("li",{parentName:"ul"},"support of EngineConn/OnceEngineConn common operators"),(0,r.kt)("li",{parentName:"ul"},"support proxy user with kerberos")),(0,r.kt)("p",null,"Abbreviations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CGS: Computation Governance Services"),(0,r.kt)("li",{parentName:"ul"},"PES: Public Enhancement Services"),(0,r.kt)("li",{parentName:"ul"},"MGS: Microservice Governance Services")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1002"},"[Linkis-1002]")," the http restful api uses springmvc instead of jersey"),(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1038"},"[Linkis-1038]")," replace codehaus json with fastxml json"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Engineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1027"},"[Linkis-1027]")," support proxy user with kerberos"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1043"},"[Linkis-1043]")," support engine operator"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/946"},"[Linkis-946]")," support IP address for service discovery service call"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1078"},"[Linkis-1078]")," support of EngineConn/OnceEngineConn common operators")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1026"},"[Linkis-1026]")," enhancement of data export to excel "),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1036"},"[Linkis-1036]")," file permission optimization of local file/IO proxy mode"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1185"},"[Linkis-1185]")," add some code specification checking rules"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1183"},"[Linkis-1183]")," optimize computation orchestrator code"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1064"},"[Linkis-1064]")," support whitelist api configuration that can be called without user login verification "),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1030"},"[Linkis-1030]")," transfer custom env from ecm to engine"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1083"},"[Linkis-1083]")," unify the exception class of engineConnPlugin in one package"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1203"},"[Linkis-1203]")," optimize the logic of tag update/delete"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1069"},"[Linkis-1069]")," add kafka,json and hadoop-mapreduce-client-core jar in flink engine"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1117"},"[Linkis-1117]")," support kerberos auth type for linkis jdbc"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1167"},"[Linkis-1167]")," processEngineConnLaunch add support for JAVA_HOME environment variable"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-ComputationClient]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1126"},"[Linkis-1126]")," support python matplotlib to display pictures"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1206"},"[Linkis-1206]")," optimize entrance logic and add taskID to distinguish tasks"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1209"},"[Linkis-1209]")," optimize multiple features of manager common"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1213"},"[Linkis-1213]")," optimized support for relationship between the long-lived label and the node not be deleted"),(0,r.kt)("li",{parentName:"ul"},"[","PES-PublicService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1211"},"[Linkis-1211]")," optimize the jobhistory update logic"),(0,r.kt)("li",{parentName:"ul"},"[","PES-Metadata]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1224"},"[Linkis-1224]")," optimize the login user association limit of the query results of the datasource/dbs http interface")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1053"},"[Linkis-1053]")," fix the data insertion may fail due to the length of the database table field"),(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1087"},"[Linkis-1087]")," delete duplicate DDL"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1058"},"[Linkis-1058]")," fix upload cannot be compressed when there are subdirectories"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1223"},"[Linkis-1223]")," upgrade log4j version to 2.17.0"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1052"},"[Linkis-1052]")," fix cause failure to get routing instances when the hostname starts with the application name"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1014"},"[Linkis-1014]")," fix wrong usage of object equality judgment"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1054"},"[Linkis-1054]")," fix instance label parase failed when hostname contains servicename."),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1074"},"[Linkis-1074]")," fixes a NPE of http api 'rm/userresources'"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1101"},"[Linkis-1101]")," fix the issue that the monitor stops the engine when the engine does not exist"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1210"},"[Linkis-1210]")," fix the bug about instance check and engine label exclusion"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1214"},"[Linkis-1214]")," fix multiple Bugs with high concurrency in RM\u3000module"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1216"},"[Linkis-1216]")," remove node monitor moduler from am"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1222"},"[Linkis-1222]")," add successful and failed ecm registration responses "),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1093"},"[Linkis-1093]")," fix the permission bypass bug that may be caused by the pass auth uri being empty characters"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1105"},"[Linkis-1105]")," modify the weak password problem of the default test account of linkis"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1234"},"[Linkis-1234]")," fix this issue that memory leak problem of SSO login "),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1199"},"[Linkis-1199]"),' fix issue SqlCodeParser has a bug that splits the escaped ";" into multiple SQL'),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1073"},"[Linkis-1073]")," fix http api 'entrance/{id}/killJobs' exception caused by unused parameters {id}"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1106"},"[Linkis-1106]")," varSubstitutionInterceptor get code type bug fix"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1149"},"[Linkis-1149]")," fix the problem of after the job task completed,the front cannot obtain the progess info data"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1205"},"[Linkis-1205]")," fix oom bug for LogWirter"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1113"},"[Linkis-1113]")," fix the sql statement error when the bml resource data record is updated"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/923"},"[Linkis-923]")," fix a bug that JDBC engine connection url is not configured"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Spark]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1017"},"[Linkis-1017]")," fixes a spark3 engine compilation error"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1129"},"[Linkis-1128]")," fix flink engine insert problem "),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugins-Hive]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1231"},"[Linkis-1231]")," fix the progress bug of the engine pushing multiple sub-job"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-BmlServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1155"},"[Linkis-1155]")," fix the problem of using mysql reserved words in sql statement"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-CSServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1160"},"[Linkis-1160]")," fix NPE in CsJobListener"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1179"},"[Linkis-1179]")," fix the bug caused by the concurrency of orchestrator"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1186"},"[Linkis-1186]")," fix the issue that the tasks queued by orchestrator cannot be killed"),(0,r.kt)("li",{parentName:"ul"},"[","Console]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1121"},"[Linkis-1121]")," get protocol from current request,remove hard code of 'http'")),(0,r.kt)("h2",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons&MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1092"},"[Linkis-1192]")," third-party dependencies of mysql-connector-java which violates apache licensing policy, because of the apache licensing policy, project cannot dependency on mysql-connector-java, if only for your own project used, you can rely on mysql-connector-java in your own project."),(0,r.kt)("li",{parentName:"ul"},"[","Commons&MGS-LinkisEureka]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1291"},"[Linkis-1291]")," remove the jar package io.github.x-stream with unclear license attribution category:mxparser"),(0,r.kt)("li",{parentName:"ul"},"[","Console]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1301"},"[Linkis-1301]")," remove font files with unknown license authorization and front-end resource files such as unused image icons")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.0.3 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors!"))}h.isMDXComponent=!0}}]);