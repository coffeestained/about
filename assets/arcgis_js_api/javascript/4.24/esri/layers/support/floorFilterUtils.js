// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function e(a,c){if(null==a||!a.length)return null;a=a.filter(b=>""!==b).map(b=>`'${b}'`);a.push("''");return`${c} IN (${a.join(",")}) OR ${c} IS NULL`}d.getFloorFilterClause=function(a){var c;const b=a.layer;return"floorInfo"in b&&null!=(c=b.floorInfo)&&c.floorField&&"floors"in a.view?e(a.view.floors,b.floorInfo.floorField):null};d.getLayerFloorFilterClause=function(a,c){var b;return"floorInfo"in c&&null!=(b=c.floorInfo)&&b.floorField?e(a,c.floorInfo.floorField):null};
Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});