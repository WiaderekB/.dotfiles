(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[9316],{9316:(e,t,r)=>{"use strict";r.d(t,{Z:()=>We});var s=r(7560),n=r(540),a=r(9972),o=r(4958),i=r(4492),c=r(8079);const l=()=>{const{data:e,isError:t,error:r,refetch:s,isRefetching:a}=(0,o.useDataFetch)({queryKey:["recent-workspaces"],queryFn:({signal:e})=>(async({signal:e})=>await c.postmanGateway.post({url:`${i.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",method:"GET",signal:e,query:{recentActivity:!0,limit:10},service:"workspaces"}))({signal:e}),useErrorBoundary:!1});return{data:(0,n.useMemo)((()=>(null==e?void 0:e.data)||[]),[e]),error:t?r:null,refetching:a,refetch:s}},d={sort:"name,ASC"},p=e=>{const{data:t,isError:r,error:a,refetch:l,isRefetching:p,fetchNextPage:u,hasNextPage:h,isFetchingNextPage:g}=(0,o.useInfiniteDataFetch)({queryKey:["more-workspaces"],queryFn:async({pageParam:e,signal:t})=>(async(e,t)=>await c.postmanHttpGateway.get({url:`${i.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",service:"workspaces",signal:t,query:(0,s.Z)({},d,e?{cursor:e}:null)}))(e,t),getNextPageParam:e=>{var t;return!(null==e||null==(t=e.meta)||!t.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),m=(0,n.useMemo)((()=>{let e=[];for(const r of(null==t?void 0:t.pages)||[])e=[...e,...r.data];return e}),[null==t?void 0:t.pages]);return{workspaces:(0,n.useMemo)((()=>{if(!m)return null;const t=m||[];return null!=e&&e.length?t.filter((t=>!(null!=e&&e.find((e=>e.id===t.id))))):t}),[m,e]),fetchingNextPage:g,loadMore:u,hasMore:h||!1,error:r?a:null,refetch:l,refetching:p}},u={sort:"name,ASC"},h=async(e,t)=>{try{return{response:await c.postmanHttpGateway.get({url:`${i.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",service:"workspaces",query:(0,s.Z)({},u,t?{cursor:t}:null,e?{name:e}:null)}),error:null}}catch(e){return{response:null,error:e}}},g=(0,r(8722).v4)();var m=r(5892),v=r.n(m);let x;const f=v().div(x||(x=(e=>e)`
  position: relative;
`));var w=r(9460),k=r(8560),y=r(5736),T=r(6415),E=r(5710),S=r(2322);let A,j,_,R,I,C,M=e=>e;const W=v().div(A||(A=M`
  padding: 0 var(--spacing-s);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  border-radius: var(--border-radius-default);
  width: inherit;
`)),b=v().div(j||(j=M`
  color: var(--content-color-primary);
  font-weight: var(--text-weight-medium);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    color: var(--base-color-info);

    @include icon-color(var(--base-color-info));
  }
`)),O=(0,m.css)(_||(_=M`
  position: absolute;
  right: var(--spacing-xs);
  top: 50%;
  transform: translateY(-50%);
`)),L=v()(T.Z)(R||(R=M`
  ${0}
`),O),N=v()(E.Z)(I||(I=M`
  ${0}
`),O),P=v().div(C||(C=M`
  display: flex;
  align-items: center;
  height: var(--size-m);
`)),Z=({activeWorkspace:e,isOpen:t,setIsOpen:r})=>(0,S.jsx)(b,{onClick:()=>r(!t),children:void 0===e?(0,S.jsx)(k.Z,{height:"var(--size-m)",alignItems:"center",justifyContent:"center",children:(0,S.jsx)(y.Z,{})}):function(){const r=(null==e?void 0:e.name)||"Select Workspace";return(0,S.jsx)(W,{role:"menu",children:(0,S.jsxs)(P,{children:[(0,S.jsx)(w.ZP,{isTruncated:!0,children:r}),t?(0,S.jsx)(N,{color:"content-color-primary"}):(0,S.jsx)(L,{color:"content-color-primary"})]})})}()});var U=r(856),G=r(4476),D=r(605),z=r(5869),F=r(6081);let Y,H,K,q,B=e=>e;const V=v()(k.Z)(Y||(Y=B`
  align-items: center;
  padding: var(--spacing-s);
  gap: var(--spacing-s);

  @media (width >= 320px) {
    padding: var(--spacing-l) var(--spacing-l) var(--spacing-s);
    gap: var(--spacing-l);
  }
`)),$=v()(k.Z)(H||(H=B`
  flex: 0;
  justify-content: flex-end;
`)),X=v()(F.Link)(K||(K=B`
  width: 100%;
  display: block;
`)),J=v().div(q||(q=B`
  flex: 1;
`)),Q=({searchText:e,setSearchText:t})=>{const r=(e=>{const t=!!globalThis.matchMedia,[r,s]=(0,n.useState)(!!t&&globalThis.matchMedia(e).matches);return(0,n.useEffect)((()=>{if(t){const t=globalThis.matchMedia(e),r=e=>{s(e.matches)};return s(t.matches),t.addEventListener("change",r),()=>{t.removeEventListener("change",r)}}}),[t,e]),r})("(min-width: 320px)");return(0,S.jsxs)(V,{children:[(0,S.jsx)(J,{children:(0,S.jsx)(G.Z,{value:e,onChange:e=>{t(e.target.value)},placeholder:"Search Workspaces",onClear:()=>t("")})}),(0,S.jsx)($,{children:(0,S.jsx)(X,{to:i.Z.ARTEMIS_URL+"/workspace/create",children:r?(0,S.jsx)(D.Z,{fullWidth:!0,minWidth:"130px",type:"secondary",text:"Create Workspace"}):(0,S.jsx)(D.Z,{type:"secondary",icon:(0,S.jsx)(z.Z,{}),tooltip:"Create Workspace"})})})]})};let ee;const te=v().div(ee||(ee=(e=>e)`
  max-height: 100%;
  overflow-y: auto;
`));var re=r(6930),se=r.n(re),ne=r(949),ae=r(923),oe=r(4962),ie=r(1075);let ce,le,de,pe,ue,he=e=>e;const ge=v().div(ce||(ce=he`
  width: 100%;
  line-height: var(--line-height-m);
  padding-left: var(--spacing-s);
  height: var(--size-m);
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (width >= 320px) {
    padding-left: var(--spacing-l);
  }
`)),me=v().div(le||(le=he`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size-m);
`)),ve=v().div(de||(de=he`
  height: var(--size-m);
  padding: var(--spacing-xs) var(--spacing-zero) var(--spacing-s);
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`)),xe=v()(D.Z)(pe||(pe=he`
  margin-left: var(--spacing-xs);
`)),fe=v().div(ue||(ue=he`
  line-height: var(--line-height-m);
  color: var(--content-color-secondary);
  margin-left: var(--spacing-l);
  height: var(--size-m);
  display: flex;

  @media (width >= 320px) {
    margin-left: calc(10 * var(--spacing-xs));
  }
`)),we=({index:e,style:t,data:{items:r,fetchingNextPage:s,onWorkspaceClick:n,errorLoading:o,loadMore:i}})=>{const c=(0,a.useActiveWorkspaceId)(),l=r[e];if(!l)return o?(0,S.jsxs)(ve,{style:t,children:["Couldn't load the workspaces. Try reloading."," ",(0,S.jsx)(xe,{type:"monochrome-plain",onClick:i,text:"Reload"})]}):(0,S.jsx)(me,{style:t,children:s&&(0,S.jsx)(y.Z,{size:"small","aria-label":"loading more workspaces",description:""})});if("id"in l){const s=r[e];return(0,S.jsx)(ie.ZP,{workspace:s,style:t,onClick:n,isActive:c===s.id})}return"NO_WORKSPACES_FOUND_MESSAGE"===l.type?(0,S.jsx)(fe,{style:t,children:"No workspaces found"}):(0,S.jsx)(ge,{style:t,children:(0,S.jsx)(oe.Z,{type:"h6",text:l.heading})})};let ke,ye,Te=e=>e;const Ee=v().div(ke||(ke=Te`
  height: fit-content;
`)),Se=v()(k.Z)(ye||(ye=Te`
  justify-content: center;
  padding: var(--spacing-l);
`)),Ae=({isOpen:e,numberOfWorkspaces:t,items:r,onWorkspaceClick:s,loading:a,fetchingNextPage:o,loadMore:i,hasMore:c,errorLoading:l,isSearchMode:d})=>{const p=(0,n.useRef)(null);return(0,n.useEffect)((()=>{e&&p.current&&p.current.scrollTo(0)}),[e]),(0,S.jsxs)(Ee,{role:"list",children:[a&&0===t&&(0,S.jsx)(Se,{children:(0,S.jsx)(y.Z,{size:"large","aria-label":"loading workspaces",description:"Loading Workspaces"})}),t||a?null:(0,S.jsx)(ae.GenericErrorMessage,{title:"No workspaces found",illustration:"illustration-search",description:d?"Check your splling or try a different search term.":""}),t>0&&(0,S.jsx)(se(),{isItemLoaded:e=>!c||e<r.length-1,itemCount:r.length,loadMoreItems:()=>i(),children:({onItemsRendered:e,ref:t})=>(0,S.jsx)(ne.FixedSizeList,{onItemsRendered:e,height:r.length>0?480:0,itemCount:r.length+1,width:"100%",style:{overflowX:"hidden"},itemSize:32,ref:e=>{p.current=e,t(e)},itemData:{errorLoading:l,loadMore:i,fetchingNextPage:o,items:r,onWorkspaceClick:s},children:we})})]})},je=(0,n.memo)(Ae),_e=()=>(0,S.jsx)(ae.GenericErrorMessage,{title:"Failed to load workspaces",description:"Check your network connection or try again in some time"});let Re;const Ie=v()(U.ZP)(Re||(Re=(e=>e)`
  min-height: fit-content;
  min-width: min(360px, 85vw);
  max-width: 85vw;
  max-height: min(545px, 75vh);

  .tippy-content {
    background-color: var(--background-color-secondary);
  }
`)),Ce=({searchText:e,setSearchText:t,workspacesSectionProps:r})=>{const{errorLoading:n,numberOfWorkspaces:a}=r;return n&&!a?(0,S.jsx)(_e,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{searchText:e,setSearchText:t}),(0,S.jsx)(te,{children:(0,S.jsx)(je,(0,s.Z)({},r))})]})},Me=e=>{const{isOpen:t,setIsOpen:r,trigger:a}=e,o=(0,n.useRef)(null);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{ref:o,children:a}),(0,S.jsx)(Ie,{isOpen:t,padding:"spacing-zero",placement:"bottom-end",onClickOutside:()=>r(!1),triggerRef:o,children:(0,S.jsx)(Ce,(0,s.Z)({},e))})]})},We=({Trigger:e,isOpen:t,setIsOpen:r,className:o})=>{const d=(0,a.useActiveWorkspaceId)(),[u,m]=(0,n.useState)(""),{data:v=[],refetch:x,refetching:w}=l(),{workspaces:k=[],hasMore:y,loadMore:T,error:E,fetchingNextPage:A,refetch:j}=p(v),{loading:_,workspaces:R=[],hasMore:I,loadMore:C,fetchingNextPage:M,error:W}=(({searchText:e})=>{const t=(0,n.useRef)(null),[r,a]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[c,l]=(0,n.useState)(!1),[d,p]=(0,n.useState)(null),u=(0,n.useMemo)((()=>!(null==r||!r.meta.nextCursor)),[null==r?void 0:r.meta.nextCursor]);(0,n.useEffect)((()=>(e?(p(null),i(!0),t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{a(null),h(e).then((({response:e,error:t})=>{a(e),i(!1),p(t)}))}),400)):(p(null),i(!1),a(null)),()=>{t.current&&clearTimeout(t.current)})),[e]);const g=(0,n.useCallback)((async()=>{if(!u)return!1;p(null),l(!0);const{response:t,error:n}=await h(e,null==r?void 0:r.meta.nextCursor);return t&&r&&a((0,s.Z)({},r,{meta:(0,s.Z)({},r.meta,t.meta),data:[...r.data,...t.data]})),l(!1),p(n),!(null==t||!t.meta.nextCursor)}),[u,e,r]),m=(0,n.useMemo)((()=>(null==r?void 0:r.data)||[]),[r]);return{loading:o,fetchingNextPage:c,loadMore:g,hasMore:u,workspaces:m,error:d}})({searchText:u}),b=null===v,[O,L]=(0,n.useState)(window.INITIAL_WORKSPACE?JSON.parse(window.INITIAL_WORKSPACE||"null"):void 0),N=(0,a.useNavigateToWorkspace)(),P=(0,n.useCallback)((e=>{m(""),r(!1),N((null==e?void 0:e.id)||null),L(e)}),[r,N]);(({activeWorkspace:e,setActiveWorkspace:t})=>{const{data:r,error:s}=l(),{workspaces:o,error:i}=p(),c=!r&&!s,d=!r&&!i,u=(0,a.useActiveWorkspaceId)();(0,n.useEffect)((()=>{if(null!=e&&e.id)return;if(!u)return t(null);const s=null==r?void 0:r.find((e=>e.id===u));if(s)return t(s);const n=null==o?void 0:o.find((e=>e.id===u));return n?t(n):c||d?void 0:t(null)}),[u,null==e?void 0:e.id,t,r,c,o,d])})({activeWorkspace:O,setActiveWorkspace:L}),(0,n.useEffect)((()=>{d&&(async({workspaceId:e,signal:t})=>{try{await c.postmanGateway.post({url:`${i.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,signal:t,data:{body:{device:{id:g,type:"app",state:{focus:!0}},models:{workspace:e},primaryModel:"workspace"}},method:"post",path:"/v2/report",service:"presence"})}catch(e){}})({workspaceId:d})}),[d]),((e,t,r)=>{const s=(0,n.useRef)(!1);(0,n.useEffect)((()=>{s.current&&t(),e&&(s.current=!0)}),r)})(t,(()=>{t&&(w&&b||x(),E&&j())}),[t]);const U=(0,n.useMemo)((()=>[{type:"SECTION_HEADING",heading:"Recently Visited"},...null!=v&&v.length?v:[{type:"NO_WORKSPACES_FOUND_MESSAGE"}],{type:"SECTION_HEADING",heading:"More Workspaces"},...null!=k&&k.length?k:[{type:"NO_WORKSPACES_FOUND_MESSAGE"}]]),[v,k]),G=(0,n.useMemo)((()=>((null==v?void 0:v.length)||0)+((null==k?void 0:k.length)||0)),[null==v?void 0:v.length,null==k?void 0:k.length]),D=(0,n.useMemo)((()=>{const e={isOpen:t,onWorkspaceClick:P};return u?(0,s.Z)({},e,{numberOfWorkspaces:(null==R?void 0:R.length)||0,isSearchMode:!0,items:R||[],loading:_,fetchingNextPage:M,loadMore:C,hasMore:I,errorLoading:W}):(0,s.Z)({},e,{numberOfWorkspaces:G,items:U,loading:null===v||null===k,fetchingNextPage:A,hasMore:y,loadMore:T,errorLoading:E})}),[t,u,P,C,G,U,k,v,R,I,y,T,A,M,E,W,_]),z=e?(0,S.jsx)(e,{activeWorkspace:O,isOpen:t,setIsOpen:r}):(0,S.jsx)(Z,{isOpen:t,setIsOpen:r,activeWorkspace:O});return(0,S.jsx)(f,{className:o,children:(0,S.jsx)(Me,{isOpen:t,setIsOpen:r,trigger:z,searchText:u,setSearchText:m,workspacesSectionProps:D})})}},4492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(7560),n=r(9730),a=r.n(n);const o=(0,s.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},9730:()=>{}}]);
//# sourceMappingURL=9316.3348e9aba0d61428.js.map