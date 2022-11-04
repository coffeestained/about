/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as r}from"../core/lang.js";import{urlToObject as t}from"../core/urlUtils.js";function e(r,t){return t?{...t,query:{...r,...t.query}}:{query:r}}function n(e){return"string"==typeof e?t(e):r(e)}function o(r,t,e){const n={};for(const i in r){if("declaredClass"===i)continue;const s=r[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[i]=[];for(let r=0;r<s.length;r++)n[i][r]=o(s[r])}else if("object"==typeof s)if(s.toJSON){const r=s.toJSON(e&&e[i]);n[i]=t?r:JSON.stringify(r)}else n[i]=t?s:JSON.stringify(s);else n[i]=s}return n}export{e as a,o as e,n as p};
