// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./object"],function(d,g){function f(b){return null==b?"":b}const h=/\{([^\}]+)\}/g;d.escapeRegExpString=function(b,a){return b.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,c=>a&&a.includes(c)?c:`\\${c}`)};d.numericHash=function(b){let a=0;for(let c=0;c<b.length;c++)a=(a<<5)-a+b.charCodeAt(c),a|=0;return a};d.replace=function(b,a){return b.replace(h,"object"===typeof a?(c,e)=>f(g.getDeepValue(e,a)):(c,e)=>f(a(e)))};d.stripHTML=function(b){return(new DOMParser).parseFromString(b||"",
"text/html").body.innerText||""};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});