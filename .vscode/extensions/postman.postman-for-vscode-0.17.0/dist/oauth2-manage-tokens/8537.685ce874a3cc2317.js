"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[8537,2955],{32955:(r,e,t)=>{t.r(e),t.d(e,{ErrorBoundary:()=>s,ErrorBoundaryContext:()=>n,useErrorBoundary:()=>l,withErrorBoundary:()=>i});var o=t(40540);const n=(0,o.createContext)(null),a={didCatch:!1,error:null};class s extends o.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=a}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(){const{error:r}=this.state;if(null!==r){for(var e,t,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];null===(e=(t=this.props).onReset)||void 0===e||e.call(t,{args:n,reason:"imperative-api"}),this.setState(a)}}componentDidCatch(r,e){var t,o;null===(t=(o=this.props).onError)||void 0===t||t.call(o,r,e)}componentDidUpdate(r,e){const{didCatch:t}=this.state,{resetKeys:o}=this.props;var n,s;t&&null!==e.error&&function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return r.length!==e.length||r.some(((r,t)=>!Object.is(r,e[t])))}(r.resetKeys,o)&&(null===(n=(s=this.props).onReset)||void 0===n||n.call(s,{next:o,prev:r.resetKeys,reason:"keys"}),this.setState(a))}render(){const{children:r,fallbackRender:e,FallbackComponent:t,fallback:a}=this.props,{didCatch:s,error:l}=this.state;let i=r;if(s){const r={error:l,resetErrorBoundary:this.resetErrorBoundary};if((0,o.isValidElement)(a))i=a;else if("function"==typeof e)i=e(r);else{if(!t)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");i=(0,o.createElement)(t,r)}}return(0,o.createElement)(n.Provider,{value:{didCatch:s,error:l,resetErrorBoundary:this.resetErrorBoundary}},i)}}function l(){const r=(0,o.useContext)(n);!function(r){if(null==r||"boolean"!=typeof r.didCatch||"function"!=typeof r.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found")}(r);const[e,t]=(0,o.useState)({error:null,hasError:!1}),a=(0,o.useMemo)((()=>({resetBoundary:()=>{null==r||r.resetErrorBoundary(),t({error:null,hasError:!1})},showBoundary:r=>t({error:r,hasError:!0})})),[null==r?void 0:r.resetErrorBoundary]);if(e.hasError)throw e.error;return a}function i(r,e){const t=(0,o.forwardRef)(((t,n)=>(0,o.createElement)(s,e,(0,o.createElement)(r,{...t,ref:n})))),n=r.displayName||r.name||"Unknown";return t.displayName="withErrorBoundary(".concat(n,")"),t}}}]);
//# sourceMappingURL=8537.685ce874a3cc2317.js.map