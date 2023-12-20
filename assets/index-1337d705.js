function sm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function am(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var id={exports:{}},ko={},od={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),lm=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),yc=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function rr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||sd}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cd(){}cd.prototype=rr.prototype;function nl(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||sd}var rl=nl.prototype=new cd;rl.constructor=nl;ad(rl,rr.prototype);rl.isPureReactComponent=!0;var xc=Array.isArray,ud=Object.prototype.hasOwnProperty,il={current:null},dd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ud.call(t,r)&&!dd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ii,type:e,key:o,ref:s,props:i,_owner:il.current}}function xm(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wc=/\/+/g;function ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ii:case lm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ds(s,0):r,xc(i)?(n="",e!=null&&(n=e.replace(wc,"$&/")+"/"),Ei(i,t,n,"",function(u){return u})):i!=null&&(ol(i)&&(i=xm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",xc(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+ds(o,a);s+=Ei(o,t,n,c,i)}else if(c=ym(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+ds(o,a++),s+=Ei(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Oi={transition:null},jm={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:il};O.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=rr;O.Fragment=cm;O.Profiler=dm;O.PureComponent=nl;O.StrictMode=um;O.Suspense=gm;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ad({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=il.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)ud.call(t,c)&&!dd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ii,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};O.createElement=pd;O.createFactory=function(e){var t=pd.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:fm,render:e}};O.isValidElement=ol;O.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:_m}};O.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return ye.current.useCallback(e,t)};O.useContext=function(e){return ye.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};O.useEffect=function(e,t){return ye.current.useEffect(e,t)};O.useId=function(){return ye.current.useId()};O.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ye.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};O.useRef=function(e){return ye.current.useRef(e)};O.useState=function(e){return ye.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ye.current.useTransition()};O.version="18.2.0";od.exports=O;var w=od.exports;const Sm=am(w),km=sm({__proto__:null,default:Sm},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=w,Am=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),Fm=Object.prototype.hasOwnProperty,bm=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lm={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Fm.call(t,r)&&!Lm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Am,type:e,key:o,ref:s,props:i,_owner:bm.current}}ko.Fragment=Cm;ko.jsx=md;ko.jsxs=md;id.exports=ko;var l=id.exports;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var At;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(At||(At={}));const _c="popstate";function Wm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return ta("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$i(i)}return Om(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Em(){return Math.random().toString(36).substr(2,8)}function jc(e,t){return{usr:e.state,key:e.key,idx:t}}function ta(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||Em()})}function $i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Om(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=At.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(Xr({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function g(){a=At.Pop;let j=p(),m=j==null?null:j-u;u=j,c&&c({action:a,location:x.location,delta:m})}function f(j,m){a=At.Push;let d=ta(x.location,j,m);n&&n(d,j),u=p()+1;let h=jc(d,u),_=x.createHref(d);try{s.pushState(h,"",_)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(_)}o&&c&&c({action:a,location:x.location,delta:1})}function v(j,m){a=At.Replace;let d=ta(x.location,j,m);n&&n(d,j),u=p();let h=jc(d,u),_=x.createHref(d);s.replaceState(h,"",_),o&&c&&c({action:a,location:x.location,delta:0})}function y(j){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:$i(j);return Y(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let x={get action(){return a},get location(){return e(i,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_c,g),c=j,()=>{i.removeEventListener(_c,g),c=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let m=y(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:v,go(j){return s.go(j)}};return x}var Sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sc||(Sc={}));function Tm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ir(t):t,i=al(r.pathname||"/",n);if(i==null)return null;let o=fd(e);Pm(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=$m(o[a],Hm(i));return s}function fd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Y(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=bt([r,c.relativePath]),p=n.concat(c);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fd(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Im(u,o.index),routesMeta:p})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of gd(o.path))i(o,s,c)}),t}function gd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=gd(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Pm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Um(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bm=/^:\w+$/,Xm=3,Rm=2,Nm=1,zm=10,Mm=-2,kc=e=>e==="*";function Im(e,t){let n=e.split("/"),r=n.length;return n.some(kc)&&(r+=Mm),t&&(r+=Rm),n.filter(i=>!kc(i)).reduce((i,o)=>i+(Bm.test(o)?Xm:o===""?Nm:zm),r)}function Um(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $m(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],c=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=Km({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!p)return null;Object.assign(r,p.params);let g=a.route;o.push({params:r,pathname:bt([i,p.pathname]),pathnameBase:Ym(bt([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=bt([i,p.pathnameBase]))}return o}function Km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,g)=>{if(p==="*"){let f=a[g]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[p]=Gm(a[g]||"",p),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Vm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hm(e){try{return decodeURI(e)}catch(t){return sl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gm(e,t){try{return decodeURIComponent(e)}catch(n){return sl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function al(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Jm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:Zm(n,t):t,search:Qm(r),hash:qm(i)}}function Zm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ll(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Xr({},e),Y(!i.pathname||!i.pathname.includes("?"),ps("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),ps("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),ps("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let g=t.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),g-=1;i.pathname=f.join("/")}a=g>=0?t[g]:"/"}let c=Jm(i,a),u=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),Ym=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hd=["post","put","patch","delete"];new Set(hd);const t1=["get",...hd];new Set(t1);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}const ul=w.createContext(null),vd=w.createContext(null),vn=w.createContext(null),Do=w.createContext(null),st=w.createContext({outlet:null,matches:[],isDataRoute:!1}),yd=w.createContext(null);function n1(e,t){let{relative:n}=t===void 0?{}:t;or()||Y(!1);let{basename:r,navigator:i}=w.useContext(vn),{hash:o,pathname:s,search:a}=pl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:bt([r,s])),i.createHref({pathname:c,search:a,hash:o})}function or(){return w.useContext(Do)!=null}function sr(){return or()||Y(!1),w.useContext(Do).location}function xd(e){w.useContext(vn).static||w.useLayoutEffect(e)}function dl(){let{isDataRoute:e}=w.useContext(st);return e?y1():r1()}function r1(){or()||Y(!1);let e=w.useContext(ul),{basename:t,navigator:n}=w.useContext(vn),{matches:r}=w.useContext(st),{pathname:i}=sr(),o=JSON.stringify(ll(r).map(c=>c.pathnameBase)),s=w.useRef(!1);return xd(()=>{s.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let p=cl(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:bt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,o,i,e])}const i1=w.createContext(null);function o1(e){let t=w.useContext(st).outlet;return t&&w.createElement(i1.Provider,{value:e},t)}function s1(){let{matches:e}=w.useContext(st),t=e[e.length-1];return t?t.params:{}}function pl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(st),{pathname:i}=sr(),o=JSON.stringify(ll(r).map(s=>s.pathnameBase));return w.useMemo(()=>cl(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function a1(e,t){return l1(e,t)}function l1(e,t,n){or()||Y(!1);let{navigator:r}=w.useContext(vn),{matches:i}=w.useContext(st),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=sr(),u;if(t){var p;let x=typeof t=="string"?ir(t):t;a==="/"||(p=x.pathname)!=null&&p.startsWith(a)||Y(!1),u=x}else u=c;let g=u.pathname||"/",f=a==="/"?g:g.slice(a.length)||"/",v=Tm(e,{pathname:f}),y=m1(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:bt([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:bt([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?w.createElement(Do.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:At.Pop}},y):y}function c1(){let e=v1(),t=e1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const u1=w.createElement(c1,null);class d1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(st.Provider,{value:this.props.routeContext},w.createElement(yd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p1(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(ul);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(st.Provider,{value:t},r)}function m1(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));a>=0||Y(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,c,u)=>{let p=c.route.id?s==null?void 0:s[c.route.id]:null,g=null;n&&(g=c.route.errorElement||u1);let f=t.concat(o.slice(0,u+1)),v=()=>{let y;return p?y=g:c.route.Component?y=w.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=a,w.createElement(p1,{match:c,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?w.createElement(d1,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var wd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wd||{}),Vi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vi||{});function f1(e){let t=w.useContext(ul);return t||Y(!1),t}function g1(e){let t=w.useContext(vd);return t||Y(!1),t}function h1(e){let t=w.useContext(st);return t||Y(!1),t}function _d(e){let t=h1(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function v1(){var e;let t=w.useContext(yd),n=g1(Vi.UseRouteError),r=_d(Vi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function y1(){let{router:e}=f1(wd.UseNavigateStable),t=_d(Vi.UseNavigateStable),n=w.useRef(!1);return xd(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ki({fromRouteId:t},o)))},[e,t])}function $4(e){let{to:t,replace:n,state:r,relative:i}=e;or()||Y(!1);let{matches:o}=w.useContext(st),{pathname:s}=sr(),a=dl(),c=cl(t,ll(o).map(p=>p.pathnameBase),s,i==="path"),u=JSON.stringify(c);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function x1(e){return o1(e.context)}function q(e){Y(!1)}function w1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=At.Pop,navigator:o,static:s=!1}=e;or()&&Y(!1);let a=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ir(r));let{pathname:u="/",search:p="",hash:g="",state:f=null,key:v="default"}=r,y=w.useMemo(()=>{let x=al(u,a);return x==null?null:{location:{pathname:x,search:p,hash:g,state:f,key:v},navigationType:i}},[a,u,p,g,f,v,i]);return y==null?null:w.createElement(vn.Provider,{value:c},w.createElement(Do.Provider,{children:n,value:y}))}function _1(e){let{children:t,location:n}=e;return a1(na(t),n)}new Promise(()=>{});function na(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,na(r.props.children,o));return}r.type!==q&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=na(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hi.apply(this,arguments)}function jd(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function j1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S1(e,t){return e.button===0&&(!t||t==="_self")&&!j1(e)}const k1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],D1=["aria-current","caseSensitive","className","end","style","to","children"],A1="startTransition",Dc=km[A1];function C1(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Wm({window:i,v5Compat:!0}));let s=o.current,[a,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=w.useCallback(g=>{u&&Dc?Dc(()=>c(g)):c(g)},[c,u]);return w.useLayoutEffect(()=>s.listen(p),[s,p]),w.createElement(w1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const F1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:p}=t,g=jd(t,k1),{basename:f}=w.useContext(vn),v,y=!1;if(typeof u=="string"&&b1.test(u)&&(v=u,F1))try{let d=new URL(window.location.href),h=u.startsWith("//")?new URL(d.protocol+u):new URL(u),_=al(h.pathname,f);h.origin===d.origin&&_!=null?u=_+h.search+h.hash:y=!0}catch{}let x=n1(u,{relative:i}),j=L1(u,{replace:s,state:a,target:c,preventScrollReset:p,relative:i});function m(d){r&&r(d),d.defaultPrevented||j(d)}return w.createElement("a",Hi({},g,{href:v||x,onClick:y||o?r:m,ref:n,target:c}))}),K4=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:c,children:u}=t,p=jd(t,D1),g=pl(c,{relative:p.relative}),f=sr(),v=w.useContext(vd),{navigator:y}=w.useContext(vn),x=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,j=f.pathname,m=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(j=j.toLowerCase(),m=m?m.toLowerCase():null,x=x.toLowerCase());let d=j===x||!s&&j.startsWith(x)&&j.charAt(x.length)==="/",h=m!=null&&(m===x||!s&&m.startsWith(x)&&m.charAt(x.length)==="/"),_=d?r:void 0,k;typeof o=="function"?k=o({isActive:d,isPending:h}):k=[o,d?"active":null,h?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:d,isPending:h}):a;return w.createElement(P,Hi({},p,{"aria-current":_,className:k,ref:n,style:A,to:c}),typeof u=="function"?u({isActive:d,isPending:h}):u)});var Ac;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ac||(Ac={}));var Cc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cc||(Cc={}));function L1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=dl(),c=sr(),u=pl(e,{relative:s});return w.useCallback(p=>{if(S1(p,n)){p.preventDefault();let g=r!==void 0?r:$i(c)===$i(u);a(e,{replace:g,state:i,preventScrollReset:o,relative:s})}},[c,a,u,r,i,n,e,o,s])}var Sd={exports:{}},kd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=w;function W1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var E1=typeof Object.is=="function"?Object.is:W1,O1=Gn.useState,T1=Gn.useEffect,P1=Gn.useLayoutEffect,B1=Gn.useDebugValue;function X1(e,t){var n=t(),r=O1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return P1(function(){i.value=n,i.getSnapshot=t,ms(i)&&o({inst:i})},[e,n,t]),T1(function(){return ms(i)&&o({inst:i}),e(function(){ms(i)&&o({inst:i})})},[e]),B1(n),n}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!E1(e,n)}catch{return!0}}function R1(e,t){return t()}var N1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?R1:X1;kd.useSyncExternalStore=Gn.useSyncExternalStore!==void 0?Gn.useSyncExternalStore:N1;Sd.exports=kd;var z1=Sd.exports,Dd={exports:{}},Ad={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=w,M1=z1;function I1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var U1=typeof Object.is=="function"?Object.is:I1,$1=M1.useSyncExternalStore,K1=Ao.useRef,V1=Ao.useEffect,H1=Ao.useMemo,G1=Ao.useDebugValue;Ad.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=K1(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=H1(function(){function c(v){if(!u){if(u=!0,p=v,v=r(v),i!==void 0&&s.hasValue){var y=s.value;if(i(y,v))return g=y}return g=v}if(y=g,U1(p,v))return y;var x=r(v);return i!==void 0&&i(y,x)?y:(p=v,g=x)}var u=!1,p,g,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var a=$1(e,o[0],o[1]);return V1(function(){s.hasValue=!0,s.value=a},[a]),G1(a),a};Dd.exports=Ad;var J1=Dd.exports,Cd={exports:{}},Pe={},Fd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,W){var E=C.length;C.push(W);e:for(;0<E;){var J=E-1>>>1,ne=C[J];if(0<i(ne,W))C[J]=W,C[E]=ne,E=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var W=C[0],E=C.pop();if(E!==W){C[0]=E;e:for(var J=0,ne=C.length,ui=ne>>>1;J<ui;){var Ht=2*(J+1)-1,us=C[Ht],Gt=Ht+1,di=C[Gt];if(0>i(us,E))Gt<ne&&0>i(di,us)?(C[J]=di,C[Gt]=E,J=Gt):(C[J]=us,C[Ht]=E,J=Ht);else if(Gt<ne&&0>i(di,E))C[J]=di,C[Gt]=E,J=Gt;else break e}}return W}function i(C,W){var E=C.sortIndex-W.sortIndex;return E!==0?E:C.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],p=1,g=null,f=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=C)r(u),W.sortIndex=W.expirationTime,t(c,W);else break;W=n(u)}}function _(C){if(x=!1,h(C),!y)if(n(c)!==null)y=!0,ls(k);else{var W=n(u);W!==null&&cs(_,W.startTime-C)}}function k(C,W){y=!1,x&&(x=!1,m(b),b=-1),v=!0;var E=f;try{for(h(W),g=n(c);g!==null&&(!(g.expirationTime>W)||C&&!se());){var J=g.callback;if(typeof J=="function"){g.callback=null,f=g.priorityLevel;var ne=J(g.expirationTime<=W);W=e.unstable_now(),typeof ne=="function"?g.callback=ne:g===n(c)&&r(c),h(W)}else r(c);g=n(c)}if(g!==null)var ui=!0;else{var Ht=n(u);Ht!==null&&cs(_,Ht.startTime-W),ui=!1}return ui}finally{g=null,f=E,v=!1}}var A=!1,F=null,b=-1,R=5,L=-1;function se(){return!(e.unstable_now()-L<R)}function ur(){if(F!==null){var C=e.unstable_now();L=C;var W=!0;try{W=F(!0,C)}finally{W?dr():(A=!1,F=null)}}else A=!1}var dr;if(typeof d=="function")dr=function(){d(ur)};else if(typeof MessageChannel<"u"){var vc=new MessageChannel,om=vc.port2;vc.port1.onmessage=ur,dr=function(){om.postMessage(null)}}else dr=function(){j(ur,0)};function ls(C){F=C,A||(A=!0,dr())}function cs(C,W){b=j(function(){C(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ls(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var E=f;f=W;try{return C()}finally{f=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,W){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var E=f;f=C;try{return W()}finally{f=E}},e.unstable_scheduleCallback=function(C,W,E){var J=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?J+E:J):E=J,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=E+ne,C={id:p++,callback:W,priorityLevel:C,startTime:E,expirationTime:ne,sortIndex:-1},E>J?(C.sortIndex=E,t(u,C),n(c)===null&&C===n(u)&&(x?(m(b),b=-1):x=!0,cs(_,E-J))):(C.sortIndex=ne,t(c,C),y||v||(y=!0,ls(k))),C},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(C){var W=f;return function(){var E=f;f=W;try{return C.apply(this,arguments)}finally{f=E}}}})(bd);Fd.exports=bd;var Z1=Fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=w,Oe=Z1;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,Rr={};function yn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Wd.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fc={},bc={};function Q1(e){return ra.call(bc,e)?!0:ra.call(Fc,e)?!1:Y1.test(e)?bc[e]=!0:(Fc[e]=!0,!1)}function q1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ef(e,t,n,r){if(t===null||typeof t>"u"||q1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,fl);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,fl);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,fl);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function gl(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ef(t,n,i,r)&&(n=null),r||i===null?Q1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Od=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,fs;function Sr(e){if(fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||""}return`
`+fs+e}var gs=!1;function hs(e,t){if(!e||gs)return"";gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function tf(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Fn:return"Portal";case ia:return"Profiler";case hl:return"StrictMode";case oa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Od:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function nf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rf(e){var t=Pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=rf(e))}function Bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xd(e,t){t=t.checked,t!=null&&gl(e,"checked",t,!1)}function ca(e,t){Xd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ec(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(kr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Rd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function Md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function Id(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Md(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,Mn=null,In=null;function Pc(e){if(e=ai(e)){if(typeof ha!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Wo(t),ha(e.stateNode,e.type,t))}}function Ud(e){Mn?In?In.push(e):In=[e]:Mn=e}function $d(){if(Mn){var e=Mn,t=In;if(In=Mn=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Kd(e,t){return e(t)}function Vd(){}var vs=!1;function Hd(e,t,n){if(vs)return e(t,n);vs=!0;try{return Kd(e,t,n)}finally{vs=!1,(Mn!==null||In!==null)&&(Vd(),$d())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var va=!1;if(mt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){va=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{va=!1}function af(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var br=!1,Ji=null,Zi=!1,ya=null,lf={onError:function(e){br=!0,Ji=e}};function cf(e,t,n,r,i,o,s,a,c){br=!1,Ji=null,af.apply(lf,arguments)}function uf(e,t,n,r,i,o,s,a,c){if(cf.apply(this,arguments),br){if(br){var u=Ji;br=!1,Ji=null}else throw Error(S(198));Zi||(Zi=!0,ya=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if(xn(e)!==e)throw Error(S(188))}function df(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bc(i),e;if(o===r)return Bc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Jd(e){return e=df(e),e!==null?Zd(e):null}function Zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zd(e);if(t!==null)return t;e=e.sibling}return null}var Yd=Oe.unstable_scheduleCallback,Xc=Oe.unstable_cancelCallback,pf=Oe.unstable_shouldYield,mf=Oe.unstable_requestPaint,Z=Oe.unstable_now,ff=Oe.unstable_getCurrentPriorityLevel,wl=Oe.unstable_ImmediatePriority,Qd=Oe.unstable_UserBlockingPriority,Yi=Oe.unstable_NormalPriority,gf=Oe.unstable_LowPriority,qd=Oe.unstable_IdlePriority,Co=null,rt=null;function hf(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:xf,vf=Math.log,yf=Math.LN2;function xf(e){return e>>>=0,e===0?32:31-(vf(e)/yf|0)|0}var hi=64,vi=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Dr(a):(o&=s,o!==0&&(r=Dr(o)))}else s=n&~i,s!==0?r=Dr(s):o!==0&&(r=Dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _f(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ye(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=wf(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ep(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _l(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var np,jl,rp,ip,op,wa=!1,yi=[],Lt=null,Wt=null,Et=null,Mr=new Map,Ir=new Map,St=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function fr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ai(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kf(e,t,n,r,i){switch(t){case"focusin":return Lt=fr(Lt,e,t,n,r,i),!0;case"dragenter":return Wt=fr(Wt,e,t,n,r,i),!0;case"mouseover":return Et=fr(Et,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,fr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,fr(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function sp(e){var t=on(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gd(n),t!==null){e.blockedOn=t,op(e.priority,function(){rp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ga=r,n.target.dispatchEvent(r),ga=null}else return t=ai(n),t!==null&&jl(t),e.blockedOn=n,!1;t.shift()}return!0}function Nc(e,t,n){Ti(e)&&n.delete(t)}function Df(){wa=!1,Lt!==null&&Ti(Lt)&&(Lt=null),Wt!==null&&Ti(Wt)&&(Wt=null),Et!==null&&Ti(Et)&&(Et=null),Mr.forEach(Nc),Ir.forEach(Nc)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Df)))}function Ur(e){function t(i){return gr(i,e)}if(0<yi.length){gr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&gr(Lt,e),Wt!==null&&gr(Wt,e),Et!==null&&gr(Et,e),Mr.forEach(t),Ir.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)sp(n),n.blockedOn===null&&St.shift()}var Un=yt.ReactCurrentBatchConfig,qi=!0;function Af(e,t,n,r){var i=B,o=Un.transition;Un.transition=null;try{B=1,Sl(e,t,n,r)}finally{B=i,Un.transition=o}}function Cf(e,t,n,r){var i=B,o=Un.transition;Un.transition=null;try{B=4,Sl(e,t,n,r)}finally{B=i,Un.transition=o}}function Sl(e,t,n,r){if(qi){var i=_a(e,t,n,r);if(i===null)Fs(e,t,r,eo,n),Rc(e,r);else if(kf(i,e,t,n,r))r.stopPropagation();else if(Rc(e,r),t&4&&-1<Sf.indexOf(e)){for(;i!==null;){var o=ai(i);if(o!==null&&np(o),o=_a(e,t,n,r),o===null&&Fs(e,t,r,eo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fs(e,t,r,null,n)}}var eo=null;function _a(e,t,n,r){if(eo=null,e=xl(r),e=on(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function ap(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ff()){case wl:return 1;case Qd:return 4;case Yi:case gf:return 16;case qd:return 536870912;default:return 16}default:return 16}}var Ct=null,kl=null,Pi=null;function lp(){if(Pi)return Pi;var e,t=kl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function zc(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:zc,this.isPropagationStopped=zc,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Be(ar),si=H({},ar,{view:0,detail:0}),Ff=Be(si),xs,ws,hr,Fo=H({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(xs=e.screenX-hr.screenX,ws=e.screenY-hr.screenY):ws=xs=0,hr=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),Mc=Be(Fo),bf=H({},Fo,{dataTransfer:0}),Lf=Be(bf),Wf=H({},si,{relatedTarget:0}),_s=Be(Wf),Ef=H({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Of=Be(Ef),Tf=H({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Be(Tf),Bf=H({},ar,{data:0}),Ic=Be(Bf),Xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function Al(){return zf}var Mf=H({},si,{key:function(e){if(e.key){var t=Xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=Be(Mf),Uf=H({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=Be(Uf),$f=H({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),Kf=Be($f),Vf=H({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hf=Be(Vf),Gf=H({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jf=Be(Gf),Zf=[9,13,27,32],Cl=mt&&"CompositionEvent"in window,Lr=null;mt&&"documentMode"in document&&(Lr=document.documentMode);var Yf=mt&&"TextEvent"in window&&!Lr,cp=mt&&(!Cl||Lr&&8<Lr&&11>=Lr),$c=String.fromCharCode(32),Kc=!1;function up(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Qf(e,t){switch(e){case"compositionend":return dp(t);case"keypress":return t.which!==32?null:(Kc=!0,$c);case"textInput":return e=t.data,e===$c&&Kc?null:e;default:return null}}function qf(e,t){if(Ln)return e==="compositionend"||!Cl&&up(e,t)?(e=lp(),Pi=kl=Ct=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eg[e.type]:t==="textarea"}function pp(e,t,n,r){Ud(r),t=to(t,"onChange"),0<t.length&&(n=new Dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,$r=null;function tg(e){Sp(e,0)}function bo(e){var t=On(e);if(Bd(t))return e}function ng(e,t){if(e==="change")return t}var mp=!1;if(mt){var js;if(mt){var Ss="oninput"in document;if(!Ss){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Ss=typeof Hc.oninput=="function"}js=Ss}else js=!1;mp=js&&(!document.documentMode||9<document.documentMode)}function Gc(){Wr&&(Wr.detachEvent("onpropertychange",fp),$r=Wr=null)}function fp(e){if(e.propertyName==="value"&&bo($r)){var t=[];pp(t,$r,e,xl(e)),Hd(tg,t)}}function rg(e,t,n){e==="focusin"?(Gc(),Wr=t,$r=n,Wr.attachEvent("onpropertychange",fp)):e==="focusout"&&Gc()}function ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo($r)}function og(e,t){if(e==="click")return bo(t)}function sg(e,t){if(e==="input"||e==="change")return bo(t)}function ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:ag;function Kr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ra.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hp(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function Fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lg(e){var t=hp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gp(n.ownerDocument.documentElement,n)){if(r!==null&&Fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zc(n,o);var s=Zc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=mt&&"documentMode"in document&&11>=document.documentMode,Wn=null,ja=null,Er=null,Sa=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||Wn==null||Wn!==Gi(r)||(r=Wn,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Kr(Er,r)||(Er=r,r=to(ja,"onSelect"),0<r.length&&(t=new Dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},ks={},vp={};mt&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Lo(e){if(ks[e])return ks[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vp)return ks[e]=t[n];return e}var yp=Lo("animationend"),xp=Lo("animationiteration"),wp=Lo("animationstart"),_p=Lo("transitionend"),jp=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){jp.set(e,t),yn(t,[e])}for(var Ds=0;Ds<Qc.length;Ds++){var As=Qc[Ds],ug=As.toLowerCase(),dg=As[0].toUpperCase()+As.slice(1);$t(ug,"on"+dg)}$t(yp,"onAnimationEnd");$t(xp,"onAnimationIteration");$t(wp,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(_p,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function qc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uf(r,t,void 0,e),e.currentTarget=null}function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;qc(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;qc(i,a,u),o=c}}}if(Zi)throw e=ya,Zi=!1,ya=null,e}function M(e,t){var n=t[Fa];n===void 0&&(n=t[Fa]=new Set);var r=e+"__bubble";n.has(r)||(kp(t,e,2,!1),n.add(r))}function Cs(e,t,n){var r=0;t&&(r|=4),kp(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[_i]){e[_i]=!0,Wd.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||Cs(n,!1,e),Cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Cs("selectionchange",!1,t))}}function kp(e,t,n,r){switch(ap(t)){case 1:var i=Af;break;case 4:i=Cf;break;default:i=Sl}n=i.bind(null,t,n,e),i=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=on(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Hd(function(){var u=o,p=xl(n),g=[];e:{var f=jp.get(e);if(f!==void 0){var v=Dl,y=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":v=If;break;case"focusin":y="focus",v=_s;break;case"focusout":y="blur",v=_s;break;case"beforeblur":case"afterblur":v=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kf;break;case yp:case xp:case wp:v=Of;break;case _p:v=Hf;break;case"scroll":v=Ff;break;case"wheel":v=Jf;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Uc}var x=(t&4)!==0,j=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var d=u,h;d!==null;){h=d;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,m!==null&&(_=zr(d,m),_!=null&&x.push(Hr(d,_,h)))),j)break;d=d.return}0<x.length&&(f=new v(f,y,null,n,p),g.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ga&&(y=n.relatedTarget||n.fromElement)&&(on(y)||y[ft]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?on(y):null,y!==null&&(j=xn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Mc,_="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Uc,_="onPointerLeave",m="onPointerEnter",d="pointer"),j=v==null?f:On(v),h=y==null?f:On(y),f=new x(_,d+"leave",v,n,p),f.target=j,f.relatedTarget=h,_=null,on(p)===u&&(x=new x(m,d+"enter",y,n,p),x.target=h,x.relatedTarget=j,_=x),j=_,v&&y)t:{for(x=v,m=y,d=0,h=x;h;h=wn(h))d++;for(h=0,_=m;_;_=wn(_))h++;for(;0<d-h;)x=wn(x),d--;for(;0<h-d;)m=wn(m),h--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break t;x=wn(x),m=wn(m)}x=null}else x=null;v!==null&&eu(g,f,v,x,!1),y!==null&&j!==null&&eu(g,j,y,x,!0)}}e:{if(f=u?On(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var k=ng;else if(Vc(f))if(mp)k=sg;else{k=ig;var A=rg}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=og);if(k&&(k=k(e,u))){pp(g,k,n,p);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&ua(f,"number",f.value)}switch(A=u?On(u):window,e){case"focusin":(Vc(A)||A.contentEditable==="true")&&(Wn=A,ja=u,Er=null);break;case"focusout":Er=ja=Wn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Yc(g,n,p);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":Yc(g,n,p)}var F;if(Cl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ln?up(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(cp&&n.locale!=="ko"&&(Ln||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ln&&(F=lp()):(Ct=p,kl="value"in Ct?Ct.value:Ct.textContent,Ln=!0)),A=to(u,b),0<A.length&&(b=new Ic(b,e,null,n,p),g.push({event:b,listeners:A}),F?b.data=F:(F=dp(n),F!==null&&(b.data=F)))),(F=Yf?Qf(e,n):qf(e,n))&&(u=to(u,"onBeforeInput"),0<u.length&&(p=new Ic("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=F))}Sp(g,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zr(e,n),o!=null&&r.unshift(Hr(e,o,i)),o=zr(e,t),o!=null&&r.push(Hr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=zr(n,o),c!=null&&s.unshift(Hr(n,c,a))):i||(c=zr(n,o),c!=null&&s.push(Hr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var mg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(fg,"")}function ji(e,t,n){if(t=tu(t),tu(e)!==t&&n)throw Error(S(425))}function no(){}var ka=null,Da=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(vg)}:Ca;function vg(e){setTimeout(function(){throw e})}function bs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),nt="__reactFiber$"+lr,Gr="__reactProps$"+lr,ft="__reactContainer$"+lr,Fa="__reactEvents$"+lr,yg="__reactListeners$"+lr,xg="__reactHandles$"+lr;function on(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ru(e);e!==null;){if(n=e[nt])return n;e=ru(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Wo(e){return e[Gr]||null}var ba=[],Tn=-1;function Kt(e){return{current:e}}function I(e){0>Tn||(e.current=ba[Tn],ba[Tn]=null,Tn--)}function z(e,t){Tn++,ba[Tn]=e.current,e.current=t}var Mt={},fe=Kt(Mt),ke=Kt(!1),dn=Mt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function ro(){I(ke),I(fe)}function iu(e,t,n){if(fe.current!==Mt)throw Error(S(168));z(fe,t),z(ke,n)}function Dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,nf(e)||"Unknown",i));return H({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,dn=fe.current,z(fe,e),z(ke,ke.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Dp(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,I(ke),I(fe),z(fe,e)):I(ke),z(ke,n)}var lt=null,Eo=!1,Ls=!1;function Ap(e){lt===null?lt=[e]:lt.push(e)}function wg(e){Eo=!0,Ap(e)}function Vt(){if(!Ls&&lt!==null){Ls=!0;var e=0,t=B;try{var n=lt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Eo=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),Yd(wl,Vt),i}finally{B=t,Ls=!1}}return null}var Pn=[],Bn=0,oo=null,so=0,Ne=[],ze=0,pn=null,ut=1,dt="";function en(e,t){Pn[Bn++]=so,Pn[Bn++]=oo,oo=e,so=t}function Cp(e,t,n){Ne[ze++]=ut,Ne[ze++]=dt,Ne[ze++]=pn,pn=e;var r=ut;e=dt;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var o=32-Ye(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ut=1<<32-Ye(t)+i|n<<i|r,dt=o+e}else ut=1<<o|n<<i|r,dt=e}function bl(e){e.return!==null&&(en(e,1),Cp(e,1,0))}function Ll(e){for(;e===oo;)oo=Pn[--Bn],Pn[Bn]=null,so=Pn[--Bn],Pn[Bn]=null;for(;e===pn;)pn=Ne[--ze],Ne[ze]=null,dt=Ne[--ze],Ne[ze]=null,ut=Ne[--ze],Ne[ze]=null}var Ee=null,We=null,$=!1,Je=null;function Fp(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,We=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:ut,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,We=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wa(e){if($){var t=We;if(t){var n=t;if(!su(e,t)){if(La(e))throw Error(S(418));t=Ot(n.nextSibling);var r=Ee;t&&su(e,t)?Fp(r,n):(e.flags=e.flags&-4097|2,$=!1,Ee=e)}}else{if(La(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Ee=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Si(e){if(e!==Ee)return!1;if(!$)return au(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=We)){if(La(e))throw bp(),Error(S(418));for(;t;)Fp(e,t),t=Ot(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ee?Ot(e.stateNode.nextSibling):null;return!0}function bp(){for(var e=We;e;)e=Ot(e.nextSibling)}function Yn(){We=Ee=null,$=!1}function Wl(e){Je===null?Je=[e]:Je.push(e)}var _g=yt.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ao=Kt(null),lo=null,Xn=null,El=null;function Ol(){El=Xn=lo=null}function Tl(e){var t=ao.current;I(ao),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){lo=e,El=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(lo===null)throw Error(S(308));Xn=e,lo.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var sn=null;function Pl(e){sn===null?sn=[e]:sn.push(e)}function Lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pl(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Pl(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}function lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(o!==null){var g=i.baseState;s=0,p=u=c=null,a=o;do{var f=a.lane,v=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(f=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){g=y.call(v,g,f);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,g,f):y,f==null)break e;g=H({},g,f);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,c=g):p=p.next=v,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(p===null&&(c=g),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=g}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ep=new Ld.Component().refs;function Oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Bt(e),o=pt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Bt(e),o=pt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Bt(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Qe(t,e,r,n),Xi(t,e,r))}};function uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function Op(e,t,n){var r=!1,i=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=De(t)?dn:fe.current,r=t.contextTypes,o=(r=r!=null)?Zn(e,i):Mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ep,Bl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=De(t)?dn:fe.current,i.context=Zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ep&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function Tp(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Xt(m,d),m.index=0,m.sibling=null,m}function o(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,h,_){return d===null||d.tag!==6?(d=Xs(h,m.mode,_),d.return=m,d):(d=i(d,h),d.return=m,d)}function c(m,d,h,_){var k=h.type;return k===bn?p(m,d,h.props.children,_,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&pu(k)===d.type)?(_=i(d,h.props),_.ref=vr(m,d,h),_.return=m,_):(_=Ui(h.type,h.key,h.props,null,m.mode,_),_.ref=vr(m,d,h),_.return=m,_)}function u(m,d,h,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Rs(h,m.mode,_),d.return=m,d):(d=i(d,h.children||[]),d.return=m,d)}function p(m,d,h,_,k){return d===null||d.tag!==7?(d=un(h,m.mode,_,k),d.return=m,d):(d=i(d,h),d.return=m,d)}function g(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xs(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mi:return h=Ui(d.type,d.key,d.props,null,m.mode,h),h.ref=vr(m,null,d),h.return=m,h;case Fn:return d=Rs(d,m.mode,h),d.return=m,d;case _t:var _=d._init;return g(m,_(d._payload),h)}if(kr(d)||pr(d))return d=un(d,m.mode,h,null),d.return=m,d;ki(m,d)}return null}function f(m,d,h,_){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(m,d,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:return h.key===k?c(m,d,h,_):null;case Fn:return h.key===k?u(m,d,h,_):null;case _t:return k=h._init,f(m,d,k(h._payload),_)}if(kr(h)||pr(h))return k!==null?null:p(m,d,h,_,null);ki(m,h)}return null}function v(m,d,h,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(h)||null,a(d,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case mi:return m=m.get(_.key===null?h:_.key)||null,c(d,m,_,k);case Fn:return m=m.get(_.key===null?h:_.key)||null,u(d,m,_,k);case _t:var A=_._init;return v(m,d,h,A(_._payload),k)}if(kr(_)||pr(_))return m=m.get(h)||null,p(d,m,_,k,null);ki(d,_)}return null}function y(m,d,h,_){for(var k=null,A=null,F=d,b=d=0,R=null;F!==null&&b<h.length;b++){F.index>b?(R=F,F=null):R=F.sibling;var L=f(m,F,h[b],_);if(L===null){F===null&&(F=R);break}e&&F&&L.alternate===null&&t(m,F),d=o(L,d,b),A===null?k=L:A.sibling=L,A=L,F=R}if(b===h.length)return n(m,F),$&&en(m,b),k;if(F===null){for(;b<h.length;b++)F=g(m,h[b],_),F!==null&&(d=o(F,d,b),A===null?k=F:A.sibling=F,A=F);return $&&en(m,b),k}for(F=r(m,F);b<h.length;b++)R=v(F,m,b,h[b],_),R!==null&&(e&&R.alternate!==null&&F.delete(R.key===null?b:R.key),d=o(R,d,b),A===null?k=R:A.sibling=R,A=R);return e&&F.forEach(function(se){return t(m,se)}),$&&en(m,b),k}function x(m,d,h,_){var k=pr(h);if(typeof k!="function")throw Error(S(150));if(h=k.call(h),h==null)throw Error(S(151));for(var A=k=null,F=d,b=d=0,R=null,L=h.next();F!==null&&!L.done;b++,L=h.next()){F.index>b?(R=F,F=null):R=F.sibling;var se=f(m,F,L.value,_);if(se===null){F===null&&(F=R);break}e&&F&&se.alternate===null&&t(m,F),d=o(se,d,b),A===null?k=se:A.sibling=se,A=se,F=R}if(L.done)return n(m,F),$&&en(m,b),k;if(F===null){for(;!L.done;b++,L=h.next())L=g(m,L.value,_),L!==null&&(d=o(L,d,b),A===null?k=L:A.sibling=L,A=L);return $&&en(m,b),k}for(F=r(m,F);!L.done;b++,L=h.next())L=v(F,m,b,L.value,_),L!==null&&(e&&L.alternate!==null&&F.delete(L.key===null?b:L.key),d=o(L,d,b),A===null?k=L:A.sibling=L,A=L);return e&&F.forEach(function(ur){return t(m,ur)}),$&&en(m,b),k}function j(m,d,h,_){if(typeof h=="object"&&h!==null&&h.type===bn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:e:{for(var k=h.key,A=d;A!==null;){if(A.key===k){if(k=h.type,k===bn){if(A.tag===7){n(m,A.sibling),d=i(A,h.props.children),d.return=m,m=d;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&pu(k)===A.type){n(m,A.sibling),d=i(A,h.props),d.ref=vr(m,A,h),d.return=m,m=d;break e}n(m,A);break}else t(m,A);A=A.sibling}h.type===bn?(d=un(h.props.children,m.mode,_,h.key),d.return=m,m=d):(_=Ui(h.type,h.key,h.props,null,m.mode,_),_.ref=vr(m,d,h),_.return=m,m=_)}return s(m);case Fn:e:{for(A=h.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=i(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Rs(h,m.mode,_),d.return=m,m=d}return s(m);case _t:return A=h._init,j(m,d,A(h._payload),_)}if(kr(h))return y(m,d,h,_);if(pr(h))return x(m,d,h,_);ki(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,h),d.return=m,m=d):(n(m,d),d=Xs(h,m.mode,_),d.return=m,m=d),s(m)):n(m,d)}return j}var Qn=Tp(!0),Pp=Tp(!1),li={},it=Kt(li),Jr=Kt(li),Zr=Kt(li);function an(e){if(e===li)throw Error(S(174));return e}function Xl(e,t){switch(z(Zr,t),z(Jr,e),z(it,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}I(it),z(it,t)}function qn(){I(it),I(Jr),I(Zr)}function Bp(e){an(Zr.current);var t=an(it.current),n=pa(t,e.type);t!==n&&(z(Jr,e),z(it,n))}function Rl(e){Jr.current===e&&(I(it),I(Jr))}var K=Kt(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ws=[];function Nl(){for(var e=0;e<Ws.length;e++)Ws[e]._workInProgressVersionPrimary=null;Ws.length=0}var Ri=yt.ReactCurrentDispatcher,Es=yt.ReactCurrentBatchConfig,mn=0,V=null,ee=null,re=null,po=!1,Or=!1,Yr=0,jg=0;function ue(){throw Error(S(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Ml(e,t,n,r,i,o){if(mn=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Ag:Cg,e=n(r,i),Or){o=0;do{if(Or=!1,Yr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,Ri.current=Fg,e=n(r,i)}while(Or)}if(Ri.current=mo,t=ee!==null&&ee.next!==null,mn=0,re=ee=V=null,po=!1,t)throw Error(S(300));return e}function Il(){var e=Yr!==0;return Yr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?V.memoizedState=re=e:re=re.next=e,re}function $e(){if(ee===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?V.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?V.memoizedState=re=e:re=re.next=e}return re}function Qr(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=$e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var p=u.lane;if((mn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=g,s=r):c=c.next=g,V.lanes|=p,fn|=p}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ts(e){var t=$e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);qe(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xp(){}function Rp(e,t){var n=V,r=$e(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Ul(Mp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,qr(9,zp.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));mn&30||Np(n,t,i)}return i}function Np(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zp(e,t,n,r){t.value=n,t.getSnapshot=r,Ip(t)&&Up(e)}function Mp(e,t,n){return n(function(){Ip(t)&&Up(e)})}function Ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Up(e){var t=gt(e,1);t!==null&&Qe(t,e,1,-1)}function mu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,V,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $p(){return $e().memoizedState}function Ni(e,t,n,r){var i=tt();V.flags|=e,i.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var i=$e();r=r===void 0?null:r;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,r!==null&&zl(r,s.deps)){i.memoizedState=qr(t,n,o,r);return}}V.flags|=e,i.memoizedState=qr(1|t,n,o,r)}function fu(e,t){return Ni(8390656,8,e,t)}function Ul(e,t){return To(2048,8,e,t)}function Kp(e,t){return To(4,2,e,t)}function Vp(e,t){return To(4,4,e,t)}function Hp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gp(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,Hp.bind(null,t,e),n)}function $l(){}function Jp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yp(e,t,n){return mn&21?(qe(n,t)||(n=ep(),V.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Sg(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Es.transition;Es.transition={};try{e(!1),t()}finally{B=n,Es.transition=r}}function Qp(){return $e().memoizedState}function kg(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qp(e))e0(t,n);else if(n=Lp(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),t0(n,t,r)}}function Dg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qp(e))e0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,s)){var c=t.interleaved;c===null?(i.next=i,Pl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Lp(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),t0(n,t,r))}}function qp(e){var t=e.alternate;return e===V||t!==null&&t===V}function e0(e,t){Or=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}var mo={readContext:Ue,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Ag={readContext:Ue,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,Hp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kg.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:$l,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=Sg.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=tt();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));mn&30||Np(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fu(Mp.bind(null,r,o,e),[e]),r.flags|=2048,qr(9,zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=ie.identifierPrefix;if($){var n=dt,r=ut;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cg={readContext:Ue,useCallback:Jp,useContext:Ue,useEffect:Ul,useImperativeHandle:Gp,useInsertionEffect:Kp,useLayoutEffect:Vp,useMemo:Zp,useReducer:Os,useRef:$p,useState:function(){return Os(Qr)},useDebugValue:$l,useDeferredValue:function(e){var t=$e();return Yp(t,ee.memoizedState,e)},useTransition:function(){var e=Os(Qr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Rp,useId:Qp,unstable_isNewReconciler:!1},Fg={readContext:Ue,useCallback:Jp,useContext:Ue,useEffect:Ul,useImperativeHandle:Gp,useInsertionEffect:Kp,useLayoutEffect:Vp,useMemo:Zp,useReducer:Ts,useRef:$p,useState:function(){return Ts(Qr)},useDebugValue:$l,useDeferredValue:function(e){var t=$e();return ee===null?t.memoizedState=e:Yp(t,ee.memoizedState,e)},useTransition:function(){var e=Ts(Qr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Rp,useId:Qp,unstable_isNewReconciler:!1};function er(e,t){try{var n="",r=t;do n+=tf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function n0(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,Ka=r),Pa(e,t)},n}function r0(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pa(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ug.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var Lg=yt.ReactCurrentOwner,Se=!1;function he(e,t,n,r){t.child=e===null?Pp(t,null,n,r):Qn(t,e.child,n,r)}function yu(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Ml(e,t,n,r,o,i),n=Il(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):($&&n&&bl(t),t.flags|=1,he(e,t,r,i),t.child)}function xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ql(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,i0(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(s,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function i0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ht(e,t,i)}return Ba(e,t,n,r,i)}function o0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,be),be|=r;return he(e,t,i,n),t.child}function s0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ba(e,t,n,r,i){var o=De(n)?dn:fe.current;return o=Zn(t,o),$n(t,i),n=Ml(e,t,n,r,o,i),r=Il(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):($&&r&&bl(t),t.flags|=1,he(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(De(n)){var o=!0;io(t)}else o=!1;if($n(t,i),t.stateNode===null)zi(e,t),Op(t,n,r),Ta(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=De(n)?dn:fe.current,u=Zn(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&du(t,s,r,u),jt=!1;var f=t.memoizedState;s.state=f,co(t,r,s,i),c=t.memoizedState,a!==r||f!==c||ke.current||jt?(typeof p=="function"&&(Oa(t,n,p,r),c=t.memoizedState),(a=jt||uu(t,n,a,r,f,c,u))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:He(t.type,a),s.props=u,g=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ue(c):(c=De(n)?dn:fe.current,c=Zn(t,c));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||f!==c)&&du(t,s,r,c),jt=!1,f=t.memoizedState,s.state=f,co(t,r,s,i);var y=t.memoizedState;a!==g||f!==y||ke.current||jt?(typeof v=="function"&&(Oa(t,n,v,r),y=t.memoizedState),(u=jt||uu(t,n,u,r,f,y,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xa(e,t,n,r,o,i)}function Xa(e,t,n,r,i,o){s0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ou(t,n,!1),ht(e,t,o);r=t.stateNode,Lg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Qn(t,e.child,null,o),t.child=Qn(t,null,a,o)):he(e,t,a,o),t.memoizedState=r.state,i&&ou(t,n,!0),t.child}function a0(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Xl(e,t.containerInfo)}function _u(e,t,n,r,i){return Yn(),Wl(i),t.flags|=256,he(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function l0(e,t,n){var r=t.pendingProps,i=K.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(K,i&1),e===null)return Wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xo(s,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Na(n),t.memoizedState=Ra,e):Kl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=un(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Na(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kl(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Di(e,t,n,r){return r!==null&&Wl(r),Qn(t,e.child,null,n),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ps(Error(S(422))),Di(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xo({mode:"visible",children:r.children},i,0,null),o=un(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qn(t,e.child,null,s),t.child.memoizedState=Na(s),t.memoizedState=Ra,o);if(!(t.mode&1))return Di(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Ps(o,r,void 0),Di(e,t,s,r)}if(a=(s&e.childLanes)!==0,Se||a){if(r=ie,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Qe(r,e,i,-1))}return Yl(),r=Ps(Error(S(421))),Di(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$g.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=Ot(i.nextSibling),Ee=t,$=!0,Je=null,e!==null&&(Ne[ze++]=ut,Ne[ze++]=dt,Ne[ze++]=pn,ut=e.id,dt=e.overflow,pn=t),t=Kl(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eg(e,t,n){switch(t.tag){case 3:a0(t),Yn();break;case 5:Bp(t);break;case 1:De(t.type)&&io(t);break;case 4:Xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?l0(e,t,n):(z(K,K.current&1),e=ht(e,t,n),e!==null?e.sibling:null);z(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,o0(e,t,n)}return ht(e,t,n)}var u0,za,d0,p0;u0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};d0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(it.current);var o=null;switch(n){case"input":i=la(e,i),r=la(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=da(e,i),r=da(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}ma(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&M("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};p0=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Og(e,t,n){var r=t.pendingProps;switch(Ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return De(t.type)&&ro(),de(t),null;case 3:return r=t.stateNode,qn(),I(ke),I(fe),Nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Ga(Je),Je=null))),za(e,t),de(t),null;case 5:Rl(t);var i=an(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)d0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=an(it.current),Si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Gr]=o,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)M(Ar[i],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Wc(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":Oc(r,o),M("invalid",r)}ma(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&M("scroll",r)}switch(n){case"input":fi(r),Ec(r,o,!0);break;case"textarea":fi(r),Tc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=no)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Gr]=r,u0(e,t,!1,!1),t.stateNode=e;e:{switch(s=fa(n,r),n){case"dialog":M("cancel",e),M("close",e),i=r;break;case"iframe":case"object":case"embed":M("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)M(Ar[i],e);i=r;break;case"source":M("error",e),i=r;break;case"img":case"image":case"link":M("error",e),M("load",e),i=r;break;case"details":M("toggle",e),i=r;break;case"input":Wc(e,r),i=la(e,r),M("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),M("invalid",e);break;case"textarea":Oc(e,r),i=da(e,r),M("invalid",e);break;default:i=r}ma(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?Id(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zd(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Nr(e,c):typeof c=="number"&&Nr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&M("scroll",e):c!=null&&gl(e,o,c,s))}switch(n){case"input":fi(e),Ec(e,r,!1);break;case"textarea":fi(e),Tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)p0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=an(Zr.current),an(it.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return de(t),null;case 13:if(I(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&We!==null&&t.mode&1&&!(t.flags&128))bp(),Yn(),t.flags|=98560,o=!1;else if(o=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[nt]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Je!==null&&(Ga(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Yl())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return qn(),za(e,t),e===null&&Vr(t.stateNode.containerInfo),de(t),null;case 10:return Tl(t.type._context),de(t),null;case 17:return De(t.type)&&ro(),de(t),null;case 19:if(I(K),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)yr(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,yr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>tr&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return de(t),null}else 2*Z()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=K.current,z(K,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Zl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Tg(e,t){switch(Ll(t),t.tag){case 1:return De(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),I(ke),I(fe),Nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(I(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(K),null;case 4:return qn(),null;case 10:return Tl(t.type._context),null;case 22:case 23:return Zl(),null;case 24:return null;default:return null}}var Ai=!1,me=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,D=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ma(e,t,n){try{n()}catch(r){G(e,t,r)}}var Su=!1;function Bg(e,t){if(ka=qi,e=hp(),Fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,p=0,g=e,f=null;t:for(;;){for(var v;g!==n||i!==0&&g.nodeType!==3||(a=s+i),g!==o||r!==0&&g.nodeType!==3||(c=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(v=g.firstChild)!==null;)f=g,g=v;for(;;){if(g===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++p===r&&(c=s),(v=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:e,selectionRange:n},qi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:He(t.type,x),j);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){G(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=Su,Su=!1,y}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ma(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function m0(e){var t=e.alternate;t!==null&&(e.alternate=null,m0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Gr],delete t[Fa],delete t[yg],delete t[xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function f0(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var ae=null,Ge=!1;function xt(e,t,n){for(n=n.child;n!==null;)g0(e,t,n),n=n.sibling}function g0(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:me||Rn(n,t);case 6:var r=ae,i=Ge;ae=null,xt(e,t,n),ae=r,Ge=i,ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?bs(e.parentNode,n):e.nodeType===1&&bs(e,n),Ur(e)):bs(ae,n.stateNode));break;case 4:r=ae,i=Ge,ae=n.stateNode.containerInfo,Ge=!0,xt(e,t,n),ae=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ma(n,t,s),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!me&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,xt(e,t,n),me=r):xt(e,t,n);break;default:xt(e,t,n)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pg),t.forEach(function(r){var i=Kg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ge=!1;break e;case 3:ae=a.stateNode.containerInfo,Ge=!0;break e;case 4:ae=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ae===null)throw Error(S(160));g0(o,s,i),ae=null,Ge=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)h0(t,e),t=t.sibling}function h0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),et(e),r&4){try{Tr(3,e,e.return),Po(3,e)}catch(x){G(e,e.return,x)}try{Tr(5,e,e.return)}catch(x){G(e,e.return,x)}}break;case 1:Ve(t,e),et(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ve(t,e),et(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(x){G(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Xd(i,o),fa(a,s);var u=fa(a,o);for(s=0;s<c.length;s+=2){var p=c[s],g=c[s+1];p==="style"?Id(i,g):p==="dangerouslySetInnerHTML"?zd(i,g):p==="children"?Nr(i,g):gl(i,p,g,u)}switch(a){case"input":ca(i,o);break;case"textarea":Rd(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?zn(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gr]=o}catch(x){G(e,e.return,x)}}break;case 6:if(Ve(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){G(e,e.return,x)}}break;case 3:if(Ve(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(x){G(e,e.return,x)}break;case 4:Ve(t,e),et(e);break;case 13:Ve(t,e),et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gl=Z())),r&4&&Du(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||p,Ve(t,e),me=u):Ve(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(D=e,p=e.child;p!==null;){for(g=D=p;D!==null;){switch(f=D,v=f.child,f.tag){case 0:case 11:case 14:case 15:Tr(4,f,f.return);break;case 1:Rn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){G(r,n,x)}}break;case 5:Rn(f,f.return);break;case 22:if(f.memoizedState!==null){Cu(g);continue}}v!==null?(v.return=f,D=v):Cu(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,c=g.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Md("display",s))}catch(x){G(e,e.return,x)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(x){G(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ve(t,e),et(e),r&4&&Du(e);break;case 21:break;default:Ve(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(f0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=ku(e);$a(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ku(e);Ua(e,a,s);break;default:throw Error(S(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xg(e,t,n){D=e,v0(e)}function v0(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ai;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||me;a=Ai;var u=me;if(Ai=s,(me=c)&&!u)for(D=i;D!==null;)s=D,c=s.child,s.tag===22&&s.memoizedState!==null?Fu(i):c!==null?(c.return=s,D=c):Fu(i);for(;o!==null;)D=o,v0(o),o=o.sibling;D=i,Ai=a,me=u}Au(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):Au(e)}}function Au(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Ur(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&Ia(t)}catch(f){G(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Cu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Fu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){G(t,i,c)}}var o=t.return;try{Ia(t)}catch(c){G(t,o,c)}break;case 5:var s=t.return;try{Ia(t)}catch(c){G(t,s,c)}}}catch(c){G(t,t.return,c)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var Rg=Math.ceil,fo=yt.ReactCurrentDispatcher,Vl=yt.ReactCurrentOwner,Ie=yt.ReactCurrentBatchConfig,T=0,ie=null,Q=null,le=0,be=0,Nn=Kt(0),te=0,ei=null,fn=0,Bo=0,Hl=0,Pr=null,je=null,Gl=0,tr=1/0,at=null,go=!1,Ka=null,Pt=null,Ci=!1,Ft=null,ho=0,Br=0,Va=null,Mi=-1,Ii=0;function ve(){return T&6?Z():Mi!==-1?Mi:Mi=Z()}function Bt(e){return e.mode&1?T&2&&le!==0?le&-le:_g.transition!==null?(Ii===0&&(Ii=ep()),Ii):(e=B,e!==0||(e=window.event,e=e===void 0?16:ap(e.type)),e):1}function Qe(e,t,n,r){if(50<Br)throw Br=0,Va=null,Error(S(185));oi(e,n,r),(!(T&2)||e!==ie)&&(e===ie&&(!(T&2)&&(Bo|=n),te===4&&kt(e,le)),Ae(e,r),n===1&&T===0&&!(t.mode&1)&&(tr=Z()+500,Eo&&Vt()))}function Ae(e,t){var n=e.callbackNode;_f(e,t);var r=Qi(e,e===ie?le:0);if(r===0)n!==null&&Xc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xc(n),t===1)e.tag===0?wg(bu.bind(null,e)):Ap(bu.bind(null,e)),hg(function(){!(T&6)&&Vt()}),n=null;else{switch(tp(r)){case 1:n=wl;break;case 4:n=Qd;break;case 16:n=Yi;break;case 536870912:n=qd;break;default:n=Yi}n=D0(n,y0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function y0(e,t){if(Mi=-1,Ii=0,T&6)throw Error(S(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Qi(e,e===ie?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var i=T;T|=2;var o=w0();(ie!==e||le!==t)&&(at=null,tr=Z()+500,cn(e,t));do try{Mg();break}catch(a){x0(e,a)}while(1);Ol(),fo.current=o,T=i,Q!==null?t=0:(ie=null,le=0,t=te)}if(t!==0){if(t===2&&(i=xa(e),i!==0&&(r=i,t=Ha(e,i))),t===1)throw n=ei,cn(e,0),kt(e,r),Ae(e,Z()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ng(i)&&(t=vo(e,r),t===2&&(o=xa(e),o!==0&&(r=o,t=Ha(e,o))),t===1))throw n=ei,cn(e,0),kt(e,r),Ae(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:tn(e,je,at);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Gl+500-Z(),10<t)){if(Qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ca(tn.bind(null,e,je,at),t);break}tn(e,je,at);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ye(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rg(r/1960))-r,10<r){e.timeoutHandle=Ca(tn.bind(null,e,je,at),r);break}tn(e,je,at);break;case 5:tn(e,je,at);break;default:throw Error(S(329))}}}return Ae(e,Z()),e.callbackNode===n?y0.bind(null,e):null}function Ha(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=vo(e,t),e!==2&&(t=je,je=n,t!==null&&Ga(t)),e}function Ga(e){je===null?je=e:je.push.apply(je,e)}function Ng(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Hl,t&=~Bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(T&6)throw Error(S(327));Kn();var t=Qi(e,0);if(!(t&1))return Ae(e,Z()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ha(e,r))}if(n===1)throw n=ei,cn(e,0),kt(e,t),Ae(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,je,at),Ae(e,Z()),null}function Jl(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(tr=Z()+500,Eo&&Vt())}}function gn(e){Ft!==null&&Ft.tag===0&&!(T&6)&&Kn();var t=T;T|=1;var n=Ie.transition,r=B;try{if(Ie.transition=null,B=1,e)return e()}finally{B=r,Ie.transition=n,T=t,!(T&6)&&Vt()}}function Zl(){be=Nn.current,I(Nn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:qn(),I(ke),I(fe),Nl();break;case 5:Rl(r);break;case 4:qn();break;case 13:I(K);break;case 19:I(K);break;case 10:Tl(r.type._context);break;case 22:case 23:Zl()}n=n.return}if(ie=e,Q=e=Xt(e.current,null),le=be=t,te=0,ei=null,Hl=Bo=fn=0,je=Pr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}sn=null}return e}function x0(e,t){do{var n=Q;try{if(Ol(),Ri.current=mo,po){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(mn=0,re=ee=V=null,Or=!1,Yr=0,Vl.current=null,n===null||n.return===null){te=1,ei=t,Q=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=le,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=hu(s);if(v!==null){v.flags&=-257,vu(v,s,a,o,t),v.mode&1&&gu(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){gu(o,u,t),Yl();break e}c=Error(S(426))}}else if($&&a.mode&1){var j=hu(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),vu(j,s,a,o,t),Wl(er(c,a));break e}}o=c=er(c,a),te!==4&&(te=2),Pr===null?Pr=[o]:Pr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=n0(o,c,t);lu(o,m);break e;case 1:a=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pt===null||!Pt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=r0(o,a,t);lu(o,_);break e}}o=o.return}while(o!==null)}j0(n)}catch(k){t=k,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function w0(){var e=fo.current;return fo.current=mo,e===null?mo:e}function Yl(){(te===0||te===3||te===2)&&(te=4),ie===null||!(fn&268435455)&&!(Bo&268435455)||kt(ie,le)}function vo(e,t){var n=T;T|=2;var r=w0();(ie!==e||le!==t)&&(at=null,cn(e,t));do try{zg();break}catch(i){x0(e,i)}while(1);if(Ol(),T=n,fo.current=r,Q!==null)throw Error(S(261));return ie=null,le=0,te}function zg(){for(;Q!==null;)_0(Q)}function Mg(){for(;Q!==null&&!pf();)_0(Q)}function _0(e){var t=k0(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?j0(e):Q=t,Vl.current=null}function j0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tg(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Q=null;return}}else if(n=Og(n,t,be),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);te===0&&(te=5)}function tn(e,t,n){var r=B,i=Ie.transition;try{Ie.transition=null,B=1,Ig(e,t,n,r)}finally{Ie.transition=i,B=r}return null}function Ig(e,t,n,r){do Kn();while(Ft!==null);if(T&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jf(e,o),e===ie&&(Q=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,D0(Yi,function(){return Kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var s=B;B=1;var a=T;T|=4,Vl.current=null,Bg(e,n),h0(n,e),lg(Da),qi=!!ka,Da=ka=null,e.current=n,Xg(n),mf(),T=a,B=s,Ie.transition=o}else e.current=n;if(Ci&&(Ci=!1,Ft=e,ho=i),o=e.pendingLanes,o===0&&(Pt=null),hf(n.stateNode),Ae(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=Ka,Ka=null,e;return ho&1&&e.tag!==0&&Kn(),o=e.pendingLanes,o&1?e===Va?Br++:(Br=0,Va=e):Br=0,Vt(),null}function Kn(){if(Ft!==null){var e=tp(ho),t=Ie.transition,n=B;try{if(Ie.transition=null,B=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,ho=0,T&6)throw Error(S(331));var i=T;for(T|=4,D=e.current;D!==null;){var o=D,s=o.child;if(D.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(D=u;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:Tr(8,p,o)}var g=p.child;if(g!==null)g.return=p,D=g;else for(;D!==null;){p=D;var f=p.sibling,v=p.return;if(m0(p),p===u){D=null;break}if(f!==null){f.return=v,D=f;break}D=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}D=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,D=m;break e}D=o.return}}var d=e.current;for(D=d;D!==null;){s=D;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,D=h;else e:for(s=d;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(k){G(a,a.return,k)}if(a===s){D=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,D=_;break e}D=a.return}}if(T=i,Vt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{B=n,Ie.transition=t}}return!1}function Lu(e,t,n){t=er(n,t),t=n0(e,t,1),e=Tt(e,t,1),t=ve(),e!==null&&(oi(e,1,t),Ae(e,t))}function G(e,t,n){if(e.tag===3)Lu(e,e,n);else for(;t!==null;){if(t.tag===3){Lu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=er(n,e),e=r0(t,e,1),t=Tt(t,e,1),e=ve(),t!==null&&(oi(t,1,e),Ae(t,e));break}}t=t.return}}function Ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>Z()-Gl?cn(e,0):Hl|=n),Ae(e,t)}function S0(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=ve();e=gt(e,t),e!==null&&(oi(e,t,n),Ae(e,n))}function $g(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S0(e,n)}function Kg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),S0(e,n)}var k0;k0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Eg(e,t,n);Se=!!(e.flags&131072)}else Se=!1,$&&t.flags&1048576&&Cp(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Zn(t,fe.current);$n(t,n),i=Ml(null,t,r,e,i,n);var o=Il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,io(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bl(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,Ta(t,r,e,n),t=Xa(null,t,r,!0,o,n)):(t.tag=0,$&&o&&bl(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hg(r),e=He(r,e),i){case 0:t=Ba(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=xu(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Ba(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),wu(e,t,r,i,n);case 3:e:{if(a0(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wp(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=er(Error(S(423)),t),t=_u(e,t,r,n,i);break e}else if(r!==i){i=er(Error(S(424)),t),t=_u(e,t,r,n,i);break e}else for(We=Ot(t.stateNode.containerInfo.firstChild),Ee=t,$=!0,Je=null,n=Pp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=ht(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Bp(t),e===null&&Wa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Aa(r,i)?s=null:o!==null&&Aa(r,o)&&(t.flags|=32),s0(e,t),he(e,t,s,n),t.child;case 6:return e===null&&Wa(t),null;case 13:return l0(e,t,n);case 4:return Xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),yu(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(ao,r._currentValue),r._currentValue=s,o!==null)if(qe(o.value,s)){if(o.children===i.children&&!ke.current){t=ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=pt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ea(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ea(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ue(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),xu(e,t,r,i,n);case 15:return i0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),zi(e,t),t.tag=1,De(r)?(e=!0,io(t)):e=!1,$n(t,n),Op(t,r,i),Ta(t,r,i,n),Xa(null,t,r,!0,e,n);case 19:return c0(e,t,n);case 22:return o0(e,t,n)}throw Error(S(156,t.tag))};function D0(e,t){return Yd(e,t)}function Vg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Vg(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hg(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===yl)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ql(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bn:return un(n.children,i,o,t);case hl:s=8,i|=8;break;case ia:return e=Me(12,n,t,i|2),e.elementType=ia,e.lanes=o,e;case oa:return e=Me(13,n,t,i),e.elementType=oa,e.lanes=o,e;case sa:return e=Me(19,n,t,i),e.elementType=sa,e.lanes=o,e;case Td:return Xo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:s=10;break e;case Od:s=9;break e;case vl:s=11;break e;case yl:s=14;break e;case _t:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function Xs(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ql(e,t,n,r,i,o,s,a,c){return e=new Gg(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(o),e}function Jg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function A0(e){if(!e)return Mt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(De(n))return Dp(e,n,t)}return t}function C0(e,t,n,r,i,o,s,a,c){return e=ql(n,r,!0,e,i,o,s,a,c),e.context=A0(null),n=e.current,r=ve(),i=Bt(n),o=pt(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,oi(e,i,r),Ae(e,r),e}function Ro(e,t,n,r){var i=t.current,o=ve(),s=Bt(i);return n=A0(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,s),e!==null&&(Qe(e,i,s,o),Xi(e,i,s)),s}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function Zg(){return null}var F0=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}No.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ro(e,t,null,null)};No.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Ro(null,e,null,null)}),t[ft]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=ip();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&sp(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Yg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=yo(s);o.call(u)}}var s=C0(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[ft]=s.current,Vr(e.nodeType===8?e.parentNode:e),gn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yo(c);a.call(u)}}var c=ql(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=c,e[ft]=c.current,Vr(e.nodeType===8?e.parentNode:e),gn(function(){Ro(t,c,n,r)}),c}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=yo(s);a.call(c)}}Ro(t,s,e,i)}else s=Yg(n,t,e,i,r);return yo(s)}np=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(_l(t,n|1),Ae(t,Z()),!(T&6)&&(tr=Z()+500,Vt()))}break;case 13:gn(function(){var r=gt(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),ec(e,1)}};jl=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}ec(e,134217728)}};rp=function(e){if(e.tag===13){var t=Bt(e),n=gt(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}ec(e,t)}};ip=function(){return B};op=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ha=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wo(r);if(!i)throw Error(S(90));Bd(r),ca(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Kd=Jl;Vd=gn;var Qg={usingClientEntryPoint:!1,Events:[ai,On,Wo,Ud,$d,Jl]},xr={findFiberByHostInstance:on,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qg={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jd(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Co=Fi.inject(qg),rt=Fi}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qg;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(S(200));return Jg(e,t,null,n)};Pe.createRoot=function(e,t){if(!nc(e))throw Error(S(299));var n=!1,r="",i=F0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ql(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,Vr(e.nodeType===8?e.parentNode:e),new tc(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Jd(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return gn(e)};Pe.hydrate=function(e,t,n){if(!zo(t))throw Error(S(200));return Mo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=F0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=C0(t,null,e,1,n??null,i,!1,o,s),e[ft]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};Pe.render=function(e,t,n){if(!zo(t))throw Error(S(200));return Mo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!zo(e))throw Error(S(40));return e._reactRootContainer?(gn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Pe.unstable_batchedUpdates=Jl;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Mo(e,t,n,!1,r)};Pe.version="18.2.0-next-9e3b772b8-20220608";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(e){console.error(e)}}b0(),Cd.exports=Pe;var L0=Cd.exports;function e3(e){e()}let W0=e3;const t3=e=>W0=e,n3=()=>W0,Ou=Symbol.for("react-redux-context"),Tu=typeof globalThis<"u"?globalThis:{};function r3(){var e;if(!w.createContext)return{};const t=(e=Tu[Ou])!=null?e:Tu[Ou]=new Map;let n=t.get(w.createContext);return n||(n=w.createContext(null),t.set(w.createContext,n)),n}const It=r3();function rc(e=It){return function(){return w.useContext(e)}}const E0=rc(),i3=()=>{throw new Error("uSES not initialized!")};let O0=i3;const o3=e=>{O0=e},s3=(e,t)=>e===t;function a3(e=It){const t=e===It?E0:rc(e);return function(r,i={}){const{equalityFn:o=s3,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:u,getServerState:p,stabilityCheck:g,noopCheck:f}=t();w.useRef(!0);const v=w.useCallback({[r.name](x){return r(x)}}[r.name],[r,g,s]),y=O0(u.addNestedSub,c.getState,p||c.getState,v,o);return w.useDebugValue(y),y}}const Ja=a3();var T0={exports:{}},X={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe=typeof Symbol=="function"&&Symbol.for,ic=oe?Symbol.for("react.element"):60103,oc=oe?Symbol.for("react.portal"):60106,Io=oe?Symbol.for("react.fragment"):60107,Uo=oe?Symbol.for("react.strict_mode"):60108,$o=oe?Symbol.for("react.profiler"):60114,Ko=oe?Symbol.for("react.provider"):60109,Vo=oe?Symbol.for("react.context"):60110,sc=oe?Symbol.for("react.async_mode"):60111,Ho=oe?Symbol.for("react.concurrent_mode"):60111,Go=oe?Symbol.for("react.forward_ref"):60112,Jo=oe?Symbol.for("react.suspense"):60113,l3=oe?Symbol.for("react.suspense_list"):60120,Zo=oe?Symbol.for("react.memo"):60115,Yo=oe?Symbol.for("react.lazy"):60116,c3=oe?Symbol.for("react.block"):60121,u3=oe?Symbol.for("react.fundamental"):60117,d3=oe?Symbol.for("react.responder"):60118,p3=oe?Symbol.for("react.scope"):60119;function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ic:switch(e=e.type,e){case sc:case Ho:case Io:case $o:case Uo:case Jo:return e;default:switch(e=e&&e.$$typeof,e){case Vo:case Go:case Yo:case Zo:case Ko:return e;default:return t}}case oc:return t}}}function P0(e){return Xe(e)===Ho}X.AsyncMode=sc;X.ConcurrentMode=Ho;X.ContextConsumer=Vo;X.ContextProvider=Ko;X.Element=ic;X.ForwardRef=Go;X.Fragment=Io;X.Lazy=Yo;X.Memo=Zo;X.Portal=oc;X.Profiler=$o;X.StrictMode=Uo;X.Suspense=Jo;X.isAsyncMode=function(e){return P0(e)||Xe(e)===sc};X.isConcurrentMode=P0;X.isContextConsumer=function(e){return Xe(e)===Vo};X.isContextProvider=function(e){return Xe(e)===Ko};X.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ic};X.isForwardRef=function(e){return Xe(e)===Go};X.isFragment=function(e){return Xe(e)===Io};X.isLazy=function(e){return Xe(e)===Yo};X.isMemo=function(e){return Xe(e)===Zo};X.isPortal=function(e){return Xe(e)===oc};X.isProfiler=function(e){return Xe(e)===$o};X.isStrictMode=function(e){return Xe(e)===Uo};X.isSuspense=function(e){return Xe(e)===Jo};X.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Io||e===Ho||e===$o||e===Uo||e===Jo||e===l3||typeof e=="object"&&e!==null&&(e.$$typeof===Yo||e.$$typeof===Zo||e.$$typeof===Ko||e.$$typeof===Vo||e.$$typeof===Go||e.$$typeof===u3||e.$$typeof===d3||e.$$typeof===p3||e.$$typeof===c3)};X.typeOf=Xe;T0.exports=X;var m3=T0.exports,B0=m3,f3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X0={};X0[B0.ForwardRef]=f3;X0[B0.Memo]=g3;var N={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=Symbol.for("react.element"),lc=Symbol.for("react.portal"),Qo=Symbol.for("react.fragment"),qo=Symbol.for("react.strict_mode"),es=Symbol.for("react.profiler"),ts=Symbol.for("react.provider"),ns=Symbol.for("react.context"),h3=Symbol.for("react.server_context"),rs=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),v3=Symbol.for("react.offscreen"),R0;R0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ac:switch(e=e.type,e){case Qo:case es:case qo:case is:case os:return e;default:switch(e=e&&e.$$typeof,e){case h3:case ns:case rs:case as:case ss:case ts:return e;default:return t}}case lc:return t}}}N.ContextConsumer=ns;N.ContextProvider=ts;N.Element=ac;N.ForwardRef=rs;N.Fragment=Qo;N.Lazy=as;N.Memo=ss;N.Portal=lc;N.Profiler=es;N.StrictMode=qo;N.Suspense=is;N.SuspenseList=os;N.isAsyncMode=function(){return!1};N.isConcurrentMode=function(){return!1};N.isContextConsumer=function(e){return Ke(e)===ns};N.isContextProvider=function(e){return Ke(e)===ts};N.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ac};N.isForwardRef=function(e){return Ke(e)===rs};N.isFragment=function(e){return Ke(e)===Qo};N.isLazy=function(e){return Ke(e)===as};N.isMemo=function(e){return Ke(e)===ss};N.isPortal=function(e){return Ke(e)===lc};N.isProfiler=function(e){return Ke(e)===es};N.isStrictMode=function(e){return Ke(e)===qo};N.isSuspense=function(e){return Ke(e)===is};N.isSuspenseList=function(e){return Ke(e)===os};N.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qo||e===es||e===qo||e===is||e===os||e===v3||typeof e=="object"&&e!==null&&(e.$$typeof===as||e.$$typeof===ss||e.$$typeof===ts||e.$$typeof===ns||e.$$typeof===rs||e.$$typeof===R0||e.getModuleId!==void 0)};N.typeOf=Ke;function y3(){const e=n3();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Pu={notify(){},get:()=>[]};function x3(e,t){let n,r=Pu,i=0,o=!1;function s(x){p();const j=r.subscribe(x);let m=!1;return()=>{m||(m=!0,j(),g())}}function a(){r.notify()}function c(){y.onStateChange&&y.onStateChange()}function u(){return o}function p(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=y3())}function g(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Pu)}function f(){o||(o=!0,p())}function v(){o&&(o=!1,g())}const y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:u,trySubscribe:f,tryUnsubscribe:v,getListeners:()=>r};return y}const w3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_3=w3?w.useLayoutEffect:w.useEffect;function j3({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=w.useMemo(()=>{const u=x3(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=w.useMemo(()=>e.getState(),[e]);_3(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const c=t||It;return w.createElement(c.Provider,{value:s},n)}function N0(e=It){const t=e===It?E0:rc(e);return function(){const{store:r}=t();return r}}const S3=N0();function k3(e=It){const t=e===It?S3:N0(e);return function(){return t().dispatch}}const z0=k3();o3(J1.useSyncExternalStoreWithSelector);t3(L0.unstable_batchedUpdates);var Za={},Bu=L0;Za.createRoot=Bu.createRoot,Za.hydrateRoot=Bu.hydrateRoot;const D3="modulepreload",A3=function(e){return"/"+e},Xu={},Ce=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=A3(o),o in Xu)return;Xu[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const g=i[p];if(g.href===o&&(!s||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":D3,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((p,g)=>{u.addEventListener("load",p),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};const C3="_lineTopHeader_vusil_1",F3="_lineTopHeaderText_vusil_10",b3="_lineTopHeaderClose_vusil_15",Ns={lineTopHeader:C3,lineTopHeaderText:F3,lineTopHeaderClose:b3},L3=({closeButton:e})=>l.jsxs("div",{className:Ns.lineTopHeader,children:[l.jsx("div",{className:Ns.lineTopHeaderText,children:l.jsx("p",{children:"Парфюм 50 мл в подарок при покупке на сумму свыше 5000р"})}),l.jsx("div",{className:Ns.lineTopHeaderClose,onClick:()=>{e(!1)},children:"x"})]}),W3="_headerMain_1vkcv_5",E3="_headerTop_1vkcv_9",O3="_headerBottom_1vkcv_14",T3="_headerCategory_1vkcv_22",P3="_headerTopLeft_1vkcv_38",B3="_headerTopLogo_1vkcv_50",X3="_headerTopRight_1vkcv_62",R3="_profil_1vkcv_73",N3="_basket_1vkcv_77",z3="_heart_1vkcv_77",M3="_homebutoon_1vkcv_81",I3="_logoHeaderCount_1vkcv_85",U3="_headerBurger_1vkcv_102",we={headerMain:W3,headerTop:E3,headerBottom:O3,headerCategory:T3,headerTopLeft:P3,headerTopLogo:B3,headerTopRight:X3,profil:R3,basket:N3,heart:z3,homebutoon:M3,logoHeaderCount:I3,headerBurger:U3},$3="_searchSiteForm_yk5y0_1",K3="_searchSite_yk5y0_1",V3="_searchSiteSvg_yk5y0_19",zs={searchSiteForm:$3,searchSite:K3,searchSiteSvg:V3},H3="_windowSearch_1xf75_1",G3="_titleSearch_1xf75_12",J3="_crossWindow_1xf75_21",Z3="_bacgroundFilter_1xf75_35",Y3="_resultCommudityBlock_1xf75_45",Q3="_centerBlocks_1xf75_54",q3="_resultCommodity_1xf75_61",e2="_moreCommodity_1xf75_69",t2="_recentlyQuery_1xf75_83",n2="_listResentlySearch_1xf75_95",r2="_notFound_1xf75_108",Re={windowSearch:H3,titleSearch:G3,crossWindow:J3,bacgroundFilter:Z3,resultCommudityBlock:Y3,centerBlocks:Q3,resultCommodity:q3,moreCommodity:e2,recentlyQuery:t2,listResentlySearch:n2,notFound:r2},i2="_card_1v1l4_1",o2="_img_1v1l4_9",s2="_cardInfo_1v1l4_20",a2="_name_1v1l4_27",l2="_size_1v1l4_31",c2="_cardCost_1v1l4_40",_n={card:i2,img:o2,cardInfo:s2,name:a2,size:l2,cardCost:c2},u2=({filterArray:e})=>l.jsxs("div",{className:_n.card,children:[l.jsx("div",{className:_n.img,children:l.jsx(P,{to:"/"+e.link,children:l.jsx("img",{src:e.img[0],alt:e.name})})}),l.jsxs("div",{className:_n.cardInfo,children:[l.jsx("div",{className:_n.name,children:l.jsx(P,{to:"/"+e.link,children:l.jsx("h3",{children:e.name})})}),l.jsx("div",{className:_n.size,children:l.jsx("ul",{children:e.size.map(t=>l.jsx("li",{children:t},t))})}),l.jsx("div",{className:_n.cardCost,children:l.jsxs("span",{children:[e.cost," Р"]})})]})]}),Le={odejda:{djinsy:[{name:"Джинсы Tommy Jeans Julie",cost:"11000",size:["S","M","L","XL"],colorText:"Синий",type:"djinsy",color:["#80b4c4"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/AW23-SJD0E2-50J_F1.jpg@webp?v=1694755952","https://img2.ans-media.com/i/540x813/AW23-SJD0E2-50J_F2.jpg@webp?v=1694756324","https://img2.ans-media.com/i/540x813/AW23-SJD0E2-50J_F3.jpg@webp?v=1694757516","https://img2.ans-media.com/i/540x813/AW23-SJD0E2-50J_F4.jpg@webp?v=1694754406"],description:`
                Джинсы из коллекции Tommy Jeans фасона straight с завышенной талией. Модель выполнена из стираного денима.
                - Этот продукт частично изготовлен из переработанного хлопка.
                - Модель с завышенной талией и застежкой на пуговицы и молнию.
                - Два накладных кармана на ягодицах.
                - Спереди три прорезных кармана.
                - Слегка эластичная джинсовая ткань.
                - Ширина по поясу: 34,5 см.
                - Полуобхват бедер: 46 см.
                - Высота талии: 29 см.
                - Ширина штанины снизу: 18,5 см.
                - Ширина штанины сверху: 27,5 см.
                - Внешняя длина штанины: 111 см.
                - Параметры указаны для размера: 27/32.
                Состав: 79% Хлопок, 20% Переработанный хлопок, 1% Эластан
                `,category:"odejda"},{name:"Джинсы Pepe Jeans Violet",cost:"6200",size:["M","L","XL"],colorText:"Синий",type:"djinsy",color:["#80b4c4"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/SS23-SJD08D-56X_F1.jpg@webp?v=1670404392","https://img2.ans-media.com/i/540x813/SS23-SJD08D-56X_F2.jpg@webp?v=1670404144","https://img2.ans-media.com/i/540x813/SS23-SJD08D-56X_F3.jpg@webp?v=1670405085","https://img2.ans-media.com/i/540x813/SS23-SJD08D-56X_F4.jpg@webp?v=1670404486"],description:`
                Джинсы из коллекции Pepe Jeans фасона mom carrot с завышенной талией. Модель выполнена из стираного денима.
                - Модель из линейки Pepe Future, которая включает в себя продукты, изготовленные с использованием экологически безопасного производственного процесса.
                - Фасон mom carrot.
                - Сужающаяся штанина.
                - Завышенная талия.
                - Застегивается на пуговицу и молнию.
                - Очень эластичный деним.
                - Ширина по поясу: 35 см.
                - Полуобхват бедер: 45 см.
                - Высота талии: 26 см.
                - Ширина штанины снизу: 15 см.
                - Ширина штанины сверху: 26,5 см.
                - Длина штанины: 94 см.
                - Параметры указаны для размера: 27/R.
                Состав:
                Основной материал: 81% Хлопок, 17% Полиэстер, 2% Эластан
                Подкладка кармана: 65% Полиэстер, 35% Хлопок
                `,category:"odejda"},{name:"Джинсы Tommy Jeans",cost:"7200",size:["M","L","XL"],colorText:"Синий",type:"djinsy",color:["#80b4c4"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/AA00-SJD0IJ-55J_F1.jpg@webp?v=1696393694","https://img2.ans-media.com/i/540x813/AA00-SJD0IJ-55J_F2.jpg@webp?v=1696394180","https://img2.ans-media.com/i/540x813/AA00-SJD0IJ-55J_F3.jpg@webp?v=1696394539","https://img2.ans-media.com/i/540x813/AA00-SJD0IJ-55J_F4.jpg@webp?v=1696395374"],description:`
                Джинсы из коллекции Tommy Jeans фасона mom с завышенной талией. Модель выполнена из стираного денима. Хлопковый, комфортный материал.
                - Джинсы свободные в зоне бедер.
                - Сужающаяся штанина.
                - Модель с завышенной талией и застежкой на пуговицы и молнию.
                - Спереди три прорезных кармана.
                - Два накладных кармана на ягодицах.
                - Ширина по поясу: 35 см.
                - Полуобхват бедер: 48 см.
                - Высота талии: 33 см.
                - Ширина штанины снизу: 15 см.
                - Ширина штанины сверху: 29,5 см.
                - Внешняя длина штанины: 102 см.
                - Параметры указаны для размера: 27/32.
                `,category:"odejda"},{name:"Джинсы Medicine",cost:"8800",size:["M","L","XL"],colorText:"Чёрный",type:"djinsy",color:["#353536"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/RW23-SJD707-99J_F1.jpg@webp?v=1696222455","https://img2.ans-media.com/i/540x813/RW23-SJD707-99J_F2.jpg@webp?v=1696222346","https://img2.ans-media.com/i/540x813/RW23-SJD707-99J_F3.jpg@webp?v=1696222456","https://img2.ans-media.com/i/540x813/RW23-SJD707-99J_F4.jpg@webp?v=1696222347"],description:`
                Джинсы из коллекции Medicine фасона slim с обычной талией. Модель выполнена из стираного денима.
                - Фасон slim fit - джинсы приталенного кроя с зауженной штаниной в области бедра и лодыжки. Подчеркивают естественные контуры силуэта, но не обтягивают - обеспечивают комфортную посадку.
                - Талия regular.
                - Прорезные карманы.
                - Деним с декоративными потертостями.
                - Ширина по поясу: 33 см.
                - Полуобхват бедер: 48 см.
                - Высота талии: 26,5 см.
                - Ширина штанины снизу: 16 см.
                - Длина внутренней стороны ноги: 70 см.
                - Параметры указаны для размера: 36.
                `,category:"odejda"},{name:"Джинсы Medicine",cost:"5400",size:["S","M","L","XL"],colorText:"Серый",type:"djinsy",color:["#8f8f8f"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/RW23-SJD700-90J_F1.jpg@webp?v=1696222451","https://img2.ans-media.com/i/540x813/RW23-SJD700-90J_F3.jpg@webp?v=1696222451","https://img2.ans-media.com/i/540x813/RW23-SJD700-90J_F4.jpg@webp?v=1696222452","https://img2.ans-media.com/i/540x813/RW23-SJD700-90J_F6.jpg@webp?v=1696222340"],description:`
                Джинсы из коллекции Medicine фасона skinny с обычной талией. Модель выполнена из стираного денима.
                - Фасон skinny - джинсы с полной длиной и сильно зауженными штанинами, создающими эффект "второй кожи". Джинсы прилегают к телу, подчеркивая линию талии и силуэт, а эластичная ткань повышает комфорт при носке.
                - Модель с регулярной талией и застежкой на пуговицы и молнию.
                - Прорезные карманы.
                - Деним с декоративными потертостями.
                - Ширина по поясу: 34 см.
                - Полуобхват бедер: 42,5 см.
                - Высота талии: 24,5 см.
                - Ширина штанины снизу: 12,5 см.
                - Длина внутренней стороны ноги: 73,5 см.
                - Параметры указаны для размера: 36.
                Состав: Основной материал: 99% Хлопок, 1% Эластан
                Другие материалы: 100% Хлопок
                `,category:"odejda"},{name:"Джинсы Gestuz Aura",cost:"6400",size:["S","M","XL"],colorText:"Синий",type:"djinsy",color:["#264185"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/AA00-SJD0ID-55J_F1.jpg@webp?v=1695369009","https://img2.ans-media.com/i/540x813/AA00-SJD0ID-55J_F3.jpg@webp?v=1695370087","https://img2.ans-media.com/i/540x813/AA00-SJD0ID-55J_F2.jpg@webp?v=1695370208","https://img2.ans-media.com/i/540x813/AA00-SJD0ID-55J_F4.jpg@webp?v=1695370686"],description:`
                Джинсы из коллекции Gestuz фасона wide с завышенной талией. Модель выполнена из прочного, держащего форму денима. Чрезвычайно комфортный материал с высоким содержанием хлопка.
                - Продукт из серии «better cotton™». Better Cotton — это ведущая мировая инициатива по устойчивому развитию хлопка, цель которой помочь хлопковым сообществам выжить и процветать, одновременно защищая и восстанавливая окружающую среду.
                - Джинсы слегка приталенные в зоне бедер.
                - Модель с завышенной талией и застежкой на пуговицы и молнию.
                - Прямые штанины по всей длине.
                - Спереди три прорезных кармана.
                - Два накладных кармана на ягодицах.
                - Ширина по поясу: 35 см.
                - Полуобхват бедер: 49 см.
                - Высота талии: 29 см.
                - Ширина штанины снизу: 29 см.
                - Ширина штанины сверху: 27 см.
                - Внешняя длина штанины: 114 см.
                - Параметры указаны для размера: 27.
                `,category:"odejda"},{name:"Джинсы Calvin Klein Jeans",cost:"6700",size:["S","M","XL"],colorText:"Синий",type:"djinsy",color:["#485882"],flag:!1,code:1212,img:["https://img2.ans-media.com/i/540x813/AW23-SJD0GW-09J_F1.jpg@webp?v=1693926152","https://img2.ans-media.com/i/540x813/AW23-SJD0GW-09J_F3.jpg@webp?v=1693926153","https://img2.ans-media.com/i/540x813/AW23-SJD0GW-09J_F2.jpg@webp?v=1693926267","https://img2.ans-media.com/i/540x813/AW23-SJD0GW-09J_F4.jpg@webp?v=1693926267"],description:`
                Джинсы из коллекции Calvin Klein Jeans фасона mom с завышенной талией. Модель выполнена из гладкого денима.
                - Для изготовления этого продукта было использовано не менее 20% переработанного хлопка, а не нового производства. В результате было использовано меньше воды, энергии и образовалось меньше отходов
                - Свободный крой для полной свободы движений.
                - Сужающаяся штанина.
                - Прорезные карманы.
                - Модель с завышенной талией и застежкой на пуговицы и молнию.
                - Ширина по поясу: 36 см.
                - Полуобхват бедер: 53 см.
                - Высота талии: 28 см.
                - Ширина штанины снизу: 14 см.
                - Ширина штанины сверху: 30 см.
                - Длина: 105 см.
                - Параметры указаны для размера: 27/30.
                Состав: 100% Хлопок
                `,category:"odejda"}],kurtky:[{name:"Пуховая куртка Calvin Klein",cost:"18000",type:"kurtky",size:["S","M","L","XL"],colorText:"Белый",code:1332,color:["#f5f5f5"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW23-KUD1DU-50X_F1.jpg@webp?v=1695370832","https://img2.ans-media.com/i/540x813/AW23-KUD1DU-50X_F2.jpg@webp?v=1695369984","https://img2.ans-media.com/i/540x813/AW23-KUD1DU-50X_F3.jpg@webp?v=1695370347","https://img2.ans-media.com/i/540x813/AW23-KUD1DU-50X_F4.jpg@webp?v=1695367703"],description:`
                Пуховая куртка из коллекции Calvin Klein. Утепленная модель выполнена из гладкого материала. Модель с наполнителем из натурального пуха и перьев гарантирует высокий уровень изоляции от холода.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Ответственный Down Standard. Certificate R.D.S. гарантирует, что производитель выполнил рекомендации, направленные на минимизацию страданий племенных птиц (в том числе - обязательство воздерживаться от получения пуха и перьев от живых птиц и принудительного кормления птиц). 100% пуха и перьев, содержащихся в продукте, поступают в результате контролируемых поставок.
                - Свободный крой для полной свободы движений.
                - Модель со съемными рукавами, что позволяет использование как майку.
                - Замыкается на молнию и кнопки.
                - Приподнятый воротник обеспечивает дополнительную защиту от холода.
                - Два боковых кармана на молнии.
                - Нижний край оснащен шнуровкой с фиксаторами.
                - Прилагается текстильный ремень.
                - Длина рукава (от воротника): 73 см.
                - Длина: 81 см.
                - Ширина под подмышками: 60 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"},{name:"Куртка Calvin Klein Jeans",cost:"12400",type:"kurtky",size:["S","M","L"],colorText:"Чёрный",code:1332,color:["#000"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW23-KUD1K4-99X_F1.jpg@webp?v=1693389999","https://img2.ans-media.com/i/540x813/AW23-KUD1K4-99X_F2.jpg@webp?v=1693390097","https://img2.ans-media.com/i/540x813/AW23-KUD1K4-99X_F3.jpg@webp?v=1693390000","https://img2.ans-media.com/i/540x813/AW23-KUD1K4-99X_F4.jpg@webp?v=1693389756"],description:`
                Куртка из коллекции Calvin Klein Jeans. Утепленная модель выполнена из гладкой ткани. Стеганая модель с синтетическим утеплителем, который обеспечивает дополнительный комфорт при низких температурах.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Волокно REPREVE производится из переработанных пластиковых бутылок.
                - Количество использованных ПЭТ-бутылок: 15.
                - Фасон Relaxed.
                - Рукава отделаны удобной эластичной резинкой.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Имеет застежку-молнию и приподнятый воротник.
                - Нижний край оснащен шнуровкой с фиксаторами.
                - Длина рукава (от воротника): 72 см.
                - Длина: 53 см.
                - Ширина под подмышками: 53 см.
                - Параметры указаны для размера: S.
                Состав: 100% Полиэстер
                `,category:"odejda"},{name:"Куртка Guess",cost:"12000",size:["S","M","L"],colorText:"Бежевый",type:"kurtky",color:["#facbaa"],flag:!1,code:1332,img:["https://img2.ans-media.com/i/540x813/AW23-KUD0SL-80X_F1.jpg@webp?v=1695370830","https://img2.ans-media.com/i/540x813/AW23-KUD0SL-80X_F2.jpg@webp?v=1695368780","https://img2.ans-media.com/i/540x813/AW23-KUD0SL-80X_F3.jpg@webp?v=1695372501","https://img2.ans-media.com/i/540x813/AW23-KUD0SL-80X_F4.jpg@webp?v=1695371541"],description:`
                Куртка из коллекции Guess. Утепленная модель выполнена из материала с аппликацией. Стеганая модель с синтетическим утеплителем, который обеспечивает дополнительный комфорт при низких температурах.
                - Крой oversize.
                - Утепленная модель с подкладкой.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Застегивается на молнию.
                - Завышенный воротник.
                - Внешние карманы с застежкой.
                - Рукава со стяжкой.
                - Внизу стяжка.
                - Длина рукава (от горловины): 69 см.
                - Длина: 63 см.
                - Ширина под подмышками: 60 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 100% Полиамид
                Подкладка: 100% Полиамид
                Наполнитель: 100% Полиэстер
                `,category:"odejda"},{name:"Пуховая куртка MICHAEL Michael Kors",cost:"16200",size:["S","M","L","XL"],colorText:"Чёрный",type:"kurtky",color:["#000"],flag:!1,code:1332,img:["https://img2.ans-media.com/i/540x813/AW23-KUD0KZ-99X_F1.jpg@webp?v=1695616232","https://img2.ans-media.com/i/540x813/AW23-KUD0KZ-99X_F2.jpg@webp?v=1695617538","https://img2.ans-media.com/i/540x813/AW23-KUD0KZ-99X_F3.jpg@webp?v=1695617059","https://img2.ans-media.com/i/540x813/AW23-KUD0KZ-99X_F4.jpg@webp?v=1695619459"],description:`
                Куртка-бомбер из коллекции MICHAEL Michael Kors. Утепленная модель выполнена из гладкой ткани. Модель с наполнителем из натурального пуха гарантирует высокий уровень изоляции от холода.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Свободный крой для полной свободы движений.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Рукава и нижний край отделаны удобной эластичной резинкой.
                - Застегивается на молнию.
                - Два боковых кармана на молнии.
                - Стеганая.
                - Длина рукава (от горловины): 78 см.
                - Длина: 53 см.
                - Ширина под подмышками: 54 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 100% Переработанный полиэстер
                Подкладка: 100% Переработанный полиэстер
                Наполнитель: 80% Утиный пух, 20% Утиное перо
                `,category:"odejda"},{name:"Куртка-рубашка MAX",cost:"22400",type:"kurtky",size:["S","M","L","XL"],colorText:"Зелёный",code:1332,color:["#4ef235"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW23-KUD1KB-71X_F1.jpg@webp?v=1698122911","https://img2.ans-media.com/i/540x813/AW23-KUD1KB-71X_F2.jpg@webp?v=1698122911","https://img2.ans-media.com/i/540x813/AW23-KUD1KB-71X_F3.jpg@webp?v=1698123271","https://img2.ans-media.com/i/540x813/AW23-KUD1KB-71X_F4.jpg@webp?v=1698121944","https://img2.ans-media.com/i/540x813/AW23-KUD1KB-71X_F5.jpg@webp?v=1698123508"],description:`
                Куртка-рубашка из коллекции MAX&Co. Неутепленая модель выполнена из легкого материала, который очень удобен в носке. Высокое содержание шерсти обеспечивает защиту от холода, а добавление полиамида повышает долговечность изделия.
                - Свободный крой для полной свободы движений.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Рукава с манжетами на застежке.
                - Модель с воротником.
                - Застегивается на пуговицы.
                - Карманчик на груди.
                - Длина рукава (от воротничка): 73 см.
                - Длина: 82 см.
                - Ширина под подмышками: 61 см.
                - Параметры указаны для размера: 36.
                Состав: Дополнительный материал: 100% Хлопок
                Основной материал: 80% Новая шерсть, 20% Полиамид
                `,category:"odejda"},{name:"Пуховая куртка Tommy Hilfiger",cost:"21200",type:"kurtky",size:["S","M","L"],colorText:"Бежевый",code:1332,color:["#f5dda2"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW23-KUD15Z-02X_F1.jpg@webp?v=1698669869","https://img2.ans-media.com/i/540x813/AW23-KUD15Z-02X_F2.jpg@webp?v=1698669752","https://img2.ans-media.com/i/540x813/AW23-KUD15Z-02X_F3.jpg@webp?v=1698669753","https://img2.ans-media.com/i/540x813/AW23-KUD15Z-02X_F4.jpg@webp?v=1698669753"],description:`
                Пуховая куртка из коллекции Tommy Hilfiger. Утепленная модель выполнена из гладкой ткани. Модель с повышенной водонепроницаемостью идеально подходит для плохих погодных условий.
                - Водонепроницаемость означает повышенную устойчивость к воде. При контакте с водой изделие сохраняет свои свойства, что обеспечивает больший комфорт благодаря более низкому водонепроницаемому порогу, но не гарантирует полной водонепроницаемости.
                - Простой фасон, не стеснящий движений.
                - Рукава отделаны удобной эластичной резинкой.
                - Имеет застежку-молнию и приподнятый воротник.
                - Регулируемый капюшон с кулиской усиливает защиту от ветра и дождя.
                - Два боковых кармана на кнопках.
                - Стеганая модель.
                - Длина рукава: 62 см.
                - Длина: 63 см.
                - Ширина под подмышками: 56 см.
                - Ширина в плечах: 41 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 100% Полиэстер
                Наполнитель: 70% Гусиный пух, 30% Утиное перо
                `,category:"odejda"},{name:"Куртка Calvin Klein Jeans",cost:"18500",type:"kurtky",size:["S","M","L"],colorText:"Бежевый",code:1332,color:["#f5dda2"],flag:!1,img:["https://img2.ans-media.com/i/540x813/SS23-KUD0CO-12X_F1.jpg@webp?v=1678386379","https://img2.ans-media.com/i/540x813/SS23-KUD0CO-12X_F2.jpg@webp?v=1678385801","https://img2.ans-media.com/i/540x813/SS23-KUD0CO-12X_F3.jpg@webp?v=1678385320","https://img2.ans-media.com/i/540x813/SS23-KUD0CO-12X_F4.jpg@webp?v=1678385544"],description:`
                Куртка из коллекции Calvin Klein Jeans. Неутепленая модель выполнена из узорного материала. Исключительно комфортный материал, выполненный из натуральных волокон.
                - Этот товар частично произведён из сертифицированного органического хлопка, который выращивают и собирают с генетически немодифицированных растений, без использования удобрений или пестицидов. Процесс производства органического хлопка более экологичен.
                - Прямой фасон.
                - Модель без утепления с подкладкой.
                - Карманчики на груди.
                - Замыкается на молнию и кнопки.
                - Поясной ремень.
                - Тонкий материал.
                - Длина рукава:
                - Длина:
                - Ширина под подмышками:
                - Параметры указаны для размера:
                - Заниженная линия плеч.
                Состав:
                100% Хлопок
                `,category:"odejda"},{name:"Двусторонняя куртка Guess",cost:"12000",type:"kurtky",size:["S","M","L"],colorText:"Розовый",code:1332,color:["#f7e1f5"],flag:!1,img:["https://img2.ans-media.com/i/540x813/SS23-KUD00F-30X_F1.jpg@webp?v=1670925075","https://img2.ans-media.com/i/540x813/SS23-KUD00F-30X_F2.jpg@webp?v=1670925521","https://img2.ans-media.com/i/540x813/SS23-KUD00F-30X_F3.jpg@webp?v=1670924431","https://img2.ans-media.com/i/540x813/SS23-KUD00F-30X_F4.jpg@webp?v=1670924191"],description:`
                Куртка из коллекции Calvin Klein Jeans. Неутепленая модель выполнена из узорного материала. Исключительно комфортный материал, выполненный из натуральных волокон.
                - Этот товар частично произведён из сертифицированного органического хлопка, который выращивают и собирают с генетически немодифицированных растений, без использования удобрений или пестицидов. Процесс производства органического хлопка более экологичен.
                - Прямой фасон.
                - Модель без утепления с подкладкой.
                - Карманчики на груди.
                - Замыкается на молнию и кнопки.
                - Поясной ремень.
                - Тонкий материал.
                - Длина рукава:
                - Длина:
                - Ширина под подмышками:
                - Параметры указаны для размера:
                - Заниженная линия плеч.
                Состав:
                100% Хлопок
                `,category:"odejda"},{name:"Куртка Patrizia Pepe",cost:"19700",type:"kurtky",size:["S","M","L","XL"],colorText:"Коричневый",code:1332,color:["#d1ae66"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW22-KUD18R_88X_F1.jpg@webp?v=1661858078","https://img2.ans-media.com/i/540x813/AW22-KUD18R_88X_F2.jpg@webp?v=1661858430","https://img2.ans-media.com/i/540x813/AW22-KUD18R_88X_F3.jpg@webp?v=1661857830","https://img2.ans-media.com/i/540x813/AW22-KUD18R_88X_F4.jpg@webp?v=1661857344"],description:`
                Куртка из коллекции Patrizia Pepe. Утепленная модель выполнена из гладкой ткани.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
                
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
                
                - Прямой фасон.
                - Завышенный воротник.
                - Стеганая.
                - Замыкается на молнию и кнопки.
                - Гладкая ткань.
                - Карманы с застежкой.
                - Длина рукава: 58 см.
                - Длина: 56 см.
                - Ширина под подмышками: 55 см.
                - Ширина в плечах: 55 см.
                - Параметры указаны для размера: 36.
                `,category:"odejda"},{name:"Пуховая куртка Deha",cost:"29200",type:"kurtky",size:["S","M","L"],colorText:"Чёрный",code:1332,color:["#33322f"],flag:!1,img:["https://img2.ans-media.com/i/540x813/AW23-KUD0ZW-99X_F1.jpg@webp?v=1696341025","https://img2.ans-media.com/i/540x813/AW23-KUD0ZW-99X_F2.jpg@webp?v=1696340431","https://img2.ans-media.com/i/540x813/AW23-KUD0ZW-99X_F3.jpg@webp?v=1696338986","https://img2.ans-media.com/i/540x813/AW23-KUD0ZW-99X_F4.jpg@webp?v=1696337908"],description:`
                Куртка из коллекции Deha. Утепленная модель выполнена из стеганого материала. Модель с наполнителем из натурального пуха и перьев гарантирует высокий уровень изоляции от холода.
                - Модель изготовлена ​​из волокон, произведенных во время экологически безопасных производственных процессов, снижающих их воздействие на окружающую среду.
                - Простой фасон, не стеснящий движений.
                - Повышенный воротник, регулируемый завязками, обеспечивает дополнительную защиту от холода.
                - Застегивается на двустороннюю молнию.
                - Рукава отделаны удобной эластичной резинкой.
                - Молнии по бокам куртки.
                - Два боковых кармана на молнии.
                - Длина рукава (от воротника): 69 см.
                - Длина: 65 см.
                - Ширина под подмышками: 55 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 100% Полиамид
                Подкладка: 100% Полиамид
                Наполнитель: 90% Утиный пух, 10% Утиное перо
                `,category:"odejda"}],kofty:[{name:"Флисовая кофта Fjallraven Vardag Pile",cost:"6433",size:["S","M","L"],type:"kofty",colorText:"Коричневый",color:["#8c5a2b"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F1.jpg@webp?v=1696340418","https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F2.jpg@webp?v=1696337656","https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F3.jpg@webp?v=1696338974","https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F4.jpg@webp?v=1696335734","https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F5.jpg@webp?v=1696336939","https://img2.ans-media.com/i/540x813/AW23-BLD127-88X_F6.jpg@webp?v=1696340058"],description:`
                Кофта из коллекции Fjallraven выполнена из флисового материала. Продукт содержит переработанные волокнистые материалы.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Рукав реглан благодаря своей конструкции обеспечивает большую свободу движений.
                - Свободный крой для полной свободы движений.
                - Застегивается на молнию.
                - Рукава и нижний край обработаны эластичной кромкой, благодаря которой изделие лучше прилегает к телу и его легко надевать.
                - Два боковых кармана на молнии.
                - Длина рукава (от воротника): 71 см.
                - Длина: 60 см.
                - Ширина под подмышками: 53 см.
                - Параметры указаны для размера: S.
                Состав: 100% Полиэстер
                ID Товара: 9BYX-BLD127_88X
                Код производителя: F84789.232
                `,category:"odejda"},{name:"Кофта Puma",cost:"6433",size:["S","M","L"],type:"kofty",colorText:"Белый",color:["#fff"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/AW23-BLD0IS-01X_F1.jpg@webp?v=1696338855","https://img2.ans-media.com/i/540x813/AW23-BLD0IS-01X_F2.jpg@webp?v=1696338252","https://img2.ans-media.com/i/540x813/AW23-BLD0IS-01X_F3.jpg@webp?v=1696339334","https://img2.ans-media.com/i/540x813/AW23-BLD0IS-01X_F4.jpg@webp?v=1696338377","https://img2.ans-media.com/i/540x813/AW23-BLD0IS-01X_F5.jpg@webp?v=1696340175"],description:`
                Кофта с капюшоном из коллекции Puma выполнена из гладкого трикотажа. Модель с мягкой подкладкой обеспечивает мягкость и повышает комфорт.
                - Модель из линейки продуктов Puma Forever Better, изготовленная из переработанных материалов.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Фасон relaxed fit.
                - Рукава и нижний край отделаны удобной эластичной резинкой.
                - Мягкая подкладка в центре повышает комфорт использования.
                - Капюшон на шнурке обеспечивает дополнительное тепло и защиту, когда это необходимо.
                - Два накладных боковых кармана.
                - Длина рукава (от капюшона): 71 см.
                - Длина: 65 см.
                - Ширина под подмышками: 56 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 74% Полиэстер, 26% Вискоза
                Подкладка капюшона: 100% Хлопок
                Резинка: 96% Хлопок, 4% Эластан
                `,category:"odejda"},{name:"Кофта EA7 Emporio Armani",cost:"8400",size:["S","M","L","XL"],type:"kofty",colorText:"Чёрный",color:["#000"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/SS23-BLD0EP-99X_F4.jpg@webp?v=1678385315","https://img2.ans-media.com/i/540x813/SS23-BLD0EP-99X_F2.jpg@webp?v=1678386274","https://img2.ans-media.com/i/540x813/SS23-BLD0EP-99X_F1.jpg@webp?v=1678385684","https://img2.ans-media.com/i/540x813/SS23-BLD0EP-99X_F3.jpg@webp?v=1678385684"],description:`
                Кофта из коллекции EA7 Emporio Armani. Модель выполнена из эластичного трикотажа. Чрезвычайно мягкий материал.
                - Фасон Relaxed.
                - Круглый вырез.
                - Заниженная линия плеч.
                - Отделка в виде стяжки.
                - Тонкий, эластичный трикотаж.
                - Декоративные вставки.
                - Длина рукава (от горловины): 72 см.
                - Длина: 74 см.
                - Ширина под подмышками: 58 см.
                - Параметры указаны для размера: S.
                Состав:
                Основной материал: 49% Вискоза, 47% Полиэстер, 4% Эластан
                Другие материалы: 92% Полиамид, 5% Эластан, 3% Металлическое волокно
                `,category:"odejda"},{name:"Хлопковая кофта Pinko",cost:"9200",size:["S","M","L"],type:"kofty",colorText:"Бежевый",color:["#e3b581"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/SS23-BLD0L9-80X_F1.jpg@webp?v=1671710785","https://img2.ans-media.com/i/540x813/SS23-BLD0L9-80X_F2.jpg@webp?v=1671711622","https://img2.ans-media.com/i/540x813/SS23-BLD0L9-80X_F3.jpg@webp?v=1671714522","https://img2.ans-media.com/i/540x813/SS23-BLD0L9-80X_F4.jpg@webp?v=1671714631"],description:`
                Кофта с капюшоном из коллекции Pinko. Модель выполнена из эластичного трикотажа.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
                
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
                
                - Свободный фасон.
                - Заниженная линия плеч.
                - Практичный накладной карман-кенгуру спереди.
                - Капюшон со стяжкой.
                - Модель с декоративной аппликацией.
                - Длина рукава (от капюшона): 66 см.
                - Длина: 78 см.
                - Ширина под подмышками: 58 см.
                - Параметры указаны для размера: S.
                Состав:
                Материал 1: 100% Хлопок
                Материал 2: 100% Стекло
                Материал 3: 100% Другой материал
                `,category:"odejda"},{name:"Хлопковая кофта Pepe Jeans Wyllile",cost:"6600",size:["S","M","L"],type:"kofty",colorText:"Голубой",color:["#91d0e3"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/SS23-BLD0B8-50X_F1.jpg@webp?v=1673951781","https://img2.ans-media.com/i/540x813/SS23-BLD0B8-50X_F2.jpg@webp?v=1673953112","https://img2.ans-media.com/i/540x813/SS23-BLD0B8-50X_F3.jpg@webp?v=1673952869","https://img2.ans-media.com/i/540x813/SS23-BLD0B8-50X_F4.jpg@webp?v=1673951674"],description:`
                Кофта из коллекции Pepe Jeans. Модель выполнена из тонкого, легко эластичного трикотажа.
                - Модель из линейки Pepe Future, которая включает в себя продукты, изготовленные с использованием экологически безопасного производственного процесса.
                - Свободная модель.
                - Круглый вырез.
                - Модель с принтом.
                - Отделка в виде стяжки.
                - Длина рукава (от горловины): 72 см.
                - Длина: 60 см.
                - Ширина под подмышками: 52 см.
                - Параметры указаны для размера: S.
                Состав:
                100% Хлопок
                `,category:"odejda"},{name:"Кофта Calvin Klein Jeans",cost:"9600",size:["S","M","L","XL"],type:"kofty",colorText:"Розовый",color:["#fad2ef"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/AW22-BLD0SH_30X_F4.jpg@webp?v=1660119695","https://img2.ans-media.com/i/540x813/AW22-BLD0SH_30X_F2.jpg@webp?v=1660119051","https://img2.ans-media.com/i/540x813/AW22-BLD0SH_30X_F1.jpg@webp?v=1660120257","https://img2.ans-media.com/i/540x813/AW22-BLD0SH_30X_F3.jpg@webp?v=1660119695"],description:`
                Кофта с капюшоном из коллекции Calvin Klein Jeans. Модель выполнена из трикотажа.
                - Прямой фасон.
                - Капюшон со стяжкой.
                - Отделка в виде стяжки.
                - Модель с декоративной аппликацией.
                - Длина рукава: 60 см.
                - Длина: 56 см.
                - Ширина под подмышками: 52 см.
                - Параметры указаны для размера: S.
                Состав:
                Основной материал: 55% Хлопок, 45% Полиэстер
                Подкладка капюшона: 55% Хлопок, 45% Полиэстер
                Резинка: 53% Хлопок, 44% Полиэстер, 3% Эластан
                `,category:"odejda"},{name:"Хлопковая кофта Guess",cost:"9200",size:["S","M","XL"],type:"kofty",colorText:"Бежевый",color:["#f7f1d0"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/SS23-BLD014-MLC_F1.jpg@webp?v=1670926845","https://img2.ans-media.com/i/540x813/SS23-BLD014-MLC_F2.jpg@webp?v=1670928164","https://img2.ans-media.com/i/540x813/SS23-BLD014-MLC_F3.jpg@webp?v=1670925762","https://img2.ans-media.com/i/540x813/SS23-BLD014-MLC_F4.jpg@webp?v=1670925866"],description:`
                Кофта из коллекции Guess. Модель выполнена из тонкого, легко эластичного трикотажа.
                - Фасон Relaxed.
                - Заниженная линия плеч.
                - Длинный рукав.
                - Круглый вырез.
                - Рукава со стяжкой.
                - Модель с принтом.
                - Узорчатый трикотаж.
                - Длина рукава (от горловины): 74 см.
                - Длина: 52 см.
                - Ширина под подмышками: 52 см.
                - Параметры указаны для размера: S.
                Состав:
                100% Хлопок
                `,category:"odejda"},{name:"Кофта Puma",cost:"11600",size:["S","M","XL"],type:"kofty",colorText:"Белый",color:["#fff"],flag:!1,code:1138,img:["https://img2.ans-media.com/i/540x813/AW23-BLD0IU-01X_F1.jpg@webp?v=1696339936","https://img2.ans-media.com/i/540x813/AW23-BLD0IU-01X_F4.jpg@webp?v=1696339937","https://img2.ans-media.com/i/540x813/AW23-BLD0IU-01X_F2.jpg@webp?v=1696338736","https://img2.ans-media.com/i/540x813/AW23-BLD0IU-01X_F3.jpg@webp?v=1696339818"],description:`
                Кофта из коллекции Puma выполнена из трикотажа с принтом. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Модель из линейки продуктов Puma Forever Better, изготовленная из переработанных материалов.
                - Крой oversize.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Длинный рукав.
                - Завышенный воротник.
                - Короткая застежка на молнии.
                - Длина рукава (от горловины): 73 см.
                - Длина: 48 см.
                - Ширина под подмышками: 56 см.
                - Параметры указаны для размера: S.
                Состав: Материал 1: 100% Полиэстер
                Материал 2: 66% Хлопок, 34% Полиэстер
                Резинка: 97% Хлопок, 3% Эластан
                `,category:"odejda"}],bluzki:[{name:"Рубашка Lauren Ralph Lauren",cost:"6433",type:"bluzki",size:["S","M","L","XL","XXL"],colorText:"Розовый",color:["#d9bfad"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/AW23-BDD080-01X_F1.jpg@webp?v=1692371601","https://img2.ans-media.com/i/540x813/AW23-BDD080-01X_F2.jpg@webp?v=1692371602","https://img2.ans-media.com/i/540x813/AW23-BDD080-01X_F3.jpg@webp?v=1692371602","https://img2.ans-media.com/i/540x813/AW23-BDD080-01X_F4.jpg@webp?v=1692371602"],description:`
                Блузка из коллекции Lauren Ralph Lauren выполнена из узорной ткани. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                - Эта модель частично сделана из переработанного полиэстера.
                - Прямой фасон.
                - Рукава с манжетами на застежке.
                - Застегивается на пуговицы.
                - Декольте на завязке.
                - Тонкая неэластичная ткань.
                - Длина рукава: 62 см.
                - Длина: 66 см.
                - Ширина под подмышками: 50 см.
                - Параметры указаны для размера: S.
                Состав: 65% Вторичный полиэстер, 35% Полиэстер
                ID Товара: 9BYX-BDD080_01X
                Код производителя: 200925010
                `,category:"odejda"},{name:"Блузка Medicine",cost:"8799",size:["S","M","L","XL"],type:"bluzki",colorText:"Белый",color:["#e8e5df"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/RW23-BDD302-00X_F1.jpg@webp?v=1690726475","https://img2.ans-media.com/i/540x813/RW23-BDD302-00X_F2.jpg@webp?v=1690726351","https://img2.ans-media.com/i/540x813/RW23-BDD302-00X_F3.jpg@webp?v=1690726206","https://img2.ans-media.com/i/540x813/RW23-BDD302-00X_F4.jpg@webp?v=1690726596"],description:`
                Блузка из коллекции Medicine. Модель выполнена из материала с текстурой. Имеет V-образный вырез.
                - Крой regular.
                - Длинный рукав.
                - Рукава с манжетами на застежке.
                - V-образный вырез.
                - Застегивается на пуговицы.
                - Фактурный материал.
                - Декоративная отделка.
                - Длина рукава: 61 см.
                - Длина: 64 см.
                - Ширина под подмышками:
                - Ширина груди: 52 см.
                - Параметры указаны для размера: S.
                Состав: 100% Вискоза
                ID Товара: ZBYX-BDD302_00X
                Код производителя: RW23.BDD302
                `,category:"odejda"},{name:"Блузка Guess",cost:"4700",type:"bluzki",size:["S","M","L"],colorText:"Чёрный",color:["#202021"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/AW23-BDD05T-99X_F1.jpg@webp?v=1691669049","https://img2.ans-media.com/i/540x813/AW23-BDD05T-99X_F2.jpg@webp?v=1691669050","https://img2.ans-media.com/i/540x813/AW23-BDD05T-99X_F3.jpg@webp?v=1691669287","https://img2.ans-media.com/i/540x813/AW23-BDD05T-99X_F4.jpg@webp?v=1691668928"],description:`
                Блузка из коллекции Guess выполнена из очень эластичного трикотажа. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                - Облегающий фасон.
                - Полугольф.
                - Рукава с манжетами на застежке.
                - Длина рукава: 60 см.
                - Длина: 55 см.
                - Ширина под подмышками: 35 см.
                - Параметры указаны для размера: S.
                Состав: 92% Полиэстер, 8% Спандекс
                `,category:"odejda"},{name:"Блузка Medicine",cost:"4500",type:"bluzki",size:["S","M","L"],colorText:"Синий",color:["#3894a8"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/RW23-BDD030-69B_F1.jpg@webp?v=1690368729","https://img2.ans-media.com/i/540x813/RW23-BDD030-69B_F2.jpg@webp?v=1690368729","https://img2.ans-media.com/i/540x813/RW23-BDD030-69B_F3.jpg@webp?v=1690368730","https://img2.ans-media.com/i/540x813/RW23-BDD030-69B_F4.jpg@webp?v=1690368730"],description:`
                Блузка из коллекции Medicine. Модель выполнена из узорной ткани. Имеет V-образный вырез.
                - Крой regular.
                - Длинный рукав.
                - V-образный вырез.
                - Рукава отделаны эластичной резинкой.
                - Узорчатая ткань.
                - Удлиненный зад.
                - Длина рукава: 59 см.
                - Длина спереди: 66 см.
                - Длина сзади: 69 см.
                - Ширина груди: 49 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"},{name:"Блузка Medicine",cost:"2500",type:"bluzki",size:["S","M","L"],colorText:"Бежевый",color:["#e0b575"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/RS23-BKD0B0-08X_F1.jpg@webp?v=1685422336","https://img2.ans-media.com/i/540x813/RS23-BKD0B0-08X_F2.jpg@webp?v=1685422575","https://img2.ans-media.com/i/540x813/RS23-BKD0B0-08X_F3.jpg@webp?v=1685422454","https://img2.ans-media.com/i/540x813/RS23-BKD0B0-08X_F4.jpg@webp?v=1685422336"],description:`
                Блузка из коллекции Medicine. Модель выполнена из гладкой ткани. Имеет V-образный вырез.
                - Крой regular.
                - Короткий рукав.
                - V-образный вырез.
                - Гладкая ткань.
                - Длина: 64 см.
                - Ширина груди: 68,5 см.
                - Длина рукава: 36 см.
                - Параметры указаны для размера: S.
                Состав:
                100% Вискоза
                `,category:"odejda"},{name:"Блузка Custommade",cost:"5500",type:"bluzki",size:["S","M","L"],colorText:"Чёрный",color:["#363432"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/AW23-BDD066-99X_F1.jpg@webp?v=1697435663","https://img2.ans-media.com/i/540x813/AW23-BDD066-99X_F2.jpg@webp?v=1697433872","https://img2.ans-media.com/i/540x813/AW23-BDD066-99X_F3.jpg@webp?v=1697434108","https://img2.ans-media.com/i/540x813/AW23-BDD066-99X_F4.jpg@webp?v=1697435543"],description:`
                Блузка из коллекции Custommade выполнена из гладкой ткани. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                - Прямой фасон.
                - Классический круглый вырез.
                - Короткий рукав.
                - Застежка на пуговицы сзади.
                - Тонкая неэластичная ткань.
                - Закрытая молния.
                - Модель с декоративными воланами.
                - Длина: 50 см.
                - Ширина под подмышками: 47 см.
                - Параметры указаны для размера: 36.
                Состав: 91% Полиэстер, 9% Полиамид
                `,category:"odejda"},{name:"Блузка Medicine",cost:"4500",type:"bluzki",size:["S","M","L"],colorText:"Чёрный",color:["#292827"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/RW23-BDD702-99X_F1.jpg@webp?v=1696331334","https://img2.ans-media.com/i/540x813/RW23-BDD702-99X_F4.jpg@webp?v=1696330971","https://img2.ans-media.com/i/540x813/RW23-BDD702-99X_F2.jpg@webp?v=1696326766","https://img2.ans-media.com/i/540x813/RW23-BDD702-99X_F3.jpg@webp?v=1696330494"],description:`
                Блузка из коллекции Medicine. Модель выполнена из материала с кружевными вставками. Имеет воротничёк.
                - Крой oversize.
                - Длинный рукав.
                - Заниженная линия плеч.
                - Рукава отделаны эластичной резинкой.
                - Модель со стойкой.
                - Сзади застежка на пуговицу.
                - Кружевние вставки.
                - Длина рукава (от горловины): 72,5 см.
                - Длина: 64,5 см.
                - Ширина под подмышками: 61 см.
                - Параметры указаны для размера: S.
                Состав: 100% Вискоза
                `,category:"odejda"},{name:"Блузка MICHAEL Michael Kors",cost:"5500",type:"bluzki",size:["S","M","L"],colorText:"Зелёный",color:["#3a7035"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/AW23-KDD06R-77X_F1.jpg@webp?v=1695799238","https://img2.ans-media.com/i/540x813/AW23-KDD06R-77X_F3.jpg@webp?v=1695797550","https://img2.ans-media.com/i/540x813/AW23-KDD06R-77X_F2.jpg@webp?v=1695799111","https://img2.ans-media.com/i/540x813/AW23-KDD06R-77X_F5.jpg@webp?v=1695798267"],description:`
                Блузка из коллекции MICHAEL Michael Kors выполнена из гладкой ткани. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                - Прямой фасон.
                - Длинный рукав.
                - Рукава с манжетами на застежке.
                - Модель с воротником.
                - Спереди карманы.
                - Короткая застежка на пуговицах.
                - Тонкая неэластичная ткань.
                - Длина рукава: 62 см.
                - Длина: 70 см.
                - Ширина под подмышками: 47 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"},{name:"Блузка Боди Bardot",cost:"5500",type:"bluzki",size:["S","M","L"],colorText:"Бежевый",color:["#e5ca65"],flag:!1,code:1331,img:["https://img2.ans-media.com/i/540x813/AW23-BID0OW-02X_F1.jpg@webp?v=1695616929","https://img2.ans-media.com/i/540x813/AW23-BID0OW-02X_F2.jpg@webp?v=1695615014","https://img2.ans-media.com/i/540x813/AW23-BID0OW-02X_F3.jpg@webp?v=1695614290","https://img2.ans-media.com/i/540x813/AW23-BID0OW-02X_F4.jpg@webp?v=1695618128"],description:`
                Боди из коллекции Bardot выполнено из трикотажа. Эффектная модель для особых случаев.
                - Прямой фасон.
                - Длинный рукав.
                - V-образный вырез.
                - Короткая застежка на кнопку.
                - Модель из материала с пайетками.
                - Тонкий, эластичный трикотаж.
                - Длина рукава: 60 см.
                - Длина: 74 см.
                - Ширина под подмышками: 46 см.
                - Параметры указаны для размера: S.
                Состав: Подкладка: 95% Полиэстер, 5% Эластан
                Материал 1: 92% Полиэстер, 8% Эластан
                Материал 2: 95% Вискоза, 5% Эластан
                Аппликация: 100% Полиэтилен
                `,category:"odejda"}],platya:[{name:"Платье Answear Lab",cost:"9299",type:"platya",size:["M","L","XL"],colorText:"Чёрный",color:["#000"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/WZ23-SUD0G3-99X_F1.jpg@webp?v=1697559161","https://img2.ans-media.com/i/540x813/WZ23-SUD0G3-99X_F2.jpg@webp?v=1697559062","https://img2.ans-media.com/i/540x813/WZ23-SUD0G3-99X_F3.jpg@webp?v=1697558799","https://img2.ans-media.com/i/540x813/WZ23-SUD0G3-99X_F4.jpg@webp?v=1697558800","https://img2.ans-media.com/i/540x813/WZ23-SUD0G3-99X_F5.jpg@webp?v=1697559063"],description:`
                Платье из коллекции Answear Lab выполнено из трикотажа с аппликацией. Коллекция доступна исключительно на Answear.
                - Расклешенный фасон.
                - Классический круглый вырез.
                - Модель с открытыми плечами.
                - Модель на подкладке.
                - Блестки и бусины пришиты к сетчатому материалу.
                - Закрытая молния.
                - Тонкий, эластичный трикотаж.
                - Длина: 87 см.
                - Ширина под подмышками: 40 см.
                - Ширина талии: 38 см.
                - Параметры указаны для размера: S/M.
                Состав: 100% Полиэстер
                `,category:"odejda"},{name:"Платье Medicine",cost:"9000",size:["S","M","L"],type:"platya",colorText:"Чёрный",color:["#000"],code:1336,flag:!1,img:["https://img2.ans-media.com/i/540x813/RW23-SUD800-99X_F1.jpg@webp?v=1696483936","https://img2.ans-media.com/i/540x813/RW23-SUD800-99X_F2.jpg@webp?v=1696484048","https://img2.ans-media.com/i/540x813/RW23-SUD800-99X_F3.jpg@webp?v=1696483936","https://img2.ans-media.com/i/540x813/RW23-SUD800-99X_F4.jpg@webp?v=1696483937"],description:`
                Платье из коллекции Medicine. Облегающая модель выполнена из ребристого трикотажа.
                - Облегающий фасон.
                - Длинный рукав.
                - Модель с гольфом.
                - Рукава со стяжкой.
                - Ребристый трикотаж.
                - Длина рукава: 67 см.
                - Длина: 105 см.
                - Ширина под подмышками: 34 см.
                - Ширина талии: 25 см.
                - Параметры указаны для размера: S.
                Состав: 50% Вискоза, 26% Полиамид, 24% Полиэстер
                `,category:"odejda"},{name:"Платье с примесью шерсти Guess",cost:"12299",size:["S","M","L","XL"],type:"platya",colorText:"Белый",color:["#fff"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/AW23-SUD0ZS-01X_F1.jpg@webp?v=1695103357","https://img2.ans-media.com/i/540x813/AW23-SUD0ZS-01X_F3.jpg@webp?v=1695104083","https://img2.ans-media.com/i/540x813/AW23-SUD0ZS-01X_F4.jpg@webp?v=1695103357","https://img2.ans-media.com/i/540x813/AW23-SUD0ZS-01X_F5.jpg@webp?v=1695102045"],description:`
                Платье из коллекции Guess выполнено из гладкого трикотажа. Высокоэластичный материал гарантирует полную свободу движений.
                - Cвободный верх и облегающий низ.
                - Вырез-лодочка.
                - Длинный рукав.
                - Рукава отделаны узкой эластичной резинкой.
                - Эффектное плетение.
                - Плотный, эластичный трикотаж.
                - Длина рукава (от горловины): 83 см.
                - Длина: 100 см.
                - Ширина под подмышками: 61 см.
                - Ширина талии: 41 см.
                - Параметры указаны для размера: S.
                Состав: 60% Полиамид, 30% Шерсть, 10% Акрил
                `,category:"odejda"},{name:"Платье Answear Lab",cost:"11599",size:["S","M","L","XL"],type:"platya",colorText:"Чёрный",color:["#000"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/WZ23-SUD0GP-99X_F1.jpg@webp?v=1697559063","https://img2.ans-media.com/i/540x813/WZ23-SUD0GP-99X_F3.jpg@webp?v=1697558935","https://img2.ans-media.com/i/540x813/WZ23-SUD0GP-99X_F4.jpg@webp?v=1697559161","https://img2.ans-media.com/i/540x813/WZ23-SUD0GP-99X_F5.jpg@webp?v=1697558935"],description:`
                Платье из коллекции Answear Lab выполнено из имитации кожи. Коллекция доступна исключительно на Answear.
                - Расклешенный фасон.
                - Классический круглый вырез.
                - Застегивается на молнию.
                - Модель с прорезными карманами.
                - Декоративная прострочка.
                - Тонкий, слегка эластичный трикотаж.
                - Длина: 88 см.
                - Ширина под подмышками: 43 см.
                - Ширина талии: 36,5 см.
                - Параметры указаны для размера: S.
                Состав: 100% Полиуретан
                `,category:"odejda"},{name:"Платье Silvian Heach",cost:"13000",size:["S","M","L"],colorText:"Коричневый",type:"platya",color:["#6b4915"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/ZW23-SUD00J-82X_F1.jpg@webp?v=1696481339","https://img2.ans-media.com/i/540x813/ZW23-SUD00J-82X_F2.jpg@webp?v=1696481820","https://img2.ans-media.com/i/540x813/ZW23-SUD00J-82X_F3.jpg@webp?v=1696481821","https://img2.ans-media.com/i/540x813/ZW23-SUD00J-82X_F4.jpg@webp?v=1696480502","https://img2.ans-media.com/i/540x813/ZW23-SUD00J-82X_F5.jpg@webp?v=1696479185"],description:`
                Платье из коллекции Silvian Heach выполнено из гладкой ткани. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
                - Приталенный крой, подчеркивающий фигуру.
                - Декоративный заостренный вырез.
                - Длинный рукав.
                - Декоративные складки.
                - Модель с вязкой.
                - Короткая застежка на молнии.
                - Модель на подкладке.
                - Тонкая неэластичная ткань.
                - Длина рукава: 58 см.
                - Длина: 80 см.
                - Ширина под подмышками: 47 см.
                - Ширина талии: 35 см.
                - Полуобхват бедер: 46 см.
                - Параметры указаны для размера: 36.
                Состав: 73% Полиэстер, 22% Вискоза, 5% Эластан
                `,category:"odejda"},{name:"Платье MICHAEL Michael Kors",cost:"22000",size:["S","M","L"],colorText:"Золотой   ",type:"platya",color:["#facbaa"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/AW23-SUD0O9-GLD_F1.jpg@webp?v=1695709244","https://img2.ans-media.com/i/540x813/AW23-SUD0O9-GLD_F2.jpg@webp?v=1695706717","https://img2.ans-media.com/i/540x813/AW23-SUD0O9-GLD_F3.jpg@webp?v=1695710320","https://img2.ans-media.com/i/540x813/AW23-SUD0O9-GLD_F4.jpg@webp?v=1695710797"],description:`
                Платье из коллекции MICHAEL Michael Kors выполнено из узорного трикотажа. Высокоэластичный материал гарантирует полную свободу движений.
                - Приталенный крой, подчеркивающий фигуру.
                - Классический круглый вырез.
                - Нерегулируемые, неотстегивающиеся бретели.
                - Материал с металической нитью.
                - Тонкий, эластичный трикотаж.
                - Длина: 92 см.
                - Ширина под подмышками: 34 см.
                - Ширина талии: 31,5 см.
                - Полуобхват бедер: 37,5 см.
                - Параметры указаны для размера: S.
                Состав: 75% Вискоза, 11% Нейлон, 7% Полиэстер, 6% Металлическое волокно, 1% Эластан
                `,category:"odejda"},{name:"Хлопковое платье Calvin Klein Jeans",cost:"16000",size:["S","M","L"],colorText:"Бежевый",type:"platya",color:["#d9cd91"],flag:!1,code:1336,img:["https://img2.ans-media.com/i/540x813/AW23-SUD1IA-80X_F1.jpg@webp?v=1695709007","https://img2.ans-media.com/i/540x813/AW23-SUD1IA-80X_F2.jpg@webp?v=1695709960","https://img2.ans-media.com/i/540x813/AW23-SUD1IA-80X_F3.jpg@webp?v=1695711158","https://img2.ans-media.com/i/540x813/AW23-SUD1IA-80X_F4.jpg@webp?v=1695707924"],description:`
                Платье из коллекции Calvin Klein Jeans выполнено из гладкой ткани. Модель из плотного материала, удерживающего форму.
                - Свободный крой для полной свободы движений.
                - Застежка на молнию и пуговицы.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Длинный рукав.
                - Рукава с манжетами на застежке.
                - Модель с воротником.
                - Два кармана на спине.
                - Два накладных боковых кармана.
                - Карманчик на груди.
                - Плотная, неэластичная ткань.
                - Длина рукава (от воротничка): 75 см.
                - Длина: 90 см.
                - Ширина под подмышками: 54 см.
                - Ширина талии: 37 см.
                - Полуобхват бедер: 50 см.
                - Параметры указаны для размера: S.
                Состав: 100% Хлопок
                `,category:"odejda"}],underwear:[{name:"Бюстгальтер women'secret AUTUMN HELANKAS",cost:"3200",size:["65B","70B","75B","80B","85B"],colorText:"Чёрный",type:"underwear",color:["#000"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AW23-BID0P4-99X_F1.jpg@webp?v=1695368768","https://img2.ans-media.com/i/540x813/AW23-BID0P4-99X_F2.jpg@webp?v=1695368647","https://img2.ans-media.com/i/540x813/AW23-BID0P4-99X_F3.jpg@webp?v=1695368166","https://img2.ans-media.com/i/540x813/AW23-BID0P4-99X_F4.jpg@webp?v=1695369488"],description:`
                Бюстгальтер в стиле push-up из коллекции women'secret. Модель выполнена из кружевного материала.
                - Модель с косточками.
                - Уплотненная чашка.
                - Регулируемые бретели.
                - Регулируемая застежка на петли.
                Состав: 86% Полиамид, 14% Эластан
                `,category:"odejda"},{name:"Бюстгальтер Calvin Klein Underwear",cost:"4200",size:["65B","70B","75B","80B","85B"],colorText:"Чёрный",type:"underwear",color:["#000"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AW23-BID14F-99X_F1.jpg@webp?v=1690822496","https://img2.ans-media.com/i/540x813/AW23-BID14F-99X_F2.jpg@webp?v=1690822371","https://img2.ans-media.com/i/540x813/AW23-BID14F-99X_F3.jpg@webp?v=1690822497","https://img2.ans-media.com/i/540x813/AW23-BID14F-99X_F4.jpg@webp?v=1690822497"],description:`
                Бюстгальтер в стиле классика из коллекции Calvin Klein Underwear. Модель выполнена из гладкого материала.
                - Плотная чашечка.
                - Несъемные вставки укрепляют, стабилизируют и приподнимают бюст.
                - Регулируемые, неотстегивающиеся бретели.
                - Модель с эластичной резинкой.
                - Застегивается на три ряда двойных крючков.
                Состав: 90% Хлопок, 10% Эластан
                `,category:"odejda"},{name:"Бюстгальтер women'secret ELEGANT",cost:"3800",size:["65B","70B","75B","80B","85B"],colorText:"Бежевый",type:"underwear",color:["#eddbad"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AA00-BID0TT-02X_F1.jpg@webp?v=1681894957","https://img2.ans-media.com/i/540x813/AA00-BID0TT-02X_F2.jpg@webp?v=1681894958","https://img2.ans-media.com/i/540x813/AA00-BID0TT-02X_F3.jpg@webp?v=1681894959","https://img2.ans-media.com/i/540x813/AA00-BID0TT-02X_F4.jpg@webp?v=1681894959"],description:`
                Бюстгальтер в стиле "балконет" из коллекции women'secret. Модель выполнена из микроволокон.
                - Модель с косточками.
                - Уплотненная чашка.
                - Регулируемая застежка на петли.
                - Регулируемые, отстегивающиеся бретели.
                Состав:
                74% Полиамид, 26% Эластан
                `,category:"odejda"},{name:"Under Armour Трусы (3 pack)",cost:"3800",size:["XS","S","M","L"],colorText:"Бежевый",type:"underwear",color:["#eddbad"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/SS20-BID04B_80X_F1.jpg@webp?v=1661165577","https://img2.ans-media.com/i/540x813/SS20-BID04B_80X_F2.jpg@webp?v=1661164049","https://img2.ans-media.com/i/540x813/SS20-BID04B_80X_F3.jpg@webp?v=1661165447"],description:`
                Трусы из коллекции Under Armour. Модель выполнена из гладкого материала. В комплекте три пары.
                - Бесшовная модель.
                `,category:"odejda"},{name:"Моделирующие шорты Spanx",cost:"6800",size:["XS","S","M"],colorText:"Бежевый",type:"underwear",color:["#eddbad"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/SS22-BID12Y_02X_F1.jpg@webp?v=1650441037","https://img2.ans-media.com/i/540x813/SS22-BID12Y_02X_F2.jpg@webp?v=1650441632","https://img2.ans-media.com/i/540x813/SS22-BID12Y_02X_F3.jpg@webp?v=1650441284"],description:`
                Моделирующие шорты из коллекции Spanx. Модель выполнена из комфортного трикотажа.
                - Модель из линии Thinstincts® произведён из легкого, дышащего и влагоотводящего материала.
                - Модель со специально обрезанными краями, благодаря которым она незаметна под одеждой.
                Состав:
                Основной материал: 45% Лайкра, 55% Нейлон
                Стелька: 100% Хлопок
                `,category:"odejda"},{name:"Бюстгальтер Puma 935020",cost:"3800",size:["65B","70B","75B","80B"],colorText:"Белый",type:"underwear",color:["#fff"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/SS21-BID07C_00X_F1.jpg@webp?v=1620818200","https://img2.ans-media.com/i/540x813/SS21-BID07C_00X_F2.jpg@webp?v=1620816155","https://img2.ans-media.com/i/540x813/SS21-BID07C_00X_F3.jpg@webp?v=1620815561"],description:`
                Бюстгальтер в стиле классика из коллекции Puma. Модель выполнена из комфортного материала.
                - Плотная чашечка.
                - Регулируемые, неотстегивающиеся бретели.
                - Регулируемая застежка на петли.
                Состав: 84% Полиамид, 16% Эластан
                `,category:"odejda"},{name:"Tommy Hilfiger - Бюстгальтер",cost:"3800",size:["65B","70B","75B","80B","85B"],colorText:"Синий",type:"underwear",color:["#14122e"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AW20-BID08Z_59X_F1.jpg@webp?v=1626172459","https://img2.ans-media.com/i/540x813/AW20-BID08Z_59X_F2.jpg@webp?v=1626171523","https://img2.ans-media.com/i/540x813/AW20-BID08Z_59X_F3.jpg@webp?v=1626171737"],description:`
                Бюстгальтер в стиле классика из коллекции Tommy Hilfiger. Модель выполнена из комфортного материала.
                - Плотная чашечка.
                - Регулируемые, неотстегивающиеся бретели.
                - Застегивается на три ряда двойных крючков.
                Состав:
                53% Органический хлопок, 12% Эластан, 35% Модал
                `,category:"odejda"},{name:"Бюстгальтер women'secret REAL",cost:"4200",size:["70B","75B","80B","85B"],colorText:"Белый",type:"underwear",color:["#fff"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AA00-BID13Y-00X_F1.jpg@webp?v=1694066055","https://img2.ans-media.com/i/540x813/AA00-BID13Y-00X_F2.jpg@webp?v=1694064609","https://img2.ans-media.com/i/540x813/AA00-BID13Y-00X_F3.jpg@webp?v=1694065210"],description:`
                Бюстгальтер в стиле классика из коллекции women'secret. Модель выполнена из микроволокон.
        
                - Модель с косточками.
                - Застегивается на крючок.
                - Регулируемые, неотстегивающиеся бретели.
                
                Состав:
                91% Полиамид, 9% Эластан
                `,category:"odejda"},{name:"Бюстгальтер women'secret SENSE 1",cost:"5600",size:["65B","75B","80B","85B"],colorText:"Чёрный",type:"underwear",color:["#000"],flag:!1,code:1111,img:["https://img2.ans-media.com/i/540x813/AW23-BID0M9-99X_F1.jpg@webp?v=1692771383","https://img2.ans-media.com/i/540x813/AW23-BID0M9-99X_F2.jpg@webp?v=1692768981","https://img2.ans-media.com/i/540x813/AW23-BID0M9-99X_F3.jpg@webp?v=1692770537","https://img2.ans-media.com/i/540x813/AW23-BID0M9-99X_F4.jpg@webp?v=1692769212"],description:`
                Бюстгальтер в стиле классика из коллекции women'secret. Модель выполнена из микроволокон.
        
                - Модель с косточками.
                - Застегивается на крючок.
                - Регулируемые, неотстегивающиеся бретели.
                
                Состав:
                91% Полиамид, 9% Эластан
                `,category:"odejda"}],yubki:[{name:"Джинсовая юбка Miss Sixty",cost:"9000",size:["S","M","L","XL"],colorText:"Чёрный",type:"yubki",color:["#000"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD0HL-90J_F1.jpg@webp?v=1695878198","https://img2.ans-media.com/i/540x813/AW23-SDD0HL-90J_F2.jpg@webp?v=1695877595","https://img2.ans-media.com/i/540x813/AW23-SDD0HL-90J_F3.jpg@webp?v=1695879754","https://img2.ans-media.com/i/540x813/AW23-SDD0HL-90J_F4.jpg@webp?v=1695877123"],description:`
                Юбка из коллекции Miss Sixty выполнена из денима. Модель из чрезвычайно комфортного хлопкового материала.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
        
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
        
                - Прямой фасон.
                - Застегивается на пуговицу и молнию.
                - Прорезные карманы.
                - Накладные карманы обеспечивают дополнительное место для хранения мелких предметов.
                - Тонкая неэластичная ткань.
                - С разрезом.
                - Ширина по поясу: 35 см.
                - Длина: 108 см.
                - Параметры указаны для размера: S.
                Состав: 100% Хлопок
                `,category:"odejda"},{name:"Хлопковая юбка Calvin Klein Jeans",cost:"11000",size:["S","M","L"],colorText:"Бежевый",type:"yubki",color:["#d9cd91"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD0GE-80X_F1.jpg@webp?v=1695102763","https://img2.ans-media.com/i/540x813/AW23-SDD0GE-80X_F2.jpg@webp?v=1695103964","https://img2.ans-media.com/i/540x813/AW23-SDD0GE-80X_F3.jpg@webp?v=1695101684","https://img2.ans-media.com/i/540x813/AW23-SDD0GE-80X_F4.jpg@webp?v=1695104320"],description:`
                Юбка из коллекции Calvin Klein Jeans выполнена из гладкого материала. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Расклешенный фасон.
                - Накладной карман сбоку подойдет для телефона или других мелких предметов.
                - Застегивается на пуговицы.
                - Гладкая ткань.
                - Ширина по поясу: 35 см.
                - Длина: 40 см.
                - Параметры указаны для размера: S.
                Состав: 100% Хлопок
                `,category:"odejda"},{name:"Юбка Guess",cost:"8000",size:["S","M","L"],colorText:"Коричневый",type:"yubki",color:["#87711f"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD09H-88X_F1.jpg@webp?v=1697198538","https://img2.ans-media.com/i/540x813/AW23-SDD09H-88X_F2.jpg@webp?v=1697198771","https://img2.ans-media.com/i/540x813/AW23-SDD09H-88X_F3.jpg@webp?v=1697198668","https://img2.ans-media.com/i/540x813/AW23-SDD09H-88X_F4.jpg@webp?v=1697198669"],description:`
                Юбка из коллекции Guess выполнена из имитации замши. Благодаря содержанию полиэстера материал является более устойчивым к заломам.
                - Содержит переработанный пластик.
                - Приталенный крой, подчеркивающий фигуру.
                - Застегивается на молнию.
                - Модель на подкладке.
                - Ширина по поясу: 35 см.
                - Длина сзади: 50 см.
                - Длина спереди: 41 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 90% Полиэстер, 10% Эластан
                Подкладка: 95% Полиэстер, 5% Эластан
                Отделка: 100% Полиэстер
                Покрытие: 100% Полиуретан
                `,category:"odejda"},{name:"Юбка Morgan",cost:"7000",size:["S","M","L"],colorText:"Чёрный",type:"yubki",color:["#000"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD0HB-99X_F1.jpg@webp?v=1694077240","https://img2.ans-media.com/i/540x813/AW23-SDD0HB-99X_F2.jpg@webp?v=1694077104","https://img2.ans-media.com/i/540x813/AW23-SDD0HB-99X_F3.jpg@webp?v=1694077104","https://img2.ans-media.com/i/540x813/AW23-SDD0HB-99X_F4.jpg@webp?v=1694077331"],description:`
                Юбка из коллекции Morgan выполнена из гладкого материала. Материал с оптимальной эластичностью гарантирует полную свободу движений.
                - Инициатива Better Cotton. Продукты, отмеченные этим знаком, содержат не менее 50% хлопка от продавца или бренда, принадлежащего инициативе Better Cotton и инвестирующего в развитие BCI.
                - Простой фасон, не стеснящий движений.
                - Застегивается на потайную молнию.
                - Два накладных боковых кармана.
                - Имитация карманов на ягодицах.
                - Ширина по поясу: 36 см.
                - Длина: 41 см.
                - Параметры указаны для размера: 36.
                Состав: 50% Хлопок, 47% Полиэстер, 3% Эластан
                `,category:"odejda"},{name:"Юбка Guess",cost:"6400",size:["S","M","L","XL"],colorText:"Розовый",type:"yubki",color:["#cc5293"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD0CZ-45X_F1.jpg@webp?v=1693582251","https://img2.ans-media.com/i/540x813/AW23-SDD0CZ-45X_F2.jpg@webp?v=1693582348","https://img2.ans-media.com/i/540x813/AW23-SDD0CZ-45X_F3.jpg@webp?v=1693580913","https://img2.ans-media.com/i/540x813/AW23-SDD0CZ-45X_F4.jpg@webp?v=1693581520"],description:`
                Юбка из коллекции Guess выполнена из эластичного трикотажа. Модель из мягкой и приятной на ощупь ткани.
                - Содержит переработанный пластик.
                - Простой фасон, не стеснящий движений.
                - Завышенная талия.
                - Гибкая полоска в талии предотвращает скольжение во время движения.
                - Модель с декоративной аппликацией.
                - Ширина по поясу: 33 см.
                - Длина: 47 см.
                - Параметры указаны для размера: S.
                Состав: 51% Хлопок, 49% Полиэстер
                `,category:"odejda"},{name:"Юбка Guess",cost:"6400",size:["S","M","L","XL"],colorText:"Розовый",type:"yubki",color:["#f7add5"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD09C-30A_F1.jpg@webp?v=1693330228","https://img2.ans-media.com/i/540x813/AW23-SDD09C-30A_F2.jpg@webp?v=1693329617","https://img2.ans-media.com/i/540x813/AW23-SDD09C-30A_F3.jpg@webp?v=1693329373","https://img2.ans-media.com/i/540x813/AW23-SDD09C-30A_F4.jpg@webp?v=1693329020"],description:`
                Юбка из коллекции Guess выполнена из узорной ткани. Полиэстер гарантирует повышенную устойчивость к заломам.
                - Расклешенный фасон.
                - Застегивается на потайную молнию.
                - Резинка в поясе.
                - Модель на подкладке.
                - Ширина по поясу: 32 см.
                - Длина: 47 см.
                - Параметры указаны для размера: S.
                Состав: 100% Полиэстер
                `,category:"odejda"},{name:"Шерстяная юбка United Colors of Benetton",cost:"9400",size:["M","L","XL"],colorText:"Белый",type:"yubki",color:["#fff"],flag:!1,code:1552,img:["https://img2.ans-media.com/i/540x813/AW23-SDD0BH-01X_F1.jpg@webp?v=1691555674","https://img2.ans-media.com/i/540x813/AW23-SDD0BH-01X_F2.jpg@webp?v=1691555559","https://img2.ans-media.com/i/540x813/AW23-SDD0BH-01X_F3.jpg@webp?v=1691555913","https://img2.ans-media.com/i/540x813/AW23-SDD0BH-01X_F4.jpg@webp?v=1691555315"],description:`
                Юбка из коллекции United Colors of Benetton выполнена из эластичного трикотажа. Высокое содержание шерсти обеспечивает защиту от холода, а добавление полиамида повышает долговечность изделия.
                - Приталенный крой, подчеркивающий фигуру.
                - Высокая талия с эластичной полоской предотвращает скольжение во время движения.
                - Фактурный материал.
                - Гладкий материал.
                - Плотный, эластичный трикотаж.
                - Ширина по поясу: 35 см.
                - Длина: 84 см.
                - Параметры указаны для размера: S.
                Состав: 78% Шерсть, 22% Полиамид
                `,category:"odejda"}],phutbolki:[{name:"Хлопковая футболка MICHAEL Michael Kors",cost:"9000",size:["S","M","L"],colorText:"Белый",color:["#fff"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD1H7-00X_F1.jpg@webp?v=1696571328","https://img2.ans-media.com/i/540x813/AW23-TSD1H7-00X_F2.jpg@webp?v=1696571569","https://img2.ans-media.com/i/540x813/AW23-TSD1H7-00X_F3.jpg@webp?v=1696571569","https://img2.ans-media.com/i/540x813/AW23-TSD1H7-00X_F4.jpg@webp?v=1696570727"],description:`
                Футболка из коллекции MICHAEL Michael Kors выполнена из тонкого эластичного трикотажа. Модель из чрезвычайно комфортного хлопкового материала.
                - Органический хлопок выращивают без использования опасных для здоровья химикатов, химических пестицидов или искусственных удобрений.
                - Свободный крой для полной свободы движений.
                - Классический круглый вырез.
                - Короткий рукав.
                - Модель с аппликацией.
                - Длина: 65 см.
                - Ширина под подмышками: 48 см.
                - Параметры указаны для размера: S.
                Состав: 100% Органический хлопок
                `,category:"odejda"},{name:"Хлопковая футболка Tommy Jeans",cost:"6000",size:["S","M","L"],colorText:"Белый",type:"phutbolki",color:["#fff"],flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD156-00X_F1.jpg@webp?v=1694755018","https://img2.ans-media.com/i/540x813/AW23-TSD156-00X_F2.jpg@webp?v=1694757772","https://img2.ans-media.com/i/540x813/AW23-TSD156-00X_F3.jpg@webp?v=1694756463","https://img2.ans-media.com/i/540x813/AW23-TSD156-00X_F4.jpg@webp?v=1694757773"],description:`
                Легкая футболка из коллекции Tommy Jeans выполнена из приятного на ощупь трикотажа. Модель из чрезвычайно комфортного хлопкового материала.
                - Свободный крой для полной свободы движений.
                - Круглый, ребристый вырез.
                - Логотип бренда спереди.
                - Тонкий, эластичный трикотаж.
                - Длина: 52 см.
                - Ширина под подмышками: 51 см.
                - Параметры указаны для размера: S.
                Состав: 100% Хлопок
                `,category:"odejda"},{name:"Лонгслив Morgan",cost:"5600",size:["S","M","L"],colorText:"Чёрный",color:["#000"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-BUD0EB-99X_F1.jpg@webp?v=1698042027","https://img2.ans-media.com/i/540x813/AW23-BUD0EB-99X_F2.jpg@webp?v=1698043345","https://img2.ans-media.com/i/540x813/AW23-BUD0EB-99X_F3.jpg@webp?v=1698041548","https://img2.ans-media.com/i/540x813/AW23-BUD0EB-99X_F4.jpg@webp?v=1698042266"],description:`
                Лонгслив из коллекции Morgan выполнена из тонкого эластичного трикотажа. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Товары из серии «better cotton™». Better Cotton — это ведущая мировая инициатива по устойчивому развитию хлопка, цель которой помочь хлопковым сообществам выжить и процветать, одновременно защищая и восстанавливая окружающую среду.
                - Простой фасон, не стеснящий движений.
                - Классический круглый вырез.
                - Модель с принтом.
                - Длина рукава: 62 см.
                - Длина: 62 см.
                - Ширина под подмышками: 41 см.
                - Параметры указаны для размера: S.
                Состав: 50% Хлопок, 50% Модал
                `,category:"odejda"},{name:"Хлопковая футболка Calvin Klein",cost:"7600",size:["M","L","XL"],colorText:"Серый",color:["#999"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD00C-50X_F1.jpg@webp?v=1696249739","https://img2.ans-media.com/i/540x813/AW23-TSD00C-50X_F2.jpg@webp?v=1696249873","https://img2.ans-media.com/i/540x813/AW23-TSD00C-50X_F3.jpg@webp?v=1696249739"],description:`
                Футболка из коллекции Calvin Klein выполнена из эластичного трикотажа. Модель из дышащего хлопкового материала.
                - Модель выполнена из эластичного, чрезвычайно приятного для кожи трикотажа, что обеспечивает высокий комфорт ношения.
                - Простой фасон, не стеснящий движений.
                - V-образный вырез.
                - Гладкий трикотаж.
                - Тонкий материал.
                - Длина: 63 см.
                - Ширина под подмышками: 48 см.
                - Параметры указаны для размера: S.
                Состав: 100% Хлопок
                `,category:"odejda"},{name:"Футболка Guess",cost:"6600",size:["M","L"],colorText:"Белый",color:["#fff"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD0U8-01X_F1.jpg@webp?v=1695102780","https://img2.ans-media.com/i/540x813/AW23-TSD0U8-01X_F2.jpg@webp?v=1695102296","https://img2.ans-media.com/i/540x813/AW23-TSD0U8-01X_F3.jpg@webp?v=1695101700","https://img2.ans-media.com/i/540x813/AW23-TSD0U8-01X_F4.jpg@webp?v=1695102539"],description:`
                Футболка из коллекции Guess выполнена из трикотажа с принтом. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Органический хлопок выращивают без использования опасных для здоровья химикатов, химических пестицидов или искусственных удобрений.
                - Простой фасон, не стеснящий движений.
                - Классический круглый вырез.
                - Тонкий, эластичный трикотаж.
                - Длина: 62 см.
                - Ширина под подмышками: 44 см.
                - Параметры указаны для размера: S.
                Состав: 95% Хлопок, 5% Эластан
                `,category:"odejda"},{name:"Топ лаунж HUGO",cost:"6600",size:["S","M","L","XL"],colorText:"Чёрный",color:["#000"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD11U-99X_F1.jpg@webp?v=1695801650","https://img2.ans-media.com/i/540x813/AW23-TSD11U-99X_F2.jpg@webp?v=1695802347","https://img2.ans-media.com/i/540x813/AW23-TSD11U-99X_F3.jpg@webp?v=1695801983","https://img2.ans-media.com/i/540x813/AW23-TSD11U-99X_F4.jpg@webp?v=1695801515"],description:`
                Топ из коллекции HUGO выполнена из эластичного трикотажа. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Инициатива Clean Up Your Act — поддержка более уравновешенных методов производства, снижающих негативное воздействие на планету.
                - Облегающий фасон.
                - Классический круглый вырез.
                - Тонкий, эластичный трикотаж.
                - Длина: 57 см.
                - Ширина под подмышками: 32 см.
                - Параметры указаны для размера: S.
                Состав: 93% Хлопок, 7% Эластан
                `,category:"odejda"},{name:"Футболка Tommy Jeans",cost:"5600",size:["M","L","XL"],colorText:"Розовый",color:["#f0c9de"],type:"phutbolki",flag:!1,code:1832,img:["https://img2.ans-media.com/i/540x813/AW23-TSD152-30X_F1.jpg@webp?v=1694751666","https://img2.ans-media.com/i/540x813/AW23-TSD152-30X_F2.jpg@webp?v=1694751534","https://img2.ans-media.com/i/540x813/AW23-TSD152-30X_F3.jpg@webp?v=1694751535","https://img2.ans-media.com/i/540x813/AW23-TSD152-30X_F4.jpg@webp?v=1694751666"],description:`
                Футболка из коллекции Tommy Jeans выполнена из тонкого эластичного трикотажа. Модель из чрезвычайно комфортного материала с высоким содержанием хлопка.
                - Экологически переработанный хлопок снижает негативное воздействие на окружающую среду за счет сокращения использования химикатов, а также экономии воды и энергии, улучшения условий жизни и экономического развития регионов, производящих хлопок.
                - Прямой фасон.
                - Классический круглый вырез.
                - Короткий рукав.
                - Логотип бренда спереди.
                - Длина: 52 см.
                - Ширина под подмышками: 45 см.
                - Параметры указаны для размера: S.
                Состав: 60% Хлопок, 40% Полиэстер
                `,category:"odejda"}],bezrukavki:[{name:"Безрукавка Calvin Klein Jeans",cost:"12499",size:["S","M","L","XL"],type:"bezrukavki",colorText:"Чёрный",color:["#000"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD01O-99X_F1.jpg@webp?v=1685988027","https://img2.ans-media.com/i/540x813/AW23-KUD01O-99X_F2.jpg@webp?v=1685988027","https://img2.ans-media.com/i/540x813/AW23-KUD01O-99X_F3.jpg@webp?v=1685988140","https://img2.ans-media.com/i/540x813/AW23-KUD01O-99X_F4.jpg@webp?v=1685988260"],description:`
                Безрукавка из коллекции Calvin Klein Jeans. Утепленная модель выполнена из гладкой ткани. Продукт содержит переработанные волокнистые материалы.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Волокно REPREVE производится из переработанных пластиковых бутылок.
                - Водонепроницаемость означает повышенную устойчивость к воде. При контакте с водой изделие сохраняет свои свойства, что обеспечивает больший комфорт благодаря более низкому водонепроницаемому порогу, но не гарантирует полной водонепроницаемости.
                - Прямой фасон.
                - Данная модель - водостойкая.
                - Замыкается на молнию и кнопки.
                - Два боковых кармана на кнопках.
                - Завышенный воротник.
                - Утепленная модель с подкладкой.
                - Длина: 57 см.
                - Ширина под подмышками: 53 см.
                - Размеры приведены для роста: S
                `,category:"odejda"},{name:"Безрукавка Tommy Jeans",cost:"10000",size:["S","M","L","XL"],type:"bezrukavki",colorText:"Чёрный",color:["#000"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD18W-99X_F1.jpg@webp?v=1689656057","https://img2.ans-media.com/i/540x813/AW23-KUD18W-99X_F2.jpg@webp?v=1689656183","https://img2.ans-media.com/i/540x813/AW23-KUD18W-99X_F3.jpg@webp?v=1689655815","https://img2.ans-media.com/i/540x813/AW23-KUD18W-99X_F4.jpg@webp?v=1689656427"],description:`
                Безрукавка из коллекции Tommy Jeans. Слегка утепленная модель выполнена из гладкого материала. Стеганая модель с синтетическим утеплителем, который обеспечивает дополнительный комфорт при низких температурах.
                - Этот продукт частично изготовлен из переработанного полиамида.
                - Простой фасон, не стеснящий движений.
                - Замыкается на молнию и кнопки.
                - Прорезные карманы.
                - Слегка утепленная модель на подкладке.
                - Длина: 56 см.
                - Ширина под подмышками: 54 см.
                - Параметры указаны для размера: S.
                Состав:
                Основной материал: 100% Полиамид
                Подкладка: 100% Полиэстер
                `,category:"odejda"},{name:"Безрукавка HUGO",cost:"22400",size:["S","M","L"],type:"bezrukavki",colorText:"Фиолетовый",color:["#d0a4e0"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD040-04X_F1.jpg@webp?v=1687326382","https://img2.ans-media.com/i/540x813/AW23-KUD040-04X_F2.jpg@webp?v=1687323379","https://img2.ans-media.com/i/540x813/AW23-KUD040-04X_F3.jpg@webp?v=1687323258","https://img2.ans-media.com/i/540x813/AW23-KUD040-04X_F4.jpg@webp?v=1687326140"],description:`
                Безрукавка из коллекции HUGO. Слегка утепленная модель выполнена из гладкого материала. Стеганая модель с синтетическим утеплителем, который обеспечивает дополнительный комфорт при низких температурах.
                - Инициатива Clean Up Your Act HUGO - поддержка производства хлопка в Африке. Бренд поддерживает кампанию «Хлопок, произведенный в Африке» (CmiA), которая помогает мелким фермерам в Африке улучшать свои навыки ведения сельского хозяйства и защищать природные ресурсы, поддерживая устойчивое развитие (без использования генетически модифицированных семян и вырубки первобытных лесов).
                - Водонепроницаемость означает повышенную устойчивость к воде. При контакте с водой изделие сохраняет свои свойства, что обеспечивает больший комфорт благодаря более низкому водонепроницаемому порогу, но не гарантирует полной водонепроницаемости.
                - Прямой фасон.
                - Слегка утепленная модель на подкладке.
                - Прорезные карманы.
                - Внизу стяжка.
                - Завышенный воротник.
                - Застежка на кнопку.
                - Длина: 78 см.
                - Ширина под подмышками: 56 см.
                - Ширина в плечах: 46 см.
                - Размеры приведены для роста: S.
                Состав:
                Основной материал: 100% Полиэстер
                Подкладка: 100% Полиамид
                Наполнитель: 100% Переработанный полиэстер
                `,category:"odejda"},{name:"Безрукавка Tommy Hilfiger",cost:"12400",size:["S","M","L"],type:"bezrukavki",colorText:"Белый",color:["#fff"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/SS23-KUD0IA-00X_F1.jpg@webp?v=1679078938","https://img2.ans-media.com/i/540x813/SS23-KUD0IA-00X_F2.jpg@webp?v=1679079275","https://img2.ans-media.com/i/540x813/SS23-KUD0IA-00X_F3.jpg@webp?v=1679079902","https://img2.ans-media.com/i/540x813/SS23-KUD0IA-00X_F4.jpg@webp?v=1679079522"],description:`
                Безрукавка из коллекции Tommy Hilfiger. Слегка утепленная модель выполнена из сочетания разных материалов.
                - Прямой фасон.
                - Слегка утепленная модель на подкладке.
                - Завышенный воротник.
                - Несъемный капюшон со стяжкой.
                - Стеганая.
                - Застегивается на молнию.
                - Длина: 58 см.
                - Ширина под подмышками: 49 см.
                - Ширина в плечах: 38 см.
                - Параметры указаны для размера: S.
                Состав:
                Подкладка: 100% Полиэстер
                Наполнитель: 100% Полиэстер
                Материал 1: 100% Полиамид
                Материал 2: 47% Полиэстер, 46% Модал, 7% Эластан
                `,category:"odejda"},{name:"Пуховая безрукавка Calvin Klein Jeans",cost:"15400",size:["S","M","L"],type:"bezrukavki",colorText:"Белый",color:["#fff"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD1K6-01X_F1.jpg@webp?v=1689667594","https://img2.ans-media.com/i/540x813/AW23-KUD1K6-01X_F2.jpg@webp?v=1689667477","https://img2.ans-media.com/i/540x813/AW23-KUD1K6-01X_F3.jpg@webp?v=1689667594","https://img2.ans-media.com/i/540x813/AW23-KUD1K6-01X_F4.jpg@webp?v=1689667595"],description:`
                Пуховая безрукавка из коллекции Calvin Klein Jeans. Утепленная модель выполнена из гладкой ткани. Модель с завышенным воротником гарантирует дополнительную защиту от холода.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Модель с наполнителем из пуха и натурального пера, полученного из ответственных источников, заботящихся о соблюдении этических норм в разведении птиц.
                - Простой фасон, не стеснящий движений.
                - Стеганая модель.
                - Завышенный воротник.
                - Замыкается на молнию и кнопки.
                - Два боковых кармана на кнопках.
                - Длина: 79 см.
                - Ширина под подмышками: 68 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"},{name:"Безрукавка Calvin Klein Jeans",cost:"14400",size:["S","M","L"],type:"bezrukavki",colorText:"Голубой",color:["#46b3d4"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/SS23-KUD0CH-55X_F1.jpg@webp?v=1674554441","https://img2.ans-media.com/i/540x813/SS23-KUD0CH-55X_F2.jpg@webp?v=1674554335","https://img2.ans-media.com/i/540x813/SS23-KUD0CH-55X_F3.jpg@webp?v=1674554196","https://img2.ans-media.com/i/540x813/SS23-KUD0CH-55X_F4.jpg@webp?v=1674554797"],description:`
                Безрукавка из коллекции Calvin Klein Jeans. Утепленная модель выполнена из стеганого материала.
                - RECONSIDERED - линия одежды, произведённая из переработанных материалов.
                - Прямой фасон.
                - Утепленная модель с подкладкой.
                - Нижний край на резинке.
                - Завышенный воротник.
                - Съемный капюшон со стяжкой.
                - Длина: 42 см.
                - Ширина под подмышками: 49 см.
                - Параметры указаны для размера: S.
                Состав:
                Основной материал: 100% Полиамид
                Подкладка: 100% Полиэстер
                Наполнитель: 100% Полиэстер
                `,category:"odejda"},{name:"Безрукавка Calvin Klein",cost:"8499",size:["S","M","L","XL"],type:"bezrukavki",colorText:"Чёрный",color:["#000"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD021-99X_F1.jpg@webp?v=1685988029","https://img2.ans-media.com/i/540x813/AW23-KUD021-99X_F2.jpg@webp?v=1685988262","https://img2.ans-media.com/i/540x813/AW23-KUD021-99X_F3.jpg@webp?v=1685988262","https://img2.ans-media.com/i/540x813/AW23-KUD021-99X_F4.jpg@webp?v=1685987901"],description:`
                Безрукавка из коллекции Calvin Klein Jeans. Утепленная модель выполнена из гладкого материала. Продукт содержит переработанные волокнистые материалы.
                - Волокно REPREVE производится из переработанных пластиковых бутылок.
                - Этот продукт частично изготовлен из переработанного полиэстера.
                - Данная модель - водостойкая.
                - Водонепроницаемость означает повышенную устойчивость к воде. При контакте с водой изделие сохраняет свои свойства, что обеспечивает больший комфорт благодаря более низкому водонепроницаемому порогу, но не гарантирует полной водонепроницаемости.
                - Простой фасон, не стеснящий движений.
                - Замыкается на молнию и кнопки.
                - Два боковых кармана на кнопках.
                - Завышенный воротник.
                - Утепленная модель с подкладкой.
                - Длина: 77 см.
                `,category:"odejda"},{name:"Безрукавка Guess",cost:"11200",size:["S","M","L","XL"],type:"bezrukavki",colorText:"Коричневый",color:["#947859"],flag:!1,code:1216,img:["https://img2.ans-media.com/i/540x813/AW23-KUD0S2-88X_F1.jpg@webp?v=1693832176","https://img2.ans-media.com/i/540x813/AW23-KUD0S2-88X_F2.jpg@webp?v=1693832660","https://img2.ans-media.com/i/540x813/AW23-KUD0S2-88X_F3.jpg@webp?v=1693832660","https://img2.ans-media.com/i/540x813/AW23-KUD0S2-88X_F4.jpg@webp?v=1693832774"],description:`
                Безрукавка из коллекции Guess. Слегка утепленная модель выполнена из гладкого материала. Стеганая модель с синтетическим утеплителем, который обеспечивает дополнительный комфорт при низких температурах.
                - Волокно REPREVE производится из переработанных пластиковых бутылок.
                - Прямой фасон.
                - Замыкается на молнию и кнопки.
                - Внешние карманы с застежкой.
                - Завышенный воротник и несъемный капюшон обеспечивают дополнительную защиту от холода.
                - Стеганая.
                - Внизу стяжка.
                - Длина: 58 см.
                - Ширина под подмышками: 54 см.
                - Ширина в плечах: 46 см.
                - Параметры указаны для размера: S.
                Состав: Основной материал: 100% Полиэстер
                Подкладка: 91% Полиэстер, 9% Эластан
                Наполнитель: 100% Полиэстер
                `,category:"odejda"}],sviter:[{name:"Свитер Silvian Heach",cost:"8000",size:["S","M","L","XL"],colorText:"Чёрный",type:"sviter",color:["#000"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/ZW23-SWD00Y-99X_F1.jpg@webp?v=1695881809","https://img2.ans-media.com/i/540x813/ZW23-SWD00Y-99X_F2.jpg@webp?v=1695881810","https://img2.ans-media.com/i/540x813/ZW23-SWD00Y-99X_F3.jpg@webp?v=1695878452","https://img2.ans-media.com/i/540x813/ZW23-SWD00Y-99X_F4.jpg@webp?v=1695882284"],description:`
                Свитер из коллекции Silvian Heach выполнен из гладкого трикотажа. Модель из чрезвычайно комфортного материала с высоким содержанием вискозы.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
        
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
        
                - Облегающий фасон.
                - Длинный рукав.
                - Полугольф.
                - Тонкий, эластичный трикотаж.
                - Плетение с декоративной металлической нитью.
                - Рукава и нижний край отделаны удобной эластичной резинкой.
                - Длина рукава: 62 см.
                - Длина: 60 см.
                - Ширина под подмышками: 45 см.
                - Параметры указаны для размера: XS-S.
                Состав: 70% Вискоза, 30% Люрекс
                `,category:"odejda"},{name:"Свитер Artigli",cost:"7800",size:["S","M","L"],colorText:"Чёрный",type:"sviter",color:["#000"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/AW23-SWD1HA-99X_F1.jpg@webp?v=1697778656","https://img2.ans-media.com/i/540x813/AW23-SWD1HA-99X_F2.jpg@webp?v=1697779361","https://img2.ans-media.com/i/540x813/AW23-SWD1HA-99X_F3.jpg@webp?v=1697780323","https://img2.ans-media.com/i/540x813/AW23-SWD1HA-99X_F4.jpg@webp?v=1697780542"],description:`
                Свитер из коллекции Artigli выполнен из тонкого эластичного трикотажа. Модель из мягкой и приятной на ощупь ткани.
                Маркировка размеров данного бренда на этикетке указана по итальянской системе размеров. Это означает, что если Вы закажете на странице европейский размер 34, то Вам доставят товар, на этикетке которого будет указан размер 38 (итальянский размер). Если закажете европейский размер S - то будет доставлен товар, на этикетке которого, соответственно, размер XS (итальянский размер).
                
                Пожалуйста, ознакомьтесь с данными размерной таблицы, чтобы выбрать правильный размер.
                
                - Приталенный крой, подчеркивающий фигуру.
                - Длинный рукав.
                - Модель с гольфом.
                - Плетение с декоративной металлической нитью.
                - Длина рукава: 62 см.
                - Длина: 58 см.
                - Ширина под подмышками: 42 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"},{name:"Свитер XT Studio",cost:"4000",size:["S","M","L"],colorText:"Синий",type:"sviter",color:["#614db3"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/ZW23-SWD03C-45X_F1.jpg@webp?v=1696335536","https://img2.ans-media.com/i/540x813/ZW23-SWD03C-45X_F2.jpg@webp?v=1696337221","https://img2.ans-media.com/i/540x813/ZW23-SWD03C-45X_F3.jpg@webp?v=1696338177","https://img2.ans-media.com/i/540x813/ZW23-SWD03C-45X_F4.jpg@webp?v=1696336275"],description:`
                Свитер из коллекции XT Studio выполнен из гладкого трикотажа. Модель из чрезвычайно комфортного материала с высоким содержанием вискозы.
                - Приталенный крой, подчеркивающий фигуру.
                - Модель с гольфом.
                - Вырез на спине.
                - Плетение с декоративной металлической нитью.
                - Тонкий, эластичный трикотаж.
                - Длина рукава: 62 см.
                - Длина: 46 см.
                - Ширина под подмышками: 29 см.
                - Параметры указаны для размера: S.
                Состав: 64% Вискоза, 23% Полиамид, 13% Люрекс
                `,category:"odejda"},{name:"Джемпер Calvin Klein",cost:"8200",size:["S","M","L"],colorText:"Чёрный",type:"sviter",color:["#000"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/SS23-SWD02L-99X_F1.jpg@webp?v=1673864478","https://img2.ans-media.com/i/540x813/SS23-SWD02L-99X_F2.jpg@webp?v=1673863873","https://img2.ans-media.com/i/540x813/SS23-SWD02L-99X_F3.jpg@webp?v=1673863605","https://img2.ans-media.com/i/540x813/SS23-SWD02L-99X_F4.jpg@webp?v=1673864118"],description:`
                Джемпер из коллекции Calvin Klein. Модель сделана из тонкого трикотажа.
                - Изготовлено из LENZING™ ECOVERO™ - экологически чистого материала. При производстве LENZING™ ECOVERO™ из органической целлюлозы и древесной массы используется на 50% меньше воды по сравнению с популярной вискозой.
                - Облегающий фасон.
                - Застегивается на крючки.
                - Длинный рукав.
                - Тонкий, эластичный трикотаж.
                - Гладкий трикотаж.
                - Отделка в виде стяжки.
                - Длина рукава: 70,5 см.
                - Длина: 48 см.
                - Ширина под подмышками: 37 см.
                - Параметры указаны для размера: S.
                Состав:
                65% Вискоза, 35% Полиамид
                `,category:"odejda"},{name:"Свитер с шерстью Answear Lab",cost:"11200",size:["S","M","L"],colorText:"Белый",type:"sviter",color:["#fff"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/WZ23-SWD0A8-80X_F1.jpg@webp?v=1698300184","https://img2.ans-media.com/i/540x813/WZ23-SWD0A8-80X_F2.jpg@webp?v=1698300908","https://img2.ans-media.com/i/540x813/WZ23-SWD0A8-80X_F3.jpg@webp?v=1698300080","https://img2.ans-media.com/i/540x813/WZ23-SWD0A8-80X_F4.jpg@webp?v=1698300425"],description:`
                Свитер из коллекции Answear Lab выполнен из гладкого трикотажа. Материал с оптимальной эластичностью гарантирует полную свободу движений.
                - Свободный крой для полной свободы движений.
                - Классический круглый вырез.
                - Рукав реглан благодаря своей конструкции обеспечивает большую свободу движений.
                - Модель отделана эластичной проклеенной лентой.
                - Вязание "косичка".
                - Трикотаж средней толщины.
                - Длина рукава (от горловины): 74 см.
                - Длина: 74 см.
                - Ширина под подмышками: 62 см.
                - Параметры указаны для размера: M/L.
                Состав: 70% Акрил, 15% Полиамид, 15% Шерсть
                `,category:"odejda"},{name:"Свитер с примесью шерсти Medicine",cost:"7300",size:["S","M","L","XL"],colorText:"Белый",type:"sviter",color:["#fff"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/RW23-SWD083-02M_F1.jpg@webp?v=1696489591","https://img2.ans-media.com/i/540x813/RW23-SWD083-02M_F2.jpg@webp?v=1696489591","https://img2.ans-media.com/i/540x813/RW23-SWD083-02M_F3.jpg@webp?v=1696489592","https://img2.ans-media.com/i/540x813/RW23-SWD083-02M_F4.jpg@webp?v=1696489592"],description:`
                Свитер из коллекции Medicine. Модель с полугольфом, выполнена из трикотажа с примесью шерсти.
                - Крой oversize.
                - Заниженная линия плеч.
                - Длинный рукав.
                - Полугольф.
                - Отделка в виде стяжки.
                - Гладкий трикотаж.
                - Длина рукава (от горловины): 71 см.
                - Длина: 56 см.
                - Ширина под подмышками: 62 см.
                - Параметры указаны для размера: S.
                Состав: 60% Акрил, 32% Полиэстер, 5% Шерсть, 3% Эластан
                `,category:"odejda"},{name:"Джемпер Guess",cost:"9200",size:["S","L","XL"],colorText:"Серый",type:"sviter",color:["#dbdbdb"],flag:!1,code:1102,img:["https://img2.ans-media.com/i/540x813/AW23-SWD0GP-90C_F1.jpg@webp?v=1695310241","https://img2.ans-media.com/i/540x813/AW23-SWD0GP-90C_F2.jpg@webp?v=1695310241","https://img2.ans-media.com/i/540x813/AW23-SWD0GP-90C_F3.jpg@webp?v=1695310120","https://img2.ans-media.com/i/540x813/AW23-SWD0GP-90C_F4.jpg@webp?v=1695309986"],description:`
                Джемпер из коллекции Guess выполнен из гладкого трикотажа. Модель из чрезвычайно приятного на ощупь материала.
                - Свободный крой для полной свободы движений.
                - Крой рукава со спущенной линией плеча не ограничивает движений.
                - Застегивается на пуговицы.
                - Модель отделана эластичной проклеенной лентой.
                - Трикотаж средней толщины.
                - Модель выполнена из эластичного материала.
                - Длина рукава (от горловины): 71,5 см.
                - Длина: 68 см.
                - Ширина под подмышками: 62 см.
                - Параметры указаны для размера: S.
                `,category:"odejda"}]},obuv:{botinky:[{name:"Кожаные полусапоги Tommy Jeans TJW URBAN BOOT TUMBLED LTR WL",cost:"16433",type:"botinky",size:["36","37","38","39","40","41","42","43"],colorText:"Бордовый",color:["#94323e"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD37Z-83X_F1.jpg@webp?v=1695886929","https://img2.ans-media.com/i/540x813/AW23-OBD37Z-83X_F2.jpg@webp?v=1695886930","https://img2.ans-media.com/i/540x813/AW23-OBD37Z-83X_F3.jpg@webp?v=1695886808","https://img2.ans-media.com/i/540x813/AW23-OBD37Z-83X_F4.jpg@webp?v=1695886809"],description:`
                Полусапоги из коллекции Tommy Jeans выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
                - Круглый, уплотненный носок.
                - Тисненая подошва.
                - Модель на шнуровке с боковой застежкой-молнией.
                - Утепленная модель.
                - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
                - Модель на низком ходу.
                - Высота каблука: 4,5 см.
                - Длина стельки составляет: 24,5 см.
                - Параметры указаны для размера: 38.
                Состав: Голенище: Натуральная кожа
                Внутренняя часть: Текстильный материал
                Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кожаные полусапожки Guess BRAYAN",cost:"12100",type:"botinky",size:["36","37","38","39","40","41","42","43"],colorText:"Чёрный",color:["#000"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD22H-99X_F1.jpg@webp?v=1696570238","https://img2.ans-media.com/i/540x813/AW23-OBD22H-99X_F2.jpg@webp?v=1696570473","https://img2.ans-media.com/i/540x813/AW23-OBD22H-99X_F3.jpg@webp?v=1696571918","https://img2.ans-media.com/i/540x813/AW23-OBD22H-99X_F4.jpg@webp?v=1696572148"],description:`
                Полусапоги из коллекции Guess выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
                - Острый, уплотненный носок.
                - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
                - Резиновая подошва - прочная и устойчивая к повреждениям.
                - Модель на шпильке.
                - Контурная мягкая стелька обеспечивает комфортное использование.
                - Боковая застежка-молния.
                - Высота каблука: 7 см.
                - Длина стельки составляет: 23,5 см.
                - Параметры указаны для размера: 37.
                Состав: Голенище: Натуральная кожа
                Внутренняя часть: Синтетический материал, Текстильный материал, Натуральная кожа
                Подошва: Синтетический материал
                `,category:"obuv"},{name:"Ботинки Native Fitzsimmons",cost:"8700",type:"botinky",size:["36","37","38","39","40","41","42"],colorText:"Голубой",color:["#389ea6"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3ET-95X_F1.jpg@webp?v=1696330249","https://img2.ans-media.com/i/540x813/AW23-OBD3ET-95X_F2.jpg@webp?v=1696328679","https://img2.ans-media.com/i/540x813/AW23-OBD3ET-95X_F3.jpg@webp?v=1696329059","https://img2.ans-media.com/i/540x813/AW23-OBD3ET-95X_F4.jpg@webp?v=1696328914","https://img2.ans-media.com/i/540x813/AW23-OBD3ET-95X_F5.jpg@webp?v=1696330959"],description:`
                Ботинки из коллекции Native выполнены из искусственной кожи. Модель с рифленой подошвой обеспечивает высокое сцепление с поверхностью.
                - Продукт с сертификатом BLOOM, содержащий материалы, полученные из водорослей, которые в естественной среде несут ответственность за удаление загрязняющих веществ из воды и воздуха.
                - Круглый, уплотненный носок.
                - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
                - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
                - Петля сзади облегчает надевание обуви на ногу и облегчает ее снятие.
                - Классическая шнуровка позволяет индивидуально регулировать обувь.
                - Длина стельки составляет: 24,5 см.
                - Параметры указаны для размера: 37,5.
                Состав: Голенище: Синтетический материал
                Внутренняя часть: Текстильный материал
                Подошва: Синтетический материал
                `,category:"obuv"},{name:"Полусапоги Guess LOFIRA",cost:"12200",type:"botinky",size:["36","37","38","39","40","41","42"],colorText:"Коричневый",color:["#cfaf5f"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD21A-80X_F1.jpg@webp?v=1695194564","https://img2.ans-media.com/i/540x813/AW23-OBD21A-80X_F2.jpg@webp?v=1695194564","https://img2.ans-media.com/i/540x813/AW23-OBD21A-80X_F3.jpg@webp?v=1695195280","https://img2.ans-media.com/i/540x813/AW23-OBD21A-80X_F4.jpg@webp?v=1695197193"],description:`
            Полусапоги из коллекции Guess выполнены из сочетания искусственной кожи и текстильного материала. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
            - Круглый, уплотненный носок.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
            - Петля сзади облегчает надевание обуви на ногу и облегчает ее снятие.
            - Классическая шнуровка позволяет индивидуально регулировать обувь.
            - Модель на платформе.
            - Высота платформы: 4 см.
            - Длина стельки составляет: 23,5 см.
            - Параметры указаны для размера: 37.
                `,category:"obuv"},{name:"Ботинки Guess WARIN",cost:"11700",type:"botinky",size:["36","37","38","39","40","41","42"],colorText:"Коричневый",color:["#423c2b"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD21N-89X_F1.jpg@webp?v=1695279388","https://img2.ans-media.com/i/540x813/AW23-OBD21N-89X_F2.jpg@webp?v=1695276510","https://img2.ans-media.com/i/540x813/AW23-OBD21N-89X_F3.jpg@webp?v=1695280591","https://img2.ans-media.com/i/540x813/AW23-OBD21N-89X_F4.jpg@webp?v=1695279389"],description:`
            Ботинки из коллекции Guess выполнены из искусственной кожи. Непористый верх, легко чистится влажной тряпкой.
            - Круглый, уплотненный носок.
            - Укрепленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
            - Петля сзади облегчает надевание обуви на ногу и облегчает ее снятие.
            - Модель с растягивающейся вставкой.
            - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
            - Модель с текстильной подкладкой.
            - Модель на устойчивом каблуке.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Высота каблука: 6 см.
            - Длина стельки составляет: 23 см.
            - Параметры указаны для размера: 37.
                `,category:"obuv"},{name:"Замшевые ботинки Gant Kelliin",cost:"9700",type:"botinky",size:["38","39","40","41","42"],colorText:"Коричневый",color:["#b8a370"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD0BS-80X_F1.jpg@webp?v=1695016708","https://img2.ans-media.com/i/540x813/AW23-OBD0BS-80X_F2.jpg@webp?v=1695016834","https://img2.ans-media.com/i/540x813/AW23-OBD0BS-80X_F3.jpg@webp?v=1695013701","https://img2.ans-media.com/i/540x813/AW23-OBD0BS-80X_F4.jpg@webp?v=1695017186","https://img2.ans-media.com/i/540x813/AW23-OBD0BS-80X_F5.jpg@webp?v=1695016582"],description:`
            Ботинки из коллекции Gant выполнены из замши. Модель простая в уходе и чистке.
            - Модель изготовлена ​​в соответствии с предположениями Leather Working Group, которая сертифицирует кожевенные заводы с помощью строгих аудитов. Целью этих мер является снижение расхода энергии и воды, необходимых для дубления кожи, и устранение загрязнения сточными водами.
            - Круглый, слегка уплотненный носок.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
            - Модель на низком ходу.
            - Модель с растягивающейся вставкой.
            - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
            - Длина стельки составляет: 24,5 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Замша
            Внутренняя часть: Текстильный материал, Натуральная кожа
            Подошва: Синтетический материал
            Подкладка: Текстильный материал
                `,category:"obuv"},{name:"Кожаные полусапоги Tommy Hilfiger ESSENTIAL LEATHER CHELSEA BOOT",cost:"12300",type:"botinky",size:["38","39","40","41","42","43","44"],colorText:"Чёрный",color:["#000"],flag:!1,code:3412,img:["https://img2.ans-media.com/i/540x813/AW23-OBD2YB-99X_F1.jpg@webp?v=1694583749","https://img2.ans-media.com/i/540x813/AW23-OBD2YB-99X_F2.jpg@webp?v=1694584112","https://img2.ans-media.com/i/540x813/AW23-OBD2YB-99X_F3.jpg@webp?v=1694583391","https://img2.ans-media.com/i/540x813/AW23-OBD2YB-99X_F4.jpg@webp?v=1694582071","https://img2.ans-media.com/i/540x813/AW23-OBD2YB-99X_F5.jpg@webp?v=1694583273"],description:`
            Ботинки из коллекции Tommy Hilfiger выполнены из сочетания натуральной кожи и текстильного материала. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Профилированная подошва.
            - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
            - Высота каблука: 5,5 см.
            - Длина стельки составляет: 24 см.
            - Параметры указаны для размера: 38.
            Состав: Голенище: Текстильный материал, Натуральная кожа
            Внутренняя часть: Текстильный материал, Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"}],sapogi:[{name:"Сапоги Steve Madden In Stereo",cost:"12000",type:"sapogi",size:["36","37","38","39","40","41","42","43"],colorText:"Чёрный",color:["#000"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3O8-99X_F1.jpg@webp?v=1697087069","https://img2.ans-media.com/i/540x813/AW23-OBD3O8-99X_F2.jpg@webp?v=1697086472","https://img2.ans-media.com/i/540x813/AW23-OBD3O8-99X_F3.jpg@webp?v=1697087432","https://img2.ans-media.com/i/540x813/AW23-OBD3O8-99X_F4.jpg@webp?v=1697087432"],description:`
        Сапоги из коллекции Steve Madden выполнены из искусственной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Острый, уплотненный носок.
        - Контурная мягкая стелька обеспечивает комфортное использование.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Застегивается на молнию.
        - Модель на шпильке.
        - Обхват голенища: 38 см.
        - Высота голенища: 38 см.
        - Высота каблука: 9,5 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
            `,category:"obuv"},{name:"Сапоги Vagabond Shoemakers DORAH",cost:"9200",type:"sapogi",size:["36","37","38","39","40","41"],colorText:"Чёрный",color:["#000"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1B9-99X_F1.jpg@webp?v=1696394682","https://img2.ans-media.com/i/540x813/AW23-OBD1B9-99X_F2.jpg@webp?v=1696393860","https://img2.ans-media.com/i/540x813/AW23-OBD1B9-99X_F3.jpg@webp?v=1696394804","https://img2.ans-media.com/i/540x813/AW23-OBD1B9-99X_F4.jpg@webp?v=1696394565"],description:`
      Сапоги из коллекции Vagabond Shoemakers выполнены из сочетания натуральной и искусственной кожи. Непористый верх, легко чистится влажной тряпкой.
      - Квадратный уплотненный носок.
      - Резиновая подошва - прочная и устойчивая к повреждениям.
      - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
      - Застегивается на молнию.
      - Модель на платформе.
      - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
      - Обхват голенища: 37 см.
      - Высота голенища: 37,5 см.
      - Высота каблука: 5,5 см.
      - Длина стельки составляет: 23,5 см.
      - Параметры указаны для размера: 37.
      Состав: Голенище: Синтетический материал, Натуральная кожа
      Внутренняя часть: Текстильный материал, Натуральная кожа
      Подошва: Синтетический материал.
          `,category:"obuv"},{name:"Кожаные полусапоги Vagabond Shoemakers ALINA",cost:"13700",type:"sapogi",size:["36","37","38","39","40","41","42"],colorText:"Коричневый",color:["#5c4f30"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1AR-98X_F1.jpg@webp?v=1695311558","https://img2.ans-media.com/i/540x813/AW23-OBD1AR-98X_F2.jpg@webp?v=1695311788","https://img2.ans-media.com/i/540x813/AW23-OBD1AR-98X_F3.jpg@webp?v=1695311788","https://img2.ans-media.com/i/540x813/AW23-OBD1AR-98X_F4.jpg@webp?v=1695311559","https://img2.ans-media.com/i/540x813/AW23-OBD1AR-98X_F5.jpg@webp?v=1695311789"],description:`
        Полусапоги из коллекции Vagabond Shoemakers выполнены из натуральной кожи. Модель с кожаной стелькой, которая благодаря своим естественным порам предотвращает натирание, истирание и появление неприятного запаха.
        - Квадратный уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Петля сзади облегчает надевание обуви на ногу и облегчает ее снятие.
        - Модель на прямом каблуке.
        - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
        - Обхват голенища: 40 см.
        - Высота голенища: 25 см.
        - Высота каблука: 6 см.
        - Длина стельки составляет: 25 см.
        - Параметры указаны для размера: 39.
        Состав: Голенище: Натуральная кожа
        Внутренняя часть: Текстильный материал, Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные сапоги Alohas Roxie",cost:"14200",type:"sapogi",size:["36","37","38","39","40","41"],colorText:"Чёрный",color:["#000"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3SL-99X_F1.jpg@webp?v=1695311567","https://img2.ans-media.com/i/540x813/AW23-OBD3SL-99X_F2.jpg@webp?v=1695311567","https://img2.ans-media.com/i/540x813/AW23-OBD3SL-99X_F3.jpg@webp?v=1695311693","https://img2.ans-media.com/i/540x813/AW23-OBD3SL-99X_F4.jpg@webp?v=1695311412"],description:`
        Сапоги из коллекции Alohas выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Круглый, слегка уплотненный носок.
        - Тисненая подошва.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Модель на низком ходу.
        - Кожаная внутренняя часть.
        - Обхват голенища: 38 см.
        - Высота голенища: 36 см.
        - Высота каблука: 5,5 см.
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 38.
        Состав: Голенище: Натуральная кожа
        Внутренняя часть: Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Сапоги Steve Madden Keandra",cost:"12200",type:"sapogi",size:["36","37","38","39","40","41"],colorText:"Коричневый",color:["#8c3c23"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3MM-83X_F1.jpg@webp?v=1694461592","https://img2.ans-media.com/i/540x813/AW23-OBD3MM-83X_F2.jpg@webp?v=1694461592","https://img2.ans-media.com/i/540x813/AW23-OBD3MM-83X_F3.jpg@webp?v=1694461593","https://img2.ans-media.com/i/540x813/AW23-OBD3MM-83X_F4.jpg@webp?v=1694461593"],description:`
        Сапоги из коллекции Steve Madden выполнены из искусственной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Острый, уплотненный носок.
        - Укрепленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Модель на шпильке.
        - Контурная мягкая стелька обеспечивает комфортное использование.
        - Модель с текстильной подкладкой.
        - Боковая застежка-молния.
        - Обхват голенища: 40 см.
        - Высота голенища: 60 см.
        - Высота каблука: 10,5 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Синтетический материал
        Внутренняя часть: Синтетический материал, Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Сапоги Steve Madden Outsource",cost:"16200",type:"sapogi",size:["36","37","38","39","40"],colorText:"Белый",color:["#fff"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3N9-01X_F1.jpg@webp?v=1694461598","https://img2.ans-media.com/i/540x813/AW23-OBD3N9-01X_F2.jpg@webp?v=1694461599","https://img2.ans-media.com/i/540x813/AW23-OBD3N9-01X_F3.jpg@webp?v=1694461599","https://img2.ans-media.com/i/540x813/AW23-OBD3N9-01X_F4.jpg@webp?v=1694461708"],description:`
        Сапоги из коллекции Steve Madden выполнены из искусственной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Круглый, уплотненный носок.
        - Укрепленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Модель на платформе.
        - Контурная мягкая стелька обеспечивает комфортное использование.
        - Модель с текстильной подкладкой.
        - Верхний край обработан силиконовой вставкой.
        - Боковая застежка-молния.
        - Обхват голенища: 40 см.
        - Высота голенища: 60 см.
        - Высота платформы: 6,5 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Синтетический материал
        Внутренняя часть: Синтетический материал, Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Сапоги Altercore Wendell",cost:"9400",type:"sapogi",size:["36","37","38","39","40"],colorText:"Чёрный",color:["#000"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/ZW23-OBD00P-99X_F1.jpg@webp?v=1694064888","https://img2.ans-media.com/i/540x813/ZW23-OBD00P-99X_F2.jpg@webp?v=1694066104","https://img2.ans-media.com/i/540x813/ZW23-OBD00P-99X_F3.jpg@webp?v=1694064171","https://img2.ans-media.com/i/540x813/ZW23-OBD00P-99X_F1.jpg@webp?v=1694064888"],description:`
        Сапоги из коллекции Altercore выполнены из искусственной кожи. Модель с рифленой подошвой обеспечивает высокое сцепление с поверхностью.
        - Квадратный слегка уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Резиновая подошва.
        - Модель на устойчивом каблуке.
        - Застегивается на молнию.
        - Удобная внутренняя часть.
        - Обхват голенища: 31 см.
        - Высота голенища: 34 см.
        - Высота платформы: 4,5 см.
        - Высота каблука: 11 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Синтетический материал
        Внутренняя часть: Синтетический материал, Текстильный материал
            `,category:"obuv"},{name:"Сапоги GOE",cost:"9400",type:"sapogi",size:["36","37","38","39","40"],colorText:"Коричневый",color:["#baa161"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/ZW23-OBD01D-88X_F1.jpg@webp?v=1692006289","https://img2.ans-media.com/i/540x813/ZW23-OBD01D-88X_F2.jpg@webp?v=1692005811","https://img2.ans-media.com/i/540x813/ZW23-OBD01D-88X_F3.jpg@webp?v=1692005335","https://img2.ans-media.com/i/540x813/ZW23-OBD01D-88X_F4.jpg@webp?v=1692004850"],description:`
        Сапоги из коллекции GOE выполнены из имитации замши. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - Круглый, уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Профилированная подошва.
        - Удобная внутренняя часть.
        - Слегка утепленная модель.
        - Высота голенища: 29 см.
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 38.
        Состав: Голенище: Текстильный материал
        Внутренняя часть: Синтетический материал, Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Сапоги Steve Madden Vava",cost:"13100",type:"sapogi",size:["37","38","39","40","41","42"],colorText:"Бордовый",color:["#7a262c"],flag:!1,code:3222,img:["https://img2.ans-media.com/i/540x813/AW23-OBD3MZ-83X_F1.jpg@webp?v=1692006873","https://img2.ans-media.com/i/540x813/AW23-OBD3MZ-83X_F2.jpg@webp?v=1692006036","https://img2.ans-media.com/i/540x813/AW23-OBD3MZ-83X_F3.jpg@webp?v=1692005546","https://img2.ans-media.com/i/540x813/AW23-OBD3MZ-83X_F4.jpg@webp?v=1692003983"],description:`
        Сапоги из коллекции Steve Madden выполнены из синтетического материала. Модель простая в уходе и чистке.
        - Острый, уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Модель на шпильке.
        - Застегивается на молнию.
        - Обхват голенища: 40 см.
        - Высота голенища: 58 см.
        - Высота каблука: 10 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Синтетический материал
        Внутренняя часть: Синтетический материал, Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"}],krossovki:[{name:"Кроссовки U.S. Polo Assn. ASHLEY",cost:"8000",type:"krossovki",size:["37","38","39","40","41","42","43"],colorText:"Белый",color:["#fff"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1GE-00X_F1.jpg@webp?v=1696330596","https://img2.ans-media.com/i/540x813/AW23-OBD1GE-00X_F2.jpg@webp?v=1696329400","https://img2.ans-media.com/i/540x813/AW23-OBD1GE-00X_F3.jpg@webp?v=1696332875","https://img2.ans-media.com/i/540x813/AW23-OBD1GE-00X_F4.jpg@webp?v=1696327832"],description:`
            Кроссовки из коллекции U.S. Polo Assn. Выполнены из искусственной кожи. Легкая и удобная модель идеально подходит для ежедневного ношения.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Съемная, легко чистящаяся текстильная стелька.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Классическая шнуровка позволяет индивидуально регулировать обувь.
            - Длина стельки составляет: 24 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Синтетический материал
            Внутренняя часть: Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кроссовки HUGO Jodene",cost:"18000",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Бежевый",color:["#f2d08d"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/SS24-OBD062-02X_F1.jpg@webp?v=1699428655","https://img2.ans-media.com/i/540x813/SS24-OBD062-02X_F2.jpg@webp?v=1699430802","https://img2.ans-media.com/i/540x813/SS24-OBD062-02X_F3.jpg@webp?v=1699430204","https://img2.ans-media.com/i/540x813/SS24-OBD062-02X_F4.jpg@webp?v=1699430204"],description:`
            Кроссовки из коллекции HUGO выполнены из искусственной кожи. Легкая и удобная модель идеально подходит для ежедневного ношения.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Классическая шнуровка позволяет индивидуально регулировать обувь.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Модель на платформе.
            - Съемная, легко чистящаяся текстильная стелька.
            - Высота платформы: 5,5 см.
            - Длина стельки составляет: 26 см.
            - Параметры указаны для размера: 40.
            Состав: Голенище: Синтетический материал
            Внутренняя часть: Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кроссовки Lacoste L-Guard Breaker CT Textile Outdoor",cost:"11200",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Синий",color:["#415891"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBD486-83X_F1.jpg@webp?v=1697606923","https://img2.ans-media.com/i/540x813/AW23-OBD486-83X_F2.jpg@webp?v=1697607403","https://img2.ans-media.com/i/540x813/AW23-OBD486-83X_F3.jpg@webp?v=1697607993","https://img2.ans-media.com/i/540x813/AW23-OBD486-83X_F4.jpg@webp?v=1697607511"],description:`
            Кроссовки из коллекции Lacoste выполнены из текстильного материала. Легкая и удобная модель идеально подходит для ежедневного ношения.
            - Специальная система крепления позволяет удобно транспортировать шлем.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Система быстрой шнуровки со стоперами позволяет легко надевать и снимать обувь.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
            - Длина стельки составляет: 24 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Текстильный материал
            Внутренняя часть: Синтетический материал, Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кроссовки Reebok Club C Bulc",cost:"8800",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Белый",color:["#fff"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBU091-00X_F1.jpg@webp?v=1692249278","https://img2.ans-media.com/i/540x813/AW23-OBU091-00X_F2.jpg@webp?v=1692247968","https://img2.ans-media.com/i/540x813/AW23-OBU091-00X_F3.jpg@webp?v=1692248080","https://img2.ans-media.com/i/540x813/AW23-OBU091-00X_F4.jpg@webp?v=1692249156"],description:`
            Кроссовки из коллекции Reebok выполнены из сочетания натуральной и искусственной кожи. Модель простая в уходе и чистке.
            - Круглый, слегка уплотненный носок.
            - Уплотненный задник с мягкой подкладкой защищает пятку от натирания.
            - Плоские шнурки меньше давят на стопу, обеспечивая хорошую посадку и комфорт при ношении.
            - Модель с текстильной подкладкой.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Длина стельки составляет: 25,5 см.
            - Параметры указаны для размера: 40.
            Состав: Голенище: Синтетический материал, Натуральная кожа
            Внутренняя часть: Текстильный материал, Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кроссовки Reebok Club C Bulc",cost:"7800",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBU090-99X_F1.jpg@webp?v=1692248202","https://img2.ans-media.com/i/540x813/AW23-OBU090-99X_F2.jpg@webp?v=1692248323","https://img2.ans-media.com/i/540x813/AW23-OBU090-99X_F3.jpg@webp?v=1692248919","https://img2.ans-media.com/i/540x813/AW23-OBU090-99X_F4.jpg@webp?v=1692250838"],description:`
            Кроссовки из коллекции Reebok выполнены из сочетания натуральной и искусственной кожи. Модель простая в уходе и чистке.
            - Круглый, слегка уплотненный носок.
            - Уплотненный задник с мягкой подкладкой защищает пятку от натирания.
            - Плоские шнурки меньше давят на стопу, обеспечивая хорошую посадку и комфорт при ношении.
            - Модель с текстильной подкладкой.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Длина стельки составляет: 25,5 см.
            - Параметры указаны для размера: 40.
            Состав: Голенище: Синтетический материал, Натуральная кожа
            Внутренняя часть: Текстильный материал, Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кожаные кроссовки Reebok",cost:"9800",type:"krossovki",size:["37","38","39","40","41","42","43"],colorText:"Белый",color:["#fff"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBU081-00X_F1.jpg@webp?v=1692250116","https://img2.ans-media.com/i/540x813/AW23-OBU081-00X_F2.jpg@webp?v=1692249753","https://img2.ans-media.com/i/540x813/AW23-OBU081-00X_F3.jpg@webp?v=1692247967","https://img2.ans-media.com/i/540x813/AW23-OBU081-00X_F4.jpg@webp?v=1692249874"],description:`
            Кроссовки из коллекции Reebok выполнены из сочетания натуральной и искусственной кожи. Модель простая в уходе и чистке.
            - Круглый, слегка уплотненный носок.
            - Уплотненный задник с мягкой подкладкой защищает пятку от натирания.
            - Плоские шнурки меньше давят на стопу, обеспечивая хорошую посадку и комфорт при ношении.
            - Модель с текстильной подкладкой.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Длина стельки составляет: 25,5 см.
            - Параметры указаны для размера: 40.
            Состав: Голенище: Синтетический материал, Натуральная кожа
            Внутренняя часть: Текстильный материал, Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кожаные кроссовки Calvin Klein Jeans CLASSIC CUPSOLE LACEUP LTH WN",cost:"9100",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBD39J-99X_F1.jpg@webp?v=1696430543","https://img2.ans-media.com/i/540x813/AW23-OBD39J-99X_F2.jpg@webp?v=1696430659","https://img2.ans-media.com/i/540x813/AW23-OBD39J-99X_F3.jpg@webp?v=1696430543","https://img2.ans-media.com/i/540x813/AW23-OBD39J-99X_F4.jpg@webp?v=1696430660"],description:`
            Кроссовки из коллекции Calvin Klein Jeans выполнены из натуральной кожи. Модель с текстильной внутренней частью, которая комфортна для стопы и упрощает содержание обуви в чистоте.
            - Изделие содержит материалы из переработанных волокон.
            - Круглый, мягкий носок.
            - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
            - Плоские шнурки меньше давят на стопу, обеспечивая хорошую посадку и комфорт при ношении.
            - Съемная, легко чистящаяся текстильная стелька.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Длина стельки составляет: 23 см.
            - Параметры указаны для размера: 36.
            Состав: Голенище: Натуральная кожа
            Внутренняя часть: Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кроссовки Lacoste L-Guard Breaker CT Textile Outdoor",cost:"12100",type:"krossovki",size:["37","38","39","40","41","42"],colorText:"Зелёный",color:["#298532"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBD486-59X_F1.jpg@webp?v=1697605719","https://img2.ans-media.com/i/540x813/AW23-OBD486-59X_F2.jpg@webp?v=1697607510","https://img2.ans-media.com/i/540x813/AW23-OBD486-59X_F3.jpg@webp?v=1697608351","https://img2.ans-media.com/i/540x813/AW23-OBD486-59X_F4.jpg@webp?v=1697607876"],description:`
            Кроссовки из коллекции Lacoste выполнены из текстильного материала. Легкая и удобная модель идеально подходит для ежедневного ношения.
            - Специальная система крепления позволяет удобно транспортировать шлем.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Система быстрой шнуровки со стоперами позволяет легко надевать и снимать обувь.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
            - Длина стельки составляет: 24 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Текстильный материал
            Внутренняя часть: Синтетический материал, Текстильный материал
                `,category:"obuv"},{name:"Кроссовки adidas",cost:"11700",type:"krossovki",size:["37","38","39","40","41"],colorText:"Зелёный",color:["#578253"],flag:!1,code:3180,img:["https://img2.ans-media.com/i/540x813/AW23-OBU00L-97X_F1.jpg@webp?v=1696329882","https://img2.ans-media.com/i/540x813/AW23-OBU00L-97X_F2.jpg@webp?v=1696330960","https://img2.ans-media.com/i/540x813/AW23-OBU00L-97X_F3.jpg@webp?v=1696334557","https://img2.ans-media.com/i/540x813/AW23-OBU00L-97X_F4.jpg@webp?v=1696329286"],description:`
            Кроссовки из коллекции adidas выполнены из сочетания натуральной кожи и замши. Легкая и удобная модель идеально подходит для ежедневного ношения.
            - Слегка уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Классическая шнуровка позволяет индивидуально регулировать обувь.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Съемная, легко чистящаяся текстильная стелька.
            - Длина стельки составляет: 26,5 см.
            - Параметры указаны для размера: 41 1/3.
            Состав: Голенище: Натуральная кожа, Замша
            Внутренняя часть: Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"}],snegohody:[{name:"Замшевые сапоги UGG Classic Mini Platform",cost:"14000",type:"snegohody",size:["37","38","39","40","41","42","43"],colorText:"Серый",color:["#dbd6cc"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD186-90X_F1.jpg@webp?v=1696917396","https://img2.ans-media.com/i/540x813/AW23-OBD186-90X_F2.jpg@webp?v=1696917278","https://img2.ans-media.com/i/540x813/AW23-OBD186-90X_F3.jpg@webp?v=1696917879","https://img2.ans-media.com/i/540x813/AW23-OBD186-90X_F4.jpg@webp?v=1696916679"],description:`
        Зимние сапоги из коллекции UGG выполнены из замши. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - UGGplush - утепление внутренней части обуви из сочетания высококачественной шерсти и деликатного лиоцелла.
        - Круглый, слегка уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Утепленная модель.
        - Резиновая подошва.
        - Модель на платформе.
        - Высота платформы: 6 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Замша
        Внутренняя часть: Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Зимние сапоги Calvin Klein Jeans CHUNKY RUNNERMID ALT CL WN",cost:"11200",type:"snegohody",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD39E-99X_F1.jpg@webp?v=1696393865","https://img2.ans-media.com/i/540x813/AW23-OBD39E-99X_F2.jpg@webp?v=1696393489","https://img2.ans-media.com/i/540x813/AW23-OBD39E-99X_F3.jpg@webp?v=1696394080","https://img2.ans-media.com/i/540x813/AW23-OBD39E-99X_F4.jpg@webp?v=1696395522"],description:`
        Зимние сапоги из коллекции Calvin Klein Jeans выполнены из текстильного материала. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - Изделие содержит материалы из переработанных волокон.
        - Круглый, слегка уплотненный носок.
        - Голенище регулируется шнурками со стопорами.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Петля сзади облегчает надевание обуви на ногу и облегчает ее снятие.
        - Слегка утепленная модель.
        - Модель на платформе.
        - Высота платформы: 5 см.
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 38.
        Состав: Голенище: Текстильный материал
        Внутренняя часть: Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Зимние сапоги Tommy Hilfiger TOMMY ESSENTIAL SILVER SNOWBOOT",cost:"13800",type:"snegohody",size:["37","38","39","40","41","42","43","44"],colorText:"Серый",color:["#dbdad7"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD2Z6-SLV_F1.jpg@webp?v=1695014304","https://img2.ans-media.com/i/540x813/AW23-OBD2Z6-SLV_F2.jpg@webp?v=1695017548","https://img2.ans-media.com/i/540x813/AW23-OBD2Z6-SLV_F3.jpg@webp?v=1695016229","https://img2.ans-media.com/i/540x813/AW23-OBD2Z6-SLV_F4.jpg@webp?v=1695016711"],description:`
        имние сапоги из коллекции Tommy Hilfiger выполнены из сочетания натуральной кожи и синтетического материала. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - Круглый, слегка уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Утепленная модель.
        - Регулировка верхнего обхвата с помощью шнурков со стопорами.
        - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
        - Длина стельки составляет: 23,5 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Синтетический материал, Натуральная кожа
        Внутренняя часть: Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Зимние сапоги Tommy Hilfiger TOMMY ESSENTIAL SNOWBOOT",cost:"11300",type:"snegohody",size:["37","38","39","40","41","42"],colorText:"Зелёный",color:["#7e965d"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD2Z4-91X_F1.jpg@webp?v=1695014670","https://img2.ans-media.com/i/540x813/AW23-OBD2Z4-91X_F2.jpg@webp?v=1695016711","https://img2.ans-media.com/i/540x813/AW23-OBD2Z4-91X_F3.jpg@webp?v=1695017191","https://img2.ans-media.com/i/540x813/AW23-OBD2Z4-91X_F4.jpg@webp?v=1695014787"],description:`
        Зимние сапоги из коллекции Tommy Hilfiger выполнены из сочетания текстильного материала и кожи. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - Круглый, слегка уплотненный носок.
        - Уплотненный задник с мягкой подкладкой защищает пятку от натирания.
        - Утепленная модель.
        - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
        - Регулировка верхнего обхвата с помощью шнурков со стопорами.
        - Модель на платформе.
        - Высота платформы: 4 см
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Текстильный материал, Натуральная кожа
            `,category:"obuv"},{name:"Кроссовки Tommy Hilfiger ESSENTIAL LACE UP WARMBOOTIE",cost:"9900",type:"snegohody",size:["37","38","39","40","41","42"],colorText:"Бежевый",color:["#e3dda6"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD2Z3-12X_F1.jpg@webp?v=1695016586","https://img2.ans-media.com/i/540x813/AW23-OBD2Z3-12X_F2.jpg@webp?v=1695016949","https://img2.ans-media.com/i/540x813/AW23-OBD2Z3-12X_F3.jpg@webp?v=1695015986","https://img2.ans-media.com/i/540x813/AW23-OBD2Z3-12X_F4.jpg@webp?v=1695014669"],description:`
        Кроссовки из коллекции Tommy Hilfiger выполнены из сочетания замши и текстильного материала. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
        - Уплотненный носок.
        - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
        - Классическая шнуровка позволяет индивидуально регулировать обувь.
        - Утепленная модель.
        - Текстильная внутрення часть создаёт удобство для стопы и облегчает поддерживание обуви в чистоте.
        - Длина стельки составляет: 25 см.
        - Параметры указаны для размера: 39.
        Состав: Голенище: Текстильный материал, Замша
        Внутренняя часть: Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Зимние сапоги U.S. Polo Assn. VEGY",cost:"8200",type:"snegohody",size:["37","38","39","40","41","42","43"],colorText:"Коричневый",color:["#e3dda6"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1H2-88X_F1.jpg@webp?v=1694148390","https://img2.ans-media.com/i/540x813/AW23-OBD1H2-88X_F2.jpg@webp?v=1694148627","https://img2.ans-media.com/i/540x813/AW23-OBD1H2-88X_F3.jpg@webp?v=1694149348","https://img2.ans-media.com/i/540x813/AW23-OBD1H2-88X_F4.jpg@webp?v=1694148628"],description:`
        Зимние сапоги из коллекции U.S. Polo Assn. Выполнены из сочетания искусственной кожи и синтетического материала. Модель с текстильной внутренней частью, которая комфортна для стопы и упрощает содержание обуви в чистоте.
        - Круглый, уплотненный носок.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Съемная, легко чистящаяся текстильная стелька.
        - Классическая шнуровка позволяет индивидуально регулировать обувь.
        - Модель на платформе.
        - Высота платформы: 3,5 см.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
            `,category:"obuv"},{name:"Зимние сапоги Tommy Hilfiger TARTAN SNOWBOOT",cost:"14400",type:"snegohody",size:["37","38","39","40","41","42"],colorText:"Красный",color:["#b04e41"],flag:!1,code:3991,img:["https://img2.ans-media.com/i/540x813/AW23-OBD2YU-59X_F1.jpg@webp?v=1694436974","https://img2.ans-media.com/i/540x813/AW23-OBD2YU-59X_F2.jpg@webp?v=1694437098","https://img2.ans-media.com/i/540x813/AW23-OBD2YU-59X_F3.jpg@webp?v=1694436974","https://img2.ans-media.com/i/540x813/AW23-OBD2YU-59X_F4.jpg@webp?v=1694437098"],description:`
        Зимние сапоги из коллекции Tommy Hilfiger выполнены из сочетания натуральной кожи и текстильного материала. Модель с текстильной внутренней частью, которая комфортна для стопы и упрощает содержание обуви в чистоте.
        - Круглый, слегка уплотненный носок.
        - Модель на платформе.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Регулировка верхнего обхвата с помощью шнурков со стопорами.
        - Уплотненный задник с мягкой подкладкой защищает пятку от натирания.
        - Высота платформы: 4 см.
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Текстильный материал, Натуральная кожа
        Внутренняя часть: Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"}],baletki:[{name:"Кожаные балетки MICHAEL Michael Kors Nori",cost:"9000",type:"baletki",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1K8-99X_F1.jpg@webp?v=1688450780","https://img2.ans-media.com/i/540x813/AW23-OBD1K8-99X_F2.jpg@webp?v=1688450438","https://img2.ans-media.com/i/540x813/AW23-OBD1K8-99X_F3.jpg@webp?v=1688452699","https://img2.ans-media.com/i/540x813/AW23-OBD1K8-99X_F4.jpg@webp?v=1688451978"],description:`
        Балетки из коллекции MICHAEL Michael Kors выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Круглый, мягкий носок.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Декоративная деталь спереди.
        - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
        - Модель на низком ходу.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Длина стельки составляет: 23,5 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Lauren Ralph Lauren Jayna",cost:"7200",type:"baletki",size:["38","39","40","41","42"],colorText:"Бежевый",color:["#ccb76a"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/SS23-OBD1A9-80X_F1.jpg@webp?v=1674115261","https://img2.ans-media.com/i/540x813/SS23-OBD1A9-80X_F2.jpg@webp?v=1674115773","https://img2.ans-media.com/i/540x813/SS23-OBD1A9-80X_F3.jpg@webp?v=1674115919","https://img2.ans-media.com/i/540x813/SS23-OBD1A9-80X_F4.jpg@webp?v=1674115642"],description:`
        Балетки из коллекции Lauren Ralph Lauren. Модель выполнена из натуральной кожи.
        - Круглый, мягкий носок.
        - Уплотненный задник.
        - Резиновая подошва.
        - Модель на низком ходу.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Синтетический материал, Текстильный материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Lauren Ralph Lauren London",cost:"8700",type:"baletki",size:["38","39","40","41","42","43"],colorText:"Чёрный",color:["#000"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/AW22-OBD171_99X_F1.jpg@webp?v=1657865558","https://img2.ans-media.com/i/540x813/AW22-OBD171_99X_F2.jpg@webp?v=1657865842","https://img2.ans-media.com/i/540x813/AW22-OBD171_99X_F3.jpg@webp?v=1657866250","https://img2.ans-media.com/i/540x813/AW22-OBD171_99X_F4.jpg@webp?v=1657865978"],description:`
        Балетки из коллекции Lauren Ralph Lauren. Модель выполнена из натуральной кожи.
        - Острый, уплотненный носок.
        - Уплотненный задник.
        - Резиновая подошва.
        - Модель на низком ходу.
        - Удобная внутренняя часть.
        - Длина стельки составляет: 23,5 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Синтетический материал
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Tommy Hilfiger ESSENTIAL POINTED BALLERINA",cost:"8400",type:"baletki",size:["38","39","40","41","42"],colorText:"Бежевый",color:["#c9bb85"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/SS24-OBD0RG-80X_F1.jpg@webp?v=1698220889","https://img2.ans-media.com/i/540x813/SS24-OBD0RG-80X_F2.jpg@webp?v=1698220890","https://img2.ans-media.com/i/540x813/SS24-OBD0RG-80X_F3.jpg@webp?v=1698220890","https://img2.ans-media.com/i/540x813/SS24-OBD0RG-80X_F4.jpg@webp?v=1698220890"],description:`
        Балетки из коллекции Tommy Hilfiger выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.

        - Острый, слегка уплотненный носок.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
        - Длина стельки составляет: 24 см.
        - Параметры указаны для размера: 37.
        
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Текстильный материал, Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Kurt Geiger London Mayfair Ballerina",cost:"7900",type:"baletki",size:["38","39","40","41","42","43"],colorText:"Серый",color:["#dbdbd9"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/AW23-OBD0W1-SLV_F1.jpg@webp?v=1691467264","https://img2.ans-media.com/i/540x813/AW23-OBD0W1-SLV_F2.jpg@webp?v=1691466991","https://img2.ans-media.com/i/540x813/AW23-OBD0W1-SLV_F3.jpg@webp?v=1691468552","https://img2.ans-media.com/i/540x813/AW23-OBD0W1-SLV_F4.jpg@webp?v=1691467948"],description:`
        Балетки из коллекции Kurt Geiger London выполнены из лакированной кожи. Модель простая в уходе и чистке.
        - Круглый, слегка уплотненный носок.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Декоративная деталь спереди.
        - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
        - Модель на низком ходу.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав: Голенище: Лакировання кожа
        Внутренняя часть: Текстильный материал, Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки MICHAEL Michael Kors Nori",cost:"9300",type:"baletki",size:["38","39","40","41","42","43"],colorText:"Белый",color:["#fff"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1K9-01X_F1.jpg@webp?v=1688451024","https://img2.ans-media.com/i/540x813/AW23-OBD1K9-01X_F2.jpg@webp?v=1688450297","https://img2.ans-media.com/i/540x813/AW23-OBD1K9-01X_F3.jpg@webp?v=1688453417","https://img2.ans-media.com/i/540x813/AW23-OBD1K9-01X_F4.jpg@webp?v=1688452342"],description:`
        Балетки из коллекции MICHAEL Michael Kors выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
        - Круглый, слегка уплотненный носок.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Модель на низком ходу.
        - Контурная мягкая стелька обеспечивает комфортное использование.
        - Модель с кожаной внутренней отделкой, которая комфортна для стопы, а также предотвращает натирание, потертости и появление неприятного запаха.
        - Декоративная деталь спереди.
        - Длина стельки составляет: 23,5 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Lauren Ralph Lauren Jayna",cost:"7700",type:"baletki",size:["38","39","40","41","42"],colorText:"Фиолетовый",color:["#a15077"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/AW23-OBD0SR-49X_F1.jpg@webp?v=1684221750","https://img2.ans-media.com/i/540x813/AW23-OBD0SR-49X_F2.jpg@webp?v=1684223430","https://img2.ans-media.com/i/540x813/AW23-OBD0SR-49X_F3.jpg@webp?v=1684224264","https://img2.ans-media.com/i/540x813/AW23-OBD0SR-49X_F4.jpg@webp?v=1684222222"],description:`
        Балетки из коллекции Lauren Ralph Lauren выполнены из натуральной кожи. Модель с кожаной стелькой, которая благодаря своим естественным порам предотвращает натирание, истирание и появление неприятного запаха.
        - Круглый, мягкий носок.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Подошва высокой эластичности.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Удобная внутренняя часть.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Текстильный материал, Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"},{name:"Кожаные балетки Camper Casi Myra",cost:"6700",type:"baletki",size:["38","39","40","41","42"],colorText:"Розовый",color:["#ebb2ce"],flag:!1,code:3447,img:["https://img2.ans-media.com/i/540x813/SS23-OBD42Z-42X_F1.jpg@webp?v=1679643636","https://img2.ans-media.com/i/540x813/SS23-OBD42Z-42X_F2.jpg@webp?v=1679643636","https://img2.ans-media.com/i/540x813/SS23-OBD42Z-42X_F3.jpg@webp?v=1679643778","https://img2.ans-media.com/i/540x813/SS23-OBD42Z-42X_F4.jpg@webp?v=1679643398","https://img2.ans-media.com/i/540x813/SS23-OBD42Z-42X_F5.jpg@webp?v=1679644602"],description:`
        Балетки из коллекции Lauren Ralph Lauren выполнены из натуральной кожи. Модель с кожаной стелькой, которая благодаря своим естественным порам предотвращает натирание, истирание и появление неприятного запаха.
        - Круглый, мягкий носок.
        - Резиновая подошва - прочная и устойчивая к повреждениям.
        - Подошва высокой эластичности.
        - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
        - Удобная внутренняя часть.
        - Длина стельки составляет: 23 см.
        - Параметры указаны для размера: 37.
        Состав:
        Голенище: Натуральная кожа
        Внутренняя часть: Текстильный материал, Натуральная кожа
        Подошва: Синтетический материал
            `,category:"obuv"}],tufli:[{name:"Туфли Aldo Stessy2.",cost:"12400",type:"tufli",size:["37","38","39","40","41","42"],colorText:"Бежевый",color:["#e0cc67"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1UT-80X_F1.jpg@webp?v=1697700872","https://img2.ans-media.com/i/540x813/AW23-OBD1UT-80X_F2.jpg@webp?v=1697700638","https://img2.ans-media.com/i/540x813/AW23-OBD1UT-80X_F3.jpg@webp?v=1697701588","https://img2.ans-media.com/i/540x813/AW23-OBD1UT-80X_F4.jpg@webp?v=1697700992"],description:`
            Балетки из коллекции MICHAEL Michael Kors выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
            - Круглый, мягкий носок.
            - Усиленный задник стабилизирует пятку и удерживает ногу в обуви, чтобы она не выскальзывала во время движения.
            - Декоративная деталь спереди.
            - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
            - Модель на низком ходу.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Длина стельки составляет: 23,5 см.
            - Параметры указаны для размера: 37.
            Состав:
            Голенище: Натуральная кожа
            Внутренняя часть: Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Туфли Aldo Stessy2.0",cost:"9600",type:"tufli",size:["37","38","39","40","41"],colorText:"Коричневый",color:["#bd9a42"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1UW-GLD_F1.jpg@webp?v=1696479278","https://img2.ans-media.com/i/540x813/AW23-OBD1UW-GLD_F2.jpg@webp?v=1696479878","https://img2.ans-media.com/i/540x813/AW23-OBD1UW-GLD_F3.jpg@webp?v=1696480603","https://img2.ans-media.com/i/540x813/AW23-OBD1UW-GLD_F4.jpg@webp?v=1696481913"],description:`
            Туфли из коллекции Aldo выполнены из искусственной кожи. Модель простая в уходе и чистке.
            - Модель на шпильке.
            - Острый носок.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Удобная внутренняя часть.
            - Высота каблука: 10 см.
            - Длина стельки составляет: 24,5 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Синтетический материал
            Внутренняя часть: Синтетический материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Туфли Aldo x Disney",cost:"15400",type:"tufli",size:["37","38","39","40","41"],colorText:"Белый",color:["#ebebeb"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1UR-SLV_F1.jpg@webp?v=1697700514","https://img2.ans-media.com/i/540x813/AW23-OBD1UR-SLV_F2.jpg@webp?v=1697701710","https://img2.ans-media.com/i/540x813/AW23-OBD1UR-SLV_F3.jpg@webp?v=1697701711","https://img2.ans-media.com/i/540x813/AW23-OBD1UR-SLV_F4.jpg@webp?v=1697701347"],description:`
            Туфли из коллекции Aldo выполнены из синтетического материала. Эффектная модель для особых случаев.
            - Острый, уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Удобная стелька.
            - Модель на шпильке.
            - Высота каблука: 10,5 см.
            - Длина стельки составляет: 23 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Синтетический материал, Текстильный материал
            Внутренняя часть: Синтетический материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Замшевые туфли Guess RICA4",cost:"11100",type:"tufli",size:["37","38","39","40","41","42","43"],colorText:"Бордовый",color:["#914464"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD205-83X_F1.jpg@webp?v=1696328913","https://img2.ans-media.com/i/540x813/AW23-OBD205-83X_F2.jpg@webp?v=1696333112","https://img2.ans-media.com/i/540x813/AW23-OBD205-83X_F4.jpg@webp?v=1696333004","https://img2.ans-media.com/i/540x813/AW23-OBD205-83X_F1.jpg@webp?v=1696328913"],description:`
            Туфли из коллекции Guess выполнены из замши. Модель с комфортной для стопы кожаной внутренней частью.
            - Острый, уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Кожаная стелька комфортна для стопы и предотвращает натирание, потертости и появление неприятного запаха.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Модель на шпильке.
            - Высота каблука: 9 см.
            - Длина стельки составляет: 24 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Замша
            Внутренняя часть: Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кожаные туфли Guess BRAVO",cost:"13600",type:"tufli",size:["37","38","39","40","41","42","43"],colorText:"Чёрный",color:["#000"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD1ZL-99X_F1.jpg@webp?v=1696332052","https://img2.ans-media.com/i/540x813/AW23-OBD1ZL-99X_F2.jpg@webp?v=1696334555","https://img2.ans-media.com/i/540x813/AW23-OBD1ZL-99X_F3.jpg@webp?v=1696329156","https://img2.ans-media.com/i/540x813/AW23-OBD1ZL-99X_F4.jpg@webp?v=1696333717"],description:`
            Туфли из коллекции Guess выполнены из натуральной кожи. Модель простая в уходе и чистке.
            - Острый, уплотненный носок.
            - Уплотненный задник.
            - Модель с кожаной внутренней отделкой, которая комфортна для стопы, а также предотвращает натирание, потертости и появление неприятного запаха.
            - Модель на шпильке.
            - Высота каблука: 7 см.
            - Длина стельки составляет: 25 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Натуральная кожа
            Внутренняя часть: Натуральная кожа
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Кожаные туфли MICHAEL Michael Kors Clara",cost:"16300",type:"tufli",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD45O-99X_F1.jpg@webp?v=1695881672","https://img2.ans-media.com/i/540x813/AW23-OBD45O-99X_F2.jpg@webp?v=1695878193","https://img2.ans-media.com/i/540x813/AW23-OBD45O-99X_F3.jpg@webp?v=1695880708","https://img2.ans-media.com/i/540x813/AW23-OBD45O-99X_F4.jpg@webp?v=1695881313"],description:`
            Туфли из коллекции MICHAEL Michael Kors выполнены из натуральной кожи. Непористый верх, легко чистится влажной тряпкой.
            - Острый, уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Модель с кожаной внутренней отделкой, которая комфортна для стопы, а также предотвращает натирание, потертости и появление неприятного запаха.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Модель на шпильке.
            - Высота каблука: 8 см.
            - Длина стельки составляет: 23 см.
            - Параметры указаны для размера: 37.
                `,category:"obuv"},{name:"Кожаные туфли Tommy Jeans TJW LOAFER PUMP",cost:"17500",type:"tufli",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD37B-99X_F1.jpg@webp?v=1690432102","https://img2.ans-media.com/i/540x813/AW23-OBD37B-99X_F2.jpg@webp?v=1690432102","https://img2.ans-media.com/i/540x813/AW23-OBD37B-99X_F3.jpg@webp?v=1690432828","https://img2.ans-media.com/i/540x813/AW23-OBD37B-99X_F4.jpg@webp?v=1690432947"],description:`
            Туфли из коллекции Tommy Jeans выполнены из натуральной кожи. Модель с резиновой подошвой, прочной и устойчивой к повреждениям.
            - Уплотненный носок.
            - Жесткий задник обеспечивает отличную поддержку лодыжки и пятки.
            - Удобная внутренняя часть.
            - Резиновая подошва - прочная и устойчивая к повреждениям.
            - Модель на прямом каблуке.
            - Высота каблука: 11,5 см.
            - Длина стельки составляет: 23,5 см.
            - Параметры указаны для размера: 37.
            Состав: Голенище: Натуральная кожа
            Внутренняя часть: Синтетический материал, Текстильный материал
            Подошва: Синтетический материал
                `,category:"obuv"},{name:"Туфли Karl Lagerfeld PANACHE",cost:"13200",type:"tufli",size:["37","38","39","40","41","42"],colorText:"Чёрный",color:["#000"],flag:!1,code:1414,img:["https://img2.ans-media.com/i/540x813/AW23-OBD0YO-99X_F1.jpg@webp?v=1687761265","https://img2.ans-media.com/i/540x813/AW23-OBD0YO-99X_F2.jpg@webp?v=1687761377","https://img2.ans-media.com/i/540x813/AW23-OBD0YO-99X_F3.jpg@webp?v=1687759242","https://img2.ans-media.com/i/540x813/AW23-OBD0YO-99X_F4.jpg@webp?v=1687759710"],description:`
            Туфли из коллекции Karl Lagerfeld выполнены из сочетания замши и текстильного материала. Эффектная модель для особых случаев.
            - Прилагается текстильный мешок, который защищает товар от пыли.
            - Острый, уплотненный носок.
            - Модель с открытой пяткой.
            - Застегивается на пряжку с булавкой.
            - Модель на шпильке.
            - Высота каблука: 7 см.
            - Длина стельки составляет: 23 см.
            - Параметры указаны для размера: 37.
            Состав:
            Голенище: Текстильный материал, Замша
            Внутренняя часть: Синтетический материал
            Подошва: Синтетический материал
                `,category:"obuv"}]},aksessuary:{braslet:[{name:"Браслет Lauren Ralph Lauren",cost:"9433",size:["Один размер"],colorText:"Янтарь",type:"braslet",color:["#edb934"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/AW23-AKD04I-GLD_F1.jpg@webp?v=1695280566","https://img2.ans-media.com/i/540x813/AW23-AKD04I-GLD_F2.jpg@webp?v=1695276969"],description:`
                Браслет из коллекции Lauren Ralph Lauren. Эффектная модель с декоративными элементами сделана из металла.
                - Прилагается текстильный мешок, который защищает товар от пыли.
                Состав: Металл
                ID Товара: 9BYX-AKD04I_GLD
                Код производителя: 14B00327
                `,category:"aksessuary"},{name:"Браслет Lauren Ralph Lauren",cost:"5433",size:["Один размер"],colorText:"Золото",type:"braslet",color:["#f7e648"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/AW23-AKD04E-GLD_F1.jpg@webp?v=1693301528","https://img2.ans-media.com/i/540x813/AW23-AKD04E-GLD_F10.jpg@webp?v=1699542147"],description:`
                Браслет из коллекции Lauren Ralph Lauren. Модель с декоративными подвесками выполнена из металла.
                - Прилагается текстильный мешок, который защищает товар от пыли.
                - Застежка с регуляцией.
                Состав: Металл
                `,category:"aksessuary"},{name:"Браслет Liu Jo",cost:"7420",size:["Один размер"],colorText:"Золото",type:"braslet",color:["#edd787"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/AW23-AKD0DM-GLD_F1.jpg@webp?v=1689861496","https://img2.ans-media.com/i/540x813/AW23-AKD0DM-GLD_F2.jpg@webp?v=1689861497","https://img2.ans-media.com/i/540x813/AW23-AKD0DM-GLD_F3.jpg@webp?v=1689861376"],description:`
                Браслет из коллекции Liu Jo. Модель сделана из металла.
                - Модель в фирменной упаковке.
                - Застежка с регуляцией.
                - Чехол прилагается.
                Состав:
                Металл
                `,category:"aksessuary"},{name:"Браслет Guess",cost:"5220",size:["Один размер"],colorText:"Сталь",type:"braslet",color:["#d1cbb4"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/AW23-AKD0PJ-GLD_F1.jpg@webp?v=1697721745","https://img2.ans-media.com/i/540x813/AW23-AKD0PJ-GLD_F2.jpg@webp?v=1697721745"],description:`
                Браслет из коллекции Guess. Модель с украшением из циркония выполнена из нержавеющей стали.
                - Прилагается текстильный мешок, который защищает товар от пыли.
                Состав: Нержавеющая сталь
                `,category:"aksessuary"},{name:"Браслет Answear Lab",cost:"3000",size:["Один размер"],colorText:"Сталь",type:"braslet",color:["#d1cfc9"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD032-SLV_F1.jpg@webp?v=1696340813","https://img2.ans-media.com/i/540x813/WZ23-AKD032-SLV_F2.jpg@webp?v=1696339611","https://img2.ans-media.com/i/540x813/WZ23-AKD032-SLV_F3.jpg@webp?v=1696340697"],description:`
                Браслет из коллекции Answear Lab. Модель выполнена из металла.
                - Застежка с регуляцией.
                - Модель в фирменной упаковке.
                - Минимальная длина: 16 см.
                - Максимальная длина: 20 см.
                Состав: Благородная сталь
                `,category:"aksessuary"},{name:"Браслет с натуральными камнями ANIA KRUK SUMMER",cost:"3420",size:["Один размер"],colorText:"Серебро",type:"braslet",color:["#e0dcca"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/ZA00-AKD15Y-GLD_F1.jpg@webp?v=1696572902","https://img2.ans-media.com/i/540x813/ZA00-AKD15Y-GLD_F2.jpg@webp?v=1696572902","https://img2.ans-media.com/i/540x813/ZA00-AKD15Y-GLD_F3.jpg@webp?v=1696570859"],description:`
                Браслет из коллекции ANIA KRUK. Модель выполнена из натуральных камней и элементов из серебра 925 пробы.
        
                - Минимальная длина: 16 см.
                - Максимальная длина: 19 см.
                - Застежка с регуляцией.
                
                Состав:
                Серебро покрытое золотом 999 пробы, Родонит
                `,category:"aksessuary"},{name:"Swarovski - Браслет Signum",cost:"8100",size:["Один размер"],colorText:"Серебро",type:"braslet",color:["#dedddc"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/AW21-AKD0G7_SLV_F1.jpg@webp?v=1639747954","https://img2.ans-media.com/i/540x813/AW21-AKD0G7_SLV_F2.jpg@webp?v=1639747954","https://img2.ans-media.com/i/540x813/AW21-AKD0G7_SLV_F3.jpg@webp?v=1639748671"],description:`
                Браслет из коллекции Swarovski. Модель с украшением с кристаллов сделана из металла.
                Состав:
                Сталь, Кристалл Swarovski
                `,category:"aksessuary"},{name:"Браслет с натуральными камнями ANIA KRUK",cost:"5200",size:["Один размер"],colorText:"Камень",type:"braslet",color:["#e3cc78"],flag:!1,code:1736,img:["https://img2.ans-media.com/i/540x813/ZA00-AKD12Y-GLD_F1.jpg@webp?v=1691389364","https://img2.ans-media.com/i/540x813/ZA00-AKD12Y-GLD_F2.jpg@webp?v=1691388403","https://img2.ans-media.com/i/540x813/ZA00-AKD12Y-GLD_F3.jpg@webp?v=1691390085"],description:`
                Браслет из коллекции ANIA KRUK. Модель выполнена из камней амазонита и декоративных элементов из серебра 925 пробы, покрытого золотом.
                - Застежка с регуляцией.
                - Минимальная длина: 17 см.
                - Максимальная длина: 20 см.
                - Диаметр украшения: 8 мм.
                Состав: Амазонит, Позолоченное серебро
                `,category:"aksessuary"}],sergi:[{name:"Сережки Lauren Ralph Laure",cost:"6433",size:["Один размер"],colorText:"Золото",color:["#9c2d3a"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/AW22-AKD0Z8_33A_F1.jpg@webp?v=1666963093","https://img2.ans-media.com/i/540x813/AW22-AKD0Z8_33A_F2.jpg@webp?v=1666963229","https://img2.ans-media.com/i/82x124/AW22-AKD0Z8-33A_F10.jpg@webp?v=1683550702"],description:`
                Серьги из коллекции Lauren Ralph Lauren. Модель с украшением сделана из сочетания разных материалов.
                - Застежки-гвоздики.
                - Чехол прилагается.
                Состав:
                Цинк, Стекло, Титан
                ID Товара: 9BYY-AKD0Z8_33A
                Код производителя: 14G00223
                `,category:"aksessuary"},{name:"Сережки Guess",cost:"7433",size:["Один размер"],colorText:"Сталь",color:["#9e7397"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/AW23-AKD0PO-45X_F1.jpg@webp?v=1694751622","https://img2.ans-media.com/i/540x813/AW23-AKD0PO-45X_F2.jpg@webp?v=1694751497","https://img2.ans-media.com/i/540x813/AW23-AKD0PO-45X_F3.jpg@webp?v=1694751623"],description:`
                Серьги из коллекции Guess. Модель с декоративными элементами, выполнена из нержавеющей стали.
                - Прилагается текстильный мешок, который защищает товар от пыли.
                - Застежки-гвоздики.
                Состав: Нержавеющая сталь
                `,category:"aksessuary"},{name:"Сережки Answear Lab",cost:"3200",size:["Один размер"],colorText:"Сталь",color:["#f5f7e1"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD03W-10Y_F1.jpg@webp?v=1696340933","https://img2.ans-media.com/i/540x813/WZ23-AKD03W-10Y_F2.jpg@webp?v=1696340698","https://img2.ans-media.com/i/540x813/WZ23-AKD03W-10Y_F3.jpg@webp?v=1696339013"],description:`
                Серьги из коллекции Answear Lab. Модель с декоративными подвесками выполнена с нержавеющей стали.
                - Застежки-гвоздики.
                - Модель в фирменной упаковке.
                Состав: Благородная сталь
                `,category:"aksessuary"},{name:"Сережки Answear Lab",cost:"5300",size:["Один размер"],colorText:"Сталь",color:["#e5e5e3"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD03L-SLV_F1.jpg@webp?v=1696335655","https://img2.ans-media.com/i/540x813/WZ23-AKD03L-SLV_F2.jpg@webp?v=1696336972","https://img2.ans-media.com/i/540x813/WZ23-AKD03L-SLV_F3.jpg@webp?v=1696340209"],description:`
                Серьги из коллекции Answear Lab. Модель выполнена с нержавеющей стали.
                - Модель в фирменной упаковке.
                Состав: 100% Благородная сталь
                `,category:"aksessuary"},{name:"Сережки Answear Lab",cost:"4800",size:["Один размер"],colorText:"Золото",color:["#f0d77d"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD02C-10Y_F1.jpg@webp?v=1695403598","https://img2.ans-media.com/i/540x813/WZ23-AKD02C-10Y_F2.jpg@webp?v=1695403748","https://img2.ans-media.com/i/540x813/WZ23-AKD03L-SLV_F3.jpg@webp?v=1696340209"],description:`
                Серьги из коллекции Answear Lab. Эффектная модель сделана из металла.
                - Застежки-гвоздики.
                - Модель в фирменной упаковке.
                - Диаметр: 3,5 см.
                Состав: 100% Золото
                `,category:"aksessuary"},{name:"Сережки Answear Lab",cost:"7800",size:["Один размер"],colorText:"Сталь",color:["#858172"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD02U-SLV_F1.jpg@webp?v=1695638536","https://img2.ans-media.com/i/540x813/WZ23-AKD02U-SLV_F2.jpg@webp?v=1695638537","https://img2.ans-media.com/i/540x813/WZ23-AKD02U-SLV_F3.jpg@webp?v=1695638537"],description:`
                Серьги из коллекции Answear Lab. Эффектная модель сделана из металла.
                - Застежки-гвоздики.
                - Модель в фирменной упаковке.
                - Длина: 4,5 см.
                Состав: 100% Нержавеющая сталь
                `,category:"aksessuary"},{name:"Клипсы Answear Lab",cost:"4300",size:["Один размер"],colorText:"Сталь",color:["#d1bb6d"],type:"sergi",flag:!1,code:1006,img:["https://img2.ans-media.com/i/540x813/WZ23-AKD02L-10Y_F1.jpg@webp?v=1695403754","https://img2.ans-media.com/i/540x813/WZ23-AKD02L-10Y_F2.jpg@webp?v=1695403755","https://img2.ans-media.com/i/540x813/WZ23-AKD02L-10Y_F3.jpg@webp?v=1695403600"],description:`
                Клипсы из коллекции Answear Lab. Эффектная модель с украшением сделана из металла.
                - Модель в фирменной упаковке.
                - Диаметр: 14 мм.
                Состав: 100% Нержавеющая сталь
                `,category:"aksessuary"}],rukzaki:[{name:"Рюкзак Fjallraven Kanken Mini",cost:"8100",size:["Один размер"],colorText:"Зелёный",type:"rukzaki",color:["#1e4f1d"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/AA00-PKU0HP-91A_F2.jpg@webp?v=1686116664","https://img2.ans-media.com/i/82x124/AA00-PKU0HP-91A_F1.jpg@webp?v=1686113424","https://img2.ans-media.com/i/82x124/AA00-PKU0HP-91A_F3.jpg@webp?v=1686113307"],description:`
                Рюкзак из коллекции Fjallraven. Модель выполнена из текстильного материала. Ткань Винилон Ф является прочной, а также простой в чистке и уходе.
                - Модель с одним отделением.
                - Застегивается на молнию.
                - Карман на молнии спереди.
                - Короткая ручка.
                - Регулируемая длина ремешков.
                - Не рассчитана на формат А4.
                - Вместимость: 7 l.
                - Глубина: 13 см.
                - Высота: 29 см.
                - Ширина у основания: 20 см.
                Состав: 100% Винилон Ф
                ID Товара: 99KK-PKU0HP_91A
                Код производителя: F23561.631.241
                `,category:"aksessuary"},{name:"Рюкзак Guess",cost:"11600",size:["Один размер"],colorText:"Коричневый",type:"rukzaki",color:["#ccbc83"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/AW23-PKD05E-80X_F1.jpg@webp?v=1697000561","https://img2.ans-media.com/i/540x813/AW23-PKD05E-80X_F2.jpg@webp?v=1697000324","https://img2.ans-media.com/i/540x813/AW23-PKD05E-80X_F3.jpg@webp?v=1697000803","https://img2.ans-media.com/i/540x813/AW23-PKD05E-80X_F4.jpg@webp?v=1697000200"],description:`
                Рюкзак из коллекции Guess. Модель выполнена из синтетического материала. Модель простая в уходе и чистке.
                - Модель с одним отделением.
                - Карман на молнии спереди.
                - Внутренний карман на кнопке для безопасного хранения телефона или других мелких предметов.
                - Количество накладных внутренних карманов: 2.
                - Короткая ручка.
                - Регулируемая длина ремешков.
                - Модель с подкладкой.
                - Не рассчитана на формат А4.
                - Глубина: 12 см.
                - Высота: 33 см.
                `,category:"aksessuary"},{name:"Рюкзак Tommy Hilfiger",cost:"13200",size:["Один размер"],colorText:"Чёрный",type:"rukzaki",color:["#000"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/AA00-TOD0H1-99X_F1.jpg@webp?v=1695706691","https://img2.ans-media.com/i/540x813/AA00-TOD0H1-99X_F2.jpg@webp?v=1695709090","https://img2.ans-media.com/i/540x813/AA00-TOD0H1-99X_F3.jpg@webp?v=1695710654","https://img2.ans-media.com/i/540x813/AA00-TOD0H1-99X_F4.jpg@webp?v=1695707414"],description:`
                Рюкзак из коллекции Tommy Hilfiger. Модель выполнена из текстильного материала.
                - Изделие содержит материалы из переработанных волокон.
                - Застегивается на молнию.
                - Карман на молнии спереди.
                - Прорезной внутренний карман.
                - Короткая ручка.
                - Регулируемая длина ремешков.
                - Не рассчитана на формат А4.
                - Количество накладных внутренних карманов: 1.
                - Глубина: 12 см.
                - Высота: 35 см.
                - Ширина у основания: 26 см.
                Состав: 90% Переработанный нейлон, 10% Переработанный полиэстер
                `,category:"aksessuary"},{name:"Рюкзак Tommy Hilfiger",cost:"13200",size:["Один размер"],colorText:"Чёрный",type:"rukzaki",color:["#000"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/AW23-PKD05R-99X_F1.jpg@webp?v=1694002345","https://img2.ans-media.com/i/540x813/AW23-PKD05R-99X_F2.jpg@webp?v=1694002346","https://img2.ans-media.com/i/540x813/AW23-PKD05R-99X_F3.jpg@webp?v=1694002460","https://img2.ans-media.com/i/540x813/AW23-PKD05R-99X_F4.jpg@webp?v=1694002461"],description:`
                Рюкзак из коллекции Tommy Hilfiger. Модель выполнена из текстильного материала.
                - Изделие содержит материалы из переработанных волокон.
                - Застегивается на молнию.
                - Карман на молнии спереди.
                - Прорезной внутренний карман.
                - Короткая ручка.
                - Регулируемая длина ремешков.
                - Не рассчитана на формат А4.
                - Количество накладных внутренних карманов: 1.
                - Глубина: 12 см.
                - Высота: 35 см.
                - Ширина у основания: 26 см.
                Состав: 90% Переработанный нейлон, 10% Переработанный полиэстер
                `,category:"aksessuary"},{name:"Рюкзак Medicine",cost:"9800",size:["Один размер"],colorText:"Коричневый",type:"rukzaki",color:["#826130"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/RW23-TOD509-88X_F1.jpg@webp?v=1693376808","https://img2.ans-media.com/i/540x813/RW23-TOD509-88X_F2.jpg@webp?v=1693373565","https://img2.ans-media.com/i/540x813/RW23-TOD509-88X_F3.jpg@webp?v=1693374889","https://img2.ans-media.com/i/540x813/RW23-TOD509-88X_F4.jpg@webp?v=1693375964"],description:`
                Рюкзак из коллекции Medicine. Модель выполнена из искусственной кожи.
                - Модель с одним отделением.
                - Застегивается на молнию.
                - Короткая ручка.
                - Регулируемая длина ремешков.
                - С отделением для ноутбука или планшета.
                - Карманы на молнии спереди.
                - Рассчитана на формат А4.
                - Высота: 38 см.
                - Ширина у основания: 32 см.
                - Глубина: 12 см.
                Состав: Основной материал: 100% Полиуретан
                Подкладка: 100% Полиэстер
                `,category:"aksessuary"},{name:"Сумочка Medicine",cost:"5300",size:["Один размер"],colorText:"Синий",type:"rukzaki",color:["#3bb4d9"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/RW23-TOD450-50A_F1.jpg@webp?v=1692688595","https://img2.ans-media.com/i/540x813/RW23-TOD450-50A_F2.jpg@webp?v=1692688711","https://img2.ans-media.com/i/540x813/RW23-TOD450-50A_F3.jpg@webp?v=1692688711","https://img2.ans-media.com/i/540x813/RW23-TOD450-50A_F4.jpg@webp?v=1692688711"],description:`
                Большая сумочка из специальной коллекции Eviva L’arte. Закрывающаяся модель изготовлена из текстильного материала.
                - В зависимости от способа пристегивания пояса, возможен вариант рюкзака либо сумки.
                - Отделение застегивается на молнию.
                - Длинные ручки.
                - Спереди карман.
                - Длинный регулируемый застегивающийся ремень.
                - Внутренний карман на молнии.
                - Рассчитана на формат А4.
                - Высота: 42 см.
                - Ширина у основания: 31 см.
                - Глубина: 12 см.
                Состав: Основной материал: 80% Полиэстер, 20% Полиуретан
                Подкладка: 100% Полиэстер
                `,category:"aksessuary"},{name:"Рюкзак Converse",cost:"7230",size:["Один размер"],colorText:"Розовый",type:"rukzaki",color:["#f2c7eb"],flag:!1,code:1433,img:["https://img2.ans-media.com/i/540x813/AW23-PKU05C-04X_F1.jpg@webp?v=1692357383","https://img2.ans-media.com/i/540x813/AW23-PKU05C-04X_F2.jpg@webp?v=1692357384","https://img2.ans-media.com/i/540x813/AW23-PKU05C-04X_F3.jpg@webp?v=1692357384","https://img2.ans-media.com/i/540x813/AW23-PKU05C-04X_F4.jpg@webp?v=1692357385"],description:`
                Рюкзак из коллекции Converse. Модель выполнена из текстильного материала.
                - Регулируемая длина ремешков.
                - Короткая ручка.
                - Застегивается на молнию.
                - Карманы на молнии спереди.
                - Боковые карманы для бутылок.
                - Прорезной внутренний карман.
                - Рассчитана на формат А4.
                - Глубина: 12 см.
                - Высота: 45 см.
                - Ширина у основания: 28 см.
                Состав: 100% Полиэстер
                `,category:"aksessuary"}],sumochki:[{name:"Кожаная сумочка MICHAEL Michael Kors",cost:"23400",size:["Один размер"],colorText:"Чёрный",type:"sumochki",color:["#000"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/SS23-TOD296-99X_F1.jpg@webp?v=1678690251","https://img2.ans-media.com/i/540x813/SS23-TOD296-99X_F2.jpg@webp?v=1678690619","https://img2.ans-media.com/i/540x813/SS23-TOD296-99X_F3.jpg@webp?v=1678691687","https://img2.ans-media.com/i/540x813/SS23-TOD296-99X_F4.jpg@webp?v=1678692915"],description:`
        Большая сумочка из коллекции MICHAEL Michael Kors. Закрывающаяся выполнена из натуральной кожи.
        - Застегивается на молнию.
        - Рассчитана на формат А4.
        - Чехол прилагается.
        - Короткие ручки.
        - Модель с подкладкой.
        - Количество отделений на молнии: 1.
        - Количество внутренних карманов на молнии: 1.
        - Количество накладных внутренних карманов: 2.
        - Длина ручек: 58 см.
        - Глубина: 15 см.
        - Высота: 30 см.
        - Ширина у основания: 32 см.
        Состав:
        100% Натуральная кожа
                `,category:"aksessuary"},{name:"Сумочка Calvin Klein Jeans",cost:"21200",size:["Один размер"],colorText:"Чёрный",type:"sumochki",color:["#000"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/SS23-TOD1AZ-99X_F1.jpg@webp?v=1676405371","https://img2.ans-media.com/i/540x813/SS23-TOD1AZ-99X_F2.jpg@webp?v=1676403304","https://img2.ans-media.com/i/540x813/SS23-TOD1AZ-99X_F3.jpg@webp?v=1676404299","https://img2.ans-media.com/i/540x813/SS23-TOD1AZ-99X_F4.jpg@webp?v=1676405128"],description:`
        Маленькая сумочка из коллекции Calvin Klein Jeans. Закрывающаяся модель выполнена из искусственной кожи.
        - Изделие содержит материалы из переработанных волокон.
        - Клапан застегивается на пряжку.
        - Внутренний карман.
        - Регулируемый несъемный ремешок.
        - Не рассчитана на формат А4.
        - Количество накладных внутренних карманов: 1.
        - Минимальная длина ремня: 72 см.
        - Максимальная длина ремня: 115 см.
        - Глубина: 5 см.
        - Высота: 17 см.
        - Ширина у основания: 23,5 см.
        Состав:
        51% Полиэстер, 49% Полиуретан
                `,category:"aksessuary"},{name:"Сумочка Karl Lagerfeld",cost:"18200",size:["Один размер"],colorText:"Чёрный",type:"sumochki",color:["#000"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/SS22-TOD2R8_99X_F1.jpg@webp?v=1652701381","https://img2.ans-media.com/i/540x813/SS22-TOD2R8_99X_F2.jpg@webp?v=1652701484","https://img2.ans-media.com/i/540x813/SS22-TOD2R8_99X_F3.jpg@webp?v=1652700408","https://img2.ans-media.com/i/540x813/SS22-TOD2R8_99X_F4.jpg@webp?v=1652700313"],description:`
        Большая сумочка из коллекции Karl Lagerfeld. Закрывающаяся модель выполнена из натуральной кожи.
        - Сумка через плечо или в руках.
        - Съемная камера.
        - Длинные ручки.
        - Рассчитана на формат А4.
        - Чехол прилагается.
        - Длина ручек: 50 см.
        - Высота: 33 см.
        - Ширина у основания: 23,5 см.
        - Глубина: 18 см.
        Состав:
        58% Коровья кожа, 42% Хлопок
                `,category:"aksessuary"},{name:"Кожаная сумочка Patrizia Pepe",cost:"32100",size:["Один размер"],colorText:"Бежевый",type:"sumochki",color:["#d1c279"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/AW23-TOD23P-80X_F1.jpg@webp?v=1696332664","https://img2.ans-media.com/i/540x813/AW23-TOD23P-80X_F2.jpg@webp?v=1696333368","https://img2.ans-media.com/i/540x813/AW23-TOD23P-80X_F3.jpg@webp?v=1696333014","https://img2.ans-media.com/i/540x813/AW23-TOD23P-80X_F4.jpg@webp?v=1696327358"],description:`
        Большая сумочка из коллекции Karl Lagerfeld. Закрывающаяся модель выполнена из натуральной кожи.
        - Сумка через плечо или в руках.
        - Съемная камера.
        - Длинные ручки.
        - Рассчитана на формат А4.
        - Чехол прилагается.
        - Длина ручек: 50 см.
        - Высота: 33 см.
        - Ширина у основания: 23,5 см.
        - Глубина: 18 см.
        Состав:
        58% Коровья кожа, 42% Хлопок
                `,category:"aksessuary"},{name:"Кожаная сумочка Patrizia Pepe",cost:"21800",size:["Один размер"],colorText:"Фиолетовый",type:"sumochki",color:["#bf8cbe"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/AW23-TOD23J-04X_F1.jpg@webp?v=1696335645","https://img2.ans-media.com/i/540x813/AW23-TOD23J-04X_F2.jpg@webp?v=1696336011","https://img2.ans-media.com/i/540x813/AW23-TOD23J-04X_F3.jpg@webp?v=1696335885","https://img2.ans-media.com/i/540x813/AW23-TOD23J-04X_F4.jpg@webp?v=1696340690"],description:`
        Маленькая сумочка из коллекции Patrizia Pepe. Закрывающаяся модель выполнена из натуральной кожи.
        - Застегивается на магнитную застежку.
        - Модель с подкладкой.
        - Не рассчитана на формат А4.
        - Без внутренних карманов.
        - Регулируемый несъемный ремешок.
        - Сумка через плечо.
        - Прилагается текстильный мешок, который защищает товар от пыли.
        - Минимальная длина ремня: 95 см.
        - Максимальная длина ремня: 112 см.
        - Глубина: 3,5 см.
        - Высота: 19 см.
        - Ширина у основания: 13 см.
        Состав: Основной материал: 100% Телячья кожа
        Подкладка: 100% Полиэстер
                `,category:"aksessuary"},{name:"Сумочка Aldo ESPRESSO",cost:"18200",size:["Один размер"],colorText:"Коричневый",type:"sumochki",color:["#918559"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/AW23-TOD1OA-84X_F1.jpg@webp?v=1695279806","https://img2.ans-media.com/i/540x813/AW23-TOD1OA-84X_F2.jpg@webp?v=1695279289","https://img2.ans-media.com/i/540x813/AW23-TOD1OA-84X_F3.jpg@webp?v=1695280854","https://img2.ans-media.com/i/540x813/AW23-TOD1OA-84X_F4.jpg@webp?v=1695276651"],description:`
        Маленькая сумочка из коллекции Aldo. Закрывающаяся модель выполнена из циркония.
        - Застежка на кнопку.
        - Модель с подкладкой.
        - Не рассчитана на формат А4.
        - Несъемный ремешок без регулировки.
        - Длина ремня: 117 см.
        - Высота: 18 см.
        - Ширина у основания: 11 см.
        Состав: Основной материал: 50% Полиэстер, 50% Стекло
        Подкладка: 100% Полиэстер
                `,category:"aksessuary"},{name:"Сумочка Aldo TIVOLI",cost:"13100",size:["Один размер"],colorText:"Серый",type:"sumochki",color:["#b0ab97"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/AW23-TOD1L9-MLC_F1.jpg@webp?v=1693832797","https://img2.ans-media.com/i/540x813/AW23-TOD1L9-MLC_F2.jpg@webp?v=1693832797","https://img2.ans-media.com/i/540x813/AW23-TOD1L9-MLC_F3.jpg@webp?v=1693832192","https://img2.ans-media.com/i/540x813/AW23-TOD1L9-MLC_F4.jpg@webp?v=1693832797"],description:`
        Маленькая сумочка из коллекции Aldo. Закрывающаяся модель выполнена из искусственной кожи.
        - Этот продукт частично изготовлен из переработанного полиэстера.
        - Застежка на кнопку.
        - Модель с подкладкой.
        - Внутренний карман на молнии.
        - Сумка через плечо или в руках.
        - Имеет съемную ручку и съемный регулируемый ремешок.
        - Не рассчитана на формат А4.
        - Минимальная длина ремня: 46 см.
        - Максимальная длина ремня: 58 см.
        - Длина ручки: 42 см.
        - Глубина: 5 см.
        - Высота: 13,5 см.
        - Ширина у основания: 25 см.
        Состав: Основной материал: 100% Полиуретан
        Подкладка: 100% Переработанный полиэстер
                `,category:"aksessuary"},{name:"Сумочка Pinko",cost:"17700",size:["Один размер"],colorText:"Чёрный",type:"sumochki",color:["#000"],flag:!1,code:6446,img:["https://img2.ans-media.com/i/540x813/AW23-TOD1S1-99A_F1.jpg@webp?v=1694410017","https://img2.ans-media.com/i/540x813/AW23-TOD1S1-99A_F2.jpg@webp?v=1694410725","https://img2.ans-media.com/i/540x813/AW23-TOD1S1-99A_F3.jpg@webp?v=1694408683","https://img2.ans-media.com/i/540x813/AW23-TOD1S1-99A_F4.jpg@webp?v=1694410134"],description:`
        Средняя сумка типа shopper из коллекции Pinko. Закрывающаяся модель выполнена из текстильного материала.
        - Застегивается на магнитную застежку.
        - Внутренние карманы.
        - Имеет ручки и съемный регулируемый ремешок.
        - Рассчитана на формат А4.
        - Количество внутренних карманов на молнии: 1.
        - Количество накладных внутренних карманов: 2.
        - Минимальная длина ремня: 100 см.
        - Максимальная длина ремня: 115 см.
        - Длина ручек: 40 см.
        - Глубина: 14 см.
        - Высота: 29 см.
        - Ширина у основания: 36 см.
        Состав: Основной материал: 85% Полиэстер, 15% Хлопок
        Подкладка: 50% Полиамид, 50% Полиуретан
        Другие материалы: 90% Натуральная кожа, 10% Полиуретан
                `,category:"aksessuary"}],watchs:[{name:"Часы Dkny NY2947",cost:"33700",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#ebd150"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD2JS_GLD_F1.jpg@webp?v=1637233586","https://img2.ans-media.com/i/540x813/AA00-AKD2JS_GLD_F2.jpg@webp?v=1637233475","https://img2.ans-media.com/i/540x813/AA00-AKD2JS_GLD_F3.jpg@webp?v=1637233832"],description:`
        Часы из коллекции Dkny. Модель круглой формы с сегментным браслетом.
        - Материал корпуса и браслета: антиаллергическая нержавеющая сталь (символ 316I). Имеет низкое содержание никелия, что значительно уменшает вероятность аллергии.
        - Форма корпуса: круглая.
        - Сегментный браслет.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Стекло: минеральное (подобно оконному стеклу).
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Диаметр корпуса: 34 мм.
        - Ширина ремня: 14 мм.
        Состав:
        Благородная сталь, Минеральное стекло
                `,category:"aksessuary"},{name:"Skagen - Часы SKW2150",cost:"31000",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#ebd150"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD0CI_09X_F1.jpg@webp?v=1572341409","https://img2.ans-media.com/i/540x813/AA00-AKD0CI_09X_F2.jpg@webp?v=1572341410","https://img2.ans-media.com/i/540x813/AA00-AKD0CI_09X_F3.jpg@webp?v=1572341411","https://img2.ans-media.com/i/540x813/AA00-AKD0CI_09X_F4.jpg@webp?v=1572341411"],description:`
        Часы из коллекции Skagen. Модель с круглой формой и бижутерийным браслетом.
        - Материал коруса: антиаллергическая нержавеющая сталь (символ 316I). Имеет низкое содержание никелия, что значительно уменшает вероятность аллергии.
        - Форма корпуса: круглая.
        - Ювелирный браслет.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Механизм: кварцевый, источником энергии служить батарейка.
        - Стекло: минеральное (подобно оконному стеклу).
        - Часовые индексы.
        - Модель декорирована кристаллами.
        - Ширина корпуса: 30 мм.
        - Толщина корпуса: 12 мм.
        Состав: Благородная сталь
                `,category:"aksessuary"},{name:"Fossil - Часы ES3843",cost:"27100",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#262625"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD0BY_09X_F1.jpg@webp?v=1553688487","https://img2.ans-media.com/i/540x813/AA00-AKD0BY_09X_F2.jpg@webp?v=1553688487","https://img2.ans-media.com/i/540x813/AA00-AKD0BY_09X_F3.jpg@webp?v=1553688487"],description:`
        Часы из коллекции Fossil. Модель с круглой формой и кожаным ремешком.
        - Материал коруса: антиаллергическая нержавеющая сталь (символ 316I). Имеет низкое содержание никелия, что значительно уменшает вероятность аллергии.
        - Форма корпуса: круглая.
        - Форма корпуса: квадратная.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Механизм: кварцевый, источником энергии служить батарейка.
        - Стекло: минеральное (подобно оконному стеклу).
        - С датой.
        - Ширина корпуса: 36 мм.
        - Толщина корпуса: 8 мм.
        Состав: Натуральная кожа, Благородная сталь, Минеральное стекло
                `,category:"aksessuary"},{name:"Часы BOSS",cost:"22100",size:["Универсальный"],colorText:"Серебро",type:"watchs",color:["#262625"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AW22-AKD00G-SLV_F1.jpg@webp?v=1670324683","https://img2.ans-media.com/i/540x813/AW22-AKD00G_SLV_F1.jpg@webp?v=1670324684","https://img2.ans-media.com/i/540x813/AW22-AKD00G-SLV_F2.jpg@webp?v=1670324684"],description:`
        Часы из коллекции BOSS. Модель круглой формы с кожаным ремешком.
        - Материал ремешка: натуральная кожа.
        - Форма корпуса: круглая.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Стекло: минеральное (подобно оконному стеклу).
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Модель декорирована кристаллами.
        Состав:
        Натуральная кожа, Минеральное стекло
                `,category:"aksessuary"},{name:"Часы Michael Kors",cost:"44800",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#262625"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD52D-99X_F1.jpg@webp?v=1690871648","https://img2.ans-media.com/i/540x813/AA00-AKD52D-99X_F2.jpg@webp?v=1690870328","https://img2.ans-media.com/i/540x813/AA00-AKD52D-99X_F3.jpg@webp?v=1690871887"],description:`
        Часы из коллекции Michael Kors. Модель с круглой формой и ремнем с пластика.
        - Форма корпуса: круглая.
        - Материал ремешка: штучный материал.
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Водонепроницаемость: WR50 (5 атм) - плавание, без ныряния.
        - Стекло: минеральное (подобно оконному стеклу).
        - С хронографом и датой.
        - Имеет секундомер
        Состав: Сталь, Минеральное стекло, Пластик
                `,category:"aksessuary"},{name:"Часы Daniel Wellington Petite 32 Cornwall",cost:"29300",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#262625"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD39P_30X_F1.jpg@webp?v=1666251150","https://img2.ans-media.com/i/540x813/AA00-AKD39P_30X_F2.jpg@webp?v=1666251394"],description:`
        Часы из коллекции Daniel Wellington. Модель круглой формы с текстильным ремешком.
        - Сменные ремешки.
        - Форма корпуса: круглая.
        - Материал ремешка: текстиль.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Стекло: минеральное (подобно оконному стеклу).
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Ширина ремня: 14 мм.
        - Толщина корпуса: 6 мм.
        - Ширина корпуса: 32 мм.
        Состав:
        Текстильный материал, Нержавеющая сталь, Минеральное стекло
                `,category:"aksessuary"},{name:"Часы BOSS",cost:"54300",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#e3d178"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/AA00-AKD4US-GLD_F1.jpg@webp?v=1688118729","https://img2.ans-media.com/i/540x813/AA00-AKD4US-GLD_F2.jpg@webp?v=1688118847","https://img2.ans-media.com/i/540x813/AA00-AKD4US-GLD_F3.jpg@webp?v=1688118730"],description:`
        Часы из коллекции BOSS. Модель с круглой формой и бижутерийным браслетом.
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Водонепроницаемость: WR30 (3 атм) - мытье рук, дождь, мытье машины, душ и т.п.
        - Стекло: минеральное (подобно оконному стеклу).
        - Материал корпуса: сталь.
        - Модель в фирменной упаковке.
        - Толщина корпуса: 9,4 мм.
        - Ширина корпуса: 39 мм.
        - Ширина ремня: 18 мм.
        Состав:
        Металл, Нержавеющая сталь
                `,category:"aksessuary"},{name:"Часы Swarovski OCTEA LUX CHRONO",cost:"43100",size:["Универсальный"],colorText:"Золото",type:"watchs",color:["#d65c72"],flag:!1,code:4444,img:["https://img2.ans-media.com/i/540x813/SS23-AKD171-43X_F1.jpg@webp?v=1684902764","https://img2.ans-media.com/i/540x813/SS23-AKD171-43X_F2.jpg@webp?v=1684903485","https://img2.ans-media.com/i/540x813/SS23-AKD171-43X_F3.jpg@webp?v=1684904474","https://img2.ans-media.com/i/540x813/SS23-AKD171-43X_F4.jpg@webp?v=1684904683"],description:`
        Часы из коллекции Swarovski. Модель с круглой формой и кожаным ремешком.
        - Форма корпуса: круглая.
        - Водонепроницаемость: WR50 (5 атм) - плавание, без ныряния.
        - Материал ремешка: натуральная кожа.
        - Стекло: минеральное (подобно оконному стеклу).
        - Механизм: кварцевый, источником энергии служит батарейка.
        - Люминесцентные указатели.
        - Имеет секундомер
        - С хронографом.
        Состав:
        Натуральная кожа, Сталь, Минеральное стекло
                `,category:"aksessuary"}],headdress:[{name:"Шерстяная шапка Polo Ralph Lauren",cost:"2300",size:["Один размер"],colorText:"Бежевый",color:["#e3c764"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/AW23-CAD0G5-08X_F1.jpg@webp?v=1695878177","https://img2.ans-media.com/i/540x813/AW23-CAD0G5-08X_F2.jpg@webp?v=1695880099","https://img2.ans-media.com/i/540x813/AW23-CAD0G5-08X_F3.jpg@webp?v=1695876974"],description:`
            Шапка из коллекции Polo Ralph Lauren. Модель выполнена из плотного трикотажа.
            - Изделие содержит материалы из переработанных волокон.
            - Край с отворотом.
            - Модель с помпоном.
            - Модель с декоративной аппликацией.
            Состав: 80% Шерсть, 20% Переработанный нейлон
                    `,category:"aksessuary"},{name:"Шапка с примесью шерсти Guess",cost:"4600",size:["Один размер"],colorText:"Серый",color:["#e0e0e0"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/AW23-CAD0BF-90X_F1.jpg@webp?v=1695799831","https://img2.ans-media.com/i/540x813/AW23-CAD0BF-90X_F2.jpg@webp?v=1695798387","https://img2.ans-media.com/i/540x813/AW23-CAD0BF-90X_F3.jpg@webp?v=1695797549"],description:`
            Шапка из коллекции Guess. Модель выполнена из гладкого трикотажа.
            - Подворот внизу дополнительно защищает от остывания.
            - Нашивка с логотипом спереди.
            - Трикотаж средней толщины.
            Состав: 43% Акрил, 27% Полиэстер, 25% Полиамид, 5% Шерсть
                    `,category:"aksessuary"},{name:"Шерстяная шапка HUGO",cost:"5200",size:["Один размер"],colorText:"Чёрный",color:["#000"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/AW23-CAD0B5-99X_F1.jpg@webp?v=1695196338","https://img2.ans-media.com/i/540x813/AW23-CAD0B5-99X_F2.jpg@webp?v=1695195502"],description:`
            Детская шапка из коллекции HUGO. Модель выполнена из шерстяного трикотажа.
            - Модель бини.
            - Край с отворотом.
            - Плотный, эластичный трикотаж.
            Состав: 39% Шерсть, 25% Акрил, 22% Альпака, 13% Полиамид, 1% Эластан
                    `,category:"aksessuary"},{name:"Шерстяная шапка Lacoste",cost:"5100",size:["Один размер"],colorText:"Коричневый",color:["#e5c46e"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/AW23-CAU0E5-88X_F1.jpg@webp?v=1695221923","https://img2.ans-media.com/i/540x813/AW23-CAU0E5-88X_F2.jpg@webp?v=1695221924","https://img2.ans-media.com/i/540x813/AW23-CAU0E5-88X_F3.jpg@webp?v=1695221557"],description:`
            Детская шапка из коллекции HUGO. Модель выполнена из шерстяного трикотажа.
            - Модель бини.
            - Край с отворотом.
            - Плотный, эластичный трикотаж.
            Состав: 39% Шерсть, 25% Акрил, 22% Альпака, 13% Полиамид, 1% Эластан
                    `,category:"aksessuary"},{name:"Шерстяная шапка Lacoste",cost:"3900",size:["Один размер"],colorText:"Чёрный",color:["#000"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/SS23-CAD0CF-59X_F1.jpg@webp?v=1693581405","https://img2.ans-media.com/i/540x813/SS23-CAD0CF-59X_F2.jpg@webp?v=1693581406","https://img2.ans-media.com/i/540x813/SS23-CAD0CF-59X_F3.jpg@webp?v=1693581646"],description:`
            Шапка из коллекции adidas by Stella McCartney.Модель выполнена из материала с высоким содержанием хлопка. Высококачественный материал, произведенный с соблюдением принципов Sustainable fashion.
            - Этот продукт входит в линейку продуктов Adidas End Plastic Waste, которые производятся из переработанных материалов.
            - Продукт содержит органический хлопок и переработанные полиэфирные волокна.
            - Эластичная конструкция идеально подходит для головы.
            - Подворот внизу дополнительно защищает от остывания.
            - Вязание "косичка".
            - Трикотаж средней толщины.
            Состав: 64% Органический хлопок, 36% Переработанный полиэстер
                    `,category:"aksessuary"},{name:"Шапка adidas Originals",cost:"2900",size:["Один размер"],colorText:"Розовый",color:["#ebbce9"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/SS23-CAD0CI-30X_F1.jpg@webp?v=1693582129","https://img2.ans-media.com/i/540x813/SS23-CAD0CI-30X_F2.jpg@webp?v=1693582605","https://img2.ans-media.com/i/540x813/SS23-CAD0CI-30X_F3.jpg@webp?v=1693582483"],description:`
            Шапка из коллекции adidas Originals.Модель выполнена из эластичного материала. Чрезвычайно комфортный материал.
            - Эластичная конструкция идеально подходит для головы.
            - Подворот внизу дополнительно защищает от остывания.
            - Двухслойная конструкция обеспечивает оптимальное тепло.
            - Трикотаж средней толщины.
            Состав: 100% Акрил
                    `,category:"aksessuary"},{name:"Шапка с примесью шерсти Napapijri",cost:"5200",size:["Один размер"],colorText:"Бежевый",color:["#ebddbc"],type:"headdress",flag:!1,code:9988,img:["https://img2.ans-media.com/i/540x813/AW23-CAD09R-01X_F1.jpg@webp?v=1693386259","https://img2.ans-media.com/i/540x813/AW23-CAD09R-01X_F2.jpg@webp?v=1693386259","https://img2.ans-media.com/i/540x813/AW23-CAD09R-01X_F3.jpg@webp?v=1693386140"],description:`
            Шапка из коллекции Napapijri. Модель выполнена из плотного трикотажа.
            - Подворот внизу дополнительно защищает от остывания.
            - Модель с помпоном.
            Состав: 75% Акрил, 10% Полиамид, 10% Шерсть, 5% Вискоза
                    `,category:"aksessuary"}]}};let Ru=0,d2={};for(let e in Le){let t=Le[e];Object.keys(t).map(r=>t[r].map(i=>{i.id=Ru,i.link=i.name+"-"+i.id,d2[i.link]=i,Ru++}))}let rn=[],Ms=Object.keys(Le).map(e=>Le[e]);for(let e in Ms)for(let t in Ms[e])rn.push(...Ms[e][t]);const p2={};for(let[e,t]of Object.entries(Le))p2[e]=Object.values(t).flat();const ct={odejda:"Одежда",obuv:"Обувь",aksessuary:"Аксессуары",bluzki:"Блузки",djinsy:"Джинсы",kurtky:"Куртки",kofty:"Кофты",platya:"Платья",underwear:"Нижнее бельё",yubki:"Юбки",phutbolki:"Футболки",bezrukavki:"Безрукавки",sviter:"Свитеры",braslet:"Браслеты",sergi:"Серьги",rukzaki:"Рюкзаки",botinky:"Ботинки",sapogi:"Сапоги",krossovki:"Кроссовки",snegohody:"Снегоходы",baletki:"Балетки",sumochki:"Сумочки",watchs:"Часы",tufli:"Туфли",headdress:"Головные уборы"};function Ze(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ut(e){return!!e&&!!e[U]}function vt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_2}(e)||Array.isArray(e)||!!e[Ku]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ku])||cc(e)||uc(e))}function hn(e,t,n){n===void 0&&(n=!1),cr(e)===0?(n?Object.keys:Hn)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function cr(e){var t=e[U];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:cc(e)?2:uc(e)?3:0}function Vn(e,t){return cr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m2(e,t){return cr(e)===2?e.get(t):e[t]}function M0(e,t,n){var r=cr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function I0(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function cc(e){return x2&&e instanceof Map}function uc(e){return w2&&e instanceof Set}function nn(e){return e.o||e.t}function dc(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=$0(e);delete t[U];for(var n=Hn(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function pc(e,t){return t===void 0&&(t=!1),mc(e)||Ut(e)||!vt(e)||(cr(e)>1&&(e.set=e.add=e.clear=e.delete=f2),Object.freeze(e),t&&hn(e,function(n,r){return pc(r,!0)},!0)),e}function f2(){Ze(2)}function mc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ot(e){var t=el[e];return t||Ze(18,e),t}function g2(e,t){el[e]||(el[e]=t)}function Ya(){return ti}function Is(e,t){t&&(ot("Patches"),e.u=[],e.s=[],e.v=t)}function xo(e){Qa(e),e.p.forEach(h2),e.p=null}function Qa(e){e===ti&&(ti=e.l)}function Nu(e){return ti={p:[],l:ti,h:e,m:!0,_:0}}function h2(e){var t=e[U];t.i===0||t.i===1?t.j():t.g=!0}function Us(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ot("ES5").S(t,e,r),r?(n[U].P&&(xo(t),Ze(4)),vt(e)&&(e=wo(t,e),t.l||_o(t,e)),t.u&&ot("Patches").M(n[U].t,e,t.u,t.s)):e=wo(t,n,[]),xo(t),t.u&&t.v(t.u,t.s),e!==U0?e:void 0}function wo(e,t,n){if(mc(t))return t;var r=t[U];if(!r)return hn(t,function(a,c){return zu(e,r,t,a,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return _o(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=dc(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),hn(o,function(a,c){return zu(e,r,i,a,c,n,s)}),_o(e,i,!1),n&&e.u&&ot("Patches").N(r,n,e.u,e.s)}return r.o}function zu(e,t,n,r,i,o,s){if(Ut(i)){var a=wo(e,i,o&&t&&t.i!==3&&!Vn(t.R,r)?o.concat(r):void 0);if(M0(n,r,a),!Ut(a))return;e.m=!1}else s&&n.add(i);if(vt(i)&&!mc(i)){if(!e.h.D&&e._<1)return;wo(e,i),t&&t.A.l||_o(e,i)}}function _o(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&pc(t,n)}function $s(e,t){var n=e[U];return(n?nn(n):e)[t]}function Mu(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dt(e){e.P||(e.P=!0,e.l&&Dt(e.l))}function Ks(e){e.o||(e.o=dc(e.t))}function qa(e,t,n){var r=cc(t)?ot("MapSet").F(t,n):uc(t)?ot("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:Ya(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=a,u=ni;s&&(c=[a],u=Cr);var p=Proxy.revocable(c,u),g=p.revoke,f=p.proxy;return a.k=f,a.j=g,f}(t,n):ot("ES5").J(t,n);return(n?n.A:Ya()).p.push(r),r}function v2(e){return Ut(e)||Ze(22,e),function t(n){if(!vt(n))return n;var r,i=n[U],o=cr(n);if(i){if(!i.P&&(i.i<4||!ot("ES5").K(i)))return i.t;i.I=!0,r=Iu(n,o),i.I=!1}else r=Iu(n,o);return hn(r,function(s,a){i&&m2(i.t,s)===a||M0(r,s,t(a))}),o===3?new Set(r):r}(e)}function Iu(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return dc(e)}function y2(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var c=this[U];return ni.get(c,o)},set:function(c){var u=this[U];ni.set(u,o,c)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][U];if(!a.P)switch(a.i){case 5:r(a)&&Dt(a);break;case 4:n(a)&&Dt(a)}}}function n(o){for(var s=o.t,a=o.k,c=Hn(a),u=c.length-1;u>=0;u--){var p=c[u];if(p!==U){var g=s[p];if(g===void 0&&!Vn(s,p))return!0;var f=a[p],v=f&&f[U];if(v?v.t!==g:!I0(f,g))return!0}}var y=!!s[U];return c.length!==Hn(s).length+(y?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};g2("ES5",{J:function(o,s){var a=Array.isArray(o),c=function(p,g){if(p){for(var f=Array(g.length),v=0;v<g.length;v++)Object.defineProperty(f,""+v,e(v,!0));return f}var y=$0(g);delete y[U];for(var x=Hn(y),j=0;j<x.length;j++){var m=x[j];y[m]=e(m,p||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(g),y)}(a,o),u={i:a?5:4,A:s?s.A:Ya(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,U,{value:u,writable:!0}),c},S:function(o,s,a){a?Ut(s)&&s[U].A===o&&t(o.p):(o.u&&function c(u){if(u&&typeof u=="object"){var p=u[U];if(p){var g=p.t,f=p.k,v=p.R,y=p.i;if(y===4)hn(f,function(h){h!==U&&(g[h]!==void 0||Vn(g,h)?v[h]||c(f[h]):(v[h]=!0,Dt(p)))}),hn(g,function(h){f[h]!==void 0||Vn(f,h)||(v[h]=!1,Dt(p))});else if(y===5){if(r(p)&&(Dt(p),v.length=!0),f.length<g.length)for(var x=f.length;x<g.length;x++)v[x]=!1;else for(var j=g.length;j<f.length;j++)v[j]=!0;for(var m=Math.min(f.length,g.length),d=0;d<m;d++)f.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&c(f[d])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Uu,ti,fc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",x2=typeof Map<"u",w2=typeof Set<"u",$u=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",U0=fc?Symbol.for("immer-nothing"):((Uu={})["immer-nothing"]=!0,Uu),Ku=fc?Symbol.for("immer-draftable"):"__$immer_draftable",U=fc?Symbol.for("immer-state"):"__$immer_state",_2=""+Object.prototype.constructor,Hn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,$0=Object.getOwnPropertyDescriptors||function(e){var t={};return Hn(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},el={},ni={get:function(e,t){if(t===U)return e;var n=nn(e);if(!Vn(n,t))return function(i,o,s){var a,c=Mu(o,s);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!vt(r)?r:r===$s(e.t,t)?(Ks(e),e.o[t]=qa(e.A.h,r,e)):r},has:function(e,t){return t in nn(e)},ownKeys:function(e){return Reflect.ownKeys(nn(e))},set:function(e,t,n){var r=Mu(nn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=$s(nn(e),t),o=i==null?void 0:i[U];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(I0(n,i)&&(n!==void 0||Vn(e.t,t)))return!0;Ks(e),Dt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return $s(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ks(e),Dt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=nn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ze(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ze(12)}},Cr={};hn(ni,function(e,t){Cr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Cr.deleteProperty=function(e,t){return Cr.set.call(this,e,t,void 0)},Cr.set=function(e,t,n){return ni.set.call(this,e[0],t,n,e[0])};var j2=function(){function e(n){var r=this;this.O=$u,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var c=r;return function(x){var j=this;x===void 0&&(x=a);for(var m=arguments.length,d=Array(m>1?m-1:0),h=1;h<m;h++)d[h-1]=arguments[h];return c.produce(x,function(_){var k;return(k=o).call.apply(k,[j,_].concat(d))})}}var u;if(typeof o!="function"&&Ze(6),s!==void 0&&typeof s!="function"&&Ze(7),vt(i)){var p=Nu(r),g=qa(r,i,void 0),f=!0;try{u=o(g),f=!1}finally{f?xo(p):Qa(p)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(x){return Is(p,s),Us(x,p)},function(x){throw xo(p),x}):(Is(p,s),Us(u,p))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===U0&&(u=void 0),r.D&&pc(u,!0),s){var v=[],y=[];ot("Patches").M(i,u,v,y),s(v,y)}return u}Ze(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var p=arguments.length,g=Array(p>1?p-1:0),f=1;f<p;f++)g[f-1]=arguments[f];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(g))})};var s,a,c=r.produce(i,o,function(u,p){s=u,a=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,s,a]}):[c,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){vt(n)||Ze(8),Ut(n)&&(n=v2(n));var r=Nu(this),i=qa(this,n,void 0);return i[U].C=!0,Qa(r),i},t.finishDraft=function(n,r){var i=n&&n[U],o=i.A;return Is(o,r),Us(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!$u&&Ze(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=ot("Patches").$;return Ut(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Te=new j2,K0=Te.produce;Te.produceWithPatches.bind(Te);Te.setAutoFreeze.bind(Te);Te.setUseProxies.bind(Te);Te.applyPatches.bind(Te);Te.createDraft.bind(Te);Te.finishDraft.bind(Te);function ri(e){"@babel/helpers - typeof";return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ri(e)}function S2(e,t){if(ri(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ri(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k2(e){var t=S2(e,"string");return ri(t)==="symbol"?t:String(t)}function D2(e,t,n){return t=k2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vu(Object(n),!0).forEach(function(r){D2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Gu=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Vs=function(){return Math.random().toString(36).substring(7).split("").join(".")},jo={INIT:"@@redux/INIT"+Vs(),REPLACE:"@@redux/REPLACE"+Vs(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Vs()}};function A2(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function V0(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(pe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(pe(1));return n(V0)(e,t)}if(typeof e!="function")throw new Error(pe(2));var i=e,o=t,s=[],a=s,c=!1;function u(){a===s&&(a=s.slice())}function p(){if(c)throw new Error(pe(3));return o}function g(x){if(typeof x!="function")throw new Error(pe(4));if(c)throw new Error(pe(5));var j=!0;return u(),a.push(x),function(){if(j){if(c)throw new Error(pe(6));j=!1,u();var d=a.indexOf(x);a.splice(d,1),s=null}}}function f(x){if(!A2(x))throw new Error(pe(7));if(typeof x.type>"u")throw new Error(pe(8));if(c)throw new Error(pe(9));try{c=!0,o=i(o,x)}finally{c=!1}for(var j=s=a,m=0;m<j.length;m++){var d=j[m];d()}return x}function v(x){if(typeof x!="function")throw new Error(pe(10));i=x,f({type:jo.REPLACE})}function y(){var x,j=g;return x={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(pe(11));function h(){d.next&&d.next(p())}h();var _=j(h);return{unsubscribe:_}}},x[Gu]=function(){return this},x}return f({type:jo.INIT}),r={dispatch:f,subscribe:g,getState:p,replaceReducer:v},r[Gu]=y,r}function C2(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:jo.INIT});if(typeof r>"u")throw new Error(pe(12));if(typeof n(void 0,{type:jo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(pe(13))})}function H0(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{C2(n)}catch(a){s=a}return function(c,u){if(c===void 0&&(c={}),s)throw s;for(var p=!1,g={},f=0;f<o.length;f++){var v=o[f],y=n[v],x=c[v],j=y(x,u);if(typeof j>"u")throw u&&u.type,new Error(pe(14));g[v]=j,p=p||j!==x}return p=p||o.length!==Object.keys(c).length,p?g:c}}function So(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function F2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(pe(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(c){return c(s)});return o=So.apply(void 0,a)(i.dispatch),Hu(Hu({},i),{},{dispatch:o})}}}function G0(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var J0=G0();J0.withExtraArgument=G0;const Ju=J0;var Z0=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),b2=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(p){return c([u,p])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(p){u=[6,p],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},nr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},L2=Object.defineProperty,W2=Object.defineProperties,E2=Object.getOwnPropertyDescriptors,Zu=Object.getOwnPropertySymbols,O2=Object.prototype.hasOwnProperty,T2=Object.prototype.propertyIsEnumerable,Yu=function(e,t,n){return t in e?L2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Rt=function(e,t){for(var n in t||(t={}))O2.call(t,n)&&Yu(e,n,t[n]);if(Zu)for(var r=0,i=Zu(t);r<i.length;r++){var n=i[r];T2.call(t,n)&&Yu(e,n,t[n])}return e},Hs=function(e,t){return W2(e,E2(t))},P2=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{a(n.next(c))}catch(u){i(u)}},s=function(c){try{a(n.throw(c))}catch(u){i(u)}},a=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,s)};a((n=n.apply(e,t)).next())})},B2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?So:So.apply(null,arguments)};function X2(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Nt(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Rt(Rt({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var R2=function(e){Z0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,nr([void 0],n.concat(this))))},t}(Array),N2=function(e){Z0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,nr([void 0],n.concat(this))))},t}(Array);function tl(e){return vt(e)?K0(e,function(){}):e}function z2(e){return typeof e=="boolean"}function M2(){return function(t){return I2(t)}}function I2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new R2;return n&&(z2(n)?r.push(Ju):r.push(Ju.withExtraArgument(n.extraArgument))),r}var U2=!0;function $2(e){var t=M2(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,c=a===void 0?!0:a,u=n.preloadedState,p=u===void 0?void 0:u,g=n.enhancers,f=g===void 0?void 0:g,v;if(typeof i=="function")v=i;else if(X2(i))v=H0(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var x=F2.apply(void 0,y),j=So;c&&(j=B2(Rt({trace:!U2},typeof c=="object"&&c)));var m=new N2(x),d=m;Array.isArray(f)?d=nr([x],f):typeof f=="function"&&(d=f(m));var h=j.apply(void 0,d);return V0(v,p,h)}function Y0(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function K2(e){return typeof e=="function"}function V2(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Y0(t):[t,n,r],o=i[0],s=i[1],a=i[2],c;if(K2(e))c=function(){return tl(e())};else{var u=tl(e);c=function(){return u}}function p(g,f){g===void 0&&(g=c());var v=nr([o[f.type]],s.filter(function(y){var x=y.matcher;return x(f)}).map(function(y){var x=y.reducer;return x}));return v.filter(function(y){return!!y}).length===0&&(v=[a]),v.reduce(function(y,x){if(x)if(Ut(y)){var j=y,m=x(j,f);return m===void 0?y:m}else{if(vt(y))return K0(y,function(d){return x(d,f)});var m=x(y,f);if(m===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return y},g)}return p.getInitialState=c,p}function H2(e,t){return e+"/"+t}function ci(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:tl(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(p){var g=r[p],f=H2(t,p),v,y;"reducer"in g?(v=g.reducer,y=g.prepare):v=g,o[p]=v,s[f]=v,a[p]=y?Nt(f,y):Nt(f)});function c(){var p=typeof e.extraReducers=="function"?Y0(e.extraReducers):[e.extraReducers],g=p[0],f=g===void 0?{}:g,v=p[1],y=v===void 0?[]:v,x=p[2],j=x===void 0?void 0:x,m=Rt(Rt({},f),s);return V2(n,function(d){for(var h in m)d.addCase(h,m[h]);for(var _=0,k=y;_<k.length;_++){var A=k[_];d.addMatcher(A.matcher,A.reducer)}j&&d.addDefaultCase(j)})}var u;return{name:t,reducer:function(p,g){return u||(u=c()),u(p,g)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var G2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",J2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=G2[Math.random()*64|0];return t},Z2=["name","message","stack","code"],Gs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Qu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Y2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Z2;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=Nt(t+"/fulfilled",function(u,p,g,f){return{payload:u,meta:Hs(Rt({},f||{}),{arg:g,requestId:p,requestStatus:"fulfilled"})}}),o=Nt(t+"/pending",function(u,p,g){return{payload:void 0,meta:Hs(Rt({},g||{}),{arg:p,requestId:u,requestStatus:"pending"})}}),s=Nt(t+"/rejected",function(u,p,g,f,v){return{payload:f,error:(r&&r.serializeError||Y2)(u||"Rejected"),meta:Hs(Rt({},v||{}),{arg:g,requestId:p,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(p,g,f){var v=r!=null&&r.idGenerator?r.idGenerator(u):J2(),y=new a,x;function j(d){x=d,y.abort()}var m=function(){return P2(this,null,function(){var d,h,_,k,A,F,b;return b2(this,function(R){switch(R.label){case 0:return R.trys.push([0,4,,5]),k=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:g,extra:f}),q2(k)?[4,k]:[3,2];case 1:k=R.sent(),R.label=2;case 2:if(k===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(L,se){return y.signal.addEventListener("abort",function(){return se({name:"AbortError",message:x||"Aborted"})})}),p(o(v,u,(h=r==null?void 0:r.getPendingMeta)==null?void 0:h.call(r,{requestId:v,arg:u},{getState:g,extra:f}))),[4,Promise.race([A,Promise.resolve(n(u,{dispatch:p,getState:g,extra:f,requestId:v,signal:y.signal,abort:j,rejectWithValue:function(L,se){return new Gs(L,se)},fulfillWithValue:function(L,se){return new Qu(L,se)}})).then(function(L){if(L instanceof Gs)throw L;return L instanceof Qu?i(L.payload,v,u,L.meta):i(L,v,u)})])];case 3:return _=R.sent(),[3,5];case 4:return F=R.sent(),_=F instanceof Gs?s(null,v,u,F.payload,F.meta):s(F,v,u),[3,5];case 5:return b=r&&!r.dispatchConditionRejection&&s.match(_)&&_.meta.condition,b||p(_),[2,_]}})})}();return Object.assign(m,{abort:j,requestId:v,arg:u,unwrap:function(){return m.then(Q2)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Q2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function q2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var gc="listenerMiddleware";Nt(gc+"/add");Nt(gc+"/removeAll");Nt(gc+"/remove");var qu;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);y2();const Q0=ci({name:"allQuantitiResult",initialState:{listProducts:[""]},reducers:{addInListProductsSearchResult(e,t){e.listProducts=[t.payload]}}}),eh=Q0.reducer,{addInListProductsSearchResult:th}=Q0.actions,nh=w.memo(({query:e,flagIsOpenSearchWindow:t,setIsOpenSearchWindow:n,setQuery:r,refInput:i})=>{const[o,s]=w.useState([]),[a,c]=w.useState([]),u=z0(),p=dl();let g=new RegExp(`${e}`,"gm");w.useEffect(()=>{(function(){let m=[];for(let d=0;d<rn.length;d++){let h=ct[rn[d].type].toLowerCase()+" "+rn[d].name.toLowerCase()+" "+rn[d].colorText.toLowerCase();m.push(h)}s(m)})()},[]);const f=j=>{j.target.tagName==="LI"&&r(j.target.textContent)},v=()=>{n(!1),r("")},y=w.useMemo(()=>{const j=[];for(let m=0;m<o.length;m++)g.test(o[m])&&j.push(rn[m]);return[j.slice(0,6),j]},[e]),x=()=>{u(th(y[1])),n(!1),c([...a,i.current.value]),localStorage.setItem("recentlyQuery",JSON.stringify([...a,i.current.value])),JSON.parse(localStorage.getItem("recentlyQuery")).length>10&&(localStorage.setItem("recentlyQuery",[]),c([i.current.value])),p("search"),r("")};return l.jsxs(w.Fragment,{children:[l.jsx("div",{onClick:()=>{n(!1),r("")},className:Re.bacgroundFilter+(t?"":Re.closeWindowSearch)}),t?l.jsx("div",{className:Re.windowSearch,children:l.jsxs("div",{className:Re.centerBlocks,children:[l.jsxs("div",{className:Re.resultCommudityBlock,children:[l.jsxs("div",{className:Re.titleSearch,children:[l.jsx("h3",{children:"Результат поиска"}),l.jsx("span",{onClick:v,className:Re.crossWindow,children:l.jsxs("svg",{fill:"#696969",height:"20px",width:"20px",version:"1.1",id:"Capa_1",viewBox:"0 0 490 490",stroke:"#696969",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("polygon",{points:"456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "})," "]})]})})]}),y[0].length?l.jsx("div",{onClick:()=>n(!1),className:Re.resultCommodity,children:y[0].map((j,m)=>l.jsx(u2,{filterArray:j},j.name+m))}):l.jsx("div",{className:Re.notFound,children:l.jsx("span",{children:"Ничего не найдено"})}),l.jsx("div",{className:Re.moreCommodity,children:e&&y[0].length?l.jsx(P,{to:"search",onClick:x,children:"Посмотреть больше"}):""})]}),l.jsxs("div",{className:Re.recentlyQuery,children:[l.jsx("h3",{children:"Недавние запросы"}),l.jsx("ul",{className:Re.listResentlySearch,onClick:f,children:localStorage.getItem("recentlyQuery")?JSON.parse(localStorage.getItem("recentlyQuery")).map((j,m)=>l.jsx("li",{children:j},j+m)):""})]})]})}):""]})}),rh="_searchPlaceholderBlock_p0y55_1",ih={searchPlaceholderBlock:rh};let Js=["Ваш запрос ","Чёрный ","Boss ","Платье ","Джинсы ","Шапка ","Calvin Klein"],jn=0,Sn=0,wr=!1,ed=300;const oh=()=>{const[e,t]=w.useState("");return w.useEffect(()=>{let n=()=>{ed=Math.round(Math.random()*200+100),wr||jn++,wr&&(jn--,jn==0&&(wr=!1,Sn++),Sn==Js.length&&(Sn=0)),t(Js[Sn].slice(0,jn)),jn==Js[Sn].length&&(wr=!0),setTimeout(n,ed)};return n(),()=>{n=null,jn=0,Sn=0,wr=!1,t("")}},[]),l.jsx("div",{className:ih.searchPlaceholderBlock,children:e})},sh=w.memo(()=>{const[e,t]=w.useState(""),[n,r]=w.useState(!1),i=w.useRef(null),o=a=>{a.preventDefault(),t(a.target.value.toLowerCase())},s=()=>{r(!0),window.scrollTo(0,90)};return l.jsxs("form",{className:zs.searchSiteForm,children:[l.jsx("input",{ref:i,onClick:s,onChange:o,className:zs.searchSite,type:"text",value:n?e:""}),!n&&l.jsx(oh,{}),l.jsx("span",{className:zs.searchSiteSvg,children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"23px",height:"23px",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsxs("g",{clipPath:"url(#clip0_15_152)",children:[" ",l.jsx("rect",{width:"24",height:"24"})," ",l.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5",stroke:"#000000",strokeLinejoin:"round"})," ",l.jsx("path",{d:"M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z",fill:"#000000"})," "]})," ",l.jsxs("defs",{children:[" ",l.jsxs("clipPath",{id:"clip0_15_152",children:[" ",l.jsx("rect",{width:"24",height:"24",fill:"white"})," "]})," "]})," "]})]})}),l.jsx(nh,{refInput:i,flagIsOpenSearchWindow:n,setIsOpenSearchWindow:r,query:e,setQuery:t})]})}),ah="_burgerMenuWindow_nvmwd_1",lh="_burgerMenuWindowConteiner_nvmwd_13",ch="_burgerList_nvmwd_21",uh="_cross_nvmwd_40",dh="_arrowCat_nvmwd_50",ph="_rotateArrow_nvmwd_62",Jt={burgerMenuWindow:ah,burgerMenuWindowConteiner:lh,burgerList:ch,cross:uh,arrowCat:dh,rotateArrow:ph},mh="_burgerListCategory_1tmfp_1",fh="_hiddenMenuSide_1tmfp_45",gh="_burgerListInfo_1tmfp_61",kn={burgerListCategory:mh,hiddenMenuSide:fh,burgerListInfo:gh},hh=({isOpenCatalogMenu:e,closeWindowBurger:t})=>{const n=w.useMemo(()=>Object.keys(Le).map((r,i)=>l.jsxs("ul",{onClick:t,children:[l.jsx(P,{to:`/${r}`,children:l.jsx("h3",{children:ct[r]})}),Object.keys(Le[r]).map((o,s)=>l.jsx(P,{to:`/${r+"/"+o}`,children:l.jsx("li",{children:ct[o]},o+r+s)},r+o+s))]},r+i)),[]);return l.jsxs(w.Fragment,{children:[l.jsx("div",{className:e?kn.burgerListCategory:`${kn.burgerListCategory} ${kn.hiddenMenuSide}`,children:n}),l.jsx("div",{className:e?`${kn.burgerListInfo} ${kn.hiddenMenuSide}`:kn.burgerListInfo,children:l.jsxs("ul",{onClick:t,children:[l.jsx(P,{to:"/sotrudnichestvo",children:l.jsx("li",{children:"Партнерам"})}),l.jsx(P,{to:"/payment",children:l.jsx("li",{children:"Оплата и доставка"})}),l.jsx(P,{to:"/order",children:l.jsx("li",{children:"Как оформить заказ"})}),l.jsx(P,{to:"/exchange",children:l.jsx("li",{children:"Обмен и возврат"})})]})})]})},vh=w.memo(({setBurgerActive:e})=>{const[t,n]=w.useState(!1),r=w.useCallback(o=>{(o.target.tagName=="LI"||o.target.tagName=="a")&&o.target.id!="catalog"&&e(!1)},[]),i=()=>{n(!t)};return l.jsxs("div",{className:Jt.burgerMenuWindow,children:[l.jsx("div",{onClick:()=>e(!1),className:Jt.cross,children:l.jsxs("svg",{fill:"#363636",height:"25px",width:"25px",version:"1.1",id:"Capa_1",viewBox:"0 0 490 490",stroke:"#363636",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("polygon",{points:"456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "})," "]})]})}),l.jsxs("div",{className:Jt.burgerMenuWindowConteiner,children:[l.jsx("div",{className:Jt.burgerList,children:l.jsxs("ul",{onClick:r,children:[l.jsxs("li",{id:"catalog",onClick:i,children:["Каталог",l.jsx("span",{className:t?`${Jt.arrowCat} ${Jt.rotateArrow}`:Jt.arrowCat,children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z",fill:"#221911"})," "]})]})})]}),l.jsx(P,{to:"/premium",children:l.jsx("li",{children:"Премиум"})}),l.jsx(P,{to:"/outfits",children:l.jsx("li",{children:"Коллекции"})}),l.jsx("li",{children:"Распродажа"})]})}),l.jsx(hh,{isOpenCatalogMenu:t,closeWindowBurger:r})]})]})}),yh=()=>{const[e,t]=w.useState(!0),n=Ja(s=>s.basketBD.resultBasketElems),r=Ja(s=>s.favoriteProd.allFavAdded),[i,o]=w.useState(!1);return l.jsxs("header",{children:[i&&l.jsx(vh,{setBurgerActive:o}),e&&l.jsx(L3,{closeButton:t}),l.jsxs("div",{className:we.headerMain,children:[l.jsxs("div",{className:we.headerTop,children:[l.jsx("div",{className:we.headerTopLeft,children:l.jsx("ul",{children:l.jsx("li",{onClick:()=>o(!i),className:we.headerBurger,children:l.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 12 12",enableBackground:"new 0 0 12 12",id:"Слой_1",version:"1.1",fill:"#000000",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsxs("g",{children:[" ",l.jsx("rect",{fill:"#333333",height:"1",width:"11",x:"0.5",y:"5.5"})," ",l.jsx("rect",{fill:"#333333",height:"1",width:"11",x:"0.5",y:"2.5"})," ",l.jsx("rect",{fill:"#333333",height:"1",width:"11",x:"0.5",y:"8.5"})," "]})," "]})]})})})}),l.jsx("div",{className:we.headerTopLogo,children:l.jsx(P,{to:"/",children:"beauté"})}),l.jsxs("div",{className:we.headerTopRight,children:[l.jsx("div",{className:we.homebutoon,children:l.jsx(P,{to:"/",children:l.jsxs("svg",{width:"27px",height:"29px",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M3 10.8074C3 9.9094 3.40231 9.0586 4.09639 8.48876L9.46186 4.08378C10.9372 2.87254 13.0628 2.87255 14.5381 4.08378L19.9036 8.48876C20.5977 9.0586 21 9.9094 21 10.8074V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V10.8074Z",stroke:"#000000",strokeWidth:"1.272"})," ",l.jsx("path",{d:"M15 21V16C15 14.8954 14.1046 14 13 14H11C9.89543 14 9 14.8954 9 16V21",stroke:"#000000",strokeWidth:"1.272"})," "]})]})})}),l.jsx("div",{className:we.profil,children:l.jsx(P,{to:"account",children:l.jsxs("svg",{width:"19px",height:"28px",viewBox:"0 0 20 20",version:"1.1",fill:"#000000",children:[l.jsx("g",{strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("defs",{children:" "})," ",l.jsxs("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[" ",l.jsxs("g",{transform:"translate(-180.000000, -2159.000000)",fill:"#000000",children:[" ",l.jsxs("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:[" ",l.jsx("path",{d:"M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298",children:" "})," "]})," "]})," "]})," "]})]})})}),l.jsxs("div",{className:we.basket,children:[l.jsx(P,{to:"basket",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"28px",height:"28px",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4",stroke:"#000000",strokeWidth:"1.336",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})}),n.length?l.jsx("span",{className:we.logoHeaderCount,children:n.length}):""]}),l.jsxs("div",{className:we.heart,children:[l.jsx(P,{to:"/favorite",children:l.jsxs("svg",{width:"28px",height:"28px",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z",stroke:"#000000",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})}),r.length?l.jsx("span",{className:we.logoHeaderCount,children:r.length}):""]})]})]}),l.jsxs("div",{className:we.headerBottom,children:[l.jsx("div",{className:we.headerCategory,children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(P,{to:"odejda",children:"Одежда"})}),l.jsx("li",{children:l.jsx(P,{to:"obuv",children:"Обувь"})}),l.jsx("li",{children:l.jsx(P,{to:"aksessuary",children:"Аксессуары"})}),l.jsx("li",{children:l.jsx(P,{to:"premium",children:"Премиум"})}),l.jsx("li",{children:l.jsx(P,{to:"/outfits",children:"Коллекции"})})]})}),l.jsx(sh,{})]})]})]})},xh="_descBlock_3o3lf_1",wh="_leftBlockDesc_3o3lf_11",_h="_leftBlockDescTitle_3o3lf_16",jh="_leftBlockDescContent_3o3lf_28",Sh="_leftBlockDescFootnote_3o3lf_34",kh="_rightBlockDesc_3o3lf_40",Dh="_distribInput_3o3lf_66",Zt={descBlock:xh,leftBlockDesc:wh,leftBlockDescTitle:_h,leftBlockDescContent:jh,leftBlockDescFootnote:Sh,rightBlockDesc:kh,distribInput:Dh},Ah=()=>l.jsxs("div",{className:Zt.descBlock,children:[l.jsxs("div",{className:Zt.leftBlockDesc,children:[l.jsx("div",{className:Zt.leftBlockDescTitle,children:l.jsxs("h3",{children:[l.jsx("span",{children:"-15%**"})," на первую покупку за подписку на рассылку"]})}),l.jsx("div",{className:Zt.leftBlockDescContent,children:l.jsx("p",{children:"Подписывайтесь на рассылку и получайте скидку на покупки"})}),l.jsx("div",{className:Zt.leftBlockDescFootnote,children:l.jsx("p",{children:"**Одноразовая скидка распространяется на весь ассортимент и сработает при покупке новинок (товары с “чёрными ценниками”) минимум на 8500 р. Промокод будет выслан на указанный Тобой адрес e-mail"})})]}),l.jsx("div",{className:Zt.rightBlockDesc,children:l.jsxs("form",{children:[l.jsx("input",{className:Zt.distribInput,type:"email",placeholder:"Введите адрес электронной почты"}),l.jsx("button",{children:"Подписаться"})]})})]}),Ch="_btUp_t4894_1",Fh={btUp:Ch},bh=w.memo(()=>{const e=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return l.jsx("div",{onClick:e,className:Fh.btUp,children:l.jsxs("svg",{fill:"#7f7f7f",height:"25px",width:"25px",version:"1.1",viewBox:"0 0 330 330",xmlSpace:"preserve",stroke:"#7f7f7f",strokeWidth:"0.0033",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})," "]})]})})}),Lh="_footer_jayq0_1",Wh="_top_jayq0_8",Eh="_footerColumnEl_jayq0_12",Oh="_footerBottom_jayq0_34",Th="_usersInfo_jayq0_1",Yt={footer:Lh,top:Wh,footerColumnEl:Eh,footerBottom:Oh,usersInfo:Th},Ph=()=>l.jsxs("div",{className:Yt.footer,children:[l.jsxs("div",{className:Yt.top,children:[l.jsx("div",{className:Yt.footerColumnEl,children:l.jsxs("ul",{children:[l.jsx("h3",{children:"ПОМОЩЬ И ИНФОРМАЦИЯ"}),l.jsx("li",{children:"О ANSWEAR.ua"}),l.jsx("li",{children:"Правила магазина ANSWEAR.ua"}),l.jsx("li",{children:"Сотрудничество"}),l.jsx("li",{children:"Правила ANSWEARClub"}),l.jsx("li",{children:"Что нужно знать, покупая товар дороже 150 евро?"}),l.jsx("li",{children:"Возврат и рекламация"}),l.jsx("li",{children:"Часто задаваемые вопросы"}),l.jsx("li",{children:"Контакт"}),l.jsx("li",{children:"Корпоративная социальная ответственность"}),l.jsx("li",{children:"Блог ANSWEAR"}),l.jsx("li",{children:"Политика конфиденциальности"})]})}),l.jsx("div",{className:Yt.footerColumnEl,children:l.jsxs("ul",{children:[l.jsx("h3",{children:"ДОСТАВКА"}),l.jsx("li",{children:"В отделение Новая Почта"}),l.jsx("li",{children:"Курьером Meest ПОЧТА"})]})}),l.jsx("div",{className:Yt.footerColumnEl,id:Yt.usersInfo,children:l.jsxs("ul",{children:[l.jsx("h3",{children:"ОПЛАТА"}),l.jsx("li",{children:"Банковской картой"}),l.jsx("li",{children:"Наложенным платежом"})]})})]}),l.jsx("div",{className:Yt.footerBottom,children:l.jsxs("ul",{children:[l.jsx("li",{children:"Политика Конфиденциальности"}),l.jsx("li",{children:"Правила"}),l.jsx("li",{children:"Данные Компании"}),l.jsx("li",{children:"Все Кукис"}),l.jsx("li",{children:"Карта Сайта"})]})})]});const Bh="_aniamtionLoad_4tqx2_1",Xh="_animEffect_4tqx2_10",Rh="_title_4tqx2_19",Nh="_circle_4tqx2_28",zh="_animationLoad_4tqx2_1",bi={aniamtionLoad:Bh,animEffect:Xh,title:Rh,circle:Nh,animationLoad:zh},Mh=()=>l.jsx("div",{className:bi.aniamtionLoad,children:l.jsxs("div",{className:bi.animEffect,children:[l.jsx("div",{className:bi.title,children:"beauté"}),l.jsx("div",{className:bi.circle})]})}),Ih=()=>l.jsxs(w.Fragment,{children:[l.jsx(yh,{}),l.jsx("main",{children:l.jsx(w.Suspense,{fallback:l.jsx(Mh,{}),children:l.jsx(x1,{})})}),l.jsx(Ah,{}),l.jsx(Ph,{}),l.jsx(bh,{})]}),Uh="_banner_yakuo_1",$h="_bannetText_yakuo_17",Kh="_wrapper_yakuo_38",Zs={banner:Uh,bannetText:$h,wrapper:Kh},Vh="_dummy_1bz06_1",Hh="_animationLoadedCard_1bz06_1",Gh={dummy:Vh,animationLoadedCard:Hh},hc=(e,t)=>{const[n,r]=w.useState(e);w.useEffect(()=>{let o=()=>{let s=document.createElement("img");s.src=t,s.onload=function(){r(!0)}};return setTimeout(o,400),()=>{o=null}},[]);const i=l.jsx("div",{className:Gh.dummy});return[n,i]},Jh=w.memo(({img:e,textBool:t,text:n})=>{const[r,i]=hc(!1,e);return l.jsxs("div",{className:Zs.banner,children:[r?l.jsx("img",{src:e,alt:"banner"}):i,t&&l.jsx("div",{className:Zs.bannetText,children:l.jsx("div",{className:Zs.wrapper,children:typeof n=="object"?n.map(o=>l.jsx("p",{children:o},o)):n})})]})}),Zh="_wrapperCard_1868w_1",Yh="_sliderTop_1868w_6",Qh="_sliderBlock_1868w_12",qh="_titleSliderCategory_1868w_16",ev="_sliderBt_1868w_21",tv="_sliderHidden_1868w_36",nv="_sliderVisible_1868w_43",rv="_sliderRight_1868w_51",iv="_sliderLeft_1868w_56",ov="_linkedImage_1868w_60",sv="_lookBt_1868w_79",Fe={wrapperCard:Zh,sliderTop:Yh,sliderBlock:Qh,titleSliderCategory:qh,sliderBt:ev,sliderHidden:tv,sliderVisible:nv,sliderRight:rv,sliderLeft:iv,linkedImage:ov,lookBt:sv},av="_card_9hxwh_1",lv="_bottomCard_9hxwh_12",cv="_searchResult_9hxwh_18",uv="_heart_9hxwh_22",dv="_trashLogo_9hxwh_30",pv="_heartAdded_9hxwh_41",mv="_img_9hxwh_45",fv="_hiddenImgHover_9hxwh_50",gv="_name_9hxwh_78",hv="_cost_9hxwh_88",vv="_color_9hxwh_94",yv="_size_9hxwh_110",xv="_sliderAdaptiveCard_9hxwh_122",wv="_listCard_9hxwh_127",_v="_favoriteCard_9hxwh_158",_e={card:av,bottomCard:lv,searchResult:cv,heart:uv,trashLogo:dv,heartAdded:pv,img:mv,hiddenImgHover:fv,name:gv,cost:hv,color:vv,size:yv,sliderAdaptiveCard:xv,listCard:wv,favoriteCard:_v},jv="_windowPopUpSuccess_e6lfu_1",Sv="_emergeWindow_e6lfu_1",kv="_insideWindow_e6lfu_16",td={windowPopUpSuccess:jv,emergeWindow:Sv,insideWindow:kv},Dv=()=>l.jsx("div",{className:td.windowPopUpSuccess,children:l.jsx("div",{className:td.insideWindow,children:l.jsx(P,{to:"/favorite",children:l.jsxs("p",{children:["Товар добавлен в ",l.jsx("span",{children:'"Избранное"'})]})})})}),q0=ci({name:"favoriteProducts",initialState:{allFavAdded:[]},reducers:{addedFavor(e,t){if(e.allFavAdded.length>=0){if(e.allFavAdded.find(n=>n.id==t.payload.id))return;e.allFavAdded.push(t.payload)}},removeFavor(e,t){e.allFavAdded=e.allFavAdded.filter(n=>n.id!=t.payload.id)},growerSort(e){e.allFavAdded=e.allFavAdded.sort((t,n)=>+t.cost-+n.cost)},lowerSort(e){e.allFavAdded=e.allFavAdded.sort((t,n)=>+n.cost-+t.cost)}}}),Av=q0.reducer,{addedFavor:Cv,removeFavor:nd,growerSort:V4,lowerSort:H4}=q0.actions,Fv={list:"listCard",favorite:"favoriteCard",slider:"sliderAdaptiveCard",search:"searchResult"},em=w.memo(e=>{const[t,n]=w.useState(!1),[r,i]=hc(!1,e.img[0]),o=z0(),s=Ja(u=>u.favoriteProd.allFavAdded),a=()=>{s.find(u=>u.id==e.id)?o(nd(e)):(o(Cv(e)),n(!0))},c=()=>{o(nd(e)),n(!1)};return l.jsxs("div",{className:e.position?_e.card+" "+_e[Fv[e.position]]:_e.card,children:[t&&l.jsx(Dv,{}),e.flag=="home"?l.jsx("div",{onClick:a,className:s.find(u=>(u==null?void 0:u.id)==e.id)?_e.heart+" "+_e.heartAdded:_e.heart,children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"30px",height:"30px",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z",stroke:"#000000",strokeWidth:"0.552",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})}):l.jsx("div",{onClick:c,className:_e.trashLogo,children:l.jsxs("svg",{fill:"#707070",version:"1.1",id:"Capa_1",width:"50px",height:"50px",viewBox:"-281.3 -281.3 1047.60 1047.60",xmlSpace:"preserve",stroke:"#707070",strokeWidth:"0.00485",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsxs("g",{children:[" ",l.jsxs("g",{children:[" ",l.jsx("rect",{x:"67.224",width:"350.535",height:"71.81"})," ",l.jsx("path",{d:"M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"})," "]})," "]})," "]})]})}),r?l.jsxs(w.Fragment,{children:[l.jsx("div",{className:_e.img,children:l.jsxs(P,{to:"/"+e.link,children:[l.jsx("img",{src:e.img[0],alt:e.name,loading:"lazy"}),e.img.length>1?l.jsx("span",{className:_e.hiddenImgHover,children:l.jsx("img",{src:e.img[1],alt:e.name})}):""]})}),l.jsxs("div",{className:_e.bottomCard,children:[l.jsx("div",{className:_e.name,children:e.name}),l.jsxs("div",{className:_e.cost,children:[e.cost," Р"]}),l.jsx("div",{className:_e.color,children:l.jsx("ul",{children:e.color.map(u=>l.jsx("li",{style:{backgroundColor:`${u}`}},u))})}),l.jsx("div",{className:_e.size,children:l.jsx("ul",{children:e.size.map(u=>l.jsx("li",{children:u},u+e.name))})})]})]}):i]})}),G4=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),_r=w.memo(({dateCard:e,filterType:t,nameCategory:n,cat:r})=>{const[i,o]=w.useState(0),s=w.useRef();let a=w.useMemo(()=>t?e[t[0]][t[1]]:e,[e]),c=t?a.length:r=="commodity"?a.length-1:15;const u=()=>{i+s.current.offsetWidth>=0?o(0):o(f=>f+s.current.offsetWidth)},p=()=>{let f=s.current.offsetWidth;o(v=>v-f),i<=-(c*f)+window.innerWidth&&o(v=>-(c*f)+window.innerWidth-f)},g=w.useMemo(()=>(t?a:e).map((f,v)=>{if(v<=15)return l.jsx("div",{ref:s,className:Fe.wrapperCard,children:l.jsx(em,{id:f.id,flag:"home",position:"slider",img:f.img,color:f.color,name:f.name,cost:f.cost,size:f.size,link:f.link,description:f.description})},f.id)}),[]);return l.jsxs("div",{className:Fe.sliderBlock,children:[l.jsx("div",{className:Fe.titleSliderCategory,children:l.jsx("h3",{children:n})}),l.jsxs("div",{className:Fe.sliderTop,children:[l.jsx("div",{onClick:u,style:{visibility:i>=0?"hidden":"visible"},className:Fe.sliderLeft+" "+Fe.sliderBt,children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"32px",height:"32px",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M5 12H19M5 12L11 6M5 12L11 18",stroke:"#000000",strokeWidth:"0.624",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})}),l.jsx("div",{className:Fe.sliderHidden,children:l.jsxs("div",{className:Fe.sliderVisible,style:{transform:`translate3d(${i}px, 0, 0)`},children:[g,t?l.jsx("div",{className:Fe.linkedImage+" "+Fe.wrapperCard,children:l.jsxs(P,{to:`/${t[0]}/`+t[1],children:[l.jsx("img",{src:a[0].img[0],alt:t}),l.jsx("div",{className:Fe.lookBt,children:l.jsx("span",{children:"Посмотреть"})})]})}):""]})}),l.jsx("div",{onClick:p,className:Fe.sliderRight+" "+Fe.sliderBt,children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"32px",height:"32px",fill:"none",children:[l.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),l.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",l.jsx("path",{d:"M5 12H19M5 12L11 6M5 12L11 18",stroke:"#000000",strokeWidth:"0.624",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})})]})]})}),Dn={firstPoster:{img:"./picture/firstPoster2.webp",title:"ТОП-БРЕНДЫ -30% И БОЛЬШЕ",link:"/premium",color:"#e8e9eb",text:`
            Только до конца этого месяца!
        `},secondPoster:{img:"/picture/secondPoster2.webp",title:"FJALLRAVEN",link:"/outfits/fjallraven",color:"#cbe0c8ce",text:`
        Культовые рюкзаки KANKEN теперь в ассортименте! А также сумочки, аксессуары и коллекции одежды от шведского бренда. Сочетание высочайшего качества со скандинавским дизайном.
        `},threePoster:{img:"/picture/threePoster2.webp",title:"G-STAR RAW",link:"odejda/bezrukavki",color:"#ccc9af",text:`
        Black, Diamond Gregory, La Sportiva и др.
        `},fourPoster:{img:"/picture/fourPoster2.webp",title:"BEST COZY OUTFITS",link:"/outfits/bestcozy",color:"#fff",text:`
        Готовые модные истории от наших стилистов
        `},fivePoster:{img:"/picture/fivePoster2.webp",title:"XMAS BOUTIQUE",link:"/aksessuary",color:"#f2f2f2",text:`
        Праздники уже не так далеко, как кажется! Успей выбрать уникальные аксессуары! 
        `},sixPoster:{img:"/picture/sixPoster2.webp",title:"БИЖУТЕРИЯ ДО -70%",link:"/outfits/emporio",color:"#eaedcace",text:`
        Emporio Armani, Fossil, Diesel, Skagen, DKNY, Armani Exchange и др.
        `},sevenPoster:{img:"./picture/sevenPoster.png",title:"BLUGIRL BLUMARINE",link:"/outfits/SpiritofFreedom",color:"#f2f2f2",text:`
        Женственная игривость с ноткой самоиронии.
        `}},bv="_poster_yltuu_1",Lv="_leftPoster_yltuu_7",Wv="_posterLeftWrapper_yltuu_32",Ev="_rightPosterImg_yltuu_37",Li={poster:bv,leftPoster:Lv,posterLeftWrapper:Wv,rightPosterImg:Ev};function Ov(e){const t=document.getElementById("title");w.useEffect(()=>(t.innerHTML=e,()=>{t.innerHTML="beauté - Интернет-магазин женской одежды"}),[e])}const An=({elems:e})=>(Ov("Купить женскую одежду"),l.jsxs("section",{className:Li.poster,children:[l.jsx("div",{className:Li.leftPoster,style:{backgroundColor:e.color},children:l.jsxs("div",{className:Li.posterLeftWrapper,children:[l.jsx("h2",{children:e.title}),l.jsx("p",{children:e.text}),l.jsx(P,{to:e.link,children:"Посмотреть"})]})}),l.jsx("div",{className:Li.rightPosterImg,children:l.jsx("img",{src:e.img,alt:e.title})})]})),Tv="_categoryPortfolio_13ucy_1",Pv="_catTitle_13ucy_7",Bv="_catList_13ucy_14",Ys={categoryPortfolio:Tv,catTitle:Pv,catList:Bv},Xv="_categoryPortfolioCard_1ia16_1",Rv="_cardImg_1ia16_6",Nv="_bottom_1ia16_17",zv="_title_1ia16_22",Mv="_content_1ia16_28",Iv="_link_1ia16_34",Uv="_premiumCard_1ia16_53",wt={categoryPortfolioCard:Xv,cardImg:Rv,bottom:Nv,title:zv,content:Mv,link:Iv,premiumCard:Uv},Qs=e=>l.jsxs("div",{className:e.position?wt.categoryPortfolioCard+" "+wt.premiumCard:wt.categoryPortfolioCard,children:[l.jsx("div",{className:wt.cardImg,children:l.jsx("img",{src:e.image,alt:e.title})}),l.jsxs("div",{className:wt.bottom,children:[l.jsx("div",{className:wt.title,children:l.jsx("h3",{children:e.title})}),l.jsx("div",{className:wt.content,children:l.jsx("p",{children:e.content})}),l.jsx("div",{className:wt.link,children:l.jsx(P,{to:e.link,children:"Посмотреть"})})]})]}),$v=()=>l.jsxs("div",{className:Ys.categoryPortfolio,children:[l.jsx("div",{className:Ys.catTitle,children:l.jsx("h2",{children:"Категории"})}),l.jsxs("div",{className:Ys.catList,children:[l.jsx(Qs,{title:"СВИТЕРЫ И СВИТШОТЫ",image:"./picture/cat1.webp",content:"Уютный ассортимент со суперскидками",link:"/odejda/sviter"}),l.jsx(Qs,{title:"КУРТКИ И ПАЛЬТО",image:"./picture/cat2.webp",content:"Позаботься о верхних слоях",link:"/odejda/kurtky"}),l.jsx(Qs,{title:"ОБУВЬ",image:"./picture/cat3.webp",content:"Твоя новая пара - здесь!",link:"/obuv"})]})]}),Kv="_posterConteiner_1g7fp_1",Vv="_img_1g7fp_9",Hv="_content_1g7fp_24",Gv="_title_1g7fp_43",Jv="_text_1g7fp_56",Zv="_posterConteinerVideo_1g7fp_65",Cn={posterConteiner:Kv,img:Vv,content:Hv,title:Gv,text:Jv,posterConteinerVideo:Zv},qs=e=>l.jsxs("div",{className:e.type=="image"?Cn.posterConteiner:Cn.posterConteinerVideo,children:[l.jsx("div",{className:Cn.img,children:e.type=="image"?l.jsx("img",{src:e.img,alt:"Продукт "+e.title}):l.jsx("video",{poster:e.poster,muted:"muted",autoPlay:!0,loop:!0,children:l.jsx("source",{src:e.img,type:"video/mp4"})})}),l.jsxs("div",{className:Cn.content,children:[e.title&&l.jsx("div",{className:Cn.title,children:l.jsx("h3",{children:e.title})}),e.text&&l.jsx("div",{className:Cn.text,children:l.jsx("p",{children:e.text})}),e.type=="image"&&l.jsx(P,{to:e.link,children:"Посмотреть"})]})]}),Yv={second:[{img:"./picture/poster3window.webp",title:"КУРТКИ И ПАЛЬТО -30% И БОЛЬШЕ",text:"Утепляемся!",link:"odejda/kurtky"},{img:"./picture/poster4window.webp",title:"NATIVE",text:`Новаторские решения канадского бренда
            помогли создать уникальную одежду, которая
            успела обрести поклонников во всем мире.`,link:"/odejda/platya"},{img:"./picture/videoBanner2.mp4",title:"",text:"",link:"ewee2",notWorkingPoster:"./picture/posterVideoNotWorking1.webp"},{img:"./picture/banner.jpg",text:["NOT A SECRET","SALE ОТ -30%","И БОЛЬШЕ"]}]};let ge=Yv.second;const Qv=()=>{var t,n;const e=window.innerWidth;return l.jsxs(w.Fragment,{children:[l.jsx(Jh,{img:ge[3].img,text:ge[3].text,textBool:!0}),l.jsx(An,{elems:Dn.firstPoster}),l.jsx(_r,{dateCard:Le,filterType:["odejda","kofty"],nameCategory:"Новая коллекция кофт"}),l.jsx(An,{elems:Dn.secondPoster}),l.jsx(_r,{dateCard:Le,filterType:["odejda","platya"],nameCategory:"Новые платья"}),l.jsx($v,{}),l.jsx(An,{elems:Dn.fourPoster}),l.jsx(qs,{type:"image",img:ge[0].img,title:ge[0].title,text:ge[0].text,link:ge[0].link}),l.jsx(_r,{dateCard:Le,filterType:["odejda","bluzki"],nameCategory:'Хит продаж в категории: "Блузки"'}),l.jsx(An,{elems:Dn.threePoster}),e>600&&l.jsx(qs,{type:"video",poster:(t=ge[2])==null?void 0:t.notWorkingPoster,img:(n=ge[2])==null?void 0:n.img,title:ge[2].link.title,text:ge[2].text,link:ge[2].link}),l.jsx(_r,{dateCard:Le,filterType:["odejda","phutbolki"],nameCategory:"Футболки"}),l.jsx(An,{elems:Dn.sixPoster}),l.jsx(qs,{type:"image",img:ge[1].img,title:ge[1].title,text:ge[1].text,link:ge[1].link}),l.jsx(An,{elems:Dn.fivePoster}),l.jsx(_r,{dateCard:Le,filterType:["aksessuary","braslet"],nameCategory:"Браслеты"})]})},qv="_notFound_6q9hm_1",e4={notFound:qv},t4=()=>l.jsx("div",{className:e4.notFound,children:l.jsxs("span",{children:["При переходе на страницу произошла ошибка ","("]})}),n4="_outFit_1df61_1",r4="_image_1df61_9",i4="_outfitCompilationCards_1df61_24",o4="_titleoutfitCompilation_1df61_30",s4="_outfitCompilationCardsConteiner_1df61_35",a4="_notFound_1df61_42",l4="_mainPageLink_1df61_51",Qt={outFit:n4,image:r4,outfitCompilationCards:i4,titleoutfitCompilation:o4,outfitCompilationCardsConteiner:s4,notFound:a4,mainPageLink:l4},c4="_card_5tcgm_1",u4="_img_5tcgm_16",d4="_bottomInfo_5tcgm_27",p4="_name_5tcgm_34",m4="_cost_5tcgm_39",f4="_outfit_5tcgm_51",qt={card:c4,img:u4,bottomInfo:d4,name:p4,cost:m4,outfit:f4},g4=w.memo(e=>{const[t,n]=hc(!1,e.img);return l.jsx("div",{className:e.type?qt.card+" "+qt.outfit:qt.card,style:e.width&&{width:e.width,height:e.height},children:l.jsxs(P,{to:"/"+e.link,children:[l.jsx("div",{className:qt.img,children:t?l.jsx("img",{src:e.img,alt:e.name}):n}),l.jsxs("div",{className:qt.bottomInfo,children:[l.jsx("div",{className:qt.name,children:l.jsx("p",{children:e.name})}),l.jsx("div",{className:qt.cost,children:l.jsxs("span",{children:[e.cost," Р"]})})]})]})})}),ln={fjallraven:{image:"/picture/fjallraven.jpg",products:[12,76,84],title:"FJALLRAVEN"},bestcozy:{image:"/picture/bestcozy.jpg",products:[7,78,86,138],title:"BEST COZY OUTFITS"},emporio:{image:"/picture/sixPoster2.webp",products:[27,60,87,131],title:"On the top of the World"},feminine:{image:"/picture/outf4.jpg",products:[34,138,132,111],title:"Wild Feminine"},preppymood:{image:"/picture/outf5.jpg",products:[35,133,136],title:"Preppy Mood"},cozychic:{image:"/picture/outf6.jpg",products:[37,123,137],title:"Cozy chic"},QUEEN:{image:"/picture/outf7.jpg",products:[34,124,140],title:"V-QUEEN"},blue:{image:"/picture/outf8.jpg",products:[69,150,97,159],title:"I’m blue"},ROYALATTITUDE:{image:"/picture/outf9.jpg",products:[26,134,152,116],title:"ROYAL ATTITUDE"},FROMDREAMTODAWN:{image:"/picture/outf10.jpg",products:[27,53,122,161],title:"FROM DREAM TO DAWN"},SpiritofFreedom:{image:"/picture/outf11.jpg",products:[75,132,126],title:"Spirit of Freedom"},pinklove:{image:"/picture/outf12.jpg",products:[63,155,118,164],title:"Pink Love"}},h4="_locatonLine_m6t0l_1",v4={locatonLine:h4},tm=w.memo(({isCahngeLink:e})=>{const t=window.location.href.split("/").splice(3);return l.jsx("div",{className:v4.locatonLine,children:l.jsxs("ul",{children:[l.jsx(P,{to:"/",children:l.jsxs("li",{children:["beauté ",">"]})}),t[0].length?t.map((n,r)=>l.jsx(P,{to:`/${n}`,children:l.jsxs("li",{children:[ct!=null&&ct[n]?ct==null?void 0:ct[n].toLowerCase():n," ",">"]})},n+r)):""]})})}),y4=()=>{const{id:e}=s1();w.useEffect(()=>{window.scrollTo(0,0)},[]);const t=w.useMemo(()=>{try{let n={img:"",outfitProd:[],title:""},r=ln[e].products;n.title=ln[e].title,n.img=ln[e].image;for(let i=0;i<r.length;i++)n.outfitProd.push(rn[r[i]]);return n}catch{return[]}},[e]);return l.jsxs(w.Fragment,{children:[l.jsx(tm,{}),Object.keys(t).length>0?l.jsxs("div",{className:Qt.outFit,children:[l.jsx("div",{className:Qt.image,children:l.jsx("img",{src:t.img,alt:"outfit"})}),l.jsxs("div",{className:Qt.outfitCompilationCards,children:[l.jsx("div",{className:Qt.titleoutfitCompilation,children:l.jsx("h2",{children:t.title})}),l.jsx("div",{className:Qt.outfitCompilationCardsConteiner,children:t.outfitProd.map(n=>l.jsx(g4,{width:"calc(100% / 2 - 3%)",height:"auto",img:n.img,name:n.name,cost:n.cost,link:n.link,type:"outfit"},n.name))})]})]}):l.jsx("div",{className:Qt.notFound,children:l.jsxs("span",{children:["К сожалению, возникла ошибка при загрузке страницы.",l.jsx(P,{to:"/",children:l.jsx("span",{className:Qt.mainPageLink,children:"На Главную"})})]})})]})},x4="_listOutfits_15k1n_1",w4="_titleOutfit_15k1n_6",_4="_listProd_15k1n_10",ea={listOutfits:x4,titleOutfit:w4,listProd:_4},j4="_lazyLoad_t44r3_1",S4={lazyLoad:j4},k4=()=>l.jsx("div",{className:S4.lazyLoad}),D4=w.lazy(()=>Ce(()=>import("./OutfitListCard-eb05a41d.js"),["assets/OutfitListCard-eb05a41d.js","assets/OutfitListCard-fe10f96f.css"])),A4=()=>l.jsxs(w.Fragment,{children:[l.jsx(tm,{}),l.jsxs("div",{className:ea.listOutfits,children:[l.jsx("div",{className:ea.titleOutfit,children:l.jsx("h1",{children:"Аутфиты от beauté "})}),l.jsx("div",{className:ea.listProd,children:Object.keys(ln).map((e,t)=>{var n,r;return l.jsx(w.Suspense,{fallback:l.jsx(k4,{}),children:l.jsx(D4,{elems:ln[e],link:e},((n=ln[e])==null?void 0:n.title)+t)},((r=ln[e])==null?void 0:r.title)+t+t)})})]})]}),C4=w.lazy(()=>Ce(()=>import("./Favorite-f413e49b.js"),["assets/Favorite-f413e49b.js","assets/Favorite-a80fd921.css"])),F4=w.lazy(()=>Ce(()=>import("./LoginConfirm-837579ed.js"),["assets/LoginConfirm-837579ed.js","assets/LoginConfirm-2aa1d428.css"])),b4=w.lazy(()=>Ce(()=>import("./LoginRegistration-4fd75e98.js"),["assets/LoginRegistration-4fd75e98.js","assets/LoginRegistration-9633d9c9.css"])),L4=w.lazy(()=>Ce(()=>import("./Commodity-68995acd.js"),["assets/Commodity-68995acd.js","assets/Commodity-a153fb65.css"])),W4=w.lazy(()=>Ce(()=>import("./Basket-3427c108.js"),["assets/Basket-3427c108.js","assets/Basket-3d27549a.css"])),rd=w.lazy(()=>Ce(()=>import("./ListProducts-98d40f12.js"),["assets/ListProducts-98d40f12.js","assets/FilterProd-37d959f3.js","assets/FilterProd-e14e4da0.css","assets/ListProducts-121e952a.css"])),E4=w.lazy(()=>Ce(()=>import("./PremiumPage-3099738a.js"),["assets/PremiumPage-3099738a.js","assets/PremiumPage-d8540eba.css"])),Wi=w.lazy(()=>Ce(()=>import("./ConteinerInfo-8a18fc42.js"),["assets/ConteinerInfo-8a18fc42.js","assets/ConteinerInfo-ae478bc8.css"])),O4=w.lazy(()=>Ce(()=>import("./PaymentInfo-692d4f2b.js"),["assets/PaymentInfo-692d4f2b.js","assets/PaymentInfo-26a68d00.css"])),T4=w.lazy(()=>Ce(()=>import("./ExchangeCommodity-7c20c515.js"),["assets/ExchangeCommodity-7c20c515.js","assets/ExchangeCommodity-8b40c168.css"])),P4=w.lazy(()=>Ce(()=>import("./OrderInfo-7d71c4be.js"),["assets/OrderInfo-7d71c4be.js","assets/OrderInfo-72b33a07.css"])),B4=w.lazy(()=>Ce(()=>import("./Cooperation-603de6d1.js"),["assets/Cooperation-603de6d1.js","assets/Cooperation-6289446b.css"])),X4=w.lazy(()=>Ce(()=>import("./SearchResult-1ead55a1.js"),["assets/SearchResult-1ead55a1.js","assets/FilterProd-37d959f3.js","assets/FilterProd-e14e4da0.css","assets/SearchResult-15330dc2.css"]));function R4(){return l.jsx(_1,{children:l.jsxs(q,{path:"/",element:l.jsx(Ih,{}),children:[l.jsx(q,{index:!0,element:l.jsx(Qv,{})}),l.jsx(q,{path:"/:link",element:l.jsx(L4,{})}),Object.keys(Le).map((e,t)=>l.jsx(q,{path:`/${e}`,element:l.jsx(rd,{}),children:l.jsx(q,{path:`/${e}/:name`,element:l.jsx(rd,{})})},e+t)),l.jsx(q,{path:"/search",element:l.jsx(X4,{})}),l.jsx(q,{path:"/premium",element:l.jsx(E4,{})}),l.jsx(q,{path:"/favorite",element:l.jsx(C4,{})}),l.jsx(q,{path:"/Account",element:l.jsx(F4,{})}),l.jsx(q,{path:"/basket",element:l.jsx(W4,{})}),l.jsx(q,{path:"/outfits",element:l.jsx(A4,{})}),l.jsx(q,{path:"/outfits/:id",element:l.jsx(y4,{})}),l.jsx(q,{path:"/sotrudnichestvo",element:l.jsx(Wi,{children:l.jsx(B4,{})})}),l.jsx(q,{path:"/payment",element:l.jsx(Wi,{children:l.jsx(O4,{})})}),l.jsx(q,{path:"/order",element:l.jsx(Wi,{children:l.jsx(P4,{})})}),l.jsx(q,{path:"/exchange",element:l.jsx(Wi,{children:l.jsx(T4,{})})}),l.jsx(q,{path:"/Account/registration",element:l.jsx(b4,{})}),l.jsx(q,{path:"*",element:l.jsx(t4,{})})]})})}const nm=ci({name:"aboutPerson",initialState:{aboutPerson:{login:"",password:"",isActiveAccount:!1}},reducers:{createPassword(e,t){e.aboutPerson.password=t.payload},createLogin(e,t){e.aboutPerson.login=t.payload},isSingInTrue(e){e.aboutPerson.isActiveAccount=!0}}}),N4=nm.reducer,{createPassword:J4,createLogin:Z4,isSingInTrue:Y4}=nm.actions,rm=ci({name:"basketBD",initialState:{productsBasket:[],resultBasketElems:[]},reducers:{addBasketElement(e,t){e.resultBasketElems.concat(e.productsBasket),e.resultBasketElems.push(t.payload),!e.productsBasket.find(n=>n.id==t.payload.id)&&e.productsBasket.push(t.payload)},addCounterBasketElems(e,t){e.resultBasketElems.length||(e.resultBasketElems=e.resultBasketElems.concat(e.productsBasket)),e.resultBasketElems.push(t.payload)},removeCounterBasketElemsPop(e,t){if(e.resultBasketElems.length>1){let n;for(let r=e.resultBasketElems.length-1;r>0;r--)if(e.resultBasketElems[r].id==t.payload.id){n=r;break}e.resultBasketElems.splice(n,1)}},deleteSimilarElem(e,t){e.resultBasketElems=e.resultBasketElems.filter(n=>n.id!=t.payload.id),e.productsBasket=e.productsBasket.filter(n=>n.id!=t.payload.id)}}}),z4=rm.reducer,{addBasketElement:Q4,addCounterBasketElems:q4,removeCounterBasketElemsPop:ey,deleteSimilarElem:ty}=rm.actions;let jr=0;const im=ci({name:"recentlyProdLooked",initialState:{products:[]},reducers:{addProdRecently(e,t){e.products.find(n=>n.id==t.payload.id)||(e.products.length<6&&jr<6?e.products.push(t.payload):(e.products[jr]=t.payload,jr<6?jr++:jr=0))}}}),M4=im.reducer,{addProdRecently:ny}=im.actions,I4=H0({personInfo:N4,favoriteProd:Av,basketBD:z4,resultSearch:eh,recentlyProdLooked:M4}),U4=$2({reducer:I4});Za.createRoot(document.getElementById("root")).render(l.jsx(j3,{store:U4,children:l.jsx(C1,{children:l.jsx(R4,{})})}));export{rn as A,Jh as B,em as C,Dn as D,Qs as E,hc as F,k4 as G,An as H,G4 as I,P as L,$4 as N,t4 as P,_r as S,Ce as _,Ja as a,Z4 as b,J4 as c,Ov as d,g4 as e,Q4 as f,V4 as g,Cv as h,Y4 as i,l as j,nd as k,H4 as l,s1 as m,Le as n,d2 as o,ny as p,q4 as q,w as r,ey as s,ty as t,z0 as u,sr as v,p2 as w,K4 as x,ct as y,tm as z};
