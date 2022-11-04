// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f32 ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(e,t,k,u,p,q,f,l,m,g,n){k=k.fromValues(0,.6,.2);e.PBRMode=void 0;(function(a){a[a.Disabled=
0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]="Schematic";a[a.Water=3]="Water";a[a.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";a[a.COUNT=5]="COUNT"})(e.PBRMode||(e.PBRMode={}));n=function(a){function b(){return a.apply(this,arguments)||this}t._inheritsLoose(b,a);return b}(n.GLTextureMaterialBindParameters);e.PBRBindParameters=n;e.PBRSchematicMRRValues=k;e.PhysicallyBasedRenderingParameters=function(a,b){const d=a.fragment,r=b.hasMetalnessAndRoughnessTexture||b.hasEmissionTexture||b.hasOcclusionTexture;
b.pbrMode===e.PBRMode.Normal&&r&&a.include(u.VertexTextureCoordinates,b);if(b.pbrMode===e.PBRMode.Schematic)d.code.add(f.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);else if(b.pbrMode===e.PBRMode.Disabled)d.code.add(f.glsl`float getBakedOcclusion() { return 1.0; }`);else if(b.pbrMode===e.PBRMode.Normal){d.code.add(f.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);a=b.supportsTextureAtlas;const h=b.pbrTextureBindType;b.hasMetalnessAndRoughnessTexture&&(d.uniforms.add(h===g.BindType.Pass?m.createTexture2DPassSizeUniforms("texMetallicRoughness",c=>c.textureMetallicRoughness,a):l.createTexture2DDrawSizeUniforms("texMetallicRoughness",c=>c.textureMetallicRoughness,a)),d.code.add(f.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`));b.hasEmissionTexture&&(d.uniforms.add(h===g.BindType.Pass?m.createTexture2DPassSizeUniforms("texEmission",c=>c.textureEmissive,a):l.createTexture2DDrawSizeUniforms("texEmission",c=>c.textureEmissive,a)),d.code.add(f.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`));b.hasOcclusionTexture?(d.uniforms.add(h===g.BindType.Pass?m.createTexture2DPassSizeUniforms("texOcclusion",c=>c.textureOcclusion,a):l.createTexture2DDrawSizeUniforms("texOcclusion",c=>c.textureOcclusion,a)),d.code.add(f.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):d.code.add(f.glsl`float getBakedOcclusion() { return 1.0; }`);d.uniforms.add(h===g.BindType.Pass?[new q.Float3PassUniform("emissionFactor",c=>c.emissiveFactor),new q.Float3PassUniform("mrrFactors",c=>c.mrrFactors)]:[new p.Float3DrawUniform("emissionFactor",c=>c.emissiveFactor),new p.Float3DrawUniform("mrrFactors",c=>c.mrrFactors)]);d.code.add(f.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv \x3d vuv0;":""}
      ${b.hasMetalnessAndRoughnessTexture?b.supportsTextureAtlas?"vtc.size \x3d texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${b.hasEmissionTexture?b.supportsTextureAtlas?"vtc.size \x3d texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${b.hasOcclusionTexture?b.supportsTextureAtlas?"vtc.size \x3d texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});