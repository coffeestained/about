// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,d,n,p,q,r,t,u,v,w,x,y,z,c,A,B,C){function k(a){const b=new A.ShaderBuilder,f=a.output===d.ShaderOutput.Depth,e=a.hasMultipassTerrain&&(a.output===d.ShaderOutput.Color||a.output===d.ShaderOutput.Alpha);x.addProjViewLocalOrigin(b,a);b.include(p.Transform,{hasModelTransformation:!1,linearDepth:f});b.include(q.VertexColor,a);b.attributes.add(C.VertexAttribute.POSITION,"vec3");b.varyings.add("vpos","vec3");e&&b.varyings.add("depth","float");const {vertex:l,fragment:g}=b;f&&(b.include(r.OutputDepth,
a),l.uniforms.add(new y.Float2PassUniform("nearFar",(m,D)=>D.camera.nearFar)),b.varyings.add("linearDepth","float"));l.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${e?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${f?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);b.include(n.SliceDraw,a);e&&b.include(u.multipassTerrainTest,a);g.include(w.ColorConversion);g.uniforms.add(new z.Float4PassUniform("eColor",m=>m.color));a.output===d.ShaderOutput.Highlight&&b.include(t.OutputHighlight);g.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${e?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${a.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${c.glsl.float(v.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===d.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(fColor.a);`:""}

    ${a.output===d.ShaderOutput.Color?c.glsl`gl_FragColor = highlightSlice(fColor, vpos); ${a.transparencyPassType===B.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
    ${a.output===d.ShaderOutput.Highlight?c.glsl`outputHighlight();`:""};
    ${a.output===d.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""};
  }
  `);return b}const E=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));h.ColorMaterial=E;h.build=k});