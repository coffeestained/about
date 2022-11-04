/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{S as i}from"../geometry/SpatialReference.js";import{V as e}from"./ViewingMode.js";function r(r,S){return null!=r&&(null==S||(S===e.Local?!r.isGeographic||r.isWGS84||r.wkid===i.CGCS2000:r.isWebMercator||r.isWGS84||r.wkid===i.CGCS2000||r.wkid===i.GCSMARS2000||r.wkid===i.GCSMARS2000_SPHERE||r.wkid===i.GCSMOON2000))}export{r as i};
