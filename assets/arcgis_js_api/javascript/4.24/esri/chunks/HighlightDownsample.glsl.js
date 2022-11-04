// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(d,k,l,m,e,n,p,q){function g(){const a=new n.ShaderBuilder,{vertex:c,fragment:b}=a,r=c.code,t=b.code;a.attributes.add(q.VertexAttribute.POSITION,
"vec2");r.add(e.glsl`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`);b.uniforms.add(new p.Texture2DDrawUniform("tex",f=>f.inputTexture));b.uniforms.add(new m.Float2DrawUniform("invFramebufferDim",f=>f.invFramebufferDim));t.add(e.glsl`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture2D(tex, coord);
float mx = floor(max(value.g, value.b));
gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`);return a}let h=function(a){function c(){var b=a.apply(this,arguments)||this;b.invFramebufferDim=l.create();return b}k._inheritsLoose(c,a);return c}(e.NoParameters);const u=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:h,build:g},Symbol.toStringTag,{value:"Module"}));d.HighlightDownsample=u;d.HighlightDownsampleDrawParameters=h;d.build=g});