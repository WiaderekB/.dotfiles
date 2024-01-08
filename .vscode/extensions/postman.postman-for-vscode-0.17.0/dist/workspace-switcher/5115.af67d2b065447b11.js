"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[5115],{7560:(e,t,i)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},r.apply(this,arguments)}i.d(t,{Z:()=>r})},5115:(e,t,i)=>{i.r(t),i.d(t,{ActiveWorkspace:()=>l,default:()=>s}),i(540);var r=i(9972),n=i(1075),a=i(2322);const l=({className:e})=>{const{data:t}=(0,r.useActiveWorkspaceInfo)();return t?(0,a.jsxs)(n.FS,{to:`/workspace/${t.id}`,className:`${e} header-item`,children:[(0,a.jsx)(n.CQ,{visibilityStatus:t.visibilityStatus}),(0,a.jsx)(n.by,{className:"header-item",children:t.name||t.label})]}):null},s=l},1075:(e,t,i)=>{i.d(t,{CQ:()=>B,FS:()=>Z,ZP:()=>k,by:()=>m}),i(540);var r=i(9460),n=i(8560),a=i(6081),l=i(1437),s=i(9342),c=i(634),C=i(346),o=i(6285),d=i(2385),v=i(5892),h=i.n(v),f=i(2322);let p,w,u,g=e=>e;const m=h()(r.ZP)(p||(p=g`
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
`)),Z=h()(a.Link)(w||(w=g`
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
`)),x=h()(n.Z)(u||(u=g`
  height: var(--size-xs);
  width: var(--size-xs);
  justify-content: center;

  @media (width >= 320px) {
    margin-right: var(--spacing-s);
  }
