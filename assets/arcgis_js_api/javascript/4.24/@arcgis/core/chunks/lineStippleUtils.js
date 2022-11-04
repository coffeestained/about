/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as o,a as t}from"./maybe.js";const s={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},d={dash:s.dash,"dash-dot":[...s.dash,...s.dot],dot:s.dot,"long-dash":s["long-dash"],"long-dash-dot":[...s["long-dash"],...s.dot],"long-dash-dot-dot":[...s["long-dash"],...s.dot,...s.dot],none:null,"short-dash":s["short-dash"],"short-dash-dot":[...s["short-dash"],...s["short-dot"]],"short-dash-dot-dot":[...s["short-dash"],...s["short-dot"],...s["short-dot"]],"short-dot":s["short-dot"],solid:null};function h(o,t=2){return{pattern:[o,o],pixelRatio:t}}function a(s){return o(s)&&"style"===s.type?(h=s.style,o(h)?function(o,s=2){return t(o)?o:{pattern:o.slice(),pixelRatio:s}}(d[h],8):null):null;var h}export{h as c,a as g};
