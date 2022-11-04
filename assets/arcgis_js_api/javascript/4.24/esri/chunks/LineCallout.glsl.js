// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./vec2 ./vec2f64 ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(m,n,p,g,v,w,x,y,z,A,h,k,q,d,B,C){function r(a){const e=new B.ShaderBuilder;e.include(x.AlignPixel);e.include(y.HUD,a);e.include(w.SliceDraw,a);e.attributes.add(C.VertexAttribute.UV0,"vec2");const {vertex:l,fragment:f}=e;l.uniforms.add([new k.Float4PassUniform("viewport",(b,c)=>c.camera.fullViewport),new q.FloatPassUniform("lineSize",(b,c)=>Math.ceil(b.size)*c.camera.pixelRatio),new h.Float2PassUniform("pixelToNDC",(b,c)=>p.set(t,2/c.camera.fullViewport[2],2/c.camera.fullViewport[3])),new q.FloatPassUniform("borderSize",
(b,c)=>n.isSome(b.borderColor)?c.camera.pixelRatio:0),new h.Float2PassUniform("screenOffset",(b,c)=>p.set(t,b.screenOffset[0]*c.camera.pixelRatio,b.screenOffset[1]*c.camera.pixelRatio))]);e.varyings.add("coverageSampling","vec4");e.varyings.add("lineSizes","vec2");a.hasMultipassGeometry&&e.varyings.add("depth","float");a.hasScreenSizePerspective&&A.addScreenSizePerspectiveAlignment(l);l.code.add(d.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${a.occlusionTestEnabled?d.glsl`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${a.hasScreenSizePerspective?d.glsl`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:d.glsl`
      vec2 screenOffsetScaled = screenOffset;
        `}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly
      // used to get the correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${a.hasMultipassGeometry?"depth \x3d posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${a.depthHudEnabled?a.depthHudAlignStartEnabled?d.glsl`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:d.glsl`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${a.hasScreenSizePerspective?d.glsl`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:d.glsl`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;
      // Calculate a pixel offset from the edge of the pixel, s.t. we keep the line aligned
      // to pixels if it has a full pixel size. Since pixel aligned biases to the bottom-left,
      // we bias the size to the right (for odd sizes) to balance out the bias. Grow sub-pixel
      // sizes towards the left or right s.t. there is a smooth transition (e.g. from 2 to 3 px).
      float halfWholePixelSize = floor(lineSizeScaled) * 0.5;
      float halfPixelSizeInt = floor(halfWholePixelSize);

      // Sub-pixel offset if we need to grow sub-pixels to the left
      float subpixelOffset = -fract(lineSizeScaled) * float(halfWholePixelSize > 0.0);

      // Pixel offset aligning to whole pixels and adding subpixel offset if needed
      float pixelOffset = -halfPixelSizeInt + subpixelOffset;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (pixelOffset - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `);f.uniforms.add([new k.Float4PassUniform("uColor",b=>u(b.color)),new k.Float4PassUniform("borderColor",b=>u(b.borderColor))]);a.hasMultipassGeometry&&(f.include(z.multipassGeometryTest,a),f.uniforms.add(new h.Float2PassUniform("inverseViewport",(b,c)=>c.inverseViewport)));f.code.add(d.glsl`
    void main() {
      ${a.hasMultipassGeometry?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line
      // blends on top of the border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage
      // and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${a.depthHudEnabled?d.glsl`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:d.glsl`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      gl_FragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `);return e}function u(a){return n.isSome(a)?a:v.ZEROS}const t=g.create();g=Object.freeze(Object.defineProperty({__proto__:null,build:r},Symbol.toStringTag,{value:"Module"}));m.LineCallout=g;m.build=r});