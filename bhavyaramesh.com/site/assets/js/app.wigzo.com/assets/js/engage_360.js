(function(R,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(R=typeof globalThis<"u"?globalThis:R||self,$((R["engage-link"]=R["engage-link"]||{},R["engage-link"].js={})))})(this,function(R){"use strict";/*console-silencer: log/info/debug are no-ops in prod; warn/error still surface. Remove this statement to restore full logging.*/const __rc=typeof globalThis<"u"&&globalThis.console||{},__nop=function(){},console={log:__nop,info:__nop,debug:__nop,trace:__nop,dir:__nop,table:__nop,group:__nop,groupCollapsed:__nop,groupEnd:__nop,time:__nop,timeEnd:__nop,count:__nop,assert:__nop,warn:typeof __rc.warn=="function"?__rc.warn.bind(__rc):__nop,error:typeof __rc.error=="function"?__rc.error.bind(__rc):__nop};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn,On,Rn;const $=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let m=(a&15)<<2|h>>6,w=h&63;c||(w=64,o||(m=64)),s.push(n[u],n[d],n[m],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||h==null||d==null)throw new Bn;const m=r<<2|a>>4;if(s.push(m),h!==64){const w=a<<4&240|h>>2;if(s.push(w),d!==64){const ca=h<<6&192|d;s.push(ca)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nn=function(t){const e=$(t);return Qe.encodeByteArray(e,!0)},Ze=function(t){return Nn(t).replace(/\./g,"")},xn=function(t){try{return Qe.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=()=>Ln().__FIREBASE_DEFAULTS__,Pn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$n=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xn(t[1]);return e&&JSON.parse(e)},Fn=()=>{try{return Mn()||Pn()||$n()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},et=()=>{var t;return(t=Fn())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function qn(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ue(){try{return typeof indexedDB=="object"}catch{return!1}}function le(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function tt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="FirebaseError";class N extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Hn,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Un(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new N(i,a,s)}}function Un(t,e){return t.replace(jn,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const jn=/\{\$([^}]+)}/g;function J(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nt(r)&&nt(o)){if(!J(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Kn=2,zn=4*60*60*1e3,Gn=.5;function st(t,e=Wn,n=Kn){const s=e*Math.pow(n,t),i=Math.round(Gn*s*(Math.random()-.5)*2);return Math.min(zn,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t&&t._delegate?t._delegate:t}class E{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xn(e))try{this.getOrInitializeService({instanceIdentifier:x})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=x){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=x){return this.instances.has(e)}getOptions(e=x){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jn(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=x){return this.component?this.component.multipleInstances?e:x:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jn(t){return t===x?void 0:t}function Xn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const Zn={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},es=f.INFO,ts={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},ns=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ts[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class it{constructor(e){this.name=e,this._logLevel=es,this._logHandler=ns,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const ss=(t,e)=>e.some(n=>t instanceof n);let rt,ot;function is(){return rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rs(){return ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const at=new WeakMap,fe=new WeakMap,ct=new WeakMap,de=new WeakMap,pe=new WeakMap;function os(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(I(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&at.set(n,t)}).catch(()=>{}),pe.set(e,t),e}function as(t){if(fe.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fe.set(t,e)}let ge={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ct.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cs(t){ge=t(ge)}function hs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(me(this),e,...n);return ct.set(s,e.sort?e.sort():[e]),I(s)}:rs().includes(t)?function(...e){return t.apply(me(this),e),I(at.get(this))}:function(...e){return I(t.apply(me(this),e))}}function us(t){return typeof t=="function"?hs(t):(t instanceof IDBTransaction&&as(t),ss(t,is())?new Proxy(t,ge):t)}function I(t){if(t instanceof IDBRequest)return os(t);if(de.has(t))return de.get(t);const e=us(t);return e!==t&&(de.set(t,e),pe.set(e,t)),e}const me=t=>pe.get(t);function X(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=I(o);return s&&o.addEventListener("upgradeneeded",c=>{s(I(o.result),c.oldVersion,c.newVersion,I(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}function ye(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),I(n).then(()=>{})}const ls=["get","getKey","getAll","getAllKeys","count"],fs=["put","add","delete","clear"],be=new Map;function ht(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(be.get(e))return be.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ls.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&c.done]))[0]};return be.set(e,r),r}cs(t=>({...t,get:(e,n,s)=>ht(e,n)||t.get(e,n,s),has:(e,n)=>!!ht(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ps(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ps(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const we="@firebase/app",ut="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new it("@firebase/app"),gs="@firebase/app-compat",ms="@firebase/analytics-compat",ys="@firebase/analytics",bs="@firebase/app-check-compat",ws="@firebase/app-check",_s="@firebase/auth",vs="@firebase/auth-compat",Es="@firebase/database",Ts="@firebase/data-connect",As="@firebase/database-compat",Ss="@firebase/functions",Is="@firebase/functions-compat",ks="@firebase/installations",Cs="@firebase/installations-compat",Os="@firebase/messaging",Rs="@firebase/messaging-compat",Ds="@firebase/performance",Bs="@firebase/performance-compat",Ns="@firebase/remote-config",xs="@firebase/remote-config-compat",Ls="@firebase/storage",Ms="@firebase/storage-compat",Ps="@firebase/firestore",$s="@firebase/vertexai",Fs="@firebase/firestore-compat",Vs="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]",qs={[we]:"fire-core",[gs]:"fire-core-compat",[ys]:"fire-analytics",[ms]:"fire-analytics-compat",[ws]:"fire-app-check",[bs]:"fire-app-check-compat",[_s]:"fire-auth",[vs]:"fire-auth-compat",[Es]:"fire-rtdb",[Ts]:"fire-data-connect",[As]:"fire-rtdb-compat",[Ss]:"fire-fn",[Is]:"fire-fn-compat",[ks]:"fire-iid",[Cs]:"fire-iid-compat",[Os]:"fire-fcm",[Rs]:"fire-fcm-compat",[Ds]:"fire-perf",[Bs]:"fire-perf-compat",[Ns]:"fire-rc",[xs]:"fire-rc-compat",[Ls]:"fire-gcs",[Ms]:"fire-gcs-compat",[Ps]:"fire-fst",[Fs]:"fire-fst-compat",[$s]:"fire-vertex","fire-js":"fire-js",[Vs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new Map,Hs=new Map,ve=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){k.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function C(t){const e=t.name;if(ve.has(e))return k.debug(`There were multiple attempts to register component ${e}.`),!1;ve.set(e,t);for(const n of Q.values())lt(n,t);for(const n of Hs.values())lt(n,t);return!0}function H(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},D=new V("app","Firebase",Us);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new E("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}function ft(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_e,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw D.create("bad-app-name",{appName:String(i)});if(n||(n=et()),!n)throw D.create("no-options");const r=Q.get(i);if(r){if(J(n,r.options)&&J(s,r.config))return r;throw D.create("duplicate-app",{appName:i})}const o=new Qn(i);for(const c of ve.values())o.addComponent(c);const a=new js(n,s,o);return Q.set(i,a),a}function dt(t=_e){const e=Q.get(t);if(!e&&t===_e&&et())return ft();if(!e)throw D.create("no-app",{appName:t});return e}function T(t,e,n){var s;let i=(s=qs[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),k.warn(a.join(" "));return}C(new E(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="firebase-heartbeat-database",Ks=1,U="firebase-heartbeat-store";let Ee=null;function pt(){return Ee||(Ee=X(Ws,Ks,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(U)}catch(n){console.warn(n)}}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),Ee}async function zs(t){try{const n=(await pt()).transaction(U),s=await n.objectStore(U).get(mt(t));return await n.done,s}catch(e){if(e instanceof N)k.warn(e.message);else{const n=D.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});k.warn(n.message)}}}async function gt(t,e){try{const s=(await pt()).transaction(U,"readwrite");await s.objectStore(U).put(e,mt(t)),await s.done}catch(n){if(n instanceof N)k.warn(n.message);else{const s=D.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});k.warn(s.message)}}}function mt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1024,Ys=30*24*60*60*1e3;class Js{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qs(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yt();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ys}),this._storage.overwrite(this._heartbeatsCache))}catch(s){k.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yt(),{heartbeatsToSend:s,unsentEntries:i}=Xs(this._heartbeatsCache.heartbeats),r=Ze(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return k.warn(n),""}}}function yt(){return new Date().toISOString().substring(0,10)}function Xs(t,e=Gs){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bt(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Qs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ue()?le().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bt(t){return Ze(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){C(new E("platform-logger",e=>new ds(e),"PRIVATE")),C(new E("heartbeat",e=>new Js(e),"PRIVATE")),T(we,ut,t),T(we,ut,"esm2017"),T("fire-js","")}Zs("");var ei="firebase",ti="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T(ei,ti,"app");const wt="@firebase/installations",Te="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=1e4,vt=`w:${Te}`,Et="FIS_v2",ni="https://firebaseinstallations.googleapis.com/v1",si=60*60*1e3,ii="installations",ri="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},L=new V(ii,ri,oi);function Tt(t){return t instanceof N&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At({projectId:t}){return`${ni}/projects/${t}/installations`}function St(t){return{token:t.token,requestStatus:2,expiresIn:ci(t.expiresIn),creationTime:Date.now()}}async function It(t,e){const s=(await e.json()).error;return L.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function kt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ai(t,{refreshToken:e}){const n=kt(t);return n.append("Authorization",hi(e)),n}async function Ct(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ci(t){return Number(t.replace("s","000"))}function hi(t){return`${Et} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=At(t),i=kt(t),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:Et,appId:t.appId,sdkVersion:vt},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ct(()=>fetch(s,a));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:St(h.authToken)}}else throw await It("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=/^[cdef][\w-]{21}$/,Ae="";function di(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pi(t);return fi.test(n)?n:Ae}catch{return Ae}}function pi(t){return li(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Map;function Dt(t,e){const n=Z(t);Bt(n,e),gi(n,e)}function Bt(t,e){const n=Rt.get(t);if(n)for(const s of n)s(e)}function gi(t,e){const n=mi();n&&n.postMessage({key:t,fid:e}),yi()}let M=null;function mi(){return!M&&"BroadcastChannel"in self&&(M=new BroadcastChannel("[Firebase] FID Change"),M.onmessage=t=>{Bt(t.data.key,t.data.fid)}),M}function yi(){Rt.size===0&&M&&(M.close(),M=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="firebase-installations-database",wi=1,P="firebase-installations-store";let Se=null;function Ie(){return Se||(Se=X(bi,wi,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(P)}}})),Se}async function ee(t,e){const n=Z(t),i=(await Ie()).transaction(P,"readwrite"),r=i.objectStore(P),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Dt(t,e.fid),e}async function Nt(t){const e=Z(t),s=(await Ie()).transaction(P,"readwrite");await s.objectStore(P).delete(e),await s.done}async function te(t,e){const n=Z(t),i=(await Ie()).transaction(P,"readwrite"),r=i.objectStore(P),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Dt(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t){let e;const n=await te(t.appConfig,s=>{const i=_i(s),r=vi(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Ae?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _i(t){const e=t||{fid:di(),registrationStatus:0};return Lt(e)}function vi(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(L.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Ei(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ti(t)}:{installationEntry:e}}async function Ei(t,e){try{const n=await ui(t,e);return ee(t.appConfig,n)}catch(n){throw Tt(n)&&n.customData.serverCode===409?await Nt(t.appConfig):await ee(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ti(t){let e=await xt(t.appConfig);for(;e.registrationStatus===1;)await Ot(100),e=await xt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ke(t);return s||n}return e}function xt(t){return te(t,e=>{if(!e)throw L.create("installation-not-found");return Lt(e)})}function Lt(t){return Ai(t)?{fid:t.fid,registrationStatus:0}:t}function Ai(t){return t.registrationStatus===1&&t.registrationTime+_t<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si({appConfig:t,heartbeatServiceProvider:e},n){const s=Ii(t,n),i=ai(t,n),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:vt,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ct(()=>fetch(s,a));if(c.ok){const h=await c.json();return St(h)}else throw await It("Generate Auth Token",c)}function Ii(t,{fid:e}){return`${At(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e=!1){let n;const s=await te(t.appConfig,r=>{if(!Pt(r))throw L.create("not-registered");const o=r.authToken;if(!e&&Oi(o))return r;if(o.requestStatus===1)return n=ki(t,e),r;{if(!navigator.onLine)throw L.create("app-offline");const a=Di(r);return n=Ci(t,a),a}});return n?await n:s.authToken}async function ki(t,e){let n=await Mt(t.appConfig);for(;n.authToken.requestStatus===1;)await Ot(100),n=await Mt(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ce(t,e):s}function Mt(t){return te(t,e=>{if(!Pt(e))throw L.create("not-registered");const n=e.authToken;return Bi(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ci(t,e){try{const n=await Si(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ee(t.appConfig,s),n}catch(n){if(Tt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nt(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ee(t.appConfig,s)}throw n}}function Pt(t){return t!==void 0&&t.registrationStatus===2}function Oi(t){return t.requestStatus===2&&!Ri(t)}function Ri(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+si}function Di(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Bi(t){return t.requestStatus===1&&t.requestTime+_t<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){const e=t,{installationEntry:n,registrationPromise:s}=await ke(e);return s?s.catch(console.error):Ce(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e=!1){const n=t;return await Li(n),(await Ce(n,e)).token}async function Li(t){const{registrationPromise:e}=await ke(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(!t||!t.options)throw Oe("App Configuration");if(!t.name)throw Oe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oe(t){return L.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="installations",Pi="installations-internal",$i=t=>{const e=t.getProvider("app").getImmediate(),n=Mi(e),s=H(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Fi=t=>{const e=t.getProvider("app").getImmediate(),n=H(e,$t).getImmediate();return{getId:()=>Ni(n),getToken:i=>xi(n,i)}};function Vi(){C(new E($t,$i,"PUBLIC")),C(new E(Pi,Fi,"PRIVATE"))}Vi(),T(wt,Te),T(wt,Te,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="analytics",qi="firebase_id",Hi="origin",Ui=60*1e3,ji="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Re="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new it("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},b=new V("analytics","Analytics",Wi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(!t.startsWith(Re)){const e=b.create("invalid-gtag-resource",{gtagURL:t});return y.warn(e.message),""}return t}function Ft(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zi(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Gi(t,e){const n=zi("firebase-js-sdk-policy",{createScriptURL:Ki}),s=document.createElement("script"),i=`${Re}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Yi(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ji(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await Ft(n)).find(h=>h.measurementId===i);c&&await e[c.appId]}}catch(a){y.error(a)}t("config",i,r)}async function Xi(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ft(n);for(const c of o){const h=a.find(d=>d.measurementId===c),u=h&&e[h.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){y.error(r)}}function Qi(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await Xi(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await Ji(t,e,n,s,a,c)}else if(r==="consent"){const[a,c]=o;t("consent",a,c)}else if(r==="get"){const[a,c,h]=o;t("get",a,c,h)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){y.error(a)}}return i}function Zi(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Qi(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function er(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Re)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=30,nr=1e3;class sr{constructor(e={},n=nr){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vt=new sr;function ir(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rr(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:ir(s)},r=ji.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function or(t,e=Vt,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw b.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw b.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hr;return setTimeout(async()=>{a.abort()},Ui),qt({appId:s,apiKey:i,measurementId:r},o,a,e)}async function qt(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Vt){var r;const{appId:o,measurementId:a}=t;try{await ar(s,e)}catch(c){if(a)return y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await rr(t);return i.deleteThrottleMetadata(o),c}catch(c){const h=c;if(!cr(h)){if(i.deleteThrottleMetadata(o),a)return y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=h==null?void 0:h.customData)===null||r===void 0?void 0:r.httpStatus)===503?st(n,i.intervalMillis,tr):st(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),y.debug(`Calling attemptFetch again in ${u} millis`),qt(t,d,s,i)}}function ar(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(b.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cr(t){if(!(t instanceof N)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ur(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(){if(ue())try{await le()}catch(t){return y.warn(b.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return y.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fr(t,e,n,s,i,r,o){var a;const c=or(t);c.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&y.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>y.error(w)),e.push(c);const h=lr().then(w=>{if(w)return s.getId()}),[u,d]=await Promise.all([c,h]);er(r)||Gi(r,u.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[Hi]="firebase",m.update=!0,d!=null&&(m[qi]=d),i("config",u.measurementId,m),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.app=e}_delete(){return delete j[this.app.options.appId],Promise.resolve()}}let j={},Ht=[];const Ut={};let De="dataLayer",pr="gtag",jt,Wt,Kt=!1;function gr(){const t=[];if(qn()&&t.push("This is a browser extension environment."),tt()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:e});y.warn(n.message)}}function mr(t,e,n){gr();const s=t.options.appId;if(!s)throw b.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(j[s]!=null)throw b.create("already-exists",{id:s});if(!Kt){Yi(De);const{wrappedGtag:r,gtagCore:o}=Zi(j,Ht,Ut,De,pr);Wt=r,jt=o,Kt=!0}return j[s]=fr(t,Ht,Ut,e,jt,De,n),new dr(t)}function yr(t=dt()){t=q(t);const e=H(t,ne);return e.isInitialized()?e.getImmediate():br(t)}function br(t,e={}){const n=H(t,ne);if(n.isInitialized()){const i=n.getImmediate();if(J(e,n.getOptions()))return i;throw b.create("already-initialized")}return n.initialize({options:e})}function wr(t,e,n,s){t=q(t),ur(Wt,j[t.app.options.appId],e,n,s).catch(i=>y.error(i))}const zt="@firebase/analytics",Gt="0.10.10";function _r(){C(new E(ne,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return mr(s,i,n)},"PUBLIC")),C(new E("analytics-internal",t,"PRIVATE")),T(zt,Gt),T(zt,Gt,"esm2017");function t(e){try{const n=e.getProvider(ne).getImmediate();return{logEvent:(s,i,r)=>wr(n,s,i,r)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}_r();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="/firebase-messaging-sw.js",Er="/firebase-cloud-messaging-push-scope",Yt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Tr="https://fcmregistrations.googleapis.com/v1",Jt="google.c.a.c_id",Ar="google.c.a.c_l",Sr="google.c.a.ts",Ir="google.c.a.e";var Xt;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xt||(Xt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var W;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(W||(W={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kr(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),i=new Uint8Array(s.length);for(let r=0;r<s.length;++r)i[r]=s.charCodeAt(r);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="fcm_token_details_db",Cr=5,Qt="fcm_token_object_Store";async function Or(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(Be))return null;let e=null;return(await X(Be,Cr,{upgrade:async(s,i,r,o)=>{var a;if(i<2||!s.objectStoreNames.contains(Qt))return;const c=o.objectStore(Qt),h=await c.index("fcmSenderId").get(t);if(await c.clear(),!!h){if(i===2){const u=h;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:O(u.vapidKey)}}}else if(i===3){const u=h;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:O(u.auth),p256dh:O(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:O(u.vapidKey)}}}else if(i===4){const u=h;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:O(u.auth),p256dh:O(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:O(u.vapidKey)}}}}}})).close(),await ye(Be),await ye("fcm_vapid_details_db"),await ye("undefined"),Rr(e)?e:null}function Rr(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="firebase-messaging-database",Br=1,K="firebase-messaging-store";let Ne=null;function Zt(){return Ne||(Ne=X(Dr,Br,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(K)}}})),Ne}async function Nr(t){const e=en(t),s=await(await Zt()).transaction(K).objectStore(K).get(e);if(s)return s;{const i=await Or(t.appConfig.senderId);if(i)return await xe(t,i),i}}async function xe(t,e){const n=en(t),i=(await Zt()).transaction(K,"readwrite");return await i.objectStore(K).put(e,n),await i.done,e}function en({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},g=new V("messaging","Messaging",xr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){const n=await Me(t),s=tn(e),i={method:"POST",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(Le(t.appConfig),i)).json()}catch(o){throw g.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw g.create("token-subscribe-failed",{errorInfo:o})}if(!r.token)throw g.create("token-subscribe-no-token");return r.token}async function Mr(t,e){const n=await Me(t),s=tn(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(`${Le(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw g.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw g.create("token-update-failed",{errorInfo:o})}if(!r.token)throw g.create("token-update-no-token");return r.token}async function Pr(t,e){const s={method:"DELETE",headers:await Me(t)};try{const r=await(await fetch(`${Le(t.appConfig)}/${e}`,s)).json();if(r.error){const o=r.error.message;throw g.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw g.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Le({projectId:t}){return`${Tr}/projects/${t}/registrations`}async function Me({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tn({p256dh:t,auth:e,endpoint:n,vapidKey:s}){const i={web:{endpoint:n,auth:e,p256dh:t}};return s!==Yt&&(i.web.applicationPubKey=s),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=7*24*60*60*1e3;async function Fr(t){const e=await qr(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:O(e.getKey("auth")),p256dh:O(e.getKey("p256dh"))},s=await Nr(t.firebaseDependencies);if(s){if(Hr(s.subscriptionOptions,n))return Date.now()>=s.createTime+$r?Vr(t,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await Pr(t.firebaseDependencies,s.token)}catch(i){console.warn(i)}return nn(t.firebaseDependencies,n)}else return nn(t.firebaseDependencies,n)}async function Vr(t,e){try{const n=await Mr(t.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await xe(t.firebaseDependencies,s),n}catch(n){throw n}}async function nn(t,e){const s={token:await Lr(t,e),createTime:Date.now(),subscriptionOptions:e};return await xe(t,s),s.token}async function qr(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kr(e)})}function Hr(t,e){const n=e.vapidKey===t.vapidKey,s=e.endpoint===t.endpoint,i=e.auth===t.auth,r=e.p256dh===t.p256dh;return n&&s&&i&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Ur(e,t),jr(e,t),Wr(e,t),e}function Ur(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const s=e.notification.body;s&&(t.notification.body=s);const i=e.notification.image;i&&(t.notification.image=i);const r=e.notification.icon;r&&(t.notification.icon=r)}function jr(t,e){e.data&&(t.data=e.data)}function Wr(t,e){var n,s,i,r,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&i!==void 0?i:(r=e.notification)===null||r===void 0?void 0:r.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return typeof t=="object"&&!!t&&Jt in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){if(!t||!t.options)throw Pe("App Configuration Object");if(!t.name)throw Pe("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const s of e)if(!n[s])throw Pe(s);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Pe(t){return g.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=zr(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){try{t.swRegistration=await navigator.serviceWorker.register(vr,{scope:Er}),t.swRegistration.update().catch(()=>{})}catch(e){throw g.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){if(!e&&!t.swRegistration&&await Yr(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw g.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Yt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){if(!navigator)throw g.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw g.create("permission-blocked");return await Xr(t,e==null?void 0:e.vapidKey),await Jr(t,e==null?void 0:e.serviceWorkerRegistration),Fr(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e,n){const s=Zr(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[Jt],message_name:n[Ar],message_time:n[Sr],message_device_time:Math.floor(Date.now()/1e3)})}function Zr(t){switch(t){case W.NOTIFICATION_CLICKED:return"notification_open";case W.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===W.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(sn(n)):t.onMessageHandler.next(sn(n)));const s=n.data;Kr(s)&&s[Ir]==="1"&&await Qr(t,n.messageType,s)}const on="@firebase/messaging",an="0.12.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=t=>{const e=new Gr(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>eo(e,n)),e},no=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:s=>rn(e,s)}};function so(){C(new E("messaging",to,"PUBLIC")),C(new E("messaging-internal",no,"PRIVATE")),T(on,an),T(on,an,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(){try{await le()}catch{return!1}return typeof window<"u"&&ue()&&tt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e){if(!navigator)throw g.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t=dt()){return io().then(e=>{if(!e)throw g.create("unsupported-browser")},e=>{throw g.create("indexed-db-unsupported")}),H(q(t),"messaging").getImmediate()}async function ao(t,e){return t=q(t),rn(t,e)}function co(t,e){return t=q(t),ro(t,e)}so();const cn={apiKey:"AIzaSyAkRfRFX0KQmhHcb55NymuvvdiAfJAspkg",authDomain:"data-storage-242311.firebaseapp.com",projectId:"data-storage-242311",storageBucket:"data-storage-242311.firebasestorage.app",messagingSenderId:"39932226799",appId:"1:39932226799:web:7127b1b2d356747989bf1a",measurementId:"G-VN0WE6J114",vapidKey:"BI-9R2ne2kDYGf1k2wUvx4_064aGRuQiA5C6xj9q4oa8lNKc9q4rBQ0xW6vhN6gbyGvQ0yTd3nbm6Jo0XTl-CJI"},ho=async t=>{const e=ft(cn);yr(e);const n=oo();t=t||"/dist/firebase-messaging-sw.js";const s=async()=>await navigator.serviceWorker.register(t,{});"serviceWorker"in navigator&&(uo(),s().then(i=>{console.log("Service Worker registered with scope:",i.scope),ao(n,{vapidKey:cn.vapidKey,serviceWorkerRegistration:i}).then(r=>{r?(console.log(r),wigzo&&(wigzo==null||wigzo.registerWebPushHelperV2({token:r},"HTTPS"))):console.log("No registration token available. Request permission to generate one.")}).catch(r=>{console.log("An error occurred while retrieving token. ",r)}),co(n,r=>{const o=r.notification?r.notification:r.data,a=o.title,c={body:o.body,icon:o.icon,image:o.image};new Notification(a,c)})}).catch(i=>{console.error("Service Worker registration failed:",i)}))},uo=()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(e=>{e.active&&e.active.scriptURL&&e.active.scriptURL.includes("gcm_service_worker.js")&&e.unregister().then(n=>{console.log(n?" gcm_service_worker unregistered successfully.":"Failed to unregister the service worker.")})})}).catch(t=>{console.error("Error accessing service workers:",t)})},lo=t=>{var e;window.engageCoreStructure.appConstants={...((e=window==null?void 0:window.engageCoreStructure)==null?void 0:e.appConstants)||{},...t}};(Rn=(On=(Cn=window.ShopifyAnalytics)==null?void 0:Cn.meta)==null?void 0:On.page)!=null&&Rn.customerId;const fo=t=>(window.engageCoreStructure.engageObject||(window.engageCoreStructure.engageObject={}),lo(t),setTimeout(()=>{},1e4),"Setup is done"),po={},A=Object.create(null);A.open="0",A.close="1",A.ping="2",A.pong="3",A.message="4",A.upgrade="5",A.noop="6";const se=Object.create(null);Object.keys(A).forEach(t=>{se[A[t]]=t});const $e={type:"error",data:"parser error"},hn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",un=typeof ArrayBuffer=="function",ln=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Fe=({type:t,data:e},n,s)=>hn&&e instanceof Blob?n?s(e):fn(e,s):un&&(e instanceof ArrayBuffer||ln(e))?n?s(e):fn(new Blob([e]),s):s(A[t]+(e||"")),fn=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function dn(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Ve;function go(t,e){if(hn&&t.data instanceof Blob)return t.data.arrayBuffer().then(dn).then(e);if(un&&(t.data instanceof ArrayBuffer||ln(t.data)))return e(dn(t.data));Fe(t,!1,n=>{Ve||(Ve=new TextEncoder),e(Ve.encode(n))})}const pn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",z=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<pn.length;t++)z[pn.charCodeAt(t)]=t;const mo=t=>{let e=t.length*.75,n=t.length,s,i=0,r,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const h=new ArrayBuffer(e),u=new Uint8Array(h);for(s=0;s<n;s+=4)r=z[t.charCodeAt(s)],o=z[t.charCodeAt(s+1)],a=z[t.charCodeAt(s+2)],c=z[t.charCodeAt(s+3)],u[i++]=r<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|c&63;return h},yo=typeof ArrayBuffer=="function",qe=(t,e)=>{if(typeof t!="string")return{type:"message",data:gn(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:bo(t.substring(1),e)}:se[n]?t.length>1?{type:se[n],data:t.substring(1)}:{type:se[n]}:$e},bo=(t,e)=>{if(yo){const n=mo(t);return gn(n,e)}else return{base64:!0,data:t}},gn=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},mn="",wo=(t,e)=>{const n=t.length,s=new Array(n);let i=0;t.forEach((r,o)=>{Fe(r,!1,a=>{s[o]=a,++i===n&&e(s.join(mn))})})},_o=(t,e)=>{const n=t.split(mn),s=[];for(let i=0;i<n.length;i++){const r=qe(n[i],e);if(s.push(r),r.type==="error")break}return s};function vo(){return new TransformStream({transform(t,e){go(t,n=>{const s=n.length;let i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,s)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let He;function ie(t){return t.reduce((e,n)=>e+n.length,0)}function re(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let i=0;i<e;i++)n[i]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function Eo(t,e){He||(He=new TextDecoder);const n=[];let s=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(ie(n)<1)break;const c=re(n,1);r=(c[0]&128)===128,i=c[0]&127,i<126?s=3:i===126?s=1:s=2}else if(s===1){if(ie(n)<2)break;const c=re(n,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(ie(n)<8)break;const c=re(n,8),h=new DataView(c.buffer,c.byteOffset,c.length),u=h.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue($e);break}i=u*Math.pow(2,32)+h.getUint32(4),s=3}else{if(ie(n)<i)break;const c=re(n,i);a.enqueue(qe(r?c:He.decode(c),e)),s=0}if(i===0||i>t){a.enqueue($e);break}}}})}const yn=4;function p(t){if(t)return To(t)}function To(t){for(var e in p.prototype)t[e]=p.prototype[e];return t}p.prototype.on=p.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},p.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},p.prototype.off=p.prototype.removeListener=p.prototype.removeAllListeners=p.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,i=0;i<n.length;i++)if(s=n[i],s===e||s.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this},p.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,i=n.length;s<i;++s)n[s].apply(this,e)}return this},p.prototype.emitReserved=p.prototype.emit,p.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},p.prototype.hasListeners=function(t){return!!this.listeners(t).length};const oe=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),_=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Ao="arraybuffer";function ha(){}function bn(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const So=_.setTimeout,Io=_.clearTimeout;function ae(t,e){e.useNativeTimers?(t.setTimeoutFn=So.bind(_),t.clearTimeoutFn=Io.bind(_)):(t.setTimeoutFn=_.setTimeout.bind(_),t.clearTimeoutFn=_.clearTimeout.bind(_))}const ko=1.33;function Co(t){return typeof t=="string"?Oo(t):Math.ceil((t.byteLength||t.size)*ko)}function Oo(t){let e=0,n=0;for(let s=0,i=t.length;s<i;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function wn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ro(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Do(t){let e={},n=t.split("&");for(let s=0,i=n.length;s<i;s++){let r=n[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Bo extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class Ue extends p{constructor(e){super(),this.writable=!1,ae(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,s){return super.emitReserved("error",new Bo(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=qe(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Ro(e);return n.length?"?"+n:""}}class No extends Ue{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};_o(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,wo(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=wn()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let _n=!1;try{_n=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const xo=_n;function Lo(){}class Mo extends No{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class S extends p{constructor(e,n,s){super(),this.createRequest=e,ae(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const n=bn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=S.requestsCount++,S.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Lo,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete S.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(S.requestsCount=0,S.requests={},typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",vn);else if(typeof addEventListener=="function"){const t="onpagehide"in _?"pagehide":"unload";addEventListener(t,vn,!1)}}function vn(){for(let t in S.requests)S.requests.hasOwnProperty(t)&&S.requests[t].abort()}const Po=function(){const t=En({xdomain:!1});return t&&t.responseType!==null}();class $o extends Mo{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Po&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new S(En,this.uri(),e)}}function En(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||xo))return new XMLHttpRequest}catch{}if(!e)try{return new _[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Tn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Fo extends Ue{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,s=Tn?{}:bn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,s)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],i=n===e.length-1;Fe(s,this.supportsBinary,r=>{try{this.doWrite(s,r)}catch{}i&&oe(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=wn()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const je=_.WebSocket||_.MozWebSocket;class Vo extends Fo{createSocket(e,n,s){return Tn?new je(e,n,s):n?new je(e,n):new je(e)}doWrite(e,n){this.ws.send(n)}}class qo extends Ue{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Eo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),i=vo();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const r=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],i=n===e.length-1;this._writer.write(s).then(()=>{i&&oe(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ho={websocket:Vo,webtransport:qo,polling:$o},Uo=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,jo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function We(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let i=Uo.exec(t||""),r={},o=14;for(;o--;)r[jo[o]]=i[o]||"";return n!=-1&&s!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Wo(r,r.path),r.queryKey=Ko(r,r.query),r}function Wo(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function Ko(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(n[i]=r)}),n}const Ke=typeof addEventListener=="function"&&typeof removeEventListener=="function",ce=[];Ke&&addEventListener("offline",()=>{ce.forEach(t=>t())},!1);class B extends p{constructor(e,n){if(super(),this.binaryType=Ao,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=We(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=We(n.host).host);ae(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const i=s.prototype.name;this.transports.push(i),this._transportsByName[i]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Do(this.opts.query)),Ke&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ce.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=yn,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&B.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",B.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const i=this.writeBuffer[s].data;if(i&&(n+=Co(i)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,oe(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,s){return this._sendPacket("message",e,n,s),this}send(e,n,s){return this._sendPacket("message",e,n,s),this}_sendPacket(e,n,s,i){if(typeof n=="function"&&(i=n,n=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const r={type:e,data:n,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(B.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ke&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=ce.indexOf(this._offlineEventListener);s!==-1&&ce.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}B.protocol=yn;class zo extends B{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),s=!1;B.priorWebsocketSuccess=!1;const i=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;B.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const m=new Error("probe error");m.transport=n.name,this.emitReserved("upgradeError",m)}}))};function r(){s||(s=!0,u(),n.close(),n=null)}const o=d=>{const m=new Error("probe error: "+d);m.transport=n.name,r(),this.emitReserved("upgradeError",m)};function a(){o("transport closed")}function c(){o("socket closed")}function h(d){n&&d.name!==n.name&&r()}const u=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",h)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",h),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}}let Go=class extends zo{constructor(e,n={}){const s=typeof e=="object"?e:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(i=>Ho[i]).filter(i=>!!i)),super(e,s)}};function Yo(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=We(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const r=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(n&&n.port===s.port?"":":"+s.port),s}const Jo=typeof ArrayBuffer=="function",Xo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,An=Object.prototype.toString,Qo=typeof Blob=="function"||typeof Blob<"u"&&An.call(Blob)==="[object BlobConstructor]",Zo=typeof File=="function"||typeof File<"u"&&An.call(File)==="[object FileConstructor]";function ze(t){return Jo&&(t instanceof ArrayBuffer||Xo(t))||Qo&&t instanceof Blob||Zo&&t instanceof File}function he(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(he(t[n]))return!0;return!1}if(ze(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return he(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&he(t[n]))return!0;return!1}function ea(t){const e=[],n=t.data,s=t;return s.data=Ge(n,e),s.attachments=e.length,{packet:s,buffers:e}}function Ge(t,e){if(!t)return t;if(ze(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=Ge(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=Ge(t[s],e));return n}return t}function ta(t,e){return t.data=Ye(t.data,e),delete t.attachments,t}function Ye(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Ye(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Ye(t[n],e));return t}const na=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],sa=5;var l;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(l||(l={}));class ia{constructor(e){this.replacer=e}encode(e){return(e.type===l.EVENT||e.type===l.ACK)&&he(e)?this.encodeAsBinary({type:e.type===l.EVENT?l.BINARY_EVENT:l.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===l.BINARY_EVENT||e.type===l.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=ea(e),s=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(s),i}}function Sn(t){return Object.prototype.toString.call(t)==="[object Object]"}class Je extends p{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===l.BINARY_EVENT;s||n.type===l.BINARY_ACK?(n.type=s?l.EVENT:l.ACK,this.reconstructor=new ra(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ze(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if(l[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===l.BINARY_EVENT||s.type===l.BINARY_ACK){const r=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(r,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(n+1)==="/"){const r=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(r,n)}else s.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const r=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(r,n+1))}if(e.charAt(++n)){const r=this.tryParse(e.substr(n));if(Je.isPayloadValid(s.type,r))s.data=r;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case l.CONNECT:return Sn(n);case l.DISCONNECT:return n===void 0;case l.CONNECT_ERROR:return typeof n=="string"||Sn(n);case l.EVENT:case l.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&na.indexOf(n[0])===-1);case l.ACK:case l.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ra{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=ta(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const oa=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Je,Encoder:ia,get PacketType(){return l},protocol:sa},Symbol.toStringTag,{value:"Module"}));function v(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const aa=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class In extends p{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[v(e,"open",this.onopen.bind(this)),v(e,"packet",this.onpacket.bind(this)),v(e,"error",this.onerror.bind(this)),v(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var s,i,r;if(aa.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:l.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const u=this.ids++,d=n.pop();this._registerAckCallback(u,d),o.id=u}const a=(i=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var s;const i=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(r),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((s,i)=>{const r=(o,a)=>o?i(o):s(a);r.withError=!0,n.push(r),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>s!==this._queue[0]?void 0:(i!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...r)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:l.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case l.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case l.EVENT:case l.BINARY_EVENT:this.onevent(e);break;case l.ACK:case l.BINARY_ACK:this.onack(e);break;case l.DISCONNECT:this.ondisconnect();break;case l.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...i){s||(s=!0,n.packet({type:l.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:l.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function F(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}F.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0},F.prototype.reset=function(){this.attempts=0},F.prototype.setMin=function(t){this.ms=t},F.prototype.setMax=function(t){this.max=t},F.prototype.setJitter=function(t){this.jitter=t};class Xe extends p{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,ae(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new F({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||oa;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Go(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=v(n,"open",function(){s.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=v(n,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(v(e,"ping",this.onping.bind(this)),v(e,"data",this.ondata.bind(this)),v(e,"error",this.onerror.bind(this)),v(e,"close",this.onclose.bind(this)),v(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){oe(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new In(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const G={};function Y(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Yo(t,e.path||"/socket.io"),s=n.source,i=n.id,r=n.path,o=G[i]&&r in G[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Xe(s,e):(G[i]||(G[i]=new Xe(s,e)),c=G[i]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(Y,{Manager:Xe,Socket:In,io:Y,connect:Y});let kn={setupFirebase:t=>{t=t||"/apps/wigzo/fcm_service_worker.js?orgtoken=ixsA_0VyS1GEmAJEW4j3pQ",ho(t)},scriptLoaded:!1,setup:fo,constants:po,appConstants:{},connectSocket:t=>{const e=Y(t,{transports:["websocket"],upgrade:!1});return e.on("connect",()=>{console.log(e.id)}),e.on("notify",()=>{console.log(e.id)}),e},connectSocketV2:(t,e,n,s,i,r)=>{if(!("WebSocket"in window||"MozWebSocket"in window))return console.info("This library requires WebSocket support."),null;const o=Y(t,{transports:["websocket"],upgrade:!1});return o.on("notify",a=>{if(!a){console.log("No pending message found!");return}a.cookie_id=n,s&&s(a),o.emit("acknowledge",a)}),o.on("connect",()=>{o.emit("join",{cookie_id:n,org_token:e}),i&&i(o)}),o.on("disconnect",()=>{r&&r(o)}),o.on("error",a=>{console.error("Error occurred while connecting to the socket",a)}),o}};window.engageCoreStructure=kn,R.engageCoreStructure=kn,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
