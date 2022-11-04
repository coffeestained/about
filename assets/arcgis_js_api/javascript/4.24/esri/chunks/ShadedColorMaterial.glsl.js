// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(r,p,v,k,w,x,y,z,A,B,C,t,e,D,E,F,q){function u(b){const c=new E.ShaderBuilder,l=b.hasMultipassTerrain&&(b.output===k.ShaderOutput.Color||b.output===k.ShaderOutput.Alpha);c.include(x.Transform);c.include(v.ScreenSizeScaling,b);c.include(w.SliceDraw,b);const {vertex:m,fragment:f}=c;f.include(A.ColorConversion);B.addProjViewLocalOrigin(c,b);f.uniforms.add(new t.Float4PassUniform("uColor",a=>a.color));c.attributes.add(q.VertexAttribute.POSITION,"vec3");c.varyings.add("vWorldPosition","vec3");
l&&c.varyings.add("depth","float");b.screenSizeEnabled&&c.attributes.add(q.VertexAttribute.OFFSET,"vec3");b.shadingEnabled&&(m.uniforms.add(new D.Matrix4PassUniform("viewNormal",(a,d)=>d.camera.viewInverseTransposeMatrix)),c.attributes.add(q.VertexAttribute.NORMAL,"vec3"),c.varyings.add("vViewNormal","vec3"));m.code.add(e.glsl`
    void main(void) {
      vWorldPosition = ${b.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `);b.shadingEnabled&&m.code.add(e.glsl`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`);m.code.add(e.glsl`
    ${l?"depth \x3d (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `);l&&c.include(y.multipassTerrainTest,b);f.code.add(e.glsl`
    void main() {
      discardBySlice(vWorldPosition);
      ${l?"terrainDepthTest(gl_FragCoord, depth);":""}
    `);b.shadingEnabled?(f.uniforms.add(new C.Float3PassUniform("shadingDirection",a=>a.shadingDirection)),f.uniforms.add(new t.Float4PassUniform("shadedColor",a=>{{var d=a.shadingTint;a=a.color;const n=1-d[3],h=d[3]+a[3]*n;0===h?g[3]=h:(g[0]=(d[0]*d[3]+a[0]*a[3]*n)/h,g[1]=(d[1]*d[3]+a[1]*a[3]*n)/h,g[2]=(d[2]*d[3]+a[2]*a[3]*n)/h,g[3]=a[3]);d=g}return d})),f.code.add(e.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):f.code.add(e.glsl`vec4 finalColor = uColor;`);f.code.add(e.glsl`
      if (finalColor.a < ${e.glsl.float(z.symbolAlphaCutoff)}) {
        discard;
      }
      ${b.output===k.ShaderOutput.Alpha?e.glsl`gl_FragColor = vec4(finalColor.a);`:""}

      ${b.output===k.ShaderOutput.Color?e.glsl`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${b.transparencyPassType===F.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `);return c}const g=p.create();p=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));r.ShadedColorMaterialShader=p;r.build=u});