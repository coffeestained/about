// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],function(k,f){return function(){function h(){}var g=h.prototype;g.bindFeature=function(d,b,c){};g.write=function(d,b,c,e){var a;if(k.isNone(this._effects)||0===(null==(a=this._effects)?void 0:a.length))return this._write(d,b,e);c=f.CIMEffectHelper.executeEffects(this._effects,b.readLegacyGeometryForDisplay(),e.geometryEngine);for(a=f.CIMEffectHelper.next(c);a;)this._write(d,b,e,a),a=f.CIMEffectHelper.next(c)};
g._write=function(d,b,c,e){};return h}()});