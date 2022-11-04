// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec4 ../../../../../../chunks/vec4f64 ../../shaderModules/Float4PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(c,e,f,g,d,h){const k=f.create();c.EvaluateAmbientOcclusion=function(b,l){b=b.fragment;l.receiveAmbientOcclusion?(b.uniforms.add([new h.Texture2DPassUniform("ssaoTex",(m,a)=>a.ssaoHelper.colorTexture),new g.Float4PassUniform("viewportPixelSz",(m,a)=>e.set(k,a.camera.fullViewport[0],a.camera.fullViewport[1],
1/a.ssaoHelper.width,1/a.ssaoHelper.height))]),b.code.add(d.glsl`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):b.code.add(d.glsl`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});