"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[9205],{929205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(607560),o=n(668367),i=n(739778),a=n(471534),s=n(934613),l=n(40505),c=n.n(l),d=n(325892),u=n.n(d),p=n(540540),g=n(830923),v=n(901765),f=n(111271);const x=(0,f.createCommand)();function m({onKeyPress:e}){const[t]=(0,v.useLexicalComposerContext)();return(0,p.useEffect)((()=>t.registerCommand(f.KEY_DOWN_COMMAND,(e=>(t.dispatchCommand(x,e),!1)),f.COMMAND_PRIORITY_LOW))),(0,p.useEffect)((()=>t.registerCommand(x,(t=>e(t)),f.COMMAND_PRIORITY_LOW)),[t,e]),null}function b(){const[e]=(0,v.useLexicalComposerContext)();return(0,p.useEffect)((()=>e.registerNodeTransform(f.LineBreakNode,(e=>{e.remove()}))),[e]),null}function h({onPaste:e}){const[t]=(0,v.useLexicalComposerContext)();return(0,p.useEffect)((()=>t.registerCommand(f.PASTE_COMMAND,(t=>(e(t),!1)),f.COMMAND_PRIORITY_LOW)),[t,e]),null}function y({onChange:e,value:t}){const[n]=(0,v.useLexicalComposerContext)();return(0,p.useEffect)((()=>n.registerTextContentListener((t=>{e(t)}))),[n,e]),(0,p.useEffect)((()=>{n.update((()=>{const e=(0,f.$getRoot)(),r=e.getTextContent();if(r===t||!r&&!t)return;const o=n.getRootElement()===document.activeElement;(0,f.$setSelection)(null);const i=e.getFirstChild(),a=(0,f.$createParagraphNode)(),s=(0,f.$createTextNode)(t);a.append(s),null==i||i.replace(a),o&&a.selectEnd()}))}),[n,t]),null}var C=n(321730),_=n.n(C),w=n(706443),E=n(244025),I=n(552322);const M=({domNode:e,value:t})=>{if(!e||!e.outerHTML)return null;e.className=t?"resolved-variable":"unresolved-variable";const n=(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:e.outerHTML}});return(0,I.jsx)(w.Z,{trigger:n,value:t})};class j extends f.TextNode{constructor(e,t,n){super(t,n),this.__variable=void 0,this.__variable=e}canInsertTextAfter(){return!1}createDOM(e){const t=super.createDOM(e),n=this.__variable,r=document.createElement("div"),o=(0,I.jsx)(E.ThemeContextProvider,{children:(0,I.jsx)(M,{value:n,domNode:t})});return _().render(o,r),r.firstChild}updateDOM(){return!0}}class k extends j{static getType(){return"unresolved-variable-node"}static clone(e){return new k(null,e.__text,e.__key)}}function N(e){return new k(null,e)}var O=n(898366);class T extends j{static getType(){return"resolved-variable-node"}static clone(e){return new T(e.__variable,e.__text,e.__key)}get variable(){return this.__variable}}function R(e,t){const n=(0,O.E0)(e,t);return new T(n,e)}function A(e,t){const n=(0,f.$createTextNode)(t);return e.replace(n),e.remove(),n}function L(e,t,n,r,o){const[i]=(0,v.useLexicalComposerContext)();(0,p.useEffect)((()=>{if(r.current)return i.registerNodeTransform(e,t);i.setEditable(!1);const o=i.registerNodeTransform(e,t);return requestAnimationFrame((()=>{i.setEditable(n)})),o}),[...o])}const D=(e,t,n)=>{L(f.TextNode,(t=>{t.getTextContent()&&function(e,t=[]){const n=e.getTextContent(),r=(0,O.rn)(n);let o=e;for(const e of r){var i;if(!o)return;const r=e.lastIndex-(n.length-(null==(i=o.__text)?void 0:i.length)||0);let s;if(r===e.name.length){const e=o.splitText(r);s=e[0],o=e[1]}else{var a;s=o.splitText(r-e.name.length)[1];const t=null==(a=s)?void 0:a.splitText(e.name.length);s=null==t?void 0:t[0],o=null==t?void 0:t[1]}if(!s)return;const l=(0,O.Q0)(e.name,t)?R(e.name,t):N(e.name);s.replace(l),s.remove()}}(t,e)}),n.isEditable,n.isEditorInFocus,[e])};function S(e,t){if(typeof e!=typeof t)return!1;const n=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===t:Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>S(e,t[n]))):"object"===n&&(null===e&&null===t||null!==e&&null!==t&&!Array.isArray(e)&&!Array.isArray(t)&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((n=>S(e[n],t[n]))))}const P=(e,t,n)=>{L(T,(t=>{const n=t.getTextContent();if((0,O.CS)(n,e))!function(e,t){const n=N(t);e.replace(n),e.remove()}(t,n);else if((0,O.yG)(n)){if(!S((0,O.E0)(n,e),t.variable)){const r=R(n,e);t.replace(r)}}else A(t,n)}),n.isEditable,n.isEditorInFocus,[e])},z=(e,t,n)=>{L(k,(t=>{const n=t.getTextContent();(0,O.Q0)(n,e)?function(e,t,n){const r=R(t,n);e.replace(r),e.remove()}(t,n,e):(0,O.yG)(n)||A(t,n)}),n.isEditable,n.isEditorInFocus,[e])};var F=n(276802);function H({variables:e,isEditable:t,autofocus:n=!1}){const[r]=(0,v.useLexicalComposerContext)(),[o]=function(e,t){const n=(0,p.useRef)(t);return(0,p.useEffect)((()=>(0,F.mergeRegister)(e.registerCommand(f.FOCUS_COMMAND,(()=>(n.current=!0,!1)),f.COMMAND_PRIORITY_HIGH),e.registerCommand(f.BLUR_COMMAND,(()=>(n.current=!1,!1)),f.COMMAND_PRIORITY_HIGH))),[e]),[n]}(r,null!=n&&n);return D(e,r,{isEditable:t,isEditorInFocus:o}),P(e,r,{isEditable:t,isEditorInFocus:o}),z(e,r,{isEditable:t,isEditorInFocus:o}),null}var Y=n(410892),V=n(820856),W=n(470262),K=n(95362),G=n(821219);const $=(0,p.forwardRef)((({name:e,scope:t,type:n,onClick:r,onMouseEnter:o,isSelected:i,toggleMaskValue:a,isMasked:s},l)=>(0,I.jsxs)(Q,{onMouseEnter:o,isSelected:i,ref:l,role:"option","aria-label":e,"aria-selected":i,onMouseDown:e=>{null==r||r(),e.preventDefault()},children:[(0,I.jsx)(q,{scope:t,"aria-label":`scope: ${t}`,role:"presentation",children:t[0].toUpperCase()}),(0,I.jsxs)(B,{children:[(0,I.jsx)(Z,{"aria-label":`key: ${e}`,role:"presentation",children:e}),n===G.SECRET&&(0,I.jsx)(U,{onMouseDown:e=>{a(),e.stopPropagation()},onMouseLeave:()=>{a(!0)},children:s?(0,I.jsx)(K.Z,{}):(0,I.jsx)(W.Z,{})})]})]}))),B=u().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableKeyWrapper",componentId:"sc-1bmscb7-0"})(["flex:auto;overflow:hidden;text-overflow:ellipsis;display:flex;"]),U=u().div.withConfig({displayName:"suggestion-menu-variable-tile__SecretIconContainer",componentId:"sc-1bmscb7-1"})(["display:flex;margin-left:auto;margin-right:var(--spacing-xs);align-items:center;"]),Z=u().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableName",componentId:"sc-1bmscb7-2"})(["color:var(--content-color-primary);margin-left:var(--spacing-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px;font-weight:var(--text-weight-medium);"]),Q=u().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableTileWrapper",componentId:"sc-1bmscb7-3"})(["display:flex;padding:5px;border-bottom:1px solid var(--border-color-default);justify-content:flex-start;background-color:",";min-height:var(--text-size-l);cursor:pointer;align-items:center;"],(e=>e.isSelected?"var(--highlight-background-color-secondary)":"transparent")),q=u().div.withConfig({displayName:"suggestion-menu-variable-tile__ScopeFirstLetter",componentId:"sc-1bmscb7-4"})(["display:inline-flex;height:17px;width:17px;justify-content:center;border-radius:1px;flex:none;text-align:center;line-height:17px;color:var(--content-color-constant);font-weight:var(--text-weight-m);font-size:var(--text-size-m);background-color:",";"],(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),J=$;function X({label:e,value:t,isMasked:n,isOverridden:r}){if(!1===t)return null;const o="string"==typeof t&&n?"*".repeat(t.length):t;return(0,I.jsxs)(ee,{children:[(0,I.jsx)(te,{children:e}),(0,I.jsx)(ne,{isOverridden:r,children:"string"==typeof t?o:t})]})}const ee=u().div.withConfig({displayName:"suggestion-menu-value-tile__ValueTileWrapper",componentId:"sc-uzxy41-0"})(["display:flex;margin:var(--spacing-xs);"]),te=u().div.withConfig({displayName:"suggestion-menu-value-tile__LabelTile",componentId:"sc-uzxy41-1"})(["flex:0.3;margin-right:var(--spacing-xs);color:var(--content-color-secondary);"]),ne=u().div.withConfig({displayName:"suggestion-menu-value-tile__LabelValue",componentId:"sc-uzxy41-2"})(["flex:0.7;margin:0 var(--spacing-xs);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;",";"],(({isOverridden:e})=>e&&"text-decoration: line-through;")),re=({variable:e})=>{const{scope:t,overriddenBy:n}=e;if(!n)return null;const r={globals:"global",collection:"collection",environment:"environment"},o=r[t],i=r[n.scope];return n.scope===t?(0,I.jsxs)(se,{children:["The value is overridden because duplicates of this variable are active in the ",i,". You can enable or disable variables on the ",i," page."]}):(0,I.jsxs)(se,{children:["This variable exists in both ",i," and ",o," ","scopes. ",(0,I.jsx)("span",{style:{textTransform:"capitalize"},children:i})," variables overwrite ",o," variables."]})},oe=({item:e,isMasked:t})=>{if(!e)return(0,I.jsx)(ie,{});const n={globals:"Global",collection:"Collection",environment:"Environment"}[e.variable.scope],r=Boolean(e.variable.overriddenBy);return(0,I.jsxs)(ie,{children:["dynamic"===e.variable.type?(0,I.jsx)(X,{label:"VALUE",value:(0,O.Fn)(e.variable.description)}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(X,{label:"INITIAL",value:(0,O.Fn)(e.variable.value),isMasked:e.variable.type===G.SECRET&&t,isOverridden:r}),(0,I.jsx)(X,{label:"CURRENT",value:(0,O.Fn)(e.variable.sessionValue),isMasked:e.variable.type===G.SECRET&&t,isOverridden:r})]}),r&&(0,I.jsx)(X,{label:"",value:(0,I.jsx)(ae,{children:"OVERRIDDEN"})}),(0,I.jsx)(X,{label:"SCOPE",value:n}),r&&(0,I.jsx)(re,{variable:e.variable})]})},ie=u().div.withConfig({displayName:"suggestion-menu-variable-detail__DetailWrapper",componentId:"sc-ly21of-0"})(["flex:0.6;height:100%;padding:0 var(--spacing-xs);overflow:hidden auto;box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--text-size-xs);color:var(--content-color-primary);text-align:left;"]),ae=u().div.withConfig({displayName:"suggestion-menu-variable-detail__OverriddenLabel",componentId:"sc-ly21of-1"})(["background:var(--base-color-warning);border-radius:2px;padding:1px 2px;color:var(--content-color-constant);width:fit-content;font-size:var(--text-size-xs);line-height:12px;"]),se=u().div.withConfig({displayName:"suggestion-menu-variable-detail__OverrideDescriptionWrapper",componentId:"sc-ly21of-2"})(["font-size:var(--text-size-xs);padding:var(--spacing-xs);border-top:1px solid var(--border-color-default);color:var(--content-color-secondary);margin-top:var(--spacing-s);line-height:var(--line-height-s);"]);class le extends Y.MenuOption{constructor(e,t){super(e),this.variable=void 0,this.variable=(0,r.Z)({},t,{sessionValue:(0,O.Fn)(t.sessionValue),value:(0,O.Fn)(t.value),key:(0,O.Fn)(t.key)})}}function ce(e){const t=e.lastIndexOf("{{");return-1!=t?{leadOffset:t,matchingString:e.slice(t+2,e.length),replaceableString:e.slice(t,e.length)}:null}function de({variables:e,onEnter:t}){const[n]=(0,v.useLexicalComposerContext)(),[r,o]=(0,p.useState)(null);(0,p.useEffect)((()=>n.registerCommand(f.KEY_ENTER_COMMAND,(()=>null===r&&(t(),!1)),f.COMMAND_PRIORITY_HIGH)),[r,n,t]),(0,p.useEffect)((()=>n.registerCommand(x,(e=>!(null===r||!["ArrowDown","ArrowUp","Tab","Enter"].includes(e.key))),f.COMMAND_PRIORITY_HIGH)),[n,r]);const i=e.map((e=>new le(e.id,e))),[a,s]=(0,p.useState)(i);return(0,p.useEffect)((()=>{const t=e.filter((e=>{const t=(0,O.Fn)(e.key).toLowerCase();return!r||t.includes(r.toLowerCase())})).map(((e,t)=>new le(String(t),e)));s(t)}),[r,e]),(0,I.jsx)(Y.LexicalTypeaheadMenuPlugin,{onSelectOption:(e,t,r)=>{n.update((()=>{const n=(0,f.$createTextNode)(`{{${(0,O.Fn)(e.variable.key)}}}`);null==t||t.replace(n),n.select(),r(),o(null)}))},onQueryChange:o,menuRenderFn:(e,t)=>{const[n,r]=(0,p.useState)(!0),[o,i]=(0,p.useState)(!0);if(!e.current)return null;const a=t.options;if(0===a.length)return null;const s="number"==typeof t.selectedIndex?a[t.selectedIndex]:void 0;return(0,I.jsx)(V.ZP,{isOpen:n,onClickOutside:()=>r(!1),placement:"bottom-start",triggerRef:e.current,padding:"var(--spacing-s)",maxWidth:"initial",children:(0,I.jsxs)(ue,{id:"variable-suggestions","aria-label":"variable suggestions",role:"listbox",children:[(0,I.jsx)(pe,{children:a.map(((e,n)=>(0,I.jsx)(J,{ref:e.ref,onClick:()=>{t.selectOptionAndCleanUp(e)},onMouseEnter:()=>{t.setHighlightedIndex(n)},isSelected:t.selectedIndex===n,scope:e.variable.scope,name:e.variable.key,type:e.variable.type,toggleMaskValue:e=>i("boolean"==typeof e?e:!o),isMasked:t.selectedIndex!==n||o},e.key)))}),(0,I.jsx)(oe,{item:s,isMasked:o})]})})},options:a,triggerFn:ce})}const ue=u().div.withConfig({displayName:"variable-suggestion-plugin__StyledWrapper",componentId:"sc-3w7xk6-0"})(["border-radius:var(--border-radius-default);height:196px;width:386px;box-shadow:0 1px 4px 0 rgb(0 0 0 / 37%);background-color:var(--background-color-primary);display:flex;flex-direction:row;"]),pe=u().div.withConfig({displayName:"variable-suggestion-plugin__LeftSideWrapper",componentId:"sc-3w7xk6-1"})(["flex:0.4;height:100%;box-sizing:border-box;overflow:hidden auto;display:flex;flex-direction:column;border-right:var(--border-width-default) solid var(--border-color-default);font-family:var(--font-family-default);"]),ge=(e,t)=>{(0,p.useEffect)((()=>{if(t)return(0,F.mergeRegister)(e.registerCommand(f.BLUR_COMMAND,(()=>(t(!1),!1)),f.COMMAND_PRIORITY_HIGH),e.registerCommand(f.CLICK_COMMAND,(()=>(t(!0),!1)),f.COMMAND_PRIORITY_HIGH),e.registerCommand(f.KEY_DOWN_COMMAND,(e=>1===e.key.length?(t(!0),!1):!(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||("Escape"===e.key?(t(!1),1):"Backspace"!==e.key||(t(!0),1)))),f.COMMAND_PRIORITY_HIGH))}),[e,t])};function ve({onHardFocus:e}){const[t]=(0,v.useLexicalComposerContext)();return ge(t,e),null}function fe({autofocus:e=!1}){const[t]=(0,v.useLexicalComposerContext)();return(0,p.useEffect)((()=>{e&&t.focus()}),[t]),null}const xe={namespace:"editor",theme:{paragraph:"editor-paragraph",root:"editor-root"},onError(e){throw e},nodes:[T,k]};function me(){return(0,I.jsx)(c(),{onError:e=>{(0,g.logError)(e,{stack:void 0,appId:"variable-suggestions",crash:!0,errorElementId:"postman-input"})},children:(0,I.jsx)("div",{children:"Snap! something went wrong"})})}function be(e){var t;const n=(0,r.Z)({},xe,{editable:e.isEditable}),a=null==(t=(0,G.useActiveAndDynamicVariables)())?void 0:t.data;return(0,I.jsxs)(o.LexicalComposer,{initialConfig:n,children:[(0,I.jsxs)(we,{children:[(0,I.jsx)(i.PlainTextPlugin,{contentEditable:(0,I.jsx)(Ce,{className:"content-editable",ariaLabel:e.ariaLabel,"data-testid":e.dataTestId,isEditable:e.isEditable}),placeholder:(0,I.jsx)(ye,{text:e.placeholder}),ErrorBoundary:me}),(0,I.jsx)(s.HistoryPlugin,{}),(0,I.jsx)(y,{onChange:t=>e.onChange(t),value:e.value}),e.allowEnter?null:(0,I.jsx)(b,{}),e.onHardFocus&&(0,I.jsx)(ve,{onHardFocus:e.onHardFocus}),(0,I.jsx)(m,{onKeyPress:e.onKeyDown}),(0,I.jsx)(h,{onPaste:e.onPaste}),(0,I.jsx)(fe,{autofocus:e.autofocus})]}),(0,I.jsx)(H,{variables:a||[],isEditable:e.isEditable,autofocus:e.autofocus}),(0,I.jsx)(de,{variables:a||[],onEnter:e.onEnter})]})}const he=(0,p.memo)(be);function ye({text:e}){return(0,I.jsx)(_e,{className:"placeholder",children:e})}const Ce=u()(a.ContentEditable).withConfig({displayName:"lexical-component__StyledEditorInput",componentId:"sc-ysd7k-0"})(["position:absolute;top:var(--spacing-zero);left:var(--spacing-zero);width:100%;background-color:",";color:var(--content-color-primary);outline:none;margin-top:auto;font-size:var(--font-size-default);display:flex;align-items:center;overflow:auto;line-height:1.5;.editor-paragraph{width:100%;margin:var(--spacing-zero);}:focus{z-index:10;}:focus .editor-paragraph{padding:0 var(--spacing-s);}:not(:focus) .editor-paragraph{text-overflow:ellipsis;overflow:hidden;white-space:nowrap !important;}.variable{color:var(--base-color-brand);text-decoration:none;&:hover{opacity:0.7;}}.unresolved-variable{color:var(--content-color-error);background:var(--background-color-error);padding:2px;}.resolved-variable{color:var(--base-color-brand);text-decoration:none;padding:2px;}"],(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),_e=u().div.withConfig({displayName:"lexical-component__StyledPlaceholder",componentId:"sc-ysd7k-1"})(["position:relative;display:flex;align-items:center;padding:0 var(--spacing-s);top:0;left:0;z-index:20;user-select:none;pointer-events:none;height:100%;color:var(--content-color-tertiary);line-height:1.5;"]),we=u().div.withConfig({displayName:"lexical-component__StyledEditorContainer",componentId:"sc-ysd7k-2"})(["background-color:var(--background-color-primary);position:relative;font-size:var(--font-size-default);width:100%;"])}}]);
//# sourceMappingURL=9205.26477fc8d0acc916.js.map