// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./ShaderOutputOptions","./attributes/VertexPosition.glsl","../shaderModules/Float2PassUniform","../shaderModules/interfaces"],function(e,c,f,g,d){e.ForwardLinearDepth=function(a,b){b.output===c.ShaderOutput.Color&&b.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(d.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):b.output===c.ShaderOutput.Depth||b.output===c.ShaderOutput.Shadow?(a.include(f.VertexPosition,b),a.varyings.add("linearDepth",
"float"),a.vertex.uniforms.add(new g.Float2PassUniform("nearFar",(k,h)=>h.camera.nearFar)),a.vertex.code.add(d.glsl`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):a.vertex.code.add(d.glsl`void forwardLinearDepth() {}`)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});