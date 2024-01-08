(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[2985,4492,4489],{84492:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var a=t(69730),r=t.n(a);const o=Object.assign({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},52985:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ActiveEnvironmentSelector:()=>On,ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX:()=>w,ENVIRONMENT_BROADCAST_EVENT_ACTIONS:()=>x,ENVIRONMENT_ITEM_BROADCAST_EVENT_ACTIONS:()=>R,ENVIRONMENT_ITEM_QUERY_KEY_PREFIX:()=>b,ENVIRONMENT_LIST_QUERY_KEY_PREFIX:()=>m,ENVIRONMENT_SELECTOR_PERMISSIONS_QUERY_KEY_PREFIX:()=>f,ENVIRONMENT_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>E,GLOBALS_BROADCAST_EVENT_ACTIONS:()=>T,GLOBALS_ITEM_QUERY_KEY_PREFIX:()=>h,GLOBALS_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>g,SECRET:()=>le,VariablesContextProvider:()=>G,VariablesContextStore:()=>l,WORKSPACE_BROADCAST_EVENT_ACTIONS:()=>O,WORKSPACE_QUERY_KEY_PREFIX:()=>y,environmentItemsQuery:()=>V,environmentVariablesHandler:()=>Kn,environmentsSubscriptionHandler:()=>zn,getActiveEnvironment:()=>D,getActiveEnvironmentSession:()=>Yn,getActiveGlobalsSession:()=>Hn,getDuplicateEntityName:()=>te,getDynamicVariableQuery:()=>fn,getEnvironmentItemQuery:()=>ze,getEnvironmentItemQuerySafe:()=>Xe,getEnvironmentSelectorPermissionsQuery:()=>En,getEnvironmentSidebarPermissionsQuery:()=>on,getEnvironmentWorkbenchPermissionsQuery:()=>pn,getGlobalsItemQuery:()=>Je,getGlobalsWorkbenchPermissionsQuery:()=>yn,globalVariablesHandler:()=>qn,isEnvironmentItemLoading:()=>Cn,resolveVariablesInObject:()=>Bn,setActiveEnvironment:()=>P,unZipVariables:()=>ie,updateEnvironment:()=>Gn,updateEnvironmentCacheAndSession:()=>S,updateEnvironmentMutation:()=>Dn,updateEnvironmentNameMutation:()=>Wn,updateEnvironmentWithSessionMutation:()=>Pn,updateGlobals:()=>Qn,updateGlobalsCacheAndSession:()=>A,updateGlobalsMutation:()=>Fn,updateGlobalsWithSessionMutation:()=>$n,useActiveAndDynamicVariables:()=>be,useActiveEnvironment:()=>$,useActiveVariables:()=>me,useCreateNewEnvironment:()=>Z,useCurrentEnvironmentId:()=>ge,useEnvironmentDelete:()=>H,useEnvironmentDuplicate:()=>ae,useEnvironmentFeatureFlag:()=>Y,useEnvironmentItems:()=>F,useEnvironmentListSubscription:()=>J,useEnvironmentSubscription:()=>re,useSetAsActiveEnvironment:()=>ee,useUpdateEnvironmentName:()=>we,zipVariables:()=>se});var a=t(62932),r=t(50747);const o=new r.KVStorage("last-used-active-environment"),s=async e=>await o.get(e)||null,i={queryFn:()=>Promise.reject(),enabled:!1,useErrorBoundary:!1};class l{constructor({collectionFetchOptions:e},n){this.activeEnvironment=null,this.collectionFetchOptions=void 0,this.meta=void 0,this.useActiveEnvironmentFromContext=void 0,this.loadLastUsedActiveEnvironment=()=>{s(this.meta.workspaceId).then((e=>{(0,a.runInAction)((()=>{this.activeEnvironment=e}))})).catch((()=>{}))},this.setActiveEnvironment=e=>{this.activeEnvironment=e,(async(e,n)=>(await o.set(e,n),n))(this.meta.workspaceId,e).catch((()=>{}))},this.meta=n,this.useActiveEnvironmentFromContext=!e,this.collectionFetchOptions=e||i,(0,a.makeObservable)(this,{activeEnvironment:a.observable,setActiveEnvironment:a.action}),this.useActiveEnvironmentFromContext&&this.loadLastUsedActiveEnvironment()}}var c=t(40540),d=t.n(c),u=t(44958),p=t(19972),v=t(98079);const m="environments",b="environment",y="workspace",h="globals",w="environment-sidebar-permissions",E="environment-workbench-permissions",g="globals-workbench-permissions",f="environment-selector-permissions",I=new class{constructor(){var e=this;this.observer=null,this.environmentId="",this.abortController=null,this.asyncObserver=null,this.changeEnvironment=e=>{this.environmentId&&this.unsubscribe(),this.environmentId=e},this.subscribe=async function({environmentId:n=e.environmentId,subscriptionHandler:t}){if(""===n)return;if(e.environmentId!==n&&e.changeEnvironment(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:v.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",service:"sync",url:`/environment/${e}/subscribe`,data:{}},subscriptionEvents:["update"],responseFilter:e=>{var n;return null==e||null==(n=e.body)?void 0:n.model_id},broadcastFilter:e=>null==e?void 0:e.model_id,unsubscribeRequest:{method:"delete",service:"sync",url:`/environment/${e}/subscribe`,data:{}}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([b,n]),e.observer.subscribe({next:e=>{t(e,{environmentId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,environmentId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var C=t(63154),k=t(84492);const _=e=>Object.assign({},e,{id:`${e.owner}-${e.id}`}),S=async(e,n)=>{const t=_(n);(0,u.updateCache)({key:[b,e],updater:e=>e?Object.assign({},e,t):e}),await(0,C.updateDependentSession)({model:"environment",modelId:t.id},t)},A=async(e,n)=>{(0,u.updateCache)({key:[h,e],updater:e=>e?Object.assign({},e,n):e}),await(0,C.updateDependentSession)({model:"globals",modelId:n.id},n)};let T=function(e){return e.UPDATE="update",e}({}),x=function(e){return e.DELETE="delete",e.CREATE="create",e.UPDATE="update",e}({}),R=function(e){return e.UPDATE="update",e}({}),O=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({});const N=(e,{environmentId:n})=>{var t;const a=null==e||null==(t=e.meta)?void 0:t.action,r=null==e?void 0:e.data;a&&r&&a===R.UPDATE&&S(n,r)},L=new r.KVStorage("active-environment"),D=async e=>L.get(j(e)),P=async(e,n)=>{return L.set(j(e),(t=n,JSON.parse(JSON.stringify(t))));var t},j=({model:e,modelId:n})=>[e,n].join("/"),U=()=>L,V=e=>({queryKey:[m,e],queryFn:({signal:n})=>(async({signal:e,workspaceId:n})=>{const t=await v.postmanGateway.post({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/list/environment`,headers:{"Content-type":"text/plain"},signal:e,query:{workspace:n}});if(!Array.isArray(null==t?void 0:t.data))throw new TypeError("Received invalid response from server");return t.data})({signal:n,workspaceId:e}),select:e=>(Array.isArray(e)&&e.sort(((e,n)=>e.name.localeCompare(n.name))),e),useErrorBoundary:!1}),F=({workspaceId:e})=>(0,u.useDataFetch)(V(e)),$=()=>{const e=(0,p.useActiveWorkspaceId)(),n=(0,c.useContext)(W);if(!n)throw new Error("useActiveEnvironment must be used within a VariablesContextProvider");const[t,o]=(0,c.useState)(n.activeEnvironment);(0,c.useEffect)((()=>{if(n.useActiveEnvironmentFromContext)return(0,a.reaction)((()=>n.activeEnvironment),o)}),[n]);const{data:s}=(0,u.useDataFetch)(n.collectionFetchOptions),i=s?j({model:"collection",modelId:s.id}):"",{value:l}=(0,r.useKVStorage)(U(),i),d=n.useActiveEnvironmentFromContext?t:l,{data:v,isLoading:m,isError:b}=F({workspaceId:e}),y=(null==d?void 0:d.id)&&(null==v?void 0:v.some((({id:e})=>e===d.id)));return y?{data:d,isLoading:m,isError:b}:{data:null,isLoading:m,isError:b}};var M=t(52322);const W=(0,c.createContext)(void 0),B=()=>{const{data:e}=$();return(0,c.useEffect)((()=>{if(e)return I.subscribe({environmentId:e.id,subscriptionHandler:N}),()=>I.unsubscribe()}),[e]),null},G=({store:e,children:n})=>((e=>{const n=(0,p.useActiveWorkspaceId)(),{data:t}=(0,u.useDataFetch)(e.collectionFetchOptions);(0,c.useEffect)((()=>{null!=t&&t.id&&(async e=>L.has(j(e)))({model:"collection",modelId:t.id}).then((e=>{if(!e)return s(n).then((e=>P({model:"collection",modelId:t.id},e)))}))}),[t])})(e),(0,M.jsxs)(W.Provider,{value:e,children:[(0,M.jsx)(B,{}),n]}));var Q=t(48722),K=t(26081),q=t(15837);const Y=()=>!0,H=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({environmentId:e})=>(async e=>{const n=await v.postmanGateway.delete({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`});return await(0,C.deleteDependentSession)({model:"environment",modelId:e}),n})(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),(0,u.updateCache)({key:a,updater:e=>e?e.filter((({id:e})=>e!==t)):e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},Z=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({workspaceId:e,requestBody:n})=>(async(e,n)=>await v.postmanGateway.post({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/import`,body:JSON.stringify(n),query:{workspace:e}}))(e,n),onMutate:async({workspaceId:n,requestBody:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),e.setQueryData(a,(e=>[...null!=e?e:[],{id:window.USER_ID+"-"+t.id,name:t.name,isLoading:!0}]))},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])},useErrorBoundary:!1})},z=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:n=e.workspaceId,subscriptionHandler:t}){if(""===n)return;if(e.workspaceId!==n&&e.changeWorkspace(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:v.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",url:`/list/environment?workspace=${e}&subscribe=true`,service:"sync"},subscriptionEvents:["broadcast"],responseFilter:e=>{var n;return null==e||null==(n=e.body)||null==(n=n.subscription)?void 0:n.id},broadcastFilter:e=>{var n;return null==e||null==(n=e.data)||null==(n=n.subscription)?void 0:n.id},unsubscribeRequest:{data:{},method:"delete",url:`/list/environment/subscribe?workspace=${e}`,service:"sync"}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([m,n]),e.observer.subscribe({next:e=>{t(e,{workspaceId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}},X=(e,{workspaceId:n})=>{var t;const a=null==e||null==(t=e.data)?void 0:t.data;if(!Array.isArray(a))return;const r=[],o=[],s=[];for(const e of a)switch(e.action){case x.CREATE:o.push(e.id);break;case x.DELETE:r.push(e.id);break;case x.UPDATE:s.push(e.id)}o.length>0||s.length>0?(0,u.invalidateCache)([m,n]):r.length>0&&((e,n)=>{0!==e.length&&(0,u.updateCache)({key:[m,n],updater:n=>Array.isArray(n)?n.filter((n=>!e.includes(n.id))):n})})(r,n)},J=e=>{(0,c.useEffect)((()=>{if(e)return z.subscribe({workspaceId:e,subscriptionHandler:X}),()=>{z.unsubscribe()}}),[e])},ee=()=>{const e=(0,c.useContext)(W);if(!e)throw new Error("useSetAsActiveEnvironment must be used within a VariablesProvider");const{data:n}=(0,u.useDataFetch)(e.collectionFetchOptions),t=n?j({model:"collection",modelId:n.id}):"",{setValue:a}=(0,r.useKVStorage)(U(),t);return{mutate:n=>{e.setActiveEnvironment(n),!e.useActiveEnvironmentFromContext&&t&&a(n)}}},ne=e=>{const n=e.split(" "),t=n.length,a=n[t-1],r=Number.parseInt(a);return t>=2&&"Copy"===a?e+" 2":t>=3&&"Copy"===n[t-2]&&!Number.isNaN(r)?(n[t-1]=`${r+1}`,n.join(" ")):e+" Copy"},te=(e,n="")=>{const t=new Set(e);let a=n;for(;t.has(a);)a=ne(a);return a},ae=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>(async({environmentId:e,workspaceId:n})=>await v.postmanGateway.post({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}/duplicate`,query:{workspace:n},data:{}}))(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a});const r=e.getQueryData(a);if(!r)return;const{name:o}=r.find((({id:e})=>e===t));(0,u.updateCache)({key:a,updater:e=>e?[...e,{id:window.USER_ID+"-"+t,name:te([o],o),isLoading:!0}]:e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},re=(e="")=>{(0,c.useEffect)((()=>{if(e)return I.subscribe({environmentId:e,subscriptionHandler:N}),()=>{I.unsubscribe()}}),[e])},oe=(e,n=new Set)=>t=>{var a;const r=e.findIndex(((e,a)=>e.key===t.key&&e.enabled===t.enabled&&!n.has(a)));let o;return-1===r?o={value:t.value}:(n.add(r),o=e[r]),{key:t.key,value:t.value,sessionValue:o.value,isSessionValueDeleted:null==(a=o)?void 0:a.deleted,enabled:t.enabled,type:t.type}},se=(e,n)=>e.map(oe(n)),ie=e=>e.reduce((({initialValues:e,sessionValues:n},t)=>{const{key:a,value:r,sessionValue:o,enabled:s,type:i,isSessionValueDeleted:l}=t;return n.push({key:a,value:o,enabled:s,type:i,deleted:!!l||void 0}),e.push({key:a,value:r,enabled:s,type:i}),{initialValues:e,sessionValues:n}}),{initialValues:[],sessionValues:[]}),le="secret",ce={queryKey:["empty-collection"],queryFn:()=>Promise.reject(),enabled:!1},de=(e,n,t=oe(n))=>n=>n.map((n=>Object.assign({},t(n),{scope:e}))),ue=()=>{var e;const n=(0,p.useActiveWorkspaceId)(),{collectionFetchOptions:t}=null!=(e=(0,c.useContext)(W))?e:{collectionFetchOptions:ce},{data:a}=(0,u.useDataFetch)(Je(n)),{data:r}=(0,u.useDataFetch)(fn()),{data:o}=(0,u.useDataFetch)(t),{data:s}=$(),{data:i}=(0,u.useDataFetch)(Xe(null==s?void 0:s.id)),l=(0,C.useSessionSafe)({model:"environment",modelId:null==i?void 0:i.id}),d=(0,C.useSessionSafe)({model:"globals",modelId:null==a?void 0:a.id}),v=(0,C.useSessionSafe)({model:"collection",modelId:null==o?void 0:o.id});return(0,c.useMemo)((()=>{var e,n,t,s,c,u,p,m,b,y;return{data:[...(y=r,y||[]),...de("globals",null!=(e=null==(n=d.value)?void 0:n.values)?e:[])(null!=(t=null==a?void 0:a.values)?t:[]),...de("collection",null!=(s=null==(c=v.value)?void 0:c.values)?s:[])(null!=(u=null==o?void 0:o.variables)?u:[]),...de("environment",null!=(p=null==(m=l.value)?void 0:m.values)?p:[])(null!=(b=null==i?void 0:i.values)?b:[])].map(((e,n)=>Object.assign({},e,{id:`${e.scope}::${n}`})))}}),[o,v.value,i,l.value,a,d.value,r])},pe=e=>{const n=e.filter((e=>"dynamic"===e.type));return[...e.filter((e=>"dynamic"!==e.type)),...n]},ve=e=>{const n=e.filter((e=>{return"boolean"!=typeof(n=e).enabled||n.enabled;var n})),t=(e=>{const n=new Map(e.map((e=>[e.key,e])));return e=>{const t=n.get(e.key);return t&&t.id!==e.id?Object.assign({},e,{overriddenBy:{id:t.id,scope:t.scope}}):e}})(n),a=n.map((e=>t(e)));return{data:pe(a)}},me=()=>{const{data:e}=ue();return(0,c.useMemo)((()=>{if(!e)return{};const n=e.filter((e=>"dynamic"!==e.type));return ve(n)}),[e])},be=()=>{const{data:e}=ue();return(0,c.useMemo)((()=>e?ve(e):{}),[e])},ye=async({environmentId:e,name:n})=>await v.postmanGateway.put({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,data:{name:n}}),he=(e,n,t)=>{(0,u.updateCache)({key:e,updater:e=>e?e.map((e=>e.id===n?Object.assign({},e,{name:t}):e)):e})},we=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>ye(e),onMutate:async({workspaceId:n,environmentId:t,name:a})=>{const r=[m,n],o=e.getQueryData(r);if(!o)return;const s=o.find((({id:e})=>e===t));return he(r,t,a),()=>{s&&he(r,t,s.name)}},onSuccess:(e,{workspaceId:n,environmentId:t})=>{he([m,n],t,e.data.name)},onError:(e,n,t)=>{t&&t()}})};var Ee=t(60607);const ge=()=>{const{pathname:e}=(0,K.useLocation)(),{environmentId:n}=(0,Ee.useParams)();return n||(null!=e&&e.endsWith("/globals")?"globals":void 0)};var fe=t(25892),Ie=t.n(fe),Ce=t(20856),ke=t(88691),_e=t(80429),Se=t(29319);const Ae=Ie()(Se.Z).withConfig({displayName:"dropdown-button__QuickLookIcon",componentId:"sc-b97miz-0"})(["padding:0 var(--spacing-xs);"]),Te=Ie()(ke.Z).withConfig({displayName:"dropdown-button__StyledSplitButton",componentId:"sc-b97miz-1"})(["flex:1;min-width:0;button:first-child > span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}&:hover{.aether-split-button__splitter{border-left-color:var(--vscode-button-separator);}}"]),xe=({value:e,isLoading:n,onClick:t,isSecondaryButtonDisabled:a,onSecondaryButtonClick:r,ref:o})=>{const{label:s,forkLabel:i}=e,l=i?`${s} [${i}]`:s;return(0,M.jsx)(Te,{ref:o,type:"secondary",minWidth:"0px",tooltip:l,text:l,secondaryButton:(0,M.jsx)(_e.Z,{type:"secondary",icon:(0,M.jsx)(Ae,{}),onClick:r,"data-testid":"quick-look-button",isDisabled:a}),isLoading:n,onClick:t})},Re=Ie().div.withConfig({displayName:"dropdown-menu-footer__DropdownMenuFooterWrapper",componentId:"sc-1nhsm47-0"})(["display:flex;padding:var(--spacing-l);background-color:var(--highlight-background-color-secondary);border-radius:0 0 var(--border-radius-default) var(--border-radius-default);"]),Oe=({text:e,isLoading:n,isDisabled:t,onClick:a})=>(0,M.jsx)(Re,{children:(0,M.jsx)(_e.Z,{type:"text",text:e,onClick:a,isLoading:n,isDisabled:t})});var Ne=t(98529);const Le=Ie()(Ne.Z).withConfig({displayName:"dropdown-menu-filter__FilterInput",componentId:"sc-29ferf-0"})(["border-color:transparent;border-radius:var(--border-radius-default) var(--border-radius-default) 0 0;&:active,&:focus,&:hover,&:focus-within{box-shadow:none;border-color:transparent;}"]),De=({value:e,onChange:n})=>{const t=d().useRef(null);return d().useEffect((()=>{t.current&&t.current.focus()}),[]),(0,M.jsx)(Le,{ref:t,type:"search",value:e,onChange:n,placeholder:"Search"})};var Pe=t(81397),je=t(37691);const Ue=Ie().div.withConfig({displayName:"menu-item-label__LabelWrapper",componentId:"sc-levdfs-0"})(["box-sizing:border-box;display:flex;align-items:center;overflow:hidden;cursor:pointer;"]),Ve=Ie().p.withConfig({displayName:"menu-item-label__Label",componentId:"sc-levdfs-1"})(["flex:2;margin:0;margin-right:var(--spacing-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:fit-content;"]),Fe=Ie().p.withConfig({displayName:"menu-item-label__ForkLabel",componentId:"sc-levdfs-2"})(["flex:1;white-space:nowrap;overflow:hidden;margin:0;margin-left:var(--spacing-xs);font-size:var(--text-size-s);font-weight:var(--text-weight-regular);text-overflow:ellipsis;color:var(--content-color-tertiary);max-width:fit-content;"]),$e=({label:e,forkLabel:n})=>e?(0,M.jsxs)(Ue,{children:[(0,M.jsx)(Pe.Z,{content:e,openDelay:1e3,placement:"bottom",children:(0,M.jsx)(Ve,{children:e})}),n&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(je.Z,{color:"content-color-tertiary",size:"small","data-testid":"fork-icon"}),(0,M.jsx)(Pe.Z,{content:n,openDelay:1e3,placement:"bottom",children:(0,M.jsx)(Fe,{children:n})})]})]}):null,Me=Ie().div.withConfig({displayName:"dropdown-menu-item__DropdownMenuItemWrapper",componentId:"sc-1id443p-0"})(["flex:1;color:var(--content-color-primary);min-height:28px;box-sizing:border-box;padding:var(--spacing-xs) var(--spacing-s);border-radius:var(--border-radius-default);display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;user-select:none;"," &:hover{background-color:var(--highlight-background-color-secondary);}&:active{background-color:var(--highlight-background-color-tertiary);}"],(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-primary);")),We=({isSelected:e,label:n,forkLabel:t,onSelect:a})=>(0,M.jsx)(Me,{isSelected:e,role:"menuitem",onClick:a,tabIndex:0,onKeyPress:e=>{if("Enter"===e.key||" "===e.key)return e.preventDefault(),e.stopPropagation(),a()},children:(0,M.jsx)($e,{label:n,forkLabel:t})}),Be=Ie().div.withConfig({displayName:"dropdown-menu__DropdownMenuWrapper",componentId:"sc-186uy9h-0"})(["display:flex;flex-direction:column;max-height:75vh;width:90vw;max-width:320px;"]),Ge=Ie().div.withConfig({displayName:"dropdown-menu__MenuList",componentId:"sc-186uy9h-1"})(["flex:1;display:flex;flex-direction:column;padding:var(--spacing-s);overflow-y:auto;background:var(--background-color-primary);:empty::before{content:'No items found';flex:1;min-height:28px;box-sizing:border-box;padding:var(--spacing-xs) var(--spacing-s);color:var(--content-color-tertiary);}"]),Qe=Ie().div.withConfig({displayName:"dropdown-menu__HeaderInfoText",componentId:"sc-186uy9h-2"})(["padding:var(--spacing-s) var(--spacing-l);color:var(--content-color-secondary);background-color:var(--highlight-background-color-secondary);font-weight:var(--text-weight-bold);user-select:none;"]),Ke=Ie().div.withConfig({displayName:"dropdown-menu__LoadingErrorWrapper",componentId:"sc-186uy9h-3"})(["text-align:center;padding:var(--spacing-m);"]),qe=Ie().div.withConfig({displayName:"dropdown-menu__FilterWrapper",componentId:"sc-186uy9h-4"})(["border-radius:var(--border-radius-default) var(--border-radius-default) 0 0;",";"],(e=>e.isBleed?" ":"border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);")),Ye=({options:e,onChange:n,value:t,isError:a,refetch:r,headerInfoText:o,isCreateNewLoading:s,isCreateNewDisabled:i,onCreateNew:l,createNewText:c="Create New"})=>{const[u,p]=d().useState(""),v=e.filter((({label:e})=>e.toLowerCase().includes(String(u).toLowerCase())));return(0,M.jsxs)(Be,{role:"menu",id:"selectormenu","aria-labelledby":"menubutton",children:[(0,M.jsx)(qe,{isBleed:Boolean(o),children:(0,M.jsx)(De,{value:u,onChange:e=>p(e.target.value)})}),o&&(0,M.jsx)(Qe,{children:o}),a?(0,M.jsxs)(Ke,{children:["Failed to load. ",(0,M.jsx)(_e.Z,{type:"text",text:"Retry",onClick:r})]}):(0,M.jsx)(Ge,{children:v.map((e=>(0,M.jsx)(We,{value:e.value,label:e.label,forkLabel:e.forkLabel,onSelect:()=>(p(""),n(e)),isSelected:e.value===t.value},e.value)))}),l&&(0,M.jsx)(Oe,{text:c,onClick:l,isLoading:s,isDisabled:i})]})},He=Ie().div.withConfig({displayName:"selector__TriggerWrapper",componentId:"sc-1tclpid-0"})(["display:flex;flex:1;max-width:260px;"]),Ze=({value:e,options:n,onChange:t,isLoading:a,isError:r,refetch:o,headerInfoText:s,isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,isQuickLookDisabled:u,onQuickLookClick:p,menuPlacement:v,"aria-label":m})=>{const[b,y]=d().useState(!1),h=(0,M.jsx)(He,{children:(0,M.jsx)(xe,{value:e,isLoading:a,onClick:()=>y((e=>!e)),isSecondaryButtonDisabled:u,onSecondaryButtonClick:()=>(b&&y(!1),p()),"aria-haspopup":"menu","aria-controls":"selectormenu","aria-expanded":b,"aria-label":m})});return(0,M.jsx)(Ce.ZP,{placement:v,trigger:h,isOpen:b,onClickOutside:()=>y(!1),padding:"0",appendTo:"parent",children:b&&(0,M.jsx)(Ye,{isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,headerInfoText:s,options:n,isError:r,refetch:o,onChange:(...e)=>(y(!1),t(...e)),value:e})})},ze=e=>({queryKey:[b,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t,a;if(!e)throw new Error("Invalid environment id");const r=await v.postmanGateway.get({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,signal:n});null==r||r.data;const o=_(r.data);return await(0,C.updateDependentSession)({model:"environment",modelId:o.id},o),Object.assign({},o,{forkedFrom:null!=(t=null==(a=r.meta)?void 0:a.forkedFrom)?t:null})})(e,{signal:n}),useErrorBoundary:!1}),Xe=e=>Object.assign({},ze(null!=e?e:""),{enabled:!!e}),Je=e=>({queryKey:[h,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t;const a=await v.postmanGateway.get({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/workspace/${e}/globals`,signal:n});if(!Array.isArray(null==a||null==(t=a.data)?void 0:t.values))throw new TypeError("Received invalid globals data from server");const r=a.data;return await(0,C.updateDependentSession)({model:"globals",modelId:r.id},r),r})(e,{signal:n}),useErrorBoundary:!1}),en=async({signal:e,permissionsPayload:n})=>{const t=await v.postmanGateway.post({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:{checks:Object.assign({},n)}},signal:e});if(null==t||!t.results)throw new Error("Received invalid permissions");return t.results},nn="workspace",tn="ADD_ENVIRONMENT_TO_WORKSPACE",an="UPDATE_GLOBALS",rn=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:nn,permission:a};return t},on=e=>({queryKey:[y,w,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreateEnvironment:!0,userCanUpdateGlobals:!0};const t={[tn]:`${nn}/${e}/${tn}`,[an]:`${nn}/${e}/${an}`},a=await en({signal:n,permissionsPayload:rn(e,t)});return{userCanCreateEnvironment:a[t[tn]].allowed,userCanUpdateGlobals:a[t[an]].allowed}},useErrorBoundary:!1}),sn="workspace",ln="ADD_ENVIRONMENT_TO_WORKSPACE",cn="UPDATE_ENVIRONMENT",dn="DELETE_ENVIRONMENT",un=e=>e.includes(sn),pn=(e,n)=>({queryKey:[E,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanCreate:!0,userCanUpdate:!0,userCanDelete:!0};const a={[ln]:`${sn}/${n}/${ln}`,[cn]:`${e}:${cn}`,[dn]:`${e}:${dn}`},r=((e,n,t)=>{const a={};for(const[r,o]of Object.entries(t))a[o]={entityId:window.USER_ID,entityType:"user",permission:r,objectId:un(o)?n:e,objectType:un(o)?sn:"environment"};return a})(e,n,a),o=await en({signal:t,permissionsPayload:r});return{userCanCreate:o[a[ln]].allowed,userCanUpdate:o[a[cn]].allowed,userCanDelete:o[a[dn]].allowed}},useErrorBoundary:!1}),vn="workspace",mn="UPDATE_GLOBALS",bn=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:vn,permission:a};return t},yn=e=>({queryKey:[g,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanUpdate:!0};const t={[mn]:`${vn}/${e}/${mn}`};return{userCanUpdate:(await en({signal:n,permissionsPayload:bn(e,t)}))[t[mn]].allowed}},useErrorBoundary:!1}),hn="workspace",wn="ADD_ENVIRONMENT_TO_WORKSPACE",En=e=>({queryKey:[f,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreate:!0};const t={[wn]:`${hn}/${e}/${wn}`},a=((e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",permission:a,objectId:e,objectType:hn};return t})(e,t);return{userCanCreate:(await en({signal:n,permissionsPayload:a}))[t[wn]].allowed}},useErrorBoundary:!1});var gn=t(54302);const fn=()=>({queryKey:["dynamic"],queryFn:()=>(async()=>await gn.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_DYNAMIC_VARIABLES",payload:{}}))()}),In={userCanCreate:!0},Cn=e=>Boolean(e.isLoading);var kn=t(73720);const _n="environment-selector-value-paint-mark",{PerfContext:Sn,PerformanceMarkPaint:An}=kn.perfComponents,Tn=()=>{performance.measure("environment-selector-value-paint-time",{},_n),(0,kn.sendMeasureEvent)({name:_n,entityType:"generic-selector"})},xn=Object.freeze({label:"No Environment",value:"",forkLabel:""}),Rn=()=>{var e;const n=(0,K.useNavigate)(),t=(0,p.useActiveWorkspaceId)(),a=(0,c.useContext)(W),r=a&&!a.useActiveEnvironmentFromContext;J(t);const{data:o,isError:s,refetch:i}=F({workspaceId:t}),l=!o,{data:d}=$(),v=ee(),m=(0,c.useMemo)((()=>{var e;return[xn,...null!=(e=null==o?void 0:o.map((e=>{var n;const t=Cn(e)?null:null==(n=e.attributes)||null==(n=n.fork)?void 0:n.forkLabel;return{label:e.name,value:e.id,forkLabel:null!=t?t:""}})))?e:[]]}),[o]),b=Z(),{isLoading:y,userCanCreate:h}=(()=>{const e=(0,p.useActiveWorkspaceId)(),{data:n,error:t}=(0,u.useDataFetch)(En(e));return t?Object.assign({isLoading:!1},In):n?Object.assign({isLoading:!1},n):Object.assign({isLoading:!0},In)})(),w=(e,a)=>{const r={rename:(null==a?void 0:a.showRenameOptionOnOpen)||!1};n(`/workspace/${t}/environment/${e}`,{state:JSON.stringify({additionalContext:r})},{customNavEvent:K.OPEN_EXTENSION_URL})},E=null!=(e=m.find((e=>e.value===(null==d?void 0:d.id))))?e:xn,g=l&&!s,{markName:f,callback:I}=(0,c.useContext)(Sn);return(0,M.jsx)("div",{"data-testid":"active-environment-selector",children:(0,M.jsx)(An,{condition:!g,markName:f||_n,callback:I||Tn,children:(0,M.jsx)(Ze,{options:m,value:E,isLoading:g,isError:s,refetch:i,onChange:e=>{v.mutate(null!=e&&e.value?{id:e.value}:null)},menuPlacement:"bottom-end","aria-label":"active-environment",isQuickLookDisabled:!d||l,onQuickLookClick:()=>{d&&w(d.id)},headerInfoText:r?"Switch environment for the entire collection":void 0,isCreateNewLoading:b.isLoading||y,isCreateNewDisabled:!h,onCreateNew:()=>{b.mutate({workspaceId:t,requestBody:{id:(0,Q.v4)(),name:"New Environment",values:[]}},{onSuccess:({data:e})=>{q.AnalyticsService.addEventV2({category:"environment",action:"create",label:"environment-selector"}),w(`${e.owner}-${e.id}`,{showRenameOptionOnOpen:!0})}})}})})})},On=e=>Y()?(0,M.jsx)(Rn,Object.assign({},e)):null,Nn=e=>null==e?void 0:e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),Ln=async(e,n)=>{if(!e.id)throw new Error("updateEnvironment: id is required");const t=(e=>{const{values:n}=e;return Object.assign({},e,{values:Nn(n)})})(e),a=(r=(await v.postmanGateway.put({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/environment/${t.id}`,body:JSON.stringify({name:t.name,values:t.values})})).data,Object.assign({},r,{id:`${r.owner}-${r.id}`}));var r;return null!=n&&n.avoidSession||await(0,C.updateDependentSession)({model:"environment",modelId:a.id},a),a},Dn=()=>({mutationFn:Ln,onSuccess:e=>{u.cacheClient.setQueryData(["environment",e.id],e)}}),Pn=()=>({mutationFn:async(e,n,t=!1)=>{const a=e.id;if(t)return await(0,C.setSession)({model:"environment",modelId:a},n),null;const[r]=await Promise.all([Ln(e,{avoidSession:!0}),(0,C.setSession)({model:"environment",modelId:a},n)]);return{environment:r}},onSuccess:e=>{if(e){const{environment:n}=e;(0,u.updateCache)({key:[b,n.id],updater:e=>e?Object.assign({},e,n):e})}}}),jn=e=>e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),Un=e=>{const{values:n,workspace:t}=e;return{workspace:t,values:jn(n)}},Vn=async(e,n)=>{const t=e.workspace,a=(await v.postmanGateway.put({url:`${k.Z.HTTPS_GATEWAY_PRIVATE_URL}/workspace/${t}/globals`,body:JSON.stringify(Un(e))})).data;return null!=n&&n.avoidSession||await(0,C.updateDependentSession)({model:"globals",modelId:a.id},a),a},Fn=()=>({mutationFn:Vn,onSuccess:e=>{u.cacheClient.setQueryData([h,e.workspace],e)}}),$n=()=>({mutationFn:async(e,n,t=!1)=>{if(t)return await(0,C.setSession)({model:"globals",modelId:e.id},n),null;const[a]=await Promise.all([Vn(e,{avoidSession:!0}),(0,C.setSession)({model:"globals",modelId:e.id},n)]);return{globals:Object.assign({},a,{workspace:e.workspace})}},onSuccess:e=>{if(e){const{globals:n}=e;(0,u.updateCache)({key:["globals",n.workspace],updater:n})}}}),Mn=(e,n)=>{(0,u.updateCache)({key:e,updater:e=>e?Object.assign({},e,{name:n}):e})},Wn=()=>({mutationFn:e=>ye(e),onMutate:async({environmentId:e,name:n})=>{const t=[b,e],a=u.cacheClient.getQueryData(t);return Mn(t,n),()=>{a&&Mn(t,a.name)}},onSuccess:(e,{environmentId:n})=>{Mn([b,n],e.data.name)},onError:(e,n,t)=>{t&&t()}});async function Bn(e,n,t){gn.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:e,variables:n,id:t}})}const Gn=async(...e)=>{const n=await Ln(...e);return(0,u.updateCache)({key:[b,n.id],updater:()=>n}),n},Qn=async(...e)=>{const n=await Vn(...e);return(0,u.updateCache)({key:[h,n.workspace],updater:()=>n}),n},Kn=(0,C.createVariableUpdatesHandler)({model:"environment",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(pn(e,n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async e=>await u.cacheClient.fetchQuery(ze(e)).catch((()=>null)),setValues:(e,n)=>Gn({id:e,values:n})}),qn=(0,C.createVariableUpdatesHandler)({model:"globals",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(yn(n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async(e,{workspaceId:n})=>await u.cacheClient.fetchQuery(Je(n)).catch((()=>null)),setValues:(e,n,{workspaceId:t})=>Qn({id:e,values:n,workspace:t})}),Yn=async e=>{if(!e)return;const n=await u.cacheClient.fetchQuery(ze(e));return(0,C.getActiveSession)({model:"environment",modelId:n.id},n)},Hn=async e=>{const n=await u.cacheClient.fetchQuery(Je(e));return(0,C.getActiveSession)({model:"globals",modelId:n.id},n)};var Zn=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e}(Zn||{});const zn=(e,{workspaceId:n})=>{var t,a;const r=null==e||null==(t=e.meta)?void 0:t.model,o=null==e||null==(a=e.meta)?void 0:a.action;if(r===Zn.GLOBALS&&o===T.UPDATE){const t=null==e?void 0:e.data;A(n,t)}r===Zn.WORKSPACE&&o===O.UPDATE_ROLES&&(u.cacheClient.invalidateQueries({queryKey:[E]}),(0,u.invalidateCache)([g,n]))}},69730:()=>{}}]);
//# sourceMappingURL=2985.934bb62a9f663c40.js.map