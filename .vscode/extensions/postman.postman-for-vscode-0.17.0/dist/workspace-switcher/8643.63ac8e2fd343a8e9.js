"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[8643,1311],{8643:(e,t,a)=>{function n(e){return window&&window.open(e,"_self","noopener,noreferrer")}a.r(t),a.d(t,{Link:()=>L,OPEN_EXTENSION_URL:()=>E,PostmanTabsManager:()=>We,checkContextAndNavigate:()=>n,openExternalLink:()=>S,useAdditionalRouteContext:()=>O,useBeforeTabbedWindowUnload:()=>T,useCurrentPostmanTabContext:()=>h,useIsActivePostmanTab:()=>f,useLoaderData:()=>P,useLocation:()=>y,useMountOutletOnNav:()=>w,useNavigate:()=>A,usePostmanTabsContext:()=>v,useSearchParams:()=>I,useSetTabState:()=>j,useSetTabTitle:()=>k,useTabTitleAndStateUpdates:()=>x,withRouter:()=>c});var i=a(7560),s=a(540),l=a.n(s),o=a(607),r=a(2322);function c(e){return t=>{const a=(0,o.useLocation)(),n=(0,o.useNavigate)(),s=(0,o.useParams)();return(0,r.jsx)(e,(0,i.Z)({location:a,navigate:n,params:s},t))}}var d=a(8283),u=a(4302);a(9605);const b=l().createContext(null),v=()=>(0,s.useContext)(b),p=l().createContext(null),h=()=>(0,s.useContext)(p),f=()=>{const e=v(),t=h(),{tabId:a}=t||{};return(null==e?void 0:e.activeTab)===a},x=()=>{const{pathname:e,search:t}=(0,o.useLocation)(),a=f(),{tabId:n,title:i,tabType:l,setTabState:r,isConflicted:c,isDirty:d}=h();(0,s.useEffect)((()=>{a&&i&&(r({title:i,tabType:l,isDirty:d,isConflicted:c}),globalThis.document.title=i)}),[a,n,i,l,d,c,r]),(0,s.useEffect)((()=>{r({currentlyActiveURL:e+t})}),[])},T=()=>{const{tabs:e,tabsMeta:t}=v();(0,s.useEffect)((()=>{const a=a=>(a.preventDefault(),e.find((e=>{var a;return null==(a=t[e.id])?void 0:a.isDirty}))||(a.returnValue="Are you sure you want to exit?"),a.returnValue);return window.addEventListener("beforeunload",a,{capture:!0}),()=>window.removeEventListener("beforeunload",a,{capture:!0})}),[])};var m=a(8722);const C=(e,...t)=>{const a=e(...t),n=v(),i=!!h(),l=f(),o=(0,s.useRef)(a);return(0,s.useEffect)((()=>{l&&(o.current=a)}),[l,a]),n&&i&&!l?o.current:a},y=()=>C(o.useLocation),g=(e,t)=>{const a=t[e.id];return!(null!=a&&a.isDirty||null!=a&&a.isConflicted||null!=a&&a.isPinned)},w=()=>{const{tabs:e,tabsMeta:t,setTabs:a,setTabsMeta:n,setActiveTab:l}=v(),r=y(),{state:c,pathname:d,search:u}=r,b=(0,o.useOutlet)(),p=(0,s.useMemo)((()=>b),[d+u]),h=(0,s.useCallback)(((t,n)=>{const i=e.map((e=>e.id===n?t:e));return l(t.id),a(i)}),[l,a,e]),f=(0,s.useCallback)(((s,o,r)=>{const c=(0,i.Z)({replacePreviewTab:!0,pinNewTab:!1},r),d=(0,m.v4)(),u={pathname:s,element:o,id:d},b=e.find((e=>g(e,t)));return b&&null!=c&&c.replacePreviewTab?h(u,b.id):(l(d),null!=c&&c.pinNewTab&&n((e=>(0,i.Z)({},e,{[d]:(0,i.Z)({},e[d],{isPinned:!0})}))),a((e=>[...e,{pathname:s,element:o,id:d}])))}),[e,h,l,a,t,n]);(0,s.useEffect)((()=>{if(!p)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(c),{tabId:a,newTab:n,sameTab:i}=t;if(n)return f(d,p,{replacePreviewTab:!1,pinNewTab:!0});if(i&&a&&-1!==e.findIndex((e=>e.id===a)))return h({id:(0,m.v4)(),pathname:d,element:p},a);if(a){var s;const t=null==(s=e.find((e=>e.id===a)))?void 0:s.id;if(t)return l(t)}const o=e.find((e=>e.pathname===d));return o?l(null==o?void 0:o.id):f(d,p)}),[p])},j=e=>{const{setTabsMeta:t,activeTab:a}=v();return(0,s.useCallback)((n=>{a===e.id&&t((t=>{const a=(0,i.Z)({},t[e.id]),s={};return"title"in n&&(s.title=n.title||""),"isDirty"in n&&(s.isDirty=n.isDirty||!1),"isConflicted"in n&&(s.isConflicted=n.isConflicted||!1),"tabType"in n&&(s.tabType=n.tabType||"http"),"currentlyActiveURL"in n&&(s.currentlyActiveURL=n.currentlyActiveURL||""),(0,i.Z)({},t,{[e.id]:(0,i.Z)({},a,s)})}))}),[t,e.id,a])},k=e=>{const t=j(e);return(0,s.useCallback)((e=>t({title:e})),[t])},Z=["children","to"],D=["children","to"],N=e=>{let{children:t,to:a}=e,n=(0,d.Z)(e,Z);const{tabId:s}=h()||{};return(0,r.jsx)(o.Link,(0,i.Z)({to:a},n,{state:(0,i.Z)({},n.state,{navigationParams:{sameTab:n.sameTab||!1,newTab:n.newTab||!1,tabId:n.sameTab||n.newTab?s:null}}),children:t}))},L=e=>{let{children:t,to:a}=e,n=(0,d.Z)(e,D);if(n.customNavEvent)return(0,r.jsx)(u.VSCodeLink,(0,i.Z)({to:a},n,{children:t}));const s=(0,i.Z)({},{target:"_self",rel:"noreferrer noopener"},n),l=a.toString();return new RegExp("https?:\\/\\/").test(l)?(0,r.jsx)("a",(0,i.Z)({href:l},s,{onClick:async e=>{n.onClick&&n.onClick(e),e.defaultPrevented},children:t})):(0,r.jsx)(N,(0,i.Z)({to:a},s,{children:t}))},A=()=>{const{tabId:e}=h()||{},t=(0,o.useNavigate)();return(a,n,s)=>{const l=(0,i.Z)({},n),o={sameTab:(null==s?void 0:s.sameTab)||!1,newTab:(null==s?void 0:s.newTab)||!1,tabId:null!=s&&s.sameTab||null!=s&&s.newTab?e:null};if(l.state=null!=n&&n.state&&"string"==typeof n.state?JSON.stringify((0,i.Z)({},JSON.parse(n.state),{navigationParams:o})):(0,i.Z)({},null==n?void 0:n.state,{navigationParams:o}),null==s||!s.customNavEvent||((0,u.vscodeNavigate)(a,n,s),s["customNavEvent-updateURL"]))return t(a,l)}},E="VIEW_COLLECTION_FOLDER_REQUEST";async function S(e){await(0,u.vsCodeOpenExternalLink)(e)}const O=()=>{const e=(0,o.useLocation)();return(0,s.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let a;return"string"==typeof e&&(a=JSON.parse(e)),(null==(t=a)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return(0,i.Z)({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},I=()=>{const e=(0,o.useLocation)(),[t,a]=C(o.useSearchParams),n=v(),{setTabState:i,tabId:l}=h()||{};return[t,(0,s.useCallback)((t=>{if(a(t,{state:n&&l?{navigationParams:{tabId:l}}:void 0}),l&&n&&i){const a=t.toString(),n=`${e.pathname}${a?"?"+a:""}`;i({currentlyActiveURL:n})}}),[a,n,e.pathname,i,l])]},P=()=>C(o.useLoaderData);var M=a(7363),R=a(5892),$=a.n(R),U=a(605),_=a(5869),F=a(4691),V=a(9824),W=a(7282),q=a(347);const z=({isOpen:e,forTabId:t,position:a,createNewRequest:n,closeMenu:i})=>{const{closeAllNonSelectedTabs:s,closeTab:l,closeAllTabs:o}=v();return(0,r.jsx)(F.Z,{isOpen:e,contextMenu:{posX:null==a?void 0:a.x,posY:null==a?void 0:a.y},closeMenu:i,children:(0,r.jsxs)(V.Z,{children:[(0,r.jsx)(W.Z,{onClick:n,children:"New Request"}),(0,r.jsx)(q.Z,{}),(0,r.jsx)(W.Z,{onClick:()=>l(t),children:"Close Tab"}),(0,r.jsx)(W.Z,{onClick:()=>l(t,!0),children:"Force Close Tab"}),(0,r.jsx)(W.Z,{onClick:()=>s(),children:"Close Other Tabs"}),(0,r.jsx)(W.Z,{onClick:()=>o(),children:"Close All Tabs"}),(0,r.jsx)(W.Z,{onClick:()=>o(!0),children:"Force Close All Tabs"})]})})},J=e=>(0,r.jsx)(z,(0,i.Z)({},e));var X=a(8263),Y=a(6914),Q=a(8560),H=a(9225),B=a(5311),G=a(5547),K=a(2922),ee=a(4306),te=a(9706),ae=a(907),ne=a(455);const ie={collection:(0,r.jsx)(B.Z,{}),folder:(0,r.jsx)(G.Z,{}),http:(0,r.jsx)(K.Z,{}),"ws-raw":(0,r.jsx)(ee.Z,{}),grpc:(0,r.jsx)(te.Z,{}),"http-response":(0,r.jsx)(ae.Z,{}),environment:(0,r.jsx)(ne.Z,{}),default:(0,r.jsx)(B.Z,{})},se=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:a,closeAllTabs:n,activeTab:i,recentlyClosed:s,openFromRecentlyClosed:l}=v(),o=0===e.length;return(0,r.jsxs)(F.Z,{children:[(0,r.jsx)(X.Z,{children:(0,r.jsx)(U.Z,{icon:(0,r.jsx)(H.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,r.jsxs)(V.Z,{children:[(0,r.jsx)(Y.Z,{label:"Recently Closed Tabs",children:0===s.length?(0,r.jsx)(W.Z,{isDisabled:!0,children:"None"}):s.map(((e,t)=>(0,r.jsx)(W.Z,{onClick:()=>l(t),children:(0,r.jsxs)(Q.Z,{alignItems:"center",gap:"spacing-s",children:[ie[e.tabType]||ie.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,r.jsx)(q.Z,{}),(0,r.jsx)(W.Z,{onClick:()=>a(i),isDisabled:o,children:"Close Selected Tab"}),(0,r.jsx)(W.Z,{type:"destructive",onClick:()=>a(i,!0),isDisabled:o,children:"Force Close Selected Tab"}),(0,r.jsx)(W.Z,{onClick:()=>t(),isDisabled:o,children:"Close All but Selected Tab"}),(0,r.jsx)(W.Z,{onClick:()=>n(),isDisabled:o,children:"Close All Tabs"}),(0,r.jsx)(W.Z,{type:"destructive",onClick:()=>n(!0),isDisabled:o,children:"Force Close All Tabs"})]})]})};var le=a(3180);let oe,re,ce,de,ue,be,ve=e=>e;const pe=$().div(oe||(oe=ve``)),he=$().div(re||(re=ve`
  width: 172px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc(1px + var(--spacing-s)) var(--spacing-m);
  border-right: 1px solid var(--border-color-default);
  border-top: ${0};
  border-left: none;
  border-bottom: ${0};
  font-style: ${0};

  ${0}
