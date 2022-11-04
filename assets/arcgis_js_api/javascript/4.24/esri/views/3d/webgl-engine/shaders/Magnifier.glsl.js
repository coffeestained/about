// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderModules/BooleanPassUniform ../core/shaderModules/Float4Uniform ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder ../core/shaderModules/Texture2DUniform ../lib/VertexAttribute".split(" "),function(c,h,g,k,d,l,e,m){let n=function(a){function b(){var f=a.apply(this,arguments)||this;f.maskEnabled=!1;f.overlayEnabled=!1;return f}h._inheritsLoose(b,a);return b}(d.NoParameters);c.MagnifierPassParameters=n;c.build=
function(){const a=new l.ShaderBuilder;a.attributes.add(m.VertexAttribute.POSITION,"vec2");a.vertex.uniforms.add(new k.Float4Uniform("drawPosition"));a.varyings.add("vUV","vec2");a.vertex.code.add(d.glsl`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`);a.fragment.uniforms.add(new e.Texture2DUniform("textureInput"));a.fragment.uniforms.add(new e.Texture2DUniform("textureMask"));a.fragment.uniforms.add(new e.Texture2DUniform("textureOverlay"));a.fragment.uniforms.add(new g.BooleanPassUniform("maskEnabled",b=>b.maskEnabled));a.fragment.uniforms.add(new g.BooleanPassUniform("overlayEnabled",b=>b.overlayEnabled));a.fragment.code.add(d.glsl`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture2D(textureMask, vUV).a : 1.0;
vec4 inputColor = texture2D(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture2D(textureOverlay, vUV) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`);return a};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});