// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Collection","../../core/maybe","../Extent"],function(g,h,k,l){g.graphicsExtent=function(a){if(!a||!a.length)return null;let c=k.unwrap(h.isCollection(a)?a.getItemAt(0).geometry:a[0].geometry),d=c.extent&&c.extent.clone(),b=c;null===d&&(d=new l(b.x,b.y,b.x,b.y,c.spatialReference));for(let e=1;e<a.length;e++){b=c=k.unwrap(h.isCollection(a)?a.getItemAt(e).geometry:a[e].geometry);let f=c.extent;null===f&&(f=new l(b.x,b.y,b.x,b.y,c.spatialReference));d=d.union(f)}return 0>
d.width&&0>d.height?null:d};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});