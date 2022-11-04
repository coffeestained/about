// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/PooledArray"],function(a,c){let g=function(){function d(){this.adds=new c;this.removes=new c;this.updates=new c({allocator:b=>b||new e,deallocator:b=>{b.renderGeometry=null;return b}})}var f=d.prototype;f.clear=function(){this.adds.clear();this.removes.clear();this.updates.clear()};f.prune=function(){this.adds.prune();this.removes.prune();this.updates.prune()};return d}(),e=function(){};a.ChangeSet=g;a.MaterialChangeSet=function(){this.adds=[];this.removes=[];this.updates=
[]};a.RenderGeometryUpdate=e;Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});