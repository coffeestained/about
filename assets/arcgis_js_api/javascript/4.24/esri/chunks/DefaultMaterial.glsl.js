// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/lighting/SceneLighting".split(" "),
function(n,y,z,A,B,g,p,C,D,e,E,F,G,H,I,J,K,L,M,N,q,O,P,h,r,Q,R,t,S,u,k,l,T,f,c,U,V,v,W,X,Y){function w(a){const b=new V.ShaderBuilder,Z=b.vertex.code,x=b.fragment.code;b.include(S.HeaderComment,{name:"Default Material Shader",output:a.output});const aa=k.addProjViewLocalOrigin(b,a);b.include(E.PositionAttribute);b.varyings.add("vpos","vec3");b.include(Q.VisualVariables,a);b.include(D.InstancedDoublePrecision,a);b.include(J.VerticalOffset,a);if(a.output===g.ShaderOutput.Color||a.output===g.ShaderOutput.Alpha)k.addCameraPosition(b.vertex,
a),b.include(e.NormalAttribute,a),b.include(C.Transform,{linearDepth:!1,hasModelTransformation:a.hasModelTransformation}),a.normalType===e.NormalAttributeType.Attribute&&a.offsetBackfaces&&b.include(B.Offset),b.include(L.ComputeNormalTexture,a),b.include(I.VertexNormal,a),a.instancedColor&&b.attributes.add(X.VertexAttribute.INSTANCECOLOR,"vec4"),b.varyings.add("localvpos","vec3"),b.include(G.TextureCoordinateAttribute,a),b.include(A.ForwardLinearDepth,a),b.include(F.SymbolColor,a),b.include(H.VertexColor,
a),b.vertex.uniforms.add(new T.Float4PassUniform("externalColor",d=>d.externalColor)),b.varyings.add("vcolorExt","vec4"),a.hasMultipassTerrain&&b.varyings.add("depth","float"),a.hasModelTransformation&&b.vertex.uniforms.add(new U.Matrix4PassUniform("model",d=>y.isSome(d.modelTransformation)?d.modelTransformation:z.IDENTITY)),Z.add(c.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${a.instancedColor?"vcolorExt *\x3d instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${c.glsl.float(R.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a.normalType===e.NormalAttributeType.Attribute?c.glsl`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.hasVertexTangents?"vTangent \x3d dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${a.hasModelTransformation?"model,":""} vpos);
          ${a.normalType===e.NormalAttributeType.Attribute&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${a.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `);a.output===g.ShaderOutput.Alpha&&(b.include(p.SliceDraw,a),b.include(t.DiscardOrAdjustAlphaPass,a),b.include(q.multipassTerrainTest,a),b.fragment.uniforms.add([new f.FloatPassUniform("opacity",d=>d.opacity),new f.FloatPassUniform("layerOpacity",d=>d.layerOpacity)]),a.hasColorTexture&&b.fragment.uniforms.add(new v.Texture2DPassUniform("tex",d=>d.texture)),b.fragment.include(u.MixExternalColor),x.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture2D(tex, vuv0);
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `));a.output===g.ShaderOutput.Color&&(b.include(p.SliceDraw,a),b.include(N.EvaluateSceneLighting,a),b.include(M.EvaluateAmbientOcclusion,a),b.include(t.DiscardOrAdjustAlphaPass,a),b.include(a.instancedDoublePrecision?r.ReadShadowMapPass:r.ReadShadowMapDraw,a),b.include(q.multipassTerrainTest,a),k.addCameraPosition(b.fragment,a),b.fragment.uniforms.add([aa,new l.Float3PassUniform("ambient",d=>d.ambient),new l.Float3PassUniform("diffuse",d=>d.diffuse),new f.FloatPassUniform("opacity",d=>d.opacity),
new f.FloatPassUniform("layerOpacity",d=>d.layerOpacity),new f.FloatPassUniform("lightingGlobalFactor",(d,m)=>m.lighting.globalFactor),new l.Float3PassUniform("lightingMainIntensity",(d,m)=>m.lighting.mainLight.intensity)]),b.fragment.constants.add("ambientBoostFactor","float",Y.ambientBoost),a.hasColorTexture&&b.fragment.uniforms.add(new v.Texture2DPassUniform("tex",d=>d.texture)),b.include(h.PhysicallyBasedRenderingParameters,a),b.include(P.PhysicallyBasedRendering,a),b.fragment.include(u.MixExternalColor),
b.include(O.Normals,a),x.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture2D(tex, vuv0);
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${a.normalType===e.NormalAttributeType.ScreenDerivative?c.glsl`
                vec3 normal = screenDerivativeNormal(localvpos);`:c.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${a.pbrMode===h.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.spherical?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?c.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.hasNormalTexture?c.glsl`
                mat3 tangentSpace = ${a.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:c.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${a.spherical?c.glsl`normalize(vpos + localOrigin);`:c.glsl`vec3(0.0, 0.0, 1.0);`}

        ${a.snowCover?c.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${a.pbrMode===h.PBRMode.Normal||a.pbrMode===h.PBRMode.Schematic?c.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${a.snowCover?c.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:c.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===W.TransparencyPassType.Color?c.glsl`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `));b.include(K.DefaultMaterialAuxiliaryPasses,a);return b}const ba=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));n.DefaultMaterial=ba;n.build=w});