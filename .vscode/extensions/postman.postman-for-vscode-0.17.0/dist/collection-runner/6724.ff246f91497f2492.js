(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[6724],{84492:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var n=o(7560),s=o(162),c=o.n(s);const a=(0,n.Z)({},c(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},60090:(t,e,o)=>{"use strict";o.r(e),o.d(e,{COLLECTION_RUNS_LIST_PREFIX:()=>r,COLLECTION_RUN_PREFIX:()=>u,collectionRunByIdQuery:()=>p,collectionRunsListQuery:()=>i,deleteCollectionRun:()=>_,fetchCollectionRunById:()=>d,findCollectionRuns:()=>a,getQueryKey:()=>l,importCollectionRun:()=>I,useCollectionRunById:()=>T,useCollectionRuns:()=>w,useDeleteCollectionRun:()=>E});var n=o(7560),s=o(98079),c=o(84492);const a=async t=>{const{signal:e,workspaceId:o,collectionId:a,populateIterations:r,count:u,status:l,owner:i,source:d,since_id:p,max_id:I}=t;return await s.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun`,query:(0,n.Z)({workspace:o},a&&{collection:a},{iterations:r||!1,count:u},l&&{status:l},i&&{owner:i},d&&{source:d},{since_id:p||0},I&&{max_id:I}),signal:e})},r="collection-runs-list",u="collection-run",l=t=>{const e=[r];for(const o of Object.values(t))o&&e.push(o);return e},i=({signal:t,workspaceId:e,collectionId:o,populateIterations:n=!1,count:s,status:c,owner:r,source:u,since_id:i=0,max_id:d=0})=>({queryKey:l({workspaceId:e,collectionId:o}),queryFn:()=>a({signal:t,workspaceId:e,collectionId:o,populateIterations:n,count:s,status:c,owner:r,source:u,since_id:i,max_id:d}),enabled:!!e,useErrorBoundary:!1}),d=async({signal:t,runId:e})=>await s.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${e}`,signal:t}),p=({signal:t,runId:e})=>({queryKey:[u,e],queryFn:()=>d({signal:t,runId:e}),enabled:!!e,useErrorBoundary:!1}),I=async({signal:t,owner:e,workspace:o,runDetails:n})=>await s.postmanGateway.post({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/import`,query:{owner:e,workspace:o},body:JSON.stringify(n),signal:t}),_=async({runId:t,userId:e,signal:o})=>await s.postmanGateway.delete({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${t}`,query:{owner:e},signal:o});var R=o(44958);const w=({workspaceId:t,collectionId:e,count:o,status:n,source:s,owner:c})=>(0,R.useDataFetch)(i({workspaceId:t,collectionId:e,count:o,status:n,source:s,owner:c})),T=t=>(0,R.useDataFetch)(p({runId:t})),E=()=>(0,R.useMutation)({mutationFn:t=>_({runId:t.runId,userId:t.userId,signal:t.signal}),onSuccess:(t,e)=>{var o,n,s;o=e.runId,n=e.workspaceId,s=e.collectionId,o&&(0,R.updateCache)({key:l({workspaceId:n,collectionId:s}),updater:t=>t?t.filter((t=>t.model_id!==o)):t}),e.onSuccess&&e.onSuccess(t)}})},162:()=>{}}]);
//# sourceMappingURL=6724.ff246f91497f2492.js.map