"use strict";(self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[]).push([[169],{169:(o,t,n)=>{n.r(t),n.d(t,{default:()=>C});var e=n(540),c=n(5892),a=n.n(c),r=n(6486),i=n(9437),s=n(9460),u=n(47),d=n(8560),l=n(5736),p=n(4302),h=n(2322);const g=a().div.withConfig({displayName:"vscode-auth__StyledApp",componentId:"sc-loz8d2-0"})(["height:325px;max-width:275px;inset:0;margin:auto;position:absolute;"]),m=a()(r.Z).withConfig({displayName:"vscode-auth__StyledSignInButton",componentId:"sc-loz8d2-1"})(["background-color:'var(--button-primary-background-color)';color:'var(--button-primary-content-color)';&:hover,&.is-hovered{background-color:'var(--button-primary-hover-background-color)';}"]),b=a()(r.Z).withConfig({displayName:"vscode-auth__StyledCreateAccountButton",componentId:"sc-loz8d2-2"})(["background-color:'var(--button-secondary-background-color)';color:'var(--button-secondary-content-color)';&:hover,&.is-hovered{background-color:'var(--button-secondary-hover-background-color)';}"]),y={"sign-in":"INITIATE_LOGIN","sign-up":"INITIATE_SIGN_UP","paste-token":"AUTH_PASTE_TOKEN",cancel:"CANCEL_LOGIN"};function v(o){p.VSCodeCommunicationsService.postMessageToExtension({type:y[o],payload:{}})}const C=function(){const[o,t]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const o=[];return o.push(p.VSCodeCommunicationsService.subscribe("SET_LOGIN_BUSY_STATE",(()=>{t(!0)})),p.VSCodeCommunicationsService.subscribe("RESET_SIDEBAR_LOGIN_STATE",(()=>{t(!1)}))),()=>{for(const t of o)t&&t()}}),[]),(0,h.jsx)(g,{children:o?(0,h.jsxs)(d.Z,{direction:"column",gap:"spacing-l",alignItems:"center",children:[(0,h.jsx)(l.Z,{size:"large"}),(0,h.jsx)(r.Z,{type:"tertiary",text:"Cancel",onClick:()=>{v("cancel")},"data-testid":"auth-cancel-button"}),(0,h.jsx)(r.Z,{type:"monochrome-plain",text:"Enter authorization token",onClick:()=>{v("paste-token")},"data-testid":"paste-token-button"})]}):(0,h.jsx)(i.Z,{title:"Connect VS Code with Postman",description:(0,h.jsx)(s.ZP,{type:"para",children:"Sign into your Postman account or create a new one"}),primaryAction:(0,h.jsx)(m,{type:"primary",text:"Sign In",onClick:()=>{v("sign-in")}}),secondaryAction:(0,h.jsx)(b,{type:"outline",text:"Create Account","data-testid":"signup-button",onClick:()=>{v("sign-up")}}),children:(0,h.jsx)(u.Z,{name:"illustration-signIn"})})})}}}]);
//# sourceMappingURL=169.aa3069e0e68c135f.js.map