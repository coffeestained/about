// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./vec2 ./vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/sources/edgeRenderer/AdjustProjectedPosition.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardByCoverage.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardNonSilhouetteEdges.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardShortEdges.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineAmplitude.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineOffset.glsl ../views/3d/webgl-engine/shaders/sources/edgeRenderer/UnpackAttributes.glsl".split(" "),
function(h,m,g,n,p,q,r,t,f,u,v,e,w,x,y,z,A,B,C,D){function k(b){const a=new v.ShaderBuilder,c=a.vertex,E=a.fragment;b.legacy&&c.uniforms.add(new u.Matrix4Uniform("model"));b.antialiasing&&(c.code.add(f.glsl`#define ANTIALIASING 1`),E.code.add(f.glsl`#define ANTIALIASING 1`));a.include(w.AdjustProjectedPosition,b);a.include(A.EdgeUtil,b);a.include(B.LineAmplitude,b);a.include(D.UnpackAttributes,b);a.include(C.LineOffset,b);a.include(n.SliceDraw,b);a.include(y.DiscardNonSilhouetteEdges,b);a.include(x.DiscardByCoverage,
b);a.include(z.DiscardShortEdges,b);a.include(p.multipassTerrainTest,b);a.varyings.add("vColor","vec4");a.varyings.add("vRadius","float");a.varyings.add("vPosition","vec3");a.varyings.add("vWorldPosition","vec3");a.varyings.add("vViewPos","vec3");a.varyings.add("vLineLengthPixels","float");a.varyings.add("vSizeFalloffFactor","float");c.uniforms.add(new q.Float2PassUniform("pixelToNDC",(l,d)=>m.set(F,2/d.camera.fullViewport[2],2/d.camera.fullViewport[3])));c.uniforms.add(new r.Float4PassUniform("viewport",
(l,d)=>d.camera.fullViewport));c.uniforms.add(new t.FloatPassUniform("pixelRatio",(l,d)=>d.camera.pixelRatio));a.attributes.add(e.VertexAttribute.POSITION0,"vec3");a.attributes.add(e.VertexAttribute.POSITION1,"vec3");a.attributes.add(e.VertexAttribute.VARIANTOFFSET,"float");a.attributes.add(e.VertexAttribute.VARIANTSTROKE,"float");a.attributes.add(e.VertexAttribute.VARIANTEXTENSION,"float");c.code.add(f.glsl`const float opaqueCutoff = 1.0 / 255.0;
void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
vec2 sideness = unpackedAttributes.sideness;
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;
vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
vViewPos = viewPos;
vec4 projPosV0 = projFromViewPosition(viewPosV0);
vec4 projPosV1 = projFromViewPosition(viewPosV1);
vec4 projPos = projFromViewPosition(viewPos);
vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
vec2 ndcToPixel = viewport.zw * 0.5;
vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
float lineLengthPixels = length(screenSpaceLinePixels);
float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;
float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;
float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;
vSizeFalloffFactor = falloffFactor;
float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;
#ifdef ANTIALIASING
const float aaPaddingPixels = 1.0;
float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;
#else
float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;
#endif
vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;
vec2 ndcOffset = (
screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
+ perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
);
projPos.xy += ndcOffset * projPos.w;
projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;
projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));
float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;
float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;
vPosition = vec3(
halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
pixelPositionAlongLine,
pixelPositionAlongLine / extendedLineLengthPixels
);
vRadius = lineWidthPixels * 0.5;
vLineLengthPixels = extendedLineLengthPixels;
discardShortEdges(unpackedAttributes, lineLengthPixels);
gl_Position = projPos;
}
void main() {
ComponentData component = readComponentData();
UnpackedAttributes unpackedAttributes = unpackAttributes(component);
vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);
vColor = component.color;
if (vColor.a < opaqueCutoff) {
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return;
}
if (discardNonSilhouetteEdges(viewPosV0, worldPosV0)) {
return;
}
calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(), unpackedAttributes);
calculateStyleOutputs(unpackedAttributes);
}`);a.fragment.code.add(f.glsl`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float lineOffset = calculateLineOffset();
      float positionX = position.x - lineOffset;

      if (radius < 1.0) {
        // Handle this specifically for subpixel sizes:
        // 1. Compute correct coverage (note coverage is computed by
        //    0.5 - dist, so we make sure that that will lead to correct
        //    subpixel coverage
        // 2. Ignore rounded caps
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);

        float coverage = min(coverageX, coverageY);

        return vec2(0.5 - coverage, 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, vViewPos.z);":""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      float alpha = vColor.a * coverage;

      gl_FragColor = vec4(vColor.rgb, alpha);

    }
  `);return a}const F=g.create();g=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));h.EdgeShader=g;h.build=k});