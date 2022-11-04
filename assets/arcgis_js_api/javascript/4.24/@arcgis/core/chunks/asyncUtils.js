/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as r}from"./maybe.js";import{eachAlways as a,throwIfAbortError as o}from"../core/promiseUtils.js";function t(r,o,t){return a(r.map(((r,a)=>o.apply(t,[r,a]))))}async function e(r,o,t){return(await a(r.map(((r,a)=>o.apply(t,[r,a]))))).map((r=>r.value))}async function n(a){if(r(a))return{ok:!1,error:new Error("no promise provided")};try{return{ok:!0,value:await a}}catch(r){return{ok:!1,error:r}}}async function u(r){try{return{ok:!0,value:await r}}catch(r){return o(r),{ok:!1,error:r}}}function i(r){if(!0===r.ok)return r.value;throw r.error}export{u as a,i as b,t as f,e as m,n as r};
