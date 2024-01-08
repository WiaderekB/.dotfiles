"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[4427],{4427:(e,t,r)=>{r.d(t,{Z:()=>qt});var s=r(7560),n=r(540),i=r(5892),o=r.n(i),a=r(949),l=r(3587),c=r.n(l),d=r(6930),h=r.n(d),u=r(8391),p=r(5736),x=r(7651),g=r(605),y=r(923),m=r(6081),v=r(8722),f=r(6122),j=r(5837),w=r(2322);function b({workspaceId:e}){const t=(0,m.useNavigate)();return(0,w.jsx)(y.GenericErrorMessage,{illustration:"illustration-no-history",title:"You haven't sent any requests.",description:"Any request you send in this workspace will appear here.",primaryAction:(0,w.jsx)(g.Z,{type:"primary",text:"Show me how",onClick:()=>{j.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"show-me-how",value:1}),t(`/workspace/${e}/request/create?requestId=${(0,v.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",requestData:f.Base64.encode(JSON.stringify({data:{url:"https://postman-echo.com/get",method:"GET",workspace:e}}))})}})})}function k({searchQuery:e}){return(0,w.jsx)(y.GenericErrorMessage,{illustration:"illustration-no-history",title:`No results found for "${e}"`,description:"Please try again using different keywords, and don’t forget to check for typos."})}function C(e){return"more"===e.type?32:28}var E=r(4926);const Z="yyyy MM dd",I=(e,t,r,s="asc")=>{let n=0,i=e.length;for(;n<i;){const o=n+i>>>1;("asc"===s?r(e[o])<r(t):r(e[o])>r(t))?n=o+1:i=o}const o=n;return e.splice(o,0,t),e},N=e=>(0,E.parse)(e,Z,new Date).getTime(),L=(e,t)=>({id:e,type:"meta",depth:0,value:(0,E.parse)(e,Z,new Date),children:t}),S=e=>+e.createdAt,M=(e,t,r)=>{if(null==e)return[];let s=[];const n=(e=>{const t=new Map;for(const r of e){const e=(0,E.format)(r.createdAt,Z);if(t.has(e)){const s=t.get(e);I(s,r,S,"desc")}else t.set(e,[r])}return t})([...e,...t]),i=[...n.keys()].sort(((e,t)=>N(t)-N(e)));for(const e of i){const t=n.get(e),i=L(e,null!=t?t:[]),o=r.has(e)?[]:null!=t?t:[];s=[...s,i,...o]}return s};var O=r(8560),R=r(2420),P=r(4691),T=r(8263),z=r(9824),A=r(7282),D=r(7647),_=r(9225),$=r(9972);let U;const q=o()(O.Z)(U||(U=(e=>e)`
  flex-grow: 1;
  margin: var(--spacing-s);
