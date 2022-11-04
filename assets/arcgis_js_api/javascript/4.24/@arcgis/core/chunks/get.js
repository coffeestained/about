/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t,g as n,i as r}from"./utils.js";function e(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const s=n(e);return r(s,i)?s.get(i):e[i]}function i(t,n,r){if(null==t)return t;const s=e(n[r],t);return!s&&r<n.length-1?void 0:r===n.length-1?s:i(s,n,r+1)}function s(n,r,s=0){return"string"!=typeof r||r.includes(".")?i(n,t(r),s):e(r,n)}function u(t,n){return s(t,n)}function o(t,n){return void 0!==s(n,t)}export{o as e,u as g,s as v};
