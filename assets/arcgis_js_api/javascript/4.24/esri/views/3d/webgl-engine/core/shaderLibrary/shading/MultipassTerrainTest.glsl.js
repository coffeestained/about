// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(c,g,d,h,k){c.MultipassTerrainUniforms=function(){this.cullAboveGround=this.enabled=!1};c.multipassTerrainTest=function(a,e){e.hasMultipassTerrain&&(a.fragment.include(g.ReadLinearDepth),a.fragment.uniforms.add(new k.Texture2DPassUniform("terrainDepthTexture",(f,b)=>b.multipassTerrain.linearDepthTexture)),a.fragment.uniforms.add(new d.Float2PassUniform("nearFar",
(f,b)=>b.camera.nearFar)),a.fragment.uniforms.add(new d.Float2PassUniform("inverseViewport",(f,b)=>b.inverseViewport)),a.fragment.code.add(h.glsl`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?"\x3e":"\x3c\x3d"} terrainDepth){
        discard;
      }
    }
  `))};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});