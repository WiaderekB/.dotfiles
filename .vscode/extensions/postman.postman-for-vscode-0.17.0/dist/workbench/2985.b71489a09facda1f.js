(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[2985],{4492:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var a=t(7560),r=t(9730),o=t.n(r);const s=(0,a.Z)({},o(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},2985:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ActiveEnvironmentSelector:()=>Yn,ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX:()=>E,ENVIRONMENT_BROADCAST_EVENT_ACTIONS:()=>R,ENVIRONMENT_ITEM_BROADCAST_EVENT_ACTIONS:()=>L,ENVIRONMENT_ITEM_QUERY_KEY_PREFIX:()=>b,ENVIRONMENT_LIST_QUERY_KEY_PREFIX:()=>m,ENVIRONMENT_SELECTOR_PERMISSIONS_QUERY_KEY_PREFIX:()=>f,ENVIRONMENT_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>w,GLOBALS_BROADCAST_EVENT_ACTIONS:()=>x,GLOBALS_ITEM_QUERY_KEY_PREFIX:()=>h,GLOBALS_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>g,SECRET:()=>ce,VariablesContextProvider:()=>W,VariablesContextStore:()=>l,WORKSPACE_BROADCAST_EVENT_ACTIONS:()=>N,WORKSPACE_QUERY_KEY_PREFIX:()=>y,environmentItemsQuery:()=>$,environmentVariablesHandler:()=>dt,environmentsSubscriptionHandler:()=>bt,getActiveEnvironment:()=>P,getActiveEnvironmentSession:()=>vt,getActiveGlobalsSession:()=>pt,getDuplicateEntityName:()=>ae,getDynamicVariableQuery:()=>$n,getEnvironmentItemQuery:()=>yn,getEnvironmentItemQuerySafe:()=>hn,getEnvironmentSelectorPermissionsQuery:()=>Vn,getEnvironmentSidebarPermissionsQuery:()=>kn,getEnvironmentWorkbenchPermissionsQuery:()=>Rn,getGlobalsItemQuery:()=>En,getGlobalsWorkbenchPermissionsQuery:()=>Dn,globalVariablesHandler:()=>ut,isEnvironmentItemLoading:()=>Mn,resolveVariablesInObject:()=>it,setActiveEnvironment:()=>U,unZipVariables:()=>le,updateEnvironment:()=>lt,updateEnvironmentCacheAndSession:()=>_,updateEnvironmentMutation:()=>zn,updateEnvironmentNameMutation:()=>st,updateEnvironmentWithSessionMutation:()=>Jn,updateGlobals:()=>ct,updateGlobalsCacheAndSession:()=>T,updateGlobalsMutation:()=>at,updateGlobalsWithSessionMutation:()=>rt,useActiveAndDynamicVariables:()=>ye,useActiveEnvironment:()=>M,useActiveVariables:()=>be,useCreateNewEnvironment:()=>X,useCurrentEnvironmentId:()=>fe,useEnvironmentDelete:()=>H,useEnvironmentDuplicate:()=>re,useEnvironmentFeatureFlag:()=>Y,useEnvironmentItems:()=>j,useEnvironmentListSubscription:()=>ee,useEnvironmentSubscription:()=>oe,useSetAsActiveEnvironment:()=>ne,useUpdateEnvironmentName:()=>we,zipVariables:()=>ie});var a=t(2932),r=t(747);const o=new r.KVStorage("last-used-active-environment"),s=async e=>await o.get(e)||null,i={queryFn:()=>Promise.reject(),enabled:!1,useErrorBoundary:!1};class l{constructor({collectionFetchOptions:e},n){this.activeEnvironment=null,this.collectionFetchOptions=void 0,this.meta=void 0,this.useActiveEnvironmentFromContext=void 0,this.loadLastUsedActiveEnvironment=()=>{s(this.meta.workspaceId).then((e=>{(0,a.runInAction)((()=>{this.activeEnvironment=e}))})).catch((()=>{}))},this.setActiveEnvironment=e=>{this.activeEnvironment=e,(async(e,n)=>(await o.set(e,n),n))(this.meta.workspaceId,e).catch((()=>{}))},this.meta=n,this.useActiveEnvironmentFromContext=!e,this.collectionFetchOptions=e||i,(0,a.makeObservable)(this,{activeEnvironment:a.observable,setActiveEnvironment:a.action}),this.useActiveEnvironmentFromContext&&this.loadLastUsedActiveEnvironment()}}var c=t(540),d=t.n(c),u=t(4958),v=t(9972),p=t(1554);const m="environments",b="environment",y="workspace",h="globals",E="environment-sidebar-permissions",w="environment-workbench-permissions",g="globals-workbench-permissions",f="environment-selector-permissions",I=new class{constructor(){var e=this;this.observer=null,this.environmentId="",this.abortController=null,this.asyncObserver=null,this.changeEnvironment=e=>{this.environmentId&&this.unsubscribe(),this.environmentId=e},this.subscribe=async function({environmentId:n=e.environmentId,subscriptionHandler:t}){if(""===n)return;if(e.environmentId!==n&&e.changeEnvironment(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",service:"sync",url:`/environment/${e}/subscribe`,data:{}},subscriptionEvents:["update"],responseFilter:e=>{var n;return null==e||null==(n=e.body)?void 0:n.model_id},broadcastFilter:e=>null==e?void 0:e.model_id,unsubscribeRequest:{method:"delete",service:"sync",url:`/environment/${e}/subscribe`,data:{}}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([b,n]),e.observer.subscribe({next:e=>{t(e,{environmentId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,environmentId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var C=t(7560),k=t(3154),S=t(4492);const A=e=>(0,C.Z)({},e,{id:`${e.owner}-${e.id}`}),_=async(e,n)=>{const t=A(n);(0,u.updateCache)({key:[b,e],updater:e=>e?(0,C.Z)({},e,t):e}),await(0,k.updateDependentSession)({model:"environment",modelId:t.id},t)},T=async(e,n)=>{(0,u.updateCache)({key:[h,e],updater:e=>e?(0,C.Z)({},e,n):e}),await(0,k.updateDependentSession)({model:"globals",modelId:n.id},n)};let x=function(e){return e.UPDATE="update",e}({}),R=function(e){return e.DELETE="delete",e.CREATE="create",e.UPDATE="update",e}({}),L=function(e){return e.UPDATE="update",e}({}),N=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({});const O=(e,{environmentId:n})=>{var t;const a=null==e||null==(t=e.meta)?void 0:t.action,r=null==e?void 0:e.data;a&&r&&a===L.UPDATE&&_(n,r)},D=new r.KVStorage("active-environment"),P=async e=>D.get(V(e)),U=async(e,n)=>{return D.set(V(e),(t=n,JSON.parse(JSON.stringify(t))));var t},V=({model:e,modelId:n})=>[e,n].join("/"),F=()=>D,$=e=>({queryKey:[m,e],queryFn:({signal:n})=>(async({signal:e,workspaceId:n})=>{const t=await p.postmanGateway.post({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/list/environment`,headers:{"Content-type":"text/plain"},signal:e,query:{workspace:n}});if(!Array.isArray(null==t?void 0:t.data))throw new TypeError("Received invalid response from server");return t.data})({signal:n,workspaceId:e}),select:e=>(Array.isArray(e)&&e.sort(((e,n)=>e.name.localeCompare(n.name))),e),useErrorBoundary:!1}),j=({workspaceId:e})=>(0,u.useDataFetch)($(e)),M=()=>{const e=(0,v.useActiveWorkspaceId)(),n=(0,c.useContext)(Z);if(!n)throw new Error("useActiveEnvironment must be used within a VariablesContextProvider");const[t,o]=(0,c.useState)(n.activeEnvironment);(0,c.useEffect)((()=>{if(n.useActiveEnvironmentFromContext)return(0,a.reaction)((()=>n.activeEnvironment),o)}),[n]);const{data:s}=(0,u.useDataFetch)(n.collectionFetchOptions),i=s?V({model:"collection",modelId:s.id}):"",{value:l}=(0,r.useKVStorage)(F(),i),d=n.useActiveEnvironmentFromContext?t:l,{data:p,isLoading:m,isError:b}=j({workspaceId:e}),y=(null==d?void 0:d.id)&&(null==p?void 0:p.some((({id:e})=>e===d.id)));return y?{data:d,isLoading:m,isError:b}:{data:null,isLoading:m,isError:b}};var B=t(2322);const Z=(0,c.createContext)(void 0),G=()=>{const{data:e}=M();return(0,c.useEffect)((()=>{if(e)return I.subscribe({environmentId:e.id,subscriptionHandler:O}),()=>I.unsubscribe()}),[e]),null},W=({store:e,children:n})=>((e=>{const n=(0,v.useActiveWorkspaceId)(),{data:t}=(0,u.useDataFetch)(e.collectionFetchOptions);(0,c.useEffect)((()=>{null!=t&&t.id&&(async e=>D.has(V(e)))({model:"collection",modelId:t.id}).then((e=>{if(!e)return s(n).then((e=>U({model:"collection",modelId:t.id},e)))}))}),[t])})(e),(0,B.jsxs)(Z.Provider,{value:e,children:[(0,B.jsx)(G,{}),n]}));var K=t(8722),Q=t(6081),q=t(5837);const Y=()=>!0,H=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({environmentId:e})=>(async e=>{const n=await p.postmanGateway.delete({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`});return await(0,k.deleteDependentSession)({model:"environment",modelId:e}),n})(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),(0,u.updateCache)({key:a,updater:e=>e?e.filter((({id:e})=>e!==t)):e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},X=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({workspaceId:e,requestBody:n})=>(async(e,n)=>await p.postmanGateway.post({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/import`,body:JSON.stringify(n),query:{workspace:e}}))(e,n),onMutate:async({workspaceId:n,requestBody:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),e.setQueryData(a,(e=>[...null!=e?e:[],{id:window.USER_ID+"-"+t.id,name:t.name,isLoading:!0}]))},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])},useErrorBoundary:!1})},z=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:n=e.workspaceId,subscriptionHandler:t}){if(""===n)return;if(e.workspaceId!==n&&e.changeWorkspace(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",url:`/list/environment?workspace=${e}&subscribe=true`,service:"sync"},subscriptionEvents:["broadcast"],responseFilter:e=>{var n;return null==e||null==(n=e.body)||null==(n=n.subscription)?void 0:n.id},broadcastFilter:e=>{var n;return null==e||null==(n=e.data)||null==(n=n.subscription)?void 0:n.id},unsubscribeRequest:{data:{},method:"delete",url:`/list/environment/subscribe?workspace=${e}`,service:"sync"}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([m,n]),e.observer.subscribe({next:e=>{t(e,{workspaceId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}},J=(e,{workspaceId:n})=>{var t;const a=null==e||null==(t=e.data)?void 0:t.data;if(!Array.isArray(a))return;const r=[],o=[],s=[];for(const e of a)switch(e.action){case R.CREATE:o.push(e.id);break;case R.DELETE:r.push(e.id);break;case R.UPDATE:s.push(e.id)}o.length>0||s.length>0?(0,u.invalidateCache)([m,n]):r.length>0&&((e,n)=>{0!==e.length&&(0,u.updateCache)({key:[m,n],updater:n=>Array.isArray(n)?n.filter((n=>!e.includes(n.id))):n})})(r,n)},ee=e=>{(0,c.useEffect)((()=>{if(e)return z.subscribe({workspaceId:e,subscriptionHandler:J}),()=>{z.unsubscribe()}}),[e])},ne=()=>{const e=(0,c.useContext)(Z);if(!e)throw new Error("useSetAsActiveEnvironment must be used within a VariablesProvider");const{data:n}=(0,u.useDataFetch)(e.collectionFetchOptions),t=n?V({model:"collection",modelId:n.id}):"",{setValue:a}=(0,r.useKVStorage)(F(),t);return{mutate:n=>{e.setActiveEnvironment(n),!e.useActiveEnvironmentFromContext&&t&&a(n)}}},te=e=>{const n=e.split(" "),t=n.length,a=n[t-1],r=Number.parseInt(a);return t>=2&&"Copy"===a?e+" 2":t>=3&&"Copy"===n[t-2]&&!Number.isNaN(r)?(n[t-1]=`${r+1}`,n.join(" ")):e+" Copy"},ae=(e,n="")=>{const t=new Set(e);let a=n;for(;t.has(a);)a=te(a);return a},re=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>(async({environmentId:e,workspaceId:n})=>await p.postmanGateway.post({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}/duplicate`,query:{workspace:n},data:{}}))(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a});const r=e.getQueryData(a);if(!r)return;const{name:o}=r.find((({id:e})=>e===t));(0,u.updateCache)({key:a,updater:e=>e?[...e,{id:window.USER_ID+"-"+t,name:ae([o],o),isLoading:!0}]:e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},oe=(e="")=>{(0,c.useEffect)((()=>{if(e)return I.subscribe({environmentId:e,subscriptionHandler:O}),()=>{I.unsubscribe()}}),[e])},se=(e,n=new Set)=>t=>{var a;const r=e.findIndex(((e,a)=>e.key===t.key&&e.enabled===t.enabled&&!n.has(a)));let o;return-1===r?o={value:t.value}:(n.add(r),o=e[r]),{key:t.key,value:t.value,sessionValue:o.value,isSessionValueDeleted:null==(a=o)?void 0:a.deleted,enabled:t.enabled,type:t.type}},ie=(e,n)=>e.map(se(n)),le=e=>e.reduce((({initialValues:e,sessionValues:n},t)=>{const{key:a,value:r,sessionValue:o,enabled:s,type:i,isSessionValueDeleted:l}=t;return n.push({key:a,value:o,enabled:s,type:i,deleted:!!l||void 0}),e.push({key:a,value:r,enabled:s,type:i}),{initialValues:e,sessionValues:n}}),{initialValues:[],sessionValues:[]}),ce="secret",de={queryKey:["empty-collection"],queryFn:()=>Promise.reject(),enabled:!1},ue=(e,n,t=se(n))=>n=>n.map((n=>(0,C.Z)({},t(n),{scope:e}))),ve=()=>{var e;const n=(0,v.useActiveWorkspaceId)(),{collectionFetchOptions:t}=null!=(e=(0,c.useContext)(Z))?e:{collectionFetchOptions:de},{data:a}=(0,u.useDataFetch)(En(n)),{data:r}=(0,u.useDataFetch)($n()),{data:o}=(0,u.useDataFetch)(t),{data:s}=M(),{data:i}=(0,u.useDataFetch)(hn(null==s?void 0:s.id)),l=(0,k.useSessionSafe)({model:"environment",modelId:null==i?void 0:i.id}),d=(0,k.useSessionSafe)({model:"globals",modelId:null==a?void 0:a.id}),p=(0,k.useSessionSafe)({model:"collection",modelId:null==o?void 0:o.id});return(0,c.useMemo)((()=>{var e,n,t,s,c,u,v,m,b,y;return{data:[...(y=r,y||[]),...ue("globals",null!=(e=null==(n=d.value)?void 0:n.values)?e:[])(null!=(t=null==a?void 0:a.values)?t:[]),...ue("collection",null!=(s=null==(c=p.value)?void 0:c.values)?s:[])(null!=(u=null==o?void 0:o.variables)?u:[]),...ue("environment",null!=(v=null==(m=l.value)?void 0:m.values)?v:[])(null!=(b=null==i?void 0:i.values)?b:[])].map(((e,n)=>(0,C.Z)({},e,{id:`${e.scope}::${n}`})))}}),[o,p.value,i,l.value,a,d.value,r])},pe=e=>{const n=e.filter((e=>"dynamic"===e.type));return[...e.filter((e=>"dynamic"!==e.type)),...n]},me=e=>{const n=e.filter((e=>{return"boolean"!=typeof(n=e).enabled||n.enabled;var n})),t=(e=>{const n=new Map(e.map((e=>[e.key,e])));return e=>{const t=n.get(e.key);return t&&t.id!==e.id?(0,C.Z)({},e,{overriddenBy:{id:t.id,scope:t.scope}}):e}})(n),a=n.map((e=>t(e)));return{data:pe(a)}},be=()=>{const{data:e}=ve();return(0,c.useMemo)((()=>{if(!e)return{};const n=e.filter((e=>"dynamic"!==e.type));return me(n)}),[e])},ye=()=>{const{data:e}=ve();return(0,c.useMemo)((()=>e?me(e):{}),[e])},he=async({environmentId:e,name:n})=>await p.postmanGateway.put({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,data:{name:n}}),Ee=(e,n,t)=>{(0,u.updateCache)({key:e,updater:e=>e?e.map((e=>e.id===n?(0,C.Z)({},e,{name:t}):e)):e})},we=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>he(e),onMutate:async({workspaceId:n,environmentId:t,name:a})=>{const r=[m,n],o=e.getQueryData(r);if(!o)return;const s=o.find((({id:e})=>e===t));return Ee(r,t,a),()=>{s&&Ee(r,t,s.name)}},onSuccess:(e,{workspaceId:n,environmentId:t})=>{Ee([m,n],t,e.data.name)},onError:(e,n,t)=>{t&&t()}})};var ge=t(607);const fe=()=>{const{pathname:e}=(0,Q.useLocation)(),{environmentId:n}=(0,ge.useParams)();return n||(null!=e&&e.endsWith("/globals")?"globals":void 0)};var Ie=t(5892),Ce=t.n(Ie),ke=t(856),Se=t(8691),Ae=t(605),_e=t(9319);let Te,xe,Re=e=>e;const Le=Ce()(_e.Z)(Te||(Te=Re`
  padding: 0 var(--spacing-xs);
`)),Ne=Ce()(Se.Z)(xe||(xe=Re`
  flex: 1;
  min-width: 0;

  button:first-child > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    .aether-split-button__splitter {
      border-left-color: var(--vscode-button-separator);
    }
  }
`)),Oe=({value:e,isLoading:n,onClick:t,isSecondaryButtonDisabled:a,onSecondaryButtonClick:r,ref:o})=>{const{label:s,forkLabel:i}=e,l=i?`${s} [${i}]`:s;return(0,B.jsx)(Ne,{ref:o,type:"secondary",minWidth:"0px",tooltip:l,text:l,secondaryButton:(0,B.jsx)(Ae.Z,{type:"secondary",icon:(0,B.jsx)(Le,{}),onClick:r,"data-testid":"quick-look-button",isDisabled:a}),isLoading:n,onClick:t})};let De;const Pe=Ce().div(De||(De=(e=>e)`
  display: flex;
  padding: var(--spacing-l);
  background-color: var(--highlight-background-color-secondary);
  border-radius: 0 0 var(--border-radius-default) var(--border-radius-default);
`)),Ue=({text:e,isLoading:n,isDisabled:t,onClick:a})=>(0,B.jsx)(Pe,{children:(0,B.jsx)(Ae.Z,{type:"text",text:e,onClick:a,isLoading:n,isDisabled:t})});var Ve=t(8069);let Fe;const $e=Ce()(Ve.Z)(Fe||(Fe=(e=>e)`
  border-color: transparent;
  border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;

  &:active,
  &:focus,
  &:hover,
  &:focus-within {
    box-shadow: none;
    border-color: transparent;
  }
`)),je=({value:e,onChange:n})=>{const t=d().useRef(null);return d().useEffect((()=>{t.current&&t.current.focus()}),[]),(0,B.jsx)($e,{ref:t,type:"search",value:e,onChange:n,placeholder:"Search"})};var Me=t(1397),Be=t(7691);let Ze,Ge,We,Ke=e=>e;const Qe=Ce().div(Ze||(Ze=Ke`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`)),qe=Ce().p(Ge||(Ge=Ke`
  flex: 2;
  margin: 0;
  margin-right: var(--spacing-s);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: fit-content;
`)),Ye=Ce().p(We||(We=Ke`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  margin-left: var(--spacing-xs);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  text-overflow: ellipsis;
  color: var(--content-color-tertiary);
  max-width: fit-content;
`)),He=({label:e,forkLabel:n})=>e?(0,B.jsxs)(Qe,{children:[(0,B.jsx)(Me.Z,{content:e,openDelay:1e3,placement:"bottom",children:(0,B.jsx)(qe,{children:e})}),n&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Be.Z,{color:"content-color-tertiary",size:"small","data-testid":"fork-icon"}),(0,B.jsx)(Me.Z,{content:n,openDelay:1e3,placement:"bottom",children:(0,B.jsx)(Ye,{children:n})})]})]}):null;let Xe;const ze=Ce().div(Xe||(Xe=(e=>e)`
  flex: 1;
  color: var(--content-color-primary);
  min-height: 28px;
  box-sizing: border-box;
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-secondary);
  }

  &:active {
    background-color: var(--highlight-background-color-tertiary);
  }
`),(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-primary);")),Je=({isSelected:e,label:n,forkLabel:t,onSelect:a})=>(0,B.jsx)(ze,{isSelected:e,role:"menuitem",onClick:a,tabIndex:0,onKeyPress:e=>{if("Enter"===e.key||" "===e.key)return e.preventDefault(),e.stopPropagation(),a()},children:(0,B.jsx)(He,{label:n,forkLabel:t})});let en,nn,tn,an,rn,on=e=>e;const sn=Ce().div(en||(en=on`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  width: 90vw;
  max-width: 320px;
`)),ln=Ce().div(nn||(nn=on`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-s);
  overflow-y: auto;
  background: var(--background-color-primary);

  :empty::before {
    content: 'No items found';
    flex: 1;
    min-height: 28px;
    box-sizing: border-box;
    padding: var(--spacing-xs) var(--spacing-s);
    color: var(--content-color-tertiary);
  }
`)),cn=Ce().div(tn||(tn=on`
  padding: var(--spacing-s) var(--spacing-l);
  color: var(--content-color-secondary);
  background-color: var(--highlight-background-color-secondary);
  font-weight: var(--text-weight-bold);
  user-select: none;
`)),dn=Ce().div(an||(an=on`
  text-align: center;
  padding: var(--spacing-m);
`)),un=Ce().div(rn||(rn=on`
  border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;
  ${0};
`),(e=>e.isBleed?" ":"border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);")),vn=({options:e,onChange:n,value:t,isError:a,refetch:r,headerInfoText:o,isCreateNewLoading:s,isCreateNewDisabled:i,onCreateNew:l,createNewText:c="Create New"})=>{const[u,v]=d().useState(""),p=e.filter((({label:e})=>e.toLowerCase().includes(String(u).toLowerCase())));return(0,B.jsxs)(sn,{role:"menu",id:"selectormenu","aria-labelledby":"menubutton",children:[(0,B.jsx)(un,{isBleed:Boolean(o),children:(0,B.jsx)(je,{value:u,onChange:e=>v(e.target.value)})}),o&&(0,B.jsx)(cn,{children:o}),a?(0,B.jsxs)(dn,{children:["Failed to load. ",(0,B.jsx)(Ae.Z,{type:"text",text:"Retry",onClick:r})]}):(0,B.jsx)(ln,{children:p.map((e=>(0,B.jsx)(Je,{value:e.value,label:e.label,forkLabel:e.forkLabel,onSelect:()=>(v(""),n(e)),isSelected:e.value===t.value},e.value)))}),l&&(0,B.jsx)(Ue,{text:c,onClick:l,isLoading:s,isDisabled:i})]})};let pn;const mn=Ce().div(pn||(pn=(e=>e)`
  display: flex;
  flex: 1;
  max-width: 260px;
`)),bn=({value:e,options:n,onChange:t,isLoading:a,isError:r,refetch:o,headerInfoText:s,isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,isQuickLookDisabled:u,onQuickLookClick:v,menuPlacement:p,"aria-label":m})=>{const[b,y]=d().useState(!1),h=(0,B.jsx)(mn,{children:(0,B.jsx)(Oe,{value:e,isLoading:a,onClick:()=>y((e=>!e)),isSecondaryButtonDisabled:u,onSecondaryButtonClick:()=>(b&&y(!1),v()),"aria-haspopup":"menu","aria-controls":"selectormenu","aria-expanded":b,"aria-label":m})});return(0,B.jsx)(ke.ZP,{placement:p,trigger:h,isOpen:b,onClickOutside:()=>y(!1),padding:"0",appendTo:"parent",children:b&&(0,B.jsx)(vn,{isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,headerInfoText:s,options:n,isError:r,refetch:o,onChange:(...e)=>(y(!1),t(...e)),value:e})})},yn=e=>({queryKey:[b,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t,a;if(!e)throw new Error("Invalid environment id");const r=await p.postmanGateway.get({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,signal:n});null==r||r.data;const o=A(r.data);return await(0,k.updateDependentSession)({model:"environment",modelId:o.id},o),(0,C.Z)({},o,{forkedFrom:null!=(t=null==(a=r.meta)?void 0:a.forkedFrom)?t:null})})(e,{signal:n}),useErrorBoundary:!1}),hn=e=>(0,C.Z)({},yn(null!=e?e:""),{enabled:!!e}),En=e=>({queryKey:[h,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t;const a=await p.postmanGateway.get({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/workspace/${e}/globals`,signal:n});if(!Array.isArray(null==a||null==(t=a.data)?void 0:t.values))throw new TypeError("Received invalid globals data from server");const r=a.data;return await(0,k.updateDependentSession)({model:"globals",modelId:r.id},r),r})(e,{signal:n}),useErrorBoundary:!1}),wn=async({signal:e,permissionsPayload:n})=>{const t=await p.postmanGateway.post({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:{checks:(0,C.Z)({},n)}},signal:e});if(null==t||!t.results)throw new Error("Received invalid permissions");return t.results},gn="workspace",fn="ADD_ENVIRONMENT_TO_WORKSPACE",In="UPDATE_GLOBALS",Cn=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:gn,permission:a};return t},kn=e=>({queryKey:[y,E,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreateEnvironment:!0,userCanUpdateGlobals:!0};const t={[fn]:`${gn}/${e}/${fn}`,[In]:`${gn}/${e}/${In}`},a=await wn({signal:n,permissionsPayload:Cn(e,t)});return{userCanCreateEnvironment:a[t[fn]].allowed,userCanUpdateGlobals:a[t[In]].allowed}},useErrorBoundary:!1}),Sn="workspace",An="ADD_ENVIRONMENT_TO_WORKSPACE",_n="UPDATE_ENVIRONMENT",Tn="DELETE_ENVIRONMENT",xn=e=>e.includes(Sn),Rn=(e,n)=>({queryKey:[w,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanCreate:!0,userCanUpdate:!0,userCanDelete:!0};const a={[An]:`${Sn}/${n}/${An}`,[_n]:`${e}:${_n}`,[Tn]:`${e}:${Tn}`},r=((e,n,t)=>{const a={};for(const[r,o]of Object.entries(t))a[o]={entityId:window.USER_ID,entityType:"user",permission:r,objectId:xn(o)?n:e,objectType:xn(o)?Sn:"environment"};return a})(e,n,a),o=await wn({signal:t,permissionsPayload:r});return{userCanCreate:o[a[An]].allowed,userCanUpdate:o[a[_n]].allowed,userCanDelete:o[a[Tn]].allowed}},useErrorBoundary:!1}),Ln="workspace",Nn="UPDATE_GLOBALS",On=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:Ln,permission:a};return t},Dn=e=>({queryKey:[g,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanUpdate:!0};const t={[Nn]:`${Ln}/${e}/${Nn}`};return{userCanUpdate:(await wn({signal:n,permissionsPayload:On(e,t)}))[t[Nn]].allowed}},useErrorBoundary:!1}),Pn="workspace",Un="ADD_ENVIRONMENT_TO_WORKSPACE",Vn=e=>({queryKey:[f,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreate:!0};const t={[Un]:`${Pn}/${e}/${Un}`},a=((e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",permission:a,objectId:e,objectType:Pn};return t})(e,t);return{userCanCreate:(await wn({signal:n,permissionsPayload:a}))[t[Un]].allowed}},useErrorBoundary:!1});var Fn=t(4302);const $n=()=>({queryKey:["dynamic"],queryFn:()=>(async()=>await Fn.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_DYNAMIC_VARIABLES",payload:{}}))()}),jn={userCanCreate:!0},Mn=e=>Boolean(e.isLoading);var Bn=t(3720);const Zn="environment-selector-value-paint-mark",{PerfContext:Gn,PerformanceMarkPaint:Wn}=Bn.perfComponents,Kn=()=>{performance.measure("environment-selector-value-paint-time",{},Zn),(0,Bn.sendMeasureEvent)({name:Zn,entityType:"generic-selector"})},Qn=Object.freeze({label:"No Environment",value:"",forkLabel:""}),qn=()=>{var e;const n=(0,Q.useNavigate)(),t=(0,v.useActiveWorkspaceId)(),a=(0,c.useContext)(Z),r=a&&!a.useActiveEnvironmentFromContext;ee(t);const{data:o,isError:s,refetch:i}=j({workspaceId:t}),l=!o,{data:d}=M(),p=ne(),m=(0,c.useMemo)((()=>{var e;return[Qn,...null!=(e=null==o?void 0:o.map((e=>{var n;const t=Mn(e)?null:null==(n=e.attributes)||null==(n=n.fork)?void 0:n.forkLabel;return{label:e.name,value:e.id,forkLabel:null!=t?t:""}})))?e:[]]}),[o]),b=X(),{isLoading:y,userCanCreate:h}=(()=>{const e=(0,v.useActiveWorkspaceId)(),{data:n,error:t}=(0,u.useDataFetch)(Vn(e));return t?(0,C.Z)({isLoading:!1},jn):n?(0,C.Z)({isLoading:!1},n):(0,C.Z)({isLoading:!0},jn)})(),E=(e,a)=>{const r={rename:(null==a?void 0:a.showRenameOptionOnOpen)||!1};n(`/workspace/${t}/environment/${e}`,{state:JSON.stringify({additionalContext:r})},{customNavEvent:Q.OPEN_EXTENSION_URL})},w=null!=(e=m.find((e=>e.value===(null==d?void 0:d.id))))?e:Qn,g=l&&!s,{markName:f,callback:I}=(0,c.useContext)(Gn);return(0,B.jsx)("div",{"data-testid":"active-environment-selector",children:(0,B.jsx)(Wn,{condition:!g,markName:f||Zn,callback:I||Kn,children:(0,B.jsx)(bn,{options:m,value:w,isLoading:g,isError:s,refetch:i,onChange:e=>{p.mutate(null!=e&&e.value?{id:e.value}:null)},menuPlacement:"bottom-end","aria-label":"active-environment",isQuickLookDisabled:!d||l,onQuickLookClick:()=>{d&&E(d.id)},headerInfoText:r?"Switch environment for the entire collection":void 0,isCreateNewLoading:b.isLoading||y,isCreateNewDisabled:!h,onCreateNew:()=>{b.mutate({workspaceId:t,requestBody:{id:(0,K.v4)(),name:"New Environment",values:[]}},{onSuccess:({data:e})=>{q.AnalyticsService.addEventV2({category:"environment",action:"create",label:"environment-selector"}),E(`${e.owner}-${e.id}`,{showRenameOptionOnOpen:!0})}})}})})})},Yn=e=>Y()?(0,B.jsx)(qn,(0,C.Z)({},e)):null,Hn=e=>null==e?void 0:e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),Xn=async(e,n)=>{if(!e.id)throw new Error("updateEnvironment: id is required");const t=(e=>{const{values:n}=e;return(0,C.Z)({},e,{values:Hn(n)})})(e),a=(r=(await p.postmanGateway.put({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${t.id}`,body:JSON.stringify({name:t.name,values:t.values})})).data,(0,C.Z)({},r,{id:`${r.owner}-${r.id}`}));var r;return null!=n&&n.avoidSession||await(0,k.updateDependentSession)({model:"environment",modelId:a.id},a),a},zn=()=>({mutationFn:Xn,onSuccess:e=>{u.cacheClient.setQueryData(["environment",e.id],e)}}),Jn=()=>({mutationFn:async(e,n,t=!1)=>{const a=e.id;if(t)return await(0,k.setSession)({model:"environment",modelId:a},n),null;const[r]=await Promise.all([Xn(e,{avoidSession:!0}),(0,k.setSession)({model:"environment",modelId:a},n)]);return{environment:r}},onSuccess:e=>{if(e){const{environment:n}=e;(0,u.updateCache)({key:[b,n.id],updater:e=>e?(0,C.Z)({},e,n):e})}}}),et=e=>e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),nt=e=>{const{values:n,workspace:t}=e;return{workspace:t,values:et(n)}},tt=async(e,n)=>{const t=e.workspace,a=(await p.postmanGateway.put({url:`${S.Z.HTTPS_GATEWAY_PRIVATE_URL}/workspace/${t}/globals`,body:JSON.stringify(nt(e))})).data;return null!=n&&n.avoidSession||await(0,k.updateDependentSession)({model:"globals",modelId:a.id},a),a},at=()=>({mutationFn:tt,onSuccess:e=>{u.cacheClient.setQueryData([h,e.workspace],e)}}),rt=()=>({mutationFn:async(e,n,t=!1)=>{if(t)return await(0,k.setSession)({model:"globals",modelId:e.id},n),null;const[a]=await Promise.all([tt(e,{avoidSession:!0}),(0,k.setSession)({model:"globals",modelId:e.id},n)]);return{globals:(0,C.Z)({},a,{workspace:e.workspace})}},onSuccess:e=>{if(e){const{globals:n}=e;(0,u.updateCache)({key:["globals",n.workspace],updater:n})}}}),ot=(e,n)=>{(0,u.updateCache)({key:e,updater:e=>e?(0,C.Z)({},e,{name:n}):e})},st=()=>({mutationFn:e=>he(e),onMutate:async({environmentId:e,name:n})=>{const t=[b,e],a=u.cacheClient.getQueryData(t);return ot(t,n),()=>{a&&ot(t,a.name)}},onSuccess:(e,{environmentId:n})=>{ot([b,n],e.data.name)},onError:(e,n,t)=>{t&&t()}});async function it(e,n,t){Fn.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:e,variables:n,id:t}})}const lt=async(...e)=>{const n=await Xn(...e);return(0,u.updateCache)({key:[b,n.id],updater:()=>n}),n},ct=async(...e)=>{const n=await tt(...e);return(0,u.updateCache)({key:[h,n.workspace],updater:()=>n}),n},dt=(0,k.createVariableUpdatesHandler)({model:"environment",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(Rn(e,n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async e=>await u.cacheClient.fetchQuery(yn(e)).catch((()=>null)),setValues:(e,n)=>lt({id:e,values:n})}),ut=(0,k.createVariableUpdatesHandler)({model:"globals",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(Dn(n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async(e,{workspaceId:n})=>await u.cacheClient.fetchQuery(En(n)).catch((()=>null)),setValues:(e,n,{workspaceId:t})=>ct({id:e,values:n,workspace:t})}),vt=async e=>{if(!e)return;const n=await u.cacheClient.fetchQuery(yn(e));return(0,k.getActiveSession)({model:"environment",modelId:n.id},n)},pt=async e=>{const n=await u.cacheClient.fetchQuery(En(e));return(0,k.getActiveSession)({model:"globals",modelId:n.id},n)};var mt=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e}(mt||{});const bt=(e,{workspaceId:n})=>{var t,a;const r=null==e||null==(t=e.meta)?void 0:t.model,o=null==e||null==(a=e.meta)?void 0:a.action;if(r===mt.GLOBALS&&o===x.UPDATE){const t=null==e?void 0:e.data;T(n,t)}r===mt.WORKSPACE&&o===N.UPDATE_ROLES&&(u.cacheClient.invalidateQueries({queryKey:[w]}),(0,u.invalidateCache)([g,n]))}},9730:()=>{}}]);
//# sourceMappingURL=2985.b71489a09facda1f.js.map