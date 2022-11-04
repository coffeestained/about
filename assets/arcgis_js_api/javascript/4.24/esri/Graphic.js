// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./geometry ./PopupTemplate ./symbols ./core/Clonable ./core/JSONSupport ./core/maybe ./core/uid ./core/accessorSupport/decorators/property ./core/arrayUtils ./core/has ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/subclass ./geometry/support/jsonUtils".split(" "),function(n,e,r,t,u,c,v,m,p,f,x,y,z,w,q){c=function(k){function g(...a){a=k.call(this,...a)||this;a.isAggregate=!1;a.layer=null;a.popupTemplate=null;a.sourceLayer=
null;Object.defineProperty(n._assertThisInitialized(a),"uid",{value:p.generateUID(),configurable:!0});return a}n._inheritsLoose(g,k);var d=g.prototype;d.normalizeCtorArgs=function(a,b,h,l){return a&&!a.declaredClass?a:{geometry:a,symbol:b,attributes:h,popupTemplate:l}};d.getEffectivePopupTemplate=function(a=!1){if(this.popupTemplate)return this.popupTemplate;for(const b of[this.sourceLayer,this.layer])if(b){if("popupTemplate"in b&&b.popupTemplate)return b.popupTemplate;if(a&&"defaultPopupTemplate"in
b&&m.isSome(b.defaultPopupTemplate))return b.defaultPopupTemplate}return null};d.getAttribute=function(a){return this.attributes&&this.attributes[a]};d.setAttribute=function(a,b){if(this.attributes){const h=this.getAttribute(a);this.attributes[a]=b;this._notifyLayer("attributes",h,b,a)}else this.attributes={[a]:b},this._notifyLayer("attributes",void 0,b,a)};d.getObjectId=function(){return this.sourceLayer?"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):
null:null};d.toJSON=function(){var a=this.aggregateGeometries;if(m.isSome(a)){var b={};for(const h in a){const l=a[h];l&&(b[h]=l.toJSON())}a=0!==Object.keys(b).length?b:null}else a=null;return{aggregateGeometries:a,geometry:m.isSome(this.geometry)?this.geometry.toJSON():null,symbol:m.isSome(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}};d.notifyGeometryChanged=function(){this._notifyLayer("geometry",this.geometry,
this.geometry)};d.notifyMeshTransformChanged=function(){m.isSome(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)};d._notifyLayer=function(a,b,h,l){this.layer&&"graphicChanged"in this.layer&&(b={graphic:this,property:a,oldValue:b,newValue:h},"attributes"===a&&(b.attributeName=l),this.layer.graphicChanged(b))};n._createClass(g,[{key:"aggregateGeometries",set:function(a){const b=this._get("aggregateGeometries");JSON.stringify(b)!==
JSON.stringify(a)&&this._set("aggregateGeometries",a)}},{key:"attributes",set:function(a){const b=this._get("attributes");b!==a&&(this._set("attributes",a),this._notifyLayer("attributes",b,a))}},{key:"geometry",set:function(a){const b=this._get("geometry");b!==a&&(this._set("geometry",a),this._notifyLayer("geometry",b,a))}},{key:"symbol",set:function(a){const b=this._get("symbol");b!==a&&(this._set("symbol",a),this._notifyLayer("symbol",b,a))}},{key:"visible",set:function(a){const b=this._get("visible");
b!==a&&(this._set("visible",a),this._notifyLayer("visible",b,a))}}]);return g}(c.ClonableMixin(v.JSONSupport));e.__decorate([f.property({value:null,json:{read:function(k){if(!k)return null;const g={};for(const d in k){const a=q.fromJSON(k[d]);a&&(g[d]=a)}return 0!==Object.keys(g).length?g:null}}})],c.prototype,"aggregateGeometries",null);e.__decorate([f.property({value:null})],c.prototype,"attributes",null);e.__decorate([f.property({value:null,types:r.geometryTypes,json:{read:q.fromJSON}})],c.prototype,
"geometry",null);e.__decorate([f.property({type:Boolean})],c.prototype,"isAggregate",void 0);e.__decorate([f.property({clonable:"reference"})],c.prototype,"layer",void 0);e.__decorate([f.property({type:t})],c.prototype,"popupTemplate",void 0);e.__decorate([f.property({clonable:"reference"})],c.prototype,"sourceLayer",void 0);e.__decorate([f.property({value:null,types:u.symbolTypes})],c.prototype,"symbol",null);e.__decorate([f.property({type:Boolean,value:!0})],c.prototype,"visible",null);c=e.__decorate([w.subclass("esri.Graphic")],
c);(c||(c={})).generateUID=p.generateUID;return c});