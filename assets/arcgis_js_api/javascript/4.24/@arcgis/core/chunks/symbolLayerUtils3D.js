/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../core/lang.js";import{f as e}from"./mathUtils.js";import{f as t}from"./aaBoundingBox.js";function n(t,{isPrimitive:n,width:r,depth:s,height:o}){const a=n?10:1;if(null==r&&null==o&&null==s)return[a*t[0],a*t[1],a*t[2]];const c=e(r,s,o);let i;for(let e=0;e<3;e++){const n=c[e];if(null!=n){i=n/t[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=t[e]*i);return c}const r=t(-.5,-.5,-.5,.5,.5,.5),s=t(-.5,-.5,0,.5,.5,1),o=t(-.5,-.5,0,.5,.5,.5);function a(e){switch(e){case"sphere":case"cube":case"diamond":return r;case"cylinder":case"cone":case"inverted-cone":return s;case"tetrahedron":return o;default:return}}const c=["butt","square","round"],i=[...c,"none"],u=["miter","bevel","round"];export{u as a,n as b,c as l,a as o,i as p};
