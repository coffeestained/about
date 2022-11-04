// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4Uniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lighting/SceneLighting".split(" "),
function(p,v,e,k,l,w,x,y,z,A,B,C,q,r,D,t,E,m,F,n,f,G,H,I,J){function u(a){const b=new H.ShaderBuilder,K=t.addProjViewLocalOrigin(b,a),{vertex:h,fragment:d}=b;b.varyings.add("vpos","vec3");b.include(w.PathVertexPosition,a);if(a.output===e.ShaderOutput.Color||a.output===e.ShaderOutput.Alpha)b.include(l.Transform),b.include(r.ReadShadowMapDraw,a),b.include(v.ForwardLinearDepth,a),b.varyings.add("vnormal","vec3"),b.varyings.add("vcolor","vec4"),a.hasMultipassTerrain&&b.varyings.add("depth","float"),h.code.add(f.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${a.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${a.output===e.ShaderOutput.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `);b.include(B.multipassTerrainTest,a);a.output===e.ShaderOutput.Alpha&&(b.include(k.SliceDraw,a),d.uniforms.add(new n.FloatPassUniform("opacity",c=>c.opacity)),d.code.add(f.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `));a.output===e.ShaderOutput.Color&&(b.include(k.SliceDraw,a),b.include(A.EvaluateSceneLighting,a),b.include(z.EvaluateAmbientOcclusion,a),b.include(r.ReadShadowMapDraw,a),b.include(C.Normals,a),t.addCameraPosition(d,a),d.uniforms.add([K,new m.Float3PassUniform("ambient",c=>c.ambient),new m.Float3PassUniform("diffuse",c=>c.diffuse),new m.Float3PassUniform("specular",c=>c.specular),new n.FloatPassUniform("opacity",c=>c.opacity),new n.FloatPassUniform("lightingGlobalFactor",(c,g)=>g.lighting.globalFactor),
new m.Float3PassUniform("lightingMainIntensity",(c,g)=>g.lighting.mainLight.intensity)]),d.constants.add("ambientBoostFactor","float",J.ambientBoost),d.include(D.ColorConversion),d.code.add(f.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.spherical?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${a.transparencyPassType===I.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));if(a.output===e.ShaderOutput.Depth||a.output===e.ShaderOutput.Shadow)b.include(l.Transform,{hasModelTransformation:!1,linearDepth:!0}),h.uniforms.add(new E.Float2PassUniform("nearFar",(c,g)=>g.camera.nearFar)),b.varyings.add("depth","float"),h.code.add(f.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),b.include(k.SliceDraw,a),b.include(x.OutputDepth,a),d.code.add(f.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);a.output===e.ShaderOutput.Normal&&(b.include(l.Transform),b.include(q.NormalUtils,a),h.uniforms.add(new G.Matrix4PassUniform("viewNormal",(c,g)=>g.camera.viewInverseTransposeMatrix)),b.varyings.add("vnormal","vec3"),h.code.add(f.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),b.include(k.SliceDraw,a),d.uniforms.add(new F.Float4Uniform("waterColor")),d.code.add(f.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`));a.output===e.ShaderOutput.Highlight&&(b.include(l.Transform),b.include(q.NormalUtils,a),b.varyings.add("vnormal","vec3"),h.code.add(f.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),b.include(k.SliceDraw,a),b.include(y.OutputHighlight),d.code.add(f.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`));return b}const L=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));p.Path=L;p.build=u});