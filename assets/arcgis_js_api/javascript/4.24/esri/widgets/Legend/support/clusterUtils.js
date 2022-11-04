// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../renderers/visualVariables/SizeVariable"],function(c,d){const e=(a,b)=>{a=a.featuresTilingScheme.getClosestInfoForScale(a.scale).level;return null!=b&&b.levels?b.levels[a]:null};c.getClusterSizeVariable=function(a,b){if(!(a&&"visualVariables"in a&&a.visualVariables))return null;a=a.visualVariables.find(f=>"size"===f.type);return(b=e(b,a))?new d({field:a.field,minSize:b[2].size,minDataValue:b[2].value,maxSize:b[3].size,maxDataValue:b[3].value}):null};Object.defineProperties(c,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});