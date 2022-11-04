// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./BackgroundGrid.glsl ./TileBlendInput ../../shaderModules/Float3Uniform ../../shaderModules/Float4Uniform ../../shaderModules/FloatUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DUniform".split(" "),function(g,m,h,d,k,n,b,l){g.TerrainTexture=function(a,c){a.varyings.add("vtc","vec2");a.vertex.uniforms.add(new k.Float4Uniform("texOffsetAndScale"));a.fragment.uniforms.add(new l.Texture2DUniform("tex"));a.fragment.uniforms.add(new d.Float3Uniform("textureOpacities"));
const e=c.textureFadingEnabled&&!c.renderOccluded;e&&(a.vertex.uniforms.add(new k.Float4Uniform("nextTexOffsetAndScale")),a.varyings.add("nvtc","vec2"),a.fragment.uniforms.add(new l.Texture2DUniform("texNext")),a.fragment.uniforms.add(new d.Float3Uniform("nextTexOpacities")),a.fragment.uniforms.add(new n.FloatUniform("fadeFactor")));const f=c.tileBlendInput===h.TileBlendInput.ColorComposite;(c=c.tileBlendInput===h.TileBlendInput.GridComposite)&&a.fragment.include(m.BackgroundGrid);f&&a.fragment.uniforms.add(new d.Float3Uniform("backgroundColor"));
a.vertex.code.add(b.glsl`
  void forwardTextureCoordinates(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${e?b.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:b.glsl``}
  }`);a.fragment.code.add(b.glsl`
    vec4 applyBaseOpacity(vec4 _color, vec3 _opacities) {
      return _opacities.z <= 0.0 ? _color : _color * _opacities.x;
    }

    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${c||f?b.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = ${f?b.glsl`vec4(backgroundColor, 1.0)`:b.glsl`gridColor(uv)`} * opacities.y;
              float alpha = opacities.z * color.a;
              return mix(bg, color, alpha) * opacities.x;`:b.glsl`return color;`}
    }`);e?a.fragment.code.add(b.glsl`vec4 getTileColor() {
vec4 color = getColor(texture2D(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture2D(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):a.fragment.code.add(b.glsl`vec4 getTileColor() {
return getColor(texture2D(tex, vtc), vtc, textureOpacities);
}`)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});