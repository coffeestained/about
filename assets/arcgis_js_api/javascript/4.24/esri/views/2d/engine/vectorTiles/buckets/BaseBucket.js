// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(function(){return function(){function c(a,d,e){this.layerExtent=4096;this._features=[];this.layer=a;this.zoom=d;this._spriteInfo=e;this._filter=a.getFeatureFilter()}var b=c.prototype;b.pushFeature=function(a){this._filter&&!this._filter.filter(a,this.zoom)||this._features.push(a)};b.hasFeatures=function(){return 0<this._features.length};b.getResources=function(a,d,e){};return c}()});