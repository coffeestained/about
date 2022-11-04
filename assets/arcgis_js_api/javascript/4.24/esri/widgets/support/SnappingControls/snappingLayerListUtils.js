// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../LayerList/support/layerListUtils"],function(b,g,h){const f=a=>d(a)||e(a),d=a=>{if(!("type"in a))return!1;switch(a.type){case "feature":case "geojson":case "csv":case "graphics":case "wfs":return!0;default:return!1}},e=a=>{const c=h.getNormalizedChildLayerProperty(a);if(a.hasOwnProperty(c)&&g.isSome(a[c]))for(const k of a[c])if(f(k))return!0;return!1};b.isValidSnappingLayer=f;b.isValidSnappingLayerGroup=e;b.isValidSnappingLayerSource=d;Object.defineProperties(b,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});