// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration".split(" "),
function(p,A,h,B,C,D,E,F,G,q,H,I,J,r,l,a,K,L,M,m,v){function w(b){const c=new L.ShaderBuilder,n=b.hasMultipassTerrain&&(b.output===h.ShaderOutput.Color||b.output===h.ShaderOutput.Alpha);c.include(G.PiUtils);c.include(C.RibbonVertexPosition,b);c.include(E.LineStipple,b);b.output===h.ShaderOutput.Depth&&c.include(D.OutputDepth,b);I.addProjViewLocalOrigin(c,b);const {vertex:d,fragment:f}=c;d.uniforms.add([new K.Matrix4PassUniform("inverseProjectionMatrix",(e,g)=>g.camera.inverseProjectionMatrix),new J.Float2PassUniform("nearFar",
(e,g)=>g.camera.nearFar),new l.FloatPassUniform("miterLimit",e=>"miter"!==e.join?0:e.miterLimit),new r.Float4PassUniform("viewport",(e,g)=>g.camera.fullViewport)]);d.constants.add("LARGE_HALF_FLOAT","float",65500);c.attributes.add(m.VertexAttribute.POSITION,"vec3");c.attributes.add(m.VertexAttribute.SUBDIVISIONFACTOR,"float");c.attributes.add(m.VertexAttribute.UV0,"vec2");c.attributes.add(m.VertexAttribute.AUXPOS1,"vec3");c.attributes.add(m.VertexAttribute.AUXPOS2,"vec3");c.varyings.add("vColor",
"vec4");c.varyings.add("vpos","vec3");c.varyings.add("linearDepth","float");n&&c.varyings.add("depth","float");const k=b.capType===v.CapType.ROUND,x=b.stippleEnabled&&b.stippleScaleWithLineWidth||k;x&&c.varyings.add("vLineWidth","float");const y=b.stippleEnabled&&b.stippleScaleWithLineWidth;y&&c.varyings.add("vLineSizeInv","float");const t=b.innerColorEnabled||k;t&&c.varyings.add("vLineDistance","float");const z=b.stippleEnabled&&k,u=b.falloffEnabled||z;u&&c.varyings.add("vLineDistanceNorm","float");
k&&(c.varyings.add("vSegmentSDF","float"),c.varyings.add("vReverseSegmentSDF","float"));d.code.add(a.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`);d.code.add(a.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`);d.code.add(a.glsl`
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

      ${n?"depth \x3d pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `);d.uniforms.add(new l.FloatPassUniform("pixelRatio",(e,g)=>g.camera.pixelRatio));d.code.add(a.glsl`
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

      ${x?a.glsl`vLineWidth = lineWidth;`:""}
      ${y?a.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

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
  `);(b.stippleEnabled||k)&&d.code.add(a.glsl`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${k?a.glsl`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `);d.code.add(a.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`);b.roundJoins?d.code.add(a.glsl`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${b.stippleEnabled?a.glsl`min(1.0, subdivisionFactor * ${a.glsl.float(1.5)})`:a.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):d.code.add(a.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);d.code.add(a.glsl`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${b.capType!==v.CapType.BUTT?a.glsl`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `);d.code.add(a.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${u||t?a.glsl`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${t?a.glsl`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${u?a.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `);k&&d.code.add(a.glsl`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`);b.stippleEnabled&&(b.draped?d.uniforms.add(new l.FloatPassUniform("worldToScreenRatio",(e,g)=>1/g.screenToPCSRatio)):d.code.add(a.glsl`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),d.code.add(a.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),b.draped?d.code.add(a.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):d.code.add(a.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),d.code.add(a.glsl`
      float patternLength = ${b.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

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
    `));d.code.add(a.glsl`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${b.wireframe&&!b.draped?"pos.z -\x3d 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `);n&&c.include(F.multipassTerrainTest,b);c.include(B.SliceDraw,b);f.include(H.ColorConversion);f.code.add(a.glsl`
  void main() {
    discardBySlice(vpos);
    ${n?"terrainDepthTest(gl_FragCoord, depth);":""}
  `);b.wireframe?f.code.add(a.glsl`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(k&&f.code.add(a.glsl`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${a.glsl.float(q.symbolAlphaCutoff)}) {
        discard;
      }
    `),z?f.code.add(a.glsl`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${a.glsl.float(q.symbolAlphaCutoff)}, stippleCoverage);
      `):f.code.add(a.glsl`float stippleAlpha = getStippleAlpha();`),f.uniforms.add(new r.Float4PassUniform("intrinsicColor",e=>e.color)),f.code.add(a.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),b.innerColorEnabled&&(f.uniforms.add(new r.Float4PassUniform("innerColor",e=>A.unwrapOr(e.innerColor,e.color))),f.uniforms.add(new l.FloatPassUniform("innerWidth",(e,g)=>e.innerWidth*g.camera.pixelRatio)),f.code.add(a.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),f.code.add(a.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),b.falloffEnabled&&(f.uniforms.add(new l.FloatPassUniform("falloff",e=>e.falloff)),f.code.add(a.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)));f.code.add(a.glsl`
    if (finalColor.a < ${a.glsl.float(q.symbolAlphaCutoff)}) {
      discard;
    }

    ${b.output===h.ShaderOutput.Alpha?a.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${b.output===h.ShaderOutput.Color?a.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${b.output===h.ShaderOutput.Color&&b.transparencyPassType===M.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    ${b.output===h.ShaderOutput.Highlight?a.glsl`gl_FragColor = vec4(1.0);`:""}
    ${b.output===h.ShaderOutput.Depth?a.glsl`outputDepth(linearDepth);`:""}
  }
  `);return c}const N=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:1,build:w},Symbol.toStringTag,{value:"Module"}));p.NUM_ROUND_JOIN_SUBDIVISIONS=1;p.RibbonLine=N;p.build=w});