`),(e=>e.$isActive?"2.5px solid var(--base-color-brand)":"1px solid var(--border-color-default)"),(e=>e.$isActive?"none":"1px solid var(--border-color-default)"),(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,R.css)(ce||(ce=ve`
      .tab-close-icon {
        display: none;
      }

      &:hover {
        .tab-close-icon {
          display: flex;
        }

        .dirty-indicator {
          display: none;
        }
      }
    `)))),fe=$().div(de||(de=ve`
  font-family: var(--text-family-default);
  line-height: var(--line-height-s);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  padding-left: var(--spacing-xs);
  flex: 1;
  align-self: center;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`)),xe=$()(pe)(ue||(ue=ve`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size-s);
  width: var(--size-s);
`)),Te=$().div(be||(be=ve`
  width: calc(1.02 * var(--spacing-s));
  height: var(--spacing-s);
  border-radius: 50%;
  background-color: var(--base-color-brand);
`)),me=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",Ce=e=>{const{activeTab:t,setActiveTab:a,closeTab:n,setTabsMeta:l,tabsMeta:c}=v(),d=t===e.tab.id,u=c[e.tab.id],b=(null==u?void 0:u.currentlyActiveURL)||e.tab.pathname,p=g(e.tab,c),h=(0,s.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),n(e.tab.id),null)),[n,e.tab.id]),f=(0,s.useCallback)((()=>{l((t=>(0,i.Z)({},t,{[e.tab.id]:(0,i.Z)({},u,{isPinned:!0})})))}),[e.tab.id,u,l]);return(0,r.jsx)(o.Link,{to:b,onClick:t=>{!d&&a(e.tab.id),d&&t.preventDefault(),d&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,r.jsxs)(he,{$isActive:d,$isDirty:null==u?void 0:u.isDirty,$isPreviewTab:p,onDoubleClick:f,"data-testid":"tab-header",children:[(0,r.jsx)(pe,{children:ie[null==u?void 0:u.tabType]||ie.default}),(0,r.jsxs)(fe,{title:(null==u?void 0:u.title)||"Loading...",children:[me(u),(null==u?void 0:u.title)||"Loading..."]}),(0,r.jsxs)(xe,{onClick:h,"data-testid":"tab-close-icon",children:[(null==u?void 0:u.isDirty)&&(0,r.jsx)(Te,{className:"dirty-indicator"}),(0,r.jsx)(U.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,r.jsx)(le.Z,{})})]})]})},e.tab.id)};let ye,ge,we=e=>e;const je=$().div(ye||(ye=we`
  width: 100%;
  overflow-x: auto;
  display: flex;
  min-height: var(--wp-tabs-header-height);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`)),ke=$().div(ge||(ge=we`
  flex-grow: 1;
  border-bottom: 1px solid var(--border-color-default);
  height: calc(100% - 0.5px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 var(--spacing-xs);
  gap: var(--spacing-xs);
`)),Ze=()=>{const{tabs:e}=v(),[t,a]=(0,s.useState)({open:!1}),{workspaceId:n}=(0,o.useParams)(),i=A(),l=(0,s.useCallback)((()=>{if(!n)return;const e=(0,m.v4)();i(`/workspace/${n}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[n,i]),c=(0,s.useCallback)(((e,t)=>{t.preventDefault(),a({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,s.useCallback)((()=>a({open:!1})),[]);return(0,r.jsxs)(je,{children:[e.map((e=>(0,r.jsx)(Ce,{tab:e,onContextMenu:t=>c(e.id,t)},e.id))),(0,r.jsx)(J,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:l}),(0,r.jsxs)(ke,{children:[(0,r.jsx)(U.Z,{type:"tertiary",icon:(0,r.jsx)(_.Z,{}),onClick:l}),(0,r.jsx)(se,{})]})]})};var De=a(3723),Ne=a.n(De);let Le;const Ae=$().div(Le||(Le=(e=>e)`
  display: ${0};
  height: var(--wp-workbench-height);
`),(({$isHidden:e})=>e?"none":"block")),Ee=e=>{const t=!f();return x(),(0,r.jsx)(Ae,{className:Ne()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},Se=({tab:e})=>{const{tabsMeta:t}=v(),a=j(e),n=k(e),i=(0,s.useMemo)((()=>{var i,s,l,o;return{tabId:e.id,pathname:e.pathname,isDirty:null==(i=t[e.id])?void 0:i.isDirty,isConflicted:null==(s=t[e.id])?void 0:s.isConflicted,title:(null==(l=t[e.id])?void 0:l.title)||"",tabType:(null==(o=t[e.id])?void 0:o.tabType)||"http",setTabTitle:n,setTabState:a}}),[e.id,e.pathname,t,n,a]);return(0,r.jsx)(p.Provider,{value:i,children:(0,r.jsx)(Ee,{children:e.element},e.pathname)})},Oe=({fallback:e})=>{const{tabs:t}=v();return(0,s.useMemo)((()=>(0,r.jsxs)(r.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,r.jsx)(Se,{tab:e},e.pathname)))]})),[t,e])},Ie=({children:e})=>(w(),T(),(0,r.jsxs)(r.Fragment,{children:[e," "]})),Pe="tab-close-confirmation-modal",Me=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,Re=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],$e="tab-force-close-confirmation-modal",Ue=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,_e=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],Fe=(e,t)=>{var a;return null==(a=t[e])?void 0:a.isDirty},Ve=async(e,t)=>{const a=await e.showWarningDialog({uid:Pe,subject:"DO YOU WANT TO SAVE?",message:Me(t),options:Re});return!a||"Cancel"!==a.title},We=({fallback:e})=>{const t=A(),a=(0,o.useMatches)(),n=M.Modals.getModals(),[i,l]=(0,s.useState)(null),[c,d]=(0,s.useState)([]),[u,v]=(0,s.useState)({}),[p,h]=(0,s.useState)([]),f=(0,s.useCallback)((e=>{var a;l(e.id),t((null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname)}),[t,u]),x=(0,s.useCallback)((e=>{e&&h((t=>{var a,n,i;return[...t,{id:e.id,pathname:(null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname,title:null==(n=u[e.id])?void 0:n.title,tabType:null==(i=u[e.id])?void 0:i.tabType}]}))}),[u]),T=(0,s.useCallback)((e=>h((t=>[...t].splice(e,1)))),[]),m=(0,s.useCallback)((e=>{const a=p[e];t(a.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),T(e)}),[T,t,p]),C=(0,s.useCallback)((async(e,s=!1)=>{var l;const o=c.findIndex((t=>t.id===e));if(-1===o)return;const r=c[o],b=Fe(r.id,u);if(!s&&b&&!await Ve(n,null==(l=u[e])?void 0:l.title))return;if(r.id===i){const e=((e,t)=>{const a=t-1;return e[t+1]||e[a]})(c,o);if(e)f(e);else{const e=a.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const v=c.filter((t=>t.id!==e));d(v),x(r)}),[t,f,c,a,u,n,i,x]),y=(0,s.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>Fe(e.id,u))).length;if(e&&!await(async(e,t)=>{const a=await e.showWarningDialog({uid:$e,subject:"Confirm force close",message:Ue(t),options:_e});return!a||"Cancel"!==a.title})(n,e))return;for(const e of c)x(e);d([]);const i=a.at(-2);return(null==i?void 0:i.pathname)&&t(i.pathname)}const i=[];for(const e of c){var s;Fe(e.id,u)&&!await Ve(n,null==(s=u[e.id])?void 0:s.title)||(x(e),i.push(e.id))}d((e=>e.filter((e=>!i.includes(e.id)))))}),[c,n,a,t,u,x]),g=(0,s.useCallback)((async(e=i)=>{const t=[];for(const i of c){var a;i.id!==e&&(Fe(i.id,u)&&!await Ve(n,null==(a=u[i.id])?void 0:a.title)||t.push(i.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[i,c,n,u]),w=(0,s.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:u,setTabsMeta:v,recentlyClosed:p,closeTab:C,closeAllTabs:y,activeTab:i,setActiveTab:l,closeAllNonSelectedTabs:g,openFromRecentlyClosed:m})),[c,u,p,C,i,l,y,g,m]);return(0,r.jsx)(b.Provider,{value:w,children:(0,r.jsxs)(Ie,{children:[(0,r.jsx)(M.Modals.Ui.ModalDialog,{uid:Pe}),(0,r.jsx)(M.Modals.Ui.ModalDialog,{uid:$e}),(0,r.jsx)(Ze,{}),(0,r.jsx)(Oe,{fallback:e})]})})}}}]);
//# sourceMappingURL=8643.63ac8e2fd343a8e9.js.map