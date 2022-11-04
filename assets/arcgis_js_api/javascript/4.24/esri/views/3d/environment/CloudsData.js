// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(b,c){b.ensureClouds=function(a){return c.isSome(a)&&!a.running};b.isReadyCloudsData=function(a){return c.isSome(a)&&c.isSome(a.cubeMap)&&0<a.coverage};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});