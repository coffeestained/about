// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/projection","../../geometry/projectionEllipsoid"],function(d,e,b){d.computeEuclideanMeasurementSR=function(c){var a=b.getSphericalPCPF(c);a=a===b.SphericalECEFSpatialReference?b.WGS84ECEFSpatialReference:a;return e.canProjectWithoutEngine(c,a)?a:c};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});