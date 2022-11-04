// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./Logger ./accessorSupport/tracking ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass ./accessorSupport/tracking/SimpleTrackingTarget".split(" "),function(k,l,m,t,u,v,n,p,w){function x(b,g){const h=()=>{if(!e||a)return g();e.clear();a=!0;const c=v.runTracked(e,g);a=!1;return c};let e=new w.SimpleTrackingTarget(()=>{e&&!a&&b(h)}),a=!1;b(h);return{remove:()=>{e&&(e.destroy(),e=null)}}}const r=
b=>{b=function(g){function h(){var a=g.apply(this,arguments)||this;a._numUpdating=0;a.asyncUpdateState=new Map;return a}l._inheritsLoose(h,g);var e=h.prototype;e.autoUpdateAsync=function(a,c){return x(d=>this._updateAsync(a,d),c)};e._updateAsync=function(){var a=l._asyncToGenerator(function*(c,d){if(!this._startAsyncUpdate(c)){try{const q=yield d();this._set(c,q)}catch(q){u.getLogger(this.declaredClass).warn(`Async update of "${String(c)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(c)&&
this._updateAsync(c,d)}});return function(c,d){return a.apply(this,arguments)}}();e._startAsyncUpdate=function(a){var c;const d=null!=(c=this.asyncUpdateState.get(a))?c:f.None;if(d&f.Updating)return this.asyncUpdateState.set(a,d|f.Invalidated),!0;++this._numUpdating;this.asyncUpdateState.set(a,d|f.Updating);return!1};e._endAsyncUpdate=function(a){var c;--this._numUpdating;const d=(null!=(c=this.asyncUpdateState.get(a))?c:f.None)&~f.Updating;if(d&f.Invalidated)return this.asyncUpdateState.set(a,d&
~f.Invalidated),!0;this.asyncUpdateState.set(a,d);return!1};l._createClass(h,[{key:"updating",get:function(){return 0<this._numUpdating}}]);return h}(b);m.__decorate([n.property({readOnly:!0})],b.prototype,"updating",null);m.__decorate([n.property()],b.prototype,"_numUpdating",void 0);return b=m.__decorate([p.subclass("esri.core.AsyncUpdate")],b)};var f;(function(b){b[b.None=0]="None";b[b.Updating=1]="Updating";b[b.Invalidated=2]="Invalidated"})(f||(f={}));k.AsyncUpdate=function(b){function g(){return b.apply(this,
arguments)||this}l._inheritsLoose(g,b);return g}(r(t));k.AsyncUpdate=m.__decorate([p.subclass("esri.core.AsyncUpdate")],k.AsyncUpdate);k.AsyncUpdateMixin=r;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});