// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/DictionaryLoader".split(" "),function(l,e,m,g,c,u,q,v,w,x,r){var p;c=p=function(h){function n(a){a=h.call(this,a)||this;a.config=null;a.fieldMap=null;a.scaleExpression=null;a.scaleExpressionTitle=
null;a.url=null;a.type="dictionary";return a}l._inheritsLoose(n,h);var d=n.prototype;d.writeData=function(a,b){a&&(b.scalingExpressionInfo={expression:a,returnType:"number"})};d.writeVisualVariables=function(a,b,f,k){null!=k&&k.origin||h.prototype.writeVisualVariables.call(this,a,b,f,k)};d.clone=function(){return new p({config:m.clone(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:m.clone(this.fieldMap),url:m.clone(this.url),visualVariables:m.clone(this.visualVariables)})};
d.getSymbolAsync=function(){var a=l._asyncToGenerator(function*(b,f){return this._loader.getSymbolAsync(b,f)});return function(b,f){return a.apply(this,arguments)}}();d.collectRequiredFields=function(){var a=l._asyncToGenerator(function*(b,f){yield this.collectVVRequiredFields(b,f);this.scaleExpression&&(yield v.collectArcadeFieldNames(b,f,this.scaleExpression));for(const k in this.fieldMap){const t=this.fieldMap[k];f.has(t)&&b.add(t)}});return function(b,f){return a.apply(this,arguments)}}();d.getSymbol=
function(){return null};d.getSymbols=function(){return[]};d.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")};d.getMeshHash=function(){return`${this.url}-${JSON.stringify(this.fieldMap)}`};d.getSymbolFields=function(){return this._loader.getSymbolFields()};l._createClass(n,[{key:"_loader",get:function(){return new r.DictionaryLoader(this.url,this.config,this.fieldMap)}},{key:"arcadeRequired",get:function(){return!0}}]);return n}(x.VisualVariablesMixin(w));
e.__decorate([g.property({type:r.DictionaryLoader})],c.prototype,"_loader",null);e.__decorate([g.property({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c.prototype,"config",void 0);e.__decorate([g.property({type:Object,json:{write:!0}})],c.prototype,"fieldMap",void 0);e.__decorate([g.property({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c.prototype,"scaleExpression",void 0);e.__decorate([q.writer("scaleExpression")],c.prototype,
"writeData",null);e.__decorate([g.property({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(h){return{enabled:!!h&&!!this.scaleExpression}}}}})],c.prototype,"scaleExpressionTitle",void 0);e.__decorate([g.property({type:String,json:{write:!0}})],c.prototype,"url",void 0);e.__decorate([q.writer("visualVariables")],c.prototype,"writeVisualVariables",null);return c=p=e.__decorate([u.subclass("esri.renderers.DictionaryRenderer")],
c)});