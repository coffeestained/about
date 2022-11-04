// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/MapUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/uid ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ./ContentObjectType ./testUtils ./VertexAttribute ../../../support/Scheduler ../../../webgl/enums ../../../webgl/Texture".split(" "),
function(l,w,v,A,B,x,C,m,D,y,I,J,K,E,F,G,p,z,q,H){l.TextTextureAtlas=function(k){function t(a){a=k.call(this,a)||this;a.type=F.ContentObjectType.Texture;a.id=D.generateUID();a.events=new B;a._glTexture=null;a.needsClear=!1;a.elementsToAddOrUpdate=new Map;a.elementsToRemove=new Map;a.elementsToRender=new Map;a.elements=new Map;a.stageObjects=new Map;a.updating=!1;return a}w._inheritsLoose(t,k);var d=t.prototype;d.initialize=function(){this.stage=this.view._stage;this.canvas=this._create2DCanvas();
this.ctx=this.canvas.getContext("2d");this.stage.add(this);const a=this._computeAtlasResolution(this.view.width,this.view.height);this._createAtlasRegion(a);this._update2DCanvasSize();this._resetAtlasCursor()};d.unload=function(){this._glTexture=m.disposeMaybe(this._glTexture);this.updating=!1;this.events.emit("unloaded")};d._createDescriptor=function(a){return{target:q.TextureType.TEXTURE_2D,pixelFormat:q.PixelFormat.RGBA,dataType:q.PixelType.UNSIGNED_BYTE,wrapMode:q.TextureWrapMode.CLAMP_TO_EDGE,
flipped:!0,samplingMode:q.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,hasMipmap:!0,preMultiplyAlpha:!0,maxAnisotropy:a.parameters.maxMaxAnisotropy}};d.load=function(a){if(m.isSome(this._glTexture))return this._glTexture;this._glTexture=new H.Texture(a,this._createDescriptor(a),this.canvas);this.frameWorker=this.view.resourceController.scheduler.registerTask(z.TaskPriority.TEXT_TEXTURE_ATLAS,this);this.setDirty();return this._glTexture};d.dispose=function(){this.elementsToRender=this.elementsToRemove=
this.elementsToAddOrUpdate=this.elements=null;this.frameWorker=m.removeMaybe(this.frameWorker);this._glTexture&&(this.stage.remove(this),this._glTexture=m.disposeMaybe(this._glTexture));this.canvas.width=0;this.canvas.height=0;this.ctx=this.canvas=null};d._create2DCanvas=function(){const a=document.createElement("canvas");a.setAttribute("id","canvas2d");a.setAttribute("style","display:none");a.setAttribute("width",(512).toString());a.setAttribute("height",(512).toString());return a};d._update2DCanvasSize=
function(){this.canvas.setAttribute("width",this.atlas.size.width.toString());this.canvas.setAttribute("height",this.atlas.size.height.toString())};d._createAtlasRegion=function(a=512){this.atlas={size:{width:a,height:a},cursor:{x:0,y:0},lineHeight:0}};d._computeAtlasResolution=function(a,c){a=Math.max(a,c);a=C.nextHighestPowerOfTwo(a+256);return a=Math.min(a,4096)};d._resizeAtlas=function(a,c){c=c||a;const b=this.atlas;b.size.width=a;b.size.height=c;m.isSome(this._glTexture)&&this._glTexture.resize(a,
c);this._update2DCanvasSize()};d._resetAtlasCursor=function(){const a=this.atlas;a.cursor.x=2;a.cursor.y=4;a.lineHeight=0;this.needsClear=!0};d._getAtlasUsage=function(){const a=this.atlas;return(a.cursor.x+a.cursor.y*a.size.width)/(a.size.width*a.size.height)};d._getExpectedAtlasUsage=function(){const a=this.elementsToRemove.size,c=this.elementsToAddOrUpdate.size,b=this.elements.size;return this._getAtlasUsage()/b*(b+c-a)};d._addAtlasElement=function(a,c,b,f){const e=this.atlas,{renderedWidth:g,
renderedHeight:h,displayWidth:u,displayHeight:r}=a.textRenderer;a.placement.offset.x=e.cursor.x;a.placement.offset.y=e.cursor.y;a.placement.size.width=g;a.placement.size.height=h;a.placement.size.displayWidth=u;a.placement.size.displayHeight=r;a.placement.uvMinMax=[a.placement.offset.x/e.size.width,1-(a.placement.offset.y+h)/e.size.height,(a.placement.offset.x+g)/e.size.width,1-a.placement.offset.y/e.size.height];e.cursor.x+=b;e.lineHeight=Math.max(e.lineHeight,f);this.elements.set(c,a)};d._removeAtlasElement=
function(a){if(a&&this.elements.has(a.textId)){const c=a.placement.offset,b=a.placement.size;this.ctx.clearRect(c.x,c.y,b.width,b.height);this.elements.delete(a.textId)}};d._ensureStageObjects=function(a){var c=this.stageObjects.get(a);if(c)return c;c=new Set;this.stageObjects.set(a,c);return c};d._addStageObject=function(a,c){this._ensureStageObjects(a).add(c)};d._removeStageObject=function(a,c){(a=this.stageObjects.get(a))&&a.delete(c)&&(c.geometries[0].vertexAttributes.get(p.VertexAttribute.SIZE).data=
[0,0],c.geometryVertexAttrsUpdated(c.geometryRecords[0]))};d._processAddition=function(a,c){const b=this.atlas;var f=a.textId;const e=a.textRenderer.renderedWidth+2,g=a.textRenderer.renderedHeight+2+2;if(b.cursor.x+e<b.size.width&&b.cursor.y+g<b.size.height)this._addAtlasElement(a,f,e,g),this.elementsToRender.set(f,a),this.elementsToAddOrUpdate.delete(f);else if(b.cursor.y+g+b.lineHeight<b.size.height)b.cursor.x=2,b.cursor.y+=b.lineHeight,b.lineHeight=0,this._addAtlasElement(a,f,e,g),this.elementsToRender.set(f,
a),this.elementsToAddOrUpdate.delete(f);else{a=this._getExpectedAtlasUsage();(f=.85<a&&4096>b.size.width)&&this._resizeAtlas(2*b.size.width,2*b.size.height);if(!c||!f&&.95<a&&4096===b.size.width)return this._processRemovals(),n.OK;this._repack();return n.REPACK}return n.OK};d._processRemovals=function(){this.elementsToRemove.forEach((a,c)=>{const b=this.stageObjects.get(c);b&&0!==b.size||this._removeAtlasElement(a);b&&0===b.size&&this.stageObjects.delete(c)});this.elementsToRemove.clear()};d._repack=
function(){this._processRemovals();this.elements.forEach((a,c)=>{a.rendered=!1;this.elementsToAddOrUpdate.set(c,a)});this.elements.clear();this._resetAtlasCursor();this.elementsToRender.clear()};d._processRenderingRequest=function(a){this.ctx.clearRect(a.placement.offset.x,a.placement.offset.y,a.placement.size.width,a.placement.size.height);a.textRenderer.render(this.ctx,a.placement.offset.x,a.placement.offset.y);const c=this.stageObjects.get(a.textId);c&&c.forEach(b=>{b.geometries[0].vertexAttributes.get(p.VertexAttribute.UV0).data=
new Float32Array(a.placement.uvMinMax);b.geometries[0].vertexAttributes.get(p.VertexAttribute.SIZE).data=[a.placement.size.displayWidth,a.placement.size.displayHeight];b.geometryVertexAttrsUpdated(b.geometryRecords[0])});a.rendered=!0};d.runTask=function(a,c=!0){if(this._glTexture){var b=!1;x.someMap(this.elementsToAddOrUpdate,(e,g)=>(e=this.elements.get(g))&&e.rendered?((e=this.stageObjects.get(g))&&e.forEach(h=>{const u=h.geometries[0].vertexAttributes,r=this.elements.get(g);u.get(p.VertexAttribute.UV0).data=
new Float32Array(r.placement.uvMinMax);u.get(p.VertexAttribute.SIZE).data=new Float32Array([r.placement.size.displayWidth,r.placement.size.displayHeight]);h.geometryVertexAttrsUpdated(h.geometryRecords[0])}),this.elementsToAddOrUpdate.delete(g),!1):this._processAddition(this.elementsToAddOrUpdate.get(g),c)===n.REPACK?b=!0:!1);if(b)this.runTask(z.noBudget,!1);else{var f=!1;0<this.elementsToRender.size&&this.needsClear&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.needsClear=!1);
x.someMap(this.elementsToRender,(e,g)=>{this._processRenderingRequest(e);this.elementsToRender.delete(g);f=!0;a.madeProgress();return a.done});f&&m.isSome(this._glTexture)&&this._glTexture.setData(this.canvas);this.updating=0<this.elementsToRender.size;!this.updating&&G.textTextureAtlas.orderedRepackingEnabled&&this.repackOrdered()}}};d.addTextTexture=function(a,c){const b=a.key;this.elementsToAddOrUpdate.has(b)||this.elementsToAddOrUpdate.set(b,{textId:b,placement:{offset:{x:0,y:0},size:{width:0,
height:0,displayWidth:0,displayHeight:0},uvMinMax:[]},textRenderer:a,rendered:!1});this._addStageObject(b,c);this.elementsToRemove.delete(b);this.setDirty()};d.removeTextTexture=function(a,c){a=a.key;this.elementsToRemove.set(a,this.elements.get(a));this._removeStageObject(a,c)};d.setDirty=function(){this._glTexture&&(this.updating=!0)};d.repackOrdered=function(){if(0!==this.elements.size){var a=[];this.elements.forEach((b,f)=>a.push({element:b,key:f}));var c=!0;for(let b=0;b<a.length-1;b++)if(0<
a[b].key.localeCompare(a[b+1].key)){c=!1;break}if(!c||this.elementsToRemove.size){a.sort((b,f)=>b.key.localeCompare(f.key));this.elements.clear();for(const {element:b,key:f}of a)this.elements.set(f,b);this._repack();this.setDirty()}}};w._createClass(t,[{key:"width",get:function(){return this.atlas.size.width}},{key:"height",get:function(){return this.atlas.size.height}},{key:"requiresFrameUpdates",get:function(){return!1}},{key:"glTexture",get:function(){return this._glTexture}},{key:"running",get:function(){return this.updating}},
{key:"test",get:function(){const {elements:a,stageObjects:c,elementsToRemove:b,atlas:f}=this,e=this;return{elements:a,stageObjects:c,elementsToRemove:b,atlas:f,_resizeAtlas:(g,h)=>e._resizeAtlas(g,h),run:(g,h)=>e.runTask(g,h)}}}]);return t}(A);v.__decorate([y.property({constructOnly:!0})],l.TextTextureAtlas.prototype,"view",void 0);v.__decorate([y.property({type:Boolean})],l.TextTextureAtlas.prototype,"updating",void 0);l.TextTextureAtlas=v.__decorate([E.subclass("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],
l.TextTextureAtlas);var n;(function(k){k[k.OK=0]="OK";k[k.REPACK=1]="REPACK"})(n||(n={}));Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});