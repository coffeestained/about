// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./mat4 ./mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3Uniform ../views/3d/webgl-engine/core/shaderModules/FloatUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,q,e,h,r,t,u,k,f,c,l,v,w,x){function m(y){const b=new v.ShaderBuilder;b.attributes.add(x.VertexAttribute.POSITION,"vec2");b.include(h.TextureCoordinateAttribute,{textureCoordinateType:h.TextureCoordinateAttributeType.Default});b.varyings.add("worldRay","vec3");b.varyings.add("eyeDir","vec3");const {vertex:n,fragment:a}=b;n.uniforms.add([new l.Matrix4PassUniform("inverseProjectionMatrix",(p,d)=>d.camera.inverseProjectionMatrix),new l.Matrix4PassUniform("inverseViewMatrix",(p,d)=>q.invert(z,
d.camera.viewMatrix))]);n.code.add(c.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);a.uniforms.add(new f.FloatUniform("atmosphereC"));a.uniforms.add(new k.Float3Uniform("cameraPosition"));a.uniforms.add(new u.Float2PassUniform("nearFar",(p,d)=>d.camera.nearFar));a.uniforms.add(new w.Texture2DUniform("depthTex"));a.uniforms.add(new f.FloatUniform("fogStrength"));a.uniforms.add(new f.FloatUniform("fogAmount"));a.uniforms.add(new k.Float3Uniform("fogColor"));b.include(t.Gamma);a.include(r.ReadLinearDepth);a.code.add(c.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);a.code.add(c.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`);a.code.add(c.glsl`
    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture2D(depthTex, vuv0).r;
      float zNorm = 2.0 * depthSample - 1.0;
      float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
      if(depthSample < 1.0 && depthSample > 0.0){
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;
        cameraSpaceRay *= linDepth;
        terrainDepth = max(0.0, length(cameraSpaceRay));
      }

      ${y.haze?c.glsl`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `);return b}const z=e.create();e=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));g.Fog=e;g.build=m});