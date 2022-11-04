// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutputOptions ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/AlphaDiscard.glsl ../util/View.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(u,f,g,h,k,l,v,w,x,m,n,p,y,c,q){u.DefaultMaterialAuxiliaryPasses=
function(b,a){const r=b.vertex.code,t=b.fragment.code,d=a.hasModelTransformation;if(a.output===f.ShaderOutput.Depth||a.output===f.ShaderOutput.Shadow)p.addProjViewLocalOrigin(b,a),b.include(h.Transform,{linearDepth:!0,hasModelTransformation:d}),b.include(l.TextureCoordinateAttribute,a),b.include(m.VisualVariables,a),b.include(w.OutputDepth,a),b.include(g.SliceDraw,a),b.vertex.uniforms.add(new y.Float2PassUniform("nearFar",(e,z)=>z.camera.nearFar)),b.varyings.add("depth","float"),a.hasColorTexture&&
b.fragment.uniforms.add(new q.Texture2DPassUniform("tex",e=>e.texture)),r.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${d?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),b.include(n.DiscardOrAdjustAlphaPass,a),t.add(c.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `);a.output===f.ShaderOutput.Normal&&(p.addProjViewLocalOrigin(b,a),b.include(h.Transform,{linearDepth:!1,hasModelTransformation:d}),b.include(k.NormalAttribute,a),b.include(v.VertexNormal,a),b.include(l.TextureCoordinateAttribute,a),b.include(m.VisualVariables,a),a.hasColorTexture&&b.fragment.uniforms.add(new q.Texture2DPassUniform("tex",e=>e.texture)),b.varyings.add("vPositionView","vec3"),r.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${a.normalType===k.NormalAttributeType.Attribute?c.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${d?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),b.include(g.SliceDraw,a),b.include(n.DiscardOrAdjustAlphaPass,a),t.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${a.normalType===k.NormalAttributeType.ScreenDerivative?c.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `));a.output===f.ShaderOutput.Highlight&&(p.addProjViewLocalOrigin(b,a),b.include(h.Transform,{linearDepth:!1,hasModelTransformation:d}),b.include(l.TextureCoordinateAttribute,a),b.include(m.VisualVariables,a),a.hasColorTexture&&b.fragment.uniforms.add(new q.Texture2DPassUniform("tex",e=>e.texture)),r.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${d?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),b.include(g.SliceDraw,a),b.include(n.DiscardOrAdjustAlphaPass,a),b.include(x.OutputHighlight),t.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});