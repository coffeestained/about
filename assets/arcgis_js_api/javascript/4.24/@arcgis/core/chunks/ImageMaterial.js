/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{S as e,a as t,T as a,j as s,g as r,m as i,p as o,b as n,d as l,q as p,C as c,D as u,R as h,c as d,P as m,l as g,n as f,o as v}from"./glUtil3D.js";import{T,C}from"./basicInterfaces.js";import{o as _,D as P,P as y}from"./CameraSpace.glsl.js";import{G as S}from"./GLTextureMaterial.js";import{g as O,D as x,M as A,i as b,a as F}from"./Material.js";import{i as D,m as w,o as E,c as M,f as j,a as N,e as q,d as I,g as R,h as L}from"./OrderIndependentTransparency.js";import{R as U}from"./RenderSlot.js";import{_ as G}from"./tslib.es6.js";import{p as B}from"./ShaderTechniqueConfiguration.js";import{i as $}from"./maybe.js";import{O as W}from"./vec2f64.js";import{V as z}from"./VertexAttribute.js";import{B as H}from"./enums.js";const V=Object.freeze(Object.defineProperty({__proto__:null,build:function(u){const h=new e;t(h,u),h.include(a),h.attributes.add(z.POSITION,"vec3"),h.attributes.add(z.UV0,"vec2"),h.varyings.add("vpos","vec3"),u.hasMultipassTerrain&&h.varyings.add("depth","float");const{vertex:d,fragment:m}=h;return d.uniforms.add(new s("textureCoordinateScaleFactor",(e=>$(e.texture)&&$(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:W))),d.code.add(O`
    void main(void) {
      vpos = position;
      ${u.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),h.include(r,u),h.include(i,u),m.uniforms.add([new o("tex",(e=>e.texture)),new n("opacity",(e=>e.opacity))]),h.varyings.add("vTexCoord","vec2"),u.output===l.Alpha?m.code.add(O`
    void main() {
      discardBySlice(vpos);
      ${u.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${O.float(p)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(m.include(c),m.code.add(O`
    void main() {
      discardBySlice(vpos);
      ${u.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${O.float(p)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${u.transparencyPassType===T.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),h}},Symbol.toStringTag,{value:"Module"}));class Q extends d{initializeProgram(e){const t=Q.shader.get().build(this.configuration);return new m(e.rctx,t,x)}_setPipelineState(e,t){const a=this.configuration,s=e===T.NONE,r=e===T.FrontFace;return w({blending:a.output!==l.Color&&a.output!==l.Alpha||!a.transparent?null:s?k:E(e),culling:M(a.cullFace),depthTest:{func:j(e)},depthWrite:s?a.writeDepth&&N:q(e),colorWrite:I,stencilWrite:a.hasOccludees?g:null,stencilTest:a.hasOccludees?t?f:v:null,polygonOffset:s||r?null:R(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}Q.shader=new h(V,(()=>Promise.resolve().then((()=>V))));const k=D(H.ONE,H.ONE_MINUS_SRC_ALPHA);class J extends u{constructor(){super(...arguments),this.output=l.Color,this.cullFace=C.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=T.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}G([B({count:l.COUNT})],J.prototype,"output",void 0),G([B({count:C.COUNT})],J.prototype,"cullFace",void 0),G([B()],J.prototype,"hasSlicePlane",void 0),G([B()],J.prototype,"transparent",void 0),G([B()],J.prototype,"enableOffset",void 0),G([B()],J.prototype,"writeDepth",void 0),G([B()],J.prototype,"hasOccludees",void 0),G([B({count:T.COUNT})],J.prototype,"transparencyPassType",void 0),G([B()],J.prototype,"hasMultipassTerrain",void 0),G([B()],J.prototype,"cullAboveGround",void 0);class K extends A{constructor(e){super(e,new Y),this.supportsEdges=!0,this.techniqueConfig=new J}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<L,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,a,s,r,i,o){b(e,t,s,r,i,void 0,o)}requiresSlot(e,t){return e===U.DRAPED_MATERIAL||(_(t)===l.Highlight?e===U.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?U.TRANSPARENT_MATERIAL:U.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:U.OPAQUE_MATERIAL))}createGLMaterial(e){return e.output===l.Color||e.output===l.Alpha||e.output===l.Highlight?new X(e):void 0}createBufferWriter(){return new P(y)}}class X extends S{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(Q,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==l.Color&&this._output!==l.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class Y extends F{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=C.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{K as I};
