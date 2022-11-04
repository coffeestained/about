// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/Evented ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3f64 ./AnalysisView3D ./LineOfSight/LineOfSightConfiguration ./LineOfSight/LineOfSightController ./LineOfSight/LineOfSightTool ./LineOfSight/LineOfSightVisualization ../../analysis/analysisViewUtils".split(" "),
function(l,c,b,p,q,f,d,z,A,B,r,t,u,v,w,x,y,m){b=function(n){function g(a){a=n.call(this,a)||this;a.type="line-of-sight-view-3d";a.analysis=null;a.tool=null;a.computations=new p;a.elevationAlignedObserver=null;a.configuration=new v.LineOfSightConfiguration;a.observerEngineLocation=t.create();a.cursorTarget=null;a.editable=!0;return a}l._inheritsLoose(g,n);var k=g.prototype;k.initialize=function(){const a=this.view,h=this.analysis;this._analysisController=new w.LineOfSightController({analysis:h,analysisViewData:this,
view:a});this._analysisVisualization=new y.LineOfSightVisualization({analysis:h,analysisViewData:this,view:a});this.own([this._analysisController.on("result-changed",e=>{e.target!==this.cursorTarget&&this.emit("result-changed",e)}),m.connectAnalysisViewToTool(this,x.LineOfSightTool)])};k.destroy=function(){m.removeAnalysisViewTool(this);this._analysisController=f.destroyMaybe(this._analysisController);this._analysisVisualization=f.destroyMaybe(this._analysisVisualization)};k.getResultForTarget=function(a){const h=
this.computations.find(e=>e.target===a);return f.applySome(h,e=>e.result)};l._createClass(g,[{key:"results",get:function(){return this.computations.map(a=>a.result)}},{key:"priority",get:function(){return this._analysisController.priority},set:function(a){this._analysisController.priority=a}},{key:"updating",get:function(){return f.isSome(this._analysisController)&&this._analysisController.updating}},{key:"testInfo",get:function(){return{visualization:this._analysisVisualization,controller:this._analysisController}}}]);
return g}(u.AnalysisView3D(q.EventedMixin(b)));c.__decorate([d.property({readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],b.prototype,"analysis",void 0);c.__decorate([d.property()],b.prototype,"tool",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"results",null);c.__decorate([d.property()],b.prototype,"priority",null);c.__decorate([d.property()],b.prototype,"computations",void 0);c.__decorate([d.property()],b.prototype,"elevationAlignedObserver",
void 0);c.__decorate([d.property()],b.prototype,"configuration",void 0);c.__decorate([d.property()],b.prototype,"observerEngineLocation",void 0);c.__decorate([d.property()],b.prototype,"cursorTarget",void 0);c.__decorate([d.property()],b.prototype,"updating",null);c.__decorate([d.property()],b.prototype,"editable",void 0);c.__decorate([d.property()],b.prototype,"_analysisController",void 0);c.__decorate([d.property()],b.prototype,"_analysisVisualization",void 0);return b=c.__decorate([r.subclass("esri.views.3d.analysis.LineOfSightAnalysisView3D")],
b)});