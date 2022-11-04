// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/maybe ../../../../../../chunks/mat3 ../../../../../../chunks/mat3f32 ../../../../../../chunks/vec3 ../../../../../../chunks/vec3f32 ../../../../../../chunks/vec4 ../../../../../../chunks/vec4f32 ../../../../layers/support/symbolColorUtils ../../../../terrain/interfaces ./ComponentTechnique ./ComponentTechniqueConfiguration ./shader/ComponentData.glsl ../../../../../../chunks/ComponentShader.glsl ./shader/VertexDiscardByOpacity.glsl ../../../core/material/MaterialBase ../../../core/renderPasses/AllRenderPasses ../../../core/shaderLibrary/ShaderOutputOptions ../../../core/shaderLibrary/attributes/NormalAttribute.glsl ../../../core/shaderLibrary/shading/Normals.glsl ../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../../../core/shaderLibrary/util/AlphaCutoff ../../../core/shaderLibrary/util/EllipsoidMode ../../../core/util/TwoVectorPosition ../../../lib/basicInterfaces".split(" "),
function(f,u,e,n,G,O,t,H,I,J,K,D,P,v,L,M,y,d,r,x,E,N,C,Q,R,S,z){function T(c){switch(c){case r.MaterialSubPass.Color:return x.ShaderOutput.Color;case r.MaterialSubPass.Alpha:return x.ShaderOutput.Alpha;case r.MaterialSubPass.Depth:return x.ShaderOutput.Depth;case r.MaterialSubPass.Normal:return x.ShaderOutput.Normal}}let m=function(c){function q(h,l){var a=c.call(this)||this;a.toMapSpace=l;a.baseColor=J.fromValues(1,1,1,1);a.usePBR=!1;a.hasParametersFromSource=!1;a.mrrFactors=H.fromValues(1,1,.5);
a.emissiveFactor=H.fromValues(0,0,0);a.baseColorTexture=null;a.metallicRoughnessTexture=null;a.emissionTexture=null;a.occlusionTexture=null;a.normalTexture=null;a.objectOpacity=1;a.commonMaterialParameters=new A;a.componentParameters=new B;a.textureAlphaCutoff=Q.defaultMaskAlphaCutoff;a.alphaDiscardMode=z.AlphaDiscardMode.Opaque;a.isIntegratedMesh=!1;a.polygonOffsetEnabled=!1;a.ellipsoidMode=R.EllipsoidMode.Earth;a.hasOccludees=!1;a._techniqueConfiguration=new v.ComponentTechniqueConfiguration;l=
new S.TwoVectorPosition(h.position);const g=O.clone(h.rotationScale);G.invert(g,g);a.transformNormalGlobalFromModel=G.transpose(g,g);a.transformWorldFromModelTL=l.low;a.transformWorldFromModelTH=l.high;a.transformWorldFromModelRS=h.rotationScale;return a}u._inheritsLoose(q,c);var k=q.prototype;k.dispose=function(){this._technique=n.releaseMaybe(this._technique);this.normalTexture=this.occlusionTexture=this.emissionTexture=this.metallicRoughnessTexture=this.baseColorTexture=null};k.prepareTechnique=
function(h,l,a,g){const b=this._techniqueConfiguration;b.hasVertexColors=g.colors;b.hasNormals=g.normals;b.textureCoordinateType=g.textureCoordinates;b.hasMetalnessAndRoughnessTexture=n.isSome(this.metallicRoughnessTexture);b.hasEmissionTexture=n.isSome(this.emissionTexture);b.hasOcclusionTexture=n.isSome(this.occlusionTexture);b.hasNormalTexture=n.isSome(this.normalTexture);b.transparencyPassType=l.identifier===r.RenderPassIdentifier.Material&&null!=a.transparencyPassType?a.transparencyPassType:
z.TransparencyPassType.NONE;b.hasMultipassTerrain=l.identifier===r.RenderPassIdentifier.Material&&null!=a.multipassTerrain?a.multipassTerrain.enabled:!1;b.cullAboveGround=l.identifier===r.RenderPassIdentifier.Material&&null!=a.multipassTerrain?a.multipassTerrain.cullAboveGround:!1;b.ellipsoidMode=this.ellipsoidMode;b.componentData=this.componentParameters.type;b.cullFace=this.commonMaterialParameters.cullFace;b.doubleSidedMode=this.commonMaterialParameters.doubleSided?N.NormalsDoubleSidedMode.View:
N.NormalsDoubleSidedMode.None;b.hasBaseColorTexture=n.isSome(this.baseColorTexture);g=this._computeWhichMaterialPass();b.blendingEnabled=g===p.Transparent||g===p.OpaqueAndTransparent;b.alphaDiscardMode=this.alphaDiscardMode;b.integratedMeshMode=this.isIntegratedMesh?(0===a.overlays.length?0:n.isSome(a.overlays[D.OverlayIndex.INNER].getColorTextureNoRasterImage()))?M.getOverlayNormalTexture(a)?v.IntegratedMeshMode.ColorOverlayWithWater:v.IntegratedMeshMode.ColorOverlay:v.IntegratedMeshMode.NoOverlay:
v.IntegratedMeshMode.None;b.isGround=this.isIntegratedMesh;b.hasPolygonOffset=this.polygonOffsetEnabled;g=this.hasParametersFromSource&&n.isNone(this.baseColorTexture);b.pbrMode=b.integratedMeshMode===v.IntegratedMeshMode.ColorOverlayWithWater?C.PBRMode.WaterOnIntegratedMesh:this.usePBR?g?C.PBRMode.Schematic:C.PBRMode.Normal:C.PBRMode.Disabled;b.normalType=b.integratedMeshMode===v.IntegratedMeshMode.None?b.hasNormals?E.NormalAttributeType.CompressedAttribute:E.NormalAttributeType.ScreenDerivative:
E.NormalAttributeType.Ground;b.hasSlicePlane=n.isSome(a.slicePlane)&&this.commonMaterialParameters.hasSlicePlane;l.identifier===r.RenderPassIdentifier.ShadowMap?(b.output=x.ShaderOutput.Shadow,b.vertexDiscardMode=y.VertexDiscardMode.None):l.identifier===r.RenderPassIdentifier.Highlight?(b.output=x.ShaderOutput.Highlight,b.vertexDiscardMode=y.VertexDiscardMode.None):(this._computeWhichMaterialPass()===p.OpaqueAndTransparent?b.vertexDiscardMode=l.transparent?y.VertexDiscardMode.Opaque:y.VertexDiscardMode.Transparent:
b.vertexDiscardMode=y.VertexDiscardMode.None,b.output=T(l.subPass),l.subPass===r.MaterialSubPass.Alpha&&(b.hasOccludees=a.hasOccludees),l.subPass===r.MaterialSubPass.Color?(b.receiveAmbientOcclusion=a.ssaoHelper.ready,b.hasOccludees=a.hasOccludees,b.receiveShadows=a.shadowMap.ready,b.hasScreenSpaceReflections=a.ssr.enabled,b.hasCloudsReflections=n.isSome(a.clouds.data)):(b.receiveAmbientOcclusion=!1,b.receiveShadows=!1),b.snowCover=this.hasSnowCover(a));this._technique=h.releaseAndAcquire(P.ComponentTechnique,
b,this._technique);this._setClean();return this._technique};k.hasSnowCover=function(h){return n.isSome(h.weather)&&h.weatherVisible&&"snowy"===h.weather.type&&"enabled"===h.weather.snowCover};k.submit=function(h,l,a){if(0!==this.objectOpacity){var g=a.renderable.geometry,b=a.components;a=a.renderable.meta.cameraDepthSquared;var w=b.geometryRanges,F=b.highlightRanges;b=b.defaultShadowMapRanges;switch(this._computeWhichMaterialPass()){case p.Opaque:h.materialOpaque.submitDraw(this,g,w,a);break;case p.Transparent:h.materialTransparent.submitDraw(this,
g,w,a);break;case p.OpaqueAndTransparent:h.materialOpaque.submitDraw(this,g,w,a);h.materialTransparent.submitDraw(this,g,w,a);break;case p.IntegratedMesh:h.materialIntegratedMesh.submitDraw(this,g,w,a),(0===l.overlays.length?0:n.isSome(l.overlays[D.OverlayIndex.INNER].getValidTexture(D.RenderTargetType.Highlight)))&&h.highlightIntegratedMesh.submitDraw(this,g,w,a)}(l=this.componentParameters.castShadows!==f.ComponentParameterSummary.None)&&h.shadowMap.submitDraw(this,g,w,a);n.isSome(F)&&(h.highlight.submitDraw(this,
g,F,a),l&&h.highlightShadowMap.submitDraw(this,g,F,a));l&&n.isSome(b)&&h.defaultShadowMap.submitDraw(this,g,b,a)}};k._computeWhichMaterialPass=function(){return this.isIntegratedMesh?p.IntegratedMesh:1>this.objectOpacity?p.Transparent:this.componentParameters.opaqueOverride===f.ComponentParameterSummary.All?p.Opaque:1>this.baseColor[3]||this.alphaDiscardMode===z.AlphaDiscardMode.Blend||this.alphaDiscardMode===z.AlphaDiscardMode.MaskBlend?p.Transparent:this.componentParameters.transparent===f.ComponentParameterSummary.None?
p.Opaque:this.componentParameters.transparent===f.ComponentParameterSummary.All?p.Transparent:p.OpaqueAndTransparent};u._createClass(q,[{key:"texture",get:function(){return n.isSome(this.baseColorTexture)?this.baseColorTexture.glTexture:null}},{key:"textureMetallicRoughness",get:function(){return n.isSome(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.glTexture:null}},{key:"textureEmissive",get:function(){return n.isSome(this.emissionTexture)?this.emissionTexture.glTexture:null}},{key:"textureOcclusion",
get:function(){return n.isSome(this.occlusionTexture)?this.occlusionTexture.glTexture:null}},{key:"textureNormal",get:function(){return n.isSome(this.normalTexture)?this.normalTexture.glTexture:null}},{key:"attributeLocations",get:function(){return M.attributeLocations}}]);return q}(d.MaterialBase);e.__decorate([d.parameter({vectorOps:I.vec4})],m.prototype,"baseColor",void 0);e.__decorate([d.parameter()],m.prototype,"usePBR",void 0);e.__decorate([d.parameter()],m.prototype,"hasParametersFromSource",
void 0);e.__decorate([d.parameter({vectorOps:t.vec3})],m.prototype,"mrrFactors",void 0);e.__decorate([d.parameter({vectorOps:t.vec3})],m.prototype,"emissiveFactor",void 0);e.__decorate([d.parameter({dispose:!0})],m.prototype,"baseColorTexture",void 0);e.__decorate([d.parameter({dispose:!0})],m.prototype,"metallicRoughnessTexture",void 0);e.__decorate([d.parameter({dispose:!0})],m.prototype,"emissionTexture",void 0);e.__decorate([d.parameter({dispose:!0})],m.prototype,"occlusionTexture",void 0);e.__decorate([d.parameter({dispose:!0})],
m.prototype,"normalTexture",void 0);e.__decorate([d.parameter()],m.prototype,"objectOpacity",void 0);e.__decorate([d.parameterBlock()],m.prototype,"commonMaterialParameters",void 0);e.__decorate([d.parameterBlock()],m.prototype,"componentParameters",void 0);e.__decorate([d.parameter()],m.prototype,"textureAlphaCutoff",void 0);e.__decorate([d.parameter()],m.prototype,"alphaDiscardMode",void 0);e.__decorate([d.parameter()],m.prototype,"isIntegratedMesh",void 0);e.__decorate([d.parameter()],m.prototype,
"polygonOffsetEnabled",void 0);e.__decorate([d.parameter()],m.prototype,"ellipsoidMode",void 0);e.__decorate([d.parameter()],m.prototype,"hasOccludees",void 0);f.ShadingNormalSource=void 0;(function(c){c[c.VERTEX=0]="VERTEX";c[c.GROUND=1]="GROUND";c[c.SCREEN_DERIVATIVE=2]="SCREEN_DERIVATIVE"})(f.ShadingNormalSource||(f.ShadingNormalSource={}));var p;(function(c){c[c.Opaque=0]="Opaque";c[c.Transparent=1]="Transparent";c[c.OpaqueAndTransparent=2]="OpaqueAndTransparent";c[c.IntegratedMesh=3]="IntegratedMesh"})(p||
(p={}));let A=function(c){function q(){var k=c.apply(this,arguments)||this;k.doubleSided=!1;k.cullFace=z.CullFaceOptions.Back;k.hasSlicePlane=!0;return k}u._inheritsLoose(q,c);return q}(d.MaterialParameterBlock);e.__decorate([d.parameter()],A.prototype,"doubleSided",void 0);e.__decorate([d.parameter()],A.prototype,"cullFace",void 0);e.__decorate([d.parameter()],A.prototype,"hasSlicePlane",void 0);let B=function(c){function q(){var k=c.apply(this,arguments)||this;k.externalColor=J.fromValues(1,1,1,
1);k.externalColorMixMode=K.ColorMixModeEnum.Multiply;k.castShadows=f.ComponentParameterSummary.All;return k}u._inheritsLoose(q,c);u._createClass(q,[{key:"transparent",get:function(){return 1>this.externalColor[3]?f.ComponentParameterSummary.All:f.ComponentParameterSummary.None}},{key:"opaqueOverride",get:function(){return this.externalColorMixMode===K.ColorMixModeEnum.Replace&&1===this.externalColor[3]?f.ComponentParameterSummary.All:f.ComponentParameterSummary.None}},{key:"visible",get:function(){return 0<
this.externalColor[3]?f.ComponentParameterSummary.All:f.ComponentParameterSummary.None}},{key:"type",get:function(){return L.ComponentDataType.Uniform}}]);return q}(d.MaterialParameterBlock);e.__decorate([d.parameter({vectorOps:I.vec4})],B.prototype,"externalColor",void 0);e.__decorate([d.parameter()],B.prototype,"externalColorMixMode",void 0);e.__decorate([d.parameter()],B.prototype,"castShadows",void 0);f.ComponentParameterSummary=void 0;(function(c){c[c.All=0]="All";c[c.Some=1]="Some";c[c.None=
2]="None"})(f.ComponentParameterSummary||(f.ComponentParameterSummary={}));t=function(c){function q(){var k=c.apply(this,arguments)||this;k.texture=null;k.transparent=f.ComponentParameterSummary.None;k.opaqueOverride=f.ComponentParameterSummary.None;k.castShadows=f.ComponentParameterSummary.None;return k}u._inheritsLoose(q,c);u._createClass(q,[{key:"type",get:function(){return L.ComponentDataType.Varying}}]);return q}(d.MaterialParameterBlock);e.__decorate([d.parameter()],t.prototype,"texture",void 0);
e.__decorate([d.parameter()],t.prototype,"transparent",void 0);e.__decorate([d.parameter()],t.prototype,"opaqueOverride",void 0);e.__decorate([d.parameter()],t.prototype,"castShadows",void 0);f.CommonMaterialParameters=A;f.ComponentMaterial=m;f.ComponentParametersUniform=B;f.ComponentParametersVarying=t;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});