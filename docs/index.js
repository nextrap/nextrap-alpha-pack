/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={886:()=>{var t,e,s=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},i=(t,e,i)=>(s(t,e,"read from private field"),i?i.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},n=(t,e,i,o)=>(s(t,e,"write to private field"),o?o.call(t,i):e.set(t,i),i);class r extends HTMLElement{constructor(){super(),o(this,t,null),o(this,e,!1);const s=this.attachShadow({mode:"open"}),i=document.createElement("slot");i.name="scrollslot",i.style.display="flex",i.style.overflow="hidden",i.style.cursor="grab",i.style.userSelect="none",s.appendChild(i),this.container=i,this.autoScroll=this.hasAttribute("auto-scroll"),this.snap=this.hasAttribute("snap"),this.stopOnHover=this.hasAttribute("stop-on-hover"),this.easeStopOnDrag=this.hasAttribute("ease-stop-on-drag"),this.slowDownOnStop=this.hasAttribute("slow-down-on-stop"),this.accelerationFactor=parseFloat(this.getAttribute("acceleration-factor")||"0.1"),this.scrollSpeed=parseFloat(this.getAttribute("scroll-speed")||"1"),this.scrollInterval=null,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&this.repopulate(t.target)}))}),{threshold:1})}connectedCallback(){n(this,t,window.setInterval((()=>{this.animateScroll()}),60)),Array.from(this.children).forEach((t=>{const e=t.cloneNode(!0);e.draggable=!1,e.setAttribute("slot","scrollslot"),e.style.userSelect="none",this.appendChild(e),this.observer.observe(e)})),this.addDragEvents(),this.stopOnHover&&this.addHoverEvents(),this.autoScroll&&this.startAutoScroll()}disconnectedCallback(){window.clearTimeout(i(this,t)),this.stopAutoScroll()}repopulate(t){this.container.scrollLeft+this.container.clientWidth>=this.container.scrollWidth?(t.draggable=!1,t.style.userSelect="none",this.appendChild(t)):0===this.container.scrollLeft&&(t.draggable=!1,t.style.userSelect="none",this.insertBefore(t,this.firstChild))}addDragEvents(){let t=!1,e=null;this.container.addEventListener("pointerdown",(s=>{t=!0,e=null,this.startX=s.pageX-this.container.offsetLeft,this.scrollLeftStart=this.container.scrollLeft,this.container.style.cursor="grabbing",this.stopAutoScroll()})),this.container.addEventListener("pointerout",(()=>{t=!1,this.container.style.cursor="grab",this.autoScroll&&this.startAutoScroll()})),this.container.addEventListener("pointerup",(()=>{t=!1,e=null,this.container.style.cursor="grab",this.snap&&this.snapElements(),this.easeStopOnDrag&&this.container.scrollTo({left:this.scrollLeftStart,behavior:"smooth"}),this.slowDownOnStop&&this.slowScrollStop(),this.autoScroll&&this.startAutoScroll()})),this.container.addEventListener("pointermove",(s=>{if(!t)return;s.preventDefault(),null!==e&&window.scrollTo(0,e);const i=s.pageX-this.container.offsetLeft;null===e&&(i>10||i<-10)&&(e=window.scrollY);const o=1*(i-this.startX);this.container.scrollLeft=this.scrollLeftStart-o})),this.container.addEventListener("mouseleave",(()=>{t=!1,this.container.style.cursor="grab",this.autoScroll&&this.startAutoScroll()}))}addHoverEvents(){this.container.addEventListener("mouseenter",(()=>{this.stopAutoScroll()})),this.container.addEventListener("mouseleave",(()=>{this.autoScroll&&this.startAutoScroll()}))}animateScroll(){!1!==i(this,e)&&(this.container.scrollLeft+=this.scrollSpeed,this.container.scrollLeft+this.container.clientWidth>=this.container.scrollWidth&&(this.container.scrollLeft=0))}startAutoScroll(){!0!==i(this,e)&&n(this,e,!0)}stopAutoScroll(){n(this,e,!1)}slowScrollStop(){let t=this.scrollSpeed;const e=()=>{t>.1&&(t*=.9,this.container.scrollLeft+=t,requestAnimationFrame(e))};e()}snapElements(){const t=Array.from(this.querySelectorAll('[slot="scrollslot"]'));let e=t[0],s=Math.abs(e.offsetLeft-this.container.scrollLeft);t.forEach((t=>{const i=Math.abs(t.offsetLeft-this.container.scrollLeft);i<s&&(e=t,s=i)})),this.container.scrollTo({left:e.offsetLeft,behavior:"smooth"})}}t=new WeakMap,e=new WeakMap,customElements.define("nxa-infiniscroll",r)}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,s),n.exports}(()=>{"use strict";const t=[];function e(e){t.push(e)}const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(s,t,n)},c=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:m}=Object,g=globalThis,v=g.trustedTypes,b=v?v.emptyScript:"",y=g.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!h(t,e),w={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...u(t),...f(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??A)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,y?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,E=S.trustedTypes,P=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,L=`<${O}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,G=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=G(1),q=(G(2),G(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),X=new WeakMap,Z=T.createTreeWalker(T,129);function J(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(r.lastIndex=h,l=r.exec(s),null!==l);)h=r.lastIndex,r===R?"!--"===l[1]?r=z:void 0!==l[1]?r=I:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=o??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?B:W):r===B||r===W?r=j:r===z||r===I?r=R:(r=j,o=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===R?s+L:c>=0?(i.push(a),s.slice(0,c)+k+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=K.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[n++],s=i.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?st:"?"===r[1]?it:"@"===r[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(D.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),Z.nextNode(),a.push({type:2,index:++o});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===O)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s.o?.[i]:s.l;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s.o??=[])[i]=o:s.l=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);Z.currentNode=i;let o=Z.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=Z.nextNode(),n++)}return Z.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new tt(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=Y(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Y(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class ot extends et{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??F)===q)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=S.litHtmlPolyfillSupport;rt?.(K,tt),(S.litHtmlVersions??=[]).push("3.2.0");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ht={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A},dt=(t=ht,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function ut(t,e=null,s=null,i=null){let o=document.createElement(t);null===e&&(e={});for(let t in e)o.setAttribute(t,e[t]);if(s instanceof NodeList)s=Array.from(s);else if(Array.isArray(s))for(let t of s)o.appendChild(t);else"string"==typeof s&&(o.innerText=s);return null!==i&&i.appendChild(o),o}new WeakMap,new WeakMap,new WeakMap;class ft{static waitForBodyElement(){return document.body?Promise.resolve(document.body):new Promise((t=>{this.promises.push(t),this.observer||(this.observer=new MutationObserver((()=>{document.body&&(this.observer.disconnect(),this.observer=null,this.promises.forEach((t=>t(document.body))),this.promises=[])})),this.observer.observe(document.documentElement,{childList:!0}))}))}}ft.observer=null,ft.promises=[];var mt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var o,n=i>1?void 0:i?gt(e,s):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(i?o(e,s,n):o(n))||n);return i&&n&&mt(e,s,n),n};let bt=class extends at{constructor(){super(...arguments),this.package="undefined"}render(){let e=t.find((t=>t.package===this.package));return e?(e.examples.forEach((t=>{let e=ut("slot",{name:"html"+t.title},t.code);e.innerHTML=t.code,this.appendChild(e)})),V`
            <section class="package-section">
                <h2>${e.title}</h2>
                <p>${e.description}</p>
                ${e.examples.map((t=>V`
                        <section class="example-section">
                            <h3>${t.title}</h3>
                            <p>${t.description}</p>
                            <pre class="code-example line-numbers">${t.code.trim().split("\n").map((t=>V`<code>${t}</code>`))}</pre>
                            <slot class="render-area" ..name=${"html1"+t.title}></slot>
                        </section>
                    `))}
            </section>
        `):V`
                <div>Package not found</div>`}};function yt(){return t=this,e=function*(){return new Promise((t=>{if("complete"===document.readyState||"interactive"===document.readyState)return t("loaded");document.addEventListener("DOMContentLoaded",(()=>t("DOMContentLoaded")))}))},new Promise(((s,i)=>{var o=t=>{try{r(e.next(t))}catch(t){i(t)}},n=t=>{try{r(e.throw(t))}catch(t){i(t)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(o,n);r((e=e.apply(t,null)).next())}));var t,e}bt.styles=l`

        .package-section {
            background: white;
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
            padding: 1rem 2rem;
            margin-bottom: 2rem;
        }

        .example-section {
            margin-top: 40px;
        }
        h2,h3, p {
            font-family:  Arial, sans-serif;
        }




        .code-example {
            background-color: #f5f5f5;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px;
            white-space: pre-wrap;
        }

        .render-area {
            margin-top: 10px;
        }

        .line-numbers {
            counter-reset: linenumber;
            position: relative;
            padding-left: 40px; /* Adjust according to your needs */
        }

        .line-numbers code {
            display: block;
            background: white;
        }

        .line-numbers code:before {
            counter-increment: linenumber;
            content: counter(linenumber);
            display: inline-block;
            padding-right: 5px;
            width: 30px; /* Adjust according to your needs */
            margin-right: 10px;
            text-align: right;
            color: gray; /* Adjust according to your needs */
            background: #f0f0f0; /* Adjust according to your needs */
            position: absolute;
            left: 0;
        }
    `,vt([pt({type:String})],bt.prototype,"package",2),bt=vt([ct("nx-doc-visualizer")],bt);var $t=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var o,n=i>1?void 0:i?_t(e,s):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(i?o(e,s,n):o(n))||n);return i&&n&&$t(e,s,n),n};let wt=class extends at{constructor(){super(...arguments),this.package="undefined"}render(){return(()=>{return e=this,s=function*(){yield yt(),t.map((t=>{this.appendChild(ut("nx-doc-visualizer",{package:t.package}))}))},new Promise(((t,i)=>{var o=t=>{try{r(s.next(t))}catch(t){i(t)}},n=t=>{try{r(s.throw(t))}catch(t){i(t)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,n);r((s=s.apply(e,null)).next())}));var e,s})(),V`
            <div id="component-container">
                <slot></slot>
            </div>
        `}};wt.styles=l`
    .package-section {
      margin-bottom: 20px;
    }`,At([pt({type:String})],wt.prototype,"package",2),wt=At([ct("nx-doc-packages-list")],wt),e({package:"input",description:"Lead Button Component",title:"NxaLeadButton",examples:[{title:"Basic input",description:"Basic input example",lang:"html",code:'\n\n<nxa-lead-button href="#test" spacer icon="bi bi-wrench shadow" title="Click here, dude" subtitle="Go on and on and on"></nxa-lead-button>\n<nxa-lead-button class="icon-top" icon="bi bi-wrench shadow" title="Click here, dude" subtitle="Go on and on and on"></nxa-lead-button>\n\n<nxa-lead-button class="" label="Input Label" placeholder="Input Placeholder">\n    <i class="bi-alarm " slot="icon"></i>\n    <div>Hello world</div>\n    <div>second line</div>\n</nxa-lead-button>\n\n<nxa-lead-button class="inverted-icon wave" label="Input Label" placeholder="Input Placeholder">\n    <i class="bi-alarm " slot="icon"></i>\n    <div>Hello world</div>\n    <div>second line</div>\n</nxa-lead-button>\n'},{title:"Input with value",description:"Input example with value",lang:"html",code:'<nx-input label="Input Label" placeholder="Input Placeholder" value="Input Value"></nx-input>'}]}),e({package:"nxa-infiniscroll",description:"Lead Button Component",title:"NxaInfiniscroll",examples:[{title:"Buttonbar",description:"Basic example",lang:"html",code:'\n\n\n<nxa-infiniscroll auto-scroll>\n    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/20/267-128_267/MVZ-GG.svg" alt="MVZ GG" height="48">\n    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/19/85-64_170/Praxis-Gromes.svg" alt="Praxis Gromes" height="48">\n    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/18/57-32_228/Gefaess-Gallis.svg" alt="Gefaess Gallis" height="48">\n\n</nxa-infiniscroll>\n            '}]});const xt=l`

    :host{
        --classes: 'icon-start shadow';
        --icon-background: #f5f5f5;
        --icon-text-color: #000;
        --background-color: #f5f5f5;
        --text-color: #000;
        --border-radius: 0.5em;
        --text-space: 1em;
        --title-font-size: 1.4em;
        --subtitle-font-size: 1em;
        --icon-font-size: 2.5em;
        --icon-padding: .8em;
        --border: 1px solid #000;
        --display: inline-block;
        --box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        --white-space: wrap;
        --wave-color: #a34444;

        display: var(--display);

    }

    :host(.inverted-icon) {
        .lead-button {
            .icon-section {
                background-color: var(--text-color);
                color: var(--icon-text-color);
                &::slotted(i) {
                    color: var(--icon-background);
                }
            }
            .text-section {
                padding: 0 var(--text-space)  ; // Left and right
            }
        }
    }


    :host(.icon-top) {
        .lead-button {
            flex-direction: column;

            .icon-section {
                aspect-ratio: unset;
            }
            .text-section {
                margin: 0 var(--text-space) var(--text-space) var(--text-space);

            }
        }
    }


    :host(.shadow) {
        .lead-button {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
    }

    :host(.wave) {
        .lead-button {
            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    var(--wave-color) 50%,
                    transparent 100%
                );
                animation: wave 15s infinite;
            }
        }

    }

    a {
        text-decoration: none;
        font: inherit;
        display: inline-block;
        padding: 0;
        margin: 0;

        font-size: unset;
        width: 100%;
    }
    button {
        padding: 0;
        margin: 0;
        font: inherit;
        width: 100%;
        font-size: unset;
        border: none;
        background: none;
        cursor: pointer;

    }

    .lead-button {
        width: 100%;
        padding: 0;
        margin: 0;
        border: var(--border);
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        box-shadow: var(--box-shadow);
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: filter 0.1s ease, transform 0.1s ease;


        &:hover {
            filter: brightness(0.93);
            transform: scale(1.02);
        }
        &:active {
            filter: brightness(0.8);
        }

        .icon-section {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--icon-background);
            color: var(--icon-text-color);
            width: auto;
            height: auto;


            padding: var(--icon-padding);
            aspect-ratio: 1;

            &::slotted(i) {
                color: var(--icon-color);
                font-size: var(--icon-font-size);


            }

        }

        .text-section {
            text-align: left;
            margin: 0 var(--text-space) 0 0; // default only right
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            white-space: var(--white-space); /* Prevents breaking the content */

            ::slotted(.title) {
                font-size: var(--title-font-size);
                font-weight: bold;
            }

            ::slotted(.subtitle) {
                font-size: var(--subtitle-font-size);
                color: lighten($primary-text-color, 20%);

            }
        }
    }

    @keyframes wave {
        0% {
            left: -100%;
        }
        25% {
            left: -100%;
        }
        35% {
            left: 100%;
        }
        60% {
            left: 100%;
        }
        100% {
            left: 100%;
        }
    }

    /* Optional Separator */

    .spacer {
        width: 100%;
        border: none;
        border-top: 1px solid lighten($primary-text-color, 20%);
        margin: 0.25em 0;
    }

