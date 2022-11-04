// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(g,k,d,e,f,l,c){function h(m){const a=new l.ShaderBuilder;k.addProjViewLocalOrigin(a,m);a.vertex.uniforms.add(new e.FloatPassUniform("width",
b=>b.width));a.attributes.add(c.VertexAttribute.POSITION,"vec3");a.attributes.add(c.VertexAttribute.NORMAL,"vec3");a.attributes.add(c.VertexAttribute.UV0,"vec2");a.attributes.add(c.VertexAttribute.AUXPOS1,"float");a.varyings.add("vtc","vec2");a.varyings.add("vlength","float");a.varyings.add("vradius","float");a.vertex.code.add(f.glsl`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`);a.fragment.uniforms.add([new e.FloatPassUniform("outlineSize",b=>b.outlineSize),new d.Float4PassUniform("outlineColor",b=>b.outlineColor),new e.FloatPassUniform("stripeLength",b=>b.stripeLength),new d.Float4PassUniform("stripeEvenColor",b=>b.stripeEvenColor),new d.Float4PassUniform("stripeOddColor",b=>b.stripeOddColor)]);a.fragment.code.add(f.glsl`
    const float INV_SQRT2 = ${f.glsl.float(1/Math.sqrt(2))};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `);return a}const n=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));g.MeasurementArrow=n;g.build=h});