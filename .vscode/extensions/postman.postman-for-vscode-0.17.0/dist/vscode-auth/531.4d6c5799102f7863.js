(self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[]).push([[531,32],{7560:(t,e,n)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}n.d(e,{Z:()=>s})},3032:(t,e,n)=>{"use strict";n.r(e),n.d(e,{initSentry:()=>p,sentryRouter:()=>f});var s=n(7560),o=n(9730),r=n.n(o);const a=(0,s.Z)({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"});var i=n(5304);function c(t){var e;if(null!=t&&null!=(e=t.exception)&&e.values)for(const e of t.exception.values){var n;if(null!=e&&null!=(n=e.stacktrace)&&n.frames)for(const t of e.stacktrace.frames)null!=t&&t.filename&&t.filename.replace(/\\/g,"/").includes("/dist/")&&(t.filename=["/",t.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return t}function p(t){a.SENTRY_DSN&&i.init((0,s.Z)({},t,{dsn:a.SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2023-12-27.06-54",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:c}))}var l=n(540),u=n(607),m=n(6081);const f=t=>{if(a.SENTRY_DSN){var e;const n=null==(e=i.getCurrentHub())?void 0:e.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new i.BrowserTracing({routingInstrumentation:i.reactRouterV6Instrumentation(l.useEffect,m.useLocation,u.useNavigationType,u.createRoutesFromChildren,u.matchRoutes)})),i.wrapCreateBrowserRouter(t)}return t}},9730:()=>{}}]);
//# sourceMappingURL=531.4d6c5799102f7863.js.map