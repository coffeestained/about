/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{J as t}from"./jsonMap.js";const o=new t({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],l=[];let r=0,s=0;for(const i of t){const t=s;let u=i[0][0],a=i[0][1];n[s++]=u,n[s++]=a;let c=0;for(let t=1;t<i.length;++t){const o=u,e=a;u=i[t][0],a=i[t][1],c+=a*o-u*e,n[s++]=u,n[s++]=a}o(c/2),c>0?(t-r>0&&(e(r,t,n,l),r=t),l.length=0):c<0&&t-r>0?l.push(.5*(t-r)):s=t}s-r>0&&e(r,s,n,l)}function l(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:l}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===l||"s8"===l)}export{n as a,l as c,e as t};
