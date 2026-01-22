(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function US(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},uc={},Uv={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),jS=Symbol.for("react.portal"),BS=Symbol.for("react.fragment"),zS=Symbol.for("react.strict_mode"),$S=Symbol.for("react.profiler"),qS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),GS=Symbol.for("react.forward_ref"),KS=Symbol.for("react.suspense"),WS=Symbol.for("react.memo"),QS=Symbol.for("react.lazy"),Cg=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,zv={};function qs(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||jv}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $v(){}$v.prototype=qs.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||jv}var Lf=Mf.prototype=new $v;Lf.constructor=Mf;Bv(Lf,qs.prototype);Lf.isPureReactComponent=!0;var kg=Array.isArray,qv=Object.prototype.hasOwnProperty,Ff={current:null},Hv={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qv.call(e,r)&&!Hv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:Ff.current}}function JS(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xg=/\/+/g;function Ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Bl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case jS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ih(o,0):r,kg(i)?(n="",t!=null&&(n=t.replace(xg,"$&/")+"/"),Bl(i,e,n,"",function(c){return c})):i!=null&&(Uf(i)&&(i=JS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ih(s,l);o+=Bl(s,e,n,u,i)}else if(u=YS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ih(s,l++),o+=Bl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var r=[],i=0;return Bl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},zl={transition:null},e1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:zl,ReactCurrentOwner:Ff};function Kv(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=qs;ne.Fragment=BS;ne.Profiler=$S;ne.PureComponent=Mf;ne.StrictMode=zS;ne.Suspense=KS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;ne.act=Kv;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ff.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qv.call(e,u)&&!Hv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qS,_context:t},t.Consumer=t};ne.createElement=Gv;ne.createFactory=function(t){var e=Gv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:GS,render:t}};ne.isValidElement=Uf;ne.lazy=function(t){return{$$typeof:QS,_payload:{_status:-1,_result:t},_init:ZS}};ne.memo=function(t,e){return{$$typeof:WS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};ne.unstable_act=Kv;ne.useCallback=function(t,e){return mt.current.useCallback(t,e)};ne.useContext=function(t){return mt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return mt.current.useEffect(t,e)};ne.useId=function(){return mt.current.useId()};ne.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return mt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};ne.useRef=function(t){return mt.current.useRef(t)};ne.useState=function(t){return mt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return mt.current.useTransition()};ne.version="18.3.1";Uv.exports=ne;var ae=Uv.exports;const t1=US(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=ae,r1=Symbol.for("react.element"),i1=Symbol.for("react.fragment"),s1=Object.prototype.hasOwnProperty,o1=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a1={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)s1.call(e,r)&&!a1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:r1,type:t,key:s,ref:o,props:i,_owner:o1.current}}uc.Fragment=i1;uc.jsx=Wv;uc.jsxs=Wv;Fv.exports=uc;var L=Fv.exports,ld={},Qv={exports:{}},Nt={},Yv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Y){var Z=q.length;q.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,Ne=q[ve];if(0<i(Ne,Y))q[ve]=Y,q[Z]=Ne,Z=ve;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],Z=q.pop();if(Z!==Y){q[0]=Z;e:for(var ve=0,Ne=q.length,Lr=Ne>>>1;ve<Lr;){var Vt=2*(ve+1)-1,Fr=q[Vt],$t=Vt+1,Bn=q[$t];if(0>i(Fr,Z))$t<Ne&&0>i(Bn,Fr)?(q[ve]=Bn,q[$t]=Z,ve=$t):(q[ve]=Fr,q[Vt]=Z,ve=Vt);else if($t<Ne&&0>i(Bn,Z))q[ve]=Bn,q[$t]=Z,ve=$t;else break e}}return Y}function i(q,Y){var Z=q.sortIndex-Y.sortIndex;return Z!==0?Z:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,I=!1,R=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(q){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=q)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function D(q){if(P=!1,T(q),!R)if(n(u)!==null)R=!0,vn(M);else{var Y=n(c);Y!==null&&eo(D,Y.startTime-q)}}function M(q,Y){R=!1,P&&(P=!1,w(y),y=-1),I=!0;var Z=m;try{for(T(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||q&&!C());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var Ne=ve(p.expirationTime<=Y);Y=t.unstable_now(),typeof Ne=="function"?p.callback=Ne:p===n(u)&&r(u),T(Y)}else r(u);p=n(u)}if(p!==null)var Lr=!0;else{var Vt=n(c);Vt!==null&&eo(D,Vt.startTime-Y),Lr=!1}return Lr}finally{p=null,m=Z,I=!1}}var F=!1,v=null,y=-1,E=5,A=-1;function C(){return!(t.unstable_now()-A<E)}function x(){if(v!==null){var q=t.unstable_now();A=q;var Y=!0;try{Y=v(!0,q)}finally{Y?S():(F=!1,v=null)}}else F=!1}var S;if(typeof _=="function")S=function(){_(x)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Pe=re.port2;re.port1.onmessage=x,S=function(){Pe.postMessage(null)}}else S=function(){b(x,0)};function vn(q){v=q,F||(F=!0,S())}function eo(q,Y){y=b(function(){q(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,vn(M))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return q()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=m;m=q;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(q,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,q){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Z+Ne,q={id:f++,callback:Y,priorityLevel:q,startTime:Z,expirationTime:Ne,sortIndex:-1},Z>ve?(q.sortIndex=Z,e(c,q),n(u)===null&&q===n(c)&&(P?(w(y),y=-1):P=!0,eo(D,Z-ve))):(q.sortIndex=Ne,e(u,q),R||I||(R=!0,vn(M))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var Y=m;return function(){var Z=m;m=Y;try{return q.apply(this,arguments)}finally{m=Z}}}})(Jv);Yv.exports=Jv;var l1=Yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=ae,kt=l1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xv=new Set,oa={};function ki(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(oa[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,c1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ng={},Dg={};function h1(t){return ud.call(Dg,t)?!0:ud.call(Ng,t)?!1:c1.test(t)?Dg[t]=!0:(Ng[t]=!0,!1)}function d1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f1(t,e,n,r){if(e===null||typeof e>"u"||d1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jf,Bf);Ze[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jf,Bf);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jf,Bf);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f1(e,n,i,r)&&(n=null),r||i===null?h1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),ew=Symbol.for("react.context"),qf=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),tw=Symbol.for("react.offscreen"),Vg=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Eh;function Do(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Th=!1;function Sh(t,e){if(!t||Th)return"";Th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function p1(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=Sh(t.type,!1),t;case 11:return t=Sh(t.type.render,!1),t;case 1:return t=Sh(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Ji:return"Portal";case cd:return"Profiler";case $f:return"StrictMode";case hd:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ew:return(t.displayName||"Context")+".Consumer";case Zv:return(t._context.displayName||"Context")+".Provider";case qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function m1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g1(t){var e=nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=g1(t))}function rw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pd(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iw(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function md(t,e){iw(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&gd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gd(t,e,n){(e!=="number"||mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Vo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function sw(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,aw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y1=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){y1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function lw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function uw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _1=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(_1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,cs=null,hs=null;function Fg(t){if(t=Ba(t)){if(typeof Ed!="function")throw Error(j(280));var e=t.stateNode;e&&(e=pc(e),Ed(t.stateNode,t.type,e))}}function cw(t){cs?hs?hs.push(t):hs=[t]:cs=t}function hw(){if(cs){var t=cs,e=hs;if(hs=cs=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function dw(t,e){return t(e)}function fw(){}var Ah=!1;function pw(t,e,n){if(Ah)return t(e,n);Ah=!0;try{return dw(t,e,n)}finally{Ah=!1,(cs!==null||hs!==null)&&(fw(),hw())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var r=pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Td=!1;if(kn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Td=!1}function v1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var zo=!1,gu=null,yu=!1,Sd=null,w1={onError:function(t){zo=!0,gu=t}};function I1(t,e,n,r,i,s,o,l,u){zo=!1,gu=null,v1.apply(w1,arguments)}function E1(t,e,n,r,i,s,o,l,u){if(I1.apply(this,arguments),zo){if(zo){var c=gu;zo=!1,gu=null}else throw Error(j(198));yu||(yu=!0,Sd=c)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ug(t){if(xi(t)!==t)throw Error(j(188))}function T1(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),t;if(s===r)return Ug(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function gw(t){return t=T1(t),t!==null?yw(t):null}function yw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yw(t);if(e!==null)return e;t=t.sibling}return null}var _w=kt.unstable_scheduleCallback,jg=kt.unstable_cancelCallback,S1=kt.unstable_shouldYield,A1=kt.unstable_requestPaint,De=kt.unstable_now,R1=kt.unstable_getCurrentPriorityLevel,Kf=kt.unstable_ImmediatePriority,vw=kt.unstable_UserBlockingPriority,_u=kt.unstable_NormalPriority,P1=kt.unstable_LowPriority,ww=kt.unstable_IdlePriority,cc=null,dn=null;function C1(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:N1,k1=Math.log,x1=Math.LN2;function N1(t){return t>>>=0,t===0?32:31-(k1(t)/x1|0)|0}var wl=64,Il=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bo(l):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function D1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=D1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function Rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function b1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Ew(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tw,Qf,Sw,Aw,Rw,Rd=!1,El=[],cr=null,hr=null,dr=null,ua=new Map,ca=new Map,tr=[],O1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bg(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function M1(t,e,n,r,i){switch(e){case"focusin":return cr=wo(cr,t,e,n,r,i),!0;case"dragenter":return hr=wo(hr,t,e,n,r,i),!0;case"mouseover":return dr=wo(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ua.set(s,wo(ua.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,wo(ca.get(s)||null,t,e,n,r,i)),!0}return!1}function Pw(t){var e=ei(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=mw(n),e!==null){t.blockedOn=e,Rw(t.priority,function(){Sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Id=r,n.target.dispatchEvent(r),Id=null}else return e=Ba(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function zg(t,e,n){$l(t)&&n.delete(e)}function L1(){Rd=!1,cr!==null&&$l(cr)&&(cr=null),hr!==null&&$l(hr)&&(hr=null),dr!==null&&$l(dr)&&(dr=null),ua.forEach(zg),ca.forEach(zg)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,L1)))}function ha(t){function e(i){return Io(i,t)}if(0<El.length){Io(El[0],t);for(var n=1;n<El.length;n++){var r=El[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Io(cr,t),hr!==null&&Io(hr,t),dr!==null&&Io(dr,t),ua.forEach(e),ca.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Pw(n),n.blockedOn===null&&tr.shift()}var ds=Ln.ReactCurrentBatchConfig,wu=!0;function F1(t,e,n,r){var i=de,s=ds.transition;ds.transition=null;try{de=1,Yf(t,e,n,r)}finally{de=i,ds.transition=s}}function U1(t,e,n,r){var i=de,s=ds.transition;ds.transition=null;try{de=4,Yf(t,e,n,r)}finally{de=i,ds.transition=s}}function Yf(t,e,n,r){if(wu){var i=Pd(t,e,n,r);if(i===null)Mh(t,e,r,Iu,n),Bg(t,r);else if(M1(i,t,e,n,r))r.stopPropagation();else if(Bg(t,r),e&4&&-1<O1.indexOf(t)){for(;i!==null;){var s=Ba(i);if(s!==null&&Tw(s),s=Pd(t,e,n,r),s===null&&Mh(t,e,r,Iu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var Iu=null;function Pd(t,e,n,r){if(Iu=null,t=Gf(r),t=ei(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Iu=t,null}function Cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R1()){case Kf:return 1;case vw:return 4;case _u:case P1:return 16;case ww:return 536870912;default:return 16}default:return 16}}var ar=null,Jf=null,ql=null;function kw(){if(ql)return ql;var t,e=Jf,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ql=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function $g(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:$g,this.isPropagationStopped=$g,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=Dt(Hs),ja=Re({},Hs,{view:0,detail:0}),j1=Dt(ja),Ph,Ch,Eo,hc=Re({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Ph=t.screenX-Eo.screenX,Ch=t.screenY-Eo.screenY):Ch=Ph=0,Eo=t),Ph)},movementY:function(t){return"movementY"in t?t.movementY:Ch}}),qg=Dt(hc),B1=Re({},hc,{dataTransfer:0}),z1=Dt(B1),$1=Re({},ja,{relatedTarget:0}),kh=Dt($1),q1=Re({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),H1=Dt(q1),G1=Re({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K1=Dt(G1),W1=Re({},Hs,{data:0}),Hg=Dt(W1),Q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J1[t])?!!e[t]:!1}function Zf(){return X1}var Z1=Re({},ja,{key:function(t){if(t.key){var e=Q1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eA=Dt(Z1),tA=Re({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Dt(tA),nA=Re({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),rA=Dt(nA),iA=Re({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sA=Dt(iA),oA=Re({},hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=Dt(oA),lA=[9,13,27,32],ep=kn&&"CompositionEvent"in window,$o=null;kn&&"documentMode"in document&&($o=document.documentMode);var uA=kn&&"TextEvent"in window&&!$o,xw=kn&&(!ep||$o&&8<$o&&11>=$o),Kg=" ",Wg=!1;function Nw(t,e){switch(t){case"keyup":return lA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function cA(t,e){switch(t){case"compositionend":return Dw(e);case"keypress":return e.which!==32?null:(Wg=!0,Kg);case"textInput":return t=e.data,t===Kg&&Wg?null:t;default:return null}}function hA(t,e){if(Zi)return t==="compositionend"||!ep&&Nw(t,e)?(t=kw(),ql=Jf=ar=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xw&&e.locale!=="ko"?null:e.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dA[t.type]:e==="textarea"}function Vw(t,e,n,r){cw(r),e=Eu(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,da=null;function fA(t){qw(t,0)}function dc(t){var e=ns(t);if(rw(e))return t}function pA(t,e){if(t==="change")return e}var bw=!1;if(kn){var xh;if(kn){var Nh="oninput"in document;if(!Nh){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),Nh=typeof Yg.oninput=="function"}xh=Nh}else xh=!1;bw=xh&&(!document.documentMode||9<document.documentMode)}function Jg(){qo&&(qo.detachEvent("onpropertychange",Ow),da=qo=null)}function Ow(t){if(t.propertyName==="value"&&dc(da)){var e=[];Vw(e,da,t,Gf(t)),pw(fA,e)}}function mA(t,e,n){t==="focusin"?(Jg(),qo=e,da=n,qo.attachEvent("onpropertychange",Ow)):t==="focusout"&&Jg()}function gA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(da)}function yA(t,e){if(t==="click")return dc(e)}function _A(t,e){if(t==="input"||t==="change")return dc(e)}function vA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:vA;function fa(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ud.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zg(t,e){var n=Xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xg(n)}}function Mw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lw(){for(var t=window,e=mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mu(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wA(t){var e=Lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mw(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zg(n,s);var o=Zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IA=kn&&"documentMode"in document&&11>=document.documentMode,es=null,Cd=null,Ho=null,kd=!1;function ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||es==null||es!==mu(r)||(r=es,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&fa(Ho,r)||(Ho=r,r=Eu(Cd,"onSelect"),0<r.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Dh={},Fw={};kn&&(Fw=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function fc(t){if(Dh[t])return Dh[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fw)return Dh[t]=e[n];return t}var Uw=fc("animationend"),jw=fc("animationiteration"),Bw=fc("animationstart"),zw=fc("transitionend"),$w=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){$w.set(t,e),ki(e,[t])}for(var Vh=0;Vh<ty.length;Vh++){var bh=ty[Vh],EA=bh.toLowerCase(),TA=bh[0].toUpperCase()+bh.slice(1);Dr(EA,"on"+TA)}Dr(Uw,"onAnimationEnd");Dr(jw,"onAnimationIteration");Dr(Bw,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(zw,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function ny(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,E1(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ny(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ny(i,l,c),s=u}}}if(yu)throw t=Sd,yu=!1,Sd=null,t}function ye(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var r=t+"__bubble";n.has(r)||(Hw(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),Hw(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Al]){t[Al]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(SA.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,Oh("selectionchange",!1,e))}}function Hw(t,e,n,r){switch(Cw(e)){case 1:var i=F1;break;case 4:i=U1;break;default:i=Yf}n=i.bind(null,e,n,t),i=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}pw(function(){var c=s,f=Gf(n),p=[];e:{var m=$w.get(t);if(m!==void 0){var I=Xf,R=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":I=eA;break;case"focusin":R="focus",I=kh;break;case"focusout":R="blur",I=kh;break;case"beforeblur":case"afterblur":I=kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=rA;break;case Uw:case jw:case Bw:I=H1;break;case zw:I=sA;break;case"scroll":I=j1;break;case"wheel":I=aA;break;case"copy":case"cut":case"paste":I=K1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Gg}var P=(e&4)!==0,b=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,T;_!==null;){T=_;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,w!==null&&(D=la(_,w),D!=null&&P.push(ma(_,D,T)))),b)break;_=_.return}0<P.length&&(m=new I(m,R,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Id&&(R=n.relatedTarget||n.fromElement)&&(ei(R)||R[xn]))break e;if((I||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=c,R=R?ei(R):null,R!==null&&(b=xi(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(P=qg,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Gg,D="onPointerLeave",w="onPointerEnter",_="pointer"),b=I==null?m:ns(I),T=R==null?m:ns(R),m=new P(D,_+"leave",I,n,f),m.target=b,m.relatedTarget=T,D=null,ei(f)===c&&(P=new P(w,_+"enter",R,n,f),P.target=T,P.relatedTarget=b,D=P),b=D,I&&R)t:{for(P=I,w=R,_=0,T=P;T;T=Li(T))_++;for(T=0,D=w;D;D=Li(D))T++;for(;0<_-T;)P=Li(P),_--;for(;0<T-_;)w=Li(w),T--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=Li(P),w=Li(w)}P=null}else P=null;I!==null&&ry(p,m,I,P,!1),R!==null&&b!==null&&ry(p,b,R,P,!0)}}e:{if(m=c?ns(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=pA;else if(Qg(m))if(bw)M=_A;else{M=gA;var F=mA}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=yA);if(M&&(M=M(t,c))){Vw(p,M,n,f);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&gd(m,"number",m.value)}switch(F=c?ns(c):window,t){case"focusin":(Qg(F)||F.contentEditable==="true")&&(es=F,Cd=c,Ho=null);break;case"focusout":Ho=Cd=es=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,ey(p,n,f);break;case"selectionchange":if(IA)break;case"keydown":case"keyup":ey(p,n,f)}var v;if(ep)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zi?Nw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xw&&n.locale!=="ko"&&(Zi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zi&&(v=kw()):(ar=f,Jf="value"in ar?ar.value:ar.textContent,Zi=!0)),F=Eu(c,y),0<F.length&&(y=new Hg(y,t,null,n,f),p.push({event:y,listeners:F}),v?y.data=v:(v=Dw(n),v!==null&&(y.data=v)))),(v=uA?cA(t,n):hA(t,n))&&(c=Eu(c,"onBeforeInput"),0<c.length&&(f=new Hg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}qw(p,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=la(t,n),s!=null&&r.unshift(ma(t,s,i)),s=la(t,e),s!=null&&r.push(ma(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ry(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=la(n,s),u!=null&&o.unshift(ma(n,u,l))):i||(u=la(n,s),u!=null&&o.push(ma(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AA=/\r\n?/g,RA=/\u0000|\uFFFD/g;function iy(t){return(typeof t=="string"?t:""+t).replace(AA,`
`).replace(RA,"")}function Rl(t,e,n){if(e=iy(e),iy(t)!==e&&n)throw Error(j(425))}function Tu(){}var xd=null,Nd=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,PA=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(t){return sy.resolve(null).then(t).catch(kA)}:Vd;function kA(t){setTimeout(function(){throw t})}function Lh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ha(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),un="__reactFiber$"+Gs,ga="__reactProps$"+Gs,xn="__reactContainer$"+Gs,bd="__reactEvents$"+Gs,xA="__reactListeners$"+Gs,NA="__reactHandles$"+Gs;function ei(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oy(t);t!==null;){if(n=t[un])return n;t=oy(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[un]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function pc(t){return t[ga]||null}var Od=[],rs=-1;function Vr(t){return{current:t}}function _e(t){0>rs||(t.current=Od[rs],Od[rs]=null,rs--)}function me(t,e){rs++,Od[rs]=t.current,t.current=e}var Rr={},lt=Vr(Rr),wt=Vr(!1),di=Rr;function Es(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Su(){_e(wt),_e(lt)}function ay(t,e,n){if(lt.current!==Rr)throw Error(j(168));me(lt,e),me(wt,n)}function Gw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,m1(t)||"Unknown",i));return Re({},n,r)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,di=lt.current,me(lt,t),me(wt,wt.current),!0}function ly(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Gw(t,e,di),r.__reactInternalMemoizedMergedChildContext=t,_e(wt),_e(lt),me(lt,t)):_e(wt),me(wt,n)}var In=null,mc=!1,Fh=!1;function Kw(t){In===null?In=[t]:In.push(t)}function DA(t){mc=!0,Kw(t)}function br(){if(!Fh&&In!==null){Fh=!0;var t=0,e=de;try{var n=In;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,mc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),_w(Kf,br),i}finally{de=e,Fh=!1}}return null}var is=[],ss=0,Ru=null,Pu=0,bt=[],Ot=0,fi=null,Tn=1,Sn="";function Hr(t,e){is[ss++]=Pu,is[ss++]=Ru,Ru=t,Pu=e}function Ww(t,e,n){bt[Ot++]=Tn,bt[Ot++]=Sn,bt[Ot++]=fi,fi=t;var r=Tn;t=Sn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Jt(e)+i|n<<i|r,Sn=s+t}else Tn=1<<s|n<<i|r,Sn=t}function np(t){t.return!==null&&(Hr(t,1),Ww(t,1,0))}function rp(t){for(;t===Ru;)Ru=is[--ss],is[ss]=null,Pu=is[--ss],is[ss]=null;for(;t===fi;)fi=bt[--Ot],bt[Ot]=null,Sn=bt[--Ot],bt[Ot]=null,Tn=bt[--Ot],bt[Ot]=null}var Ct=null,Rt=null,Ie=!1,Wt=null;function Qw(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,Rt=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Tn,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,Rt=null,!0):!1;default:return!1}}function Md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ld(t){if(Ie){var e=Rt;if(e){var n=e;if(!uy(t,e)){if(Md(t))throw Error(j(418));e=fr(n.nextSibling);var r=Ct;e&&uy(t,e)?Qw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ct=t)}}else{if(Md(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ie=!1,Ct=t}}}function cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Pl(t){if(t!==Ct)return!1;if(!Ie)return cy(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Rt)){if(Md(t))throw Yw(),Error(j(418));for(;e;)Qw(t,e),e=fr(e.nextSibling)}if(cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Ct?fr(t.stateNode.nextSibling):null;return!0}function Yw(){for(var t=Rt;t;)t=fr(t.nextSibling)}function Ts(){Rt=Ct=null,Ie=!1}function ip(t){Wt===null?Wt=[t]:Wt.push(t)}var VA=Ln.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hy(t){var e=t._init;return e(t._payload)}function Jw(t){function e(w,_){if(t){var T=w.deletions;T===null?(w.deletions=[_],w.flags|=16):T.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=yr(w,_),w.index=0,w.sibling=null,w}function s(w,_,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<_?(w.flags|=2,_):T):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,T,D){return _===null||_.tag!==6?(_=Hh(T,w.mode,D),_.return=w,_):(_=i(_,T),_.return=w,_)}function u(w,_,T,D){var M=T.type;return M===Xi?f(w,_,T.props.children,D,T.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zn&&hy(M)===_.type)?(D=i(_,T.props),D.ref=To(w,_,T),D.return=w,D):(D=Xl(T.type,T.key,T.props,null,w.mode,D),D.ref=To(w,_,T),D.return=w,D)}function c(w,_,T,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Gh(T,w.mode,D),_.return=w,_):(_=i(_,T.children||[]),_.return=w,_)}function f(w,_,T,D,M){return _===null||_.tag!==7?(_=oi(T,w.mode,D,M),_.return=w,_):(_=i(_,T),_.return=w,_)}function p(w,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Hh(""+_,w.mode,T),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return T=Xl(_.type,_.key,_.props,null,w.mode,T),T.ref=To(w,null,_),T.return=w,T;case Ji:return _=Gh(_,w.mode,T),_.return=w,_;case Zn:var D=_._init;return p(w,D(_._payload),T)}if(Vo(_)||_o(_))return _=oi(_,w.mode,T,null),_.return=w,_;Cl(w,_)}return null}function m(w,_,T,D){var M=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(w,_,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:return T.key===M?u(w,_,T,D):null;case Ji:return T.key===M?c(w,_,T,D):null;case Zn:return M=T._init,m(w,_,M(T._payload),D)}if(Vo(T)||_o(T))return M!==null?null:f(w,_,T,D,null);Cl(w,T)}return null}function I(w,_,T,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(T)||null,l(_,w,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case yl:return w=w.get(D.key===null?T:D.key)||null,u(_,w,D,M);case Ji:return w=w.get(D.key===null?T:D.key)||null,c(_,w,D,M);case Zn:var F=D._init;return I(w,_,T,F(D._payload),M)}if(Vo(D)||_o(D))return w=w.get(T)||null,f(_,w,D,M,null);Cl(_,D)}return null}function R(w,_,T,D){for(var M=null,F=null,v=_,y=_=0,E=null;v!==null&&y<T.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var A=m(w,v,T[y],D);if(A===null){v===null&&(v=E);break}t&&v&&A.alternate===null&&e(w,v),_=s(A,_,y),F===null?M=A:F.sibling=A,F=A,v=E}if(y===T.length)return n(w,v),Ie&&Hr(w,y),M;if(v===null){for(;y<T.length;y++)v=p(w,T[y],D),v!==null&&(_=s(v,_,y),F===null?M=v:F.sibling=v,F=v);return Ie&&Hr(w,y),M}for(v=r(w,v);y<T.length;y++)E=I(v,w,y,T[y],D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),F===null?M=E:F.sibling=E,F=E);return t&&v.forEach(function(C){return e(w,C)}),Ie&&Hr(w,y),M}function P(w,_,T,D){var M=_o(T);if(typeof M!="function")throw Error(j(150));if(T=M.call(T),T==null)throw Error(j(151));for(var F=M=null,v=_,y=_=0,E=null,A=T.next();v!==null&&!A.done;y++,A=T.next()){v.index>y?(E=v,v=null):E=v.sibling;var C=m(w,v,A.value,D);if(C===null){v===null&&(v=E);break}t&&v&&C.alternate===null&&e(w,v),_=s(C,_,y),F===null?M=C:F.sibling=C,F=C,v=E}if(A.done)return n(w,v),Ie&&Hr(w,y),M;if(v===null){for(;!A.done;y++,A=T.next())A=p(w,A.value,D),A!==null&&(_=s(A,_,y),F===null?M=A:F.sibling=A,F=A);return Ie&&Hr(w,y),M}for(v=r(w,v);!A.done;y++,A=T.next())A=I(v,w,y,A.value,D),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?y:A.key),_=s(A,_,y),F===null?M=A:F.sibling=A,F=A);return t&&v.forEach(function(x){return e(w,x)}),Ie&&Hr(w,y),M}function b(w,_,T,D){if(typeof T=="object"&&T!==null&&T.type===Xi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:e:{for(var M=T.key,F=_;F!==null;){if(F.key===M){if(M=T.type,M===Xi){if(F.tag===7){n(w,F.sibling),_=i(F,T.props.children),_.return=w,w=_;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zn&&hy(M)===F.type){n(w,F.sibling),_=i(F,T.props),_.ref=To(w,F,T),_.return=w,w=_;break e}n(w,F);break}else e(w,F);F=F.sibling}T.type===Xi?(_=oi(T.props.children,w.mode,D,T.key),_.return=w,w=_):(D=Xl(T.type,T.key,T.props,null,w.mode,D),D.ref=To(w,_,T),D.return=w,w=D)}return o(w);case Ji:e:{for(F=T.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(w,_.sibling),_=i(_,T.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Gh(T,w.mode,D),_.return=w,w=_}return o(w);case Zn:return F=T._init,b(w,_,F(T._payload),D)}if(Vo(T))return R(w,_,T,D);if(_o(T))return P(w,_,T,D);Cl(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,T),_.return=w,w=_):(n(w,_),_=Hh(T,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return b}var Ss=Jw(!0),Xw=Jw(!1),Cu=Vr(null),ku=null,os=null,sp=null;function op(){sp=os=ku=null}function ap(t){var e=Cu.current;_e(Cu),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){ku=t,sp=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(ku===null)throw Error(j(308));os=t,ku.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var ti=null;function lp(t){ti===null?ti=[t]:ti.push(t)}function Zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wf(t,n)}}function dy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,I=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(I,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(I,p,m):R,m==null)break e;p=Re({},p,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=p):f=f.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=p}}function fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var za={},fn=Vr(za),ya=Vr(za),_a=Vr(za);function ni(t){if(t===za)throw Error(j(174));return t}function cp(t,e){switch(me(_a,e),me(ya,t),me(fn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}_e(fn),me(fn,e)}function As(){_e(fn),_e(ya),_e(_a)}function tI(t){ni(_a.current);var e=ni(fn.current),n=_d(e,t.type);e!==n&&(me(ya,t),me(fn,n))}function hp(t){ya.current===t&&(_e(fn),_e(ya))}var Te=Vr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uh=[];function dp(){for(var t=0;t<Uh.length;t++)Uh[t]._workInProgressVersionPrimary=null;Uh.length=0}var Kl=Ln.ReactCurrentDispatcher,jh=Ln.ReactCurrentBatchConfig,pi=0,Ae=null,je=null,Ge=null,Du=!1,Go=!1,va=0,bA=0;function tt(){throw Error(j(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,s){if(pi=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?FA:UA,t=n(r,i),Go){s=0;do{if(Go=!1,va=0,25<=s)throw Error(j(301));s+=1,Ge=je=null,e.updateQueue=null,Kl.current=jA,t=n(r,i)}while(Go)}if(Kl.current=Vu,e=je!==null&&je.next!==null,pi=0,Ge=je=Ae=null,Du=!1,e)throw Error(j(300));return t}function mp(){var t=va!==0;return va=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ae.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function zt(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ge===null?Ae.memoizedState:Ge.next;if(e!==null)Ge=e,je=t;else{if(t===null)throw Error(j(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?Ae.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function wa(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((pi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ae.lanes|=f,mi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nI(){}function rI(t,e){var n=Ae,r=zt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,gp(oI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ia(9,sI.bind(null,n,r,i,e),void 0,null),We===null)throw Error(j(349));pi&30||iI(n,e,i)}return i}function iI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sI(t,e,n,r){e.value=n,e.getSnapshot=r,aI(e)&&lI(t)}function oI(t,e,n){return n(function(){aI(e)&&lI(t)})}function aI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function lI(t){var e=Nn(t,1);e!==null&&Xt(e,t,1,-1)}function py(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=LA.bind(null,Ae,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uI(){return zt().memoizedState}function Wl(t,e,n,r){var i=an();Ae.flags|=t,i.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){i.memoizedState=Ia(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Ia(1|e,n,s,r)}function my(t,e){return Wl(8390656,8,t,e)}function gp(t,e){return gc(2048,8,t,e)}function cI(t,e){return gc(4,2,t,e)}function hI(t,e){return gc(4,4,t,e)}function dI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fI(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,dI.bind(null,e,t),n)}function yp(){}function pI(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mI(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gI(t,e,n){return pi&21?(tn(n,e)||(n=Iw(),Ae.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function OA(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=jh.transition;jh.transition={};try{t(!1),e()}finally{de=n,jh.transition=r}}function yI(){return zt().memoizedState}function MA(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_I(t))vI(e,n);else if(n=Zw(t,e,n,r),n!==null){var i=ft();Xt(n,t,r,i),wI(n,e,r)}}function LA(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_I(t))vI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,lp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Zw(t,e,i,r),n!==null&&(i=ft(),Xt(n,t,r,i),wI(n,e,r))}}function _I(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function vI(t,e){Go=Du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wf(t,n)}}var Vu={readContext:Bt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},FA={readContext:Bt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:my,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,dI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MA.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:py,useDebugValue:yp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=py(!1),e=t[0];return t=OA.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=an();if(Ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),We===null)throw Error(j(349));pi&30||iI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,my(oI.bind(null,r,s,t),[t]),r.flags|=2048,Ia(9,sI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=We.identifierPrefix;if(Ie){var n=Sn,r=Tn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UA={readContext:Bt,useCallback:pI,useContext:Bt,useEffect:gp,useImperativeHandle:fI,useInsertionEffect:cI,useLayoutEffect:hI,useMemo:mI,useReducer:Bh,useRef:uI,useState:function(){return Bh(wa)},useDebugValue:yp,useDeferredValue:function(t){var e=zt();return gI(e,je.memoizedState,t)},useTransition:function(){var t=Bh(wa)[0],e=zt().memoizedState;return[t,e]},useMutableSource:nI,useSyncExternalStore:rI,useId:yI,unstable_isNewReconciler:!1},jA={readContext:Bt,useCallback:pI,useContext:Bt,useEffect:gp,useImperativeHandle:fI,useInsertionEffect:cI,useLayoutEffect:hI,useMemo:mI,useReducer:zh,useRef:uI,useState:function(){return zh(wa)},useDebugValue:yp,useDeferredValue:function(t){var e=zt();return je===null?e.memoizedState=t:gI(e,je.memoizedState,t)},useTransition:function(){var t=zh(wa)[0],e=zt().memoizedState;return[t,e]},useMutableSource:nI,useSyncExternalStore:rI,useId:yI,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=gr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Xt(e,t,i,r),Gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=gr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Xt(e,t,i,r),Gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=gr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(Xt(e,t,r,n),Gl(e,t,r))}};function gy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function II(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=It(e)?di:lt.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=It(e)?di:lt.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yc.enqueueReplaceState(i,i.state,null),xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=p1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BA=typeof WeakMap=="function"?WeakMap:Map;function EI(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ou||(Ou=!0,Jd=r),Bd(t,e)},n}function TI(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tR.bind(null,t,e,n),e.then(t,t))}function vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var zA=Ln.ReactCurrentOwner,_t=!1;function ht(t,e,n,r){e.child=t===null?Xw(e,null,n,r):Ss(e,t.child,n,r)}function Iy(t,e,n,r,i){n=n.render;var s=e.ref;return fs(e,i),r=pp(t,e,n,r,s,i),n=mp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ie&&n&&np(e),e.flags|=1,ht(t,e,r,i),e.child)}function Ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,SI(t,e,s,r,i)):(t=Xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function SI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fa(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return zd(t,e,n,r,i)}function AI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ls,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ls,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(ls,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(ls,St),St|=r;return ht(t,e,i,n),e.child}function RI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,r,i){var s=It(n)?di:lt.current;return s=Es(e,s),fs(e,i),n=pp(t,e,n,r,s,i),r=mp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ie&&r&&np(e),e.flags|=1,ht(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(It(n)){var s=!0;Au(e)}else s=!1;if(fs(e,i),e.stateNode===null)Ql(t,e),II(e,n,r),jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=It(n)?di:lt.current,c=Es(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&yy(e,o,r,c),er=!1;var m=e.memoizedState;o.state=m,xu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||wt.current||er?(typeof f=="function"&&(Ud(e,n,f,r),u=e.memoizedState),(l=er||gy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,eI(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ht(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=It(n)?di:lt.current,u=Es(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&yy(e,o,r,u),er=!1,m=e.memoizedState,o.state=m,xu(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||wt.current||er?(typeof I=="function"&&(Ud(e,n,I,r),R=e.memoizedState),(c=er||gy(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return $d(t,e,n,r,s,i)}function $d(t,e,n,r,i,s){RI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ly(e,n,!1),Dn(t,e,s);r=e.stateNode,zA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&ly(e,n,!0),e.child}function PI(t){var e=t.stateNode;e.pendingContext?ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ay(t,e.context,!1),cp(t,e.containerInfo)}function Sy(t,e,n,r,i){return Ts(),ip(i),e.flags|=256,ht(t,e,n,r),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function CI(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Te,i&1),t===null)return Ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=qd,t):_p(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $A(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yr(l,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qd,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _p(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kl(t,e,n,r){return r!==null&&ip(r),Ss(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $A(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$h(Error(j(422))),kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wc({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=qd,s);if(!(e.mode&1))return kl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=$h(s,r,void 0),kl(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Xt(r,t,i,-1))}return Sp(),r=$h(Error(j(421))),kl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=fr(i.nextSibling),Ct=e,Ie=!0,Wt=null,t!==null&&(bt[Ot++]=Tn,bt[Ot++]=Sn,bt[Ot++]=fi,Tn=t.id,Sn=t.overflow,fi=e),e=_p(e,r.children),e.flags|=4096,e)}function Ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fd(t.return,e,n)}function qh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ay(t,n,e);else if(t.tag===19)Ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qh(e,!0,n,null,s);break;case"together":qh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qA(t,e,n){switch(e.tag){case 3:PI(e),Ts();break;case 5:tI(e);break;case 1:It(e.type)&&Au(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?CI(t,e,n):(me(Te,Te.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,AI(t,e,n)}return Dn(t,e,n)}var xI,Gd,NI,DI;xI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};NI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(fn.current);var s=null;switch(n){case"input":i=pd(t,i),r=pd(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=yd(t,i),r=yd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tu)}vd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};DI=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HA(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return It(e.type)&&Su(),nt(e),null;case 3:return r=e.stateNode,As(),_e(wt),_e(lt),dp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(ef(Wt),Wt=null))),Gd(t,e),nt(e),null;case 5:hp(e);var i=ni(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)NI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return nt(e),null}if(t=ni(fn.current),Pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[ga]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Oo.length;i++)ye(Oo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":bg(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Mg(r,s),ye("invalid",r)}vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,l,t),i=["children",""+l]):oa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":_l(r),Og(r,s,!0);break;case"textarea":_l(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[ga]=r,xI(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oo.length;i++)ye(Oo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":bg(t,r),i=pd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Mg(t,r),i=yd(t,r),ye("invalid",t);break;default:i=r}vd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?uw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&aw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&aa(t,u):typeof u=="number"&&aa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&zf(t,s,u,o))}switch(n){case"input":_l(t),Og(t,r,!1);break;case"textarea":_l(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)DI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ni(_a.current),ni(fn.current),Pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Rt!==null&&e.mode&1&&!(e.flags&128))Yw(),Ts(),e.flags|=98560,s=!1;else if(s=Pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[un]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Wt!==null&&(ef(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Be===0&&(Be=3):Sp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return As(),Gd(t,e),t===null&&pa(e.stateNode.containerInfo),nt(e),null;case 10:return ap(e.type._context),nt(e),null;case 17:return It(e.type)&&Su(),nt(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Ps&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return nt(e),null}else 2*De()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function GA(t,e){switch(rp(e),e.tag){case 1:return It(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),_e(wt),_e(lt),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return As(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var xl=!1,st=!1,KA=typeof WeakSet=="function"?WeakSet:Set,H=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Ry=!1;function WA(t,e){if(xd=wu,t=Lw(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},wu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,b=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ht(e.type,P),b);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Ry,Ry=!1,R}function Ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kd(e,n,s)}i=i.next}while(i!==r)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VI(t){var e=t.alternate;e!==null&&(t.alternate=null,VI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[ga],delete e[bd],delete e[xA],delete e[NA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bI(t){return t.tag===5||t.tag===3||t.tag===4}function Py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tu));else if(r!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}var Qe=null,Gt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)OI(t,e,n),n=n.sibling}function OI(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:st||as(n,e);case 6:var r=Qe,i=Gt;Qe=null,Wn(t,e,n),Qe=r,Gt=i,Qe!==null&&(Gt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Gt?(t=Qe,n=n.stateNode,t.nodeType===8?Lh(t.parentNode,n):t.nodeType===1&&Lh(t,n),ha(t)):Lh(Qe,n.stateNode));break;case 4:r=Qe,i=Gt,Qe=n.stateNode.containerInfo,Gt=!0,Wn(t,e,n),Qe=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!st&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Wn(t,e,n),st=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KA),e.forEach(function(r){var i=rR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Gt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Gt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(Qe===null)throw Error(j(160));OI(s,o,i),Qe=null,Gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)MI(e,t),e=e.sibling}function MI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),sn(t),r&4){try{Ko(3,t,t.return),_c(3,t)}catch(P){ke(t,t.return,P)}try{Ko(5,t,t.return)}catch(P){ke(t,t.return,P)}}break;case 1:qt(e,t),sn(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(qt(e,t),sn(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{aa(i,"")}catch(P){ke(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&iw(i,s),wd(l,o);var c=wd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?uw(i,p):f==="dangerouslySetInnerHTML"?aw(i,p):f==="children"?aa(i,p):zf(i,f,p,c)}switch(l){case"input":md(i,s);break;case"textarea":sw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?us(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(P){ke(t,t.return,P)}}break;case 6:if(qt(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ke(t,t.return,P)}}break;case 3:if(qt(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(P){ke(t,t.return,P)}break;case 4:qt(e,t),sn(t);break;case 13:qt(e,t),sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=De())),r&4&&Cy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||f,qt(e,t),st=c):qt(e,t),sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,I=m.child,m.tag){case 0:case 11:case 14:case 15:Ko(4,m,m.return);break;case 1:as(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){ke(r,n,P)}}break;case 5:as(m,m.return);break;case 22:if(m.memoizedState!==null){xy(p);continue}}I!==null?(I.return=m,H=I):xy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=lw("display",o))}catch(P){ke(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){ke(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),sn(t),r&4&&Cy(t);break;case 21:break;default:qt(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var s=Py(t);Yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Py(t);Qd(t,l,o);break;default:throw Error(j(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QA(t,e,n){H=t,LI(t)}function LI(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=xl;var c=st;if(xl=o,(st=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Ny(i):u!==null?(u.return=o,H=u):Ny(i);for(;s!==null;)H=s,LI(s),s=s.sibling;H=i,xl=l,st=c}ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ky(t)}}function ky(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||_c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ha(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}st||e.flags&512&&Wd(e)}catch(m){ke(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function xy(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Ny(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Wd(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{Wd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var YA=Math.ceil,bu=Ln.ReactCurrentDispatcher,vp=Ln.ReactCurrentOwner,Ut=Ln.ReactCurrentBatchConfig,le=0,We=null,be=null,Xe=0,St=0,ls=Vr(0),Be=0,Ea=null,mi=0,vc=0,wp=0,Wo=null,yt=null,Ip=0,Ps=1/0,wn=null,Ou=!1,Jd=null,mr=null,Nl=!1,lr=null,Mu=0,Qo=0,Xd=null,Yl=-1,Jl=0;function ft(){return le&6?De():Yl!==-1?Yl:Yl=De()}function gr(t){return t.mode&1?le&2&&Xe!==0?Xe&-Xe:VA.transition!==null?(Jl===0&&(Jl=Iw()),Jl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Cw(t.type)),t):1}function Xt(t,e,n,r){if(50<Qo)throw Qo=0,Xd=null,Error(j(185));Ua(t,n,r),(!(le&2)||t!==We)&&(t===We&&(!(le&2)&&(vc|=n),Be===4&&nr(t,Xe)),Et(t,r),n===1&&le===0&&!(e.mode&1)&&(Ps=De()+500,mc&&br()))}function Et(t,e){var n=t.callbackNode;V1(t,e);var r=vu(t,t===We?Xe:0);if(r===0)n!==null&&jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jg(n),e===1)t.tag===0?DA(Dy.bind(null,t)):Kw(Dy.bind(null,t)),CA(function(){!(le&6)&&br()}),n=null;else{switch(Ew(r)){case 1:n=Kf;break;case 4:n=vw;break;case 16:n=_u;break;case 536870912:n=ww;break;default:n=_u}n=HI(n,FI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function FI(t,e){if(Yl=-1,Jl=0,le&6)throw Error(j(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=vu(t,t===We?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var i=le;le|=2;var s=jI();(We!==t||Xe!==e)&&(wn=null,Ps=De()+500,si(t,e));do try{ZA();break}catch(l){UI(t,l)}while(!0);op(),bu.current=s,le=i,be!==null?e=0:(We=null,Xe=0,e=Be)}if(e!==0){if(e===2&&(i=Ad(t),i!==0&&(r=i,e=Zd(t,i))),e===1)throw n=Ea,si(t,0),nr(t,r),Et(t,De()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!JA(i)&&(e=Lu(t,r),e===2&&(s=Ad(t),s!==0&&(r=s,e=Zd(t,s))),e===1))throw n=Ea,si(t,0),nr(t,r),Et(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Gr(t,yt,wn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Ip+500-De(),10<e)){if(vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vd(Gr.bind(null,t,yt,wn),e);break}Gr(t,yt,wn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YA(r/1960))-r,10<r){t.timeoutHandle=Vd(Gr.bind(null,t,yt,wn),r);break}Gr(t,yt,wn);break;case 5:Gr(t,yt,wn);break;default:throw Error(j(329))}}}return Et(t,De()),t.callbackNode===n?FI.bind(null,t):null}function Zd(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=yt,yt=n,e!==null&&ef(e)),t}function ef(t){yt===null?yt=t:yt.push.apply(yt,t)}function JA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~wp,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Dy(t){if(le&6)throw Error(j(327));ps();var e=vu(t,0);if(!(e&1))return Et(t,De()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=Ad(t);r!==0&&(e=r,n=Zd(t,r))}if(n===1)throw n=Ea,si(t,0),nr(t,e),Et(t,De()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,yt,wn),Et(t,De()),null}function Ep(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ps=De()+500,mc&&br())}}function gi(t){lr!==null&&lr.tag===0&&!(le&6)&&ps();var e=le;le|=1;var n=Ut.transition,r=de;try{if(Ut.transition=null,de=1,t)return t()}finally{de=r,Ut.transition=n,le=e,!(le&6)&&br()}}function Tp(){St=ls.current,_e(ls)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PA(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:As(),_e(wt),_e(lt),dp();break;case 5:hp(r);break;case 4:As();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:ap(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(We=t,be=t=yr(t.current,null),Xe=St=e,Be=0,Ea=null,wp=vc=mi=0,yt=Wo=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function UI(t,e){do{var n=be;try{if(op(),Kl.current=Vu,Du){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Du=!1}if(pi=0,Ge=je=Ae=null,Go=!1,va=0,vp.current=null,n===null||n.return===null){Be=1,Ea=e,be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=vy(o);if(I!==null){I.flags&=-257,wy(I,o,l,s,e),I.mode&1&&_y(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){_y(s,c,e),Sp();break e}u=Error(j(426))}}else if(Ie&&l.mode&1){var b=vy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),wy(b,o,l,s,e),ip(Rs(u,l));break e}}s=u=Rs(u,l),Be!==4&&(Be=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=EI(s,u,e);dy(s,w);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(mr===null||!mr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=TI(s,l,e);dy(s,D);break e}}s=s.return}while(s!==null)}zI(n)}catch(M){e=M,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function jI(){var t=bu.current;return bu.current=Vu,t===null?Vu:t}function Sp(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||!(mi&268435455)&&!(vc&268435455)||nr(We,Xe)}function Lu(t,e){var n=le;le|=2;var r=jI();(We!==t||Xe!==e)&&(wn=null,si(t,e));do try{XA();break}catch(i){UI(t,i)}while(!0);if(op(),le=n,bu.current=r,be!==null)throw Error(j(261));return We=null,Xe=0,Be}function XA(){for(;be!==null;)BI(be)}function ZA(){for(;be!==null&&!S1();)BI(be)}function BI(t){var e=qI(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?zI(t):be=e,vp.current=null}function zI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GA(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,be=null;return}}else if(n=HA(n,e,St),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Be===0&&(Be=5)}function Gr(t,e,n){var r=de,i=Ut.transition;try{Ut.transition=null,de=1,eR(t,e,n,r)}finally{Ut.transition=i,de=r}return null}function eR(t,e,n,r){do ps();while(lr!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(b1(t,s),t===We&&(be=We=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,HI(_u,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=de;de=1;var l=le;le|=4,vp.current=null,WA(t,n),MI(n,t),wA(Nd),wu=!!xd,Nd=xd=null,t.current=n,QA(n),A1(),le=l,de=o,Ut.transition=s}else t.current=n;if(Nl&&(Nl=!1,lr=t,Mu=i),s=t.pendingLanes,s===0&&(mr=null),C1(n.stateNode),Et(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ou)throw Ou=!1,t=Jd,Jd=null,t;return Mu&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Xd?Qo++:(Qo=0,Xd=t):Qo=0,br(),null}function ps(){if(lr!==null){var t=Ew(Mu),e=Ut.transition,n=de;try{if(Ut.transition=null,de=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Mu=0,le&6)throw Error(j(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ko(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,I=f.return;if(VI(f),f===c){H=null;break}if(m!==null){m.return=I,H=m;break}H=I}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_c(9,l)}}catch(M){ke(l,l.return,M)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(le=i,br(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(cc,t)}catch{}r=!0}return r}finally{de=n,Ut.transition=e}}return!1}function Vy(t,e,n){e=Rs(n,e),e=EI(t,e,1),t=pr(t,e,1),e=ft(),t!==null&&(Ua(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)Vy(t,t,n);else for(;e!==null;){if(e.tag===3){Vy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=Rs(n,t),t=TI(e,t,1),e=pr(e,t,1),t=ft(),e!==null&&(Ua(e,1,t),Et(e,t));break}}e=e.return}}function tR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>De()-Ip?si(t,0):wp|=n),Et(t,e)}function $I(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=ft();t=Nn(t,e),t!==null&&(Ua(t,e,n),Et(t,n))}function nR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$I(t,n)}function rR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),$I(t,n)}var qI;qI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,qA(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ie&&e.flags&1048576&&Ww(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ql(t,e),t=e.pendingProps;var i=Es(e,lt.current);fs(e,n),i=pp(null,e,r,t,i,n);var s=mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=yc,e.stateNode=i,i._reactInternals=e,jd(e,r,t,n),e=$d(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&np(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sR(r),t=Ht(r,t),i){case 0:e=zd(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=Iy(null,e,r,t,n);break e;case 14:e=Ey(null,e,r,Ht(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ty(t,e,r,i,n);case 3:e:{if(PI(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eI(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(j(423)),e),e=Sy(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(j(424)),e),e=Sy(t,e,r,n,i);break e}else for(Rt=fr(e.stateNode.containerInfo.firstChild),Ct=e,Ie=!0,Wt=null,n=Xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),r===i){e=Dn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return tI(e),t===null&&Ld(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dd(r,i)?o=null:s!==null&&Dd(r,s)&&(e.flags|=32),RI(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Ld(e),null;case 13:return CI(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Iy(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Cu,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!wt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Fd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fs(e,n),i=Bt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),Ey(t,e,r,i,n);case 15:return SI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ql(t,e),e.tag=1,It(r)?(t=!0,Au(e)):t=!1,fs(e,n),II(e,r,i),jd(e,r,i,n),$d(null,e,r,!0,t,n);case 19:return kI(t,e,n);case 22:return AI(t,e,n)}throw Error(j(156,e.tag))};function HI(t,e){return _w(t,e)}function iR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new iR(t,e,n,r)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sR(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qf)return 11;if(t===Hf)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return oi(n.children,i,s,e);case $f:o=8,i|=8;break;case cd:return t=Lt(12,n,e,i|2),t.elementType=cd,t.lanes=s,t;case hd:return t=Lt(13,n,e,i),t.elementType=hd,t.lanes=s,t;case dd:return t=Lt(19,n,e,i),t.elementType=dd,t.lanes=s,t;case tw:return wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zv:o=10;break e;case ew:o=9;break e;case qf:o=11;break e;case Hf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function wc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=tw,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Gh(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rh(0),this.expirationTimes=Rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,r,i,s,o,l,u){return t=new oR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function aR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function GI(t){if(!t)return Rr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(It(n))return Gw(t,n,e)}return e}function KI(t,e,n,r,i,s,o,l,u){return t=Rp(n,r,!0,t,i,s,o,l,u),t.context=GI(null),n=t.current,r=ft(),i=gr(n),s=Cn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,Ua(t,i,r),Et(t,r),t}function Ic(t,e,n,r){var i=e.current,s=ft(),o=gr(i);return n=GI(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(Xt(t,i,o,s),Gl(t,i,o)),o}function Fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function by(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){by(t,e),(t=t.alternate)&&by(t,e)}function lR(){return null}var WI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}Ec.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ic(t,e,null,null)};Ec.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){Ic(null,t,null,null)}),e[xn]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Pw(t)}};function kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oy(){}function uR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fu(o);s.call(c)}}var o=KI(e,r,t,0,null,!1,!1,"",Oy);return t._reactRootContainer=o,t[xn]=o.current,pa(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Fu(u);l.call(c)}}var u=Rp(t,0,!1,null,null,!1,!1,"",Oy);return t._reactRootContainer=u,t[xn]=u.current,pa(t.nodeType===8?t.parentNode:t),gi(function(){Ic(e,u,n,r)}),u}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fu(o);l.call(u)}}Ic(e,o,t,i)}else o=uR(n,e,t,i,r);return Fu(o)}Tw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Wf(e,n|1),Et(e,De()),!(le&6)&&(Ps=De()+500,br()))}break;case 13:gi(function(){var r=Nn(t,1);if(r!==null){var i=ft();Xt(r,t,1,i)}}),Pp(t,1)}};Qf=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=ft();Xt(e,t,134217728,n)}Pp(t,134217728)}};Sw=function(t){if(t.tag===13){var e=gr(t),n=Nn(t,e);if(n!==null){var r=ft();Xt(n,t,e,r)}Pp(t,e)}};Aw=function(){return de};Rw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Ed=function(t,e,n){switch(e){case"input":if(md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pc(r);if(!i)throw Error(j(90));rw(r),md(r,i)}}}break;case"textarea":sw(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};dw=Ep;fw=gi;var cR={usingClientEntryPoint:!1,Events:[Ba,ns,pc,cw,hw,Ep]},Ao={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hR={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||lR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{cc=Dl.inject(hR),dn=Dl}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cR;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kp(e))throw Error(j(200));return aR(t,e,null,n)};Nt.createRoot=function(t,e){if(!kp(t))throw Error(j(299));var n=!1,r="",i=WI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,pa(t.nodeType===8?t.parentNode:t),new Cp(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=gw(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return gi(t)};Nt.hydrate=function(t,e,n){if(!Tc(e))throw Error(j(200));return Sc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!kp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=WI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=KI(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ec(e)};Nt.render=function(t,e,n){if(!Tc(e))throw Error(j(200));return Sc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(j(40));return t._reactRootContainer?(gi(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Ep;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Sc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function QI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QI)}catch(t){console.error(t)}}QI(),Qv.exports=Nt;var dR=Qv.exports,My=dR;ld.createRoot=My.createRoot,ld.hydrateRoot=My.hydrateRoot;const fR=()=>{};var Ly={};/**
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
 */const YI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},JI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[f],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new mR;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gR=function(t){const e=YI(t);return JI.encodeByteArray(e,!0)},Uu=function(t){return gR(t).replace(/\./g,"")},XI=function(t){try{return JI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yR=()=>ZI().__FIREBASE_DEFAULTS__,_R=()=>{if(typeof process>"u"||typeof Ly>"u")return;const t=Ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XI(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return fR()||yR()||_R()||vR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=Ac())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},wR=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tE=()=>{var t;return(t=Ac())==null?void 0:t.config},nE=t=>{var e;return(e=Ac())==null?void 0:e[`_${t}`]};/**
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
 */class IR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ER(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),""].join(".")}const Yo={};function TR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Yo))Yo[e]?t.emulator.push(e):t.prod.push(e);return t}function SR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fy=!1;function iE(t,e){if(typeof window>"u"||typeof document>"u"||!Ks(window.location.host)||Yo[t]===e||Yo[t]||Fy)return;Yo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=TR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Fy=!0,o()},m}function f(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=SR(r),I=n("text"),R=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),f(b,P);const D=c();u(_,w),T.append(_,R,b,D),document.body.appendChild(T)}s?(R.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function sE(){var e;const t=(e=Ac())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kR(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){return!sE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aE(){return!sE()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function xR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const NR="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NR,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function DR(t,e){return t.replace(VR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VR=/\{\$([^}]+)}/g;function bR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uy(s)&&Uy(o)){if(!yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uy(t){return t!==null&&typeof t=="object"}/**
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
 */function qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function OR(t,e){const n=new MR(t,e);return n.subscribe.bind(n)}class MR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kh),i.error===void 0&&(i.error=Kh),i.complete===void 0&&(i.complete=Kh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kh(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class _i{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class FR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UR(t){return t===Kr?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
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
 */class BR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const zR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},$R=ie.INFO,qR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},HR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xp{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=HR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const GR=(t,e)=>e.some(n=>t instanceof n);let jy,By;function KR(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WR(){return By||(By=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,tf=new WeakMap,cE=new WeakMap,Wh=new WeakMap,Np=new WeakMap;function QR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),Np.set(e,t),e}function YR(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JR(t){nf=t(nf)}function XR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qh(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),_r(r)}:WR().includes(t)?function(...e){return t.apply(Qh(this),e),_r(uE.get(this))}:function(...e){return _r(t.apply(Qh(this),e))}}function ZR(t){return typeof t=="function"?XR(t):(t instanceof IDBTransaction&&YR(t),GR(t,KR())?new Proxy(t,nf):t)}function _r(t){if(t instanceof IDBRequest)return QR(t);if(Wh.has(t))return Wh.get(t);const e=ZR(t);return e!==t&&(Wh.set(t,e),Np.set(e,t)),e}const Qh=t=>Np.get(t);function eP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_r(o.result),u.oldVersion,u.newVersion,_r(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const tP=["get","getKey","getAll","getAllKeys","count"],nP=["put","add","delete","clear"],Yh=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Yh.set(e,s),s}JR(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
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
 */class rP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rf="@firebase/app",$y="0.14.7";/**
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
 */const Vn=new xp("@firebase/app"),sP="@firebase/app-compat",oP="@firebase/analytics-compat",aP="@firebase/analytics",lP="@firebase/app-check-compat",uP="@firebase/app-check",cP="@firebase/auth",hP="@firebase/auth-compat",dP="@firebase/database",fP="@firebase/data-connect",pP="@firebase/database-compat",mP="@firebase/functions",gP="@firebase/functions-compat",yP="@firebase/installations",_P="@firebase/installations-compat",vP="@firebase/messaging",wP="@firebase/messaging-compat",IP="@firebase/performance",EP="@firebase/performance-compat",TP="@firebase/remote-config",SP="@firebase/remote-config-compat",AP="@firebase/storage",RP="@firebase/storage-compat",PP="@firebase/firestore",CP="@firebase/ai",kP="@firebase/firestore-compat",xP="firebase",NP="12.8.0";/**
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
 */const sf="[DEFAULT]",DP={[rf]:"fire-core",[sP]:"fire-core-compat",[aP]:"fire-analytics",[oP]:"fire-analytics-compat",[uP]:"fire-app-check",[lP]:"fire-app-check-compat",[cP]:"fire-auth",[hP]:"fire-auth-compat",[dP]:"fire-rtdb",[fP]:"fire-data-connect",[pP]:"fire-rtdb-compat",[mP]:"fire-fn",[gP]:"fire-fn-compat",[yP]:"fire-iid",[_P]:"fire-iid-compat",[vP]:"fire-fcm",[wP]:"fire-fcm-compat",[IP]:"fire-perf",[EP]:"fire-perf-compat",[TP]:"fire-rc",[SP]:"fire-rc-compat",[AP]:"fire-gcs",[RP]:"fire-gcs-compat",[PP]:"fire-fst",[kP]:"fire-fst-compat",[CP]:"fire-vertex","fire-js":"fire-js",[xP]:"fire-js-all"};/**
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
 */const ju=new Map,VP=new Map,of=new Map;function qy(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(of.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;of.set(e,t);for(const n of ju.values())qy(n,t);for(const n of VP.values())qy(n,t);return!0}function Dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const bP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new $a("app","Firebase",bP);/**
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
 */class OP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=NP;function hE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:sf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=tE()),!n)throw vr.create("no-options");const s=ju.get(i);if(s){if(yi(n,s.options)&&yi(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new BR(i);for(const u of of.values())o.addComponent(u);const l=new OP(n,r,o);return ju.set(i,l),l}function dE(t=sf){const e=ju.get(t);if(!e&&t===sf&&tE())return hE();if(!e)throw vr.create("no-app",{appName:t});return e}function wr(t,e,n){let r=DP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}Cs(new _i(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const MP="firebase-heartbeat-database",LP=1,Ta="firebase-heartbeat-store";let Jh=null;function fE(){return Jh||(Jh=eP(MP,LP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Jh}async function FP(t){try{const n=(await fE()).transaction(Ta),r=await n.objectStore(Ta).get(pE(t));return await n.done,r}catch(e){if(e instanceof Fn)Vn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Hy(t,e){try{const r=(await fE()).transaction(Ta,"readwrite");await r.objectStore(Ta).put(e,pE(t)),await r.done}catch(n){if(n instanceof Fn)Vn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function pE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UP=1024,jP=30;class BP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $P(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>jP){const o=qP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gy(),{heartbeatsToSend:r,unsentEntries:i}=zP(this._heartbeatsCache.heartbeats),s=Uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function Gy(){return new Date().toISOString().substring(0,10)}function zP(t,e=UP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ky(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?xR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ky(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}function qP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function HP(t){Cs(new _i("platform-logger",e=>new rP(e),"PRIVATE")),Cs(new _i("heartbeat",e=>new BP(e),"PRIVATE")),wr(rf,$y,t),wr(rf,$y,"esm2020"),wr("fire-js","")}HP("");var GP="firebase",KP="12.8.0";/**
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
 */wr(GP,KP,"app");function mE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WP=mE,gE=new $a("auth","Firebase",mE());/**
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
 */const Bu=new xp("@firebase/auth");function QP(t,...e){Bu.logLevel<=ie.WARN&&Bu.warn(`Auth (${Ws}): ${t}`,...e)}function Zl(t,...e){Bu.logLevel<=ie.ERROR&&Bu.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function yn(t,...e){throw bp(t,...e)}function Zt(t,...e){return bp(t,...e)}function Vp(t,e,n){const r={...WP(),[e]:n};return new $a("auth","Firebase",r).create(e,{appName:t.name})}function ai(t){return Vp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yn(t,"argument-error"),Vp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gE.create(t,...e)}function Q(t,e,...n){if(!t)throw bp(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function bn(t,e){t||An(e)}/**
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
 */function af(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function JP(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function XP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JP()||PR()||"connection"in navigator)?navigator.onLine:!0}function ZP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=AR()||CR()}get(){return XP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Op(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nC=new Ha(3e4,6e4);function Mp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qs(t,e,n,r,i={}){return _E(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return RR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(c.credentials="include"),yE.fetch()(await vE(t,t.config.apiHost,n,l),c)})}async function _E(t,e,n){t._canInitEmulator=!1;const r={...eC,...e};try{const i=new iC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vp(t,f,c);yn(t,f)}}catch(i){if(i instanceof Fn)throw i;yn(t,"network-request-failed",{message:String(i)})}}async function rC(t,e,n,r,i={}){const s=await Qs(t,e,n,r,i);return"mfaPendingCredential"in s&&yn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Op(t.config,i):`${t.config.apiScheme}://${i}`;return tC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class iC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),nC.get())})}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function sC(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function zu(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oC(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Lp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(Xh(i.auth_time)),issuedAtTime:Jo(Xh(i.iat)),expirationTime:Jo(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function Lp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=XI(n);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qy(t){const e=Lp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&aC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Sa(t,zu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?wE(i.providerUserInfo):[],o=cC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new lf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function uC(t){const e=Le(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function hC(t,e){const n=await _E(t,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await vE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(u.credentials="include"),yE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dC(t,e){return Qs(t,"POST","/v2/accounts:revokeToken",Mp(t,e))}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ms;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Qn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oC(this,e)}reload(){return uC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await Sa(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:R,stsTokenManager:P}=n;Q(p&&P,e,"internal-error");const b=ms.fromJSON(this.name,P);Q(typeof p=="string",e,"internal-error"),Qn(r,e.name),Qn(i,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),Qn(s,e.name),Qn(o,e.name),Qn(l,e.name),Qn(u,e.name),Qn(c,e.name),Qn(f,e.name);const w=new Yt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(w.providerData=R.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ms;i.updateFromServerResponse(n);const s=new Yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ms;l.updateFromIdToken(r);const u=new Yt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Yy=new Map;function Rn(t){bn(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
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
 */class IE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IE.type="NONE";const Jy=IE;/**
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
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zu(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Rn(Jy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(Jy);const o=eu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await zu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Yt._fromGetAccountInfoResponse(e,m,f)}else p=Yt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gs(s,e,r))}}/**
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
 */function Xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PE(e))return"Blackberry";if(CE(e))return"Webos";if(TE(e))return"Safari";if((e.includes("chrome/")||SE(e))&&!e.includes("edge/"))return"Chrome";if(RE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EE(t=ze()){return/firefox\//i.test(t)}function TE(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SE(t=ze()){return/crios\//i.test(t)}function AE(t=ze()){return/iemobile/i.test(t)}function RE(t=ze()){return/android/i.test(t)}function PE(t=ze()){return/blackberry/i.test(t)}function CE(t=ze()){return/webos/i.test(t)}function Fp(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fC(t=ze()){var e;return Fp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function pC(){return kR()&&document.documentMode===10}function kE(t=ze()){return Fp(t)||RE(t)||CE(t)||PE(t)||/windows phone/i.test(t)||AE(t)}/**
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
 */function xE(t,e=[]){let n;switch(t){case"Browser":n=Xy(ze());break;case"Worker":n=`${Xy(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class mC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function gC(t,e={}){return Qs(t,"GET","/v2/passwordPolicy",Mp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const yC=6;class _C{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new mC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zu(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(ai(this));const n=e?Le(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gC(this),n=new _C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&QP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rc(t){return Le(t)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=OR(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Up={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wC(t){Up=t}function IC(t){return Up.loadJS(t)}function EC(){return Up.gapiScript}function TC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function SC(t,e){const n=Dp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yi(s,e??{}))return i;yn(i,"already-initialized")}return n.initialize({options:e})}function AC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RC(t,e,n){const r=Rc(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=NE(e),{host:o,port:l}=PC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(yi(c,r.config.emulator)&&yi(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ks(o)?(rE(`${s}//${o}${u}`),iE("Auth",!0)):CC()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PC(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:e_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:e_(o)}}}function e_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class DE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function ys(t,e){return rC(t,"POST","/v1/accounts:signInWithIdp",Mp(t,e))}/**
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
 */const kC="http://localhost";class vi extends DE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:kC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
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
 */class jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends Ga{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class En extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class ir extends Ga{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yt._fromIdTokenResponse(e,r,i),o=t_(r);return new ks({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=t_(r);return new ks({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function t_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qu extends Fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qu(e,n,r,i)}}function VE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,s,e,r):s})}async function xC(t,e,n=!1){const r=await Sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",r)}/**
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
 */async function NC(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(ai(r));const i="reauthenticate";try{const s=await Sa(t,VE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Lp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ks._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),s}}/**
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
 */async function DC(t,e,n=!1){if(Qt(t.app))return Promise.reject(ai(t));const r="signIn",i=await VE(t,r,e),s=await ks._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function VC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function bC(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function OC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function MC(t){return Le(t).signOut()}const Hu="__sak";/**
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
 */class bE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LC=1e3,FC=10;class OE extends bE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OE.type="LOCAL";const UC=OE;/**
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
 */class ME extends bE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ME.type="SESSION";const LE=ME;/**
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
 */function jC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await jC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function Bp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Bp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function zC(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function FE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function HC(){return FE()?self:null}/**
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
 */const UE="firebaseLocalStorageDb",GC=1,Gu="firebaseLocalStorage",jE="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function KC(){const t=indexedDB.deleteDatabase(UE);return new Ka(t).toPromise()}function uf(){const t=indexedDB.open(UE,GC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gu,{keyPath:jE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gu)?e(r):(r.close(),await KC(),e(await uf()))})})}async function n_(t,e,n){const r=Cc(t,!0).put({[jE]:e,value:n});return new Ka(r).toPromise()}async function WC(t,e){const n=Cc(t,!1).get(e),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function r_(t,e){const n=Cc(t,!0).delete(e);return new Ka(n).toPromise()}const QC=800,YC=3;class BE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(HC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new BC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await n_(e,Hu,"1"),await r_(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>n_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>r_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cc(i,!1).getAll();return new Ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BE.type="LOCAL";const JC=BE;new Ha(3e4,6e4);/**
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
 */function zE(t,e){return e?Rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zp extends DE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XC(t){return DC(t.auth,new zp(t),t.bypassAuthState)}function ZC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),NC(n,new zp(t),t.bypassAuthState)}async function ek(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),xC(n,new zp(t),t.bypassAuthState)}/**
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
 */class $E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XC;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZC;default:yn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tk=new Ha(2e3,1e4);async function nk(t,e,n){if(Qt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=Rc(t);YP(t,e,jp);const i=zE(r,n);return new ri(r,"signInViaPopup",e,i).executeNotNull()}class ri extends $E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}ri.currentPopupAction=null;/**
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
 */const rk="pendingRedirect",tu=new Map;class ik extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sk(t,e){const n=lk(e),r=ak(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ok(t,e){tu.set(t._key(),e)}function ak(t){return Rn(t._redirectPersistence)}function lk(t){return eu(rk,t.config.apiKey,t.name)}async function uk(t,e,n=!1){if(Qt(t.app))return Promise.reject(ai(t));const r=Rc(t),i=zE(r,e),o=await new ik(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ck=10*60*1e3;class hk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(i_(e))}saveEventToCache(e){this.cachedEventUids.add(i_(e)),this.lastProcessedEventTime=Date.now()}}function i_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
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
 */async function fk(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
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
 */const pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mk=/^https?/;async function gk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fk(t);for(const n of e)try{if(yk(n))return}catch{}yn(t,"unauthorized-domain")}function yk(t){const e=af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mk.test(n))return!1;if(pk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _k=new Ha(3e4,6e4);function s_(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vk(t){return new Promise((e,n)=>{var i,s,o;function r(){s_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s_(),n(Zt(t,"network-request-failed"))},timeout:_k.get()})}if((s=(i=pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const l=TC("iframefcb");return pn()[l]=()=>{gapi.load?r():n(Zt(t,"network-request-failed"))},IC(`${EC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nu=null,e})}let nu=null;function wk(t){return nu=nu||vk(t),nu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ik=new Ha(5e3,15e3),Ek="__/auth/iframe",Tk="emulator/auth/iframe",Sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ak=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Op(e,Tk):`https://${t.config.authDomain}/${Ek}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=Ak.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qa(r).slice(1)}`}async function Pk(t){const e=await wk(t),n=pn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Rk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=pn().setTimeout(()=>{s(o)},Ik.get());function u(){pn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ck={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kk=500,xk=600,Nk="_blank",Dk="http://localhost";class o_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,r=kk,i=xk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ck,width:r.toString(),height:i.toString(),top:s,left:o},c=ze().toLowerCase();n&&(l=SE(c)?Nk:n),EE(c)&&(e=e||Dk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(fC(c)&&l!=="_self")return bk(e||"",l),new o_(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new o_(p)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ok="__/auth/handler",Mk="emulator/auth/handler",Lk=encodeURIComponent("fac");async function a_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ga){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Lk}=${encodeURIComponent(u)}`:"";return`${Fk(t)}?${qa(l).slice(1)}${c}`}function Fk({config:t}){return t.emulator?Op(t,Mk):`https://${t.authDomain}/${Ok}`}/**
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
 */const Zh="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=uk,this._overrideRedirectResult=ok}async _openPopup(e,n,r,i){var o;bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await a_(e,n,r,af(),i);return Vk(e,s,Bp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await a_(e,n,r,af(),i);return zC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pk(e),r=new hk(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zh,{type:Zh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Zh];s!==void 0&&n(!!s),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||TE()||Fp()}}const jk=Uk;var l_="@firebase/auth",u_="1.12.0";/**
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
 */class Bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $k(t){Cs(new _i("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},c=new vC(r,i,s,u);return AC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new _i("auth-internal",e=>{const n=Rc(e.getProvider("auth").getImmediate());return(r=>new Bk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(l_,u_,zk(t)),wr(l_,u_,"esm2020")}/**
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
 */const qk=5*60,Hk=nE("authIdTokenMaxAge")||qk;let c_=null;const Gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hk)return;const i=n==null?void 0:n.token;c_!==i&&(c_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kk(t=dE()){const e=Dp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SC(t,{popupRedirectResolver:jk,persistence:[JC,UC,LE]}),r=nE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Gk(s.toString());bC(n,o,()=>o(n.currentUser)),VC(n,l=>o(l))}}const i=eE("auth");return i&&RC(n,`http://${i}`),n}function Wk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}wC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Wk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$k("Browser");var h_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,HE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(A,C,x){for(var S=Array(arguments.length-2),re=2;re<arguments.length;re++)S[re-2]=arguments[re];return y.prototype[C].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;C<16;++C)A[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],C=v.g[2];let x=v.g[3],S;S=y+(x^E&(C^x))+A[0]+3614090360&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+A[1]+3905402710&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+A[2]+606105819&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+A[3]+3250441966&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+A[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+A[5]+1200080426&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+A[6]+2821735955&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+A[7]+4249261313&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+A[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+A[9]+2336552879&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+A[10]+4294925233&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+A[11]+2304563134&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+A[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+A[13]+4254626195&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+A[14]+2792965006&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+A[15]+1236535329&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(C^x&(E^C))+A[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+A[6]+3225465664&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+A[11]+643717713&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+A[0]+3921069994&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+A[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+A[10]+38016083&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+A[15]+3634488961&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+A[4]+3889429448&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+A[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+A[14]+3275163606&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+A[3]+4107603335&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+A[8]+1163531501&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+A[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+A[2]+4243563512&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+A[7]+1735328473&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+A[12]+2368359562&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(E^C^x)+A[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+A[8]+2272392833&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+A[11]+1839030562&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+A[14]+4259657740&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+A[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+A[4]+1272893353&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+A[7]+4139469664&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+A[10]+3200236656&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+A[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+A[0]+3936430074&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+A[3]+3572445317&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+A[6]+76029189&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+A[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+A[12]+3873151461&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+A[15]+530742520&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+A[2]+3299628645&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(C^(E|~x))+A[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+A[7]+1126891415&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+A[14]+2878612391&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+A[5]+4237533241&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+A[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+A[3]+2399980690&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+A[10]+4293915773&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+A[1]+2240044497&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+A[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+A[15]+4264355552&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+A[6]+2734768916&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+A[13]+1309151649&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+A[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+A[11]+3174756917&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+A[2]+718787259&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+x&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,A=this.C;let C=this.h,x=0;for(;x<y;){if(C==0)for(;x<=E;)i(this,v,x),x+=this.blockSize;if(typeof v=="string"){for(;x<y;)if(A[C++]=v.charCodeAt(x++),C==this.blockSize){i(this,A),C=0;break}}else for(;x<y;)if(A[C++]=v[x++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)v[y++]=this.g[E]>>>A&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let A=!0;for(let C=v.length-1;C>=0;C--){const x=v[C]|0;A&&x==y||(E[C]=x,A=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return b(c(-v));const y=[];let E=1;for(let A=0;v>=E;A++)y[A]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return b(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let A=p;for(let x=0;x<v.length;x+=8){var C=Math.min(8,v.length-x);const S=parseInt(v.substring(x,x+C),y);C<8?(C=c(Math.pow(y,C)),A=A.j(C).add(c(S))):(A=A.j(E),A=A.add(c(S)))}return A}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);v+=(A>=0?A:4294967296+A)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(P(this))return"-"+b(this).toString(v);const y=c(Math.pow(v,6));var E=this;let A="";for(;;){const C=D(E,y).g;E=w(E,C.j(y));let x=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=C,R(E))return x+A;for(;x.length<6;)x="0"+x;A=x+A}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=w(this,v),P(v)?-1:R(v)?0:1};function b(v){const y=v.g.length,E=[];for(let A=0;A<y;A++)E[A]=~v.g[A];return new o(E,~v.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let A=0;for(let C=0;C<=y;C++){let x=A+(this.i(C)&65535)+(v.i(C)&65535),S=(x>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);A=S>>>16,x&=65535,S&=65535,E[C]=S<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(b(y))}t.j=function(v){if(R(this)||R(v))return p;if(P(this))return P(v)?b(this).j(b(v)):b(b(this).j(v));if(P(v))return b(this.j(b(v)));if(this.l(I)<0&&v.l(I)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<v.g.length;C++){const x=this.i(A)>>>16,S=this.i(A)&65535,re=v.i(C)>>>16,Pe=v.i(C)&65535;E[2*A+2*C]+=S*Pe,_(E,2*A+2*C),E[2*A+2*C+1]+=x*Pe,_(E,2*A+2*C+1),E[2*A+2*C+1]+=S*re,_(E,2*A+2*C+1),E[2*A+2*C+2]+=x*re,_(E,2*A+2*C+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function T(v,y){this.g=v,this.h=y}function D(v,y){if(R(y))throw Error("division by zero");if(R(v))return new T(p,p);if(P(v))return y=D(b(v),y),new T(b(y.g),b(y.h));if(P(y))return y=D(v,b(y)),new T(b(y.g),y.h);if(v.g.length>30){if(P(v)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(v)<=0;)E=M(E),A=M(A);var C=F(E,1),x=F(A,1);for(A=F(A,2),E=F(E,2);!R(A);){var S=x.add(A);S.l(v)<=0&&(C=C.add(E),x=S),A=F(A,1),E=F(E,1)}return y=w(v,C.j(y)),new T(C,y)}for(C=p;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),x=c(E),S=x.j(y);P(S)||S.l(v)>0;)E-=A,x=c(E),S=x.j(y);R(x)&&(x=m),C=C.add(x),v=w(v,S)}return new T(C,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&v.i(A);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|v.i(A);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^v.i(A);return new o(E,this.h^v.h)};function M(v){const y=v.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(E,v.h)}function F(v,y){const E=y>>5;y%=32;const A=v.g.length-E,C=[];for(let x=0;x<A;x++)C[x]=y>0?v.i(x+E)>>>y|v.i(x+E+1)<<32-y:v.i(x+E);return new o(C,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,HE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ir=o}).apply(typeof h_<"u"?h_:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GE,Mo,KE,ru,cf,WE,QE,YE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,V){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return h.prototype[N].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function R(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let z=0;z<V;z++)a[d+z]=N[z]}else a.push(N)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const g=T.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){b(d)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function re(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(re,C),re.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&re.Z.h.call(this)},re.prototype.h=function(){re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),vn=0;function eo(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++vn,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function Z(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ve(a){const h={};for(const d in a)h[d]=a[d];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lr(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let V=0;V<Ne.length;V++)d=Ne[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Vt(a){this.src=a,this.g={},this.h=0}Vt.prototype.add=function(a,h,d,g,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=$t(a,h,g,N);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new eo(h,this.src,V,!!g,N),h.fa=d,a.push(h)),h};function Fr(a,h){const d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),V;(V=N>=0)&&Array.prototype.splice.call(g,N,1),V&&(q(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function $t(a,h,d,g){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return N}return-1}var Bn="closure_lm_"+(Math.random()*1e6|0),eh={};function xm(a,h,d,g,N){if(Array.isArray(h)){for(let V=0;V<h.length;V++)xm(a,h[V],d,g,N);return null}return d=Vm(d),a&&a[Pe]?a.J(h,d,l(g)?!!g.capture:!1,N):cS(a,h,d,!1,g,N)}function cS(a,h,d,g,N,V){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let ee=nh(a);if(ee||(a[Bn]=ee=new Vt(a)),d=ee.add(h,d,g,z,V),d.proxy)return d;if(g=hS(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)x||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Dm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function hS(){function a(d){return h.call(a.src,a.listener,d)}const h=dS;return a}function Nm(a,h,d,g,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)Nm(a,h[V],d,g,N);else g=l(g)?!!g.capture:!!g,d=Vm(d),a&&a[Pe]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=$t(h,d,g,N),d>-1&&(q(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=nh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$t(h,d,g,N)),(d=a>-1?h[a]:null)&&th(d))}function th(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Pe])Fr(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Dm(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=nh(h))?(Fr(d,a),d.h==0&&(d.src=null,h[Bn]=null)):q(a)}}}function Dm(a){return a in eh?eh[a]:eh[a]="on"+a}function dS(a,h){if(a.da)a=!0;else{h=new re(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&th(a),a=d.call(g,h)}return a}function nh(a){return a=a[Bn],a instanceof Vt?a:null}var rh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vm(a){return typeof a=="function"?a:(a[rh]||(a[rh]=function(h){return a.handleEvent(h)}),a[rh])}function et(){A.call(this),this.i=new Vt(this),this.M=this,this.G=null}p(et,A),et.prototype[Pe]=!0,et.prototype.removeEventListener=function(a,h,d,g){Nm(this,a,h,d,g)};function ut(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(g,a),Lr(h,N)}N=!0;let V,z;if(d)for(z=d.length-1;z>=0;z--)V=h.g=d[z],N=il(V,g,!0,h)&&N;if(V=h.g=a,N=il(V,g,!0,h)&&N,N=il(V,g,!1,h)&&N,d)for(z=0;z<d.length;z++)V=h.g=d[z],N=il(V,g,!1,h)&&N}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)q(d[g]);delete a.g[h],a.h--}}this.G=null},et.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},et.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function il(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let V=0;V<h.length;++V){const z=h[V];if(z&&!z.da&&z.capture==d){const ee=z.listener,Ue=z.ha||z.src;z.fa&&Fr(a.i,z),N=ee.call(Ue,g)!==!1&&N}}return N&&!g.defaultPrevented}function fS(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function bm(a){a.g=fS(()=>{a.g=null,a.i&&(a.i=!1,bm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class pS extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:bm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(a){A.call(this),this.h=a,this.g={}}p(to,A);var Om=[];function Mm(a){Y(a.g,function(h,d){this.g.hasOwnProperty(d)&&th(h)},a),a.g={}}to.prototype.N=function(){to.Z.N.call(this),Mm(this)},to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ih=o.JSON.stringify,mS=o.JSON.parse,gS=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Lm(){}function Fm(){}var no={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sh(){C.call(this,"d")}p(sh,C);function oh(){C.call(this,"c")}p(oh,C);var Ur={},Um=null;function sl(){return Um=Um||new et}Ur.Ia="serverreachability";function jm(a){C.call(this,Ur.Ia,a)}p(jm,C);function ro(a){const h=sl();ut(h,new jm(h))}Ur.STAT_EVENT="statevent";function Bm(a,h){C.call(this,Ur.STAT_EVENT,a),this.stat=h}p(Bm,C);function ct(a){const h=sl();ut(h,new Bm(h,a))}Ur.Ja="timingevent";function zm(a,h){C.call(this,Ur.Ja,a),this.size=h}p(zm,C);function io(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function so(){this.g=!0}so.prototype.ua=function(){this.g=!1};function yS(a,h,d,g,N,V){a.info(function(){if(a.g)if(V){var z="",ee=V.split("&");for(let pe=0;pe<ee.length;pe++){var Ue=ee[pe].split("=");if(Ue.length>1){const qe=Ue[0];Ue=Ue[1];const rn=qe.split("_");z=rn.length>=2&&rn[1]=="type"?z+(qe+"="+Ue+"&"):z+(qe+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+z})}function _S(a,h,d,g,N,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+V+" "+z})}function bi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+wS(a,d)+(g?" "+g:"")})}function vS(a,h){a.info(function(){return"TIMEOUT: "+h})}so.prototype.info=function(){};function wS(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return ih(V)}catch{return h}}var ol={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$m={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qm;function ah(){}p(ah,Lm),ah.prototype.g=function(){return new XMLHttpRequest},qm=new ah;function oo(a){return encodeURIComponent(String(a))}function IS(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function zn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new to(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hm}function Hm(){this.i=null,this.g="",this.h=!1}var Gm={},lh={};function uh(a,h,d){a.M=1,a.A=ll(nn(h)),a.u=d,a.R=!0,Km(a,null)}function Km(a,h){a.F=Date.now(),al(a),a.B=nn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),og(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Hm,a.g=Sg(a.j,d?h:null,!a.u),a.P>0&&(a.O=new pS(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Om[0]=N.toString()),N=Om);for(let V=0;V<N.length;V++){const z=xm(d,N[V],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?ve(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ro(),yS(a.i,a.v,a.B,a.l,a.S,a.u)}zn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Hn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Hn(this.g),Ue=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||fg(this.g)))){this.K||ee!=4||Ue==7||(Ue==8||pe<=0?ro(3):ro(2)),ch(this);var h=this.g.ca();this.X=h;var d=ES(this);if(this.o=h==200,_S(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var V=g;break t}}V=null}if(a=V)bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hh(this,a);else{this.o=!1,this.m=3,ct(12),jr(this),ao(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<d.length;)if(qe=TS(this,d),qe==lh){ee==4&&(this.m=4,ct(14),a=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Gm){this.m=4,ct(15),bi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else bi(this.i,this.l,qe,null),hh(this,qe);if(Wm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,ct(16),a=!1),this.o=this.o&&a,!a)bi(this.i,this.l,d,"[Invalid Chunked Response]"),jr(this),ao(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),vh(z),z.P=!0,ct(11))}}else bi(this.i,this.l,d,null),hh(this,d);ee==4&&jr(this),this.o&&!this.K&&(ee==4?wg(this.j,this):(this.o=!1,al(this)))}else LS(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),jr(this),ao(this)}}}catch{}finally{}};function ES(a){if(!Wm(a))return a.g.la();const h=fg(a.g);if(h==="")return"";let d="";const g=h.length,N=Hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jr(a),ao(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(N&&V==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Wm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function TS(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?lh:(d=Number(h.substring(d,g)),isNaN(d)?Gm:(g+=1,g+d>h.length?lh:(h=h.slice(g,g+d),a.C=g+d,h)))}zn.prototype.cancel=function(){this.K=!0,jr(this)};function al(a){a.T=Date.now()+a.H,Qm(a,a.H)}function Qm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=io(c(a.aa,a),h)}function ch(a){a.D&&(o.clearTimeout(a.D),a.D=null)}zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(vS(this.i,this.B),this.M!=2&&(ro(),ct(17)),jr(this),this.m=2,ao(this)):Qm(this,this.T-a)};function ao(a){a.j.I==0||a.K||wg(a.j,a)}function jr(a){ch(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Mm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function hh(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||dh(d.h,a))){if(!a.L&&dh(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)fl(d),hl(d);else break e;_h(d),ct(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=io(c(d.Va,d),6e3));Xm(d.h)<=1&&d.ta&&(d.ta=void 0)}else zr(d,11)}else if((a.L||d.g==a)&&fl(d),!S(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let pe=N[h];const qe=pe[0];if(!(qe<=d.K))if(d.K=qe,pe=pe[1],d.I==2)if(pe[0]=="c"){d.M=pe[1],d.ba=pe[2];const rn=pe[3];rn!=null&&(d.ka=rn,d.j.info("VER="+d.ka));const $r=pe[4];$r!=null&&(d.za=$r,d.j.info("SVER="+d.za));const Gn=pe[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(g=1.5*Gn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Kn=a.g;if(Kn){const ml=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ml){var V=g.h;V.g||ml.indexOf("spdy")==-1&&ml.indexOf("quic")==-1&&ml.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(fh(V,V.h),V.h=null))}if(g.G){const wh=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;wh&&(g.wa=wh,ge(g.J,g.G,wh))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=Tg(g,g.L?g.ba:null,g.W),z.L){Zm(g.h,z);var ee=z,Ue=g.O;Ue&&(ee.H=Ue),ee.D&&(ch(ee),al(ee)),g.g=z}else _g(g);d.i.length>0&&dl(d)}else pe[0]!="stop"&&pe[0]!="close"||zr(d,7);else d.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?zr(d,7):yh(d):pe[0]!="noop"&&d.l&&d.l.qa(pe),d.A=0)}}ro(4)}catch{}}var SS=class{constructor(a,h){this.g=a,this.map=h}};function Ym(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xm(a){return a.h?1:a.g?a.g.size:0}function dh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fh(a,h){a.g?a.g.add(h):a.h=h}function Zm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ym.prototype.cancel=function(){if(this.i=eg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return I(a.i)}var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AS(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,V=null;g>=0?(N=a[d].substring(0,g),V=a[d].substring(g+1)):N=a[d],h(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof $n?(this.l=a.l,lo(this,a.j),this.o=a.o,this.g=a.g,uo(this,a.u),this.h=a.h,ph(this,ag(a.i)),this.m=a.m):a&&(h=String(a).match(tg))?(this.l=!1,lo(this,h[1]||"",!0),this.o=co(h[2]||""),this.g=co(h[3]||"",!0),uo(this,h[4]),this.h=co(h[5]||"",!0),ph(this,h[6]||"",!0),this.m=co(h[7]||"")):(this.l=!1,this.i=new fo(null,this.l))}$n.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ho(h,ng,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ho(h,ng,!0),"@"),a.push(oo(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ho(d,d.charAt(0)=="/"?CS:PS,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ho(d,xS)),a.join("")},$n.prototype.resolve=function(a){const h=nn(this);let d=!!a.j;d?lo(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)uo(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let z=0;z<N.length;){const ee=N[z++];ee=="."?g&&z==N.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&z==N.length&&V.push("")):(V.push(ee),g=!0)}g=V.join("/")}else g=N}return d?h.h=g:d=a.i.toString()!=="",d?ph(h,ag(a.i)):d=!!a.m,d&&(h.m=a.m),h};function nn(a){return new $n(a)}function lo(a,h,d){a.j=d?co(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function uo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ph(a,h,d){h instanceof fo?(a.i=h,NS(a.i,a.l)):(d||(h=ho(h,kS)),a.i=new fo(h,a.l))}function ge(a,h,d){a.i.set(h,d)}function ll(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function co(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ho(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,RS),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ng=/[#\/\?@]/g,PS=/[#\?:]/g,CS=/[#\?]/g,kS=/[#\?@]/g,xS=/#/g;function fo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&AS(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=fo.prototype,t.add=function(a,h){Br(this),this.i=null,a=Oi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function rg(a,h){Br(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ig(a,h){return Br(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)};function sg(a,h){Br(a);let d=[];if(typeof h=="string")ig(a,h)&&(d=d.concat(a.g.get(Oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Br(this),this.i=null,a=Oi(this,a),ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=sg(this,a),a.length>0?String(a[0]):h):h};function og(a,h,d){rg(a,h),d.length>0&&(a.i=null,a.g.set(Oi(a,h),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const N=oo(d);d=sg(this,d);for(let V=0;V<d.length;V++){let z=N;d[V]!==""&&(z+="="+oo(d[V])),a.push(z)}}return this.i=a.join("&")};function ag(a){const h=new fo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function NS(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(rg(this,g),og(this,N,d))},a)),a.j=h}function DS(a,h){const d=new so;if(o.Image){const g=new Image;g.onload=f(qn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(qn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(qn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(qn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function VS(a,h){const d=new so,g=new AbortController,N=setTimeout(()=>{g.abort(),qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?qn(d,"TestPingServer: ok",!0,h):qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),qn(d,"TestPingServer: error",!1,h)})}function qn(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function bS(){this.g=new gS}function mh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(mh,Lm),mh.prototype.g=function(){return new ul(this.i,this.h)};function ul(a,h){et.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ul,et),t=ul.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,mo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,po(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,mo(this)),this.g&&(this.readyState=3,mo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function lg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?po(this):mo(this),this.readyState==3&&lg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,po(this))},t.Na=function(a){this.g&&(this.response=a,po(this))},t.ga=function(){this.g&&po(this)};function po(a){a.readyState=4,a.l=null,a.j=null,a.B=null,mo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function mo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ug(a){let h="";return Y(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function gh(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ug(d),typeof a=="string"?d!=null&&oo(d):ge(a,h,d))}function Ce(a){et.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ce,et);var OS=/^https?$/i,MS=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){cg(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(MS,h,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){cg(this,V)}};function cg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,hg(a),cl(a)}function hg(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ut(this,"complete"),ut(this,"abort"),cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cl(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?dg(this):this.Xa())},t.Xa=function(){dg(this)};function dg(a){if(a.h&&typeof s<"u"){if(a.v&&Hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ut(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=V===0){let z=String(a.D).match(tg)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!OS.test(z?z.toLowerCase():"")}d=g}if(d)ut(a,"complete"),ut(a,"success");else{a.o=6;try{var N=Hn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",hg(a)}}finally{cl(a)}}}}function cl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||ut(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),mS(h)}};function fg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LS(a){const h={};a=(a.g&&Hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var d=IS(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[N]||[];h[N]=V,V.push(d)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function go(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function pg(a){this.za=0,this.i=[],this.j=new so,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=go("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=go("baseRetryDelayMs",5e3,a),this.Za=go("retryDelaySeedMs",1e4,a),this.Ta=go("forwardChannelMaxRetries",2,a),this.va=go("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ym(a&&a.concurrentRequestLimit),this.Ba=new bS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){ct(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Tg(this,null,this.W),dl(this)};function yh(a){if(mg(a),a.I==3){var h=a.V++,d=nn(a.J);if(ge(d,"SID",a.M),ge(d,"RID",h),ge(d,"TYPE","terminate"),yo(a,d),h=new zn(a,a.j,h),h.M=2,h.A=ll(nn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Sg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),al(h)}Eg(a)}function hl(a){a.g&&(vh(a),a.g.cancel(),a.g=null)}function mg(a){hl(a),a.v&&(o.clearTimeout(a.v),a.v=null),fl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function dl(a){if(!Jm(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),F||(M(),F=!0),v.add(h,a),a.D=0}}function FS(a,h){return Xm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=io(c(a.Ea,a,h),Ig(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new zn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ve(V),Lr(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=yg(this,N,h),d=nn(this.J),ge(d,"RID",a),ge(d,"CVER",22),this.G&&ge(d,"X-HTTP-Session-Id",this.G),yo(this,d),V&&(this.R?h="headers="+oo(ug(V))+"&"+h:this.u&&gh(d,this.u,V)),fh(this.h,N),this.Ra&&ge(d,"TYPE","init"),this.S?(ge(d,"$req",h),ge(d,"SID","null"),N.U=!0,uh(N,d,null)):uh(N,d,h),this.I=2}}else this.I==3&&(a?gg(this,a):this.i.length==0||Jm(this.h)||gg(this))};function gg(a,h){var d;h?d=h.l:d=a.V++;const g=nn(a.J);ge(g,"SID",a.M),ge(g,"RID",d),ge(g,"AID",a.K),yo(a,g),a.u&&a.o&&gh(g,a.u,a.o),d=new zn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=yg(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fh(a.h,d),uh(d,g,h)}function yo(a,h){a.H&&Y(a.H,function(d,g){ge(h,g,d)}),a.l&&Y({},function(d,g){ge(h,g,d)})}function yg(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let ee=-1;for(;;){const Ue=["count="+d];ee==-1?d>0?(ee=N[0].g,Ue.push("ofs="+ee)):ee=0:Ue.push("ofs="+ee);let pe=!0;for(let qe=0;qe<d;qe++){var V=N[qe].g;const rn=N[qe].map;if(V-=ee,V<0)ee=Math.max(0,N[qe].g-100),pe=!1;else try{V="req"+V+"_"||"";try{var z=rn instanceof Map?rn:Object.entries(rn);for(const[$r,Gn]of z){let Kn=Gn;l(Gn)&&(Kn=ih(Gn)),Ue.push(V+$r+"="+encodeURIComponent(Kn))}}catch($r){throw Ue.push(V+"type="+encodeURIComponent("_badmap")),$r}}catch{g&&g(rn)}}if(pe){z=Ue.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function _g(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),F||(M(),F=!0),v.add(h,a),a.A=0}}function _h(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=io(c(a.Da,a),Ig(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,vg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=io(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),hl(this),vg(this))};function vh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vg(a){a.g=new zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);ge(h,"RID","rpc"),ge(h,"SID",a.M),ge(h,"AID",a.K),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(h,"TO",a.ia),ge(h,"TYPE","xmlhttp"),yo(a,h),a.u&&a.o&&gh(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ll(nn(h)),d.u=null,d.R=!0,Km(d,a)}t.Va=function(){this.C!=null&&(this.C=null,hl(this),_h(this),ct(19))};function fl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wg(a,h){var d=null;if(a.g==h){fl(a),vh(a),a.g=null;var g=2}else if(dh(a.h,h))d=h.G,Zm(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=sl(),ut(g,new zm(g,d)),dl(a)}else _g(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&FS(a,h)||g==2&&_h(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function Ig(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const N=!g;g=new $n(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||lo(g,"https"),ll(g),N?DS(g.toString(),d):VS(g.toString(),d)}else ct(2);a.I=0,a.l&&a.l.pa(h),Eg(a),mg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Eg(a){if(a.I=0,a.ja=[],a.l){const h=eg(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Tg(a,h,d){var g=d instanceof $n?nn(d):new $n(d);if(g.g!="")h&&(g.g=h+"."+g.g),uo(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const V=new $n(null);g&&lo(V,g),h&&(V.g=h),N&&uo(V,N),d&&(V.h=d),g=V}return d=a.G,h=a.wa,d&&h&&ge(g,d,h),ge(g,"VER",a.ka),yo(a,g),g}function Sg(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new mh({ab:d})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ag(){}t=Ag.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function pl(){}pl.prototype.g=function(a,h){return new Tt(a,h)};function Tt(a,h){et.call(this),this.g=new pg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Mi(this)}p(Tt,et),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){yh(this.g)},Tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ih(a),a=d);h.i.push(new SS(h.Ya++,a)),h.I==3&&dl(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,yh(this.g),delete this.g,Tt.Z.N.call(this)};function Rg(a){sh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Rg,sh);function Pg(){oh.call(this),this.status=1}p(Pg,oh);function Mi(a){this.g=a}p(Mi,Ag),Mi.prototype.ra=function(){ut(this.g,"a")},Mi.prototype.qa=function(a){ut(this.g,new Rg(a))},Mi.prototype.pa=function(a){ut(this.g,new Pg)},Mi.prototype.oa=function(){ut(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,YE=function(){return new pl},QE=function(){return sl()},WE=Ur,cf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,ru=ol,$m.COMPLETE="complete",KE=$m,Fm.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",et.prototype.listen=et.prototype.J,Mo=Fm,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,GE=Ce}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Ys="12.8.0";function Qk(t){Ys=t}/**
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
 */const wi=new xp("@firebase/firestore");function Hi(){return wi.logLevel}function U(t,...e){if(wi.logLevel<=ie.DEBUG){const n=e.map($p);wi.debug(`Firestore (${Ys}): ${t}`,...n)}}function dt(t,...e){if(wi.logLevel<=ie.ERROR){const n=e.map($p);wi.error(`Firestore (${Ys}): ${t}`,...n)}}function Ii(t,...e){if(wi.logLevel<=ie.WARN){const n=e.map($p);wi.warn(`Firestore (${Ys}): ${t}`,...n)}}function $p(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,JE(t,r,n)}function JE(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw dt(r),new Error(r)}function K(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||JE(e,i,r)}function X(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xk{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){K(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new XE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class Zk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ex{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){K(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new d_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(K(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new d_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function hf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ed(i)===ed(s)?J(i,s):ed(i)?1:-1}return J(t.length,e.length)}const rx=55296,ix=57343;function ed(t){const e=t.charCodeAt(0);return e>=rx&&e<=ix}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ZE(t){return t+"\0"}/**
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
 */const f_="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return J(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),i=ln.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(n)):hf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class ue extends ln{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const sx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ln{construct(e,n,r){return new Se(e,n,r)}static isValidIdentifier(e){return sx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f_}static keyField(){return new Se([f_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ue.fromString(e))}static fromName(e){return new $(ue.fromString(e).popFirst(5))}static empty(){return new $(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ue(e.slice()))}}/**
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
 */function eT(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ox(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!$.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if($.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Wa(t,e){if(!tT(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const g_=-62135596800,y_=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*y_);return new ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<g_)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/y_}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wa(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-g_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:Oe("string",ce._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ce(0,0))}static max(){return new W(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Aa=-1;class Ku{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function df(t){return t.fields.find(e=>e.kind===2)}function Wr(t){return t.fields.filter(e=>e.kind!==2)}Ku.UNKNOWN_ID=-1;class iu{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ra{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ra(0,xt.min())}}function ax(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new ce(n+1,0):new ce(n,r));return new xt(i,$.empty(),e)}function nT(t){return new xt(t.readTime,t.key,Aa)}class xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xt(W.min(),$.empty(),Aa)}static max(){return new xt(W.max(),$.empty(),Aa)}}function Hp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const rT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ni(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==rT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */const At="SimpleDb";class xc{static open(e,n,r,i){try{return new xc(n,e.transaction(i,r))}catch(s){throw new Xo(n,s)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new Er,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new Xo(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=Gp(r.target.error);this.S.reject(new Xo(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(At,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new ux(n)}}class Tr{static delete(e){return U(At,"Removing database:",e),Yr(ZI().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!lE())return!1;if(Tr.F())return!0;const e=ze(),n=Tr.M(e),r=0<n&&n<10,i=sT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,Tr.M(ze())===12.2&&dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(U(At,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Xo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xo(e,o))},i.onupgradeneeded=s=>{U(At,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{U(At,"Database upgrade to version "+this.version+" complete")})}})),this.K&&(this.db.onversionchange=n=>this.K(n)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const l=xc.open(this.db,e,s?"readonly":"readwrite",r),u=i(l).next(c=>(l.C(),c)).catch(c=>(l.abort(c),k.reject(c))).toPromise();return u.catch(()=>{}),await l.D,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(U(At,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function sT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class lx{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Yr(this.U.delete())}}class Xo extends B{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Or(t){return t.name==="IndexedDbTransactionError"}class ux{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U(At,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(U(At,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yr(r)}add(e){return U(At,"ADD",this.store.name,e,e),Yr(this.store.add(e))}get(e){return Yr(this.store.get(e)).next(n=>(n===void 0&&(n=null),U(At,"GET",this.store.name,e,n),n))}delete(e){return U(At,"DELETE",this.store.name,e),Yr(this.store.delete(e))}count(){return U(At,"COUNT",this.store.name),Yr(this.store.count())}H(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new k((o,l)=>{s.onerror=u=>{l(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.J(s,(l,u)=>{o.push(u)}).next(()=>o)}}Z(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new k((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,n){U(At,"DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.J(i,(s,o,l)=>l.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.J(i,n)}te(e){const n=this.cursor({});return new k((r,i)=>{n.onerror=s=>{const o=Gp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}J(e,n){const r=[];return new k((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const u=new lx(l),c=n(l.primaryKey,l.value,u);if(c instanceof k){const f=c.catch(p=>(u.done(),k.reject(p)));r.push(f)}u.isDone?i():u.G===null?l.continue():l.continue(u.G)}}).next(()=>k.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Yr(t){return new k((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Gp(r.target.error);n(i)}})}let __=!1;function Gp(t){const e=Tr.M(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return __||(__=!0,setTimeout(()=>{throw r},0)),r}}return t}const Zo="IndexBackfiller";class cx{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){U(Zo,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();U(Zo,`Documents written: ${n}`)}catch(n){Or(n)?U(Zo,"Ignoring IndexedDB error during index backfill: ",n):await Ni(n)}await this.re(6e4)})}}class hx{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let i=n,s=!0;return k.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(Zo,`Processing collection: ${o}`),this.oe(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>n-i)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(l=>(U(Zo,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,n,l))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=nT(s);Hp(o,r)>0&&(r=o)}),new xt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ft{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ft.ce=-1;/**
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
 */const li=-1;function Nc(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function dx(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wu="";function at(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=v_(e)),e=fx(t.get(n),e);return v_(e)}function fx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Wu:n+="";break;default:n+=s}}return n}function v_(t){return t+Wu+""}function cn(t){const e=t.length;if(K(e>=2,64408,{path:t}),e===2)return K(t.charAt(0)===Wu&&t.charAt(1)==="",56145,{path:t}),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf(Wu,s);switch((o<0||o>n)&&G(50515,{path:t}),t.charAt(o+1)){case"":const l=t.substring(s,o);let u;i.length===0?u=l:(i+=l,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G(61167,{path:t})}s=o+2}return new ue(r)}/**
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
 */const Qr="remoteDocuments",Qa="owner",Fi="owner",Ca="mutationQueues",px="userId",Kt="mutations",w_="batchId",ii="userMutationsIndex",I_=["userId","batchId"];/**
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
 */function su(t,e){return[t,at(e)]}function oT(t,e,n){return[t,at(e),n]}const mx={},Ns="documentMutations",Qu="remoteDocumentsV14",gx=["prefixPath","collectionGroup","readTime","documentId"],ou="documentKeyIndex",yx=["prefixPath","collectionGroup","documentId"],aT="collectionGroupIndex",_x=["collectionGroup","readTime","prefixPath","documentId"],ka="remoteDocumentGlobal",ff="remoteDocumentGlobalKey",Ds="targets",lT="queryTargetsIndex",vx=["canonicalId","targetId"],Vs="targetDocuments",wx=["targetId","path"],Kp="documentTargetsIndex",Ix=["path","targetId"],Yu="targetGlobalKey",ui="targetGlobal",xa="collectionParents",Ex=["collectionId","parent"],bs="clientMetadata",Tx="clientId",Dc="bundles",Sx="bundleId",Vc="namedQueries",Ax="name",Wp="indexConfiguration",Rx="indexId",pf="collectionGroupIndex",Px="collectionGroup",ea="indexState",Cx=["indexId","uid"],uT="sequenceNumberIndex",kx=["uid","sequenceNumber"],ta="indexEntries",xx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],cT="documentKeyIndex",Nx=["indexId","uid","orderedDocumentKey"],bc="documentOverlays",Dx=["userId","collectionPath","documentId"],mf="collectionPathOverlayIndex",Vx=["userId","collectionPath","largestBatchId"],hT="collectionGroupOverlayIndex",bx=["userId","collectionGroup","largestBatchId"],Qp="globals",Ox="name",dT=[Ca,Kt,Ns,Qr,Ds,Qa,ui,Vs,bs,ka,xa,Dc,Vc],Mx=[...dT,bc],fT=[Ca,Kt,Ns,Qu,Ds,Qa,ui,Vs,bs,ka,xa,Dc,Vc,bc],pT=fT,Yp=[...pT,Wp,ea,ta],Lx=Yp,mT=[...Yp,Qp],Fx=mT;/**
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
 */class gf extends iT{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function $e(t,e){const n=X(t);return Tr.O(n.le,e)}/**
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
 */function E_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ol(this.root,e,this.comparator,!0)}}class Ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new T_(this.data.getIterator())}getIteratorFrom(e){return new T_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class T_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ui(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new vt([])}unionWith(e){let n=new fe(Se.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class yT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yT("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(K(!!t,39018),typeof t=="string"){let e=0;const n=Ux.exec(t);if(K(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */const _T="server_timestamp",vT="__type__",wT="__previous_value__",IT="__local_write_time__";function Jp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vT])==null?void 0:r.stringValue)===_T}function Oc(t){const e=t.mapValue.fields[wT];return Jp(e)?Oc(e):e}function Na(t){const e=On(t.mapValue.fields[IT].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class jx{constructor(e,n,r,i,s,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Ju="(default)";class Ei{constructor(e,n){this.projectId=e,this.database=n||Ju}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}function Bx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(t.options.projectId,e)}/**
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
 */const Xp="__type__",ET="__max__",ur={mapValue:{fields:{__type__:{stringValue:ET}}}},Zp="__vector__",Os="value",au={nullValue:"NULL_VALUE"};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jp(t)?4:TT(t)?9007199254740991:Mc(t)?10:11:G(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Na(t).isEqual(Na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=On(i.timestampValue),l=On(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mn(i.bytesValue).isEqual(Mn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),l=we(s.doubleValue);return o===l?Pa(o)===Pa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(E_(o)!==E_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Da(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Cr(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=we(s.integerValue||s.doubleValue),u=we(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return S_(t.timestampValue,e.timestampValue);case 4:return S_(Na(t),Na(e));case 5:return hf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Mn(s),u=Mn(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=J(l[c],u[c]);if(f!==0)return f}return J(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(we(s.latitude),we(o.latitude));return l!==0?l:J(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return A_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,R,P;const l=s.fields||{},u=o.fields||{},c=(m=l[Os])==null?void 0:m.arrayValue,f=(I=u[Os])==null?void 0:I.arrayValue,p=J(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:A_(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ur.mapValue&&o===ur.mapValue)return 0;if(s===ur.mapValue)return 1;if(o===ur.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=hf(u[p],f[p]);if(m!==0)return m;const I=Cr(l[u[p]],c[f[p]]);if(I!==0)return I}return J(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function S_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=On(t),r=On(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function A_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cr(n[i],r[i]);if(s)return s}return J(n.length,r.length)}function Ms(t){return yf(t)}function yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yf(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function lu(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(t);return e?16+lu(e):16;case 5:return 2*t.stringValue.length;case 6:return Mn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+lu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Mr(r.fields,(s,o)=>{i+=s.length+lu(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Va(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function ba(t){return!!t&&"arrayValue"in t}function R_(t){return!!t&&"nullValue"in t}function P_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uu(t){return!!t&&"mapValue"in t}function Mc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Xp])==null?void 0:r.stringValue)===Zp}function na(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=na(t.arrayValue.values[n]);return e}return{...t}}function TT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ET}const ST={mapValue:{fields:{[Xp]:{stringValue:Zp},[Os]:{arrayValue:{}}}}};function zx(t){return"nullValue"in t?au:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Va(Ei.empty(),$.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Mc(t)?ST:{mapValue:{}}:G(35942,{value:t})}function $x(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Va(Ei.empty(),$.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?ST:"mapValue"in t?Mc(t)?{mapValue:{}}:ur:G(61959,{value:t})}function C_(t,e){const n=Cr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function k_(t,e){const n=Cr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=na(n)}setAll(e){let n=Se.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=na(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(na(this.value))}}function AT(t){const e=[];return Mr(t.fields,(n,r)=>{const i=new Se([n]);if(uu(r)){const s=AT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
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
 */class xe{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),W.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,W.min(),W.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,W.min(),W.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ls{constructor(e,n){this.position=e,this.inclusive=n}}function x_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Cr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function N_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function qx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class RT{}class se extends RT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Hx(e,n,r):n==="array-contains"?new Wx(e,r):n==="in"?new DT(e,r):n==="not-in"?new Qx(e,r):n==="array-contains-any"?new Yx(e,r):new se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Gx(e,r):new Kx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cr(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(Cr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends RT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new he(e,n)}matches(e){return Fs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fs(t){return t.op==="and"}function vf(t){return t.op==="or"}function em(t){return PT(t)&&Fs(t)}function PT(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function wf(t){if(t instanceof se)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(em(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function CT(t,e){return t instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&CT(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function kT(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function xT(t){return t instanceof se?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(xT).join(" ,")+"}"}(t):"Filter"}class Hx extends se{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gx extends se{constructor(e,n){super(e,"in",n),this.keys=NT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kx extends se{constructor(e,n){super(e,"not-in",n),this.keys=NT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Wx extends se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ba(n)&&Da(n.arrayValue,this.value)}}class DT extends se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class Qx extends se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Da(this.value.arrayValue,n)}}class Yx extends se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ba(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class Jx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function If(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Jx(t,e,n,r,i,s,o)}function Ti(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.Te=n}return e.Te}function Ya(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N_(t.startAt,e.startAt)&&N_(t.endAt,e.endAt)}function Xu(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Zu(t,e){return t.filters.filter(n=>n instanceof se&&n.field.isEqual(e))}function D_(t,e,n){let r=au,i=!0;for(const s of Zu(t,e)){let o=au,l=!0;switch(s.op){case"<":case"<=":o=zx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=au}C_({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];C_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function V_(t,e,n){let r=ur,i=!0;for(const s of Zu(t,e)){let o=ur,l=!0;switch(s.op){case">=":case">":o=$x(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=ur}k_({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];k_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Js{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Xx(t,e,n,r,i,s,o,l){return new Js(t,e,n,r,i,s,o,l)}function Lc(t){return new Js(t)}function b_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zx(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function VT(t){return t.collectionGroup!==null}function ra(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new fe(Se.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Oa(s,r))}),n.has(Se.keyField().canonicalString())||e.Ie.push(new Oa(Se.keyField(),r))}return e.Ie}function jt(t){const e=X(t);return e.Ee||(e.Ee=eN(e,ra(t))),e.Ee}function eN(t,e){if(t.limitType==="F")return If(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oa(i.field,s)});const n=t.endAt?new Ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ls(t.startAt.position,t.startAt.inclusive):null;return If(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ef(t,e){const n=t.filters.concat([e]);return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tN(t,e){const n=t.explicitOrderBy.concat([e]);return new Js(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Tf(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fc(t,e){return Ya(jt(t),jt(e))&&t.limitType===e.limitType}function bT(t){return`${Ti(jt(t))}|lt:${t.limitType}`}function Gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xT(i)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ms(i)).join(",")),`Target(${r})`}(jt(t))}; limitType=${t.limitType})`}function Ja(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ra(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=x_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ra(r),i)||r.endAt&&!function(o,l,u){const c=x_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ra(r),i))}(t,e)}function nN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function OT(t){return(e,n)=>{let r=!1;for(const i of ra(t)){const s=rN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rN(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Cr(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class Un{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gT(this.inner)}size(){return this.innerSize}}/**
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
 */const iN=new Ee($.comparator);function Pt(){return iN}const MT=new Ee($.comparator);function Lo(...t){let e=MT;for(const n of t)e=e.insert(n.key,n);return e}function LT(t){let e=MT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hn(){return ia()}function FT(){return ia()}function ia(){return new Un(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new Ee($.comparator),oN=new fe($.comparator);function te(...t){let e=oN;for(const n of t)e=e.add(n);return e}const aN=new fe(J);function lN(){return aN}/**
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
 */function tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function UT(t){return{integerValue:""+t}}function uN(t,e){return dx(e)?UT(e):tm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Uc{constructor(){this._=void 0}}function cN(t,e,n){return t instanceof Us?function(i,s){const o={fields:{[vT]:{stringValue:_T},[IT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jp(s)&&(s=Oc(s)),s&&(o.fields[wT]=s),{mapValue:o}}(n,e):t instanceof js?BT(t,e):t instanceof Bs?zT(t,e):function(i,s){const o=jT(i,s),l=O_(o)+O_(i.Ae);return _f(o)&&_f(i.Ae)?UT(l):tm(i.serializer,l)}(t,e)}function hN(t,e,n){return t instanceof js?BT(t,e):t instanceof Bs?zT(t,e):n}function jT(t,e){return t instanceof Ma?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Us extends Uc{}class js extends Uc{constructor(e){super(),this.elements=e}}function BT(t,e){const n=$T(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends Uc{constructor(e){super(),this.elements=e}}function zT(t,e){let n=$T(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Ma extends Uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function O_(t){return we(t.integerValue||t.doubleValue)}function $T(t){return ba(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class qT{constructor(e,n){this.field=e,this.transform=n}}function dN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof js&&i instanceof js||r instanceof Bs&&i instanceof Bs?xs(r.elements,i.elements,_n):r instanceof Ma&&i instanceof Ma?_n(r.Ae,i.Ae):r instanceof Us&&i instanceof Us}(t.transform,e.transform)}class fN{constructor(e,n){this.version=e,this.transformResults=n}}class Ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function HT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xa(t.key,Ke.none()):new Xs(t.key,t.data,Ke.none());{const n=t.data,r=ot.empty();let i=new fe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jn(t.key,r,new vt(i.toArray()),Ke.none())}}function pN(t,e,n){t instanceof Xs?function(i,s,o){const l=i.value.clone(),u=L_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(i,s,o){if(!cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=L_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(GT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,r){return t instanceof Xs?function(s,o,l,u){if(!cu(s.precondition,o))return l;const c=s.value.clone(),f=F_(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof jn?function(s,o,l,u){if(!cu(s.precondition,o))return l;const c=F_(s.fieldTransforms,u,o),f=o.data;return f.setAll(GT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=jT(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function M_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>dN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xs extends jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jn extends jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function L_(t,e,n){const r=new Map;K(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hN(o,l,n[i]))}return r}function F_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cN(s,o,e))}return r}class Xa extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KT extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=HT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>M_(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>M_(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){K(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return sN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class im{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class gN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,oe;function yN(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function WT(t){if(t===void 0)return dt("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ve.OK:return O.OK;case Ve.CANCELLED:return O.CANCELLED;case Ve.UNKNOWN:return O.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return O.INTERNAL;case Ve.UNAVAILABLE:return O.UNAVAILABLE;case Ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ve.NOT_FOUND:return O.NOT_FOUND;case Ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ve.ABORTED:return O.ABORTED;case Ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ve.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function _N(){return new TextEncoder}/**
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
 */const vN=new Ir([4294967295,4294967295],0);function U_(t){const e=_N().encode(t),n=new HE;return n.update(e),new Uint8Array(n.digest())}function j_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fo(`Invalid padding: ${n}`);if(r<0)throw new Fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ir.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ir.fromNumber(r)));return i.compare(vN)===1&&(i=new Ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=U_(e),[r,i]=j_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=U_(e),[r,i]=j_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bc(W.min(),i,new Ee(J),Pt(),te())}}class Za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Za(r,n,te(),te(),te())}}/**
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
 */class hu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class QT{constructor(e,n){this.targetId=e,this.Ce=n}}class YT{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class B_{constructor(){this.ve=0,this.Fe=z_(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Za(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=z_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.He=Ml(),this.Je=Ml(),this.Ze=new Ee(J)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Xu(s))if(r===0){const o=new $(s.path);this.et(n,o,xe.newNoDocument(o,W.min()))}else K(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Mn(r).toUint8Array()}catch(u){if(u instanceof yT)return Ii("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sm(o,i,s)}catch(u){return Ii(u instanceof Fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Xu(l.target)){const u=new $(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,xe.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=te();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Bc(e,n,this.Ze,this.je,r);return this.je=Pt(),this.He=Ml(),this.Je=Ml(),this.Ze=new Ee(J),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new B_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new fe(J),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new fe(J),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new B_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ml(){return new Ee($.comparator)}function z_(){return new Ee($.comparator)}const IN={asc:"ASCENDING",desc:"DESCENDING"},EN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TN={and:"AND",or:"OR"};class SN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sf(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function zs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AN(t,e){return zs(t,e.toTimestamp())}function pt(t){return K(!!t,49232),W.fromTimestamp(function(n){const r=On(n);return new ce(r.seconds,r.nanos)}(t))}function om(t,e){return Af(t,e).canonicalString()}function Af(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function XT(t){const e=ue.fromString(t);return K(a0(e),10190,{key:e.toString()}),e}function ec(t,e){return om(t.databaseId,e.path)}function ci(t,e){const n=XT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(t0(n))}function ZT(t,e){return om(t.databaseId,e)}function e0(t){const e=XT(t);return e.length===4?ue.emptyPath():t0(e)}function Rf(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t0(t){return K(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $_(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function RN(t,e,n){const r=ci(t,e.name),i=pt(e.updateTime),s=e.createTime?pt(e.createTime):W.min(),o=new ot({mapValue:{fields:e.fields}}),l=xe.newFoundDocument(r,i,s,o);return n&&l.setHasCommittedMutations(),n?l.setHasCommittedMutations():l}function PN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(K(f===void 0||typeof f=="string",58123),Fe.fromBase64String(f||"")):(K(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Fe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:WT(c.code);return new B(f,c.message||"")}(o);n=new YT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ci(t,r.document.name),s=pt(r.document.updateTime),o=r.document.createTime?pt(r.document.createTime):W.min(),l=new ot({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new hu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ci(t,r.document),s=r.readTime?pt(r.readTime):W.min(),o=xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ci(t,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gN(i,s),l=r.targetId;n=new QT(l,o)}}return n}function tc(t,e){let n;if(e instanceof Xs)n={update:$_(t,e.key,e.value)};else if(e instanceof Xa)n={delete:ec(t,e.key)};else if(e instanceof jn)n={update:$_(t,e.key,e.data),updateMask:VN(e.fieldMask)};else{if(!(e instanceof KT))return G(16599,{dt:e.type});n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Us)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof js)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ma)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function Pf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ke.updateTime(pt(s.updateTime)):s.exists!==void 0?Ke.exists(s.exists):Ke.none()}(e.currentDocument):Ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let u=null;if("setToServerValue"in l)K(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),u=new Us;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];u=new js(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];u=new Bs(f)}else"increment"in l?u=new Ma(o,l.increment):G(16584,{proto:l});const c=Se.fromServerFormat(l.fieldPath);return new qT(c,u)}(t,i)):[];if(e.update){e.update.name;const i=ci(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new vt(c.map(f=>Se.fromServerFormat(f)))}(e.updateMask);return new jn(i,s,o,n,r)}return new Xs(i,s,n,r)}if(e.delete){const i=ci(t,e.delete);return new Xa(i,n)}if(e.verify){const i=ci(t,e.verify);return new KT(i,n)}return G(1463,{proto:e})}function CN(t,e){return t&&t.length>0?(K(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?pt(i.updateTime):pt(s);return o.isEqual(W.min())&&(o=pt(s)),new fN(o,i.transformResults||[])}(n,e))):[]}function n0(t,e){return{documents:[ZT(t,e.path)]}}function r0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZT(t,i);const s=function(c){if(c.length!==0)return o0(he.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Ki(m.field),direction:xN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function i0(t){let e=e0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){K(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=s0(p);return m instanceof he&&em(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Oa(Wi(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Nc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new Ls(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new Ls(I,m)}(n.endAt)),Xx(e,i,o,s,l,"F",u,c)}function kN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wi(n.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wi(n.unaryFilter.field);return se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wi(n.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wi(n.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return se.create(Wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>s0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function xN(t){return IN[t]}function NN(t){return EN[t]}function DN(t){return TN[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Wi(t){return Se.fromServerFormat(t.fieldPath)}function o0(t){return t instanceof se?function(n){if(n.op==="=="){if(P_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(R_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(P_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(R_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:NN(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>o0(i));return r.length===1?r[0]:{compositeFilter:{op:DN(n.op),filters:r}}}(t):G(54877,{filter:t})}function VN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function l0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Pn{constructor(e,n,r,i,s=W.min(),o=W.min(),l=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class u0{constructor(e){this.yt=e}}function bN(t,e){let n;if(e.document)n=RN(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=Ai(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{const r=$.fromSegments(e.unknownDocument.path),i=Ai(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ce(i[0],i[1]);return W.fromTimestamp(s)}(e.readTime)),n}function q_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:nc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ec(s,o.key),fields:o.data.value.mapValue.fields,updateTime:zs(s,o.version.toTimestamp()),createTime:zs(s,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Si(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:Si(e.version)}}return r}function nc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Si(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ai(t){const e=new ce(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function Jr(t,e){const n=(e.baseMutations||[]).map(s=>Pf(t.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Pf(t.yt,s)),i=ce.fromMillis(e.localWriteTimeMs);return new nm(e.batchId,i,n,r)}function Uo(t){const e=Ai(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ai(t.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){const o=s.documents.length;return K(o===1,1966,{count:o}),jt(Lc(e0(s.documents[0])))}(t.query):function(s){return jt(i0(s))}(t.query),new Pn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function c0(t,e){const n=Si(e.snapshotVersion),r=Si(e.lastLimboFreeSnapshotVersion);let i;i=Xu(e.target)?n0(t.yt,e.target):r0(t.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ti(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function h0(t){const e=i0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tf(e,e.limit,"L"):e}function td(t,e){return new im(e.largestBatchId,Pf(t.yt,e.overlayMutation))}function H_(t,e){const n=e.path.lastSegment();return[t,at(e.path.popLast()),n]}function G_(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Si(r.readTime),documentKey:at(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class ON{getBundleMetadata(e,n){return K_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ai(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return K_(e).put(function(i){return{bundleId:i.id,createTime:Si(pt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return W_(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:h0(s.bundledQuery),readTime:Ai(s.readTime)}}(r)})}saveNamedQuery(e,n){return W_(e).put(function(i){return{name:i.name,readTime:Si(pt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function K_(t){return $e(t,Dc)}function W_(t){return $e(t,Vc)}/**
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
 */class zc{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new zc(e,r)}getOverlay(e,n){return Ro(e).get(H_(this.userId,n)).next(r=>r?td(this.serializer,r):null)}getOverlays(e,n){const r=hn();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const l=new im(n,o);i.push(this.bt(e,l))}),k.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(at(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ro(e).X(mf,l))}),k.waitFor(s)}getOverlaysForCollection(e,n,r){const i=hn(),s=at(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ro(e).H(mf,o).next(l=>{for(const u of l){const c=td(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=hn();let o;const l=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ro(e).ee({index:hT,range:l},(u,c,f)=>{const p=td(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}bt(e,n){return Ro(e).put(function(i,s,o){const[l,u,c]=H_(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:tc(i.yt,o.mutation)}}(this.serializer,this.userId,n))}}function Ro(t){return $e(t,bc)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class MN{St(e){return $e(e,Qp)}getSessionToken(e){return this.St(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.St(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Xr{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),Pa(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=On(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Mn(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?TT(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):Mc(e)?this.kt(e.mapValue,n):(this.Kt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.qt(e.arrayValue,n),this.Nt(n)):G(19022,{Ut:e})}Ot(e,n){this.Ft(n,25),this.$t(e,n)}$t(e,n){n.xt(e)}Kt(e,n){const r=e.fields||{};this.Ft(n,55);for(const i of Object.keys(r))this.Ot(i,n),this.Ct(r[i],n)}kt(e,n){var o,l;const r=e.fields||{};this.Ft(n,53);const i=Os,s=((l=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:l.length)||0;this.Ft(n,15),n.Mt(we(s)),this.Ot(i,n),this.Ct(r[i],n)}qt(e,n){const r=e.values||[];this.Ft(n,50);for(const i of r)this.Ct(i,n)}Lt(e,n){this.Ft(n,37),$.fromName(e).path.forEach(r=>{this.Ft(n,60),this.$t(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}Xr.Wt=new Xr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=255;function LN(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function Q_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=LN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class FN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ht(r.value),r=n.next();this.Jt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=n.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ht(r);else if(r<2048)this.Ht(960|r>>>6),this.Ht(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ht(480|r>>>12),this.Ht(128|63&r>>>6),this.Ht(128|63&r);else{const i=n.codePointAt(0);this.Ht(240|i>>>18),this.Ht(128|63&i>>>12),this.Ht(128|63&i>>>6),this.Ht(128|63&i)}}this.Jt()}Yt(e){const n=this.en(e),r=Q_(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}nn(e){const n=this.en(e),r=Q_(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}rn(){this.sn(ji),this.sn(255)}_n(){this.an(ji),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===ji?(this.sn(ji),this.sn(0)):this.sn(n)}Ht(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===ji?(this.an(ji),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Jt(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class UN{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class jN{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Po{constructor(){this.cn=new FN,this.ascending=new UN(this.cn),this.descending=new jN(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Zr{constructor(e,n,r,i){this.hn=e,this.Pn=n,this.Tn=r,this.In=i}En(){const e=this.In.length,n=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.In,0),n!==e?r.set([0],this.In.length):++r[r.length-1],new Zr(this.hn,this.Pn,this.Tn,r)}Rn(e,n,r){return{indexId:this.hn,uid:e,arrayValue:du(this.Tn),directionalValue:du(this.In),orderedDocumentKey:du(n),documentKey:r.path.toArray()}}An(e,n,r){const i=this.Rn(e,n,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Yn(t,e){let n=t.hn-e.hn;return n!==0?n:(n=Y_(t.Tn,e.Tn),n!==0?n:(n=Y_(t.In,e.In),n!==0?n:$.comparator(t.Pn,e.Pn)))}function Y_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function du(t){return aE()?function(n){let r="";for(let i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return r}(t):t}function J_(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(t)}class X_{constructor(e){this.Vn=new fe((n,r)=>Se.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(K(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const n=df(e);if(n!==void 0&&!this.pn(n))return!1;const r=Wr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const l=this.Vn.getIterator().getNext();if(!i.has(l.field.canonicalString())){const u=r[s];if(!this.yn(l,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],l))return!1}return!0}bn(){if(this.fn)return null;let e=new fe(Se.comparator);const n=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new iu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new iu(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new iu(r.field,r.dir==="asc"?0:1)));return new Ku(Ku.UNKNOWN_ID,this.collectionId,n,Ra.empty())}pn(e){for(const n of this.mn)if(this.yn(n,e))return!0;return!1}yn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}wn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function d0(t){var n,r;if(K(t instanceof se||t instanceof he,20012),t instanceof se){if(t instanceof DT){const i=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(s=>se.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const e=t.filters.map(i=>d0(i));return he.create(e,t.op)}function BN(t){if(t.getFilters().length===0)return[];const e=xf(d0(t));return K(f0(e),7391),Cf(e)||kf(e)?[e]:e.getFilters()}function Cf(t){return t instanceof se}function kf(t){return t instanceof he&&em(t)}function f0(t){return Cf(t)||kf(t)||function(n){if(n instanceof he&&vf(n)){for(const r of n.getFilters())if(!Cf(r)&&!kf(r))return!1;return!0}return!1}(t)}function xf(t){if(K(t instanceof se||t instanceof he,34018),t instanceof se)return t;if(t.filters.length===1)return xf(t.filters[0]);const e=t.filters.map(r=>xf(r));let n=he.create(e,t.op);return n=rc(n),f0(n)?n:(K(n instanceof he,64498),K(Fs(n),40251),K(n.filters.length>1,57927),n.filters.reduce((r,i)=>am(r,i)))}function am(t,e){let n;return K(t instanceof se||t instanceof he,38388),K(e instanceof se||e instanceof he,25473),n=t instanceof se?e instanceof se?function(i,s){return he.create([i,s],"and")}(t,e):Z_(t,e):e instanceof se?Z_(e,t):function(i,s){if(K(i.filters.length>0&&s.filters.length>0,48005),Fs(i)&&Fs(s))return kT(i,s.getFilters());const o=vf(i)?i:s,l=vf(i)?s:i,u=o.filters.map(c=>am(c,l));return he.create(u,"or")}(t,e),rc(n)}function Z_(t,e){if(Fs(e))return kT(e,t.getFilters());{const n=e.filters.map(r=>am(t,r));return he.create(n,"or")}}function rc(t){if(K(t instanceof se||t instanceof he,11850),t instanceof se)return t;const e=t.getFilters();if(e.length===1)return rc(e[0]);if(PT(t))return t;const n=e.map(i=>rc(i)),r=[];return n.forEach(i=>{i instanceof se?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
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
 */class zN{constructor(){this.Sn=new lm}addToCollectionParentIndex(e,n){return this.Sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(xt.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class lm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(ue.comparator)).toArray()}}/**
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
 */const ev="IndexedDbIndexManager",Ll=new Uint8Array(0);class $N{constructor(e,n){this.databaseId=n,this.Dn=new lm,this.Cn=new Un(r=>Ti(r),(r,i)=>Ya(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Dn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Dn.add(n)});const s={collectionId:r,parent:at(i)};return tv(e).put(s)}return k.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ZE(n),""],!1,!0);return tv(e).H(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(cn(o.parent))}return r})}addFieldIndex(e,n){const r=Co(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zi(e);return s.next(l=>{o.put(G_(l,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Co(e),i=zi(e),s=Bi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Co(e),r=Bi(e),i=zi(e);return n.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,n){return k.forEach(this.vn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new X_(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Bi(e);let i=!0;const s=new Map;return k.forEach(this.vn(n),o=>this.Fn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=te();const l=[];return k.forEach(s,(u,c)=>{U(ev,`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(u)} to execute ${Ti(n)}`);const f=function(T,D){const M=df(D);if(M===void 0)return null;for(const F of Zu(T,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),p=function(T,D){const M=new Map;for(const F of Wr(D))for(const v of Zu(T,F.fieldPath))switch(v.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),v.value),Array.from(M.values())}return null}(c,u),m=function(T,D){const M=[];let F=!0;for(const v of Wr(D)){const y=v.kind===0?D_(T,v.fieldPath,T.startAt):V_(T,v.fieldPath,T.startAt);M.push(y.value),F&&(F=y.inclusive)}return new Ls(M,F)}(c,u),I=function(T,D){const M=[];let F=!0;for(const v of Wr(D)){const y=v.kind===0?V_(T,v.fieldPath,T.endAt):D_(T,v.fieldPath,T.endAt);M.push(y.value),F&&(F=y.inclusive)}return new Ls(M,F)}(c,u),R=this.Mn(u,c,m),P=this.Mn(u,c,I),b=this.xn(u,c,p),w=this.On(u.indexId,f,R,m.inclusive,P,I.inclusive,b);return k.forEach(w,_=>r.Z(_,n.limit).next(T=>{T.forEach(D=>{const M=$.fromSegments(D.documentKey);o.has(M)||(o=o.add(M),l.push(M))})}))}).next(()=>l)}return k.resolve(null)})}vn(e){let n=this.Cn.get(e);return n||(e.filters.length===0?n=[e]:n=BN(he.create(e.filters,"and")).map(r=>If(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,n),n)}On(e,n,r,i,s,o,l){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),f=[];for(let p=0;p<u;++p){const m=n?this.Nn(n[p/c]):Ll,I=this.Bn(e,m,r[p%c],i),R=this.Ln(e,m,s[p%c],o),P=l.map(b=>this.Bn(e,m,b,!0));f.push(...this.createRange(I,R,P))}return f}Bn(e,n,r,i){const s=new Zr(e,$.empty(),n,r);return i?s:s.En()}Ln(e,n,r,i){const s=new Zr(e,$.empty(),n,r);return i?s.En():s}Fn(e,n){const r=new X_(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.gn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,n){let r=2;const i=this.vn(n);return k.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new fe(Se.comparator),f=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?f=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}kn(e,n){const r=new Po;for(const i of Wr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);Xr.Wt.Dt(s,o)}return r.un()}Nn(e){const n=new Po;return Xr.Wt.Dt(e,n.ln(0)),n.un()}Kn(e,n){const r=new Po;return Xr.Wt.Dt(Va(this.databaseId,n),r.ln(function(s){const o=Wr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,n,r){if(r===null)return[];let i=[];i.push(new Po);let s=0;for(const o of Wr(e)){const l=r[s++];for(const u of i)if(this.qn(n,o.fieldPath)&&ba(l))i=this.Un(i,o,l);else{const c=u.ln(o.kind);Xr.Wt.Dt(l,c)}}return this.$n(i)}Mn(e,n,r){return this.xn(e,n,r.position)}$n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Un(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const u=new Po;u.seed(l.un()),Xr.Wt.Dt(o,u.ln(n.kind)),s.push(u)}return s}qn(e,n){return!!e.filters.find(r=>r instanceof se&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Co(e),i=zi(e);return(n?r.H(pf,IDBKeyRange.bound(n,n)):r.H()).next(s=>{const o=[];return k.forEach(s,l=>i.get([l.indexId,this.uid]).next(u=>{o.push(function(f,p){const m=p?new Ra(p.sequenceNumber,new xt(Ai(p.readTime),new $(cn(p.documentKey)),p.largestBatchId)):Ra.empty(),I=f.fields.map(([R,P])=>new iu(Se.fromServerFormat(R),P));return new Ku(f.indexId,f.collectionGroup,I,m)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Co(e),s=zi(e);return this.Wn(e).next(o=>i.H(pf,IDBKeyRange.bound(n,n)).next(l=>k.forEach(l,u=>s.put(G_(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return k.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?k.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),k.forEach(l,u=>this.Qn(e,i,u).next(c=>{const f=this.Gn(s,u);return c.isEqual(f)?k.resolve():this.zn(e,s,u,c,f)}))))})}jn(e,n,r,i){return Bi(e).put(i.Rn(this.uid,this.Kn(r,n.key),n.key))}Hn(e,n,r,i){return Bi(e).delete(i.An(this.uid,this.Kn(r,n.key),n.key))}Qn(e,n,r){const i=Bi(e);let s=new fe(Yn);return i.ee({index:cT,range:IDBKeyRange.only([r.indexId,this.uid,du(this.Kn(r,n))])},(o,l)=>{s=s.add(new Zr(r.indexId,n,J_(l.arrayValue),J_(l.directionalValue)))}).next(()=>s)}Gn(e,n){let r=new fe(Yn);const i=this.kn(n,e);if(i==null)return r;const s=df(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ba(o))for(const l of o.arrayValue.values||[])r=r.add(new Zr(n.indexId,e.key,this.Nn(l),i))}else r=r.add(new Zr(n.indexId,e.key,Ll,i));return r}zn(e,n,r,i,s){U(ev,"Updating index entries for document '%s'",n.key);const o=[];return function(u,c,f,p,m){const I=u.getIterator(),R=c.getIterator();let P=Ui(I),b=Ui(R);for(;P||b;){let w=!1,_=!1;if(P&&b){const T=f(P,b);T<0?_=!0:T>0&&(w=!0)}else P!=null?_=!0:w=!0;w?(p(b),b=Ui(R)):_?(m(P),P=Ui(I)):(P=Ui(I),b=Ui(R))}}(i,s,Yn,l=>{o.push(this.jn(e,n,r,l))},l=>{o.push(this.Hn(e,n,r,l))}),k.waitFor(o)}Wn(e){let n=1;return zi(e).ee({index:uT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,l)=>Yn(o,l)).filter((o,l,u)=>!l||Yn(o,u[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=Yn(o,e),u=Yn(o,n);if(l===0)i[0]=e.En();else if(l>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Jn(i[o],i[o+1]))return[];const l=i[o].An(this.uid,Ll,$.empty()),u=i[o+1].An(this.uid,Ll,$.empty());s.push(IDBKeyRange.bound(l,u))}return s}Jn(e,n){return Yn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(nv)}getMinOffset(e,n){return k.mapArray(this.vn(n),r=>this.Fn(e,r).next(i=>i||G(44426))).next(nv)}}function tv(t){return $e(t,xa)}function Bi(t){return $e(t,ta)}function Co(t){return $e(t,Wp)}function zi(t){return $e(t,ea)}function nv(t){K(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Hp(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new xt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p0=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function m0(t,e,n){const r=t.store(Kt),i=t.store(Ns),s=[],o=IDBKeyRange.only(n.batchId);let l=0;const u=r.ee({range:o},(f,p,m)=>(l++,m.delete()));s.push(u.next(()=>{K(l===1,47070,{batchId:n.batchId})}));const c=[];for(const f of n.mutations){const p=oT(e,f.key.path,n.batchId);s.push(i.delete(p)),c.push(f.key)}return k.waitFor(s).next(()=>c)}function ic(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G(14731);e=t.noDocument}return JSON.stringify(e).length}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(p0,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class $c{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,n,r,i){K(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new $c(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Jn(e).ee({index:ii,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Qi(e),o=Jn(e);return o.add({}).next(l=>{K(typeof l=="number",49019);const u=new nm(l,n,r,i),c=function(I,R,P){const b=P.baseMutations.map(_=>tc(I.yt,_)),w=P.mutations.map(_=>tc(I.yt,_));return{userId:R,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:b,mutations:w}}(this.serializer,this.userId,u),f=[];let p=new fe((m,I)=>J(m.canonicalString(),I.canonicalString()));for(const m of i){const I=oT(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),f.push(o.put(c)),f.push(s.put(I,mx))}return p.forEach(m=>{f.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Zn[l]=u.keys()}),k.waitFor(f).next(()=>u)})}lookupMutationBatch(e,n){return Jn(e).get(n).next(r=>r?(K(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),Jr(this.serializer,r)):null)}Xn(e,n){return this.Zn[n]?k.resolve(this.Zn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Zn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Jn(e).ee({index:ii,range:i},(o,l,u)=>{l.userId===this.userId&&(K(l.batchId>=r,47524,{Yn:r}),s=Jr(this.serializer,l)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=li;return Jn(e).ee({index:ii,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,li],[this.userId,Number.POSITIVE_INFINITY]);return Jn(e).H(ii,n).next(r=>r.map(i=>Jr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=su(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Qi(e).ee({range:i},(o,l,u)=>{const[c,f,p]=o,m=cn(f);if(c===this.userId&&n.path.isEqual(m))return Jn(e).get(p).next(I=>{if(!I)throw G(61480,{er:o,batchId:p});K(I.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:I.userId,batchId:p}),s.push(Jr(this.serializer,I))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(J);const i=[];return n.forEach(s=>{const o=su(this.userId,s.path),l=IDBKeyRange.lowerBound(o),u=Qi(e).ee({range:l},(c,f,p)=>{const[m,I,R]=c,P=cn(I);m===this.userId&&s.path.isEqual(P)?r=r.add(R):p.done()});i.push(u)}),k.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=su(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new fe(J);return Qi(e).ee({range:o},(u,c,f)=>{const[p,m,I]=u,R=cn(m);p===this.userId&&r.isPrefixOf(R)?R.length===i&&(l=l.add(I)):f.done()}).next(()=>this.tr(e,l))}tr(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Jn(e).get(s).next(o=>{if(o===null)throw G(35274,{batchId:s});K(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Jr(this.serializer,o))}))}),k.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return m0(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.nr(n.batchId)}),k.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return k.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Qi(e).ee({range:r},(s,o,l)=>{if(s[0]===this.userId){const u=cn(s[1]);i.push(u)}else l.done()}).next(()=>{K(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,n){return g0(e,this.userId,n)}ir(e){return y0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:li,lastStreamToken:""})}}function g0(t,e,n){const r=su(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Qi(t).ee({range:s,Y:!0},(l,u,c)=>{const[f,p,m]=l;f===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function Jn(t){return $e(t,Kt)}function Qi(t){return $e(t,Ns)}function y0(t){return $e(t,Ca)}/**
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
 */class Ri{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ri(0)}static ar(){return new Ri(-1)}}/**
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
 */class qN{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.ur(e).next(n=>{const r=new Ri(n.highestTargetId);return n.highestTargetId=r.next(),this.cr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(n=>W.fromTimestamp(new ce(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.cr(e,i)))}addTargetData(e,n){return this.lr(e,n).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(n,r),this.cr(e,r))))}updateTargetData(e,n){return this.lr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>$i(e).delete(n.targetId)).next(()=>this.ur(e)).next(r=>(K(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return $i(e).ee((o,l)=>{const u=Uo(l);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>k.waitFor(s)).next(()=>i)}forEachTarget(e,n){return $i(e).ee((r,i)=>{const s=Uo(i);n(s)})}ur(e){return iv(e).get(Yu).next(n=>(K(n!==null,2888),n))}cr(e,n){return iv(e).put(Yu,n)}lr(e,n){return $i(e).put(c0(this.serializer,n))}hr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ti(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return $i(e).ee({range:i,index:lT},(o,l,u)=>{const c=Uo(l);Ya(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=or(e);return n.forEach(o=>{const l=at(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),k.waitFor(i)}removeMatchingKeys(e,n,r){const i=or(e);return k.forEach(n,s=>{const o=at(s.path);return k.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=or(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=or(e);let s=te();return i.ee({range:r,Y:!0},(o,l,u)=>{const c=cn(o[1]),f=new $(c);s=s.add(f)}).next(()=>s)}containsKey(e,n){const r=at(n.path),i=IDBKeyRange.bound([r],[ZE(r)],!1,!0);let s=0;return or(e).ee({index:Kp,Y:!0,range:i},([o,l],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}At(e,n){return $i(e).get(n).next(r=>r?Uo(r):null)}}function $i(t){return $e(t,Ds)}function iv(t){return $e(t,ui)}function or(t){return $e(t,Vs)}/**
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
 */const sv="LruGarbageCollector",HN=1048576;function ov([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class GN{constructor(e){this.Pr=e,this.buffer=new fe(ov),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ov(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){U(sv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Or(n)?U(sv,"Ignoring IndexedDB error during garbage collection: ",n):await Ni(n)}await this.Ar(3e5)})}}class KN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return k.resolve(Ft.ce);const r=new GN(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(rv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Hi()<=ie.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function v0(t,e){return new KN(t,e)}/**
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
 */class WN{constructor(e,n){this.db=e,this.garbageCollector=v0(this,n)}dr(e){const n=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}mr(e,n){return this.yr(e,(r,i)=>n(i))}addReference(e,n,r){return Fl(e,r)}removeReference(e,n,r){return Fl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Fl(e,n)}wr(e,n){return function(i,s){let o=!1;return y0(i).te(l=>g0(i,l,s).next(u=>(u&&(o=!0),k.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,l)=>{if(l<=n){const u=this.wr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),or(e).delete(function(p){return[0,at(p.path)]}(o))))});i.push(u)}}).next(()=>k.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Fl(e,n)}yr(e,n){const r=or(e);let i,s=Ft.ce;return r.ee({index:Kp},([o,l],{path:u,sequenceNumber:c})=>{o===0?(s!==Ft.ce&&n(new $(cn(i)),s),s=c,i=u):s=Ft.ce}).next(()=>{s!==Ft.ce&&n(new $(cn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Fl(t,e){return or(t).put(function(r,i){return{targetId:0,path:at(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class w0{constructor(){this.changes=new Un(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return qr(e).put(r)}removeEntry(e,n,r){return qr(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],nc(o),l[l.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.br(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return qr(e).ee({index:ou,range:IDBKeyRange.only(ko(n))},(i,s)=>{r=this.Sr(n,s)}).next(()=>r)}Dr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return qr(e).ee({index:ou,range:IDBKeyRange.only(ko(n))},(i,s)=>{r={document:this.Sr(n,s),size:ic(s)}}).next(()=>r)}getEntries(e,n){let r=Pt();return this.Cr(e,n,(i,s)=>{const o=this.Sr(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,n){let r=Pt(),i=new Ee($.comparator);return this.Cr(e,n,(s,o)=>{const l=this.Sr(s,o);r=r.insert(s,l),i=i.insert(s,ic(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,n,r){if(n.isEmpty())return k.resolve();let i=new fe(uv);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ko(i.first()),ko(i.last())),o=i.getIterator();let l=o.getNext();return qr(e).ee({index:ou,range:s},(u,c,f)=>{const p=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&uv(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,c),l=o.hasNext()?o.getNext():null),l?f.j(ko(l)):f.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,l=[o.popLast().toArray(),o.lastSegment(),nc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return qr(e).H(IDBKeyRange.bound(l,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let f=Pt();for(const p of c){const m=this.Sr($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Ja(n,m)||i.has(m.key))&&(f=f.insert(m.key,m))}return f})}getAllFromCollectionGroup(e,n,r,i){let s=Pt();const o=lv(n,r),l=lv(n,xt.max());return qr(e).ee({index:aT,range:IDBKeyRange.bound(o,l,!0)},(u,c,f)=>{const p=this.Sr($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new YN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return av(e).get(ff).next(n=>(K(!!n,20021),n))}br(e,n){return av(e).put(ff,n)}Sr(e,n){if(n){const r=bN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return xe.newInvalidDocument(e)}}function I0(t){return new QN(t)}class YN extends w0{constructor(e,n){super(),this.Mr=e,this.trackRemovals=n,this.Or=new Un(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new fe((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.Or.get(s);if(n.push(this.Mr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const u=q_(this.Mr.serializer,o);i=i.add(s.path.popLast());const c=ic(u);r+=c-l.size,n.push(this.Mr.addEntry(e,s,u))}else if(r-=l.size,this.trackRemovals){const u=q_(this.Mr.serializer,o.convertToNoDocument(W.min()));n.push(this.Mr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Mr.updateMetadata(e,r)),k.waitFor(n)}getFromCache(e,n){return this.Mr.Dr(e,n).next(r=>(this.Or.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Mr.vr(e,n).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function av(t){return $e(t,ka)}function qr(t){return $e(t,Qu)}function ko(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lv(t,e){const n=e.documentKey.path.toArray();return[t,nc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=J(n[s],r[s]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
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
 */class JN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class E0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&sa(r.mutation,i,vt.empty(),ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=hn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pt();const o=ia(),l=function(){return ia()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof jn)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),sa(f.mutation,c,f.mutation.getFieldMask(),ce.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new JN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ia();let i=new Ee((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=FT();f.forEach(m=>{if(!s.has(m)){const I=HT(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Zx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):VT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(hn());let l=Aa,u=s;return o.next(c=>k.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:LT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Lo();return this.indexManager.getCollectionParents(e,s).next(l=>k.forEach(l,u=>{const c=function(p,m){return new Js(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,xe.newInvalidDocument(f)))});let l=Lo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&sa(f.mutation,c,vt.empty(),ce.now()),Ja(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class XN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return k.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pt(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:h0(i.bundledQuery),readTime:pt(i.readTime)}}(n)),k.resolve()}}/**
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
 */class ZN{constructor(){this.overlays=new Ee($.comparator),this.Lr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hn();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=hn(),s=n.length+1,o=new $(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=hn(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=hn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return k.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new im(n,r));let s=this.Lr.get(n);s===void 0&&(s=te(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eD{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
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
 */class um{constructor(){this.kr=new fe(He.Kr),this.qr=new fe(He.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new He(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new He(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new $(new ue([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new $(new ue([])),r=new He(n,e),i=new He(n,e+1);let s=te();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return $.comparator(e.key,n.key)||J(e.Hr,n.Hr)}static Ur(e,n){return J(e.Hr,n.Hr)||$.comparator(e.key,n.key)}}/**
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
 */class tD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new fe(He.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nm(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?li:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(J);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new He(new $(s),0);let l=new fe(J);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),k.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){K(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return k.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new He(n,0),i=this.Jr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nD{constructor(e){this.ti=e,this.docs=function(){return new Ee($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=Pt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pt();const o=n.path,l=new $(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Hp(nT(f),r)<=0||(i.has(f.key)||Ja(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rD(this)}getSize(e){return k.resolve(this.size)}}class rD extends w0{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class iD{constructor(e){this.persistence=e,this.ri=new Un(n=>Ti(n),Ya),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new um,this.targetCount=0,this.oi=Ri._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),k.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.lr(n),k.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.si.containsKey(n))}}/**
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
 */class cm{constructor(e,n){this._i={},this.overlays={},this.ai=new Ft(0),this.ui=!1,this.ui=!0,this.ci=new eD,this.referenceDelegate=e(this),this.li=new iD(this),this.indexManager=new zN,this.remoteDocumentCache=function(i){return new nD(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new u0(n),this.Pi=new XN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new tD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new sD(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return k.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class sD extends iT{constructor(e){super(),this.currentSequenceNumber=e}}class qc{constructor(e){this.persistence=e,this.Ri=new um,this.Ai=null}static Vi(e){return new qc(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),k.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,r=>{const i=$.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return k.or([()=>k.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class sc{constructor(e,n){this.persistence=e,this.fi=new Un(r=>at(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=v0(this,n)}static Vi(e,n){return new sc(e,n)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return k.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?k.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,W.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),k.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),k.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=lu(e.data.value)),n}wr(e,n,r){return k.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return k.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class oD{constructor(e){this.serializer=e}k(e,n,r,i){const s=new xc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore(Qa)}(e),function(u){u.createObjectStore(Ca,{keyPath:px}),u.createObjectStore(Kt,{keyPath:w_,autoIncrement:!0}).createIndex(ii,I_,{unique:!0}),u.createObjectStore(Ns)}(e),cv(e),function(u){u.createObjectStore(Qr)}(e));let o=k.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Vs),u.deleteObjectStore(Ds),u.deleteObjectStore(ui)}(e),cv(e)),o=o.next(()=>function(u){const c=u.store(ui),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return c.put(Yu,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store(Kt).H().next(p=>{u.deleteObjectStore(Kt),u.createObjectStore(Kt,{keyPath:w_,autoIncrement:!0}).createIndex(ii,I_,{unique:!0});const m=c.store(Kt),I=p.map(R=>m.put(R));return k.waitFor(I)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(bs,{keyPath:Tx})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(ka)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Dc,{keyPath:Sx})})(e),function(u){u.createObjectStore(Vc,{keyPath:Ax})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(bc,{keyPath:Dx});c.createIndex(mf,Vx,{unique:!1}),c.createIndex(hT,bx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(Qu,{keyPath:gx});c.createIndex(ou,yx),c.createIndex(aT,_x)}(e)).next(()=>this.Si(e,s)).next(()=>e.deleteObjectStore(Qr))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(Wp,{keyPath:Rx,autoIncrement:!0}).createIndex(pf,Px,{unique:!1}),u.createObjectStore(ea,{keyPath:Cx}).createIndex(uT,kx,{unique:!1}),u.createObjectStore(ta,{keyPath:xx}).createIndex(cT,Nx,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore(ea).clear()}).next(()=>{n.objectStore(ta).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(Qp,{keyPath:Ox})})(e)})),r<18&&i>=18&&aE()&&(o=o.next(()=>{n.objectStore(ea).clear()}).next(()=>{n.objectStore(ta).clear()})),o}pi(e){let n=0;return e.store(Qr).ee((r,i)=>{n+=ic(i)}).next(()=>{const r={byteSize:n};return e.store(ka).put(ff,r)})}gi(e){const n=e.store(Ca),r=e.store(Kt);return n.H().next(i=>k.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,li],[s.userId,s.lastAcknowledgedBatchId]);return r.H(ii,o).next(l=>k.forEach(l,u=>{K(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=Jr(this.serializer,u);return m0(e,s.userId,c).next(()=>{})}))}))}yi(e){const n=e.store(Vs),r=e.store(Qr);return e.store(ui).get(Yu).next(i=>{const s=[];return r.ee((o,l)=>{const u=new ue(o),c=function(p){return[0,at(p)]}(u);s.push(n.get(c).next(f=>f?k.resolve():(p=>n.put({targetId:0,path:at(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>k.waitFor(s))})}wi(e,n){e.createObjectStore(xa,{keyPath:Ex});const r=n.store(xa),i=new lm,s=o=>{if(i.add(o)){const l=o.lastSegment(),u=o.popLast();return r.put({collectionId:l,parent:at(u)})}};return n.store(Qr).ee({Y:!0},(o,l)=>{const u=new ue(o);return s(u.popLast())}).next(()=>n.store(Ns).ee({Y:!0},([o,l,u],c)=>{const f=cn(l);return s(f.popLast())}))}bi(e){const n=e.store(Ds);return n.ee((r,i)=>{const s=Uo(i),o=c0(this.serializer,s);return n.put(o)})}Si(e,n){const r=n.store(Qr),i=[];return r.ee((s,o)=>{const l=n.store(Qu),u=function(p){return p.document?new $(ue.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):G(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(c))}).next(()=>k.waitFor(i))}Di(e,n){const r=n.store(Kt),i=I0(this.serializer),s=new cm(qc.Vi,this.serializer.yt);return r.H().next(o=>{const l=new Map;return o.forEach(u=>{let c=l.get(u.userId)??te();Jr(this.serializer,u).keys().forEach(f=>c=c.add(f)),l.set(u.userId,c)}),k.forEach(l,(u,c)=>{const f=new Ye(c),p=zc.wt(this.serializer,f),m=s.getIndexManager(f),I=$c.wt(f,this.serializer,m,s.referenceDelegate);return new E0(i,I,p,m).recalculateAndSaveOverlaysForDocumentKeys(new gf(n,Ft.ce),u).next()})})}}function cv(t){t.createObjectStore(Vs,{keyPath:wx}).createIndex(Kp,Ix,{unique:!0}),t.createObjectStore(Ds,{keyPath:"targetId"}).createIndex(lT,vx,{unique:!0}),t.createObjectStore(ui)}const Xn="IndexedDbPersistence",nd=18e5,rd=5e3,id="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",aD="main";class hm{constructor(e,n,r,i,s,o,l,u,c,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ci=s,this.window=o,this.document=l,this.Fi=c,this.Mi=f,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=m=>Promise.resolve(),!hm.v())throw new B(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WN(this,i),this.Ki=n+aD,this.serializer=new u0(u),this.qi=new Tr(this.Ki,this.xi,new oD(this.serializer)),this.ci=new MN,this.li=new qN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=I0(this.serializer),this.Pi=new ON,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&dt(Xn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(O.FAILED_PRECONDITION,id);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new Ft(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}zi(e){return this.ki=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ul(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(n=>{n||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Hi(e)).next(n=>this.isPrimary&&!n?this.Ji(e).next(()=>!1):!!n&&this.Zi(e).next(()=>!0))).catch(e=>{if(Or(e))return U(Xn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(Xn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return xo(e).get(Fi).next(n=>k.resolve(this.Xi(n)))}Yi(e){return Ul(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,nd)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=$e(n,bs);return r.H().next(i=>{const s=this.ns(i,nd),o=i.filter(l=>s.indexOf(l)===-1);return k.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const n of e)this.Ui.removeItem(this.rs(n.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.Mi?k.resolve(!0):xo(e).get(Fi).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,rd)&&!this.ss(n.ownerId)){if(this.Xi(n)&&this.networkEnabled)return!0;if(!this.Xi(n)){if(!n.allowTabSynchronization)throw new B(O.FAILED_PRECONDITION,id);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ul(e).H().next(r=>this.ns(r,rd).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U(Xn,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[Qa,bs],e=>{const n=new gf(e,Ft.ce);return this.Ji(n).next(()=>this.Yi(n))}),this.qi.close(),this.ls()}ns(e,n){return e.filter(r=>this.ts(r.updateTimeMs,n)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Ul(e).H().next(n=>this.ns(n,nd).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,n){return $c.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new $N(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return zc.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,n,r){U(Xn,"Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===18?Fx:u===17?mT:u===16?Lx:u===15?Yp:u===14?pT:u===13?fT:u===12?Mx:u===11?dT:void G(60245)}(this.xi);let o;return this.qi.runTransaction(e,i,s,l=>(o=new gf(l,this.ai?this.ai.next():Ft.ce),n==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw dt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new B(O.FAILED_PRECONDITION,rT);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ps(e){return xo(e).get(Fi).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,rd)&&!this.ss(n.ownerId)&&!this.Xi(n)&&!(this.Mi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(O.FAILED_PRECONDITION,id)})}Zi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xo(e).put(Fi,n)}static v(){return Tr.v()}Ji(e){const n=xo(e);return n.get(Fi).next(r=>this.Xi(r)?(U(Xn,"Releasing primary lease."),n.delete(Fi)):k.resolve())}ts(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(dt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const n=/(?:Version|Mobile)\/1[456]/;oE()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var n;try{const r=((n=this.Ui)==null?void 0:n.getItem(this.rs(e)))!==null;return U(Xn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return dt(Xn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){dt("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xo(t){return $e(t,Qa)}function Ul(t){return $e(t,bs)}function lD(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class uD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class T0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return oE()?8:sT(ze())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uD;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Hi()<=ie.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Hi()<=ie.DEBUG&&U("QueryEngine","Query:",Gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Hi()<=ie.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(n))):k.resolve())}gs(e,n){if(b_(n))return k.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tf(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Tf(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return b_(n)||i.isEqual(W.min())?k.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?k.resolve(null):(Hi()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gi(n)),this.Ds(e,o,n,ax(i,Aa)).next(l=>l))})}bs(e,n){let r=new fe(OT(e));return n.forEach((i,s)=>{Ja(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Hi()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Gi(n)),this.fs.getDocumentsMatchingQuery(e,n,xt.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const fm="LocalStore",cD=3e8;class hD{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ee(J),this.Fs=new Un(s=>Ti(s),Ya),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function S0(t,e,n,r){return new hD(t,e,n,r)}async function A0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function dD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let I=k.resolve();return m.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(P=>{const b=c.docVersions.get(R);K(b!==null,48541),P.version.compareTo(b)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function R0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function fD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Fe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(P,b,w){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=cD?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,f)&&l.push(n.li.updateTargetData(s,I))});let u=Pt(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(pD(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(W.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return k.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function pD(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pt();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):U(fm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function mD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=li),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nf(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Or(o))throw o;U(fm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function hv(t,e,n){const r=X(t);let i=W.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),m=p.Fs.get(f);return m!==void 0?k.resolve(p.vs.get(m)):p.li.getTargetData(c,f)}(r,o,jt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:te())).next(l=>(yD(r,nN(e),l),{documents:l,ks:s})))}function yD(t,e,n){let r=t.Ms.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class dv{constructor(){this.activeTargetIds=lN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P0{constructor(){this.vo=new dv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new dv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _D{Mo(e){}shutdown(){}}/**
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
 */const fv="ConnectivityMonitor";class pv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(fv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){U(fv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let jl=null;function Df(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
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
 */const sd="RestConnection",vD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wD{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Ju?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Df(),l=this.Qo(e,n.toUriEncodedString());U(sd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=Ks(c);return this.zo(e,l,u,r,f).then(p=>(U(sd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ii(sd,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=vD[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class ID{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const rt="WebChannelConnection",No=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class _s extends wD{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!_s.c_){const e=QE();No(e,WE.STAT_EVENT,n=>{n.stat===cf.PROXY?U(rt,"STAT_EVENT: detected buffering proxy"):n.stat===cf.NOPROXY&&U(rt,"STAT_EVENT: detected no buffering proxy")}),_s.c_=!0}}zo(e,n,r,i,s){const o=Df();return new Promise((l,u)=>{const c=new GE;c.setWithCredentials(!0),c.listenOnce(KE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ru.NO_ERROR:const p=c.getResponseJson();U(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ru.TIMEOUT:U(rt,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case ru.HTTP_ERROR:const m=c.getStatus();if(U(rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const P=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(R.status);u(new B(P,R.message))}else u(new B(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{U(rt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);U(rt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Df(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(rt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,m=!1;const I=new ID({Ho:R=>{m?U(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(U(rt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),U(rt,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},Jo:()=>f.close()});return No(f,Mo.EventType.OPEN,()=>{m||(U(rt,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),No(f,Mo.EventType.CLOSE,()=>{m||(m=!0,U(rt,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.E_(f))}),No(f,Mo.EventType.ERROR,R=>{m||(m=!0,Ii(rt,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),I.o_(new B(O.UNAVAILABLE,"The operation could not be completed")))}),No(f,Mo.EventType.MESSAGE,R=>{var P;if(!m){const b=R.data[0];K(!!b,16349);const w=b,_=(w==null?void 0:w.error)||((P=w[0])==null?void 0:P.error);if(_){U(rt,`RPC '${e}' stream ${i} received error:`,_);const T=_.status;let D=function(v){const y=Ve[v];if(y!==void 0)return WT(y)}(T),M=_.message;D===void 0&&(D=O.INTERNAL,M="Unknown error status: "+T+" with message "+_.message),m=!0,I.o_(new B(D,M)),f.close()}else U(rt,`RPC '${e}' stream ${i} received:`,b),I.__(b)}}),_s.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return YE()}}/**
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
 */function ED(t){return new _s(t)}/**
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
 */function TD(){return typeof window<"u"?window:null}function fu(){return typeof document<"u"?document:null}/**
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
 */function Hc(t){return new SN(t,!0)}/**
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
 */_s.c_=!1;class C0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const mv="PersistentStream";class k0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new C0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(mv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(U(mv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SD extends k0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=PN(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?pt(o.readTime):W.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Rf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Xu(u)?{documents:n0(s,u)}:{query:r0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=JT(s,o.resumeToken);const c=Sf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(W.min())>0){l.readTime=zs(s,o.snapshotVersion.toTimestamp());const c=Sf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=kN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Rf(this.serializer),n.removeTarget=e,this.K_(n)}}class AD extends k0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=CN(e.writeResults,e.commitTime),r=pt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Rf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tc(this.serializer,r))};this.K_(n)}}/**
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
 */class RD{}class PD extends RD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Af(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Af(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function CD(t,e,n,r){return new PD(t,e,n,r)}class kD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dt(n),this.aa=!1):U("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pi="RemoteStore";class xD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Di(this)&&(U(Pi,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await el(c),c.Va.set("Unknown"),c.Ea.delete(4),await Gc(c)}(this))})}),this.Va=new kD(r,i)}}async function Gc(t){if(Di(t))for(const e of t.Ra)await e(!0)}async function el(t){for(const e of t.Ra)await e(!1)}function x0(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ym(n)?gm(n):Zs(n).O_()&&mm(n,e))}function pm(t,e){const n=X(t),r=Zs(n);n.Ia.delete(e),r.O_()&&N0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Di(n)&&n.Va.set("Unknown"))}function mm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).Z_(e)}function N0(t,e){t.da.$e(e),Zs(t).X_(e)}function gm(t){t.da=new wN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.Va.ua()}function ym(t){return Di(t)&&!Zs(t).x_()&&t.Ia.size>0}function Di(t){return X(t).Ea.size===0}function D0(t){t.da=void 0}async function ND(t){t.Va.set("Online")}async function DD(t){t.Ia.forEach((e,n)=>{mm(t,e)})}async function VD(t,e){D0(t),ym(t)?(t.Va.ha(e),gm(t)):t.Va.set("Unknown")}async function bD(t,e,n){if(t.Va.set("Online"),e instanceof YT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){U(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof hu?t.da.Xe(e):e instanceof QT?t.da.st(e):t.da.tt(e),!n.isEqual(W.min()))try{const r=await R0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Fe.EMPTY_BYTE_STRING,f.snapshotVersion)),N0(s,u);const p=new Pn(f.target,u,c,f.sequenceNumber);mm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){U(Pi,"Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Or(e))throw e;t.Ea.add(1),await el(t),t.Va.set("Offline"),n||(n=()=>R0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U(Pi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Gc(t)})}function V0(t,e){return e().catch(n=>oc(t,n,e))}async function tl(t){const e=X(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:li;for(;OD(e);)try{const i=await mD(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,MD(e,i)}catch(i){await oc(e,i)}b0(e)&&O0(e)}function OD(t){return Di(t)&&t.Ta.length<10}function MD(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function b0(t){return Di(t)&&!kr(t).x_()&&t.Ta.length>0}function O0(t){kr(t).start()}async function LD(t){kr(t).ra()}async function FD(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function UD(t,e,n){const r=t.Ta.shift(),i=rm.from(r,e,n);await V0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tl(t)}async function jD(t,e){e&&kr(t).Y_&&await async function(r,i){if(function(o){return yN(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();kr(r).B_(),await V0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tl(r)}}(t,e),b0(t)&&O0(t)}async function gv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U(Pi,"RemoteStore received new credentials");const r=Di(n);n.Ea.add(3),await el(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Gc(n)}async function BD(t,e){const n=X(t);e?(n.Ea.delete(2),await Gc(n)):e||(n.Ea.add(2),await el(n),n.Va.set("Unknown"))}function Zs(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new SD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ND.bind(null,t),Yo:DD.bind(null,t),t_:VD.bind(null,t),J_:bD.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ym(t)?gm(t):t.Va.set("Unknown")):(await t.ma.stop(),D0(t))})),t.ma}function kr(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new AD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:LD.bind(null,t),t_:jD.bind(null,t),ta:FD.bind(null,t),na:UD.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await tl(t)):(await t.fa.stop(),t.Ta.length>0&&(U(Pi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class _m{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new _m(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vm(t,e){if(dt("AsyncQueue",`${e}: ${t}`),Or(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class yv{constructor(){this.ga=new Ee($.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class $s{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new $s(e,n,vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zD{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class $D{constructor(){this.queries=_v(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=_v(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function _v(){return new Un(t=>bT(t),Fc)}async function qD(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new zD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=vm(o,`Initialization of query '${Gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&wm(n)}async function HD(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&wm(n)}function KD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function wm(t){t.Ca.forEach(e=>{e.next()})}var Vf,vv;(vv=Vf||(Vf={})).Ma="default",vv.Cache="cache";class WD{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vf.Cache}}/**
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
 */class M0{constructor(e){this.key=e}}class L0{constructor(e){this.key=e}}class QD{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=OT(e),this.tu=new vs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new yv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),I=Ja(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;m&&I?m.data.isEqual(I.data)?R!==P&&(r.track({type:3,doc:I}),b=!0):this.su(m,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),b=!0):m&&!I&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(I,R){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:b})}};return P(I)-P(R)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new $s(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new L0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new M0(r))}),n}cu(e){this.Za=e.ks,this.Ya=te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return $s.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Im="SyncEngine";class YD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JD{constructor(e){this.key=e,this.hu=!1}}class XD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Un(l=>bT(l),Fc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ee($.comparator),this.Au=new Map,this.Vu=new um,this.du={},this.mu=new Map,this.fu=Ri.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZD(t,e,n=!0){const r=$0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await F0(r,e,n,!0),i}async function eV(t,e){const n=$0(t);await F0(n,e,!0,!1)}async function F0(t,e,n,r){const i=await gD(t.localStore,jt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await tV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&x0(t.remoteStore,i),l}async function tV(t,e,n,r,i){t.pu=(p,m,I)=>async function(P,b,w,_){let T=b.view.ru(w);T.Ss&&(T=await hv(P.localStore,b.query,!1).then(({documents:v})=>b.view.ru(v,T)));const D=_&&_.targetChanges.get(b.targetId),M=_&&_.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(T,P.isPrimaryClient,D,M);return Iv(P,b.targetId,F.au),F.snapshot}(t,p,m,I);const s=await hv(t.localStore,e,!0),o=new QD(e,s.ks),l=o.ru(s.documents),u=Za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Iv(t,n,c.au);const f=new YD(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function nV(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Fc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&pm(r.remoteStore,i.targetId),bf(r,i.targetId)}).catch(Ni)):(bf(r,i.targetId),await Nf(r.localStore,i.targetId,!0))}async function rV(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pm(n.remoteStore,r.targetId))}async function iV(t,e,n){const r=q0(t);try{const i=await function(o,l){const u=X(o),c=ce.now(),f=l.reduce((I,R)=>I.add(R.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Pt(),P=te();return u.xs.getEntries(I,f).next(b=>{R=b,R.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(b=>{p=b;const w=[];for(const _ of l){const T=mN(_,p.get(_.key).overlayedDocument);T!=null&&w.push(new jn(_.key,T,AT(T.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(b=>{m=b;const w=b.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,b.batchId,w)})}).then(()=>({batchId:m.batchId,changes:LT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ee(J)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await nl(r,i.changes),await tl(r.remoteStore)}catch(i){const s=vm(i,"Failed to persist write");n.reject(s)}}async function U0(t,e){const n=X(t);try{const r=await fD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?K(o.hu,14607):i.removedDocuments.size>0&&(K(o.hu,42227),o.hu=!1))}),await nl(n,r,e)}catch(r){await Ni(r)}}function wv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.ba)m.va(l)&&(c=!0)}),c&&wm(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sV(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee($.comparator);o=o.insert(s,xe.newNoDocument(s,W.min()));const l=te().add(s),u=new Bc(W.min(),new Map,new Ee(J),o,l);await U0(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Em(r)}else await Nf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(Ni)}async function oV(t,e){const n=X(t),r=e.batch.batchId;try{const i=await dD(n.localStore,e);B0(n,r,null),j0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nl(n,i)}catch(i){await Ni(i)}}async function aV(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(K(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);B0(r,e,n),j0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nl(r,i)}catch(i){await Ni(i)}}function j0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function B0(t,e,n){const r=X(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||z0(t,r)})}function z0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(pm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Em(t))}function Iv(t,e,n){for(const r of n)r instanceof M0?(t.Vu.addReference(r.key,e),lV(t,r)):r instanceof L0?(U(Im,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||z0(t,r.key)):G(19791,{wu:r})}function lV(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(U(Im,"New document in limbo: "+n),t.Eu.add(r),Em(t))}function Em(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new $(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new JD(n)),t.Ru=t.Ru.insert(n,r),x0(t.remoteStore,new Pn(jt(Lc(n.path)),r,"TargetPurposeLimboResolution",Ft.ce))}}async function nl(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=dm.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(c,m=>k.forEach(m.Ts,I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>k.forEach(m.Is,I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Or(p))throw p;U(fm,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=f.vs.get(m),R=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(m,P)}}}(r.localStore,s))}async function uV(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U(Im,"User change. New user:",e.toKey());const r=await A0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nl(n,r.Ns)}}function cV(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return te().add(r.key);{let i=te();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function $0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sV.bind(null,e),e.Pu.J_=GD.bind(null,e.eventManager),e.Pu.yu=KD.bind(null,e.eventManager),e}function q0(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aV.bind(null,e),e}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return S0(this.persistence,new T0,e.initialUser,this.serializer)}Cu(e){return new cm(qc.Vi,this.serializer)}Du(e){return new P0}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class hV extends La{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){K(this.persistence.referenceDelegate instanceof sc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new cm(r=>sc.Vi(r,n),this.serializer)}}class dV extends La{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await q0(this.xu.syncEngine),await tl(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return S0(this.persistence,new T0,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new _0(r,e.asyncQueue,n)}Mu(e,n){const r=new hx(n,this.persistence);return new cx(e.asyncQueue,r)}Cu(e){const n=lD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new hm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,TD(),fu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new P0}}class ac{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uV.bind(null,this.syncEngine),await BD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $D}()}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),r=ED(e.databaseInfo);return CD(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new xD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wv(this.syncEngine,n,0),function(){return pv.v()?new pv:new _D}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new XD(i,s,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);U(Pi,"RemoteStore shutting down."),s.Ea.add(5),await el(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ac.provider={build:()=>new ac};/**
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
 */class fV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const xr="FirestoreClient";class pV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=qp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function od(t,e){t.asyncQueue.verifyOperationInProgress(),U(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await A0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mV(t);U(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gv(e.remoteStore,i)),t._onlineComponents=e}async function mV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U(xr,"Using user provided OfflineComponentProvider");try{await od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await od(t,new La)}}else U(xr,"Using default OfflineComponentProvider"),await od(t,new hV(void 0));return t._offlineComponents}async function H0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U(xr,"Using user provided OnlineComponentProvider"),await Ev(t,t._uninitializedComponentsProvider._online)):(U(xr,"Using default OnlineComponentProvider"),await Ev(t,new ac))),t._onlineComponents}function gV(t){return H0(t).then(e=>e.syncEngine)}async function Tv(t){const e=await H0(t),n=e.eventManager;return n.onListen=ZD.bind(null,e.syncEngine),n.onUnlisten=nV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rV.bind(null,e.syncEngine),n}function yV(t,e,n,r){const i=new fV(r),s=new WD(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>qD(await Tv(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>HD(await Tv(t),s))}}function _V(t,e){const n=new Er;return t.asyncQueue.enqueueAndForget(async()=>iV(await gV(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function G0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vV="ComponentProvider",Sv=new Map;function wV(t,e,n,r,i){return new jx(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,G0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const K0="firestore.googleapis.com",Av=!0;class Rv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=Av}else this.host=e.host,this.ssl=e.ssl??Av;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=p0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HN)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ox("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yk;switch(r.type){case"firstParty":return new ex(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sv.get(n);r&&(U(vV,"Removing Datastore"),Sv.delete(n),r.terminate())}(this),Promise.resolve()}}function IV(t,e,n,r={}){var c;t=mn(t,Kc);const i=Ks(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(rE(`https://${l}`),iE("Firestore",!0)),s.host!==K0&&s.host!==l&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!yi(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ye.MOCK_USER;else{f=ER(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(m)}t._authCredentials=new Jk(new XE(f,p))}}/**
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
 */class Vi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vi(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Wa(n,Me._jsonSchema))return new Me(e,r||null,new $(ue.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Oe("string",Me._jsonSchemaVersion),referencePath:Oe("string")};class Sr extends Vi{constructor(e,n,r){super(e,n,Lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new $(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Pv(t,e,...n){if(t=Le(t),eT("collection","path",e),t instanceof Kc){const r=ue.fromString(e,...n);return m_(r),new Sr(t,null,r)}{if(!(t instanceof Me||t instanceof Sr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return m_(r),new Sr(t.firestore,null,r)}}function Yi(t,e,...n){if(t=Le(t),arguments.length===1&&(e=qp.newId()),eT("doc","path",e),t instanceof Kc){const r=ue.fromString(e,...n);return p_(r),new Me(t,null,new $(r))}{if(!(t instanceof Me||t instanceof Sr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return p_(r),new Me(t.firestore,t instanceof Sr?t.converter:null,new $(r))}}/**
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
 */const Cv="AsyncQueue";class kv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new C0(this,"async_queue_retry"),this._c=()=>{const r=fu();r&&U(Cv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=fu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Er;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Or(e))throw e;U(Cv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,dt("INTERNAL UNHANDLED ERROR: ",xv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=_m.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:xv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function xv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Nr extends Kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new kv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kv(e),this._firestoreClient=void 0,await e}}}function EV(t,e){const n=typeof t=="object"?t:dE(),r=typeof t=="string"?t:Ju,i=Dp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wR("firestore");s&&IV(i,...s)}return i}function Tm(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||W0(t),t._firestoreClient}function W0(t){var r,i,s,o;const e=t._freezeSettings(),n=wV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new pV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}function TV(t,e){Ii("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return SV(t,ac.provider,{build:r=>new dV(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function SV(t,e,n){if((t=mn(t,Nr))._firestoreClient||t._terminated)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new B(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},W0(t)}/**
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
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(Fe.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wa(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:Oe("string",Mt._jsonSchemaVersion),bytes:Oe("string")};/**
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
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qc{constructor(e){this._methodName=e}}/**
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
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Wa(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Oe("string",gn._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class en{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wa(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new en(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:Oe("string",en._jsonSchemaVersion),vectorValues:Oe("object")};/**
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
 */const AV=/^__.*__$/;class RV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xs(e,this.data,n,this.fieldTransforms)}}class Q0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Sm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Sm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return lc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Y0(this.dataSource)&&AV.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class PV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(e)}createContext(e,n,r,i=!1){return new Sm({dataSource:e,methodName:n,targetDoc:r,path:Se.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new PV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J0(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Rm("Data must be an object, but it was:",o,r);const l=eS(r,o);let u,c;if(s.merge)u=new vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Ci(e,p,n);if(!o.contains(m))throw new B(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);rS(f,m)||f.push(m)}u=new vt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new RV(new ot(l),u,c)}class Jc extends Qc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}class Am extends Qc{_toFieldTransform(e){return new qT(e.path,new Us)}isEqual(e){return e instanceof Am}}function X0(t,e,n,r){const i=t.createContext(1,e,n);Rm("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Mr(r,(u,c)=>{const f=nS(e,u,n);c=Le(c);const p=i.childContextForFieldPath(f);if(c instanceof Jc)s.push(f);else{const m=rl(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new vt(s);return new Q0(o,l,i.fieldTransforms)}function Z0(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[Ci(e,r,n)],u=[i];if(s.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ci(e,s[m])),u.push(s[m+1]);const c=[],f=ot.empty();for(let m=l.length-1;m>=0;--m)if(!rS(c,l[m])){const I=l[m];let R=u[m];R=Le(R);const P=o.childContextForFieldPath(I);if(R instanceof Jc)c.push(I);else{const b=rl(R,P);b!=null&&(c.push(I),f.set(I,b))}}const p=new vt(c);return new Q0(f,p,o.fieldTransforms)}function CV(t,e,n,r=!1){return rl(n,t.createContext(r?4:3,e))}function rl(t,e){if(tS(t=Le(t)))return Rm("Unsupported field value:",e,t),eS(t,e);if(t instanceof Qc)return function(r,i){if(!Y0(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=rl(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ce.fromDate(r);return{timestampValue:zs(i.serializer,s)}}if(r instanceof ce){const s=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:JT(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:om(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof en)return function(o,l){const u=o instanceof en?o.toArray():o;return{mapValue:{fields:{[Xp]:{stringValue:Zp},[Os]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return tm(l.serializer,f)})}}}}}}(r,i);if(l0(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${kc(r)}`)}(t,e)}function eS(t,e){const n={};return gT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,i)=>{const s=rl(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ce||t instanceof gn||t instanceof Mt||t instanceof Me||t instanceof Qc||t instanceof en||l0(t))}function Rm(t,e,n){if(!tS(n)||!tT(n)){const r=kc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ci(t,e,n){if((e=Le(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return nS(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kV=new RegExp("[~\\*/\\[\\]]");function nS(t,e,n){if(e.search(kV)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function rS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xV{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Os].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>we(o.doubleValue));return new en(n)}convertGeoPoint(e){return new gn(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const n=On(e);return new ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);K(a0(r),9688,{name:e});const i=new Ei(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iS extends xV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Nv(){return new Am("serverTimestamp")}const Dv="@firebase/firestore",Vv="4.10.0";/**
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
 */function bv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class sS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ci("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NV extends sS{data(){return super.data()}}/**
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
 */function DV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pm{}class oS extends Pm{}function VV(t,e,...n){let r=[];e instanceof Pm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cm).length,l=s.filter(u=>u instanceof Xc).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xc extends oS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xc(e,n,r)}_apply(e){const n=this._parse(e);return aS(e._query,n),new Vi(e.firestore,e.converter,Ef(e._query,n))}_parse(e){const n=Yc(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Mv(p,f);const R=[];for(const P of p)R.push(Ov(u,s,P));m={arrayValue:{values:R}}}else m=Ov(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Mv(p,f),m=CV(l,o,p,f==="in"||f==="not-in");return se.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bV(t,e,n){const r=e,i=Ci("where",t);return Xc._create(i,r,n)}class Cm extends Pm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)aS(o,u),o=Ef(o,u)}(e._query,n),new Vi(e.firestore,e.converter,Ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class km extends oS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new km(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(s,o)}(e._query,this._field,this._direction);return new Vi(e.firestore,e.converter,tN(e._query,n))}}function OV(t,e="asc"){const n=e,r=Ci("orderBy",t);return km._create(r,n)}function Ov(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!VT(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!$.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Va(t,new $(r))}if(n instanceof Me)return Va(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(n)}.`)}function Mv(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hi extends sS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ci("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:Oe("string",hi._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class pu extends hi{data(e={}){return super.data(e)}}class ws{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pu(this._firestore,this._userDataWriter,r.key,r,new jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new jo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new jo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:MV(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:Oe("string",ws._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};/**
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
 */class LV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Yc(e)}set(e,n,r){this._verifyNotCommitted();const i=ad(e,this._firestore),s=lS(i.converter,n,r),o=J0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ad(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof Wc?Z0(this._dataReader,"WriteBatch.update",s._key,n,r,i):X0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ad(e,this._firestore);return this._mutations=this._mutations.concat(new Xa(n._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ad(t,e){if((t=Le(t)).firestore!==e)throw new B(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function FV(t,e,n,...r){t=mn(t,Me);const i=mn(t.firestore,Nr),s=Yc(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof Wc?Z0(s,"updateDoc",t._key,e,n,r):X0(s,"updateDoc",t._key,e),Zc(i,[o.toMutation(t._key,Ke.exists(!0))])}function UV(t){return Zc(mn(t.firestore,Nr),[new Xa(t._key,Ke.none())])}function jV(t,e){const n=mn(t.firestore,Nr),r=Yi(t),i=lS(t.converter,e),s=Yc(t.firestore);return Zc(n,[J0(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function BV(t,...e){var c,f,p;t=Le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(bv(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Me)o=mn(t.firestore,Nr),l=Lc(t._key.path),s={next:m=>{e[r]&&e[r](zV(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=mn(t,Vi);o=mn(m.firestore,Nr),l=m._query;const I=new iS(o);s={next:R=>{e[r]&&e[r](new ws(o,I,m,R))},error:e[r+1],complete:e[r+2]},DV(t._query)}const u=Tm(o);return yV(u,l,i,s)}function Zc(t,e){const n=Tm(t);return _V(n,e)}function zV(t,e,n){const r=n.docs.get(e._key),i=new iS(t);return new hi(t,i,e._key,r,new jo(n.hasPendingWrites,n.fromCache),e.converter)}function Lv(t){return t=mn(t,Nr),Tm(t),new LV(t,e=>Zc(t,e))}(function(e,n=!0){Qk(Ws),Cs(new _i("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Nr(new Xk(r.getProvider("auth-internal")),new tx(o,r.getProvider("app-check-internal")),Bx(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wr(Dv,Vv,e),wr(Dv,Vv,"esm2020")})();const $V={apiKey:"AIzaSyBSFq7YkTgMA4gr1AfBxWXbWoBn7JLozQw",authDomain:"guiter-code-ad4df.firebaseapp.com",projectId:"guiter-code-ad4df",storageBucket:"guiter-code-ad4df.firebasestorage.app",messagingSenderId:"474318515571",appId:"1:474318515571:web:8b128de0df7a71eef42906",measurementId:"G-6DGZLTRB7M"},uS=hE($V),Of=Kk(uS),qV=new En,on=EV(uS);try{TV(on).catch(t=>{t.code==="failed-precondition"?console.warn("Firestore persistence failed: Multiple tabs open"):t.code==="unimplemented"&&console.warn("Firestore persistence failed: Browser not supported")})}catch(t){console.error("Persistence setup error:",t)}const qi="guitar_scroll_songs";function HV(t){const[e,n]=ae.useState([]),[r,i]=ae.useState(null),[s,o]=ae.useState(!0);ae.useEffect(()=>{if(!t){const m=localStorage.getItem(qi);if(m){let I=JSON.parse(m);I.length>0&&I[0].orderIndex===void 0&&(I=I.sort((R,P)=>P.createdAt-R.createdAt).map((R,P)=>({...R,orderIndex:P})),localStorage.setItem(qi,JSON.stringify(I))),n(I.sort((R,P)=>R.orderIndex-P.orderIndex))}else n([]);o(!1)}},[t]),ae.useEffect(()=>{if(!t)return;o(!0);const m=VV(Pv(on,"songs"),bV("userId","==",t.uid),OV("orderIndex","asc")),I=BV(m,R=>{let P=R.docs.map(w=>{var T;const _=w.data();return{id:w.id,..._,createdAt:(T=_.createdAt)!=null&&T.toMillis?_.createdAt.toMillis():Date.now()}});if(P.some(w=>w.orderIndex===void 0)){console.log("[Firestore] Migrating orderIndex for existing songs...");const w=P.sort((T,D)=>D.createdAt-T.createdAt).map((T,D)=>({...T,orderIndex:D})),_=Lv(on);w.forEach(T=>{const D=Yi(on,"songs",T.id);_.update(D,{orderIndex:T.orderIndex})}),_.commit().catch(T=>console.error("Migration failed:",T)),n(w.sort((T,D)=>T.orderIndex-D.orderIndex))}else n(P);o(!1)},R=>{console.error("[Firestore] Sync error:",R),o(!1)});return()=>I()},[t]);const l=ae.useCallback(async m=>{const I=e.length>0?Math.max(...e.map(P=>P.orderIndex||0))+1:0,R={title:"名称未設定の曲",artist:"",bpm:120,imageUrls:[],scrollSpeed:20,orderIndex:I,...m};if(t)try{return{id:(await jV(Pv(on,"songs"),{...R,userId:t.uid,createdAt:Nv()})).id,...R}}catch(P){throw console.error("[Firestore] Add error:",P),P}else{const P={id:crypto.randomUUID(),...R,createdAt:Date.now()},b=[...e,P].sort((w,_)=>w.orderIndex-_.orderIndex);return n(b),localStorage.setItem(qi,JSON.stringify(b)),P}},[t,e]),u=ae.useCallback(async(m,I)=>{if(t)try{const R=Yi(on,"songs",m);await FV(R,{...I,updatedAt:Nv()})}catch(R){throw console.error("[Firestore] Update error:",R),R}else{const R=e.map(P=>P.id===m?{...P,...I}:P);n(R),localStorage.setItem(qi,JSON.stringify(R))}},[t,e]),c=ae.useCallback(async m=>{if(t)try{await UV(Yi(on,"songs",m))}catch(I){throw console.error("[Firestore] Delete error:",I),I}else{const I=e.filter(R=>R.id!==m);n(I),localStorage.setItem(qi,JSON.stringify(I))}r===m&&i(null)},[t,e,r]),f=ae.useCallback(async(m,I)=>{const R=e.findIndex(D=>D.id===m);if(R<0)return;const P=R+I;if(P<0||P>=e.length)return;const b=[...e],w={...b[R]},_={...b[P]},T=w.orderIndex;if(w.orderIndex=_.orderIndex,_.orderIndex=T,t)try{const D=Lv(on);D.update(Yi(on,"songs",w.id),{orderIndex:w.orderIndex}),D.update(Yi(on,"songs",_.id),{orderIndex:_.orderIndex}),await D.commit()}catch(D){console.error("[Firestore] Move error:",D)}else b[R]=w,b[P]=_,b.sort((D,M)=>D.orderIndex-M.orderIndex),n(b),localStorage.setItem(qi,JSON.stringify(b))},[t,e]),p=e.find(m=>m.id===r)||null;return p&&!p.imageUrls&&p.imageUrl&&(p.imageUrls=[p.imageUrl]),{songs:e,currentSong:p,currentSongId:r,setCurrentSongId:i,addSong:l,updateSong:u,deleteSong:c,moveSong:f,loading:s}}function GV({songs:t,currentSongId:e,onSelect:n,onMove:r}){return L.jsxs("div",{className:"song-list-container",children:[t.length===0?L.jsx("div",{className:"empty-msg",children:"楽曲が登録されていません"}):L.jsx("ul",{className:"list-items",children:t.map((i,s)=>L.jsxs("li",{className:`song-item ${i.id===e?"active":""}`,onClick:()=>n(i.id),children:[L.jsxs("div",{className:"song-main",children:[L.jsx("div",{className:"song-title",children:i.title}),L.jsxs("div",{className:"song-meta",children:[i.artist||"Unknown"," / BPM: ",i.bpm]})]}),L.jsxs("div",{className:"song-reorder",onClick:o=>o.stopPropagation(),children:[L.jsx("button",{className:"reorder-btn",onClick:()=>r(i.id,-1),disabled:s===0,title:"上に移動",children:"▲"}),L.jsx("button",{className:"reorder-btn",onClick:()=>r(i.id,1),disabled:s===t.length-1,title:"下に移動",children:"▼"})]})]},i.id))}),L.jsx("style",{jsx:!0,children:`
        .song-list-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .empty-msg {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .list-items {
          list-style: none;
        }

        .song-item {
          padding: 1rem 1rem 1rem 1.5rem;
          border-bottom: 1px solid #222;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }

        .song-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .song-item.active {
          background-color: rgba(187, 134, 252, 0.1);
          border-left: 4px solid var(--primary-color);
        }

        .song-main {
          flex: 1;
          min-width: 0;
        }

        .song-title {
          font-weight: bold;
          margin-bottom: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .song-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .song-reorder {
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0.3;
          transition: opacity 0.2s;
        }

        .song-item:hover .song-reorder {
          opacity: 0.8;
        }

        .reorder-btn {
          background: #333;
          color: #fff;
          border: 1px solid #444;
          width: 28px;
          height: 24px;
          font-size: 0.6rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .reorder-btn:hover:not(:disabled) {
          background: #444;
          border-color: var(--primary-color);
        }

        .reorder-btn:disabled {
          opacity: 0.1;
          cursor: not-allowed;
        }
      `})]})}const KV=(t,e=1200)=>new Promise((n,r)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=s=>{const o=new Image;o.src=s.target.result,o.onload=()=>{const l=document.createElement("canvas");let u=o.width,c=o.height;u>e&&(c=Math.round(c*e/u),u=e),l.width=u,l.height=c,l.getContext("2d").drawImage(o,0,0,u,c),n(l.toDataURL("image/jpeg",.8))},o.onerror=r},i.onerror=r});function WV({song:t,onSave:e,onCancel:n,onDelete:r}){const[i,s]=ae.useState({title:(t==null?void 0:t.title)||"",artist:(t==null?void 0:t.artist)||"",bpm:(t==null?void 0:t.bpm)||120,imageUrls:(t==null?void 0:t.imageUrls)||(t!=null&&t.imageUrl?[t.imageUrl]:[])}),[o,l]=ae.useState(!1),u=ae.useRef(null),c=R=>{const{name:P,value:b}=R.target;s(w=>({...w,[P]:P==="bpm"?Number(b):b}))},f=async R=>{const P=Array.from(R.target.files);if(P.length!==0){l(!0);try{const b=[];for(const w of P){const _=await KV(w);b.push(_)}s(w=>({...w,imageUrls:[...w.imageUrls,...b]}))}catch(b){alert("画像の処理に失敗しました"),console.error(b)}finally{l(!1)}R.target.value=""}},p=R=>{s(P=>({...P,imageUrls:P.imageUrls.filter((b,w)=>w!==R)}))},m=(R,P)=>{const b=[...i.imageUrls],w=R+P;w<0||w>=b.length||([b[R],b[w]]=[b[w],b[R]],s(_=>({..._,imageUrls:b})))},I=()=>{if(!i.title)return alert("曲名を入力してください");if(i.imageUrls.length===0)return alert("楽譜画像を1枚以上アップロードしてください");e(i)};return L.jsxs("div",{className:"song-editor",children:[L.jsxs("div",{className:"editor-header",children:[L.jsx("h3",{children:t?"曲を編集":"新しい曲を追加"}),t&&L.jsx("button",{className:"delete-link",onClick:()=>r(t.id),children:"削除"})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{children:"曲名"}),L.jsx("input",{name:"title",value:i.title,onChange:c,placeholder:"曲名を入力"})]}),L.jsxs("div",{className:"form-row",children:[L.jsxs("div",{className:"form-group flex-1",children:[L.jsx("label",{children:"アーティスト"}),L.jsx("input",{name:"artist",value:i.artist,onChange:c,placeholder:"アーティスト名"})]}),L.jsxs("div",{className:"form-group w-80",children:[L.jsx("label",{children:"BPM"}),L.jsx("input",{type:"number",name:"bpm",value:i.bpm,onChange:c})]})]}),L.jsxs("div",{className:"form-group image-upload-area",children:[L.jsx("label",{children:"楽譜画像 (複数可)"}),L.jsxs("div",{className:"image-grid",children:[i.imageUrls.map((R,P)=>L.jsxs("div",{className:"image-item",children:[L.jsx("img",{src:R,alt:`page ${P+1}`,className:"img-preview-small"}),L.jsxs("div",{className:"image-item-actions",children:[L.jsx("button",{onClick:()=>m(P,-1),disabled:P===0,children:"▲"}),L.jsx("button",{onClick:()=>m(P,1),disabled:P===i.imageUrls.length-1,children:"▼"}),L.jsx("button",{className:"btn-remove",onClick:()=>p(P),children:"✕"})]}),L.jsx("span",{className:"page-number",children:P+1})]},P)),L.jsx("div",{className:"add-image-box",onClick:()=>u.current.click(),children:o?"処理中...":"+ 追加"})]}),L.jsx("input",{type:"file",ref:u,onChange:f,accept:"image/*",multiple:!0,style:{display:"none"}})]}),L.jsxs("div",{className:"editor-actions",children:[L.jsx("button",{className:"btn-cancel",onClick:n,children:"キャンセル"}),L.jsx("button",{className:"btn-save",onClick:I,children:"保存する"})]}),L.jsx("style",{jsx:!0,children:`
        .song-editor {
          width: 100%;
          max-width: 600px;
          background-color: var(--surface-color);
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          max-height: 90vh;
          overflow-y: auto;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .delete-link {
          color: var(--error-color);
          font-size: 0.9rem;
          text-decoration: underline;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: flex;
          gap: 1rem;
        }

        .flex-1 { flex: 1; }
        .w-80 { width: 80px; }

        label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .image-item {
          position: relative;
          border: 1px solid #333;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 3/4;
          display: flex;
          flex-direction: column;
        }

        .img-preview-small {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .image-item-actions {
          position: absolute;
          top: 4px;
          right: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(0,0,0,0.6);
          padding: 4px;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-item:hover .image-item-actions {
          opacity: 1;
        }

        .image-item-actions button {
          font-size: 0.7rem;
          color: white;
          background: #444;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-item-actions button:disabled {
          opacity: 0.3;
        }

        .btn-remove {
          background-color: var(--error-color) !important;
        }

        .page-number {
          position: absolute;
          bottom: 4px;
          left: 4px;
          background: rgba(0,0,0,0.6);
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 10px;
        }

        .add-image-box {
          border: 2px dashed #444;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-muted);
          aspect-ratio: 3/4;
        }

        .add-image-box:hover {
          border-color: var(--primary-color);
          background-color: rgba(255, 255, 255, 0.02);
        }

        .editor-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-save {
          background-color: var(--primary-color);
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          color: var(--text-muted);
        }
      `})]})}function QV({song:t,isPlaying:e,scrollSpeed:n,scrollPos:r,onScrollUpdate:i}){const s=ae.useRef(null),{imageUrls:o,imageUrl:l}=t,u=o||(l?[l]:[]);return ae.useEffect(()=>{let c,f=performance.now();const p=m=>{if(e){const I=(m-f)/1e3,R=n*I;i(P=>P+R)}f=m,c=requestAnimationFrame(p)};return c=requestAnimationFrame(p),()=>cancelAnimationFrame(c)},[e,n,i]),ae.useEffect(()=>{s.current&&(s.current.scrollTop=r)},[r]),L.jsxs("div",{className:"chord-viewer",ref:s,children:[L.jsx("div",{className:"chord-content-wrapper",children:u.length>0?L.jsx("div",{className:"images-stack",children:u.map((c,f)=>L.jsx("img",{src:c,alt:`Sheet Music Page ${f+1}`,className:"sheet-image"},f))}):L.jsx("div",{className:"no-image-msg",children:"楽譜画像がありません"})}),L.jsx("style",{jsx:!0,children:`
        .chord-viewer {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          scroll-behavior: auto;
          background-color: var(--bg-color);
          scrollbar-width: thin;
        }

        .chord-content-wrapper {
          padding: 1rem;
          padding-bottom: 80vh; /* 末尾までスクロール可能にするための余白 */
          max-width: 1200px;
          margin: 0 auto;
        }

        .images-stack {
          display: flex;
          flex-direction: column;
          gap: 0; /* 隙間なく並べる */
        }

        .sheet-image {
          width: 100%;
          height: auto;
          display: block;
          /* box-shadow を各画像に付けると継ぎ目が目立つのでスタック全体に付けるか検討 */
        }

        .no-image-msg {
          text-align: center;
          padding: 5rem;
          color: var(--text-muted);
        }

        /* Hide scrollbar for cleaner look during performance */
        .chord-viewer::-webkit-scrollbar {
          width: 8px;
        }
        .chord-viewer::-webkit-scrollbar-track {
          background: transparent;
        }
        .chord-viewer::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
      `})]})}function YV({isPlaying:t,onTogglePlay:e,onReset:n,scrollSpeed:r,onSpeedChange:i}){return L.jsxs("div",{className:"control-panel",children:[L.jsxs("div",{className:"controls-group",children:[L.jsx("button",{className:"ctrl-btn secondary",onClick:n,title:"最初に戻る",children:"⏮"}),L.jsx("button",{className:`ctrl-btn main ${t?"playing":""}`,onClick:e,children:t?"⏸ PAUSE":"▶ PLAY"})]}),L.jsxs("div",{className:"speed-control",children:[L.jsxs("div",{className:"speed-label-row",children:[L.jsx("label",{children:"速度:"}),L.jsx("input",{type:"number",className:"speed-number-input",value:r,onChange:s=>i(Number(s.target.value)),min:"1",max:"1000"}),L.jsx("span",{className:"unit-label",children:"px/s"})]}),L.jsx("input",{type:"range",min:"1",max:"300",step:"1",value:r,onChange:s=>i(Number(s.target.value))})]}),L.jsx("style",{jsx:!0,children:`
        .control-panel {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 0 2rem;
          width: 100%;
          justify-content: center;
        }

        .controls-group {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .ctrl-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          font-weight: bold;
          transition: transform 0.1s;
        }

        .ctrl-btn:active {
          transform: scale(0.95);
        }

        .ctrl-btn.main {
          width: 140px;
          background-color: var(--secondary-color);
          color: #000;
          font-size: 1rem;
        }

        .ctrl-btn.main.playing {
          background-color: var(--primary-color);
        }

        .ctrl-btn.secondary {
          width: 48px;
          background-color: #333;
          color: #fff;
          font-size: 1.2rem;
        }

        .speed-control {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 200px;
        }

        .speed-control label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .speed-label-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .speed-number-input {
          width: 60px;
          background: #333;
          border: 1px solid #444;
          padding: 2px 4px;
          font-size: 0.9rem;
          text-align: center;
          border-radius: 4px;
          color: var(--primary-color);
          font-weight: bold;
        }

        .unit-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        input[type="range"] {
          width: 100%;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .control-panel {
            flex-direction: column;
            gap: 1rem;
            padding: 0 1rem;
          }
          .speed-control {
            min-width: 100%;
          }
          .ctrl-btn.main {
            width: 120px;
            font-size: 0.9rem;
          }
        }
      `})]})}function JV({user:t}){const e=async()=>{try{await nk(Of,qV)}catch(r){console.error("Login failed",r),alert("ログインに失敗しました。Firebase ConsoleでGoogle Authを有効にし、ドメインを承認しているか確認してください。")}},n=()=>{window.confirm("ログアウトしますか？")&&MC(Of)};return L.jsxs("div",{className:"auth-area",children:[t?L.jsxs("div",{className:"user-profile",children:[L.jsx("img",{src:t.photoURL,alt:t.displayName,className:"user-avatar"}),L.jsxs("div",{className:"user-info",children:[L.jsx("span",{className:"user-name",children:t.displayName}),L.jsx("button",{className:"auth-btn logout",onClick:n,children:"ログアウト"})]})]}):L.jsx("button",{className:"auth-btn login",onClick:e,children:"Googleでログイン"}),L.jsx("style",{jsx:!0,children:`
        .auth-area {
          padding: 1rem;
          border-bottom: 1px solid #333;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--primary-color);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .user-name {
          font-size: 0.8rem;
          font-weight: bold;
        }

        .auth-btn {
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-weight: bold;
          text-align: center;
        }

        .login {
          background-color: var(--primary-color);
          color: #000;
          width: 100%;
        }

        .logout {
          background-color: transparent;
          color: var(--text-muted);
          border: 1px solid #444;
          width: fit-content;
        }
      `})]})}const XV=400;function ZV(){const[t,e]=ae.useState(null),[n,r]=ae.useState(window.innerWidth<768),[i,s]=ae.useState(!0),o=ae.useRef(null);ae.useEffect(()=>{const re=OC(Of,Pe=>{e(Pe)});return()=>re()},[]);const{songs:l,currentSong:u,currentSongId:c,setCurrentSongId:f,addSong:p,updateSong:m,deleteSong:I,loading:R}=HV(t),[P,b]=ae.useState(!1),[w,_]=ae.useState(!1),[T,D]=ae.useState(0),[M,F]=ae.useState(20),v=ae.useCallback(()=>{if(s(!0),o.current&&clearTimeout(o.current),u&&!P){const re=w?1e3:2e3;o.current=setTimeout(()=>{s(!1)},re)}},[w,u,P]);ae.useEffect(()=>(v(),()=>{o.current&&clearTimeout(o.current)}),[w,u,P,v]);const y=ae.useCallback(()=>{_(re=>!re)},[]),E=ae.useCallback(()=>{_(!1),D(0)},[]);ae.useEffect(()=>{const re=Pe=>{Pe.code==="Space"&&!P&&(Pe.preventDefault(),y()),Pe.code==="KeyS"&&!P&&r(vn=>!vn)};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[y,P]);const A=ae.useCallback(()=>{if(u!=null&&u.bpm){const re=u.bpm/60/4*XV;F(Math.round(re))}},[u]),C=re=>{f(re),b(!1),E();const Pe=l.find(vn=>vn.id===re);Pe!=null&&Pe.scrollSpeed&&F(Pe.scrollSpeed)},x=async re=>{if(c)await m(c,{...re,scrollSpeed:M});else{const Pe=await p({...re,scrollSpeed:M});f(Pe.id)}b(!1)},S=async re=>{window.confirm("この曲を削除してもよろしいですか？")&&(await I(re),b(!1))};return L.jsxs("div",{className:`app-container ${n?"sidebar-collapsed":""}`,onClick:v,onTouchStart:v,onMouseMove:v,children:[L.jsxs("nav",{className:"sidebar",children:[L.jsxs("div",{className:"sidebar-header",children:[L.jsx("h1",{children:"Guitar Scroll"}),L.jsx("button",{className:"toggle-btn",onClick:()=>r(!0),children:"◀"})]}),L.jsx(JV,{user:t}),L.jsx(GV,{songs:l,currentSongId:c,onSelect:C,onMove:moveSong}),L.jsx("div",{className:"sidebar-footer",children:L.jsx("button",{className:"add-button",onClick:()=>{f(null),b(!0)},children:"＋ 新しい曲"})})]}),L.jsxs("main",{className:"main-content",children:[L.jsxs("header",{className:`app-header ${i?"":"header-hidden"}`,children:[L.jsx("div",{className:"song-info",children:u?L.jsxs(L.Fragment,{children:[L.jsx("h2",{children:u.title}),L.jsxs("span",{className:"metadata",children:[u.artist," | BPM: ",u.bpm]})]}):L.jsx("h2",{children:R?"読み込み中...":"曲を選択してください"})}),L.jsx("div",{className:"app-actions",children:u&&L.jsx("button",{className:"edit-toggle",onClick:()=>b(!P),children:P?"完了":"編集"})})]}),L.jsx("section",{className:"viewer-area",children:P?L.jsx(WV,{song:u,onSave:x,onCancel:()=>b(!1),onDelete:S}):u?L.jsx(QV,{song:u,isPlaying:w,scrollSpeed:M,scrollPos:T,onScrollUpdate:D}):L.jsx("div",{className:"placeholder-msg",children:L.jsx("p",{children:"曲を選択するか「＋ 新しい曲」から楽譜画像を追加してください。"})})}),(u||n&&!P)&&L.jsx("footer",{className:`controls-area floating-panel ${i?"":"controls-hidden"}`,children:L.jsxs("div",{className:"floating-inner",children:[L.jsxs("div",{className:"top-row",children:[n&&L.jsx("button",{className:"expand-btn-floating",onClick:()=>r(!1),children:"☰ 曲一覧"}),u&&L.jsx("div",{className:"bpm-sync-panel",children:L.jsx("button",{className:"sync-btn",onClick:A,children:"BPM同期"})})]}),u&&L.jsx(YV,{isPlaying:w,onTogglePlay:y,onReset:E,scrollSpeed:M,onSpeedChange:F})]})})]}),L.jsx("style",{jsx:!0,children:`
        .app-container {
          display: flex;
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background-color: var(--bg-color);
          overflow: hidden;
          position: relative;
        }

        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--surface-color);
          border-right: 1px solid #333;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
          z-index: 1001;
        }

        .sidebar-collapsed .sidebar {
          transform: translateX(-100%);
          position: absolute;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-header h1 {
          font-size: 1.1rem;
          color: var(--primary-color);
        }

        .toggle-btn {
          background: #333;
          width: 32px;
          height: 32px;
          border-radius: 4px;
          font-size: 0.8rem;
          margin-top: 5px;
        }

        .expand-btn {
          display: none; /* 古いボタンを非表示 */
        }

        .expand-btn-floating {
          background: #444;
          color: #fff;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
          border: 1px solid #555;
        }

        .top-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid #333;
        }

        .add-button {
          padding: 0.6rem;
          background-color: var(--primary-color);
          color: #000;
          font-weight: bold;
          border-radius: 6px;
          width: 100%;
          font-size: 0.9rem;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          position: relative;
        }

        .app-header {
          height: var(--header-height);
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #333;
          background-color: var(--surface-color);
          transition: transform 0.3s ease;
          z-index: 10;
        }

        .header-hidden {
           transform: translateY(-100%);
        }

        .song-info h2 {
          font-size: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .metadata {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .edit-toggle {
          font-size: 0.8rem;
          background: #444;
          padding: 0.4rem 1rem;
          border-radius: 4px;
        }

        .viewer-area {
          flex: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-msg {
          text-align: center;
          color: var(--text-muted);
          padding: 2rem;
        }

        .controls-area {
          background-color: var(--surface-color);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          z-index: 1000;
        }

        /* Floating Panel Style */
        .floating-panel {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: 600px;
          background: rgba(40, 40, 40, 0.9);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.8);
          padding: 16px;
        }

        .floating-inner {
           display: flex;
           flex-direction: column;
           gap: 8px;
           align-items: center;
        }

        .controls-hidden {
          transform: translateX(-50%) translateY(150%);
          opacity: 0;
          pointer-events: none;
        }

        .bpm-sync-panel {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .sync-btn {
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--secondary-color);
          color: var(--secondary-color);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: absolute;
            height: 100%;
            z-index: 1001;
          }
          .app-header {
             padding-left: 3rem;
          }
          .floating-panel {
             bottom: 80px; /* Chromeのバーを避けるために少し上げる */
             bottom: calc(40px + env(safe-area-inset-bottom));
          }
        }
      `})]})}ld.createRoot(document.getElementById("root")).render(L.jsx(t1.StrictMode,{children:L.jsx(ZV,{})}));
