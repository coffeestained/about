// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../utils ./operations/queryTopFeatures ../support/TopFeaturesQuery ../../geometry/Extent".split(" "),function(d,f,m,g,h,k,l){function c(){c=f._asyncToGenerator(function*(b,a,e){b=g.parseUrl(b);a=yield h.executeQueryForTopExtents(b,k.from(a),{...e});return{count:a.data.count,extent:l.fromJSON(a.data.extent)}});return c.apply(this,arguments)}d.executeForTopExtents=function(b,a,e){return c.apply(this,arguments)};Object.defineProperties(d,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});