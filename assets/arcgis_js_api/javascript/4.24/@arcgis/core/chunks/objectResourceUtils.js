/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{a as t,i as o,u as a,h as r}from"./maybe.js";import{a as i}from"./mat3.js";import{b as n}from"./quatf64.js";import{j as s}from"./mat4.js";import{I as l,c}from"./mat4f64.js";import{s as d,h as u,c as m,J as p,f as h,a as v,n as g,d as f,e as x,o as b,j as C,F as y,M as T,w as M,ae as w,G as O}from"./mathUtils.js";import{g as S,e as A}from"./aaBoundingBox.js";import{B as P,a as L,c as N,b as R,s as D,u as E,v as I}from"./BufferView.js";import{t as _,a as B,s as V,c as F}from"./vec3.js";import{l as z,D as G,C as $,c as j,t as q,n as U,s as k,a as W,f as H,b as Q,d as J,e as X}from"./DefaultMaterial_COLOR_GAMMA.js";import Y from"../request.js";import{r as K}from"./asyncUtils.js";import Z from"../core/Error.js";import{L as ee}from"./Logger.js";import{throwIfAbortError as te}from"../core/promiseUtils.js";import{V as oe}from"./Version.js";import{r as ae}from"./requestImageUtils.js";import{A as re,T as ie,C as ne,d as se}from"./basicInterfaces.js";import{I as le,d as ce,M as de,s as ue,U as me,B as pe,b as he,a as ve,T as ge,O as fe,g as xe,j as be,p as Ce,k as ye,J as Te,F as Me,h as we,C as Oe,S as Se,f as Ae,m as Pe,q as Le,R as Ne,c as Re,P as De,l as Ee,n as Ie,o as _e,D as Be,w as Ve,e as Fe}from"./glUtil3D.js";import{T as ze}from"./Texture2.js";import{V as Ge}from"./ViewingMode.js";import{n as $e}from"./InterleavedLayout.js";import{D as je,I as qe,T as Ue,H as ke,p as We,N as He,i as Qe,q as Je,r as Xe,e as Ye,c as Ke,E as Ze,n as et,P as tt,M as ot,B as at,G as rt,d as it,u as nt,R as st,t as lt,b as ct,m as dt,g as ut,f as mt}from"./Matrix4Uniform.js";import{n as pt}from"./compilerUtils.js";import{g as ht,q as vt,R as gt,D as ft,M as xt,v as bt,i as Ct}from"./Material.js";import{G as yt}from"./GLTextureMaterial.js";import{m as Tt,b as Mt,o as wt,c as Ot,f as St,a as At,d as Pt,g as Lt,h as Nt}from"./OrderIndependentTransparency.js";import{a as Rt,R as Dt}from"./RenderSlot.js";import{V as Et}from"./VertexAttribute.js";import{g as It}from"./verticalOffsetUtils.js";import{c as _t,a as Bt}from"./vec4f64.js";import{a as Vt,b as Ft}from"./doublePrecisionUtils.js";import{V as zt}from"./VertexColor.glsl.js";import{V as Gt,d as $t}from"./VisualVariables.glsl.js";import{a as jt}from"./Texture.js";import{C as qt,f as Ut,P as kt}from"./enums.js";import{_ as Wt}from"./tslib.es6.js";import{p as Ht}from"./ShaderTechniqueConfiguration.js";function Qt(e,t){const o=e.fragment;switch(o.code.add(ht`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Jt.None:o.code.add(ht`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Jt.View:o.code.add(ht`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Jt.WindingOrder:o.code.add(ht`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:pt(t.doubleSidedMode);case Jt.COUNT:}}var Jt;function Xt(e){e.vertex.code.add(ht`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Yt(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(Et.MODELORIGINHI,"vec3"),e.attributes.add(Et.MODELORIGINLO,"vec3"),e.attributes.add(Et.MODEL,"mat3"),e.attributes.add(Et.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(je,t),o.uniforms.add(new le("viewOriginHi",((e,t)=>Vt(d(Kt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),Kt)))),o.uniforms.add(new le("viewOriginLo",((e,t)=>Ft(d(Kt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),Kt))))),o.code.add(ht`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(ht`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?ht`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(ht`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===ce.Normal&&(o.uniforms.add(new de("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),o.code.add(ht`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(ht`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Jt||(Jt={}));const Kt=u();var Zt;function eo(e){switch(e){case"multiply":default:return Zt.Multiply;case"ignore":return Zt.Ignore;case"replace":return Zt.Replace;case"tint":return Zt.Tint}}function to(e,o,a){if(t(e)||o===Zt.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const r=m(Math.round(e[3]*ao),0,ao),i=0===r||o===Zt.Tint?0:o===Zt.Replace?ro:io;a[0]=m(Math.round(e[0]*oo),0,oo),a[1]=m(Math.round(e[1]*oo),0,oo),a[2]=m(Math.round(e[2]*oo),0,oo),a[3]=r+i}!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(Zt||(Zt={}));const oo=255,ao=85,ro=ao,io=2*ao;function no(e){e.vertex.code.add(ht`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${ht.int(Zt.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${ht.int(Zt.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${ht.int(Zt.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${ht.int(Zt.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function so(e,t){t.hasSymbolColors?(e.include(no),e.attributes.add(Et.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(ht`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new qe("colorMixMode",(e=>vt[e.colorMixMode]))),e.vertex.code.add(ht`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function lo(e){e.fragment.code.add(ht`
    #define discardOrAdjustAlpha(color) { if (color.a < ${ht.float(ue)}) { discard; } }
  `)}class co extends me{constructor(e,t){super(e,"float",pe.Draw,((o,a,r)=>o.setUniform1f(e,t(a,r))))}}function uo(e,t){po(e,t,new he("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function mo(e,t){po(e,t,new co("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function po(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==re.Mask&&t.alphaDiscardMode!==re.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case re.Blend:return e.include(lo);case re.Opaque:a.code.add(ht`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case re.Mask:a.code.add(ht`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case re.MaskBlend:e.fragment.code.add(ht`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function ho(e,t){const o=e.vertex.code,a=e.fragment.code,r=t.hasModelTransformation;t.output!==ce.Depth&&t.output!==ce.Shadow||(ve(e,t),e.include(ge,{linearDepth:!0,hasModelTransformation:r}),e.include(Ue,t),e.include(Gt,t),e.include(fe,t),e.include(xe,t),e.vertex.uniforms.add(new be("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),o.add(ht`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${r?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(uo,t),a.add(ht`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===ce.Normal&&(ve(e,t),e.include(ge,{linearDepth:!1,hasModelTransformation:r}),e.include(ke,t),e.include(We,t),e.include(Ue,t),e.include(Gt,t),t.hasColorTexture&&e.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),o.add(ht`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===He.Attribute?ht`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${r?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(xe,t),e.include(uo,t),a.add(ht`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===He.ScreenDerivative?ht`
            vec3 normal = screenDerivativeNormal(vPositionView);`:ht`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===ce.Highlight&&(ve(e,t),e.include(ge,{linearDepth:!1,hasModelTransformation:r}),e.include(Ue,t),e.include(Gt,t),t.hasColorTexture&&e.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),o.add(ht`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${r?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(xe,t),e.include(uo,t),e.include(ye),a.add(ht`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function vo(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(Et.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Jt.WindingOrder?o.code.add(ht`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(ht`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(ht`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==Qe.None){e.include(Je,t);const a=t.supportsTextureAtlas;o.uniforms.add(t.pbrTextureBindType===pe.Pass?Te("normalTexture",(e=>e.textureNormal),a):Xe("normalTexture",(e=>e.textureNormal),a)),o.code.add(ht`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function go(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add([new Ce("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new Me("viewportPixelSz",((e,t)=>p(fo,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),o.code.add(ht`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):o.code.add(ht`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const fo=_t();function xo(e,t){const o=e.fragment;e.include(go,t),t.pbrMode!==Ye.Disabled&&e.include(Ke,t),e.include(Ze,t),o.constants.add("ambientBoostFactor","float",et),e.include(tt),o.code.add(ht`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Ye.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.uniforms.add(new we("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),o.code.add(ht`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?ht`normalize(vPosWorld)`:ht`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.uniforms.add([new he("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new we("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),o.code.add(ht`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===Ye.Disabled||t.pbrMode===Ye.WaterOnIntegratedMesh?(e.include(ot,t),o.code.add(ht`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==Ye.Normal&&t.pbrMode!==Ye.Schematic||(o.code.add(ht`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(ht`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new at("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(ht`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new he("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new he("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),o.code.add(ht`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(ht`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===Ye.Schematic?ht`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:ht`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function bo(e,t){const o=ht`
  /*
  *  ${t.name}
  *  ${t.output===ce.Color?"RenderOutput: Color":t.output===ce.Depth?"RenderOutput: Depth":t.output===ce.Shadow?"RenderOutput: Shadow":t.output===ce.Normal?"RenderOutput: Normal":t.output===ce.Highlight?"RenderOutput: Highlight":""}
  */
  `;jt()&&(e.fragment.code.add(o),e.vertex.code.add(o))}function Co(e){e.include(Oe),e.code.add(ht`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${ht.int(Zt.Multiply)}) {
        return allMixed;
      }
      if (mode == ${ht.int(Zt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${ht.int(Zt.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${ht.int(Zt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${ht.int(Zt.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const yo=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Se,a=t.vertex.code,r=t.fragment.code;t.include(bo,{name:"Default Material Shader",output:e.output});const i=ve(t,e);return t.include(rt),t.varyings.add("vpos","vec3"),t.include(Gt,e),t.include(Yt,e),t.include($t,e),e.output!==ce.Color&&e.output!==ce.Alpha||(Ae(t.vertex,e),t.include(ke,e),t.include(ge,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===He.Attribute&&e.offsetBackfaces&&t.include(Xt),t.include(vo,e),t.include(We,e),e.instancedColor&&t.attributes.add(Et.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(Ue,e),t.include(it,e),t.include(so,e),t.include(zt,e),t.vertex.uniforms.add(new Me("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new de("model",(e=>o(e.modelTransformation)?e.modelTransformation:l))),a.add(ht`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${ht.float(ue)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===He.Attribute?ht`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===He.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===ce.Alpha&&(t.include(xe,e),t.include(uo,e),t.include(Pe,e),t.fragment.uniforms.add([new he("opacity",(e=>e.opacity)),new he("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),t.fragment.include(Co),r.add(ht`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?ht`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ht`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?ht`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ht`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===ce.Color&&(t.include(xe,e),t.include(xo,e),t.include(go,e),t.include(uo,e),t.include(e.instancedDoublePrecision?nt:st,e),t.include(Pe,e),Ae(t.fragment,e),t.fragment.uniforms.add([i,new we("ambient",(e=>e.ambient)),new we("diffuse",(e=>e.diffuse)),new he("opacity",(e=>e.opacity)),new he("layerOpacity",(e=>e.layerOpacity)),new he("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new we("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",et),e.hasColorTexture&&t.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),t.include(lt,e),t.include(Ke,e),t.fragment.include(Co),t.include(Qt,e),r.add(ht`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?ht`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ht`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===He.ScreenDerivative?ht`
                vec3 normal = screenDerivativeNormal(localvpos);`:ht`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===Ye.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?ht`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ht`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?ht`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:ht`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?ht`normalize(vpos + localOrigin);`:ht`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?ht`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===Ye.Normal||e.pbrMode===Ye.Schematic?ht`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?ht`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:ht`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===ie.Color?ht`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(ho,e),t}},Symbol.toStringTag,{value:"Module"}));class To extends dt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=h(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ne.Back,this.emissiveFactor=h(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=h(.2,.2,.2),this.diffuse=h(.8,.8,.8),this.externalColor=Bt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=u(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=n(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=se.Less,this.textureAlphaMode=re.Blend,this.textureAlphaCutoff=Le,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=gt.Occlude}}class Mo extends ct{constructor(){super(...arguments),this.origin=u(),this.slicePlaneLocalOrigin=this.origin}}class wo extends Re{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ge.Global,t.doublePrecisionRequiresObfuscation=ut(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Qe.Default:Qe.None}initializeProgram(e){return this._initializeProgram(e,wo.shader)}_initializeProgram(e,t){const o=t.get().build(this.configuration);return new De(e.rctx,o,ft)}_convertDepthTestFunction(e){return e===se.Lequal?qt.LEQUAL:qt.LESS}_setPipeline(e,t){const o=this.configuration,a=e===ie.NONE,r=e===ie.FrontFace;return Tt({blending:o.output!==ce.Color&&o.output!==ce.Alpha||!o.transparent?null:a?Mt:wt(e),culling:Oo(o)&&Ot(o.cullFace),depthTest:{func:St(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:a||r?o.writeDepth&&At:null,colorWrite:Pt,stencilWrite:o.hasOccludees?Ee:null,stencilTest:o.hasOccludees?t?Ie:_e:null,polygonOffset:a||r?null:Lt(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Oo(e){return e.cullFace!==ne.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}wo.shader=new Ne(yo,(()=>Promise.resolve().then((()=>yo))));class So extends Be{constructor(){super(...arguments),this.output=ce.Color,this.alphaDiscardMode=re.Opaque,this.doubleSidedMode=Jt.None,this.pbrMode=Ye.Disabled,this.cullFace=ne.None,this.transparencyPassType=ie.NONE,this.normalType=He.Attribute,this.textureCoordinateType=Qe.None,this.customDepthTest=se.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}Wt([Ht({count:ce.COUNT})],So.prototype,"output",void 0),Wt([Ht({count:re.COUNT})],So.prototype,"alphaDiscardMode",void 0),Wt([Ht({count:Jt.COUNT})],So.prototype,"doubleSidedMode",void 0),Wt([Ht({count:Ye.COUNT})],So.prototype,"pbrMode",void 0),Wt([Ht({count:ne.COUNT})],So.prototype,"cullFace",void 0),Wt([Ht({count:ie.COUNT})],So.prototype,"transparencyPassType",void 0),Wt([Ht({count:He.COUNT})],So.prototype,"normalType",void 0),Wt([Ht({count:Qe.COUNT})],So.prototype,"textureCoordinateType",void 0),Wt([Ht({count:se.COUNT})],So.prototype,"customDepthTest",void 0),Wt([Ht()],So.prototype,"spherical",void 0),Wt([Ht()],So.prototype,"hasVertexColors",void 0),Wt([Ht()],So.prototype,"hasSymbolColors",void 0),Wt([Ht()],So.prototype,"hasVerticalOffset",void 0),Wt([Ht()],So.prototype,"hasSlicePlane",void 0),Wt([Ht()],So.prototype,"hasSliceHighlight",void 0),Wt([Ht()],So.prototype,"hasColorTexture",void 0),Wt([Ht()],So.prototype,"hasMetalnessAndRoughnessTexture",void 0),Wt([Ht()],So.prototype,"hasEmissionTexture",void 0),Wt([Ht()],So.prototype,"hasOcclusionTexture",void 0),Wt([Ht()],So.prototype,"hasNormalTexture",void 0),Wt([Ht()],So.prototype,"hasScreenSizePerspective",void 0),Wt([Ht()],So.prototype,"hasVertexTangents",void 0),Wt([Ht()],So.prototype,"hasOccludees",void 0),Wt([Ht()],So.prototype,"hasMultipassTerrain",void 0),Wt([Ht()],So.prototype,"hasModelTransformation",void 0),Wt([Ht()],So.prototype,"offsetBackfaces",void 0),Wt([Ht()],So.prototype,"vvSize",void 0),Wt([Ht()],So.prototype,"vvColor",void 0),Wt([Ht()],So.prototype,"receiveShadows",void 0),Wt([Ht()],So.prototype,"receiveAmbientOcclusion",void 0),Wt([Ht()],So.prototype,"textureAlphaPremultiplied",void 0),Wt([Ht()],So.prototype,"instanced",void 0),Wt([Ht()],So.prototype,"instancedColor",void 0),Wt([Ht()],So.prototype,"instancedDoublePrecision",void 0),Wt([Ht()],So.prototype,"doublePrecisionRequiresObfuscation",void 0),Wt([Ht()],So.prototype,"writeDepth",void 0),Wt([Ht()],So.prototype,"transparent",void 0),Wt([Ht()],So.prototype,"enableOffset",void 0),Wt([Ht()],So.prototype,"cullAboveGround",void 0),Wt([Ht()],So.prototype,"snowCover",void 0),Wt([Ht({constValue:!0})],So.prototype,"hasVvInstancing",void 0),Wt([Ht({constValue:!1})],So.prototype,"useCustomDTRExponentForWater",void 0),Wt([Ht({constValue:!1})],So.prototype,"supportsTextureAtlas",void 0),Wt([Ht({constValue:!0})],So.prototype,"useFillLights",void 0);const Ao=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Se,o=t.vertex.code,a=t.fragment.code,r=ve(t,e);return t.include(rt),t.varyings.add("vpos","vec3"),t.include(Gt,e),t.include(Yt,e),t.include($t,e),e.output!==ce.Color&&e.output!==ce.Alpha||(Ae(t.vertex,e),t.include(ke,e),t.include(ge),e.offsetBackfaces&&t.include(Xt),e.instancedColor&&t.attributes.add(Et.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(Ue,e),t.include(it,e),t.include(so,e),t.include(zt,e),t.vertex.uniforms.add(new Me("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),o.add(ht`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${ht.float(ue)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?ht`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===ce.Alpha&&(t.include(xe,e),t.include(uo,e),t.include(Pe,e),t.fragment.uniforms.add([new he("opacity",(e=>e.opacity)),new he("layerOpacity",(e=>e.layerOpacity)),new mt("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),t.fragment.include(Co),a.add(ht`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?ht`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?ht`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ht`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?ht`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ht`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===ce.Color&&(t.include(xe,e),t.include(xo,e),t.include(go,e),t.include(uo,e),t.include(e.instancedDoublePrecision?nt:st,e),t.include(Pe,e),Ae(t.fragment,e),t.fragment.uniforms.add([r,new we("ambient",(e=>e.ambient)),new we("diffuse",(e=>e.diffuse)),new he("opacity",(e=>e.opacity)),new he("layerOpacity",(e=>e.layerOpacity)),new mt("view"),new he("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new we("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",et),e.hasColorTexture&&t.fragment.uniforms.add(new Ce("tex",(e=>e.texture))),t.include(lt,e),t.include(Ke,e),t.fragment.include(Co),t.extensions.add("GL_OES_standard_derivatives"),a.add(ht`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?ht`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?ht`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ht`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===Ye.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?ht`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ht`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?ht`albedo = mix(albedo, vec3(1), 0.9);`:ht``}
        ${ht`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===Ye.Normal||e.pbrMode===Ye.Schematic?e.spherical?ht`vec3 normalGround = normalize(vpos + localOrigin);`:ht`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ht``}
        ${e.pbrMode===Ye.Normal||e.pbrMode===Ye.Schematic?ht`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?ht`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:ht`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===ie.Color?ht`gl_FragColor = premultiplyAlpha(gl_FragColor);`:ht``}
      }
    `)),t.include(ho,e),t}},Symbol.toStringTag,{value:"Module"}));class Po extends wo{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetalnessAndRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=He.Attribute,t.doubleSidedMode=Jt.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Po.shader)}}Po.shader=new Ne(Ao,(()=>Promise.resolve().then((()=>Ao))));class Lo extends xt{constructor(e){super(e,Ro),this.supportsEdges=!0,this.techniqueConfig=new So,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=$e().vec3f(Et.POSITION).vec3f(Et.NORMAL);return e.hasVertexTangents&&o.vec4f(Et.TANGENT),t&&o.vec2f(Et.UV0),e.hasVertexColors&&o.vec4u8(Et.COLOR),e.hasSymbolColors&&o.vec4u8(Et.SYMBOLCOLOR),o}(this.parameters),this.instanceBufferLayout=e.instanced?Eo(this.parameters):null}isVisibleInPass(e){return e!==Rt.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Rt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Rt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:a,hasSymbolColors:r,vvColorEnabled:i}=e,n=o(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return a&&(n||i||r)?!!s||l:a?s?c:l:n||i||r?!!s||l:s?c:l}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=o(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=o(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?He.ScreenDerivative:He.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,o(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?ne.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=o(this.parameters.modelTransformation),e!==ce.Color&&e!==ce.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Jt.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Jt.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Jt.WindingOrder:Jt.None,this.techniqueConfig.instancedColor=o(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ye.Schematic:Ye.Normal:Ye.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Nt,this.techniqueConfig.snowCover=this.hasSnowCover(t)),this.techniqueConfig}hasSnowCover(e){return o(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,a,r,i,n,s){if(o(this.parameters.verticalOffset)){const e=r.camera;d(zo,a[12],a[13],a[14]);let t=null;switch(r.viewingMode){case Ge.Global:t=g(Vo,zo);break;case Ge.Local:t=v(Vo,Bo)}let o=0;const s=f(Go,zo,e.eye),l=x(s),c=b(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=C(t,c)),o+=bt(e,l,this.parameters.verticalOffset,u,this.parameters.screenSizePerspective),b(t,t,o),y(Fo,t,r.transform.inverseRotation),i=f(Io,i,Fo),n=f(_o,n,Fo)}Ct(e,t,r,i,n,It(r.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Dt.TRANSPARENT_MATERIAL:Dt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Dt.OPAQUE_MATERIAL)||e===Dt.DRAPED_MATERIAL}createGLMaterial(e){return e.output===ce.Color||e.output===ce.Alpha||e.output===ce.Depth||e.output===ce.Normal||e.output===ce.Shadow||e.output===ce.Highlight?new No(e):null}createBufferWriter(){return new Do(this.vertexBufferLayout,this.instanceBufferLayout)}}class No extends yt{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return d(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Po:wo,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==ce.Color&&this._output!==ce.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const Ro=new class extends To{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class Do{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(Et.POSITION).length}write(e,t,o,a){Ve(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,a)}}function Eo(e){let t=$e();return t=e.instancedDoublePrecision?t.vec3f(Et.MODELORIGINHI).vec3f(Et.MODELORIGINLO).mat3f(Et.MODEL).mat3f(Et.MODELNORMAL):t.mat4f(Et.MODEL).mat4f(Et.MODELNORMAL),o(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(Et.INSTANCECOLOR)),o(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(Et.INSTANCEFEATUREATTRIBUTE)),t}const Io=u(),_o=u(),Bo=h(0,0,1),Vo=u(),Fo=u(),zo=u(),Go=u(),$o=ee.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function jo(e,t){const r=await async function(e,t){const r=o(t)&&t.streamDataRequester;if(r)return async function(e,t,o){const a=await K(t.request(e,"json",o));return!0===a.ok?a.value:(te(a.error),void qo(a.error.details.url))}(e,r,t);const i=await K(Y(e,a(t)));return!0===i.ok?i.value.data:(te(i.error),void qo(i.error))}(e,t),i=await async function(e,t){const a=[];for(const r in e){const i=e[r],n=i.images[0].data;if(!n){$o.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+r,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:Ut.REPEAT,t:Ut.REPEAT},preMultiplyAlpha:Wo(c)!==re.Opaque},u=o(t)&&t.disableTextures?Promise.resolve(null):ae(s,t);a.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(a),i={};for(const e of r)i[e.refId]=e;return i}(r.textureDefinitions,t);return{resource:r,textures:i}}function qo(e){throw new Z("",`Request for object resource failed: ${e}`)}function Uo(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||($o.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&($o.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&($o.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):($o.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else $o.warn("Indexed geometries must specify faces"),a=!1;break}default:$o.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||($o.warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const e in r)r[e].values||($o.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function ko(e){const t=S();return e.forEach((e=>{const a=e.boundingInfo;o(a)&&(A(t,a.getBBMin()),A(t,a.getBBMax()))})),t}function Wo(e){switch(e){case"mask":return re.Mask;case"maskAndTransparency":return re.MaskBlend;case"none":return re.Opaque;default:return re.Blend}}function Ho(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Qo=new oe(1,2,"wosr");async function Jo(a,i){const n=Xo(e(a));if("wosr"===n.fileType){const e=await(i.cache?i.cache.loadWOSR(n.url,i):jo(n.url,i)),t=function(e,t){const a=[],r=[],i=[],n=[],s=e.resource,l=oe.parse(s.version||"1.0","wosr");Qo.validate(l);const c=s.model.name,d=s.model.geometries,u=s.materialDefinitions,m=e.textures;let p=0;const h=new Map;for(let e=0;e<d.length;e++){const s=d[e];if(!Uo(s))continue;const l=Ho(s),c=s.params.vertexAttributes,v=[];for(const e in c){const t=c[e],o=t.values;v.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const f=m&&m[l.texture];if(f&&!h.has(l.texture)){const{image:e,params:t}=f,o=new ze(e,t);n.push(o),h.set(l.texture,o)}const x=h.get(l.texture),b=x?x.id:void 0;let C=i[l.material]?i[l.material][l.texture]:null;if(!C){const e=u[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const a=f&&f.alphaChannelUsage,r=e.transparency>0||"transparency"===a||"maskAndTransparency"===a,n=f?Wo(f.alphaChannelUsage):void 0,s={ambient:T(e.diffuse),diffuse:T(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:ne.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!f&&!!f.params.preMultiplyAlpha};o(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),C=new Lo(s),i[l.material]||(i[l.material]={}),i[l.material][l.texture]=C}r.push(C);const y=new Fe(v,g);p+=g.position?g.position.length:0,a.push(y)}return{name:c,stageResources:{textures:n,materials:r,geometries:a},pivotOffset:s.model.pivotOffset,boundingBox:ko(a),numberOfVertices:p,lodThreshold:null}}(e,i);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const l=await(i.cache?i.cache.loadGLTF(n.url,i,i.usePBR):z(new G(i.streamDataRequester),n.url,i,i.usePBR)),d=r(l.model.meta,"ESRI_proxyEllipsoid");l.meta.isEsriSymbolResource&&o(d)&&l.meta.uri.includes("/RealisticTrees/")&&function(e,o){for(let a=0;a<e.model.lods.length;++a){const r=e.model.lods[a];e.customMeta.esriTreeRendering=!0;for(const i of r.parts){const r=i.attributes.normal;if(t(r))return;const n=i.attributes.position,l=n.count,d=u(),m=u(),p=u(),h=j(R,l),v=j(P,l),b=s(c(),i.transform);for(let t=0;t<l;t++){n.getVec(t,m),r.getVec(t,d),M(m,m,i.transform),f(p,m,o.center),w(p,p,o.radius);const s=p[2],l=x(p),c=Math.min(.45+.55*l*l,1);w(p,p,o.radius),M(p,p,b),g(p,p),a+1!==e.model.lods.length&&e.model.lods.length>1&&O(p,p,d,s>-1?.2:Math.min(-4*s-3.8,1)),v.setVec(t,p),h.set(t,0,255*c),h.set(t,1,255*c),h.set(t,2,255*c),h.set(t,3,255)}i.attributes.normal=v,i.attributes.color=h}}}(l,d);const m=l.meta.isEsriSymbolResource?{usePBR:i.usePBR,isSchematic:!1,treeRendering:!!l.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:i.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},p={...i.materialParamsMixin,treeRendering:!!l.customMeta.esriTreeRendering};if(null!=n.specifiedLodIndex){const e=Yo(l,m,p,n.specifiedLodIndex);let t=e[0].boundingBox;return 0!==n.specifiedLodIndex&&(t=Yo(l,m,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}const h=Yo(l,m,p);return{lods:h,referenceBoundingBox:h[0].boundingBox,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}function Xo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Yo(e,t,a,r){const s=e.model,l=n(),c=new Array,d=new Map,u=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const m={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:o(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:S()};c.push(m),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=o(e.attributes.texCoord0),p=o(e.attributes.normal),h=function(e){switch(e){case"BLEND":return re.Blend;case"MASK":return re.Mask;case"OPAQUE":case null:case void 0:return re.Opaque}}(n.alphaMode);if(!d.has(r)){if(c){if(o(n.textureColor)&&!u.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:h!==re.Opaque};u.set(n.textureColor,new ze(e.data,t))}if(o(n.textureNormal)&&!u.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);u.set(n.textureNormal,new ze(e.data,e.parameters))}if(o(n.textureOcclusion)&&!u.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);u.set(n.textureOcclusion,new ze(e.data,e.parameters))}if(o(n.textureEmissive)&&!u.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);u.set(n.textureEmissive,new ze(e.data,e.parameters))}if(o(n.textureMetallicRoughness)&&!u.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);u.set(n.textureMetallicRoughness,new ze(e.data,e.parameters))}}const i=n.color[0]**(1/$),l=n.color[1]**(1/$),m=n.color[2]**(1/$),v=n.emissiveFactor[0]**(1/$),g=n.emissiveFactor[1]**(1/$),f=n.emissiveFactor[2]**(1/$),x=o(n.textureColor)&&c?u.get(n.textureColor):null;d.set(r,new Lo({...t,transparent:h===re.Blend,customDepthTest:se.Lequal,textureAlphaMode:h,textureAlphaCutoff:n.alphaCutoff,diffuse:[i,l,m],ambient:[i,l,m],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?ne.None:ne.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:p?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:o(x)?x.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:o(n.textureNormal)&&c?u.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:o(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:o(n.textureOcclusion)&&c?u.get(n.textureOcclusion).id:void 0,emissiveTextureId:o(n.textureEmissive)&&c?u.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:o(n.textureMetallicRoughness)&&c?u.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,f],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...a}))}const v=function(e,t){switch(t){case kt.TRIANGLES:return X(e);case kt.TRIANGLE_STRIP:return J(e);case kt.TRIANGLE_FAN:return Q(e)}}(e.indices||e.attributes.position.count,e.primitiveType),g=e.attributes.position.count,f=j(P,g);_(f,e.attributes.position,e.transform);const x=[[Et.POSITION,{data:f.typedBuffer,size:f.elementCount,exclusive:!0}]],b=[[Et.POSITION,v]];if(o(e.attributes.normal)){const t=j(P,g);i(l,e.transform),B(t,e.attributes.normal,l),x.push([Et.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([Et.NORMAL,v])}if(o(e.attributes.tangent)){const t=j(L,g);i(l,e.transform),q(t,e.attributes.tangent,l),x.push([Et.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([Et.TANGENT,v])}if(o(e.attributes.texCoord0)){const t=j(N,g);U(t,e.attributes.texCoord0),x.push([Et.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([Et.UV0,v])}if(o(e.attributes.color)){const t=j(R,g);if(4===e.attributes.color.elementCount)e.attributes.color instanceof L?k(t,e.attributes.color,255):e.attributes.color instanceof R?W(t,e.attributes.color):e.attributes.color instanceof D&&k(t,e.attributes.color,1/256);else{H(t,255,255,255,255);const o=new E(t.buffer,0,4);e.attributes.color instanceof P?V(o,e.attributes.color,255):e.attributes.color instanceof E?F(o,e.attributes.color):e.attributes.color instanceof I&&V(o,e.attributes.color,1/256)}x.push([Et.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([Et.COLOR,v])}const C=new Fe(x,b);m.stageResources.geometries.push(C),m.stageResources.materials.push(d.get(r)),c&&(o(n.textureColor)&&m.stageResources.textures.push(u.get(n.textureColor)),o(n.textureNormal)&&m.stageResources.textures.push(u.get(n.textureNormal)),o(n.textureOcclusion)&&m.stageResources.textures.push(u.get(n.textureOcclusion)),o(n.textureEmissive)&&m.stageResources.textures.push(u.get(n.textureEmissive)),o(n.textureMetallicRoughness)&&m.stageResources.textures.push(u.get(n.textureMetallicRoughness))),m.numberOfVertices+=g;const y=C.boundingInfo;o(y)&&(A(m.boundingBox,y.getBBMin()),A(m.boundingBox,y.getBBMax()))}))})),c}const Ko=Object.freeze(Object.defineProperty({__proto__:null,fetch:Jo,parseUrl:Xo,gltfToEngineResources:Yo},Symbol.toStringTag,{value:"Module"}));export{Zt as C,no as D,xo as E,co as F,bo as H,Co as M,Jt as N,go as a,mo as b,vo as c,Lo as d,to as e,Mo as f,Eo as g,Jo as h,Qt as i,lo as j,jo as l,Ko as o,eo as p};
