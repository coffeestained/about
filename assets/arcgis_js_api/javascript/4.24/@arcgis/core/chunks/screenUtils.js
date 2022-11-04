/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function t(n){return n?n/72*96:0}function r(n){return n?72*n/96:0}function u(t){if("string"==typeof t){const u=t.match(n);if(u){const n=Number(u[1]),e=u[3]&&u[3].toLowerCase(),o="-"===t.charAt(0),s="px"===e?r(n):n;return o?-s:s}return console.warn("screenUtils.toPt: input not recognized!"),null}return t}function e(n=0,t=0){return{x:n,y:t}}function o(n=0,t=0){return[n,t]}function s(n=0,t=0){return[n,t]}function c(n=0,t=0,r=0){return[n,t,r]}function i(n){return n}function a(n){return n}function f(n){return n}function p(n,t){return t?(t[0]=n.x,t[1]=n.y,t.length>2&&(t[2]=0),t):[n.x,n.y]}export{t as a,o as b,a as c,c as d,i as e,e as f,s as g,f as h,r as p,p as s,u as t};
