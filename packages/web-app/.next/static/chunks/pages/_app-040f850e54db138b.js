(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3542:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(2351)},283:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5518)}])},5518:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(2322),o=n(2784),i=n(6991),u=n(3542),a="undefined"!=typeof Deno,c=!a&&void 0!==n.g&&!!n.g.process&&(!n.g.origin||"string"!=typeof n.g.origin);function s(e){let{Component:t,pageProps:u}=e;return(0,o.useLayoutEffect)(()=>{(function(){var e=[];if("undefined"!=typeof window){var t=window;t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(n.e(748).then(n.t.bind(n,7968,23))),"function"==typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()&&"undefined"!=typeof WeakMap||e.push(n.e(214).then(n.t.bind(n,1282,23)))}return Promise.all(e)})().then(()=>{window,"undefined"==typeof window?Promise.resolve():(i.C&&i.C.supports&&i.C.supports("color","var(--c)")?(0,i.a)():n.e(843).then(n.t.bind(n,9639,23)).then(function(){return(i.p.$cssShim$=i.w.__cssshim)?i.p.$cssShim$.i():0})).then(function(){return(0,i.b)([["my-component",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]]],void 0)})})},[]),(0,r.jsx)(t,{...u})}a&&Deno.build.os,c?u.cwd:a&&Deno.cwd,c?u.exit:a&&Deno.exit,function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}()},2351:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?c=r.concat(c):l=-1,c.length&&$())}function $(){if(!s){var e=a(f);s=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||s||a($)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},6991:function(e,t,n){"use strict";n.d(t,{C:function(){return p},a:function(){return g},b:function(){return ee},h:function(){return C},p:function(){return h},r:function(){return er},w:function(){return $}});var r,o,i,u=n(3542),a=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r},l=0,f=!1,$="undefined"!=typeof window?window:{},p=$.CSS,d=$.document||{head:{}},h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},m=(d.head.attachShadow+"").indexOf("[native")>-1,g=function(e){return Promise.resolve(e)},v=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),y=function(e,t){return void 0===t&&(t=""),function(){}},w=new WeakMap,b=function(e,t,n){var r=ec.get(e);v&&n?(r=r||new CSSStyleSheet).replace(t):r=t,ec.set(e,r)},E=function(e,t,n,r){var o=x(t),i=ec.get(o);if(e=11===e.nodeType?e:d,i){if("string"==typeof i){e=e.head||e;var u=w.get(e),a=void 0;if(u||w.set(e,u=new Set),!u.has(o)){if(h.$cssShim$){var c=(a=h.$cssShim$.createHostStyle(r,o,i,!!(10&t.$flags$)))["s-sc"];c&&(o=c,u=null)}else(a=d.createElement("style")).innerHTML=i;e.insertBefore(a,e.querySelector("link")),u&&u.add(o)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=s(e.adoptedStyleSheets,[i]))}return o},S=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=y("attachStyles",t.$tagName$),i=E(m&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},x=function(e,t){return"sc-"+e.$tagName$},T=function(e){return"object"==(e=typeof e)||"function"===e},R="undefined"!=typeof Deno,N=!R&&void 0!==n.g&&!!n.g.process&&(!n.g.origin||"string"!=typeof n.g.origin);R&&Deno.build.os,N?u.cwd:R&&Deno.cwd,N?u.exit:R&&Deno.exit;var C=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,i=!1,u=!1,a=[],c=function(t){for(var n=0;n<t.length;n++)Array.isArray(o=t[n])?c(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof e&&!T(o))&&(o=String(o)),i&&u?a[a.length-1].$text$+=o:a.push(i?_(null,o):o),u=i)};c(n);var s=_(e,null);return s.$attrs$=t,a.length>0&&(s.$children$=a),s},_=function(e,t){return{$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null}},L={},M=function(e,t,n,o){var i,u,a=t.$children$[n],c=0;if(null!==a.$text$)i=a.$elm$=d.createTextNode(a.$text$);else if(i=a.$elm$=d.createElement(a.$tag$),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),a.$children$)for(c=0;c<a.$children$.length;++c)(u=M(e,a,c))&&i.appendChild(u);return i},k=function(e,t,n,r,i,u){var a,c=e;for(c.shadowRoot&&c.tagName===o&&(c=c.shadowRoot);i<=u;++i)r[i]&&(a=M(null,n,i))&&(r[i].$elm$=a,c.insertBefore(a,t))},O=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(0,r.$elm$).remove()},j=function(e,t,n,r){for(var o,i=0,u=0,a=t.length-1,c=t[0],s=t[a],l=r.length-1,f=r[0],$=r[l];i<=a&&u<=l;)null==c?c=t[++i]:null==s?s=t[--a]:null==f?f=r[++u]:null==$?$=r[--l]:P(c,f)?(H(c,f),c=t[++i],f=r[++u]):P(s,$)?(H(s,$),s=t[--a],$=r[--l]):P(c,$)?(H(c,$),e.insertBefore(c.$elm$,s.$elm$.nextSibling),c=t[++i],$=r[--l]):P(s,f)?(H(s,f),e.insertBefore(s.$elm$,c.$elm$),s=t[--a],f=r[++u]):(o=M(t&&t[u],n,u),f=r[++u],o&&c.$elm$.parentNode.insertBefore(o,c.$elm$));i>a?k(e,null==r[l+1]?null:r[l+1].$elm$,n,r,u,l):u>l&&O(t,i,a)},P=function(e,t){return e.$tag$===t.$tag$},H=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$text$;null===i?null!==r&&null!==o?j(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),k(n,null,t,o,0,o.length-1)):null!==r&&O(r,0,r.length-1):e.$text$!==i&&(n.data=i)},A=function(e,t){var n=e.$hostElement$,i=e.$vnode$||_(null,null),u=t&&t.$tag$===L?t:C(null,null,t);o=n.tagName,u.$tag$=null,u.$flags$|=4,e.$vnode$=u,u.$elm$=i.$elm$=n.shadowRoot||n,r=n["s-sc"],H(i,u)},U=function(e,t,n){var r=h.ce(t,n);return e.dispatchEvent(r),r},D=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(function(t){return e.$onRenderResolve$=t}))},B=function(e,t){if(e.$flags$|=16,4&e.$flags$){e.$flags$|=512;return}return D(e,e.$ancestorComponent$),em(function(){return I(e,t)})},I=function(e,t){var n,r=y("scheduleUpdate",e.$cmpMeta$.$tagName$),o=e.$lazyInstance$;return r(),X(n,function(){return z(e,o,t)})},z=function(e,t,n){var r=e.$hostElement$,o=y("update",e.$cmpMeta$.$tagName$),i=r["s-rc"];n&&S(e);var u=y("render",e.$cmpMeta$.$tagName$);A(e,W(e,t)),h.$cssShim$&&h.$cssShim$.updateHost(r),i&&(i.map(function(e){return e()}),r["s-rc"]=void 0),u(),o();var a=r["s-p"],c=function(){return V(e)};0===a.length?c():(Promise.all(a).then(c),e.$flags$|=4,a.length=0)},W=function(e,t){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2}catch(e){ei(e)}return t},V=function(e){var t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=y("postUpdate",t),o=e.$ancestorComponent$;64&e.$flags$?r():(e.$flags$|=64,G(n),r(),e.$onReadyResolve$(n),o||F()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&eh(function(){return B(e,!1)}),e.$flags$&=-517},q=function(e){var t=en(e),n=t.$hostElement$.isConnected;return n&&(18&t.$flags$)==2&&B(t,!1),n},F=function(e){G(d.documentElement),h.$flags$|=2,eh(function(){return U($,"appload",{detail:{namespace:"test-component"}})})},X=function(e,t){return e&&e.then?e.then(t):t()},G=function(e){return e.classList.add("hydrated")},Q=function(e,t,n,r){var o,i,u=en(e),a=u.$instanceValues$.get(t),c=u.$flags$,s=u.$lazyInstance$;o=n,i=r.$members$[t][0],n=null!=o&&!T(o)&&1&i?String(o):o,(!(8&c)||void 0===a)&&n!==a&&(u.$instanceValues$.set(t,n),s&&(18&c)==2&&B(u,!1))},J=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$),o=e.prototype;if(r.map(function(e){var r=e[0],i=e[1][0];(31&i||2&n&&32&i)&&Object.defineProperty(o,r,{get:function(){return en(this).$instanceValues$.get(r)},set:function(e){Q(this,r,e,t)},configurable:!0,enumerable:!0})}),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;h.jmp(function(){var t=i.get(e);r[t]=(null!==n||"boolean"!=typeof r[t])&&n})},e.observedAttributes=r.filter(function(e){return e[0],15&e[1][0]}).map(function(e){var t=e[0],n=e[1][1]||t;return i.set(n,t),n})}}return e},K=function(e,t,r,o,i){var u,a,s,l;return u=void 0,a=void 0,s=void 0,l=function(){var e,o,u,a,s,l,f;return c(this,function(c){switch(c.label){case 0:if((32&t.$flags$)!=0)return[3,5];if(t.$flags$|=32,!(i=ea(r)).then)return[3,2];return e=function(){},[4,i];case 1:i=c.sent(),e(),c.label=2;case 2:i.isProxied||(J(i,r,2),i.isProxied=!0),o=y("createInstance",r.$tagName$),t.$flags$|=8;try{new i(t)}catch(e){ei(e)}if(t.$flags$&=-9,o(),!i.style||(u=i.style,a=x(r),ec.has(a)))return[3,5];if(s=y("registerStyles",r.$tagName$),!(8&r.$flags$))return[3,4];return[4,n.e(966).then(n.bind(n,1966)).then(function(e){return e.scopeCss(u,a,!1)})];case 3:u=c.sent(),c.label=4;case 4:b(a,u,!!(1&r.$flags$)),s(),c.label=5;case 5:return l=t.$ancestorComponent$,f=function(){return B(t,!0)},l&&l["s-rc"]?l["s-rc"].push(f):f(),[2]}})},new(s||(s=Promise))(function(e,t){function n(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):((o=t.value)instanceof s?o:new s(function(e){e(o)})).then(n,r)}o((l=l.apply(u,a||[])).next())})},Y=function(e){if((1&h.$flags$)==0){var t=en(e),n=t.$cmpMeta$,r=y("connectedCallback",n.$tagName$);if(!(1&t.$flags$)){t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){D(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map(function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}}),eh(function(){return K(e,t,n)})}r()}},Z=function(e){(1&h.$flags$)==0&&(en(e),h.$cssShim$&&h.$cssShim$.removeHost(e))},ee=function(e,t){void 0===t&&(t={});var n,r=y(),o=[],i=t.exclude||[],u=$.customElements,c=d.head,s=c.querySelector("meta[charset]"),l=d.createElement("style"),f=[],p=!0;Object.assign(h,t),h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href,t.syncQueue&&(h.$flags$|=4),e.map(function(e){return e[1].map(function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],!m&&1&r.$flags$&&(r.$flags$|=8);var c=r.$tagName$,s=function(e){function t(t){var n=e.call(this,t)||this;return eo(t=n,r),!(1&r.$flags$)||(m?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),n}return a(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),p?f.push(this):h.jmp(function(){return Y(e)})},t.prototype.disconnectedCallback=function(){var e=this;h.jmp(function(){return Z(e)})},t.prototype.forceUpdate=function(){q(this)},t.prototype.componentOnReady=function(){return en(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleId$=e[0],i.includes(c)||u.get(c)||(o.push(c),u.define(c,J(s,r,1)))})}),l.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),c.insertBefore(l,s?s.nextSibling:c.firstChild),p=!1,f.length?f.map(function(e){return e.connectedCallback()}):h.jmp(function(){return n=setTimeout(F,30)}),r()},et=new WeakMap,en=function(e){return et.get(e)},er=function(e,t){return et.set(t.$lazyInstance$=e,t)},eo=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise(function(e){return n.$onReadyResolve$=e}),e["s-p"]=[],e["s-rc"]=[],et.set(e,n)},ei=function(e){return console.error(e)},eu=new Map,ea=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,u=eu.get(i);return u?u[o]:n(5931)("./"+i+".entry.js").then(function(e){return eu.set(i,e),e[o]},ei)},ec=new Map,es=[],el=[],ef=[],e$=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ei(e)}e.length=0},ep=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(e){ei(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ed=function(){l++,e$(es);var e=(6&h.$flags$)==2?performance.now()+14*Math.ceil(.1*l):1/0;ep(el,e),ep(ef,e),el.length>0&&(ef.push.apply(ef,el),el.length=0),(f=es.length+el.length+ef.length>0)?h.raf(ed):l=0},eh=function(e){return g().then(e)},em=function(e){el.push(e),f||(f=!0,4&h.$flags$?eh(ed):h.raf(ed))}},5931:function(e,t,n){var r={"./my-component.entry.js":[7619,619]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n(o)})}o.keys=function(){return Object.keys(r)},o.id=5931,e.exports=o}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(283),t(6244)}),_N_E=e.O()}]);