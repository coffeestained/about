/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import e from"../../input/gamepad/GamepadInputDevice.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";let i=class extends t{constructor(o){super(o),this.enabled=!0,this.device=null,this.mode="pan",this.tiltDirection="forward-down",this.velocityFactor=1}};o([r({type:Boolean,nonNullable:!0})],i.prototype,"enabled",void 0),o([r({type:e})],i.prototype,"device",void 0),o([r({type:["pan","zoom"],nonNullable:!0})],i.prototype,"mode",void 0),o([r({type:["forward-down","forward-up"],nonNullable:!0})],i.prototype,"tiltDirection",void 0),o([r({type:Number,nonNullable:!0})],i.prototype,"velocityFactor",void 0),i=o([s("esri.views.navigation.gamepad.GamepadSettings")],i);const p=i;export{p as default};
