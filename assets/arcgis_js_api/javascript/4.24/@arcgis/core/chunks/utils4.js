/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as t,a as s}from"./maybe.js";import{m as r,c as n,j as o,t as a}from"./mat4.js";import{c as e}from"./mat4f64.js";import{s as i}from"./Util.js";import{e as m}from"./doublePrecisionUtils.js";function f(t,r){return s(t)&&(t=[]),t.push(r),t}function c(t,r){if(s(t))return null;const n=t.filter((t=>t!==r));return 0===n.length?null:n}function u(s){return!!t(s)&&!s.visible}function l(s,e,m){const f=s.origin.vec3;i(b,-f[0],-f[1],-f[2]),t(s.transformation)?r(e,b,s.transformation):n(e,b),m&&(o(m,e),a(m,m))}function p(t,s,r,n,o){j[0]=t.get(s,0),j[1]=t.get(s,1),j[2]=t.get(s,2),m(j,g,3),r.set(o,0,g[0]),n.set(o,0,g[1]),r.set(o,1,g[2]),n.set(o,1,g[3]),r.set(o,2,g[4]),n.set(o,2,g[5])}const j=new Float64Array(3),g=new Float32Array(6),b=e();export{f as a,l as c,p as e,u as i,c as r};
