// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(b,g,h,c){b.NoiseTextureRenderMode=void 0;(function(a){a[a.Full=0]="Full";a[a.WeatherMap=1]="WeatherMap";a[a.COUNT=2]="COUNT"})(b.NoiseTextureRenderMode||(b.NoiseTextureRenderMode={}));let f=function(a){function d(){var e=a.apply(this,arguments)||this;e.mode=b.NoiseTextureRenderMode.Full;return e}g._inheritsLoose(d,a);return d}(c.ShaderTechniqueConfiguration);
h.__decorate([c.parameter({count:b.NoiseTextureRenderMode.COUNT})],f.prototype,"mode",void 0);b.NoiseTextureAtlasTechniqueConfiguration=f;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});