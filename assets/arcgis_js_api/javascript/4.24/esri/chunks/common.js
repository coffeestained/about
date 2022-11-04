// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function c(b){return b*h}function d(b){return b*k}function e(b,f){return Math.abs(b-f)<=1E-6*Math.max(1,Math.abs(b),Math.abs(f))}const g=Math.random,h=Math.PI/180,k=180/Math.PI,l=Object.freeze(Object.defineProperty({__proto__:null,EPSILON:1E-6,RANDOM:g,toRadian:c,toDegree:d,equals:e},Symbol.toStringTag,{value:"Module"}));a.EPSILON=1E-6;a.RANDOM=g;a.common=l;a.equals=e;a.toDegree=d;a.toRadian=c});