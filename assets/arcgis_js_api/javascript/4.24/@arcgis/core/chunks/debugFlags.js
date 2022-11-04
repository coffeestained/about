/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import r from"../core/Accessor.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";let t=class extends r{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};o([s()],t.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),o([s()],t.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),t=o([e("esri.views.support.DebugFlags")],t);const E=new t;export{E as d};
