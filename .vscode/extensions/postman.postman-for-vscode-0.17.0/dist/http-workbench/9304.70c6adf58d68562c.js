"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[9304],{6443:(e,t,n)=>{n.d(t,{Z:()=>U});var r=n(40540),o=n(25892),a=n.n(o),i=n(20856),s=n(58560),l=n(68206),c=n(70262),u=n(95362),d=n(98366),p=n(52322);let h,g,f,v,x,b,m,y,w,k=e=>e;const j=a()(s.Z)(h||(h=k`
  align-items: center;
  padding: var(--spacing-zero) var(--spacing-zero) var(--spacing-s)
    var(--spacing-zero);
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-size-s);
`)),C=a().span(g||(g=k`
  border-radius: var(--border-radius-default);
  text-align: center;
  color: var(--content-color-constant);
  font-weight: var(--text-weight-medium);
  line-height: var(--line-height-s);
  font-size: var(--line-height-xs);
  margin-right: 5px !important;
  padding: 0 5px;
  text-transform: capitalize;
  flex: 0 0 5%;
  background-color: ${0};
`),(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),R=a().div(f||(f=k`
  text-overflow: ellipsis;
  max-height: 75px;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: normal;
`)),I=a().span(v||(v=k`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 var(--spacing-xs);
  flex: 1;
  min-width: 150px;
  font-weight: var(--text-weight-medium);
`)),S=a().span(x||(x=k`
  margin-left: var(--spacing-xs);
  display: inline-flex;
`)),F=a()(s.Z)(b||(b=k`
  padding: 2px 0;
  font-size: var(--text-size-s);
  min-width: 120px;
`)),E=a().div(m||(m=k`
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  max-height: 75px;
  max-width: 150px;
  width: 150px;
  display: inline-flex;
  align-items: center;
`)),T=a().div(y||(y=k`
  font-size: var(--text-size-s);
  text-align: right;
  color: var(--content-color-secondary);
  display: flex;
  flex: 0 0 60px;
  width: 60px;
  user-select: none;
`)),z=a()(l.Z)(w||(w=k`
  justify-content: center;
  border: none;
  height: var(--text-size-s);
  padding-left: 0;

  button {
    display: none !important;
  }

  input {
    height: var(--text-size-s);
  }

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
  }
`)),L=(e,t,n)=>(0,p.jsxs)(F,{children:[(0,p.jsx)(T,{className:"variable-meta-item-label",children:"current"===t?"CURRENT":"INITIAL"}),(0,p.jsx)(E,{children:n?(0,p.jsx)(z,{value:(0,d.Fn)("current"===t?e.sessionValue:e.value),type:"password",enableCopy:!0}):(0,p.jsx)(s.Z,{justifyContent:"space-between",width:"100%;",children:(0,p.jsx)(R,{children:(0,d.Fn)("current"===t?e.sessionValue:e.value)})})})]}),Z=({variableMeta:e})=>{const t="secret"===e.type,[n,o]=(0,r.useState)(t);return(0,p.jsxs)("div",{tabIndex:-1,children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(C,{scope:e.scope,children:e.scope&&e.scope.charAt(0)}),(0,p.jsx)(I,{children:(0,d.Fn)(e.key)}),t&&(0,p.jsx)(S,{onClick:()=>o(!n),children:n?(0,p.jsx)(u.Z,{}):(0,p.jsx)(c.Z,{})})]}),(0,p.jsxs)(s.Z,{direction:"column",children:["dynamic"!==e.type?(0,p.jsxs)(p.Fragment,{children:[L(e,"initial",n),L(e,"current",n)]}):(a=e,(0,p.jsxs)(F,{children:[(0,p.jsx)(T,{className:"variable-meta-item-label",children:"VALUE"}),(0,p.jsx)(E,{children:(0,p.jsx)(s.Z,{justifyContent:"space-between",width:"100%;",children:(0,p.jsx)(R,{children:(0,d.Fn)(a.description)})})})]})),(0,p.jsxs)(F,{children:[(0,p.jsx)(T,{children:"SCOPE"}),(0,p.jsx)(E,{children:(0,d.KN)("globals"===e.scope.toLowerCase()?(0,d.C5)(e.scope):e.scope)})]})]})]});var a};var q=n(74962),N=n(63622),A=n(35482);const B=()=>(0,p.jsxs)("div",{children:[(0,p.jsxs)(s.Z,{direction:"row",gap:"spacing-s",children:[(0,p.jsx)(A.Z,{color:"base-color-error"}),(0,p.jsx)(q.Z,{type:"h4",color:"content-color-primary",text:"Unresolved Variable",hasBottomSpacing:!0})]}),(0,p.jsx)(N.ZP,{type:"para",hasBottomSpacing:!0,children:(0,p.jsx)(N.ZP,{type:"body-medium",children:"Make sure the variable is defined and enabled in the active environment, collection or globals."})})]});let O;const P=a()(i.ZP)(O||(O=(e=>e)`
  > div.tippy-content {
    background-color: var(--background-color-primary);
  }
