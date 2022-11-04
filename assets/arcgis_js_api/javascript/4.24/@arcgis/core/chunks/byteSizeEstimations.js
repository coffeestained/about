/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(t){if(!t)return 0;let e=32;for(const r in t)if(t.hasOwnProperty(r)){const a=t[r];switch(typeof a){case"string":e+=n(a);break;case"number":e+=16;break;case"boolean":e+=4}}return e}function r(n,t){return 32+n.length*t}var a;!function(n){n[n.KILOBYTES=1024]="KILOBYTES",n[n.MEGABYTES=1048576]="MEGABYTES",n[n.GIGABYTES=1073741824]="GIGABYTES"}(a||(a={}));export{a as B,r as a,n as b,t as c,e};
