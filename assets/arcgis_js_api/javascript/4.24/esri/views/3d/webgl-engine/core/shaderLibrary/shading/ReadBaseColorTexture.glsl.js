// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ../util/TextureAtlasLookup.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform".split(" "),function(e,f,g,h,c,k){e.ReadBaseColorTexture=function(d,a){const b=d.fragment;a.hasBaseColorTexture?(d.include(g.VertexTextureCoordinates,a),a=a.textureCoordinateType===f.TextureCoordinateAttributeType.Atlas,b.uniforms.add(k.createTexture2DDrawSizeUniforms("baseColorTexture",l=>
l.texture,a)),a?(d.include(h.TextureAtlasLookup),b.code.add(c.glsl`vec4 readBaseColorTexture() {
return textureAtlasLookup(baseColorTexture, baseColorTextureSize, vuv0, vuvRegion);
}`)):b.code.add(c.glsl`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)):b.code.add(c.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});