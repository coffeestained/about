// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./ShadowCastAccumulate.glsl ../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration".split(" "),
function(g,p,q,r,t,u,d,e,v,w,x,h){function k(c){const f=new v.ShaderBuilder,b=f.fragment;b.include(t.RgbaFloatEncoding);b.include(q.ReadLinearDepth);f.include(r.CameraSpace);f.include(p.ScreenSpacePass);const {visualization:l,bandsEnabled:m}=c;b.constants.add("inverseSampleValue","float",x.shadowCastMaxSamples);b.uniforms.add([new w.Texture2DPassUniform("shadowCastMap",a=>a.shadowCastMap),new d.FloatPassUniform("sampleScale",a=>a.sampleScale),new d.FloatPassUniform("opacityFromElevation",a=>a.opacityFromElevation),
new u.Float4PassUniform("uColor",a=>a.color)]);c=l===h.ShadowCastVisualization.Gradient;const n=l===h.ShadowCastVisualization.Threshold;c&&m?b.uniforms.add(new d.FloatPassUniform("bandSize",a=>a.bandSize)):n&&b.uniforms.add(new d.FloatPassUniform("threshold",a=>a.threshold));b.code.add(e.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${n?e.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${c&&m?e.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${c?e.glsl`* strength`:""});
      }
    `);return f}const y=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));g.ShadowCastVisualize=y;g.build=k});