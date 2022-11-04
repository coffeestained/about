/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t={}){this._options=t}toQueryParams(t){if(!t)return null;const e=t.toJSON(),o={};return Object.keys(e).forEach((t=>{const n=this._options[t];if(n){const r="boolean"!=typeof n&&n.name?n.name:t,s="boolean"!=typeof n&&n.getter?n.getter(e):e[t];null!=s&&(o[r]=(t=>{if(!Array.isArray(t))return!1;const[e]=t;return"number"==typeof e||"string"==typeof e})(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else o[t]=e[t]}),this),o}}function e(e){return new t(e)}export{e as c};
