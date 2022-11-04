// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","./euclideanAreaMeasurementUtils","./geodesicAreaMeasurementUtils"],function(d,f,b,g){d.autoAreaByDrapedStatus=function(c,a,e=b.createEuclideanPlanarAreaCache()){return a?(a=g.geodesicArea(c),f.isSome(a)?a:b.euclideanHorizontalPlanarArea(c,e)):b.euclideanPlanarArea(c,e)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});