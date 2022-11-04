// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(k,l){let n=function(){function d(a){this._largestRange=null;this._parent=a;this._updateLargestRange()}var g=d.prototype;g.rangeCreated=function(a){if(!this._largestRange||a.count>this._largestRange.count)this._largestRange=a};g.rangeResized=function(a,b){if(a===this._largestRange)a.count<b&&this._updateLargestRange();else if(!this._largestRange||a.count>this._largestRange.count)this._largestRange=a};g.findBestRange=function(a){let b=
this._parent._freeHead,c=null;for(;null!==b;)b.count>=a&&(!c||b.count-a<c.count-a)&&(c=b),b=b.next;return c};g.findAdjacentRanges=function(a,b){let c=!0,e=!1,f=null,h=this._parent._freeHead;for(;c&&!e;){const m=null!==h?h.from:this._parent._size;a>=(null!==f?f.from+f.count:0)&&a+b<=m?(c=!1,e=!0):null!==h?(f=h,h=h.next):c=!1}return[f,h]};g._updateLargestRange=function(){let a=null,b=this._parent._freeHead;for(;null!==b;){if(!a||b.count>a.count)a=b;b=b.next}this._largestRange=a};l._createClass(d,[{key:"largestRange",
get:function(){return this._largestRange}}]);return d}(),p=function(){function d(a,b){this._allocated=0;this._size=a;this._freeHead=0<a?{from:0,count:a,prev:null,next:null}:null;this._bookKeeper=b||new n(this);this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}var g=d.prototype;g.allocate=function(a){const b=this._bookKeeper.findBestRange(a);if(null===b)return-1;const c=b.from,e=b.count;b.from+=a;b.count-=a;this._bookKeeper.rangeResized(b,c,e);this._allocated+=a;0===b.count&&(a=null!==
b.prev?this._freeHead:b.next,d._removeRange(b),this._freeHead=a);return c};g.free=function(a,b){const [c,e]=this._bookKeeper.findAdjacentRanges(a,b);a={from:a,count:b,prev:c,next:e};null!==c&&(c.next=a);null!==e&&(e.prev=a);this._bookKeeper.rangeCreated(a);this._allocated-=b;if(null!==e&&a.from+a.count===e.from){b=a.from;var f=a.count;d._fuse(a,e);d._removeRange(e);this._bookKeeper.rangeResized(a,b,f);this._bookKeeper.rangeResized(e,void 0,0)}null!==c&&c.from+c.count===a.from&&(b=c.from,f=c.count,
d._fuse(c,a),d._removeRange(a),this._bookKeeper.rangeResized(c,b,f),this._bookKeeper.rangeResized(a,void 0,0));this._freeHead=null!==a.prev?this._freeHead:a};d._removeRange=function(a){null!==a.prev?null!==a.next?(a.prev.next=a.next,a.next.prev=a.prev):a.prev.next=null:null!==a.next&&(a.next.prev=null)};d._fuse=function(a,b){a.count+=b.count;a.next=b.next;b.from+=b.count;b.count=0;null!==b.next&&(b.next.prev=a)};l._createClass(d,[{key:"fragmentation",get:function(){const a=this._size-this._allocated;
return 0===a?0:1-this._bookKeeper.largestRange.count/a}}]);return d}();k.FreeList=p;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});