// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float2Uniform ../views/3d/webgl-engine/core/shaderModules/FloatUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DUniform ../views/3d/webgl-engine/lib/SSAOTechniqueConfiguration".split(" "),
function(m,v,n,p,k,l,g,b,w,c,q){function r(t){const d=new w.ShaderBuilder,a=d.fragment;d.include(v.ScreenSpacePass);if(t.output===q.SSAOOutput.Blur){var h=(e.filterRadius+1)/2;h=1/(2*h*h);a.include(n.ReadLinearDepth);a.uniforms.add([new c.Texture2DUniform("normalMap"),new c.Texture2DUniform("depthMap"),new c.Texture2DUniform("tex"),new l.Float2Uniform("blurSize"),new g.FloatUniform("projScale"),new k.Float2PassUniform("nearFar",(u,f)=>f.camera.nearFar)]);a.code.add(b.glsl`
      void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r * r * ${b.glsl.float(h)} - ddiff * ddiff * sharpness);
        wTotal += w;
        bTotal += w * c;
      }
    `);a.code.add(b.glsl`
      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/center_d;
        for (int r = -${b.glsl.int(e.filterRadius)}; r <= ${b.glsl.int(e.filterRadius)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf * blurSize;
          blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
        }

        gl_FragColor = vec4(b / w_total);
      }
    `)}t.output===q.SSAOOutput.SSAO&&(a.include(n.ReadLinearDepth),d.include(p.CameraSpace),a.uniforms.add(new c.Texture2DUniform("normalMap")),a.uniforms.add(new c.Texture2DUniform("depthMap")),a.uniforms.add(new c.Texture2DUniform("rnm")),a.uniforms.add(new g.FloatUniform("intensity")),a.uniforms.add(new g.FloatUniform("projScale")),a.uniforms.add(new g.FloatUniform("radius")),a.uniforms.add(new k.Float2PassUniform("nearFar",(u,f)=>f.camera.nearFar)),a.uniforms.add(new l.Float2Uniform("screenSize")),
a.uniforms.add(new l.Float2Uniform("rnmScale")),a.code.add(b.glsl`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),a.code.add(b.glsl`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),d.fragment.uniforms.add(new k.Float2PassUniform("zScale",(u,f)=>p.getZScale(f))),a.code.add(b.glsl`
      void main(void) {
        fillSphere();
        vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
        float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

        if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

        // get the normal of current fragment
        vec4 norm4 = texture2D(normalMap, uv);
        vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
        bool isTerrain = norm4.w<0.5;

        float sum = .0;
        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0 * currentPixelPos.z * zScale.x + zScale.y);

        for(int i = 0; i < ${b.glsl.int(e.samples)}; ++i) {
          vec2 unitOffset = reflect(sphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset * radius * ps);

          //don't use current or very nearby samples
          if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

          vec2 tc = vec2(gl_FragCoord.xy + offset);
          if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
          vec2 tcTap = tc / screenSize;
          float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

          if (isTerrain) {
            bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
            if (isTerrainTap) {
              continue;
            }
          }

          tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

          sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
        }

        // output the result
        float A = max(1.0-sum*intensity/float(${b.glsl.int(e.samples)}),0.0);

        // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
        gl_FragColor = vec4(A);
      }
    `));return d}const e={samples:16,filterRadius:4},x=Object.freeze(Object.defineProperty({__proto__:null,build:r},Symbol.toStringTag,{value:"Module"}));m.SSAO=x;m.build=r});