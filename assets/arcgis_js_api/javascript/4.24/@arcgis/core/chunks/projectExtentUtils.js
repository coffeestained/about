/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as e,a as r}from"./maybe.js";import{project as t}from"../geometry/support/webMercatorUtils.js";import{projectGeometry as o}from"./geometryServiceUtils.js";function s(s){const l=s.view.spatialReference,i=s.layer.fullExtent,a=e(i)&&i.spatialReference;if(r(i)||!a)return Promise.resolve(null);if(a.equals(l))return Promise.resolve(i.clone());const n=t(i,l);return e(n)?Promise.resolve(n):s.view.state.isLocal?o(i,l,s.layer.portalItem).then((e=>!s.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}export{s as t};
