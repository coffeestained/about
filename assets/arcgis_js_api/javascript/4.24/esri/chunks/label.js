// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(f,m){function q(a,c){let b;const n=d=>{d.stopImmediatePropagation();d=d.composedPath();b=d.slice(d.indexOf(c),d.indexOf(a))};a.addEventListener("custom-element-ancestor-check",n,{once:!0});c.dispatchEvent(new CustomEvent("custom-element-ancestor-check",{composed:!0,bubbles:!0}));a.removeEventListener("custom-element-ancestor-check",n);return 0<b.filter(d=>d!==c&&d!==a).filter(d=>{var l;return null===(l=d.tagName)||void 0===l?void 0:l.includes("-")}).length}function p(a){var c=
a.el;var {id:b}=c;(b=b&&m.queryElementRoots(c,{selector:`${"calcite-label"}[for="${b}"]`}))?c=b:(b=m.closestElementCrossShadowBoundary(c,"calcite-label"),c=!b||q(b,c)?null:b);b=c;h.has(b)||!b&&e.has(a)||(c=r.bind(a),b?(a.labelEl=b,b=t.bind(a),h.set(a.labelEl,b),a.labelEl.addEventListener("calciteInternalLabelClick",b),e.delete(a),document.removeEventListener("calciteInternalLabelConnected",g.get(a)),k.set(a,c),document.addEventListener("calciteInternaLabelDisconnected",c)):e.has(a)||(c(),document.removeEventListener("calciteInternaLabelDisconnected",
k.get(a))))}function t(a){if(!this.disabled&&!this.el.contains(a.detail.sourceEvent.target))this.onLabelClick(a)}function u(){e.has(this)&&p(this)}function r(){e.add(this);const a=g.get(this)||u.bind(this);g.set(this,a);document.addEventListener("calciteInternalLabelConnected",a)}const h=new WeakMap,g=new WeakMap,k=new WeakMap,e=new Set;f.connectLabel=p;f.disconnectLabel=function(a){e.delete(a);document.removeEventListener("calciteInternalLabelConnected",g.get(a));document.removeEventListener("calciteInternaLabelDisconnected",
k.get(a));g.delete(a);k.delete(a);if(a.labelEl){var c=h.get(a.labelEl);a.labelEl.removeEventListener("calciteInternalLabelClick",c);h.delete(a.labelEl)}};f.getLabelText=function(a){var c,b;return a.label||(null===(b=null===(c=a.labelEl)||void 0===c?void 0:c.textContent)||void 0===b?void 0:b.trim())||""};f.labelConnectedEvent="calciteInternalLabelConnected";f.labelDisconnectedEvent="calciteInternaLabelDisconnected"});