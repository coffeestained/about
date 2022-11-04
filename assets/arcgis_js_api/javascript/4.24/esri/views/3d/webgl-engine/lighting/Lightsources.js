// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3f64"],function(a,b){a.AmbientLight=function(c=b.create()){this.intensity=c};a.FillLight=function(c=b.create(),d=b.fromValues(.57735,.57735,.57735)){this.intensity=c;this.direction=d};a.MainLight=function(c=b.create(),d=b.fromValues(.57735,.57735,.57735),e=!0,f=1,g=1){this.intensity=c;this.direction=d;this.castShadows=e;this.specularStrength=f;this.environmentStrength=g};a.SphericalHarmonicsAmbientLight=function(){this.r=[0];this.g=[0];this.b=[0]};Object.defineProperties(a,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});