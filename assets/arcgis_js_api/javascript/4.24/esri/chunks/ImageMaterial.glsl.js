// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,g,n,p,q,r,t,h,u,v,w,x,d,y,z,A,k){function l(b){const a=new y.ShaderBuilder;v.addProjViewLocalOrigin(a,b);a.include(r.Transform);a.attributes.add(k.VertexAttribute.POSITION,"vec3");a.attributes.add(k.VertexAttribute.UV0,"vec2");a.varyings.add("vpos","vec3");b.hasMultipassTerrain&&a.varyings.add("depth","float");const {vertex:m,fragment:e}=a;m.uniforms.add(new w.Float2PassUniform("textureCoordinateScaleFactor",c=>g.isSome(c.texture)&&g.isSome(c.texture.descriptor.textureCoordinateScaleFactor)?
c.texture.descriptor.textureCoordinateScaleFactor:n.ONES));m.code.add(d.glsl`
    void main(void) {
      vpos = position;
      ${b.hasMultipassTerrain?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `);a.include(q.SliceDraw,b);a.include(t.multipassTerrainTest,b);e.uniforms.add([new z.Texture2DPassUniform("tex",c=>c.texture),new x.FloatPassUniform("opacity",c=>c.opacity)]);a.varyings.add("vTexCoord","vec2");b.output===p.ShaderOutput.Alpha?e.code.add(d.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${d.glsl.float(h.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(e.include(u.ColorConversion),e.code.add(d.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${d.glsl.float(h.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${b.transparencyPassType===A.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    }
    `));return a}const B=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));f.ImageMaterial=B;f.build=l});