`)),B=({visibilityStatus:e})=>{switch(e){case"team":return(0,f.jsx)(l.Z,{});case"public":return(0,f.jsx)(s.Z,{});case"partner":return(0,f.jsx)(c.Z,{});case"private":return(0,f.jsx)(C.Z,{});default:return(0,f.jsx)(o.Z,{})}},L=({isActive:e})=>(0,f.jsx)(x,{children:e?(0,f.jsx)(d.Z,{"data-testid":"checked-workspace-icon"}):""}),k=({workspace:e,onClick:t,isActive:i,style:r})=>(0,f.jsxs)(Z,{to:`/workspace/${e.id}`,onClick:i=>{t&&(i.preventDefault(),t(e))},style:r,className:i?"active":"","data-testid":i?"active-workspace":"",children:[(0,f.jsx)(L,{isActive:i}),(0,f.jsx)(B,{visibilityStatus:e.visibilityStatus}),(0,f.jsx)(m,{children:e.name||e.label})]})},346:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8.5 9.5C8.5 9.22386 8.27614 9 8 9C7.72386 9 7.5 9.22386 7.5 9.5V11.5C7.5 11.7761 7.72386 12 8 12C8.27614 12 8.5 11.7761 8.5 11.5V9.5Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.50001 6H3C2.44772 6 2 6.44772 2 7V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V7C14 6.44772 13.5523 6 13 6L11.5 6L11.5 4.90634C11.5001 4.43584 11.5004 3.47911 11.0709 2.63294C10.8465 2.191 10.5034 1.77401 9.98735 1.4713C9.47345 1.16985 8.81932 1 8 1C7.18068 1 6.52655 1.16985 6.01265 1.4713C5.49659 1.77401 5.15347 2.191 4.92915 2.63294C4.49966 3.4791 4.49989 4.43583 4.5 4.90633L4.50001 6ZM5.82086 3.08555C5.50724 3.70342 5.50001 4.44385 5.50001 4.92858V6L10.5 6L10.5 4.92858C10.5 4.44385 10.4928 3.70342 10.1791 3.08556C10.0285 2.7887 9.80908 2.52607 9.48139 2.33385C9.15155 2.14037 8.68068 2 8 2C7.31932 2 6.84845 2.14037 6.51861 2.33385C6.19093 2.52607 5.97154 2.7887 5.82086 3.08555ZM3 7L3 14H13V7H3Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-action-lock-stroke"};const C=c},634:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.25588 3.56896L10.1179 4.49998H11.8485L13.1283 3.64679C13.4286 3.4466 13.8364 3.5549 13.9978 3.87769L15.8955 7.67325C16.0588 7.99983 15.895 8.39532 15.5486 8.51079L14.27 8.937L10.3935 12.8135C10.2445 12.9625 10.0282 13.0224 9.8237 12.9713L5.90205 11.9909C5.80968 11.9678 5.72412 11.9231 5.65247 11.8604L2.62772 9.21371L2.23842 8.92823L0.370873 7.99446C0.0627866 7.84041 -0.0526401 7.45918 0.118255 7.16012L2.01887 3.83403C2.17687 3.55755 2.52333 3.45265 2.80815 3.59506L4.32163 4.3518L7.85013 3.52157C7.98676 3.48942 8.13034 3.50619 8.25588 3.56896ZM4.07353 5.43749L7.9382 4.52815L8.48914 4.80362L5.70431 7.58846C5.50626 7.7865 5.46296 8.11005 5.63892 8.35717C5.84406 8.64525 6.18607 9.02839 6.60657 9.29156C7.02588 9.55399 7.61881 9.74954 8.2235 9.4472C8.77828 9.16981 9.21663 8.87513 9.50986 8.64827L11.5291 10.2637L9.84652 11.9462L6.23828 11.0442L2.63972 7.89545L4.07353 5.43749ZM9.207 5.49998H11.7097L13.3763 8.41647L12.2406 9.55221L9.88213 7.66546C9.64175 7.47315 9.31063 7.4997 9.09975 7.69034C8.91614 7.85633 8.45148 8.21517 7.77629 8.55277C7.61567 8.63308 7.41278 8.61643 7.13709 8.44389C6.96572 8.33664 6.80306 8.18932 6.66684 8.04014L9.207 5.49998Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-descriptive-partner-stroke"};const C=c},1437:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M1 12.9423C1 11.7196 1.41713 10.8776 2.02845 10.3357C2.64934 9.78539 3.52176 9.5 4.5 9.5C4.97769 9.5 5.4324 9.56836 5.8446 9.70315L6.1554 8.75268C5.63254 8.5817 5.07181 8.5 4.5 8.5C3.33637 8.5 2.20878 8.83961 1.36515 9.58736C0.511937 10.3436 0 11.4727 0 12.9423V14H1V12.9423Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 4.5C9 3.11929 10.1193 2 11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5ZM11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M8 12.9423C8 11.7196 8.41713 10.8776 9.02845 10.3357C9.64934 9.78539 10.5218 9.5 11.5 9.5C12.4782 9.5 13.3507 9.78539 13.9716 10.3357C14.5829 10.8776 15 11.7196 15 12.9423V14H16V12.9423C16 11.4727 15.4881 10.3436 14.6349 9.58736C13.7912 8.83961 12.6636 8.5 11.5 8.5C10.3364 8.5 9.20878 8.83961 8.36515 9.58736C7.51194 10.3436 7 11.4727 7 12.9423V14H8V12.9423Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-descriptive-team-stroke"};const C=c},6285:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1ZM6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M3 13.7308C3 12.2499 3.53343 11.2189 4.38261 10.5456C5.24878 9.85889 6.50061 9.5 8 9.5C9.49939 9.5 10.7512 9.85889 11.6174 10.5456C12.4666 11.2189 13 12.2499 13 13.7308V15H14V13.7308C14 11.9809 13.3541 10.6465 12.2387 9.76205C11.1402 8.89111 9.64203 8.5 8 8.5C6.35797 8.5 4.85981 8.89111 3.76133 9.76205C2.64586 10.6465 2 11.9809 2 13.7308V15H3V13.7308Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-descriptive-user-stroke"};const C=c},2385:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.3635 3.84332L5.51025 13.2174L1.64645 9.35356L2.35355 8.64645L5.48975 11.7827L13.6365 3.15669L14.3635 3.84332Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-state-check-stroke"};const C=c},9342:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(7560),n=i(540),a=i.n(n),l=i(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 15C8.52174 15 9.26329 14.5511 9.934 13.2096C10.2076 12.6625 10.4419 12.0134 10.6206 11.2867C9.80732 11.1021 8.92502 11.0002 7.99998 11.0002C7.07495 11.0002 6.19267 11.1021 5.37944 11.2867C5.55812 12.0134 5.79241 12.6625 6.066 13.2096C6.73671 14.5511 7.47826 15 8 15ZM7.99998 10.0002C8.98491 10.0002 9.93435 10.1074 10.8192 10.3064C10.9356 9.5873 11 8.81235 11 8C11 7.18769 10.9356 6.41279 10.8192 5.69367C9.93437 5.89268 8.98492 5.99994 7.99998 5.99994C7.01506 5.99994 6.06562 5.89269 5.18079 5.69368C5.06438 6.4128 5 7.18769 5 8C5 8.81235 5.06439 9.58729 5.18081 10.3064C6.06563 10.1074 7.01506 10.0002 7.99998 10.0002ZM5.37942 4.71339C5.55809 3.98667 5.7924 3.33757 6.066 2.79036C6.73671 1.44895 7.47826 1 8 1C8.52174 1 9.26329 1.44895 9.934 2.79036C10.2076 3.33757 10.4419 3.98666 10.6206 4.71338C9.80734 4.89801 8.92504 4.99994 7.99998 4.99994C7.07494 4.99994 6.19265 4.89802 5.37942 4.71339ZM11.7893 5.4308C11.9259 6.23719 12 7.10129 12 8C12 8.89876 11.9259 9.7629 11.7892 10.5693C12.6119 10.8322 13.3608 11.1791 14.0076 11.595C14.6377 10.5442 15 9.31442 15 8C15 6.68562 14.6377 5.45585 14.0076 4.40509C13.3608 4.82101 12.612 5.16791 11.7893 5.4308ZM13.4329 3.58561C12.8975 3.92543 12.2746 4.2171 11.5845 4.44578C11.275 3.1995 10.8078 2.13756 10.235 1.3644C11.5021 1.791 12.6069 2.57032 13.4329 3.58561ZM4.41545 4.4458C3.72535 4.21712 3.10246 3.92545 2.5671 3.58563C3.39306 2.57033 4.49793 1.791 5.76495 1.3644C5.19222 2.13756 4.72498 3.19951 4.41545 4.4458ZM1.99237 4.40511C2.63918 4.82103 3.38802 5.16792 4.21074 5.43082C4.0741 6.2372 4 7.10129 4 8C4 8.89875 4.0741 9.76289 4.21076 10.5693C3.38805 10.8322 2.63922 11.1791 1.99242 11.595C1.36228 10.5442 1 9.31441 1 8C1 6.68563 1.36226 5.45586 1.99237 4.40511ZM10.235 14.6356C10.8078 13.8625 11.275 12.8006 11.5845 11.5543C12.2746 11.783 12.8975 12.0747 13.4328 12.4145C12.6069 13.4297 11.502 14.209 10.235 14.6356ZM5.76495 14.6356C4.49796 14.209 3.39312 13.4297 2.56716 12.4145C3.10252 12.0746 3.72539 11.783 4.41548 11.5543C4.72501 12.8006 5.19224 13.8625 5.76495 14.6356Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(l.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-state-published-stroke"};const C=c}}]);
//# sourceMappingURL=5115.af67d2b065447b11.js.map