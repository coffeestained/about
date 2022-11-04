// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/jsonUtils","../CurveHelper","../enums"],function(g,f,h,l){let k=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(a,d,b,e){return new m(a,d,b)};return c}();k.instance=null;let m=function(){function c(a,d,b){var e;this._inputGeometries=a;this._curveHelper=new h.CurveHelper;this._offset=(null!=(e=d.offset)?e:1)*b;this._method=d.method;this._option=d.option;this._offsetFlattenError=
h.PIXEL_TOLERANCE*b}c.prototype.next=function(){for(var a=this._inputGeometries.next();a;){if(0===this._offset)return a;if(f.isExtent(a)){if(this._method===l.GeometricEffectOffsetMethod.Rounded&&0<this._offset){var d=this._curveHelper.offset([[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]],-this._offset,this._method,4,this._offsetFlattenError);return d?{rings:[d]}:null}if(0<Math.min(a.xmax-a.xmin,a.ymax-a.ymin)+2*this._offset)return{xmin:a.xmin-this._offset,xmax:a.xmax+
this._offset,ymin:a.ymin-this._offset,ymax:a.ymax+this._offset}}if(f.isPolygon(a)){var b=[];for(d of a.rings){const e=this._curveHelper.offset(d,-this._offset,this._method,4,this._offsetFlattenError);e&&b.push(e)}if(b.length)return{rings:b}}if(f.isPolyline(a)){b=[];for(const e of a.paths)(a=this._curveHelper.offset(e,-this._offset,this._method,4,this._offsetFlattenError))&&b.push(a);if(b.length)return{paths:b}}a=this._inputGeometries.next()}return null};return c}();g.EffectOffset=k;Object.defineProperties(g,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});