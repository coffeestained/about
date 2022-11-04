// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ../operations/lengths ../support/LengthsParameters".split(" "),function(e,g,h,f,k,l){function d(){d=g._asyncToGenerator(function*(b,a,c){a=l.from(a);a=k.lengthsToRESTParameters(a);b=f.parseUrl(b);c=f.asValidOptions({...b.query,f:"json",...a},c);return h(b.path+"/lengths",c).then(({data:m})=>m)});return d.apply(this,arguments)}e.lengths=function(b,a,c){return d.apply(this,arguments)};Object.defineProperties(e,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});