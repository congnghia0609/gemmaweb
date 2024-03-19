/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@mediapipe/tasks-genai@0.10.12/genai_bundle.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="undefined"!=typeof self?self:{};function e(e){t:{for(var r=["CLOSURE_FLAGS"],n=t,i=0;i<r.length;i++)if(null==(n=n[r[i]])){r=null;break t}r=n}return null!=(e=r&&r[e])&&e}let r;const n="undefined"!=typeof TextEncoder;function i(t){if(n)t=(r||=new TextEncoder).encode(t);else{let r=0;const n=new Uint8Array(3*t.length);for(let i=0;i<t.length;i++){var e=t.charCodeAt(i);if(128>e)n[r++]=e;else{if(2048>e)n[r++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&i<t.length){const o=t.charCodeAt(++i);if(56320<=o&&57343>=o){e=1024*(e-55296)+o-56320+65536,n[r++]=e>>18|240,n[r++]=e>>12&63|128,n[r++]=e>>6&63|128,n[r++]=63&e|128;continue}i--}e=65533}n[r++]=e>>12|224,n[r++]=e>>6&63|128}n[r++]=63&e|128}}t=r===n.length?n:n.subarray(0,r)}return t}var o,s=e(610401301),a=e(188588736);const u=t.navigator;function c(t){return!!s&&(!!o&&o.brands.some((({brand:e})=>e&&-1!=e.indexOf(t))))}function l(e){var r;return(r=t.navigator)&&(r=r.userAgent)||(r=""),-1!=r.indexOf(e)}function h(){return!!s&&(!!o&&0<o.brands.length)}function f(){return h()?c("Chromium"):(l("Chrome")||l("CriOS"))&&!(!h()&&l("Edge"))||l("Silk")}o=u&&u.userAgentData||null;var d=!h()&&(l("Trident")||l("MSIE"));!l("Android")||f(),f(),l("Safari")&&(f()||!h()&&l("Coast")||!h()&&l("Opera")||!h()&&l("Edge")||(h()?c("Microsoft Edge"):l("Edg/"))||h()&&c("Opera"));var p={},g=null;function m(t){var e=t.length,r=3*e/4;r%3?r=Math.floor(r):-1!="=.".indexOf(t[e-1])&&(r=-1!="=.".indexOf(t[e-2])?r-2:r-1);var n=new Uint8Array(r),i=0;return function(t,e){function r(e){for(;n<t.length;){var r=t.charAt(n++),i=g[r];if(null!=i)return i;if(!/^[\s\xa0]*$/.test(r))throw Error("Unknown base64 encoding at char: "+r)}return e}y();for(var n=0;;){var i=r(-1),o=r(0),s=r(64),a=r(64);if(64===a&&-1===i)break;e(i<<2|o>>4),64!=s&&(e(o<<4&240|s>>2),64!=a&&e(s<<6&192|a))}}(t,(function(t){n[i++]=t})),i!==r?n.subarray(0,i):n}function y(){if(!g){g={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],r=0;5>r;r++){var n=t.concat(e[r].split(""));p[r]=n;for(var i=0;i<n.length;i++){var o=n[i];void 0===g[o]&&(g[o]=i)}}}}var _="undefined"!=typeof Uint8Array,b=!d&&"function"==typeof btoa;function v(t){if(!b){var e;void 0===e&&(e=0),y(),e=p[e];var r=Array(Math.floor(t.length/3)),n=e[64]||"";let u=0,c=0;for(;u<t.length-2;u+=3){var i=t[u],o=t[u+1],s=t[u+2],a=e[i>>2];i=e[(3&i)<<4|o>>4],o=e[(15&o)<<2|s>>6],s=e[63&s],r[c++]=a+i+o+s}switch(a=0,s=n,t.length-u){case 2:s=e[(15&(a=t[u+1]))<<2]||n;case 1:t=t[u],r[c]=e[t>>2]+e[(3&t)<<4|a>>4]+s+n}return r.join("")}for(e="",r=0,n=t.length-10240;r<n;)e+=String.fromCharCode.apply(null,t.subarray(r,r+=10240));return e+=String.fromCharCode.apply(null,r?t.subarray(r):t),btoa(e)}const w=/[-_.]/g,S={"-":"+",_:"/",".":"="};function A(t){return S[t]||""}function I(t){if(!b)return m(t);w.test(t)&&(t=t.replace(w,A)),t=atob(t);const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function T(t){return _&&null!=t&&t instanceof Uint8Array}let E;var P={};let O;function L(t){if(t!==P)throw Error("illegal external caller")}function x(){return O||=new B(null,P)}var B=class{constructor(t,e){if(L(e),this.i=t,null!=t&&0===t.length)throw Error("ByteString should be constructed with non-empty values")}};function F(t){if("string"==typeof t)return{buffer:I(t),s:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),s:!1};if(t.constructor===Uint8Array)return{buffer:t,s:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),s:!1};if(t.constructor===B){L(P);var e=t.i;return{buffer:(null==(e=null==e||T(e)?e:"string"==typeof e?I(e):null)?e:t.i=e)||(E||=new Uint8Array(0)),s:!0}}if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),s:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function k(){return"function"==typeof BigInt}let U,V=0,j=0;function N(t){const e=0>t;let r=(t=Math.abs(t))>>>0;if(t=Math.floor((t-r)/4294967296),e){const[e,n]=G(r,t);t=n,r=e}V=r>>>0,j=t>>>0}function C(t,e){if(t>>>=0,2097151>=(e>>>=0))var r=""+(4294967296*e+t);else k()?r=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(r=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),r+=8147497*e,e*=2,1e7<=t&&(r+=Math.floor(t/1e7),t%=1e7),1e7<=r&&(e+=Math.floor(r/1e7),r%=1e7),r=e+D(r)+D(t));return r}function D(t){return t=String(t),"0000000".slice(t.length)+t}function M(t){if(16>t.length)N(Number(t));else if(k())t=BigInt(t),V=Number(t&BigInt(4294967295))>>>0,j=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+("-"===t[0]);j=V=0;const r=t.length;for(let n=e,i=(r-e)%6+e;i<=r;n=i,i+=6){const e=Number(t.slice(n,i));j*=1e6,V=1e6*V+e,4294967296<=V&&(j+=Math.trunc(V/4294967296),j>>>=0,V>>>=0)}if(e){const[t,e]=G(V,j);V=t,j=e}}}function G(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function R(t){return t?/^\d+$/.test(t)?(M(t),new W(V,j)):null:z||=new W(0,0)}var W=class{constructor(t,e){this.j=t>>>0,this.i=e>>>0}};let z;function H(t){return t?/^-?\d+$/.test(t)?(M(t),new $(V,j)):null:q||=new $(0,0)}var $=class{constructor(t,e){this.j=t>>>0,this.i=e>>>0}};let q;function K(t,e,r){for(;0<r||127<e;)t.i.push(127&e|128),e=(e>>>7|r<<25)>>>0,r>>>=7;t.i.push(e)}function Y(t,e){for(;127<e;)t.i.push(127&e|128),e>>>=7;t.i.push(e)}function J(t,e){if(0<=e)Y(t,e);else{for(let r=0;9>r;r++)t.i.push(127&e|128),e>>=7;t.i.push(1)}}function X(t,e){0!==e.length&&(t.l.push(e),t.j+=e.length)}function Q(t,e){return Y(t.i,8*e+2),e=t.i.end(),X(t,e),e.push(t.j),e}function Z(t,e){var r=e.pop();for(r=t.j+t.i.length()-r;127<r;)e.push(127&r|128),r>>>=7,t.j++;e.push(r),t.j++}function tt(t,e,r){Y(t.i,8*e+2),Y(t.i,r.length),X(t,t.i.end()),X(t,r)}var et;class rt{constructor(t,e){this.i=t,this.I=e}}function nt(t){return Array.prototype.slice.call(t)}var it=(et="function"==typeof Symbol&&"symbol"==typeof Symbol()?Symbol():void 0)?(t,e)=>{t[et]|=e}:(t,e)=>{void 0!==t.i?t.i|=e:Object.defineProperties(t,{i:{value:e,configurable:!0,writable:!0,enumerable:!1}})},ot=et?(t,e)=>{t[et]&=~e}:(t,e)=>{void 0!==t.i&&(t.i&=~e)};function st(t,e,r){return r?t|e:t&~e}var at=et?t=>0|t[et]:t=>0|t.i,ut=et?t=>t[et]:t=>t.i,ct=et?(t,e)=>(t[et]=e,t):(t,e)=>(void 0!==t.i?t.i=e:Object.defineProperties(t,{i:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function lt(t,e){ct(e,-14591&(0|t))}function ht(t,e){ct(e,-14557&(34|t))}function ft(t){return 0===(t=t>>14&1023)?536870912:t}var dt,pt={},gt={};function mt(t){return!(!t||"object"!=typeof t||t.i!==gt)}function yt(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)&&t.constructor===Object}function _t(t,e,r){if(!Array.isArray(t)||t.length)return!1;const n=at(t);return!!(1&n)||!(!e||!(Array.isArray(e)?e.includes(r):e.has(r)))&&(ct(t,1|n),!0)}const bt=[];function vt(t){if(2&t)throw Error()}ct(bt,55),dt=Object.freeze(bt);function wt(t){return(t=Error(t)).__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity="warning",t}function St(t){if(null!=t&&"number"!=typeof t)throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}Object.freeze(new class{}),Object.freeze(new class{});const At=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function It(t){const e=typeof t;return"number"===e?Number.isFinite(t):"string"===e&&At.test(t)}function Tt(t){if(null!=t){if("number"!=typeof t)throw wt("int32");if(!Number.isFinite(t))throw wt("int32");t|=0}return t}function Et(t){if(null==t)return t;if("string"==typeof t){if(!t)return;t=+t}return"number"==typeof t&&Number.isFinite(t)?0|t:void 0}function Pt(t){if(null!=t){if("number"!=typeof t)throw wt("uint32");if(!Number.isFinite(t))throw wt("uint32");t>>>=0}return t}function Ot(t){if(null==t)return t;if("string"==typeof t){if(!t)return;t=+t}return"number"==typeof t&&Number.isFinite(t)?t>>>0:void 0}function Lt(t){return"-"!==t[0]&&(20>t.length||20===t.length&&184467>Number(t.substring(0,6)))}function xt(t){return null==t||"string"==typeof t?t:void 0}function Bt(t,e,r){if(null!=t&&"object"==typeof t&&t.D===pt)return t;if(Array.isArray(t)){var n=at(t),i=n;return 0===i&&(i|=32&r),(i|=2&r)!==n&&ct(t,i),new e(t)}}let Ft,kt,Ut;function Vt(t,e,r){if(null==t&&(t=Ft),Ft=void 0,null==t){var n=96;r?(t=[r],n|=512):t=[],e&&(n=-16760833&n|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error();if(2048&(n=at(t)))throw Error();if(64&n)return t;if(n|=64,r&&(n|=512,r!==t[0]))throw Error();t:{const i=(r=t).length;if(i){const t=i-1;if(yt(r[t])){if(1024<=(e=t-(+!!(512&(n|=256))-1)))throw Error();n=-16760833&n|(1023&e)<<14;break t}}if(e){if(1024<(e=Math.max(e,i-(+!!(512&n)-1))))throw Error();n=-16760833&n|(1023&e)<<14}}}return ct(t,n),t}function jt(t,e,r,n,i){if(null!=t){if(Array.isArray(t))t=_t(t,void 0,0)?void 0:i&&2&at(t)?t:Nt(t,e,r,void 0!==n,i);else if(yt(t)){const o={};for(let s in t)o[s]=jt(t[s],e,r,n,i);t=o}else t=e(t,n);return t}}function Nt(t,e,r,n,i){const o=n||r?at(t):0;n=n?!!(32&o):void 0,t=nt(t);for(let o=0;o<t.length;o++)t[o]=jt(t[o],e,r,n,i);return r&&r(o,t),t}function Ct(t){return t.D===pt?t.toJSON():function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(_t(t,void 0,0))return}else{if(T(t))return v(t);if(t instanceof B){const e=t.i;return null==e?"":"string"==typeof e?e:t.i=v(e)}}}return t}(t)}function Dt(t,e,r=ht){if(null!=t){if(_&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var n=at(t);return 2&n?t:(e&&=0===n||!!(32&n)&&!(64&n||!(16&n)),e?ct(t,-12293&(34|n)):Nt(t,Dt,4&n?ht:r,!0,!0))}return t.D===pt&&(r=t.m,t=2&(n=ut(r))?t:Mt(t,r,n,!0)),t}}function Mt(t,e,r,n){return t=t.constructor,Ft=e=function(t,e,r){const n=r||2&e?ht:lt,i=!!(32&e);return t=function(t,e,r){var n=(t=nt(t)).length;const i=256&e?t[n-1]:void 0;for(n+=i?-1:0,e=512&e?1:0;e<n;e++)t[e]=r(t[e]);if(i){e=t[e]={};for(const t in i)e[t]=r(i[t])}return t}(t,e,(t=>Dt(t,i,n))),it(t,32|(r?2:0)),t}(e,r,n),e=new t(e),Ft=void 0,e}function Gt(t){const e=t.m,r=ut(e);return 2&r?Mt(t,e,r,!1):t}function Rt(t){return Wt(t=t.m,ut(t),2)}function Wt(t,e,r,n){if(-1===r)return null;if(r>=ft(e)){if(256&e)return t[t.length-1][r]}else{var i=t.length;if(n&&256&e&&null!=(n=t[i-1][r]))return n;if((e=r+(+!!(512&e)-1))<i)return t[e]}}function zt(t,e,r){const n=t.m;let i=ut(n);return vt(i),Ht(n,i,e,r),t}function Ht(t,e,r,n,i){const o=ft(e);if(r>=o||i){let s=e;if(256&e)i=t[t.length-1];else{if(null==n)return s;i=t[o+(+!!(512&e)-1)]={},s|=256}return i[r]=n,r<o&&(t[r+(+!!(512&e)-1)]=void 0),s!==e&&ct(t,s),s}return t[r+(+!!(512&e)-1)]=n,256&e&&(r in(t=t[t.length-1])&&delete t[r]),e}function $t(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function qt(t,e,r,n){t=t.m;let i=ut(t);vt(i),Ht(t,i,e,("0"===n?0===Number(r):r===n)?void 0:r)}function Kt(t,e,r){var n=t.m,i=ut(n),o=Wt(n,i,r,!1);return(e=Bt(o,e,i))!==o&&null!=e&&Ht(n,i,r,e,!1),null==(n=e)||(t=t.m,2&(i=ut(t))||(o=Gt(n))!==n&&Ht(t,i,r,n=o,!1)),n}function Yt(t,e,r){return null==r&&(r=void 0),zt(t,e,r)}function Jt(t,e){return t=st(t,2,!!(2&e)),t=st(t,32,!!(32&e)&&!0),st(t,2048,!1)}function Xt(t,e,r,n){t=t.m;var i=ut(t);vt(i);var o=!!(2&i),s=o?1:2;const a=1===s;s=2===s,d&&=!o,o=Wt(t,i,e),o=Array.isArray(o)?o:dt;var u=at(o);const c=!!(4&u);if(!c){var l=u;0===l&&(l=Jt(l,i)),u=o;var h=i,f=!!(2&(l=st(l,1,!0)));f&&(h=st(h,2,!0));let t=!f,e=!0,n=0,s=0;for(;n<u.length;n++){const i=Bt(u[n],r,h);if(i instanceof r){if(!f){const r=!!(2&at(i.m));t&&=!r,e&&=r}u[s++]=i}}s<n&&(u.length=s),l=st(l,4,!0),l=st(l,16,e),l=st(l,8,t),ct(u,l),f&&Object.freeze(u),u=l}if(l=!!(8&u)||a&&!o.length,d&&!l){$t(u)&&(o=nt(o),u=Jt(u,i),i=Ht(t,i,e,o));var d=o;for(l=0;l<d.length;l++)(h=d[l])!==(f=Gt(h))&&(d[l]=f);u=st(u,8,!0),u=st(u,16,!d.length),ct(d,u)}$t(u)||(d=u,a&&(u=st(u,!o.length||16&u&&(!c||32&u)?2:2048,!0)),u!==d&&ct(o,u),a&&Object.freeze(o)),s&&$t(u)&&(o=nt(o),u=Jt(u,i),ct(o,u),Ht(t,i,e,o)),e=o,r=null!=n?n:new r,e.push(r),2&at(r.m)?ot(e,8):ot(e,16)}function Qt(t,e,r){qt(t,e,Tt(r),0)}function Zt(t,e,r){if(null!=r&&"string"!=typeof r)throw Error();qt(t,e,r,"")}function te(t,e,r){t=t.m;const n=ut(t);vt(n);var i=2&n;let o=Wt(t,n,e);Array.isArray(o)||(o=dt);const s=!!(32&n);let a=at(o);if(0===a&&s&&!i?(a|=33,ct(o,a)):1&a||(a|=1,ct(o,a)),i?(2&a||it(o,34),Object.freeze(o)):(2&a||2048&a)&&(o=nt(o),i=1,s&&(i|=32),ct(o,i),Ht(t,n,e,o)),"string"!=typeof r)throw Error();o.push(r)}var ee=class{constructor(t,e){this.m=Vt(t,e)}toJSON(){return re(this,Nt(this.m,Ct,void 0,void 0,!1),!0)}s(){return!!(2&at(this.m))}};function re(t,e,r){var n=a?void 0:t.constructor.v;const i=ut(r?t.m:e);if(!(t=e.length))return e;let o,s;if(yt(r=e[t-1])){t:{var u=r;let t={},e=!1;for(var c in u){let r=u[c];if(Array.isArray(r)){let t=r;(_t(r,n,+c)||mt(r)&&0===r.size)&&(r=null),r!=t&&(e=!0)}null!=r?t[c]=r:e=!0}if(e){for(var l in t){u=t;break t}u=null}}u!=r&&(o=!0),t--}for(c=+!!(512&i)-1;0<t&&(r=e[l=t-1],l-=c,null==r||_t(r,n,l)||mt(r)&&0===r.size);t--)s=!0;return o||s?(e=Array.prototype.slice.call(e,0,t),u&&e.push(u),e):e}function ne(t,e){if(Array.isArray(e)){var r=at(e);if(4&r)return e;for(var n=0,i=0;n<e.length;n++){const r=t(e[n]);null!=r&&(e[i++]=r)}return i<n&&(e.length=i),ct(e,-12289&(5|r)),2&r&&Object.freeze(e),e}}ee.prototype.D=pt,ee.prototype.toString=function(){return re(this,this.m,!1).toString()};const ie=Symbol(),oe=Symbol();function se(t){let e=t[oe];if(!e){const r=le(t);e=(t,e)=>de(t,e,r),t[oe]=e}return e}const ae=Symbol();function ue(t){return t.i}function ce(t,e){let r,n;const i=t.i;return(t,o,s)=>i(t,o,s,n||=le(e).i,r||=se(e))}function le(t){var e=t[ae];if(e)return e;var r=ue,n=ce;(e=t[ae]={}).i=function(t){switch(typeof t){case"boolean":return kt||=[0,void 0,!0];case"number":return 0<t?void 0:0===t?Ut||=[0,void 0]:[-t,void 0];case"string":return[0,t];case"object":return t}}(t[0]);let i=0;var o=t[++i];o&&o.constructor===Object&&(e.K=o,"function"==typeof(o=t[++i])&&(e.l=o,e.j=t[++i],o=t[++i]));const s={};for(;Array.isArray(o)&&"number"==typeof o[0]&&0<o[0];){for(var a=0;a<o.length;a++)s[o[a]]=o;o=t[++i]}for(a=1;void 0!==o;){let f;"number"==typeof o&&(a+=o,o=t[++i]);var u=void 0;if(o instanceof rt?f=o:(f=Ue,i--),f.I){o=t[++i],u=t;var c=i;"function"==typeof o&&(o=o(),u[c]=o),u=o}let d=a+1;for("number"==typeof(o=t[++i])&&0>o&&(d-=o,o=t[++i]);a<d;a++){var l=s[a];c=e;var h=a;l=u?n(f,u):r(f),c[h]=l}}return he in t&&ie in t&&ae in t&&(t.length=0),e}const he=Symbol();function fe(t,e){var r=t[e];if(r)return r;if((r=t.K)&&(r=r[e])){var n=(r=Array.isArray(r)?r[0]instanceof rt?r:[ke,r]:[r,void 0])[0].i;if(r=r[1]){const e=se(r),i=le(r).i;r=(r=t.j)?r(i,e):(t,r,o)=>n(t,r,o,i,e)}else r=n;return t[e]=r}}function de(t,e,r){var n=ut(t),i=+!!(512&n)-1,o=t.length,s=512&n?1:0;const a=o+(256&n?-1:0);for(;s<a;s++){const n=t[s];if(null==n)continue;const o=s-i,a=fe(r,o);a&&a(e,n,o)}if(256&n){t=t[o-1];for(let s in t)n=+s,Number.isNaN(n)||null!=(i=t[s])&&(o=fe(r,n))&&o(e,i,n)}}function pe(t){return new rt(t,!1)}function ge(t,e,r){null!=(e=Et(e))&&null!=e&&(Y(t.i,8*r),J(t.i,e))}function me(t,e,r){null!=(e=null==e||"boolean"==typeof e?e:"number"==typeof e?!!e:void 0)&&(Y(t.i,8*r),t.i.i.push(e?1:0))}function ye(t,e,r){null!=(e=xt(e))&&tt(t,r,i(e))}function _e(t,e,r,n,i){null!=(e=e instanceof ee?e.m:Array.isArray(e)?Vt(e,n[0],n[1]):void 0)&&(r=Q(t,r),i(e,t),Z(t,r))}function be(t,e,r){null!=(e=Et(e))&&(e=parseInt(e,10),Y(t.i,8*r),J(t.i,e))}var ve,we=pe((function(t,e,r){null!=(e=null==e||"number"==typeof e?e:"NaN"===e||"Infinity"===e||"-Infinity"===e?Number(e):void 0)&&(Y(t.i,8*r+5),t=t.i,(r=U||=new DataView(new ArrayBuffer(8))).setFloat32(0,+e,!0),j=0,e=V=r.getUint32(0,!0),t.i.push(e>>>0&255),t.i.push(e>>>8&255),t.i.push(e>>>16&255),t.i.push(e>>>24&255))})),Se=pe((function(t,e,r){t:if(null!=e){if(It(e)){if("string"==typeof e){var n=Math.trunc(Number(e));if(Number.isSafeInteger(n))e=String(n);else if(-1!==(n=e.indexOf("."))&&(e=e.substring(0,n)),!("-"===e[0]?20>e.length||20===e.length&&-922337<Number(e.substring(0,7)):19>e.length||19===e.length&&922337>Number(e.substring(0,6))))if(M(e),e=V,2147483648&(n=j))if(k())e=""+(BigInt(0|n)<<BigInt(32)|BigInt(e>>>0));else{const[t,r]=G(e,n);e="-"+C(t,r)}else e=C(e,n);break t}if("number"==typeof e){if(e=Math.trunc(e),!Number.isSafeInteger(e)){N(e),n=V;var i=j;(e=2147483648&i)&&(i=~i>>>0,0==(n=1+~n>>>0)&&(i=i+1>>>0)),n=4294967296*i+(n>>>0),e=e?-n:n}break t}}e=void 0}null!=e&&("string"==typeof e&&H(e),null!=e&&(Y(t.i,8*r),"number"==typeof e?(t=t.i,N(e),K(t,V,j)):(r=H(e),K(t.i,r.j,r.i))))})),Ae=pe((function(t,e,r){t:if(null!=e){if(It(e)){if("string"==typeof e){var n=Math.trunc(Number(e));Number.isSafeInteger(n)&&0<=n?e=String(n):(-1!==(n=e.indexOf("."))&&(e=e.substring(0,n)),Lt(e)||(M(e),e=C(V,j)));break t}if("number"==typeof e){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(t){if(0>t){N(t);const e=C(V,j);return t=Number(e),Number.isSafeInteger(t)?t:e}return Lt(String(t))?t:(N(t),4294967296*j+(V>>>0))}(e);break t}}e=void 0}null!=e&&("string"==typeof e&&R(e),null!=e&&(Y(t.i,8*r),"number"==typeof e?(t=t.i,N(e),K(t,V,j)):(r=R(e),K(t.i,r.j,r.i))))})),Ie=pe(ge),Te=new rt((function(t,e,r){if(null!=(e=ne(Et,e))&&e.length){r=Q(t,r);for(let r=0;r<e.length;r++)J(t.i,e[r]);Z(t,r)}}),!1),Ee=pe(ge),Pe=pe(me),Oe=pe(me),Le=new rt((function(t,e,r){if(null!=(e=ne(xt,e)))for(let a=0;a<e.length;a++){var n=t,o=r,s=e[a];null!=s&&tt(n,o,i(s))}}),!1),xe=pe(ye),Be=pe(ye),Fe=pe(ye),ke=new rt(_e,!0),Ue=new rt(_e,!0);ve=new rt((function(t,e,r,n,i){if(Array.isArray(e))for(let o=0;o<e.length;o++)_e(t,e[o],r,n,i)}),!0);var Ve=new rt(_e,!0),je=pe(be),Ne=pe(be);function Ce(t){return function(){const e=new class{constructor(){this.l=[],this.j=0,this.i=new class{constructor(){this.i=[]}length(){return this.i.length}end(){const t=this.i;return this.i=[],t}}}};de(this.m,e,le(t)),X(e,e.i.end());const r=new Uint8Array(e.j),n=e.l,i=n.length;let o=0;for(let t=0;t<i;t++){const e=n[t];r.set(e,o),o+=e.length}return e.l=[r],r}}function De(t,e){if(null!=e)if(Array.isArray(e))zt(t,2,Nt(e,Ct,void 0,void 0,!1));else{if(!("string"==typeof e||e instanceof B||T(e)))throw Error("invalid value in Any.value field: "+e+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");if(null!=e)if("string"==typeof e)e=e?new B(e,P):x();else if(e.constructor!==B){if(!T(e))throw Error();e=e.length?new B(new Uint8Array(e),P):x()}qt(t,2,e,x())}}var Me=class extends ee{constructor(t){super(t)}},Ge=[0,xe,pe((function(t,e,r){if(null!=e){if(e instanceof ee){const n=e.P;return void(n&&(e=n(e),null!=e&&tt(t,r,F(e).buffer)))}if(Array.isArray(e))return}null!=(e=null==e||"string"==typeof e||T(e)||e instanceof B?e:void 0)&&tt(t,r,F(e).buffer)}))],Re={},We=[-2,Re,Pe];Re[336783863]=[0,Fe,Pe,-1,Ie,[0,[1,2,3,4,5],Ve,[0],Ve,[0,Pe,Fe,Pe,je,-1,new rt((function(t,e,r){if(null!=(e=ne(Et,e))&&e.length){r=Q(t,r);for(let r=0;r<e.length;r++)J(t.i,e[r]);Z(t,r)}}),!1),Fe,-1,[0,Pe,-1],je],Ve,[0,Fe,-2],Ve,[0,Ie,Pe,-3],Ve,[0,Ie,je,Pe,-1,Te,je,-1]],[0,Fe]];var ze=class extends ee{constructor(t){super(t)}},He=[0,xe,Oe],$e=[0,Se,-1,Oe,-3,Se,Te,xe,Ee,Se,-1,Oe,Ee,Oe,-2,xe],qe=[-1,{}],Ke=[0,Fe,1,qe],Ye=[0,Fe,Le,qe],Je=class extends ee{constructor(t){super(t,500)}C(t){return Yt(this,7,t)}};Je.v=[3,4,5,6,8,13,17,1005];var Xe=[-500,xe,-1,Le,-3,We,ve,Ge,Ee,-1,Ke,Ye,ve,He,xe,$e,Ee,Le,987,Le],Qe=[0,xe,-1,qe],Ze=[-500,Fe,-1,[-1,{}],998,Fe],tr=[-500,Fe,Le,-1,[-2,{},Pe],997,Le,-1],er=[-500,Fe,Le,qe,998,Le],rr=class extends ee{constructor(){super(void 0,500)}C(t){return Yt(this,1001,t)}};rr.v=[1,6,7,9,10,15,16,17,14,1002],rr.prototype.i=Ce([-500,ve,Xe,4,ve,Ze,ve,tr,Ee,ve,er,Le,Ee,Ke,Ye,ve,Qe,Le,-2,$e,xe,-1,Oe,979,qe,ve,Ge]);var nr=class extends ee{constructor(t){super(t)}};let ir;const or=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function sr(){if(void 0===ir)try{await WebAssembly.instantiate(or),ir=!0}catch{ir=!1}return ir}async function ar(t,e=""){const r=await sr()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${r}.js`,wasmBinaryPath:`${e}/${t}_${r}.wasm`}}var ur=class{};async function cr(t){if("function"!=typeof importScripts){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((t,r)=>{e.addEventListener("load",(()=>{t()}),!1),e.addEventListener("error",(t=>{r(t)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}ur.forVisionTasks=function(t){return ar("vision",t)},ur.forTextTasks=function(t){return ar("text",t)},ur.forGenAiTasks=function(t){return ar("genai",t)},ur.forAudioTasks=function(t){return ar("audio",t)},ur.isSimdSupported=function(){return sr()};function lr(t,e,r){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),r(e=t.h.stringToNewUTF8(e)),t.h._free(e)}function hr(t,e,r){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const n=new Uint32Array(e.length);for(let r=0;r<e.length;r++)n[r]=t.h.stringToNewUTF8(e[r]);e=t.h._malloc(4*n.length),t.h.HEAPU32.set(n,e>>2),r(e);for(const e of n)t.h._free(e);t.h._free(e)}function fr(t,e,r){t.h.simpleListeners=t.h.simpleListeners||{},t.h.simpleListeners[e]=r}function dr(t,e,r){let n=[];t.h.simpleListeners=t.h.simpleListeners||{},t.h.simpleListeners[e]=(t,e,i)=>{e?(r(n,i),n=[]):n.push(t)}}const pr=(gr=class{constructor(t,e){this.l=!0,this.h=t,this.i=null,this.j=0,this.o="function"==typeof this.h._addIntToInputStream,void 0!==e?this.h.canvas=e:((t="undefined"==typeof OffscreenCanvas)||(t=(t=navigator.userAgent).includes("Safari")&&!t.includes("Chrome")),t?(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.h.canvas=document.createElement("canvas")):this.h.canvas=new OffscreenCanvas(1,1))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph((new TextEncoder).encode(t),!1)}setGraph(t,e){const r=t.length,n=this.h._malloc(r);this.h.HEAPU8.set(t,n),e?this.h._changeBinaryGraph(r,n):this.h._changeTextGraph(r,n),this.h._free(n)}configureAudio(t,e,r,n,i){this.h._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),lr(this,n||"input_audio",(n=>{lr(this,i=i||"audio_header",(i=>{this.h._configureAudio(n,i,t,e,r)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.h._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.h.gpuOriginForWebTexturesIsBottomLeft=t}attachErrorListener(t){this.h.errorListener=t}attachEmptyPacketListener(t,e){this.h.emptyPacketListeners=this.h.emptyPacketListeners||{},this.h.emptyPacketListeners[t]=e}addAudioToStream(t,e,r){this.addAudioToStreamWithShape(t,0,0,e,r)}addAudioToStreamWithShape(t,e,r,n,i){const o=4*t.length;this.j!==o&&(this.i&&this.h._free(this.i),this.i=this.h._malloc(o),this.j=o),this.h.HEAPF32.set(t,this.i/4),lr(this,n,(t=>{this.h._addAudioToInputStream(this.i,e,r,t,i)}))}addGpuBufferToStream(t,e,r){lr(this,e,(e=>{if(!this.h.canvas)throw Error("No OpenGL canvas configured.");e?this.h._bindTextureToStream(e):this.h._bindTextureToCanvas();const n=this.h.canvas.getContext("webgl2")||this.h.canvas.getContext("webgl");if(!n)throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");this.h.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),this.h.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,o]=void 0!==t.videoWidth?[t.videoWidth,t.videoHeight]:void 0!==t.naturalWidth?[t.naturalWidth,t.naturalHeight]:void 0!==t.displayWidth?[t.displayWidth,t.displayHeight]:[t.width,t.height];!this.l||i===this.h.canvas.width&&o===this.h.canvas.height||(this.h.canvas.width=i,this.h.canvas.height=o);const[s,a]=[i,o];this.h._addBoundTextureToStream(e,s,a,r)}))}addBoolToStream(t,e,r){lr(this,e,(e=>{this.h._addBoolToInputStream(t,e,r)}))}addDoubleToStream(t,e,r){lr(this,e,(e=>{this.h._addDoubleToInputStream(t,e,r)}))}addFloatToStream(t,e,r){lr(this,e,(e=>{this.h._addFloatToInputStream(t,e,r)}))}addIntToStream(t,e,r){lr(this,e,(e=>{this.h._addIntToInputStream(t,e,r)}))}addStringToStream(t,e,r){lr(this,e,(e=>{lr(this,t,(t=>{this.h._addStringToInputStream(t,e,r)}))}))}addStringRecordToStream(t,e,r){lr(this,e,(e=>{hr(this,Object.keys(t),(n=>{hr(this,Object.values(t),(i=>{this.h._addFlatHashMapToInputStream(n,i,Object.keys(t).length,e,r)}))}))}))}addProtoToStream(t,e,r,n){lr(this,r,(r=>{lr(this,e,(e=>{const i=this.h._malloc(t.length);this.h.HEAPU8.set(t,i),this.h._addProtoToInputStream(i,t.length,e,r,n),this.h._free(i)}))}))}addEmptyPacketToStream(t,e){lr(this,t,(t=>{this.h._addEmptyPacketToInputStream(t,e)}))}addBoolVectorToStream(t,e,r){lr(this,e,(e=>{const n=this.h._allocateBoolVector(t.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(const e of t)this.h._addBoolVectorEntry(n,e);this.h._addBoolVectorToInputStream(n,e,r)}))}addDoubleVectorToStream(t,e,r){lr(this,e,(e=>{const n=this.h._allocateDoubleVector(t.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(const e of t)this.h._addDoubleVectorEntry(n,e);this.h._addDoubleVectorToInputStream(n,e,r)}))}addFloatVectorToStream(t,e,r){lr(this,e,(e=>{const n=this.h._allocateFloatVector(t.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(const e of t)this.h._addFloatVectorEntry(n,e);this.h._addFloatVectorToInputStream(n,e,r)}))}addIntVectorToStream(t,e,r){lr(this,e,(e=>{const n=this.h._allocateIntVector(t.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(const e of t)this.h._addIntVectorEntry(n,e);this.h._addIntVectorToInputStream(n,e,r)}))}addStringVectorToStream(t,e,r){lr(this,e,(e=>{const n=this.h._allocateStringVector(t.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(const e of t)lr(this,e,(t=>{this.h._addStringVectorEntry(n,t)}));this.h._addStringVectorToInputStream(n,e,r)}))}addBoolToInputSidePacket(t,e){lr(this,e,(e=>{this.h._addBoolToInputSidePacket(t,e)}))}addDoubleToInputSidePacket(t,e){lr(this,e,(e=>{this.h._addDoubleToInputSidePacket(t,e)}))}addFloatToInputSidePacket(t,e){lr(this,e,(e=>{this.h._addFloatToInputSidePacket(t,e)}))}addIntToInputSidePacket(t,e){lr(this,e,(e=>{this.h._addIntToInputSidePacket(t,e)}))}addStringToInputSidePacket(t,e){lr(this,e,(e=>{lr(this,t,(t=>{this.h._addStringToInputSidePacket(t,e)}))}))}addProtoToInputSidePacket(t,e,r){lr(this,r,(r=>{lr(this,e,(e=>{const n=this.h._malloc(t.length);this.h.HEAPU8.set(t,n),this.h._addProtoToInputSidePacket(n,t.length,e,r),this.h._free(n)}))}))}addBoolVectorToInputSidePacket(t,e){lr(this,e,(e=>{const r=this.h._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const e of t)this.h._addBoolVectorEntry(r,e);this.h._addBoolVectorToInputSidePacket(r,e)}))}addDoubleVectorToInputSidePacket(t,e){lr(this,e,(e=>{const r=this.h._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const e of t)this.h._addDoubleVectorEntry(r,e);this.h._addDoubleVectorToInputSidePacket(r,e)}))}addFloatVectorToInputSidePacket(t,e){lr(this,e,(e=>{const r=this.h._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const e of t)this.h._addFloatVectorEntry(r,e);this.h._addFloatVectorToInputSidePacket(r,e)}))}addIntVectorToInputSidePacket(t,e){lr(this,e,(e=>{const r=this.h._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const e of t)this.h._addIntVectorEntry(r,e);this.h._addIntVectorToInputSidePacket(r,e)}))}addStringVectorToInputSidePacket(t,e){lr(this,e,(e=>{const r=this.h._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const e of t)lr(this,e,(t=>{this.h._addStringVectorEntry(r,t)}));this.h._addStringVectorToInputSidePacket(r,e)}))}attachBoolListener(t,e){fr(this,t,e),lr(this,t,(t=>{this.h._attachBoolListener(t)}))}attachBoolVectorListener(t,e){dr(this,t,e),lr(this,t,(t=>{this.h._attachBoolVectorListener(t)}))}attachIntListener(t,e){fr(this,t,e),lr(this,t,(t=>{this.h._attachIntListener(t)}))}attachIntVectorListener(t,e){dr(this,t,e),lr(this,t,(t=>{this.h._attachIntVectorListener(t)}))}attachDoubleListener(t,e){fr(this,t,e),lr(this,t,(t=>{this.h._attachDoubleListener(t)}))}attachDoubleVectorListener(t,e){dr(this,t,e),lr(this,t,(t=>{this.h._attachDoubleVectorListener(t)}))}attachFloatListener(t,e){fr(this,t,e),lr(this,t,(t=>{this.h._attachFloatListener(t)}))}attachFloatVectorListener(t,e){dr(this,t,e),lr(this,t,(t=>{this.h._attachFloatVectorListener(t)}))}attachStringListener(t,e){fr(this,t,e),lr(this,t,(t=>{this.h._attachStringListener(t)}))}attachStringVectorListener(t,e){dr(this,t,e),lr(this,t,(t=>{this.h._attachStringVectorListener(t)}))}attachProtoListener(t,e,r){fr(this,t,e),lr(this,t,(t=>{this.h._attachProtoListener(t,r||!1)}))}attachProtoVectorListener(t,e,r){dr(this,t,e),lr(this,t,(t=>{this.h._attachProtoVectorListener(t,r||!1)}))}attachAudioListener(t,e,r){this.h._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),fr(this,t,((t,r)=>{t=new Float32Array(t.buffer,t.byteOffset,t.length/4),e(t,r)})),lr(this,t,(t=>{this.h._attachAudioListener(t,r||!1)}))}finishProcessing(){this.h._waitUntilIdle()}closeGraph(){this.h._closeGraph(),this.h.simpleListeners=void 0,this.h.emptyPacketListeners=void 0}},class extends gr{N(){this.h._registerModelResourcesGraphService()}});var gr;async function mr(t,e){const r=await(async(t,e,r)=>{var n=zr;if(t&&await cr(t),!self.ModuleFactory)throw Error("ModuleFactory not set.");if(e&&(await cr(e),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&r&&((t=self.Module).locateFile=r.locateFile,r.mainScriptUrlOrBlob&&(t.mainScriptUrlOrBlob=r.mainScriptUrlOrBlob)),r=await self.ModuleFactory(self.Module||r),self.ModuleFactory=self.Module=void 0,new n(r,null)})(t.wasmLoaderPath,t.assetLoaderPath,{locateFile:e=>e.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&e.endsWith(".data")?t.assetBinaryPath.toString():e});return await r.C(e),r}async function yr(t,e){return mr(t,e)}function _r(t){try{const e=t.u.length;if(1===e)throw Error(t.u[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.u.map((t=>t.message)).join(", "))}finally{t.u=[]}}function br(t,e){t.G=Math.max(t.G,e)}var vr=class{constructor(t){this.i=t,this.u=[],this.G=0,this.i.setAutoRenderToScreen(!1)}setGraph(t,e){this.i.attachErrorListener(((t,e)=>{this.u.push(Error(e))})),this.i.N(),this.i.setGraph(t,e),_r(this)}finishProcessing(){this.i.finishProcessing(),_r(this)}close(){this.i.closeGraph()}};vr.prototype.close=vr.prototype.close;var wr=class extends ee{constructor(t){super(t)}},Sr=[0,Ne,Ee,we,-1,Ie],Ar=class extends ee{constructor(){super()}};function Ir(t){if(t.i)try{t.h._free(t.j)}catch{}finally{t.i=!1}}var Tr=class{constructor(t,e){this.h=t,this.l=e,this.j=this.h._malloc(e)>>>0,this.o=this.h.HEAPU8,this.i=!!this.j}get offset(){if(!this.i)throw Error("WasmFileReference has been freed.");return this.j}get size(){if(!this.i)throw Error("WasmFileReference has been freed.");return this.l}set(t,e){this.o.set(t,this.j+(e??0))}},Er=class extends ee{constructor(){super()}};Er.v=[4],Er.prototype.i=Ce([0,xe,2,Le,Ee]);var Pr=class extends ee{constructor(){super()}},Or=[0,Oe,-5],Lr=[0,xe,Ae,-1,Ne],xr=class extends ee{constructor(){super()}},Br=[0,Ee,-6,1,Ee,1,[0,Oe,Ne,-2],[0,Oe,we],Ne,-2,[0,Oe,-1,Ne,we,je],1,Oe],Fr=class extends ee{constructor(){super()}};Fr.v=[5];var kr=[0,Br,Ee,1,Ee,Le],Ur=[0,ve,Lr,kr,Ee],Vr=[0,Ee,Oe],jr=class extends ee{constructor(){super()}};jr.v=[29],jr.prototype.i=Ce([0,xe,8,Or,1,Ee,1,Ee,Ur,Vr,1,Ne,xe,kr,Ur,Ee,5,Ne,Te,je,Sr]);var Nr=class extends ee{constructor(){super()}},Cr=class extends ee{constructor(){super()}},Dr=[2,4];Cr.prototype.i=Ce([0,Dr,Ee,Be,Ee,Ve,[0,xe,-1],Oe]);const Mr=function(t){return class extends t{static async O(){var t={requiredFeatures:["shader-f16"],requiredLimits:{maxStorageBufferBindingSize:524550144,maxBufferSize:524550144}},e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw Error("Unable to request adapter from navigator.gpu; ensure WebGPU is enabled.");let r;const n=[];for(const r of t?.requiredFeatures??[])e.features.has(r)?n.push(r):console.warn(`WebGPU feature ${r} is not supported.`);t={...t,requiredFeatures:n};try{r=await e.requestDevice(t)}catch(t){throw console.error("Unable to initialize WebGPU with the requested features."),t}return e=await e.requestAdapterInfo(),r.adapterInfo=e,r}M(t){if(e)"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&(e.id="canvas_webgpu");else var e=new OffscreenCanvas(1,1);e.getContext("webgpu").configure({device:t,format:navigator.gpu.getPreferredCanvasFormat()}),this.h.preinitializedWebGPUDevice=t}}}(function(t){return class extends t{J(t){lr(this,"model_file_reference",(e=>{this.h._addRawDataSpanToInputSidePacket(t.offset,t.size,e)}))}}}(class extends pr{}));class Gr extends Mr{}function Rr(){return Gr.O()}function Wr(t){var e=function(t){const e=new rr;te(e,10,"text_in"),te(e,16,"model_file_reference"),te(e,15,"text_out"),te(e,15,"text_end");var r=new Je;Zt(r,2,"TokenizerInputBuildCalculator"),te(r,3,"text_in"),te(r,4,"prompt"),Xt(e,1,Je,r),Zt(r=new Je,2,"TfLiteModelCalculator"),te(r,5,"MODEL_SPAN:model_file_reference"),te(r,6,"SHARED_MODEL:__side_packet_0"),Xt(e,1,Je,r),Zt(r=new Me,1,"type.googleapis.com/odml.infra.proto.TokenizerCalculatorOptions");var n=new Cr,i=Ot(Rt(t.j))??0;Qt(n,1,i),Zt(i=new Nr,2,"spm_vocab_model"),null==i&&(i=void 0);var o=n.m;let s=ut(o);vt(s);var a=s;let u=0;for(let t=0;t<Dr.length;t++){const e=Dr[t];null!=Wt(o,a,e)&&(0!==u&&(a=Ht(o,a,u)),u=e)}return(a=u)&&4!==a&&null!=i&&(s=Ht(o,s,a)),Ht(o,s,4,i),Qt(n,3,2),De(r,n.i()),Zt(n=new Je,2,"TokenizerCalculator"),Xt(n,8,Me,r),te(n,5,"TFLITE_MODEL:__side_packet_0"),te(n,3,"PROMPT:prompt"),te(n,6,"PROCESSOR:__input_side_1"),te(n,6,"BYTES_TO_UNICODE_MAPPING:__input_side_2"),te(n,4,"IDS:__stream_0"),Xt(e,1,Je,n),Zt(r=new Me,1,"type.googleapis.com/odml.infra.proto.LlmGpuCalculatorOptions"),Qt(n=new jr,12,3),Zt(n,1,"llm.tflite"),Qt(n,14,0),Qt(n,22,1),i=Kt(t.j,wr,3),Yt(n,31,i),qt(i=new Pr,1,!0,!1),qt(i,2,!0,!1),qt(i,5,!0,!1),Yt(n,10,i),i=new Fr,Qt(o=new xr,1,1),t=Ot(Rt(t.j))??0,Qt(o,2,t),Yt(i,1,o),Yt(n,20,i),De(r,n.i()),Zt(t=new Je,2,"LlmGpuCalculator"),Xt(t,8,Me,r),te(t,3,"INPUT_PROMPT_IDS:__stream_0"),te(t,3,"FINISH:finish"),te(t,5,"SHARED_MODEL:__side_packet_0"),te(t,4,"DECODED_IDS:__stream_3"),te(t,4,"OUTPUT_END:__stream_4"),Zt(r=new ze,1,"FINISH"),qt(r,2,!0,!1),Xt(t,13,ze,r),Xt(e,1,Je,t),Zt(t=new Je,2,"IsPacketPresentCalculator"),te(t,3,"__stream_4"),te(t,4,"text_end"),Xt(e,1,Je,t),Zt(t=new Me,1,"type.googleapis.com/odml.infra.proto.DetokenizerCalculatorOptions"),Qt(r=new Er,5,1),te(r,4,"<eos>"),te(r,4,"<|endoftext|>"),De(t,r.i()),Zt(r=new Je,2,"DetokenizerCalculator"),Xt(r,8,Me,t),te(r,3,"IDS:__stream_3"),te(r,5,"PROCESSOR:__input_side_1"),te(r,5,"BYTES_TO_UNICODE_MAPPING:__input_side_2"),te(r,4,"FINISH:finish"),te(r,4,"WORDS:text_out"),Xt(e,1,Je,r),e}(t);t.i.attachStringVectorListener("text_out",((e,r)=>{var n=0===t.A.length;null==e||0===e.length?n="":(e=(e=(e=e[0]).replaceAll("▁"," ")).replaceAll("<0x0A>","\n"),n&&(e=e.trimStart()),n=e.split("\\[eod\\]",1)[0]),t.A.push(n),t.B&&t.B(n,!1),br(t,r)})),t.i.attachEmptyPacketListener("text_out",(e=>{br(t,e)})),t.i.attachBoolListener("text_end",((e,r)=>{t.F=!1,t.H&&t.H(t.A.join("")),t.B&&t.B("",!0),br(t,r)})),t.i.attachEmptyPacketListener("text_end",(e=>{br(t,e)})),t.l&&t.i.J(t.l),e=e.i(),t.setGraph(new Uint8Array(e),!0),t.finishProcessing(),t.l&&Ir(t.l)}var zr=class extends vr{constructor(t,e){if(super(new Gr(t,e)),this.A=[],this.F=!1,Yt(t=this.j=new Ar,1,e=new nr),this.o=new wr,Yt(this.j,3,this.o),zt(this.j,2,Pt(512)),t=this.o,!Number.isFinite(1))throw wt("enum");qt(t,1,1,0),Qt(this.o,2,1),qt(this.o,4,St(1),0)}C(t){if(t.baseOptions?.gpuOptions?.device&&this.i.M(t.baseOptions.gpuOptions.device),"maxTokens"in t&&zt(this.j,2,Pt(t.maxTokens??512)),"topK"in t&&(Qt(this.o,2,t.topK??1),t.topK&&!t.randomSeed&&console.warn("'topK' option ignored; it requires randomSeed to be set.")),"temperature"in t&&(qt(this.o,4,St(t.temperature??1),0),t.temperature&&!t.randomSeed&&console.warn("'temperature' option ignored; it requires randomSeed to be set.")),t.randomSeed&&zt(this.o,5,Tt(t.randomSeed)),t.baseOptions?.modelAssetPath||t.baseOptions?.modelAssetBuffer){if(t.baseOptions.modelAssetPath&&t.baseOptions.modelAssetBuffer)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(this.l&&Ir(this.l),t.baseOptions.modelAssetPath)return async function(t,e){var r=await fetch(e.toString());e=Number(r.headers.get("content-length")),t=new Tr(t,e);let n=0;for(r=r?.body?.getReader();;){const{value:e,done:i}=await r.read();if(i)break;t.set(e,n),n+=e.byteLength}if(e!==n)throw Ir(t),Error(`File could not be fully loaded to memory, so was not retained. Loaded ${n}/${e} bytes before failure`);return t}(this.i.h,t.baseOptions.modelAssetPath).then((t=>{this.l=t,Wr(this)}));t.baseOptions.modelAssetBuffer&&(this.l=function(t,e){return(t=new Tr(t,e.length)).set(e),t}(this.i.h,t.baseOptions.modelAssetBuffer),t.baseOptions.modelAssetBuffer=void 0)}return Wr(this),Promise.resolve()}get baseOptions(){return Kt(this.j,nr,1)}set baseOptions(t){Yt(this.j,1,t)}L(t,e){if(this.F)throw Error("Previous invocation is still processing.");return e&&(this.B=e),this.A.length=0,this.F=!0,this.i.addStringToStream(t,"text_in",this.G+1),this.finishProcessing(),new Promise((t=>{this.H=t}))}close(){this.l&&Ir(this.l),super.close()}};zr.prototype.generateResponse=zr.prototype.L,zr.prototype.setOptions=zr.prototype.C,zr.createWebGpuDevice=Rr,zr.createFromModelPath=async function(t,e){return yr(t,e={baseOptions:{gpuOptions:{device:await Rr()},modelAssetPath:e}})},zr.createFromModelBuffer=async function(t,e){return yr(t,e={baseOptions:{gpuOptions:{device:await Rr()},modelAssetBuffer:e}})},zr.createFromOptions=async function(t,e){if(!e.baseOptions?.gpuOptions?.device){const t=await Rr();e.baseOptions=e.baseOptions??{},e.baseOptions.gpuOptions=e?.baseOptions?.gpuOptions??{},e.baseOptions.gpuOptions.device=t}return yr(t,e)};export{ur as FilesetResolver,zr as LlmInference,vr as TaskRunner};
//# sourceMappingURL=genai_bundle_mjs.js.map
