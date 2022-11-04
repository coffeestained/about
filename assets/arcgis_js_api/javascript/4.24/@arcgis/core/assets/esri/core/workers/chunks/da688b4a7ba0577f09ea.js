"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8258,3981],{43981:(e,t,n)=>{n.r(t),n.d(t,{g:()=>o});var r=n(33361),i=n(77314);const o=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:function(e){return r.G.extendedSpatialReferenceInfo(e)},clip:function(e,t,n){return r.G.clip(i.j,e,t,n)},cut:function(e,t,n){return r.G.cut(i.j,e,t,n)},contains:function(e,t,n){return r.G.contains(i.j,e,t,n)},crosses:function(e,t,n){return r.G.crosses(i.j,e,t,n)},distance:function(e,t,n,o){return r.G.distance(i.j,e,t,n,o)},equals:function(e,t,n){return r.G.equals(i.j,e,t,n)},intersects:function(e,t,n){return r.G.intersects(i.j,e,t,n)},touches:function(e,t,n){return r.G.touches(i.j,e,t,n)},within:function(e,t,n){return r.G.within(i.j,e,t,n)},disjoint:function(e,t,n){return r.G.disjoint(i.j,e,t,n)},overlaps:function(e,t,n){return r.G.overlaps(i.j,e,t,n)},relate:function(e,t,n,o){return r.G.relate(i.j,e,t,n,o)},isSimple:function(e,t){return r.G.isSimple(i.j,e,t)},simplify:function(e,t){return r.G.simplify(i.j,e,t)},convexHull:function(e,t,n=!1){return r.G.convexHull(i.j,e,t,n)},difference:function(e,t,n){return r.G.difference(i.j,e,t,n)},symmetricDifference:function(e,t,n){return r.G.symmetricDifference(i.j,e,t,n)},intersect:function(e,t,n){return r.G.intersect(i.j,e,t,n)},union:function(e,t,n=null){return r.G.union(i.j,e,t,n)},offset:function(e,t,n,o,s,u,c){return r.G.offset(i.j,e,t,n,o,s,u,c)},buffer:function(e,t,n,o,s=!1){return r.G.buffer(i.j,e,t,n,o,s)},geodesicBuffer:function(e,t,n,o,s,u,c){return r.G.geodesicBuffer(i.j,e,t,n,o,s,u,c)},nearestCoordinate:function(e,t,n,o=!0){return r.G.nearestCoordinate(i.j,e,t,n,o)},nearestVertex:function(e,t,n){return r.G.nearestVertex(i.j,e,t,n)},nearestVertices:function(e,t,n,o,s){return r.G.nearestVertices(i.j,e,t,n,o,s)},rotate:function(e,t,n,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const o=r.G.rotate(t,n,i);return o.spatialReference=e,o},flipHorizontal:function(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(t,n);return i.spatialReference=e,i},flipVertical:function(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(t,n);return i.spatialReference=e,i},generalize:function(e,t,n,o,s){return r.G.generalize(i.j,e,t,n,o,s)},densify:function(e,t,n,o){return r.G.densify(i.j,e,t,n,o)},geodesicDensify:function(e,t,n,o,s=0){return r.G.geodesicDensify(i.j,e,t,n,o,s)},planarArea:function(e,t,n){return r.G.planarArea(i.j,e,t,n)},planarLength:function(e,t,n){return r.G.planarLength(i.j,e,t,n)},geodesicArea:function(e,t,n,o){return r.G.geodesicArea(i.j,e,t,n,o)},geodesicLength:function(e,t,n,o){return r.G.geodesicLength(i.j,e,t,n,o)}},Symbol.toStringTag,{value:"Module"}))},68258:(e,t,n)=>{n.r(t),n.d(t,{executeGEOperation:()=>i});var r=n(43981);function i(e){return(0,r.g[e.operation])(...e.parameters)}n(33361),n(77314)},77314:(e,t,n)=>{n.d(t,{j:()=>r});const r={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const r=new i(e.getPointX(t),e.getPointY(t),n),o=e.hasZ(t),s=e.hasM(t);return o&&(r.z=e.getPointZ(t)),s&&(r.m=e.getPointM(t)),r},exportPolygon:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new u(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const r=e.hasZ(t),i=e.hasM(t),o=new c(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(r){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o}};class i{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class o{constructor(e,t,n,r){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class s{constructor(e,t,n,r){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class u{constructor(e,t,n,r){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class c{constructor(e,t,n,r,i){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}}}]);