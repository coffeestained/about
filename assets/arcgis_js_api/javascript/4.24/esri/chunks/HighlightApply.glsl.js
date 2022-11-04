// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./vec4 ./vec4f64 ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(g,n,d,e,h,p,f,k){function l(){const c=new p.ShaderBuilder,{vertex:m,fragment:b}=c,q=m.code,r=b.code;c.attributes.add(k.VertexAttribute.POSITION,"vec2");c.varyings.add("uv",
"vec2");c.attributes.add(k.VertexAttribute.UV0,"vec2");m.uniforms.add(new f.Texture2DPassUniform("coverageTex",a=>a.coverageTexture));q.add(h.glsl`void main() {
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`);b.uniforms.add(new f.Texture2DPassUniform("tex",a=>a.blurColorTexture));b.uniforms.add(new f.Texture2DPassUniform("origin",a=>a.highlightColorTexture));b.uniforms.add(new e.Float4PassUniform("uColor",a=>a.color));b.uniforms.add(new e.Float4PassUniform("haloColor",a=>a.haloColor));b.uniforms.add(new e.Float4PassUniform("opacities",a=>n.set(t,a.haloOpacity,a.haloOpacityOccluded,a.fillOpacity,a.fillOpacityOccluded)));b.constants.add("outlineSize","float",8.6);b.constants.add("blurSize","float",.4);
r.add(h.glsl`void main() {
vec4 blurredHighlightValue = texture2D(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture2D(origin, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float inner = 1.0 - outlineSize / 9.0;
float outer = 1.0 - (outlineSize + blurSize) / 9.0;
float outlineFactor = smoothstep(outer, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
gl_FragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`);return c}const t=d.create();d=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));g.HighlightApply=d;g.build=l});