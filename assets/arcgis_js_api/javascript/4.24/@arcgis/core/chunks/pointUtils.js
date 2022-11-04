/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{I as t}from"./mat4f64.js";import{h as r}from"./mathUtils.js";import{projectPointToVector as n}from"../geometry/projection.js";import{y as o}from"./aaBoundingBox.js";import{g as a,a as s}from"../geometry/Polygon.js";import{m as i}from"./dehydratedFeatures.js";import{Y as l,a7 as c}from"./lineUtils.js";import{O as m,a as p}from"./CameraSpace.glsl.js";const u=r();function f(r,a,s,i,l,p,f,g){const d=s?s.length:0,h=r.clippingExtent;if(n(a,u,r.elevationProvider.spatialReference),e(h)&&!o(h,u))return null;n(a,u,r.renderCoordsHelper.spatialReference);const y=r.localOriginFactory.getOrigin(u),j=new m({castShadow:!1,metadata:{layerUid:p,graphicUid:f,usesVerticalDistanceToGround:!0}});for(let e=0;e<d;e++){const r=t;j.addGeometry(s[e],i[e],r,y,g)}return{object:j,sampledElevation:c(j,a,r.elevationProvider,r.renderCoordsHelper,l)}}function g(e,t,r){const o=e.elevationContext,a=r.spatialReference;n(t,u,a),o.centerPointInElevationSR=i(u[0],u[1],t.hasZ?u[2]:0,a)}function d(e){switch(e.type){case"point":return e;case"polygon":case"extent":return p(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=a(t,s(t)/2);return i(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function h(e,t,r,n,o){const a=new Float64Array(3*e.length),s=new Float64Array(a.length);e.forEach(((e,t)=>{a[3*t+0]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));const i=l(a,t,0,s,0,a,0,a.length/3,r,n,o),c=null!=i;return{numVertices:e.length,position:a,mapPosition:s,projectionSuccess:c,sampledElevation:i}}export{f as c,g as e,h as g,d as p};
