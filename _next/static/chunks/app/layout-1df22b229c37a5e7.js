(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4108:(e,t,r)=>{Promise.resolve().then(r.bind(r,8241))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),a=n._(r(2115)),l=r(180),s=r(1394),i=r(4116),u=r(4445),c=r(5353),f=r(2170),d=r(9544);function h(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function p(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let m=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:g,prefetch:y=null,passHref:x,replace:b,shallow:v,scroll:j,onClick:k,onMouseEnter:w,onTouchStart:E,legacyBehavior:N=!1,...P}=e;r=g,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=a.default.useContext(s.AppRouterContext),_=!1!==y,C=null===y?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:O,as:S}=a.default.useMemo(()=>{let e=p(l);return{href:e,as:m?p(m):e}},[l,m]),A=a.default.useRef(O),I=a.default.useRef(S);N&&(n=a.default.Children.only(r));let T=N?n&&"object"==typeof n&&n.ref:t,[R,z,L]=(0,i.useIntersection)({rootMargin:"200px"}),U=a.default.useCallback(e=>{(I.current!==S||A.current!==O)&&(L(),I.current=S,A.current=O),R(e)},[S,O,L,R]),F=(0,c.useMergedRef)(U,T);a.default.useEffect(()=>{M&&z&&_&&h(M,O,{kind:C})},[S,O,z,_,M,C]);let B={ref:F,onClick(e){N||"function"!=typeof k||k(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,o,l,s){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),a.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,M,O,S,b,v,j)},onMouseEnter(e){N||"function"!=typeof w||w(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&_&&h(M,O,{kind:C})},onTouchStart:function(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&_&&h(M,O,{kind:C})}};return(0,f.isAbsoluteUrl)(S)?B.href=S:N&&!x&&("a"!==n.type||"href"in n.props)||(B.href=(0,d.addBasePath)(S)),N?a.default.cloneElement(n,B):(0,o.jsx)("a",{...P,...B,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(2115),o=r(8571),a="function"==typeof IntersectionObserver,l=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},s.push(r),l.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[h,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=a(e,n),o.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",l=e.pathname||"",s=e.hash||"",i=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==u?(u="//"+(u||""),l&&"/"!==l[0]&&(l="/"+l)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+a+u+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return h},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=l();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},8241:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(5155),o=r(8308),a=r(2115),l=r(4057);let s=(0,l.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),i=(0,l.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),u=(0,l.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),c=(0,l.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var f=r(8173),d=r.n(f);let h=()=>{let[e,t]=(0,a.useState)(!1),{theme:r,toggleTheme:l}=(0,o.D)(),f=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Education",href:"#education"},{name:"Experience",href:"#experience"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:"fixed top-0 left-0 right-0 h-16 bg-[var(--header-bg)] backdrop-blur-sm z-[100]",children:(0,n.jsx)("nav",{className:"h-full border-b border-[var(--border-color)]",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-full",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(d(),{href:"/",className:"text-xl font-bold text-[var(--accent)]",children:"NS"})}),(0,n.jsxs)("div",{className:"hidden md:flex md:items-center md:space-x-8",children:[f.map(e=>(0,n.jsxs)(d(),{href:e.href,className:"relative group text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300",children:[e.name,(0,n.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"})]},e.name)),(0,n.jsx)("button",{onClick:l,className:"p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200","aria-label":"Toggle theme",children:"dark"===r?(0,n.jsx)(s,{size:20}):(0,n.jsx)(i,{size:20})})]}),(0,n.jsxs)("div",{className:"md:hidden flex items-center space-x-4",children:[(0,n.jsx)("button",{onClick:l,className:"p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]","aria-label":"Toggle theme",children:"dark"===r?(0,n.jsx)(s,{size:20}):(0,n.jsx)(i,{size:20})}),(0,n.jsx)("button",{onClick:()=>t(!e),className:"text-[var(--text-secondary)] hover:text-[var(--accent)]","aria-label":"Toggle menu",children:e?(0,n.jsx)(u,{size:24}):(0,n.jsx)(c,{size:24})})]})]})})})}),e&&(0,n.jsx)("div",{className:"fixed top-16 left-0 right-0 z-[99] bg-[var(--header-bg)] max-w-screen",children:(0,n.jsx)("div",{className:"py-4 border-t border-[var(--border-color)]",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"flex flex-col space-y-2",children:f.map(e=>(0,n.jsx)(d(),{href:e.href,className:"relative group text-[var(--text-secondary)] px-4 py-2 hover:bg-[var(--card-hover)] rounded-lg transition-colors duration-300",onClick:()=>t(!1),children:(0,n.jsxs)("span",{className:"relative",children:[e.name,(0,n.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"})]})},e.name))})})})}),(0,n.jsx)("div",{className:"h-16 ".concat("dark"===r?"bg-[#0B1121]":"bg-gray-50"," transition-colors duration-300")})]})};function p(e){let{children:t}=e;return(0,n.jsx)("html",{lang:"en",className:"scroll-smooth overflow-x-hidden",children:(0,n.jsx)("body",{className:"antialiased overflow-x-hidden bg-gray-50 dark:bg-[#0B1121] transition-colors duration-300",children:(0,n.jsxs)(o.N,{children:[(0,n.jsx)(h,{}),(0,n.jsx)("main",{children:t})]})})})}r(347)},8308:(e,t,r)=>{"use strict";r.d(t,{D:()=>s,N:()=>l});var n=r(5155),o=r(2115);let a=(0,o.createContext)(void 0);function l(e){let{children:t}=e,[r,l]=(0,o.useState)(!1),[s,i]=(0,o.useState)("light");return((0,o.useEffect)(()=>{try{let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=e||t;i(r),document.documentElement.classList.toggle("dark","dark"===r),l(!0)}catch(e){console.error("Failed to load theme:",e),i("light"),l(!0)}},[]),(0,o.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{if(!localStorage.getItem("theme")){let t=e.matches?"dark":"light";i(t),document.documentElement.classList.toggle("dark","dark"===t)}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),r)?(0,n.jsx)(a.Provider,{value:{theme:s,toggleTheme:()=>{let e="dark"===s?"light":"dark";i(e),localStorage.setItem("theme",e),document.documentElement.classList.toggle("dark","dark"===e)}},children:t}):null}function s(){let e=(0,o.useContext)(a);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},347:()=>{},4057:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:u="",children:c,iconNode:f,...d}=e;return(0,n.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:i?24*Number(s)/Number(o):s,className:a("lucide",u),...d},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),i=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:i,...u}=r;return(0,n.createElement)(s,{ref:l,iconNode:t,className:a("lucide-".concat(o(e)),i),...u})});return r.displayName="".concat(e),r}}},e=>{var t=t=>e(e.s=t);e.O(0,[690,441,517,358],()=>t(4108)),_N_E=e.O()}]);