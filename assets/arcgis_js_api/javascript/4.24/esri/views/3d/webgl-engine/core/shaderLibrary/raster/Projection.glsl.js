// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(d,c,e,f){d.Projection=function(b){b.fragment.uniforms.add(new f.Texture2DPassUniform("u_transformGrid",a=>a.u_transformGrid));b.fragment.uniforms.add(new c.Float2PassUniform("u_transformSpacing",a=>a.common.u_transformSpacing));b.fragment.uniforms.add(new c.Float2PassUniform("u_transformGridSize",a=>a.common.u_transformGridSize));b.fragment.uniforms.add(new c.Float2PassUniform("u_targetImageSize",
a=>a.common.u_targetImageSize));b.fragment.code.add(e.glsl`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;;
}`)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});