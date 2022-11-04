// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){const b=new Set;a.hasPendingLoading=function(){return 0<b.size};a.registerLoading=function(c){b.add(c);c.finally(()=>b.delete(c))};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});