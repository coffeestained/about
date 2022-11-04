/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{b as e}from"./quatf64.js";import{f as t,h as o,s as a,a as r,c as i,L as n,o as s,b as l,J as d}from"./mathUtils.js";import{a as c,g as u,N as m}from"./Material.js";import{U as h,B as v,h as f,M as g,I as p,J as x,d as b,j as S,F as w,b as M,t as T,p as y}from"./glUtil3D.js";import{c as F}from"./vec4f64.js";import{V as A}from"./VertexAttribute.js";import{c as R}from"./mat4f64.js";import{c as _,f as N}from"./vec3f32.js";import{h as H}from"../core/lang.js";import{n as L}from"./compilerUtils.js";import{i as P}from"./maybe.js";import{a as C}from"./vec2.js";import{Z as V,a as z}from"./vec2f64.js";import"../core/Error.js";import"./Logger.js";import"./basicInterfaces.js";class D extends c{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=t(1,1,1),this.vvSizeMaxSize=t(100,100,100),this.vvSizeOffset=t(0,0,0),this.vvSizeFactor=t(1,1,1),this.vvSizeValue=t(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e()}}const O=8;class W extends h{constructor(e,t,o){super(e,"vec4",v.Pass,((o,a,r)=>o.setUniform4fv(e,t(a,r))),o)}}class I extends h{constructor(e,t,o){super(e,"float",v.Pass,((o,a,r)=>o.setUniform1fv(e,t(a,r))),o)}}function G(e){e.vertex.code.add(u`const float PI = 3.141592653589793;`),e.fragment.code.add(u`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}class U{constructor(e=o()){this.intensity=e}}class E{constructor(e=o(),a=t(.57735,.57735,.57735)){this.intensity=e,this.direction=a}}class k{constructor(e=o(),a=t(.57735,.57735,.57735),r=!0,i=1,n=1){this.intensity=e,this.direction=a,this.castShadows=r,this.specularStrength=i,this.environmentStrength=n}}class B{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function j(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]*t[a];return o}function q(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]*t;return o}function $(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]+t[a];return o}function X(e){return(e+1)*(e+1)}function J(e,t,o){const a=e[0],r=e[1],i=e[2],n=o||[];return n.length=X(t),t>=0&&(n[0]=.28209479177),t>=1&&(n[1]=.4886025119*a,n[2]=.4886025119*i,n[3]=.4886025119*r),t>=2&&(n[4]=1.09254843059*a*r,n[5]=1.09254843059*r*i,n[6]=.31539156525*(3*i*i-1),n[7]=1.09254843059*a*i,n[8]=.54627421529*(a*a-r*r)),n}const K=[],Z=[],Q=[],Y=[0],ee=[0],te=o(),oe=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],ae=.4;class re{constructor(){this._shOrder=2,this._oldSunlight={direction:o(),ambient:{color:o(),intensity:1},diffuse:{color:o(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new B,this._mainLight={intensity:o(),direction:t(1,0,0),castShadows:!1,specularStrength:1,environmentStrength:1}}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}get lightingMainDirection(){return this._mainLight.direction}set(e){(function(e,t,o,s){!function(e,t){const o=X(e),a=t||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=o;for(let e=0;e<o;e++)a.r[e]=a.g[e]=a.b[e]=0}(t,s),a(o.intensity,0,0,0);let l=!1;const d=K,c=Z,u=Q;d.length=0,c.length=0,u.length=0;for(const t of e)t instanceof k&&!l?(r(o.direction,t.direction),r(o.intensity,t.intensity),o.specularStrength=t.specularStrength,o.environmentStrength=t.environmentStrength,o.castShadows=t.castShadows,l=!0):t instanceof k||t instanceof E?d.push(t):t instanceof U?c.push(t):t instanceof B&&u.push(t);(function(e,t){const o=(a=t.r.length,i(Math.floor(Math.sqrt(a)-1),0,2));var a;for(const a of e)n(te,a.direction),J(te,o,Y),j(Y,oe),q(Y,a.intensity[0],ee),$(t.r,ee),q(Y,a.intensity[1],ee),$(t.g,ee),q(Y,a.intensity[2],ee),$(t.b,ee)})(d,s),function(e,t){J(te,0,Y);for(const o of e)t.r[0]+=Y[0]*oe[0]*o.intensity[0]*4*Math.PI,t.g[0]+=Y[0]*oe[0]*o.intensity[1]*4*Math.PI,t.b[0]+=Y[0]*oe[0]*o.intensity[2]*4*Math.PI}(c,s);for(const e of u)$(s.r,e.r),$(s.g,e.g),$(s.b,e.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),r(this._oldSunlight.direction,this._mainLight.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,s(this._oldSunlight.diffuse.color,this._mainLight.intensity,t),r(ie,this._oldSunlight.diffuse.color),s(ie,ie,.4*this.globalFactor),l(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,ie)}get old(){return this._oldSunlight}}const ie=o();function ne(e){const t=u`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function se(e,t){t.normalType===le.Attribute&&(e.attributes.add(A.NORMAL,"vec3"),e.vertex.code.add(u`vec3 normalModel() {
return normal;
}`)),t.normalType===le.CompressedAttribute&&(e.include(ne),e.attributes.add(A.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(u`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===le.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var le,de;function ce(e){e.attributes.add(A.POSITION,"vec3"),e.vertex.code.add(u`vec3 positionModel() { return position; }`)}function ue({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(u`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(u`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function me(e){return!!H("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(le||(le={}));class he extends h{constructor(e,t){super(e,"mat3",v.Draw,((o,a,r)=>o.setUniformMatrix3fv(e,t(a,r))))}}class ve extends h{constructor(e,t){super(e,"mat3",v.Pass,((o,a,r)=>o.setUniformMatrix3fv(e,t(a,r))))}}function fe(e,t){e.include(ce);const o=e.vertex;o.include(ue,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),o.uniforms.add([new f("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new f("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new ve("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new g("transformProjFromView",(e=>e.transformProjFromView)),new he("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new p("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new p("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),o.code.add(u`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),o.code.add(u`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new f("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),o.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class ge extends m{constructor(){super(...arguments),this.transformWorldFromViewTH=o(),this.transformWorldFromViewTL=o(),this.transformViewFromCameraRelativeRS=e(),this.transformProjFromView=R()}}class pe extends m{constructor(){super(...arguments),this.transformWorldFromModelRS=e(),this.transformWorldFromModelTH=_(),this.transformWorldFromModelTL=_()}}function xe(e,t){t.normalType===le.Attribute||t.normalType===le.CompressedAttribute?(e.include(se,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new he("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new ve("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(u`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===le.Ground?(e.include(fe,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(u`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?u`normalize(vPositionWorldCameraRelative);`:u`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(u`void forwardNormal() {}`)}class be extends ge{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e()}}class Se extends pe{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e(),this.toMapSpace=F()}}function we(e,t){switch(t.textureCoordinateType){case de.Default:return e.attributes.add(A.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case de.Atlas:return e.attributes.add(A.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(A.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case de.None:return void e.vertex.code.add(u`void forwardTextureCoordinates() {}`);default:L(t.textureCoordinateType);case de.COUNT:return}}function Me(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Te(e,t){switch(e.include(we,t),e.fragment.code.add(u`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case de.Default:return void e.fragment.code.add(u`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case de.Atlas:return e.include(Me),void e.fragment.code.add(u`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:L(t.textureCoordinateType);case de.None:case de.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(de||(de={}));class ye extends h{constructor(e,t){super(e,"vec2",v.Draw,((o,a,r)=>o.setUniform2fv(e,t(a,r))))}}class Fe extends h{constructor(e,t){super(e,"sampler2D",v.Draw,((o,a,r)=>o.bindTexture(e,t(a,r))))}}function Ae(e,t,o){const a=[new Fe(e,t)];if(o){const o=e+"Size";a.push(new ye(o,((e,o)=>{const a=t(e,o);return P(a)?C(Re,a.descriptor.width,a.descriptor.height):V})))}return a}const Re=z(),_e=N(0,.6,.2);var Ne;function He(e,t){const o=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===Ne.Normal&&a&&e.include(Te,t),t.pbrMode!==Ne.Schematic)if(t.pbrMode!==Ne.Disabled){if(t.pbrMode===Ne.Normal){o.code.add(u`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,r=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add(r===v.Pass?x("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):Ae("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),o.code.add(u`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add(r===v.Pass?x("texEmission",(e=>e.textureEmissive),e):Ae("texEmission",(e=>e.textureEmissive),e)),o.code.add(u`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add(r===v.Pass?x("texOcclusion",(e=>e.textureOcclusion),e):Ae("texOcclusion",(e=>e.textureOcclusion),e)),o.code.add(u`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(u`float getBakedOcclusion() { return 1.0; }`),o.uniforms.add(r===v.Pass?[new f("emissionFactor",(e=>e.emissiveFactor)),new f("mrrFactors",(e=>e.mrrFactors))]:[new p("emissionFactor",(e=>e.emissiveFactor)),new p("mrrFactors",(e=>e.mrrFactors))]),o.code.add(u`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else o.code.add(u`float getBakedOcclusion() { return 1.0; }`);else o.code.add(u`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Le(e,t){t.output===b.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(u`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===b.Depth||t.output===b.Shadow?(e.include(fe,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new S("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(u`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(u`void forwardLinearDepth() {}`)}function Pe(e,t){const o=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(o.uniforms.add(new f("lightingAmbientSH0",((e,t)=>a(Ce,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(o.uniforms.add([new w("lightingAmbientSH_R",((e,t)=>d(Ve,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new w("lightingAmbientSH_G",((e,t)=>d(Ve,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new w("lightingAmbientSH_B",((e,t)=>d(Ve,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),o.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===r&&(o.uniforms.add([new f("lightingAmbientSH0",((e,t)=>a(Ce,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new w("lightingAmbientSH_R1",((e,t)=>d(Ve,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new w("lightingAmbientSH_G1",((e,t)=>d(Ve,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new w("lightingAmbientSH_B1",((e,t)=>d(Ve,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new w("lightingAmbientSH_R2",((e,t)=>d(Ve,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new w("lightingAmbientSH_G2",((e,t)=>d(Ve,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new w("lightingAmbientSH_B2",((e,t)=>d(Ve,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),o.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==Ne.Normal&&t.pbrMode!==Ne.Schematic||o.code.add(u`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(Ne||(Ne={}));const Ce=o(),Ve=F();function ze(e,t){const o=e.fragment;t.isGround?o.uniforms.add(new M("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):o.constants.add("lightingFixedFactor","float",0),o.uniforms.add([new f("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new f("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),o.code.add(u`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}class De extends h{constructor(e,t){super(e,"int",v.Pass,((o,a,r)=>o.setUniform1i(e,t(a,r))))}}class Oe extends h{constructor(e,t,o,a){switch(t){case v.Pass:return void super(e,"mat4",t,((t,a,r)=>t.setUniformMatrix4fv(e,o(a,r))),a);case v.Draw:return void super(e,"mat4",t,((t,a,r)=>t.setUniformMatrix4fv(e,o(a,r))),a)}}}class We extends m{constructor(){super(...arguments),this.origin=o()}}function Ie(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Oe("shadowMapMatrix",v.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Ue(e))}function Ge(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Oe("shadowMapMatrix",v.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Ue(e))}function Ue(e){const t=e.fragment;t.include(T),t.uniforms.add([new y("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new De("numCascades",((e,t)=>t.shadowMap.numCascades)),new w("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new M("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(u`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Ee(e){const t=e.fragment.code;t.add(u`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(u`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(u`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ke(e,t){const o=e.fragment.code;e.include(G),t.pbrMode===Ne.Water||t.pbrMode===Ne.WaterOnIntegratedMesh?(o.add(u`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),o.add(u`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(u`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(u`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(u`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==Ne.Normal&&t.pbrMode!==Ne.Schematic||(e.include(Ee),o.add(u`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(u`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(u`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),o.add(u`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(u`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(u`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class Be extends h{constructor(e,t){super(e,"bool",v.Pass,((o,a,r)=>o.setUniform1b(e,t(a,r))))}}class je extends h{constructor(e){super(e,"mat4")}}export{U as A,Be as B,pe as C,ue as D,Pe as E,I as F,ce as G,se as H,De as I,_e as J,ze as M,le as N,G as P,Ge as R,re as S,we as T,D as V,W as a,Se as b,ke as c,Le as d,Ne as e,je as f,me as g,ve as h,de as i,he as j,k,E as l,be as m,ae as n,fe as o,xe as p,Te as q,Ae as r,Me as s,He as t,Ie as u,O as v,ye as w,Fe as x,We as y,ge as z};
