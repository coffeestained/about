// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],function(e,f,a,g,d){e.VertexTextureCoordinates=function(b,c){b.include(a.TextureCoordinateAttribute,c);b.fragment.code.add(d.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${c.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `);switch(c.textureCoordinateType){case a.TextureCoordinateAttributeType.Default:b.fragment.code.add(d.glsl`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);break;case a.TextureCoordinateAttributeType.Atlas:b.include(g.TextureAtlasLookup);b.fragment.code.add(d.glsl`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);break;default:f.neverReached(c.textureCoordinateType);case a.TextureCoordinateAttributeType.None:case a.TextureCoordinateAttributeType.COUNT:}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});