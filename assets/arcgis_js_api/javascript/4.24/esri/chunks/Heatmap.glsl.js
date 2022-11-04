// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(d,g,h,c,k,l,e){function f(){const b=new l.ShaderBuilder;b.include(g.ScreenSpacePass);
b.include(h.DiscardOrAdjustAlphaBlend);b.fragment.uniforms.add([new e.Texture2DPassUniform("densityMap",a=>a.densityMap),new e.Texture2DPassUniform("tex",a=>a.colorRamp),new c.FloatPassUniform("densityNormalizer",a=>1/(a.maxDensity-a.minDensity)),new c.FloatPassUniform("minDensity",a=>a.minDensity)]);b.fragment.uniforms.add(new c.FloatPassUniform("densityMultiplier",a=>3/(a.searchRadius*a.searchRadius*Math.PI)));b.fragment.code.add(k.glsl`void main() {
float density = texture2D(densityMap, uv).r * densityMultiplier;
float densityRatio = (density - minDensity) * densityNormalizer;
vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));
discardOrAdjustAlpha(color);
gl_FragColor = color;
}`);return b}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));d.HeatmapShader=m;d.build=f});