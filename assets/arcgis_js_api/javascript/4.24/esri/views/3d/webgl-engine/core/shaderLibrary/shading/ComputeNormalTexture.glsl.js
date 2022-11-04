// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ./Normals.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/VertexAttribute".split(" "),function(f,g,h,k,d,l,m,n,p){f.ComputeNormalTexture=function(a,b){const c=a.fragment;b.hasVertexTangents?(a.attributes.add(p.VertexAttribute.TANGENT,"vec4"),a.varyings.add("vTangent","vec4"),b.doubleSidedMode===
k.NormalsDoubleSidedMode.WindingOrder?c.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):c.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(a.extensions.add("GL_OES_standard_derivatives"),c.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`));b.textureCoordinateType!==g.TextureCoordinateAttributeType.None&&(a.include(h.VertexTextureCoordinates,b),a=b.supportsTextureAtlas,c.uniforms.add(b.pbrTextureBindType===n.BindType.Pass?m.createTexture2DPassSizeUniforms("normalTexture",e=>e.textureNormal,a):l.createTexture2DDrawSizeUniforms("normalTexture",e=>e.textureNormal,a)),c.code.add(d.glsl`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${b.supportsTextureAtlas?"vtc.size \x3d normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});