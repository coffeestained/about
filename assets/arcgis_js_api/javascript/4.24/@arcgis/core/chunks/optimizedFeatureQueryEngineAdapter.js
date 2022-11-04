/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t}from"./maybe.js";import{g as e}from"./centroid.js";import{a as o,O as r}from"./OptimizedGeometry.js";const i={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(o,i)=>(t(o.centroid)&&(o.centroid=e(new r,o.geometry,i.hasZ,i.hasM)),o.centroid)};export{i as o};
