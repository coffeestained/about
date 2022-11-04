// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./basicInterfaces ./BoundingInfo ./ContentObject ./ContentObjectType ./geometryDataUtils ./Util ./VertexAttribute".split(" "),function(r,t,u,p,v,q,w,n,x,f){function y(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const g of e)if(65536<=g)return e;return new Uint16Array(e)}q=function(e){function g(a,c=[],d=p.PrimitiveType.Triangle,h=-1){var b=e.call(this)||this;b._primitiveType=d;b.edgeIndicesLength=
h;b.type=w.ContentObjectType.Geometry;b._vertexAttributes=new Map;b._indices=new Map;b._boundingInfo=null;for(const [k,m]of a)m&&b._vertexAttributes.set(k,{...m});if(null==c||0===c.length){a=b._vertexAttributes.values().next().value;a=null==a?0:a.data.length/a.size;c=n.generateDefaultIndexArray(a);b.edgeIndicesLength=0>b.edgeIndicesLength?a:b.edgeIndicesLength;for(const k of b._vertexAttributes.keys())b._indices.set(k,c)}else for(const [k,m]of c)m&&(b._indices.set(k,y(m)),k===f.VertexAttribute.POSITION&&
(b.edgeIndicesLength=0>b.edgeIndicesLength?b._indices.get(k).length:b.edgeIndicesLength));return b}t._inheritsLoose(g,e);var l=g.prototype;l.cloneShallow=function(){const a=new g([],void 0,this._primitiveType,void 0),{_vertexAttributes:c,_indices:d}=a;this._vertexAttributes.forEach((h,b)=>{c.set(b,h)});this._indices.forEach((h,b)=>{d.set(b,h)});a.screenToWorldRatio=this.screenToWorldRatio;a._boundingInfo=this._boundingInfo;return a};l.getMutableAttribute=function(a){(a=this._vertexAttributes.get(a))&&
!a.exclusive&&(a.data=Array.from(a.data),a.exclusive=!0);return a};l.computeAttachmentOrigin=function(a){return this.primitiveType===p.PrimitiveType.Triangle?this._computeAttachmentOriginTriangles(a):this._computeAttachmentOriginPoints(a)};l._computeAttachmentOriginTriangles=function(a){const c=this.indices.get(f.VertexAttribute.POSITION),d=this.vertexAttributes.get(f.VertexAttribute.POSITION);return n.computeAttachmentOriginTriangles(d,c,a)};l._computeAttachmentOriginPoints=function(a){const c=this.indices.get(f.VertexAttribute.POSITION),
d=this.vertexAttributes.get(f.VertexAttribute.POSITION);return n.computeAttachmentOriginPoints(d,c,a)};l.invalidateBoundingInfo=function(){this._boundingInfo=null};l._calculateBoundingInfo=function(){const a=this.indices.get(f.VertexAttribute.POSITION);if(0===a.length)return null;const c=this.primitiveType===p.PrimitiveType.Triangle?3:1;x.assert(0===a.length%c,"Indexing error: "+a.length+" not divisible by "+c);const d=n.generateDefaultIndexArray(a.length/c),h=this.vertexAttributes.get(f.VertexAttribute.POSITION);
return new v.BoundingInfo(d,c,a,h)};t._createClass(g,[{key:"vertexAttributes",get:function(){return this._vertexAttributes}},{key:"indices",get:function(){return this._indices}},{key:"indexCount",get:function(){const a=this._indices.values().next().value;return a?a.length:0}},{key:"primitiveType",get:function(){return this._primitiveType}},{key:"faceCount",get:function(){return this.indexCount/3}},{key:"boundingInfo",get:function(){u.isNone(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo());
return this._boundingInfo}}]);return g}(q.ContentObject);r.Geometry=q;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});