// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutputOptions","../../shaderModules/interfaces","../../../../../webgl/checkWebGLError"],function(c,b,e,f){c.HeaderComment=function(d,a){a=e.glsl`
  /*
  *  ${a.name}
  *  ${a.output===b.ShaderOutput.Color?"RenderOutput: Color":a.output===b.ShaderOutput.Depth?"RenderOutput: Depth":a.output===b.ShaderOutput.Shadow?"RenderOutput: Shadow":a.output===b.ShaderOutput.Normal?"RenderOutput: Normal":a.output===b.ShaderOutput.Highlight?"RenderOutput: Highlight":""}
  */
  `;f.webglValidateShadersEnabled()&&(d.fragment.code.add(a),d.vertex.code.add(a))};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});