// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./basicInterfaces"],function(d,e){return function(){function b(a){this._material=a.material;this._techniqueRepository=a.techniqueRep;this._output=a.output}var c=b.prototype;c.dispose=function(){this._techniqueRepository.release(this._technique)};c.ensureTechnique=function(a,f,g=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(a,this._material.getConfiguration(g,f),this._technique)};c.ensureResources=function(a){return e.ResourceState.LOADED};
d._createClass(b,[{key:"technique",get:function(){return this._technique}}]);return b}()});