`;var St,Et,Pt,kt,Ct,Ot,Lt,Tt,Ut=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Ht=(t,e,s,i)=>{for(var o,n=i>1?void 0:i?Mt(e,s):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(i?o(e,s,n):o(n))||n);return i&&n&&Ut(e,s,n),n},Nt=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},Rt=(t,e,s)=>(((t,e)=>{if(!e.has(t))throw TypeError("Cannot access private method")})(t,e),s),zt=(t,e,s)=>new Promise(((i,o)=>{var n=t=>{try{a(s.next(t))}catch(t){o(t)}},r=t=>{try{a(s.throw(t))}catch(t){o(t)}},a=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,r);a((s=s.apply(t,e)).next())}));let It=class extends at{constructor(){super(...arguments),Nt(this,St),Nt(this,Pt),Nt(this,Ct),Nt(this,Lt),this.href="",this.target="",this.title="",this.spacer=!1,this.subtitle="",this.icon="",this.type=""}render(){return this.firstElementChild||(this.icon&&this.append(ut("i",{class:this.icon,slot:"icon"})),this.title&&this.append(ut("div",{class:"title"},this.title)),this.spacer&&this.append(ut("div",{class:"spacer"})),this.subtitle&&this.append(ut("div",{class:"subtitle"},this.subtitle))),(()=>{zt(this,null,(function*(){yield function(t){return e=this,s=function*(){return new Promise((e=>{window.setTimeout((()=>e()),t)}))},new Promise(((t,i)=>{var o=t=>{try{r(s.next(t))}catch(t){i(t)}},n=t=>{try{r(s.throw(t))}catch(t){i(t)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,n);r((s=s.apply(e,null)).next())}));var e,s}(100)}))})(),Rt(this,Lt,Tt).call(this),this.href?Rt(this,Ct,Ot).call(this):Rt(this,Pt,kt).call(this)}};St=new WeakSet,Et=function(){return V`
            <slot name="icon" class="icon-section"></slot>
            <div class="text-section">
                <slot></slot>
            </div>`},Pt=new WeakSet,kt=function(){return V`<button type="${this.type}" class="lead-button">${Rt(this,St,Et).call(this)}</button>`},Ct=new WeakSet,Ot=function(){return V`<a href="${this.href}" target="${this.target}"><div class="lead-button">
            ${Rt(this,St,Et).call(this)}</div></a>`},Lt=new WeakSet,Tt=function(){return zt(this,null,(function*(){yield yt();let t=(getComputedStyle(this).getPropertyValue("--classes")||"").trim().split(" ").filter((t=>""!==t.trim()));this.classList.add(...t)}))},It.styles=xt,Ht([pt()],It.prototype,"href",2),Ht([pt()],It.prototype,"target",2),Ht([pt()],It.prototype,"title",2),Ht([pt({type:Boolean})],It.prototype,"spacer",2),Ht([pt()],It.prototype,"subtitle",2),Ht([pt()],It.prototype,"icon",2),Ht([pt()],It.prototype,"type",2),It=Ht([ct("nxa-lead-button")],It),s(886)})()})();
//# sourceMappingURL=index.js.map