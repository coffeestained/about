// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers"],function(d){return function(){function c(a,b=29){this.name=a;this._counter=0;this._items=Array(b)}c.prototype.record=function(a){this._items[++this._counter%this._items.length]=a};d._createClass(c,[{key:"median",get:function(){return this._items.slice().sort((a,b)=>a-b)[Math.floor(this._items.length/2)]}},{key:"average",get:function(){return this._items.reduce((a,b)=>a+b,0)/this._items.length}},{key:"last",get:function(){return this._items[this._counter%
this._items.length]}}]);return c}()});