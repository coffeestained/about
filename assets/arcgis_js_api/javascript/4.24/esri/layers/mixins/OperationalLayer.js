// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/read ../../core/accessorSupport/write ./operationalLayers ../support/commonProperties".split(" "),function(m,u,f,n,v,g,A,B,C,w,p,x,y,z,r){m.OperationalLayer=
c=>{c=function(l){function q(){var b=l.apply(this,arguments)||this;b.title=null;return b}u._inheritsLoose(q,l);var h=q.prototype;h.writeListMode=function(b,a,d,e){e&&"ground"===e.layerContainerType?a[d]=b:b&&y.willPropertyWrite(this,d,{},e)&&(a[d]=b)};h.writeOperationalLayerType=function(b,a,d,e){!b||e&&"tables"===e.layerContainerType||(a.layerType=b)};h.writeTitle=function(b,a){a.title=b||"Layer"};h.read=function(b,a){a&&(a.layer=this);x.readLoadable(this,b,d=>l.prototype.read.call(this,b,d),a)};
h.write=function(b,a){if(null!=a&&a.origin){const k=`${a.origin}/${a.layerContainerType||"operational-layers"}`;var d=z.supportedTypes[k];d=d&&d[this.operationalLayerType];"ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===k&&(d=!1);if(!d){var e;null==(e=a.messages)?void 0:e.push(new n("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${k}'`,{layer:this}));return null}}b=l.prototype.write.call(this,
b,{...a,layer:this});e=!!a&&!!a.messages&&!!a.messages.filter(k=>k instanceof n&&"web-document-write:property-required"===k.name).length;if(v.isBlobProtocol(null==b?void 0:b.url)){var t;null==a?void 0:null==(t=a.messages)?void 0:t.push(new n("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this}));return null}return!this.url&&e?null:b};h.beforeSave=function(){};return q}(c);f.__decorate([g.property({type:String,
json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],c.prototype,"id",void 0);f.__decorate([g.property(r.listMode)],c.prototype,"listMode",void 0);f.__decorate([p.writer("listMode")],c.prototype,"writeListMode",null);f.__decorate([g.property({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],c.prototype,"operationalLayerType",void 0);f.__decorate([p.writer("operationalLayerType")],
c.prototype,"writeOperationalLayerType",null);f.__decorate([g.property(r.opacity)],c.prototype,"opacity",void 0);f.__decorate([g.property({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],c.prototype,"title",void 0);f.__decorate([p.writer([void 0,"web-scene"],"title")],c.prototype,"writeTitle",null);f.__decorate([g.property({type:Boolean,json:{name:"visibility"}})],
c.prototype,"visible",void 0);return c=f.__decorate([w.subclass("esri.layers.mixins.OperationalLayer")],c)};m.isOperationalLayer=function(c){return"operationalLayerType"in c};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});