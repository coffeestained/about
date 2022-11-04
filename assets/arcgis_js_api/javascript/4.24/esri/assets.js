// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./config ./request ./core/Error ./core/Logger ./core/urlUtils".split(" "),function(a,c,e,f,g,h){function d(b){if(!c.assetsPath)throw k.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new f("assets:path-not-set","config.assetsPath is not set");return h.join(c.assetsPath,b)}const k=g.getLogger("esri.assets");a.fetchAsset=function(b,l){return e(d(b),l)};a.getAssetUrl=d;Object.defineProperties(a,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});