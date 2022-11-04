/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as r}from"../core/lang.js";function n(r,n,t=!1){return i(r,n,t)}function t(r,n){if(null!=n)return n[r]||e(r.split("."),!1,n)}function o(r,n,t){const o=r.split("."),i=o.pop(),s=e(o,!0,t);s&&i&&(s[i]=n)}function e(r,n,t){let o=t;for(const t of r){if(null==o)return;if(!(t in o)){if(!n)return;o[t]={}}o=o[t]}return o}function i(n,t,o){return t?Object.keys(t).reduce(((n,e)=>{let s=n[e],a=t[e];return s===a?n:void 0===s?(n[e]=r(a),n):(Array.isArray(a)||Array.isArray(n)?(s=s?Array.isArray(s)?n[e]=s.concat():n[e]=[s]:n[e]=[],a&&(Array.isArray(a)||(a=[a]),o?a.forEach((r=>{s.includes(r)||s.push(r)})):n[e]=a.concat())):a&&"object"==typeof a?n[e]=i(s,a,o):n.hasOwnProperty(e)&&!t.hasOwnProperty(e)||(n[e]=a),n)}),n||{}):n}export{n as d,t as g,o as s};
