// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/boundedPlane"],function(d,a){const b=a.create();return function(){function c(){this._plane=a.create()}d._createClass(c,[{key:"isEnabled",get:function(){return!a.equals(this.plane,b)}},{key:"plane",get:function(){return this._plane},set:function(e){a.copy(e||b,this._plane)}}]);return c}()});