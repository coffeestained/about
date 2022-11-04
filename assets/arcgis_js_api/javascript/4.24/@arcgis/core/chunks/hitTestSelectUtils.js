/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as t}from"./maybe.js";async function n(n,e){if("2d"===n.type)return n.hitTest(e);const r=await n.hitTest(e);if(0===r.results.length)return r;const i=r.results[0],u=t(i.distance)?i.distance*(1+s):i.distance,a=r.results.findIndex((t=>t.distance>u));return-1!==a&&(r.results=r.results.slice(0,a)),r}const s=.05;function e(n){return t(n)&&"graphic"===n.type}function r(t){return t.find(e)??null}function i(t){return t.filter(e)}export{i as a,r as f,n as h};
