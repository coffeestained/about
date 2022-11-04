// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../utils ./operations/query ../support/Query ../../geometry/Extent".split(" "),function(c,g,n,h,k,l,m){function b(){b=g._asyncToGenerator(function*(a,d,e){a=h.parseUrl(a);return k.executeQueryForExtent(a,l.from(d),{...e}).then(f=>({count:f.data.count,extent:m.fromJSON(f.data.extent)}))});return b.apply(this,arguments)}c.executeForExtent=function(a,d,e){return b.apply(this,arguments)};Object.defineProperties(c,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});