/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{canProjectWithoutEngine as o}from"../geometry/projection.js";import{c as r,S as t,W as s}from"./projectionEllipsoid.js";function i(i){const c=r(i),e=c===t?s:c;return o(i,e)?e:i}export{i as c};
