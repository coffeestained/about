/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as t,f as n}from"./unitUtils.js";function e(e,i){const r=i||e.extent,a=e.width,s=n(r&&r.spatialReference);return r&&a?r.width/a*s*t*96:0}function i(e,i){return e/(n(i)*t*96)}function r(e,i){return e*(n(i)*t*96)}function a(t,n){const e=t.extent,r=t.width,a=i(n,e.spatialReference);return e.clone().expand(a*r/e.width)}export{r as a,i as b,a as c,e as g};
