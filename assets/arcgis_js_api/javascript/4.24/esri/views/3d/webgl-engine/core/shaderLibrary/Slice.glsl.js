// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../shaderModules/Float3DrawUniform ../shaderModules/Float3PassUniform ../shaderModules/interfaces".split(" "),function(m,y,f,z,A,g,k,q,r,h){function t(c,b,a){if(b.hasSlicePlane){c.extensions.add("GL_OES_standard_derivatives");b.hasSliceInVertexProgram&&c.vertex.uniforms.add(a);c.fragment.uniforms.add(a);
a=h.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`;var d=h.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`;d=b.hasSliceHighlight?h.glsl`
        ${d}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:h.glsl`#define highlightSlice(_color_, _pos_) (_color_)`;b.hasSliceInVertexProgram&&c.vertex.code.add(a);c.fragment.code.add(a);c.fragment.code.add(d)}else a=h.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`,b.hasSliceInVertexProgram&&c.vertex.code.add(a),c.fragment.code.add(a)}function u(c,b,a){return c.instancedDoublePrecision?g.set(B,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):b.slicePlaneLocalOrigin}function v(c,b){return f.isSome(c)?g.subtract(n,b.origin,c):b.origin}function w(c,b,a){return c.hasSliceTranslatedView?f.isSome(b)?z.translate(C,a.camera.viewMatrix,b):a.camera.viewMatrix:
null}function x(c,b,a){if(f.isNone(a.slicePlane))return k.ZEROS;const d=u(c,b,a);b=v(d,a.slicePlane);c=w(c,d,a);return f.isSome(c)?g.transformMat4(n,b,c):b}function p(c,b,a,d){if(f.isNone(d)||f.isNone(a.slicePlane))return k.ZEROS;const e=u(c,b,a);b=v(e,a.slicePlane);c=w(c,e,a);return f.isSome(c)?(g.add(l,d,b),g.transformMat4(n,b,c),g.transformMat4(l,l,c),g.subtract(l,l,n)):d}let D=function(c){function b(a){var d=c.call(this)||this;d.slicePlaneLocalOrigin=a;return d}y._inheritsLoose(b,c);return b}(h.NoParameters);
const B=k.create(),n=k.create(),l=k.create(),C=A.create();m.SliceDraw=function(c,b){t(c,b,[new q.Float3DrawUniform("slicePlaneOrigin",(a,d)=>x(b,a,d)),new q.Float3DrawUniform("slicePlaneBasis1",(a,d)=>{var e;return p(b,a,d,null==(e=f.unwrap(d.slicePlane))?void 0:e.basis1)}),new q.Float3DrawUniform("slicePlaneBasis2",(a,d)=>{var e;return p(b,a,d,null==(e=f.unwrap(d.slicePlane))?void 0:e.basis2)})])};m.SlicePass=function(c,b){t(c,b,[new r.Float3PassUniform("slicePlaneOrigin",(a,d)=>x(b,a,d)),new r.Float3PassUniform("slicePlaneBasis1",
(a,d)=>{var e;return p(b,a,d,null==(e=f.unwrap(d.slicePlane))?void 0:e.basis1)}),new r.Float3PassUniform("slicePlaneBasis2",(a,d)=>{var e;return p(b,a,d,null==(e=f.unwrap(d.slicePlane))?void 0:e.basis2)})])};m.SlicePlaneParameters=D;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});