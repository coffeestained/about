// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../core/maybe ./vec3f64 ../views/2d/engine/imagery/enums ../views/3d/webgl-engine/core/shaderLibrary/output/BlendOptions ../views/3d/webgl-engine/core/shaderLibrary/raster/Colormap.glsl ../views/3d/webgl-engine/core/shaderLibrary/raster/Common.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/BackgroundGrid.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TileBlendInput ../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl ./BlendLayers.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/BlendModes.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(l,r,C,D,m,E,F,v,G,t,H,n,I,J,K,w,L,h,g,x,e,M,y){function z(a){const c=new M.ShaderBuilder;c.include(H.TileComposite);c.include(v.Common);c.include(F.Colormap);a.tileBlendInput===t.TileBlendInput.GridComposite&&(c.extensions.add("GL_OES_standard_derivatives"),c.fragment.include(G.BackgroundGrid));const b=a.tileBlendInput===t.TileBlendInput.ColorComposite;b&&c.fragment.uniforms.add(new L.Float3PassUniform("backgroundColor",f=>f.backgroundColor));a.baseOpacityMode!==n.BaseOpacityMode.One&&c.fragment.uniforms.add(new h.FloatPassUniform("baseOpacity",
f=>f.baseOpacity));const d=a.baseOpacityMode===n.BaseOpacityMode.OnBaseLayer,u=a.baseOpacityMode===n.BaseOpacityMode.OnBackground||a.baseOpacityMode===n.BaseOpacityMode.OnBaseLayer,p=a.blendMode!==E.LayerBlendMode.Normal;c.fragment.include(I.BlendModes,a);const k=a.tileBlendInput!==t.TileBlendInput.LayerOnly;if(p&&!k||d)c.fragment.uniforms.add(new y.Texture2DPassUniform("fboColor",f=>f.fboTexture)),c.fragment.uniforms.add(new h.FloatPassUniform("tileSize",f=>C.isSome(f.fboTexture)?f.fboTexture.descriptor.width:
1));c.fragment.code.add(e.glsl`
    vec4 applyBackgroundBlend(vec4 layerColor) {
      ${k||d?e.glsl`
          vec4 bgColor = ${d?e.glsl`texture2D(fboColor, gl_FragCoord.xy / tileSize)`:b?e.glsl`vec4(backgroundColor, 1.0)`:e.glsl`gridColor(vuv)`};
          ${u?e.glsl`bgColor *= baseOpacity;`:""}`:""}
      ${p?e.glsl`
            vec3 pmColorLayer = layerColor.rgb * layerColor.a;
            vec4 fboTex = ${k?e.glsl`bgColor;`:e.glsl`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${d?" * baseOpacity":""};`}
            vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
            return applyBlendMode(pmColorLayer.rgb, layerColor.a * u_opacity, Cb, fboTex.a);`:k||d?e.glsl`
            float composeAlpha = layerColor.a * u_opacity;
            vec4 pmColorLayer = vec4(layerColor.rgb, 1.0);
            return mix(bgColor, pmColorLayer, composeAlpha);`:e.glsl`
            return layerColor * layerColor.a * u_opacity;`}
    }
  `);a.colorizerType===m.RasterColorizerType.Stretch?N(c,a):a.colorizerType===m.RasterColorizerType.Lut?c.fragment.code.add(e.glsl`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`):a.colorizerType===m.RasterColorizerType.Hillshade&&O(c,a);return c}function N(a,c){a.fragment.uniforms.add([new x.IntegerPassUniform("u_bandCount",d=>d.symbolizer.u_bandCount),new g.FloatsPassUniform("u_minCutOff",d=>d.symbolizer.u_minCutOff,3),new g.FloatsPassUniform("u_maxCutOff",d=>d.symbolizer.u_maxCutOff,3),new g.FloatsPassUniform("u_factor",d=>d.symbolizer.u_factor,3),new h.FloatPassUniform("u_minOutput",d=>d.symbolizer.u_minOutput),new h.FloatPassUniform("u_maxOutput",d=>d.symbolizer.u_maxOutput),
new K.BooleanPassUniform("u_useGamma",d=>d.symbolizer.u_useGamma),new g.FloatsPassUniform("u_gamma",d=>d.symbolizer.u_gamma,3),new g.FloatsPassUniform("u_gammaCorrection",d=>d.symbolizer.u_gammaCorrection,3),new h.FloatPassUniform("u_opacity",d=>d.common.u_opacity)]);a.fragment.code.add(e.glsl`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);const b=c.applyColormap?e.glsl`gl_FragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:e.glsl`gl_FragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;a.fragment.code.add(e.glsl`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${c.stretchType===m.RasterColorizerStretchType.Noop?e.glsl`
        gl_FragColor = applyBackgroundBlend(currentPixel);`:e.glsl`
        if (currentPixel.a == 0.0) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }
        if (u_bandCount == 1) {
          float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          ${b}
        } else {
          float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
          float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
          gl_FragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
        }`}
      }`)}function O(a,c){a=a.fragment;a.uniforms.add([new y.Texture2DPassUniform("u_image",b=>b.u_image),new x.IntegerPassUniform("u_hillshadeType",b=>b.symbolizer.u_hillshadeType),new g.FloatsPassUniform("u_sinZcosAs",b=>b.symbolizer.u_sinZcosAs,6),new g.FloatsPassUniform("u_sinZsinAs",b=>b.symbolizer.u_sinZsinAs,6),new g.FloatsPassUniform("u_cosZs",b=>b.symbolizer.u_cosZs,6),new g.FloatsPassUniform("u_weights",b=>b.symbolizer.u_weights,6),new w.Float2PassUniform("u_factor",b=>b.symbolizer.u_factor),
new h.FloatPassUniform("u_minValue",b=>b.symbolizer.u_minValue),new h.FloatPassUniform("u_maxValue",b=>b.symbolizer.u_maxValue),new w.Float2PassUniform("u_srcImageSize",b=>b.common.u_srcImageSize)]);a.include(J.ColorConversion);a.code.add(e.glsl`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec3 hsv = rgb2hsv(colormap(vec4(val, val, val, 1.0), false).rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv) * alpha, alpha);
}`);a.code.add(e.glsl`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);c=c.applyColormap?e.glsl`gl_FragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:e.glsl`hillshade *= alpha;
gl_FragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;a.code.add(e.glsl`
    void main() {
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      //mirror edge pixels
      vec2 axy = vec2(-1.0, -1.0);
      vec2 bxy = vec2(0.0, -1.0);
      vec2 cxy = vec2(1.0, -1.0);
      vec2 dxy = vec2(-1.0, 0.0);
      vec2 fxy = vec2(1.0, 0.0);
      vec2 gxy = vec2(-1.0, 1.0);
      vec2 hxy = vec2(0.0, 1.0);
      vec2 ixy = vec2(1.0, 1.0);
      vec2 onePixel = 1.0 / u_srcImageSize;
      if (pixelLocation.s < onePixel.s) {
        axy[0] = 1.0;
        dxy[0] = 1.0;
        gxy[0] = 1.0;
      }
      if (pixelLocation.t < onePixel.t) {
        axy[1] = 1.0;
        bxy[1] = 1.0;
        cxy[1] = 1.0;
      }
      if (pixelLocation.s > 1.0 - onePixel.s) {
        cxy[0] = -1.0;
        fxy[0] = -1.0;
        ixy[0] = -1.0;
      }
      if (pixelLocation.t > 1.0 - onePixel.t) {
        gxy[1] = -1.0;
        hxy[1] = -1.0;
        ixy[1] = -1.0;
      }

      // calculate hillshade
      vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
      vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
      vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
      vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
      vec4 ve = texture2D(u_image, pixelLocation);
      vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
      vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
      vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
      vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);

      // calculate the rate of z change along the x, y, and diagonal direction
      float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
      float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
      float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
      float hillshade = 0.0;

      // traditional single light source
      if (u_hillshadeType == 0){
        float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
        float z = (u_cosZs[0] + cosDelta) / dzd;
        if (z < 0.0)  z = 0.0;
        hillshade = z;
      } else {
        // multi-directional with 6 light sources
        for (int k = 0; k < 6; k++) {
        float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
        float z = (u_cosZs[k] + cosDelta) / dzd;
        if (z < 0.0) z = 0.0;
        hillshade = hillshade + z * u_weights[k];
        if (k == 5) break;
        }
      }

      // set color
      float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
      alpha *= u_opacity;
      ${c}
    }
  `)}let q=function(a){function c(b,d,u,p,k,f){b=a.call(this,b,p,k)||this;b.colormap=d;b.symbolizer=u;b.u_colormap=f;b.backgroundColor=D.ZEROS;b.fboTexture=null;b.baseOpacity=1;return b}r._inheritsLoose(c,a);return c}(v.CommonPassParameters),A=function(a){function c(){return a.apply(this,arguments)||this}r._inheritsLoose(c,a);return c}(q),B=function(a){function c(){return a.apply(this,arguments)||this}r._inheritsLoose(c,a);return c}(q);const P=Object.freeze(Object.defineProperty({__proto__:null,ColorizerUniforms:q,
ColorizerStretchUniforms:A,ColorizerHillshadeUniforms:B,build:z},Symbol.toStringTag,{value:"Module"}));l.ColorizerHillshadeUniforms=B;l.ColorizerStretchUniforms=A;l.ColorizerUniforms=q;l.RasterColorizer=P;l.build=z});