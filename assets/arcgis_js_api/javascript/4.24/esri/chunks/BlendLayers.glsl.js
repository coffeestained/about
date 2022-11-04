// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ../views/3d/webgl-engine/core/shaderLibrary/output/BlendOptions ../views/3d/webgl-engine/core/shaderLibrary/terrain/BackgroundGrid.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/BlendModes.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(b,t,u,v,w,x,y,l,c,z,q){function r(a){const d=new z.ShaderBuilder;var g=a.output===b.BlendLayersOutput.GridOnly;const m=a.output===b.BlendLayersOutput.GridComposite;var f=m||g,h=a.output===b.BlendLayersOutput.ColorOnly;const n=a.output===b.BlendLayersOutput.ColorComposite;var k=n||h;const p=m||n;d.include(w.TileComposite);k&&d.fragment.uniforms.add(new y.Float3PassUniform("backgroundColor",e=>e.backgroundColor));a.baseOpacityMode!==b.BaseOpacityMode.One&&d.fragment.uniforms.add(new l.FloatPassUniform("baseOpacity",
e=>e.baseOpacity));f&&(d.extensions.add("GL_OES_standard_derivatives"),d.fragment.include(v.BackgroundGrid));if(g||h)return d.fragment.code.add(c.glsl`
    void main() {
      gl_FragColor = ${h?c.glsl`vec4(backgroundColor, 1.0)`:c.glsl`gridColor(uv)`};
    }
  `),d;g=a.blendMode!==u.LayerBlendMode.Normal;f=a.baseOpacityMode===b.BaseOpacityMode.OnBaseLayer;h=a.baseOpacityMode===b.BaseOpacityMode.OnBackground||a.baseOpacityMode===b.BaseOpacityMode.OnBaseLayer;k=a.premultipliedSource;d.fragment.uniforms.add(new q.Texture2DPassUniform("tex",e=>e.texture));d.fragment.uniforms.add(new l.FloatPassUniform("opacity",e=>e.opacity));if(g||f||k)d.fragment.uniforms.add(new q.Texture2DPassUniform("fboColor",e=>e.fboTexture)),d.fragment.uniforms.add(new l.FloatPassUniform("tileSize",
e=>t.isSome(e.fboTexture)?e.fboTexture.descriptor.width:1));d.fragment.include(x.BlendModes,a);d.fragment.code.add(c.glsl`
    void main() {
      ${p||f||k?c.glsl`
      vec4 bgColor = ${n?c.glsl`vec4(backgroundColor, 1.0)`:m?c.glsl`gridColor(uv)`:c.glsl`texture2D(fboColor, gl_FragCoord.xy / tileSize)`};
      ${h?c.glsl`bgColor *= baseOpacity;`:""}`:""}
      vec4 colorLayer = texture2D(tex, uv);
      ${g?c.glsl`
          vec4 fboTex = ${p?c.glsl`bgColor;`:c.glsl`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${f?" * baseOpacity":""};`}
          vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
          gl_FragColor = applyBlendMode(colorLayer.rgb, colorLayer.a * opacity, Cb, fboTex.a);`:c.glsl`
          vec4 pmColorLayer = vec4(colorLayer.xyz, 1.0);
          float composeAlpha = colorLayer.a * opacity;
          gl_FragColor = ${k?c.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`:p||f?c.glsl`mix(bgColor, pmColorLayer, composeAlpha);`:c.glsl`pmColorLayer * composeAlpha;`}`}
    }
  `);return d}b.BlendLayersOutput=void 0;(function(a){a[a.Composite=0]="Composite";a[a.ColorOnly=1]="ColorOnly";a[a.GridOnly=2]="GridOnly";a[a.ColorComposite=3]="ColorComposite";a[a.GridComposite=4]="GridComposite";a[a.COUNT=5]="COUNT"})(b.BlendLayersOutput||(b.BlendLayersOutput={}));b.BaseOpacityMode=void 0;(function(a){a[a.One=0]="One";a[a.OnBackground=1]="OnBackground";a[a.OnBaseLayer=2]="OnBaseLayer";a[a.COUNT=3]="COUNT"})(b.BaseOpacityMode||(b.BaseOpacityMode={}));const A=Object.freeze(Object.defineProperty({__proto__:null,
get BlendLayersOutput(){return b.BlendLayersOutput},get BaseOpacityMode(){return b.BaseOpacityMode},build:r},Symbol.toStringTag,{value:"Module"}));b.BlendLayers=A;b.build=r});