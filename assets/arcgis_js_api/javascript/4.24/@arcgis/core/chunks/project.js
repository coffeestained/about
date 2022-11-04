/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../request.js";import{j as t}from"./ensureType.js";import{getJsonType as r,getGeometryType as o}from"../geometry/support/jsonUtils.js";import{p as s,a as n}from"./utils5.js";import p from"../rest/support/ProjectParameters.js";function a(e){return{geometryType:r(e[0]),geometries:e.map((e=>e.toJSON()))}}function m(e,t,r){const s=o(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=r,t}))}const i=t(p);async function u(t,o,p){o=i(o);const a=s(t),u={...a.query,f:"json",...o.toJSON()},c=o.outSpatialReference,f=r(o.geometries[0]),j=n(u,p);return e(a.path+"/project",j).then((({data:{geometries:e}})=>m(e,f,c)))}export{m as d,a as e,u as p};
