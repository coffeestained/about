// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],function(c,d,e,f){let g=function(){function b(){this.enabled=!0;this._time=0}b.prototype.advance=function(a){if(e.isSome(a.forcedTime)){if(this._time===a.forcedTime)return!1;this._time=a.forcedTime;return!0}return this.enabled&&0!==a.dt?(this._time+=a.dt,!0):!1};d._createClass(b,[{key:"time",get:function(){return f.Milliseconds(this._time)}}]);return b}();c.AnimationTimer=g;Object.defineProperties(c,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});