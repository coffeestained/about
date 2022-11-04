// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(d,k,l,m,n,e,f,p,q,g){function h(b){const a=new p.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");m.addProjViewLocalOrigin(a,b);a.attributes.add(g.VertexAttribute.POSITION,"vec3");a.attributes.add(g.VertexAttribute.UV0,"vec2");a.varyings.add("vUV","vec2");b.hasMultipassTerrain&&a.varyings.add("depth","float");a.vertex.code.add(f.glsl`
    void main(void) {
      vUV = uv0;
      ${b.hasMultipassTerrain?"depth \x3d (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `);a.include(k.multipassTerrainTest,b);a.fragment.uniforms.add(new n.Float2PassUniform("size",c=>c.size));a.fragment.uniforms.add(new e.Float4PassUniform("color1",c=>c.color1));a.fragment.uniforms.add(new e.Float4PassUniform("color2",c=>c.color2));a.fragment.include(l.ColorConversion);a.fragment.code.add(f.glsl`
    void main() {
      ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${b.transparencyPassType===q.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    }
  `);return a}const r=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));d.CheckerBoard=r;d.build=h});