`)),U=({trigger:e,value:t})=>e?(0,p.jsx)(P,{placement:"bottom-start",padding:"spacing-l",trigger:e,pointer:!0,triggerEvent:"mouseenter",children:t?(0,p.jsx)(Z,{variableMeta:t}):(0,p.jsx)(B,{})}):null},59304:(e,t,n)=>{n.r(t),n.d(t,{AuthInput:()=>ft,AuthInputMock:()=>vt,AutoSuggestionInput:()=>Ee,KVEditorInput:()=>ct,KVEditorInputMock:()=>it,PostmanInput:()=>be,URLInput:()=>at,URLInputMock:()=>nt,addToURLValue:()=>et,assertURLValue:()=>Xe,capitalizeFirstCharacter:()=>X.KN,castNonStringTypesToString:()=>X.Fn,extractVariablesFromString:()=>X.rn,getPathVariablesValues:()=>Je,getResolvedVariables:()=>X.w1,getURLFromQueryParams:()=>Ke,getURLInput:()=>tt,getURLValue:()=>_e,getUpdatedQueryParamsFromURL:()=>Qe,getVariable:()=>X.E0,isUnResolvedVariable:()=>X.CS,isVariableResolved:()=>X.Q0,isVariableText:()=>X.yG,setURLValue:()=>Ye,singularize:()=>X.C5,usePostmanInputFeatureFlag:()=>me});var r=n(40540),o=n(25892),a=n.n(o),i=n(7560),s=n(98283),l=n(15626),c=n.n(l),u=n(52322);const d=["children","className","isOpen","gap","trigger","triggerRef","appendTo","pointer","xOffset","onClickOutside","maxWidth","placement","triggerEvent"];let p;const h=a()(c())(p||(p=(e=>e)`
  & .tippy-content {
    min-width: 120px;
    z-index: 1000;
    border-radius: var(--border-radius-default);
    font-family: var(--text-family-default);
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);
    font-weight: var(--text-weight-regular);

    /**
     * NOTE: Popover specific styles are not present as CSS variables, thus
     *   using Aether theme prop.
     */
    background-color: ${0};
    box-shadow: ${0};
  }

  & .tippy-svg-arrow > svg {
    filter: ${0};
  }

  & .tippy-svg-arrow > svg > path {
    fill: ${0};
  }
`),(e=>e.theme["popover-background-color"]),(e=>e.theme["popover-box-shadow"]),(e=>e.theme["popover-pointer-filter"]),(e=>e.theme["popover-background-color"]));function g(e){var t;let{children:n,className:o,isOpen:a,gap:l=4,trigger:c,triggerRef:p,appendTo:g,pointer:f,xOffset:v=0,onClickOutside:x,maxWidth:b=320,placement:m="bottom-end",triggerEvent:y="click"}=e,w=(0,s.Z)(e,d);const k=(0,r.useRef)(null),j=f?l+11:l;function C(e){var t;27===e.keyCode&&("boolean"==typeof a&&k.current?null==x||x(k.current,e):null==(t=k.current)||t.hide())}function R(){document.addEventListener("keydown",C)}function I(){document.removeEventListener("keydown",C)}var S;return null!==a?(0,u.jsx)(h,(0,i.Z)({},w,{interactive:!0,visible:a,onCreate:e=>k.current=e,content:n,placement:m,maxWidth:b,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(S=null!=g?g:document.querySelector("#aether-popover-portal"))?S:void 0,reference:p,onShow:R,onHide:I,offset:[v,j],onClickOutside:x,children:c})):(0,u.jsx)(h,(0,i.Z)({},w,{interactive:!0,onCreate:e=>k.current=e,content:n,placement:m,trigger:y,maxWidth:b,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(t=null!=g?g:document.querySelector("#aether-popover-portal"))?t:void 0,reference:p,onShow:R,onHide:I,offset:[v,j],onClickOutside:x,children:c}))}h.displayName="styled(Tippy)";var f=n(60949),v=n(74962),x=n(22723),b=n.n(x),m=n(53723),y=n.n(m);let w,k,j=e=>e;const C=32,R=a().li(w||(w=j`
  &.action {
    cursor: pointer;
  }

  &:hover,
  &.selected {
    background-color: var(--highlight-background-color-secondary);
  }
