(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[766,9315,7397,25,6371],{7560:(t,s,e)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o.apply(this,arguments)}e.d(s,{Z:()=>o})},98283:(t,s,e)=>{"use strict";function o(t,s){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],s.indexOf(e)>=0||(a[e]=t[e]);return a}e.d(s,{Z:()=>o})},84492:(t,s,e)=>{"use strict";e.d(s,{Z:()=>n});var o=e(7560),a=e(69730),r=e.n(a);const n=(0,o.Z)({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},60766:(t,s,e)=>{"use strict";e.r(s),e.d(s,{subscribeToWorkspaceEvents:()=>v,useActiveWorkspaceId:()=>a,useActiveWorkspaceInfo:()=>b,useNavigateToWorkspace:()=>m,useWorkspace:()=>l});var o=e(60607);const a=()=>{const{workspaceId:t}=(0,o.useParams)();return t?(t=>(null==t?void 0:t.split("~").pop())||"")(t):""};var r=e(7560),n=e(98283),c=e(44958),p=e(98079),u=e(84492);const i=["data"],l=t=>{const s=(0,c.useDataFetch)(((t,s)=>({queryKey:["workspace",t],queryFn:()=>(async(t,s)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${t}`,method:"GET",signal:s,service:"workspaces"}))(t),enabled:!!t,useErrorBoundary:void 0}))(t)),{data:e}=s,o=(0,n.Z)(s,i);return(0,r.Z)({data:null==e?void 0:e.data},o)},b=()=>{const t=a();return l(t)};var d=e(40540),h=e(26081),_=e(54302);const m=()=>{const t=(0,h.useNavigate)();return(0,d.useCallback)((s=>{(0,_.onWorkspaceChange)(s),s&&t("/workspace/"+s)}),[t])},v=t=>{const s=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:t=>{var s;return null==t||null==(s=t.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:t=>{var s;return null==t||null==(s=t.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"}}),abortController:s}}},69730:()=>{}}]);
//# sourceMappingURL=766.eddff2d4f91f2d46.js.map