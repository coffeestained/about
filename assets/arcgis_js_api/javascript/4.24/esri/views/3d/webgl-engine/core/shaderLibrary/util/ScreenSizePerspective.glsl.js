// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces"],function(c,g,h,e,b){function f(a){return g.set(k,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const k=h.create();c.ScreenSizePerspective=function(a){a.vertex.code.add(b.glsl`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`);a.vertex.code.add(b.glsl`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`);a.vertex.code.add(b.glsl`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`);a.vertex.code.add(b.glsl`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`);a.vertex.code.add(b.glsl`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`);a.vertex.code.add(b.glsl`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`);a.vertex.code.add(b.glsl`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)};c.addScreenSizePerspective=function(a){a.uniforms.add(new e.Float4PassUniform("screenSizePerspective",d=>f(d.screenSizePerspective)))};c.addScreenSizePerspectiveAlignment=function(a){a.uniforms.add(new e.Float4PassUniform("screenSizePerspectiveAlignment",d=>f(d.screenSizePerspectiveAlignment||d.screenSizePerspective)))};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});