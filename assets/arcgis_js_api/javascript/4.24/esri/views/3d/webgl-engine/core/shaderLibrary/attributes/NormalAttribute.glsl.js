// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../util/DecodeNormal.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,f,c,e){b.NormalAttributeType=void 0;(function(a){a[a.Attribute=0]="Attribute";a[a.CompressedAttribute=1]="CompressedAttribute";a[a.Ground=2]="Ground";a[a.ScreenDerivative=3]="ScreenDerivative";a[a.COUNT=4]="COUNT"})(b.NormalAttributeType||(b.NormalAttributeType={}));b.NormalAttribute=function(a,d){d.normalType===b.NormalAttributeType.Attribute&&(a.attributes.add(e.VertexAttribute.NORMAL,
"vec3"),a.vertex.code.add(c.glsl`vec3 normalModel() {
return normal;
}`));d.normalType===b.NormalAttributeType.CompressedAttribute&&(a.include(f.DecodeNormal),a.attributes.add(e.VertexAttribute.NORMALCOMPRESSED,"vec2"),a.vertex.code.add(c.glsl`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`));d.normalType===b.NormalAttributeType.ScreenDerivative&&(a.extensions.add("GL_OES_standard_derivatives"),a.fragment.code.add(c.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});