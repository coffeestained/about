// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../multiOriginJSONSupportUtils"],function(d,f){d.updateOrigins=function(a){a&&a.writtenProperties&&a.writtenProperties.forEach(({target:b,propName:e,newOrigin:c})=>{f.isMultiOriginJSONMixin(b)&&c&&b.originOf(e)!==c&&b.updateOrigin(e,c)})};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});