// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../CIMCursor","../CIMOperators"],function(b,f,g){let l=function(){function c(){}c.getPlacement=function(a,d,h,k){const e=g.getPlacementOperator(d);if(!e)return null;a=f.cloneAndDecodeGeometry(a);return e.execute(a,d,h,k)};return c}();b.CIMMarkerPlacementHelper=l;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});