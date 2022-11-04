// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./vec2 ./vec2f64 ./vec4f64 ../views/3d/layers/graphics/sdfPrimitives ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4sPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/basicInterfaces ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/materials/VisualVariablePassParameters".split(" "),
function(r,t,m,x,C,D,n,E,F,G,H,I,J,k,K,L,u,v,p,M,y,N,c,O,P,Q,q,z){function A(a){const d=new O.ShaderBuilder;var e=a.signedDistanceFieldEnabled;d.include(F.AlignPixel);d.include(G.HUD,a);d.include(E.SliceDraw,a);if(a.output===n.ShaderOutput.Occlusion)return d.include(H.HUDOcclusionPass,a),d;const {vertex:f,fragment:g}=d;d.include(u.ScreenSizePerspective);g.include(L.RgbaFloatEncoding);g.include(K.ColorConversion);d.include(J.VisualVariables,a);d.varyings.add("vcolor","vec4");d.varyings.add("vtc","vec2");
d.varyings.add("vsize","vec2");a.binaryHighlightOcclusionEnabled&&d.varyings.add("voccluded","float");f.uniforms.add([new p.Float4PassUniform("viewport",(b,h)=>h.camera.fullViewport),new v.Float2PassUniform("screenOffset",(b,h)=>m.set(B,2*b.screenOffset[0]*h.camera.pixelRatio,2*b.screenOffset[1]*h.camera.pixelRatio)),new v.Float2PassUniform("anchorPosition",b=>w(b)),new p.Float4PassUniform("materialColor",b=>b.color),new y.FloatPassUniform("pixelRatio",(b,h)=>h.camera.pixelRatio)]);e&&(f.uniforms.add(new p.Float4PassUniform("outlineColor",
b=>b.outlineColor)),g.uniforms.add([new p.Float4PassUniform("outlineColor",b=>0<b.outlineColor[3]&&0<b.outlineSize?b.outlineColor:C.ZEROS),new y.FloatPassUniform("outlineSize",b=>0<b.outlineColor[3]&&0<b.outlineSize?b.outlineSize:0)]));a.hasScreenSizePerspective&&(u.addScreenSizePerspective(f),u.addScreenSizePerspectiveAlignment(f));(a.debugDrawLabelBorder||a.binaryHighlightOcclusionEnabled)&&d.varyings.add("debugBorderCoords","vec4");d.attributes.add(q.VertexAttribute.UV0,"vec2");d.attributes.add(q.VertexAttribute.COLOR,
"vec4");d.attributes.add(q.VertexAttribute.SIZE,"vec2");d.attributes.add(q.VertexAttribute.AUXPOS2,"vec4");f.code.add(c.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${a.hasScreenSizePerspective?c.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${a.vvSize?"inputSize *\x3d vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${a.occlusionTestEnabled||a.binaryHighlightOcclusionEnabled?"bool visible \x3d testVisibilityHUD(posProj);":""}

      ${a.binaryHighlightOcclusionEnabled?"voccluded \x3d visible ? 0.0 : 1.0;":""}
    `);var l=c.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;const R=a.pixelSnappingEnabled?e?c.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c.glsl`posProj += quadOffset;`;a.vvColor&&f.uniforms.add([new M.Float4sPassUniform("vvColorColors",b=>b.vvColorColors,z.vvColorNumber),new N.FloatsPassUniform("vvColorValues",b=>b.vvColorValues,z.vvColorNumber)]);f.uniforms.add(new v.Float2PassUniform("textureCoordinateScaleFactor",b=>t.isSome(b.texture)&&t.isSome(b.texture.descriptor.textureCoordinateScaleFactor)?b.texture.descriptor.textureCoordinateScaleFactor:x.ONES));f.code.add(c.glsl`
    ${a.occlusionTestEnabled?"if (visible) {":""}
    ${l}
    ${a.vvColor?"vcolor \x3d vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${c.glsl.float(k.symbolAlphaCutoff)};
    ${e?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.glsl.float(k.symbolAlphaCutoff)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${R}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${a.occlusionTestEnabled?c.glsl`} else { vtc = vec2(0.0);
      ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `);g.uniforms.add(new P.Texture2DPassUniform("tex",b=>b.texture));l=a.debugDrawLabelBorder?c.glsl`(isBorder > 0.0 ? 0.0 : ${c.glsl.float(k.defaultMaskAlphaCutoff)})`:c.glsl.float(k.defaultMaskAlphaCutoff);e=c.glsl`
    ${a.debugDrawLabelBorder?c.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${e?c.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${c.glsl.float(D.DEFAULT_TEX_SIZE)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${l} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${l}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c.glsl`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${l}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${a.debugDrawLabelBorder?c.glsl`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;a.output===n.ShaderOutput.Alpha&&g.code.add(c.glsl`
      void main() {
        ${e}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `);a.output===n.ShaderOutput.Color&&g.code.add(c.glsl`
    void main() {
      ${e}
      ${a.transparencyPassType===Q.TransparencyPassType.FrontFace?"gl_FragColor.rgb /\x3d gl_FragColor.a;":""}
    }
    `);a.output===n.ShaderOutput.Highlight&&(d.include(I.OutputHighlight),g.code.add(c.glsl`
    void main() {
      ${e}
      ${a.binaryHighlightOcclusionEnabled?c.glsl`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `));return d}function w(a,d=B){if(a.textureIsSignedDistanceField){var e=a.anchorPosition;a=a.distanceFieldBoundingBox;t.isSome(a)?m.set(d,e[0]*(a[2]-a[0])+a[0],e[1]*(a[3]-a[1])+a[1]):m.set(d,0,0)}else m.copy(d,a.anchorPosition);return d}const B=x.create(),S=Object.freeze(Object.defineProperty({__proto__:null,build:A,calculateAnchorPosForRendering:w},Symbol.toStringTag,{value:"Module"}));r.HUDMaterial=S;r.build=A;r.calculateAnchorPosForRendering=w});