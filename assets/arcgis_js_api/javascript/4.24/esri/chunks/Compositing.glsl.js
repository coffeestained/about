// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../core/compilerUtils ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/CompositingTechniqueConfiguration".split(" "),
function(h,n,p,q,k,r,d,t,e,g){function l(c){const f=new t.ShaderBuilder;f.include(q.ScreenSpacePass);const b=f.fragment;switch(c.function){case g.CompositingFunction.Standard:b.uniforms.add(new e.Texture2DPassUniform("tex",a=>a.texture));c.hasOpacityFactor?(b.uniforms.add(new k.FloatPassUniform("opacity",a=>a.opacity)),b.code.add(d.glsl`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):b.code.add(d.glsl`void main() {
gl_FragColor = texture2D(tex, uv);
}`);break;case g.CompositingFunction.OverlayWithTransparency:b.uniforms.add(new e.Texture2DPassUniform("tex",a=>a.texture));b.uniforms.add(new r.IntegerPassUniform("overlayIdx",a=>a.overlayIndex));c.hasOpacityFactor&&b.uniforms.add(new k.FloatPassUniform("opacity",a=>a.opacity));b.code.add(d.glsl`
        void main() {
          vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
          gl_FragColor = texture2D(tex, overlayUV) ${c.hasOpacityFactor?"* opacity":""};
        }`);break;case g.CompositingFunction.TransparentToHUDVisibility:b.uniforms.add(new e.Texture2DPassUniform("tex",a=>a.texture));b.code.add(d.glsl`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`);break;case g.CompositingFunction.Transparency:b.uniforms.add([new e.Texture2DPassUniform("colorTexture",a=>a.colorTexture),new e.Texture2DPassUniform("alphaTexture",a=>a.alphaTexture),new e.Texture2DPassUniform("frontFaceTexture",a=>a.frontFaceTexture)]);b.code.add(d.glsl`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`);break;case g.CompositingFunction.COUNT:break;default:p.neverReached(c.function)}return f}let m=function(c){function f(){var b=c.apply(this,arguments)||this;b.overlayIndex=0;b.opacity=1;return b}n._inheritsLoose(f,c);return f}(d.NoParameters);const u=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:m,build:l},Symbol.toStringTag,{value:"Module"}));h.Compositing=u;h.CompositingPassParameters=m;h.build=l});