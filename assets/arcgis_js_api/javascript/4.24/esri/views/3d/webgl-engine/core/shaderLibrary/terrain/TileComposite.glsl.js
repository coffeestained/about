// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec2f64 ../../shaderModules/Float2PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(c,g,h,k,l,e,f){let m=function(a){function b(){var d=a.apply(this,arguments)||this;d.scale=1;d.offset=h.ZEROS;return d}g._inheritsLoose(b,a);return b}(e.NoParameters);c.TileComposite=function(a){a.attributes.add(f.VertexAttribute.POSITION,"vec2");
a.attributes.add(f.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add(new l.FloatPassUniform("scale",b=>b.scale));a.vertex.uniforms.add(new k.Float2PassUniform("offset",b=>b.offset));a.varyings.add("uv","vec2");a.varyings.add("vuv","vec2");a.vertex.code.add(e.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)};c.TileCompositePassParameters=m;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});