// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/compilerUtils ../attributes/NormalAttribute.glsl ../attributes/VertexNormal.glsl ../attributes/VertexPosition.glsl ./Normals.glsl ../../shaderModules/interfaces".split(" "),function(h,k,e,l,g,f,b){h.ComputeShadingNormal=function(d,a){const c=d.fragment;switch(a.doubleSidedMode){case f.NormalsDoubleSidedMode.None:c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case f.NormalsDoubleSidedMode.View:d.include(g.VertexPosition,a);c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case f.NormalsDoubleSidedMode.WindingOrder:c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:k.neverReached(a.doubleSidedMode);case f.NormalsDoubleSidedMode.COUNT:}switch(a.normalType){case e.NormalAttributeType.Attribute:case e.NormalAttributeType.CompressedAttribute:d.include(l.VertexNormal,a);c.code.add(b.glsl`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);break;case e.NormalAttributeType.ScreenDerivative:d.extensions.add("GL_OES_standard_derivatives");d.include(g.VertexPosition,a);c.code.add(b.glsl`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);break;case e.NormalAttributeType.Ground:a.spherical?(d.include(g.VertexPosition,a),c.code.add(b.glsl`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)):c.code.add(b.glsl`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`);d.extensions.add("GL_OES_standard_derivatives");c.code.add(b.glsl`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);break;default:k.neverReached(a.normalType);case e.NormalAttributeType.COUNT:}};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});