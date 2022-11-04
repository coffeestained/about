// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ./vec3 ./vec3f64 ../views/3d/terrain/interfaces ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/lighting/SceneLighting".split(" "),
function(r,G,A,t,u,H,I,l,J,n,K,L,M,N,B,p,O,P,m,Q,R,S,v,q,T,c,C,w,U,V,x,W){function D(a){const b=new U.ShaderBuilder;b.include(R.HeaderComment,{name:"Terrain Shader",output:a.output});b.attributes.add(x.VertexAttribute.POSITION,"vec3");b.attributes.add(x.VertexAttribute.UV0,"vec2");b.attributes.add(x.VertexAttribute.NORMAL,"vec3");const {vertex:h,fragment:k}=b;h.uniforms.add([new w.Matrix4PassUniform("proj",(e,f)=>f.camera.projectionMatrix),new C.Matrix4DrawUniform("view",(e,f)=>A.translate(E,f.camera.viewMatrix,
e.origin)),new v.Float3DrawUniform("origin",e=>e.origin)]);k.uniforms.add(new v.Float3DrawUniform("origin",e=>e.origin));if(a.output===l.ShaderOutput.Color){b.include(n.Transform);b.include(p.NormalUtils,a);b.include(Q.TerrainTexture,a);b.include(B.EvaluateSceneLighting,a);const e=a.overlayMode!==m.OverlayMode.Disabled,f=a.overlayMode===m.OverlayMode.EnabledWithWater;e&&b.include(m.OverlayTerrain,{...a,pbrMode:O.PBRMode.Water});f&&b.include(K.VertexTangent,a);b.varyings.add("vnormal","vec3");b.varyings.add("vpos",
"vec3");(a.atmosphere||a.screenSizePerspective)&&h.uniforms.add(new w.Matrix4PassUniform("viewNormal",(g,d)=>d.camera.viewInverseTransposeMatrix));const y=a.receiveShadows&&!a.renderOccluded;y&&b.varyings.add("linearDepth","float");a.tileBorders&&b.varyings.add("vuv","vec2");a.atmosphere&&(h.uniforms.add(new q.Float3PassUniform("lightingMainDirection",(g,d)=>d.lighting.lightingMainDirection)),b.varyings.add("wnormal","vec3"),b.varyings.add("wlight","vec3"));a.screenSizePerspective&&(b.varyings.add("screenSizeDistanceToCamera",
"float"),b.varyings.add("screenSizeCosAngle","float"));h.code.add(c.glsl`
      void main(void) {
        vpos = position;
        vnormal = ${a.shading?c.glsl`normal`:c.glsl`getLocalUp(vpos, origin)`};
        vec2 uv = uv0;
        ${a.atmosphere?c.glsl`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${a.tileBorders?c.glsl`vuv = uv;`:""}
        ${a.screenSizePerspective?c.glsl`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${y?c.glsl`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${e?c.glsl`setOverlayVTC(uv);`:""}
        ${f?c.glsl`forwardVertexTangent(vnormal);`:c.glsl``}
      }
    `);b.extensions.add("GL_OES_standard_derivatives");b.extensions.add("GL_EXT_shader_texture_lod");b.include(J.SliceDraw,a);b.include(B.EvaluateSceneLighting,a);b.include(N.EvaluateAmbientOcclusion,a);b.include(P.ReadShadowMapDraw,a);k.uniforms.add([new v.Float3DrawUniform("cameraPosition",(g,d)=>u.subtract(z,d.camera.eye,g.origin)),new q.Float3PassUniform("viewDirection",(g,d)=>u.normalize(z,u.set(z,d.camera.viewMatrix[12],d.camera.viewMatrix[13],d.camera.viewMatrix[14]))),new T.FloatPassUniform("lightingGlobalFactor",
(g,d)=>d.lighting.globalFactor),new q.Float3PassUniform("lightingMainDirection",(g,d)=>d.lighting.lightingMainDirection),new q.Float3PassUniform("lightingMainIntensity",(g,d)=>d.lighting.mainLight.intensity)]);k.constants.add("ambientBoostFactor","float",W.ambientBoost);f&&k.uniforms.add([new V.Texture2DPassUniform("ovWaterTex",(g,d)=>0===d.overlays.length?null:d.overlays[I.OverlayIndex.INNER].getNormalTexture(g.overlaySource)),new C.Matrix4DrawUniform("view",(g,d)=>A.translate(E,d.camera.viewMatrix,
g.origin))]);k.code.add(c.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`);k.code.add(c.glsl`
      void main() {
        ${y?c.glsl`float shadow = readShadowMap(vpos, linearDepth);`:c.glsl`float shadow = 0.0;`}
        vec3 normal = normalize(vnormal);
        float vndl = dot(normal, lightingMainDirection);
        float ssao = evaluateAmbientOcclusionInverse();
        vec4 tileColor = getTileColor();
        ${e?c.glsl`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${a.atmosphere?c.glsl`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${a.atmosphere?c.glsl`atm + tileColor.rgb;`:c.glsl`tileColor.rgb;`}

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl${a.shading?"":c.glsl`*2.5`}, 0.0, 1.0));

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor ${a.shading?"":c.glsl`* lightingGlobalFactor`};

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${f?c.glsl`
            vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
            float waterNormalLength = length(overlayWaterMask);
            if (waterNormalLength > 0.95) {
              mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
              vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
              vec4 viewPosition = view*vec4(vpos, 1.0);
              vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + origin);
              vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
              // un-gamma the ground color to mix in linear space
              gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
            }`:""}
        ${a.screenSizePerspective?c.glsl`
          float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
          if (perspectiveScale <= 0.25) {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
          }
          else if (perspectiveScale <= 0.5) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
          }
          else if (perspectiveScale >= 0.99) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
          }
          else {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
          }`:""}
        ${a.tileBorders?c.glsl`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}if(a.output===l.ShaderOutput.Depth||a.output===l.ShaderOutput.Shadow)b.include(n.Transform,{hasModelTransformation:!1,linearDepth:!0}),b.include(L.OutputDepth,{output:a.output}),b.include(p.NormalUtils,a),b.varyings.add("linearDepth","float"),h.uniforms.add(new S.Float2PassUniform("nearFar",(e,f)=>f.camera.nearFar)),h.code.add(c.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),k.code.add(c.glsl`void main() {
outputDepth(linearDepth);
}`);a.output===l.ShaderOutput.Normal&&(b.include(n.Transform),b.include(p.NormalUtils,a),b.varyings.add("vnormal","vec3"),b.varyings.add("vpos","vec3"),h.uniforms.add(new w.Matrix4PassUniform("viewNormal",(e,f)=>f.camera.viewInverseTransposeMatrix)),h.code.add(c.glsl`
        void main(void) {
          vec3 normal = ${a.shading?c.glsl`normal`:c.glsl`getLocalUp(position, origin)`};
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
          vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
        }
    `),k.code.add(c.glsl`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`));a.output===l.ShaderOutput.Highlight&&(b.include(n.Transform),b.include(p.NormalUtils,a),b.include(m.OverlayTerrain,a),h.code.add(c.glsl`void main() {
setOverlayVTC(uv0);
gl_Position = transformPosition(proj, view, position);
}`),b.include(M.OutputHighlight),k.code.add(c.glsl`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`));return b}let F=function(a){function b(){return a.apply(this,arguments)||this}G._inheritsLoose(b,a);return b}(m.OverlayTerrainPassParameters);const E=t.create(),z=H.create();t=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:F,build:D},Symbol.toStringTag,{value:"Module"}));r.Terrain=t;r.TerrainPassParameters=F;r.build=D});