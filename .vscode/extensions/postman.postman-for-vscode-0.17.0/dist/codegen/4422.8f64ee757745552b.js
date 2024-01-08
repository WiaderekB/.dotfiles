"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[4422],{44422:(t,e,a)=>{a.r(e),a.d(e,{BaseKVStorage:()=>d,InMemoryKVStorage:()=>p,KVStorage:()=>m,LocalStorageKVAdapter:()=>s,VSCodeInMemoryKVAdapter:()=>l,VSCodeKVAdapter:()=>i,useKVStorage:()=>v});const r="LOCAL_STORAGE_SUBSCRIBE_EVENT";class s{emitChangesEvent(t){var e;const a=new CustomEvent(r,{detail:t});null==(e=globalThis.document)||null==e.dispatchEvent||e.dispatchEvent(a)}async has(t){return!!globalThis.localStorage.getItem(t)}async set(t,e){globalThis.localStorage.setItem(t,JSON.stringify({value:e})),this.emitChangesEvent({key:t,value:e})}async get(t){const e=await globalThis.localStorage.getItem(t);try{return e?JSON.parse(e).value:null}catch(t){return null}}async remove(t){globalThis.localStorage.removeItem(t),this.emitChangesEvent({key:t,value:null})}subscribe(t,e,a){var s;function n(r){a&&a.getPartitionId(t).then((t=>{var a,s;null!=r&&null!=(a=r.detail)&&a.key&&(null==r||null==(s=r.detail)?void 0:s.key)===t&&e(r.detail.value)}))}return null==(s=globalThis.document)||null==s.addEventListener||s.addEventListener(r,n),()=>{var t;null==(t=globalThis.document)||null==t.removeEventListener||t.removeEventListener(r,n)}}}var n=a(54302);class o{constructor(t){this.storage=t}async has(t){return this.storage.getItem(t).then((t=>!!t))}async set(t,e){return this.storage.setItem(t,e)}async get(t){return this.storage.getItem(t)}async remove(t){return this.storage.removeItem(t)}subscribe(t,e,a){return n.VSCodeCommunicationsService.subscribe("STORAGE_UPDATE",(r=>{null!=a&&a.getPartitionId&&(null==a||a.getPartitionId(t).then((t=>{r.key&&r.key===t&&"KV"===r.storageType&&e(r.value)})))}))}}class i extends o{constructor(){super(new n.VSCodeKVPermanentStorage)}}class l extends o{constructor(){super(new n.VSCodeKVInMemoryStorage)}}function c(t){let e,a;return function(r){return a&&e===r?Promise.resolve(a):(e=r,Promise.resolve(t(r)).then((t=>(a=t,t))))}}var u=a(64810);const g=t=>e=>function(t,e){return[(0,u.getUserId)(),(0,u.getTeamId)(),t,e].join(":")}(t,e);class d{constructor(t,{storageAdapter:e,partitionStrategy:a}){this.type="kv",this.name=void 0,this.storageAdapter=void 0,this.partitionStrategy=void 0,this.name=t,this.storageAdapter=e,this.partitionStrategy=null!=a?a:g(t)}async getPartitionId(t){return this.partitionStrategy?this.partitionStrategy(t):g(this.name)(t)}async get(t){const e=await this.getPartitionId(t);return this.storageAdapter.get(e)}async merge(t,e,a){const r=await this.getPartitionId(t),s=a(await this.get(t),e);await this.storageAdapter.set(t,s,{partitionId:r})}async set(t,e){const a=await this.getPartitionId(t);await this.storageAdapter.set(a,e)}async remove(t){const e=await this.getPartitionId(t);await this.storageAdapter.remove(e)}async has(t){const e=await this.getPartitionId(t);return this.storageAdapter.has(e)}subscribe(t,e){return this.storageAdapter.subscribe(t,e,{getPartitionId:c(this.getPartitionId.bind(this))})}}var h=a(40540);function v(t,e){const[a,r]=(0,h.useState)(null);(0,h.useMemo)((()=>{t.get(e).then(r)}),[e,t]),(0,h.useEffect)((()=>t.subscribe(e,r)),[e,t]);const s=(0,h.useCallback)((a=>t.set(e,a)),[e,t]);return{value:a,setValue:s,removeValue:(0,h.useCallback)((()=>t.remove(e)),[e,t])}}class m extends d{constructor(t,{storageAdapter:e,partitionStrategy:a}={}){if(!t)throw new Error("Storage name not defined");const r=new i;super(t,{storageAdapter:e||r,partitionStrategy:a})}}class p extends d{constructor(t,{storageAdapter:e,partitionStrategy:a}={}){if(!t)throw new Error("Storage name not defined");const r=new l;super(t,{storageAdapter:e||r,partitionStrategy:a})}}}}]);
//# sourceMappingURL=4422.8f64ee757745552b.js.map