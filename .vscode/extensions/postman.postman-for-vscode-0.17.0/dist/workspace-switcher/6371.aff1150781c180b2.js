(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[6371],{8283:(s,t,e)=>{"use strict";function o(s,t){if(null==s)return{};var e,o,r={},a=Object.keys(s);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=s[e]);return r}e.d(t,{Z:()=>o})},4492:(s,t,e)=>{"use strict";e.d(t,{Z:()=>n});var o=e(7560),r=e(9730),a=e.n(r);const n=(0,o.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},766:(s,t,e)=>{"use strict";e.r(t),e.d(t,{subscribeToWorkspaceEvents:()=>m,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>d,useNavigateToWorkspace:()=>h,useWorkspace:()=>l});var o=e(607);const r=()=>{const{workspaceId:s}=(0,o.useParams)();return s?(s=>(null==s?void 0:s.split("~").pop())||"")(s):""};var a=e(7560),n=e(8283),c=e(4958),p=e(8079),u=e(4492);const i=["data"],l=s=>{const t=(0,c.useDataFetch)(((s,t)=>({queryKey:["workspace",s],queryFn:()=>(async(s,t)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${s}`,method:"GET",signal:t,service:"workspaces"}))(s),enabled:!!s,useErrorBoundary:void 0}))(s)),{data:e}=t,o=(0,n.Z)(t,i);return(0,a.Z)({data:null==e?void 0:e.data},o)},d=()=>{const s=r();return l(s)};var b=e(540),w=e(6081),_=e(4302);const h=()=>{const s=(0,w.useNavigate)();return(0,b.useCallback)((t=>{(0,_.onWorkspaceChange)(t),t&&s("/workspace/"+t)}),[s])},m=s=>{const t=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:s=>{var t;return null==s||null==(t=s.body)||null==(t=t.data)?void 0:t.id},broadcastFilter:s=>{var t;return null==s||null==(t=s.meta)||null==(t=t.timeline)?void 0:t.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"}}),abortController:t}}},9730:()=>{}}]);
//# sourceMappingURL=6371.aff1150781c180b2.js.map