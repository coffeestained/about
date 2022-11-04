"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3018],{74395:(e,t,n)=>{n.d(t,{B:()=>a});var r=n(76506),i=n(88994),s=n(92482);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.P(9,(0,r.h)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,r)=>{e[t++]=r})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,s.e)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){!function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]}(t),e.search(o,n)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},56761:(e,t,n)=>{n.d(t,{F:()=>h});var r=n(60991),i=n(75067),s=n(92143),o=n(71252),a=n(53326),l=n(92482),u=n(40267),c=n(74395),d=n(44722);class h{constructor(e){this.geometryInfo=e,this._boundsStore=new c.B,this._featuresById=new Map,this._markedIds=new Set,this.events=new i.Z,this.featureAdapter=d.o}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,o.i)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const r of e){const e=this._boundsStore.get(r.objectId);e&&t((0,a.C)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}toArray(){return Array.from(this._featuresById.values())}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s.L.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let i;if(this._markedIds.add(t),n?(e.displayId=n.displayId,i=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,o.i)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,o.a)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);i=(0,u.k)((0,o.i)(i)?i:(0,l.c)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.i)(i)&&this._boundsStore.set(t,i),this._featuresById.set(t,e)}_remove(e){return(0,o.i)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},88994:(e,t,n)=>{n.d(t,{P:()=>a});var r=n(76506),i=n(71252),s=n(6906),o=n(98576);class a{constructor(e=9,t){this.compareMinX=d,this.compareMinY=h,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),w.prune(),b.prune(),x.prune(),F.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const r=this._toBBox;if(g(e,n))for(w.clear();n;){for(let i=0,s=n.children.length;i<s;i++){const s=n.children[i],o=n.leaf?r(s):s;g(e,o)&&(n.leaf?t(s):f(e,o)?this._all(s,t):w.push(s))}n=w.pop()}}collides(e){let t=this.data;const n=this._toBBox;if(!g(e,t))return!1;for(w.clear();t;){for(let r=0,i=t.children.length;r<i;r++){const i=t.children[r],s=t.leaf?n(i):i;if(g(e,s)){if(t.leaf||f(e,s))return!0;w.push(i)}}t=w.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(e){if(!e)return this;let t,n=this.data,s=null,o=0,a=!1;const l=this._toBBox(e);for(x.clear(),F.clear();n||x.length>0;){if(n||(n=(0,i.b)(x.pop()),s=x.data[x.length-1],o=F.pop()??0,a=!0),n.leaf&&(t=(0,r.i)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),x.push(n),this._condense(x),this;a||n.leaf||!f(n,l)?s?(o++,n=s.children[o],a=!1):n=null:(x.push(n),F.push(o),o=0,s=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(b.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else b.pushArray(n.children);n=b.pop()??null}}_build(e,t,n,r){const i=n-t+1;let s=this._maxEntries;if(i<=s){const r=new v(e.slice(t,n+1));return l(r,this._toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(s)),s=Math.ceil(i/s**(r-1)));const o=new T([]);o.height=r;const a=Math.ceil(i/s),u=a*Math.ceil(Math.sqrt(s));_(e,t,n,u,this.compareMinX);for(let i=t;i<=n;i+=u){const t=Math.min(i+u-1,n);_(e,i,t,a,this.compareMinY);for(let n=i;n<=t;n+=a){const i=Math.min(n+a-1,t);o.children.push(this._build(e,n,i,r-1))}}return l(o,this._toBBox),o}_chooseSubtree(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){let n,r=1/0,o=1/0;for(let a=0,l=t.children.length;a<l;a++){const l=t.children[a],u=p(l),c=(i=e,s=l,(Math.max(s.maxX,i.maxX)-Math.min(s.minX,i.minX))*(Math.max(s.maxY,i.maxY)-Math.min(s.minY,i.minY))-u);c<o?(o=c,r=u<r?u:r,n=l):c===o&&u<r&&(r=u,n=l)}t=n||t.children[0]}var i,s;return t}_insert(e,t,n){const r=this._toBBox,i=n?e:r(e);x.clear();const s=this._chooseSubtree(i,this.data,t,x);for(s.children.push(e),c(s,i);t>=0&&x.data[t].children.length>this._maxEntries;)this._split(x,t),t--;this._adjustParentBBoxes(i,x,t)}_split(e,t){const n=e.data[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);const s=this._chooseSplitIndex(n,i,r);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(s,n.children.length-s),a=n.leaf?new v(o):new T(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=new T([e,t]),this.data.height=e.height+1,l(this.data,this._toBBox)}_chooseSplitIndex(e,t,n){let r,i,s;r=i=1/0;for(let o=t;o<=n-t;o++){const t=u(e,0,o,this._toBBox),a=u(e,o,n,this._toBBox),l=m(t,a),c=p(t)+p(a);l<r?(r=l,s=o,i=c<i?c:i):l===r&&c<i&&(i=c,s=o)}return s}_chooseSplitAxis(e,t,n){const r=e.leaf?this.compareMinX:d,i=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);const i=this._toBBox,s=u(e,0,t,i),o=u(e,n-t,n,i);let a=y(s)+y(o);for(let r=t;r<n-t;r++){const t=e.children[r];c(s,e.leaf?i(t):t),a+=y(s)}for(let r=n-t-1;r>=t;r--){const t=e.children[r];c(o,e.leaf?i(t):t),a+=y(o)}return a}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)c(t.data[r],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],s=i.children;s.splice((0,r.i)(s,n,s.length,i.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,r,i){i||(i=new v([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s,o=t;o<n;o++)s=e.children[o],c(i,e.leaf?r(s):s);return i}function c(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function y(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){const n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function f(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,r,s){const a=[t,n];for(;a.length;){const t=(0,i.b)(a.pop()),n=(0,i.b)(a.pop());if(t-n<=r)continue;const l=n+Math.ceil((t-n)/r/2)*r;(0,o.q)(e,l,n,t,s),a.push(n,l,l,t)}}const w=new s.P,b=new s.P,x=new s.P,F=new s.P({deallocator:void 0});class S extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new r.P}}class v extends S{constructor(e){super(),this.children=e,this.leaf=!0}}class T extends S{constructor(e){super(),this.children=e,this.leaf=!1}}},3018:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(60991),i=n(92143),s=n(71252),o=n(50406),a=n(60947),l=n(40267),u=n(56761),c=n(24251),d=n(50815),h=n(90995),p=n(77358),y=n(34344),m=n(1709);n(76506),n(71552),n(31450),n(40642),n(12047),n(21972),n(60474),n(66396),n(17533),n(86656),n(6540),n(91306),n(91055),n(34250),n(19657),n(6906),n(2906),n(32422),n(21801),n(73796),n(97714),n(91597),n(86787),n(35132),n(89623),n(84069),n(44567),n(98380),n(92896),n(75067),n(53326),n(92482),n(82426),n(29794),n(74395),n(88994),n(98576),n(44722),n(1623),n(53785),n(57251),n(95587),n(89914),n(65775),n(12381),n(73173),n(82058),n(88762),n(32101),n(92624),n(92847),n(77314),n(91700),n(95533),n(94751),n(74569),n(22781),n(42318),n(71435),n(30831),n(72274),n(5777),n(81716),n(66774),n(63683),n(94479),n(48027),n(54174),n(59465),n(45702),n(51127),n(30776),n(70514),n(14249),n(60217),n(89219),n(92653),n(85056),n(82933),n(15324),n(58085),n(55585),n(97546),n(9801),n(53523),n(42911),n(46826),n(45433),n(54732);class f{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,n=await(0,y.Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,h.v)(n),(0,o.k_)(e);const r=(0,h.c)(n,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,a.e)(this._queryEngine.spatialReference,a.W))for(const e of r)(0,s.i)(e.geometry)&&(e.geometry=(0,l.b)((0,c.p)((0,l.c)(e.geometry,this._queryEngine.geometryType,!1,!1),a.W,this._queryEngine.spatialReference)));let i=1;for(const e of r){const n={};(0,p.m)(this._fieldsIndex,n,e.attributes,!0),e.attributes=n,null==e.attributes[t]&&(e.objectId=e.attributes[t]=i++)}return r}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:n,getFeatureOutputFormat:r,spatialReference:i,fields:a,geometryType:l,featureType:c,objectIdField:h,customParameters:p}=e;this._featureType=c,this._customParameters=p,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._fieldsIndex=new m.Z(a),await this._checkProjection(i),(0,o.k_)(t),this._queryEngine=new d.Q({fields:a,geometryType:l,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:i,timeInfo:null,featureStore:new u.F({geometryType:l,hasM:!1,hasZ:!1})});const y=await this._snapshotFeatures((0,s.u)(t.signal));return this._queryEngine.featureStore.addMany(y),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new r.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,o.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,o.D_)(e)||i.L.getLogger("esri.layers.WFSLayer").error(new r.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,c.c)(a.W,e)}catch{throw new r.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}},9801:(e,t,n)=>{n.d(t,{f:()=>l,t:()=>a}),n(76506);var r=n(53523),i=n(42911),s=n(46826),o=n(45433);const a={key:"type",base:i.Z,typeMap:{range:o.Z,"coded-value":r.Z,inherited:s.Z}};function l(e){if(!e||!e.type)return null;switch(e.type){case"range":return o.Z.fromJSON(e);case"codedValue":return r.Z.fromJSON(e);case"inherited":return s.Z.fromJSON(e)}return null}},54732:(e,t,n)=>{n.d(t,{k:()=>r});const r=new(n(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},90995:(e,t,n)=>{n.d(t,{c:()=>F,g:()=>a,i:()=>x,v:()=>b});var r=n(60991),i=n(16204),s=n(14249);const o={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function a(e){return o[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function p(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return f(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)f(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){y(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return _(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;y(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n);return e}(e,t,n)}}function y(e,t,n){const r=h(t);d(r)?f(e,r,n):g(e,r,n)}function m(e,t,n){const r=h(t);d(r)?g(e,r,n):f(e,r,n)}function f(e,t,n){for(const r of t)_(e,r,n);e.lengths.push(t.length)}function g(e,t,n){for(let r=t.length-1;r>=0;r--)_(e,t[r],n);e.lengths.push(t.length)}function _(e,t,n){const[r,i,s]=t;e.coords.push(r,i),n.hasZ&&e.coords.push(s||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function b(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!i.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function x(e,t={}){const n=[],r=new Set,i=new Set;let o,d=!1,h=null,p=!1,{geometryType:y=null}=t,m=!1;for(const t of l(e)){const{geometry:e,properties:s,id:l}=t;if((!e||(y||(y=a(e.type)),a(e.type)===y))&&(d||(d=c(u(e))),p||(p=null!=l,p&&(o=typeof l,h=Object.keys(s).filter((e=>s[e]===l)))),p&&null!=l&&(h.length>1?h=h.filter((e=>s[e]===l)):1===h.length&&(h=s[h[0]]===l?h:[])),!m&&s)){let e=!0;for(const t in s){if(r.has(t))continue;const o=s[t];if(null==o){e=!1,i.add(t);continue}const a=w(o);"unknown"!==a?(i.delete(t),r.add(t),n.push({name:t,alias:t,type:a})):i.add(t)}m=e}}const f=h&&1===h.length&&h[0]||null;if(f)for(const e of n)if(e.name===f&&(0,s.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:d,objectIdFieldName:f,objectIdFieldType:o,unknownFields:Array.from(i)}}function F(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const s of e){const{geometry:e,properties:o,id:l}=s;if(e&&a(e.type)!==n)continue;const u=o||{};let c=u[r]??null;r&&null!=l&&!u[r]&&(u[r]=c=l);const d=new i.a(e?p(new i.O,e,t):null,u,null,c);yield d}}(l(e),t))}},44722:(e,t,n)=>{n.d(t,{o:()=>o});var r=n(71252),i=n(71331),s=n(16204);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,r.a)(e.centroid)&&(e.centroid=(0,i.g)(new s.O,e.geometry,t.hasZ,t.hasM)),e.centroid)}},77358:(e,t,n)=>{n.d(t,{a:()=>l,c:()=>c,l:()=>f,m:()=>h,s:()=>m});var r=n(71252),i=n(60947),s=n(14249);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const d=new Set;function h(e,t,n,r=!1,i){d.clear();for(const o in n){const a=e.get(o);if(!a)continue;const u=n[o],c=p(a,u);if(c!==u&&i&&i.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:u,sanitizedValue:c}}),d.add(a.name),a&&(r||a.editable)){const e=(0,s.Qc)(a,c);if(e)return l((0,s.vP)(e,a,c));t[a.name]=c}}for(const t of e.requiredFields)if(!d.has(t.name))return l(`missing required field "${t.name}"`);return null}function p(e,t){let n=t;return"string"==typeof t&&(0,s.H7)(e)?n=parseFloat(t):null!=t&&(0,s.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,s.Pz)(n)}let y;function m(e,t){if(!e||!(0,i.j)(t))return e;if("rings"in e||"paths"in e){if((0,r.a)(y))throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function f(e,t){!(0,i.j)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,r.a)(y)&&(y=await Promise.all([n.e(3361),n.e(3981)]).then(n.bind(n,43981)).then((e=>e.g))),y}()}},30788:(e,t,n)=>{function r(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*i(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*i(n,e)}}n.d(t,{i:()=>i,v:()=>r})},34344:(e,t,n)=>{n.d(t,{Bm:()=>B,FU:()=>_,M8:()=>g,be:()=>F,eB:()=>S,ft:()=>x}),n(74569);var r=n(82058),i=n(60991),s=n(21972),o=n(71252),a=n(50406),l=n(32101),u=n(1623),c=n(60947),d=n(22781),h=n(90995),p=n(30788),y=n(97546),m=n(21801);n(91306),n(76506),n(92143),n(31450),n(71552),n(40642),n(73796),n(12047),n(60474),n(66396),n(17533),n(86656),n(6540),n(91055),n(34250),n(19657),n(6906),n(97714),n(2906),n(84069),n(91597),n(86787),n(35132),n(89623),n(44567),n(98380),n(92896),n(32422),n(57251),n(88762),n(82426),n(29794),n(53785),n(95587),n(89914),n(65775),n(12381),n(73173),n(92482),n(92624),n(92847),n(14249),n(60217),n(59465),n(9801),n(53523),n(42911),n(46826),n(45433),n(54732);const f=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,g="__esri_wfs_id__";async function _(e,t){const n=function(e){const t=M(e);!function(e){const t=e.firstElementChild.getAttribute("version");if(t&&"2.0.0"!==t)throw new i.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: 2.0.0`)}(t),P(t);const n=t.firstElementChild,r=(0,s.d)((0,p.i)(n,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{const t=parseInt(e.textContent.match(/(?<wkid>\d+$)/i)?.groups?.wkid,10);Number.isNaN(t)||n.add(t)};return(0,p.v)(e,{Name:e=>{const{name:n,prefix:r}=E(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,r,i;for(const s of e.children)switch(s.localName){case"LowerCorner":[t,n]=s.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,i]=s.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:i,spatialReference:c.W}}(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}}));return{operations:b(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:"2.0.0",...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,l.$U)(e)&&((0,l.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,l.hO)(t.operations.DescribeFeatureType.url)),(0,l.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,l.hO)(t.operations.GetFeature.url)))}(e,n),n}const w=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function b(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,p.v)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute("xlink:href")}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute("xlink:href")}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute("xlink:href")}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;w.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new i.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,o.a)(n.GetFeature.outputFormat))throw new i.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function x(e,t,n){return(0,s.f)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function F(e,t,n,r={}){const{featureType:s,extent:l}=await async function(e,t,n,r={}){const{spatialReference:s=c.Z.WGS84}=r,a=e.readFeatureTypes(),l=t?x(a,t,n):a.next().value;if((0,o.a)(l))throw t?new i.Z("wfs-layer:feature-type-not-found",`The type '${t}' could not be found in the service`):new i.Z("wfs-layer:empty-service","The service is empty");let d=new m.Z({...l.extent,spatialReference:s});if(!(0,c.e)(s,c.W))try{await(0,u.iQ)(c.W,s,void 0,r),d=(0,u.iV)(d,c.W)}catch{throw new i.Z("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:d,spatialReference:s,featureType:l}}(e,t,n,r),{fields:d,geometryType:h,swapXY:p,objectIdField:y,geometryField:f}=await async function(e,t,n={}){const[r,s]=await(0,a.as)([T(e.operations.DescribeFeatureType.url,t,n),v(e,t,n)]);if(r.error||s.error)throw new i.Z("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:r.error||s.error});const{fields:l,errors:u}=r.value,c=r.value.geometryType||s.value.geometryType,d=s.value.swapXY;if((0,o.a)(c))throw new i.Z("wfs-layer:unknown-geometry-type",`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:c,fields:l,errors:u});return{...S(l),geometryType:c,swapXY:d}}(e,s.typeName,r);return{url:e.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:d,geometryField:f,geometryType:h,objectIdField:y,spatialReference:r.spatialReference??c.Z.WGS84,extent:l,swapXY:p,wfsCapabilities:e,customParameters:r.customParameters}}function S(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new y.Z({name:"__esri_wfs_id__",type:"oid",alias:"__esri_wfs_id__"}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function v(e,t,n={}){let i,s=!1;const[o,a]=await Promise.all([B(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),(0,r.default)(e.operations.GetFeature.url,{responseType:"text",query:C(t,void 0,{...n,count:1}),signal:n?.signal})]),l="FeatureCollection"===o.type&&o.features[0]?.geometry;if(l){let e;switch(i=d.f.fromJSON((0,h.g)(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(a.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),i=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===i&&(s=!0)}}return{geometryType:i,swapXY:s}}async function T(e,t,n){return function(e,t){const{name:n}=E(e),r=M(t);P(r);const a=(0,s.f)((0,p.i)(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:E(e.getAttribute("type")).name})}),(({name:e})=>e===n));if((0,o.i)(a)){const e=(0,s.f)((0,p.i)(r.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===a.typeName));if((0,o.i)(e))return function(e){const t=[],n=[];let r;const s=(0,p.i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const o of s){const s=o.getAttribute("name");if(!s)continue;let a,l;if(o.hasAttribute("type")?a=E(o.getAttribute("type")).name:(0,p.v)(o,{simpleType:{restriction:e=>(a=E(e.getAttribute("base")).name,{maxLength:e=>{l=+e.getAttribute("value")}})}}),!a)continue;const u="true"===o.getAttribute("nillable");let c=!1;switch(a.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new y.Z({name:s,alias:s,type:"integer",nullable:u}));break;case"float":case"double":case"decimal":n.push(new y.Z({name:s,alias:s,type:"double",nullable:u}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new y.Z({name:s,alias:s,type:"string",nullable:u,length:l??255}));break;case"datetime":case"date":n.push(new y.Z({name:s,alias:s,type:"date",nullable:u,length:l??36}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new i.Z("wfs-layer:unknown-geometry-type",`geometry type '${a}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new i.Z("wfs-layer:unknown-field-type",`Unknown field type '${a}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new y.Z({name:s,alias:s,type:"geometry",nullable:u}))}for(const e of n)if("integer"===e.type&&!e.nullable&&I.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:r,fields:n,errors:t}}(e)}throw new i.Z("wfs-layer:feature-type-not-found",`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:"2.0.0",TYPENAME:t,...n?.customParameters},signal:n?.signal})).data)}const I=new Set(["objectid","fid"]);async function B(e,t,n,s){let{data:o}=await(0,r.default)(e,{responseType:"text",query:C(t,n,s),signal:s?.signal});o=o.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(s?.dateFields?.length){const e=new Set(s.dateFields);return JSON.parse(o,((t,n)=>{return e.has(t)?function(e){const t=f.exec(e);if(!t)return null;const n=t.groups,r=+n.year,i=+n.month-1,s=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),l=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(l>59)return null;const u=n.ms??"0",c=u?+u.padEnd(3,"0").substring(0,3):0;let d;if(n.isUTC)d=Date.UTC(r,i,s,o,a,l,c);else if(n.offsetSign){const e=+n.offsetHours,t=+n.offsetMinutes;d=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,i,s,o,a,l,c)}else d=new Date(r,i,s,o,a,l,c).getTime();return Number.isNaN(d)?null:d}(r=n)??function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(r):n;var r}))}return JSON.parse(o)}catch(e){throw new i.Z("wfs-layer:malformed-json","Error while parsing the response",{response:o,error:e})}}function C(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}function M(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function E(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function P(e){let t,n;if((0,p.v)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new i.Z(`wfs-layer:${t}`,n)}},53523:(e,t,n)=>{n.d(t,{Z:()=>y});var r,i=n(29768),s=n(76506),o=n(34250),a=(n(91306),n(59465)),l=n(17533),u=n(12047),c=n(42911);n(92143),n(31450),n(71552),n(40642),n(60474),n(66396),n(86656),n(60991),n(57251),n(6540),n(21972),n(91055),n(19657),n(6906),n(50406);let d=r=class extends u.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};var h;(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,o.Cb)({type:[String,Number],json:{write:!0}})],d.prototype,"code",void 0),d=r=(0,i._)([(0,l.j)("esri.layers.support.CodedValue")],d);let p=h=class extends c.Z{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new h({codedValues:(0,s.d9)(this.codedValues),name:this.name})}};(0,i._)([(0,o.Cb)({type:[d],json:{write:!0}})],p.prototype,"codedValues",void 0),(0,i._)([(0,a.e)({codedValue:"coded-value"})],p.prototype,"type",void 0),p=h=(0,i._)([(0,l.j)("esri.layers.support.CodedValueDomain")],p);const y=p},42911:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(29768),i=n(57251),s=n(12047),o=n(34250),a=(n(76506),n(91306),n(59465)),l=n(17533);n(71552),n(21972),n(60474),n(66396),n(86656),n(92143),n(31450),n(40642),n(91055),n(6540),n(19657),n(6906),n(50406),n(60991);const u=new i.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends s.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,a.e)(u)],c.prototype,"type",void 0),c=(0,r._)([(0,l.j)("esri.layers.support.Domain")],c);const d=c},97546:(e,t,n)=>{n.d(t,{Z:()=>f});var r,i=n(29768),s=n(57251),o=n(12047),a=n(34250),l=(n(76506),n(91306)),u=n(59465),c=n(97714),d=n(17533),h=n(9801),p=n(54732);n(71552),n(21972),n(60474),n(66396),n(86656),n(92143),n(31450),n(40642),n(91055),n(6540),n(19657),n(6906),n(50406),n(60991),n(53523),n(42911),n(46826),n(45433);const y=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends o.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?y.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,i._)([(0,a.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"description",void 0),(0,i._)([(0,c.r)("description")],m.prototype,"readDescription",null),(0,i._)([(0,a.Cb)({types:h.t,json:{read:{reader:h.f},write:!0}})],m.prototype,"domain",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,i._)([(0,a.Cb)({type:l.I,json:{write:!0}})],m.prototype,"length",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,i._)([(0,u.e)(p.k)],m.prototype,"type",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"valueType",void 0),(0,i._)([(0,c.r)("valueType",["description"])],m.prototype,"readValueType",null),m=r=(0,i._)([(0,d.j)("esri.layers.support.Field")],m);const f=m},46826:(e,t,n)=>{n.d(t,{Z:()=>u});var r,i=n(29768),s=(n(92143),n(91306),n(76506),n(34250),n(59465)),o=n(17533),a=n(42911);n(31450),n(71552),n(40642),n(60474),n(66396),n(86656),n(60991),n(57251),n(6540),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406);let l=r=class extends a.Z{constructor(e){super(e),this.type="inherited"}clone(){return new r}};(0,i._)([(0,s.e)({inherited:"inherited"})],l.prototype,"type",void 0),l=r=(0,i._)([(0,o.j)("esri.layers.support.InheritedDomain")],l);const u=l},45433:(e,t,n)=>{n.d(t,{Z:()=>c});var r,i=n(29768),s=n(34250),o=(n(76506),n(91306),n(59465)),a=n(17533),l=n(42911);n(92143),n(31450),n(71552),n(40642),n(60474),n(66396),n(86656),n(60991),n(57251),n(6540),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406);let u=r=class extends l.Z{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new r({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,i._)([(0,s.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],u.prototype,"maxValue",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],u.prototype,"minValue",void 0),(0,i._)([(0,o.e)({range:"range"})],u.prototype,"type",void 0),u=r=(0,i._)([(0,a.j)("esri.layers.support.RangeDomain")],u);const c=u}}]);