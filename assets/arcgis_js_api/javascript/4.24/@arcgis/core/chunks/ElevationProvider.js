/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{e}from"./maybe.js";function a(e){return"point"===e.type}class r{constructor(e,a=null,r=0){this.array=e,this.spatialReference=a,this.offset=r}}function t(e){return"array"in e}function n(r,n,i="ground"){if(a(n))return r.getElevation(n.x,n.y,n.z||0,n.spatialReference,i);if(t(n)){let a=n.offset;return r.getElevation(n.array[a++],n.array[a++],n.array[a]||0,e(n.spatialReference,r.spatialReference),i)}return r.getElevation(n[0],n[1],n[2]||0,r.spatialReference,i)}export{r as S,t as a,n as g,a as i};
