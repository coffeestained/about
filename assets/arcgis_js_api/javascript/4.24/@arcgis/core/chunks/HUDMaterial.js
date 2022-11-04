/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as e,w as t,n as i,d as o,o as r,a,e as s,v as n,F as l,j as c,c as d,b as p,h as u,f}from"./mathUtils.js";import{i as h,e as v}from"./maybe.js";import{f as g}from"./mat3.js";import{b as m}from"./quatf64.js";import{j as x}from"./mat4.js";import{c as O}from"./mat4f64.js";import{a as S,c as P}from"./vec2.js";import{O as b,a as C,f as w}from"./vec2f64.js";import{Z as y,c as A}from"./vec4f64.js";import{c as z}from"./aaBoundingRect.js";import{n as T}from"./InterleavedLayout.js";import{a as D,f as j,F as M,b as V,p as U,M as _,z as F,j as E,t as R,S as I,g as H,d as G,C as N,s as q,q as L,k as B,R as $,c as X,P as W,D as k,i as Q,K as Z,L as Y,N as K}from"./glUtil3D.js";import{S as J,a as ee,b as te,V as ie,c as oe}from"./VisualVariables.glsl.js";import{g as re,D as ae,M as se,e as ne,f as le,p as ce,v as de,R as pe}from"./Material.js";import{V as ue}from"./VertexAttribute.js";import{a as fe}from"./geometryDataUtils.js";import{G as he,a as ve}from"./GLTextureMaterial.js";import{R as ge}from"./RenderSlot.js";import{a as me}from"./Util.js";import{i as xe}from"./utils4.js";import"../core/lang.js";import{p as Oe}from"./floatRGBA.js";import{T as Se}from"./Texture2.js";import{f as Pe,B as be,C as Ce,P as we}from"./enums.js";import{m as ye}from"./lineUtils.js";import{a as Ae,v as ze,F as Te}from"./Matrix4Uniform.js";import{T as De}from"./basicInterfaces.js";import{V as je}from"./ViewingMode.js";import{i as Me,a as Ve,m as Ue,o as _e,d as Fe}from"./OrderIndependentTransparency.js";import{_ as Ee}from"./tslib.es6.js";import{p as Re}from"./ShaderTechniqueConfiguration.js";const Ie=128,He=.5;function Ge(e,t=128,i=.5*t,o=0){const r=function(e,t=128,i=.5*t,o=0){switch(e){case"circle":default:return function(e,t){const i=e/2-.5;return $e(e,Le(i,i,t/2))}(t,i);case"square":return function(e,t){return Ne(e,t,!1)}(t,i);case"cross":return function(e,t,i=0){return qe(e,t,!1,i)}(t,i,o);case"x":return function(e,t,i=0){return qe(e,t,!0,i)}(t,i,o);case"kite":return function(e,t){return Ne(e,t,!0)}(t,i);case"triangle":return function(e,t){return $e(e,Be(e/2,t,t/2))}(t,i);case"arrow":return function(e,t){const i=t,o=t/2,r=e/2,a=.8*i,s=Le(r,(e-t)/2-a,Math.sqrt(a*a+o*o)),n=Be(r,i,o);return $e(e,((e,t)=>Math.max(n(e,t),-s(e,t))))}(t,i)}}(e,t,i,o);return new Se(r,{mipmap:!1,wrap:{s:Pe.CLAMP_TO_EDGE,t:Pe.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0})}function Ne(e,t,i){return i&&(t/=Math.SQRT2),$e(e,((o,r)=>{let a=o-.5*e+.25,s=.5*e-r-.75;if(i){const e=(a+s)/Math.SQRT2;s=(s-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(s))-.5*t}))}function qe(e,t,i,o=0){t-=o,i&&(t*=Math.SQRT2);const r=.5*t;return $e(e,((t,a)=>{let s,n=t-.5*e,l=.5*e-a-1;if(i){const e=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=e}return n=Math.abs(n),l=Math.abs(l),s=n>l?n>r?Math.sqrt((n-r)*(n-r)+l*l):l:l>r?Math.sqrt(n*n+(l-r)*(l-r)):n,s-=o/2,s}))}function Le(e,t,i){return(o,r)=>{const a=o-e,s=r-t;return Math.sqrt(a*a+s*s)-i}}function Be(e,t,i){const o=Math.sqrt(t*t+i*i);return(r,a)=>{const s=Math.abs(r-e)-i,n=a-e+t/2+.75,l=(t*s+i*n)/o,c=-n;return Math.max(l,c)}}function $e(e,t){const i=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let r=0;r<e;r++){const a=r+e*o;let s=t(r,o);s=s/e+.5,Oe(s,i,4*a)}return i}var Xe,We;function ke(e,t){e.include(J),e.attributes.add(ue.POSITION,"vec3"),e.attributes.add(ue.NORMAL,"vec3"),e.attributes.add(ue.AUXPOS1,"vec4");const i=e.vertex;D(e,t),j(i,t),i.uniforms.add([new M("viewport",((e,t)=>t.camera.fullViewport)),new V("polygonOffset",(e=>e.shaderPolygonOffset)),new V("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new V("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===Xe.Occluded?1:t.renderTransparentlyOccludedHUD===Xe.NotOccluded?0:.75)),new U("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),t.hasVerticalOffset&&ee(i),i.constants.add("smallOffsetAngle","float",.984807753012208),i.code.add(re`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(re`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped&&!t.hasVerticalOffset||i.uniforms.add(new _("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),t.isDraped||(i.uniforms.add(new V("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),i.code.add(re`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),t.screenCenterOffsetUnitsEnabled===We.Screen&&i.uniforms.add(new V("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.hasScreenSizePerspective&&te(i),i.code.add(re`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled===We.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?re`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==We.Screen?re`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===We.Screen?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===We.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.code.add(re`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Qe(e){const t=re`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,i=re`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}function Ze(e,t){const{vertex:i,fragment:o}=e;t.hasMultipassGeometry&&i.include(ye),t.hasMultipassTerrain&&e.varyings.add("depth","float"),i.code.add(re`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.hasMultipassGeometry?re`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.hasMultipassTerrain&&o.include(F),t.hasMultipassTerrain&&o.uniforms.add([new U("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture)),new E("nearFar",((e,t)=>t.camera.nearFar)),new E("inverseViewport",((e,t)=>t.inverseViewport))]),o.include(R),o.code.add(re`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.hasMultipassTerrain?re`
          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function Ye(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Ke(e,t=Je){var i,o,r;return e.textureIsSignedDistanceField?(i=e.anchorPosition,o=e.distanceFieldBoundingBox,r=t,h(o)?S(r,i[0]*(o[2]-o[0])+o[0],i[1]*(o[3]-o[1])+o[1]):S(r,0,0)):P(t,e.anchorPosition),t}!function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(Xe||(Xe={})),function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(We||(We={}));const Je=C(),et=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new I,i=e.signedDistanceFieldEnabled;if(t.include(Qe),t.include(ke,e),t.include(H,e),e.output===G.Occlusion)return t.include(Ze,e),t;const{vertex:o,fragment:r}=t;t.include(J),r.include(R),r.include(N),t.include(ie,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),o.uniforms.add([new M("viewport",((e,t)=>t.camera.fullViewport)),new E("screenOffset",((e,t)=>S(Je,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new E("anchorPosition",(e=>Ke(e))),new M("materialColor",(e=>e.color)),new V("pixelRatio",((e,t)=>t.camera.pixelRatio))]),i&&(o.uniforms.add(new M("outlineColor",(e=>e.outlineColor))),r.uniforms.add([new M("outlineColor",(e=>Ye(e)?e.outlineColor:y)),new V("outlineSize",(e=>Ye(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&(oe(o),te(o)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(ue.UV0,"vec2"),t.attributes.add(ue.COLOR,"vec4"),t.attributes.add(ue.SIZE,"vec2"),t.attributes.add(ue.AUXPOS2,"vec4"),o.code.add(re`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?re`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:re`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const a=re`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,s=e.pixelSnappingEnabled?i?re`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:re`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:re`posProj += quadOffset;`;e.vvColor&&o.uniforms.add([new Ae("vvColorColors",(e=>e.vvColorColors),ze),new Te("vvColorValues",(e=>e.vvColorValues),ze)]),o.uniforms.add(new E("textureCoordinateScaleFactor",(e=>h(e.texture)&&h(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:b))),o.code.add(re`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${a}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${re.float(q)};
    ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${re.float(q)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${s}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?re`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),r.uniforms.add(new U("tex",(e=>e.texture)));const n=e.debugDrawLabelBorder?re`(isBorder > 0.0 ? 0.0 : ${re.float(L)})`:re.float(L),l=re`
    ${e.debugDrawLabelBorder?re`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?re`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${re.float(128)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${re.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:re`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?re`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===G.Alpha&&r.code.add(re`
      void main() {
        ${l}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===G.Color&&r.code.add(re`
    void main() {
      ${l}
      ${e.transparencyPassType===De.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===G.Highlight&&(t.include(B),r.code.add(re`
    void main() {
      ${l}
      ${e.binaryHighlightOcclusionEnabled?re`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t},calculateAnchorPosForRendering:Ke},Symbol.toStringTag,{value:"Module"}));class tt extends X{initializeConfiguration(e,t){t.spherical=e.viewingMode===je.Global}initializeProgram(e){const t=tt.shader.get().build(this.configuration);return new W(e.rctx,t,ae)}_setPipelineState(e){const t=this.configuration,i=e===De.NONE,o=e===De.FrontFace,r=this.configuration.hasPolygonOffset&&it,a=(i||o)&&t.output!==G.Highlight?(t.depthEnabled||t.output===G.Occlusion)&&Ve:null;return Ue({blending:t.output===G.Color||t.output===G.Alpha||t.output===G.Highlight?i?ot:_e(e):null,depthTest:{func:Ce.LEQUAL},depthWrite:a,colorWrite:Fe,polygonOffset:r})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.output===G.Occlusion?we.POINTS:we.TRIANGLES}}tt.shader=new $(et,(()=>Promise.resolve().then((()=>et))));const it={factor:0,units:-4},ot=Me(be.ONE,be.ONE_MINUS_SRC_ALPHA);class rt extends k{constructor(){super(...arguments),this.output=G.Color,this.screenCenterOffsetUnitsEnabled=We.World,this.transparencyPassType=De.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}Ee([Re({count:G.COUNT})],rt.prototype,"output",void 0),Ee([Re({count:We.COUNT})],rt.prototype,"screenCenterOffsetUnitsEnabled",void 0),Ee([Re({count:De.COUNT})],rt.prototype,"transparencyPassType",void 0),Ee([Re()],rt.prototype,"spherical",void 0),Ee([Re()],rt.prototype,"occlusionTestEnabled",void 0),Ee([Re()],rt.prototype,"signedDistanceFieldEnabled",void 0),Ee([Re()],rt.prototype,"vvSize",void 0),Ee([Re()],rt.prototype,"vvColor",void 0),Ee([Re()],rt.prototype,"hasVerticalOffset",void 0),Ee([Re()],rt.prototype,"hasScreenSizePerspective",void 0),Ee([Re()],rt.prototype,"debugDrawLabelBorder",void 0),Ee([Re()],rt.prototype,"binaryHighlightOcclusionEnabled",void 0),Ee([Re()],rt.prototype,"hasSlicePlane",void 0),Ee([Re()],rt.prototype,"hasPolygonOffset",void 0),Ee([Re()],rt.prototype,"depthEnabled",void 0),Ee([Re()],rt.prototype,"pixelSnappingEnabled",void 0),Ee([Re()],rt.prototype,"isDraped",void 0),Ee([Re()],rt.prototype,"hasMultipassGeometry",void 0),Ee([Re()],rt.prototype,"hasMultipassTerrain",void 0),Ee([Re()],rt.prototype,"cullAboveGround",void 0),Ee([Re({constValue:!0})],rt.prototype,"hasSliceInVertexProgram",void 0),Ee([Re({constValue:!1})],rt.prototype,"hasVvInstancing",void 0);class at extends se{constructor(e){super(e,new At),this.techniqueConfig=new rt}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasVerticalOffset=!!this.parameters.verticalOffset,this.techniqueConfig.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?We.Screen:We.World,this.techniqueConfig.hasPolygonOffset=this.parameters.polygonOffset,this.techniqueConfig.isDraped=this.parameters.isDraped,this.techniqueConfig.occlusionTestEnabled=this.parameters.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this.techniqueConfig.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.parameters.vvColorEnabled,e===G.Color&&(this.techniqueConfig.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===G.Highlight&&(this.techniqueConfig.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.parameters.depthEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassGeometry=t.multipassGeometry.enabled,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,i,o,r,a,s,n,l){h(l)?this._intersectDrapedHudGeometry(e,a,s,n,l):this._intersectHudGeometry(e,t,i,o,s,n)}_intersectDrapedHudGeometry(e,t,i,o,r){const a=e.vertexAttributes.get(ue.POSITION),s=e.vertexAttributes.get(ue.SIZE),n=this.parameters,l=Ke(n);let c=1,d=1;if(h(o)){const e=o(Pt);c=e[0],d=e[5]}c*=e.screenToWorldRatio,d*=e.screenToWorldRatio;const p=Ct*e.screenToWorldRatio;for(let o=0;o<a.data.length/a.size;o++){const u=o*a.size,f=a.data[u],h=a.data[u+1],v=o*s.size;let g;wt[0]=s.data[v]*c,wt[1]=s.data[v+1]*d,n.textureIsSignedDistanceField&&(g=n.outlineSize*e.screenToWorldRatio/2),lt(t,f,h,wt,p,g,n,l)&&i(r.dist,r.normal,-1,!1)}}_intersectHudGeometry(l,c,d,p,f,v){if(!p.options.selectionMode||!p.options.hud||xe(c))return;const m=this.parameters;let O=1,S=1;if(g(gt,d),h(v)){const e=v(Pt);O=e[0],S=e[5],function(e){const t=e[0],i=e[1],o=e[2],r=e[3],a=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+i*i+o*o),p=1/Math.sqrt(r*r+a*a+s*s),u=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=i*d,e[2]=o*d,e[3]=r*p,e[4]=a*p,e[5]=s*p,e[6]=n*u,e[7]=l*u,e[8]=c*u}(gt)}const P=l.vertexAttributes.get(ue.POSITION),b=l.vertexAttributes.get(ue.SIZE),C=l.vertexAttributes.get(ue.NORMAL),w=l.vertexAttributes.get(ue.AUXPOS1);me(P.size>=3);const y=p.point,A=p.camera,z=Ke(m);O*=A.pixelRatio,S*=A.pixelRatio;const T="screen"===this.parameters.centerOffsetUnits;for(let l=0;l<P.data.length/P.size;l++){const c=l*P.size;e(pt,P.data[c],P.data[c+1],P.data[c+2]),t(pt,pt,d);const h=l*b.size;wt[0]=b.data[h]*O,wt[1]=b.data[h+1]*S,t(pt,pt,A.viewMatrix);const v=l*w.size;if(e(Ot,w.data[v+0],w.data[v+1],w.data[v+2]),!T&&(pt[0]+=Ot[0],pt[1]+=Ot[1],0!==Ot[2])){const e=Ot[2];i(Ot,pt),o(pt,pt,r(Ot,Ot,e))}const g=l*C.size;if(e(ut,C.data[g],C.data[g+1],C.data[g+2]),this._normalAndViewAngle(ut,gt,A,St),this._applyVerticalOffsetTransformationView(pt,St,A,ct),A.applyProjection(pt,ft),ft[0]>-1){ft[0]=Math.floor(ft[0]),ft[1]=Math.floor(ft[1]),T&&(Ot[0]||Ot[1])&&(ft[0]+=Ot[0],0!==Ot[1]&&(ft[1]+=ne(Ot[1],ct.factorAlignment)),A.unapplyProjection(ft,pt)),ft[0]+=this.parameters.screenOffset[0],ft[1]+=this.parameters.screenOffset[1],le(wt,ct.factor,wt);const e=bt*A.pixelRatio;let i;if(m.textureIsSignedDistanceField&&(i=m.outlineSize*A.pixelRatio/2),lt(y,ft[0],ft[1],wt,e,i,m,z)){const e=p.ray;if(t(vt,pt,x(xt,A.viewMatrix)),ft[0]=y[0],ft[1]=y[1],A.unprojectFromRenderScreen(ft,pt)){const t=u();a(t,e.direction);const i=1/s(t);r(t,t,i),f(n(e.origin,pt)*i,t,-1,!0,1,vt)}}}}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const o=i.get(ue.POSITION),r=e.indices.get(ue.POSITION);return fe(o,r,t)}createBufferWriter(){return new Tt(this)}_normalAndViewAngle(e,i,o,r){return(function(e){return e instanceof Float32Array&&e.length>=16}(a=i)||function(e){return Array.isArray(e)&&e.length>=16}(a))&&(i=g(mt,i)),l(r.normal,e,i),t(r.normal,r.normal,o.viewInverseTransposeMatrix),r.cosAngle=c(ht,yt),r;var a}_updateScaleInfo(e,t,i){const o=this.parameters;h(o.screenSizePerspective)?ce(i,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),h(o.screenSizePerspectiveAlignment)?ce(i,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,i,o,r,a,s){const n=this._normalAndViewAngle(t,i,r,St);return this._applyVerticalGroundOffsetView(e,n,r,s),this._applyVerticalOffsetTransformationView(s,n,r,a),this._applyPolygonOffsetView(s,n,o[3],r,s),this._applyCenterOffsetView(s,o,s),s}applyShaderOffsetsNDC(e,t,i,o,r){return this._applyCenterOffsetNDC(e,t,i,o),h(r)&&a(r,o),this._applyPolygonOffsetNDC(o,t,i,o),o}_applyPolygonOffsetView(e,t,i,o,s){const n=o.aboveGround?1:-1;let l=Math.sign(i);0===l&&(l=n);const c=n*l;if(this.parameters.shaderPolygonOffset<=0)return a(s,e);const p=d(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-p*p)/p/o.viewport[2];return r(s,e,c>0?u:1/u),s}_applyVerticalGroundOffsetView(e,t,i,o){const a=s(e),n=i.aboveGround?1:-1,l=.5*i.computeRenderPixelSizeAtDist(a),c=r(pt,t.normal,n*l);return p(o,e,c),o}_applyVerticalOffsetTransformationView(e,t,i,o){const a=this.parameters;if(!a.verticalOffset||!a.verticalOffset.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const i=s(e);this._updateScaleInfo(o,i,t.cosAngle)}else o.factor.scale=1,o.factorAlignment.scale=1;return e}const n=s(e),l=v(a.screenSizePerspectiveAlignment,a.screenSizePerspective),c=de(i,n,a.verticalOffset,t.cosAngle,l);return this._updateScaleInfo(o,n,t.cosAngle),r(t.normal,t.normal,c),p(e,e,t.normal)}_applyCenterOffsetView(e,t,o){const s="screen"!==this.parameters.centerOffsetUnits;return o!==e&&a(o,e),s&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(i(ut,o),p(o,o,r(ut,ut,t[2])))),o}_applyCenterOffsetNDC(e,t,i,o){const r="screen"!==this.parameters.centerOffsetUnits;return o!==e&&a(o,e),r||(o[0]+=t[0]/i.fullWidth*2,o[1]+=t[1]/i.fullHeight*2),o}_applyPolygonOffsetNDC(e,t,i,o){const r=this.parameters.shaderPolygonOffset;if(e!==o&&a(o,e),r){const e=i.aboveGround?1:-1,a=e*Math.sign(t[3]);o[2]-=(a||e)*r}return o}requiresSlot(e){if(e===ge.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:i}=this.parameters;return e===(t?ge.LABEL_MATERIAL:ge.HUD_MATERIAL)||i&&e===ge.OCCLUSION_PIXELS}createGLMaterial(e){return e.output===G.Color||e.output===G.Alpha?new nt(e):e.output===G.Highlight?new st(e):null}calculateRelativeScreenBounds(e,t,i=z()){return function(e,t,i,o=dt){P(o,e.anchorPosition),o[0]*=-t[0],o[1]*=-t[1],o[0]+=e.screenOffset[0]*i,o[1]+=e.screenOffset[1]*i}(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class st extends he{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(tt,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}class nt extends st{_isOcclusionSlot(e){return e.slot===ge.OCCLUSION_PIXELS&&this._material.parameters.occlusionTest&&(this._output===G.Color||this._output===G.Alpha)}selectProgram(e){return this.ensureTechnique(tt,e,this._isOcclusionSlot(e)?G.Occlusion:this._output)}}function lt(e,t,i,o,r,a,s,n){let l=t-r-(n[0]>0?o[0]*n[0]:0),c=l+o[0]+2*r,d=i-r-(n[1]>0?o[1]*n[1]:0),p=d+o[1]+2*r;const u=s.distanceFieldBoundingBox;return s.textureIsSignedDistanceField&&h(u)&&(l+=o[0]*u[0],d+=o[1]*u[1],c-=o[0]*(1-u[2]),p-=o[1]*(1-u[3]),l-=a,c+=a,d-=a,p+=a),e[0]>l&&e[0]<c&&e[1]>d&&e[1]<p}const ct={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},dt=C(),pt=u(),ut=u(),ft=A(),ht=u(),vt=u(),gt=m(),mt=m(),xt=O(),Ot=u(),St={normal:ht,cosAngle:0},Pt=O(),bt=1,Ct=2,wt=[0,0],yt=f(0,0,1);class At extends ve{constructor(){super(...arguments),this.renderOccluded=pe.Occlude,this.color=[1,1,1,1],this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=w(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=[1,1,1,1],this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.debugDrawLabelBorder=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const zt=T().vec3f(ue.POSITION).vec3f(ue.NORMAL).vec2f(ue.UV0).vec4u8(ue.COLOR).vec2f(ue.SIZE).vec4f(ue.AUXPOS1).vec4f(ue.AUXPOS2);class Tt{constructor(e){this.material=e,this.vertexBufferLayout=zt}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(ue.POSITION).length}write(e,t,i,o){Q(t.indices.get(ue.POSITION),t.vertexAttributes.get(ue.POSITION).data,e.transformation,i.position,o,6),Z(t.indices.get(ue.NORMAL),t.vertexAttributes.get(ue.NORMAL).data,e.invTranspTransformation,i.normal,o,6);{const e=t.vertexAttributes.get(ue.UV0).data;let r,a,s,n;if(null==e||e.length<4){const e=this.material.parameters;r=0,a=0,s=e.texCoordScale[0],n=e.texCoordScale[1]}else r=e[0],a=e[1],s=e[2],n=e[3];s=Math.min(1.99999,s+1),n=Math.min(1.99999,n+1);const l=t.indices.get(ue.POSITION).length,c=i.uv0;let d=o;for(let e=0;e<l;++e)c.set(d,0,r),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,r),c.set(d,1,n),d+=1,c.set(d,0,r),c.set(d,1,a),d+=1}Y(t.indices.get(ue.COLOR),t.vertexAttributes.get(ue.COLOR).data,4,i.color,o,6);{const e=t.indices.get(ue.SIZE),r=t.vertexAttributes.get(ue.SIZE).data,a=e.length,s=i.size;let n=o;for(let t=0;t<a;++t){const i=r[2*e[t]],o=r[2*e[t]+1];for(let e=0;e<6;++e)s.set(n,0,i),s.set(n,1,o),n+=1}}t.indices.get(ue.AUXPOS1)&&t.vertexAttributes.get(ue.AUXPOS1)&&K(t.indices.get(ue.AUXPOS1),t.vertexAttributes.get(ue.AUXPOS1).data,i.auxpos1,o,6),t.indices.get(ue.AUXPOS2)&&t.vertexAttributes.get(ue.AUXPOS2)&&K(t.indices.get(ue.AUXPOS2),t.vertexAttributes.get(ue.AUXPOS2).data,i.auxpos2,o,6)}}export{Qe as A,He as D,at as H,Xe as a,ke as b,Ge as c,We as d,Ie as e};
