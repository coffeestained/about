// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,f,c,d){b.TextureCoordinateAttributeType=void 0;(function(a){a[a.None=0]="None";a[a.Default=1]="Default";a[a.Atlas=2]="Atlas";a[a.COUNT=3]="COUNT"})(b.TextureCoordinateAttributeType||(b.TextureCoordinateAttributeType={}));b.TextureCoordinateAttribute=function(a,e){switch(e.textureCoordinateType){case b.TextureCoordinateAttributeType.Default:a.attributes.add(d.VertexAttribute.UV0,
"vec2");a.varyings.add("vuv0","vec2");a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);break;case b.TextureCoordinateAttributeType.Atlas:a.attributes.add(d.VertexAttribute.UV0,"vec2");a.varyings.add("vuv0","vec2");a.attributes.add(d.VertexAttribute.UVREGION,"vec4");a.varyings.add("vuvRegion","vec4");a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);break;case b.TextureCoordinateAttributeType.None:a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {}`);break;default:f.neverReached(e.textureCoordinateType);case b.TextureCoordinateAttributeType.COUNT:}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});