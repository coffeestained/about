// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/Point ../../../../../geometry/support/aaBoundingRect ../../../../../layers/support/LOD ../../../../../layers/support/TileInfo".split(" "),
function(a,f,b,h,c,q,r,t,k,l,m,n,p){a.FeatureServiceTilesSimple=function(g){function e(d){d=g.call(this,d)||this;d.pointOfInterest=null;return d}f._inheritsLoose(e,g);f._createClass(e,[{key:"tiles",get:function(){return[{id:"0/0/0",level:0,row:0,col:0,extent:m.fromValues(-1E8,-1E8,1E8,1E8)}]}},{key:"tileInfo",get:function(){return new p({origin:new l({x:-1E8,y:1E8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new n({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}},
{key:"tileSize",get:function(){return this.tileInfo.size[0]}}]);return e}(h);b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,"tiles",null);b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,"tileInfo",null);b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,"tileSize",null);b.__decorate([c.property({constructOnly:!0})],a.FeatureServiceTilesSimple.prototype,"layer",void 0);b.__decorate([c.property()],a.FeatureServiceTilesSimple.prototype,
"pointOfInterest",void 0);a.FeatureServiceTilesSimple=b.__decorate([k.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],a.FeatureServiceTilesSimple);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});