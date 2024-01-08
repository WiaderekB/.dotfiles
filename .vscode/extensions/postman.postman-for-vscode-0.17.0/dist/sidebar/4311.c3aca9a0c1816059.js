"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[4311],{4311:(e,r,t)=>{t.d(r,{Z:()=>Er});var o=t(7155),n=t.n(o),a=t(2723),i=t.n(a),s=t(540),c=t(5892),l=t.n(c),d=t(8283),u=t(3723),p=t.n(u),b=t(7560),v=t(2322);const h=["children","onClick","size"];let m;const g=l().button(m||(m=(e=>e)`
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  outline: none;
  padding: ${0};
`),(({size:e})=>"default"===e?"0":"padding: var(--spacing-s, calc(24px / 2));"));function x(e){let{children:r,onClick:t,size:o="default"}=e,n=(0,d.Z)(e,h);return(0,v.jsx)(g,(0,b.Z)({onClick:t,size:o},n,{children:r}))}const w=(0,s.createContext)({activeSidebar:null,navCollapsed:!1,setActiveSidebar:()=>{}}),f=()=>{const e=(0,s.useContext)(w);if(!e)throw new Error("useSidebarContext should be used within a SidebarContext.Provider");return e},k=({value:e,children:r})=>(0,v.jsx)(w.Provider,{value:e,children:r}),y=["showVerticalSidebarOnSingleConfig"];let C,S,E,j=e=>e;const I=l().ul(C||(C=j`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: ${0};
  width: ${0};

  ${0}
`),(({collapsed:e})=>e?"0":"var(--spacing-xs, 4px) 0"),(({collapsed:e})=>e?"40px":"max-content"),(({collapsed:e})=>!e&&"\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs, 4px);\n    border-right: 1px solid var(--border-color-default, #ededed);\n    background: var(--background-color-secondary);\n\n    font-size: var(--text-size-xs, 10px);\n    line-height: var(--text-size-xl, 16px);\n    text-align: center;\n  ")),N=l().li(S||(S=j`
  position: relative;
  box-sizing: border-box;
  width: ${0};
  height: ${0};

  &:hover,
  &:focus {
    background: var(--highlight-background-color-tertiary, rgb(0 0 0 / 5%));
  }

  ${0}
`),(({collapsed:e})=>e?"40px":"80px"),(({collapsed:e})=>e?"40px":"52px"),(({collapsed:e})=>!e&&"\n    margin: 0 var(--spacing-xs, 4px);\n    border-radius: var(--border-radius-default, 4px);\n\n    &.active {\n      background: var(--highlight-background-color-tertiary, rgba(0, 0, 0, 0.05));\n      box-shadow: var(--base-color-brand);\n      color: var(--content-color-primary);\n\n      &:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 2px;\n        background: var(--base-color-brand, #f37a00);\n        border-radius: 0 var(--border-radius-s, 8px) var(--border-radius-s, 8px) 0;\n        top: var(--spacing-xs, 4px);\n        bottom: var(--spacing-xs, 4px);\n      }\n    }\n  ")),O=l().h3(E||(E=j`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  font-size: 1em;
  margin: 0;
  font-weight: normal;
  color: var(--content-color-primary);
