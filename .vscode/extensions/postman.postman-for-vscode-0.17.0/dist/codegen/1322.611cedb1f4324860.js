"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[1322],{81322:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const i=Symbol("singleComment"),l=Symbol("multiComment"),o=()=>"",s=(e,n,t)=>e.slice(n,t).replace(/\S/g," "),c=(e,n)=>{let t=n-1,i=0;for(;"\\"===e[t];)t-=1,i+=1;return Boolean(i%2)};function r(e,{whitespace:n=!0,trailingCommas:t=!1}={}){if("string"!=typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const r=n?s:o;let f=!1,u=!1,g=0,a="",m="",p=-1;for(let n=0;n<e.length;n++){const o=e[n],s=e[n+1];if(u||'"'!==o||c(e,n)||(f=!f),!f)if(u||o+s!=="//"){if(u===i&&o+s==="\r\n"){n++,u=!1,a+=r(e,g,n),g=n;continue}if(u===i&&"\n"===o)u=!1,a+=r(e,g,n),g=n;else{if(!u&&o+s==="/*"){a+=e.slice(g,n),g=n,u=l,n++;continue}if(u===l&&o+s==="*/"){n++,u=!1,a+=r(e,g,n+1),g=n+1;continue}t&&!u&&(-1!==p?"}"===o||"]"===o?(a+=e.slice(g,n),m+=r(a,0,1)+a.slice(1),a="",g=n,p=-1):" "!==o&&"\t"!==o&&"\r"!==o&&"\n"!==o&&(a+=e.slice(g,n),g=n,p=-1):","===o&&(m+=a+e.slice(g,n),a="",g=n,p=n))}}else a+=e.slice(g,n),g=n,u=i,n++}return m+a+(u?r(e.slice(g)):e.slice(g))}}}]);
//# sourceMappingURL=1322.611cedb1f4324860.js.map