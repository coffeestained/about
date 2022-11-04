/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{E as r,D as t}from"../core/lang.js";import{a as o,i}from"./maybe.js";import{f as e}from"./unitUtils.js";function l(t){if(o(t))return null;if(t instanceof n)return s(t);const i=t.tileInfo;if(o(i))return null;const l=r(i.lods);return o(l)?null:l.resolution*e(i.spatialReference)}function s(n){if(o(n))return null;const r=n.layers.items.map(u).filter(i);return t(r)??null}function u(n){return"tileInfo"in n?l(n):null}export{l as a,s as g};
