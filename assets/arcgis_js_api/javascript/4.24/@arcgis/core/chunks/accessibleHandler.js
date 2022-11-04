/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{m as n}from"./widgetUtils.js";function t(){return function(t,e){if(!t[e])throw new TypeError(`Cannot auto bind undefined function '${e}'`);return{value:(o=t[e],function(t,...e){!function(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}(t)?o.call(this,t,...e):n(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click())})};var o}}export{t as a};
