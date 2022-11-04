// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec2f64 ../../../../../../chunks/vec4f64 ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(c,k,l,d,m,f,n){const g=d.fromValues(1,1,0,1),h=d.fromValues(1,0,1,1);d=function(a){function e(){var b=a.apply(this,arguments)||this;b.inverseViewport=l.create();return b}k._inheritsLoose(e,a);return e}(f.NoParameters);c.OutputHighlight=function(a){a.fragment.uniforms.add(new n.Texture2DPassUniform("depthTex",
(e,b)=>b.highlightDepthTexture));a.fragment.uniforms.add(new m.Float2PassUniform("highlightViewportPixelSz",(e,b)=>b.inverseViewport));a.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",h);a.fragment.code.add(f.glsl`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)};c.OutputHighlightUniforms=d;c.occludedHighlightFlag=g;c.unoccludedHighlightFlag=h;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});