/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{m as o,r as a}from"./asyncUtils.js";import r from"../core/Collection.js";import l from"../core/Loadable.js";import{a as t}from"./maybe.js";async function s(o,a){return await o.load(),i(o,a)}async function i(s,i){const n=[],c=(...o)=>{for(const a of o)t(a)||(Array.isArray(a)?c(...a):r.isCollection(a)?a.forEach((o=>c(o))):l.isLoadable(a)&&n.push(a))};i(c);let e=null;if(await o(n,(async o=>{var r;!1!==(await a((r=o,"loadAll"in r&&"function"==typeof r.loadAll?o.loadAll():o.load()))).ok||e||(e=o)})),e)throw e.loadError;return s}export{i as a,s as l};
