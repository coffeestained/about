// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../jsonMap","./property"],function(c,d,f){c.enumeration=function(b,a={}){var e;b=b instanceof d.JSONMap?b:new d.JSONMap(b,a);b={type:(null!=(e=null==a?void 0:a.ignoreUnknown)?e:1)?b.apiValues:String,json:{type:b.jsonValues,read:null!=a&&a.readOnly?!1:{reader:b.read},write:{writer:b.write}}};void 0!==(null==a?void 0:a.readOnly)&&(b.readOnly=!!a.readOnly);void 0!==(null==a?void 0:a.default)&&(b.json.default=a.default);void 0!==(null==a?void 0:a.name)&&(b.json.name=a.name);return f.property(b)};
Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});