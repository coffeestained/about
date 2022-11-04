// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/vectorFieldUtils ../../engine/imagery/RasterVFTileContainer ./BaseImageryTileSubView2D".split(" "),function(n,g,k,p,l,f,w,x,
q,r,t,u){f=function(h){function m(){var a=h.apply(this,arguments)||this;a._handle=null;a.container=null;a.layer=null;a.type="rasterVF";return a}n._inheritsLoose(m,h);var e=m.prototype;e.canUseWebGLForProcessing=function(){return!1};e.fetchTile=function(){var a=n._asyncToGenerator(function*(b,c){c={...c,interpolation:"nearest",requestProjectedLocalDirections:!0};b=yield this.layer.fetchTile(b.level,b.row,b.col,c);"vector-magdir"===this.layer.rasterInfo.dataType&&null!=b&&b.pixelBlock&&(b.pixelBlock=
yield this.layer.convertVectorFieldData(b.pixelBlock,c));return b});return function(b,c){return a.apply(this,arguments)}}();e.updateTileSource=function(a,b){const c=b.symbolizerParams,{tileData:d}=a;d.key=a.key;d.width=this._tileInfoView.tileInfo.size[0];d.height=this._tileInfoView.tileInfo.size[1];({symbolTileSize:a}=c);({source:b}=b);d.offset=this._getTileSymbolOffset(d.key,a);k.isSome(b)&&k.isSome(b.pixelBlock)?(d.rawPixelData={extent:b.extent,pixelBlock:b.pixelBlock},d.symbolizerParameters=c,
d.source=this._sampleVectorFieldData(b.pixelBlock,c,d.offset)):(b=this.createEmptyTilePixelBlock([Math.round((this._tileInfoView.tileInfo[0]-d.offset[0])/a),Math.round((this._tileInfoView.tileInfo[1]-d.offset[1])/a)]),d.source=b,d.symbolizerParameters=c);d.invalidateVAO();return Promise.resolve(null)};e.updateTileSymbolizerParameters=function(a,b){var c;b=b.local;const {symbolTileSize:d}=b;({tileData:a}=a);a.offset=this._getTileSymbolOffset(a.key,d);const v=a.symbolizerParameters.symbolTileSize;a.symbolizerParameters=
b;k.isSome(null==(c=a.rawPixelData)?void 0:c.pixelBlock)&&v!==d&&(a.source=this._sampleVectorFieldData(a.rawPixelData.pixelBlock,a.symbolizerParameters,a.offset));return Promise.resolve(null)};e.attach=function(){h.prototype.attach.call(this);this.container=new t.RasterVFTileContainer(this._tileInfoView);this.container.isCustomTilingScheme=this._isCustomTilingScheme;this._updateSymbolType(this.layer.renderer);this._handle=p.watch(()=>this.layer.renderer,a=>this._updateSymbolType(a))};e.detach=function(){h.prototype.detach.call(this);
this.container.removeAllChildren();this._handle.remove();this._handle=null};e._getTileSymbolOffset=function(a,b){const c=a.col*this._tileInfoView.tileInfo.size[0]%b;a=a.row*this._tileInfoView.tileInfo.size[1]%b;return[c>b/2?b-c:-c,a>b/2?b-a:-a]};e._sampleVectorFieldData=function(a,b,c){({symbolTileSize:b}=b);return r.sampleVectorField(a,"vector-uv",b,c)};e._updateSymbolType=function(a){"vector-field"===a.type&&(this.container.symbolTypes="wind-barb"===a.style?["scalar","triangle"]:"simple-scalar"===
a.style?["scalar"]:["triangle"])};return m}(u.BaseImageryTileSubView2D);g.__decorate([l.property()],f.prototype,"container",void 0);g.__decorate([l.property()],f.prototype,"layer",void 0);g.__decorate([l.property()],f.prototype,"type",void 0);return f=g.__decorate([q.subclass("esri.views.2d.layers.imagery.VectorFieldTileView2D")],f)});