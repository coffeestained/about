// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/asyncUtils ../../core/Error ../../core/promiseUtils ../../core/uuid ../../portal/support/resourceUtils".split(" "),function(n,g,p,v,q,w,x){function h(){h=g._asyncToGenerator(function*(a,c,d){if(c&&c.resources){var k=c.portalItem===a.portalItem?new Set(a.paths):new Set;a.paths.length=0;a.portalItem=c.portalItem;var f=new Set(c.resources.toKeep.map(b=>b.resource.path)),r=new Set,e=[];f.forEach(b=>{k.delete(b);a.paths.push(b)});for(const b of c.resources.toUpdate)if(k.delete(b.resource.path),
f.has(b.resource.path)||r.has(b.resource.path)){const {resource:y,content:z,finish:A,error:B}=b,t=x.getSiblingOfSameTypeI(y,w.generateUUID());a.paths.push(t.path);e.push(u({resource:t,content:z,finish:A,error:B},d))}else a.paths.push(b.resource.path),e.push(C(b,d)),r.add(b.resource.path);for(const b of c.resources.toAdd)e.push(u(b,d)),a.paths.push(b.resource.path);k.forEach(b=>{b=c.portalItem.resourceFromPath(b);e.push(b.portalItem.removeResource(b).catch(()=>{}))});if(0!==e.length&&(f=yield q.eachAlways(e),
q.throwIfAborted(d),d=f.filter(b=>"error"in b).map(b=>b.error),0<d.length))throw new v("save:resources","Failed to save one or more resources",{errors:d});}});return h.apply(this,arguments)}function u(a,c){return l.apply(this,arguments)}function l(){l=g._asyncToGenerator(function*(a,c){c=yield p.result(a.resource.portalItem.addResource(a.resource,a.content,c));if(!0===c.ok)a.finish&&a.finish(a.resource);else throw a.error&&a.error(c.error),c.error;});return l.apply(this,arguments)}function C(a,c){return m.apply(this,
arguments)}function m(){m=g._asyncToGenerator(function*(a,c){c=yield p.result(a.resource.update(a.content,c));if(!0===c.ok)a.finish(a.resource);else throw a.error(c.error),c.error;});return m.apply(this,arguments)}n.saveResources=function(a,c,d){return h.apply(this,arguments)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});