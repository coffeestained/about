// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/mat3f64 ../../../../../../chunks/mat4f64 ../../../../../../chunks/vec3f32 ../../../../../../chunks/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform".split(" "),function(f,h,
k,p,l,m,q,r,n,g,d,t,u,v){let w=function(c){function e(){var a=c.apply(this,arguments)||this;a.transformWorldFromViewTH=m.create();a.transformWorldFromViewTL=m.create();a.transformViewFromCameraRelativeRS=k.create();a.transformProjFromView=p.create();return a}h._inheritsLoose(e,c);return e}(d.NoParameters),x=function(c){function e(){var a=c.apply(this,arguments)||this;a.transformWorldFromModelRS=k.create();a.transformWorldFromModelTH=l.create();a.transformWorldFromModelTL=l.create();return a}h._inheritsLoose(e,
c);return e}(d.NoParameters);f.VertexPosition=function(c,e){c.include(q.PositionAttribute);const a=c.vertex;a.include(r.DoublePrecision,e);c.varyings.add("vPositionWorldCameraRelative","vec3");c.varyings.add("vPosition_view","vec3");a.uniforms.add([new g.Float3PassUniform("transformWorldFromViewTH",b=>b.transformWorldFromViewTH),new g.Float3PassUniform("transformWorldFromViewTL",b=>b.transformWorldFromViewTL),new u.Matrix3PassUniform("transformViewFromCameraRelativeRS",b=>b.transformViewFromCameraRelativeRS),
new v.Matrix4PassUniform("transformProjFromView",b=>b.transformProjFromView),new t.Matrix3DrawUniform("transformWorldFromModelRS",b=>b.transformWorldFromModelRS),new n.Float3DrawUniform("transformWorldFromModelTH",b=>b.transformWorldFromModelTH),new n.Float3DrawUniform("transformWorldFromModelTL",b=>b.transformWorldFromModelTL)]);a.code.add(d.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`);a.code.add(d.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?d.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `);c.fragment.uniforms.add(new g.Float3PassUniform("transformWorldFromViewTL",b=>b.transformWorldFromViewTL));a.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);c.fragment.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)};f.VertexPositionDrawParameters=x;f.VertexPositionPassParameters=w;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});