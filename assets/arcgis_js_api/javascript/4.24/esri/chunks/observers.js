// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(b,c){b.createObserver=function(a,d,e){a="intersection"===a?window.IntersectionObserver:"mutation"===a?window.MutationObserver:window.ResizeObserver;return c.Build.isBrowser?new a(d,e):void 0}});