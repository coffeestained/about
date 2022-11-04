// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../support/GraphicsCollection ../engine/BitmapContainer ./LayerView2D ./graphics/GraphicsView2D ./graphics/HighlightGraphicContainer ./support/ExportStrategy ../../layers/LayerView ../../layers/MapImageLayerView ../../layers/RefreshableLayerView ../../support/drapedUtils".split(" "),
function(k,f,d,q,l,m,G,H,I,r,t,u,v,w,x,y,z,A,B,C){const D=d.getLogger("esri.views.2d.layers.MapImageLayerView2D");d=function(n){function g(){var a=n.apply(this,arguments)||this;a._highlightGraphics=new t.GraphicsCollection;return a}k._inheritsLoose(g,n);var b=g.prototype;b.update=function(a){this.strategy.update(a).catch(c=>{q.isAbortError(c)||D.error(c)})};b.attach=function(){const {imageMaxWidth:a,imageMaxHeight:c,version:e}=this.layer,h=10.3<=e,E=10<=e;this._bitmapContainer=new u.BitmapContainer;
this.container.addChild(this._bitmapContainer);const F=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new x(this.view.featuresTilingScheme)});this.container.addChild(F.container);this.strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:a,imageMaxHeight:c,imageRotationSupported:h,imageNormalizationSupported:E,hidpi:!0});this.handles.add(l.watch(()=>
this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion");this.handles.add(l.watch(()=>{var p;return null==(p=this.view)?void 0:p.floors},()=>this.requestUpdate()),"view.floors");this.requestUpdate()};b.detach=function(){this.handles.remove("exportImageVersion");this.handles.remove("view.floors");this.strategy.destroy();this.container.removeAllChildren();this._bitmapContainer.removeAllChildren()};b.moveStart=function(){};b.viewChange=function(){};b.moveEnd=function(){this.requestUpdate()};
b.highlight=function(a,c){this._highlightGraphics.add(a);return{remove:()=>{this._highlightGraphics.remove(a)}}};b.supportsSpatialReference=function(a){return this.layer.serviceSupportsSpatialReference(a)};b.createFetchPopupFeaturesQueryGeometry=function(a,c){return C.createQueryGeometry(a,c,this.view)};b.doRefresh=function(){var a=k._asyncToGenerator(function*(){this.requestUpdate()});return function(){return a.apply(this,arguments)}}();b.isUpdating=function(){return this.strategy.updating||this.updateRequested};
b.fetchImage=function(a,c,e,h){return this.layer.fetchImage(a,c,e,{timeExtent:this.timeExtent,floors:this.view.floors,...h})};return g}(A(B(v.LayerView2DMixin(z))));f.__decorate([m.property()],d.prototype,"strategy",void 0);f.__decorate([m.property()],d.prototype,"updating",void 0);return d=f.__decorate([r.subclass("esri.views.2d.layers.MapImageLayerView2D")],d)});