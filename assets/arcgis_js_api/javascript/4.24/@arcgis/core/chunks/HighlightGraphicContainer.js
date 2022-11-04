/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{W as s}from"./enums4.js";import{a as t}from"./BaseGraphicContainer.js";import{g as o}from"./enums.js";let i=class extends t{doRender(r){r.drawPhase===s.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,s=e.effects.highlight;s.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(o.COLOR_BUFFER_BIT),this._renderChildren(r,s.defines.concat(["highlightAll"])),s.draw(r),s.unbind()}};i=r([e("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;export{n as H};
