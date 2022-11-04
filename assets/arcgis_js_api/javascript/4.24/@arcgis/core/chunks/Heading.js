/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{c as e}from"./widgetUtils.js";import{t as r}from"./jsxFactory.js";function i(t,i){const a=s(t.level),l=`h${a}`;return delete t.level,r(l,{...t,class:e("esri-widget__heading",t.class),role:"heading","aria-level":String(a)},i)}function s(e){return t(Math.ceil(e),1,6)}function a(t,e=1){return s(t+e)}export{i as H,a as i};
