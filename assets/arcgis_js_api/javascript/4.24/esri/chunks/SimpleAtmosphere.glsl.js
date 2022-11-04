// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../views/3d/environment/SimpleAtmosphereTechniqueConfiguration ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderModules/Float2Uniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3Uniform ../views/3d/webgl-engine/core/shaderModules/FloatUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(k,t,m,u,v,n,f,l,b,w,x,y,z,p){function q(c){const a=new y.ShaderBuilder,{vertex:d,fragment:g}=a;c.geometry===m.SimpleAtmosphereGeometry.Underground?(a.attributes.add(p.VertexAttribute.POSITION,"vec2"),a.varyings.add("color","vec4"),d.uniforms.add([new n.Float3PassUniform("lightingMainDirection",(h,e)=>e.lighting.lightingMainDirection),new f.Float3Uniform("cameraPosition"),new l.FloatUniform("undergroundFadeAlpha")]),d.code.add(b.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),g.code.add(b.glsl`void main() {
gl_FragColor = color;
}`)):(a.include(u.Transform),a.attributes.add(p.VertexAttribute.POSITION,"vec3"),a.varyings.add("vtc","vec2"),a.varyings.add("falloff","float"),c=c.geometry===m.SimpleAtmosphereGeometry.Cylinder,d.uniforms.add([new w.Matrix4PassUniform("proj",(h,e)=>e.camera.projectionMatrix),new x.Matrix4Uniform("view"),new n.Float3PassUniform("lightingMainDirection",(h,e)=>e.lighting.lightingMainDirection)]),c||(a.varyings.add("innerFactor","float"),d.uniforms.add(new f.Float3Uniform("silCircleCenter")),d.uniforms.add(new f.Float3Uniform("silCircleV1")),
d.uniforms.add(new f.Float3Uniform("silCircleV2")),d.uniforms.add(new v.Float2Uniform("texV")),d.uniforms.add(new l.FloatUniform("innerScale"))),d.code.add(b.glsl`
		void main(void) {
      ${c?b.glsl`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:b.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${b.glsl.float(.04908738515625)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${b.glsl.float(.0078125)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),g.uniforms.add(new z.Texture2DPassUniform("tex",h=>h.texture)),c||g.uniforms.add(new l.FloatUniform("altitudeFade")),g.code.add(b.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${c?b.glsl`gl_FragColor = atmosphereColor;`:b.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`));return a}let r=function(c){function a(){return c.apply(this,arguments)||this}t._inheritsLoose(a,c);return a}(b.NoParameters);const A=Object.freeze(Object.defineProperty({__proto__:null,SimpleAtmospherePassParameters:r,build:q},Symbol.toStringTag,{value:"Module"}));k.SimpleAtmosphere=A;k.SimpleAtmospherePassParameters=r;k.build=q});