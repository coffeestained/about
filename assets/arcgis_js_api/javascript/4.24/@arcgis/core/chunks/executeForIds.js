/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{p as t}from"./utils5.js";import{a as r,b as o}from"./query.js";import s from"../rest/support/Query.js";async function a(o,a,n){const e=t(o);return r(e,s.from(a),{...n}).then((t=>t.data.count))}async function n(r,a,n){const e=t(r);return o(e,s.from(a),{...n}).then((t=>t.data.objectIds))}export{a,n as e};
