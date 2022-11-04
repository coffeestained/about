// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(a,d,e,f,g){a.MultipassGeometryUniforms=function(){this.enabled=!1};a.multipassGeometryTest=function(b){b.include(d.ReadLinearDepth);b.uniforms.add([new g.Texture2DPassUniform("geometryDepthTexture",(h,c)=>c.multipassGeometry.linearDepthTexture),new e.Float2PassUniform("nearFar",(h,c)=>c.camera.nearFar)]);b.code.add(f.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});