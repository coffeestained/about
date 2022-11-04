// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/lighting/SceneLighting".split(" "),
function(m,y,z,g,n,A,B,C,D,E,F,G,H,I,J,K,p,L,e,q,M,N,r,t,h,k,O,f,c,u,P,v,Q,R,S){function w(a){const b=new P.ShaderBuilder,T=b.vertex.code,x=b.fragment.code,U=h.addProjViewLocalOrigin(b,a);b.include(D.PositionAttribute);b.varyings.add("vpos","vec3");b.include(M.VisualVariables,a);b.include(B.InstancedDoublePrecision,a);b.include(H.VerticalOffset,a);if(a.output===g.ShaderOutput.Color||a.output===g.ShaderOutput.Alpha)h.addCameraPosition(b.vertex,a),b.include(C.NormalAttribute,a),b.include(A.Transform),
a.offsetBackfaces&&b.include(z.Offset),a.instancedColor&&b.attributes.add(R.VertexAttribute.INSTANCECOLOR,"vec4"),b.varyings.add("vNormalWorld","vec3"),b.varyings.add("localvpos","vec3"),a.hasMultipassTerrain&&b.varyings.add("depth","float"),b.include(F.TextureCoordinateAttribute,a),b.include(y.ForwardLinearDepth,a),b.include(E.SymbolColor,a),b.include(G.VertexColor,a),b.vertex.uniforms.add(new O.Float4PassUniform("externalColor",d=>d.externalColor)),b.varyings.add("vcolorExt","vec4"),T.add(c.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${a.instancedColor?"vcolorExt *\x3d instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${c.glsl.float(N.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${a.hasMultipassTerrain?c.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `);a.output===g.ShaderOutput.Alpha&&(b.include(n.SliceDraw,a),b.include(r.DiscardOrAdjustAlphaPass,a),b.include(p.multipassTerrainTest,a),b.fragment.uniforms.add([new f.FloatPassUniform("opacity",d=>d.opacity),new f.FloatPassUniform("layerOpacity",d=>d.layerOpacity),new u.Matrix4Uniform("view")]),a.hasColorTexture&&b.fragment.uniforms.add(new v.Texture2DPassUniform("tex",d=>d.texture)),b.fragment.include(t.MixExternalColor),x.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?c.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture2D(tex, vuv0);
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `));a.output===g.ShaderOutput.Color&&(b.include(n.SliceDraw,a),b.include(K.EvaluateSceneLighting,a),b.include(J.EvaluateAmbientOcclusion,a),b.include(r.DiscardOrAdjustAlphaPass,a),b.include(a.instancedDoublePrecision?q.ReadShadowMapPass:q.ReadShadowMapDraw,a),b.include(p.multipassTerrainTest,a),h.addCameraPosition(b.fragment,a),b.fragment.uniforms.add([U,new k.Float3PassUniform("ambient",d=>d.ambient),new k.Float3PassUniform("diffuse",d=>d.diffuse),new f.FloatPassUniform("opacity",d=>d.opacity),
new f.FloatPassUniform("layerOpacity",d=>d.layerOpacity),new u.Matrix4Uniform("view"),new f.FloatPassUniform("lightingGlobalFactor",(d,l)=>l.lighting.globalFactor),new k.Float3PassUniform("lightingMainIntensity",(d,l)=>l.lighting.mainLight.intensity)]),b.fragment.constants.add("ambientBoostFactor","float",S.ambientBoost),a.hasColorTexture&&b.fragment.uniforms.add(new v.Texture2DPassUniform("tex",d=>d.texture)),b.include(e.PhysicallyBasedRenderingParameters,a),b.include(L.PhysicallyBasedRendering,
a),b.fragment.include(t.MixExternalColor),b.extensions.add("GL_OES_standard_derivatives"),x.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?c.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture2D(tex, vuv0);
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${a.pbrMode===e.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.spherical?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?c.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.snowCover?c.glsl`albedo = mix(albedo, vec3(1), 0.9);`:c.glsl``}
        ${c.glsl`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${a.pbrMode===e.PBRMode.Normal||a.pbrMode===e.PBRMode.Schematic?a.spherical?c.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:c.glsl``}
        ${a.pbrMode===e.PBRMode.Normal||a.pbrMode===e.PBRMode.Schematic?c.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${a.snowCover?c.glsl`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:c.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===Q.TransparencyPassType.Color?c.glsl`gl_FragColor = premultiplyAlpha(gl_FragColor);`:c.glsl``}
      }
    `));b.include(I.DefaultMaterialAuxiliaryPasses,a);return b}const V=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));m.RealisticTree=V;m.build=w});