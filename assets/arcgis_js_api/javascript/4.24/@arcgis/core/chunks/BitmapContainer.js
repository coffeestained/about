/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{b as e}from"./brushes.js";import{W as s}from"./enums4.js";import{W as r}from"./WGLContainer.js";class t extends r{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(r){const t=r.registerRenderPass({name:"bitmap",brushes:[e.bitmap],target:()=>this.children,drawPhase:s.MAP});return[...super.prepareRenderPasses(r),t]}}export{t as B};
