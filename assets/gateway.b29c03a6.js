import{o as e,c as t,b as a,e as n,r,l as i,u as o}from"./vendor.1180558b.js";var l="/assets/gateway_server_global.9fae8e50.png",s="/assets/gateway_server_dispatcher.d2241ca2.png",c="/assets/gatway_websocket.3d3c7dfa.png";const u={class:"markdown-body"},d=[a("h2",null,"Gateway Architecture Design",-1),a("h4",null,"Brief",-1),a("p",null,"The Gateway is the primary entry point for Linkis to accept client and external requests, such as receiving job execution requests, and then forwarding the execution requests to specific eligible Entrance services. The bottom layer of the entire architecture is implemented based on “SpringCloudGateway”. The upper layer is superimposed with module designs related to Http request parsing, session permissions, label routing and WebSocket multiplex forwarding. The overall architecture can be seen as follows.",-1),a("h3",null,"Architecture Diagram",-1),a("p",null,[a("img",{src:l,alt:"Gateway diagram of overall architecture"})],-1),a("h4",null,"Architecture Introduction",-1),a("ul",null,[a("li",null,"gateway-core: Gateway’s core interface definition module, mainly defines the “GatewayParser” and “GatewayRouter” interfaces, corresponding to request parsing and routing according to the request; at the same time, it also provides the permission verification tool class named “SecurityFilter”."),a("li",null,"spring-cloud-gateway: This module integrates all dependencies related to “SpringCloudGateway”, process and forward requests of the HTTP and WebSocket protocol types respectively."),a("li",null,"gateway-server-support: The driver module of Gateway, relies on the spring-cloud-gateway module to implement “GatewayParser” and “GatewayRouter” respectively, among which “DefaultLabelGatewayRouter” provides the function of label routing."),a("li",null,"gateway-httpclient-support: Provides a client-side generic class for Http to access Gateway services, which can be implemented based on more."),a("li",null,"instance-label: External instance label module, providing service interface named “InsLabelService” which used to create routing labels and associate with application instances.")],-1),a("p",null,"The detailed design involved is as follows：",-1),a("h4",null,"1、Request Routing And Forwarding (With Label Information)",-1),a("p",null,[n("First, after the dispatcher of “SpringCloudGateway”, the request enters the filter list of the gateway, and then enters the two main logic of “GatewayAuthorizationFilter” and “SpringCloudGatewayWebsocketFilter”. The filter integrates “DefaultGatewayParser” and “DefaultGatewayRouter” classes. From Parser to Router, execute the corresponding parse and route methods. “DefaultGatewayParser” and “DefaultGatewayRouter” classes also contain custom Parser and Router, which are executed in the order of priority. Finally, the service instance selected by the “DefaultGatewayRouter” is handed over to the upper layer for forwarding. Now, we take the job execution request forwarding with label information as an example, and draw the following flowchart: "),a("img",{src:s,alt:"Gateway Request Routing"})],-1),a("h4",null,"2、WebSocket Connection Forwarding Management",-1),a("p",null,[n("By default, “Spring Cloud Gateway” only routes and forwards WebSocket request once, and cannot perform dynamic switching. But under the Linkis’s gateway architecture, each information interaction will be accompanied by a corresponding uri address to guide routing to different backend services. In addition to the “WebSocketService” which is responsible for connecting with the front-end and the client, and the “WebSocketClient” which is responsible for connecting with the backend service, a series of “GatewayWebSocketSessionConnection” lists are cached in the middle. A “GatewayWebSocketSessionConnection” represents the connection between a session and multiple backend service instances. "),a("img",{src:c,alt:"Gateway WebSocket Forwarding"})],-1)],w={setup:(a,{expose:n})=>(n({frontmatter:{}}),(a,n)=>(e(),t("div",u,d)))},p={class:"markdown-body"},h=[a("h2",null,"Gateway 架构设计",-1),a("h4",null,"简述",-1),a("p",null,"Gateway网关是Linkis接受客户端以及外部请求的首要入口，例如接收作业执行请求，而后将执行请求转发到具体的符合条件的Entrance服务中去。 整个架构底层基于SpringCloudGateway做扩展实现，上层叠加了与Http请求解析，会话权限，标签路由和WebSocket多路转发等相关的模组设计，整体架构可见如下。",-1),a("h3",null,"整体架构示意图",-1),a("p",null,[a("img",{src:l,alt:"Gateway整体架构示意图"})],-1),a("h4",null,"架构说明",-1),a("ul",null,[a("li",null,"gateway-core: Gateway的核心接口定义模块，主要定义了GatewayParser和GatewayRouter接口，分别对应请求的解析和根据请求进行路由选择；同时还提供了SecurityFilter的权限校验工具类。"),a("li",null,"spring-cloud-gateway: 该模块集成了所有与SpringCloudGateway相关的依赖，对HTTP和WebSocket两种协议类型的请求分别进行了处理转发。"),a("li",null,"gateway-server-support: Gateway的服务驱动模块，依赖spring-cloud-gateway模块，对GatewayParser、GatewayRouter分别做了实现，其中DefaultLabelGatewayRouter提供了请求标签路由的功能。"),a("li",null,"gateway-httpclient-support: 提供了Http访问Gateway服务的客户端通用类，z可以基于做多实现。"),a("li",null,"instance-label: 外联的实例标签模块，提供InsLabelService服务接口，用于路由标签的创建以及与应用实例关联。")],-1),a("p",null,"涉及的详细设计如下：",-1),a("h4",null,"一、请求路由转发（带标签信息）",-1),a("p",null,[n("请求的链路首先经SpringCloudGateway的Dispatcher分发后，进入网关的过滤器链表，进入GatewayAuthorizationFilter 和 SpringCloudGatewayWebsocketFilter 两大过滤器逻辑，过滤器集成了DefaultGatewayParser和DefaultGatewayRouter。 从Parser到Router，执行相应的parse和route方法，DefaultGatewayParser和DefaultGatewayRouter内部还包含了自定义的Parser和Router，按照优先级顺序执行。最后由DefaultGatewayRouter输出路由选中的服务实例ServiceInstance，交由上层进行转发。 现我们以具有标签信息的作业执行请求转发为例子，绘制如下流程图： "),a("img",{src:s,alt:"Gateway请求路由转发"})],-1),a("h4",null,"二、WebSocket连接转发管理",-1),a("p",null,[n("默认情况下SpringCloudGateway对WebSocket请求只做一次路由转发，无法做动态的切换，而在Linkis Gateway架构下，每次信息的交互都会附带相应的uri地址，引导路由到不同的后端服务。 除了负责与前端、客户端连接的webSocketService以及负责和后台服务连接的webSocketClient, 中间会缓存一系列GatewayWebSocketSessionConnection列表，一个GatewayWebSocketSessionConnection代表一个session会话与多个后台ServiceInstance的连接。 "),a("img",{src:c,alt:"Gateway的WebSocket转发管理"})],-1)],y={setup:(a,{expose:n})=>(n({frontmatter:{}}),(a,n)=>(e(),t("div",p,h)))},g={setup(t){const a=r(localStorage.getItem("locale")||"en");return(t,n)=>"en"===a.value?(e(),i(o(w),{key:0})):(e(),i(o(y),{key:1}))}};export{g as default};