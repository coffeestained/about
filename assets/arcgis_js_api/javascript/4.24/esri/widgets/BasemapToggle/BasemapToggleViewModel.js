// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/compilerUtils ../../core/Evented ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../support/basemapDefinitions ../../support/basemapUtils".split(" "),function(k,d,r,c,m,n,f,z,A,w,
x,p,t,y,g){c=function(u){function h(a){a=u.call(this,a)||this;a._basemapCache={};a._loadingProjectionEngine=!1;a.nextBasemap=g.ensureType("hybrid",a._basemapCache);a.view=null;a.toggle=a.toggle.bind(k._assertThisInitialized(a));return a}k._inheritsLoose(h,u);var l=h.prototype;l.initialize=function(){n.watch(()=>this.nextBasemap,a=>{a&&!a.loaded&&a.load().catch(()=>{})},n.initial)};l.destroy=function(){this.view=null;g.destroyCache(this._basemapCache);this._basemapCache=null};l.castNextBasemap=function(a){return g.ensureType(a,
this._basemapCache)};l.toggle=function(){var a=k._asyncToGenerator(function*(){if("disabled"!==this.state&&"incompatible-next-basemap"!==this.state){var {activeBasemap:b,nextBasemap:e}=this,v=this._viewSpatialReferenceLocked;if(!v){yield n.whenOnce(()=>!this._nextBasemapSpatialReferenceTask.updating);if(e!==this.nextBasemap||b!==this.activeBasemap)return;const {spatialReference:q}=this._nextBasemapSpatialReferenceTask;!m.isSome(q)||t.equals(this.view.spatialReference,q)||p.isLoaded()||p.canProjectWithoutEngine(this.view.spatialReference,
q)||(this._loadingProjectionEngine=!0,yield p.load(),this._loadingProjectionEngine=!1);if(e!==this.nextBasemap||b!==this.activeBasemap)return}this.view.map.basemap=e;v||!m.isSome(this._nextBasemapSpatialReferenceTask.spatialReference)||t.equals(this.view.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(this.view.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference);this.nextBasemap=b;this.emit("toggle",{previous:b,current:e})}});return function(){return a.apply(this,
arguments)}}();h.getThumbnailUrl=function(a){if(!a)return null;var {thumbnailUrl:b}=a;return b?b:(b=g.getWellKnownBasemapId(a))?y.esriBasemapDefinitions[b].thumbnailUrl:(a=a.baseLayers.find(e=>!!r.typeCast(e)().get("portalItem.thumbnailUrl")))?r.typeCast(a)().get("portalItem.thumbnailUrl"):null};k._createClass(h,[{key:"_nextBasemapSpatialReferenceTask",get:function(){return g.findSpatialReference(this.view,this.nextBasemap)}},{key:"_viewSpatialReferenceLocked",get:function(){return"spatialReferenceLocked"in
this.view?this.view.spatialReferenceLocked:!0}},{key:"activeBasemap",get:function(){var a,b,e;return g.ensureType(null!=(a=null==(b=this.view)?void 0:null==(e=b.map)?void 0:e.basemap)?a:"topo",this._basemapCache)}},{key:"state",get:function(){const {view:a}=this;if(null==a||!a.ready||this._nextBasemapSpatialReferenceTask.updating)return"disabled";const {spatialReference:b}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&m.isSome(b)&&!a.spatialReference.equals(b)?"incompatible-next-basemap":
this._loadingProjectionEngine?"loading":"ready"}}]);return h}(c.EventedAccessor);d.__decorate([f.property()],c.prototype,"_loadingProjectionEngine",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"_nextBasemapSpatialReferenceTask",null);d.__decorate([f.property({readOnly:!0})],c.prototype,"_viewSpatialReferenceLocked",null);d.__decorate([f.property({readOnly:!0})],c.prototype,"activeBasemap",null);d.__decorate([f.property()],c.prototype,"nextBasemap",void 0);d.__decorate([w.cast("nextBasemap")],
c.prototype,"castNextBasemap",null);d.__decorate([f.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([f.property()],c.prototype,"view",void 0);d.__decorate([f.property()],c.prototype,"toggle",null);return c=d.__decorate([x.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],c)});