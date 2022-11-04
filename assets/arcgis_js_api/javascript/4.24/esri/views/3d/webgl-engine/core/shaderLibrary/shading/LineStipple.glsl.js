// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../util/RgbaFloatEncoding.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/FloatUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DUniform ../../../shaders/ensureColor4".split(" "),function(k,m,n,p,l,f,a,q,r){function t(d,b){const u=!(b.draped&&b.stipplePreferContinuous),{vertex:e,fragment:c}=d;c.include(m.RgbaFloatEncoding);e.uniforms.add(new f.FloatUniform("stipplePatternPixelSize"));b.draped||
(n.addCameraPosition(e,b),e.uniforms.add(new l.FloatPassUniform("worldToScreenPerDistanceRatio",(g,h)=>1/h.camera.perScreenPixelRatio)),e.code.add(a.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));d.varyings.add("vStippleDistance","float");b.stippleRequiresClamp&&d.varyings.add("vStippleDistanceLimits","vec2");b.stippleRequiresStretchMeasure&&d.varyings.add("vStipplePatternStretch","float");e.code.add(a.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${v};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);e.code.add(a.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);e.code.add(a.glsl`
    if (segmentLengthPseudoScreen >= ${u?"patternLength":"1e4"}) {
  `);e.uniforms.add(new l.FloatPassUniform("pixelRatio",(g,h)=>h.camera.pixelRatio));e.code.add(a.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${b.stippleRequiresStretchMeasure?a.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `);c.uniforms.add(new q.Texture2DUniform("stipplePatternTexture"));c.uniforms.add(new f.FloatUniform("stipplePatternSDFNormalizer"));c.uniforms.add(new f.FloatUniform("stipplePatternTextureSize"));c.uniforms.add(new f.FloatUniform("stipplePatternPixelSizeInv"));c.code.add(a.glsl`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`);c.code.add(a.glsl`
    float getStippleSDF(out bool isClamped) {
      ${b.stippleRequiresClamp?a.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:a.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${b.stippleScaleWithLineWidth?a.glsl`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${b.stippleRequiresStretchMeasure?a.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:a.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${b.stippleScaleWithLineWidth?a.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:a.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `);b.stippleOffColorEnabled?(c.uniforms.add(new p.Float4PassUniform("stippleOffColor",g=>r.ensureColor4(g.stippleOffColor))),c.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):c.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}const v=a.glsl.float(.4);k.LineStipple=function(d,b){d.constants.add("stippleAlphaColorDiscard","float",.001);d.constants.add("stippleAlphaHighlightDiscard","float",.5);b.stippleEnabled?t(d,b):d.fragment.code.add(a.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});