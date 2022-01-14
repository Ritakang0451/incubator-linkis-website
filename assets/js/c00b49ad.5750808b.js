"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2367],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),g=r,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},822:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"Overview",sidebar_position:1},c="LinkisManager Architecture Design",s={unversionedId:"architecture/computation_governance_services/linkis_manager/overview",id:"version-1.0.2/architecture/computation_governance_services/linkis_manager/overview",title:"Overview",description:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.",source:"@site/versioned_docs/version-1.0.2/architecture/computation_governance_services/linkis_manager/overview.md",sourceDirName:"architecture/computation_governance_services/linkis_manager",slug:"/architecture/computation_governance_services/linkis_manager/overview",permalink:"/docs/latest/architecture/computation_governance_services/linkis_manager/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/computation_governance_services/linkis_manager/overview.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/architecture/computation_governance_services/overview"},next:{title:"App Manager",permalink:"/docs/latest/architecture/computation_governance_services/linkis_manager/app_manager"}},u=[{value:"1. Architecture Diagram",id:"1-architecture-diagram",children:[{value:"Noun explanation",id:"noun-explanation",children:[],level:3}],level:2},{value:"2. Introduction to the second-level module",id:"2-introduction-to-the-second-level-module",children:[{value:"2.1. Application management module linkis-application-manager",id:"21-application-management-module-linkis-application-manager",children:[],level:3},{value:"2. Label management module linkis-label-manager",id:"2-label-management-module-linkis-label-manager",children:[],level:3},{value:"4. Monitoring module linkis-manager-monitor",id:"4-monitoring-module-linkis-manager-monitor",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linkismanager-architecture-design"},"LinkisManager Architecture Design"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.  "),(0,i.kt)("h2",{id:"1-architecture-diagram"},"1. Architecture Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture Diagram",src:t(527).Z}),"  "),(0,i.kt)("h3",{id:"noun-explanation"},"Noun explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EngineConnManager (ECM): Engine Manager, used to start and manage engines."),(0,i.kt)("li",{parentName:"ul"},"EngineConn (EC): Engine connector, used to connect the underlying computing engine."),(0,i.kt)("li",{parentName:"ul"},"ResourceManager (RM): Resource Manager, used to manage node resources.")),(0,i.kt)("h2",{id:"2-introduction-to-the-second-level-module"},"2. Introduction to the second-level module"),(0,i.kt)("h3",{id:"21-application-management-module-linkis-application-manager"},"2.1. Application management module linkis-application-manager"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager is used for unified scheduling and management of engines:  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Interface/Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Main Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMInfoService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager information query and modification functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMRegisterService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager registration function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager's creation, query, and closing functions of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineAskEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of querying EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnStatusCallbackService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of processing EngineConn status callbacks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineCreateService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of creating EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineInfoService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConn query function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineKillService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the stop function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineRecycleService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the recycling function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineReuseService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the reuse function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineStopService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the self-destruct function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineSwitchService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the engine switching function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AMHeartbeatService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides EngineConnManager and EngineConn node heartbeat processing functions")))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The process of applying for an engine through AppManager is as follows:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"AppManager",src:t(3383).Z}),"  "),(0,i.kt)("h3",{id:"2-label-management-module-linkis-label-manager"},"2. Label management module linkis-label-manager"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","LabelManager provides label management and analysis capabilities.  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Interface/Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Main Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the function of adding, deleting, modifying and checking labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ResourceLabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides resource label management functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UserLabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides user label management functions")))),(0,i.kt)("p",null,"The LabelManager architecture diagram is as follows:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"ResourceManager",src:t(1281).Z}),"  "),(0,i.kt)("h3",{id:"4-monitoring-module-linkis-manager-monitor"},"4. Monitoring module linkis-manager-monitor"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Monitor provides the function of node status monitoring."))}m.isMDXComponent=!0},3383:function(e,n,t){n.Z=t.p+"assets/images/AppManager-01-dce0763edae9da9bd59a6589c3a76042.png"},527:function(e,n,t){n.Z=t.p+"assets/images/LinkisManager-01-157c5229093110f06fd878491e57bf2c.png"},1281:function(e,n,t){n.Z=t.p+"assets/images/ResourceManager-01-ec200341a43bb1a04fc091123438d093.png"}}]);