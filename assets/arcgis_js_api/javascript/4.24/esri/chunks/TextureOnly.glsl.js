// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderModules/Float4Uniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DUniform".split(" "),function(b,d,e,f,g,h){function c(){const a=new g.ShaderBuilder;a.include(d.ScreenSpacePass);a.fragment.uniforms.add([new h.Texture2DUniform("tex"),new e.Float4Uniform("uColor")]);a.fragment.code.add(f.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`);return a}const k=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));b.TextureOnlyShader=k;b.build=c});