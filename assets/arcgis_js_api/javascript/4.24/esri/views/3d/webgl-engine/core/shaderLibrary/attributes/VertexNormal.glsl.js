// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/mat3f64 ../../../../../../chunks/vec4f64 ./NormalAttribute.glsl ./VertexPosition.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform".split(" "),function(e,h,k,l,f,g,d,m,n){let p=function(a){function b(){var c=a.apply(this,arguments)||this;c.transformNormalViewFromGlobal=k.create();return c}h._inheritsLoose(b,a);return b}(g.VertexPositionPassParameters),
q=function(a){function b(){var c=a.apply(this,arguments)||this;c.transformNormalGlobalFromModel=k.create();c.toMapSpace=l.create();return c}h._inheritsLoose(b,a);return b}(g.VertexPositionDrawParameters);e.VertexNormal=function(a,b){b.normalType===f.NormalAttributeType.Attribute||b.normalType===f.NormalAttributeType.CompressedAttribute?(a.include(f.NormalAttribute,b),a.varyings.add("vNormalWorld","vec3"),a.varyings.add("vNormalView","vec3"),a.vertex.uniforms.add([new m.Matrix3DrawUniform("transformNormalGlobalFromModel",
c=>c.transformNormalGlobalFromModel),new n.Matrix3PassUniform("transformNormalViewFromGlobal",c=>c.transformNormalViewFromGlobal)]),a.vertex.code.add(d.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):b.normalType===f.NormalAttributeType.Ground?(a.include(g.VertexPosition,b),a.varyings.add("vNormalWorld","vec3"),a.vertex.code.add(d.glsl`
    void forwardNormal() {
      vNormalWorld = ${b.spherical?d.glsl`normalize(vPositionWorldCameraRelative);`:d.glsl`vec3(0.0, 0.0, 1.0);`}
    }
    `)):a.vertex.code.add(d.glsl`void forwardNormal() {}`)};e.VertexNormalDrawParameters=q;e.VertexNormalPassParameters=p;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});