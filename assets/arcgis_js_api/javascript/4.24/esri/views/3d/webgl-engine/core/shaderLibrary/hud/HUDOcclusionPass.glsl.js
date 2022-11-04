// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../output/ReadLinearDepth.glsl ../shading/MultipassGeometryTest.glsl ../util/RgbaFloatEncoding.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(e,l,m,n,f,c,p){e.HUDOcclusionPass=function(g,a){const {vertex:h,fragment:d}=g;a.hasMultipassGeometry&&h.include(m.multipassGeometryTest);a.hasMultipassTerrain&&g.varyings.add("depth","float");h.code.add(c.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${a.hasMultipassGeometry?c.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${a.hasMultipassTerrain?"depth \x3d projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `);a.hasMultipassTerrain&&d.include(l.ReadLinearDepth);a.hasMultipassTerrain&&d.uniforms.add([new p.Texture2DPassUniform("terrainDepthTexture",(k,b)=>b.multipassTerrain.linearDepthTexture),new f.Float2PassUniform("nearFar",(k,b)=>b.camera.nearFar),new f.Float2PassUniform("inverseViewport",(k,b)=>b.inverseViewport)]);d.include(n.RgbaFloatEncoding);d.code.add(c.glsl`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${a.hasMultipassTerrain?c.glsl`
          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});