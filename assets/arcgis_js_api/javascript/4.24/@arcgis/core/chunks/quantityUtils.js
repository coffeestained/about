/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t}from"./maybe.js";import{o as n,c as u}from"./unitUtils.js";function e(t,u){return{type:n(u),value:t,unit:u}}function a(t,u){return{type:n(u),value:t,unit:u}}function i(t,u){return{type:n(u),value:t,unit:u}}function r(t,u,e="arithmetic"){return{type:n(u),value:t,unit:u,rotationType:e}}function o(t,n){return e(u(t.value,t.unit,n),n)}function s(n,e){return t(n)?e:t(e)||n.value>u(e.value,e.unit,n.unit)?n:e}const c=a(0,"meters");export{i as a,e as b,a as c,r as d,s as m,o as t,c as z};
