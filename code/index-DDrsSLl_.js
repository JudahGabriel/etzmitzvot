(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();var qe="";function je(t){qe=t}function Di(t=""){if(!qe){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)je(o.getAttribute("data-shoelace"));else{const i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";i&&(r=i.getAttribute("src")),je(r.split("/").slice(0,-1).join("/"))}}return qe.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ni=Object.defineProperty,Fi=Object.defineProperties,Ui=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertyDescriptors,Co=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,qi=Object.prototype.propertyIsEnumerable,Re=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),eo=t=>{throw TypeError(t)},Ao=(t,e,o)=>e in t?ni(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_t=(t,e)=>{for(var o in e||(e={}))Hi.call(e,o)&&Ao(t,o,e[o]);if(Co)for(var o of Co(e))qi.call(e,o)&&Ao(t,o,e[o]);return t},ne=(t,e)=>Fi(t,Vi(e)),d=(t,e,o,i)=>{for(var r=i>1?void 0:i?Ui(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&ni(e,o,r),r},si=(t,e,o)=>e.has(t)||eo("Cannot "+o),ji=(t,e,o)=>(si(t,e,"read from private field"),e.get(t)),Wi=(t,e,o)=>e.has(t)?eo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Ki=(t,e,o,i)=>(si(t,e,"write to private field"),e.set(t,o),o),Gi=function(t,e){this[0]=t,this[1]=e},Yi=t=>{var e=t[Re("asyncIterator")],o=!1,i,r={};return e==null?(e=t[Re("iterator")](),i=n=>r[n]=s=>e[n](s)):(e=e.call(t),i=n=>r[n]=s=>{if(o){if(o=!1,n==="throw")throw s;return s}return o=!0,{done:!1,value:new Gi(new Promise(l=>{var a=e[n](s);a instanceof Object||eo("Object expected"),l(a)}),1)}}),r[Re("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=n=>{throw n},"return"in e&&i("return"),r};je("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,oo=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,io=Symbol(),Eo=new WeakMap;let ai=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==io)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(oo&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=Eo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Eo.set(o,e))}return e}toString(){return this.cssText}};const Zi=t=>new ai(typeof t=="string"?t:t+"",void 0,io),T=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new ai(o,t,io)},Ji=(t,e)=>{if(oo)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const i=document.createElement("style"),r=me.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)}},So=oo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return Zi(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xi,defineProperty:Qi,getOwnPropertyDescriptor:tr,getOwnPropertyNames:er,getOwnPropertySymbols:or,getPrototypeOf:ir}=Object,Se=globalThis,Po=Se.trustedTypes,rr=Po?Po.emptyScript:"",nr=Se.reactiveElementPolyfillSupport,Qt=(t,e)=>t,Bt={toAttribute(t,e){switch(e){case Boolean:t=t?rr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},ro=(t,e)=>!Xi(t,e),zo={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:ro};Symbol.metadata??=Symbol("metadata"),Se.litPropertyMetadata??=new WeakMap;class Rt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=zo){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(e,o),!o.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Qi(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){const{get:r,set:n}=tr(this.prototype,e)??{get(){return this[o]},set(s){this[o]=s}};return{get(){return r?.call(this)},set(s){const l=r?.call(this);n.call(this,s),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??zo}static _$Ei(){if(this.hasOwnProperty(Qt("elementProperties")))return;const e=ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qt("properties"))){const o=this.properties,i=[...er(o),...or(o)];for(const r of i)this.createProperty(r,o[r])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[i,r]of o)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const r=this._$Eu(o,i);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(So(r))}else e!==void 0&&o.push(So(e));return o}static _$Eu(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ji(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EC(e,o){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:Bt).toAttribute(o,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,o){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Bt;this._$Em=r,this[r]=s.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(e,o,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??ro)(this[e],o))return;this.P(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,o,i){this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(o=>this._$EC(o,this[o])),this._$EU()}updated(e){}firstUpdated(e){}}Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},Rt[Qt("elementProperties")]=new Map,Rt[Qt("finalized")]=new Map,nr?.({ReactiveElement:Rt}),(Se.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis,ye=no.trustedTypes,To=ye?ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,so="$lit$",ct=`lit$${Math.random().toFixed(9).slice(2)}$`,ao="?"+ct,sr=`<${ao}>`,St=document,ee=()=>St.createComment(""),oe=t=>t===null||typeof t!="object"&&typeof t!="function",lo=Array.isArray,li=t=>lo(t)||typeof t?.[Symbol.iterator]=="function",Ie=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oo=/-->/g,Lo=/>/g,kt=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ro=/'/g,Io=/"/g,ci=/^(?:script|style|textarea|title)$/i,ar=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),w=ar(1),W=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Mo=new WeakMap,Et=St.createTreeWalker(St,129);function di(t,e){if(!lo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return To!==void 0?To.createHTML(e):e}const hi=(t,e)=>{const o=t.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",s=jt;for(let l=0;l<o;l++){const a=t[l];let h,c,u=-1,f=0;for(;f<a.length&&(s.lastIndex=f,c=s.exec(a),c!==null);)f=s.lastIndex,s===jt?c[1]==="!--"?s=Oo:c[1]!==void 0?s=Lo:c[2]!==void 0?(ci.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=kt):c[3]!==void 0&&(s=kt):s===kt?c[0]===">"?(s=r??jt,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?kt:c[3]==='"'?Io:Ro):s===Io||s===Ro?s=kt:s===Oo||s===Lo?s=jt:(s=kt,r=void 0);const p=s===kt&&t[l+1].startsWith("/>")?" ":"";n+=s===jt?a+sr:u>=0?(i.push(h),a.slice(0,u)+so+a.slice(u)+ct+p):a+ct+(u===-2?l:p)}return[di(t,n+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ie{constructor({strings:e,_$litType$:o},i){let r;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[h,c]=hi(e,o);if(this.el=ie.createElement(h,i),Et.currentNode=this.el.content,o===2||o===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Et.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(so)){const f=c[s++],p=r.getAttribute(u).split(ct),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?pi:b[1]==="?"?mi:b[1]==="@"?fi:se}),r.removeAttribute(u)}else u.startsWith(ct)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(ci.test(r.tagName)){const u=r.textContent.split(ct),f=u.length-1;if(f>0){r.textContent=ye?ye.emptyScript:"";for(let p=0;p<f;p++)r.append(u[p],ee()),Et.nextNode(),a.push({type:2,index:++n});r.append(u[f],ee())}}}else if(r.nodeType===8)if(r.data===ao)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(ct,u+1))!==-1;)a.push({type:7,index:n}),u+=ct.length-1}n++}}static createElement(e,o){const i=St.createElement("template");return i.innerHTML=e,i}}function Pt(t,e,o=t,i){if(e===W)return e;let r=i!==void 0?o._$Co?.[i]:o._$Cl;const n=oe(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,o,i)),i!==void 0?(o._$Co??=[])[i]=r:o._$Cl=r),r!==void 0&&(e=Pt(t,r._$AS(t,e.values),r,i)),e}let ui=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:i}=this._$AD,r=(e?.creationScope??St).importNode(o,!0);Et.currentNode=r;let n=Et.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let h;a.type===2?h=new Ft(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new bi(n,this,e)),this._$AV.push(h),a=i[++l]}s!==a?.index&&(n=Et.nextNode(),s++)}return Et.currentNode=St,r}p(e){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}};class Ft{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Pt(this,e,o),oe(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):li(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(St.createTextNode(e)),this._$AH=e}$(e){const{values:o,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ie.createElement(di(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(o);else{const n=new ui(r,this),s=n.u(this.options);n.p(o),this.T(s),this._$AH=n}}_$AC(e){let o=Mo.get(e.strings);return o===void 0&&Mo.set(e.strings,o=new ie(e)),o}k(e){lo(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const n of e)r===o.length?o.push(i=new Ft(this.O(ee()),this.O(ee()),this,this.options)):i=o[r],i._$AI(n),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,r,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(e,o=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=Pt(this,e,o,0),s=!oe(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{const l=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=Pt(this,l[i+a],o,a),h===W&&(h=this._$AH[a]),s||=!oe(h)||h!==this._$AH[a],h===z?e=z:e!==z&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}s&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pi extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class mi extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class fi extends se{constructor(e,o,i,r,n){super(e,o,i,r,n),this.type=5}_$AI(e,o=this){if((e=Pt(this,e,o,0)??z)===W)return;const i=this._$AH,r=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==z&&(i===z||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class bi{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}}const lr={M:so,P:ct,A:ao,C:1,L:hi,R:ui,D:li,V:Pt,I:Ft,H:se,N:mi,U:fi,B:pi,F:bi},cr=no.litHtmlPolyfillSupport;cr?.(ie,Ft),(no.litHtmlVersions??=[]).push("3.2.1");const dr=(t,e,o)=>{const i=o?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const n=o?.renderBefore??null;i._$litPart$=r=new Ft(e.insertBefore(ee(),n),n,void 0,o??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dr(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const hr=globalThis.litElementPolyfillSupport;hr?.({LitElement:ot});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:ro},pr=(t=ur,e,o)=>{const{kind:i,metadata:r}=o;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(o.name,t),i==="accessor"){const{name:s}=o;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(i==="setter"){const{name:s}=o;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+i)};function m(t){return(e,o)=>typeof o=="object"?pr(t,e,o):((i,r,n)=>{const s=r.hasOwnProperty(n);return r.constructor.createProperty(n,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(t,e){return(o,i,r)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return mr(o,i,{get(){return n(this)}})}}var fr=T`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const We=new Set,It=new Map;let At,co="ltr",ho="en";const gi=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(gi){const t=new MutationObserver(yi);co=document.documentElement.dir||"ltr",ho=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function vi(...t){t.map(e=>{const o=e.$code.toLowerCase();It.has(o)?It.set(o,Object.assign(Object.assign({},It.get(o)),e)):It.set(o,e),At||(At=e)}),yi()}function yi(){gi&&(co=document.documentElement.dir||"ltr",ho=document.documentElement.lang||navigator.language),[...We.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let br=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){We.add(this.host)}hostDisconnected(){We.delete(this.host)}dir(){return`${this.host.dir||co}`.toLowerCase()}lang(){return`${this.host.lang||ho}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r?.language.toLowerCase(),s=(i=(o=r?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=It.get(`${n}-${s}`),a=It.get(n);return{locale:r,language:n,region:s,primary:l,secondary:a}}exists(e,o){var i;const{primary:r,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||n&&n[e]||o.includeFallback&&At&&At[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(r&&r[e])n=r[e];else if(At&&At[e])n=At[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...o):n}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var wi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};vi(wi);var gr=wi,$t=class extends br{};vi(gr);var K=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,fe,M=class extends ot{constructor(){super(),Wi(this,fe,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,_t({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,o){ji(this,fe)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Ki(this,fe,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};fe=new WeakMap;M.version="2.19.1";M.dependencies={};d([m()],M.prototype,"dir",2);d([m()],M.prototype,"lang",2);var uo=class extends M{constructor(){super(...arguments),this.localize=new $t(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};uo.styles=[K,fr];var Wt=new WeakMap,Kt=new WeakMap,Gt=new WeakMap,Me=new WeakSet,he=new WeakMap,xi=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof r=="string"&&r.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(l=>{o.formData.append(r,l.toString())}):o.formData.append(r,n.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Wt.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!r&&!n(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),he.set(this.host,[])},this.handleInteraction=o=>{const i=he.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=_t({form:o=>{const i=o.form;if(i){const n=o.getRootNode().querySelector(`#${i}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),he.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),he.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Wt.has(this.form)?Wt.get(this.form).add(this.host):Wt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Gt.has(this.form)||(Gt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Wt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form)),Gt.has(this.form)&&(this.form.checkValidity=Gt.get(this.form),Gt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Me.add(t):Me.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Me.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},po=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ne(_t({},po),{valid:!1,valueMissing:!0}));Object.freeze(ne(_t({},po),{valid:!1,customError:!0}));var vr=T`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,mo=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},yr=T`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,wr={name:"default",resolver:t=>Di(`assets/icons/${t}.svg`)},xr=wr,Bo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},_r={name:"system",resolver:t=>t in Bo?`data:image/svg+xml,${encodeURIComponent(Bo[t])}`:""},$r=_r,kr=[xr,$r],Ke=[];function Cr(t){Ke.push(t)}function Ar(t){Ke=Ke.filter(e=>e!==t)}function No(t){return kr.find(e=>e.name===t)}function R(t,e){const o=_t({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i,s=Array.isArray(t)?t:[t];i.update=function(l){s.forEach(a=>{const h=a;if(l.has(h)){const c=l.get(h),u=this[h];c!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](c,u)}}),n.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Er}=lr,Sr=(t,e)=>t?._$litType$!==void 0,Pr=t=>t.strings===void 0,Do=()=>document.createComment(""),Yt=(t,e,o)=>{const i=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(o===void 0){const n=i.insertBefore(Do(),r),s=i.insertBefore(Do(),r);o=new Er(n,s,t,t.options)}else{const n=o._$AB.nextSibling,s=o._$AM,l=s!==t;if(l){let a;o._$AQ?.(t),o._$AM=t,o._$AP!==void 0&&(a=t._$AU)!==s._$AU&&o._$AP(a)}if(n!==r||l){let a=o._$AA;for(;a!==n;){const h=a.nextSibling;i.insertBefore(a,r),a=h}}}return o},Ct=(t,e,o=t)=>(t._$AI(e,o),t),zr={},_i=(t,e=zr)=>t._$AH=e,Tr=t=>t._$AH,Be=t=>{t._$AP?.(!1,!0);let e=t._$AA;const o=t._$AB.nextSibling;for(;e!==o;){const i=e.nextSibling;e.remove(),e=i}};var Zt=Symbol(),ue=Symbol(),Ne,De=new Map,H=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Zt:ue}catch{return ue}try{const r=document.createElement("div");r.innerHTML=await i.text();const n=r.firstElementChild;if(((o=n?.tagName)==null?void 0:o.toLowerCase())!=="svg")return Zt;Ne||(Ne=new DOMParser);const l=Ne.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Zt}catch{return Zt}}connectedCallback(){super.connectedCallback(),Cr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ar(this)}getIconSource(){const t=No(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?No(this.library):void 0;if(!e){this.svg=null;return}let r=De.get(e);if(r||(r=this.resolveIcon(e,i),De.set(e,r)),!this.initialRender)return;const n=await r;if(n===ue&&De.delete(e),e===this.getIconSource().url){if(Sr(n)){if(this.svg=n,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(n){case ue:case Zt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};H.styles=[K,yr];d([k()],H.prototype,"svg",2);d([m({reflect:!0})],H.prototype,"name",2);d([m()],H.prototype,"src",2);d([m()],H.prototype,"label",2);d([m({reflect:!0})],H.prototype,"library",2);d([R("label")],H.prototype,"handleLabelChange",1);d([R(["name","src","library"])],H.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fo=t=>(...e)=>({_$litDirective$:t,values:e});let bo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=fo(class extends bo{constructor(t){if(super(t),t.type!==gt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const o=t.element.classList;for(const i of this.st)i in e||(o.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return W}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=Symbol.for(""),Or=t=>{if(t?.r===$i)return t?._$litStatic$},we=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:$i}),Fo=new Map,Lr=t=>(e,...o)=>{const i=o.length;let r,n;const s=[],l=[];let a,h=0,c=!1;for(;h<i;){for(a=e[h];h<i&&(n=o[h],(r=Or(n))!==void 0);)a+=r+e[++h],c=!0;h!==i&&l.push(n),s.push(a),h++}if(h===i&&s.push(e[i]),c){const u=s.join("$$lit$$");(e=Fo.get(u))===void 0&&(s.raw=s,Fo.set(u,e=s)),o=l}return t(e,...o)},be=Lr(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>t??z;var _=class extends M{constructor(){super(...arguments),this.formControlController=new xi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new mo(this,"[default]","prefix","suffix"),this.localize=new $t(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:po}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?we`a`:we`button`;return be`
      <${e}
        part="base"
        class=${rt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(t?void 0:this.disabled)}
        type=${E(t?void 0:this.type)}
        title=${this.title}
        name=${E(t?void 0:this.name)}
        value=${E(t?void 0:this.value)}
        href=${E(t&&!this.disabled?this.href:void 0)}
        target=${E(t?this.target:void 0)}
        download=${E(t?this.download:void 0)}
        rel=${E(t?this.rel:void 0)}
        role=${E(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?be` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?be`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};_.styles=[K,vr];_.dependencies={"sl-icon":H,"sl-spinner":uo};d([P(".button")],_.prototype,"button",2);d([k()],_.prototype,"hasFocus",2);d([k()],_.prototype,"invalid",2);d([m()],_.prototype,"title",2);d([m({reflect:!0})],_.prototype,"variant",2);d([m({reflect:!0})],_.prototype,"size",2);d([m({type:Boolean,reflect:!0})],_.prototype,"caret",2);d([m({type:Boolean,reflect:!0})],_.prototype,"disabled",2);d([m({type:Boolean,reflect:!0})],_.prototype,"loading",2);d([m({type:Boolean,reflect:!0})],_.prototype,"outline",2);d([m({type:Boolean,reflect:!0})],_.prototype,"pill",2);d([m({type:Boolean,reflect:!0})],_.prototype,"circle",2);d([m()],_.prototype,"type",2);d([m()],_.prototype,"name",2);d([m()],_.prototype,"value",2);d([m()],_.prototype,"href",2);d([m()],_.prototype,"target",2);d([m()],_.prototype,"rel",2);d([m()],_.prototype,"download",2);d([m()],_.prototype,"form",2);d([m({attribute:"formaction"})],_.prototype,"formAction",2);d([m({attribute:"formenctype"})],_.prototype,"formEnctype",2);d([m({attribute:"formmethod"})],_.prototype,"formMethod",2);d([m({attribute:"formnovalidate",type:Boolean})],_.prototype,"formNoValidate",2);d([m({attribute:"formtarget"})],_.prototype,"formTarget",2);d([R("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);_.define("sl-button");var Rr=T`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ut=class extends M{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,i=o-this.value/100*o;this.indicatorOffset=`${i}px`}}render(){return w`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ut.styles=[K,Rr];d([P(".progress-ring__indicator")],Ut.prototype,"indicator",2);d([k()],Ut.prototype,"indicatorOffset",2);d([m({type:Number,reflect:!0})],Ut.prototype,"value",2);d([m()],Ut.prototype,"label",2);Ut.define("sl-progress-ring");const Ir=T`
    :host {
        font-family: var(--body-font);
        background-color: var(--sl-color-neutral-0);
    }

    header {
        padding: 4px 12px;
        border-bottom: 1px solid silver;
        height: 60px;
        display: flex;
        align-items: center;
    }

    img {
        max-height: 50px;
        width: auto;
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 12px;
        height: fit-content;
        font-size: 28px;
        margin-bottom: 4px;
        margin-top: 0;
        padding-left: 12px;
    }

    .subtitle {
        font-size: 1em;
        margin: 8px;
    }

    sl-progress-ring {
        --size: 20px;

        @media (max-width: 768px) {
            /** On mobile, move the progress ring up a bit to take up less vertical space from the text */
            margin-top: -250px;
        }
    }
`,le=T`
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title-font);
  }

  p {
    font-family: var(--body-font);
  }

  .d-flex {
    display: flex;
  }

  .d-none {
    display: none;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-items-center {
    align-items: center;
  }

  .align-items-baseline {
    align-items: baseline;
  }

  .justify-content-space-between {
    justify-content: space-between;
  }

  .gap-1 {
    gap: 1em;
  }

  .gap-2 {
    gap: 2em;
  }

  .gap-3 {
    gap: 3em;
  }

  .gap-4 {
    gap: 4em;
  }

  .text-success {
    color: #5D956F;
  }

  .text-danger {
    color: #802F3E;
  }

  .text-warning {
    color: #D4896C;
  }
`;var Mr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Nr=(t,e,o,i)=>{for(var r=i>1?void 0:i?Br(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&Mr(e,o,r),r};let Ge=class extends ot{render(){return w`
			<header>
				<img src="/assets/icons/logo-128x128.png" alt="Etz Mitzvot logo" />
				<h1>
					<span>Etz Mitzvot</span>
					<span lang="he">עץ מצוות</span>
				</h1>
			</header>
		`}};Ge.styles=[Ir,le];Ge=Nr([ae("app-header")],Ge);var Dr=T`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fr=T`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const yt=Math.min,U=Math.max,xe=Math.round,pe=Math.floor,it=t=>({x:t,y:t}),Ur={left:"right",right:"left",bottom:"top",top:"bottom"},Vr={start:"end",end:"start"};function Ye(t,e,o){return U(t,yt(e,o))}function Vt(t,e){return typeof t=="function"?t(e):t}function wt(t){return t.split("-")[0]}function Ht(t){return t.split("-")[1]}function ki(t){return t==="x"?"y":"x"}function go(t){return t==="y"?"height":"width"}function zt(t){return["top","bottom"].includes(wt(t))?"y":"x"}function vo(t){return ki(zt(t))}function Hr(t,e,o){o===void 0&&(o=!1);const i=Ht(t),r=vo(t),n=go(r);let s=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=_e(s)),[s,_e(s)]}function qr(t){const e=_e(t);return[Ze(t),e,Ze(e)]}function Ze(t){return t.replace(/start|end/g,e=>Vr[e])}function jr(t,e,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?n:s;default:return[]}}function Wr(t,e,o,i){const r=Ht(t);let n=jr(wt(t),o==="start",i);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(Ze)))),n}function _e(t){return t.replace(/left|right|bottom|top/g,e=>Ur[e])}function Kr(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ci(t){return typeof t!="number"?Kr(t):{top:t,right:t,bottom:t,left:t}}function $e(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function Uo(t,e,o){let{reference:i,floating:r}=t;const n=zt(e),s=vo(e),l=go(s),a=wt(e),h=n==="y",c=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,f=i[l]/2-r[l]/2;let p;switch(a){case"top":p={x:c,y:i.y-r.height};break;case"bottom":p={x:c,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-r.width,y:u};break;default:p={x:i.x,y:i.y}}switch(Ht(e)){case"start":p[s]-=f*(o&&h?-1:1);break;case"end":p[s]+=f*(o&&h?-1:1);break}return p}const Gr=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let h=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:u}=Uo(h,i,a),f=i,p={},b=0;for(let g=0;g<l.length;g++){const{name:y,fn:v}=l[g],{x,y:$,data:O,reset:A}=await v({x:c,y:u,initialPlacement:i,placement:f,strategy:r,middlewareData:p,rects:h,platform:s,elements:{reference:t,floating:e}});c=x??c,u=$??u,p={...p,[y]:{...p[y],...O}},A&&b<=50&&(b++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(h=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:c,y:u}=Uo(h,f,a)),g=-1)}return{x:c,y:u,placement:f,strategy:r,middlewareData:p}};async function yo(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=Vt(e,t),b=Ci(p),y=l[f?u==="floating"?"reference":"floating":u],v=$e(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(y)))==null||o?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:h,rootBoundary:c,strategy:a})),x=u==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,$=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),O=await(n.isElement==null?void 0:n.isElement($))?await(n.getScale==null?void 0:n.getScale($))||{x:1,y:1}:{x:1,y:1},A=$e(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:$,strategy:a}):x);return{top:(v.top-A.top+b.top)/O.y,bottom:(A.bottom-v.bottom+b.bottom)/O.y,left:(v.left-A.left+b.left)/O.x,right:(A.right-v.right+b.right)/O.x}}const Yr=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:h,padding:c=0}=Vt(t,e)||{};if(h==null)return{};const u=Ci(c),f={x:o,y:i},p=vo(r),b=go(p),g=await s.getDimensions(h),y=p==="y",v=y?"top":"left",x=y?"bottom":"right",$=y?"clientHeight":"clientWidth",O=n.reference[b]+n.reference[p]-f[p]-n.floating[b],A=f[p]-n.reference[p],j=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h));let Y=j?j[$]:0;(!Y||!await(s.isElement==null?void 0:s.isElement(j)))&&(Y=l.floating[$]||n.floating[b]);const at=O/2-A/2,Q=Y/2-g[b]/2-1,Z=yt(u[v],Q),ut=yt(u[x],Q),tt=Z,pt=Y-g[b]-ut,B=Y/2-g[b]/2+at,Lt=Ye(tt,B,pt),lt=!a.arrow&&Ht(r)!=null&&B!==Lt&&n.reference[b]/2-(B<tt?Z:ut)-g[b]/2<0,et=lt?B<tt?B-tt:B-pt:0;return{[p]:f[p]+et,data:{[p]:Lt,centerOffset:B-Lt-et,...lt&&{alignmentOffset:et}},reset:lt}}}),Zr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:h}=e,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...y}=Vt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const v=wt(r),x=zt(l),$=wt(l)===l,O=await(a.isRTL==null?void 0:a.isRTL(h.floating)),A=f||($||!g?[_e(l)]:qr(l)),j=b!=="none";!f&&j&&A.push(...Wr(l,g,b,O));const Y=[l,...A],at=await yo(e,y),Q=[];let Z=((i=n.flip)==null?void 0:i.overflows)||[];if(c&&Q.push(at[v]),u){const B=Hr(r,s,O);Q.push(at[B[0]],at[B[1]])}if(Z=[...Z,{placement:r,overflows:Q}],!Q.every(B=>B<=0)){var ut,tt;const B=(((ut=n.flip)==null?void 0:ut.index)||0)+1,Lt=Y[B];if(Lt)return{data:{index:B,overflows:Z},reset:{placement:Lt}};let lt=(tt=Z.filter(et=>et.overflows[0]<=0).sort((et,mt)=>et.overflows[1]-mt.overflows[1])[0])==null?void 0:tt.placement;if(!lt)switch(p){case"bestFit":{var pt;const et=(pt=Z.filter(mt=>{if(j){const ft=zt(mt.placement);return ft===x||ft==="y"}return!0}).map(mt=>[mt.placement,mt.overflows.filter(ft=>ft>0).reduce((ft,Ni)=>ft+Ni,0)]).sort((mt,ft)=>mt[1]-ft[1])[0])==null?void 0:pt[0];et&&(lt=et);break}case"initialPlacement":lt=l;break}if(r!==lt)return{reset:{placement:lt}}}return{}}}};async function Jr(t,e){const{placement:o,platform:i,elements:r}=t,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=wt(o),l=Ht(o),a=zt(o)==="y",h=["left","top"].includes(s)?-1:1,c=n&&a?-1:1,u=Vt(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof b=="number"&&(p=l==="end"?b*-1:b),a?{x:p*c,y:f*h}:{x:f*h,y:p*c}}const Xr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:n,placement:s,middlewareData:l}=e,a=await Jr(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:r+a.x,y:n+a.y,data:{...a,placement:s}}}}},Qr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:v,y:x}=y;return{x:v,y:x}}},...a}=Vt(t,e),h={x:o,y:i},c=await yo(e,a),u=zt(wt(r)),f=ki(u);let p=h[f],b=h[u];if(n){const y=f==="y"?"top":"left",v=f==="y"?"bottom":"right",x=p+c[y],$=p-c[v];p=Ye(x,p,$)}if(s){const y=u==="y"?"top":"left",v=u==="y"?"bottom":"right",x=b+c[y],$=b-c[v];b=Ye(x,b,$)}const g=l.fn({...e,[f]:p,[u]:b});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[f]:n,[u]:s}}}}}},tn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...h}=Vt(t,e),c=await yo(e,h),u=wt(r),f=Ht(r),p=zt(r)==="y",{width:b,height:g}=n.floating;let y,v;u==="top"||u==="bottom"?(y=u,v=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(v=u,y=f==="end"?"top":"bottom");const x=g-c.top-c.bottom,$=b-c.left-c.right,O=yt(g-c[y],x),A=yt(b-c[v],$),j=!e.middlewareData.shift;let Y=O,at=A;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(at=$),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(Y=x),j&&!f){const Z=U(c.left,0),ut=U(c.right,0),tt=U(c.top,0),pt=U(c.bottom,0);p?at=b-2*(Z!==0||ut!==0?Z+ut:U(c.left,c.right)):Y=g-2*(tt!==0||pt!==0?tt+pt:U(c.top,c.bottom))}await a({...e,availableWidth:at,availableHeight:Y});const Q=await s.getDimensions(l.floating);return b!==Q.width||g!==Q.height?{reset:{rects:!0}}:{}}}};function Pe(){return typeof window<"u"}function qt(t){return Ai(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(Ai(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ai(t){return Pe()?t instanceof Node||t instanceof V(t).Node:!1}function J(t){return Pe()?t instanceof Element||t instanceof V(t).Element:!1}function nt(t){return Pe()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function Vo(t){return!Pe()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}function ce(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function en(t){return["table","td","th"].includes(qt(t))}function ze(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Te(t){const e=wo(),o=J(t)?X(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function on(t){let e=xt(t);for(;nt(e)&&!Nt(e);){if(Te(e))return e;if(ze(e))return null;e=xt(e)}return null}function wo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Nt(t){return["html","body","#document"].includes(qt(t))}function X(t){return V(t).getComputedStyle(t)}function Oe(t){return J(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function xt(t){if(qt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vo(t)&&t.host||st(t);return Vo(e)?e.host:e}function Ei(t){const e=xt(t);return Nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:nt(e)&&ce(e)?e:Ei(e)}function re(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Ei(t),n=r===((i=t.ownerDocument)==null?void 0:i.body),s=V(r);if(n){const l=Je(s);return e.concat(s,s.visualViewport||[],ce(r)?r:[],l&&o?re(l):[])}return e.concat(r,re(r,[],o))}function Je(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Si(t){const e=X(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=nt(t),n=r?t.offsetWidth:o,s=r?t.offsetHeight:i,l=xe(o)!==n||xe(i)!==s;return l&&(o=n,i=s),{width:o,height:i,$:l}}function xo(t){return J(t)?t:t.contextElement}function Mt(t){const e=xo(t);if(!nt(e))return it(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:n}=Si(e);let s=(n?xe(o.width):o.width)/i,l=(n?xe(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const rn=it(0);function Pi(t){const e=V(t);return!wo()||!e.visualViewport?rn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function nn(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==V(t)?!1:e}function Tt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),n=xo(t);let s=it(1);e&&(i?J(i)&&(s=Mt(i)):s=Mt(t));const l=nn(n,o,i)?Pi(n):it(0);let a=(r.left+l.x)/s.x,h=(r.top+l.y)/s.y,c=r.width/s.x,u=r.height/s.y;if(n){const f=V(n),p=i&&J(i)?V(i):i;let b=f,g=Je(b);for(;g&&i&&p!==b;){const y=Mt(g),v=g.getBoundingClientRect(),x=X(g),$=v.left+(g.clientLeft+parseFloat(x.paddingLeft))*y.x,O=v.top+(g.clientTop+parseFloat(x.paddingTop))*y.y;a*=y.x,h*=y.y,c*=y.x,u*=y.y,a+=$,h+=O,b=V(g),g=Je(b)}}return $e({width:c,height:u,x:a,y:h})}function _o(t,e){const o=Oe(t).scrollLeft;return e?e.left+o:Tt(st(t)).left+o}function zi(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(o?0:_o(t,i)),n=i.top+e.scrollTop;return{x:r,y:n}}function sn(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const n=r==="fixed",s=st(i),l=e?ze(e.floating):!1;if(i===s||l&&n)return o;let a={scrollLeft:0,scrollTop:0},h=it(1);const c=it(0),u=nt(i);if((u||!u&&!n)&&((qt(i)!=="body"||ce(s))&&(a=Oe(i)),nt(i))){const p=Tt(i);h=Mt(i),c.x=p.x+i.clientLeft,c.y=p.y+i.clientTop}const f=s&&!u&&!n?zi(s,a,!0):it(0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-a.scrollLeft*h.x+c.x+f.x,y:o.y*h.y-a.scrollTop*h.y+c.y+f.y}}function an(t){return Array.from(t.getClientRects())}function ln(t){const e=st(t),o=Oe(t),i=t.ownerDocument.body,r=U(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=U(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+_o(t);const l=-o.scrollTop;return X(i).direction==="rtl"&&(s+=U(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:s,y:l}}function cn(t,e){const o=V(t),i=st(t),r=o.visualViewport;let n=i.clientWidth,s=i.clientHeight,l=0,a=0;if(r){n=r.width,s=r.height;const h=wo();(!h||h&&e==="fixed")&&(l=r.offsetLeft,a=r.offsetTop)}return{width:n,height:s,x:l,y:a}}function dn(t,e){const o=Tt(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,n=nt(t)?Mt(t):it(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=r*n.x,h=i*n.y;return{width:s,height:l,x:a,y:h}}function Ho(t,e,o){let i;if(e==="viewport")i=cn(t,o);else if(e==="document")i=ln(st(t));else if(J(e))i=dn(e,o);else{const r=Pi(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return $e(i)}function Ti(t,e){const o=xt(t);return o===e||!J(o)||Nt(o)?!1:X(o).position==="fixed"||Ti(o,e)}function hn(t,e){const o=e.get(t);if(o)return o;let i=re(t,[],!1).filter(l=>J(l)&&qt(l)!=="body"),r=null;const n=X(t).position==="fixed";let s=n?xt(t):t;for(;J(s)&&!Nt(s);){const l=X(s),a=Te(s);!a&&l.position==="fixed"&&(r=null),(n?!a&&!r:!a&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ce(s)&&!a&&Ti(t,s))?i=i.filter(c=>c!==s):r=l,s=xt(s)}return e.set(t,i),i}function un(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const s=[...o==="clippingAncestors"?ze(e)?[]:hn(e,this._c):[].concat(o),i],l=s[0],a=s.reduce((h,c)=>{const u=Ho(e,c,r);return h.top=U(u.top,h.top),h.right=yt(u.right,h.right),h.bottom=yt(u.bottom,h.bottom),h.left=U(u.left,h.left),h},Ho(e,l,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function pn(t){const{width:e,height:o}=Si(t);return{width:e,height:o}}function mn(t,e,o){const i=nt(e),r=st(e),n=o==="fixed",s=Tt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=it(0);if(i||!i&&!n)if((qt(e)!=="body"||ce(r))&&(l=Oe(e)),i){const f=Tt(e,!0,n,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else r&&(a.x=_o(r));const h=r&&!i&&!n?zi(r,l):it(0),c=s.left+l.scrollLeft-a.x-h.x,u=s.top+l.scrollTop-a.y-h.y;return{x:c,y:u,width:s.width,height:s.height}}function Fe(t){return X(t).position==="static"}function qo(t,e){if(!nt(t)||X(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return st(t)===o&&(o=o.ownerDocument.body),o}function Oi(t,e){const o=V(t);if(ze(t))return o;if(!nt(t)){let r=xt(t);for(;r&&!Nt(r);){if(J(r)&&!Fe(r))return r;r=xt(r)}return o}let i=qo(t,e);for(;i&&en(i)&&Fe(i);)i=qo(i,e);return i&&Nt(i)&&Fe(i)&&!Te(i)?o:i||on(t)||o}const fn=async function(t){const e=this.getOffsetParent||Oi,o=this.getDimensions,i=await o(t.floating);return{reference:mn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function bn(t){return X(t).direction==="rtl"}const ge={convertOffsetParentRelativeRectToViewportRelativeRect:sn,getDocumentElement:st,getClippingRect:un,getOffsetParent:Oi,getElementRects:fn,getClientRects:an,getDimensions:pn,getScale:Mt,isElement:J,isRTL:bn};function gn(t,e){let o=null,i;const r=st(t);function n(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),n();const{left:h,top:c,width:u,height:f}=t.getBoundingClientRect();if(l||e(),!u||!f)return;const p=pe(c),b=pe(r.clientWidth-(h+u)),g=pe(r.clientHeight-(c+f)),y=pe(h),x={rootMargin:-p+"px "+-b+"px "+-g+"px "+-y+"px",threshold:U(0,yt(1,a))||1};let $=!0;function O(A){const j=A[0].intersectionRatio;if(j!==a){if(!$)return s();j?s(!1,j):i=setTimeout(()=>{s(!1,1e-7)},1e3)}$=!1}try{o=new IntersectionObserver(O,{...x,root:r.ownerDocument})}catch{o=new IntersectionObserver(O,x)}o.observe(t)}return s(!0),n}function vn(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,h=xo(t),c=r||n?[...h?re(h):[],...re(e)]:[];c.forEach(v=>{r&&v.addEventListener("scroll",o,{passive:!0}),n&&v.addEventListener("resize",o)});const u=h&&l?gn(h,o):null;let f=-1,p=null;s&&(p=new ResizeObserver(v=>{let[x]=v;x&&x.target===h&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var $;($=p)==null||$.observe(e)})),o()}),h&&!a&&p.observe(h),p.observe(e));let b,g=a?Tt(t):null;a&&y();function y(){const v=Tt(t);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&o(),g=v,b=requestAnimationFrame(y)}return o(),()=>{var v;c.forEach(x=>{r&&x.removeEventListener("scroll",o),n&&x.removeEventListener("resize",o)}),u?.(),(v=p)==null||v.disconnect(),p=null,a&&cancelAnimationFrame(b)}}const yn=Xr,wn=Qr,xn=Zr,jo=tn,_n=Yr,$n=(t,e,o)=>{const i=new Map,r={platform:ge,...o},n={...r.platform,_c:i};return Gr(t,e,{...r,platform:n})};function kn(t){return Cn(t)}function Ue(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Cn(t){for(let e=t;e;e=Ue(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Ue(t);e;e=Ue(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||Te(o)||e.tagName==="BODY"))return e}return null}function An(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends M{constructor(){super(...arguments),this.localize=new $t(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,s=0,l=0,a=0,h=0,c=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,s=t.bottom,l=e.left,a=e.top,h=e.right,c=e.top):(i=e.left,r=e.bottom,n=e.right,s=e.bottom,l=t.left,a=t.top,h=t.right,c=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,s=e.top,l=t.right,a=t.bottom,h=e.left,c=e.bottom):(i=e.right,r=e.top,n=t.left,s=t.top,l=e.right,a=e.bottom,h=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||An(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=vn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[yn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(jo({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(xn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(wn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(jo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(_n({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>ge.getOffsetParent(o,kn):ge.getOffsetParent;$n(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ne(_t({},ge),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const a=r.arrow.x,h=r.arrow.y;let c="",u="",f="",p="";if(this.arrowPlacement==="start"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?b:"",p=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":b,p=s?b:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof a=="number"?`${a}px`:"",c=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:c,right:u,bottom:f,left:p,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[K,Fr];d([P(".popup")],C.prototype,"popup",2);d([P(".popup__arrow")],C.prototype,"arrowEl",2);d([m()],C.prototype,"anchor",2);d([m({type:Boolean,reflect:!0})],C.prototype,"active",2);d([m({reflect:!0})],C.prototype,"placement",2);d([m({reflect:!0})],C.prototype,"strategy",2);d([m({type:Number})],C.prototype,"distance",2);d([m({type:Number})],C.prototype,"skidding",2);d([m({type:Boolean})],C.prototype,"arrow",2);d([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);d([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);d([m({type:Boolean})],C.prototype,"flip",2);d([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);d([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);d([m({type:Object})],C.prototype,"flipBoundary",2);d([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);d([m({type:Boolean})],C.prototype,"shift",2);d([m({type:Object})],C.prototype,"shiftBoundary",2);d([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);d([m({attribute:"auto-size"})],C.prototype,"autoSize",2);d([m()],C.prototype,"sync",2);d([m({type:Object})],C.prototype,"autoSizeBoundary",2);d([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);d([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Li=new Map,En=new WeakMap;function Sn(t){return t??{keyframes:[],options:{duration:0}}}function Wo(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function N(t,e){Li.set(t,Sn(e))}function dt(t,e,o){const i=En.get(t);if(i?.[e])return Wo(i[e],o.dir);const r=Li.get(e);return r?Wo(r,o.dir):{keyframes:[],options:{duration:0}}}function ke(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function ht(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,ne(_t({},o),{duration:Pn()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Ko(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Pn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}function Go(t,e){return t.map(o=>ne(_t({},o),{height:o.height==="auto"?`${e}px`:o.height}))}var I=class extends M{constructor(){super(),this.localize=new $t(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ko(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ko(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await vt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=dt(this,"tooltip.show",{dir:this.localize.dir()});await ht(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await vt(this.body);const{keyframes:o,options:i}=dt(this,"tooltip.hide",{dir:this.localize.dir()});await ht(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ke(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};I.styles=[K,Dr];I.dependencies={"sl-popup":C};d([P("slot:not([name])")],I.prototype,"defaultSlot",2);d([P(".tooltip__body")],I.prototype,"body",2);d([P("sl-popup")],I.prototype,"popup",2);d([m()],I.prototype,"content",2);d([m()],I.prototype,"placement",2);d([m({type:Boolean,reflect:!0})],I.prototype,"disabled",2);d([m({type:Number})],I.prototype,"distance",2);d([m({type:Boolean,reflect:!0})],I.prototype,"open",2);d([m({type:Number})],I.prototype,"skidding",2);d([m()],I.prototype,"trigger",2);d([m({type:Boolean})],I.prototype,"hoist",2);d([R("open",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpenChange",1);d([R(["content","distance","hoist","placement","skidding"])],I.prototype,"handleOptionsChange",1);d([R("disabled")],I.prototype,"handleDisabledChange",1);N("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});N("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});I.define("sl-tooltip");var zn=T`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,F=class extends M{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?we`a`:we`button`;return be`
      <${e}
        part="base"
        class=${rt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${E(t?void 0:this.disabled)}
        type=${E(t?void 0:"button")}
        href=${E(t?this.href:void 0)}
        target=${E(t?this.target:void 0)}
        download=${E(t?this.download:void 0)}
        rel=${E(t&&this.target?"noreferrer noopener":void 0)}
        role=${E(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${E(this.name)}
          library=${E(this.library)}
          src=${E(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[K,zn];F.dependencies={"sl-icon":H};d([P(".icon-button")],F.prototype,"button",2);d([k()],F.prototype,"hasFocus",2);d([m()],F.prototype,"name",2);d([m()],F.prototype,"library",2);d([m()],F.prototype,"src",2);d([m()],F.prototype,"href",2);d([m()],F.prototype,"target",2);d([m()],F.prototype,"download",2);d([m()],F.prototype,"label",2);d([m({type:Boolean,reflect:!0})],F.prototype,"disabled",2);F.define("sl-icon-button");H.define("sl-icon");const Tn=T`
    :host {
        color: var(--sl-color-gray-500);
    }

    aside {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-width: 300px;
        padding: 24px;

        &.collapsed {
            max-width: unset;
            padding: 24px 6px 0 6px;
        }
    }

    h1 {
        color: var(--sl-color-gray-500);
        border-bottom: 1px solid var(--sl-color-gray-300);
        padding-bottom: 12px;
        margin-top: 0px;
    }

    ul {
        padding-left: 20px;
    }

    .stat {
        display: flex;
        gap: 12px;
    }

    sl-progress-ring {
        --size: 100px;

        font-size: 0.8em;
    }

    .collapse-btn {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;class Yo{constructor(e){this.children=[],this.parentCommmandmentNumber=null,this.hiddenChildren=null,this.x=0,this.y=0,this.x0=0,this.y0=0,this.depth=0,this.commandmentNumber=e.commandmentNumber||0,this.book=e.book||"Genesis",this.chapter=e.chapter||0,this.verse=e.verse||0,this.type=e.type||"positive",this.christianObservance=e.christianObservance||"none",this.messianicObservance=e.messianicObservance||"none",this.jewishObservance=e.jewishObservance||"none",this.shortSummary=e.shortSummary||"",this.text=e.text||"",this.canBeCarriedOutToday=e.canBeCarriedOutToday||!1,this.requiresLivingInIsrael=e.requiresLivingInIsrael||!1,this.requiresTemple=e.requiresTemple||!1,this.commentary=e.commentary,this.commentaryUrl=e.commentaryUrl,this.parentCommmandmentNumber=e.parent||null}getBookChapterVerse(){return`${this.getBookAbbreviation()} ${this.chapter}:${this.verse}`}getBookAbbreviation(){switch(this.book){case"Genesis":return"Gen.";case"Exodus":return"Ex.";case"Leviticus":return"Lev.";case"Numbers":return"Num.";case"Deuteronomy":return"Deut.";default:return""}}getShortSummaryParts(){if(this.shortSummary.length<=20)return[this.shortSummary];const o=this.shortSummary.indexOf(" ",20);return o===-1?[this.shortSummary]:[this.shortSummary.substring(0,o),this.shortSummary.substring(o+1)]}getObservanceText(e,o){return o==="none"?`<span class="text-danger">Disregarded. ${e} do not keep it.</span>`:o==="recognized"?`<span class="text-warning">Recognized. ${e} recognize it as binding, but do not widely practice it.</span>`:o==="recognizedButPrevented"?`<span class="text-warning">Accepted. ${e} consider it binding, but can't practice it for external reasons.</span>`:`<span class="text-success">Binding. ${e} consider it binding and widely practice it.</span>`}get isExpanded(){return this.hiddenChildren===null}set isExpanded(e){e&&this.hiddenChildren!=null&&this.hiddenChildren.length?(this.children=this.hiddenChildren,this.hiddenChildren=null):!e&&!this.hiddenChildren&&(this.hiddenChildren=this.children,this.children=[])}getAncestor(e){let o=this.parent;for(;o;){if(o.commandmentNumber===e)return o;o=o.parent}return null}getDescendant(e){const o=this.children||[];for(;o.length>0;){const i=o.splice(0,1)[0];if(i.commandmentNumber===e)return i;o.push(...i.children||[])}return null}getSibling(e){return(this.parent?.children||[]).find(i=>i.commandmentNumber===e)||null}}class On{constructor(){this.mitzvotFetch=null}async getCommandments(){return this.mitzvotFetch||(this.mitzvotFetch=this.fetchMitzvot()),this.mitzvotFetch}async getRootCommandments(){return(await this.getCommandments()).filter(o=>!o.parentCommmandmentNumber)}async fetchMitzvot(){const e=`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`,o=await fetch(`/mitzvot.json?v=${e}`);if(!o.ok)throw new Error(`Failed to fetch mitzvot.json: ${o.statusText}`);const i=await o.json();if(i.length===0)throw new Error("mitzvot.json appears to contain an empty array.");const r=new Map;return i.forEach(n=>r.set(n.commandmentNumber,new Yo(n))),r.forEach(n=>{const s=n.parentCommmandmentNumber?r.get(n.parentCommmandmentNumber):null;s&&s.children.push(n)}),Array.from(r.values())}getGreatestCommandmentPlaceholder(){return new Yo({book:"Genesis",chapter:0,verse:0,canBeCarriedOutToday:!0,christianObservance:"binding",commandmentNumber:0,commentary:"",commentaryUrl:"",jewishObservance:"binding",messianicObservance:"binding",parent:null,requiresLivingInIsrael:!1,requiresTemple:!1,shortSummary:"The Greatest Commandments",text:"",type:"positive"})}}var ve=new On,Ln=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,G=(t,e,o,i)=>{for(var r=i>1?void 0:i?Rn(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&Ln(e,o,r),r};let D=class extends ot{constructor(){super(...arguments),this.completionPercentage=0,this.completedCount=0,this.observedInJudaismPercentage=0,this.observedInChristianityPercentage=0,this.observedInMessianicJudaismPercentage=0,this.requireTemplePercentage=0,this.carriedOutAnywherePercentage=0,this.carriedOutTodayPercentage=0,this.positiveCmdPercentage=0,this.idolatryPercentage=0,this.sidebarCollapsed=!1,this.totalCommandmentCount=613}connectedCallback(){super.connectedCallback(),ve.getCommandments().then(t=>this.commandmentsLoaded(t))}render(){return w`
            <aside class="${this.sidebarCollapsed?"collapsed":""}">
                <div class="${this.sidebarCollapsed?"d-none":""}">
                    <div>
                        <div class="d-flex justify-content-space-between align-items-baseline">
                            <h1>A Visual Torah</h1>
                            <sl-tooltip content="Collapse the sidebar" style="font-size: 1.5em;">
                                <sl-icon-button class="collapse-btn" name="chevron-bar-right" @click="${this.toggleCollapse}"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                        <p>
                            An interactive visual map of every commandment in the
                            <abbr title="The Torah, the Law of Moses, is the first 5 books of the Hebrew Bible">Torah</abbr>.
                            Explore the Biblical commandments from a thousand-foot view. Inspired by the <a href="https://www.biblegateway.com/passage/?search=matt%2022%3A34-40&version=TLV" target="_blank">words of the rabbi</a> from Nazareth. <a href="https://blog.judahgabriel.com/2025/01/re-introducing-etzmitzvot.html">Learn more</a>.
                        </p>
                    </div>
                    <div>
                        <h1>Instructions</h1>
                        <ul>
                            <li><strong>Tap</strong> a commandment to view details about it</li>
                            <li><strong>Tap and drag</strong> to pan the commandments tree.</li>
                            <li><strong>Pinch or use mouse wheel</strong> to zoom the commandments tree.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Stats</h1>
                        <h3>Project status</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.completionPercentage}">
                                <div>${this.completionPercentage}% complete</div>
                            </sl-progress-ring>
                            <p>
                                <strong>EztMitzvot is a work in progress</strong>.  ${this.completedCount} of 613 commandments have been added to the tree. We <a href="https://blog.judahgabriel.com/search/label/commandments%20hierarchy" target="_blank">add more each week</a>.
                            </p>
                        </div>
                        <h3>Modern day</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.carriedOutTodayPercentage}">
                                ${this.carriedOutTodayPercentage}% <br > applicable <br> to today
                            </sl-progress-ring>
                            <p>Most commandments are able to be carried out in modern times.</p>
                        </div>
                        <h3>Location</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.carriedOutAnywherePercentage}">
                                ${this.carriedOutAnywherePercentage}% can be carried out <br>anywhere
                            </sl-progress-ring>
                            <p>Most commandments can be carried out anywhere, though some can only be carried out in Israel.</p>
                        </div>
                        <h3>Do's & Don'ts</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.positiveCmdPercentage}">
                                ${this.positiveCmdPercentage}% are <br> positive
                            </sl-progress-ring>
                            <p><sl-icon name="circle-fill" style="color: var(--tenakh-blue)"></sl-icon> Positive commandments</span> are imperatives to do something. <sl-icon name="circle-fill" style="color: var(--heifer-red)"></sl-icon> Negative commandments are prohibitions and forbidden actions.</p>
                        </div>
                        <h3>Temple</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.requireTemplePercentage}">
                                ${this.requireTemplePercentage}% require the Temple
                            </sl-progress-ring>
                            Some commandments can only be carried out in a Temple or Tabernacle with a functioning Levitical system.
                        </div>
                        <h3>Idolatry</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.idolatryPercentage}">
                                ${this.idolatryPercentage}% concern idolatry
                            </sl-progress-ring>
                            A significant number of commandments have to do with the prohibition against worshiping idols.
                        </div>
                        <h3>Religion</h3>
                        <div class="stat">
                            <div>
                                <sl-progress-ring value="${this.observedInJudaismPercentage}">
                                    ${this.observedInJudaismPercentage}% are observed in Orthodox Judaism
                                </sl-progress-ring>
                                <sl-progress-ring value="${this.observedInChristianityPercentage}">
                                    ${this.observedInChristianityPercentage}% are <br> observed in <br> Christianity
                                </sl-progress-ring>
                                <sl-progress-ring value="${this.observedInMessianicJudaismPercentage}">
                                    ${this.observedInMessianicJudaismPercentage}% are <br> observed in <br> Messianic Judaism
                                </sl-progress-ring>
                            </div>
                            <p>Of the commandments that are able to be carried out, Judaism and Christianity differ signficantly in their philosophies. Mainstream Christianity generally only keeps commandments having do to with ethics and morality, while Judaism tends to keep all commandments that don't require a functional Levitical priesthood.</i></p>
                        </div>
                    </div>
                </div>
                <div class="${this.sidebarCollapsed?"":"d-none"}">
                    <sl-tooltip content="Expand the sidebar" style="font-size: 1.5em;">
                        <sl-icon-button name="chevron-bar-left" @click="${this.toggleCollapse}"></sl-icon-button>
                    </sl-tooltip>
                </div>
            </aside>
        `}commandmentsLoaded(t){this.completedCount=t.length,this.completionPercentage=Math.floor(this.totalCommandmentCount/t.length),this.carriedOutTodayPercentage=Math.floor(100*t.filter(e=>e.canBeCarriedOutToday).length/t.length),this.carriedOutAnywherePercentage=Math.floor(100*t.filter(e=>!e.requiresLivingInIsrael).length/t.length),this.requireTemplePercentage=Math.floor(100*t.filter(e=>e.requiresTemple).length/t.length),this.observedInJudaismPercentage=Math.floor(100*t.filter(e=>e.jewishObservance==="binding").length/t.length),this.observedInChristianityPercentage=Math.floor(100*t.filter(e=>e.christianObservance==="binding").length/t.length),this.observedInMessianicJudaismPercentage=Math.floor(100*t.filter(e=>e.messianicObservance==="binding").length/t.length),this.idolatryPercentage=Math.floor(100*t.filter(e=>e.shortSummary.includes(" idol")).length/t.length),this.positiveCmdPercentage=Math.floor(100*t.filter(e=>e.type==="positive").length/t.length)}toggleCollapse(){this.sidebarCollapsed=!this.sidebarCollapsed}};D.styles=[Tn,le];G([k()],D.prototype,"completionPercentage",2);G([k()],D.prototype,"completedCount",2);G([k()],D.prototype,"observedInJudaismPercentage",2);G([k()],D.prototype,"observedInChristianityPercentage",2);G([k()],D.prototype,"observedInMessianicJudaismPercentage",2);G([k()],D.prototype,"requireTemplePercentage",2);G([k()],D.prototype,"carriedOutAnywherePercentage",2);G([k()],D.prototype,"carriedOutTodayPercentage",2);G([k()],D.prototype,"positiveCmdPercentage",2);G([k()],D.prototype,"idolatryPercentage",2);G([k()],D.prototype,"sidebarCollapsed",2);D=G([ae("app-sidebar")],D);const In="modulepreload",Mn=function(t){return"/"+t},Zo={},Ri=function(e,o,i){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");r=Promise.allSettled(o.map(a=>{if(a=Mn(a),a in Zo)return;Zo[a]=!0;const h=a.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":In,h||(u.as="script"),u.crossOrigin="",u.href=a,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return r.then(s=>{for(const l of s||[])l.status==="rejected"&&n(l.reason);return e().catch(n)})},$o=Symbol.for("app-tools::log::1.x");globalThis[$o]={setDebug:Bn,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Bn(t){globalThis[$o].debug=!!t}function Nn(t,e){globalThis[$o].debug&&(console.groupCollapsed(`[app-tools] ${t}`),e&&console.log(e),console.groupEnd())}function Dn(t){return(e,o)=>{Nn(`${t}: ${e}`,o)}}const bt=Dn("router");class Fn extends Event{constructor(e){super("route-changed"),this.context=e}}class Un extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(e){super(),this.config=e,this.routes=e.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),bt("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return bt(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(e){for(const o of this.routes){const i=o.urlPattern.exec(e);if(i){const{title:r}=o,n=Object.fromEntries(new URLSearchParams(e.search)),s=i?.pathname?.groups??{};return this.context={url:e,title:typeof r=="function"?r({params:s,query:n,url:e}):r,params:s,query:n},o}}return bt(`No route matched for ${e.pathname}${e.search}${e.hash}`,e),null}_notifyUrlChanged(){this.dispatchEvent(new Fn(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const o=e.composedPath().find(n=>n.tagName==="A");if(!o||!o.href)return;const i=new URL(o.href);if(this.url.href===i.href||i.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const r=o.getAttribute("target");r&&r!==""&&r!=="_self"||(e.preventDefault(),this.navigate(i))};_collectPlugins(e){return[...this.config?.plugins??[],...e?.plugins??[]]}async navigate(e,o={}){typeof e=="string"&&(e=new URL(e,this.baseUrl));let i=this._matchRoute(e)||this._matchRoute(this.fallback);bt(`Navigating to ${e.pathname}${e.search}${e.hash}`,{context:this.context,route:this.route});let r=this._collectPlugins(i);for(const n of r)try{const s=await n?.shouldNavigate?.(this.context);s&&(await s.condition()||(e=new URL(s.redirect,this.baseUrl),i=this._matchRoute(e)||this._matchRoute(this.fallback),r=this._collectPlugins(i),bt("Redirecting",{context:this.context,route:this.route})))}catch(s){throw bt(`Plugin "${n.name}" error on shouldNavigate hook`,s),s}if(this.route=i,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${e}`);for(const n of r)try{await n?.beforeNavigation?.(this.context)}catch(s){throw bt(`Plugin "${n.name}" error on beforeNavigation hook`,s),s}o?.replace?window.history.replaceState(null,"",`${e.pathname}${e.search}${e.hash}`):o.backNav||window.history.pushState(null,"",`${e.pathname}${e.search}${e.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const n of r)try{await n?.afterNavigation?.(this.context)}catch(s){throw bt(`Plugin "${n.name}" error on afterNavigation hook`,s),s}}}function Vn(t){return{name:"lazy",beforeNavigation:()=>{t()}}}var Hn=T`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,de=class extends M{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Jt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Jt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Jt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Jt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=Jt(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",o===0),i.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return w`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};de.styles=[K,Hn];d([P("slot")],de.prototype,"defaultSlot",2);d([k()],de.prototype,"disableRole",2);d([m()],de.prototype,"label",2);function Jt(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}de.define("sl-button-group");var qn=T`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Jo=new WeakMap;function Ii(t){let e=Jo.get(t);return e||(e=window.getComputedStyle(t,null),Jo.set(t,e)),e}function jn(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ii(t);return e.visibility!=="hidden"&&e.display!=="none"}function Wn(t){const e=Ii(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Kn(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!jn(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Wn(t)}function Gn(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Xo(t){const e=new WeakMap,o=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!o.includes(r)&&Kn(r)&&o.push(r),r instanceof HTMLSlotElement&&Gn(r,t)&&r.assignedElements({flatten:!0}).forEach(n=>{i(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const n of r.children)i(n)}return i(t),o.sort((r,n)=>{const s=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}function*ko(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Yi(ko(t.shadowRoot.activeElement))))}function Yn(){return[...ko()].pop()}var Xt=[],Zn=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Yn();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Xo(this.element);let n=r.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){n+s>=r.length?n=0:n+s<0?n=r.length-1:n+=s,this.previousFocus=this.currentFocus;const l=r[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const a=[...ko()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Xt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Xt=Xt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Xt[Xt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Xo(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Xe=new Set;function Jn(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Xn(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ve(t){if(Xe.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Jn()+Xn();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function He(t){Xe.delete(t),Xe.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Qo(t){return t.charAt(0).toUpperCase()+t.slice(1)}var q=class extends M{constructor(){super(...arguments),this.hasSlotController=new mo(this,"footer"),this.localize=new $t(this),this.modal=new Zn(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ve(this)))}disconnectedCallback(){super.disconnectedCallback(),He(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=dt(this,"drawer.denyClose",{dir:this.localize.dir()});ht(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ve(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([vt(this.drawer),vt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=dt(this,`drawer.show${Qo(this.placement)}`,{dir:this.localize.dir()}),o=dt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ht(this.panel,e.keyframes,e.options),ht(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),He(this)),await Promise.all([vt(this.drawer),vt(this.overlay)]);const t=dt(this,`drawer.hide${Qo(this.placement)}`,{dir:this.localize.dir()}),e=dt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ht(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ht(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ve(this)),this.open&&this.contained&&(this.modal.deactivate(),He(this))}async show(){if(!this.open)return this.open=!0,ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ke(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${rt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};q.styles=[K,qn];q.dependencies={"sl-icon-button":F};d([P(".drawer")],q.prototype,"drawer",2);d([P(".drawer__panel")],q.prototype,"panel",2);d([P(".drawer__overlay")],q.prototype,"overlay",2);d([m({type:Boolean,reflect:!0})],q.prototype,"open",2);d([m({reflect:!0})],q.prototype,"label",2);d([m({reflect:!0})],q.prototype,"placement",2);d([m({type:Boolean,reflect:!0})],q.prototype,"contained",2);d([m({attribute:"no-header",type:Boolean,reflect:!0})],q.prototype,"noHeader",2);d([R("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);d([R("contained",{waitUntilFirstUpdate:!0})],q.prototype,"handleNoModalChange",1);N("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});N("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});N("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});N("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});N("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});N("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});N("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});N("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});N("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});N("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});N("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});q.define("sl-drawer");var Qn=T`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,ts=T`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,es=T`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,os=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,s,l){var a;const h=i.getPropertyOptions(t),c=typeof h.attribute=="string"?h.attribute:t;if(n===c){const u=h.converter||Bt,p=(typeof u=="function"?u:(a=u?.fromAttribute)!=null?a:Bt.fromAttribute)(l,h.type);this[t]!==p&&(this[o]=p)}r.call(this,n,s,l)}},is=T`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=fo(class extends bo{constructor(t){if(super(t),t.type!==gt.PROPERTY&&t.type!==gt.ATTRIBUTE&&t.type!==gt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===z)return e;const o=t.element,i=t.name;if(t.type===gt.PROPERTY){if(e===o[i])return W}else if(t.type===gt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return W}else if(t.type===gt.ATTRIBUTE&&o.getAttribute(i)===e+"")return W;return _i(t),e}});var L=class extends M{constructor(){super(...arguments),this.formControlController=new xi(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new mo(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return w`
      <div
        class=${rt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${rt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${E(this.value)}
            .indeterminate=${Qe(this.indeterminate)}
            .checked=${Qe(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?w`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?w`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};L.styles=[K,is,es];L.dependencies={"sl-icon":H};d([P('input[type="checkbox"]')],L.prototype,"input",2);d([k()],L.prototype,"hasFocus",2);d([m()],L.prototype,"title",2);d([m()],L.prototype,"name",2);d([m()],L.prototype,"value",2);d([m({reflect:!0})],L.prototype,"size",2);d([m({type:Boolean,reflect:!0})],L.prototype,"disabled",2);d([m({type:Boolean,reflect:!0})],L.prototype,"checked",2);d([m({type:Boolean,reflect:!0})],L.prototype,"indeterminate",2);d([os("checked")],L.prototype,"defaultChecked",2);d([m({reflect:!0})],L.prototype,"form",2);d([m({type:Boolean,reflect:!0})],L.prototype,"required",2);d([m({attribute:"help-text"})],L.prototype,"helpText",2);d([R("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);d([R(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],L.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ti(t,e,o){return t?e(t):o?.(t)}var S=class to extends M{constructor(){super(...arguments),this.localize=new $t(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await vt(this.childrenContainer);const{keyframes:e,options:o}=dt(this,"tree-item.collapse",{dir:this.localize.dir()});await ht(this.childrenContainer,Go(e,this.childrenContainer.scrollHeight),o),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&to.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await vt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:o}=dt(this,"tree-item.expand",{dir:this.localize.dir()});await ht(this.childrenContainer,Go(e,this.childrenContainer.scrollHeight),o),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(o=>to.isTreeItem(o)&&(e||!o.disabled)):[]}render(){const e=this.localize.dir()==="rtl",o=!this.loading&&(!this.isLeaf||this.lazy);return w`
      <div
        part="base"
        class="${rt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":o,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${rt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":o})}
            aria-hidden="true"
          >
            ${ti(this.loading,()=>w` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${ti(this.selectable,()=>w`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Qe(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};S.styles=[K,ts];S.dependencies={"sl-checkbox":L,"sl-icon":H,"sl-spinner":uo};d([k()],S.prototype,"indeterminate",2);d([k()],S.prototype,"isLeaf",2);d([k()],S.prototype,"loading",2);d([k()],S.prototype,"selectable",2);d([m({type:Boolean,reflect:!0})],S.prototype,"expanded",2);d([m({type:Boolean,reflect:!0})],S.prototype,"selected",2);d([m({type:Boolean,reflect:!0})],S.prototype,"disabled",2);d([m({type:Boolean,reflect:!0})],S.prototype,"lazy",2);d([P("slot:not([name])")],S.prototype,"defaultSlot",2);d([P("slot[name=children]")],S.prototype,"childrenSlot",2);d([P(".tree-item__item")],S.prototype,"itemElement",2);d([P(".tree-item__children")],S.prototype,"childrenContainer",2);d([P(".tree-item__expand-button slot")],S.prototype,"expandButtonSlot",2);d([R("loading",{waitUntilFirstUpdate:!0})],S.prototype,"handleLoadingChange",1);d([R("disabled")],S.prototype,"handleDisabledChange",1);d([R("selected")],S.prototype,"handleSelectedChange",1);d([R("expanded",{waitUntilFirstUpdate:!0})],S.prototype,"handleExpandedChange",1);d([R("expanded",{waitUntilFirstUpdate:!0})],S.prototype,"handleExpandAnimation",1);d([R("lazy",{waitUntilFirstUpdate:!0})],S.prototype,"handleLazyChange",1);var te=S;N("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});N("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function rs(t,e,o){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>o?i(o):i(t)}function ei(t,e=!1){function o(n){const s=n.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(h=>h.selected),a=s.every(h=>!h.selected&&!h.indeterminate);n.selected=l,n.indeterminate=!l&&!a}}function i(n){const s=n.parentElement;te.isTreeItem(s)&&(o(s),i(s))}function r(n){for(const s of n.getChildrenItems())s.selected=e?n.selected||s.selected:!s.disabled&&n.selected,r(s);e&&o(n)}r(t),i(t)}var Ot=class extends M{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new $t(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const o=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(o===null?t.append(i):o.hasAttribute("data-default")&&o.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const o=[...e.addedNodes].filter(te.isTreeItem),i=[...e.removedNodes].filter(te.isTreeItem);o.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),te.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const o=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(o){const i=o.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),ei(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const o=this.selectedItems;(e.length!==o.length||o.some(i=>!e.includes(i)))&&Promise.all(o.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:o}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var n;return["input","textarea"].includes((n=r?.tagName)==null?void 0:n.toLowerCase())}))return;const e=this.getFocusableItems(),o=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(a=>a.matches(":focus")),n=e[r],s=a=>{const h=e[rs(a,0,e.length-1)];this.focusItem(h)},l=a=>{n.expanded=a};t.key==="ArrowDown"?s(r+1):t.key==="ArrowUp"?s(r-1):o&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?s(r+1):l(!0):o&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!n||n.disabled||n.isLeaf||!n.expanded?s(r-1):l(!1):t.key==="Home"?s(0):t.key==="End"?s(e.length-1):(t.key==="Enter"||t.key===" ")&&(n.disabled||this.selectItem(n))}}handleClick(t){const e=t.target,o=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var n;return(n=r?.classList)==null?void 0:n.contains("tree-item__expand-button")});!o||o.disabled||e!==this.clickTarget||(i?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const o of e)o.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(o=>ei(o,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=o=>o.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(o=>{var i;if(o.disabled)return!1;const r=(i=o.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(o),!e.has(o)})}render(){return w`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ot.styles=[K,Qn];d([P("slot:not([name])")],Ot.prototype,"defaultSlot",2);d([P("slot[name=expand-icon]")],Ot.prototype,"expandedIconSlot",2);d([P("slot[name=collapse-icon]")],Ot.prototype,"collapsedIconSlot",2);d([m()],Ot.prototype,"selection",2);d([R("selection")],Ot.prototype,"handleSelectionChange",1);Ot.define("sl-tree");te.define("sl-tree-item");const ns=T`
    &::part(title) {
        font-family: var(--title-font);
    }

    blockquote {
        font-size: 18px;
        font-family: var(--title-font);
        max-height: 250px;
        overflow: auto;
        font-style: italic;
        background-color: #FBFBFA;
        padding: 20px;
        margin: 0;
        color: black;
        border-left: 5px solid var(--manuscript-gold);

        footer {
            color: #5d5d5d;
            font-family: var(--body-font);
            font-style: normal;
            font-size: 14px;
            margin-top: 10px;
        }
    }

    .commandment-attributes-group {
        margin-top: 24px;
        cursor: pointer;
    }

    .commandment-attribute {
        display: flex;
        align-items: center;
        gap: 1em;

        sl-icon[name="star"] {
            color: var(--sl-color-neutral-300);
        }

        sl-icon[name="star-fill"] {
            color: var(--sl-color-amber-500);
        }
    }

    sl-tree {
        --indent-guide-width: 1px;
    }

        sl-tree-item::part(expand-button) {
            /* Disable the expand/collapse animation */
            rotate: none;
        }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=(t,e,o)=>{const i=new Map;for(let r=e;r<=o;r++)i.set(t[r],r);return i},ss=fo(class extends bo{constructor(t){if(super(t),t.type!==gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;o===void 0?o=e:e!==void 0&&(i=e);const r=[],n=[];let s=0;for(const l of t)r[s]=i?i(l,s):s,n[s]=o(l,s),s++;return{values:n,keys:r}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,i]){const r=Tr(t),{values:n,keys:s}=this.dt(e,o,i);if(!Array.isArray(r))return this.ut=s,n;const l=this.ut??=[],a=[];let h,c,u=0,f=r.length-1,p=0,b=n.length-1;for(;u<=f&&p<=b;)if(r[u]===null)u++;else if(r[f]===null)f--;else if(l[u]===s[p])a[p]=Ct(r[u],n[p]),u++,p++;else if(l[f]===s[b])a[b]=Ct(r[f],n[b]),f--,b--;else if(l[u]===s[b])a[b]=Ct(r[u],n[b]),Yt(t,a[b+1],r[u]),u++,b--;else if(l[f]===s[p])a[p]=Ct(r[f],n[p]),Yt(t,r[u],r[f]),f--,p++;else if(h===void 0&&(h=oi(s,p,b),c=oi(l,u,f)),h.has(l[u]))if(h.has(l[f])){const g=c.get(s[p]),y=g!==void 0?r[g]:null;if(y===null){const v=Yt(t,r[u]);Ct(v,n[p]),a[p]=v}else a[p]=Ct(y,n[p]),Yt(t,r[u],y),r[g]=null;p++}else Be(r[f]),f--;else Be(r[u]),u++;for(;p<=b;){const g=Yt(t,a[b+1]);Ct(g,n[p]),a[p++]=g}for(;u<=f;){const g=r[u++];g!==null&&Be(g)}return this.ut=s,_i(t,a),W}});var as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,Mi=(t,e,o,i)=>{for(var r=i>1?void 0:i?ls(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&as(e,o,r),r};let Ce=class extends ot{constructor(){super(...arguments),this.commandment=null}updated(t){if(t.has("commandment")){const e=this.shadowRoot?.querySelector("sl-drawer");this.commandment?e?.show():e?.hide()}}render(){return w`
            <sl-drawer label="${this.commandment?.shortSummary||""}">
                ${this.renderCore()}
            </sl-drawer>
        `}renderCore(){const t=this.commandment;if(!t)return w``;const e=t.canBeCarriedOutToday?"Can be carried out today":"Can't be carried out today",o=t.requiresTemple?"Can't be carried out without the Temple":"Can be carried out without the Temple",i=t.requiresLivingInIsrael?"Can't be observed outside of Israel":"Can be carried out anywhere",r=this.getCommandmentObedienceTitle(t.jewishObservance,"Orthodox Judaism"),n=this.getCommandmentObedienceTitle(t.christianObservance,"Christianity"),s=this.getCommandmentObedienceTitle(t.messianicObservance,"Messianic Judaism");return w`
            <blockquote>
                ${t.text}
                <footer>${t.getBookChapterVerse()}</footer>
            </blockquote>
            <div class="commandment-attributes-group d-flex flex-column">
                <div class="commandment-attribute">
                <sl-tooltip content="${t.canBeCarriedOutToday?"This commandment can be carried out in modern times":"This commandment cannot be carried out in modern times"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.canBeCarriedOutToday)}
                    ${e}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${t.requiresLivingInIsrael?"This commandment can only be carried out while living in the land of Israel":"This commandment can be carried out anywhere, not dependent on living in the land of Israel"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.requiresLivingInIsrael===!1)}
                    ${i}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${t.requiresTemple?"This commandment requires a temple or tabernacle with a functioning Levitical system":"This commandment can be carried out without a temple, tabernacle, or functioning Levitical system"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.requiresTemple===!1)}
                    ${o}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(t.jewishObservance,"Orthodox Judaism")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.jewishObservance)}
                    ${r}
                    ${this.renderObservanceLevel(t.jewishObservance)}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(t.christianObservance,"Mainstream Christianity")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.christianObservance)}
                    ${n}
                    ${this.renderObservanceLevel(t.christianObservance)}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(t.messianicObservance,"Messianic Judaism")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(t.messianicObservance)}
                    ${s}
                    ${this.renderObservanceLevel(t.messianicObservance)}
                </sl-tooltip>
                </div>
            </div>

            <h3>Hierarchy</h3>
            ${this.renderCommandmentParentAndChildren(t)}

            <div slot="footer" class="d-flex justify-content-space-between">
                <sl-button slot="footer" variant="default" @click="${this.collapseCommandment}">Toggle children</sl-button>
                <sl-button slot="footer" variant="primary" @click="${this.closeDrawer}">Close</sl-button>
            </div>
        `}renderCommandmentAttributeIcon(t){const e=t===!0||t==="binding",o=t===!1||t==="none";return w`
          <sl-icon name="${e?"check2-circle":o?"x-circle":"circle-half"}" class="${e?"text-success":o?"text-danger":"text-warning"}"></sl-icon>
        `}renderObservanceLevel(t){const e=this.getStarLevel(t),o=[e>0?"star-fill":"star",e>=1?"star-fill":"star",e>=2?"star-fill":"star",e>=3?"star-fill":"star",e>=4?"star-fill":"star"];return w`
          <div class="d-flex">
            <sl-icon name="${o[0]}"></sl-icon>
            <sl-icon name="${o[1]}"></sl-icon>
            <sl-icon name="${o[2]}"></sl-icon>
            <sl-icon name="${o[3]}"></sl-icon>
            <sl-icon name="${o[4]}"></sl-icon>
          </div>
        `}getStarLevel(t){switch(t){case"none":return 0;case"recognized":return 1;case"recognizedPartial":return 2;case"recognizedButPrevented":return 3;case"binding":return 4;default:return 0}}renderCommandmentParentAndChildren(t){return w`
          <sl-tree selection="single" @sl-selection-change="${this.commandmentHierarchyTreeNodeSelected}">
            ${this.renderCommandmentTreeItem(t.parent,t,2)}
          </sl-tree>
        `}renderCommandmentTreeItem(t,e,o){return t?w`
            <sl-tree-item expanded ?selected="${e===t}" data-cmd-id="${t.commandmentNumber}">
              <sl-icon name="plus-square" slot="expand-icon"></sl-icon>
              <sl-icon name="dash-square" slot="collapse-icon"></sl-icon>
              ${t.shortSummary}

              ${o>0?w`
                ${ss(t.children||[],i=>i.commandmentNumber,i=>this.renderCommandmentTreeItem(i,e,o-1))}
              `:w``}
            </sl-tree-item>
          `:w``}getCommandmentObedienceDetail(t,e){switch(t){case"none":return`${e} does not widely practice this commandment nor recognize it as binding.`;case"recognized":return`${e} recognizes this commandment as binding, but does not widely practice it or all the aspects of the commandment as laid out in the text.`;case"recognizedPartial":return`${e} recognizes this commandment as binding, but practices only some of the aspects of the commandment.`;case"recognizedButPrevented":return`${e} considers this commandment binding, but is prevented from keeping it for external reasons.`;case"binding":return`${e} considers this commandment binding and widely practices it.`;default:return""}}getCommandmentObedienceTitle(t,e){switch(t){case"none":return`Not observed in ${e}`;case"recognized":case"recognizedPartial":case"recognizedButPrevented":return`Partially observed in ${e}`;case"binding":return`Observed in ${e}`;default:return""}}commandmentHierarchyTreeNodeSelected(t){if(!this.commandment)return;const e=t.detail?.selection?t.detail.selection[0].getAttribute("data-cmd-id"):null,o=e?Number(e):null,i=o?this.commandment.getDescendant(o)||this.commandment.getAncestor(o)||this.commandment.getSibling(o):null;i&&(this.commandment=i)}closeDrawer(){this.shadowRoot?.querySelector("sl-drawer")?.hide(),this.commandment=null}collapseCommandment(){this.commandment&&(this.commandment.isExpanded=!this.commandment.isExpanded,this.dispatchEvent(new CustomEvent("cmd-expand-toggled",{detail:this.commandment})))}};Ce.styles=[ns,le];Mi([m({type:Object})],Ce.prototype,"commandment",2);Ce=Mi([ae("cmd-detail")],Ce);const cs=T`
    .svg-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    svg {
        cursor: grab;
        background-color: white;
        flex-grow: 1;

        @media (max-width: 768px) {
            height: 120vh;
            touch-action: none;
        }
    }

    .node {
        cursor: pointer;
        user-select: none;

        circle {
            fill: #fff;
            stroke: var(--tenakh-blue);
            stroke-width: 5px;

            &.negative {
                stroke: var(--heifer-red);
            }
        }

        .commandment-text {
            font-family: var(--body-font);
            width: 20px;
            fill: black;
            text-shadow: 1px 1px 2px gray;

            &.verse {
                fill: gray;
                font-style: italic;
            }

            &.golden-command .commandment-text {
                fill: darkgoldenrod;
                -webkit-text-shadow: 1px 1px 1px silver;
                text-shadow: 1px 1px 1px silver;
                font: 17px sans-serif;
            }
        }
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 2px;
    }

    .graph-toolbar {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: -40px;
        margin-top: 12px;
    }
`;class ds{constructor(){this.events=new EventTarget}showError(e,o){this.showAlert(e,o,"danger")}showInfo(e,o){this.showAlert(e,o,"primary")}showAlert(e,o,i){this.events.dispatchEvent(new CustomEvent("alert",{detail:{message:e,details:o,variant:i}}))}}const Ae=new ds;var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Le=(t,e,o,i)=>{for(var r=i>1?void 0:i?us(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&hs(e,o,r),r};let Dt=class extends ot{constructor(){super(...arguments),this.root=null,this.commandmentsList=[],this.selectedCommandment=null,this.tree=null,this.svgRootG=null,this.diagonalLayout=null,this.zoom=null,this.isIOS=/iPad|iPhone/.test(navigator.userAgent),this.isMobile=matchMedia("(max-width: 760px)").matches,this.commandmentHoverTimeoutHandle=0,this.duration=750,this.nodeWidth=250,this.nodeHeight=100,this.minZoom=.2,this.maxZoom=5}firstUpdated(){ve.getCommandments().then(t=>this.commandmentsList=t),ve.getRootCommandments().then(t=>{this.root=ve.getGreatestCommandmentPlaceholder(),this.root.children=t,this.createTree(),this.printNextCommandmentsToMap()})}render(){return w`
      <div class="svg-container">
        ${this.renderToolbar()}
        <svg></svg>
      </div>
      <cmd-detail .commandment="${this.selectedCommandment}" @sl-hide="${this.resetSelectedCommandment}" @cmd-expand-toggled="${this.toggleNodeCollapsed}"></cmd-detail>>
    `}renderToolbar(){const t=this.isIOS?"d-none":"",e=this.isMobile?"":"d-none";return w`
      <sl-button-group class="graph-toolbar" label="Graph options">
        <sl-tooltip content="View full screen" class="${t}">
          <sl-button @click="${this.viewFullscreen}">
            <sl-icon name="arrows-fullscreen" label="View full screen"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Expand or collapse the commandment tree">
          <sl-button @click="${this.expandCollapseRoot}">
            <sl-icon name="arrows-expand" label="Expand or collapse commandments"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Zoom in">
          <sl-button @click="${this.zoomIn}">
            <sl-icon name="zoom-in" label="Zoom in the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Zoom out">
          <sl-button @click="${this.zoomOut}">
            <sl-icon name="zoom-out" label="Zoom out the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Scroll to top" class="${e}">
          <sl-button @click="${this.scrollToTop}">
            <sl-icon name="arrow-up-square" label="Zoom out the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
      </sl-button-group>
    `}createTree(){if(!this.root){Ae.showError("Can't create tree until root commandment is set.");return}const t=this.shadowRoot?.querySelector("svg");if(!t){Ae.showError("Unable to find SVG for rendering.");return}const e={top:50,right:50,bottom:20,left:50},o=960-e.right-e.left,i=500-e.top-e.bottom;this.tree=d3.layout.tree().size([i,o]),this.diagonalLayout=d3.svg.diagonal().projection(l=>[l.x,l.y]);const r=1,n=t.clientWidth/2-100,s=100;this.zoom=d3.behavior.zoom().scaleExtent([this.minZoom,this.maxZoom]).scale(r).translate([n,s]).on("zoom",()=>this.hierarchyZoomed()),this.svgRootG=d3.select(t).attr("width","100%").attr("height",i+e.top+e.bottom).call(this.zoom).append("g").attr("transform",`translate(${n}, ${s}) scale(${r})`),this.root.x0=i/2,this.root.y0=0,this.updateTree(this.root)}printNextCommandmentsToMap(){for(let t=1;t<=613;t++){const e=this.commandmentsList.filter(o=>o.commandmentNumber===t);if(e.length>1&&console.error(`${e.length} commandments have the same number, ${e[0].commandmentNumber}.`,e),e.length===0){console.log(`Next commandment to map is ${t}`);break}}}updateTree(t){if(!this.tree||!this.root||!this.svgRootG||!this.diagonalLayout)return;const e=this.diagonalLayout,o=this.tree.nodes(this.root).reverse(),i=this.tree.links(o),r=[];o.forEach(c=>{c.y=c.depth*this.nodeHeight;const u=r[c.depth];u?u.push(c):r[c.depth]=[c]}),r.forEach(c=>{c.forEach((u,f)=>{var p=this.nodeWidth*c.length,b=p/2;u.x=b-this.nodeWidth*f})});const n=this.svgRootG.selectAll("g.node").data(o,c=>c.id||(c.id=c.commandmentNumber)),s=n.enter().append("g").attr("class",c=>this.getNodeClass(c)).attr("transform",()=>"translate("+t.x0+","+t.y0+")").on("click",c=>this.commandmentNodeClicked(c));s.append("circle").attr("r",6e-6).attr("class",c=>c.type==="positive"?"":"negative"),s.append("text").attr("y",c=>c.getShortSummaryParts().length===1?-20:-40).attr("dy",".35em").attr("text-anchor","middle").text(c=>c.getShortSummaryParts()[0]).style("fill-opacity",1).attr("class","commandment-text"),s.filter(c=>c.getShortSummaryParts().length>1).append("text").attr("y",-20).attr("dy",".35em").attr("text-anchor","middle").text(c=>c.getShortSummaryParts()[1]).style("fill-opacity",1).attr("class","commandment-text"),s.append("text").attr("y",25).attr("dy",".35em").attr("text-anchor","middle").text(c=>c===this.root?"":c.getBookChapterVerse()).style("fill-opacity",1).attr("class","commandment-text verse");var l=n.transition().duration(this.duration).attr("transform",c=>"translate("+c.x+","+c.y+")");l.select("circle").attr("r",7),l.select("text").style("fill-opacity",1);var a=n.exit().transition().duration(this.duration).attr("transform",()=>"translate("+t.x+","+t.y+")").remove();a.select("circle").attr("r",6e-6),a.select("text").style("fill-opacity",6e-6);var h=this.svgRootG.selectAll("path.link").data(i,c=>c.target.id);h.enter().insert("path","g").attr("class","link").attr("d",()=>{const c={x:t.x0,y:t.y0};return e({source:c,target:c})}),h.transition().duration(this.duration).attr("d",this.diagonalLayout),h.exit().transition().duration(this.duration).attr("d",()=>{var c={x:t.x,y:t.y};return e({source:c,target:c})}).remove(),o.forEach(c=>{c.x0=c.x,c.y0=c.y})}toggleNodeCollapsed(t){t&&(t.isExpanded=!t.isExpanded,this.updateTree(t))}commandmentNodeClicked(t){this.selectedCommandment=t,document.exitFullscreen&&document.exitFullscreen().catch(()=>console.warn("Failed to exit full screen."))}getNodeClass(t){return t===this.root?"node root":t.commandmentNumber===4||t.commandmentNumber===13?"node mitzvah golden-command":"node mitzvah"}hierarchyZoomed(){if(this.svgRootG){const t=d3.event;this.svgRootG.attr("transform","translate("+t.translate+")scale("+t.scale+")")}}viewFullscreen(){this.shadowRoot?.querySelector("svg")?.requestFullscreen()}expandCollapseRoot(){this.root&&(this.root.isExpanded=!this.root.isExpanded,this.updateTree(this.root))}zoomIn(){this.zoomTree(.1)}zoomOut(){this.zoomTree(-.1)}zoomTree(t){if(this.zoom&&this.svgRootG){const e=this.zoom.scale()||1,o=Number((e+t).toPrecision(3)),i=o>=this.minZoom&&o<=this.maxZoom,r=this.zoom.translate()||[0,0];i&&(this.zoom=this.zoom.scale(o),this.svgRootG.attr("transform",`translate(${r[0]}, ${r[1]}) scale(${o})`))}}scrollToTop(){window.document.body.scrollTo({top:0,behavior:"smooth"})}resetSelectedCommandment(){this.selectedCommandment=null}};Dt.styles=[cs,le];Le([k()],Dt.prototype,"root",2);Le([k()],Dt.prototype,"commandmentsList",2);Le([k()],Dt.prototype,"selectedCommandment",2);Dt=Le([ae("app-home")],Dt);globalThis.URLPattern||await Ri(()=>import("./index-CBloBB_n.js"),[]);const ps="/",ii=new Un({routes:[{path:ri(),title:"Etz Mitzvot - a visual tree of the commandments in the Hebrew Bible",render:()=>w`<app-home></app-home>`},{path:ri("about"),title:"About",plugins:[Vn(()=>Ri(()=>import("./app-about-Cetxyugb.js"),[]))],render:()=>w`<app-about></app-about>`}]});function ri(t){var e=ps;return t&&(e=e+t),e}const ms=T`

    .layout-container {
        display: flex;
        flex-direction: column;
        height: 100vh;

        app-header {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
            z-index: 1; /** otherwise it will get clipped by the SVG */
            width: 100%;
            position: sticky;
            top: 0;
        }
    }

    main {
        flex-grow: 1;
        display: flex;
        padding: 0;
        gap: 12px;

        /** on mobile, we want the sidebar to appear under the commandments */
        @media (max-width: 768px) {
            flex-direction: column;
        }

        .router-outlet {
            flex-grow: 1;

            /** on mobile, don't let the router outlet take up all the space or we can't see the sidebar under the SVG */
            @media (max-width: 768px) {
                flex-grow: 0;
                max-height: 75vh;
            }
        }

        app-sidebar {
            background-color: var(--sl-color-gray-50);

            @media (max-width: 768px) {
                box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 5px 0px;
            }
        }
    }

    .alert-container {
        position: absolute;
        top: 10px;
        right: 10px;
        max-width: 500px;
        min-width: 400px;

        details {
            overflow: auto;
        }
    }
`;var fs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Bi=(t,e,o,i)=>{for(var r=i>1?void 0:i?bs(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&fs(e,o,r),r};let Ee=class extends ot{constructor(){super(),this.activeAlert=null}connectedCallback(){super.connectedCallback(),window.addEventListener("unhandledrejection",t=>this.unhandledRejection(t)),Ae.events.addEventListener("alert",t=>this.showAlert(t))}firstUpdated(){ii.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return w`
		<div class="layout-container">
			<app-header></app-header>
			<main>
				<div class="router-outlet">
					${ii.render()}
				</div>
				<app-sidebar></app-sidebar>
  			</main>
		</div>
		${this.renderAlert()}
	`}renderSidebar(){return w`
		<div class="sidebar">

		</div>
	`}renderAlert(){return w`
		<div class="alert-container">
			<sl-alert variant="${this.activeAlert?.variant||"primary"}" ?open="${!!this.activeAlert}" closable class="alert-closable" countdown="rtl" duration="10000">
				<sl-icon slot="icon" name="info-circle"></sl-icon>
				${this.activeAlert?.message}
				<br>
				<details class="${this.activeAlert?.details?"":"d-none"}">
					<summary>Details</summary>
					<pre>${this.activeAlert?.details}</pre>
				</details>
			</sl-alert>
		</div>
	`}showAlert(t){this.activeAlert=t.detail}unhandledRejection(t){const e=t.reason instanceof Error?t.reason.message:"",o=t.reason instanceof Error?t.reason.stack:"",i=e||"Woops, an error occurred. Please try again later.";console.log("Unhandled rejection occurred",o),Ae.showError(i,o)}};Ee.styles=[ms,le];Bi([k()],Ee.prototype,"activeAlert",2);Ee=Bi([ae("app-index")],Ee);export{mo as H,M as S,K as c,rt as e,T as i,ot as r,le as s,ae as t,w as x};
//# sourceMappingURL=index-DDrsSLl_.js.map
