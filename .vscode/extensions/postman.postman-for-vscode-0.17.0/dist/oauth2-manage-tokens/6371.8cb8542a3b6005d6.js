"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[6371],{60766:(e,s,a)=>{a.r(s),a.d(s,{subscribeToWorkspaceEvents:()=>y,useActiveWorkspaceId:()=>o,useActiveWorkspaceInfo:()=>d,useNavigateToWorkspace:()=>w,useWorkspace:()=>i});var r=a(60607);const o=()=>{const{workspaceId:e}=(0,r.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var t=a(7560),n=a(98283),u=a(44958),c=a(98079),l=a(84492);const p=["data"],i=e=>{const s=(0,u.useDataFetch)(((e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await c.postmanGateway.post({url:`${l.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:void 0}))(e)),{data:a}=s,r=(0,n.Z)(s,p);return(0,t.Z)({data:null==a?void 0:a.data},r)},d=()=>{const e=o();return i(e)};var b=a(40540),k=a(26081),v=a(54302);const w=()=>{const e=(0,k.useNavigate)();return(0,b.useCallback)((s=>{(0,v.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},y=e=>{const s=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}}}}]);
//# sourceMappingURL=6371.8cb8542a3b6005d6.js.map