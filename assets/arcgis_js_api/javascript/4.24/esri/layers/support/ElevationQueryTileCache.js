// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let f=function(){function d(a){this.store=a}var b=d.prototype;b.destroy=function(){this.store.destroy()};b.get=function(a){return this.store.get(a)};b.put=function(a,e){this.store.put(a,e,e.values.byteLength+256)};return d}();c.ElevationQueryTileCache=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});