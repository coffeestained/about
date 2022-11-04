// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../centroid","../OptimizedFeature","../OptimizedGeometry"],function(c,d,e,f,g){c.optimizedFeatureQueryEngineAdapter={getObjectId(a){return a.objectId},getAttributes(a){return a.attributes},getAttribute(a,b){return a.attributes[b]},cloneWithGeometry(a,b){return new f.OptimizedFeature(b,a.attributes,null,a.objectId)},getGeometry(a){return a.geometry},getCentroid(a,b){d.isNone(a.centroid)&&(a.centroid=e.getCentroidOptimizedGeometry(new g,a.geometry,b.hasZ,b.hasM));
return a.centroid}};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});