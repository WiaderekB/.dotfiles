/*! For license information please see 9239.32a2d13571676a45.js.LICENSE.txt */
"use strict";(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[9239,1597],{7560:(e,r,n)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(r,{Z:()=>t})},1597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>a,perfConst:()=>t,sendMeasureEvent:()=>_,sessionId:()=>d});var t={};n.r(t),n.d(t,{GENERIC_CATEGORY:()=>c,PERFORMANCE_GLOBAL_NAMESPACE:()=>o});var a={};n.r(a),n.d(a,{PerfContext:()=>u,PerformanceMarkPaint:()=>s});const o="__POSTMAN_PERFORMANCE__",c="app-perf";var i=n(540),f=n(2322);function s({children:e,markName:r,condition:n=!0,callback:t=function(){}}){const[a,o]=(0,i.useState)(!1),c=(0,i.useRef)(0),s=()=>{var e;if(n&&!a&&null!=(e=performance)&&e.mark){performance.mark(r);try{t()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}o(!0)}};return(0,i.useLayoutEffect)((()=>(c.current=requestAnimationFrame(s),()=>cancelAnimationFrame(c.current))),[n]),(0,f.jsx)(f.Fragment,{children:e})}s.displayName="PerformanceMarkPaint";const l={markName:void 0,callback:void 0},u=(0,i.createContext)(l);u.displayName="PerfContext";var p=n(7560),m=n(5837);const d=(0,n(8722).v4)(),y=[];function v(e){const r=(0,p.Z)({},e,{traceId:d});m.AnalyticsService.addEventV2(r)}function _({name:e,category:r=c,label:n,entityType:t,once:a=!0}){if(!a||!y.includes(e)){y.push(e);for(const a of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))v({category:r,action:a.name,value:Math.round(a.duration),label:n||"",entityType:t})}}},1837:(e,r,n)=>{var t=n(540),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,o={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!f.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:c.current}}r.jsx=s,r.jsxs=s},2322:(e,r,n)=>{e.exports=n(1837)}}]);
//# sourceMappingURL=9239.32a2d13571676a45.js.map