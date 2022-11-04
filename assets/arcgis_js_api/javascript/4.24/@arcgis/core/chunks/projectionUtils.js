/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e,i as o,e as r}from"./maybe.js";import{tryProjectWithZConversion as i}from"../geometry/projection.js";import{g as a}from"./ElevationProvider.js";function t(t,n,s,p=!1){const c=i(t,n);return e(c)?null:(c.hasZ&&!p||!o(s)||(c.z=r(a(s,c),0)),c)}function n(e,o,r){r.warnOnce(`Failed to project analysis geometry (id: '${e.id}'), projection from spatial reference (wkid: '${o.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}export{t as a,n as l};