`));function H(e){const t=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(q,{alignItems:"center",justifyContent:"space-between",gap:"spacing-s",children:[(0,w.jsx)(R.Z,{onChange:t=>e.onSearchQueryChange(t.target.value),value:e.searchQuery,placeholder:"Filter",prefix:(0,w.jsx)(D.Z,{}),onClear:()=>e.onSearchQueryChange(""),"data-testid":"history-top-bar-search-input"}),(0,w.jsxs)(P.Z,{children:[(0,w.jsx)(T.Z,{children:(0,w.jsx)(g.Z,{"data-testid":"history-top-bar-menu-button",icon:(0,w.jsx)(_.Z,{}),type:"tertiary"})}),(0,w.jsx)(z.Z,{children:(0,w.jsx)(A.Z,{onClick:()=>(0,u.deleteAllHistory)(t),type:"destructive",children:"Clear All"})})]})]})}let Q;const W=o().ul(Q||(Q=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .indent {
    flex: 0 0 var(--spacing-s);
    box-sizing: border-box;
    height: inherit;
    border-right: thin solid transparent;
  }

  &:hover,
  &:focus {
    .indent {
      border-right: thin solid var(--border-color-default);
    }
  }
`)),B=(0,n.forwardRef)(((e,t)=>(0,w.jsx)(W,(0,s.Z)({role:"tree",tabIndex:0,ref:t},e,{children:e.children}))));B.displayName="forwardRef(ReactWindowList)";const F=B;var K=r(8283),G=r(2723),V=r.n(G),X=r(3723),J=r.n(X),Y=r(1397),ee=r(3088);let te;const re={PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"},se=e=>e?re[e]||e.slice(0,5):null,ne=o().div(te||(te=(e=>e)`
  color: ${0};
`),(({method:e})=>{switch(e){case"GET":return"var(--base-color-success, #0CBB52)";case"PUT":return"var(--base-color-info, #097BED)";case"POST":return"var(--base-color-warning, #FFB400)";case"PATCH":return"var(--content-color-patch-method)";case"OPTIONS":return"var(--content-color-options-method)";case"DELETE":return"var(--base-color-error, #EB2013)";default:return"var(--content-color-primary, #212121)"}}));function ie(e){const t=e.method.toUpperCase();return(0,w.jsx)(ne,{method:t,children:(0,w.jsx)("div",{children:se(t)})})}let oe,ae,le,ce,de=e=>e;const he=o()(m.Link)(oe||(oe=de`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: var(--content-color-primary);

  &:hover {
    color: var(--content-color-primary);
  }
`)),ue=o().span(ae||(ae=de`
  flex: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: var(--spacing-s, 8px);
  height: var(--size-xs, 16px);
  min-width: 32px;
  font-size: 9px;
`)),pe=o().span(le||(le=de`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),xe=o().div(ce||(ce=de`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  padding: var(--spacing-xs) 0;
  color: var(--content-color-tertiary);
  border-top: thin solid var(--border-color-default);
  border-bottom: thin solid var(--border-color-default);
`));let ge,ye,me,ve=e=>e;const fe=o()(g.Z)(ge||(ge=ve`
  height: var(--spacing-xl);
  margin-left: auto;
`)),je=o()(he)(ye||(ye=ve`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),we=o().div(me||(me=ve`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function be(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(we,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(je,{to:`/workspace/${s}/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,children:[(0,w.jsx)(ue,{children:(0,w.jsx)(ie,{method:e.method})}),(0,w.jsx)(Y.Z,{content:e.url,children:(0,w.jsx)(pe,{children:e.url})})]}),t&&(0,w.jsx)(fe,{"data-testid":"delete-http-history-item",onClick:()=>{(0,u.deleteHttpHistoryItem)(s,[`${e.id}`]).catch((()=>{}))},icon:(0,w.jsx)(ee.Z,{}),type:"tertiary"})]})}var ke=r(9706);let Ce,Ee,Ze,Ie=e=>e;const Ne=o()(g.Z)(Ce||(Ce=Ie`
  height: var(--spacing-xl);
  margin-left: auto;
`)),Le=o()(he)(Ee||(Ee=Ie`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),Se=o().div(Ze||(Ze=Ie`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function Me(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)(Se,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(Le,{to:`/workspace/${s}/grpc-request/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,children:[(0,w.jsx)(ue,{children:(0,w.jsx)(ke.Z,{color:"content-color-info"})}),(0,w.jsx)(Y.Z,{content:e.url,children:(0,w.jsx)(pe,{children:e.url})})]}),t&&(0,w.jsx)(Ne,{"data-testid":"delete-grpc-history-item",onClick:()=>{(0,u.deleteMultiprotocolHistory)(s,[e.id]).catch((()=>{}))},icon:(0,w.jsx)(ee.Z,{}),type:"tertiary"})]})}var Oe=r(4306),Re=r(7747);let Pe,Te,ze,Ae=e=>e;const De=o()(g.Z)(Pe||(Pe=Ae`
  height: var(--spacing-xl);
  margin-left: auto;
`)),_e=o()(he)(Te||(Te=Ae`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),$e=o().div(ze||(ze=Ae`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function Ue(e){const t="ws-raw-request"===e.type?Oe.Z:Re.Z,[r,s]=(0,n.useState)(!1),i=(0,$.useActiveWorkspaceId)();return(0,w.jsxs)($e,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,w.jsxs)(_e,{to:`/workspace/${i}/${e.type}/history/${e.id}`,customNavEvent:m.OPEN_EXTENSION_URL,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,w.jsx)(ue,{children:(0,w.jsx)(t,{color:"content-color-brand"})}),(0,w.jsx)(Y.Z,{content:e.url,children:(0,w.jsx)(pe,{children:e.url})})]}),r&&(0,w.jsx)(De,{"data-testid":"delete-ws-history-item",onClick:()=>{(0,u.deleteMultiprotocolHistory)(i,[e.id]).catch((()=>{}))},icon:(0,w.jsx)(ee.Z,{}),type:"tertiary"})]})}var qe=r(3341),He=r(6415);const Qe=(e,t)=>{const r=(0,E.startOfDay)(new Date),s=(0,E.addDays)(r,-1);return+r<=+e?"Today":+s<=+e?"Yesterday":(0,E.format)(e,t)};let We,Be,Fe,Ke,Ge,Ve=e=>e;const Xe=o()(g.Z)(We||(We=Ve`
  margin-left: auto;
  height: var(--spacing-xl);
`)),Je=o().div(Be||(Be=Ve`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-right: var(--spacing-s);
`)),Ye=o().div(Fe||(Fe=Ve`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`)),et=o().div(Ke||(Ke=Ve`
  margin-right: var(--spacing-s, 8px);
  display: flex;
  justify-content: center;
  align-items: center;
`)),tt=o().div(Ge||(Ge=Ve`
  user-select: none;
  font-size: var(--text-size-m, 12px);
  font-weight: var(--text-weight-regular, 400);
  color: var(--content-color-secondary, var(--grey-50));
`));function rt(e){const[t,r]=(0,n.useState)(!1);return(0,w.jsxs)(Je,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(Ye,{onClick:()=>e.onClick&&e.onClick(e.id,e.isCollapsed),children:[(0,w.jsx)(et,{children:e.isCollapsed?(0,w.jsx)(qe.Z,{}):(0,w.jsx)(He.Z,{})}),(0,w.jsx)(tt,{children:Qe(e.date,"MMMM dd")})]}),t&&(0,w.jsx)(Xe,{"data-testid":"delete-history-day-meta-item",onClick:()=>(()=>{const t=e.children.map((e=>({id:e.id,type:e.type})));(0,u.deleteHistory)(e.workspaceId,t)})(),icon:(0,w.jsx)(ee.Z,{}),type:"tertiary"})]})}let st;const nt=o().div(st||(st=(e=>e)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`));function it({srText:e="Loading more items"}){return(0,w.jsx)(xe,{children:(0,w.jsxs)(nt,{children:[(0,w.jsx)(p.Z,{size:"small"}),(0,w.jsx)("span",{className:"sr-only",children:e})]})})}var ot=r(7913),at=r(2658),lt=r(4181);let ct,dt,ht,ut=e=>e;const pt=o()(g.Z)(ct||(ct=ut`
  height: var(--spacing-xl);
  margin-left: auto;
`)),xt=o().div(dt||(dt=ut`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),gt=o().div(ht||(ht=ut`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function yt(e){const[t,r]=(0,n.useState)(!1),s=(0,$.useActiveWorkspaceId)(),i=(0,m.useNavigate)(),o=(0,at.useDeleteCollectionRun)(),{userCanDeleteHistory:a}=(0,lt.useWorkspacePermissions)(s),{addToast:l}=(0,x.ZP)();return(0,w.jsxs)(gt,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,w.jsxs)(xt,{onClick:()=>{i(`/workspace/${s}/run/${e.id}`,{state:JSON.stringify({additionalContext:{id:e.id,loadFromHistory:!0,additionalContext:{payload:{collectionId:e.collection}}}})},{customNavEvent:m.OPEN_EXTENSION_URL})},children:[(0,w.jsx)(ue,{children:(0,w.jsx)(ot.Z,{color:"content-color-secondary"})}),(0,w.jsx)(Y.Z,{content:e.name,children:(0,w.jsx)(pe,{children:e.name})})]}),t&&(0,w.jsx)(pt,{"data-testid":"delete-http-history-item",isDisabled:!a,onClick:()=>{o.mutate({runId:e.id,userId:e.owner,workspaceId:s,collectionId:e.collection},{onError:()=>{l({status:"error",description:"Could not delete the collection run."})}})},icon:(0,w.jsx)(ee.Z,{}),type:"tertiary"})]})}const mt=["item","workspaceId","style"];let vt;const ft=o().li(vt||(vt=(e=>e)`
  display: flex;
  height: 28px;
  align-items: center;
  font-size: var(--text-size-m, 12px);
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  color: var(--content-color-primary, var(--grey-90));

  /* Depth starts with 0 index */
  padding: var(--spacing-zero) var(--spacing-s);

  > * {
    box-sizing: border-box;
  }

  .indent + *:not(.indent) {
    padding-right: var(--spacing-s);
  }

  &.action {
    cursor: pointer;

    /* Backwards compatibility */
    &:hover {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }

    &:has(*:hover),
    &:has(*:focus) {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }
  }
`)),jt=e=>{const{item:t,workspaceId:r,isCollapsed:n,onCollapse:i}=e;switch(t.type){case"grpc-request":return(0,w.jsx)(Me,(0,s.Z)({},t));case"request":return(0,w.jsx)(be,(0,s.Z)({},t));case"ws-raw-request":case"ws-socketio-request":return(0,w.jsx)(Ue,(0,s.Z)({},t));case"meta":return(0,w.jsx)(rt,{id:t.id,workspaceId:r,children:t.children,date:t.value,isCollapsed:n,onClick:i});case"more":return(0,w.jsx)(it,{});case"collectionrun":return(0,w.jsx)(yt,(0,s.Z)({},t));default:return null}},wt=e=>{const{item:t,workspaceId:r,style:n}=e,i=(0,K.Z)(e,mt),o=0===t.depth?!i.isCollapsed:void 0;return(0,w.jsxs)(ft,{className:J()({action:"more"!==t.type}),style:n,role:"treeitem","aria-expanded":o,tabIndex:-1,children:[Array.from({length:t.depth}).fill(null).map(((e,t)=>(0,w.jsx)("div",{className:"indent"},`indent-${t}`))),(0,w.jsx)(jt,(0,s.Z)({item:t,workspaceId:r},i))]})},bt=["items"],kt=["style","data"],Ct=["items"],Et=["style","data"],Zt=["collapsedKeys","items"];function It(e,t){const{style:r,data:{items:s}}=e,n=(0,K.Z)(e.data,bt),i=(0,K.Z)(e,kt),{style:o,data:{items:a}}=t,l=(0,K.Z)(t.data,Ct),c=(0,K.Z)(t,Et);return V()(r,o)&&V()(s,a)&&V()(n,l)&&V()(i,c)}const Nt=(0,n.memo)((({data:e,index:t,style:r})=>{const{collapsedKeys:n,items:i}=e,o=(0,K.Z)(e,Zt),a=i[t];return(0,w.jsx)(wt,(0,s.Z)({item:a,style:r,isCollapsed:n.has(a.id)},o),a.id)}),It);Nt.displayName="memo(ItemRenderer)";const Lt=Nt;var St=r(9460);let Mt;const Ot=o().button(Mt||(Mt=(e=>e)`
  all: unset;
  color: var(--content-color-brand);
  cursor: pointer;
  display: inline-block;
  margin-left: var(--spacing-xs);
`));function Rt({isRefetching:e,onRetry:t}){return e?(0,w.jsx)(it,{srText:"Refetching failed items"}):(0,w.jsx)(xe,{children:(0,w.jsxs)(St.ZP,{type:"para",children:["Unable to load items.",t&&(0,w.jsx)(Ot,{onClick:t,children:"Retry"})]})})}let Pt,Tt,zt,At=e=>e;const Dt=o().div(Pt||(Pt=At`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`)),_t=o().div(Tt||(Tt=At`
  max-height: ${0}px;
`),C({type:"more"})),$t=()=>{const e=(0,$.useActiveWorkspaceId)(),{data:t,fetchNextPage:r,hasNextPage:i,hasPageError:o,refetch:l,isRefetching:d}=(0,u.useHistoryItems)({workspaceId:e,pageSize:u.PAGE_SIZE}),{data:x,isLoading:g}=(0,at.useCollectionRuns)({workspaceId:e,count:20});(0,u.useHistorySubscription)({workspaceId:e});const[y,m]=(0,n.useState)(new Set),[v,f]=(0,n.useState)(""),j=e=>{f(e)},E=e=>""===v||null==e?e:e.filter((e=>{var t;return null==(t=e.url)?void 0:t.toLowerCase().includes(v.toLowerCase())})),Z=e=>""===v?e:e.filter((e=>{var t;return null==(t=e.name)?void 0:t.toLowerCase().includes(v.toLowerCase())})),I=(0,n.useMemo)((()=>{const e=i?[(r=i,{type:"more",id:"more",depth:0,loading:null==r||r})]:[];var r;return[...M(E(t),Z(x?x.map((e=>{const t=new Date(e.data.createdAt);return(0,s.Z)({},e.data,{createdAt:t,depth:1,type:"collectionrun"})})):[]),y),...e]}),[t,x,y,i]),N={collapsedKeys:y,items:I,workspaceId:e,onCollapse:(e,t)=>{m((()=>(t?y.delete(e):y.add(e),new Set(y))))}};return null==t||g?(0,w.jsxs)(Dt,{children:[(0,w.jsx)(p.Z,{size:"large"}),(0,w.jsx)("span",{className:"sr-only",children:"Loading..."})]}):0===t.length&&0===(null==x?void 0:x.length)?(0,w.jsx)(b,{workspaceId:e}):0===I.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(H,{onSearchQueryChange:j,searchQuery:v}),(0,w.jsx)(k,{searchQuery:v})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(H,{onSearchQueryChange:j,searchQuery:v}),o&&(0,w.jsx)(_t,{children:(0,w.jsx)(Rt,{isRefetching:d,onRetry:l})}),(0,w.jsx)(c(),{children:({height:e,width:t})=>(0,w.jsx)(h(),{isItemLoaded:e=>!i||e<I.length-1,itemCount:I.length,loadMoreItems:()=>{r()},children:({onItemsRendered:r,ref:s})=>(0,w.jsx)(a.VariableSizeList,{ref:s,onItemsRendered:r,height:e,itemData:N,itemCount:I.length,itemSize:e=>C(I[e]),width:t,innerElementType:F,children:Lt})})})]})},Ut=o().div(zt||(zt=At`
  height: 100%;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`)),qt=()=>(0,w.jsx)(y.CustomErrorBoundary,{appId:"history-sidebar",errorElementId:"history-sidebar",fallback:(0,w.jsx)(y.GenericErrorMessage,{title:"Couldn't load history",description:"Something went wrong while trying to load history items. Check your internet and try again."}),children:(0,w.jsx)(Ut,{children:(0,w.jsx)(x.VW,{children:(0,w.jsx)($t,{})})})})}}]);
//# sourceMappingURL=4427.7829e9c37cf058fb.js.map