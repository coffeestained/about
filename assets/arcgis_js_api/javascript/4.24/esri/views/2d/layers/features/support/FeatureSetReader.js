// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../geometry ../../../../../core/has ../../../../../core/maybe ../../../../../layers/graphics/centroid ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedGeometry ./StaticBitSet ../../../../../geometry/support/jsonUtils".split(" "),function(p,t,k,g,l,u,v,w,x,y){var h,q,r;let m=0;k=null!=(h=g("featurelayer-simplify-thresholds"))?h:[.5,.5,.5,.5];const z=k[0],A=k[1],B=k[2],C=k[3];h=null!=
(q=g("featurelayer-simplify-payload-size-factors"))?q:[1,2,4];const D=h[0],E=h[1],F=h[2],G=null!=(r=g("featurelayer-simplify-mobile-factor"))?r:2,H=g("esri-mobile");g=function(){function n(a,b){this.type="FeatureSetReader";this.arcadeDeclaredClass="esri.arcade.Feature";this.seen=!1;this._ty=this._tx=this.instance=0;this._sy=this._sx=1;this._deleted=null;this._joined=[];this._objectIdToIndex=null;this._level=0;this.instance=a;this._layerSchema=b}n.createInstance=function(){m++;return m=65535<m?0:m};
var c=n.prototype;c.getAreaSimplificationThreshold=function(a,b){let d=1;const e=H?G:1;4E6<b?d=F*e:1E6<b?d=E*e:5E5<b?d=D*e:1E5<b&&(d=e);b=0;4E3<a?b=C*d:2E3<a?b=B*d:100<a?b=A:15<a&&(b=z);a=8;4>this._level?a=1:5>this._level?a=2:6>this._level&&(a=4);return b*a};c.setArcadeSpatialReference=function(a){this._arcadeSpatialReference=a};c.attachStorage=function(a){this._storage=a};c.getQuantizationTransform=function(){throw Error("Unable to find transform for featureSet");};c.getStorage=function(){return this._storage};
c.getComputedNumeric=function(a){return this.getComputedNumericAtIndex(0)};c.setComputedNumeric=function(a,b){return this.setComputedNumericAtIndex(b,0)};c.getComputedString=function(a){return this.getComputedStringAtIndex(0)};c.setComputedString=function(a,b){return this.setComputedStringAtIndex(0,b)};c.getComputedNumericAtIndex=function(a){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),a)};c.setComputedNumericAtIndex=function(a,b){this._storage.setComputedNumericAtIndex(this.getDisplayId(),
a,b)};c.getComputedStringAtIndex=function(a){return this._storage.getComputedStringAtIndex(this.getDisplayId(),a)};c.setComputedStringAtIndex=function(a,b){return this._storage.setComputedStringAtIndex(this.getDisplayId(),a,b)};c.transform=function(a,b,d,e){const f=this.copy();f._tx+=a;f._ty+=b;f._sx*=d;f._sy*=e;return f};c.readAttribute=function(a,b=!1){var d=this._readAttribute(a,b);if(void 0!==d)return d;for(const e of this._joined)if(e.setIndex(this.getIndex()),d=e._readAttribute(a,b),void 0!==
d)return d};c.readAttributes=function(){const a=this._readAttributes();for(const b of this._joined){b.setIndex(this.getIndex());const d=b._readAttributes();for(const e of Object.keys(d))a[e]=d[e]}return a};c.joinAttributes=function(a){this._joined.push(a)};c.readArcadeFeature=function(){return this};c.geometry=function(){var a=this.readHydratedGeometry();a=v.convertToGeometry(a,this.geometryType,this.hasZ,this.hasM);if(a=y.fromJSON(a))a.spatialReference=this._arcadeSpatialReference;return a};c.field=
function(a){if(this.hasField(a))return this.readAttribute(a,!0);for(const b of this._joined)if(b.setIndex(this.getIndex()),b.hasField(a))return b._readAttribute(a,!0);throw Error(`Field ${a} does not exist`);};c.setField=function(a,b){throw Error("Unable to update feature attribute values, feature is readonly");};c.keys=function(){return this.getFieldNames()};c.castToText=function(){return JSON.stringify(this.readLegacyFeature())};c.gdbVersion=function(){return null};c.fullSchema=function(){return this._layerSchema};
c.castAsJson=function(a=null){return{attributes:this._readAttributes(),geometry:!0===(null==a?void 0:a.keepGeometryType)?this.geometry():this.geometry().toJSON()}};c.castAsJsonAsync=function(a,b=null){return Promise.resolve(this.castAsJson(b))};c.removeIds=function(a){if(l.isNone(this._objectIdToIndex)){var b=new Map;const d=this.getCursor();for(;d.next();)b.set(d.getObjectId(),d.getIndex());this._objectIdToIndex=b}b=this._objectIdToIndex;for(const d of a)b.has(d)&&this.removeAtIndex(b.get(d))};c.removeAtIndex=
function(a){l.isNone(this._deleted)&&(this._deleted=x.StaticBitSet.create(this.getSize()));this._deleted.set(a)};c.readGeometryForDisplay=function(){return this.readUnquantizedGeometry(!0)};c.readLegacyGeometryForDisplay=function(){return this.readLegacyGeometry(!0)};c.features=function*(){const a=this.getCursor();for(;a.next();)yield a.readOptimizedFeature()};c._getExists=function(){return l.isNone(this._deleted)||!this._deleted.has(this.getIndex())};c._computeCentroid=function(){if("esriGeometryPolygon"!==
this.geometryType)return null;const a=this.readUnquantizedGeometry();if(!a||a.hasIndeterminateRingOrder)return null;const b=l.unwrapOr(this.getQuantizationTransform(),null);return u.getCentroidOptimizedGeometry(new w,a,this.hasM,this.hasZ,b)};c.copyInto=function(a){a.seen=this.seen;a._storage=this._storage;a._arcadeSpatialReference=this._arcadeSpatialReference;a._joined=this._joined;a._tx=this._tx;a._ty=this._ty;a._sx=this._sx;a._sy=this._sy;a._deleted=this._deleted;a._objectIdToIndex=this._objectIdToIndex};
t._createClass(n,[{key:"isEmpty",get:function(){return l.isSome(this._deleted)&&this._deleted.countSet()===this.getSize()}},{key:"level",set:function(a){this._level=a}}]);return n}();p.FeatureSetReader=g;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});