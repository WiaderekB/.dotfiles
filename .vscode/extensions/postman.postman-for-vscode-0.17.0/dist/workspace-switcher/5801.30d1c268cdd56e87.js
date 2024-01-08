"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[5801],{4415:(e,r,t)=>{t.r(r);var i=t(540),s=t(1730),a=t(607),o=t(5736),c=t(9316),n=t(2322);const l=()=>{const[e,r]=(0,i.useState)(!1);return(0,n.jsx)(c.Z,{isOpen:e,setIsOpen:r})};var d=t(923);const p=(0,a.createBrowserRouter)([{path:"/",element:(0,n.jsx)(l,{}),errorElement:(0,n.jsx)(d.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"index-route"})},{path:"/workspace/:workspaceId/*",element:(0,n.jsx)(l,{}),errorElement:(0,n.jsx)(d.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"workspace-page-route"})}]);function h(){return(0,n.jsx)(a.RouterProvider,{router:p,fallbackElement:(0,n.jsx)(o.Z,{})})}var v=t(4025),w=t(4958);(0,t(5837).initializeAnalytics)(),t(7086);const u=document.querySelector("#workspace-switcher_root");s.render((0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(d.CustomErrorBoundary,{appId:"workspace-switcher",errorElementId:"global-error-boundary",children:(0,n.jsx)(v.ThemeContextProvider,{children:(0,n.jsx)(w.DataFetchCacheProvider,{children:(0,n.jsx)(h,{})})})})}),u)},1075:(e,r,t)=>{t.d(r,{ZP:()=>Z}),t(540);var i=t(9460),s=t(8560),a=t(6081),o=t(1437),c=t(9342),n=t(634),l=t(346),d=t(6285),p=t(2385),h=t(5892),v=t.n(h),w=t(2322);let u,x,g,m=e=>e;const j=v()(i.ZP)(u||(u=m`
  width: 70%;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (width >= 320px) {
    margin-left: var(--spacing-s);
  }

  &.header-item {
    font-weight: var(--text-weight-medium);
  }
`)),k=v()(a.Link)(x||(x=m`
  display: flex;
  width: 100%;
  padding: var(--spacing-zero) var(--spacing-s);
  height: var(--size-m);
  align-items: center;
  cursor: pointer;
  gap: var(--spacing-s);
  color: var(--content-color-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }

  @media (width >= 320px) {
    padding: var(--spacing-zero) var(--spacing-l);
  }

  &.header-item {
    color: var(--content-color-primary);
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);

    svg path {
      fill: rgb(33 33 33);
    }
  }
`)),f=v()(s.Z)(g||(g=m`
  height: var(--size-xs);
  width: var(--size-xs);
  justify-content: center;

  @media (width >= 320px) {
    margin-right: var(--spacing-s);
  }
`)),b=({visibilityStatus:e})=>{switch(e){case"team":return(0,w.jsx)(o.Z,{});case"public":return(0,w.jsx)(c.Z,{});case"partner":return(0,w.jsx)(n.Z,{});case"private":return(0,w.jsx)(l.Z,{});default:return(0,w.jsx)(d.Z,{})}},y=({isActive:e})=>(0,w.jsx)(f,{children:e?(0,w.jsx)(p.Z,{"data-testid":"checked-workspace-icon"}):""}),Z=({workspace:e,onClick:r,isActive:t,style:i})=>(0,w.jsxs)(k,{to:`/workspace/${e.id}`,onClick:t=>{r&&(t.preventDefault(),r(e))},style:i,className:t?"active":"","data-testid":t?"active-workspace":"",children:[(0,w.jsx)(y,{isActive:t}),(0,w.jsx)(b,{visibilityStatus:e.visibilityStatus}),(0,w.jsx)(j,{children:e.name||e.label})]})},7086:(e,r,t)=>{t.r(r)}}]);
//# sourceMappingURL=5801.30d1c268cdd56e87.js.map