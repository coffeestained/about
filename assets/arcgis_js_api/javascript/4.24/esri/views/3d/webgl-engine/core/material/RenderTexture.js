// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/promiseUtils"],function(d,f,b,g){let k=function(){function c(a,h){this._textureRep=a;this._disposed=!1;a=this._textureRep.acquire(h);g.isPromiseLike(a)?(a.then(e=>{this._disposed?b.releaseMaybe(e):this._textureRef=e}),this.loadPromise=a):this._textureRef=a}c.prototype.dispose=function(){this._textureRef=b.releaseMaybe(this._textureRef);this._disposed=!0};f._createClass(c,[{key:"glTexture",
get:function(){return b.isSome(this._textureRef)?this._textureRef.glTexture:null}}]);return c}();d.RenderTexture=k;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});