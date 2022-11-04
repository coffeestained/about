// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function e(a,c){for(const b of a.children)b.localName in c&&(a=c[b.localName],"function"===typeof a?(a=a(b))&&e(b,a):e(b,a))}function*f(a,c){for(const b of a.children)b.localName in c&&(a=c[b.localName],"function"===typeof a?yield a(b):yield*f(b,a))}d.iterateXML=f;d.visitXML=e;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});