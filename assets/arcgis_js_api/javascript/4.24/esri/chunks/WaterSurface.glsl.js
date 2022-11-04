// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4Uniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(n,x,e,h,y,z,A,B,C,p,D,E,F,q,k,G,r,t,H,l,u,c,I,J,K,v){function w(b){const a=new J.ShaderBuilder,{vertex:g,fragment:d}=a,L=r.addProjViewLocalOrigin(a,b);a.include(y.Transform);a.attributes.add(v.VertexAttribute.POSITION,"vec3");a.attributes.add(v.VertexAttribute.UV0,"vec2");g.uniforms.add(new H.Float4PassUniform("waterColor",f=>f.color));if(b.output===e.ShaderOutput.Color||b.output===e.ShaderOutput.Alpha)a.include(p.NormalUtils,b),a.include(x.ForwardLinearDepth,b),a.varyings.add("vuv","vec2"),
a.varyings.add("vpos","vec3"),a.varyings.add("vnormal","vec3"),a.varyings.add("vtbnMatrix","mat3"),d.uniforms.add(L),b.hasMultipassTerrain&&a.varyings.add("depth","float"),g.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${b.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${b.output===e.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `);a.include(C.multipassTerrainTest,b);b.output===e.ShaderOutput.Alpha&&(a.include(h.SliceDraw,b),d.uniforms.add(new l.Float4Uniform("waterColor")),d.code.add(c.glsl`
        void main() {
          discardBySlice(vpos);
          ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `));b.output===e.ShaderOutput.Color&&(a.include(B.MainLighting,{isGround:!1}),a.include(A.EvaluateAmbientLighting,{pbrMode:D.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),a.include(q.WaterDistortion),a.include(h.SliceDraw,b),a.include(E.ReadShadowMapDraw,b),a.include(F.Water,b),d.uniforms.add([new l.Float4Uniform("waterColor"),new t.Float3PassUniform("lightingMainDirection",(f,m)=>m.lighting.lightingMainDirection),new t.Float3PassUniform("lightingMainIntensity",(f,m)=>m.lighting.mainLight.intensity),
new u.FloatPassUniform("timeElapsed",f=>f.timeElapsed),new I.Matrix4Uniform("view")]),r.addCameraPosition(d,b),d.include(G.ColorConversion),d.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${b.receiveShadows?c.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${b.transparencyPassType===K.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));b.output===e.ShaderOutput.Normal&&(a.include(p.NormalUtils,b),a.include(q.WaterDistortion,b),a.include(h.SliceDraw,b),a.varyings.add("vpos","vec3"),a.varyings.add("vuv","vec2"),g.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),d.uniforms.add(new u.FloatPassUniform("timeElapsed",f=>f.timeElapsed)),d.code.add(c.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`));b.output===e.ShaderOutput.Draped&&(a.varyings.add("vpos","vec3"),g.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),d.uniforms.add(new l.Float4Uniform("waterColor")),d.code.add(c.glsl`void main() {
gl_FragColor = waterColor;
}`));b.output===e.ShaderOutput.Highlight&&(a.include(z.OutputHighlight),a.varyings.add("vpos","vec3"),g.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),a.include(h.SliceDraw,b),d.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`));return a}const M=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));n.WaterSurface=M;n.build=w});