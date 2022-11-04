/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as n}from"./maybe.js";function e(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function a(e,t,a){return n(e)||e>a&&(0===t||e<t)}function c(n,e){return n>0||e>0}function i(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}export{i as e,e as h,c as i,t as o,a as s};
