(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[942],{50942:(t,e,r)=>{"use strict";r.r(e);var o=r(40540),s=r(21730),n=r(60607),a=r(35736),c=r(25892),p=r.n(c),i=r(52322);let h;const l=p().div(h||(h=(t=>t)`
  position: absolute;
  top: 50%;
  left: 50%;
`)),u=()=>(0,i.jsx)(l,{children:(0,i.jsx)(a.Z,{})});var d=r(91569),m=r(30923),E=r(44958),y=r(98079),_=r(84492);const w=t=>({queryKey:["grpc-history-item",t],queryFn:async()=>{return e=t,y.postmanGateway.get({service:"scribe",path:`/history/${e}`,url:`${_.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});var e}});let I="/";try{var A;I=JSON.parse(null==(A=window)?void 0:A.NAVIGATION_CONTEXT).to}catch(t){}const R=[{path:"/workspace/:workspaceId/grpc-request/create",element:(0,i.jsx)(d.Z,{}),errorElement:(0,i.jsx)(m.RouteErrorBoundary,{appId:"grpc-workbench",errorElementId:"create-request-route"})},{path:"/workspace/:workspaceId/grpc-request/history/:historyId",element:(0,i.jsx)(d.Z,{}),errorElement:(0,i.jsx)(m.RouteErrorBoundary,{appId:"grpc-workbench",errorElementId:"history-request"}),loader:async({params:t})=>{const e=await(async t=>E.cacheClient.getQueryData(w(t).queryKey)||await E.cacheClient.fetchQuery(w(t)))(t.historyId);return(0,n.defer)({requestData:e})}}],T=(0,n.createMemoryRouter)(R,{initialEntries:[I],initialIndex:0});function b(){return(0,i.jsx)(n.RouterProvider,{router:T,fallbackElement:(0,i.jsx)(u,{})})}var g=r(44025);(0,r(15837).initializeAnalytics)(),r(27086);const L=document.querySelector("#grpc-workbench_root");s.render((0,i.jsx)(o.StrictMode,{children:(0,i.jsx)(m.CustomErrorBoundary,{appId:"grpc-workbench",errorElementId:"global-error-boundary",children:(0,i.jsx)(g.ThemeContextProvider,{children:(0,i.jsx)(E.DataFetchCacheProvider,{children:(0,i.jsx)(b,{})})})})}),L)},84492:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var o=r(7560),s=r(69730),n=r.n(s);const a=(0,o.Z)({},n(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},27086:(t,e,r)=>{"use strict";r.r(e)},69730:()=>{}}]);
//# sourceMappingURL=942.58d5d4cfb4380796.js.map