// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers"],function(d,h,k){function e(b){b.forEach(({target:c})=>{h.forceUpdate(c)})}const f=new Set;let a;const g={childList:!0};d.connectConditionalSlotComponent=function(b){a||(a=k.createObserver("mutation",e));a.observe(b.el,g)};d.disconnectConditionalSlotComponent=function(b){f.delete(b.el);e(a.takeRecords());a.disconnect();for(const [c]of f.entries())a.observe(c,g)}});