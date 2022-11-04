/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as e}from"../core/lang.js";import{e as t,j as r,a as i,i as s,u as a,f as o,k as n}from"./maybe.js";import{c as l,a as c,b as d,d as h,l as u,s as p,e as f,f as m,n as g,g as v,h as _}from"./vec2.js";import{h as T,f as y,I as S,J as R,c as C,s as x,d as E,j as w,o as O,b as A,a as D,e as b,v as I,w as P,z as F,K as M,L,u as N,H as z}from"./mathUtils.js";import{projectBuffer as U,computeTranslationToOriginAndRotation as H,lonLatToWebMercatorComparable as B}from"../geometry/projection.js";import{g as W}from"./projectionEllipsoid.js";import{C as V,p as j}from"./triangulationUtils.js";import{V as G}from"./ViewingMode.js";import{O as q,Z as k,c as Z,a as $}from"./vec4f64.js";import{n as X}from"./compilerUtils.js";import{c as J,e as Y,m as Q,o as K,j as ee,l as te,t as re,f as ie}from"./mat4.js";import{c as se,I as ae}from"./mat4f64.js";import{i as oe,a as ne,g as le}from"./ElevationProvider.js";import{u as ce,F as de,T as he,o as ue,W as pe,O as fe,e as me,D as ge,P as ve,G as _e,S as Te,C as ye,g as Se}from"./CameraSpace.glsl.js";import{_ as Re}from"./tslib.es6.js";import Ce from"../core/Accessor.js";import xe from"../core/Evented.js";import Ee from"../core/Handles.js";import{s as we}from"./ensureType.js";import{P as Oe,M as Ae,s as De}from"../core/scheduling.js";import{watch as be,syncAndInitial as Ie,on as Pe}from"../core/reactiveUtils.js";import{g as Fe,s as Me}from"./watch.js";import{property as Le}from"../core/accessorSupport/decorators/property.js";import{subclass as Ne}from"../core/accessorSupport/decorators/subclass.js";import{R as ze,O as Ue}from"./interfaces2.js";import{c as He,o as Be,a as We}from"./aaBoundingRect.js";import{V as Ve,T as je,P as Ge,R as qe,U as ke}from"./basicInterfaces.js";import{c as Ze}from"./vec2f32.js";import{d as $e,e as Xe,T as Je,a as Ye,b as Qe,f as Ke,c as et,P as tt,g as rt,U as it,B as st}from"./enums.js";import{F as at}from"./FramebufferObject.js";import{a as ot,R as nt}from"./RenderSlot.js";import{N as lt}from"./NestedMap.js";import{C as ct}from"./Camera.js";import{L as dt}from"./Logger.js";import{a as ht,i as ut,l as pt,v as ft,r as mt,s as gt}from"./Util.js";import{b as vt,h as _t,t as Tt,f as yt,F as St,d as Rt,D as Ct,S as xt,O as Et,a as wt,M as Ot,j as At,m as Dt,g as bt,C as It,s as Pt,R as Ft,c as Mt,P as Lt,l as Nt,n as zt,o as Ut,u as Ht,v as Bt,x as Wt,y as Vt,r as jt,G as Gt,e as qt,z as kt,p as Zt,A as $t,U as Xt,B as Jt,T as Yt,k as Qt,E as Kt,H as er}from"./glUtil3D.js";import{V as tr}from"./VertexAttribute.js";import{d as rr}from"./screenUtils.js";import{P as ir}from"./frustum.js";import{c as sr,d as ar,f as or,b as nr}from"./lineSegment.js";import{c as lr,j as cr,k as dr,n as hr}from"./plane.js";import{n as ur}from"./InterleavedLayout.js";import{b as pr}from"./geometryDataUtils.js";import{g as fr,M as mr,R as gr,D as vr,i as _r,a as Tr,N as yr}from"./Material.js";import{F as Sr,v as Rr,a as Cr,P as xr,V as Er,S as wr,b as Or,B as Ar,c as Dr,d as br,M as Ir,E as Pr,e as Fr,R as Mr,f as Lr,g as Nr,A as zr}from"./Matrix4Uniform.js";import{i as Ur,c as Hr}from"./utils4.js";import{p as Br,S as Wr}from"./ShaderTechniqueConfiguration.js";import{m as Vr,b as jr,o as Gr,f as qr,a as kr,e as Zr,d as $r,O as Xr,g as Jr,h as Yr,s as Qr}from"./OrderIndependentTransparency.js";import{a as Kr,Z as ei,f as ti}from"./vec2f64.js";import{b as ri}from"./quatf64.js";import{T as ii}from"./Texture.js";import{g as si,V as ai,B as oi,v as ni}from"./VertexArrayObject.js";import{S as li,n as ci,I as di}from"./Intersector.js";import{g as hi}from"./glUtil.js";import{e as ui}from"./Ellipsoid.js";import{R as pi,a as fi}from"./MemCache.js";import{r as mi}from"./requestImageUtils.js";import{p as gi}from"./floatRGBA.js";import{I as vi,T as _i,n as Ti}from"./Scheduler.js";const yi=1.2,Si=k,Ri=q;function Ci(e,t,r,i,s,a,o,n,l,c,d){const h=Pi[d.mode];let u,p,f=0;if(U(e,t,r,i,l.spatialReference,s,n))return h.requiresAlignment(d)?(f=h.applyElevationAlignmentBuffer(i,s,a,o,n,l,c,d),u=a,p=o):(u=i,p=s),U(u,l.spatialReference,p,a,c.spatialReference,o,n)?f:void 0}function xi(e,r,i,s,a){const o=(oe(e)?e.z:ne(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=t(le(r,e,"ground"),0);return a.verticalDistanceToGround=0,a.sampledElevation=i,void(a.z=i)}case"relative-to-ground":{const n=t(le(r,e,"ground"),0),l=i.geometryZWithOffset(o,s);return a.verticalDistanceToGround=l,a.sampledElevation=n,void(a.z=l+n)}case"relative-to-scene":{const n=t(le(r,e,"scene"),0),l=i.geometryZWithOffset(o,s);return a.verticalDistanceToGround=l,a.sampledElevation=n,void(a.z=l+n)}case"absolute-height":{const n=i.geometryZWithOffset(o,s),l=t(le(r,e,"ground"),0);return a.verticalDistanceToGround=n-l,a.sampledElevation=l,void(a.z=n)}default:return X(i.mode),void(a.z=0)}}function Ei(e,t,r,i){return xi(e,t,r,i,Mi),Mi.z}function wi(e,t,r){return null==t||null==r?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===r?e.staysOnTheGround:t===r||"on-the-ground"!==t&&"on-the-ground"!==r?Ii.UPDATE:e.onTheGroundChanged}function Oi(e){return"relative-to-ground"===e||"relative-to-scene"===e}function Ai(e){return"absolute-height"!==e}function Di(e,t,r,i,s){xi(t,r,s,i,Mi),ce(e,Mi.verticalDistanceToGround);const a=Mi.sampledElevation,o=J(Fi,e.transformation);return Li[0]=t.x,Li[1]=t.y,Li[2]=Mi.z,H(t.spatialReference,Li,o,i.spatialReference)?e.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),a}class bi{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var Ii;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(Ii||(Ii={}));const Pi={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,r,i,s,a,o,n){const l=n.calculateOffsetRenderUnits(o),c=n.featureExpressionInfoContext;t*=3,i*=3;for(let a=0;a<s;++a){const s=e[t+0],a=e[t+1],o=e[t+2];r[i+0]=s,r[i+1]=a,r[i+2]=null==c?o+l:l,t+=3,i+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,r=e.featureExpressionInfoContext;return 0!==t||null!=r}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,r,i,s,a,o){let n=0;const l=o.spatialReference;r*=3,s*=3;for(let c=0;c<a;++c){const a=e[r+0],c=e[r+1],d=e[r+2],h=t(o.getElevation(a,c,d,l,"ground"),0);n+=h,i[s+0]=a,i[s+1]=c,i[s+2]=h,r+=3,s+=3}return n/a},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,r,i,s,a,o,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=o.spatialReference;r*=3,s*=3;for(let n=0;n<a;++n){const a=e[r+0],n=e[r+1],l=e[r+2],p=t(o.getElevation(a,n,l,u,"ground"),0);c+=p,i[s+0]=a,i[s+1]=n,i[s+2]=null==h?l+p+d:p+d,r+=3,s+=3}return c/a},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,r,i,s,a,o,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=o.spatialReference;r*=3,s*=3;for(let n=0;n<a;++n){const a=e[r+0],n=e[r+1],l=e[r+2],p=t(o.getElevation(a,n,l,u,"scene"),0);c+=p,i[s+0]=a,i[s+1]=n,i[s+2]=null==h?l+p+d:p+d,r+=3,s+=3}return c/a},requiresAlignment:()=>!0}},Fi=se(),Mi=new bi,Li=T();var Ni,zi;!function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(Ni||(Ni={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(zi||(zi={}));let Ui=class extends Ce{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};Re([Le()],Ui.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),Re([Le()],Ui.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),Re([Le()],Ui.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),Re([Le()],Ui.prototype,"DECONFLICTOR_SHOW_GRID",void 0),Re([Le()],Ui.prototype,"LABELS_SHOW_BORDER",void 0),Re([Le()],Ui.prototype,"TEXT_SHOW_BASELINE",void 0),Re([Le()],Ui.prototype,"TEXT_SHOW_BORDER",void 0),Re([Le()],Ui.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),Re([Le()],Ui.prototype,"OVERLAY_SHOW_CENTER",void 0),Re([Le()],Ui.prototype,"SHOW_POI",void 0),Re([Le()],Ui.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),Re([Le()],Ui.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),Re([Le()],Ui.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),Re([Le()],Ui.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),Re([Le()],Ui.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),Re([Le()],Ui.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),Re([Le()],Ui.prototype,"I3S_TREE_SHOW_TILES",void 0),Re([Le()],Ui.prototype,"I3S_SHOW_MODIFICATIONS",void 0),Re([Le()],Ui.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),Re([Le()],Ui.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),Re([Le()],Ui.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),Re([Le()],Ui.prototype,"LINE_WIREFRAMES",void 0),Ui=Re([Ne("esri.views.3d.support.DebugFlags")],Ui);const Hi=new Ui;class Bi{constructor(e,t){this.vec3=e,this.id=t}}function Wi(e,t,r,i){return new Bi(y(e,t,r),i)}var Vi;!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded"}(Vi||(Vi={}));class ji{constructor(e,t){this.index=e,this.renderTargets=t,this._extent=He(),this.resolution=0,this.renderLocalOrigin=Wi(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new qi,this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}get extent(){return this._extent}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===Vi.ColorAndWater?this.renderTargets.getTarget(ze.Color):e===Vi.Highlight?this.renderTargets.getTarget(ze.Highlight):this.renderTargets.getTarget(ze.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(ze.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(ze.Color):null}getNormalTexture(e){const t=e===Vi.ColorAndWater?this.renderTargets.getTarget(ze.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield();for(const r of this.renderTargets.renderTargets)r.type!==ze.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[r.type]=e.drawTarget(this,r,t):this.validTargets[r.type]=!1;return r^this.computeRenderTargetValidityBitfield()?Ve.CHANGED:Ve.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[ze.Color]|+e[ze.ColorNoRasterImage]<<1|+e[ze.Highlight]<<2|+e[ze.Water]<<3|+e[ze.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Be(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Be(this._extent,-e.range,0,t)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,We(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===Ue.INNER?0:this.resolution,0,this.resolution,this.resolution)}}function Gi(e,t,r){return Math.min(S(Math.max(e,t)+256),r)}class qi{constructor(){this.extents=[He(),He(),He()],this.numViews=0}}class ki{constructor(e,t){this.size=Ze(),this._fbo=null,this._fbo=new at(e,{colorTarget:$e.TEXTURE,depthStencilTarget:Xe.NONE},{target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE,samplingMode:et.LINEAR_MIPMAP_LINEAR,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=r(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,t){this.size[0]=e,this.size[1]=t,this._fbo.resize(this.size[0],this.size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._fbo?.resize(0,0)}get gpuMemoryUsage(){return this._fbo?.gpuMemoryUsage??0}}class Zi{constructor(e){const t=(t,r,i=!0)=>({type:r,fbo:new ki(e,i),renderPass:t,valid:!1,lastUsed:1/0});this.renderTargets=[t(ot.MATERIAL,ze.Color),t(ot.MATERIAL,ze.ColorNoRasterImage),t(ot.MATERIAL_HIGHLIGHT,ze.Highlight,!1),t(ot.MATERIAL_NORMAL,ze.Water),t(ot.MATERIAL,ze.Occluded)]}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,t,r){if(e)t.lastUsed=r;else if(r-t.lastUsed>$i)t.fbo.disposeRenderTargetMemory(),t.lastUsed=1/0;else if(t.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,t)=>e+t.fbo.gpuMemoryUsage),0)}}const $i=1e3;class Xi{constructor(e){this._context=e,this._perConstructorInstances=new lt,this._frameCounter=0,this._keepAliveFrameCount=Yi}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.destroy())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let s=this._perConstructorInstances.get(e,r);if(i(s)){const i=new e(this._context,t,(()=>this.release(i)));s=new Ji(i),this._perConstructorInstances.set(e,r,s)}return++s.refCount,s.technique}releaseAndAcquire(e,t,r){if(s(r)){if(t.key===r.key)return r;this.release(r)}return this.acquire(e,t)}release(e){if(i(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);i(t)||(--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==Yi&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.destroy(),this._perConstructorInstances.delete(t,r))}))}))}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}class Ji{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}const Yi=-1,Qi=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of this._managedDisposables??[]){const t=this[e];this[e]=null,t&&"function"==typeof t.dispose&&t.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Ki extends(Qi(class{})){}function es(){return(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables.unshift(t)}}const ts=dt.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository");class rs{constructor(e,t,r,i){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new lt}dispose(){this._textureRepository.dispose()}acquire(e,t){this._ownMaterial(e);let r=this._id2glMaterialRef.get(t,e.id);if(i(r)){const i=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:t});r=new is(i),this._id2glMaterialRef.set(t,e.id,r)}return r.ref(),r.glMaterial}release(e,t){const i=this._id2glMaterialRef.get(t,e.id);s(i)&&(i.unref(),i.referenced||(r(i.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){s(e.repository)&&e.repository!==this&&ts.error("Material is already owned by a different material repository"),e.repository=this}}class is{constructor(e){this.glMaterial=e,this.refCnt=0}ref(){++this.refCnt}unref(){--this.refCnt,ht(this.refCnt>=0)}get referenced(){return this.refCnt>0}}const ss={orderedRepackingEnabled:!1};function as(e,t){const r=e.vertex;r.uniforms.add(new vt("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(tr.SIZEFEATUREATTRIBUTE,"float"),r.uniforms.add(new _t("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new _t("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new _t("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new _t("vvSizeFactor",(e=>e.vvSizeFactor))),r.code.add(fr`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(tr.SIZE,"float"),r.code.add(fr`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(tr.OPACITYFEATUREATTRIBUTE,"float"),r.constants.add("vvOpacityNumber","int",8),r.uniforms.add([new Sr("vvOpacityValues",(e=>e.vvOpacityValues),8),new Sr("vvOpacityOpacities",(e=>e.vvOpacityOpacities),8)]),r.code.add(fr`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):r.code.add(fr`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add(tr.COLORFEATUREATTRIBUTE,"float"),r.constants.add("vvColorNumber","int",Rr),r.uniforms.add(new Sr("vvColorValues",(e=>e.vvColorValues),Rr)),r.uniforms.add(new Cr("vvColorColors",(e=>e.vvColorColors),Rr)),r.code.add(fr`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(tr.COLOR,"vec4"),r.code.add(fr`vec4 getColor(){
return applyOpacity(color);
}`))}const os=Z();function ns(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){const r=!(t.draped&&t.stipplePreferContinuous),{vertex:s,fragment:a}=e;a.include(Tt),s.uniforms.add(new de("stipplePatternPixelSize")),t.draped||(yt(s,t),s.uniforms.add(new vt("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),s.code.add(fr`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),t.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),t.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),s.code.add(fr`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${ls};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),s.code.add(fr`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),s.code.add(fr`
    if (segmentLengthPseudoScreen >= ${r?"patternLength":"1e4"}) {
  `),s.uniforms.add(new vt("pixelRatio",((e,t)=>t.camera.pixelRatio))),s.code.add(fr`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${t.stippleRequiresStretchMeasure?fr`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),a.uniforms.add(new he("stipplePatternTexture")),a.uniforms.add(new de("stipplePatternSDFNormalizer")),a.uniforms.add(new de("stipplePatternTextureSize")),a.uniforms.add(new de("stipplePatternPixelSizeInv")),a.code.add(fr`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),a.code.add(fr`
    float getStippleSDF(out bool isClamped) {
      ${t.stippleRequiresClamp?fr`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:fr`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${t.stippleScaleWithLineWidth?fr`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${t.stippleRequiresStretchMeasure?fr`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:fr`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${t.stippleScaleWithLineWidth?fr`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:fr`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),t.stippleOffColorEnabled?(a.uniforms.add(new St("stippleOffColor",(e=>{return t=e.stippleOffColor,i(t)?k:4===t.length?t:R(os,t[0],t[1],t[2],1);var t}))),a.code.add(fr`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):a.code.add(fr`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(fr`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}const ls=fr.float(.4);var cs;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(cs||(cs={}));class ds extends Ct{constructor(){super(...arguments),this.output=Rt.Color,this.capType=cs.BUTT,this.transparencyPassType=je.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1}}Re([Br({count:Rt.COUNT})],ds.prototype,"output",void 0),Re([Br({count:cs.COUNT})],ds.prototype,"capType",void 0),Re([Br({count:je.COUNT})],ds.prototype,"transparencyPassType",void 0),Re([Br()],ds.prototype,"occluder",void 0),Re([Br()],ds.prototype,"hasSlicePlane",void 0),Re([Br()],ds.prototype,"hasPolygonOffset",void 0),Re([Br()],ds.prototype,"writeDepth",void 0),Re([Br()],ds.prototype,"draped",void 0),Re([Br()],ds.prototype,"stippleEnabled",void 0),Re([Br()],ds.prototype,"stippleOffColorEnabled",void 0),Re([Br()],ds.prototype,"stippleScaleWithLineWidth",void 0),Re([Br()],ds.prototype,"stipplePreferContinuous",void 0),Re([Br()],ds.prototype,"roundJoins",void 0),Re([Br()],ds.prototype,"vvSize",void 0),Re([Br()],ds.prototype,"vvColor",void 0),Re([Br()],ds.prototype,"vvOpacity",void 0),Re([Br()],ds.prototype,"falloffEnabled",void 0),Re([Br()],ds.prototype,"innerColorEnabled",void 0),Re([Br()],ds.prototype,"hasOccludees",void 0),Re([Br()],ds.prototype,"hasMultipassTerrain",void 0),Re([Br()],ds.prototype,"cullAboveGround",void 0),Re([Br()],ds.prototype,"wireframe",void 0),Re([Br({constValue:!0})],ds.prototype,"stippleRequiresClamp",void 0),Re([Br({constValue:!0})],ds.prototype,"stippleRequiresStretchMeasure",void 0),Re([Br({constValue:!0})],ds.prototype,"hasVvInstancing",void 0),Re([Br({constValue:!0})],ds.prototype,"hasSliceTranslatedView",void 0);const hs=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:1,build:function(e){const r=new xt,i=e.hasMultipassTerrain&&(e.output===Rt.Color||e.output===Rt.Alpha);r.include(xr),r.include(as,e),r.include(ns,e),e.output===Rt.Depth&&r.include(Et,e),wt(r,e);const{vertex:s,fragment:a}=r;s.uniforms.add([new Ot("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new At("nearFar",((e,t)=>t.camera.nearFar)),new vt("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new St("viewport",((e,t)=>t.camera.fullViewport))]),s.constants.add("LARGE_HALF_FLOAT","float",65500),r.attributes.add(tr.POSITION,"vec3"),r.attributes.add(tr.SUBDIVISIONFACTOR,"float"),r.attributes.add(tr.UV0,"vec2"),r.attributes.add(tr.AUXPOS1,"vec3"),r.attributes.add(tr.AUXPOS2,"vec3"),r.varyings.add("vColor","vec4"),r.varyings.add("vpos","vec3"),r.varyings.add("linearDepth","float"),i&&r.varyings.add("depth","float");const o=e.capType===cs.ROUND,n=e.stippleEnabled&&e.stippleScaleWithLineWidth||o;n&&r.varyings.add("vLineWidth","float");const l=e.stippleEnabled&&e.stippleScaleWithLineWidth;l&&r.varyings.add("vLineSizeInv","float");const c=e.innerColorEnabled||o;c&&r.varyings.add("vLineDistance","float");const d=e.stippleEnabled&&o,h=e.falloffEnabled||d;h&&r.varyings.add("vLineDistanceNorm","float"),o&&(r.varyings.add("vSegmentSDF","float"),r.varyings.add("vReverseSegmentSDF","float")),s.code.add(fr`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(fr`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(fr`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${i?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),s.uniforms.add(new vt("pixelRatio",((e,t)=>t.camera.pixelRatio))),s.code.add(fr`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${n?fr`vLineWidth = lineWidth;`:""}
      ${l?fr`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),(e.stippleEnabled||o)&&s.code.add(fr`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${o?fr`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.code.add(fr`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?s.code.add(fr`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?fr`min(1.0, subdivisionFactor * ${fr.float(1.5)})`:fr`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):s.code.add(fr`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const u=e.capType!==cs.BUTT;return s.code.add(fr`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${u?fr`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.code.add(fr`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${h||c?fr`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${c?fr`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${h?fr`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),o&&s.code.add(fr`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?s.uniforms.add(new vt("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):s.code.add(fr`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.code.add(fr`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?s.code.add(fr`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.code.add(fr`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.code.add(fr`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),s.code.add(fr`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `),i&&r.include(Dt,e),r.include(bt,e),a.include(It),a.code.add(fr`
  void main() {
    discardBySlice(vpos);
    ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?a.code.add(fr`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(o&&a.code.add(fr`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${fr.float(Pt)}) {
        discard;
      }
    `),d?a.code.add(fr`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${fr.float(Pt)}, stippleCoverage);
      `):a.code.add(fr`float stippleAlpha = getStippleAlpha();`),a.uniforms.add(new St("intrinsicColor",(e=>e.color))),a.code.add(fr`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(a.uniforms.add(new St("innerColor",(e=>t(e.innerColor,e.color)))),a.uniforms.add(new vt("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),a.code.add(fr`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.code.add(fr`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(a.uniforms.add(new vt("falloff",(e=>e.falloff))),a.code.add(fr`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),a.code.add(fr`
    if (finalColor.a < ${fr.float(Pt)}) {
      discard;
    }

    ${e.output===Rt.Alpha?fr`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===Rt.Color?fr`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===Rt.Color&&e.transparencyPassType===je.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===Rt.Highlight?fr`gl_FragColor = vec4(1.0);`:""}
    ${e.output===Rt.Depth?fr`outputDepth(linearDepth);`:""}
  }
  `),r}},Symbol.toStringTag,{value:"Module"})),us=new Map([[tr.POSITION,0],[tr.SUBDIVISIONFACTOR,1],[tr.UV0,2],[tr.AUXPOS1,3],[tr.AUXPOS2,4],[tr.COLOR,5],[tr.COLORFEATUREATTRIBUTE,5],[tr.SIZE,6],[tr.SIZEFEATUREATTRIBUTE,6],[tr.OPACITYFEATUREATTRIBUTE,7]]);class ps extends Mt{constructor(e,t,r){super(e,t,r),this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=ps.shader.get().build(this.configuration);return new Lt(e.rctx,t,us)}destroy(){super.destroy(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,t){if(this.program.bindPass(e,t),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.configuration.stippleEnabled){const{pixelSize:e,sdfNormalizer:t,pixels:r}=s(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",t),this.program.setUniform1f("stipplePatternTextureSize",r),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e)}}_makePipelineState(e,t){const r=this.configuration,i=e===je.NONE,s=e===je.FrontFace;return Vr({blending:r.output===Rt.Color||r.output===Rt.Alpha?i?jr:Gr(e):null,depthTest:{func:qr(e)},depthWrite:i?r.writeDepth&&kr:Zr(e),colorWrite:$r,stencilWrite:r.hasOccludees?Nt:null,stencilTest:r.hasOccludees?t?zt:Ut:null,polygonOffset:i||s?r.hasPolygonOffset&&fs:Xr})}initializePipeline(){const e=this.configuration;if(e.occluder){const t=e.hasPolygonOffset&&fs;this._occluderPipelineTransparent=Vr({blending:jr,polygonOffset:t,depthTest:Ht,depthWrite:null,colorWrite:$r,stencilWrite:null,stencilTest:Bt}),this._occluderPipelineOpaque=Vr({blending:jr,polygonOffset:t,depthTest:Ht,depthWrite:null,colorWrite:$r,stencilWrite:Wt,stencilTest:Vt}),this._occluderPipelineMaskWrite=Vr({blending:null,polygonOffset:t,depthTest:jt,depthWrite:null,colorWrite:null,stencilWrite:Nt,stencilTest:zt})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?tt.LINES:tt.TRIANGLE_STRIP}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===nt.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===nt.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}ps.shader=new Ft(hs,(()=>Promise.resolve().then((()=>hs))));const fs={factor:0,units:-4},ms=dt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");var gs;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(gs||(gs={}));class vs extends mr{constructor(e){super(e,new Ts),this._vertexAttributeLocations=us,this.techniqueConfig=new ds,this.layout=this.createLayout()}isClosed(e,t){return Cs(this.parameters,e,t)}getConfiguration(e,t){this.techniqueConfig.output=e,this.techniqueConfig.draped=t.slot===nt.DRAPED_MATERIAL;const r=s(this.parameters.stipplePattern)&&e!==Rt.Highlight;return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleOffColorEnabled=r&&s(this.parameters.stippleOffColor),this.techniqueConfig.stippleScaleWithLineWidth=r&&this.parameters.stippleScaleWithLineWidth,this.techniqueConfig.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.roundJoins="round"===this.parameters.join,this.techniqueConfig.capType=this.parameters.cap,this.techniqueConfig.hasPolygonOffset=this.parameters.hasPolygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.parameters.innerWidth>0&&s(this.parameters.innerColor),this.techniqueConfig.falloffEnabled=this.parameters.falloff>0,this.techniqueConfig.occluder=this.parameters.renderOccluded===gr.OccludeAndTransparentStencil,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.wireframe=this.parameters.wireframe,this.techniqueConfig}intersect(e,t,r,i,a,o,n,l,c){s(c)?this._intersectDrapedLineGeometry(e,i,c,o,n):this._intersectLineGeometry(e,t,r,i,n)}_intersectDrapedLineGeometry(e,t,r,i,s){if(!t.options.selectionMode)return;const a=e.vertexAttributes.get(tr.POSITION).data,o=e.vertexAttributes.get(tr.SIZE);let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const t=e.vertexAttributes.get(tr.SIZEFEATUREATTRIBUTE).data[0];n*=C(this.parameters.vvSizeOffset[0]+t*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else o&&(n*=o.data[0]);const l=i[0],c=i[1],d=(n/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,u=0;for(let e=0;e<a.length-5;e+=3){const t=a[e],r=a[e+1],i=l-t,s=c-r,o=a[e+3]-t,n=a[e+4]-r,d=C((o*i+n*s)/(o*o+n*n),0,1),p=o*d-i,f=n*d-s,m=p*p+f*f;m<h&&(h=m,u=e/3)}h<d*d&&s(r.dist,r.normal,u,!1)}_intersectLineGeometry(e,t,r,i,s){if(!i.options.selectionMode||Ur(t))return;if(!ut(r))return void ms.error("intersection assumes a translation-only matrix");const a=e.vertexAttributes,o=a.get(tr.POSITION).data;let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=a.get(tr.SIZEFEATUREATTRIBUTE).data[0];n*=C(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else a.has(tr.SIZE)&&(n*=a.get(tr.SIZE).data[0]);const c=i.camera,d=As;l(d,i.point);const h=n*c.pixelRatio/2+4*c.pixelRatio;x(Us[0],d[0]-h,d[1]+h,0),x(Us[1],d[0]+h,d[1]+h,0),x(Us[2],d[0]+h,d[1]-h,0),x(Us[3],d[0]-h,d[1]-h,0);for(let e=0;e<4;e++)if(!c.unprojectFromRenderScreen(Us[e],Hs[e]))return;cr(c.eye,Hs[0],Hs[1],Bs),cr(c.eye,Hs[1],Hs[2],Ws),cr(c.eye,Hs[2],Hs[3],Vs),cr(c.eye,Hs[3],Hs[0],js);let u=Number.MAX_VALUE,p=0;const f=Rs(this.parameters,a,e.indices)?o.length-2:o.length-5;for(let e=0;e<f;e+=3){xs[0]=o[e]+r[12],xs[1]=o[e+1]+r[13],xs[2]=o[e+2]+r[14];const t=(e+3)%o.length;if(Es[0]=o[t]+r[12],Es[1]=o[t+1]+r[13],Es[2]=o[t+2]+r[14],dr(Bs,xs)<0&&dr(Bs,Es)<0||dr(Ws,xs)<0&&dr(Ws,Es)<0||dr(Vs,xs)<0&&dr(Vs,Es)<0||dr(js,xs)<0&&dr(js,Es)<0)continue;if(c.projectToRenderScreen(xs,Ds),c.projectToRenderScreen(Es,bs),Ds[2]<0&&bs[2]>0){E(ws,xs,Es);const e=c.frustum,t=-dr(e[ir.NEAR],xs)/w(ws,hr(e[ir.NEAR]));O(ws,ws,t),A(xs,xs,ws),c.projectToRenderScreen(xs,Ds)}else if(Ds[2]>0&&bs[2]<0){E(ws,Es,xs);const e=c.frustum,t=-dr(e[ir.NEAR],Es)/w(ws,hr(e[ir.NEAR]));O(ws,ws,t),A(Es,Es,ws),c.projectToRenderScreen(Es,bs)}else if(Ds[2]<0&&bs[2]<0)continue;Ds[2]=0,bs[2]=0;const i=ar(or(Ds,bs,Fs),d);i<u&&(u=i,D(Is,xs),D(Ps,Es),p=e/3)}const m=i.rayBegin,g=i.rayEnd;if(u<h*h){let e=Number.MAX_VALUE;if(nr(or(Is,Ps,Fs),or(m,g,Ms),Os)){E(Os,Os,m);const t=b(Os);O(Os,Os,1/t),e=t/I(m,g)}s(e,Os,p,!1)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return null;const i=e.indices,s=r.get(tr.POSITION);return pr(s,i?i.get(tr.POSITION):null,i&&Rs(this.parameters,r,i),t)}createLayout(){const e=ur().vec3f(tr.POSITION).f32(tr.SUBDIVISIONFACTOR).vec2f(tr.UV0).vec3f(tr.AUXPOS1).vec3f(tr.AUXPOS2);return this.parameters.vvSizeEnabled?e.f32(tr.SIZEFEATUREATTRIBUTE):e.f32(tr.SIZE),this.parameters.vvColorEnabled?e.f32(tr.COLORFEATUREATTRIBUTE):e.vec4f(tr.COLOR),this.parameters.vvOpacityEnabled&&e.f32(tr.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new ys(this.layout,this.parameters)}requiresSlot(e,t){if(e===nt.DRAPED_MATERIAL)return!0;if(this.parameters.renderOccluded===gr.OccludeAndTransparentStencil)return e===nt.OPAQUE_MATERIAL||e===nt.OCCLUDER_MATERIAL||e===nt.TRANSPARENT_OCCLUDER_MATERIAL;const r=ue(t);return r===Rt.Color||r===Rt.Alpha?e===(this.parameters.writeDepth?nt.TRANSPARENT_MATERIAL:nt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e===nt.OPAQUE_MATERIAL}createGLMaterial(e){return e.output===Rt.Color||e.output===Rt.Alpha||e.output===Rt.Highlight||e.output===Rt.Depth?new _s(e):null}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0)}}class _s extends Gt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==Rt.Color&&this._output!==Rt.Alpha||this._updateOccludeeState(e),this.ensureTechnique(ps,e)}}class Ts extends Er{constructor(){super(...arguments),this.width=0,this.color=q,this.join="miter",this.cap=cs.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}}class ys{constructor(e,t){this.parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const r=t.stipplePattern?1:0;switch(this.parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=1+r}}_isClosed(e){return Rs(this.parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.indices.get(tr.POSITION).length/2+1,r=this._isClosed(e);let i=r?2:4;return i+=((r?t:t-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),i+=2,this.parameters.wireframe&&(i=2+4*(i-2)),i}write(e,t,r,i){const s=Ls,a=Ns,o=zs,n=t.vertexAttributes.get(tr.POSITION).data,l=t.indices&&t.indices.get(tr.POSITION),c=t.vertexAttributes.get(tr.DISTANCETOSTART)?.data;l&&l.length!==2*(n.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let d=1,h=0;this.parameters.vvSizeEnabled?h=t.vertexAttributes.get(tr.SIZEFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(tr.SIZE)&&(d=t.vertexAttributes.get(tr.SIZE).data[0]);let u=[1,1,1,1],p=0;this.parameters.vvColorEnabled?p=t.vertexAttributes.get(tr.COLORFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(tr.COLOR)&&(u=t.vertexAttributes.get(tr.COLOR).data);let f=0;this.parameters.vvOpacityEnabled&&(f=t.vertexAttributes.get(tr.OPACITYFEATUREATTRIBUTE).data[0]);const m=n.length/3,g=e.transformation,v=new Float32Array(r.buffer),_=this.vertexBufferLayout.stride/4;let T=i*_;const y=T;let S=0;const R=c?(e,t,r)=>S=c[r]:(e,t,r)=>S+=I(e,t),C=(e,t,r,i,s,a,o)=>{if(v[T++]=t[0],v[T++]=t[1],v[T++]=t[2],v[T++]=i,v[T++]=o,v[T++]=s,v[T++]=e[0],v[T++]=e[1],v[T++]=e[2],v[T++]=r[0],v[T++]=r[1],v[T++]=r[2],this.parameters.vvSizeEnabled?v[T++]=h:v[T++]=d,this.parameters.vvColorEnabled)v[T++]=p;else{const e=Math.min(4*a,u.length-4);v[T++]=u[e+0],v[T++]=u[e+1],v[T++]=u[e+2],v[T++]=u[e+3]}this.parameters.vvOpacityEnabled&&(v[T++]=f)};T+=_,x(a,n[0],n[1],n[2]),g&&P(a,a,g);const E=this._isClosed(t);if(E){const e=n.length-3;x(s,n[e],n[e+1],n[e+2]),g&&P(s,s,g)}else x(o,n[3],n[4],n[5]),g&&P(o,o,g),C(a,a,o,1,gs.LEFT_CAP_START,0,0),C(a,a,o,1,gs.RIGHT_CAP_START,0,0),D(s,a),D(a,o);const w=E?0:1,O=E?m:m-1;for(let e=w;e<O;e++){const t=(e+1)%m*3;x(o,n[t+0],n[t+1],n[t+2]),g&&P(o,o,g),R(s,a,e),C(s,a,o,0,gs.LEFT_JOIN_END,e,S),C(s,a,o,0,gs.RIGHT_JOIN_END,e,S);const r=this.numJoinSubdivisions;for(let t=0;t<r;++t){const i=(t+1)/(r+1);C(s,a,o,i,gs.LEFT_JOIN_END,e,S),C(s,a,o,i,gs.RIGHT_JOIN_END,e,S)}C(s,a,o,1,gs.LEFT_JOIN_START,e,S),C(s,a,o,1,gs.RIGHT_JOIN_START,e,S),D(s,a),D(a,o)}E?(x(o,n[3],n[4],n[5]),g&&P(o,o,g),S=R(s,a,O),C(s,a,o,0,gs.LEFT_JOIN_END,w,S),C(s,a,o,0,gs.RIGHT_JOIN_END,w,S)):(S=R(s,a,O),C(s,a,a,0,gs.LEFT_CAP_END,O,S),C(s,a,a,0,gs.RIGHT_CAP_END,O,S)),Ss(v,y+_,v,y,_),T=Ss(v,T-_,v,T,_),this.parameters.wireframe&&this._addWireframeVertices(r,y,T,_)}_addWireframeVertices(e,t,r,i){const s=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let o=0;const n=e=>o=Ss(a,e,s,o,i);for(let e=0;e<a.length-1;e+=2*i)n(e),n(e+2*i),n(e+1*i),n(e+2*i),n(e+1*i),n(e+3*i)}}function Ss(e,t,r,i,s){for(let a=0;a<s;a++)r[i++]=e[t++];return i}function Rs(e,t,r){return Cs(e,t.get(tr.POSITION).data,r?r.get(tr.POSITION):null)}function Cs(e,t,r){return!!e.isClosed&&(r?r.length>2:t.length>6)}const xs=T(),Es=T(),ws=T(),Os=T(),As=T(),Ds=rr(),bs=rr(),Is=T(),Ps=T(),Fs=sr(),Ms=sr(),Ls=T(),Ns=T(),zs=T(),Us=[rr(),rr(),rr(),rr()],Hs=[T(),T(),T(),T()],Bs=lr(),Ws=lr(),Vs=lr(),js=lr();class Gs{constructor(e,t=125e4){this._originSR=e,this._gridSize=t,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+Fe()}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=null;if(s(t))return this._origins.set(this._rootOriginId,Wi(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const r=Wi(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,r),r}const r=this._gridSize,i=Math.round(e[0]/r),a=Math.round(e[1]/r),o=Math.round(e[2]/r),n=`${i}/${a}/${o}`;let l=this._origins.get(n);const c=.5*r;if(E(qs,e,t.vec3),qs[0]=Math.abs(qs[0]),qs[1]=Math.abs(qs[1]),qs[2]=Math.abs(qs[2]),qs[0]<c&&qs[1]<c&&qs[2]<c){if(l){const t=Math.max(...qs);if(E(qs,e,l.vec3),qs[0]=Math.abs(qs[0]),qs[1]=Math.abs(qs[1]),qs[2]=Math.abs(qs[2]),Math.max(...qs)<t)return l}return t}return l||(l=Wi(i*r,a*r,o*r,n),this._origins.set(n,l)),l}_drawOriginBox(e,t=$(1,1,0,1)){const r=window.view,i=r._stage,s=t.toString();if(!this._objects.has(s)){this._material=new vs({width:2,color:t}),i.add(this._material);const e=new pe({isPickable:!1}),r=new fe({castShadow:!1});i.add(r),e.add(r),i.add(e),this._objects.set(s,r)}const a=this._objects.get(s),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=o.length,l=new Array(3*n),c=new Uint16Array(2*(n-1)),d=.5*this._gridSize;for(let t=0;t<n;t++)l[3*t+0]=e[0]+(1&o[t]?d:-d),l[3*t+1]=e[1]+(2&o[t]?d:-d),l[3*t+2]=e[2]+(4&o[t]?d:-d),t>0&&(c[2*t+0]=t-1,c[2*t+1]=t);U(l,this._originSR,0,l,r.renderSpatialReference,0,n);const h=new qt([[tr.POSITION,{size:3,data:l,exclusive:!0}]],[[tr.POSITION,c]],Ge.Line);i.add(h),a.addGeometry(h,this._material,ae)}}const qs=T();class ks{constructor(){this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=T(),this.parallax={anchorPointClouds:T(),cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:se()},this.parallaxNew={anchorPointClouds:T(),cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:se()},this.crossFade={enabled:!1,factor:0,distanceThresholdFactor:.3},this.fadeInOut={stage:$s.FINISHED,factor:0,distanceThresholdFactor:.6},this.fadeIn={stage:Zs.FINISHED,factor:0,distanceThresholdFactor:2},this.fadeInOutHeight={stage:Xs.FINISHED,factor:-1}}}var Zs,$s,Xs;function Js(e){e.include(kt),e.uniforms.add([new Zt("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new At("nearFar",((e,t)=>t.camera.nearFar))]),e.code.add(fr`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}!function(e){e[e.FINISHED=0]="FINISHED",e[e.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",e[e.FADE_IN=2]="FADE_IN"}(Zs||(Zs={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.FADE_OUT=1]="FADE_OUT",e[e.SWITCH=2]="SWITCH",e[e.FADE_IN=3]="FADE_IN"}($s||($s={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.HEIGHT_FADE=1]="HEIGHT_FADE"}(Xs||(Xs={}));class Ys{constructor(){this.enabled=!1}}function Qs(e,t){const r=e.fragment.uniforms;r.add(new At("nearFar",((e,t)=>t.camera.nearFar))),r.add(new Zt("depthMap",((e,t)=>t.linearDepthTexture))),r.add(new Ot("view",((e,t)=>t.ssr.camera.viewMatrix))),r.add(new Ot("proj",((e,t)=>t.ssr.camera.projectionMatrix))),r.add(new vt("invResolutionHeight",((e,t)=>1/t.ssr.camera.height))),r.add(new Zt("lastFrameColorMap",((e,t)=>t.ssr.lastFrameColorTexture))),r.add(new Ot("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))),e.fragment.include(kt),e.fragment.code.add(fr`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class Ks{constructor(){this.reprojectionMatrix=se()}}class ea{constructor(e,t,r){this.shadowMap=e,this.ssaoHelper=t,this.slicePlane=r,this.slot=nt.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this._inverseViewport=Kr(),this.lighting=new wr,this.ssr=new Ks,this.multipassTerrain=new $t,this.multipassGeometry=new Ys,this.clouds=new ks,this.overlays=[]}get camera(){return this._camera}set camera(e){this._camera=this.ssr.camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}}class ta{constructor(e,t,r,i=null){this.rctx=e,this.sliceHelper=i,this.lastFrameCamera=new ct,this.pass=ot.MATERIAL,this.renderOccludedMask=ia,this.bindParameters=new ea(t,r,s(i)?i.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=ia}get isHighlightPass(){return this.pass===ot.MATERIAL_HIGHLIGHT}}class ra extends ta{constructor(e,t,r,i,s){super(e,r,i,s),this.offscreenRenderingHelper=t,this.sliceHelper=s}}const ia=gr.Occlude|gr.OccludeAndTransparent|gr.OccludeAndTransparentStencil;var sa;!function(e){e[e.Highlight=0]="Highlight",e[e.Default=1]="Default"}(sa||(sa={}));class aa{constructor(){this.camera=new ct,this.lightMat=se()}}class oa{constructor(e,t,r=0){this.rctx=e,this.viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this.maxTextureSize=0,this.numCascades=1,this.maxNumCascades=4,this.splitSchemeLambda=0,this.warp=!0,this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=Z(),this._cascades=[new aa,new aa,new aa,new aa],this.maxTextureSize=this.rctx.parameters.maxTextureSize,this.snapshotCount=r}get depthTexture(){return this._depthTexture}get textureSize(){return this._textureSize}get cascadeDistances(){return R(this._usedCascadeDistances,this._cascadeDistances[0],this.numCascades>1?this._cascadeDistances[1]:1/0,this.numCascades>2?this._cascadeDistances[2]:1/0,this.numCascades>3?this._cascadeDistances[3]:1/0)}dispose(){this._discardDepthTexture(),this._discardAllSnapshots()}set maxCascades(e){this.maxNumCascades=C(Math.floor(e),1,4)}get maxCascades(){return this.maxNumCascades}set enabled(e){this._enabled=e,e||(this._discardDepthTexture(),this._discardAllSnapshots())}get enabled(){return this._enabled}get ready(){return this._enabled&&s(this._depthTexture)}get snapshotCount(){return this._snapshots.length}set snapshotCount(e){const t=this._snapshots.length;if(e>t){const r=e-t;this._snapshots.length=e;for(let e=0;e<r;++e)this._snapshots[t+e]=null}else if(e<this.snapshotCount){const r=t-e;for(let t=0;t<r;++t)this._discardSnapshot(e+t);this._snapshots.length=e}}getSnapshot(e){return this.enabled?this._snapshots[e]:null}getCascades(){for(let e=0;e<this.numCascades;++e)Sa[e]=this._cascades[e];return Sa.length=this.numCascades,Sa}start(e,t,r){ht(this.enabled),this._textureSize=this._computeTextureSize(e.fullWidth,e.fullHeight),this._ensureDepthTexture();const{near:i,far:s}=this._clampNearFar(r);this._computeCascadeDistances(s,i),this._setupMatrices(e,t);const a=e.viewMatrix,o=e.projectionMatrix;for(let e=0;e<this.numCascades;++e)this._constructCascade(e,o,a,t);this.lastOrigin=null,this.clear()}finish(e){ht(this.enabled),this.rctx.bindFramebuffer(e)}getShadowMapMatrices(e){if(!this.lastOrigin||!F(e,this.lastOrigin)){this.lastOrigin=this.lastOrigin||T(),D(this.lastOrigin,e);for(let t=0;t<this.numCascades;++t){Y(Ra,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)Ca[16*t+e]=Ra[e]}}return Ca}takeCascadeSnapshotTo(e,t){ht(this.enabled);const r=this._ensureSnapshot(t);this._bindFbo();const i=this.rctx,s=i.bindTexture(r,ii.TEXTURE_UNIT_FOR_UPDATES);i.gl.copyTexSubImage2D(Je.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),i.bindTexture(s,ii.TEXTURE_UNIT_FOR_UPDATES)}clear(){const e=this.rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(rt.COLOR_BUFFER_BIT|rt.DEPTH_BUFFER_BIT)}_computeTextureSize(e,t){const r=.5*Math.log(e*e+t*t)*Math.LOG2E,i=2**Math.round(r+.35);return Math.min(this.maxTextureSize,2*i)}_ensureDepthTexture(){if(s(this._depthTexture)&&this._depthTexture.descriptor.width===this._textureSize)return;this._discardDepthTexture();const e={target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE,samplingMode:et.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};this._depthTexture=new ii(this.rctx,e),this._fbo=new at(this.rctx,{colorTarget:$e.TEXTURE,depthStencilTarget:Xe.DEPTH_RENDER_BUFFER,width:this._textureSize,height:this._textureSize},this._depthTexture)}_ensureSnapshot(e){let t=this._snapshots[e];if(s(t)&&t.descriptor.width===this._textureSize)return t;this._discardSnapshot(e);const r={target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE,samplingMode:et.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};return t=new ii(this.rctx,r),this._snapshots[e]=t,t}_discardDepthTexture(){this._fbo=r(this._fbo),this._depthTexture=r(this._depthTexture)}_discardSnapshot(e){this._snapshots[e]=r(this._snapshots[e])}_discardAllSnapshots(){for(let e=0;e<this.snapshotCount;++e)this._discardSnapshot(e)}_bindFbo(){const e=this.rctx;e.unbindTexture(this._depthTexture),e.bindFramebuffer(this._fbo)}_constructCascade(e,t,r,i){const s=this._cascades[e],a=-this._cascadeDistances[e],o=-this._cascadeDistances[e+1],n=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]),l=(t[10]*o+t[14])/Math.abs(t[11]*o+t[15]);ht(n<l);for(let e=0;e<8;++e){R(da,e%4==0||e%4==3?-1:1,e%4==0||e%4==1?-1:1,e<4?n:l,1),M(ha[e],da,ca);for(let t=0;t<3;++t)ha[e][t]/=ha[e][3]}L(ya,ha[0]),Y(na,Ta,ya),s.camera.viewMatrix=na;for(let e=0;e<8;++e)P(ha[e],ha[e],s.camera.viewMatrix);D(ua,ha[0]),D(pa,ha[0]);for(let e=1;e<8;++e)for(let t=0;t<3;++t)ua[t]=Math.min(ua[t],ha[e][t]),pa[t]=Math.max(pa[t],ha[e][t]);ua[2]-=200,pa[2]+=200,s.camera.near=-pa[2],s.camera.far=-ua[2],this.warp?this._constructTrapezoidalProjection(r,i,s):this._constructOrthogonalProjection(s),Q(s.lightMat,s.camera.projectionMatrix,s.camera.viewMatrix);const c=this._textureSize/2;s.camera.viewport[0]=e%2==0?0:c,s.camera.viewport[1]=0===Math.floor(e/2)?0:c,s.camera.viewport[2]=c,s.camera.viewport[3]=c}_constructOrthogonalProjection(e){K(e.camera.projectionMatrix,ua[0],pa[0],ua[1],pa[1],e.camera.near,e.camera.far)}_constructTrapezoidalProjection(e,t,r){const i=1/ha[0][3],s=1/ha[4][3];ht(i<s);let a=i+Math.sqrt(i*s);const o=Math.sin(N(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));a/=o,function(e,t,r,i,s,a,o,n){c(xa,0,0);for(let t=0;t<4;++t)d(xa,xa,e[t]);h(xa,xa,.25),c(Ea,0,0);for(let t=4;t<8;++t)d(Ea,Ea,e[t]);h(Ea,Ea,.25),u(wa[0],e[4],e[5],.5),u(wa[1],e[5],e[6],.5),u(wa[2],e[6],e[7],.5),u(wa[3],e[7],e[4],.5);let _=0,T=p(wa[0],xa);for(let e=1;e<4;++e){const t=p(wa[e],xa);t<T&&(T=t,_=e)}f(Oa,wa[_],e[_+4]);const y=Oa[0];let S,R;Oa[0]=-Oa[1],Oa[1]=y,f(Aa,Ea,xa),m(Aa,Oa)<0&&g(Oa,Oa),u(Oa,Oa,Aa,r),v(Oa,Oa),S=R=m(f(Da,e[0],xa),Oa);for(let t=1;t<8;++t){const r=m(f(Da,e[t],xa),Oa);r<S?S=r:r>R&&(R=r)}l(i,xa),h(Da,Oa,S-t),d(i,i,Da);let C=-1,x=1,E=0,w=0;for(let t=0;t<8;++t){f(ba,e[t],i),v(ba,ba);const r=Oa[0]*ba[1]-Oa[1]*ba[0];r>0?r>C&&(C=r,E=t):r<x&&(x=r,w=t)}ft(C>0,"leftArea"),ft(x<0,"rightArea"),h(Ia,Oa,S),d(Ia,Ia,xa),h(Pa,Oa,R),d(Pa,Pa,xa),Fa[0]=-Oa[1],Fa[1]=Oa[0];const O=mt(i,e[w],Pa,d(Da,Pa,Fa),1,s),A=mt(i,e[E],Pa,Da,1,a),D=mt(i,e[E],Ia,d(Da,Ia,Fa),1,o),b=mt(i,e[w],Ia,Da,1,n);ft(O,"rayRay"),ft(A,"rayRay"),ft(D,"rayRay"),ft(b,"rayRay")}(ha,a,o,fa,ma,ga,va,_a),function(e,t,r,i,s){f(za,r,i),h(za,za,.5),Ua[0]=za[0],Ua[1]=za[1],Ua[2]=0,Ua[3]=za[1],Ua[4]=-za[0],Ua[5]=0,Ua[6]=za[0]*za[0]+za[1]*za[1],Ua[7]=za[0]*za[1]-za[1]*za[0],Ua[8]=1,Ua[Ma(0,2)]=-m(Na(Ua,0),e),Ua[Ma(1,2)]=-m(Na(Ua,1),e);let a=m(Na(Ua,0),r)+Ua[Ma(0,2)],o=m(Na(Ua,1),r)+Ua[Ma(1,2)],n=m(Na(Ua,0),i)+Ua[Ma(0,2)],l=m(Na(Ua,1),i)+Ua[Ma(1,2)];a=-(a+n)/(o+l),Ua[Ma(0,0)]+=Ua[Ma(1,0)]*a,Ua[Ma(0,1)]+=Ua[Ma(1,1)]*a,Ua[Ma(0,2)]+=Ua[Ma(1,2)]*a,a=1/(m(Na(Ua,0),r)+Ua[Ma(0,2)]),o=1/(m(Na(Ua,1),r)+Ua[Ma(1,2)]),Ua[Ma(0,0)]*=a,Ua[Ma(0,1)]*=a,Ua[Ma(0,2)]*=a,Ua[Ma(1,0)]*=o,Ua[Ma(1,1)]*=o,Ua[Ma(1,2)]*=o,Ua[Ma(2,0)]=Ua[Ma(1,0)],Ua[Ma(2,1)]=Ua[Ma(1,1)],Ua[Ma(2,2)]=Ua[Ma(1,2)],Ua[Ma(1,2)]+=1,a=m(Na(Ua,1),t)+Ua[Ma(1,2)],o=m(Na(Ua,2),t)+Ua[Ma(2,2)],n=m(Na(Ua,1),r)+Ua[Ma(1,2)],l=m(Na(Ua,2),r)+Ua[Ma(2,2)],a=-.5*(a/o+n/l),Ua[Ma(1,0)]+=Ua[Ma(2,0)]*a,Ua[Ma(1,1)]+=Ua[Ma(2,1)]*a,Ua[Ma(1,2)]+=Ua[Ma(2,2)]*a,a=m(Na(Ua,1),t)+Ua[Ma(1,2)],o=m(Na(Ua,2),t)+Ua[Ma(2,2)],n=-o/a,Ua[Ma(1,0)]*=n,Ua[Ma(1,1)]*=n,Ua[Ma(1,2)]*=n,s[0]=Ua[0],s[1]=Ua[1],s[2]=0,s[3]=Ua[2],s[4]=Ua[3],s[5]=Ua[4],s[6]=0,s[7]=Ua[5],s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=Ua[6],s[13]=Ua[7],s[14]=0,s[15]=Ua[8]}(fa,ma,va,_a,r.camera.projectionMatrix),r.camera.projectionMatrix[10]=2/(ua[2]-pa[2]),r.camera.projectionMatrix[14]=-(ua[2]+pa[2])/(ua[2]-pa[2])}_setupMatrices(e,t){Q(la,e.projectionMatrix,e.viewMatrix),ee(ca,la);const r=this.viewingMode===G.Global?e.eye:x(ya,0,0,1);te(Ta,[0,0,0],[-t[0],-t[1],-t[2]],r)}_clampNearFar(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}_computeCascadeDistances(e,t){this.numCascades=Math.min(1+Math.floor(pt(e/t,4)),this.maxNumCascades);const r=(e-t)/this.numCascades,i=(e/t)**(1/this.numCascades);let s=t,a=t;for(let e=0;e<this.numCascades+1;++e)this._cascadeDistances[e]=z(s,a,this.splitSchemeLambda),s*=i,a+=r}get gpuMemoryUsage(){return this._snapshots.reduce(((e,t)=>e+si(t)),this._fbo?.gpuMemoryUsage??0)}get test(){const e=this;return{maxNumCascades:this.maxNumCascades,cascades:this._cascades,textureSize:this._textureSize,set splitSchemeLambda(t){e.splitSchemeLambda=t},get splitSchemeLambda(){return e.splitSchemeLambda},set warp(t){e.warp=t},get warp(){return e.warp}}}}const na=se(),la=se(),ca=se(),da=Z(),ha=[];for(let e=0;e<8;++e)ha.push(Z());const ua=T(),pa=T(),fa=Kr(),ma=Kr(),ga=Kr(),va=Kr(),_a=Kr(),Ta=se(),ya=T(),Sa=[],Ra=se(),Ca=new Float32Array(64),xa=Kr(),Ea=Kr(),wa=[Kr(),Kr(),Kr(),Kr()],Oa=Kr(),Aa=Kr(),Da=Kr(),ba=Kr(),Ia=Kr(),Pa=Kr(),Fa=Kr();function Ma(e,t){return 3*t+e}const La=Kr();function Na(e,t){return c(La,e[t],e[t+3]),La}const za=Kr(),Ua=ri();class Ha{constructor(){this.adds=new Oe,this.removes=new Oe,this.updates=new Oe({allocator:e=>e||new Ba,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class Ba{}class Wa{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}var Va;function ja(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new Wa,t.set(e,r)),r};return e.removes.forAll((e=>{Ga(e)&&r(e.material).removes.push(e)})),e.adds.forAll((e=>{Ga(e)&&r(e.material).adds.push(e)})),e.updates.forAll((e=>{Ga(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}function Ga(e){return e.data.indexCount>=1}!function(e){var t;!function(e){e[e.ADD=1]="ADD",e[e.UPDATE=2]="UPDATE",e[e.REMOVE=4]="REMOVE"}(e.Geometry||(e.Geometry={})),(t=e.State||(e.State={}))[t.VISIBILITIES=1]="VISIBILITIES",t[t.VERTEXATTRS=2]="VERTEXATTRS",t[t.TRANSFORMATION=4]="TRANSFORMATION",t[t.HIGHLIGHTS=8]="HIGHLIGHTS",t[t.OCCLUDEES=16]="OCCLUDEES"}(Va||(Va={}));class qa extends Or{constructor(e=T()){super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}}class ka{constructor(){this.enabled=!0,this._time=0}get time(){return Ae(this._time)}advance(e){return s(e.forcedTime)?this._time!==e.forcedTime&&(this._time=e.forcedTime,!0):!(!this.enabled||0===e.dt||(this._time+=e.dt,0))}}function Za(e,t){t.spherical?e.vertex.code.add(fr`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(fr`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),t.spherical?e.vertex.code.add(fr`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(fr`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function $a(e){e.fragment.code.add(fr`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function Xa(e){e.fragment.code.add(fr`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function Ja(e){e.fragment.code.add(fr`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}class Ya extends Xt{constructor(e,t){super(e,"samplerCube",Jt.Pass,((r,i,s)=>r.bindTexture(e,t(i,s))))}}function Qa(e){const t=e.fragment;t.uniforms.add([new Ot("rotationMatrixClouds",((e,t)=>t.clouds.parallax.transform)),new Ot("rotationMatrixCloudsCrossFade",((e,t)=>t.clouds.parallaxNew.transform)),new _t("anchorPosition",((e,t)=>t.clouds.parallax.anchorPointClouds)),new _t("anchorPositionCrossFade",((e,t)=>t.clouds.parallaxNew.anchorPointClouds)),new At("cloudVariables",((e,t)=>s(t.clouds.data)?c(Ka,t.clouds.data.coverage,t.clouds.data.absorption):ei)),new vt("cloudsHeight",((e,t)=>t.clouds.parallax.cloudsHeight)),new vt("radiusCurvatureCorrectionFactor",((e,t)=>t.clouds.parallax.radiusCurvatureCorrectionFactor)),new vt("totalFadeInOut",((e,t)=>t.clouds.fadeInOut.stage===$s.FINISHED?t.clouds.fadeInOutHeight.factor+Math.max(C(t.clouds.fadeIn.factor,0,1)):t.clouds.fadeInOutHeight.factor+Math.max(C(t.clouds.fadeInOut.factor,0,1)))),new vt("crossFadeAnchorFactor",((e,t)=>C(t.clouds.crossFade.factor,0,1))),new Ya("cubeMap",((e,t)=>s(t.clouds.data)?t.clouds.data.cubeMap.colorTexture:null)),new Ar("crossFade",((e,t)=>t.clouds.crossFade.enabled))]),t.constants.add("planetRadius","float",ui.radius),t.code.add(fr`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),t.code.add(fr`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),t.code.add(fr`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),t.uniforms.add([new _t("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new _t("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.code.add(fr`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),t.code.add(fr`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`),t.code.add(fr`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),t.code.add(fr`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),t.code.add(fr`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}const Ka=Kr();function eo(e,t){e.include(Dr,t),e.include(Ja),e.include(Xa),t.hasCloudsReflections&&e.include(Qa,t),t.hasScreenSpaceReflections&&e.include(Qs,t);const r=e.fragment;r.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(fr`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add([new vt("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new vt("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(fr`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.hasCloudsReflections&&r.code.add(fr`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),t.hasScreenSpaceReflections?r.code.add(fr`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view *vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`):r.code.add(fr`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.hasCloudsReflections?t.hasScreenSpaceReflections?r.code.add(fr`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(fr`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(fr`return waterRenderedColor;
}`)}function to(e){e.fragment.uniforms.add(new he("texWaveNormal")),e.fragment.uniforms.add(new he("texWavePerturbation")),e.fragment.uniforms.add([new St("waveParams",(e=>R(ro,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new At("waveDirection",(e=>c(io,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))]),e.include($a),e.fragment.code.add(fr`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const ro=Z(),io=Kr(),so=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new xt,{vertex:r,fragment:i}=t,s=wt(t,e);return t.include(Yt),t.attributes.add(tr.POSITION,"vec3"),t.attributes.add(tr.UV0,"vec2"),r.uniforms.add(new St("waterColor",(e=>e.color))),e.output!==Rt.Color&&e.output!==Rt.Alpha||(t.include(Za,e),t.include(br,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),i.uniforms.add(s),e.hasMultipassTerrain&&t.varyings.add("depth","float"),r.code.add(fr`
      void main(void) {
        if (waterColor.a < ${fr.float(Pt)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===Rt.Color?"forwardLinearDepth();":""}
      }
    `)),t.include(Dt,e),e.output===Rt.Alpha&&(t.include(bt,e),i.uniforms.add(new me("waterColor")),i.code.add(fr`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),e.output===Rt.Color&&(t.include(Ir,{isGround:!1}),t.include(Pr,{pbrMode:Fr.Disabled,lightingSphericalHarmonicsOrder:2}),t.include(to),t.include(bt,e),t.include(Mr,e),t.include(eo,e),i.uniforms.add([new me("waterColor"),new _t("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new _t("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity)),new vt("timeElapsed",(e=>e.timeElapsed)),new Lr("view")]),yt(i,e),i.include(It),i.code.add(fr`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?fr`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===je.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output===Rt.Normal&&(t.include(Za,e),t.include(to,e),t.include(bt,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),r.code.add(fr`
        void main(void) {
          if (waterColor.a < ${fr.float(Pt)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(new vt("timeElapsed",(e=>e.timeElapsed))),i.code.add(fr`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),e.output===Rt.Draped&&(t.varyings.add("vpos","vec3"),r.code.add(fr`
        void main(void) {
          if (waterColor.a < ${fr.float(Pt)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(new me("waterColor")),i.code.add(fr`void main() {
gl_FragColor = waterColor;
}`)),e.output===Rt.Highlight&&(t.include(Qt),t.varyings.add("vpos","vec3"),r.code.add(fr`
      void main(void) {
        if (waterColor.a < ${fr.float(Pt)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(bt,e),i.code.add(fr`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),t}},Symbol.toStringTag,{value:"Module"}));class ao extends Mt{constructor(e,t,r){super(e,t,r),this._textureRepository=e.waterTextureRepository}initializeConfiguration(e,t){t.spherical=e.viewingMode===G.Global,t.doublePrecisionRequiresObfuscation=Nr(e.rctx)}initializeProgram(e){const t=ao.shader.get().build(this.configuration);return new Lt(e.rctx,t,vr)}bindPass(e,t){this.program.bindPass(e,t),this.configuration.output!==Rt.Color&&this.configuration.output!==Rt.Normal||this._textureRepository.bind(this.program)}_setPipelineState(e){const t=this.configuration,r=e===je.NONE,i=e===je.FrontFace;return Vr({blending:t.output!==Rt.Normal&&t.output!==Rt.Highlight&&t.transparent?r?jr:Gr(e):null,depthTest:{func:qr(e)},depthWrite:r?t.writeDepth&&kr:Zr(e),colorWrite:$r,polygonOffset:r||i?null:Jr(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ao.shader=new Ft(so,(()=>Promise.resolve().then((()=>so))));class oo extends Ct{constructor(){super(...arguments),this.output=Rt.Color,this.transparencyPassType=je.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}Re([Br({count:Rt.COUNT})],oo.prototype,"output",void 0),Re([Br({count:je.COUNT})],oo.prototype,"transparencyPassType",void 0),Re([Br()],oo.prototype,"spherical",void 0),Re([Br()],oo.prototype,"receiveShadows",void 0),Re([Br()],oo.prototype,"hasSlicePlane",void 0),Re([Br()],oo.prototype,"transparent",void 0),Re([Br()],oo.prototype,"enableOffset",void 0),Re([Br()],oo.prototype,"writeDepth",void 0),Re([Br()],oo.prototype,"hasScreenSpaceReflections",void 0),Re([Br()],oo.prototype,"doublePrecisionRequiresObfuscation",void 0),Re([Br()],oo.prototype,"hasCloudsReflections",void 0),Re([Br()],oo.prototype,"isDraped",void 0),Re([Br()],oo.prototype,"hasMultipassTerrain",void 0),Re([Br()],oo.prototype,"cullAboveGround",void 0),Re([Br({constValue:Fr.Water})],oo.prototype,"pbrMode",void 0),Re([Br({constValue:!0})],oo.prototype,"useCustomDTRExponentForWater",void 0),Re([Br({constValue:!0})],oo.prototype,"highStepCount",void 0),Re([Br({constValue:!1})],oo.prototype,"useFillLights",void 0);class no extends Gt{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})}_updateCloudsReflectionState(e){const t=s(e.clouds.data);t!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:t})}ensureResources(e){const t=this._techniqueRepository.constructionContext.waterTextureRepository;return t.resourceState===qe.NOT_LOADED&&t.loadTextures(e),t.resourceState}beginSlot(e){return this._output===Rt.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this.ensureTechnique(ao,e)}}class lo extends mr{constructor(e){super(e,new co),this._techniqueConfig=new oo,this.animation=new ka}getConfiguration(e,t){return this._techniqueConfig.output=e,this._techniqueConfig.writeDepth=this.parameters.writeDepth,this._techniqueConfig.receiveShadows=this.parameters.receiveShadows,this._techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this._techniqueConfig.transparent=this.parameters.transparent,this._techniqueConfig.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._techniqueConfig.hasCloudsReflections=this.parameters.hasCloudsReflections,this._techniqueConfig.isDraped=this.parameters.isDraped,this._techniqueConfig.transparencyPassType=t.transparencyPassType,this._techniqueConfig.enableOffset=t.camera.relativeElevation<Yr,this._techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this._techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this._techniqueConfig}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<ho;const r=this.animation.advance(e);return this.setParameters({timeElapsed:De(this.animation.time)*this.parameters.animationSpeed},!1),this.animation.enabled&&r}intersect(e,t,r,i,s,a,o){_r(e,t,i,s,a,void 0,o)}requiresSlot(e,t){switch(ue(t)){case Rt.Normal:return e===nt.DRAPED_WATER;case Rt.Color:if(this.parameters.isDraped)return e===nt.DRAPED_MATERIAL;break;case Rt.Highlight:return e===nt.OPAQUE_MATERIAL||e===nt.DRAPED_MATERIAL}let r=nt.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?nt.TRANSPARENT_MATERIAL:nt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r}createGLMaterial(e){if(e.output===Rt.Color&&this.parameters.isDraped)return e.output=Rt.Draped,new no(e);switch(e.output){case Rt.Color:case Rt.Normal:case Rt.Highlight:case Rt.Alpha:return new no(e)}return null}createBufferWriter(){return new ge(ve)}}class co extends Tr{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=ti(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=$(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1}}const ho=35e3;class uo{constructor(e){this.first=e.from,this.count=e.to-e.from}}class po{constructor(e=0,t=0){this.from=e,this.to=t}}class fo extends po{constructor(e,t,r,i,s,a){super(t,r),this.id=e,this.isVisible=i,this.hasHighlights=s,this.hasOccludees=a}}function mo(e){return Array.from(e.values()).sort(go)}function go(e,t){return e.from===t.from?e.to-t.to:e.from-t.from}function vo(e,t){if(0===e.length)return void e.push(new uo(t));const r=e[e.length-1];if(s=t,(i=r).first+i.count>=s.from){const e=t.from-r.first+t.to-t.from;r.count=e}else e.push(new uo(t));var i,s}class _o{constructor(e,t){this._pool=e,this._size=0,this._buffer=e.newBuffer(To(t))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get vao(){return this._buffer.vao}get array(){return this._buffer.array}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}alloc(e){return this._resize(e,!1)}_resize(e,t){let r;const i=function(e,t,r){return t<=r?e>=r?e:To(Math.max(2*e,r)):e<=2*r?e:To(r)}(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);t&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.byteLength)),r=this._buffer,this._buffer=e}const s=this._size;return this._size=e,r?{dispose:()=>{r.array.fill(0,0,s),this._pool.deleteBuffer(r)},copy:(e,t,i)=>this._buffer.array.set(r.array.subarray(t,i),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,t,r)=>{e!==t&&this._buffer.array.copyWithin(e,t,r)},hasNewBuffer:!1}}erase(e,t){this._buffer.array.fill(0,e,t)}}function To(e){return 65536*Math.ceil(e/65536)}class yo{constructor(e,t,r,i){this.vao=new ai(e,t,{geometry:r},{geometry:oi.createVertex(e,it.STATIC_DRAW)}),this.array=new Float32Array(i),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}const So=fi+1;class Ro{constructor(e,t,r){this._rctx=e,this._locations=t,this._layout=r,this._cache=e.newCache(`MergedRenderer pool ${Fe()}`,Co)}dispose(){this._cache.destroy()}newBuffer(e){const t=e.toString(),r=this._cache.pop(t);if(s(r)){const e=r.pop();return r.length>0&&this._cache.put(t,r,e.array.byteLength*r.length,So),e}return new yo(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const t=e.array.byteLength,r=e.array.length.toString(),i=this._cache.pop(r);return s(i)?(i.push(e),this._cache.put(r,i,t*i.length,-1)):this._cache.put(r,[e],t,-1),null}}function Co(e,t){if(t===pi.ALL)return void e.forEach((e=>e.dispose()));const r=e.pop(),i=e.length*r.array.byteLength;return r.dispose(),i}class xo{constructor(e,t,r){this._rctx=e,this._materialRepository=t,this._material=r,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new Oe,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new _e(this._material,this._materialRepository),this._bufferWriter=r.createBufferWriter(),this._bufferPool=new Ro(e,r.vertexAttributeLocations,hi(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.buffer.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof lo}get rendersOccluded(){return!this.isEmpty&&this._material.renderOccluded!==gr.Occlude}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateRenderCommands()}_addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout.stride/4,s=this._dataByOrigin,a=function(e,t){const r=new Map;for(const t of e)wo(r,t,!0);for(const e of t)wo(r,e,!1);return r}(e,t);a.forEach(((e,t)=>{a.delete(t);const o=e.toAdd.reduce(((e,t)=>e+r.elementCount(t.data)),0);let n=s.get(t);if(null==n)ht(0===e.toRemove.length),n=new bo(e.origin,new _o(this._bufferPool,o*i)),s.set(t,n);else if(0===e.toAdd.length&&n.instances.size===e.toRemove.length)return n.buffer.dispose(),void s.delete(t);let l=0;n.instances.forEach((e=>l+=e.to-e.from));const c=e.toRemove.reduce(((e,t)=>e+r.elementCount(t.data)),0),d=n.buffer.size,h=(l+o-c)*i,u=Po;if(h<d/2?this._removeAndRebuild(n,e.toRemove,i,h,u):e.toRemove.length>0&&this._remove(n,e.toRemove,i,u),e.toAdd.length>0){const t=Fo;gt(t,-e.origin[0],-e.origin[1],-e.origin[2]),this._add(n,e.toAdd,i,t,u)}const p=n.buffer.vao.vertexBuffers.geometry;Do(u),u.forAll((({from:e,to:t})=>{if(e<t){const r=n.buffer.array,i=4,s=e*i,a=t*i;p.setSubData(r,s,s,a)}})),u.clear(),n.drawCommandsDirty=!0}))}_updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.renderGeometry,s=this._dataByOrigin.get(e.origin.id),a=s&&s.instances.get(e.id);if(!a)return;const o=i.updateType;if(o&Va.State.VISIBILITIES&&(a.isVisible=e.instanceParameters.visible),o&(Va.State.HIGHLIGHTS|Va.State.VISIBILITIES)){const t=e.instanceParameters.visible;a.hasHighlights=!!e.instanceParameters.highlights&&t}if(o&Va.State.OCCLUDEES&&(a.hasOccludees=!!e.instanceParameters.occludees),o&(Va.State.VERTEXATTRS|Va.State.TRANSFORMATION)){const{array:i,vao:o}=s.buffer;Hr(e,Mo,Lo),t.write({transformation:Mo,invTranspTransformation:Lo},e.data,t.vertexBufferLayout.createView(i.buffer),a.from),ht(a.from+t.elementCount(e.data)===a.to,"material VBO layout has changed"),o.vertexBuffers.geometry.setSubData(i,a.from*r*4,a.from*r*4,a.to*r*4)}s.drawCommandsDirty=!0}}_updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,we(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));const e=e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,0===e.instances.size)return;if(!Oo(e)){const t=this._bufferWriter.vertexBufferLayout.stride,r=4*e.buffer.size/t;return void(e.drawCommandsDefault=[{first:0,count:r}])}const t=mo(e.instances);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const r of t)r.isVisible&&(r.hasOccludees?vo(e.drawCommandsOccludees,r):vo(e.drawCommandsDefault,r),r.hasHighlights?vo(e.drawCommandsHighlight,r):vo(e.drawCommandsShadowHighlightRest,r))};this._dataByOrigin.forEach((t=>{t.drawCommandsDirty&&(e(t),t.drawCommandsDirty=!1)}))}updateAnimation(e){return this._material.update(e)}requiresSlot(e,t){return null==e||this._material.requiresSlot(e,t)}render(e,t){if(!this.requiresSlot(t.slot,e))return!1;const r=e===ot.MATERIAL_HIGHLIGHT||e===ot.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT;if(r&&!this._hasHighlights)return!1;const a=e===ot.MATERIAL_DEPTH_SHADOWMAP_DEFAULT,o=!(r||a);if(this._dataByOrigin.forEach((e=>{if(r&&!e.hasHighlights)return;const t=(r?e.drawCommandsHighlight:a&&Oo(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,i=o&&e.drawCommandsOccludees||null;(s(t)||s(i))&&this._renderCommandData.push(new Io(e.origin,e.buffer,t,i))})),0===this._renderCommandData.length)return!1;const n=this._rctx,l=this._glMaterials.load(n,e);if(i(l))return this._renderCommandData.clear(),!1;const c=l.beginSlot(t);return n.bindTechnique(c,this._material.parameters,t,!1),this._renderCommandData.forAll((e=>{c.bindDraw(e,t);const{buffer:r,renderCommands:i,occludeeCommands:a}=e;c.ensureAttributeLocations(r.vao),n.bindVAO(r.vao);const o=c.primitiveType;s(i)&&this._renderCommands(n,o,i),s(a)&&(c.bindPipelineState(n,t.slot,!0),this._renderCommands(n,o,a),c.bindPipelineState(n,t.slot,!1))})),this._renderCommandData.clear(),!0}_renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}_removeAndRebuild(e,t,r,i,s){for(const r of t)e.instances.delete(r.id);const a=mo(e.instances);e.instances.clear();const o=e.buffer.size,n=e.buffer.alloc(i);let l=0;for(const t of a){const i=t.from*r,s=t.to*r;n.copy(l,i,s),t.from=l/r,l+=s-i,t.to=l/r,e.instances.set(t.id,t)}s.push(new po(0,n.hasNewBuffer?e.buffer.array.length:o)),n.dispose(),e.buffer.erase(l,s.back().to),e.holes.clear()}_remove(e,t,r,i){for(const s of t){const t=s.id,a=e.instances.get(t),o=a.from*r,n=a.to*r;e.buffer.erase(o,n),e.holes.push(new po(a.from,a.to)),e.instances.delete(t),i.push(new po(o,n))}Do(e.holes)}_add(e,t,r,a,o){if(0===t.length)return;const n=this._bufferWriter;let l=n.vertexBufferLayout.createView(e.buffer.array.buffer);const c=e.holes.length>0;let d=Number.MAX_SAFE_INTEGER,h=Number.MIN_SAFE_INTEGER;for(const u of t){const t=s(u.transformation)?Q(Mo,a,u.transformation):a;ee(Lo,t);const p=re(Lo,Lo),f=n.elementCount(u.data),m=f*r;let g=Ao(e.holes,f);i(g)&&(g=e.buffer.size/r,e.buffer.grow(m),l=n.vertexBufferLayout.createView(e.buffer.array.buffer)),n.write({transformation:t,invTranspTransformation:p},u.data,l,g);const v=u.instanceParameters.visible,_=!!u.instanceParameters.highlights&&v,T=!!u.instanceParameters.occludees,y=new fo(u.id,g,g+f,v,_,T);ht(null==e.instances.get(u.id)),e.instances.set(u.id,y),c?o.push(new po(y.from*r,y.to*r)):(d=Math.min(y.from,d),h=Math.max(y.to,h))}c||o.push(new po(d*r,h*r))}get test(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}class Eo{constructor(e){this.origin=e,this.toAdd=new Array,this.toRemove=new Array}}function wo(e,t,r){const s=t.origin;if(i(s))return;let a=e.get(s.id);null==a&&(a=new Eo(s.vec3),e.set(s.id,a)),r?a.toAdd.push(t):a.toRemove.push(t)}function Oo(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function Ao(e,t){let r;if(!e.some((e=>!(e.to-e.from<t||(r=e,0)))))return null;const i=r.from;return r.from+=t,r.from>=r.to&&e.removeUnordered(r),i}function Do(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let r=!0;for(;r;)r=!1,e.forEach((i=>{const s=t.get(i.to);s&&(i.to=s.to,t.delete(s.from),e.removeUnordered(s),r=!0)}))}class bo{constructor(e,t){this.origin=e,this.buffer=t,this.instances=new Map,this.holes=new Oe({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1}}class Io extends qa{constructor(e,t,r,i){super(e),this.buffer=t,this.renderCommands=r,this.occludeeCommands=i}}const Po=new Oe({deallocator:null}),Fo=se(),Mo=se(),Lo=se();let No=class extends Ce{constructor(e){super(e),this._pending=new zo,this._changes=new Ha,this._materialRenderers=new Map,this._sortedMaterialRenderers=new Oe,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return we(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size&&0===this._geometries.size}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=ja(this._changes);let t=!1,r=!1,i=!1;return e.forEach(((e,s)=>{let a=this._materialRenderers.get(s);if(!a&&e.adds.length>0&&(a=new xo(this.rctx,this._materialRepository,s),this._materialRenderers.set(s,a),t=!0,r=!0,i=!0),!a)return;const o=r||a.hasHighlights,n=i||a.hasWater;a.modify(e),r=r||o!==a.hasHighlights,i=i||n!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(s),a.dispose(),t=!0)})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),r&&(this._hasHighlights=we(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=we(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}addGeometries(e,t){if(0===e.length)return;const r=this._validateRenderGeometries(e);for(const e of r)this._geometries.set(e.id,e);const i=this._pending.empty;for(const e of r)this._pending.adds.add(e);i&&this.notifyChange("updating"),t===Va.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,t){const r=this._pending.empty,i=this._pending.adds;for(const t of e)i.has(t)?(this._pending.removed.add(t),i.delete(t)):this._pending.removed.has(t)||this._pending.removes.add(t),this._geometries.delete(a(t.id));r&&!this._pending.empty&&this.notifyChange("updating"),t===Va.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,t){const r=0===this._changes.updates.length;for(const r of e){const e=this._changes.updates.pushNew();e.renderGeometry=this._validateRenderGeometry(r),e.updateType=t}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),t){case Va.State.TRANSFORMATION:case Va.State.VERTEXATTRS:return this._notifyGraphicGeometryChanged(e);case Va.State.VISIBILITIES:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>t=r.updateAnimation(e)||t)),t}render(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];i.material.shouldRender(e)&&i.materialRenderer.render(e.pass,t)}}intersect(e,t,r,i,s){return this._geometries.forEach((a=>{if(i&&!i(a))return;this._intersectRenderGeometry(a,r,t,0,e,s);const o=this.rendererContext.longitudeCyclical;o&&(a.boundingSphere[0]-a.boundingSphere[3]<o.min&&this._intersectRenderGeometry(a,r,t,o.range,e,s),a.boundingSphere[0]+a.boundingSphere[3]>o.max&&this._intersectRenderGeometry(a,r,t,-o.range,e,s)),s++})),s}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const t=this._changes.updates.data[e];this._pending.has(t.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}_intersectRenderGeometry(e,t,r,i,a,o){if(!e.instanceParameters.visible)return;let n=0;s(e.transformation)&&(i+=e.transformation[12],n=e.transformation[13]),Uo[0]=r[0]-i,Uo[1]=r[1]-n,Uo[2]=1,Ho[0]=r[0]-i,Ho[1]=r[1]-n,Ho[2]=0,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),a,Uo,Ho,((r,i,s)=>{!function(e,t,r,i,s,a,o){const n={layerUid:a,graphicUid:o,triangleNr:t},l=t=>{t.set(di.OVERLAY,n,e.dist,e.normal,e.transformation,r,i)};if((null==s.results.min.drapedLayerOrder||r>=s.results.min.drapedLayerOrder)&&(null==s.results.min.dist||s.results.ground.dist<=s.results.min.dist)&&l(s.results.min),s.options.store!==li.MIN&&(null==s.results.max.drapedLayerOrder||r<s.results.max.drapedLayerOrder)&&(null==s.results.max.dist||s.results.ground.dist>s.results.max.dist)&&l(s.results.max),s.options.store===li.ALL){const e=ci(s.ray);l(e),s.results.all.push(e)}}(t,s,e.material.renderPriority,o,a,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,t)}_notifyGraphicGeometryChanged(e){if(i(this.drapeSource.notifyGraphicGeometryChanged))return;let t;for(const r of e){const e=r.graphicUid;s(e)&&e!==t&&(this.drapeSource.notifyGraphicGeometryChanged(e),t=e)}}_notifyGraphicVisibilityChanged(e){if(i(this.drapeSource.notifyGraphicVisibilityChanged))return;let t;for(const r of e){const e=r.graphicUid;s(e)&&e!==t&&(this.drapeSource.notifyGraphicVisibilityChanged(e),t=e)}}_validateRenderGeometries(e){for(const t of e)this._validateRenderGeometry(t);return e}_validateRenderGeometry(e){return i(e.origin)&&(e.origin=this._localOriginFactory.getOrigin(e.boundingSphere)),e}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};Re([Le()],No.prototype,"drapeSource",void 0),Re([Le()],No.prototype,"updating",null),Re([Le()],No.prototype,"rctx",null),Re([Le()],No.prototype,"rendererContext",void 0),Re([Le()],No.prototype,"_materialRepository",null),Re([Le()],No.prototype,"_localOriginFactory",null),No=Re([Ne("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],No);class zo{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}const Uo=T(),Ho=T();class Bo extends Xt{constructor(e){super(e,"vec2")}}var Wo;!function(e){e[e.SSAO=0]="SSAO",e[e.Blur=1]="Blur",e[e.COUNT=2]="COUNT"}(Wo||(Wo={}));class Vo extends Wr{constructor(){super(...arguments),this.output=Wo.SSAO}}Re([Br({count:Wo.COUNT})],Vo.prototype,"output",void 0);const jo=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new xt,r=t.fragment;if(t.include(Te),e.output===Wo.Blur){const e=2.5,t=1/(2*e*e);r.include(kt),r.uniforms.add([new he("normalMap"),new he("depthMap"),new he("tex"),new Bo("blurSize"),new de("projScale"),new At("nearFar",((e,t)=>t.camera.nearFar))]),r.code.add(fr`
      void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r * r * ${fr.float(t)} - ddiff * ddiff * sharpness);
        wTotal += w;
        bTotal += w * c;
      }
    `),r.code.add(fr`
      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/center_d;
        for (int r = -${fr.int(4)}; r <= ${fr.int(4)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf * blurSize;
          blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
        }

        gl_FragColor = vec4(b / w_total);
      }
    `)}return e.output===Wo.SSAO&&(r.include(kt),t.include(ye),r.uniforms.add(new he("normalMap")),r.uniforms.add(new he("depthMap")),r.uniforms.add(new he("rnm")),r.uniforms.add(new de("intensity")),r.uniforms.add(new de("projScale")),r.uniforms.add(new de("radius")),r.uniforms.add(new At("nearFar",((e,t)=>t.camera.nearFar))),r.uniforms.add(new Bo("screenSize")),r.uniforms.add(new Bo("rnmScale")),r.code.add(fr`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),r.code.add(fr`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.fragment.uniforms.add(new At("zScale",((e,t)=>Se(t)))),r.code.add(fr`
      void main(void) {
        fillSphere();
        vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
        float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

        if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

        // get the normal of current fragment
        vec4 norm4 = texture2D(normalMap, uv);
        vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
        bool isTerrain = norm4.w<0.5;

        float sum = .0;
        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0 * currentPixelPos.z * zScale.x + zScale.y);

        for(int i = 0; i < ${fr.int(16)}; ++i) {
          vec2 unitOffset = reflect(sphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset * radius * ps);

          //don't use current or very nearby samples
          if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

          vec2 tc = vec2(gl_FragCoord.xy + offset);
          if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
          vec2 tcTap = tc / screenSize;
          float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

          if (isTerrain) {
            bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
            if (isTerrainTap) {
              continue;
            }
          }

          tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

          sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
        }

        // output the result
        float A = max(1.0-sum*intensity/float(${fr.int(16)}),0.0);

        // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
        gl_FragColor = vec4(A);
      }
    `)),t}},Symbol.toStringTag,{value:"Module"}));class Go extends Mt{initializeProgram(e){const t=Go.shader.get().build(this.configuration);return new Lt(e.rctx,t,vr)}initializePipeline(){return Vr({colorWrite:$r})}}Go.shader=new Ft(jo,(()=>Promise.resolve().then((()=>jo))));class qo{constructor(e,t,r){this._techniqueRep=e,this._rctx=t,this._requestRender=r,this._enabled=!1,this._ssaoTechniqueConfig=new Vo,this.quadVAO=null,this._blurSizePx=2,this._attenuation=.5}dispose(){this.quadVAO=r(this.quadVAO)}disposeOffscreenBuffers(){o(this._ssaoFBO,(e=>e.resize(0,0))),o(this._blur0FBO,(e=>e.resize(0,0))),o(this._blur1FBO,(e=>e.resize(0,0)))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&s(this._noiseTexture)&&s(this._ssaoFBO)&&s(this._blur0FBO)&&s(this._blur1FBO)}get colorTexture(){return s(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return s(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return s(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,t,r){if(!this.enabled||i(t)||i(r)||i(this._noiseTexture)||i(this._ssaoFBO)||i(this._blur0FBO)||i(this._blur1FBO))return;const s=this._rctx,a=e.camera,o=a.fullViewport,n=o[2],l=o[3],c=n/this._blurSizePx,d=l/this._blurSizePx;this._ssaoFBO.resize(n,l),this._blur0FBO.resize(c,d),this._blur1FBO.resize(c,d);const h=1*n,u=1*l;s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,n,l);const p=s.bindTechnique(this._ssaoTechnique,ko,e);p.setUniform2f("rnmScale",n/this._noiseTexture.descriptor.width,l/this._noiseTexture.descriptor.height);let f=1/a.computeRenderPixelSizeAtDist(1);p.setUniform1f("projScale",1*f),p.setUniform2f("screenSize",h,u);const m=I(a.eye,a.center);let g=20*a.computeRenderPixelSizeAtDist(m);g=Math.max(.1,g),p.setUniform1f("radius",g),p.setUniform1f("intensity",4*this._attenuation/g**6),p.bindTexture("rnm",this._noiseTexture),p.bindTexture("normalMap",r),p.bindTexture("depthMap",t),i(this.quadVAO)&&(this.quadVAO=Kt(this._rctx)),s.bindVAO(this.quadVAO),s.drawArrays(tt.TRIANGLE_STRIP,0,ni(this.quadVAO,"geometry"));const v=s.bindTechnique(this._blurTechnique,ko,e);v.bindTexture("tex",this._ssaoFBO.colorTexture),v.bindTexture("normalMap",r),v.bindTexture("depthMap",t),s.setViewport(0,0,h/this._blurSizePx,u/this._blurSizePx),s.bindFramebuffer(this._blur0FBO),v.setUniform2f("screenSize",h,u),v.setUniform2f("blurSize",0,1*this._blurSizePx/u),m>5e4&&(f=Math.max(0,f-(m-5e4))),v.setUniform1f("projScale",f),s.drawArrays(tt.TRIANGLE_STRIP,0,ni(this.quadVAO,"geometry")),v.setUniform2f("blurSize",1*this._blurSizePx/h,0),s.bindFramebuffer(this._blur1FBO),v.bindTexture("tex",this._blur0FBO.colorTexture),s.drawArrays(tt.TRIANGLE_STRIP,0,ni(this.quadVAO,"geometry")),s.setViewport(o[0],o[1],o[2],o[3])}_selectPrograms(){this._ssaoTechniqueConfig.output=Wo.SSAO,this._ssaoTechnique=this._techniqueRep.releaseAndAcquire(Go,this._ssaoTechniqueConfig,this._ssaoTechnique),this._ssaoTechniqueConfig.output=Wo.Blur,this._blurTechnique=this._techniqueRep.releaseAndAcquire(Go,this._ssaoTechniqueConfig,this._blurTechnique)}_enable(){this.enabled||(this._enabled=!0,this._loadResources((()=>{this._enabled&&this._initialize()})))}_loadResources(e){this._data?e():import("./SSAOHelperData.js").then((t=>{this._data=t,e()}))}_initialize(){const e={target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,samplingMode:et.LINEAR,wrapMode:Ke.CLAMP_TO_EDGE,width:0,height:0},t={colorTarget:$e.TEXTURE,depthStencilTarget:Xe.NONE};mi(this._data.noiseTexture).then((r=>{this._enabled&&(this._ssaoFBO=new at(this._rctx,t,e),this._blur0FBO=new at(this._rctx,t,e),this._blur1FBO=new at(this._rctx,t,e),this._noiseTexture=new ii(this._rctx,{target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,hasMipmap:!0,width:r.width,height:r.height},r),this._requestRender())})),this._selectPrograms()}_disable(){this._enabled=!1,this._noiseTexture=r(this._noiseTexture),this._blur1FBO=r(this._blur1FBO),this._blur0FBO=r(this._blur0FBO),this._ssaoFBO=r(this._ssaoFBO)}get gpuMemoryUsage(){return(s(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(s(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(s(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}const ko=new yr,Zo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new xt;return e.include(Te),e.fragment.uniforms.add([new he("tex"),new me("uColor")]),e.fragment.code.add(fr`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"}));class $o extends Mt{initializeProgram(e){const t=$o.shader.get().build();return new Lt(e.rctx,t,vr)}initializePipeline(){return this.configuration.hasAlpha?Vr({blending:Qr(st.SRC_ALPHA,st.ONE,st.ONE_MINUS_SRC_ALPHA,st.ONE_MINUS_SRC_ALPHA),colorWrite:$r}):Vr({colorWrite:$r})}}$o.shader=new Ft(Zo,(()=>Promise.resolve().then((()=>Zo))));class Xo extends Wr{constructor(){super(...arguments),this.hasAlpha=!1}}Re([Br()],Xo.prototype,"hasAlpha",void 0);class Jo{constructor(e){this._rctx=e,this.cache=new Map}dispose(){this.cache.forEach((e=>e.texture=r(e.texture))),this.cache.clear()}_acquire(e){if(i(e))return null;const t=this._patternId(e),r=this.cache.get(t);if(r)return r.refCount++,r.bind;const s=e.pixelRatio,{encodedData:a,sdfNormalizer:o,pixels:n,paddedPixels:l}=function(e,t){const r=e.map((e=>Math.round(e*t))),i=1/t,s=Math.floor(r.reduce(((e,t)=>e+t))),a=r.reduce(((e,t)=>Math.max(e,t))),o=(Math.floor(.5*(a-1))+.5)*i,n=[];let l=1;for(const e of r){for(let t=0;t<e;t++){const r=l*(Math.min(t,e-1-t)+.5)*i/o*.5+.5;n.push(r)}l=-l}const c=Math.round(r[0]/2),d=[...n.slice(c),...n.slice(0,c)],h=s+2,u=new Uint8Array(4*h);let p=4;for(const e of d)gi(e,u,p),p+=4;return u.copyWithin(0,p-4,p),u.copyWithin(p,4,8),{encodedData:u,sdfNormalizer:o,paddedPixels:h,pixels:s}}(e.pattern,s),c=n/s,d={refCount:1,texture:null,bind:e=>(i(d.texture)&&(d.texture=new ii(this._rctx,{width:l,height:1,internalFormat:Ye.RGBA,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE},a)),e.bindTexture("stipplePatternTexture",d.texture),{pixelSize:c,sdfNormalizer:o,pixels:n})};return this.cache.set(t,d),d.bind}release(e){if(i(e))return;const t=this._patternId(e),r=this.cache.get(t);r&&(r.refCount--,0===r.refCount&&(s(r.texture)&&r.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this._acquire(t);return this.release(e),r}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}var Yo,Qo;!function(e){e[e.Standard=0]="Standard",e[e.TransparentToHUDVisibility=1]="TransparentToHUDVisibility",e[e.Transparency=2]="Transparency",e[e.OverlayWithTransparency=3]="OverlayWithTransparency",e[e.COUNT=4]="COUNT"}(Yo||(Yo={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.PremultipliedAlpha=2]="PremultipliedAlpha",e[e.COUNT=3]="COUNT"}(Qo||(Qo={}));class Ko extends Wr{constructor(){super(...arguments),this.function=Yo.Standard,this.alphaMode=Qo.None,this.hasOpacityFactor=!1}}Re([Br({count:Yo.COUNT})],Ko.prototype,"function",void 0),Re([Br({count:Qo.COUNT})],Ko.prototype,"alphaMode",void 0),Re([Br()],Ko.prototype,"hasOpacityFactor",void 0);let en=class extends(Qi(Ce)){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._handles=new Ee,this._frameTask=vi,this._drapeSourceRenderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedDrapeSourceRenderers=new Oe,this._rctx=null,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.worldToPCSRatio=1,this.events=new xe,this.longitudeCyclical=null}get _bindParameters(){return this._renderContext.bindParameters}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext;const t=e.waterTextureRepository;this._stippleTextureRepository=new Jo(e.renderingContext),this._shaderTechniqueRepository=new Xi({rctx:this._rctx,viewingMode:G.Local,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:t}),this._renderContext=new ta(this._rctx,new oa(this._rctx,this.view.state.viewingMode),new qo(this._shaderTechniqueRepository,this._rctx,(()=>{}))),this._handles.add([be((()=>t.updating),(()=>this.events.emit("content-changed")),Ie),be((()=>this.spatialReference),(e=>this._localOriginFactory=new Gs(e)),Ie),Pe((()=>this.view.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0))]),this._materialRepository=new rs(e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&nn)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")}),(()=>this.events.emit("content-changed"))),this._bindParameters.slot=nt.DRAPED_MATERIAL,this._bindParameters.highlightDepthTexture=er(this._rctx),this._bindParameters.camera=an,this._bindParameters.transparencyPassType=je.NONE,this._bindParameters.lighting.groundLightingFactor=1,this._bindParameters.lighting.globalFactor=0,this._bindParameters.lighting.set([new zr(y(1,1,1))]),this._frameTask=this.view.resourceController.scheduler.registerTask(_i.STAGE,this),this._handles.add(this._frameTask)}dispose(){this._handles.destroy(),this._drapeSourceRenderers.forEach((e=>e.destroy())),this._drapeSourceRenderers.clear(),this._debugTextureTechnique=n(this._debugTextureTechnique),this._debugPatternTexture=r(this._debugPatternTexture),this._bindParameters.highlightDepthTexture=r(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=r(this._shaderTechniqueRepository),this._temporaryFBO=r(this._temporaryFBO),this._quadVAO=r(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedDrapeSourceRenderersDirty||this._frameTask.updating||we(this._drapeSourceRenderers,(e=>e.updating))}get hasOverlays(){return s(this._overlays)&&s(this._overlayRenderTarget)}get gpuMemoryUsage(){return s(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,No)}createDrapeSourceRenderer(e,t,r){const i=this._drapeSourceRenderers.get(e);s(i)&&i.destroy();const a=new t({...r,rendererContext:this,drapeSource:e});return this._drapeSourceRenderers.set(e,a),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(be((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),a}removeDrapeSourceRenderer(e){if(i(e))return;const t=this._drapeSourceRenderers.get(e);i(t)||(this._sortedDrapeSourceRenderersDirty=!0,this._drapeSourceRenderers.delete(e),this._handles.remove(e),t.destroy())}collectUnusedRenderTargetMemory(e){let t=!1;if(s(this._overlayRenderTarget))for(const r of this._overlayRenderTarget.renderTargets){const i=this.overlays[0].validTargets[r.type]||!this.overlays[1].validTargets[r.type];t=this._overlayRenderTarget.validateUsageForTarget(i,r,e)||t}return t}get overlays(){return t(this._overlays,[])}ensureDrapeTargets(e){s(this._overlays)&&this._overlays.forEach((t=>{t.hasTargetWithoutRasterImage=Me(e,(e=>e.drapeTargetType===zi.WithoutRasterImage))}))}ensureDrapeSources(e){s(this._overlays)&&this._overlays.forEach((t=>{t.hasDrapedFeatureSource=Me(e,(e=>e.drapeSourceType===Ni.Features)),t.hasDrapedRasterSource=Me(e,(e=>e.drapeSourceType===Ni.RasterImage))}))}ensureOverlays(e,t){i(this._overlays)&&(this._overlayRenderTarget=new Zi(this._rctx),this._overlays=[new ji(Ue.INNER,this._overlayRenderTarget),new ji(Ue.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=r(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e,t=(()=>!0)){this._frameTask.processQueue(e),e.done||this._processDrapeSources(e,t)}_processDrapeSources(e,t){let r=!1;for(const[i,s]of this._drapeSourceRenderers){if(e.done)break;(i.destroyed||t(i))&&s.commitChanges()&&(r=!0,e.madeProgress())}this._updateSortedDrapeSourceRenderers(),r&&(s(this._overlays)&&0===this._drapeSourceRenderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(Ti,(e=>e.updatePolicy===ke.SYNC))}isEmpty(){if(Hi.OVERLAY_DRAW_DEBUG_TEXTURE)return!1;for(const e of this._drapeSourceRenderers.values())if(!e.isEmpty)return!1;return!0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(e){let t=!1;return this._drapeSourceRenderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawTarget(e,t,r){const i=e.canvasGeometries;if(0===i.numViews)return!1;this._screenToWorldRatio=r*e.mapUnitsPerPixel;const a=t.renderPass;if(this.isEmpty()||a===ot.MATERIAL_HIGHLIGHT&&!this.hasHighlights||a===ot.MATERIAL_NORMAL&&!this.hasWater||!e.hasSomeSizedView())return!1;const o=t.fbo;if(!o.isValid())return!1;const n=2*e.resolution,l=e.resolution;o.resize(n,l);const c=this._rctx;an.pixelRatio=e.pixelRatio*r,this._renderContext.pass=a,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=a===ot.MATERIAL_NORMAL?nt.DRAPED_WATER:nt.DRAPED_MATERIAL,e.applyViewport(this._rctx),o.bind(c),e.index===Ue.INNER&&(c.setClearColor(0,0,0,0),c.clearSafe(rt.COLOR_BUFFER_BIT));const d=t.type===ze.ColorNoRasterImage?tn.ExcludeRasterImage:t.type===ze.Occluded?tn.OccludedOnly:tn.Normal;if(d===tn.OccludedOnly&&(this._renderContext.renderOccludedMask=nn),Hi.OVERLAY_DRAW_DEBUG_TEXTURE&&d!==tn.OccludedOnly)for(let t=0;t<i.numViews;t++)this._setViewParameters(i.extents[t],e,an),this._drawDebugTexture(e.resolution,sn[e.index]);return this._drapeSourceRenderers.size>0&&this._sortedDrapeSourceRenderers.forAll((({drapeSource:t,renderer:r})=>{if(d===tn.ExcludeRasterImage&&t.drapeSourceType===Ni.RasterImage)return;const{fullOpacity:h}=t,u=s(h)&&h<1&&a===ot.MATERIAL;u&&(this.bindTemporaryFramebuffer(this._rctx,n,l),c.clearSafe(rt.COLOR_BUFFER_BIT));for(let t=0;t<i.numViews;t++)this._setViewParameters(i.extents[t],e,an),r.render(this._renderContext,this._bindParameters);u&&s(this._temporaryFBO)&&(o.bind(c),this.view._stage.renderView.compositingHelper.composite(this._renderContext.bindParameters,this._temporaryFBO.getTexture(),Qo.PremultipliedAlpha,h,Yo.OverlayWithTransparency,e.index))})),c.bindFramebuffer(null),o.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){i(this._temporaryFBO)&&(this._temporaryFBO=new ki(e,!1)),this._temporaryFBO.resize(t,r),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){let s=0;for(const a of this._drapeSourceRenderers.values())s=a.intersect?.(e,t,r,i,s)??s}_updateSortedDrapeSourceRenderers(){if(!this._sortedDrapeSourceRenderersDirty)return;if(this._sortedDrapeSourceRenderersDirty=!1,this._sortedDrapeSourceRenderers.clear(),0===this._drapeSourceRenderers.size)return;const e=this.view.map.allLayers;this._drapeSourceRenderers.forEach(((t,r)=>{const i=e.indexOf(r.layer);this._sortedDrapeSourceRenderers.push(new rn(r,t,i<0?1/0:i))})),this._sortedDrapeSourceRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t,r){r.viewport[0]=r.viewport[1]=0,r.viewport[2]=r.viewport[3]=t.resolution,K(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),ie(r.viewMatrix,[-e[0],-e[1],0]),this._bindParameters.camera=r}_updateHasWater(){const e=we(this._drapeSourceRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateHasHighlights(){const e=we(this._drapeSourceRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}_updateRendersOccluded(){const e=we(this._drapeSourceRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_drawDebugTexture(e,t){this._ensureDebugPatternResources(e,e);const r=this._rctx,i=r.bindTechnique(this._debugTextureTechnique);i.setUniform4f("uColor",t[0],t[1],t[2],1),i.bindTexture("tex",this._debugPatternTexture),r.bindVAO(this._quadVAO),r.drawArrays(tt.TRIANGLE_STRIP,0,ni(this._quadVAO,"geometry"))}_ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let s=0;s<t;s++)for(let a=0;a<e;a++){const o=Math.floor(a/10),n=Math.floor(s/10);o<2||n<2||10*o>e-20||10*n>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&n?1&a^1&s?0:255:1&o^1&n?0:128)}this._debugPatternTexture=new ii(this._rctx,{target:Je.TEXTURE_2D,pixelFormat:Ye.RGBA,dataType:Qe.UNSIGNED_BYTE,samplingMode:et.NEAREST,width:e,height:t},r);const s=new Xo;s.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire($o,s),this._quadVAO=Kt(this._rctx)}get test(){return{drapeSourceRenderers:this._drapeSourceRenderers,getDrapeSourceRenderer:e=>this._drapeSourceRenderers.get(e)}}};var tn;Re([Le()],en.prototype,"_frameTask",void 0),Re([Le()],en.prototype,"_sortedDrapeSourceRenderersDirty",void 0),Re([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables.unshift(t)}],en.prototype,"_shaderTechniqueRepository",void 0),Re([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables.unshift(t)}],en.prototype,"_stippleTextureRepository",void 0),Re([Le({constructOnly:!0})],en.prototype,"view",void 0),Re([Le()],en.prototype,"worldToPCSRatio",void 0),Re([Le()],en.prototype,"spatialReference",void 0),Re([Le({type:Boolean,readOnly:!0})],en.prototype,"updating",null),en=Re([Ne("esri.views.3d.terrain.OverlayRenderer")],en),function(e){e[e.Normal=0]="Normal",e[e.OccludedOnly=1]="OccludedOnly",e[e.ExcludeRasterImage=2]="ExcludeRasterImage"}(tn||(tn={}));class rn{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const sn=[[1,.5,.5],[.5,.5,1]],an=new ct;an.near=1,an.far=1e4,an.relativeElevation=null;const on=-2,nn=gr.OccludeAndTransparent;function ln(r){const a=[],o=[];!function(t,r,i){const{attributeData:{position:s},removeDuplicateStartEnd:a}=t,o=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(s)&&a===un.REMOVE,n=s.length/3-(o?1:0),l=new Uint32Array(2*(n-1)),c=o?e(s,0,s.length-3):s;let d=0;for(let e=0;e<n-1;e++)l[d++]=e,l[d++]=e+1;r.push([tr.POSITION,{size:3,data:c,exclusive:o}]),i.push([tr.POSITION,l])}(r,o,a);const n=o[0][1].data,l=a[0][1].length,c=new Uint16Array(l);return function(e,t,r){const s=e.attributeData.mapPosition;i(s)||(r.push([tr.MAPPOS,r[0][1]]),t.push([tr.MAPPOS,{size:3,data:s}]))}(r,o,a),function(e,r,i,a){if(s(e.attributeData.colorFeature))return;const o=e.attributeData.color;r.push([tr.COLOR,{size:4,data:t(o,Ri)}]),i.push([tr.COLOR,a])}(r,o,a,c),function(e,r,i,a){if(s(e.attributeData.sizeFeature))return;const o=e.attributeData.size;r.push([tr.SIZE,{size:1,data:[t(o,1)]}]),i.push([tr.SIZE,a])}(r,o,a,c),function(e,t,r,s){const a=e.attributeData.colorFeature;i(a)||(t.push([tr.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([tr.COLOR,s]))}(r,o,a,c),function(e,t,r,s){const a=e.attributeData.sizeFeature;i(a)||(t.push([tr.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([tr.SIZEFEATUREATTRIBUTE,s]))}(r,o,a,c),function(e,t,r,s){const a=e.attributeData.opacityFeature;i(a)||(t.push([tr.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([tr.OPACITYFEATUREATTRIBUTE,s]))}(r,o,a,c),function(e,t,r,s){if(i(e.overlayInfo)||e.overlayInfo.renderCoordsHelper.viewingMode!==G.Global||!e.overlayInfo.spatialReference.isGeographic)return;const a=new Float64Array(s.length),o=W(e.overlayInfo.spatialReference);for(let e=0;e<a.length;e+=3)B(s,e,a,e,o);const n=s.length/3,l=new Float32Array(n+1);let c=pn,d=fn,h=0,u=0;x(c,a[u++],a[u++],a[u++]),l[0]=0;for(let e=1;e<n+1;++e)e===n&&(u=0),x(d,a[u++],a[u++],a[u++]),h+=_(c,d),l[e]=h,[c,d]=[d,c];t.push([tr.DISTANCETOSTART,{size:1,data:l}]),r.push([tr.DISTANCETOSTART,r[0][1]])}(r,o,a,n),new qt(o,a,Ge.Line)}function cn(e,t,r,i){const s="polygon"===e.type?V.CCW_IS_HOLE:V.NONE,a="polygon"===e.type?e.rings:e.paths,{position:o,outlines:n}=j(a,e.hasZ,s),l=new Float64Array(o.length),c=Ci(o,e.spatialReference,0,l,0,o,0,o.length/3,t,r,i),d=null!=c;return{lines:d?dn(n,o,l):[],projectionSuccess:d,sampledElevation:c}}function dn(e,t,r){const i=new Array;for(const{index:s,count:a}of e){if(a<=1)continue;const e=3*s,o=e+3*a;i.push({position:t.subarray(e,o),mapPosition:r?r.subarray(e,o):void 0})}return i}function hn(e,t){const r="polygon"===e.type?V.CCW_IS_HOLE:V.NONE,i="polygon"===e.type?e.rings:e.paths,{position:s,outlines:a}=j(i,!1,r),o=U(s,e.spatialReference,0,s,t,0,s.length/3);for(let e=2;e<s.length;e+=3)s[e]=-2;return{lines:o?dn(a,s):[],projectionSuccess:o}}var un;!function(e){e[e.KEEP=0]="KEEP",e[e.REMOVE=1]="REMOVE"}(un||(un={}));const pn=T(),fn=T();function mn(e){switch(e){case"butt":return cs.BUTT;case"square":return cs.SQUARE;case"round":return cs.ROUND;default:return null}}export{Si as $,ka as A,ea as B,Qa as C,qa as D,Qi as E,Bo as F,Ja as G,Jo as H,Xi as I,rs as J,Ha as K,ns as L,Va as M,Za as N,en as O,bi as P,xi as Q,vs as R,No as S,$o as T,Ii as U,wi as V,eo as W,Oi as X,Ci as Y,on as Z,Ai as _,un as a,as as a0,cs as a1,mn as a2,cn as a3,hn as a4,co as a5,lo as a6,Di as a7,Ni as a8,yi as a9,zi as aa,$s as b,ln as c,Zs as d,Ei as e,Xs as f,Hi as g,Gi as h,Wi as i,Vi as j,Gs as k,Ki as l,Js as m,es as n,nn as o,Yo as p,Qo as q,Ko as r,oa as s,ss as t,sa as u,qo as v,ra as w,ja as x,xo as y,Xo as z};
