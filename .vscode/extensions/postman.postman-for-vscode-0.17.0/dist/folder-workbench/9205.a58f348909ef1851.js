"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[9205],{29205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var r=n(68367),o=n(39778),i=n(71534),a=n(34613),s=n(40505),l=n.n(s),c=n(25892),d=n.n(c),u=n(40540),p=n(30923),g=n(1765),v=n(11271);const f=(0,v.createCommand)();function x({onKeyPress:e}){const[t]=(0,g.useLexicalComposerContext)();return(0,u.useEffect)((()=>t.registerCommand(v.KEY_DOWN_COMMAND,(e=>(t.dispatchCommand(f,e),!1)),v.COMMAND_PRIORITY_LOW))),(0,u.useEffect)((()=>t.registerCommand(f,(t=>e(t)),v.COMMAND_PRIORITY_LOW)),[t,e]),null}function m(){const[e]=(0,g.useLexicalComposerContext)();return(0,u.useEffect)((()=>e.registerNodeTransform(v.LineBreakNode,(e=>{e.remove()}))),[e]),null}function b({onPaste:e}){const[t]=(0,g.useLexicalComposerContext)();return(0,u.useEffect)((()=>t.registerCommand(v.PASTE_COMMAND,(t=>(e(t),!1)),v.COMMAND_PRIORITY_LOW)),[t,e]),null}function h({onChange:e,value:t}){const[n]=(0,g.useLexicalComposerContext)();return(0,u.useEffect)((()=>n.registerTextContentListener((t=>{e(t)}))),[n,e]),(0,u.useEffect)((()=>{n.update((()=>{const e=(0,v.$getRoot)(),r=e.getTextContent();if(r===t||!r&&!t)return;const o=n.getRootElement()===document.activeElement;(0,v.$setSelection)(null);const i=e.getFirstChild(),a=(0,v.$createParagraphNode)(),s=(0,v.$createTextNode)(t);a.append(s),null==i||i.replace(a),o&&a.selectEnd()}))}),[n,t]),null}var y=n(21730),C=n.n(y),_=n(6443),w=n(44025),E=n(52322);const I=({domNode:e,value:t})=>{if(!e||!e.outerHTML)return null;e.className=t?"resolved-variable":"unresolved-variable";const n=(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:e.outerHTML}});return(0,E.jsx)(_.Z,{trigger:n,value:t})};class M extends v.TextNode{constructor(e,t,n){super(t,n),this.__variable=void 0,this.__variable=e}canInsertTextAfter(){return!1}createDOM(e){const t=super.createDOM(e),n=this.__variable,r=document.createElement("div"),o=(0,E.jsx)(w.ThemeContextProvider,{children:(0,E.jsx)(I,{value:n,domNode:t})});return C().render(o,r),r.firstChild}updateDOM(){return!0}}class j extends M{static getType(){return"unresolved-variable-node"}static clone(e){return new j(null,e.__text,e.__key)}}function k(e){return new j(null,e)}var O=n(98366);class N extends M{static getType(){return"resolved-variable-node"}static clone(e){return new N(e.__variable,e.__text,e.__key)}get variable(){return this.__variable}}function T(e,t){const n=(0,O.E0)(e,t);return new N(n,e)}function R(e,t){const n=(0,v.$createTextNode)(t);return e.replace(n),e.remove(),n}function A(e,t,n,r,o){const[i]=(0,g.useLexicalComposerContext)();(0,u.useEffect)((()=>{if(r.current)return i.registerNodeTransform(e,t);i.setEditable(!1);const o=i.registerNodeTransform(e,t);return requestAnimationFrame((()=>{i.setEditable(n)})),o}),[...o])}const L=(e,t,n)=>{A(v.TextNode,(t=>{t.getTextContent()&&function(e,t=[]){const n=e.getTextContent(),r=(0,O.rn)(n);let o=e;for(const e of r){var i;if(!o)return;const r=e.lastIndex-(n.length-(null==(i=o.__text)?void 0:i.length)||0);let s;if(r===e.name.length){const e=o.splitText(r);s=e[0],o=e[1]}else{var a;s=o.splitText(r-e.name.length)[1];const t=null==(a=s)?void 0:a.splitText(e.name.length);s=null==t?void 0:t[0],o=null==t?void 0:t[1]}if(!s)return;const l=(0,O.Q0)(e.name,t)?T(e.name,t):k(e.name);s.replace(l),s.remove()}}(t,e)}),n.isEditable,n.isEditorInFocus,[e])};function D(e,t){if(typeof e!=typeof t)return!1;const n=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===t:Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>D(e,t[n]))):"object"===n&&(null===e&&null===t||null!==e&&null!==t&&!Array.isArray(e)&&!Array.isArray(t)&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((n=>D(e[n],t[n]))))}const S=(e,t,n)=>{A(N,(t=>{const n=t.getTextContent();if((0,O.CS)(n,e))!function(e,t){const n=k(t);e.replace(n),e.remove()}(t,n);else if((0,O.yG)(n)){if(!D((0,O.E0)(n,e),t.variable)){const r=T(n,e);t.replace(r)}}else R(t,n)}),n.isEditable,n.isEditorInFocus,[e])},P=(e,t,n)=>{A(j,(t=>{const n=t.getTextContent();(0,O.Q0)(n,e)?function(e,t,n){const r=T(t,n);e.replace(r),e.remove()}(t,n,e):(0,O.yG)(n)||R(t,n)}),n.isEditable,n.isEditorInFocus,[e])};var z=n(76802);function F({variables:e,isEditable:t,autofocus:n=!1}){const[r]=(0,g.useLexicalComposerContext)(),[o]=function(e,t){const n=(0,u.useRef)(t);return(0,u.useEffect)((()=>(0,z.mergeRegister)(e.registerCommand(v.FOCUS_COMMAND,(()=>(n.current=!0,!1)),v.COMMAND_PRIORITY_HIGH),e.registerCommand(v.BLUR_COMMAND,(()=>(n.current=!1,!1)),v.COMMAND_PRIORITY_HIGH))),[e]),[n]}(r,null!=n&&n);return L(e,r,{isEditable:t,isEditorInFocus:o}),S(e,r,{isEditable:t,isEditorInFocus:o}),P(e,r,{isEditable:t,isEditorInFocus:o}),null}var H=n(10892),Y=n(20856),V=n(70262),W=n(95362),K=n(21219);const G=(0,u.forwardRef)((({name:e,scope:t,type:n,onClick:r,onMouseEnter:o,isSelected:i,toggleMaskValue:a,isMasked:s},l)=>(0,E.jsxs)(Z,{onMouseEnter:o,isSelected:i,ref:l,role:"option","aria-label":e,"aria-selected":i,onMouseDown:e=>{null==r||r(),e.preventDefault()},children:[(0,E.jsx)(Q,{scope:t,"aria-label":`scope: ${t}`,role:"presentation",children:t[0].toUpperCase()}),(0,E.jsxs)($,{children:[(0,E.jsx)(U,{"aria-label":`key: ${e}`,role:"presentation",children:e}),n===K.SECRET&&(0,E.jsx)(B,{onMouseDown:e=>{a(),e.stopPropagation()},onMouseLeave:()=>{a(!0)},children:s?(0,E.jsx)(W.Z,{}):(0,E.jsx)(V.Z,{})})]})]}))),$=d().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableKeyWrapper",componentId:"sc-1bmscb7-0"})(["flex:auto;overflow:hidden;text-overflow:ellipsis;display:flex;"]),B=d().div.withConfig({displayName:"suggestion-menu-variable-tile__SecretIconContainer",componentId:"sc-1bmscb7-1"})(["display:flex;margin-left:auto;margin-right:var(--spacing-xs);align-items:center;"]),U=d().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableName",componentId:"sc-1bmscb7-2"})(["color:var(--content-color-primary);margin-left:var(--spacing-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px;font-weight:var(--text-weight-medium);"]),Z=d().div.withConfig({displayName:"suggestion-menu-variable-tile__VariableTileWrapper",componentId:"sc-1bmscb7-3"})(["display:flex;padding:5px;border-bottom:1px solid var(--border-color-default);justify-content:flex-start;background-color:",";min-height:var(--text-size-l);cursor:pointer;align-items:center;"],(e=>e.isSelected?"var(--highlight-background-color-secondary)":"transparent")),Q=d().div.withConfig({displayName:"suggestion-menu-variable-tile__ScopeFirstLetter",componentId:"sc-1bmscb7-4"})(["display:inline-flex;height:17px;width:17px;justify-content:center;border-radius:1px;flex:none;text-align:center;line-height:17px;color:var(--content-color-constant);font-weight:var(--text-weight-m);font-size:var(--text-size-m);background-color:",";"],(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),q=G;function J({label:e,value:t,isMasked:n,isOverridden:r}){if(!1===t)return null;const o="string"==typeof t&&n?"*".repeat(t.length):t;return(0,E.jsxs)(X,{children:[(0,E.jsx)(ee,{children:e}),(0,E.jsx)(te,{isOverridden:r,children:"string"==typeof t?o:t})]})}const X=d().div.withConfig({displayName:"suggestion-menu-value-tile__ValueTileWrapper",componentId:"sc-uzxy41-0"})(["display:flex;margin:var(--spacing-xs);"]),ee=d().div.withConfig({displayName:"suggestion-menu-value-tile__LabelTile",componentId:"sc-uzxy41-1"})(["flex:0.3;margin-right:var(--spacing-xs);color:var(--content-color-secondary);"]),te=d().div.withConfig({displayName:"suggestion-menu-value-tile__LabelValue",componentId:"sc-uzxy41-2"})(["flex:0.7;margin:0 var(--spacing-xs);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;",";"],(({isOverridden:e})=>e&&"text-decoration: line-through;")),ne=({variable:e})=>{const{scope:t,overriddenBy:n}=e;if(!n)return null;const r={globals:"global",collection:"collection",environment:"environment"},o=r[t],i=r[n.scope];return n.scope===t?(0,E.jsxs)(ae,{children:["The value is overridden because duplicates of this variable are active in the ",i,". You can enable or disable variables on the ",i," page."]}):(0,E.jsxs)(ae,{children:["This variable exists in both ",i," and ",o," ","scopes. ",(0,E.jsx)("span",{style:{textTransform:"capitalize"},children:i})," variables overwrite ",o," variables."]})},re=({item:e,isMasked:t})=>{if(!e)return(0,E.jsx)(oe,{});const n={globals:"Global",collection:"Collection",environment:"Environment"}[e.variable.scope],r=Boolean(e.variable.overriddenBy);return(0,E.jsxs)(oe,{children:["dynamic"===e.variable.type?(0,E.jsx)(J,{label:"VALUE",value:(0,O.Fn)(e.variable.description)}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(J,{label:"INITIAL",value:(0,O.Fn)(e.variable.value),isMasked:e.variable.type===K.SECRET&&t,isOverridden:r}),(0,E.jsx)(J,{label:"CURRENT",value:(0,O.Fn)(e.variable.sessionValue),isMasked:e.variable.type===K.SECRET&&t,isOverridden:r})]}),r&&(0,E.jsx)(J,{label:"",value:(0,E.jsx)(ie,{children:"OVERRIDDEN"})}),(0,E.jsx)(J,{label:"SCOPE",value:n}),r&&(0,E.jsx)(ne,{variable:e.variable})]})},oe=d().div.withConfig({displayName:"suggestion-menu-variable-detail__DetailWrapper",componentId:"sc-ly21of-0"})(["flex:0.6;height:100%;padding:0 var(--spacing-xs);overflow:hidden auto;box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--text-size-xs);color:var(--content-color-primary);text-align:left;"]),ie=d().div.withConfig({displayName:"suggestion-menu-variable-detail__OverriddenLabel",componentId:"sc-ly21of-1"})(["background:var(--base-color-warning);border-radius:2px;padding:1px 2px;color:var(--content-color-constant);width:fit-content;font-size:var(--text-size-xs);line-height:12px;"]),ae=d().div.withConfig({displayName:"suggestion-menu-variable-detail__OverrideDescriptionWrapper",componentId:"sc-ly21of-2"})(["font-size:var(--text-size-xs);padding:var(--spacing-xs);border-top:1px solid var(--border-color-default);color:var(--content-color-secondary);margin-top:var(--spacing-s);line-height:var(--line-height-s);"]);class se extends H.MenuOption{constructor(e,t){super(e),this.variable=void 0,this.variable=Object.assign({},t,{sessionValue:(0,O.Fn)(t.sessionValue),value:(0,O.Fn)(t.value),key:(0,O.Fn)(t.key)})}}function le(e){const t=e.lastIndexOf("{{");return-1!=t?{leadOffset:t,matchingString:e.slice(t+2,e.length),replaceableString:e.slice(t,e.length)}:null}function ce({variables:e,onEnter:t}){const[n]=(0,g.useLexicalComposerContext)(),[r,o]=(0,u.useState)(null);(0,u.useEffect)((()=>n.registerCommand(v.KEY_ENTER_COMMAND,(()=>null===r&&(t(),!1)),v.COMMAND_PRIORITY_HIGH)),[r,n,t]),(0,u.useEffect)((()=>n.registerCommand(f,(e=>!(null===r||!["ArrowDown","ArrowUp","Tab","Enter"].includes(e.key))),v.COMMAND_PRIORITY_HIGH)),[n,r]);const i=e.map((e=>new se(e.id,e))),[a,s]=(0,u.useState)(i);return(0,u.useEffect)((()=>{const t=e.filter((e=>{const t=(0,O.Fn)(e.key).toLowerCase();return!r||t.includes(r.toLowerCase())})).map(((e,t)=>new se(String(t),e)));s(t)}),[r,e]),(0,E.jsx)(H.LexicalTypeaheadMenuPlugin,{onSelectOption:(e,t,r)=>{n.update((()=>{const n=(0,v.$createTextNode)(`{{${(0,O.Fn)(e.variable.key)}}}`);null==t||t.replace(n),n.select(),r(),o(null)}))},onQueryChange:o,menuRenderFn:(e,t)=>{const[n,r]=(0,u.useState)(!0),[o,i]=(0,u.useState)(!0);if(!e.current)return null;const a=t.options;if(0===a.length)return null;const s="number"==typeof t.selectedIndex?a[t.selectedIndex]:void 0;return(0,E.jsx)(Y.ZP,{isOpen:n,onClickOutside:()=>r(!1),placement:"bottom-start",triggerRef:e.current,padding:"var(--spacing-s)",maxWidth:"initial",children:(0,E.jsxs)(de,{id:"variable-suggestions","aria-label":"variable suggestions",role:"listbox",children:[(0,E.jsx)(ue,{children:a.map(((e,n)=>(0,E.jsx)(q,{ref:e.ref,onClick:()=>{t.selectOptionAndCleanUp(e)},onMouseEnter:()=>{t.setHighlightedIndex(n)},isSelected:t.selectedIndex===n,scope:e.variable.scope,name:e.variable.key,type:e.variable.type,toggleMaskValue:e=>i("boolean"==typeof e?e:!o),isMasked:t.selectedIndex!==n||o},e.key)))}),(0,E.jsx)(re,{item:s,isMasked:o})]})})},options:a,triggerFn:le})}const de=d().div.withConfig({displayName:"variable-suggestion-plugin__StyledWrapper",componentId:"sc-3w7xk6-0"})(["border-radius:var(--border-radius-default);height:196px;width:386px;box-shadow:0 1px 4px 0 rgb(0 0 0 / 37%);background-color:var(--background-color-primary);display:flex;flex-direction:row;"]),ue=d().div.withConfig({displayName:"variable-suggestion-plugin__LeftSideWrapper",componentId:"sc-3w7xk6-1"})(["flex:0.4;height:100%;box-sizing:border-box;overflow:hidden auto;display:flex;flex-direction:column;border-right:var(--border-width-default) solid var(--border-color-default);font-family:var(--font-family-default);"]),pe=(e,t)=>{(0,u.useEffect)((()=>{if(t)return(0,z.mergeRegister)(e.registerCommand(v.BLUR_COMMAND,(()=>(t(!1),!1)),v.COMMAND_PRIORITY_HIGH),e.registerCommand(v.CLICK_COMMAND,(()=>(t(!0),!1)),v.COMMAND_PRIORITY_HIGH),e.registerCommand(v.KEY_DOWN_COMMAND,(e=>1===e.key.length?(t(!0),!1):!(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||("Escape"===e.key?(t(!1),1):"Backspace"!==e.key||(t(!0),1)))),v.COMMAND_PRIORITY_HIGH))}),[e,t])};function ge({onHardFocus:e}){const[t]=(0,g.useLexicalComposerContext)();return pe(t,e),null}function ve({autofocus:e=!1}){const[t]=(0,g.useLexicalComposerContext)();return(0,u.useEffect)((()=>{e&&t.focus()}),[t]),null}const fe={namespace:"editor",theme:{paragraph:"editor-paragraph",root:"editor-root"},onError(e){throw e},nodes:[N,j]};function xe(){return(0,E.jsx)(l(),{onError:e=>{(0,p.logError)(e,{stack:void 0,appId:"variable-suggestions",crash:!0,errorElementId:"postman-input"})},children:(0,E.jsx)("div",{children:"Snap! something went wrong"})})}function me(e){var t;const n=Object.assign({},fe,{editable:e.isEditable}),i=null==(t=(0,K.useActiveAndDynamicVariables)())?void 0:t.data;return(0,E.jsxs)(r.LexicalComposer,{initialConfig:n,children:[(0,E.jsxs)(_e,{children:[(0,E.jsx)(o.PlainTextPlugin,{contentEditable:(0,E.jsx)(ye,{className:"content-editable",ariaLabel:e.ariaLabel,"data-testid":e.dataTestId,isEditable:e.isEditable}),placeholder:(0,E.jsx)(he,{text:e.placeholder}),ErrorBoundary:xe}),(0,E.jsx)(a.HistoryPlugin,{}),(0,E.jsx)(h,{onChange:t=>e.onChange(t),value:e.value}),e.allowEnter?null:(0,E.jsx)(m,{}),e.onHardFocus&&(0,E.jsx)(ge,{onHardFocus:e.onHardFocus}),(0,E.jsx)(x,{onKeyPress:e.onKeyDown}),(0,E.jsx)(b,{onPaste:e.onPaste}),(0,E.jsx)(ve,{autofocus:e.autofocus})]}),(0,E.jsx)(F,{variables:i||[],isEditable:e.isEditable,autofocus:e.autofocus}),(0,E.jsx)(ce,{variables:i||[],onEnter:e.onEnter})]})}const be=(0,u.memo)(me);function he({text:e}){return(0,E.jsx)(Ce,{className:"placeholder",children:e})}const ye=d()(i.ContentEditable).withConfig({displayName:"lexical-component__StyledEditorInput",componentId:"sc-ysd7k-0"})(["position:absolute;top:var(--spacing-zero);left:var(--spacing-zero);width:100%;background-color:",";color:var(--content-color-primary);outline:none;margin-top:auto;font-size:var(--font-size-default);display:flex;align-items:center;overflow:auto;line-height:1.5;.editor-paragraph{width:100%;margin:var(--spacing-zero);}:focus{z-index:10;}:focus .editor-paragraph{padding:0 var(--spacing-s);}:not(:focus) .editor-paragraph{text-overflow:ellipsis;overflow:hidden;white-space:nowrap !important;}.variable{color:var(--base-color-brand);text-decoration:none;&:hover{opacity:0.7;}}.unresolved-variable{color:var(--content-color-error);background:var(--background-color-error);padding:2px;}.resolved-variable{color:var(--base-color-brand);text-decoration:none;padding:2px;}"],(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),Ce=d().div.withConfig({displayName:"lexical-component__StyledPlaceholder",componentId:"sc-ysd7k-1"})(["position:relative;display:flex;align-items:center;padding:0 var(--spacing-s);top:0;left:0;z-index:20;user-select:none;pointer-events:none;height:100%;color:var(--content-color-tertiary);line-height:1.5;"]),_e=d().div.withConfig({displayName:"lexical-component__StyledEditorContainer",componentId:"sc-ysd7k-2"})(["background-color:var(--background-color-primary);position:relative;font-size:var(--font-size-default);width:100%;"])}}]);
//# sourceMappingURL=9205.a58f348909ef1851.js.map