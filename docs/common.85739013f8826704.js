"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(M,E,d)=>{d.d(E,{c:()=>p});var h=d(1308),w=d(7864),r=d(1911);const p=(a,n)=>{let e,t;const o=(c,v,l)=>{if(typeof document>"u")return;const f=document.elementFromPoint(c,v);f&&n(f)?f!==e&&(m(),i(f,l)):m()},i=(c,v)=>{e=c,t||(t=e);const l=e;(0,h.c)(()=>l.classList.add("ion-activated")),v()},m=(c=!1)=>{if(!e)return;const v=e;(0,h.c)(()=>v.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,r.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>o(c.currentX,c.currentY,w.a),onMove:c=>o(c.currentX,c.currentY,w.b),onEnd:()=>{m(!0),(0,w.h)(),t=void 0}})}},2225:(M,E,d)=>{d.d(E,{g:()=>h});const h=(n,e,t,o,i)=>r(n[1],e[1],t[1],o[1],i).map(m=>w(n[0],e[0],t[0],o[0],m)),w=(n,e,t,o,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+o*i))-n*Math.pow(i-1,3),r=(n,e,t,o,i)=>a((o-=i)-3*(t-=i)+3*(e-=i)-(n-=i),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),a=(n,e,t,o)=>{if(0===n)return((n,e,t)=>{const o=e*e-4*n*t;return o<0?[]:[(-e+Math.sqrt(o))/(2*n),(-e-Math.sqrt(o))/(2*n)]})(e,t,o);const i=(3*(t/=n)-(e/=n)*e)/3,m=(2*e*e*e-9*e*t+27*(o/=n))/27;if(0===i)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-i),-Math.sqrt(-i)];const c=Math.pow(m/2,2)+Math.pow(i/3,3);if(0===c)return[Math.pow(m/2,.5)-e/3];if(c>0)return[Math.pow(-m/2+Math.sqrt(c),1/3)-Math.pow(m/2+Math.sqrt(c),1/3)-e/3];const v=Math.sqrt(Math.pow(-i/3,3)),l=Math.acos(-m/(2*Math.sqrt(Math.pow(-i/3,3)))),f=2*Math.pow(v,1/3);return[f*Math.cos(l/3)-e/3,f*Math.cos((l+2*Math.PI)/3)-e/3,f*Math.cos((l+4*Math.PI)/3)-e/3]}},5062:(M,E,d)=>{d.d(E,{i:()=>h});const h=w=>w&&""!==w.dir?"rtl"===w.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(M,E,d)=>{d.r(E),d.d(E,{startFocusVisible:()=>p});const h="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],p=a=>{let n=[],e=!0;const t=a?a.shadowRoot:document,o=a||document.body,i=_=>{n.forEach(u=>u.classList.remove(h)),_.forEach(u=>u.classList.add(h)),n=_},m=()=>{e=!1,i([])},c=_=>{e=r.includes(_.key),e||i([])},v=_=>{if(e&&void 0!==_.composedPath){const u=_.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));i(u)}},l=()=>{t.activeElement===o&&i([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",v),t.addEventListener("focusout",l),t.addEventListener("touchstart",m),t.addEventListener("mousedown",m),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",v),t.removeEventListener("focusout",l),t.removeEventListener("touchstart",m),t.removeEventListener("mousedown",m)},setFocus:i}}},7040:(M,E,d)=>{d.d(E,{C:()=>a,a:()=>r,d:()=>p});var h=d(5861),w=d(5730);const r=function(){var n=(0,h.Z)(function*(e,t,o,i,m,c){var v;if(e)return e.attachViewToDom(t,o,m,i);if(!(c||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof o?null===(v=t.ownerDocument)||void 0===v?void 0:v.createElement(o):o;return i&&i.forEach(f=>l.classList.add(f)),m&&Object.assign(l,m),t.appendChild(l),yield new Promise(f=>(0,w.c)(l,f)),l});return function(t,o,i,m,c,v){return n.apply(this,arguments)}}(),p=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},a=()=>{let n,e;return{attachViewToDom:function(){var i=(0,h.Z)(function*(m,c,v={},l=[]){var f,_;if(n=m,c){const g="string"==typeof c?null===(f=n.ownerDocument)||void 0===f?void 0:f.createElement(c):c;l.forEach(s=>g.classList.add(s)),Object.assign(g,v),n.appendChild(g),yield new Promise(s=>(0,w.c)(g,s))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const s=null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement("div");s.classList.add("ion-delegate-host"),l.forEach(y=>s.classList.add(y)),s.append(...n.children),n.appendChild(s)}const u=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),u.appendChild(n),n});return function(c,v){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,E,d)=>{d.d(E,{a:()=>p,b:()=>a,c:()=>r,d:()=>e,h:()=>n});const h={getEngine(){var t;const o=window;return o.TapticEngine||(null===(t=o.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available(){var t;const o=window;return!!this.getEngine()&&("web"!==(null===(t=o.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const o=this.getEngine();if(!o)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:i})},notification(t){const o=this.getEngine();if(!o)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},w=()=>h.available(),r=()=>{w()&&h.selection()},p=()=>{w()&&h.selectionStart()},a=()=>{w()&&h.selectionChanged()},n=()=>{w()&&h.selectionEnd()},e=t=>{w()&&h.impact(t)}},6642:(M,E,d)=>{d.d(E,{I:()=>a,a:()=>i,b:()=>n,c:()=>v,d:()=>f,f:()=>m,g:()=>o,i:()=>t,p:()=>l,r:()=>_,s:()=>c});var h=d(5861),w=d(5730),r=d(4147);const a="ion-content",n=".ion-content-scroll-host",e=`${a}, ${n}`,t=u=>"ION-CONTENT"===u.tagName,o=function(){var u=(0,h.Z)(function*(g){return t(g)?(yield new Promise(s=>(0,w.c)(g,s)),g.getScrollElement()):g});return function(s){return u.apply(this,arguments)}}(),i=u=>u.querySelector(n)||u.querySelector(e),m=u=>u.closest(e),c=(u,g)=>t(u)?u.scrollToTop(g):Promise.resolve(u.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),v=(u,g,s,y)=>t(u)?u.scrollByPoint(g,s,y):Promise.resolve(u.scrollBy({top:s,left:g,behavior:y>0?"smooth":"auto"})),l=u=>(0,r.a)(u,a),f=u=>{if(t(u)){const s=u.scrollY;return u.scrollY=!1,s}return u.style.setProperty("overflow","hidden"),!0},_=(u,g)=>{t(u)?u.scrollY=g:u.style.removeProperty("overflow")}},2357:(M,E,d)=>{d.d(E,{a:()=>h,b:()=>c,c:()=>e,d:()=>v,e:()=>C,f:()=>n,g:()=>l,h:()=>r,i:()=>w,j:()=>s,k:()=>y,l:()=>t,m:()=>i,n:()=>f,o:()=>o,p:()=>a,q:()=>p,r:()=>g,s:()=>D,t:()=>m,u:()=>_,v:()=>u});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,E,d)=>{d.d(E,{s:()=>h});const h=t=>{try{if(t instanceof e)return t.value;if(!p()||"string"!=typeof t||""===t)return t;const o=document.createDocumentFragment(),i=document.createElement("div");o.appendChild(i),i.innerHTML=t,n.forEach(l=>{const f=o.querySelectorAll(l);for(let _=f.length-1;_>=0;_--){const u=f[_];u.parentNode?u.parentNode.removeChild(u):o.removeChild(u);const g=r(u);for(let s=0;s<g.length;s++)w(g[s])}});const m=r(o);for(let l=0;l<m.length;l++)w(m[l]);const c=document.createElement("div");c.appendChild(o);const v=c.querySelector("div");return null!==v?v.innerHTML:c.innerHTML}catch(o){return console.error(o),""}},w=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const m=t.attributes.item(i),c=m.name;if(!a.includes(c.toLowerCase())){t.removeAttribute(c);continue}const v=m.value;null!=v&&v.toLowerCase().includes("javascript:")&&t.removeAttribute(c)}const o=r(t);for(let i=0;i<o.length;i++)w(o[i])},r=t=>null!=t.children?t.children:t.childNodes,p=()=>{var t;const o=window,i=null===(t=null==o?void 0:o.Ionic)||void 0===t?void 0:t.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(o){this.value=o}}},1316:(M,E,d)=>{d.r(E),d.d(E,{KEYBOARD_DID_CLOSE:()=>w,KEYBOARD_DID_OPEN:()=>h,copyVisualViewport:()=>g,keyboardDidClose:()=>l,keyboardDidOpen:()=>c,keyboardDidResize:()=>v,resetKeyboardAssist:()=>e,setKeyboardClose:()=>m,setKeyboardOpen:()=>i,startKeyboardAssist:()=>t,trackViewportChanges:()=>u});const h="ionKeyboardDidShow",w="ionKeyboardDidHide";let p={},a={},n=!1;const e=()=>{p={},a={},n=!1},t=s=>{o(s),s.visualViewport&&(a=g(s.visualViewport),s.visualViewport.onresize=()=>{u(s),c()||v(s)?i(s):l(s)&&m(s)})},o=s=>{s.addEventListener("keyboardDidShow",y=>i(s,y)),s.addEventListener("keyboardDidHide",()=>m(s))},i=(s,y)=>{f(s,y),n=!0},m=s=>{_(s),n=!1},c=()=>!n&&p.width===a.width&&(p.height-a.height)*a.scale>150,v=s=>n&&!l(s),l=s=>n&&a.height===s.innerHeight,f=(s,y)=>{const C=new CustomEvent(h,{detail:{keyboardHeight:y?y.keyboardHeight:s.innerHeight-a.height}});s.dispatchEvent(C)},_=s=>{const y=new CustomEvent(w);s.dispatchEvent(y)},u=s=>{p=Object.assign({},a),a=g(s.visualViewport)},g=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(M,E,d)=>{d.d(E,{c:()=>w});var h=d(3457);const w=r=>{let p,a,n;const e=()=>{p=()=>{n=!0,r&&r(!0)},a=()=>{n=!1,r&&r(!1)},null==h.w||h.w.addEventListener("keyboardWillShow",p),null==h.w||h.w.addEventListener("keyboardWillHide",a)};return e(),{init:e,destroy:()=>{null==h.w||h.w.removeEventListener("keyboardWillShow",p),null==h.w||h.w.removeEventListener("keyboardWillHide",a),p=a=void 0},isKeyboardVisible:()=>n}}},7741:(M,E,d)=>{d.d(E,{S:()=>w});const w={bubbles:{dur:1e3,circles:9,fn:(r,p,a)=>{const n=r*p/a-r+"ms",e=2*Math.PI*p/a;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(r,p,a)=>{const n=p/a,e=r*n-r+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,p)=>({r:6,style:{left:9-9*p+"px","animation-delay":-110*p+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,p,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*p+(p<a/2?180:-180)}deg)`,"animation-delay":r*p/a-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,p,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*p+(p<a/2?180:-180)}deg)`,"animation-delay":r*p/a-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,p,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*p+(p<6?180:-180)}deg)`,"animation-delay":r*p/a-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,p,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*p+(p<6?180:-180)}deg)`,"animation-delay":r*p/a-r+"ms"}})}}},1959:(M,E,d)=>{d.r(E),d.d(E,{createSwipeBackGesture:()=>a});var h=d(5730),w=d(5062),r=d(1911);d(4349);const a=(n,e,t,o,i)=>{const m=n.ownerDocument.defaultView,c=(0,w.i)(n),l=s=>c?-s.deltaX:s.deltaX;return(0,r.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(s=>{const{startX:D}=s;return c?D>=m.innerWidth-50:D<=50})(s)&&e(),onStart:t,onMove:s=>{const D=l(s)/m.innerWidth;o(D)},onEnd:s=>{const y=l(s),D=m.innerWidth,C=y/D,P=(s=>c?-s.velocityX:s.velocityX)(s),x=P>=0&&(P>.2||y>D/2),O=(x?1-C:C)*D;let L=0;if(O>5){const b=O/Math.abs(P);L=Math.min(b,540)}i(x,C<=0?.01:(0,h.l)(0,C,.9999),L)}})}},2927:(M,E,d)=>{d.d(E,{L:()=>p});var h=d(4004),w=d(8274),r=d(8751);let p=(()=>{class a{constructor(e){this.as=e}transform(e){return this.as.jobs$.pipe((0,h.U)(t=>t.find(o=>o.id===e.job)))}}return a.\u0275fac=function(e){return new(e||a)(w.Y36(r.t,16))},a.\u0275pipe=w.Yjl({name:"deduceJob",type:a,pure:!0,standalone:!0}),a})()},8452:(M,E,d)=>{d.d(E,{u:()=>w});var h=d(8274);let w=(()=>{class r{transform(a,n){return n.find(e=>e.id===a.sign)}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275pipe=h.Yjl({name:"deduceSign",type:r,pure:!0,standalone:!0}),r})()},8751:(M,E,d)=>{d.d(E,{t:()=>m});var h=d(4004),w=d(7579);const r={now:()=>(r.delegate||Date).now(),delegate:void 0};class p extends w.x{constructor(v=1/0,l=1/0,f=r){super(),this._bufferSize=v,this._windowTime=l,this._timestampProvider=f,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=l===1/0,this._bufferSize=Math.max(1,v),this._windowTime=Math.max(1,l)}next(v){const{isStopped:l,_buffer:f,_infiniteTimeWindow:_,_timestampProvider:u,_windowTime:g}=this;l||(f.push(v),!_&&f.push(u.now()+g)),this._trimBuffer(),super.next(v)}_subscribe(v){this._throwIfClosed(),this._trimBuffer();const l=this._innerSubscribe(v),{_infiniteTimeWindow:f,_buffer:_}=this,u=_.slice();for(let g=0;g<u.length&&!v.closed;g+=f?1:2)v.next(u[g]);return this._checkFinalizedStatuses(v),l}_trimBuffer(){const{_bufferSize:v,_timestampProvider:l,_buffer:f,_infiniteTimeWindow:_}=this,u=(_?1:2)*v;if(v<1/0&&u<f.length&&f.splice(0,f.length-u),!_){const g=l.now();let s=0;for(let y=1;y<f.length&&f[y]<=g;y+=2)s=y;s&&f.splice(0,s+1)}}}var a=d(3099);function n(c,v,l){let f,_=!1;return c&&"object"==typeof c?({bufferSize:f=1/0,windowTime:v=1/0,refCount:_=!1,scheduler:l}=c):f=null!=c?c:1/0,(0,a.B)({connector:()=>new p(f,v,l),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:_})}var e=d(4351),t=d(4128),o=d(8274),i=d(529);let m=(()=>{class c{constructor(l){this.http=l,this.ROOT="https://astro-explorer.fly.dev",this.setSigns(),this.setPlanets(),this.setJobs(),this.setPeople(),this.setSpecialization()}getSpecializations(l){return this.http.get(`${this.ROOT}/api/collections/specialization/records`,{})}getPeople(l="1"){return this.http.get(`${this.ROOT}/api/collections/people/records`,{params:{perPage:"500",page:l}})}getSigns(){return this.http.get(`${this.ROOT}/api/collections/signs/records?expand=people`)}getPlanets(){return this.http.get(`${this.ROOT}/api/collections/planets/records`)}getJobs(){return this.http.get(`${this.ROOT}/api/collections/job/records`)}setSigns(){this.signs$=this.getSigns().pipe((0,h.U)(l=>l.items),n())}setSpecialization(){this.specializations$=this.getSpecializations().pipe((0,h.U)(l=>l.items),n())}setPeople(){let l;this.people$=this.getPeople().pipe((0,e.b)(f=>{const _=f.totalPages;l=f.items;const u=[];for(let g=2;g<_+1;g++)u.push(this.getPeople(`${g}`).pipe((0,h.U)(s=>s.items)));return(0,t.D)(u)}),(0,h.U)(f=>f.reduce((_,u)=>_.concat(u),[]).concat(l)),n())}setPlanets(){this.planets$=this.getPlanets().pipe((0,h.U)(l=>l.items),n())}setJobs(){this.jobs$=this.getJobs().pipe((0,h.U)(l=>l.items),n())}}return c.\u0275fac=function(l){return new(l||c)(o.LFG(i.eN))},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},4657:(M,E,d)=>{d.d(E,{A:()=>n});var h=d(6895),w=d(4004),r=d(8274),p=d(8751);let a=(()=>{class e{constructor(o){this.as=o}transform(o){return this.as.planets$.pipe((0,w.U)(i=>i.find(m=>m.id===o)))}}return e.\u0275fac=function(o){return new(o||e)(r.Y36(p.t,16))},e.\u0275pipe=r.Yjl({name:"deducePlanet",type:e,pure:!0,standalone:!0}),e})(),n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["planet"]],inputs:{id:"id"},standalone:!0,features:[r.jDz],decls:4,vars:5,template:function(o,i){if(1&o&&(r.TgZ(0,"span"),r._uU(1),r.ALo(2,"async"),r.ALo(3,"deducePlanet"),r.qZA()),2&o){let m;r.xp6(1),r.hij(" ",null==(m=r.lcZ(2,1,r.lcZ(3,3,i.id)))?null:m.name," ")}},dependencies:[a,h.ez,h.Ov],styles:["span[_ngcontent-%COMP%]{font-weight:bolder;text-transform:capitalize}"]}),e})()}}]);