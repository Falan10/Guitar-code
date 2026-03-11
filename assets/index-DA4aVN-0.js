(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function WS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $v={exports:{}},hc={},qv={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),QS=Symbol.for("react.portal"),YS=Symbol.for("react.fragment"),XS=Symbol.for("react.strict_mode"),JS=Symbol.for("react.profiler"),ZS=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),r1=Symbol.for("react.memo"),i1=Symbol.for("react.lazy"),bg=Symbol.iterator;function s1(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gv=Object.assign,Kv={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Hv}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=Gs.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Hv}var $f=zf.prototype=new Wv;$f.constructor=zf;Gv($f,Gs.prototype);$f.isPureReactComponent=!0;var Og=Array.isArray,Qv=Object.prototype.hasOwnProperty,qf={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qv.call(e,r)&&!Yv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ja,type:t,key:s,ref:o,props:i,_owner:qf.current}}function o1(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mg=/\/+/g;function Sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function $l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case QS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sh(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(Mg,"$&/")+"/"),$l(i,e,n,"",function(c){return c})):i!=null&&(Hf(i)&&(i=o1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sh(s,l);o+=$l(s,e,n,u,i)}else if(u=s1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sh(s,l++),o+=$l(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(t,e,n){if(t==null)return t;var r=[],i=0;return $l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function l1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},ql={transition:null},u1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:ql,ReactCurrentOwner:qf};function Jv(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Gs;se.Fragment=YS;se.Profiler=JS;se.PureComponent=zf;se.StrictMode=XS;se.Suspense=n1;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u1;se.act=Jv;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Qv.call(e,u)&&!Yv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ja,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:e1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZS,_context:t},t.Consumer=t};se.createElement=Xv;se.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:t1,render:t}};se.isValidElement=Hf;se.lazy=function(t){return{$$typeof:i1,_payload:{_status:-1,_result:t},_init:l1}};se.memo=function(t,e){return{$$typeof:r1,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};se.unstable_act=Jv;se.useCallback=function(t,e){return yt.current.useCallback(t,e)};se.useContext=function(t){return yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return yt.current.useEffect(t,e)};se.useId=function(){return yt.current.useId()};se.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};se.useRef=function(t){return yt.current.useRef(t)};se.useState=function(t){return yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return yt.current.useTransition()};se.version="18.3.1";qv.exports=se;var Z=qv.exports;const c1=WS(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=Z,d1=Symbol.for("react.element"),f1=Symbol.for("react.fragment"),p1=Object.prototype.hasOwnProperty,m1=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g1={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)p1.call(e,r)&&!g1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:d1,type:t,key:s,ref:o,props:i,_owner:m1.current}}hc.Fragment=f1;hc.jsx=Zv;hc.jsxs=Zv;$v.exports=hc;var F=$v.exports,fd={},ew={exports:{}},Vt={},tw={exports:{}},nw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,X){var ne=q.length;q.push(X);e:for(;0<ne;){var K=ne-1>>>1,Y=q[K];if(0<i(Y,X))q[K]=X,q[ne]=Y,ne=K;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var X=q[0],ne=q.pop();if(ne!==X){q[0]=ne;e:for(var K=0,Y=q.length,we=Y>>>1;K<we;){var et=2*(K+1)-1,on=q[et],Gt=et+1,Hn=q[Gt];if(0>i(on,ne))Gt<Y&&0>i(Hn,on)?(q[K]=Hn,q[Gt]=ne,K=Gt):(q[K]=on,q[et]=ne,K=et);else if(Gt<Y&&0>i(Hn,ne))q[K]=Hn,q[Gt]=ne,K=Gt;else break e}}return X}function i(q,X){var ne=q.sortIndex-X.sortIndex;return ne!==0?ne:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,T=!1,C=!1,R=!1,V=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=q)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function D(q){if(R=!1,I(q),!C)if(n(u)!==null)C=!0,Br(O);else{var X=n(c);X!==null&&In(D,X.startTime-q)}}function O(q,X){C=!1,R&&(R=!1,w(y),y=-1),T=!0;var ne=m;try{for(I(X),p=n(u);p!==null&&(!(p.expirationTime>X)||q&&!P());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var Y=K(p.expirationTime<=X);X=t.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(u)&&r(u),I(X)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var et=n(c);et!==null&&In(D,et.startTime-X),we=!1}return we}finally{p=null,m=ne,T=!1}}var L=!1,_=null,y=-1,E=5,A=-1;function P(){return!(t.unstable_now()-A<E)}function k(){if(_!==null){var q=t.unstable_now();A=q;var X=!0;try{X=_(!0,q)}finally{X?S():(L=!1,_=null)}}else L=!1}var S;if(typeof v=="function")S=function(){v(k)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ot=Ce.port2;Ce.port1.onmessage=k,S=function(){Ot.postMessage(null)}}else S=function(){V(k,0)};function Br(q){_=q,L||(L=!0,S())}function In(q,X){y=V(function(){q(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){C||T||(C=!0,Br(O))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ne=m;m=X;try{return q()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=m;m=q;try{return X()}finally{m=ne}},t.unstable_scheduleCallback=function(q,X,ne){var K=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?K+ne:K):ne=K,q){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ne+Y,q={id:d++,callback:X,priorityLevel:q,startTime:ne,expirationTime:Y,sortIndex:-1},ne>K?(q.sortIndex=ne,e(c,q),n(u)===null&&q===n(c)&&(R?(w(y),y=-1):R=!0,In(D,ne-K))):(q.sortIndex=Y,e(u,q),C||T||(C=!0,Br(O))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var X=m;return function(){var ne=m;m=X;try{return q.apply(this,arguments)}finally{m=ne}}}})(nw);tw.exports=nw;var y1=tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=Z,Nt=y1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rw=new Set,la={};function bi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(la[t]=e,t=0;t<e.length;t++)rw.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=Object.prototype.hasOwnProperty,v1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},Fg={};function w1(t){return pd.call(Fg,t)?!0:pd.call(Lg,t)?!1:v1.test(t)?Fg[t]=!0:(Lg[t]=!0,!1)}function I1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E1(t,e,n,r){if(e===null||typeof e>"u"||I1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Kf);Ze[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Kf);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Kf);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E1(e,n,i,r)&&(n=null),r||i===null?w1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),ow=Symbol.for("react.offscreen"),Ug=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Ug&&t[Ug]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Ah;function bo(t){if(Ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ah=e&&e[1]||""}return`
`+Ah+t}var Rh=!1;function Ph(t,e){if(!t||Rh)return"";Rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function T1(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Ph(t.type,!1),t;case 11:return t=Ph(t.type.render,!1),t;case 1:return t=Ph(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case md:return"Profiler";case Qf:return"StrictMode";case gd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sw:return(t.displayName||"Context")+".Consumer";case iw:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xf:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function S1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A1(t){var e=aw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=A1(t))}function lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vd(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uw(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function wd(t,e){uw(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Id(t,e.type,n):e.hasOwnProperty("defaultValue")&&Id(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Id(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Oo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function cw(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,dw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){R1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function pw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var P1=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(P1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,fs=null,ps=null;function qg(t){if(t=$a(t)){if(typeof Pd!="function")throw Error(j(280));var e=t.stateNode;e&&(e=gc(e),Pd(t.stateNode,t.type,e))}}function mw(t){fs?ps?ps.push(t):ps=[t]:fs=t}function gw(){if(fs){var t=fs,e=ps;if(ps=fs=null,qg(t),e)for(t=0;t<e.length;t++)qg(e[t])}}function yw(t,e){return t(e)}function _w(){}var Ch=!1;function vw(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return yw(t,e,n)}finally{Ch=!1,(fs!==null||ps!==null)&&(_w(),gw())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Cd=!1;if(Dn)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Cd=!1}function C1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qo=!1,_u=null,vu=!1,kd=null,k1={onError:function(t){qo=!0,_u=t}};function x1(t,e,n,r,i,s,o,l,u){qo=!1,_u=null,C1.apply(k1,arguments)}function N1(t,e,n,r,i,s,o,l,u){if(x1.apply(this,arguments),qo){if(qo){var c=_u;qo=!1,_u=null}else throw Error(j(198));vu||(vu=!0,kd=c)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(Oi(t)!==t)throw Error(j(188))}function D1(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hg(i),t;if(s===r)return Hg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Iw(t){return t=D1(t),t!==null?Ew(t):null}function Ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ew(t);if(e!==null)return e;t=t.sibling}return null}var Tw=Nt.unstable_scheduleCallback,Gg=Nt.unstable_cancelCallback,V1=Nt.unstable_shouldYield,b1=Nt.unstable_requestPaint,De=Nt.unstable_now,O1=Nt.unstable_getCurrentPriorityLevel,Zf=Nt.unstable_ImmediatePriority,Sw=Nt.unstable_UserBlockingPriority,wu=Nt.unstable_NormalPriority,M1=Nt.unstable_LowPriority,Aw=Nt.unstable_IdlePriority,dc=null,mn=null;function L1(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:j1,F1=Math.log,U1=Math.LN2;function j1(t){return t>>>=0,t===0?32:31-(F1(t)/U1|0)|0}var El=64,Tl=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mo(l):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=B1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rw(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function $1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Pw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cw,tp,kw,xw,Nw,Nd=!1,Sl=[],mr=null,gr=null,yr=null,ha=new Map,da=new Map,or=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function H1(t,e,n,r,i){switch(e){case"focusin":return mr=Io(mr,t,e,n,r,i),!0;case"dragenter":return gr=Io(gr,t,e,n,r,i),!0;case"mouseover":return yr=Io(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ha.set(s,Io(ha.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,da.set(s,Io(da.get(s)||null,t,e,n,r,i)),!0}return!1}function Dw(t){var e=ii(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=ww(n),e!==null){t.blockedOn=e,Nw(t.priority,function(){kw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rd=r,n.target.dispatchEvent(r),Rd=null}else return e=$a(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){Hl(t)&&n.delete(e)}function G1(){Nd=!1,mr!==null&&Hl(mr)&&(mr=null),gr!==null&&Hl(gr)&&(gr=null),yr!==null&&Hl(yr)&&(yr=null),ha.forEach(Wg),da.forEach(Wg)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,G1)))}function fa(t){function e(i){return Eo(i,t)}if(0<Sl.length){Eo(Sl[0],t);for(var n=1;n<Sl.length;n++){var r=Sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Eo(mr,t),gr!==null&&Eo(gr,t),yr!==null&&Eo(yr,t),ha.forEach(e),da.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Dw(n),n.blockedOn===null&&or.shift()}var ms=Bn.ReactCurrentBatchConfig,Eu=!0;function K1(t,e,n,r){var i=fe,s=ms.transition;ms.transition=null;try{fe=1,np(t,e,n,r)}finally{fe=i,ms.transition=s}}function W1(t,e,n,r){var i=fe,s=ms.transition;ms.transition=null;try{fe=4,np(t,e,n,r)}finally{fe=i,ms.transition=s}}function np(t,e,n,r){if(Eu){var i=Dd(t,e,n,r);if(i===null)Uh(t,e,r,Tu,n),Kg(t,r);else if(H1(i,t,e,n,r))r.stopPropagation();else if(Kg(t,r),e&4&&-1<q1.indexOf(t)){for(;i!==null;){var s=$a(i);if(s!==null&&Cw(s),s=Dd(t,e,n,r),s===null&&Uh(t,e,r,Tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uh(t,e,r,null,n)}}var Tu=null;function Dd(t,e,n,r){if(Tu=null,t=Jf(r),t=ii(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function Vw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O1()){case Zf:return 1;case Sw:return 4;case wu:case M1:return 16;case Aw:return 536870912;default:return 16}default:return 16}}var dr=null,rp=null,Gl=null;function bw(){if(Gl)return Gl;var t,e=rp,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Qg(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:Qg,this.isPropagationStopped=Qg,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=bt(Ks),za=Pe({},Ks,{view:0,detail:0}),Q1=bt(za),xh,Nh,To,fc=Pe({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(xh=t.screenX-To.screenX,Nh=t.screenY-To.screenY):Nh=xh=0,To=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:Nh}}),Yg=bt(fc),Y1=Pe({},fc,{dataTransfer:0}),X1=bt(Y1),J1=Pe({},za,{relatedTarget:0}),Dh=bt(J1),Z1=Pe({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),eA=bt(Z1),tA=Pe({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nA=bt(tA),rA=Pe({},Ks,{data:0}),Xg=bt(rA),iA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oA[t])?!!e[t]:!1}function sp(){return aA}var lA=Pe({},za,{key:function(t){if(t.key){var e=iA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uA=bt(lA),cA=Pe({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jg=bt(cA),hA=Pe({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),dA=bt(hA),fA=Pe({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),pA=bt(fA),mA=Pe({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gA=bt(mA),yA=[9,13,27,32],op=Dn&&"CompositionEvent"in window,Ho=null;Dn&&"documentMode"in document&&(Ho=document.documentMode);var _A=Dn&&"TextEvent"in window&&!Ho,Ow=Dn&&(!op||Ho&&8<Ho&&11>=Ho),Zg=" ",ey=!1;function Mw(t,e){switch(t){case"keyup":return yA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function vA(t,e){switch(t){case"compositionend":return Lw(e);case"keypress":return e.which!==32?null:(ey=!0,Zg);case"textInput":return t=e.data,t===Zg&&ey?null:t;default:return null}}function wA(t,e){if(ns)return t==="compositionend"||!op&&Mw(t,e)?(t=bw(),Gl=rp=dr=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ow&&e.locale!=="ko"?null:e.data;default:return null}}var IA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ty(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IA[t.type]:e==="textarea"}function Fw(t,e,n,r){mw(r),e=Su(e,"onChange"),0<e.length&&(n=new ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Go=null,pa=null;function EA(t){Qw(t,0)}function pc(t){var e=ss(t);if(lw(e))return t}function TA(t,e){if(t==="change")return e}var Uw=!1;if(Dn){var Vh;if(Dn){var bh="oninput"in document;if(!bh){var ny=document.createElement("div");ny.setAttribute("oninput","return;"),bh=typeof ny.oninput=="function"}Vh=bh}else Vh=!1;Uw=Vh&&(!document.documentMode||9<document.documentMode)}function ry(){Go&&(Go.detachEvent("onpropertychange",jw),pa=Go=null)}function jw(t){if(t.propertyName==="value"&&pc(pa)){var e=[];Fw(e,pa,t,Jf(t)),vw(EA,e)}}function SA(t,e,n){t==="focusin"?(ry(),Go=e,pa=n,Go.attachEvent("onpropertychange",jw)):t==="focusout"&&ry()}function AA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(pa)}function RA(t,e){if(t==="click")return pc(e)}function PA(t,e){if(t==="input"||t==="change")return pc(e)}function CA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:CA;function ma(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pd.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function iy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sy(t,e){var n=iy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iy(n)}}function Bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zw(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kA(t){var e=zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bw(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sy(n,s);var o=sy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xA=Dn&&"documentMode"in document&&11>=document.documentMode,rs=null,Vd=null,Ko=null,bd=!1;function oy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||rs==null||rs!==yu(r)||(r=rs,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ko&&ma(Ko,r)||(Ko=r,r=Su(Vd,"onSelect"),0<r.length&&(e=new ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Oh={},$w={};Dn&&($w=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function mc(t){if(Oh[t])return Oh[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $w)return Oh[t]=e[n];return t}var qw=mc("animationend"),Hw=mc("animationiteration"),Gw=mc("animationstart"),Kw=mc("transitionend"),Ww=new Map,ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Ww.set(t,e),bi(e,[t])}for(var Mh=0;Mh<ay.length;Mh++){var Lh=ay[Mh],NA=Lh.toLowerCase(),DA=Lh[0].toUpperCase()+Lh.slice(1);Or(NA,"on"+DA)}Or(qw,"onAnimationEnd");Or(Hw,"onAnimationIteration");Or(Gw,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Kw,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function ly(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,N1(r,e,void 0,t),t.currentTarget=null}function Qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ly(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ly(i,l,c),s=u}}}if(vu)throw t=kd,vu=!1,kd=null,t}function _e(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var r=t+"__bubble";n.has(r)||(Yw(e,t,2,!1),n.add(r))}function Fh(t,e,n){var r=0;e&&(r|=4),Yw(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[Pl]){t[Pl]=!0,rw.forEach(function(n){n!=="selectionchange"&&(VA.has(n)||Fh(n,!1,t),Fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Fh("selectionchange",!1,e))}}function Yw(t,e,n,r){switch(Vw(e)){case 1:var i=K1;break;case 4:i=W1;break;default:i=np}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ii(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vw(function(){var c=s,d=Jf(n),p=[];e:{var m=Ww.get(t);if(m!==void 0){var T=ip,C=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":T=uA;break;case"focusin":C="focus",T=Dh;break;case"focusout":C="blur",T=Dh;break;case"beforeblur":case"afterblur":T=Dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=dA;break;case qw:case Hw:case Gw:T=eA;break;case Kw:T=pA;break;case"scroll":T=Q1;break;case"wheel":T=gA;break;case"copy":case"cut":case"paste":T=nA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Jg}var R=(e&4)!==0,V=!R&&t==="scroll",w=R?m!==null?m+"Capture":null:m;R=[];for(var v=c,I;v!==null;){I=v;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,w!==null&&(D=ca(v,w),D!=null&&R.push(ya(v,D,I)))),V)break;v=v.return}0<R.length&&(m=new T(m,C,null,n,d),p.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Rd&&(C=n.relatedTarget||n.fromElement)&&(ii(C)||C[Vn]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(C=n.relatedTarget||n.toElement,T=c,C=C?ii(C):null,C!==null&&(V=Oi(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(T=null,C=c),T!==C)){if(R=Yg,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=Jg,D="onPointerLeave",w="onPointerEnter",v="pointer"),V=T==null?m:ss(T),I=C==null?m:ss(C),m=new R(D,v+"leave",T,n,d),m.target=V,m.relatedTarget=I,D=null,ii(d)===c&&(R=new R(w,v+"enter",C,n,d),R.target=I,R.relatedTarget=V,D=R),V=D,T&&C)t:{for(R=T,w=C,v=0,I=R;I;I=Bi(I))v++;for(I=0,D=w;D;D=Bi(D))I++;for(;0<v-I;)R=Bi(R),v--;for(;0<I-v;)w=Bi(w),I--;for(;v--;){if(R===w||w!==null&&R===w.alternate)break t;R=Bi(R),w=Bi(w)}R=null}else R=null;T!==null&&uy(p,m,T,R,!1),C!==null&&V!==null&&uy(p,V,C,R,!0)}}e:{if(m=c?ss(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var O=TA;else if(ty(m))if(Uw)O=PA;else{O=AA;var L=SA}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=RA);if(O&&(O=O(t,c))){Fw(p,O,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Id(m,"number",m.value)}switch(L=c?ss(c):window,t){case"focusin":(ty(L)||L.contentEditable==="true")&&(rs=L,Vd=c,Ko=null);break;case"focusout":Ko=Vd=rs=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,oy(p,n,d);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":oy(p,n,d)}var _;if(op)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ns?Mw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ow&&n.locale!=="ko"&&(ns||y!=="onCompositionStart"?y==="onCompositionEnd"&&ns&&(_=bw()):(dr=d,rp="value"in dr?dr.value:dr.textContent,ns=!0)),L=Su(c,y),0<L.length&&(y=new Xg(y,t,null,n,d),p.push({event:y,listeners:L}),_?y.data=_:(_=Lw(n),_!==null&&(y.data=_)))),(_=_A?vA(t,n):wA(t,n))&&(c=Su(c,"onBeforeInput"),0<c.length&&(d=new Xg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}Qw(p,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ca(t,n),s!=null&&r.unshift(ya(t,s,i)),s=ca(t,e),s!=null&&r.push(ya(t,s,i))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ca(n,s),u!=null&&o.unshift(ya(n,u,l))):i||(u=ca(n,s),u!=null&&o.push(ya(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bA=/\r\n?/g,OA=/\u0000|\uFFFD/g;function cy(t){return(typeof t=="string"?t:""+t).replace(bA,`
`).replace(OA,"")}function Cl(t,e,n){if(e=cy(e),cy(t)!==e&&n)throw Error(j(425))}function Au(){}var Od=null,Md=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,MA=typeof clearTimeout=="function"?clearTimeout:void 0,hy=typeof Promise=="function"?Promise:void 0,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof hy<"u"?function(t){return hy.resolve(null).then(t).catch(FA)}:Fd;function FA(t){setTimeout(function(){throw t})}function jh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fa(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),dn="__reactFiber$"+Ws,_a="__reactProps$"+Ws,Vn="__reactContainer$"+Ws,Ud="__reactEvents$"+Ws,UA="__reactListeners$"+Ws,jA="__reactHandles$"+Ws;function ii(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dy(t);t!==null;){if(n=t[dn])return n;t=dy(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[dn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function gc(t){return t[_a]||null}var jd=[],os=-1;function Mr(t){return{current:t}}function ve(t){0>os||(t.current=jd[os],jd[os]=null,os--)}function ge(t,e){os++,jd[os]=t.current,t.current=e}var xr={},ct=Mr(xr),Et=Mr(!1),yi=xr;function Ss(t,e){var n=t.type.contextTypes;if(!n)return xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function Ru(){ve(Et),ve(ct)}function fy(t,e,n){if(ct.current!==xr)throw Error(j(168));ge(ct,e),ge(Et,n)}function Xw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,S1(t)||"Unknown",i));return Pe({},n,r)}function Pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,yi=ct.current,ge(ct,t),ge(Et,Et.current),!0}function py(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Xw(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,ve(Et),ve(ct),ge(ct,t)):ve(Et),ge(Et,n)}var Tn=null,yc=!1,Bh=!1;function Jw(t){Tn===null?Tn=[t]:Tn.push(t)}function BA(t){yc=!0,Jw(t)}function Lr(){if(!Bh&&Tn!==null){Bh=!0;var t=0,e=fe;try{var n=Tn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,yc=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),Tw(Zf,Lr),i}finally{fe=e,Bh=!1}}return null}var as=[],ls=0,Cu=null,ku=0,Mt=[],Lt=0,_i=null,An=1,Rn="";function Qr(t,e){as[ls++]=ku,as[ls++]=Cu,Cu=t,ku=e}function Zw(t,e,n){Mt[Lt++]=An,Mt[Lt++]=Rn,Mt[Lt++]=_i,_i=t;var r=An;t=Rn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-en(e)+i|n<<i|r,Rn=s+t}else An=1<<s|n<<i|r,Rn=t}function lp(t){t.return!==null&&(Qr(t,1),Zw(t,1,0))}function up(t){for(;t===Cu;)Cu=as[--ls],as[ls]=null,ku=as[--ls],as[ls]=null;for(;t===_i;)_i=Mt[--Lt],Mt[Lt]=null,Rn=Mt[--Lt],Mt[Lt]=null,An=Mt[--Lt],Mt[Lt]=null}var xt=null,Ct=null,Ee=!1,Xt=null;function eI(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function my(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Ct=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:An,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Ct=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(Ee){var e=Ct;if(e){var n=e;if(!my(t,e)){if(Bd(t))throw Error(j(418));e=_r(n.nextSibling);var r=xt;e&&my(t,e)?eI(r,n):(t.flags=t.flags&-4097|2,Ee=!1,xt=t)}}else{if(Bd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ee=!1,xt=t}}}function gy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function kl(t){if(t!==xt)return!1;if(!Ee)return gy(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=Ct)){if(Bd(t))throw tI(),Error(j(418));for(;e;)eI(t,e),e=_r(e.nextSibling)}if(gy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=xt?_r(t.stateNode.nextSibling):null;return!0}function tI(){for(var t=Ct;t;)t=_r(t.nextSibling)}function As(){Ct=xt=null,Ee=!1}function cp(t){Xt===null?Xt=[t]:Xt.push(t)}var zA=Bn.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function xl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yy(t){var e=t._init;return e(t._payload)}function nI(t){function e(w,v){if(t){var I=w.deletions;I===null?(w.deletions=[v],w.flags|=16):I.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Er(w,v),w.index=0,w.sibling=null,w}function s(w,v,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<v?(w.flags|=2,v):I):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,I,D){return v===null||v.tag!==6?(v=Wh(I,w.mode,D),v.return=w,v):(v=i(v,I),v.return=w,v)}function u(w,v,I,D){var O=I.type;return O===ts?d(w,v,I.props.children,D,I.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ir&&yy(O)===v.type)?(D=i(v,I.props),D.ref=So(w,v,I),D.return=w,D):(D=eu(I.type,I.key,I.props,null,w.mode,D),D.ref=So(w,v,I),D.return=w,D)}function c(w,v,I,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Qh(I,w.mode,D),v.return=w,v):(v=i(v,I.children||[]),v.return=w,v)}function d(w,v,I,D,O){return v===null||v.tag!==7?(v=ci(I,w.mode,D,O),v.return=w,v):(v=i(v,I),v.return=w,v)}function p(w,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wh(""+v,w.mode,I),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:return I=eu(v.type,v.key,v.props,null,w.mode,I),I.ref=So(w,null,v),I.return=w,I;case es:return v=Qh(v,w.mode,I),v.return=w,v;case ir:var D=v._init;return p(w,D(v._payload),I)}if(Oo(v)||vo(v))return v=ci(v,w.mode,I,null),v.return=w,v;xl(w,v)}return null}function m(w,v,I,D){var O=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:l(w,v,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case vl:return I.key===O?u(w,v,I,D):null;case es:return I.key===O?c(w,v,I,D):null;case ir:return O=I._init,m(w,v,O(I._payload),D)}if(Oo(I)||vo(I))return O!==null?null:d(w,v,I,D,null);xl(w,I)}return null}function T(w,v,I,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(I)||null,l(v,w,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case vl:return w=w.get(D.key===null?I:D.key)||null,u(v,w,D,O);case es:return w=w.get(D.key===null?I:D.key)||null,c(v,w,D,O);case ir:var L=D._init;return T(w,v,I,L(D._payload),O)}if(Oo(D)||vo(D))return w=w.get(I)||null,d(v,w,D,O,null);xl(v,D)}return null}function C(w,v,I,D){for(var O=null,L=null,_=v,y=v=0,E=null;_!==null&&y<I.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var A=m(w,_,I[y],D);if(A===null){_===null&&(_=E);break}t&&_&&A.alternate===null&&e(w,_),v=s(A,v,y),L===null?O=A:L.sibling=A,L=A,_=E}if(y===I.length)return n(w,_),Ee&&Qr(w,y),O;if(_===null){for(;y<I.length;y++)_=p(w,I[y],D),_!==null&&(v=s(_,v,y),L===null?O=_:L.sibling=_,L=_);return Ee&&Qr(w,y),O}for(_=r(w,_);y<I.length;y++)E=T(_,w,y,I[y],D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),v=s(E,v,y),L===null?O=E:L.sibling=E,L=E);return t&&_.forEach(function(P){return e(w,P)}),Ee&&Qr(w,y),O}function R(w,v,I,D){var O=vo(I);if(typeof O!="function")throw Error(j(150));if(I=O.call(I),I==null)throw Error(j(151));for(var L=O=null,_=v,y=v=0,E=null,A=I.next();_!==null&&!A.done;y++,A=I.next()){_.index>y?(E=_,_=null):E=_.sibling;var P=m(w,_,A.value,D);if(P===null){_===null&&(_=E);break}t&&_&&P.alternate===null&&e(w,_),v=s(P,v,y),L===null?O=P:L.sibling=P,L=P,_=E}if(A.done)return n(w,_),Ee&&Qr(w,y),O;if(_===null){for(;!A.done;y++,A=I.next())A=p(w,A.value,D),A!==null&&(v=s(A,v,y),L===null?O=A:L.sibling=A,L=A);return Ee&&Qr(w,y),O}for(_=r(w,_);!A.done;y++,A=I.next())A=T(_,w,y,A.value,D),A!==null&&(t&&A.alternate!==null&&_.delete(A.key===null?y:A.key),v=s(A,v,y),L===null?O=A:L.sibling=A,L=A);return t&&_.forEach(function(k){return e(w,k)}),Ee&&Qr(w,y),O}function V(w,v,I,D){if(typeof I=="object"&&I!==null&&I.type===ts&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case vl:e:{for(var O=I.key,L=v;L!==null;){if(L.key===O){if(O=I.type,O===ts){if(L.tag===7){n(w,L.sibling),v=i(L,I.props.children),v.return=w,w=v;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ir&&yy(O)===L.type){n(w,L.sibling),v=i(L,I.props),v.ref=So(w,L,I),v.return=w,w=v;break e}n(w,L);break}else e(w,L);L=L.sibling}I.type===ts?(v=ci(I.props.children,w.mode,D,I.key),v.return=w,w=v):(D=eu(I.type,I.key,I.props,null,w.mode,D),D.ref=So(w,v,I),D.return=w,w=D)}return o(w);case es:e:{for(L=I.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(w,v.sibling),v=i(v,I.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Qh(I,w.mode,D),v.return=w,w=v}return o(w);case ir:return L=I._init,V(w,v,L(I._payload),D)}if(Oo(I))return C(w,v,I,D);if(vo(I))return R(w,v,I,D);xl(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,I),v.return=w,w=v):(n(w,v),v=Wh(I,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return V}var Rs=nI(!0),rI=nI(!1),xu=Mr(null),Nu=null,us=null,hp=null;function dp(){hp=us=Nu=null}function fp(t){var e=xu.current;ve(xu),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Nu=t,hp=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Nu===null)throw Error(j(308));us=t,Nu.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var si=null;function pp(t){si===null?si=[t]:si.push(t)}function iI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function _y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,R=l;switch(m=e,T=n,R.tag){case 1:if(C=R.payload,typeof C=="function"){p=C.call(T,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=R.payload,m=typeof C=="function"?C.call(T,p,m):C,m==null)break e;p=Pe({},p,m);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=p):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=p}}function vy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var qa={},gn=Mr(qa),va=Mr(qa),wa=Mr(qa);function oi(t){if(t===qa)throw Error(j(174));return t}function gp(t,e){switch(ge(wa,e),ge(va,t),ge(gn,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}ve(gn),ge(gn,e)}function Ps(){ve(gn),ve(va),ve(wa)}function oI(t){oi(wa.current);var e=oi(gn.current),n=Td(e,t.type);e!==n&&(ge(va,t),ge(gn,n))}function yp(t){va.current===t&&(ve(gn),ve(va))}var Se=Mr(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zh=[];function _p(){for(var t=0;t<zh.length;t++)zh[t]._workInProgressVersionPrimary=null;zh.length=0}var Ql=Bn.ReactCurrentDispatcher,$h=Bn.ReactCurrentBatchConfig,vi=0,Re=null,je=null,Ge=null,bu=!1,Wo=!1,Ia=0,$A=0;function nt(){throw Error(j(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,i,s){if(vi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?KA:WA,t=n(r,i),Wo){s=0;do{if(Wo=!1,Ia=0,25<=s)throw Error(j(301));s+=1,Ge=je=null,e.updateQueue=null,Ql.current=QA,t=n(r,i)}while(Wo)}if(Ql.current=Ou,e=je!==null&&je.next!==null,vi=0,Ge=je=Re=null,bu=!1,e)throw Error(j(300));return t}function Ip(){var t=Ia!==0;return Ia=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Re.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Ht(){if(je===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ge===null?Re.memoizedState:Ge.next;if(e!==null)Ge=e,je=t;else{if(t===null)throw Error(j(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?Re.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Ea(t,e){return typeof e=="function"?e(t):e}function qh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((vi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=d,wi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aI(){}function lI(t,e){var n=Re,r=Ht(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,Ep(hI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ta(9,cI.bind(null,n,r,i,e),void 0,null),We===null)throw Error(j(349));vi&30||uI(n,e,i)}return i}function uI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cI(t,e,n,r){e.value=n,e.getSnapshot=r,dI(e)&&fI(t)}function hI(t,e,n){return n(function(){dI(e)&&fI(t)})}function dI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function fI(t){var e=bn(t,1);e!==null&&tn(e,t,1,-1)}function wy(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=GA.bind(null,Re,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pI(){return Ht().memoizedState}function Yl(t,e,n,r){var i=cn();Re.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function _c(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&vp(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function Iy(t,e){return Yl(8390656,8,t,e)}function Ep(t,e){return _c(2048,8,t,e)}function mI(t,e){return _c(4,2,t,e)}function gI(t,e){return _c(4,4,t,e)}function yI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _I(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,yI.bind(null,e,t),n)}function Tp(){}function vI(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wI(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function II(t,e,n){return vi&21?(sn(n,e)||(n=Rw(),Re.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function qA(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=$h.transition;$h.transition={};try{t(!1),e()}finally{fe=n,$h.transition=r}}function EI(){return Ht().memoizedState}function HA(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TI(t))SI(e,n);else if(n=iI(t,e,n,r),n!==null){var i=mt();tn(n,t,r,i),AI(n,e,r)}}function GA(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TI(t))SI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(i.next=i,pp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=iI(t,e,i,r),n!==null&&(i=mt(),tn(n,t,r,i),AI(n,e,r))}}function TI(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function SI(t,e){Wo=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var Ou={readContext:qt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},KA={readContext:qt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:Iy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,yI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HA.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:wy,useDebugValue:Tp,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=wy(!1),e=t[0];return t=qA.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=cn();if(Ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),We===null)throw Error(j(349));vi&30||uI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Iy(hI.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,cI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=We.identifierPrefix;if(Ee){var n=Rn,r=An;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WA={readContext:qt,useCallback:vI,useContext:qt,useEffect:Ep,useImperativeHandle:_I,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:wI,useReducer:qh,useRef:pI,useState:function(){return qh(Ea)},useDebugValue:Tp,useDeferredValue:function(t){var e=Ht();return II(e,je.memoizedState,t)},useTransition:function(){var t=qh(Ea)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:lI,useId:EI,unstable_isNewReconciler:!1},QA={readContext:qt,useCallback:vI,useContext:qt,useEffect:Ep,useImperativeHandle:_I,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:wI,useReducer:Hh,useRef:pI,useState:function(){return Hh(Ea)},useDebugValue:Tp,useDeferredValue:function(t){var e=Ht();return je===null?e.memoizedState=t:II(e,je.memoizedState,t)},useTransition:function(){var t=Hh(Ea)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:lI,useId:EI,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Ir(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(tn(e,t,i,r),Wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Ir(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(tn(e,t,i,r),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Ir(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(tn(e,t,r,n),Wl(e,t,r))}};function Ey(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,r)||!ma(i,s):!0}function RI(t,e,n){var r=!1,i=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Tt(e)?yi:ct.current,r=e.contextTypes,s=(r=r!=null)?Ss(t,i):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Tt(e)?yi:ct.current,i.context=Ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vc.enqueueReplaceState(i,i.state,null),Du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",r=e;do n+=T1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YA=typeof WeakMap=="function"?WeakMap:Map;function PI(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lu||(Lu=!0,nf=r),Gd(t,e)},n}function CI(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cR.bind(null,t,e,n),e.then(t,t))}function Ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var XA=Bn.ReactCurrentOwner,wt=!1;function ft(t,e,n,r){e.child=t===null?rI(e,null,n,r):Rs(e,t.child,n,r)}function Py(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=wp(t,e,n,r,s,i),n=Ip(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ee&&n&&lp(e),e.flags|=1,ft(t,e,r,i),e.child)}function Cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kI(t,e,s,r,i)):(t=eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function kI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ma(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Kd(t,e,n,r,i)}function xI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(hs,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(hs,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(hs,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(hs,Rt),Rt|=r;return ft(t,e,i,n),e.child}function NI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,r,i){var s=Tt(n)?yi:ct.current;return s=Ss(e,s),gs(e,i),n=wp(t,e,n,r,s,i),r=Ip(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ee&&r&&lp(e),e.flags|=1,ft(t,e,n,i),e.child)}function ky(t,e,n,r,i){if(Tt(n)){var s=!0;Pu(e)}else s=!1;if(gs(e,i),e.stateNode===null)Xl(t,e),RI(e,n,r),Hd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qt(c):(c=Tt(n)?yi:ct.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ty(e,o,r,c),sr=!1;var m=e.memoizedState;o.state=m,Du(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Et.current||sr?(typeof d=="function"&&(qd(e,n,d,r),u=e.memoizedState),(l=sr||Ey(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sI(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=Tt(n)?yi:ct.current,u=Ss(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ty(e,o,r,u),sr=!1,m=e.memoizedState,o.state=m,Du(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Et.current||sr?(typeof T=="function"&&(qd(e,n,T,r),C=e.memoizedState),(c=sr||Ey(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Wd(t,e,n,r,s,i)}function Wd(t,e,n,r,i,s){NI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&py(e,n,!1),On(t,e,s);r=e.stateNode,XA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&py(e,n,!0),e.child}function DI(t){var e=t.stateNode;e.pendingContext?fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fy(t,e.context,!1),gp(t,e.containerInfo)}function xy(t,e,n,r,i){return As(),cp(i),e.flags|=256,ft(t,e,n,r),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function Yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function VI(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Se,i&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yd(n),e.memoizedState=Qd,t):Sp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sp(t,e){return e=Ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&cp(r),Rs(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gh(Error(j(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ec({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=Yd(o),e.memoizedState=Qd,s);if(!(e.mode&1))return Nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Gh(s,r,void 0),Nl(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),tn(r,t,i,-1))}return xp(),r=Gh(Error(j(421))),Nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=_r(i.nextSibling),xt=e,Ee=!0,Xt=null,t!==null&&(Mt[Lt++]=An,Mt[Lt++]=Rn,Mt[Lt++]=_i,An=t.id,Rn=t.overflow,_i=e),e=Sp(e,r.children),e.flags|=4096,e)}function Ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function Kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ny(t,n,e);else if(t.tag===19)Ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kh(e,!0,n,null,s);break;case"together":Kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZA(t,e,n){switch(e.tag){case 3:DI(e),As();break;case 5:oI(e);break;case 1:Tt(e.type)&&Pu(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?VI(t,e,n):(ge(Se,Se.current&1),t=On(t,e,n),t!==null?t.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,xI(t,e,n)}return On(t,e,n)}var OI,Xd,MI,LI;OI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};MI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,oi(gn.current);var s=null;switch(n){case"input":i=vd(t,i),r=vd(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Ed(t,i),r=Ed(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Au)}Sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};LI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ao(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eR(t,e,n){var r=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Tt(e.type)&&Ru(),rt(e),null;case 3:return r=e.stateNode,Ps(),ve(Et),ve(ct),_p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(of(Xt),Xt=null))),Xd(t,e),rt(e),null;case 5:yp(e);var i=oi(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)MI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return rt(e),null}if(t=oi(gn.current),kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Lo.length;i++)_e(Lo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":jg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":zg(r,s),_e("invalid",r)}Sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),i=["children",""+l]):la.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":wl(r),Bg(r,s,!0);break;case"textarea":wl(r),$g(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[_a]=r,OI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ad(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Lo.length;i++)_e(Lo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":jg(t,r),i=vd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":zg(t,r),i=Ed(t,r),_e("invalid",t);break;default:i=r}Sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ua(t,u):typeof u=="number"&&ua(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Wf(t,s,u,o))}switch(n){case"input":wl(t),Bg(t,r,!1);break;case"textarea":wl(t),$g(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)LI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=oi(wa.current),oi(gn.current),kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return rt(e),null;case 13:if(ve(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))tI(),As(),e.flags|=98560,s=!1;else if(s=kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[dn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Xt!==null&&(of(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Be===0&&(Be=3):xp())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Ps(),Xd(t,e),t===null&&ga(e.stateNode.containerInfo),rt(e),null;case 10:return fp(e.type._context),rt(e),null;case 17:return Tt(e.type)&&Ru(),rt(e),null;case 19:if(ve(Se),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ao(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vu(t),o!==null){for(e.flags|=128,Ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>ks&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return rt(e),null}else 2*De()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function tR(t,e){switch(up(e),e.tag){case 1:return Tt(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),ve(Et),ve(ct),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(ve(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Se),null;case 4:return Ps(),null;case 10:return fp(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var Dl=!1,at=!1,nR=typeof WeakSet=="function"?WeakSet:Set,H=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Jd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Dy=!1;function rR(t,e){if(Od=Eu,t=zw(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Eu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var R=C.memoizedProps,V=C.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:Wt(e.type,R),V);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=Dy,Dy=!1,C}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jd(e,n,s)}i=i.next}while(i!==r)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function FI(t){var e=t.alternate;e!==null&&(t.alternate=null,FI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[_a],delete e[Ud],delete e[UA],delete e[jA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UI(t){return t.tag===5||t.tag===3||t.tag===4}function Vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var Qe=null,Qt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)jI(t,e,n),n=n.sibling}function jI(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:at||cs(n,e);case 6:var r=Qe,i=Qt;Qe=null,Jn(t,e,n),Qe=r,Qt=i,Qe!==null&&(Qt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Qt?(t=Qe,n=n.stateNode,t.nodeType===8?jh(t.parentNode,n):t.nodeType===1&&jh(t,n),fa(t)):jh(Qe,n.stateNode));break;case 4:r=Qe,i=Qt,Qe=n.stateNode.containerInfo,Qt=!0,Jn(t,e,n),Qe=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jd(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!at&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Jn(t,e,n),at=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function by(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nR),e.forEach(function(r){var i=dR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Qt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Qt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Qe===null)throw Error(j(160));jI(s,o,i),Qe=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BI(e,t),e=e.sibling}function BI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),un(t),r&4){try{Qo(3,t,t.return),wc(3,t)}catch(R){xe(t,t.return,R)}try{Qo(5,t,t.return)}catch(R){xe(t,t.return,R)}}break;case 1:Kt(e,t),un(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(Kt(e,t),un(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{ua(i,"")}catch(R){xe(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uw(i,s),Ad(l,o);var c=Ad(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?pw(i,p):d==="dangerouslySetInnerHTML"?dw(i,p):d==="children"?ua(i,p):Wf(i,d,p,c)}switch(l){case"input":wd(i,s);break;case"textarea":cw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?ds(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?ds(i,!!s.multiple,s.defaultValue,!0):ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(R){xe(t,t.return,R)}}break;case 6:if(Kt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){xe(t,t.return,R)}}break;case 3:if(Kt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(R){xe(t,t.return,R)}break;case 4:Kt(e,t),un(t);break;case 13:Kt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pp=De())),r&4&&by(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||d,Kt(e,t),at=c):Kt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,T=m.child,m.tag){case 0:case 11:case 14:case 15:Qo(4,m,m.return);break;case 1:cs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(R){xe(r,n,R)}}break;case 5:cs(m,m.return);break;case 22:if(m.memoizedState!==null){My(p);continue}}T!==null?(T.return=m,H=T):My(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fw("display",o))}catch(R){xe(t,t.return,R)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){xe(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(e,t),un(t),r&4&&by(t);break;case 21:break;default:Kt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var s=Vy(t);tf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vy(t);ef(t,l,o);break;default:throw Error(j(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iR(t,e,n){H=t,zI(t)}function zI(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Dl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=Dl;var c=at;if(Dl=o,(at=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Ly(i):u!==null?(u.return=o,H=u):Ly(i);for(;s!==null;)H=s,zI(s),s=s.sibling;H=i,Dl=l,at=c}Oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Oy(t)}}function Oy(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}at||e.flags&512&&Zd(e)}catch(m){xe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function My(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Ly(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{Zd(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{Zd(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var sR=Math.ceil,Mu=Bn.ReactCurrentDispatcher,Ap=Bn.ReactCurrentOwner,Bt=Bn.ReactCurrentBatchConfig,ue=0,We=null,be=null,Je=0,Rt=0,hs=Mr(0),Be=0,Sa=null,wi=0,Ic=0,Rp=0,Yo=null,vt=null,Pp=0,ks=1/0,En=null,Lu=!1,nf=null,wr=null,Vl=!1,fr=null,Fu=0,Xo=0,rf=null,Jl=-1,Zl=0;function mt(){return ue&6?De():Jl!==-1?Jl:Jl=De()}function Ir(t){return t.mode&1?ue&2&&Je!==0?Je&-Je:zA.transition!==null?(Zl===0&&(Zl=Rw()),Zl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Vw(t.type)),t):1}function tn(t,e,n,r){if(50<Xo)throw Xo=0,rf=null,Error(j(185));Ba(t,n,r),(!(ue&2)||t!==We)&&(t===We&&(!(ue&2)&&(Ic|=n),Be===4&&ar(t,Je)),St(t,r),n===1&&ue===0&&!(e.mode&1)&&(ks=De()+500,yc&&Lr()))}function St(t,e){var n=t.callbackNode;z1(t,e);var r=Iu(t,t===We?Je:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?BA(Fy.bind(null,t)):Jw(Fy.bind(null,t)),LA(function(){!(ue&6)&&Lr()}),n=null;else{switch(Pw(r)){case 1:n=Zf;break;case 4:n=Sw;break;case 16:n=wu;break;case 536870912:n=Aw;break;default:n=wu}n=YI(n,$I.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $I(t,e){if(Jl=-1,Zl=0,ue&6)throw Error(j(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=Iu(t,t===We?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uu(t,r);else{e=r;var i=ue;ue|=2;var s=HI();(We!==t||Je!==e)&&(En=null,ks=De()+500,ui(t,e));do try{lR();break}catch(l){qI(t,l)}while(!0);dp(),Mu.current=s,ue=i,be!==null?e=0:(We=null,Je=0,e=Be)}if(e!==0){if(e===2&&(i=xd(t),i!==0&&(r=i,e=sf(t,i))),e===1)throw n=Sa,ui(t,0),ar(t,r),St(t,De()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!oR(i)&&(e=Uu(t,r),e===2&&(s=xd(t),s!==0&&(r=s,e=sf(t,s))),e===1))throw n=Sa,ui(t,0),ar(t,r),St(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Yr(t,vt,En);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Pp+500-De(),10<e)){if(Iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fd(Yr.bind(null,t,vt,En),e);break}Yr(t,vt,En);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sR(r/1960))-r,10<r){t.timeoutHandle=Fd(Yr.bind(null,t,vt,En),r);break}Yr(t,vt,En);break;case 5:Yr(t,vt,En);break;default:throw Error(j(329))}}}return St(t,De()),t.callbackNode===n?$I.bind(null,t):null}function sf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Uu(t,e),t!==2&&(e=vt,vt=n,e!==null&&of(e)),t}function of(t){vt===null?vt=t:vt.push.apply(vt,t)}function oR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Rp,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Fy(t){if(ue&6)throw Error(j(327));ys();var e=Iu(t,0);if(!(e&1))return St(t,De()),null;var n=Uu(t,e);if(t.tag!==0&&n===2){var r=xd(t);r!==0&&(e=r,n=sf(t,r))}if(n===1)throw n=Sa,ui(t,0),ar(t,e),St(t,De()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,vt,En),St(t,De()),null}function Cp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(ks=De()+500,yc&&Lr())}}function Ii(t){fr!==null&&fr.tag===0&&!(ue&6)&&ys();var e=ue;ue|=1;var n=Bt.transition,r=fe;try{if(Bt.transition=null,fe=1,t)return t()}finally{fe=r,Bt.transition=n,ue=e,!(ue&6)&&Lr()}}function kp(){Rt=hs.current,ve(hs)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MA(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Ps(),ve(Et),ve(ct),_p();break;case 5:yp(r);break;case 4:Ps();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:fp(r.type._context);break;case 22:case 23:kp()}n=n.return}if(We=t,be=t=Er(t.current,null),Je=Rt=e,Be=0,Sa=null,Rp=Ic=wi=0,vt=Yo=null,si!==null){for(e=0;e<si.length;e++)if(n=si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}si=null}return t}function qI(t,e){do{var n=be;try{if(dp(),Ql.current=Ou,bu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bu=!1}if(vi=0,Ge=je=Re=null,Wo=!1,Ia=0,Ap.current=null,n===null||n.return===null){Be=1,Sa=e,be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Ay(o);if(T!==null){T.flags&=-257,Ry(T,o,l,s,e),T.mode&1&&Sy(s,c,e),e=T,u=c;var C=e.updateQueue;if(C===null){var R=new Set;R.add(u),e.updateQueue=R}else C.add(u);break e}else{if(!(e&1)){Sy(s,c,e),xp();break e}u=Error(j(426))}}else if(Ee&&l.mode&1){var V=Ay(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ry(V,o,l,s,e),cp(Cs(u,l));break e}}s=u=Cs(u,l),Be!==4&&(Be=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=PI(s,u,e);_y(s,w);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(wr===null||!wr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=CI(s,l,e);_y(s,D);break e}}s=s.return}while(s!==null)}KI(n)}catch(O){e=O,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function HI(){var t=Mu.current;return Mu.current=Ou,t===null?Ou:t}function xp(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||!(wi&268435455)&&!(Ic&268435455)||ar(We,Je)}function Uu(t,e){var n=ue;ue|=2;var r=HI();(We!==t||Je!==e)&&(En=null,ui(t,e));do try{aR();break}catch(i){qI(t,i)}while(!0);if(dp(),ue=n,Mu.current=r,be!==null)throw Error(j(261));return We=null,Je=0,Be}function aR(){for(;be!==null;)GI(be)}function lR(){for(;be!==null&&!V1();)GI(be)}function GI(t){var e=QI(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?KI(t):be=e,Ap.current=null}function KI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tR(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,be=null;return}}else if(n=eR(n,e,Rt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Be===0&&(Be=5)}function Yr(t,e,n){var r=fe,i=Bt.transition;try{Bt.transition=null,fe=1,uR(t,e,n,r)}finally{Bt.transition=i,fe=r}return null}function uR(t,e,n,r){do ys();while(fr!==null);if(ue&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($1(t,s),t===We&&(be=We=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vl||(Vl=!0,YI(wu,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=fe;fe=1;var l=ue;ue|=4,Ap.current=null,rR(t,n),BI(n,t),kA(Md),Eu=!!Od,Md=Od=null,t.current=n,iR(n),b1(),ue=l,fe=o,Bt.transition=s}else t.current=n;if(Vl&&(Vl=!1,fr=t,Fu=i),s=t.pendingLanes,s===0&&(wr=null),L1(n.stateNode),St(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lu)throw Lu=!1,t=nf,nf=null,t;return Fu&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===rf?Xo++:(Xo=0,rf=t):Xo=0,Lr(),null}function ys(){if(fr!==null){var t=Pw(Fu),e=Bt.transition,n=fe;try{if(Bt.transition=null,fe=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,Fu=0,ue&6)throw Error(j(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Qo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,T=d.return;if(FI(d),d===c){H=null;break}if(m!==null){m.return=T,H=m;break}H=T}}}var C=s.alternate;if(C!==null){var R=C.child;if(R!==null){C.child=null;do{var V=R.sibling;R.sibling=null,R=V}while(R!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wc(9,l)}}catch(O){xe(l,l.return,O)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(ue=i,Lr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{fe=n,Bt.transition=e}}return!1}function Uy(t,e,n){e=Cs(n,e),e=PI(t,e,1),t=vr(t,e,1),e=mt(),t!==null&&(Ba(t,1,e),St(t,e))}function xe(t,e,n){if(t.tag===3)Uy(t,t,n);else for(;e!==null;){if(e.tag===3){Uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=Cs(n,t),t=CI(e,t,1),e=vr(e,t,1),t=mt(),e!==null&&(Ba(e,1,t),St(e,t));break}}e=e.return}}function cR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>De()-Pp?ui(t,0):Rp|=n),St(t,e)}function WI(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=mt();t=bn(t,e),t!==null&&(Ba(t,e,n),St(t,n))}function hR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),WI(t,n)}function dR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),WI(t,n)}var QI;QI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,ZA(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ee&&e.flags&1048576&&Zw(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var i=Ss(e,ct.current);gs(e,n),i=wp(null,e,r,t,i,n);var s=Ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,Pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mp(e),i.updater=vc,e.stateNode=i,i._reactInternals=e,Hd(e,r,t,n),e=Wd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&lp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pR(r),t=Wt(r,t),i){case 0:e=Kd(null,e,r,t,n);break e;case 1:e=ky(null,e,r,t,n);break e;case 11:e=Py(null,e,r,t,n);break e;case 14:e=Cy(null,e,r,Wt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Kd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ky(t,e,r,i,n);case 3:e:{if(DI(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sI(t,e),Du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cs(Error(j(423)),e),e=xy(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error(j(424)),e),e=xy(t,e,r,n,i);break e}else for(Ct=_r(e.stateNode.containerInfo.firstChild),xt=e,Ee=!0,Xt=null,n=rI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=On(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return oI(e),t===null&&zd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ld(r,i)?o=null:s!==null&&Ld(r,s)&&(e.flags|=32),NI(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return VI(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Py(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(xu,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!Et.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$d(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=qt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Cy(t,e,r,i,n);case 15:return kI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Xl(t,e),e.tag=1,Tt(r)?(t=!0,Pu(e)):t=!1,gs(e,n),RI(e,r,i),Hd(e,r,i,n),Wd(null,e,r,!0,t,n);case 19:return bI(t,e,n);case 22:return xI(t,e,n)}throw Error(j(156,e.tag))};function YI(t,e){return Tw(t,e)}function fR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new fR(t,e,n,r)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pR(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Xf)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return ci(n.children,i,s,e);case Qf:o=8,i|=8;break;case md:return t=Ut(12,n,e,i|2),t.elementType=md,t.lanes=s,t;case gd:return t=Ut(13,n,e,i),t.elementType=gd,t.lanes=s,t;case yd:return t=Ut(19,n,e,i),t.elementType=yd,t.lanes=s,t;case ow:return Ec(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iw:o=10;break e;case sw:o=9;break e;case Yf:o=11;break e;case Xf:o=14;break e;case ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Ec(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=ow,t.lanes=n,t.stateNode={isHidden:!1},t}function Wh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Qh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,r,i,s,o,l,u){return t=new mR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function gR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XI(t){if(!t)return xr;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Tt(n))return Xw(t,n,e)}return e}function JI(t,e,n,r,i,s,o,l,u){return t=Dp(n,r,!0,t,i,s,o,l,u),t.context=XI(null),n=t.current,r=mt(),i=Ir(n),s=xn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Ba(t,i,r),St(t,r),t}function Tc(t,e,n,r){var i=e.current,s=mt(),o=Ir(i);return n=XI(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(tn(t,i,o,s),Wl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vp(t,e){jy(t,e),(t=t.alternate)&&jy(t,e)}function yR(){return null}var ZI=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}Sc.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Tc(t,e,null,null)};Sc.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ii(function(){Tc(null,t,null,null)}),e[Vn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=xw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Dw(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function By(){}function _R(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ju(o);s.call(c)}}var o=JI(e,r,t,0,null,!1,!1,"",By);return t._reactRootContainer=o,t[Vn]=o.current,ga(t.nodeType===8?t.parentNode:t),Ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ju(u);l.call(c)}}var u=Dp(t,0,!1,null,null,!1,!1,"",By);return t._reactRootContainer=u,t[Vn]=u.current,ga(t.nodeType===8?t.parentNode:t),Ii(function(){Tc(e,u,n,r)}),u}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ju(o);l.call(u)}}Tc(e,o,t,i)}else o=_R(n,e,t,i,r);return ju(o)}Cw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(ep(e,n|1),St(e,De()),!(ue&6)&&(ks=De()+500,Lr()))}break;case 13:Ii(function(){var r=bn(t,1);if(r!==null){var i=mt();tn(r,t,1,i)}}),Vp(t,1)}};tp=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=mt();tn(e,t,134217728,n)}Vp(t,134217728)}};kw=function(t){if(t.tag===13){var e=Ir(t),n=bn(t,e);if(n!==null){var r=mt();tn(n,t,e,r)}Vp(t,e)}};xw=function(){return fe};Nw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Pd=function(t,e,n){switch(e){case"input":if(wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(j(90));lw(r),wd(r,i)}}}break;case"textarea":cw(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};yw=Cp;_w=Ii;var vR={usingClientEntryPoint:!1,Events:[$a,ss,gc,mw,gw,Cp]},Ro={findFiberByHostInstance:ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wR={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||yR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{dc=bl.inject(wR),mn=bl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(j(200));return gR(t,e,null,n)};Vt.createRoot=function(t,e){if(!Op(t))throw Error(j(299));var n=!1,r="",i=ZI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,ga(t.nodeType===8?t.parentNode:t),new bp(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Iw(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Ii(t)};Vt.hydrate=function(t,e,n){if(!Ac(e))throw Error(j(200));return Rc(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JI(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,ga(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sc(e)};Vt.render=function(t,e,n){if(!Ac(e))throw Error(j(200));return Rc(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(j(40));return t._reactRootContainer?(Ii(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Cp;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ac(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Rc(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function eE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eE)}catch(t){console.error(t)}}eE(),ew.exports=Vt;var IR=ew.exports,zy=IR;fd.createRoot=zy.createRoot,fd.hydrateRoot=zy.hydrateRoot;const ER=()=>{};var $y={};/**
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
 */const tE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new SR;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AR=function(t){const e=tE(t);return nE.encodeByteArray(e,!0)},Bu=function(t){return AR(t).replace(/\./g,"")},rE=function(t){try{return nE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RR=()=>iE().__FIREBASE_DEFAULTS__,PR=()=>{if(typeof process>"u"||typeof $y>"u")return;const t=$y.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rE(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return ER()||RR()||PR()||CR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sE=t=>{var e,n;return(n=(e=Pc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},kR=t=>{const e=sE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oE=()=>{var t;return(t=Pc())==null?void 0:t.config},aE=t=>{var e;return(e=Pc())==null?void 0:e[`_${t}`]};/**
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
 */class xR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Qs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function NR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Bu(JSON.stringify(n)),Bu(JSON.stringify(o)),""].join(".")}const Jo={};function DR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Jo))Jo[e]?t.emulator.push(e):t.prod.push(e);return t}function VR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qy=!1;function uE(t,e){if(typeof window>"u"||typeof document>"u"||!Qs(window.location.host)||Jo[t]===e||Jo[t]||qy)return;Jo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=DR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{qy=!0,o()},m}function d(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=VR(r),T=n("text"),C=document.getElementById(T)||document.createElement("span"),R=n("learnmore"),V=document.getElementById(R)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const I=m.element;l(I),d(V,R);const D=c();u(v,w),I.append(v,C,V,D),document.body.appendChild(I)}s?(C.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function cE(){var e;const t=(e=Pc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FR(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hE(){return!cE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dE(){return!cE()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function UR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const jR="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jR,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function BR(t,e){return t.replace(zR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zR=/\{\$([^}]+)}/g;function $R(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hy(s)&&Hy(o)){if(!Ei(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qR(t,e){const n=new HR(t,e);return n.subscribe.bind(n)}class HR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yh),i.error===void 0&&(i.error=Yh),i.complete===void 0&&(i.complete=Yh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yh(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WR(t){return t===Xr?void 0:t}function QR(t){return t.instantiationMode==="EAGER"}/**
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
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const XR={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},JR=oe.INFO,ZR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},eP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mp{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=eP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const tP=(t,e)=>e.some(n=>t instanceof n);let Gy,Ky;function nP(){return Gy||(Gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rP(){return Ky||(Ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pE=new WeakMap,af=new WeakMap,mE=new WeakMap,Xh=new WeakMap,Lp=new WeakMap;function iP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pE.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function sP(t){if(af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oP(t){lf=t(lf)}function aP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jh(this),e,...n);return mE.set(r,e.sort?e.sort():[e]),Tr(r)}:rP().includes(t)?function(...e){return t.apply(Jh(this),e),Tr(pE.get(this))}:function(...e){return Tr(t.apply(Jh(this),e))}}function lP(t){return typeof t=="function"?aP(t):(t instanceof IDBTransaction&&sP(t),tP(t,nP())?new Proxy(t,lf):t)}function Tr(t){if(t instanceof IDBRequest)return iP(t);if(Xh.has(t))return Xh.get(t);const e=lP(t);return e!==t&&(Xh.set(t,e),Lp.set(e,t)),e}const Jh=t=>Lp.get(t);function uP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const cP=["get","getKey","getAll","getAllKeys","count"],hP=["put","add","delete","clear"],Zh=new Map;function Wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Zh.set(e,s),s}oP(t=>({...t,get:(e,n,r)=>Wy(e,n)||t.get(e,n,r),has:(e,n)=>!!Wy(e,n)||t.has(e,n)}));/**
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
 */class dP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",Qy="0.14.7";/**
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
 */const Mn=new Mp("@firebase/app"),pP="@firebase/app-compat",mP="@firebase/analytics-compat",gP="@firebase/analytics",yP="@firebase/app-check-compat",_P="@firebase/app-check",vP="@firebase/auth",wP="@firebase/auth-compat",IP="@firebase/database",EP="@firebase/data-connect",TP="@firebase/database-compat",SP="@firebase/functions",AP="@firebase/functions-compat",RP="@firebase/installations",PP="@firebase/installations-compat",CP="@firebase/messaging",kP="@firebase/messaging-compat",xP="@firebase/performance",NP="@firebase/performance-compat",DP="@firebase/remote-config",VP="@firebase/remote-config-compat",bP="@firebase/storage",OP="@firebase/storage-compat",MP="@firebase/firestore",LP="@firebase/ai",FP="@firebase/firestore-compat",UP="firebase",jP="12.8.0";/**
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
 */const cf="[DEFAULT]",BP={[uf]:"fire-core",[pP]:"fire-core-compat",[gP]:"fire-analytics",[mP]:"fire-analytics-compat",[_P]:"fire-app-check",[yP]:"fire-app-check-compat",[vP]:"fire-auth",[wP]:"fire-auth-compat",[IP]:"fire-rtdb",[EP]:"fire-data-connect",[TP]:"fire-rtdb-compat",[SP]:"fire-fn",[AP]:"fire-fn-compat",[RP]:"fire-iid",[PP]:"fire-iid-compat",[CP]:"fire-fcm",[kP]:"fire-fcm-compat",[xP]:"fire-perf",[NP]:"fire-perf-compat",[DP]:"fire-rc",[VP]:"fire-rc-compat",[bP]:"fire-gcs",[OP]:"fire-gcs-compat",[MP]:"fire-fst",[FP]:"fire-fst-compat",[LP]:"fire-vertex","fire-js":"fire-js",[UP]:"fire-js-all"};/**
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
 */const zu=new Map,zP=new Map,hf=new Map;function Yy(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(hf.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,t);for(const n of zu.values())Yy(n,t);for(const n of zP.values())Yy(n,t);return!0}function Fp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $P={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Ha("app","Firebase",$P);/**
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
 */class qP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=jP;function gE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:cf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=oE()),!n)throw Sr.create("no-options");const s=zu.get(i);if(s){if(Ei(n,s.options)&&Ei(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new YR(i);for(const u of hf.values())o.addComponent(u);const l=new qP(n,r,o);return zu.set(i,l),l}function yE(t=cf){const e=zu.get(t);if(!e&&t===cf&&oE())return gE();if(!e)throw Sr.create("no-app",{appName:t});return e}function Ar(t,e,n){let r=BP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}xs(new Ti(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const HP="firebase-heartbeat-database",GP=1,Aa="firebase-heartbeat-store";let ed=null;function _E(){return ed||(ed=uP(HP,GP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),ed}async function KP(t){try{const n=(await _E()).transaction(Aa),r=await n.objectStore(Aa).get(vE(t));return await n.done,r}catch(e){if(e instanceof zn)Mn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Xy(t,e){try{const r=(await _E()).transaction(Aa,"readwrite");await r.objectStore(Aa).put(e,vE(t)),await r.done}catch(n){if(n instanceof zn)Mn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function vE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WP=1024,QP=30;class YP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>QP){const o=ZP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jy(),{heartbeatsToSend:r,unsentEntries:i}=XP(this._heartbeatsCache.heartbeats),s=Bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mn.warn(n),""}}}function Jy(){return new Date().toISOString().substring(0,10)}function XP(t,e=WP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?UR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zy(t){return Bu(JSON.stringify({version:2,heartbeats:t})).length}function ZP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function eC(t){xs(new Ti("platform-logger",e=>new dP(e),"PRIVATE")),xs(new Ti("heartbeat",e=>new YP(e),"PRIVATE")),Ar(uf,Qy,t),Ar(uf,Qy,"esm2020"),Ar("fire-js","")}eC("");var tC="firebase",nC="12.8.0";/**
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
 */Ar(tC,nC,"app");function wE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rC=wE,IE=new Ha("auth","Firebase",wE());/**
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
 */const $u=new Mp("@firebase/auth");function iC(t,...e){$u.logLevel<=oe.WARN&&$u.warn(`Auth (${Ys}): ${t}`,...e)}function tu(t,...e){$u.logLevel<=oe.ERROR&&$u.error(`Auth (${Ys}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw jp(t,...e)}function nn(t,...e){return jp(t,...e)}function Up(t,e,n){const r={...rC(),[e]:n};return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return Up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),Up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function J(t,e,...n){if(!t)throw jp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function Ln(t,e){t||Pn(e)}/**
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
 */function df(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oC(){return e_()==="http:"||e_()==="https:"}function e_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function aC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||MR()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=bR()||LR()}get(){return aC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bp(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class EE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hC=new Ka(3e4,6e4);function zp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xs(t,e,n,r,i={}){return TE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ga({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return OR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Qs(t.emulatorConfig.host)&&(c.credentials="include"),EE.fetch()(await SE(t,t.config.apiHost,n,l),c)})}async function TE(t,e,n){t._canInitEmulator=!1;const r={...uC,...e};try{const i=new fC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ol(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ol(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Up(t,d,c);vn(t,d)}}catch(i){if(i instanceof zn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function dC(t,e,n,r,i={}){const s=await Xs(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function SE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Bp(t.config,i):`${t.config.apiScheme}://${i}`;return cC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class fC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),hC.get())})}}function Ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function pC(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function qu(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mC(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=$p(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(td(i.auth_time)),issuedAtTime:Zo(td(i.iat)),expirationTime:Zo(td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function td(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=rE(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function t_(t){const e=$p(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&gC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ra(t,qu(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?AE(i.providerUserInfo):[],o=vC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ff(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function _C(t){const e=Le(t);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function AE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function wC(t,e){const n=await TE(t,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await SE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Qs(t.emulatorConfig.host)&&(u.credentials="include"),EE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IC(t,e){return Xs(t,"POST","/v2/accounts:revokeToken",zp(t,e))}/**
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
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):t_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=t_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _s;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Zn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ff(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ra(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mC(this,e)}reload(){return _C(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await Ra(this,pC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:C,stsTokenManager:R}=n;J(p&&R,e,"internal-error");const V=_s.fromJSON(this.name,R);J(typeof p=="string",e,"internal-error"),Zn(r,e.name),Zn(i,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof T=="boolean",e,"internal-error"),Zn(s,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(c,e.name),Zn(d,e.name);const w=new Zt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(w.providerData=C.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new _s;i.updateFromServerResponse(n);const s=new Zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?AE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _s;l.updateFromIdToken(r);const u=new Zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ff(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const n_=new Map;function Cn(t){Ln(t instanceof Function,"Expected a class definition");let e=n_.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,n_.set(t,e),e)}/**
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
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const r_=RE;/**
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
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await qu(this.auth,{idToken:e}).catch(()=>{});return n?Zt._fromGetAccountInfoResponse(this.auth,n,e):null}return Zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Cn(r_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(r_);const o=nu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await qu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Zt._fromGetAccountInfoResponse(e,m,d)}else p=Zt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vs(s,e,r))}}/**
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
 */function i_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DE(e))return"Blackberry";if(VE(e))return"Webos";if(CE(e))return"Safari";if((e.includes("chrome/")||kE(e))&&!e.includes("edge/"))return"Chrome";if(NE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PE(t=ze()){return/firefox\//i.test(t)}function CE(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kE(t=ze()){return/crios\//i.test(t)}function xE(t=ze()){return/iemobile/i.test(t)}function NE(t=ze()){return/android/i.test(t)}function DE(t=ze()){return/blackberry/i.test(t)}function VE(t=ze()){return/webos/i.test(t)}function qp(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EC(t=ze()){var e;return qp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function TC(){return FR()&&document.documentMode===10}function bE(t=ze()){return qp(t)||NE(t)||VE(t)||DE(t)||/windows phone/i.test(t)||xE(t)}/**
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
 */function OE(t,e=[]){let n;switch(t){case"Browser":n=i_(ze());break;case"Worker":n=`${i_(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
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
 */class SC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AC(t,e={}){return Xs(t,"GET","/v2/passwordPolicy",zp(t,e))}/**
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
 */const RC=6;class PC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??RC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s_(this),this.idTokenSubscription=new s_(this),this.beforeStateQueue=new SC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qu(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(hi(this));const n=e?Le(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AC(this),n=new PC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&iC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cc(t){return Le(t)}class s_{constructor(e){this.auth=e,this.observer=null,this.addObserver=qR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kC(t){Hp=t}function xC(t){return Hp.loadJS(t)}function NC(){return Hp.gapiScript}function DC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function VC(t,e){const n=Fp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ei(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function bC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=Cc(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ME(e),{host:o,port:l}=MC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Ei(c,r.config.emulator)&&Ei(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Qs(o)?(lE(`${s}//${o}${u}`),uE("Auth",!0)):LC()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MC(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:o_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:o_(o)}}}function o_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class LE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function ws(t,e){return dC(t,"POST","/v1/accounts:signInWithIdp",zp(t,e))}/**
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
 */const FC="http://localhost";class Si extends LE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:FC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ga(n)}return e}}/**
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
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Wa{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class ur extends Wa{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class cr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zt._fromIdTokenResponse(e,r,i),o=a_(r);return new Ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=a_(r);return new Ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function a_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gu extends zn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gu(e,n,r,i)}}function FE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(t,s,e,r):s})}async function UC(t,e,n=!1){const r=await Ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",r)}/**
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
 */async function jC(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(hi(r));const i="reauthenticate";try{const s=await Ra(t,FE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=$p(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function BC(t,e,n=!1){if(Jt(t.app))return Promise.reject(hi(t));const r="signIn",i=await FE(t,r,e),s=await Ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function zC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function $C(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function qC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function HC(t){return Le(t).signOut()}const Ku="__sak";/**
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
 */class UE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GC=1e3,KC=10;class jE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jE.type="LOCAL";const WC=jE;/**
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
 */class BE extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const zE=BE;/**
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
 */function QC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await QC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Kp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function XC(t){yn().location.href=t}/**
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
 */function $E(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function JC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ek(){return $E()?self:null}/**
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
 */const qE="firebaseLocalStorageDb",tk=1,Wu="firebaseLocalStorage",HE="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function nk(){const t=indexedDB.deleteDatabase(qE);return new Qa(t).toPromise()}function pf(){const t=indexedDB.open(qE,tk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:HE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await nk(),e(await pf()))})})}async function l_(t,e,n){const r=xc(t,!0).put({[HE]:e,value:n});return new Qa(r).toPromise()}async function rk(t,e){const n=xc(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function u_(t,e){const n=xc(t,!0).delete(e);return new Qa(n).toPromise()}const ik=800,sk=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(ek()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await JC(),!this.activeServiceWorker)return;this.sender=new YC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await l_(e,Ku,"1"),await u_(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new Qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const ok=GE;new Ka(3e4,6e4);/**
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
 */function KE(t,e){return e?Cn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wp extends LE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ak(t){return BC(t.auth,new Wp(t),t.bypassAuthState)}function lk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),jC(n,new Wp(t),t.bypassAuthState)}async function uk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),UC(n,new Wp(t),t.bypassAuthState)}/**
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
 */class WE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ak;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:vn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ck=new Ka(2e3,1e4);async function hk(t,e,n){if(Jt(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=Cc(t);sC(t,e,Gp);const i=KE(r,n);return new ai(r,"signInViaPopup",e,i).executeNotNull()}class ai extends WE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}ai.currentPopupAction=null;/**
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
 */const dk="pendingRedirect",ru=new Map;class fk extends WE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await pk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pk(t,e){const n=yk(e),r=gk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mk(t,e){ru.set(t._key(),e)}function gk(t){return Cn(t._redirectPersistence)}function yk(t){return nu(dk,t.config.apiKey,t.name)}async function _k(t,e,n=!1){if(Jt(t.app))return Promise.reject(hi(t));const r=Cc(t),i=KE(r,e),o=await new fk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vk=10*60*1e3;class wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ik(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ik(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(t);default:return!1}}/**
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
 */async function Ek(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sk=/^https?/;async function Ak(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ek(t);for(const n of e)try{if(Rk(n))return}catch{}vn(t,"unauthorized-domain")}function Rk(t){const e=df(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sk.test(n))return!1;if(Tk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Pk=new Ka(3e4,6e4);function h_(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ck(t){return new Promise((e,n)=>{var i,s,o;function r(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(nn(t,"network-request-failed"))},timeout:Pk.get()})}if((s=(i=yn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=yn().gapi)!=null&&o.load)r();else{const l=DC("iframefcb");return yn()[l]=()=>{gapi.load?r():n(nn(t,"network-request-failed"))},xC(`${NC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw iu=null,e})}let iu=null;function kk(t){return iu=iu||Ck(t),iu}/**
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
 */const xk=new Ka(5e3,15e3),Nk="__/auth/iframe",Dk="emulator/auth/iframe",Vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ok(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bp(e,Dk):`https://${t.config.authDomain}/${Nk}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},i=bk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ga(r).slice(1)}`}async function Mk(t){const e=await kk(t),n=yn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Ok(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=yn().setTimeout(()=>{s(o)},xk.get());function u(){yn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fk=500,Uk=600,jk="_blank",Bk="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(t,e,n,r=Fk,i=Uk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Lk,width:r.toString(),height:i.toString(),top:s,left:o},c=ze().toLowerCase();n&&(l=kE(c)?jk:n),PE(c)&&(e=e||Bk,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(EC(c)&&l!=="_self")return $k(e||"",l),new d_(null);const p=window.open(e||"",l,d);J(p,t,"popup-blocked");try{p.focus()}catch{}return new d_(p)}function $k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qk="__/auth/handler",Hk="emulator/auth/handler",Gk=encodeURIComponent("fac");async function f_(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:i};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$R(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Wa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Gk}=${encodeURIComponent(u)}`:"";return`${Kk(t)}?${Ga(l).slice(1)}${c}`}function Kk({config:t}){return t.emulator?Bp(t,Hk):`https://${t.authDomain}/${qk}`}/**
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
 */const nd="webStorageSupport";class Wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zE,this._completeRedirectFn=_k,this._overrideRedirectResult=mk}async _openPopup(e,n,r,i){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await f_(e,n,r,df(),i);return zk(e,s,Kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await f_(e,n,r,df(),i);return XC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mk(e),r=new wk(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[nd];s!==void 0&&n(!!s),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ak(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||CE()||qp()}}const Qk=Wk;var p_="@firebase/auth",m_="1.12.0";/**
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
 */class Yk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jk(t){xs(new Ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OE(t)},c=new CC(r,i,s,u);return bC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xs(new Ti("auth-internal",e=>{const n=Cc(e.getProvider("auth").getImmediate());return(r=>new Yk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ar(p_,m_,Xk(t)),Ar(p_,m_,"esm2020")}/**
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
 */const Zk=5*60,ex=aE("authIdTokenMaxAge")||Zk;let g_=null;const tx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ex)return;const i=n==null?void 0:n.token;g_!==i&&(g_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nx(t=yE()){const e=Fp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VC(t,{popupRedirectResolver:Qk,persistence:[ok,WC,zE]}),r=aE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tx(s.toString());$C(n,o,()=>o(n.currentUser)),zC(n,l=>o(l))}}const i=sE("auth");return i&&OC(n,`http://${i}`),n}function rx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}kC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jk("Browser");var y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,YE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.F=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.D=function(A,P,k){for(var S=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)S[Ce-2]=arguments[Ce];return y.prototype[P].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var P=0;P<16;++P)A[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;P<16;++P)A[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],P=_.g[2];let k=_.g[3],S;S=y+(k^E&(P^k))+A[0]+3614090360&4294967295,y=E+(S<<7&4294967295|S>>>25),S=k+(P^y&(E^P))+A[1]+3905402710&4294967295,k=y+(S<<12&4294967295|S>>>20),S=P+(E^k&(y^E))+A[2]+606105819&4294967295,P=k+(S<<17&4294967295|S>>>15),S=E+(y^P&(k^y))+A[3]+3250441966&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(k^E&(P^k))+A[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=k+(P^y&(E^P))+A[5]+1200080426&4294967295,k=y+(S<<12&4294967295|S>>>20),S=P+(E^k&(y^E))+A[6]+2821735955&4294967295,P=k+(S<<17&4294967295|S>>>15),S=E+(y^P&(k^y))+A[7]+4249261313&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(k^E&(P^k))+A[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=k+(P^y&(E^P))+A[9]+2336552879&4294967295,k=y+(S<<12&4294967295|S>>>20),S=P+(E^k&(y^E))+A[10]+4294925233&4294967295,P=k+(S<<17&4294967295|S>>>15),S=E+(y^P&(k^y))+A[11]+2304563134&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(k^E&(P^k))+A[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=k+(P^y&(E^P))+A[13]+4254626195&4294967295,k=y+(S<<12&4294967295|S>>>20),S=P+(E^k&(y^E))+A[14]+2792965006&4294967295,P=k+(S<<17&4294967295|S>>>15),S=E+(y^P&(k^y))+A[15]+1236535329&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(P^k&(E^P))+A[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=k+(E^P&(y^E))+A[6]+3225465664&4294967295,k=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(k^y))+A[11]+643717713&4294967295,P=k+(S<<14&4294967295|S>>>18),S=E+(k^y&(P^k))+A[0]+3921069994&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^k&(E^P))+A[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=k+(E^P&(y^E))+A[10]+38016083&4294967295,k=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(k^y))+A[15]+3634488961&4294967295,P=k+(S<<14&4294967295|S>>>18),S=E+(k^y&(P^k))+A[4]+3889429448&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^k&(E^P))+A[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=k+(E^P&(y^E))+A[14]+3275163606&4294967295,k=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(k^y))+A[3]+4107603335&4294967295,P=k+(S<<14&4294967295|S>>>18),S=E+(k^y&(P^k))+A[8]+1163531501&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^k&(E^P))+A[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=k+(E^P&(y^E))+A[2]+4243563512&4294967295,k=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(k^y))+A[7]+1735328473&4294967295,P=k+(S<<14&4294967295|S>>>18),S=E+(k^y&(P^k))+A[12]+2368359562&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(E^P^k)+A[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=k+(y^E^P)+A[8]+2272392833&4294967295,k=y+(S<<11&4294967295|S>>>21),S=P+(k^y^E)+A[11]+1839030562&4294967295,P=k+(S<<16&4294967295|S>>>16),S=E+(P^k^y)+A[14]+4259657740&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^k)+A[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=k+(y^E^P)+A[4]+1272893353&4294967295,k=y+(S<<11&4294967295|S>>>21),S=P+(k^y^E)+A[7]+4139469664&4294967295,P=k+(S<<16&4294967295|S>>>16),S=E+(P^k^y)+A[10]+3200236656&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^k)+A[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=k+(y^E^P)+A[0]+3936430074&4294967295,k=y+(S<<11&4294967295|S>>>21),S=P+(k^y^E)+A[3]+3572445317&4294967295,P=k+(S<<16&4294967295|S>>>16),S=E+(P^k^y)+A[6]+76029189&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^k)+A[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=k+(y^E^P)+A[12]+3873151461&4294967295,k=y+(S<<11&4294967295|S>>>21),S=P+(k^y^E)+A[15]+530742520&4294967295,P=k+(S<<16&4294967295|S>>>16),S=E+(P^k^y)+A[2]+3299628645&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(P^(E|~k))+A[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=k+(E^(y|~P))+A[7]+1126891415&4294967295,k=y+(S<<10&4294967295|S>>>22),S=P+(y^(k|~E))+A[14]+2878612391&4294967295,P=k+(S<<15&4294967295|S>>>17),S=E+(k^(P|~y))+A[5]+4237533241&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~k))+A[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=k+(E^(y|~P))+A[3]+2399980690&4294967295,k=y+(S<<10&4294967295|S>>>22),S=P+(y^(k|~E))+A[10]+4293915773&4294967295,P=k+(S<<15&4294967295|S>>>17),S=E+(k^(P|~y))+A[1]+2240044497&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~k))+A[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=k+(E^(y|~P))+A[15]+4264355552&4294967295,k=y+(S<<10&4294967295|S>>>22),S=P+(y^(k|~E))+A[6]+2734768916&4294967295,P=k+(S<<15&4294967295|S>>>17),S=E+(k^(P|~y))+A[13]+1309151649&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~k))+A[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=k+(E^(y|~P))+A[11]+3174756917&4294967295,k=y+(S<<10&4294967295|S>>>22),S=P+(y^(k|~E))+A[2]+718787259&4294967295,P=k+(S<<15&4294967295|S>>>17),S=E+(k^(P|~y))+A[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,_.g[2]=_.g[2]+P&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const E=y-this.blockSize,A=this.C;let P=this.h,k=0;for(;k<y;){if(P==0)for(;k<=E;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(A[P++]=_.charCodeAt(k++),P==this.blockSize){i(this,A),P=0;break}}else for(;k<y;)if(A[P++]=_[k++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var E=_.length-8;E<_.length;++E)_[E]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)_[y++]=this.g[E]>>>A&255;return _};function s(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;const E=[];let A=!0;for(let P=_.length-1;P>=0;P--){const k=_[P]|0;A&&k==y||(E[P]=k,A=!1)}this.g=E}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return V(c(-_));const y=[];let E=1;for(let A=0;_>=E;A++)y[A]=_/E|0,E*=4294967296;return new o(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return V(d(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let A=p;for(let k=0;k<_.length;k+=8){var P=Math.min(8,_.length-k);const S=parseInt(_.substring(k,k+P),y);P<8?(P=c(Math.pow(y,P)),A=A.j(P).add(c(S))):(A=A.j(E),A=A.add(c(S)))}return A}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-V(this).m();let _=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);_+=(A>=0?A:4294967296+A)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(R(this))return"-"+V(this).toString(_);const y=c(Math.pow(_,6));var E=this;let A="";for(;;){const P=D(E,y).g;E=w(E,P.j(y));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(_);if(E=P,C(E))return k+A;for(;k.length<6;)k="0"+k;A=k+A}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function R(_){return _.h==-1}t.l=function(_){return _=w(this,_),R(_)?-1:C(_)?0:1};function V(_){const y=_.g.length,E=[];for(let A=0;A<y;A++)E[A]=~_.g[A];return new o(E,~_.h).add(m)}t.abs=function(){return R(this)?V(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),E=[];let A=0;for(let P=0;P<=y;P++){let k=A+(this.i(P)&65535)+(_.i(P)&65535),S=(k>>>16)+(this.i(P)>>>16)+(_.i(P)>>>16);A=S>>>16,k&=65535,S&=65535,E[P]=S<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(_,y){return _.add(V(y))}t.j=function(_){if(C(this)||C(_))return p;if(R(this))return R(_)?V(this).j(V(_)):V(V(this).j(_));if(R(_))return V(this.j(V(_)));if(this.l(T)<0&&_.l(T)<0)return c(this.m()*_.m());const y=this.g.length+_.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let P=0;P<_.g.length;P++){const k=this.i(A)>>>16,S=this.i(A)&65535,Ce=_.i(P)>>>16,Ot=_.i(P)&65535;E[2*A+2*P]+=S*Ot,v(E,2*A+2*P),E[2*A+2*P+1]+=k*Ot,v(E,2*A+2*P+1),E[2*A+2*P+1]+=S*Ce,v(E,2*A+2*P+1),E[2*A+2*P+2]+=k*Ce,v(E,2*A+2*P+2)}for(_=0;_<y;_++)E[_]=E[2*_+1]<<16|E[2*_];for(_=y;_<2*y;_++)E[_]=0;return new o(E,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function I(_,y){this.g=_,this.h=y}function D(_,y){if(C(y))throw Error("division by zero");if(C(_))return new I(p,p);if(R(_))return y=D(V(_),y),new I(V(y.g),V(y.h));if(R(y))return y=D(_,V(y)),new I(V(y.g),y.h);if(_.g.length>30){if(R(_)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(_)<=0;)E=O(E),A=O(A);var P=L(E,1),k=L(A,1);for(A=L(A,2),E=L(E,2);!C(A);){var S=k.add(A);S.l(_)<=0&&(P=P.add(E),k=S),A=L(A,1),E=L(E,1)}return y=w(_,P.j(y)),new I(P,y)}for(P=p;_.l(y)>=0;){for(E=Math.max(1,Math.floor(_.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),k=c(E),S=k.j(y);R(S)||S.l(_)>0;)E-=A,k=c(E),S=k.j(y);C(k)&&(k=m),P=P.add(k),_=w(_,S)}return new I(P,_)}t.B=function(_){return D(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&_.i(A);return new o(E,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|_.i(A);return new o(E,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^_.i(A);return new o(E,this.h^_.h)};function O(_){const y=_.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=_.i(A)<<1|_.i(A-1)>>>31;return new o(E,_.h)}function L(_,y){const E=y>>5;y%=32;const A=_.g.length-E,P=[];for(let k=0;k<A;k++)P[k]=y>0?_.i(k+E)>>>y|_.i(k+E+1)<<32-y:_.i(k+E);return new o(P,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,YE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Rr=o}).apply(typeof y_<"u"?y_:typeof self<"u"?self:typeof window<"u"?window:{});var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XE,Fo,JE,su,mf,ZE,eT,tT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ml=="object"&&Ml];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,N,b){for(var z=Array(arguments.length-2),re=2;re<arguments.length;re++)z[re-2]=arguments[re];return h.prototype[N].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const b=N.length||0;a.length=f+b;for(let z=0;z<b;z++)a[f+z]=N[z]}else a.push(N)}}class R{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function w(){var a=_;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const g=I.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var I=new R(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let O,L=!1,_=new v,y=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){V(f)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}L=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Ce(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ce,P),Ce.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ot="closure_listenable_"+(Math.random()*1e6|0),Br=0;function In(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++Br,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function ne(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function K(a){const h={};for(const f in a)h[f]=a[f];return h}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let b=0;b<Y.length;b++)f=Y[b],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function et(a){this.src=a,this.g={},this.h=0}et.prototype.add=function(a,h,f,g,N){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=Gt(a,h,g,N);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new In(h,this.src,b,!!g,N),h.fa=f,a.push(h)),h};function on(a,h){const f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),b;(b=N>=0)&&Array.prototype.splice.call(g,N,1),b&&(q(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Gt(a,h,f,g){for(let N=0;N<a.length;++N){const b=a[N];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==g)return N}return-1}var Hn="closure_lm_"+(Math.random()*1e6|0),rh={};function Mm(a,h,f,g,N){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Mm(a,h[b],f,g,N);return null}return f=Um(f),a&&a[Ot]?a.J(h,f,l(g)?!!g.capture:!1,N):vS(a,h,f,!1,g,N)}function vS(a,h,f,g,N,b){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let re=sh(a);if(re||(a[Hn]=re=new et(a)),f=re.add(h,f,g,z,b),f.proxy)return f;if(g=wS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)k||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Fm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function wS(){function a(f){return h.call(a.src,a.listener,f)}const h=IS;return a}function Lm(a,h,f,g,N){if(Array.isArray(h))for(var b=0;b<h.length;b++)Lm(a,h[b],f,g,N);else g=l(g)?!!g.capture:!!g,f=Um(f),a&&a[Ot]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],f=Gt(h,f,g,N),f>-1&&(q(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=sh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Gt(h,f,g,N)),(f=a>-1?h[a]:null)&&ih(f))}function ih(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ot])on(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Fm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=sh(h))?(on(f,a),f.h==0&&(f.src=null,h[Hn]=null)):q(a)}}}function Fm(a){return a in rh?rh[a]:rh[a]="on"+a}function IS(a,h){if(a.da)a=!0;else{h=new Ce(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&ih(a),a=f.call(g,h)}return a}function sh(a){return a=a[Hn],a instanceof et?a:null}var oh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Um(a){return typeof a=="function"?a:(a[oh]||(a[oh]=function(h){return a.handleEvent(h)}),a[oh])}function tt(){A.call(this),this.i=new et(this),this.M=this,this.G=null}p(tt,A),tt.prototype[Ot]=!0,tt.prototype.removeEventListener=function(a,h,f,g){Lm(this,a,h,f,g)};function ht(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var N=h;h=new P(g,a),we(h,N)}N=!0;let b,z;if(f)for(z=f.length-1;z>=0;z--)b=h.g=f[z],N=ol(b,g,!0,h)&&N;if(b=h.g=a,N=ol(b,g,!0,h)&&N,N=ol(b,g,!1,h)&&N,f)for(z=0;z<f.length;z++)b=h.g=f[z],N=ol(b,g,!1,h)&&N}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)q(f[g]);delete a.g[h],a.h--}}this.G=null},tt.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},tt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ol(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let b=0;b<h.length;++b){const z=h[b];if(z&&!z.da&&z.capture==f){const re=z.listener,Ue=z.ha||z.src;z.fa&&on(a.i,z),N=re.call(Ue,g)!==!1&&N}}return N&&!g.defaultPrevented}function ES(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function jm(a){a.g=ES(()=>{a.g=null,a.i&&(a.i=!1,jm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TS extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:jm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function no(a){A.call(this),this.h=a,this.g={}}p(no,A);var Bm=[];function zm(a){X(a.g,function(h,f){this.g.hasOwnProperty(f)&&ih(h)},a),a.g={}}no.prototype.N=function(){no.Z.N.call(this),zm(this)},no.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ah=o.JSON.stringify,SS=o.JSON.parse,AS=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function $m(){}function qm(){}var ro={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function lh(){P.call(this,"d")}p(lh,P);function uh(){P.call(this,"c")}p(uh,P);var zr={},Hm=null;function al(){return Hm=Hm||new tt}zr.Ia="serverreachability";function Gm(a){P.call(this,zr.Ia,a)}p(Gm,P);function io(a){const h=al();ht(h,new Gm(h))}zr.STAT_EVENT="statevent";function Km(a,h){P.call(this,zr.STAT_EVENT,a),this.stat=h}p(Km,P);function dt(a){const h=al();ht(h,new Km(h,a))}zr.Ja="timingevent";function Wm(a,h){P.call(this,zr.Ja,a),this.size=h}p(Wm,P);function so(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function oo(){this.g=!0}oo.prototype.ua=function(){this.g=!1};function RS(a,h,f,g,N,b){a.info(function(){if(a.g)if(b){var z="",re=b.split("&");for(let me=0;me<re.length;me++){var Ue=re[me].split("=");if(Ue.length>1){const qe=Ue[0];Ue=Ue[1];const ln=qe.split("_");z=ln.length>=2&&ln[1]=="type"?z+(qe+"="+Ue+"&"):z+(qe+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+z})}function PS(a,h,f,g,N,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+b+" "+z})}function Fi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+kS(a,f)+(g?" "+g:"")})}function CS(a,h){a.info(function(){return"TIMEOUT: "+h})}oo.prototype.info=function(){};function kS(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return ah(b)}catch{return h}}var ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ym;function ch(){}p(ch,$m),ch.prototype.g=function(){return new XMLHttpRequest},Ym=new ch;function ao(a){return encodeURIComponent(String(a))}function xS(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Gn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new no(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xm}function Xm(){this.i=null,this.g="",this.h=!1}var Jm={},hh={};function dh(a,h,f){a.M=1,a.A=cl(an(h)),a.u=f,a.R=!0,Zm(a,null)}function Zm(a,h){a.F=Date.now(),ul(a),a.B=an(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),dg(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Xm,a.g=xg(a.j,f?h:null,!a.u),a.P>0&&(a.O=new TS(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Bm[0]=N.toString()),N=Bm);for(let b=0;b<N.length;b++){const z=Mm(f,N[b],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?K(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),io(),RS(a.i,a.v,a.B,a.l,a.S,a.u)}Gn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qn(a)==3?h.j():this.Y(a)},Gn.prototype.Y=function(a){try{if(a==this.g)e:{const re=Qn(this.g),Ue=this.g.ya(),me=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||vg(this.g)))){this.K||re!=4||Ue==7||(Ue==8||me<=0?io(3):io(2)),fh(this);var h=this.g.ca();this.X=h;var f=NS(this);if(this.o=h==200,PS(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var b=g;break t}}b=null}if(a=b)Fi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ph(this,a);else{this.o=!1,this.m=3,dt(12),$r(this),lo(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<f.length;)if(qe=DS(this,f),qe==hh){re==4&&(this.m=4,dt(14),a=!1),Fi(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Jm){this.m=4,dt(15),Fi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Fi(this.i,this.l,qe,null),ph(this,qe);if(eg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||f.length!=0||this.h.h||(this.m=1,dt(16),a=!1),this.o=this.o&&a,!a)Fi(this.i,this.l,f,"[Invalid Chunked Response]"),$r(this),lo(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Eh(z),z.P=!0,dt(11))}}else Fi(this.i,this.l,f,null),ph(this,f);re==4&&$r(this),this.o&&!this.K&&(re==4?Rg(this.j,this):(this.o=!1,ul(this)))}else GS(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),$r(this),lo(this)}}}catch{}finally{}};function NS(a){if(!eg(a))return a.g.la();const h=vg(a.g);if(h==="")return"";let f="";const g=h.length,N=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $r(a),lo(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,f+=a.h.i.decode(h[b],{stream:!(N&&b==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function eg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function DS(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?hh:(f=Number(h.substring(f,g)),isNaN(f)?Jm:(g+=1,g+f>h.length?hh:(h=h.slice(g,g+f),a.C=g+f,h)))}Gn.prototype.cancel=function(){this.K=!0,$r(this)};function ul(a){a.T=Date.now()+a.H,tg(a,a.H)}function tg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=so(c(a.aa,a),h)}function fh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Gn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(CS(this.i,this.B),this.M!=2&&(io(),dt(17)),$r(this),this.m=2,lo(this)):tg(this,this.T-a)};function lo(a){a.j.I==0||a.K||Rg(a.j,a)}function $r(a){fh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,zm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ph(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||mh(f.h,a))){if(!a.L&&mh(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ml(f),fl(f);else break e;Ih(f),dt(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=so(c(f.Va,f),6e3));ig(f.h)<=1&&f.ta&&(f.ta=void 0)}else Hr(f,11)}else if((a.L||f.g==a)&&ml(f),!S(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let me=N[h];const qe=me[0];if(!(qe<=f.K))if(f.K=qe,me=me[1],f.I==2)if(me[0]=="c"){f.M=me[1],f.ba=me[2];const ln=me[3];ln!=null&&(f.ka=ln,f.j.info("VER="+f.ka));const Gr=me[4];Gr!=null&&(f.za=Gr,f.j.info("SVER="+f.za));const Yn=me[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(g=1.5*Yn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Xn=a.g;if(Xn){const yl=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var b=g.h;b.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(gh(b,b.h),b.h=null))}if(g.G){const Th=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Th&&(g.wa=Th,ye(g.J,g.G,Th))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=kg(g,g.L?g.ba:null,g.W),z.L){sg(g.h,z);var re=z,Ue=g.O;Ue&&(re.H=Ue),re.D&&(fh(re),ul(re)),g.g=z}else Sg(g);f.i.length>0&&pl(f)}else me[0]!="stop"&&me[0]!="close"||Hr(f,7);else f.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Hr(f,7):wh(f):me[0]!="noop"&&f.l&&f.l.qa(me),f.A=0)}}io(4)}catch{}}var VS=class{constructor(a,h){this.g=a,this.map=h}};function ng(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function rg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ig(a){return a.h?1:a.g?a.g.size:0}function mh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function gh(a,h){a.g?a.g.add(h):a.h=h}function sg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ng.prototype.cancel=function(){if(this.i=og(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function og(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return T(a.i)}var ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bS(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let N,b=null;g>=0?(N=a[f].substring(0,g),b=a[f].substring(g+1)):N=a[f],h(N,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Kn?(this.l=a.l,uo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.u),this.h=a.h,yh(this,fg(a.i)),this.m=a.m):a&&(h=String(a).match(ag))?(this.l=!1,uo(this,h[1]||"",!0),this.o=ho(h[2]||""),this.g=ho(h[3]||"",!0),co(this,h[4]),this.h=ho(h[5]||"",!0),yh(this,h[6]||"",!0),this.m=ho(h[7]||"")):(this.l=!1,this.i=new po(null,this.l))}Kn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(fo(h,lg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fo(h,lg,!0),"@"),a.push(ao(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fo(f,f.charAt(0)=="/"?LS:MS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fo(f,US)),a.join("")},Kn.prototype.resolve=function(a){const h=an(this);let f=!!a.j;f?uo(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)co(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const b=[];for(let z=0;z<N.length;){const re=N[z++];re=="."?g&&z==N.length&&b.push(""):re==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&z==N.length&&b.push("")):(b.push(re),g=!0)}g=b.join("/")}else g=N}return f?h.h=g:f=a.i.toString()!=="",f?yh(h,fg(a.i)):f=!!a.m,f&&(h.m=a.m),h};function an(a){return new Kn(a)}function uo(a,h,f){a.j=f?ho(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function yh(a,h,f){h instanceof po?(a.i=h,jS(a.i,a.l)):(f||(h=fo(h,FS)),a.i=new po(h,a.l))}function ye(a,h,f){a.i.set(h,f)}function cl(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ho(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,OS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lg=/[#\/\?@]/g,MS=/[#\?:]/g,LS=/[#\?]/g,FS=/[#\?@]/g,US=/#/g;function po(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&bS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=po.prototype,t.add=function(a,h){qr(this),this.i=null,a=Ui(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ug(a,h){qr(a),h=Ui(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cg(a,h){return qr(a),h=Ui(a,h),a.g.has(h)}t.forEach=function(a,h){qr(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)};function hg(a,h){qr(a);let f=[];if(typeof h=="string")cg(a,h)&&(f=f.concat(a.g.get(Ui(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return qr(this),this.i=null,a=Ui(this,a),cg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=hg(this,a),a.length>0?String(a[0]):h):h};function dg(a,h,f){ug(a,h),f.length>0&&(a.i=null,a.g.set(Ui(a,h),T(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const N=ao(f);f=hg(this,f);for(let b=0;b<f.length;b++){let z=N;f[b]!==""&&(z+="="+ao(f[b])),a.push(z)}}return this.i=a.join("&")};function fg(a){const h=new po;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ui(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jS(a,h){h&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(ug(this,g),dg(this,N,f))},a)),a.j=h}function BS(a,h){const f=new oo;if(o.Image){const g=new Image;g.onload=d(Wn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Wn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Wn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Wn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function zS(a,h){const f=new oo,g=new AbortController,N=setTimeout(()=>{g.abort(),Wn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(N),b.ok?Wn(f,"TestPingServer: ok",!0,h):Wn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Wn(f,"TestPingServer: error",!1,h)})}function Wn(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function $S(){this.g=new AS}function _h(a){this.i=a.Sb||null,this.h=a.ab||!1}p(_h,$m),_h.prototype.g=function(){return new hl(this.i,this.h)};function hl(a,h){tt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(hl,tt),t=hl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,go(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mo(this):go(this),this.readyState==3&&pg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,mo(this))},t.Na=function(a){this.g&&(this.response=a,mo(this))},t.ga=function(){this.g&&mo(this)};function mo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,go(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function go(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mg(a){let h="";return X(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function vh(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=mg(f),typeof a=="string"?f!=null&&ao(f):ye(a,h,f))}function ke(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ke,tt);var qS=/^https?$/i,HS=["POST","PUT"];t=ke.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ym.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){gg(this,b);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())f.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(HS,h,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){gg(this,b)}};function gg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,yg(a),dl(a)}function yg(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),dl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dl(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_g(this):this.Xa())},t.Xa=function(){_g(this)};function _g(a){if(a.h&&typeof s<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=b===0){let z=String(a.D).match(ag)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!qS.test(z?z.toLowerCase():"")}f=g}if(f)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var N=Qn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",yg(a)}}finally{dl(a)}}}}function dl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ht(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),SS(h)}};function vg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function GS(a){const h={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var f=xS(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[N]||[];h[N]=b,b.push(f)}ne(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function wg(a){this.za=0,this.i=[],this.j=new oo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yo("baseRetryDelayMs",5e3,a),this.Za=yo("retryDelaySeedMs",1e4,a),this.Ta=yo("forwardChannelMaxRetries",2,a),this.va=yo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ng(a&&a.concurrentRequestLimit),this.Ba=new $S,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=wg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){dt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=kg(this,null,this.W),pl(this)};function wh(a){if(Ig(a),a.I==3){var h=a.V++,f=an(a.J);if(ye(f,"SID",a.M),ye(f,"RID",h),ye(f,"TYPE","terminate"),_o(a,f),h=new Gn(a,a.j,h),h.M=2,h.A=cl(an(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=xg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ul(h)}Cg(a)}function fl(a){a.g&&(Eh(a),a.g.cancel(),a.g=null)}function Ig(a){fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),ml(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function pl(a){if(!rg(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||y(),L||(O(),L=!0),_.add(h,a),a.D=0}}function KS(a,h){return ig(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=so(c(a.Ea,a,h),Pg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Gn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=K(b),we(b,this.U)):b=this.U),this.u!==null||this.R||(N.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Tg(this,N,h),f=an(this.J),ye(f,"RID",a),ye(f,"CVER",22),this.G&&ye(f,"X-HTTP-Session-Id",this.G),_o(this,f),b&&(this.R?h="headers="+ao(mg(b))+"&"+h:this.u&&vh(f,this.u,b)),gh(this.h,N),this.Ra&&ye(f,"TYPE","init"),this.S?(ye(f,"$req",h),ye(f,"SID","null"),N.U=!0,dh(N,f,null)):dh(N,f,h),this.I=2}}else this.I==3&&(a?Eg(this,a):this.i.length==0||rg(this.h)||Eg(this))};function Eg(a,h){var f;h?f=h.l:f=a.V++;const g=an(a.J);ye(g,"SID",a.M),ye(g,"RID",f),ye(g,"AID",a.K),_o(a,g),a.u&&a.o&&vh(g,a.u,a.o),f=new Gn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tg(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),gh(a.h,f),dh(f,g,h)}function _o(a,h){a.H&&X(a.H,function(f,g){ye(h,g,f)}),a.l&&X({},function(f,g){ye(h,g,f)})}function Tg(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let re=-1;for(;;){const Ue=["count="+f];re==-1?f>0?(re=N[0].g,Ue.push("ofs="+re)):re=0:Ue.push("ofs="+re);let me=!0;for(let qe=0;qe<f;qe++){var b=N[qe].g;const ln=N[qe].map;if(b-=re,b<0)re=Math.max(0,N[qe].g-100),me=!1;else try{b="req"+b+"_"||"";try{var z=ln instanceof Map?ln:Object.entries(ln);for(const[Gr,Yn]of z){let Xn=Yn;l(Yn)&&(Xn=ah(Yn)),Ue.push(b+Gr+"="+encodeURIComponent(Xn))}}catch(Gr){throw Ue.push(b+"type="+encodeURIComponent("_badmap")),Gr}}catch{g&&g(ln)}}if(me){z=Ue.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function Sg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||y(),L||(O(),L=!0),_.add(h,a),a.A=0}}function Ih(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=so(c(a.Da,a),Pg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ag(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=so(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),fl(this),Ag(this))};function Eh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ag(a){a.g=new Gn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=an(a.na);ye(h,"RID","rpc"),ye(h,"SID",a.M),ye(h,"AID",a.K),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(h,"TO",a.ia),ye(h,"TYPE","xmlhttp"),_o(a,h),a.u&&a.o&&vh(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=cl(an(h)),f.u=null,f.R=!0,Zm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,fl(this),Ih(this),dt(19))};function ml(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rg(a,h){var f=null;if(a.g==h){ml(a),Eh(a),a.g=null;var g=2}else if(mh(a.h,h))f=h.G,sg(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=al(),ht(g,new Wm(g,f)),pl(a)}else Sg(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&KS(a,h)||g==2&&Ih(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function Pg(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const N=!g;g=new Kn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||uo(g,"https"),cl(g),N?BS(g.toString(),f):zS(g.toString(),f)}else dt(2);a.I=0,a.l&&a.l.pa(h),Cg(a),Ig(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Cg(a){if(a.I=0,a.ja=[],a.l){const h=og(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function kg(a,h,f){var g=f instanceof Kn?an(f):new Kn(f);if(g.g!="")h&&(g.g=h+"."+g.g),co(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const b=new Kn(null);g&&uo(b,g),h&&(b.g=h),N&&co(b,N),f&&(b.h=f),g=b}return f=a.G,h=a.wa,f&&h&&ye(g,f,h),ye(g,"VER",a.ka),_o(a,g),g}function xg(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ke(new _h({ab:f})):new ke(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ng(){}t=Ng.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function gl(){}gl.prototype.g=function(a,h){return new At(a,h)};function At(a,h){tt.call(this),this.g=new wg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ji(this)}p(At,tt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){wh(this.g)},At.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ah(a),a=f);h.i.push(new VS(h.Ya++,a)),h.I==3&&pl(h)},At.prototype.N=function(){this.g.l=null,delete this.j,wh(this.g),delete this.g,At.Z.N.call(this)};function Dg(a){lh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Dg,lh);function Vg(){uh.call(this),this.status=1}p(Vg,uh);function ji(a){this.g=a}p(ji,Ng),ji.prototype.ra=function(){ht(this.g,"a")},ji.prototype.qa=function(a){ht(this.g,new Dg(a))},ji.prototype.pa=function(a){ht(this.g,new Vg)},ji.prototype.oa=function(){ht(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,tT=function(){return new gl},eT=function(){return al()},ZE=zr,mf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,su=ll,Qm.COMPLETE="complete",JE=Qm,qm.EventType=ro,ro.OPEN="a",ro.CLOSE="b",ro.ERROR="c",ro.MESSAGE="d",tt.prototype.listen=tt.prototype.J,Fo=qm,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,XE=ke}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Js="12.8.0";function ix(t){Js=t}/**
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
 */const Ai=new Mp("@firebase/firestore");function Qi(){return Ai.logLevel}function U(t,...e){if(Ai.logLevel<=oe.DEBUG){const n=e.map(Qp);Ai.debug(`Firestore (${Js}): ${t}`,...n)}}function pt(t,...e){if(Ai.logLevel<=oe.ERROR){const n=e.map(Qp);Ai.error(`Firestore (${Js}): ${t}`,...n)}}function Ri(t,...e){if(Ai.logLevel<=oe.WARN){const n=e.map(Qp);Ai.warn(`Firestore (${Js}): ${t}`,...n)}}function Qp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,nT(t,r,n)}function nT(t,e,n){let r=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw pt(r),new Error(r)}function W(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||nT(e,i,r)}function te(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){W(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new rT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class lx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ux{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class __{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){W(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new __(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new __(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function gf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return rd(i)===rd(s)?ee(i,s):rd(i)?1:-1}return ee(t.length,e.length)}const dx=55296,fx=57343;function rd(t){const e=t.charCodeAt(0);return e>=dx&&e<=fx}function Ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function iT(t){return t+"\0"}/**
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
 */const v_="__name__";class hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=hn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=hn.isNumericId(e),i=hn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?hn.extractNumericId(e).compare(hn.extractNumericId(n)):gf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class ce extends hn{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const px=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends hn{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return px.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===v_}static keyField(){return new Ae([v_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ce.fromString(e))}static fromName(e){return new $(ce.fromString(e).popFirst(5))}static empty(){return new $(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ce(e.slice()))}}/**
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
 */function sT(t,e,n){if(!n)throw new B(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mx(t,e,n,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function w_(t){if(!$.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function I_(t){if($.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nc(t);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ya(t,e){if(!oT(t))throw new B(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const E_=-62135596800,T_=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*T_);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<E_)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T_}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ya(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-E_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Oe("string",he._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new he(0,0))}static max(){return new Q(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pa=-1;class Qu{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function yf(t){return t.fields.find(e=>e.kind===2)}function Jr(t){return t.fields.filter(e=>e.kind!==2)}Qu.UNKNOWN_ID=-1;class ou{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ca{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ca(0,Dt.min())}}function gx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Dt(i,$.empty(),e)}function aT(t){return new Dt(t.readTime,t.key,Pa)}class Dt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dt(Q.min(),$.empty(),Pa)}static max(){return new Dt(Q.max(),$.empty(),Pa)}}function Xp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==lT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */const Pt="SimpleDb";class Dc{static open(e,n,r,i){try{return new Dc(n,e.transaction(i,r))}catch(s){throw new ea(n,s)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new Nn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new ea(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=Jp(r.target.error);this.S.reject(new ea(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(Pt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new _x(n)}}class Pr{static delete(e){return U(Pt,"Removing database:",e),ei(iE().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!fE())return!1;if(Pr.F())return!0;const e=ze(),n=Pr.M(e),r=0<n&&n<10,i=cT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,Pr.M(ze())===12.2&&pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(U(Pt,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ea(e,o))},i.onupgradeneeded=s=>{U(Pt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{U(Pt,"Database upgrade to version "+this.version+" complete")})}})),this.K&&(this.db.onversionchange=n=>this.K(n)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const l=Dc.open(this.db,e,s?"readonly":"readwrite",r),u=i(l).next(c=>(l.C(),c)).catch(c=>(l.abort(c),x.reject(c))).toPromise();return u.catch(()=>{}),await l.D,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(U(Pt,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function cT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class yx{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return ei(this.U.delete())}}class ea extends B{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fr(t){return t.name==="IndexedDbTransactionError"}class _x{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U(Pt,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(U(Pt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ei(r)}add(e){return U(Pt,"ADD",this.store.name,e,e),ei(this.store.add(e))}get(e){return ei(this.store.get(e)).next(n=>(n===void 0&&(n=null),U(Pt,"GET",this.store.name,e,n),n))}delete(e){return U(Pt,"DELETE",this.store.name,e),ei(this.store.delete(e))}count(){return U(Pt,"COUNT",this.store.name),ei(this.store.count())}H(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new x((o,l)=>{s.onerror=u=>{l(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.J(s,(l,u)=>{o.push(u)}).next(()=>o)}}Z(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new x((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,n){U(Pt,"DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.J(i,(s,o,l)=>l.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.J(i,n)}te(e){const n=this.cursor({});return new x((r,i)=>{n.onerror=s=>{const o=Jp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}J(e,n){const r=[];return new x((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const u=new yx(l),c=n(l.primaryKey,l.value,u);if(c instanceof x){const d=c.catch(p=>(u.done(),x.reject(p)));r.push(d)}u.isDone?i():u.G===null?l.continue():l.continue(u.G)}}).next(()=>x.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ei(t){return new x((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Jp(r.target.error);n(i)}})}let S_=!1;function Jp(t){const e=Pr.M(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return S_||(S_=!0,setTimeout(()=>{throw r},0)),r}}return t}const ta="IndexBackfiller";class vx{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){U(ta,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();U(ta,`Documents written: ${n}`)}catch(n){Fr(n)?U(ta,"Ignoring IndexedDB error during index backfill: ",n):await Mi(n)}await this.re(6e4)})}}class wx{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let i=n,s=!0;return x.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(ta,`Processing collection: ${o}`),this.oe(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>n-i)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(l=>(U(ta,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,n,l))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=aT(s);Xp(o,r)>0&&(r=o)}),new Dt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jt.ce=-1;/**
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
 */const di=-1;function Vc(t){return t==null}function ka(t){return t===0&&1/t==-1/0}function Ix(t){return typeof t=="number"&&Number.isInteger(t)&&!ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yu="";function ut(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=A_(e)),e=Ex(t.get(n),e);return A_(e)}function Ex(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Yu:n+="";break;default:n+=s}}return n}function A_(t){return t+Yu+""}function fn(t){const e=t.length;if(W(e>=2,64408,{path:t}),e===2)return W(t.charAt(0)===Yu&&t.charAt(1)==="",56145,{path:t}),ce.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf(Yu,s);switch((o<0||o>n)&&G(50515,{path:t}),t.charAt(o+1)){case"":const l=t.substring(s,o);let u;i.length===0?u=l:(i+=l,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G(61167,{path:t})}s=o+2}return new ce(r)}/**
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
 */const Zr="remoteDocuments",Xa="owner",zi="owner",xa="mutationQueues",Tx="userId",Yt="mutations",R_="batchId",li="userMutationsIndex",P_=["userId","batchId"];/**
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
 */function au(t,e){return[t,ut(e)]}function hT(t,e,n){return[t,ut(e),n]}const Sx={},Vs="documentMutations",Xu="remoteDocumentsV14",Ax=["prefixPath","collectionGroup","readTime","documentId"],lu="documentKeyIndex",Rx=["prefixPath","collectionGroup","documentId"],dT="collectionGroupIndex",Px=["collectionGroup","readTime","prefixPath","documentId"],Na="remoteDocumentGlobal",_f="remoteDocumentGlobalKey",bs="targets",fT="queryTargetsIndex",Cx=["canonicalId","targetId"],Os="targetDocuments",kx=["targetId","path"],Zp="documentTargetsIndex",xx=["path","targetId"],Ju="targetGlobalKey",fi="targetGlobal",Da="collectionParents",Nx=["collectionId","parent"],Ms="clientMetadata",Dx="clientId",bc="bundles",Vx="bundleId",Oc="namedQueries",bx="name",em="indexConfiguration",Ox="indexId",vf="collectionGroupIndex",Mx="collectionGroup",na="indexState",Lx=["indexId","uid"],pT="sequenceNumberIndex",Fx=["uid","sequenceNumber"],ra="indexEntries",Ux=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mT="documentKeyIndex",jx=["indexId","uid","orderedDocumentKey"],Mc="documentOverlays",Bx=["userId","collectionPath","documentId"],wf="collectionPathOverlayIndex",zx=["userId","collectionPath","largestBatchId"],gT="collectionGroupOverlayIndex",$x=["userId","collectionGroup","largestBatchId"],tm="globals",qx="name",yT=[xa,Yt,Vs,Zr,bs,Xa,fi,Os,Ms,Na,Da,bc,Oc],Hx=[...yT,Mc],_T=[xa,Yt,Vs,Xu,bs,Xa,fi,Os,Ms,Na,Da,bc,Oc,Mc],vT=_T,nm=[...vT,em,na,ra],Gx=nm,wT=[...nm,tm],Kx=wT;/**
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
 */class If extends uT{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function $e(t,e){const n=te(t);return Pr.O(n.le,e)}/**
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
 */function C_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k_(this.data.getIterator())}getIteratorFrom(e){return new k_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class k_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $i(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new It([])}unionWith(e){let n=new pe(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ET extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ET("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(W(!!t,39018),typeof t=="string"){let e=0;const n=Wx.exec(t);if(W(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */const TT="server_timestamp",ST="__type__",AT="__previous_value__",RT="__local_write_time__";function rm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ST])==null?void 0:r.stringValue)===TT}function Lc(t){const e=t.mapValue.fields[AT];return rm(e)?Lc(e):e}function Va(t){const e=Fn(t.mapValue.fields[RT].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class Qx{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const Zu="(default)";class Pi{constructor(e,n){this.projectId=e,this.database=n||Zu}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database===Zu}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}function Yx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(t.options.projectId,e)}/**
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
 */const im="__type__",PT="__max__",pr={mapValue:{fields:{__type__:{stringValue:PT}}}},sm="__vector__",Ls="value",uu={nullValue:"NULL_VALUE"};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rm(t)?4:CT(t)?9007199254740991:Fc(t)?10:11:G(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Va(t).isEqual(Va(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fn(i.timestampValue),l=Fn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Un(i.bytesValue).isEqual(Un(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?ka(o)===ka(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(C_(o)!==C_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!wn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function ba(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function Dr(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return x_(t.timestampValue,e.timestampValue);case 4:return x_(Va(t),Va(e));case 5:return gf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Un(s),u=Un(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ee(l[c],u[c]);if(d!==0)return d}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Ie(s.latitude),Ie(o.latitude));return l!==0?l:ee(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return N_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,T,C,R;const l=s.fields||{},u=o.fields||{},c=(m=l[Ls])==null?void 0:m.arrayValue,d=(T=u[Ls])==null?void 0:T.arrayValue,p=ee(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:N_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pr.mapValue&&o===pr.mapValue)return 0;if(s===pr.mapValue)return 1;if(o===pr.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=gf(u[p],d[p]);if(m!==0)return m;const T=Dr(l[u[p]],c[d[p]]);if(T!==0)return T}return ee(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function x_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Fn(t),r=Fn(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function N_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Dr(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Fs(t){return Ef(t)}function Ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Un(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ef(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ef(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function cu(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(t);return e?16+cu(e):16;case 5:return 2*t.stringValue.length;case 6:return Un(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+cu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ur(r.fields,(s,o)=>{i+=s.length+cu(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Oa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tf(t){return!!t&&"integerValue"in t}function Ma(t){return!!t&&"arrayValue"in t}function D_(t){return!!t&&"nullValue"in t}function V_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hu(t){return!!t&&"mapValue"in t}function Fc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[im])==null?void 0:r.stringValue)===sm}function ia(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ia(t.arrayValue.values[n]);return e}return{...t}}function CT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PT}const kT={mapValue:{fields:{[im]:{stringValue:sm},[Ls]:{arrayValue:{}}}}};function Xx(t){return"nullValue"in t?uu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Oa(Pi.empty(),$.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Fc(t)?kT:{mapValue:{}}:G(35942,{value:t})}function Jx(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Oa(Pi.empty(),$.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?kT:"mapValue"in t?Fc(t)?{mapValue:{}}:pr:G(61959,{value:t})}function b_(t,e){const n=Dr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function O_(t,e){const n=Dr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ia(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ia(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(ia(this.value))}}function xT(t){const e=[];return Ur(t.fields,(n,r)=>{const i=new Ae([n]);if(hu(r)){const s=xT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
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
 */class Ne{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ne(e,0,Q.min(),Q.min(),Q.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ne(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,Q.min(),Q.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,Q.min(),Q.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Us{constructor(e,n){this.position=e,this.inclusive=n}}function M_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Dr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function L_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NT{}class ae extends NT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eN(e,n,r):n==="array-contains"?new rN(e,r):n==="in"?new LT(e,r):n==="not-in"?new iN(e,r):n==="array-contains-any"?new sN(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tN(e,r):new nN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Dr(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(Dr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends NT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new de(e,n)}matches(e){return js(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function js(t){return t.op==="and"}function Sf(t){return t.op==="or"}function om(t){return DT(t)&&js(t)}function DT(t){for(const e of t.filters)if(e instanceof de)return!1;return!0}function Af(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Fs(t.value);if(om(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(n=>Af(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&VT(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function bT(t,e){const n=t.filters.concat(e);return de.create(n,t.op)}function OT(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${Fs(n.value)}`}(t):t instanceof de?function(n){return n.op.toString()+" {"+n.getFilters().map(OT).join(" ,")+"}"}(t):"Filter"}class eN extends ae{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class tN extends ae{constructor(e,n){super(e,"in",n),this.keys=MT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nN extends ae{constructor(e,n){super(e,"not-in",n),this.keys=MT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class rN extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ma(n)&&ba(n.arrayValue,this.value)}}class LT extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ba(this.value.arrayValue,n)}}class iN extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ba(this.value.arrayValue,n)}}class sN extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ma(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ba(this.value.arrayValue,r))}}/**
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
 */class oN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Rf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oN(t,e,n,r,i,s,o)}function Ci(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fs(r)).join(",")),e.Te=n}return e.Te}function Ja(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!L_(t.startAt,e.startAt)&&L_(t.endAt,e.endAt)}function ec(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function tc(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function F_(t,e,n){let r=uu,i=!0;for(const s of tc(t,e)){let o=uu,l=!0;switch(s.op){case"<":case"<=":o=Xx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=uu}b_({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];b_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function U_(t,e,n){let r=pr,i=!0;for(const s of tc(t,e)){let o=pr,l=!0;switch(s.op){case">=":case">":o=Jx(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=pr}O_({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];O_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Zs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function aN(t,e,n,r,i,s,o,l){return new Zs(t,e,n,r,i,s,o,l)}function Uc(t){return new Zs(t)}function j_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lN(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function FT(t){return t.collectionGroup!==null}function sa(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pe(Ae.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new La(s,r))}),n.has(Ae.keyField().canonicalString())||e.Ie.push(new La(Ae.keyField(),r))}return e.Ie}function $t(t){const e=te(t);return e.Ee||(e.Ee=uN(e,sa(t))),e.Ee}function uN(t,e){if(t.limitType==="F")return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new La(i.field,s)});const n=t.endAt?new Us(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Us(t.startAt.position,t.startAt.inclusive):null;return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pf(t,e){const n=t.filters.concat([e]);return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cN(t,e){const n=t.explicitOrderBy.concat([e]);return new Zs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Cf(t,e,n){return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jc(t,e){return Ja($t(t),$t(e))&&t.limitType===e.limitType}function UT(t){return`${Ci($t(t))}|lt:${t.limitType}`}function Yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>OT(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fs(i)).join(",")),`Target(${r})`}($t(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of sa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,sa(r),i)||r.endAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,sa(r),i))}(t,e)}function hN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jT(t){return(e,n)=>{let r=!1;for(const i of sa(t)){const s=dN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dN(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Dr(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class $n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
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
 */const fN=new Te($.comparator);function kt(){return fN}const BT=new Te($.comparator);function Uo(...t){let e=BT;for(const n of t)e=e.insert(n.key,n);return e}function zT(t){let e=BT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pn(){return oa()}function $T(){return oa()}function oa(){return new $n(t=>t.toString(),(t,e)=>t.isEqual(e))}const pN=new Te($.comparator),mN=new pe($.comparator);function ie(...t){let e=mN;for(const n of t)e=e.add(n);return e}const gN=new pe(ee);function yN(){return gN}/**
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
 */function am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function qT(t){return{integerValue:""+t}}function _N(t,e){return Ix(e)?qT(e):am(t,e)}/**
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
 */class Bc{constructor(){this._=void 0}}function vN(t,e,n){return t instanceof Bs?function(i,s){const o={fields:{[ST]:{stringValue:TT},[RT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rm(s)&&(s=Lc(s)),s&&(o.fields[AT]=s),{mapValue:o}}(n,e):t instanceof zs?GT(t,e):t instanceof $s?KT(t,e):function(i,s){const o=HT(i,s),l=B_(o)+B_(i.Ae);return Tf(o)&&Tf(i.Ae)?qT(l):am(i.serializer,l)}(t,e)}function wN(t,e,n){return t instanceof zs?GT(t,e):t instanceof $s?KT(t,e):n}function HT(t,e){return t instanceof Fa?function(r){return Tf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bs extends Bc{}class zs extends Bc{constructor(e){super(),this.elements=e}}function GT(t,e){const n=WT(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $s extends Bc{constructor(e){super(),this.elements=e}}function KT(t,e){let n=WT(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class Fa extends Bc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function B_(t){return Ie(t.integerValue||t.doubleValue)}function WT(t){return Ma(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class QT{constructor(e,n){this.field=e,this.transform=n}}function IN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zs&&i instanceof zs||r instanceof $s&&i instanceof $s?Ds(r.elements,i.elements,wn):r instanceof Fa&&i instanceof Fa?wn(r.Ae,i.Ae):r instanceof Bs&&i instanceof Bs}(t.transform,e.transform)}class EN{constructor(e,n){this.version=e,this.transformResults=n}}class Ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zc{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new el(t.key,Ke.none()):new eo(t.key,t.data,Ke.none());{const n=t.data,r=lt.empty();let i=new pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qn(t.key,r,new It(i.toArray()),Ke.none())}}function TN(t,e,n){t instanceof eo?function(i,s,o){const l=i.value.clone(),u=$_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof qn?function(i,s,o){if(!du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(XT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof eo?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=s.value.clone(),d=q_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof qn?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=q_(s.fieldTransforms,u,o),d=o.data;return d.setAll(XT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function SN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HT(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ds(r,i,(s,o)=>IN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eo extends zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qn extends zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;W(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wN(o,l,n[i]))}return r}function q_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vN(s,o,e))}return r}class el extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JT extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$T();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=YT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>z_(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return pN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new um(e,n,r,i)}}/**
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
 */class cm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,le;function RN(t){switch(t){case M.OK:return G(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function ZT(t){if(t===void 0)return pt("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return G(39323,{code:t})}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PN(){return new TextEncoder}/**
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
 */const CN=new Rr([4294967295,4294967295],0);function H_(t){const e=PN().encode(t),n=new YE;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([i,s],0)]}class hm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Rr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Rr.fromNumber(r)));return i.compare(CN)===1&&(i=new Rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=H_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=H_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $c(Q.min(),i,new Te(ee),kt(),ie())}}class tl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tl(r,n,ie(),ie(),ie())}}/**
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
 */class fu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class e0{constructor(e,n){this.targetId=e,this.Ce=n}}class t0{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class K_{constructor(){this.ve=0,this.Fe=W_(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new tl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=W_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class kN{constructor(e){this.Ge=e,this.ze=new Map,this.je=kt(),this.He=Fl(),this.Je=Fl(),this.Ze=new Te(ee)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ec(s))if(r===0){const o=new $(s.path);this.et(n,o,Ne.newNoDocument(o,Q.min()))}else W(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Un(r).toUint8Array()}catch(u){if(u instanceof ET)return Ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hm(o,i,s)}catch(u){return Ri(u instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ec(l.target)){const u=new $(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ne.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ie();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.Ze,this.je,r);return this.je=kt(),this.He=Fl(),this.Je=Fl(),this.Ze=new Te(ee),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new K_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new pe(ee),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new pe(ee),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new K_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fl(){return new Te($.comparator)}function W_(){return new Te($.comparator)}const xN={asc:"ASCENDING",desc:"DESCENDING"},NN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DN={and:"AND",or:"OR"};class VN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function qs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bN(t,e){return qs(t,e.toTimestamp())}function gt(t){return W(!!t,49232),Q.fromTimestamp(function(n){const r=Fn(n);return new he(r.seconds,r.nanos)}(t))}function dm(t,e){return xf(t,e).canonicalString()}function xf(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function r0(t){const e=ce.fromString(t);return W(d0(e),10190,{key:e.toString()}),e}function nc(t,e){return dm(t.databaseId,e.path)}function pi(t,e){const n=r0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(o0(n))}function i0(t,e){return dm(t.databaseId,e)}function s0(t){const e=r0(t);return e.length===4?ce.emptyPath():o0(e)}function Nf(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o0(t){return W(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Q_(t,e,n){return{name:nc(t,e),fields:n.value.mapValue.fields}}function ON(t,e,n){const r=pi(t,e.name),i=gt(e.updateTime),s=e.createTime?gt(e.createTime):Q.min(),o=new lt({mapValue:{fields:e.fields}}),l=Ne.newFoundDocument(r,i,s,o);return n&&l.setHasCommittedMutations(),n?l.setHasCommittedMutations():l}function MN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(W(d===void 0||typeof d=="string",58123),Fe.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Fe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:ZT(c.code);return new B(d,c.message||"")}(o);n=new t0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pi(t,r.document.name),s=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):Q.min(),l=new lt({mapValue:{fields:r.document.fields}}),u=Ne.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new fu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pi(t,r.document),s=r.readTime?gt(r.readTime):Q.min(),o=Ne.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pi(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AN(i,s),l=r.targetId;n=new e0(l,o)}}return n}function rc(t,e){let n;if(e instanceof eo)n={update:Q_(t,e.key,e.value)};else if(e instanceof el)n={delete:nc(t,e.key)};else if(e instanceof qn)n={update:Q_(t,e.key,e.data),updateMask:zN(e.fieldMask)};else{if(!(e instanceof JT))return G(16599,{dt:e.type});n={verify:nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $s)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function Df(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ke.updateTime(gt(s.updateTime)):s.exists!==void 0?Ke.exists(s.exists):Ke.none()}(e.currentDocument):Ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let u=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),u=new Bs;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];u=new zs(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];u=new $s(d)}else"increment"in l?u=new Fa(o,l.increment):G(16584,{proto:l});const c=Ae.fromServerFormat(l.fieldPath);return new QT(c,u)}(t,i)):[];if(e.update){e.update.name;const i=pi(t,e.update.name),s=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new It(c.map(d=>Ae.fromServerFormat(d)))}(e.updateMask);return new qn(i,s,o,n,r)}return new eo(i,s,n,r)}if(e.delete){const i=pi(t,e.delete);return new el(i,n)}if(e.verify){const i=pi(t,e.verify);return new JT(i,n)}return G(1463,{proto:e})}function LN(t,e){return t&&t.length>0?(W(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?gt(i.updateTime):gt(s);return o.isEqual(Q.min())&&(o=gt(s)),new EN(o,i.transformResults||[])}(n,e))):[]}function a0(t,e){return{documents:[i0(t,e.path)]}}function l0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i0(t,i);const s=function(c){if(c.length!==0)return h0(de.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Xi(m.field),direction:UN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function u0(t){let e=s0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=c0(p);return m instanceof de&&om(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new La(Ji(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Us(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new Us(T,m)}(n.endAt)),aN(e,i,o,s,l,"F",u,c)}function FN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ji(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ji(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ji(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ji(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return ae.create(Ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return de.create(n.compositeFilter.filters.map(r=>c0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function UN(t){return xN[t]}function jN(t){return NN[t]}function BN(t){return DN[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return Ae.fromServerFormat(t.fieldPath)}function h0(t){return t instanceof ae?function(n){if(n.op==="=="){if(V_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(D_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(V_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(D_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:jN(n.op),value:n.value}}}(t):t instanceof de?function(n){const r=n.getFilters().map(i=>h0(i));return r.length===1?r[0]:{compositeFilter:{op:BN(n.op),filters:r}}}(t):G(54877,{filter:t})}function zN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function d0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function f0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class kn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class p0{constructor(e){this.yt=e}}function $N(t,e){let n;if(e.document)n=ON(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=xi(e.noDocument.readTime);n=Ne.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{const r=$.fromSegments(e.unknownDocument.path),i=xi(e.unknownDocument.version);n=Ne.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new he(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function Y_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ic(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:nc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:qs(s,o.version.toTimestamp()),createTime:qs(s,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ki(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:ki(e.version)}}return r}function ic(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ki(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xi(t){const e=new he(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function ti(t,e){const n=(e.baseMutations||[]).map(s=>Df(t.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Df(t.yt,s)),i=he.fromMillis(e.localWriteTimeMs);return new lm(e.batchId,i,n,r)}function Bo(t){const e=xi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?xi(t.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){const o=s.documents.length;return W(o===1,1966,{count:o}),$t(Uc(s0(s.documents[0])))}(t.query):function(s){return $t(u0(s))}(t.query),new kn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function m0(t,e){const n=ki(e.snapshotVersion),r=ki(e.lastLimboFreeSnapshotVersion);let i;i=ec(e.target)?a0(t.yt,e.target):l0(t.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ci(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function g0(t){const e=u0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}function id(t,e){return new cm(e.largestBatchId,Df(t.yt,e.overlayMutation))}function X_(t,e){const n=e.path.lastSegment();return[t,ut(e.path.popLast()),n]}function J_(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ki(r.readTime),documentKey:ut(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class qN{getBundleMetadata(e,n){return Z_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:xi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Z_(e).put(function(i){return{bundleId:i.id,createTime:ki(gt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return ev(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:g0(s.bundledQuery),readTime:xi(s.readTime)}}(r)})}saveNamedQuery(e,n){return ev(e).put(function(i){return{name:i.name,readTime:ki(gt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Z_(t){return $e(t,bc)}function ev(t){return $e(t,Oc)}/**
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
 */class qc{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new qc(e,r)}getOverlay(e,n){return Po(e).get(X_(this.userId,n)).next(r=>r?id(this.serializer,r):null)}getOverlays(e,n){const r=pn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const l=new cm(n,o);i.push(this.bt(e,l))}),x.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(ut(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Po(e).X(wf,l))}),x.waitFor(s)}getOverlaysForCollection(e,n,r){const i=pn(),s=ut(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Po(e).H(wf,o).next(l=>{for(const u of l){const c=id(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=pn();let o;const l=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Po(e).ee({index:gT,range:l},(u,c,d)=>{const p=id(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>s)}bt(e,n){return Po(e).put(function(i,s,o){const[l,u,c]=X_(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:rc(i.yt,o.mutation)}}(this.serializer,this.userId,n))}}function Po(t){return $e(t,Mc)}/**
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
 */class HN{St(e){return $e(e,tm)}getSessionToken(e){return this.St(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.St(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class ni{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),ka(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=Fn(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Un(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?CT(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):Fc(e)?this.kt(e.mapValue,n):(this.Kt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.qt(e.arrayValue,n),this.Nt(n)):G(19022,{Ut:e})}Ot(e,n){this.Ft(n,25),this.$t(e,n)}$t(e,n){n.xt(e)}Kt(e,n){const r=e.fields||{};this.Ft(n,55);for(const i of Object.keys(r))this.Ot(i,n),this.Ct(r[i],n)}kt(e,n){var o,l;const r=e.fields||{};this.Ft(n,53);const i=Ls,s=((l=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:l.length)||0;this.Ft(n,15),n.Mt(Ie(s)),this.Ot(i,n),this.Ct(r[i],n)}qt(e,n){const r=e.values||[];this.Ft(n,50);for(const i of r)this.Ct(i,n)}Lt(e,n){this.Ft(n,37),$.fromName(e).path.forEach(r=>{this.Ft(n,60),this.$t(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}ni.Wt=new ni;/**
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
 */const qi=255;function GN(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function tv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=GN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class KN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ht(r.value),r=n.next();this.Jt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=n.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ht(r);else if(r<2048)this.Ht(960|r>>>6),this.Ht(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ht(480|r>>>12),this.Ht(128|63&r>>>6),this.Ht(128|63&r);else{const i=n.codePointAt(0);this.Ht(240|i>>>18),this.Ht(128|63&i>>>12),this.Ht(128|63&i>>>6),this.Ht(128|63&i)}}this.Jt()}Yt(e){const n=this.en(e),r=tv(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}nn(e){const n=this.en(e),r=tv(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}rn(){this.sn(qi),this.sn(255)}_n(){this.an(qi),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===qi?(this.sn(qi),this.sn(0)):this.sn(n)}Ht(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===qi?(this.an(qi),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Jt(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class WN{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class QN{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Co{constructor(){this.cn=new KN,this.ascending=new WN(this.cn),this.descending=new QN(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class ri{constructor(e,n,r,i){this.hn=e,this.Pn=n,this.Tn=r,this.In=i}En(){const e=this.In.length,n=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.In,0),n!==e?r.set([0],this.In.length):++r[r.length-1],new ri(this.hn,this.Pn,this.Tn,r)}Rn(e,n,r){return{indexId:this.hn,uid:e,arrayValue:pu(this.Tn),directionalValue:pu(this.In),orderedDocumentKey:pu(n),documentKey:r.path.toArray()}}An(e,n,r){const i=this.Rn(e,n,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function er(t,e){let n=t.hn-e.hn;return n!==0?n:(n=nv(t.Tn,e.Tn),n!==0?n:(n=nv(t.In,e.In),n!==0?n:$.comparator(t.Pn,e.Pn)))}function nv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function pu(t){return dE()?function(n){let r="";for(let i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return r}(t):t}function rv(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(t)}class iv{constructor(e){this.Vn=new pe((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(W(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const n=yf(e);if(n!==void 0&&!this.pn(n))return!1;const r=Jr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const l=this.Vn.getIterator().getNext();if(!i.has(l.field.canonicalString())){const u=r[s];if(!this.yn(l,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],l))return!1}return!0}bn(){if(this.fn)return null;let e=new pe(Ae.comparator);const n=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ou(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ou(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ou(r.field,r.dir==="asc"?0:1)));return new Qu(Qu.UNKNOWN_ID,this.collectionId,n,Ca.empty())}pn(e){for(const n of this.mn)if(this.yn(n,e))return!0;return!1}yn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}wn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function y0(t){var n,r;if(W(t instanceof ae||t instanceof de,20012),t instanceof ae){if(t instanceof LT){const i=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(s=>ae.create(t.field,"==",s)))||[];return de.create(i,"or")}return t}const e=t.filters.map(i=>y0(i));return de.create(e,t.op)}function YN(t){if(t.getFilters().length===0)return[];const e=Of(y0(t));return W(_0(e),7391),Vf(e)||bf(e)?[e]:e.getFilters()}function Vf(t){return t instanceof ae}function bf(t){return t instanceof de&&om(t)}function _0(t){return Vf(t)||bf(t)||function(n){if(n instanceof de&&Sf(n)){for(const r of n.getFilters())if(!Vf(r)&&!bf(r))return!1;return!0}return!1}(t)}function Of(t){if(W(t instanceof ae||t instanceof de,34018),t instanceof ae)return t;if(t.filters.length===1)return Of(t.filters[0]);const e=t.filters.map(r=>Of(r));let n=de.create(e,t.op);return n=sc(n),_0(n)?n:(W(n instanceof de,64498),W(js(n),40251),W(n.filters.length>1,57927),n.filters.reduce((r,i)=>fm(r,i)))}function fm(t,e){let n;return W(t instanceof ae||t instanceof de,38388),W(e instanceof ae||e instanceof de,25473),n=t instanceof ae?e instanceof ae?function(i,s){return de.create([i,s],"and")}(t,e):sv(t,e):e instanceof ae?sv(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0,48005),js(i)&&js(s))return bT(i,s.getFilters());const o=Sf(i)?i:s,l=Sf(i)?s:i,u=o.filters.map(c=>fm(c,l));return de.create(u,"or")}(t,e),sc(n)}function sv(t,e){if(js(e))return bT(e,t.getFilters());{const n=e.filters.map(r=>fm(t,r));return de.create(n,"or")}}function sc(t){if(W(t instanceof ae||t instanceof de,11850),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return sc(e[0]);if(DT(t))return t;const n=e.map(i=>sc(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof de&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:de.create(r,t.op)}/**
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
 */class XN{constructor(){this.Sn=new pm}addToCollectionParentIndex(e,n){return this.Sn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Dt.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class pm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ce.comparator)).toArray()}}/**
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
 */const ov="IndexedDbIndexManager",Ul=new Uint8Array(0);class JN{constructor(e,n){this.databaseId=n,this.Dn=new pm,this.Cn=new $n(r=>Ci(r),(r,i)=>Ja(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Dn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Dn.add(n)});const s={collectionId:r,parent:ut(i)};return av(e).put(s)}return x.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[iT(n),""],!1,!0);return av(e).H(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(fn(o.parent))}return r})}addFieldIndex(e,n){const r=ko(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Gi(e);return s.next(l=>{o.put(J_(l,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ko(e),i=Gi(e),s=Hi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ko(e),r=Hi(e),i=Gi(e);return n.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,n){return x.forEach(this.vn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new iv(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Hi(e);let i=!0;const s=new Map;return x.forEach(this.vn(n),o=>this.Fn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=ie();const l=[];return x.forEach(s,(u,c)=>{U(ov,`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(u)} to execute ${Ci(n)}`);const d=function(I,D){const O=yf(D);if(O===void 0)return null;for(const L of tc(I,O.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),p=function(I,D){const O=new Map;for(const L of Jr(D))for(const _ of tc(I,L.fieldPath))switch(_.op){case"==":case"in":O.set(L.fieldPath.canonicalString(),_.value);break;case"not-in":case"!=":return O.set(L.fieldPath.canonicalString(),_.value),Array.from(O.values())}return null}(c,u),m=function(I,D){const O=[];let L=!0;for(const _ of Jr(D)){const y=_.kind===0?F_(I,_.fieldPath,I.startAt):U_(I,_.fieldPath,I.startAt);O.push(y.value),L&&(L=y.inclusive)}return new Us(O,L)}(c,u),T=function(I,D){const O=[];let L=!0;for(const _ of Jr(D)){const y=_.kind===0?U_(I,_.fieldPath,I.endAt):F_(I,_.fieldPath,I.endAt);O.push(y.value),L&&(L=y.inclusive)}return new Us(O,L)}(c,u),C=this.Mn(u,c,m),R=this.Mn(u,c,T),V=this.xn(u,c,p),w=this.On(u.indexId,d,C,m.inclusive,R,T.inclusive,V);return x.forEach(w,v=>r.Z(v,n.limit).next(I=>{I.forEach(D=>{const O=$.fromSegments(D.documentKey);o.has(O)||(o=o.add(O),l.push(O))})}))}).next(()=>l)}return x.resolve(null)})}vn(e){let n=this.Cn.get(e);return n||(e.filters.length===0?n=[e]:n=YN(de.create(e.filters,"and")).map(r=>Rf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,n),n)}On(e,n,r,i,s,o,l){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let p=0;p<u;++p){const m=n?this.Nn(n[p/c]):Ul,T=this.Bn(e,m,r[p%c],i),C=this.Ln(e,m,s[p%c],o),R=l.map(V=>this.Bn(e,m,V,!0));d.push(...this.createRange(T,C,R))}return d}Bn(e,n,r,i){const s=new ri(e,$.empty(),n,r);return i?s:s.En()}Ln(e,n,r,i){const s=new ri(e,$.empty(),n,r);return i?s.En():s}Fn(e,n){const r=new iv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.gn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,n){let r=2;const i=this.vn(n);return x.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new pe(Ae.comparator),d=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}kn(e,n){const r=new Co;for(const i of Jr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);ni.Wt.Dt(s,o)}return r.un()}Nn(e){const n=new Co;return ni.Wt.Dt(e,n.ln(0)),n.un()}Kn(e,n){const r=new Co;return ni.Wt.Dt(Oa(this.databaseId,n),r.ln(function(s){const o=Jr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,n,r){if(r===null)return[];let i=[];i.push(new Co);let s=0;for(const o of Jr(e)){const l=r[s++];for(const u of i)if(this.qn(n,o.fieldPath)&&Ma(l))i=this.Un(i,o,l);else{const c=u.ln(o.kind);ni.Wt.Dt(l,c)}}return this.$n(i)}Mn(e,n,r){return this.xn(e,n,r.position)}$n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Un(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const u=new Co;u.seed(l.un()),ni.Wt.Dt(o,u.ln(n.kind)),s.push(u)}return s}qn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ko(e),i=Gi(e);return(n?r.H(vf,IDBKeyRange.bound(n,n)):r.H()).next(s=>{const o=[];return x.forEach(s,l=>i.get([l.indexId,this.uid]).next(u=>{o.push(function(d,p){const m=p?new Ca(p.sequenceNumber,new Dt(xi(p.readTime),new $(fn(p.documentKey)),p.largestBatchId)):Ca.empty(),T=d.fields.map(([C,R])=>new ou(Ae.fromServerFormat(C),R));return new Qu(d.indexId,d.collectionGroup,T,m)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ko(e),s=Gi(e);return this.Wn(e).next(o=>i.H(vf,IDBKeyRange.bound(n,n)).next(l=>x.forEach(l,u=>s.put(J_(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return x.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),x.forEach(l,u=>this.Qn(e,i,u).next(c=>{const d=this.Gn(s,u);return c.isEqual(d)?x.resolve():this.zn(e,s,u,c,d)}))))})}jn(e,n,r,i){return Hi(e).put(i.Rn(this.uid,this.Kn(r,n.key),n.key))}Hn(e,n,r,i){return Hi(e).delete(i.An(this.uid,this.Kn(r,n.key),n.key))}Qn(e,n,r){const i=Hi(e);let s=new pe(er);return i.ee({index:mT,range:IDBKeyRange.only([r.indexId,this.uid,pu(this.Kn(r,n))])},(o,l)=>{s=s.add(new ri(r.indexId,n,rv(l.arrayValue),rv(l.directionalValue)))}).next(()=>s)}Gn(e,n){let r=new pe(er);const i=this.kn(n,e);if(i==null)return r;const s=yf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ma(o))for(const l of o.arrayValue.values||[])r=r.add(new ri(n.indexId,e.key,this.Nn(l),i))}else r=r.add(new ri(n.indexId,e.key,Ul,i));return r}zn(e,n,r,i,s){U(ov,"Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,p,m){const T=u.getIterator(),C=c.getIterator();let R=$i(T),V=$i(C);for(;R||V;){let w=!1,v=!1;if(R&&V){const I=d(R,V);I<0?v=!0:I>0&&(w=!0)}else R!=null?v=!0:w=!0;w?(p(V),V=$i(C)):v?(m(R),R=$i(T)):(R=$i(T),V=$i(C))}}(i,s,er,l=>{o.push(this.jn(e,n,r,l))},l=>{o.push(this.Hn(e,n,r,l))}),x.waitFor(o)}Wn(e){let n=1;return Gi(e).ee({index:pT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,l)=>er(o,l)).filter((o,l,u)=>!l||er(o,u[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=er(o,e),u=er(o,n);if(l===0)i[0]=e.En();else if(l>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Jn(i[o],i[o+1]))return[];const l=i[o].An(this.uid,Ul,$.empty()),u=i[o+1].An(this.uid,Ul,$.empty());s.push(IDBKeyRange.bound(l,u))}return s}Jn(e,n){return er(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(lv)}getMinOffset(e,n){return x.mapArray(this.vn(n),r=>this.Fn(e,r).next(i=>i||G(44426))).next(lv)}}function av(t){return $e(t,Da)}function Hi(t){return $e(t,ra)}function ko(t){return $e(t,em)}function Gi(t){return $e(t,na)}function lv(t){W(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Xp(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Dt(e.readTime,e.documentKey,n)}/**
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
 */const uv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v0=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function w0(t,e,n){const r=t.store(Yt),i=t.store(Vs),s=[],o=IDBKeyRange.only(n.batchId);let l=0;const u=r.ee({range:o},(d,p,m)=>(l++,m.delete()));s.push(u.next(()=>{W(l===1,47070,{batchId:n.batchId})}));const c=[];for(const d of n.mutations){const p=hT(e,d.key.path,n.batchId);s.push(i.delete(p)),c.push(d.key)}return x.waitFor(s).next(()=>c)}function oc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G(14731);e=t.noDocument}return JSON.stringify(e).length}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(v0,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);class Hc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,n,r,i){W(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Hc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).ee({index:li,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Zi(e),o=tr(e);return o.add({}).next(l=>{W(typeof l=="number",49019);const u=new lm(l,n,r,i),c=function(T,C,R){const V=R.baseMutations.map(v=>rc(T.yt,v)),w=R.mutations.map(v=>rc(T.yt,v));return{userId:C,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:V,mutations:w}}(this.serializer,this.userId,u),d=[];let p=new pe((m,T)=>ee(m.canonicalString(),T.canonicalString()));for(const m of i){const T=hT(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(T,Sx))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Zn[l]=u.keys()}),x.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return tr(e).get(n).next(r=>r?(W(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),ti(this.serializer,r)):null)}Xn(e,n){return this.Zn[n]?x.resolve(this.Zn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Zn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return tr(e).ee({index:li,range:i},(o,l,u)=>{l.userId===this.userId&&(W(l.batchId>=r,47524,{Yn:r}),s=ti(this.serializer,l)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=di;return tr(e).ee({index:li,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,di],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).H(li,n).next(r=>r.map(i=>ti(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=au(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Zi(e).ee({range:i},(o,l,u)=>{const[c,d,p]=o,m=fn(d);if(c===this.userId&&n.path.isEqual(m))return tr(e).get(p).next(T=>{if(!T)throw G(61480,{er:o,batchId:p});W(T.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:T.userId,batchId:p}),s.push(ti(this.serializer,T))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);const i=[];return n.forEach(s=>{const o=au(this.userId,s.path),l=IDBKeyRange.lowerBound(o),u=Zi(e).ee({range:l},(c,d,p)=>{const[m,T,C]=c,R=fn(T);m===this.userId&&s.path.isEqual(R)?r=r.add(C):p.done()});i.push(u)}),x.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=au(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new pe(ee);return Zi(e).ee({range:o},(u,c,d)=>{const[p,m,T]=u,C=fn(m);p===this.userId&&r.isPrefixOf(C)?C.length===i&&(l=l.add(T)):d.done()}).next(()=>this.tr(e,l))}tr(e,n){const r=[],i=[];return n.forEach(s=>{i.push(tr(e).get(s).next(o=>{if(o===null)throw G(35274,{batchId:s});W(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(ti(this.serializer,o))}))}),x.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return w0(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.nr(n.batchId)}),x.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return x.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Zi(e).ee({range:r},(s,o,l)=>{if(s[0]===this.userId){const u=fn(s[1]);i.push(u)}else l.done()}).next(()=>{W(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,n){return I0(e,this.userId,n)}ir(e){return E0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:di,lastStreamToken:""})}}function I0(t,e,n){const r=au(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Zi(t).ee({range:s,Y:!0},(l,u,c)=>{const[d,p,m]=l;d===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function tr(t){return $e(t,Yt)}function Zi(t){return $e(t,Vs)}function E0(t){return $e(t,xa)}/**
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
 */class Ni{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ni(0)}static ar(){return new Ni(-1)}}/**
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
 */class ZN{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.ur(e).next(n=>{const r=new Ni(n.highestTargetId);return n.highestTargetId=r.next(),this.cr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(n=>Q.fromTimestamp(new he(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.cr(e,i)))}addTargetData(e,n){return this.lr(e,n).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(n,r),this.cr(e,r))))}updateTargetData(e,n){return this.lr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ki(e).delete(n.targetId)).next(()=>this.ur(e)).next(r=>(W(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ki(e).ee((o,l)=>{const u=Bo(l);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>x.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ki(e).ee((r,i)=>{const s=Bo(i);n(s)})}ur(e){return cv(e).get(Ju).next(n=>(W(n!==null,2888),n))}cr(e,n){return cv(e).put(Ju,n)}lr(e,n){return Ki(e).put(m0(this.serializer,n))}hr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ci(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ki(e).ee({range:i,index:fT},(o,l,u)=>{const c=Bo(l);Ja(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=hr(e);return n.forEach(o=>{const l=ut(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),x.waitFor(i)}removeMatchingKeys(e,n,r){const i=hr(e);return x.forEach(n,s=>{const o=ut(s.path);return x.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=hr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=hr(e);let s=ie();return i.ee({range:r,Y:!0},(o,l,u)=>{const c=fn(o[1]),d=new $(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=ut(n.path),i=IDBKeyRange.bound([r],[iT(r)],!1,!0);let s=0;return hr(e).ee({index:Zp,Y:!0,range:i},([o,l],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}At(e,n){return Ki(e).get(n).next(r=>r?Bo(r):null)}}function Ki(t){return $e(t,bs)}function cv(t){return $e(t,fi)}function hr(t){return $e(t,Os)}/**
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
 */const hv="LruGarbageCollector",eD=1048576;function dv([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class tD{constructor(e){this.Pr=e,this.buffer=new pe(dv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){U(hv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fr(n)?U(hv,"Ignoring IndexedDB error during garbage collection: ",n):await Mi(n)}await this.Ar(3e5)})}}class nD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(jt.ce);const r=new tD(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(uv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Qi()<=oe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function S0(t,e){return new nD(t,e)}/**
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
 */class rD{constructor(e,n){this.db=e,this.garbageCollector=S0(this,n)}dr(e){const n=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}mr(e,n){return this.yr(e,(r,i)=>n(i))}addReference(e,n,r){return jl(e,r)}removeReference(e,n,r){return jl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return jl(e,n)}wr(e,n){return function(i,s){let o=!1;return E0(i).te(l=>I0(i,l,s).next(u=>(u&&(o=!0),x.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,l)=>{if(l<=n){const u=this.wr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),hr(e).delete(function(p){return[0,ut(p.path)]}(o))))});i.push(u)}}).next(()=>x.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return jl(e,n)}yr(e,n){const r=hr(e);let i,s=jt.ce;return r.ee({index:Zp},([o,l],{path:u,sequenceNumber:c})=>{o===0?(s!==jt.ce&&n(new $(fn(i)),s),s=c,i=u):s=jt.ce}).next(()=>{s!==jt.ce&&n(new $(fn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jl(t,e){return hr(t).put(function(r,i){return{targetId:0,path:ut(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class A0{constructor(){this.changes=new $n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Kr(e).put(r)}removeEntry(e,n,r){return Kr(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],ic(o),l[l.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.br(e,r)))}getEntry(e,n){let r=Ne.newInvalidDocument(n);return Kr(e).ee({index:lu,range:IDBKeyRange.only(xo(n))},(i,s)=>{r=this.Sr(n,s)}).next(()=>r)}Dr(e,n){let r={size:0,document:Ne.newInvalidDocument(n)};return Kr(e).ee({index:lu,range:IDBKeyRange.only(xo(n))},(i,s)=>{r={document:this.Sr(n,s),size:oc(s)}}).next(()=>r)}getEntries(e,n){let r=kt();return this.Cr(e,n,(i,s)=>{const o=this.Sr(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,n){let r=kt(),i=new Te($.comparator);return this.Cr(e,n,(s,o)=>{const l=this.Sr(s,o);r=r.insert(s,l),i=i.insert(s,oc(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,n,r){if(n.isEmpty())return x.resolve();let i=new pe(mv);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(xo(i.first()),xo(i.last())),o=i.getIterator();let l=o.getNext();return Kr(e).ee({index:lu,range:s},(u,c,d)=>{const p=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&mv(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,c),l=o.hasNext()?o.getNext():null),l?d.j(xo(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,l=[o.popLast().toArray(),o.lastSegment(),ic(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kr(e).H(IDBKeyRange.bound(l,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=kt();for(const p of c){const m=this.Sr($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Za(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=kt();const o=pv(n,r),l=pv(n,Dt.max());return Kr(e).ee({index:dT,range:IDBKeyRange.bound(o,l,!0)},(u,c,d)=>{const p=this.Sr($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new sD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return fv(e).get(_f).next(n=>(W(!!n,20021),n))}br(e,n){return fv(e).put(_f,n)}Sr(e,n){if(n){const r=$N(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ne.newInvalidDocument(e)}}function R0(t){return new iD(t)}class sD extends A0{constructor(e,n){super(),this.Mr=e,this.trackRemovals=n,this.Or=new $n(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.Or.get(s);if(n.push(this.Mr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const u=Y_(this.Mr.serializer,o);i=i.add(s.path.popLast());const c=oc(u);r+=c-l.size,n.push(this.Mr.addEntry(e,s,u))}else if(r-=l.size,this.trackRemovals){const u=Y_(this.Mr.serializer,o.convertToNoDocument(Q.min()));n.push(this.Mr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Mr.updateMetadata(e,r)),x.waitFor(n)}getFromCache(e,n){return this.Mr.Dr(e,n).next(r=>(this.Or.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Mr.vr(e,n).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function fv(t){return $e(t,Na)}function Kr(t){return $e(t,Xu)}function xo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function pv(t,e){const n=e.documentKey.path.toArray();return[t,ic(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function mv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class oD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class P0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&aa(r.mutation,i,It.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Uo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kt();const o=oa(),l=function(){return oa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof qn)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),aa(d.mutation,c,d.mutation.getFieldMask(),he.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new oD(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oa();let i=new Te((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||It.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=$T();d.forEach(m=>{if(!s.has(m)){const T=YT(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return lN(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(pn());let l=Pa,u=s;return o.next(c=>x.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:l,changes:zT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Uo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Uo();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,u=>{const c=function(p,m){return new Zs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ne.newInvalidDocument(d)))});let l=Uo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&aa(d.mutation,c,It.empty(),he.now()),Za(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class aD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return x.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gt(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:g0(i.bundledQuery),readTime:gt(i.readTime)}}(n)),x.resolve()}}/**
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
 */class lD{constructor(){this.overlays=new Te($.comparator),this.Lr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=pn(),s=n.length+1,o=new $(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=pn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=pn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return x.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cm(n,r));let s=this.Lr.get(n);s===void 0&&(s=ie(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class uD{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
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
 */class mm{constructor(){this.kr=new pe(He.Kr),this.qr=new pe(He.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new He(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new He(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new $(new ce([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new $(new ce([])),r=new He(n,e),i=new He(n,e+1);let s=ie();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return $.comparator(e.key,n.key)||ee(e.Hr,n.Hr)}static Ur(e,n){return ee(e.Hr,n.Hr)||$.comparator(e.key,n.key)}}/**
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
 */class cD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new pe(He.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lm(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?di:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new He(new $(s),0);let l=new pe(ee);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),x.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return x.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new He(n,0),i=this.Jr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hD{constructor(e){this.ti=e,this.docs=function(){return new Te($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=kt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kt();const o=n.path,l=new $(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Xp(aT(d),r)<=0||(i.has(d.key)||Za(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dD(this)}getSize(e){return x.resolve(this.size)}}class dD extends A0{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class fD{constructor(e){this.persistence=e,this.ri=new $n(n=>Ci(n),Ja),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new mm,this.targetCount=0,this.oi=Ni._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),x.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.lr(n),x.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.si.containsKey(n))}}/**
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
 */class gm{constructor(e,n){this._i={},this.overlays={},this.ai=new jt(0),this.ui=!1,this.ui=!0,this.ci=new uD,this.referenceDelegate=e(this),this.li=new fD(this),this.indexManager=new XN,this.remoteDocumentCache=function(i){return new hD(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new p0(n),this.Pi=new aD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new cD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new pD(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class pD extends uT{constructor(e){super(),this.currentSequenceNumber=e}}class Gc{constructor(e){this.persistence=e,this.Ri=new mm,this.Ai=null}static Vi(e){return new Gc(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const i=$.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return x.or([()=>x.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ac{constructor(e,n){this.persistence=e,this.fi=new $n(r=>ut(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=S0(this,n)}static Vi(e,n){return new ac(e,n)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return x.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?x.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),x.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cu(e.data.value)),n}wr(e,n,r){return x.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mD{constructor(e){this.serializer=e}k(e,n,r,i){const s=new Dc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore(Xa)}(e),function(u){u.createObjectStore(xa,{keyPath:Tx}),u.createObjectStore(Yt,{keyPath:R_,autoIncrement:!0}).createIndex(li,P_,{unique:!0}),u.createObjectStore(Vs)}(e),gv(e),function(u){u.createObjectStore(Zr)}(e));let o=x.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Os),u.deleteObjectStore(bs),u.deleteObjectStore(fi)}(e),gv(e)),o=o.next(()=>function(u){const c=u.store(fi),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put(Ju,d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store(Yt).H().next(p=>{u.deleteObjectStore(Yt),u.createObjectStore(Yt,{keyPath:R_,autoIncrement:!0}).createIndex(li,P_,{unique:!0});const m=c.store(Yt),T=p.map(C=>m.put(C));return x.waitFor(T)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Ms,{keyPath:Dx})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Na)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(bc,{keyPath:Vx})})(e),function(u){u.createObjectStore(Oc,{keyPath:bx})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(Mc,{keyPath:Bx});c.createIndex(wf,zx,{unique:!1}),c.createIndex(gT,$x,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(Xu,{keyPath:Ax});c.createIndex(lu,Rx),c.createIndex(dT,Px)}(e)).next(()=>this.Si(e,s)).next(()=>e.deleteObjectStore(Zr))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(em,{keyPath:Ox,autoIncrement:!0}).createIndex(vf,Mx,{unique:!1}),u.createObjectStore(na,{keyPath:Lx}).createIndex(pT,Fx,{unique:!1}),u.createObjectStore(ra,{keyPath:Ux}).createIndex(mT,jx,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore(na).clear()}).next(()=>{n.objectStore(ra).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(tm,{keyPath:qx})})(e)})),r<18&&i>=18&&dE()&&(o=o.next(()=>{n.objectStore(na).clear()}).next(()=>{n.objectStore(ra).clear()})),o}pi(e){let n=0;return e.store(Zr).ee((r,i)=>{n+=oc(i)}).next(()=>{const r={byteSize:n};return e.store(Na).put(_f,r)})}gi(e){const n=e.store(xa),r=e.store(Yt);return n.H().next(i=>x.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,di],[s.userId,s.lastAcknowledgedBatchId]);return r.H(li,o).next(l=>x.forEach(l,u=>{W(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=ti(this.serializer,u);return w0(e,s.userId,c).next(()=>{})}))}))}yi(e){const n=e.store(Os),r=e.store(Zr);return e.store(fi).get(Ju).next(i=>{const s=[];return r.ee((o,l)=>{const u=new ce(o),c=function(p){return[0,ut(p)]}(u);s.push(n.get(c).next(d=>d?x.resolve():(p=>n.put({targetId:0,path:ut(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>x.waitFor(s))})}wi(e,n){e.createObjectStore(Da,{keyPath:Nx});const r=n.store(Da),i=new pm,s=o=>{if(i.add(o)){const l=o.lastSegment(),u=o.popLast();return r.put({collectionId:l,parent:ut(u)})}};return n.store(Zr).ee({Y:!0},(o,l)=>{const u=new ce(o);return s(u.popLast())}).next(()=>n.store(Vs).ee({Y:!0},([o,l,u],c)=>{const d=fn(l);return s(d.popLast())}))}bi(e){const n=e.store(bs);return n.ee((r,i)=>{const s=Bo(i),o=m0(this.serializer,s);return n.put(o)})}Si(e,n){const r=n.store(Zr),i=[];return r.ee((s,o)=>{const l=n.store(Xu),u=function(p){return p.document?new $(ce.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):G(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(c))}).next(()=>x.waitFor(i))}Di(e,n){const r=n.store(Yt),i=R0(this.serializer),s=new gm(Gc.Vi,this.serializer.yt);return r.H().next(o=>{const l=new Map;return o.forEach(u=>{let c=l.get(u.userId)??ie();ti(this.serializer,u).keys().forEach(d=>c=c.add(d)),l.set(u.userId,c)}),x.forEach(l,(u,c)=>{const d=new Ye(c),p=qc.wt(this.serializer,d),m=s.getIndexManager(d),T=Hc.wt(d,this.serializer,m,s.referenceDelegate);return new P0(i,T,p,m).recalculateAndSaveOverlaysForDocumentKeys(new If(n,jt.ce),u).next()})})}}function gv(t){t.createObjectStore(Os,{keyPath:kx}).createIndex(Zp,xx,{unique:!0}),t.createObjectStore(bs,{keyPath:"targetId"}).createIndex(fT,Cx,{unique:!0}),t.createObjectStore(fi)}const nr="IndexedDbPersistence",sd=18e5,od=5e3,ad="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",gD="main";class ym{constructor(e,n,r,i,s,o,l,u,c,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ci=s,this.window=o,this.document=l,this.Fi=c,this.Mi=d,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=m=>Promise.resolve(),!ym.v())throw new B(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rD(this,i),this.Ki=n+gD,this.serializer=new p0(u),this.qi=new Pr(this.Ki,this.xi,new mD(this.serializer)),this.ci=new HN,this.li=new ZN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=R0(this.serializer),this.Pi=new qN,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&pt(nr,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(M.FAILED_PRECONDITION,ad);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new jt(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}zi(e){return this.ki=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(n=>{n||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Hi(e)).next(n=>this.isPrimary&&!n?this.Ji(e).next(()=>!1):!!n&&this.Zi(e).next(()=>!0))).catch(e=>{if(Fr(e))return U(nr,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(nr,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return No(e).get(zi).next(n=>x.resolve(this.Xi(n)))}Yi(e){return Bl(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,sd)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=$e(n,Ms);return r.H().next(i=>{const s=this.ns(i,sd),o=i.filter(l=>s.indexOf(l)===-1);return x.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const n of e)this.Ui.removeItem(this.rs(n.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.Mi?x.resolve(!0):No(e).get(zi).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,od)&&!this.ss(n.ownerId)){if(this.Xi(n)&&this.networkEnabled)return!0;if(!this.Xi(n)){if(!n.allowTabSynchronization)throw new B(M.FAILED_PRECONDITION,ad);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bl(e).H().next(r=>this.ns(r,od).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U(nr,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[Xa,Ms],e=>{const n=new If(e,jt.ce);return this.Ji(n).next(()=>this.Yi(n))}),this.qi.close(),this.ls()}ns(e,n){return e.filter(r=>this.ts(r.updateTimeMs,n)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Bl(e).H().next(n=>this.ns(n,sd).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,n){return Hc.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new JN(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return qc.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,n,r){U(nr,"Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===18?Kx:u===17?wT:u===16?Gx:u===15?nm:u===14?vT:u===13?_T:u===12?Hx:u===11?yT:void G(60245)}(this.xi);let o;return this.qi.runTransaction(e,i,s,l=>(o=new If(l,this.ai?this.ai.next():jt.ce),n==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw pt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new B(M.FAILED_PRECONDITION,lT);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ps(e){return No(e).get(zi).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,od)&&!this.ss(n.ownerId)&&!this.Xi(n)&&!(this.Mi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(M.FAILED_PRECONDITION,ad)})}Zi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return No(e).put(zi,n)}static v(){return Pr.v()}Ji(e){const n=No(e);return n.get(zi).next(r=>this.Xi(r)?(U(nr,"Releasing primary lease."),n.delete(zi)):x.resolve())}ts(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(pt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const n=/(?:Version|Mobile)\/1[456]/;hE()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var n;try{const r=((n=this.Ui)==null?void 0:n.getItem(this.rs(e)))!==null;return U(nr,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return pt(nr,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){pt("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function No(t){return $e(t,Xa)}function Bl(t){return $e(t,Ms)}function yD(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class _m{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _m(e,n.fromCache,r,i)}}/**
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
 */class _D{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class C0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return hE()?8:cT(ze())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _D;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Qi()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Qi()<=oe.DEBUG&&U("QueryEngine","Query:",Yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Qi()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(n))):x.resolve())}gs(e,n){if(j_(n))return x.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cf(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Cf(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return j_(n)||i.isEqual(Q.min())?x.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?x.resolve(null):(Qi()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(n)),this.Ds(e,o,n,gx(i,Pa)).next(l=>l))})}bs(e,n){let r=new pe(jT(e));return n.forEach((i,s)=>{Za(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Qi()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.fs.getDocumentsMatchingQuery(e,n,Dt.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const vm="LocalStore",vD=3e8;class wD{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Te(ee),this.Fs=new $n(s=>Ci(s),Ja),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function k0(t,e,n,r){return new wD(t,e,n,r)}async function x0(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function ID(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let T=x.resolve();return m.forEach(C=>{T=T.next(()=>d.getEntry(u,C)).next(R=>{const V=c.docVersions.get(C);W(V!==null,48541),R.version.compareTo(V)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function N0(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function ED(t,e){const n=te(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(R,V,w){return R.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=vD?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,T,d)&&l.push(n.li.updateTargetData(s,T))});let u=kt(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(TD(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(Q.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function TD(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kt();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):U(vm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function SD(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=di),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AD(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Mf(t,e,n){const r=te(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fr(o))throw o;U(vm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function yv(t,e,n){const r=te(t);let i=Q.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=te(u),m=p.Fs.get(d);return m!==void 0?x.resolve(p.vs.get(m)):p.li.getTargetData(c,d)}(r,o,$t(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ie())).next(l=>(RD(r,hN(e),l),{documents:l,ks:s})))}function RD(t,e,n){let r=t.Ms.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class _v{constructor(){this.activeTargetIds=yN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D0{constructor(){this.vo=new _v,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new _v,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PD{Mo(e){}shutdown(){}}/**
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
 */const vv="ConnectivityMonitor";class wv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(vv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){U(vv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zl=null;function Lf(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
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
 */const ld="RestConnection",CD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class kD{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Zu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Lf(),l=this.Qo(e,n.toUriEncodedString());U(ld,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=Qs(c);return this.zo(e,l,u,r,d).then(p=>(U(ld,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ri(ld,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Js}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=CD[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class xD{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const it="WebChannelConnection",Do=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Is extends kD{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Is.c_){const e=eT();Do(e,ZE.STAT_EVENT,n=>{n.stat===mf.PROXY?U(it,"STAT_EVENT: detected buffering proxy"):n.stat===mf.NOPROXY&&U(it,"STAT_EVENT: detected no buffering proxy")}),Is.c_=!0}}zo(e,n,r,i,s){const o=Lf();return new Promise((l,u)=>{const c=new XE;c.setWithCredentials(!0),c.listenOnce(JE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case su.NO_ERROR:const p=c.getResponseJson();U(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case su.TIMEOUT:U(it,`RPC '${e}' ${o} timed out`),u(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const m=c.getStatus();if(U(it,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const R=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(C.status);u(new B(R,C.message))}else u(new B(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(M.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{U(it,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);U(it,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Lf(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(it,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.I_(d);let p=!1,m=!1;const T=new xD({Ho:C=>{m?U(it,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(U(it,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),U(it,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},Jo:()=>d.close()});return Do(d,Fo.EventType.OPEN,()=>{m||(U(it,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Do(d,Fo.EventType.CLOSE,()=>{m||(m=!0,U(it,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.E_(d))}),Do(d,Fo.EventType.ERROR,C=>{m||(m=!0,Ri(it,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),T.o_(new B(M.UNAVAILABLE,"The operation could not be completed")))}),Do(d,Fo.EventType.MESSAGE,C=>{var R;if(!m){const V=C.data[0];W(!!V,16349);const w=V,v=(w==null?void 0:w.error)||((R=w[0])==null?void 0:R.error);if(v){U(it,`RPC '${e}' stream ${i} received error:`,v);const I=v.status;let D=function(_){const y=Ve[_];if(y!==void 0)return ZT(y)}(I),O=v.message;D===void 0&&(D=M.INTERNAL,O="Unknown error status: "+I+" with message "+v.message),m=!0,T.o_(new B(D,O)),d.close()}else U(it,`RPC '${e}' stream ${i} received:`,V),T.__(V)}}),Is.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tT()}}/**
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
 */function ND(t){return new Is(t)}/**
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
 */function DD(){return typeof window<"u"?window:null}function mu(){return typeof document<"u"?document:null}/**
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
 */function Kc(t){return new VN(t,!0)}/**
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
 */Is.c_=!1;class V0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Iv="PersistentStream";class b0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new V0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(Iv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(U(Iv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VD extends b0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=MN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?gt(o.readTime):Q.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ec(u)?{documents:a0(s,u)}:{query:l0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=n0(s,o.resumeToken);const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=qs(s,o.snapshotVersion.toTimestamp());const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=FN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.K_(n)}}class bD extends b0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=LN(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rc(this.serializer,r))};this.K_(n)}}/**
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
 */class OD{}class MD extends OD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,xf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,xf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function LD(t,e,n,r){return new MD(t,e,n,r)}class FD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pt(n),this.aa=!1):U("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Di="RemoteStore";class UD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Li(this)&&(U(Di,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ea.add(4),await nl(c),c.Va.set("Unknown"),c.Ea.delete(4),await Wc(c)}(this))})}),this.Va=new FD(r,i)}}async function Wc(t){if(Li(t))for(const e of t.Ra)await e(!0)}async function nl(t){for(const e of t.Ra)await e(!1)}function O0(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Tm(n)?Em(n):to(n).O_()&&Im(n,e))}function wm(t,e){const n=te(t),r=to(n);n.Ia.delete(e),r.O_()&&M0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Li(n)&&n.Va.set("Unknown"))}function Im(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}to(t).Z_(e)}function M0(t,e){t.da.$e(e),to(t).X_(e)}function Em(t){t.da=new kN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),to(t).start(),t.Va.ua()}function Tm(t){return Li(t)&&!to(t).x_()&&t.Ia.size>0}function Li(t){return te(t).Ea.size===0}function L0(t){t.da=void 0}async function jD(t){t.Va.set("Online")}async function BD(t){t.Ia.forEach((e,n)=>{Im(t,e)})}async function zD(t,e){L0(t),Tm(t)?(t.Va.ha(e),Em(t)):t.Va.set("Unknown")}async function $D(t,e,n){if(t.Va.set("Online"),e instanceof t0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){U(Di,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lc(t,r)}else if(e instanceof fu?t.da.Xe(e):e instanceof e0?t.da.st(e):t.da.tt(e),!n.isEqual(Q.min()))try{const r=await N0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Fe.EMPTY_BYTE_STRING,d.snapshotVersion)),M0(s,u);const p=new kn(d.target,u,c,d.sequenceNumber);Im(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){U(Di,"Failed to raise snapshot:",r),await lc(t,r)}}async function lc(t,e,n){if(!Fr(e))throw e;t.Ea.add(1),await nl(t),t.Va.set("Offline"),n||(n=()=>N0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U(Di,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Wc(t)})}function F0(t,e){return e().catch(n=>lc(t,n,e))}async function rl(t){const e=te(t),n=Vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:di;for(;qD(e);)try{const i=await SD(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,HD(e,i)}catch(i){await lc(e,i)}U0(e)&&j0(e)}function qD(t){return Li(t)&&t.Ta.length<10}function HD(t,e){t.Ta.push(e);const n=Vr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function U0(t){return Li(t)&&!Vr(t).x_()&&t.Ta.length>0}function j0(t){Vr(t).start()}async function GD(t){Vr(t).ra()}async function KD(t){const e=Vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function WD(t,e,n){const r=t.Ta.shift(),i=um.from(r,e,n);await F0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rl(t)}async function QD(t,e){e&&Vr(t).Y_&&await async function(r,i){if(function(o){return RN(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Vr(r).B_(),await F0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await rl(r)}}(t,e),U0(t)&&j0(t)}async function Ev(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U(Di,"RemoteStore received new credentials");const r=Li(n);n.Ea.add(3),await nl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Wc(n)}async function YD(t,e){const n=te(t);e?(n.Ea.delete(2),await Wc(n)):e||(n.Ea.add(2),await nl(n),n.Va.set("Unknown"))}function to(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new VD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:jD.bind(null,t),Yo:BD.bind(null,t),t_:zD.bind(null,t),J_:$D.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Tm(t)?Em(t):t.Va.set("Unknown")):(await t.ma.stop(),L0(t))})),t.ma}function Vr(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new bD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:GD.bind(null,t),t_:QD.bind(null,t),ta:KD.bind(null,t),na:WD.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await rl(t)):(await t.fa.stop(),t.Ta.length>0&&(U(Di,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Sm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Fr(t))return new B(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Uo(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Tv{constructor(){this.ga=new Te($.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hs(e,n,Es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class XD{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class JD{constructor(){this.queries=Sv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Sv(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new B(M.ABORTED,"Firestore shutting down"))}}function Sv(){return new $n(t=>UT(t),jc)}async function B0(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new XD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Am(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Rm(n)}async function z0(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZD(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&Rm(n)}function eV(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function Rm(t){t.Ca.forEach(e=>{e.next()})}var Ff,Av;(Av=Ff||(Ff={})).Ma="default",Av.Cache="cache";class $0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ff.Cache}}/**
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
 */class q0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class tV{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=jT(e),this.tu=new Es(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Tv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),T=Za(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),R=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let V=!1;m&&T?m.data.isEqual(T.data)?C!==R&&(r.track({type:3,doc:T}),V=!0):this.su(m,T)||(r.track({type:2,doc:T}),V=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),V=!0):m&&!T&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(l=!0)),V&&(T?(o=o.add(T),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(T,C){const R=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:V})}};return R(T)-R(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Hs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Tv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new H0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new q0(r))}),n}cu(e){this.Za=e.ks,this.Ya=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Hs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Pm="SyncEngine";class nV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rV{constructor(e){this.key=e,this.hu=!1}}class iV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $n(l=>UT(l),jc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te($.comparator),this.Au=new Map,this.Vu=new mm,this.du={},this.mu=new Map,this.fu=Ni.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sV(t,e,n=!0){const r=X0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await G0(r,e,n,!0),i}async function oV(t,e){const n=X0(t);await G0(n,e,!0,!1)}async function G0(t,e,n,r){const i=await AD(t.localStore,$t(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await aV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&O0(t.remoteStore,i),l}async function aV(t,e,n,r,i){t.pu=(p,m,T)=>async function(R,V,w,v){let I=V.view.ru(w);I.Ss&&(I=await yv(R.localStore,V.query,!1).then(({documents:_})=>V.view.ru(_,I)));const D=v&&v.targetChanges.get(V.targetId),O=v&&v.targetMismatches.get(V.targetId)!=null,L=V.view.applyChanges(I,R.isPrimaryClient,D,O);return Pv(R,V.targetId,L.au),L.snapshot}(t,p,m,T);const s=await yv(t.localStore,e,!0),o=new tV(e,s.ks),l=o.ru(s.documents),u=tl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Pv(t,n,c.au);const d=new nV(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function lV(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!jc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wm(r.remoteStore,i.targetId),Uf(r,i.targetId)}).catch(Mi)):(Uf(r,i.targetId),await Mf(r.localStore,i.targetId,!0))}async function uV(t,e){const n=te(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wm(n.remoteStore,r.targetId))}async function cV(t,e,n){const r=J0(t);try{const i=await function(o,l){const u=te(o),c=he.now(),d=l.reduce((T,C)=>T.add(C.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=kt(),R=ie();return u.xs.getEntries(T,d).next(V=>{C=V,C.forEach((w,v)=>{v.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,C)).next(V=>{p=V;const w=[];for(const v of l){const I=SN(v,p.get(v.key).overlayedDocument);I!=null&&w.push(new qn(v.key,I,xT(I.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,w,l)}).next(V=>{m=V;const w=V.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(T,V.batchId,w)})}).then(()=>({batchId:m.batchId,changes:zT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Te(ee)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await il(r,i.changes),await rl(r.remoteStore)}catch(i){const s=Am(i,"Failed to persist write");n.reject(s)}}async function K0(t,e){const n=te(t);try{const r=await ED(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?W(o.hu,14607):i.removedDocuments.size>0&&(W(o.hu,42227),o.hu=!1))}),await il(n,r,e)}catch(r){await Mi(r)}}function Rv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.ba)m.va(l)&&(c=!0)}),c&&Rm(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te($.comparator);o=o.insert(s,Ne.newNoDocument(s,Q.min()));const l=ie().add(s),u=new $c(Q.min(),new Map,new Te(ee),o,l);await K0(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Cm(r)}else await Mf(r.localStore,e,!1).then(()=>Uf(r,e,n)).catch(Mi)}async function dV(t,e){const n=te(t),r=e.batch.batchId;try{const i=await ID(n.localStore,e);Q0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await il(n,i)}catch(i){await Mi(i)}}async function fV(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(W(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Q0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await il(r,i)}catch(i){await Mi(i)}}function W0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Q0(t,e,n){const r=te(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Y0(t,r)})}function Y0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(wm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Cm(t))}function Pv(t,e,n){for(const r of n)r instanceof q0?(t.Vu.addReference(r.key,e),pV(t,r)):r instanceof H0?(U(Pm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Y0(t,r.key)):G(19791,{wu:r})}function pV(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(U(Pm,"New document in limbo: "+n),t.Eu.add(r),Cm(t))}function Cm(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new $(ce.fromString(e)),r=t.fu.next();t.Au.set(r,new rV(n)),t.Ru=t.Ru.insert(n,r),O0(t.remoteStore,new kn($t(Uc(n.path)),r,"TargetPurposeLimboResolution",jt.ce))}}async function il(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=_m.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(c,m=>x.forEach(m.Ts,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>x.forEach(m.Is,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Fr(p))throw p;U(vm,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=d.vs.get(m),C=T.snapshotVersion,R=T.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(m,R)}}}(r.localStore,s))}async function mV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U(Pm,"User change. New user:",e.toKey());const r=await x0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await il(n,r.Ns)}}function gV(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let i=ie();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function X0(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hV.bind(null,e),e.Pu.J_=ZD.bind(null,e.eventManager),e.Pu.yu=eV.bind(null,e.eventManager),e}function J0(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fV.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return k0(this.persistence,new C0,e.initialUser,this.serializer)}Cu(e){return new gm(Gc.Vi,this.serializer)}Du(e){return new D0}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class yV extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){W(this.persistence.referenceDelegate instanceof ac,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new T0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new gm(r=>ac.Vi(r,n),this.serializer)}}class _V extends Ua{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await J0(this.xu.syncEngine),await rl(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return k0(this.persistence,new C0,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new T0(r,e.asyncQueue,n)}Mu(e,n){const r=new wx(n,this.persistence);return new vx(e.asyncQueue,r)}Cu(e){const n=yD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new ym(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,DD(),mu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new D0}}class uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mV.bind(null,this.syncEngine),await YD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JD}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=ND(e.databaseInfo);return LD(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new UD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rv(this.syncEngine,n,0),function(){return wv.v()?new wv:new PD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new iV(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);U(Di,"RemoteStore shutting down."),s.Ea.add(5),await nl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}uc.provider={build:()=>new uc};/**
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
 */class Z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const br="FirestoreClient";class vV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=Yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U(br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ud(t,e){t.asyncQueue.verifyOperationInProgress(),U(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await x0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wV(t);U(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ev(e.remoteStore,i)),t._onlineComponents=e}async function wV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U(br,"Using user provided OfflineComponentProvider");try{await ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await ud(t,new Ua)}}else U(br,"Using default OfflineComponentProvider"),await ud(t,new yV(void 0));return t._offlineComponents}async function eS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U(br,"Using user provided OnlineComponentProvider"),await Cv(t,t._uninitializedComponentsProvider._online)):(U(br,"Using default OnlineComponentProvider"),await Cv(t,new uc))),t._onlineComponents}function IV(t){return eS(t).then(e=>e.syncEngine)}async function jf(t){const e=await eS(t),n=e.eventManager;return n.onListen=sV.bind(null,e.syncEngine),n.onUnlisten=lV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uV.bind(null,e.syncEngine),n}function EV(t,e,n,r){const i=new Z0(r),s=new $0(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>B0(await jf(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>z0(await jf(t),s))}}function TV(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Z0({next:m=>{d.Nu(),o.enqueueAndForget(()=>z0(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $0(l,d,{includeMetadataChanges:!0,Ka:!0});return B0(s,p)}(await jf(t),t.asyncQueue,e,n,r)),r.promise}function SV(t,e){const n=new Nn;return t.asyncQueue.enqueueAndForget(async()=>cV(await IV(t),e,n)),n.promise}/**
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
 */function tS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const AV="ComponentProvider",kv=new Map;function RV(t,e,n,r,i){return new Qx(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,tS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const nS="firestore.googleapis.com",xv=!0;class Nv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nS,this.ssl=xv}else this.host=e.host,this.ssl=e.ssl??xv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eD)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sx;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kv.get(n);r&&(U(AV,"Removing Datastore"),kv.delete(n),r.terminate())}(this),Promise.resolve()}}function PV(t,e,n,r={}){var c;t=zt(t,Qc);const i=Qs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(lE(`https://${l}`),uE("Firestore",!0)),s.host!==nS&&s.host!==l&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Ei(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ye.MOCK_USER;else{d=NR(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(m)}t._authCredentials=new ox(new rT(d,p))}}/**
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
 */class jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ya(n,Me._jsonSchema))return new Me(e,r||null,new $(ce.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Oe("string",Me._jsonSchemaVersion),referencePath:Oe("string")};class Cr extends jr{constructor(e,n,r){super(e,n,Uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new $(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Wi(t,e,...n){if(t=Le(t),sT("collection","path",e),t instanceof Qc){const r=ce.fromString(e,...n);return I_(r),new Cr(t,null,r)}{if(!(t instanceof Me||t instanceof Cr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return I_(r),new Cr(t.firestore,null,r)}}function rr(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Yp.newId()),sT("doc","path",e),t instanceof Qc){const r=ce.fromString(e,...n);return w_(r),new Me(t,null,new $(r))}{if(!(t instanceof Me||t instanceof Cr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return w_(r),new Me(t.firestore,t instanceof Cr?t.converter:null,new $(r))}}/**
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
 */const Dv="AsyncQueue";class Vv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new V0(this,"async_queue_retry"),this._c=()=>{const r=mu();r&&U(Dv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Nn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Fr(e))throw e;U(Dv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,pt("INTERNAL UNHANDLED ERROR: ",bv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Sm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:bv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class jn extends Qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Vv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vv(e),this._firestoreClient=void 0,await e}}}function CV(t,e){const n=typeof t=="object"?t:yE(),r=typeof t=="string"?t:Zu,i=Fp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kR("firestore");s&&PV(i,...s)}return i}function Yc(t){if(t._terminated)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rS(t),t._firestoreClient}function rS(t){var r,i,s,o;const e=t._freezeSettings(),n=RV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new vV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}function kV(t,e){Ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return xV(t,uc.provider,{build:r=>new _V(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function xV(t,e,n){if((t=zt(t,jn))._firestoreClient||t._terminated)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new B(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},rS(t)}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Fe.fromBase64String(e))}catch(n){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ya(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Oe("string",Ft._jsonSchemaVersion),bytes:Oe("string")};/**
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
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jc{constructor(e){this._methodName=e}}/**
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
 */class _n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(Ya(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Oe("string",_n._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
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
 */class rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ya(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new rn(e.vectorValues);throw new B(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:Oe("string",rn._jsonSchemaVersion),vectorValues:Oe("object")};/**
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
 */const NV=/^__.*__$/;class DV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new eo(e,this.data,n,this.fieldTransforms)}}class iS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class km{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new km({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return cc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sS(this.dataSource)&&NV.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class VV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}createContext(e,n,r,i=!1){return new km({dataSource:e,methodName:n,targetDoc:r,path:Ae.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zc(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new VV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oS(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Nm("Data must be an object, but it was:",o,r);const l=uS(r,o);let u,c;if(s.merge)u=new It(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Vi(e,p,n);if(!o.contains(m))throw new B(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);dS(d,m)||d.push(m)}u=new It(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new DV(new lt(l),u,c)}class eh extends Jc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}class xm extends Jc{_toFieldTransform(e){return new QT(e.path,new Bs)}isEqual(e){return e instanceof xm}}function aS(t,e,n,r){const i=t.createContext(1,e,n);Nm("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();Ur(r,(u,c)=>{const d=hS(e,u,n);c=Le(c);const p=i.childContextForFieldPath(d);if(c instanceof eh)s.push(d);else{const m=sl(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new It(s);return new iS(o,l,i.fieldTransforms)}function lS(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[Vi(e,r,n)],u=[i];if(s.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Vi(e,s[m])),u.push(s[m+1]);const c=[],d=lt.empty();for(let m=l.length-1;m>=0;--m)if(!dS(c,l[m])){const T=l[m];let C=u[m];C=Le(C);const R=o.childContextForFieldPath(T);if(C instanceof eh)c.push(T);else{const V=sl(C,R);V!=null&&(c.push(T),d.set(T,V))}}const p=new It(c);return new iS(d,p,o.fieldTransforms)}function bV(t,e,n,r=!1){return sl(n,t.createContext(r?4:3,e))}function sl(t,e){if(cS(t=Le(t)))return Nm("Unsupported field value:",e,t),uS(t,e);if(t instanceof Jc)return function(r,i){if(!sS(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=sl(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _N(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:qs(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(i.serializer,s)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:n0(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rn)return function(o,l){const u=o instanceof rn?o.toArray():o;return{mapValue:{fields:{[im]:{stringValue:sm},[Ls]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.createError("VectorValues must only contain numeric values.");return am(l.serializer,d)})}}}}}}(r,i);if(f0(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Nc(r)}`)}(t,e)}function uS(t,e){const n={};return IT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,i)=>{const s=sl(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof _n||t instanceof Ft||t instanceof Me||t instanceof Jc||t instanceof rn||f0(t))}function Nm(t,e,n){if(!cS(n)||!oT(n)){const r=Nc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Vi(t,e,n){if((e=Le(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return hS(t,e);throw cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const OV=new RegExp("[~\\*/\\[\\]]");function hS(t,e,n){if(e.search(OV)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(M.INVALID_ARGUMENT,l+t+u)}function dS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class MV{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ls].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ie(o.doubleValue));return new rn(n)}convertGeoPoint(e){return new _n(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);W(d0(r),9688,{name:e});const i=new Pi(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||pt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Dm extends MV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Vo(){return new xm("serverTimestamp")}const Ov="@firebase/firestore",Mv="4.10.0";/**
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
 */function Lv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class fS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Vi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LV extends fS{data(){return super.data()}}/**
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
 */function pS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vm{}class mS extends Vm{}function Fv(t,e,...n){let r=[];e instanceof Vm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof bm).length,l=s.filter(u=>u instanceof th).length;if(o>1||o>0&&l>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class th extends mS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new th(e,n,r)}_apply(e){const n=this._parse(e);return gS(e._query,n),new jr(e.firestore,e.converter,Pf(e._query,n))}_parse(e){const n=Zc(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){jv(p,d);const C=[];for(const R of p)C.push(Uv(u,s,R));m={arrayValue:{values:C}}}else m=Uv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||jv(p,d),m=bV(l,o,p,d==="in"||d==="not-in");return ae.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function FV(t,e,n){const r=e,i=Vi("where",t);return th._create(i,r,n)}class bm extends Vm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:de.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gS(o,u),o=Pf(o,u)}(e._query,n),new jr(e.firestore,e.converter,Pf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Om extends mS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Om(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new La(s,o)}(e._query,this._field,this._direction);return new jr(e.firestore,e.converter,cN(e._query,n))}}function UV(t,e="asc"){const n=e,r=Vi("orderBy",t);return Om._create(r,n)}function Uv(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FT(e)&&n.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!$.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oa(t,new $(r))}if(n instanceof Me)return Oa(t,n._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(n)}.`)}function jv(t,e){if(!Array.isArray(t)||t.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mi extends fS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",mi._jsonSchema={type:Oe("string",mi._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class gu extends mi{data(e={}){return super.data(e)}}class gi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gu(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:jV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */gi._jsonSchemaVersion="firestore/querySnapshot/1.0",gi._jsonSchema={type:Oe("string",gi._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};/**
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
 */class BV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Zc(e)}set(e,n,r){this._verifyNotCommitted();const i=cd(e,this._firestore),s=yS(i.converter,n,r),o=oS(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=cd(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof Xc?lS(this._dataReader,"WriteBatch.update",s._key,n,r,i):aS(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=cd(e,this._firestore);return this._mutations=this._mutations.concat(new el(n._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cd(t,e){if((t=Le(t)).firestore!==e)throw new B(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function zV(t){t=zt(t,jr);const e=zt(t.firestore,jn),n=Yc(e),r=new Dm(e);return pS(t._query),TV(n,t._query).then(i=>new gi(e,r,t,i))}function Bv(t,e,n,...r){t=zt(t,Me);const i=zt(t.firestore,jn),s=Zc(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof Xc?lS(s,"updateDoc",t._key,e,n,r):aS(s,"updateDoc",t._key,e),nh(i,[o.toMutation(t._key,Ke.exists(!0))])}function $V(t){return nh(zt(t.firestore,jn),[new el(t._key,Ke.none())])}function hd(t,e){const n=zt(t.firestore,jn),r=rr(t),i=yS(t.converter,e),s=Zc(t.firestore);return nh(n,[oS(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function zv(t,...e){var c,d,p;t=Le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Lv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Lv(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Me)o=zt(t.firestore,jn),l=Uc(t._key.path),s={next:m=>{e[r]&&e[r](qV(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=zt(t,jr);o=zt(m.firestore,jn),l=m._query;const T=new Dm(o);s={next:C=>{e[r]&&e[r](new gi(o,T,m,C))},error:e[r+1],complete:e[r+2]},pS(t._query)}const u=Yc(o);return EV(u,l,i,s)}function nh(t,e){const n=Yc(t);return SV(n,e)}function qV(t,e,n){const r=n.docs.get(e._key),i=new Dm(t);return new mi(t,i,e._key,r,new zo(n.hasPendingWrites,n.fromCache),e.converter)}function dd(t){return t=zt(t,jn),Yc(t),new BV(t,e=>nh(t,e))}(function(e,n=!0){ix(Ys),xs(new Ti("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new jn(new ax(r.getProvider("auth-internal")),new cx(o,r.getProvider("app-check-internal")),Yx(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ar(Ov,Mv,e),Ar(Ov,Mv,"esm2020")})();const HV={apiKey:"AIzaSyBSFq7YkTgMA4gr1AfBxWXbWoBn7JLozQw",authDomain:"guiter-code-ad4df.firebaseapp.com",projectId:"guiter-code-ad4df",storageBucket:"guiter-code-ad4df.firebasestorage.app",messagingSenderId:"474318515571",appId:"1:474318515571:web:8b128de0df7a71eef42906",measurementId:"G-6DGZLTRB7M"},_S=gE(HV),Bf=nx(_S),GV=new Sn,st=CV(_S);try{kV(st).catch(t=>{t.code==="failed-precondition"?console.warn("Firestore persistence failed: Multiple tabs open"):t.code==="unimplemented"&&console.warn("Firestore persistence failed: Browser not supported")})}catch(t){console.error("Persistence setup error:",t)}const Wr="guitar_scroll_songs";function KV(t){const[e,n]=Z.useState([]),[r,i]=Z.useState(null),[s,o]=Z.useState(!0),[l,u]=Z.useState([]);Z.useEffect(()=>{if(!t){const R=localStorage.getItem(Wr);if(R){let V=JSON.parse(R);V.length>0&&V[0].orderIndex===void 0&&(V=V.sort((w,v)=>v.createdAt-w.createdAt).map((w,v)=>({...w,orderIndex:v})),localStorage.setItem(Wr,JSON.stringify(V))),n(V.sort((w,v)=>w.orderIndex-v.orderIndex))}else n([]);o(!1)}},[t]),Z.useEffect(()=>{if(!t)return;o(!0);const R=Fv(Wi(st,"songs"),FV("userId","==",t.uid)),V=zv(R,w=>{let v=w.docs.map(D=>{var L;const O=D.data();return{id:D.id,...O,createdAt:(L=O.createdAt)!=null&&L.toMillis?O.createdAt.toMillis():Date.now()}});if(v.some(D=>D.orderIndex===void 0)){v=v.sort((O,L)=>(O.createdAt||0)-(L.createdAt||0)).map((O,L)=>({...O,orderIndex:L}));const D=dd(st);v.forEach(O=>{const L=rr(st,"songs",O.id);D.update(L,{orderIndex:O.orderIndex})}),D.commit().catch(O=>console.error("Migration failed:",O))}else v.sort((D,O)=>(D.orderIndex||0)-(O.orderIndex||0));n(v),o(!1)},w=>{console.error("[Firestore] Sync error:",w),o(!1)});return()=>V()},[t]),Z.useEffect(()=>{if(!t||!r){u([]);return}const R=Wi(st,"songs",r,"pages"),V=Fv(R,UV("pageIndex","asc")),w=zv(V,v=>{const I=v.docs.map(D=>D.data().url);u(I)},v=>{console.error("[Firestore] Pages sync error:",v)});return()=>w()},[t,r]);const c=Z.useCallback(async R=>{const V=e.length>0?Math.max(...e.map(D=>D.orderIndex||0))+1:0,{imageUrls:w,...v}=R,I={title:"名称未設定の曲",artist:"",bpm:120,scrollSpeed:20,orderIndex:V,...v};if(t)try{const O={id:`temp-${Date.now()}`,...I,createdAt:Date.now(),isOptimistic:!0,imageUrls:w};n(_=>[..._,O]),console.log("[Firestore] Saving song metadata...");const L=await hd(Wi(st,"songs"),{...I,userId:t.uid,createdAt:Vo()});if(w&&w.length>0){console.log(`[Firestore] Saving ${w.length} pages...`);for(let _=0;_<w.length;_++){const y=w[_];if(y.length>1e6)throw new Error(`画像 ${_+1} 枚目が大きすぎます (1MB超)`);const E=rr(Wi(st,"songs",L.id,"pages"));await hd(Wi(st,"songs",L.id,"pages"),{url:y,pageIndex:_,createdAt:Vo()})}}return console.log("[Firestore] Add successful"),{id:L.id,...I,imageUrls:w}}catch(D){throw console.error("[Firestore] Add error detailed:",D),D}else{const D={id:crypto.randomUUID(),...I,imageUrls:w,createdAt:Date.now()},O=[...e,D].sort((L,_)=>L.orderIndex-_.orderIndex);return n(O),localStorage.setItem(Wr,JSON.stringify(O)),D}},[t,e]),d=Z.useCallback(async(R,V)=>{const{imageUrls:w,...v}=V;if(t)try{console.log("[Firestore] Updating song metadata:",R);const I=rr(st,"songs",R);await Bv(I,{...v,imageUrls:[],imageUrl:"",updatedAt:Vo()}),console.log("[Firestore] Syncing pages...");const D=Wi(st,"songs",R,"pages"),O=await zV(D),L=dd(st);if(O.forEach(_=>L.delete(_.ref)),await L.commit(),w&&w.length>0)for(let _=0;_<w.length;_++){const y=w[_];if(y.length>1048487)throw new Error(`画像 ${_+1} 枚目が大きすぎます`);await hd(D,{url:y,pageIndex:_,createdAt:Vo()})}console.log("[Firestore] Update successful")}catch(I){throw console.error("[Firestore] Update error detailed:",I),I}else{const I=e.map(D=>D.id===R?{...D,...v,imageUrls:w}:D);n(I),localStorage.setItem(Wr,JSON.stringify(I))}},[t,e]),p=Z.useCallback(async(R,V)=>{if(t)try{const w=rr(st,"songs",R);await Bv(w,{...V,updatedAt:Vo()}),console.log("[Firestore] メタデータ更新成功")}catch(w){throw console.error("[Firestore] メタデータ更新エラー:",w),w}else n(w=>{const v=w.map(I=>I.id===R?{...I,...V}:I);return localStorage.setItem(Wr,JSON.stringify(v)),v})},[t]),m=Z.useCallback(async R=>{if(t)try{await $V(rr(st,"songs",R))}catch(V){throw console.error("[Firestore] Delete error:",V),V}else{const V=e.filter(w=>w.id!==R);n(V),localStorage.setItem(Wr,JSON.stringify(V))}r===R&&i(null)},[t,e,r]),T=Z.useCallback(async(R,V)=>{const w=e.findIndex(_=>_.id===R);if(w<0)return;const v=w+V;if(v<0||v>=e.length)return;const I=[...e],D={...I[w]},O={...I[v]},L=D.orderIndex;if(D.orderIndex=O.orderIndex,O.orderIndex=L,t)try{const _=dd(st);_.update(rr(st,"songs",D.id),{orderIndex:D.orderIndex}),_.update(rr(st,"songs",O.id),{orderIndex:O.orderIndex}),await _.commit()}catch(_){console.error("[Firestore] Move error:",_)}else I[w]=D,I[v]=O,I.sort((_,y)=>_.orderIndex-y.orderIndex),n(I),localStorage.setItem(Wr,JSON.stringify(I))},[t,e]),C=Z.useMemo(()=>{const R=e.find(w=>w.id===r)||null;if(!R)return null;const V=t?l.length>0?l:(R==null?void 0:R.imageUrls)||[]:(R==null?void 0:R.imageUrls)||[];return{...R,imageUrls:V}},[e,r,l,t]);return{songs:e,currentSong:C,currentSongId:r,setCurrentSongId:i,addSong:c,updateSong:d,updateSongMetadata:p,deleteSong:m,moveSong:T,loading:s}}function WV({songs:t,currentSongId:e,onSelect:n,onMove:r}){return F.jsxs("div",{className:"song-list-container",children:[t.length===0?F.jsx("div",{className:"empty-msg",children:"楽曲が登録されていません"}):F.jsx("ul",{className:"list-items",children:t.map((i,s)=>F.jsxs("li",{className:`song-item ${i.id===e?"active":""}`,onClick:()=>n(i.id),children:[F.jsxs("div",{className:"song-main",children:[F.jsx("div",{className:"song-title",children:i.title}),F.jsxs("div",{className:"song-meta",children:[i.artist||"Unknown"," / BPM: ",i.bpm]})]}),F.jsxs("div",{className:"song-reorder",onClick:o=>o.stopPropagation(),children:[F.jsx("button",{className:"reorder-btn",onClick:()=>r(i.id,-1),disabled:s===0,title:"上に移動",children:"▲"}),F.jsx("button",{className:"reorder-btn",onClick:()=>r(i.id,1),disabled:s===t.length-1,title:"下に移動",children:"▼"})]})]},i.id))}),F.jsx("style",{jsx:!0,children:`
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
      `})]})}const QV=(t,e=1200)=>new Promise((n,r)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=s=>{const o=new Image;o.src=s.target.result,o.onload=()=>{const l=document.createElement("canvas");let u=o.width,c=o.height;u>e&&(c=Math.round(c*e/u),u=e),l.width=u,l.height=c,l.getContext("2d").drawImage(o,0,0,u,c),n(l.toDataURL("image/jpeg",.85))},o.onerror=r},i.onerror=r});function YV({song:t,onSave:e,onCancel:n,onDelete:r}){const[i,s]=Z.useState({title:(t==null?void 0:t.title)||"",artist:(t==null?void 0:t.artist)||"",bpm:(t==null?void 0:t.bpm)||120,imageUrls:(t==null?void 0:t.imageUrls)||[]}),[o,l]=Z.useState(!1),u=Z.useRef(null),c=C=>{const{name:R,value:V}=C.target;s(w=>({...w,[R]:R==="bpm"?Number(V):V}))},d=async C=>{const R=Array.from(C.target.files);if(R.length!==0){l(!0);try{const V=[];for(const w of R){const v=await QV(w);V.push(v)}s(w=>({...w,imageUrls:[...w.imageUrls,...V]}))}catch(V){alert("画像の処理に失敗しました"),console.error(V)}finally{l(!1)}C.target.value=""}},p=C=>{s(R=>({...R,imageUrls:R.imageUrls.filter((V,w)=>w!==C)}))},m=(C,R)=>{const V=[...i.imageUrls],w=C+R;w<0||w>=V.length||([V[C],V[w]]=[V[w],V[C]],s(v=>({...v,imageUrls:V})))},T=()=>{if(!i.title)return alert("曲名を入力してください");if(i.imageUrls.length===0)return alert("楽譜画像を1枚以上アップロードしてください");e(i)};return F.jsxs("div",{className:"song-editor",children:[F.jsxs("div",{className:"editor-header",children:[F.jsx("h3",{children:t?"曲を編集":"新しい曲を追加"}),t&&F.jsx("button",{className:"delete-link",onClick:()=>r(t.id),children:"削除"})]}),F.jsxs("div",{className:"form-group",children:[F.jsx("label",{children:"曲名"}),F.jsx("input",{name:"title",value:i.title,onChange:c,placeholder:"曲名を入力"})]}),F.jsxs("div",{className:"form-row",children:[F.jsxs("div",{className:"form-group flex-1",children:[F.jsx("label",{children:"アーティスト"}),F.jsx("input",{name:"artist",value:i.artist,onChange:c,placeholder:"アーティスト名"})]}),F.jsxs("div",{className:"form-group w-80",children:[F.jsx("label",{children:"BPM"}),F.jsx("input",{type:"number",name:"bpm",value:i.bpm,onChange:c})]})]}),F.jsxs("div",{className:"form-group image-upload-area",children:[F.jsx("label",{children:"楽譜画像 (複数可)"}),F.jsxs("div",{className:"image-grid",children:[i.imageUrls.map((C,R)=>F.jsxs("div",{className:"image-item",children:[F.jsx("img",{src:C,alt:`page ${R+1}`,className:"img-preview-small"}),F.jsxs("div",{className:"image-item-actions",children:[F.jsx("button",{onClick:()=>m(R,-1),disabled:R===0,children:"▲"}),F.jsx("button",{onClick:()=>m(R,1),disabled:R===i.imageUrls.length-1,children:"▼"}),F.jsx("button",{className:"btn-remove",onClick:()=>p(R),children:"✕"})]}),F.jsx("span",{className:"page-number",children:R+1})]},R)),F.jsx("div",{className:"add-image-box",onClick:()=>u.current.click(),children:o?"処理中...":"+ 追加"})]}),F.jsx("input",{type:"file",ref:u,onChange:d,accept:"image/*",multiple:!0,style:{display:"none"}})]}),F.jsxs("div",{className:"editor-actions",children:[F.jsx("button",{className:"btn-cancel",onClick:n,children:"キャンセル"}),F.jsx("button",{className:"btn-save",onClick:T,children:"保存する"})]}),F.jsx("style",{jsx:!0,children:`
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
      `})]})}function XV({song:t,isPlaying:e,scrollSpeed:n,scrollPos:r,onScrollUpdate:i,onTogglePlay:s}){const o=Z.useRef(null),l=Z.useRef({x:0,y:0,time:0}),{imageUrls:u,imageUrl:c}=t,d=u||(c?[c]:[]);Z.useEffect(()=>{let C,R=performance.now();const V=w=>{if(e){const v=(w-R)/1e3,I=n*v;i(D=>D+I)}R=w,C=requestAnimationFrame(V)};return C=requestAnimationFrame(V),()=>cancelAnimationFrame(C)},[e,n,i]),Z.useEffect(()=>{o.current&&Math.abs(o.current.scrollTop-r)>1&&(o.current.scrollTop=r)},[r]);const p=C=>{e||i(C.target.scrollTop)},m=C=>{l.current={x:C.clientX,y:C.clientY,time:Date.now()}},T=C=>{const R=Date.now()-l.current.time,V=Math.abs(C.clientX-l.current.x),w=Math.abs(C.clientY-l.current.y);R<300&&V<10&&w<10&&s()};return F.jsxs("div",{className:"chord-viewer",ref:o,onScroll:p,onPointerDown:m,onPointerUp:T,children:[F.jsx("div",{className:"chord-content-wrapper",children:d.length>0?F.jsx("div",{className:"images-stack",children:d.map((C,R)=>F.jsx("img",{src:C,alt:`Sheet Music Page ${R+1}`,className:"sheet-image"},R))}):F.jsx("div",{className:"no-image-msg",children:"楽譜画像がありません"})}),F.jsx("style",{jsx:!0,children:`
        .chord-viewer {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          scroll-behavior: auto;
          background-color: var(--bg-color);
          scrollbar-width: thin;
          cursor: pointer;
          touch-action: pan-y; /* Y軸スクロールはブラウザに任せる */
        }

        .chord-content-wrapper {
          padding: 1rem;
          padding-top: 50vh;
          padding-bottom: 80vh;
          max-width: 1200px;
          margin: 0 auto;
        }

        .images-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sheet-image {
          width: 100%;
          height: auto;
          display: block;
          user-select: none;
          pointer-events: none; 
        }

        .no-image-msg {
          text-align: center;
          padding: 5rem;
          color: var(--text-muted);
        }

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
      `})]})}function JV({isPlaying:t,onTogglePlay:e,onReset:n,scrollSpeed:r,onSpeedChange:i}){return F.jsxs("div",{className:"control-panel",children:[F.jsxs("div",{className:"controls-group",children:[F.jsx("button",{className:"ctrl-btn secondary",onClick:n,title:"最初に戻る",children:"⏮"}),F.jsx("button",{className:`ctrl-btn main ${t?"playing":""}`,onClick:e,children:t?"⏸ PAUSE":"▶ PLAY"})]}),F.jsxs("div",{className:"speed-control",children:[F.jsxs("div",{className:"speed-label-row",children:[F.jsx("label",{children:"速度:"}),F.jsx("input",{type:"number",className:"speed-number-input",value:r,onChange:s=>i(Number(s.target.value)),min:"1",max:"1000"}),F.jsx("span",{className:"unit-label",children:"px/s"})]}),F.jsx("input",{type:"range",min:"1",max:"300",step:"1",value:r,onChange:s=>i(Number(s.target.value))})]}),F.jsx("style",{jsx:!0,children:`
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
      `})]})}function ZV({user:t}){const e=async()=>{try{await hk(Bf,GV)}catch(r){console.error("Login failed",r),alert("ログインに失敗しました。Firebase ConsoleでGoogle Authを有効にし、ドメインを承認しているか確認してください。")}},n=()=>{window.confirm("ログアウトしますか？")&&HC(Bf)};return F.jsxs("div",{className:"auth-area",children:[t?F.jsxs("div",{className:"user-profile",children:[F.jsx("img",{src:t.photoURL,alt:t.displayName,className:"user-avatar"}),F.jsxs("div",{className:"user-info",children:[F.jsx("span",{className:"user-name",children:t.displayName}),F.jsx("button",{className:"auth-btn logout",onClick:n,children:"ログアウト"})]})]}):F.jsx("button",{className:"auth-btn login",onClick:e,children:"Googleでログイン"}),F.jsx("style",{jsx:!0,children:`
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
      `})]})}const eb=400;function tb(){const[t,e]=Z.useState(null),[n,r]=Z.useState(window.innerWidth<768),[i,s]=Z.useState(!0),[o,l]=Z.useState(Date.now()),u=Z.useRef({x:0,y:0});Z.useRef(null);const c=Z.useRef(null),d=Z.useRef({});Z.useEffect(()=>{const K=qC(Bf,Y=>{e(Y)});return()=>K()},[]);const{songs:p,currentSong:m,currentSongId:T,setCurrentSongId:C,addSong:R,updateSong:V,updateSongMetadata:w,deleteSong:v,moveSong:I,loading:D}=KV(t),[O,L]=Z.useState(!1),[_,y]=Z.useState(!1),[E,A]=Z.useState(0),[P,k]=Z.useState(20),S=Z.useCallback(K=>{if(K&&K.type==="pointermove"){const Y=Math.abs(K.clientX-u.current.x),we=Math.abs(K.clientY-u.current.y);if(Y<5&&we<5)return;u.current={x:K.clientX,y:K.clientY}}K&&K.type==="pointerdown"&&(u.current={x:K.clientX,y:K.clientY}),s(!0),l(Date.now())},[]);Z.useEffect(()=>{if(i&&m&&!O){const Y=setTimeout(()=>{s(!1)},_?1e3:2e3);return()=>clearTimeout(Y)}},[i,_,T,O,o]),Z.useEffect(()=>{s(!0),l(Date.now())},[_,T,O]);const Ce=Z.useCallback(()=>{y(K=>!K)},[]),Ot=Z.useCallback(()=>{y(!1),A(0)},[]);Z.useEffect(()=>{const K=Y=>{Y.code==="Space"&&!O&&(Y.preventDefault(),Ce()),Y.code==="KeyS"&&!O&&r(we=>!we)};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[Ce,O]);const Br=Z.useCallback(()=>{if(m!=null&&m.bpm){const K=m.bpm/60/4*eb;k(Math.round(K))}},[m]),In=Z.useCallback((K,Y)=>{d.current[K]=Y,console.log(`[saveSpeed] キャッシュ更新: songId=${K}, speed=${Y}`),w(K,{scrollSpeed:Y}).then(()=>{console.log(`[saveSpeed] DB保存成功: songId=${K}, speed=${Y}`)}).catch(we=>{console.error("[saveSpeed] DB保存失敗:",we)})},[w]),q=K=>{T&&d.current[T]!==P&&(c.current&&(clearTimeout(c.current),c.current=null),In(T,P)),C(K),L(!1),Ot();const Y=d.current[K],we=p.find(on=>on.id===K),et=Y??(we==null?void 0:we.scrollSpeed)??20;k(et),d.current[K]=et,console.log(`[selectSong] 曲選択: id=${K}, speed=${et} (cache=${Y}, db=${we==null?void 0:we.scrollSpeed})`)};Z.useEffect(()=>{if(!T||d.current[T]===P)return;c.current&&clearTimeout(c.current);const K=T,Y=P;return c.current=setTimeout(()=>{In(K,Y)},1e3),()=>{c.current&&clearTimeout(c.current)}},[P,T,In]);const X=async K=>{try{if(T)await V(T,{...K,scrollSpeed:P});else{const Y=await R({...K,scrollSpeed:P});Y&&Y.id&&C(Y.id)}L(!1)}catch(Y){let we="保存に失敗しました。";Y.message&&(we+=`
原因: ${Y.message}`),Y.code==="permission-denied"&&(we+=`
設定エラー: データベースの書き込み権限がありません。管理者にお問い合わせください。`),alert(we),console.error(Y)}},ne=async K=>{window.confirm("この曲を削除してもよろしいですか？")&&(await v(K),L(!1))};return F.jsxs("div",{className:`app-container ${n?"sidebar-collapsed":""} ${i?"":"hide-cursor"}`,onPointerDown:S,onPointerMove:S,children:[F.jsxs("nav",{className:"sidebar",children:[F.jsxs("div",{className:"sidebar-header",children:[F.jsx("h1",{children:"Guitar Scroll"}),F.jsx("button",{className:"toggle-btn",onClick:()=>r(!0),children:"◀"})]}),F.jsx(ZV,{user:t}),F.jsx(WV,{songs:p,currentSongId:T,onSelect:q,onMove:I}),F.jsx("div",{className:"sidebar-footer",children:F.jsx("button",{className:"add-button",onClick:()=>{C(null),L(!0)},children:"＋ 新しい曲"})})]}),F.jsxs("main",{className:"main-content",children:[F.jsxs("header",{className:`app-header ${i?"":"header-hidden"}`,children:[F.jsx("div",{className:"song-info",children:m?F.jsxs(F.Fragment,{children:[F.jsx("h2",{children:m.title}),F.jsxs("span",{className:"metadata",children:[m.artist," | BPM: ",m.bpm]})]}):F.jsx("h2",{children:D?"読み込み中...":"曲を選択してください"})}),F.jsx("div",{className:"app-actions",children:m&&F.jsx("button",{className:"edit-toggle",onClick:()=>L(!O),children:O?"完了":"編集"})})]}),F.jsx("section",{className:"viewer-area",children:O?F.jsx(YV,{song:m,onSave:X,onCancel:()=>L(!1),onDelete:ne}):m?F.jsx(XV,{song:m,isPlaying:_,scrollSpeed:P,scrollPos:E,onScrollUpdate:A,onTogglePlay:Ce}):F.jsx("div",{className:"placeholder-msg",children:F.jsx("p",{children:"曲を選択するか「＋ 新しい曲」から楽譜画像を追加してください。"})})}),(m||n&&!O)&&F.jsx("footer",{className:`controls-area floating-panel ${i?"":"controls-hidden"}`,children:F.jsxs("div",{className:"floating-inner",children:[F.jsxs("div",{className:"top-row",children:[n&&F.jsx("button",{className:"expand-btn-floating",onClick:()=>r(!1),children:"☰ 曲一覧"}),m&&F.jsx("div",{className:"bpm-sync-panel",children:F.jsx("button",{className:"sync-btn",onClick:Br,children:"BPM同期"})})]}),m&&F.jsx(JV,{isPlaying:_,onTogglePlay:Ce,onReset:Ot,scrollSpeed:P,onSpeedChange:k})]})})]}),F.jsx("style",{jsx:!0,children:`
        .app-container {
          display: flex;
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background-color: var(--bg-color);
          overflow: hidden;
          position: relative;
        }

        .hide-cursor, .hide-cursor * {
          cursor: none !important;
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
      `})]})}fd.createRoot(document.getElementById("root")).render(F.jsx(c1.StrictMode,{children:F.jsx(tb,{})}));
