/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import s from"../rest/geoprocessor/GPOptions.js";import r,{c as t,d as e}from"../rest/support/JobInfo.js";import o from"../rest/support/GPMessage.js";async function a(r,a,n,m){return n=s.from(n||{}),t(r,"execute",n,a,m).then((s=>{const r=s.data.results||[],t=s.data.messages||[];return{results:r.map(e),messages:t.map((s=>o.fromJSON(s)))}}))}async function n(e,o,a,n){return a=s.from(a||{}),t(e,"submitJob",a,o,n).then((s=>{const t=r.fromJSON(s.data);return t.sourceUrl=e,t}))}export{a as e,n as s};
