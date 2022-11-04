// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./Uniform","../shaderTechnique/BindType"],function(l,c,d,m){d=function(e){function n(a,f,p,q){switch(f){case m.BindType.Pass:var b=e.call(this,a,"mat4",f,(g,h,k)=>g.setUniformMatrix4fv(a,p(h,k)),q)||this;return c._assertThisInitialized(b);case m.BindType.Draw:return b=e.call(this,a,"mat4",f,(g,h,k)=>g.setUniformMatrix4fv(a,p(h,k)),q)||this,c._assertThisInitialized(b)}return b}c._inheritsLoose(n,e);return n}(d.Uniform);l.Matrix4sUniform=
d;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});