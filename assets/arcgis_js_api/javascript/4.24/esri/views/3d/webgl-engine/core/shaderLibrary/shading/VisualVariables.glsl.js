// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../shaderModules/Float3PassUniform ../../shaderModules/Float4sPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../../lib/VertexAttribute ../../../materials/VisualVariablePassParameters".split(" "),function(g,e,h,k,d,l,m,f){g.VisualVariables=function(a,c){c.hasVvInstancing&&(c.vvSize||c.vvColor)&&a.attributes.add(m.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4");a=a.vertex;c.vvSize?(a.uniforms.add(new e.Float3PassUniform("vvSizeMinSize",
b=>b.vvSizeMinSize)),a.uniforms.add(new e.Float3PassUniform("vvSizeMaxSize",b=>b.vvSizeMaxSize)),a.uniforms.add(new e.Float3PassUniform("vvSizeOffset",b=>b.vvSizeOffset)),a.uniforms.add(new e.Float3PassUniform("vvSizeFactor",b=>b.vvSizeFactor)),a.uniforms.add(new l.Matrix3PassUniform("vvSymbolRotationMatrix",b=>b.vvSymbolRotationMatrix)),a.uniforms.add(new e.Float3PassUniform("vvSymbolAnchor",b=>b.vvSymbolAnchor)),a.code.add(d.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),a.code.add(d.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${c.hasVvInstancing?d.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):a.code.add(d.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`);c.vvColor?(a.constants.add("vvColorNumber","int",f.vvColorNumber),c.hasVvInstancing&&a.uniforms.add([new k.FloatsPassUniform("vvColorValues",b=>b.vvColorValues,f.vvColorNumber),new h.Float4sPassUniform("vvColorColors",b=>b.vvColorColors,f.vvColorNumber)]),a.code.add(d.glsl`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${c.hasVvInstancing?d.glsl`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):a.code.add(d.glsl`vec4 vvColor() { return vec4(1.0); }`)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});