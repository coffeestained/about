// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ../operations/relation ../support/RelationParameters".split(" "),function(e,g,h,f,k,l){function d(){d=g._asyncToGenerator(function*(b,a,c){a=l.from(a);a=k.relationToRESTParameters(a);b=f.parseUrl(b);c=f.asValidOptions({...b.query,f:"json",...a},c);return h(b.path+"/relation",c).then(({data:m})=>m.relations)});return d.apply(this,arguments)}e.relation=function(b,a,c){return d.apply(this,arguments)};Object.defineProperties(e,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});