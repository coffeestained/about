// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(l,g,q,r,t,u,v,w,x,m,n,b,y,h){function p(a){const c=new y.ShaderBuilder;c.include(r.Transform);c.include(t.VertexColor,a);c.include(v.LineStipple,a);x.addProjViewLocalOrigin(c,a);const {vertex:d,fragment:k}=c;a.stippleEnabled&&(c.attributes.add(h.VertexAttribute.UV0,"vec2"),c.attributes.add(h.VertexAttribute.AUXPOS1,"vec3"),d.uniforms.add(new m.Float4PassUniform("viewport",(e,f)=>f.camera.fullViewport)));c.attributes.add(h.VertexAttribute.POSITION,"vec3");c.varyings.add("vpos","vec3");d.code.add(b.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`);a.stippleEnabled&&(d.code.add(b.glsl`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),a.draped?d.uniforms.add(new n.FloatPassUniform("worldToScreenRatio",(e,f)=>1/f.screenToPCSRatio)):d.code.add(b.glsl`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),d.code.add(b.glsl`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),a.draped?d.code.add(b.glsl`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):d.code.add(b.glsl`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),d.code.add(b.glsl`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`));d.code.add(b.glsl`}`);a.output===g.ShaderOutput.Highlight&&c.include(u.OutputHighlight);c.include(q.SliceDraw,a);k.uniforms.add(new n.FloatPassUniform("alphaCoverage",(e,f)=>Math.min(1,e.width*f.camera.pixelRatio)));a.hasVertexColors||k.uniforms.add(new m.Float4PassUniform("constantColor",e=>e.color));k.code.add(b.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${a.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${b.glsl.float(w.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===g.ShaderOutput.Color?b.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${a.output===g.ShaderOutput.Highlight?b.glsl`outputHighlight();`:""}
  }
  `);return c}const z=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:"Module"}));l.NativeLine=z;l.build=p});