`));function _(e){let{showVerticalSidebarOnSingleConfig:r=!0}=e,t=(0,d.Z)(e,y);const{navCollapsed:o}=f(),n=t.collapsed||o;return 1!==t.items.length||r?(0,v.jsx)(I,{role:"tablist",collapsed:t.collapsed,children:t.items.map((e=>(0,v.jsx)(N,{role:"tab",collapsed:n,className:p()({active:e.id===t.activeItemId}),"aria-label":e.title,"aria-selected":e.id===t.activeItemId,"aria-expanded":!t.collapsed,children:(0,v.jsxs)(x,{onClick:()=>t.onClick&&t.onClick(e.id),size:n?"sm":"default",children:[e.icon,!n&&(0,v.jsx)(O,{children:e.title})]})},e.id)))}):null}function Z(e){const{activeSidebar:r,collapsed:t,setActiveSidebar:o}=f();return(0,v.jsx)(_,{collapsed:t,items:e.menus,showVerticalSidebarOnSingleConfig:e.showVerticalSidebarOnSingleConfig,activeItemId:r,onClick:o})}var W=t(8560),A=t(605),R=t(5736),T=t(6081),P=t(8722),z=t(607),$=t(8691),V=t(2922),L=t(4306),D=t(9706);const q="http",B="ws-raw",F="grpc",M=q;var H=t(856);let U;const Y=l()(H.ZP)(U||(U=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-secondary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-secondary);
  }
`));var X=t(5837),Q=t(9972);let K,G,J,ee=e=>e;const re={[q]:"/request/create",[B]:"/ws-raw-request/create",[F]:"/grpc-request/create"},te=l()(z.Link)(K||(K=ee`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: var(--line-height-xl);
  padding: var(--spacing-zero) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--background-color-tertiary);
  }

  color: var(--content-color-primary);
`)),oe=l().div(G||(G=ee`
  margin-left: var(--spacing-s);
`)),ne={[q]:{label:"HTTP",Icon:V.Z,iconColor:"content-color-success"},[B]:{label:"WebSocket",Icon:L.Z,iconColor:"content-color-brand"},[F]:{label:"gRPC",Icon:D.Z,iconColor:"content-color-info"}},ae=l()($.Z)(J||(J=ee`
  --secondary-btn-width: var(--spacing-xxl);
  --splitter-width: 1px;

  height: var(--controls-size-default);
  width: 100%;
  background-color: var(--button-primary-background-color);
  color: var(--button-primary-content-color);
  cursor: pointer;

  > button {
    background-color: inherit;
    padding: 0 var(--spacing-s);

    > span {
      color: var(--button-primary-content-color);
    }

    :hover {
      background-color: var(--button-primary-hover-background-color);
    }

    &:active,
    &.is-active {
      background-color: var(--button-primary-active-background-color);
    }
  }

  .aether-split-button__primary-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: calc(100% - var(--secondary-btn-width) - var(--splitter-width));

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .aether-split-button__secondary-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: var(--secondary-btn-width);
  }

  .aether-split-button__splitter {
    border-left-color: var(--vscode-button-separator);
    width: var(--splitter-width);
  }

  &:hover {
    .aether-split-button__splitter {
      border-left-color: var(--vscode-button-separator);
    }
  }
`)),ie=()=>{const e=(0,Q.useActiveWorkspaceId)(),r=localStorage.getItem(`activeProtocol:${window.USER_ID}`),[t,o]=(0,s.useState)(!1),[n,a]=(0,s.useState)(r||M),i=(0,T.useNavigate)(),c=r=>{i(`/workspace/${e}${re[r]}?requestId=${(0,P.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),X.AnalyticsService.addEventV2({category:r,action:"open-tab",label:"new-request",value:1})},l=ne[n].iconColor,d=(0,s.useRef)();return(0,v.jsx)(ae,{type:"primary",text:`New ${ne[n].label} Request`,onClick:()=>c(n),secondaryButton:(0,v.jsx)(A.Z,{type:"primary",color:l,onClick:()=>o((e=>!e)),ref:d}),children:(0,v.jsx)(Y,{isOpen:t,onClickOutside:()=>o(!1),triggerRef:d,children:Object.keys(ne).map((e=>{const{label:r,Icon:t}=ne[e];return(0,v.jsxs)(te,{to:"",onClick:()=>{var r;r=e,o(!1),a(r),c(r),localStorage.setItem(`activeProtocol:${window.USER_ID}`,r)},children:[(0,v.jsx)(t,{color:ne[e].iconColor}),(0,v.jsx)(oe,{children:r})]},e)}))})})};var se=t(1397);let ce,le,de,ue,pe=e=>e;const be=l().div(ce||(ce=pe`
  width: 100%;
  display: flex;
`)),ve=l().div(le||(le=pe`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);
  border: 0 var(--border-style-solid) transparent;
  overflow: hidden;
  background-color: var(--highlight-background-color-primary);
`)),he=l().button(de||(de=pe`
  display: flex;
  flex: 1;
  flex-flow: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: var(--spacing-zero);
  border-bottom: none;
  cursor: pointer;
  height: var(--controls-size-default);

  &.active {
    border-radius: var(--border-radius-default);
    background: var(--background-color-primary);
    border: none;
    box-shadow: var(--border-color-default) 0 0 0 1px inset;
  }
`)),me=l().div(ue||(ue=pe`
  padding: var(--spacing-s);
`)),ge=({elements:e})=>{const{activeSidebar:r,setActiveSidebar:t}=f();return(0,v.jsx)(be,{children:(0,v.jsx)(ve,{children:null==e?void 0:e.map((e=>{const o=e.id===r;return(0,v.jsx)(se.Z,{content:e.title,placement:"bottom",children:(0,v.jsx)(he,{onClick:()=>t(e.id),"aria-label":e.title+" Tab",className:o?"active":"",children:(0,v.jsx)(me,{children:e.icon})})})}))})})};var xe=t(9460),we=t(5482),fe=t(923);const ke=({children:e})=>(0,v.jsx)(fe.CustomErrorBoundary,{appId:"sidebar",errorElementId:"workspace-switcher",fallback:(0,v.jsxs)(W.Z,{gap:"spacing-s",height:"var(--size-m)",alignItems:"center",children:[(0,v.jsx)(we.Z,{color:"content-color-error"}),(0,v.jsx)(xe.ZP,{color:"content-color-error",type:"para",children:"Failed to load workspaces"})]}),children:e});var ye=t(3720);const Ce="workspace-label-paint-time",Se="workspace-label-paint-mark";var Ee=t(949);const je=e=>{const[r,...t]=e.split("/"),o=`./${t.join("/")}`,n=r.replaceAll("-","_"),a=`${window.BASE_URL_PREFIX}/${r}/remoteEntry.js`,i=a.split("/").slice(0,-1).join("/");return async()=>await(0,Ee.importRemote)({url:i,scope:n,module:o,remoteEntryFileName:a.split("/").pop()})};let Ie,Ne,Oe,_e,Ze,We=e=>e;const{PerformanceMarkPaint:Ae}=ye.perfComponents,Re=()=>{performance.measure(Ce,{},Se),(0,ye.sendMeasureEvent)({name:Ce})},Te=(0,s.lazy)(je("workspace-switcher/WorkspaceSwitcher")),Pe=(0,s.lazy)(je("workspace-switcher/ActiveWorkspace")),ze=l()(Pe)(Ie||(Ie=We`
  flex: 1;
  padding: 0 !important;
  margin-left: 4px;

  :hover {
    color: var(--base-color-info);
    background: transparent !important;

    path {
      fill: var(--base-color-info);
    }
  }
`)),$e=l().header(Ne||(Ne=We`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--background-color-secondary);

  &.bottom-border {
    /* TODO: Validate if we need default color */
    border-bottom: var(--border-width-default, 1px)
      var(--border-style-solid, solid)
      var(--border-color-default, --var(--grey-20));
  }
`)),Ve=l().div(Oe||(Oe=We`
  padding: var(--spacing-s);
  align-self: stretch;
`)),Le=l()(W.Z)(_e||(_e=We`
  width: 100%;
  margin: var(--spacing-s) 0;
  gap: var(--spacing-s);
  padding: 0 var(--spacing-xs);

  @media (width >= 220px) {
    padding: 0 var(--spacing-s);
  }
`)),De=l()(A.Z)(Ze||(Ze=We`
  font-weight: var(--text-weight-medium);
`));function qe({showActions:e=!0,showNewRequestButton:r,showSidebarHeaderTabs:t,showWorkspaceSwitcherConfig:o=!0,elements:n=[]}){const a=(0,T.useNavigate)(),i=(0,Q.useActiveWorkspaceId)(),c=(0,s.useCallback)((()=>{}),[]),[l,d]=(0,s.useState)(!1),u=(0,s.useCallback)((()=>{if(!i)return;const e=(0,P.v4)();a(`/workspace/${i}/request/create?requestId=${e}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",newTab:!0})}),[i,a]);return(0,v.jsxs)($e,{className:t?"":"bottom-border",children:[o&&(0,v.jsxs)(Le,{direction:"column",children:[(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(R.Z,{}),children:(0,v.jsx)(ke,{children:(0,v.jsx)(Ae,{markName:Se,callback:Re,children:(0,v.jsx)(Te,{isOpen:l,setIsOpen:d})})})}),r&&(0,v.jsx)(ie,{})]}),e&&(0,v.jsx)(Ve,{children:(0,v.jsxs)(W.Z,{gap:"spacing-xs",alignItems:"center",children:[!o&&(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(R.Z,{}),children:(0,v.jsx)(ke,{children:(0,v.jsx)(ze,{})})}),(0,v.jsx)(De,{type:"secondary",size:"small",text:"New",onClick:u,disabled:!1,tooltip:!1}),(0,v.jsx)(De,{type:"secondary",size:"small",text:"Import",onClick:c,disabled:!1,tooltip:"You don't have permission to take this action."})]})}),t&&(null==n?void 0:n.length)>0&&(0,v.jsx)(ge,{elements:n})]})}var Be=t(6259),Fe=t(678),Me=t(455),He=t(1777),Ue=t(9754),Ye=t(1592),Xe=t(623);const Qe=(0,s.lazy)(je("history-sidebar/HistorySidebar")),Ke=()=>(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(R.Z,{}),children:(0,v.jsx)(Qe,{})});var Ge=t(9437),Je=t(47),er=t(6699);const rr=(0,s.lazy)(je("collection-sidebar/CollectionSidebar")),tr=()=>{const e=(0,Q.useActiveWorkspaceId)();return er.ENABLE_COLLECTIONS?(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(R.Z,{}),children:(0,v.jsx)(rr,{activeWorkspaceId:e})}):(0,v.jsx)(Ge.Z,{title:"Collections coming soon",description:"Work with collections in your workspace, right in VS Code!",children:(0,v.jsx)(Je.Z,{name:"illustration-no-collection"})})};var or=t(1219);const nr=(0,s.lazy)(je("environment-sidebar/EnvironmentSidebar")),ar=()=>(0,or.useEnvironmentFeatureFlag)()?(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(R.Z,{}),children:(0,v.jsx)(nr,{})}):(0,v.jsx)(Ge.Z,{title:"Environments coming soon",description:"Work with environments in your workspace, right in VS Code!",children:(0,v.jsx)(Je.Z,{name:"illustration-no-environment"})}),ir=(Be.Z,Fe.Z,Me.Z,He.Z,Ue.Z,Ye.Z,Xe.Z,{position:"horizontal",activeElement:"collection",collapsed:!1,navCollapsed:!0,showVerticalSidebarOnSingleConfig:!1,showActions:!1,showWorkspaceSwitcher:!0,showNewRequestButton:!0,showSidebarHeaderTabs:!0,fullWidthWorkspaceSwitcher:!0,elements:[{id:"collection",title:"Collections",position:1,icon:(0,v.jsx)(Be.Z,{color:"content-color-primary"}),element:(0,v.jsx)(tr,{})},{id:"environment",title:"Environments",position:2,icon:(0,v.jsx)(Me.Z,{color:"content-color-primary"}),element:(0,v.jsx)(ar,{})},{id:"history",title:"History",position:3,icon:(0,v.jsx)(Xe.Z,{color:"content-color-primary"}),element:(0,v.jsx)(Ke,{})}]});Xe.Z,Be.Z,Me.Z;var sr=t(4025),cr=t(4302);const lr=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:t}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:o,abortController:n}=(0,Q.subscribeToWorkspaceEvents)(r);e.abortController=n,e.asyncObserver=o,e.observer=await o,e.abortController=null,e.observer.subscribe({next:e=>{t(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(o){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var dr=t(4958),ur=t(2658);const pr=e=>{const r=null==e?void 0:e.meta.model;if("workspace"===r&&"update_roles"===e.meta.action&&((0,dr.invalidateCache)(["workspace","collection-permissions",e.data.id]),(0,dr.invalidateCache)([or.WORKSPACE_QUERY_KEY_PREFIX,or.ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX,e.data.id])),"collectionrun"===r)switch(e.meta.action){case"create":case"destroy":(0,dr.invalidateCache)([ur.COLLECTION_RUNS_LIST_PREFIX,e.ids.workspace])}};var br=t(7363),vr=t(7310);let hr,mr,gr,xr=e=>e;const wr=(0,s.lazy)((()=>t.e(7122).then(t.bind(t,7122)))),fr=(0,s.lazy)((()=>t.e(3890).then(t.bind(t,3890)))),kr=l().nav(hr||(hr=xr`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`)),yr=l().div(mr||(mr=xr`
  flex: 1 1 100%;
  display: flex;
  height: 100%;
`)),Cr=l().div(gr||(gr=xr`
  contain: strict;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: var(--background-color-secondary);
  box-shadow: inset -1px 0 0 var(--background-color-secondary);
  box-sizing: border-box;
  z-index: 20;
`)),Sr=n()((e=>e),i()),Er=()=>{const e=(0,Q.useActiveWorkspaceId)(),r=ir,[t,o]=(0,s.useState)(r.activeElement),[n,a]=(0,s.useState)(r.collapsed);(0,s.useEffect)((()=>{{const e=cr.VSCodeCommunicationsService.subscribe("SET_ACTIVE_ELEMENT",(e=>{o(e.activeElement||"collection")}));return()=>{e&&e()}}}),[]);const i=(0,s.useCallback)((e=>{o(e),a(!e),e&&X.AnalyticsService.addEventV2({category:"sidebar",action:"navigate",label:e,value:1})}),[]);(()=>{const e=(0,T.useNavigate)();(0,s.useEffect)((()=>{const r=cr.VSCodeCommunicationsService.subscribe("ACTIVE_TAB_CHANGED",(r=>r.route&&e(r.route,{},{customNavEvent:"","customNavEvent-updateURL":!0})));return()=>r&&r()}),[e])})(),(0,sr.usePreventContextMenu)(),(()=>{const e=(0,Q.useActiveWorkspaceId)();(0,s.useEffect)((()=>{if(e)return lr.subscribe({workspaceId:e,subscriptionHandler:pr}),()=>{lr.unsubscribe()}}),[e])})(),(()=>{const e=(0,Q.useActiveWorkspaceId)(),{data:r}=(0,er.useCollectionList)({workspaceId:e}),{data:t}=(0,or.useEnvironmentItems)({workspaceId:e}),o=(()=>{const e=(0,Q.useActiveWorkspaceId)(),r=(0,er.useCreateNewCollection)(),t=(0,er.useWorkspacePermissions)(e),o=(0,T.useNavigate)(),{addToast:n}=(0,vr.ZP)();return async(a,i)=>{if(!t.userCanCreate)return void n({status:"error",description:"You do not have permission to import a collection."});let s=!1;const c=i?i.map((e=>(e.name===a.name&&(s=!0),e.name))):[];if(s){const e=br.Modals.getModals(),r=await e.showWarningDialog({uid:"collection-import-duplicate-warning",subject:"",message:`A collection ${a.name} already exists. What would you like to do?`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Import as Copy",isPrimary:!0}]});if(!r||"Import as Copy"!==r.title)return;a.name=(0,or.getDuplicateEntityName)(c,a.name)}r.mutate({workspaceId:e,requestBody:a},{onSuccess:({data:r})=>{X.AnalyticsService.addEventV2({category:"http-collection",action:"create",label:"import",value:1}),o(`/workspace/${e}/collection/${r.owner}-${r.id}`,{},{customNavEvent:T.OPEN_EXTENSION_URL})},onError:()=>{n({status:"error",description:"Could not import collection. Please try again."})}})}})(),n=(()=>{const e=(0,Q.useActiveWorkspaceId)(),r=(0,or.useCreateNewEnvironment)(),{data:t}=(0,dr.useDataFetch)((0,or.getEnvironmentSidebarPermissionsQuery)(e)),o=(0,T.useNavigate)(),{addToast:n}=(0,vr.ZP)();return async(a,i)=>{if(null==t||!t.userCanCreateEnvironment)return void n({status:"error",description:"You do not have permission to import an environment."});let s=!1;const c=i?i.map((e=>(e.name===a.name&&(s=!0),e.name))):[];if(s){const e=br.Modals.getModals(),r=await e.showWarningDialog({uid:"env-import-duplicate-warning",subject:"",message:`An environment ${a.name} already exists. What would you like to do?`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Import as Copy",isPrimary:!0}]});if(!r||"Import as Copy"!==r.title)return;a.name=(0,or.getDuplicateEntityName)(c,a.name)}r.mutate({workspaceId:e,requestBody:a},{onSuccess:({data:r})=>{X.AnalyticsService.addEventV2({category:"environment",action:"create",label:"import"}),o(`/workspace/${e}/environment/${r.owner}-${r.id}`,{},{customNavEvent:T.OPEN_EXTENSION_URL})},onError:()=>{n({status:"error",description:"Could not import environment. Please try again."})}})}})();(0,s.useEffect)((()=>{if(r){const e=cr.VSCodeCommunicationsService.subscribe("IMPORT_COLLECTION",(e=>{e&&o(e,r)}));return()=>{e&&e()}}return()=>null}),[r]),(0,s.useEffect)((()=>{if(t){const e=cr.VSCodeCommunicationsService.subscribe("IMPORT_ENV",(e=>{e&&n(e,t)}));return()=>{e&&e()}}return()=>null}),[t])})();const c=r.elements.find((e=>e.id===t));let l=null;return e?c&&(l=c.element||(0,v.jsx)(fr,{title:c.title})):l=(0,v.jsx)(wr,{}),(0,s.useEffect)((()=>{X.AnalyticsService.addEventV2({category:"sidebar",action:"open",label:"initial-load",value:1})}),[]),(0,v.jsx)(k,{value:Sr({collapsed:n,activeSidebar:t,navCollapsed:r.navCollapsed,setActiveSidebar:i}),children:(0,v.jsxs)(kr,{children:[!n&&(0,v.jsx)(qe,{showActions:r.showActions,showNewRequestButton:r.showNewRequestButton,showSidebarHeaderTabs:r.showSidebarHeaderTabs,elements:r.elements,showWorkspaceSwitcherConfig:r.showWorkspaceSwitcher,fullWidthWorkspaceSwitcher:r.fullWidthWorkspaceSwitcher}),(0,v.jsxs)(yr,{role:"presentation",children:[!r.navCollapsed&&(0,v.jsx)(Z,{menus:r.elements,showVerticalSidebarOnSingleConfig:r.showVerticalSidebarOnSingleConfig}),!n&&(0,v.jsx)(Cr,{children:(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(v.Fragment,{children:" "}),children:l})})]})]})})}}}]);
//# sourceMappingURL=4311.c3aca9a0c1816059.js.map