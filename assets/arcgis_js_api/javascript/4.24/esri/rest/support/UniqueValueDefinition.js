// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ClassificationDefinition".split(" "),function(f,c,d,b,l,m,h,k){b=function(g){function e(){var a=g.apply(this,arguments)||this;a.attributeField=null;a.attributeField2=null;a.attributeField3=null;a.fieldDelimiter=null;a.type="unique-value-definition";return a}f._inheritsLoose(e,
g);f._createClass(e,[{key:"uniqueValueFields",get:function(){const a=[];this.attributeField&&a.push(this.attributeField);this.attributeField2&&a.push(this.attributeField2);this.attributeField3&&a.push(this.attributeField3);return a}}]);return e}(k);c.__decorate([d.property()],b.prototype,"attributeField",void 0);c.__decorate([d.property()],b.prototype,"attributeField2",void 0);c.__decorate([d.property()],b.prototype,"attributeField3",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,
"fieldDelimiter",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"uniqueValueFields",null);c.__decorate([d.property()],b.prototype,"type",void 0);return b=c.__decorate([h.subclass("esri.rest.support.UniqueValueDefinition")],b)});