"use strict";(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[5650],{981:(e,r,s)=>{s.d(r,{f:()=>a});var n=s(540),t=s(1393),o=s(3623),c=s(9972);const a=()=>{const e=(0,c.useActiveWorkspaceId)();(0,n.useEffect)((()=>{if(e)return t.y.subscribe({workspaceId:e,subscriptionHandler:o.t}),()=>{t.y.unsubscribe()}}),[e])}},5650:(e,r,s)=>{s.r(r),s.d(r,{default:()=>n.Z});var n=s(9882)},9882:(e,r,s)=>{s.d(r,{Z:()=>h});var n=s(540),t=s(5892),o=s.n(t),c=s(8560),a=s(607),l=s(4025),i=s(981),u=s(2322);let b;const d=o()(c.Z)(b||(b=(e=>e)`
  height: 100vh;
  width: 100vw;
  min-width: 600px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
`)),h=()=>{const e=(0,n.useRef)(null);return(0,i.f)(),(0,l.usePreventContextMenu)({element:e.current}),(0,u.jsx)(d,{ref:e,direction:"column",children:(0,u.jsx)(a.Outlet,{})})}},5835:(e,r,s)=>{s.d(r,{n:()=>t});var n=s(4025);function t(e,r){const s=(0,n.getTabManager)();for(const n of e){const e=n.op,t=n.value,o=n.path;"remove"===e&&(o.includes("/elements/collections")?s.closeTabByRoute(`/workspace/${r}/collection/${t}`):o.includes("/elements/environments")&&s.closeTabByRoute(`/workspace/${r}/environment/${t}`))}}},3623:(e,r,s)=>{s.d(r,{t:()=>a});var n=s(1219),t=s(5835),o=s(4958),c=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e.COLLECTION_RUN="collectionrun",e}(c||{});const a=(e,{workspaceId:r})=>{var s,a;const l=null==e||null==(s=e.meta)?void 0:s.model,i=e.data,u=null==(a=e.meta)?void 0:a.action;if(l!==c.GLOBALS&&l!==c.WORKSPACE||(0,n.environmentsSubscriptionHandler)(e,{workspaceId:r}),l===c.COLLECTION_RUN)switch(e.meta.action){case"create":case"destroy":(0,o.invalidateCache)(["collection-runs-list",r,e.data.collection])}"update_elements"===u&&(0,t.n)(i,r)}},1393:(e,r,s)=>{s.d(r,{y:()=>t});var n=s(9972);const t=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:s}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:t,abortController:o}=(0,n.subscribeToWorkspaceEvents)(r);e.abortController=o,e.asyncObserver=t,e.observer=await t,e.abortController=null,e.observer.subscribe({next:e=>{s(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(n){e.cleanup(),await e.subscribe({subscriptionHandler:s,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}}}}]);
//# sourceMappingURL=5650.35f612f661b428bc.js.map