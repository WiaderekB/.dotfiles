/*! For license information please see 9239.0f73967fe645b1e2.js.LICENSE.txt */
"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[9239,1597],{1597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>t,perfConst:()=>a,sendMeasureEvent:()=>y,sessionId:()=>p});var a={};n.r(a),n.d(a,{GENERIC_CATEGORY:()=>c,PERFORMANCE_GLOBAL_NAMESPACE:()=>o});var t={};n.r(t),n.d(t,{PerfContext:()=>u,PerformanceMarkPaint:()=>f});const o="__POSTMAN_PERFORMANCE__",c="app-perf";var i=n(540),s=n(2322);function f({children:e,markName:r,condition:n=!0,callback:a=function(){}}){const[t,o]=(0,i.useState)(!1),c=(0,i.useRef)(0),f=()=>{var e;if(n&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{a()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}o(!0)}};return(0,i.useLayoutEffect)((()=>(c.current=requestAnimationFrame(f),()=>cancelAnimationFrame(c.current))),[n]),(0,s.jsx)(s.Fragment,{children:e})}f.displayName="PerformanceMarkPaint";const l={markName:void 0,callback:void 0},u=(0,i.createContext)(l);u.displayName="PerfContext";var m=n(5837);const p=(0,n(8722).v4)(),d=[];function _(e){const r=Object.assign({},e,{traceId:p});m.AnalyticsService.addEventV2(r)}function y({name:e,category:r=c,label:n,entityType:a,once:t=!0}){if(!t||!d.includes(e)){d.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))_({category:r,action:t.name,value:Math.round(t.duration),label:n||"",entityType:a})}}},1837:(e,r,n)=>{var a=n(540),t=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;t=o("react.element"),r.Fragment=o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,n){var a,o={},f=null,l=null;for(a in void 0!==n&&(f=""+n),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,a)&&!s.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===o[a]&&(o[a]=r[a]);return{$$typeof:t,type:e,key:f,ref:l,props:o,_owner:c.current}}r.jsx=f,r.jsxs=f},2322:(e,r,n)=>{e.exports=n(1837)}}]);
//# sourceMappingURL=9239.0f73967fe645b1e2.js.map