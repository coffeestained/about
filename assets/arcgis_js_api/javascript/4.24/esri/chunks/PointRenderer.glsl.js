// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float2Uniform ../views/3d/webgl-engine/core/shaderModules/Float3Uniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,e,t,u,v,w,k,l,a,x,y,z,m){function n(d){const b=new z.ShaderBuilder,p=d.output===e.ShaderOutput.Color,f=d.output===e.ShaderOutput.Depth,q=d.output===e.ShaderOutput.Highlight,{vertex:c,fragment:r}=b;b.extensions.add("GL_OES_standard_derivatives");b.include(t.SliceDraw,d);b.attributes.add(m.VertexAttribute.POSITION,"vec3");b.attributes.add(m.VertexAttribute.COLOR,"vec3");c.uniforms.add(new y.Matrix4Uniform("modelView"));c.uniforms.add(new x.Matrix4PassUniform("proj",(A,g)=>g.camera.projectionMatrix));
c.uniforms.add(new k.Float2Uniform("screenMinMaxSize"));c.uniforms.add(new k.Float2Uniform("pointScale"));c.uniforms.add(new l.Float3Uniform("clipMin"));c.uniforms.add(new l.Float3Uniform("clipMax"));f?(c.uniforms.add(new w.Float2PassUniform("nearFar",(A,g)=>g.camera.nearFar)),b.varyings.add("depth","float")):d.output!==e.ShaderOutput.Highlight&&b.varyings.add("vColor","vec3");c.code.add(a.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${d.drawScreenSize?a.glsl`
      float clampedScreenSize = pointSize;`:a.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${f?a.glsl`depth = (-camera.z - nearFar[0]) / (nearFar[1] - nearFar[0]);`:""}
     ${p?a.glsl`vColor = color;`:""}
    }
  `);r.include(v.RgbaFloatEncoding,d);q&&b.include(u.OutputHighlight);r.code.add(a.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${f?a.glsl`gl_FragColor = float2rgba(depth);`:""}
      ${q?a.glsl`outputHighlight();`:""}
      ${p?a.glsl`gl_FragColor = vec4(vColor, 1.0);`:""}
    }
  `);return b}const B=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));h.PointRendererShader=B;h.build=n});