// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],function(f,h,d){d=function(g){function e(c){var a=g.call(this,!0)||this;a._onChange=c;a._value="mouse";a._x=null;a._y=null;a.registerIncoming("pointer-move",b=>{a._setValue("touch"===b.data.native.pointerType?"touch":"mouse",b.data.x,b.data.y)});return a}h._inheritsLoose(e,g);e.prototype._setValue=function(c,a,b){if(c!==this._value||this._x!==a||this._y!==b)this._value=c,this._x=a,this._y=b,this._onChange(c,a,b)};return e}(d.InputHandler);
f.LatestPointer=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});