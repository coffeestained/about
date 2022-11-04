// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./Uniform","../shaderTechnique/BindType"],function(b,f,a,g){a=function(c){function d(e,h){return c.call(this,e,"mat3",g.BindType.Pass,(k,l,m)=>k.setUniformMatrix3fv(e,h(l,m)))||this}f._inheritsLoose(d,c);return d}(a.Uniform);b.Matrix3PassUniform=a;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});