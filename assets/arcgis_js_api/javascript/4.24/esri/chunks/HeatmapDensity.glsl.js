// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(e,k,l,d,m,c){function f(b){const a=new m.ShaderBuilder;k.addProjViewLocalOrigin(a,b);({isAttributeDriven:b}=b);a.attributes.add(c.VertexAttribute.POSITION,"vec3");a.attributes.add(c.VertexAttribute.UV0,
"vec2");b&&(a.attributes.add(c.VertexAttribute.FEATUREATTRIBUTE,"float"),a.varyings.add("attributeValue","float"));a.varyings.add("unitCirclePos","vec2");a.vertex.uniforms.add(new l.FloatPassUniform("radius",({resolutionForScale:g,searchRadius:n},{camera:h,screenToWorldRatio:p})=>2*n*(0===g?1:g/p)*h.pixelRatio/h.fullViewport[2]));a.vertex.code.add(d.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${c.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${b?d.glsl`attributeValue = ${c.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `);a.fragment.code.add(d.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${b?d.glsl` * attributeValue`:""};
      gl_FragColor = vec4(density);
    }
  `);return a}const q=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.HeatmapDensity=q;e.build=f});