`)),I=a().div(k||(k=j`
  height: ${0}px;
  width: 100%;
  box-sizing: border-box;
  padding: var(--spacing-zero) var(--spacing-m);
  color: var(--content-color-secondary);
  font-size: var(--text-size-m);
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`),C),S=({value:e})=>e?(0,u.jsx)(I,{children:e}):null,F=e=>{const{style:t,isSelected:n,item:r,onSelect:o}=e;return(0,u.jsx)(R,{tabIndex:-1,role:"option","aria-label":r.value,className:y()("action",{selected:n}),style:t,onClick:()=>r.value&&(null==o?void 0:o(r.value)),children:(0,u.jsx)(S,{value:r.value})})},E=["items"],T=["style","data"],z=["items"],L=["style","data"],Z=["items","selectedIndex"];function q(e,t){const{style:n,data:{items:r}}=e,o=(0,s.Z)(e.data,E),a=(0,s.Z)(e,T),{style:i,data:{items:l}}=t,c=(0,s.Z)(t.data,z),u=(0,s.Z)(t,L);return b()(n,i)&&b()(r,l)&&b()(o,c)&&b()(a,u)}const N=(0,r.memo)((({data:e,index:t,style:n})=>{const{items:r,selectedIndex:o}=e,a=(0,s.Z)(e,Z),l=r[t];return(0,u.jsx)(F,(0,i.Z)({item:l,isSelected:o===t,style:n},a))}),q);N.displayName="memo(ItemRenderer)";const A=N,B=["children","ref"];let O;const P=a().ul(O||(O=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;

  li:last-child {
    &,
    div {
      border-bottom-left-radius: var(--border-radius-default);
      border-bottom-right-radius: var(--border-radius-default);
    }
  }
`));function U(e){let{children:t,ref:n}=e,r=(0,s.Z)(e,B);const o=n;return(0,u.jsx)(P,(0,i.Z)({id:"autosuggest-datalist",role:"listbox","aria-label":"Autosuggest Listbox",tabIndex:-1,ref:o},r,{children:t}))}function V(e){const t=(0,r.useRef)(e);return t.current=e,t.current}let $;const D=e=>{const t=e*C;return t>200?200:t},M=a()(v.Z)($||($=(e=>e)`
  padding: var(--spacing-m) var(--spacing-m) var(--spacing-s) var(--spacing-m);
`));function H({suggestions:e,selectedIndex:t,onSelect:n}){const o=(0,r.useRef)(null),a=V(n),i=0===e.length;(0,r.useEffect)((()=>{"number"==typeof t&&o.current&&o.current.scrollToItem(t,"smart")}),[t]);const s={items:e,selectedIndex:t,onSelect:a};return(0,u.jsxs)(u.Fragment,{children:[!i&&(0,u.jsx)(M,{type:"h5",text:"Recently used URLs",color:"content-color-secondary"}),(0,u.jsx)(f.FixedSizeList,{ref:o,height:D(e.length),itemData:s,itemKey:(e,t)=>{const{items:n}=t;return n[e].id},itemCount:e.length,itemSize:C,innerElementType:U,width:"100%",children:A})]})}const W={modifiers:[{name:"sameWidth",enabled:!0,fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},phase:"beforeWrite",requires:["computeStyles"],effect:({state:e})=>{e.elements.popper.style.width=`${e.elements.reference.clientWidth}px`}}]},K=function(e,t,n){let r,o,a,i,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){const n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n),i}function g(e,t){return setTimeout(e,t)}function f(e){const n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function v(){const e=Date.now();if(f(e))return x(e);s=g(v,function(e){const n=e-c,r=t-(e-l);return d?Math.min(r,a-n):r}(e))}function x(e){return s=void 0,p&&r?h(e):(r=o=void 0,i)}function b(...e){const n=Date.now(),a=f(n);if(r=e,o=this,l=n,a){if(void 0===s)return function(e){return c=e,s=g(v,t),u?h(e):i}(l);if(d)return s=g(v,t),h(l)}return void 0===s&&(s=g(v,t)),i}return t=+t||0,b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},b.flush=function(){return void 0===s?i:x(Date.now())},b.pending=function(){return void 0!==s},b}(((e,t)=>{t(e)}),100),Q=e=>[...new Map(e.map((e=>[e.value,e]))).values()];function J({searchTerm:e,suggestions:t,customFilter:n}){const[o]=function(e){const[t,n]=(0,r.useState)(e);return e!==t&&K(e,n),(0,r.useEffect)((()=>()=>{K.cancel()}),[]),[t]}(e),[a,i]=(0,r.useState)(t),s=(0,r.useRef)(Q(t)),l=V(n);a!==t&&(i(t),s.current=Q(t));const c=(0,r.useMemo)((()=>0===a.length?[]:o?l?s.current.filter((e=>null==l?void 0:l(e))):s.current.filter((e=>{var t;return(null==(t=e.value)?void 0:t.toLowerCase().includes(o.toLowerCase()))&&e.value!==o})):s.current.filter((e=>!!e.value))),[o,a,l]);return{filteredList:c,hasNoItems:0===c.length}}const G=(e,t)=>t>e-1||t<0;function _({index:e,arraySize:t}){return(0,r.useMemo)((()=>"number"!=typeof e?e:G(t,e)?Math.max(0,Math.min(e,t-1)):e),[e,t])}var X=n(98366),Y=n(21219),ee=n(6443);let te,ne,re,oe=e=>e;const ae=a().div(te||(te=oe`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  color: ${0};
  background-color: ${0};
  height: 100%;
  align-items: center;
  font-size: var(--font-size-default);
  position: absolute;
  top: var(--spacing-zero);
  left: var(--spacing-zero);
  width: 100%;
  line-height: 1.5;
`),(e=>e.value?"var(--content-color-primary)":"var(--content-color-tertiary)"),(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),ie=a().div(ne||(ne=oe`
  white-space: nowrap !important;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 var(--spacing-s);
`));function se(e,t){if(!e)return"";if(null==t||!t.length)return e;const n=(0,X.w1)(e,t);if(null==n||!n.length)return e;const r=[];let o=0,a=0;for(const i of n){if(a++,i.startIndex>o){const t=e.slice(o,i.startIndex);r.push(t)}const n=e.slice(i.startIndex,i.endIndex),s=i.isResolved?"resolved-variable":"un-resolved-variable",l=(0,X.E0)(n,t);r.push((0,u.jsx)(ee.Z,{trigger:(0,u.jsx)(ce,{isResolved:!!i.isResolved,"data-testid":s,spellCheck:!1,children:n},a),value:l})),o=i.endIndex}if(o<e.length){const t=e.slice(o);r.push(t)}return r}function le({placeholderText:e,value:t,onFocus:n,onClick:r,ariaLabel:o,dataTestId:a,isEditable:i=!0}){const{data:s}=(0,Y.useActiveAndDynamicVariables)();return(0,u.jsx)(ae,{onFocus:n,onClick:r,value:t,className:"input-skeleton",tabIndex:0,role:"textbox","aria-label":o,"data-testid":a||"input-skeleton",isEditable:i,children:(0,u.jsx)(ie,{className:"input-wrapper",children:se(t,s)||e})})}const ce=a().span(re||(re=oe`
  color: ${0};
  background-color: ${0};
  padding: 2px;
`),(({isResolved:e})=>e?"var(--base-color-brand)":"var(--content-color-error)"),(({isResolved:e})=>e?"transparent":"var(--background-color-error)"));let ue,de,pe=e=>e;const he=(0,r.lazy)((()=>Promise.all([n.e(7669),n.e(4025),n.e(923),n.e(9205)]).then(n.bind(n,29205)))),ge=null,fe=a().div(ue||(ue=pe`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
`)),ve=a()(g)(de||(de=pe`
  > div.tippy-content {
    padding: 0;
    background-color: var(--background-color-primary);
  }
`));function xe({onChange:e,suggestions:t=[],customFilter:n,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l=(()=>{}),className:c="postman-input-wrapper",ariaLabel:d,dataTestId:p,isEditable:h,onHardFocus:g}){const f={suggestions:t,searchTerm:a,customFilter:n},v=(0,r.useRef)(null),[x,b]=(0,r.useState)(!1),[m,y]=(0,r.useState)(ge),{filteredList:w}=J(f),k=(0,r.useRef)((()=>{x||(y(ge),b(!0))})),j=(0,r.useRef)((()=>{b(!1),y(ge)})),C=_({index:m,arraySize:w.length}),R=(0,r.useCallback)((t=>{null==e||e(t),j.current()}),[e,j]),I=(0,r.useCallback)((()=>{if(x&&"number"==typeof C&&w[C]){const e=w[C].value;e&&R(e)}else j.current(),null==o||o()}),[C,x,w,R,o]),S=(0,r.useCallback)((e=>{const t="number"==typeof C;return!(!x||!["ArrowDown","ArrowUp"].includes(e.key))&&(y((t?C:-1)+("ArrowDown"===e.key?1:-1)),!1)}),[C,x,w,R,o]),F=(0,r.useCallback)((t=>{null==e||e(t)}),[e]);return(0,u.jsx)(fe,{ref:v,className:c,children:(0,u.jsx)(ve,{role:"presentation",appendTo:"parent",trigger:(0,u.jsx)(fe,{children:(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(le,{placeholderText:i,value:a,onFocus:()=>{},ariaLabel:d,isEditable:h,dataTestId:p}),children:(0,u.jsx)(he,{value:a,onChange:e=>{e!==a&&F(e)},onKeyDown:S,onEnter:I,allowEnter:s,placeholder:i,onPaste:l,isEditable:h,autofocus:!0,ariaLabel:d,dataTestId:p,onHardFocus:e=>{g&&(e?k.current():j.current(),null==g||g(e))}})})}),isOpen:x,maxWidth:"none",popperOptions:W,children:(0,u.jsx)(H,{suggestions:w,selectedIndex:C,onSelect:R})})})}function be({onChange:e,suggestions:t=[],customFilter:n,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l,autofocus:c=!1,className:d="postman-input-wrapper",ariaLabel:p="input",dataTestId:h="input",isEditable:g=!0,onHardFocus:f}){const[v,x]=(0,r.useState)(c);return v?(0,u.jsx)(xe,{onChange:e,suggestions:t,customFilter:n,onEnter:o,value:a,placeholder:i,allowEnter:s,onPaste:l,autofocus:c,ariaLabel:p,dataTestId:h,className:d,isEditable:g,onHardFocus:f}):(0,u.jsx)(fe,{className:d,children:(0,u.jsx)(le,{onFocus:()=>{null==f||f(!0),x(!0)},placeholderText:i,value:a,ariaLabel:p,dataTestId:h,isEditable:g})})}function me(){return!0}const ye=["onChange","suggestions","customFilter","onPaste","setIsHardFocused"];let we,ke,je,Ce=e=>e;const Re=null,Ie=a().div(we||(we=Ce`
  display: flex;
  flex: 1;
  width: 100%;
`)),Se=a()(g)(ke||(ke=Ce`
  > div.tippy-content {
    padding: 0;
    background-color: var(--background-color-primary);
  }
`)),Fe=a().input(je||(je=Ce`
  width: 100%;
  box-sizing: border-box;
  padding: var(--spacing-s);
  color: var(--content-color-primary);
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  &:focus,
  &.is-focused {
    background-color: var(--background-color-primary);
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
  }
`));function Ee(e){let{onChange:t,suggestions:n,customFilter:o,onPaste:a,setIsHardFocused:l}=e,c=(0,s.Z)(e,ye);const d={suggestions:n,searchTerm:c.value,customFilter:o},p=(0,r.useRef)(null),h=(0,r.useRef)(null),[g,f]=(0,r.useState)(!1),[v,x]=(0,r.useState)(Re),{filteredList:b}=J(d),m=(0,r.useRef)((()=>{x(Re),f(!0)})),y=(0,r.useRef)((()=>{f(!1),x(Re)})),w=_({index:v,arraySize:b.length}),k=e=>{null==t||t(e),y.current()};return(0,u.jsx)(Ie,{ref:p,children:(0,u.jsx)(Se,{role:"presentation",appendTo:"parent",trigger:(0,u.jsx)(Fe,(0,i.Z)({"aria-label":"URL Input"},c,{ref:h,type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list","aria-expanded":g,onChange:e=>{m.current(),null==t||t(e.target.value)},onKeyDown:e=>{const t="number"==typeof w;if(g&&["ArrowDown","ArrowUp"].includes(e.key))return e.preventDefault(),void x((t?w:-1)+("ArrowDown"===e.key?1:-1));if(g&&t&&b[w]&&"Enter"===e.key){e.preventDefault();const t=b[w].value;t&&k(t)}else"Enter"!==e.key||y.current()},onPaste:a,onClick:()=>null==l?void 0:l(!0),onBlur:()=>{null==l||l(!1)},autoFocus:!0})),isOpen:g,maxWidth:"none",onClickOutside:y.current,popperOptions:W,children:(0,u.jsx)(H,{suggestions:b,selectedIndex:w,onSelect:k})})})}var Te=n(69705);const ze="&",Le="=",Ze="#",qe=/#/g,Ne=/=/g,Ae=/&/g,Be=/{{[^{}]*[&#=][^{}]*}}/g;function Oe(e,t){if(!e||"string"!=typeof e)return e;let n,r,o,a="",i=0;for(;null!==(r=Be.exec(e));)n=r[0],o=r.index,a+=Pe(e.slice(i,o),t)+n,i=o+n.length;return i<e.length&&(a+=Pe(e.slice(i),t)),a}function Pe(e,t){return e?(null!==e.includes(ze)&&(e=e.replace(Ae,"%26")),null!==e.includes(Ze)&&(e=e.replace(qe,"%23")),t&&null!==e.includes(Le)&&(e=e.replace(Ne,"%3D")),e):e}const Ue={unparseSingle(e){if(!e)return"";const t=e.key,n=e.value;let r="";return"string"==typeof t&&(r=Oe(t,!0)),"string"==typeof n&&(r+=Le+Oe(n)),r},parseSingle:function(e){if(""===e)return{key:null,value:null};const t="string"==typeof e?e.indexOf(Le):-1,n={};return t<0?(n.key=e,n.value=null):(n.key=e.slice(0,t),n.value=e.slice(t+1)),n}},Ve=".",$e=":";class De{constructor(e){this.url=void 0,this.url=e}toString(){let e="";if(this.url.query){const t=this.getQueryString();"string"==typeof t&&(e+=t)}return e}getQueryString(){return He.unparse(this.url.query)}}function Me(e){const t=Te.parse(e),n={},r=new Map;t.auth&&(n.auth={user:t.auth[0],password:t.auth[1]}),t.query&&(n.query=t.query.map((e=>Ue.parseSingle(e))));const o=(t.path||[]).reduce(((e,t)=>{const n=function(e){if(String(e).startsWith($e)){const t=e.indexOf(Ve);return e.slice(1,-1===t?void 0:t)||null}return null}(t);return n&&!r.get(n)&&(r.set(n,!0),e.push({key:n})),e}),[]);return n.variable=o.length>0?o:void 0,(0,i.Z)({},t,n)}const He={unparse(e){if(!e)return"";let t=!0;return e.reduce((function(e,n){return!1===n.enabled?e:(t?t=!1:e+=ze,e+Ue.unparseSingle(n))}),"")}};function We(e){return!(!1===(null==e?void 0:e.enabled))}function Ke(e){const t=e.filter((e=>e.enabled));return new De({query:t}).toString()}function Qe(e,t){return n=t,function(e,t){const n=[...e||[]],r=[...t||[]],o=r.filter((e=>!1===e.enabled)),a=[];if(0===e.length&&0===o.length)return e.map((e=>Object.assign({},e,{description:"",enabled:We(e)})));if(e.length>=r.length){for(const t of e){const e=r.findIndex((e=>(e.key||"")===(t.key||"")&&!e.alreadyProcessed));var i;-1!=e?(r[e].alreadyProcessed=!0,a.push(Object.assign({},t,{description:(null==r||null==(i=r.withDescIndex)?void 0:i.description)||"",enabled:We(t)}))):a.push(Object.assign({},t,{description:"",enabled:We(t)}))}return[...a,...r.filter((e=>!1===e.enabled&&!e.alreadyProcessed))]}for(const e of r){const t=n.findIndex((t=>(t.key||"")===(e.key||"")&&(t.value||"")===(e.value||"")&&!t.alreadyProcessed));var s,l,c,u;-1!=t?(n[t].alreadyProcessed=!0,a.push(Object.assign({},{key:null==(s=n[t])?void 0:s.key,value:null==(l=n[t])?void 0:l.value,enabled:null==(c=n[t])?void 0:c.enabled,equals:null==(u=n[t])?void 0:u.equals},{description:(null==e?void 0:e.description)||"",enabled:We(n[t])}))):!1===e.enabled&&a.push(e)}return[...a,...n.filter((e=>!e.alreadyProcessed))]}(function(e){return e?(Me(e).query||[]).map((e=>(e.equals=!!e.value,e))):[]}(e),n);var n}function Je(e,t){const n=function(e){return e?(Me(e).variable||[]).map((e=>e.key)):[]}(e);return n.map((e=>{const n=function(e,t){return t.find((t=>t.key===e))}(e,t);return n?(0,i.Z)({},n,{key:e}):{key:e,value:null}}))}var Ge=n(72783);async function _e(){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{return(await Ge.screen.findByRole("textbox",{name:/request\-url/i})).textContent||""}catch(e){return Ge.screen.queryByText(/enter url or paste text/i)?"":(await Ge.screen.findAllByTestId("input-skeleton"))[0].textContent||""}}async function Xe(e){await(0,Ge.waitFor)((()=>{var t;return expect(null==(t=Ge.screen.queryByRole("textbox",{name:/request\-url/i}))?void 0:t.textContent).toEqual(e)}))}async function Ye(e,t){var n,r;Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{await Ge.screen.findByRole("textbox",{name:/request\-url/i})}catch(e){const n=(await Ge.screen.findAllByTestId("input-skeleton"))[0];await t.click(n)}const o=await Ge.screen.findByRole("textbox",{name:/request\-url/i});await t.click(o);const a=null!=(n=null==(r=o.textContent)?void 0:r.length)?n:0;for(let e=0;e<a;e++)await t.type(o,"{backspace}"),await(0,Ge.waitFor)((()=>{var t;return expect(null==(t=Ge.screen.getByRole("textbox",{name:/request\-url/i}))||null==(t=t.textContent)?void 0:t.length).toEqual(a-e-1)}));await(0,Ge.waitFor)((async()=>expect(null==o?void 0:o.textContent).toEqual(""))),e&&(Ge.fireEvent.input(o,{data:e}),await(0,Ge.waitFor)((()=>expect(Ge.screen.getByRole("textbox",{name:/request\-url/i}).textContent).toEqual(e))))}async function et(e,t){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{await Ge.screen.findByRole("textbox",{name:/request\-url/i})}catch(e){const n=(await Ge.screen.findAllByTestId("input-skeleton"))[0];await t.click(n)}let n=await Ge.screen.findByRole("textbox",{name:/request\-url/i});await t.click(n),n=Ge.screen.getByRole("textbox",{name:/request\-url/i}),await t.type(n,e)}async function tt(e){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{const t=await Ge.screen.findByRole("textbox",{name:/request\-url/i});return await e.click(t),Ge.screen.findByRole("textbox",{name:/request\-url/i})}catch(t){const n=await Ge.screen.findAllByTestId("input-skeleton");await e.click(n[0])}return await Ge.screen.findByRole("textbox",{name:/request\-url/i})}function nt({onChange:e,value:t}){return(0,u.jsx)("input",{"aria-label":"URL Input",type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list",onChange:t=>{null==e||e(t.target.value)},autoFocus:!0,value:t})}let rt;const ot=a()(be)(rt||(rt=(e=>e)`
  width: 100%;
  height: 100%;

  .content-editable {
    min-height: 38px;
    ${0}
    border: var(--border-width-default) var(--border-style-solid);
    border-color: ${0};
    border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
    border-left: none;

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }

  .input-skeleton {
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
    border-left: none;
  }
`),(({isHardFocused:e})=>e?"box-shadow: 0 0 0 3px\n              var(--request-url-highlight-border-color);":""),(({isHardFocused:e})=>e?"transparent;":"var(--border-color-default);"));function at(e){const[t,n]=(0,r.useState)(!1);return(0,u.jsx)(ot,(0,i.Z)({},e,{ariaLabel:"request-url",className:"request-url",onHardFocus:n,isHardFocused:t}))}function it({onChange:e,onFocus:t,value:n,ariaLabel:r,onBlur:o,actions:a,indicators:i}){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("textarea",{"aria-label":r,role:"cell",onChange:t=>{null==e||e(t.target.value)},value:n,onFocus:()=>null==t?void 0:t(),onBlur:()=>null==o?void 0:o()}),i,a]})}let st;const lt=a()(be)(st||(st=(e=>e)`
  width: 100%;
  height: 100%;

  .content-editable {
    min-height: 32px;

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }
`));function ct(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(lt,(0,i.Z)({},e,{className:"kv-editor"})),e.indicators,e.actions]})}let ut,dt,pt=e=>e;const ht=a()(be)(ut||(ut=pt`
  width: 100%;
  height: 100%;

  .content-editable {
    /* min height of content editable is (total height - 2 * border width) as contenteditable
     * element is positioned absolutely
     */
    min-height: 28px;
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: var(--border-radius-default);

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }

  .input-skeleton {
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: var(--border-radius-default);
  }

  .placeholder {
    border-left: var(--border-width-default) var(--border-style-solid)
      transparent;
  }
`)),gt=a().div(dt||(dt=pt`
  height: 30px;
`));function ft(e){return(0,u.jsx)(gt,{children:(0,u.jsx)(ht,(0,i.Z)({},e,{className:"auth-editor"}))})}function vt({onChange:e,value:t,placeholder:n,ariaLabel:r}){return(0,u.jsx)("input",{type:"text",onChange:t=>{null==e||e(t.target.value)},placeholder:n,value:t,"aria-label":r})}},98366:(e,t,n)=>{function r(e,t){return null!==i(e,t)}function o(e){const t=l(e);return 1===t.length&&t[0].name===e}function a(e,t){return!(!o(e)||t&&r(e,t))}function i(e,t){const n=l(e);if(1!==n.length||n[0].name!==e)return null;const r=n[0].name.slice(2,-2);let o=null;for(let e=t.length-1;e>=0;e--){const n=t[e];if(n.key===r&&!n.overriddenBy){o=n;break}}return o}function s(e,t){if(!e)return[];const n=l(e),o=[];for(const e of n){const n=e.name,a=r(n,t);o.push({startIndex:e.lastIndex-n.length,endIndex:e.lastIndex,isResolved:a})}return o}function l(e){let t=[],n=0,r=!1,o=!1,a=!1;const i=[],s=[];for(let l=1;l<e.length;l++)r?(t.push(e.charAt(l)),"{"!==e.charAt(l)&&o&&(o=!1),"}"!==e.charAt(l)&&a&&(a=!1),"}"===e.charAt(l)?a?(0===s.pop()&&(r=!1,i.push({name:t.join(""),lastIndex:l+1}),t=[],n=0),a=!1):a=!0:"{"===e.charAt(l)&&(o?(s.push(n++),o=!1):o=!0)):"{"===e.charAt(l)&&"{"===e.charAt(l-1)&&(t.push(e.charAt(l),e.charAt(l-1)),r=!0,s.push(n++));return i}function c(e){return"string"==typeof e?e:e?"function"==typeof e.toString?String(e):Object.prototype.toString.call(e):""}function u(e){return e?(e=e.toLowerCase().trim()).charAt(0).toUpperCase()+e.slice(1):e}function d(e){return e?(e.endsWith("s")&&e.length>1&&(e=e.slice(0,-1)),e):e}n.d(t,{C5:()=>d,CS:()=>a,E0:()=>i,Fn:()=>c,KN:()=>u,Q0:()=>r,rn:()=>l,w1:()=>s,yG:()=>o})}}]);
//# sourceMappingURL=9304.70c6adf58d68562c.js.map