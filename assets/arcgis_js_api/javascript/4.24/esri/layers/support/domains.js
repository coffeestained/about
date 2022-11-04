// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../core/has ./CodedValueDomain ./Domain ./InheritedDomain ./RangeDomain".split(" "),function(a,f,c,g,d,e){f={key:"type",base:g,typeMap:{range:e,"coded-value":c,inherited:d}};a.CodedValueDomain=c;a.DomainBase=g;a.InheritedDomain=d;a.RangeDomain=e;a.fromJSON=function(b){if(!b||!b.type)return null;switch(b.type){case "range":return e.fromJSON(b);case "codedValue":return c.fromJSON(b);case "inherited":return d.fromJSON(b)}return null};a.types=f;Object.defineProperties(a,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});