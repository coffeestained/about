// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec4f64 ../../../../../../geometry/support/aaBoundingRect ../../../../terrain/interfaces ../../renderPasses/AllRenderPasses ../shading/PhysicallyBasedRenderingParameters.glsl ../shading/Water.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/Float4DrawUniform ../../shaderModules/Float4Uniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),
function(f,A,B,k,p,r,q,C,v,w,x,D,m,y){function t(a,b){a.extensions.add("GL_OES_standard_derivatives");b.pbrMode!==q.PBRMode.Water&&b.pbrMode!==q.PBRMode.WaterOnIntegratedMesh||a.include(C.Water,b);const {vertex:d,fragment:e}=a;a.varyings.add("vtcOverlay","vec4");d.code.add(m.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`);e.code.add(m.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);e.code.add(m.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`);if(b.pbrMode===q.PBRMode.Water||b.pbrMode===q.PBRMode.WaterOnIntegratedMesh)e.uniforms.add([new v.Float3PassUniform("lightingMainDirection",(g,h)=>h.lighting.lightingMainDirection),new v.Float3PassUniform("lightingMainIntensity",(g,h)=>h.lighting.mainLight.intensity)]),e.code.add(m.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, lightingMainDirection, colorInput.rgb, lightingMainIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`)}function z(a,b){return 0===b.overlays.length?null:a.identifier===r.RenderPassIdentifier.Material&&a.subPass===r.MaterialSubPass.Color?b.overlays[p.OverlayIndex.INNER].getColorTextureNoRasterImage():a.identifier===r.RenderPassIdentifier.Highlight?b.overlays[p.OverlayIndex.INNER].getValidTexture(p.RenderTargetType.Highlight):null}f.OverlayMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Enabled=1]="Enabled";a[a.EnabledWithWater=2]="EnabledWithWater";a[a.COUNT=3]="COUNT"})(f.OverlayMode||
(f.OverlayMode={}));let E=function(a){function b(){var d=a.apply(this,arguments)||this;d.overlayOpacity=1;return d}A._inheritsLoose(b,a);return b}(m.NoParameters);const l=B.create();f.OverlayIM=function(a,b){const {vertex:d,fragment:e}=a;d.uniforms.add([new w.Float4DrawUniform("overlayTexOffset",(g,h)=>{for(const u of h.overlays){const {index:n,extent:c}=u;0<k.area(c)&&(l[2*n]=g.toMapSpace[0]/k.width(c)-c[0]/k.width(c),l[2*n+1]=g.toMapSpace[1]/k.height(c)-c[1]/k.height(c))}return l}),new w.Float4DrawUniform("overlayTexScale",
(g,h)=>{for(const u of h.overlays){const {index:n,extent:c}=u;0<k.area(c)&&(l[2*n]=g.toMapSpace[2]/k.width(c),l[2*n+1]=g.toMapSpace[3]/k.height(c))}return l})]);e.constants.add("overlayOpacity","float",1);e.uniforms.add(new y.Texture2DPassUniform("ovColorTex",(g,h)=>z(g,h)));t(a,b)};f.OverlayTerrain=function(a,b){a.vertex.uniforms.add([new x.Float4Uniform("overlayTexOffset"),new x.Float4Uniform("overlayTexScale")]);a.fragment.uniforms.add([new D.FloatPassUniform("overlayOpacity",d=>d.overlayOpacity),
new y.Texture2DPassUniform("ovColorTex",(d,e)=>0===e.overlays.length?null:e.overlays[p.OverlayIndex.INNER].getColorTexture(d.overlaySource))]);t(a,b)};f.OverlayTerrainPassParameters=E;f.getColorTexture=z;f.overlay=t;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});