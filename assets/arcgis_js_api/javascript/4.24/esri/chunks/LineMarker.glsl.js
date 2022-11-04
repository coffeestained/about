// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/layers/support/markerUtils ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(n,l,f,t,u,v,w,x,y,z,A,B,p,q,b,C,D,E,F,m){function r(a){const c=new D.ShaderBuilder,h=a.hasMultipassTerrain&&(a.output===f.ShaderOutput.Color||a.output===f.ShaderOutput.Alpha);c.include(u.RibbonVertexPosition,a);a.output===f.ShaderOutput.Depth&&c.include(v.OutputDepth,a);const {vertex:d,fragment:k}=c;k.include(z.RgbaFloatEncoding);A.addProjViewLocalOrigin(c,a);c.attributes.add(m.VertexAttribute.POSITION,"vec3");c.attributes.add(m.VertexAttribute.UV0,"vec2");c.attributes.add(m.VertexAttribute.AUXPOS1,
"vec3");c.varyings.add("vColor","vec4");c.varyings.add("vpos","vec3");c.varyings.add("vUV","vec2");c.varyings.add("vSize","float");c.varyings.add("linearDepth","float");h&&c.varyings.add("depth","float");d.code.add(b.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x)
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}`);d.uniforms.add([new B.Float2PassUniform("nearFar",(g,e)=>e.camera.nearFar),new p.Float4PassUniform("viewport",(g,e)=>e.camera.fullViewport)]);d.code.add(b.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`);d.code.add(b.glsl`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
}`);a.draped||(d.uniforms.add(new C.Matrix4PassUniform("inverseProjectionMatrix",(g,e)=>e.camera.inverseProjectionMatrix)),d.code.add(b.glsl`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),d.code.add(b.glsl`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),d.uniforms.add(new q.FloatPassUniform("perScreenPixelRatio",(g,e)=>e.camera.perScreenPixelRatio)),d.code.add(b.glsl`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${a.hasCap?"\n                if(prev.z \x3e posLeft.z) {\n                  vec2 diff \x3d posLeft.xy - posRight.xy;\n                  planeOrigin.xy +\x3d PERPENDICULAR(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `));d.uniforms.add(new q.FloatPassUniform("pixelRatio",(g,e)=>e.camera.pixelRatio));d.code.add(b.glsl`
    void main(void) {
      float coverage = 1.0;

      // Check for special value of uv0.y which is used by the Renderer when graphics
      // are removed before the VBO is recompacted. If this is the case, then we just
      // project outside of clip space.
      if (uv0.y == 0.0) {
        // Project out of clip space
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      }
      else {
        float lineSize = getSize();
        float lineWidth = max(lineSize, 1.0) * pixelRatio;

        vec4 pos  = view * vec4(position.xyz, 1.0);
        vec4 prev = view * vec4(auxpos1.xyz, 1.0);
        clip(pos, prev);

        vec4 posScreen = projectAndScale(pos);
        vec4 prevScreen = projectAndScale(prev);

        vec2 segment = posScreen.xy - prevScreen.xy;

        // normalize vector along line segment
        float segmentLen = length(segment);
        segment = (segmentLen > 0.001) ? segment / segmentLen : vec2(0.0, 0.0);

        // displace according to position in the texture
        vec2 displacementDirU = PERPENDICULAR(segment);
        vec2 displacementDirV = segment;

        float displacementLen = ${b.glsl.float(l.MARKER_TEXTURE_SIZE/l.MARKER_THICKNESS)} * lineWidth;

        vec4 displacedPosScreen = posScreen;
        displacedPosScreen.xy += uv0.x * displacementDirU * displacementLen + uv0.y * displacementDirV * displacementLen;
  `);a.draped||d.code.add(b.glsl`vec3 posRight = inverseProject(posScreen + vec4(displacementDirU.xy, 0.0, 0.0) * lineWidth);
vec3 posLeft = pos.xyz + (pos.xyz - posRight);
pos = toFront(displacedPosScreen, posLeft, posRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`);d.code.add(b.glsl`
        ${h?"depth \x3d pos.z;":""}
        linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1] and cancel out perspective correct interpolation
        vUV = (uv0 + 1.0) / 2.0;
        vUV *= displacedPosScreen.w;

        vSize = displacementLen;

        vColor = getColor();
        vColor.a *= coverage;

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `);h&&c.include(w.multipassTerrainTest,a);c.include(t.SliceDraw,a);k.uniforms.add([new p.Float4PassUniform("intrinsicColor",g=>g.color),new E.Texture2DPassUniform("tex",g=>g.texture)]);k.include(y.ColorConversion);k.code.add(b.glsl`
  void main() {
    discardBySlice(vpos);
    ${h?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    // Offset texture coordinate s.t. we sample texel centers
    float texelSize = ${b.glsl.float(1/l.MARKER_TEXTURE_SIZE)};
    vec2 samplePos = vUV * gl_FragCoord.w + vec2(0.5, -0.5) * texelSize;

    // Evaluate sdf
    float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
    float distance = sdf * vSize;

    // Grow by a halfpixel to make sure the line is fully covered by the cross marker
    // (otherwise there will be a halo if they are different colours)
    distance -= 0.5;

    finalColor.a *= clamp(0.5 - distance, 0.0, 1.0);

    if (finalColor.a < ${b.glsl.float(x.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===f.ShaderOutput.Alpha?b.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${a.output===f.ShaderOutput.Color?b.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${a.output===f.ShaderOutput.Color&&a.transparencyPassType===F.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    ${a.output===f.ShaderOutput.Highlight?b.glsl`gl_FragColor = vec4(1.0);`:""}
    ${a.output===f.ShaderOutput.Depth?b.glsl`outputDepth(linearDepth);`:""}
  }
  `);return c}const G=Object.freeze(Object.defineProperty({__proto__:null,build:r},Symbol.toStringTag,{value:"Module"}));n.LineMarker=G;n.build=r});