// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/screenUtils","./previewUtils"],function(g,l,h,m){g.previewWebStyleSymbol=function(f,n,b){const k=f.thumbnail&&f.thumbnail.url;return k?l(k,{responseType:"image"}).then(a=>{a=a.data;var e=!/\\.svg$/i.test(a.src)&&b&&b.disableUpsampling,d=Math.max(a.width,a.height),c=b&&null!=b.maxSize?h.pt2px(b.maxSize):m.SymbolSizeDefaults.maxSize;e&&(c=Math.min(d,c));e="number"===typeof(null==b?void 0:b.size)?null==b?void 0:b.size:null;c=Math.min(c,null!=e?h.pt2px(e):
d);c!==d&&(d=0!==a.width&&0!==a.height?a.width/a.height:1,1<=d?(a.width=c,a.height=c/d):(a.width=c*d,a.height=c));return b&&b.node?(b.node.appendChild(a),b.node):a}):f.fetchSymbol().then(a=>n(a,b))};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});