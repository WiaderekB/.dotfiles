(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[721,8283,4492],{8283:(t,e,n)=>{"use strict";function s(t,e){if(null==t)return{};var n,s,i={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:()=>s})},4492:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(9730),i=n.n(s);const a=Object.assign({},i(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},721:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AnalyticsService:()=>l,initializeAnalytics:()=>h});var s=n(8283),i=n(4492),a=n(4810);const o=["propertyId"],r=new Set(["category","action","label","value","meta","workspaceId","workspaceType","entityId","entityType","traceId","variantId","experimentId","utm_source","utm_medium","utm_campaign","utm_content","utm_term"]),c={initialize:function(){this.payloads=[],this.enabled=!0,window.addEventListener("beforeunload",(()=>{try{this.sendPayloads({isFlushBeforePageClose:!0})}catch(t){}}),{capture:!0}),i.Z.DISABLE_ANALYTICS&&(this.enabled=!1),setInterval(function(){this.sendPayloads()}.bind(this),3e4)},setBaseObject:function(t={id:(0,a.getUserId)(),organizations:[{id:(0,a.getTeamId)()}]}){var e,i,r,c;const d=n(4515)(navigator.userAgent),l=(null==d?void 0:d.browser)||{};let u,p;u=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform",p="web";const h={type:"events-general",indexType:"client-events",env:"production",propertyId:"web",userId:(null!=(i=null==t?void 0:t.id)?i:(0,a.getUserId)())||"0",teamId:(null!=(r=null==t||null==(c=t.organizations[0])?void 0:c.id)?r:(0,a.getTeamId)())||"0"},b=(0,s.Z)(h,o);this.baseObject=b,this.baseObject=h,this.baseObject.propertyVersion=l.name?`${u};${l.name};${l.version}`:`${u};unknown;unknown`,this.baseObject.property="postman-web-public"},isLinuxOnChromeOS:function(){return!1},_extendEventWithBaseObject:function(t){this.baseObject||this.setBaseObject({id:(0,a.getUserId)(),organizations:[{id:(0,a.getTeamId)(),organization_id:(0,a.getTeamId)(),user_id:(0,a.getUserId)()}]});const e=(new Date).toISOString();return Object.assign({},this.baseObject,{timestamp:e},Object.entries(t).reduce(((t,[e,n])=>r.has(e)&&n?Object.assign({},t,{[e]:n}):t),{}))},addCurrentEvent:function(t){const e=this._extendEventWithBaseObject(t);this.queuePayload(e)},addCurrentSyncDiscarded:function(t,e,n,s){try{if("history"===t)return;this.baseObject||this.setBaseObject();const i=Object.assign({},this.baseObject,{verb:t,entity:e,data:JSON.stringify(n),type:"sync",indexType:"client-errors"});s&&(i.error=JSON.stringify(s)),this.queuePayload(i)}catch(t){}},queuePayload:function(t){this.enabled&&this.payloads.push(t)},sendPayloads:function(t){if(this.enabled){if(this.payloads.length>0){let e,n="";for(const t of this.payloads)n+=JSON.stringify(t)+"\n";t&&t.isFlushBeforePageClose&&(e={useBeacon:t.isFlushBeforePageClose}),this.sendRequest(n,e),this.clearPayloads()}}else this.clearPayloads()},sendRequest:function(t,e){const n=i.Z.ANALYTICS_URL;let s,a;try{s=btoa(t)}catch(t){return}e&&e.useBeacon&&navigator.sendBeacon&&(a=navigator.sendBeacon(n,s)),a||fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:s,credentials:"omit"})},clearPayloads:function(){this.payloads=[]},_sendEventImmediately:function(t){const e=this._extendEventWithBaseObject(t),n=JSON.stringify(e);this.sendRequest(n)}};var d=n(4302);const l={addEvent:function(t,e,n,s,i,a){if(null!=a&&a.noActiveWorkspace)return c.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i});const o=function(){var t;switch(null==(t=window)||null==(t=t.pm)||null==(t=t.windowConfig)?void 0:t.process){case"runner":case"requester":try{return{}}catch(t){return{}}default:return{}}}();return c.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i,workspaceId:o.id,workspaceType:o.type})},addEventV2:function(t,e){d.VSCodeCommunicationsService.postMessageToExtension({type:"SEND_ANALYTICS",payload:t})},addEventV2AndPublish:function(t,e={}){this.addEventV2(t,e),c.sendPayloads()}};var u=n(6468);const p=t=>{window.newrelic.addPageAction("InitialLoadMetrics",Object.assign({route:window.location.pathname,userId:"0"},t))},h=()=>{try{c.initialize(),null==(t=window.newrelic)||null==t.setCustomAttribute||t.setCustomAttribute("postman-app-type","distributed-frontend"),(()=>{if(!window.newrelic)throw new Error("New Relic not initialized");(0,u.onTTFB)((({value:t})=>t&&p({timeToFirstByte:t}))),(0,u.onFCP)((({value:t})=>t&&p({firstContentfulPaint:t}))),(0,u.onLCP)((({value:t})=>t&&p({largestContentfulPaint:t}))),(0,u.onFID)((({value:t})=>t&&p({firstInputDelay:t}))),(0,u.onCLS)((({value:t})=>t&&p({cumulativeLayoutShift:t})))})()}catch(t){}var t}},9730:()=>{}}]);
//# sourceMappingURL=721.fbf47ef40c07825b.js.map