"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[9513],{89513:(e,r,t)=>{t.r(r),t.d(r,{default:()=>N});var a=t(40540),n=t(25892),o=t.n(n),s=t(53723),i=t.n(s),c=t(50916),l=t(57569),h=t(63622),d=t(58560),g=t(81397),u=t(84591),p=t(53195),m=t(35736),x=t(64747),v=t(44692),f=t(9029);var S=t(52322);const y=(0,a.lazy)((0,x.V)("code-editor/CodeEditor")),b=(0,c.observer)((()=>{const e=(0,a.useRef)(null),{schemaString:r}=(0,v.cY)(),[t,n]=(0,v.fW)(),o=(0,a.useMemo)((()=>[{provider:function(e){const r=e;return async function(e,t){const a=e.getWordBeforePosition(t),n=e.getValue();return await f.agentManager.agent.getGQLAutoCompleteSuggestions(r,n,t,a)}}(r)}]),[r]),s=(()=>{const e=(0,a.useRef)(),[r,t]=(0,a.useState)([]),{schemaString:n}=(0,v.cY)(),[o]=(0,v.fW)();return(0,a.useEffect)((()=>o&&n?(e.current=setTimeout((()=>{f.agentManager.agent.validateGQLQuery(o,n).then((e=>t(e)))}),250),()=>{clearTimeout(e.current)}):t([])),[o,n]),r})();return(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(m.Z,{}),children:(0,S.jsx)(y,{ref:e,fontSize:12,language:"graphql",value:t,onChange:n,codeCompletionProviders:o,validationErrors:s,wordWrap:!0,autoFormat:!0})})}));var j=t(85332);const w=(0,a.lazy)((0,x.V)("code-editor/CodeEditor")),P=(0,c.observer)((()=>{const[e,r]=(0,v.sY)(),t=(0,j.n)();return(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(m.Z,{}),children:(0,S.jsx)(w,{fontSize:12,language:"postman_json",value:e,onChange:r,wordWrap:!0,autoFormat:!0,codeCompletionProviders:[{provider:t}]})})}));let q,C,z,R,M,k,E,Y=e=>e;const Q=o().div(q||(q=Y`
  height: 100%;
  display: flex;
  flex-direction: row;

  &.layout-2-column {
    flex-direction: column;
  }
`)),W=o()(h.ZP)(C||(C=Y``)),B=o()(u.Z)(z||(z=Y`
  margin-left: var(--spacing-xs);
`)),Z=o()(d.Z)(R||(R=Y`
  height: calc(100% - var(--spacing-l));
  overflow: hidden;

  .text-editor {
    height: calc(100% - var(--spacing-s)) !important;
    width: calc(100% - var(--spacing-s)) !important;
    margin: var(--spacing-xs) var(--spacing-zero) var(--spacing-zero);
    border: var(--border-width-default) solid var(--border-color-default);
    border-radius: var(--border-radius-s);
  }

  .monaco-editor {
    .margin-view-overlays .line-numbers {
      color: var(--content-color-tertiary);
    }

    .scroll-decoration {
      left: var(--spacing-l) !important;
      right: var(--spacing-l) !important;
      width: auto !important;
    }

    .monaco-placeholder {
      font-size: var(--text-size-m);
      line-height: var(--line-height-m);
      color: var(--content-color-tertiary);
    }
  }
`)),L=o().div(M||(M=Y`
  flex: 1;
  height: 100%;
  margin: var(--spacing-zero) var(--spacing-xs);
`)),V=o().div(k||(k=Y`
  z-index: 7;
  cursor: ew-resize;
  width: 10px;
  margin: var(--spacing-xl) calc(-1 * var(--spacing-xs)) var(--spacing-xs);

  &.layout-2-column {
    cursor: ns-resize;
    height: 10px;
    margin: calc(-1 * var(--spacing-xs)) var(--spacing-xs);
    width: 100%;
  }
`)),A=o()(L)(E||(E=Y``)),G=(0,c.observer)((()=>{const e=(0,a.useRef)(null),r=(0,a.useRef)(null),{layout:t}=(0,p.W)(),n=(0,a.useMemo)((()=>i()({"layout-2-column":"horizontal"===t})),[t]);return(0,S.jsxs)(Q,{ref:e,className:n,children:[(0,S.jsxs)(L,{ref:r,children:[(0,S.jsx)(W,{type:"strong",children:"QUERY"}),(0,S.jsx)(Z,{children:(0,S.jsx)(b,{})})]}),(0,S.jsx)(l.DraggableCore,{offsetParent:e.current,onDrag:(a,n)=>{const o=e.current;if(!o||!r.current)return;let s,i;"vertical"===t?(s=Math.min(n.x,o.getBoundingClientRect().width),i=Math.max(o.getBoundingClientRect().width-n.x,0)):(s=Math.min(n.y,o.getBoundingClientRect().height),i=Math.max(o.getBoundingClientRect().height-n.y,0));let c=s/i;c<1?c=1:c>4&&(c=4),r.current.style.flex=c.toString()},children:(0,S.jsx)(V,{className:n})}),(0,S.jsxs)(A,{children:[(0,S.jsxs)(W,{type:"strong",children:["GRAPHQL VARIABLES",(0,S.jsx)(g.Z,{placement:"top",content:"Define variables in JSON format to use in the query",children:(0,S.jsx)(B,{})})]}),(0,S.jsx)(Z,{children:(0,S.jsx)(P,{})})]})]})}));G.displayName="GraphQLEditor";const N=G},44692:(e,r,t)=>{t.d(r,{EY:()=>c,Ot:()=>i,Y_:()=>d,bl:()=>s,cY:()=>l,fW:()=>n,rl:()=>h,sY:()=>o});var a=t(4779);const n=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.query,e.graphqlPayloadStore.setQuery]},o=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.variables,e.graphqlPayloadStore.setVariables]},s=()=>(0,a.x)().graphqlPayloadStore.schemaStore.introspectionHandlers.handleIntrospection,i=()=>(0,a.x)().graphqlPayloadStore.schemaStore.cancelSchemaFetching,c=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.schemaStore.schemaMeta,e.graphqlPayloadStore.schemaStore.setSchemaMeta]},l=()=>{const e=(0,a.x)(),r=h(),[t]=c();return"noSchema"===t||r?{schemaString:""}:{schemaString:e.graphqlPayloadStore.schemaStore.schemaString}},h=()=>(0,a.x)().graphqlPayloadStore.schemaStore.error,d=()=>(0,a.x)().graphqlPayloadStore.schemaStore.isRefreshing}}]);
//# sourceMappingURL=9513.e5558557fe51360e.js.map