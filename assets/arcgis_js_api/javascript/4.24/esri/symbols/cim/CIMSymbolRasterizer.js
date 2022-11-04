// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../request ../../core/promiseUtils ../../core/screenUtils ../../core/string ../../geometry/support/jsonUtils ./cimAnalyzer ./CIMResourceManager ./Rasterizer ./TextRasterizer ./utils ../support/cimSymbolUtils ../support/Symbol3DAnchorPosition2D".split(" "),function(B,E,R,S,T,u,U,D,G,V,W,X,p,Y,Z){function aa(n){return(n?Object.keys(n):[]).map(r=>({name:r,alias:r,type:"string"===typeof n[r]?"esriFieldTypeString":"esriFieldTypeDouble"}))}
function ba(n){if(!(n&&n.data&&n.data.symbol))return null;switch(n.data.symbol.type){case "CIMPointSymbol":case "CIMTextSymbol":return"esriGeometryPoint";case "CIMLineSymbol":return"esriGeometryPolyline";case "CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function C(n,r,a,b){if("function"===typeof n.materialHash){const f=n.materialHash;r=f(r,a,b);n=G.analyzeCIMResource(n.cim,n.materialOverrides)}else r=n.materialHash,n=n.cim;return{analyzedCIM:n,hash:r}}B.GeometryStyle=void 0;
(function(n){n.Legend="legend";n.Preview="preview"})(B.GeometryStyle||(B.GeometryStyle={}));const F=(n,r,a)=>n&&n.targetSize?a?n.targetSize/u.pt2px(Math.max(a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):n.targetSize/r.referenceSize:n&&n.scaleFactor?n.scaleFactor:1,H={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,
100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};let ca=function(){function n(a,b){this._spatialReference=a;this._avoidSDF=b;this._resourceCache=new Map;this._pictureMarkerCache=
new Map;this._textRasterizer=new X;this._cimResourceManager=new V;this._rasterizer=new W(this._cimResourceManager)}var r=n.prototype;r.rasterizeCIMSymbolAsync=function(){var a=E._asyncToGenerator(function*(b,f,e,c,d,m,h,g){c=c||(f?null!=f.centroid?"esriGeometryPolygon":D.getJsonType(f.geometry):null)||ba(b);b=yield this.analyzeCIMSymbol(b,f?aa(f.attributes):null,e,c,g);return this.rasterizeCIMSymbol(b,f,c,d,m,h)});return function(b,f,e,c,d,m,h,g){return a.apply(this,arguments)}}();r.analyzeCIMSymbol=
function(){var a=E._asyncToGenerator(function*(b,f,e,c,d){const m=[];yield G.analyzeCIMSymbol(b.data,f?{geometryType:c,spatialReference:this._spatialReference,fields:f}:null,this._cimResourceManager,m,this._avoidSDF);T.throwIfAborted(d);let h;for(const g of m){if("CIMPictureMarker"===g.cim.type||"CIMPictureFill"===g.cim.type||"CIMPictureStroke"===g.cim.type)h||(h=[]),h.push(this._fetchPictureMarkerResource(g,d));e&&"text"===g.type&&"string"===typeof g.text&&g.text.includes("[")&&(g.text=p.createLabelOverrideFunction(e,
g.text,g.cim.textCase))}h&&(yield Promise.all(h));return m});return function(b,f,e,c,d){return a.apply(this,arguments)}}();r._fetchPictureMarkerResource=function(){var a=E._asyncToGenerator(function*(b,f){const e=b.materialHash;this._pictureMarkerCache.get(e)||(b=(yield S(b.cim.url,{responseType:"image",signal:f&&f.signal})).data,this._pictureMarkerCache.set(e,b))});return function(b,f){return a.apply(this,arguments)}}();r.rasterizeCIMSymbol=function(a,b,f,e,c,d){const m=[];for(const g of a){e&&"function"===
typeof e.scaleFactor&&(e.scaleFactor=e.scaleFactor(b,c,d));a=this._getRasterizedResource(g,b,f,e,c,d);if(!a)continue;let l=0,k=a.anchorX||0,q=a.anchorY||0,v=!1,t=0;var h=0;if("esriGeometryPoint"===f)if(h=F(e,g,null),t=p.evaluateValueOrFunction(g.offsetX,b,c,d)*h||0,h=p.evaluateValueOrFunction(g.offsetY,b,c,d)*h||0,"marker"===g.type)l=p.evaluateValueOrFunction(g.rotation,b,c,d)||0,v=g.rotateClockwise?g.rotateClockwise:!1;else if("text"===g.type){l=p.evaluateValueOrFunction(g.angle,b,c,d)||0;if(void 0!==
g.horizontalAlignment)switch(g.horizontalAlignment){case "left":k=-.5;break;case "right":k=.5;break;default:k=0}if(void 0!==g.verticalAlignment)switch(g.verticalAlignment){case "top":q=.5;break;case "bottom":q=-.5;break;case "baseline":q=-.25;break;default:q=0}}null!=a&&m.push({angle:l,rotateClockWise:v,anchorX:k,anchorY:q,offsetX:t,offsetY:h,rasterizedResource:a})}return this.getSymbolImage(m)};r.getSymbolImage=function(a){const b=document.createElement("canvas"),f=b.getContext("2d");var e=0,c=0,
d=0,m=0,h=[];for(var g=0;g<a.length;g++){var l=a[g],k=l.rasterizedResource;if(!k)continue;var q=k.size,v=l.offsetX;const I=l.offsetY,J=l.anchorX,K=l.anchorY,L=l.rotateClockWise||!1;l=l.angle;var t=u.pt2px(v)-q[0]*(.5+J);let y=u.pt2px(I)-q[1]*(.5+K),A=t+q[0];var x=y+q[1];if(l){L&&(l=-l);var w=Math.sin(l*Math.PI/180);const z=Math.cos(l*Math.PI/180);q=t*z-y*w;const M=t*w+y*z,N=t*z-x*w,O=t*w+x*z,P=A*z-x*w;x=A*w+x*z;const Q=A*z-y*w;w=A*w+y*z;t=Math.min(q,N,P,Q);y=Math.min(M,O,x,w);A=Math.max(q,N,P,Q);
x=Math.max(M,O,x,w)}e=t<e?t:e;c=y<c?y:c;d=A>d?A:d;m=x>m?x:m;t=f.createImageData(k.size[0],k.size[1]);t.data.set(new Uint8ClampedArray(k.image.buffer));h.push({offsetX:v,offsetY:I,rotateClockwise:L,angle:l,rasterizedImage:t,anchorX:J,anchorY:K})}b.width=d-e;b.height=m-c;a=-e;for(e=0;e<h.length;e++)c=h[e],d=this._imageDataToCanvas(c.rasterizedImage),g=a-c.rasterizedImage.width*(.5+c.anchorX),k=m-c.rasterizedImage.height*(.5-c.anchorY),c.angle?(v=(360-c.angle)*Math.PI/180,f.save(),f.translate(u.pt2px(c.offsetX),
-u.pt2px(c.offsetY)),f.translate(a,m),f.rotate(v),f.translate(-a,-m),f.drawImage(d,g,k),f.restore()):f.drawImage(d,g+u.pt2px(c.offsetX),k-u.pt2px(c.offsetY));h=new Z.Symbol3DAnchorPosition2D({x:a/b.width-.5,y:m/b.height-.5});return{imageData:0!==b.width&&0!==b.height?f.getImageData(0,0,b.width,b.height):f.createImageData(1,1),anchorPosition:h}};r._imageDataToCanvas=function(a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const b=this._imageDataCanvas,f=b.getContext("2d");
b.width=a.width;b.height=a.height;f.putImageData(a,0,0);return b};r._imageTo32Array=function(a,b,f,e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const c=this._imageDataCanvas,d=c.getContext("2d");c.width=b;c.height=f;d.drawImage(a,0,0,b,f);e&&(d.save(),e=new R(e),d.fillStyle=e.toHex(),d.globalCompositeOperation="multiply",d.fillRect(0,0,b,f),d.globalCompositeOperation="destination-atop",d.drawImage(a,0,0,b,f),d.restore());return new Uint32Array(d.getImageData(0,
0,b,f).data.buffer)};r._getRasterizedResource=function(a,b,f,e,c,d){var m=null;let h=null;if("esriGeometryPolyline"===f||"esriGeometryPolygon"===f){var g=e&&e.style?e.style:B.GeometryStyle.Legend;g="esriGeometryPolyline"===f?H.stroke[g]:H.fill[g];if("line"===a.type)if("CIMSolidStroke"===a.cim.type){({analyzedCIM:l,hash:k}=C(a,b,c,d));var l=this._embedCIMLayerInVectorMarker(l,g)}else{if("CIMPictureStroke"===a.cim.type){var k=p.evaluateValueOrFunction(a.width,b,c,d);b=p.evaluateValueOrFunction(a.color,
b,c,d);const {image:q,width:v,height:t}=this._getPictureResource(a,k,b);return this._rasterizePictureResource(a,q,v,t,g,k)}return null}else if("marker"===a.type){if("CIMPictureMarker"===a.cim.type){k=p.evaluateValueOrFunction(a.size,b,c,d);b=p.evaluateValueOrFunction(a.color,b,c,d);const {image:q,width:v,height:t}=this._getPictureResource(a,k,b);return this._rasterizePictureResource(a,q,v,t,g,k)}if("CIMVectorMarker"===a.cim.type)a.cim.offsetX=p.evaluateValueOrFunction(a.offsetX,b,c,d),a.cim.offsetY=
p.evaluateValueOrFunction(a.offsetY,b,c,d),a.cim.rotation=p.evaluateValueOrFunction(a.rotation,b,c,d),a.cim.markerPlacement=a.markerPlacement,{analyzedCIM:l}=C(a,b,c,d),k=U.numericHash(JSON.stringify(l)).toString(),l=this._embedCIMLayerInVectorMarker(l,g),m=p.evaluateValueOrFunction(a.size,b,c,d),h=a.path;else return null}else{if("text"===a.type)return null;if("fill"===a.type){if("CIMHatchFill"===a.cim.type||"CIMVectorMarker"===a.cim.type||"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type)return m=
a.cim.size||a.cim.height,"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type?{image:b,width:c,height:d}=this._getPictureResource(a,m,p.evaluateValueOrFunction(a.color,b,c,d)):({analyzedCIM:l,hash:k}=C(a,b,c,d),d=this._rasterizer.rasterizeJSONResource({cim:l,type:a.type,url:a.url,mosaicHash:k,size:m,path:h},1,this._avoidSDF),b=d.image,c=d.size[0],d=d.size[1]),this._rasterizePictureResource(a,b,c,d,g,null);if("CIMSolidFill"===a.cim.type)({analyzedCIM:l,hash:k}=C(a,b,c,d)),l=this._embedCIMLayerInVectorMarker(l,
g);else return null}}}else{if("text"===a.type)return a=this._rasterizeTextResource(a,b,e,c,d);({analyzedCIM:l,hash:k}=C(a,b,c,d));g=F(e,a,null);if("CIMPictureMarker"===a.cim.type){g*=p.evaluateValueOrFunction(a.size,b,c,d);const {image:q,width:v,height:t}=this._getPictureResource(a,g,p.evaluateValueOrFunction(a.color,b,c,d));return a={image:q,size:[v,t],sdf:!1,simplePattern:!1,anchorX:a.anchorPoint?a.anchorPoint.x:0,anchorY:a.anchorPoint?a.anchorPoint.y:0}}Y.scaleCIMMarker(l,g,{preserveOutlineWidth:!1})}k+=
f;e&&(k+=JSON.stringify(e));g=this._resourceCache;if(g.has(k))return g.get(k);a=this._rasterizer.rasterizeJSONResource({cim:l,type:a.type,url:a.url,mosaicHash:k,size:m,path:h},window.devicePixelRatio||1,this._avoidSDF);g.set(k,a);return a};r._rasterizeTextResource=function(a,b,f,e,c){var d=F(f,a,null);f=p.evaluateValueOrFunction(a.text,b,e,c);if(!f||0===f.length)return null;const m=p.evaluateValueOrFunction(a.fontName,b,e,c),h=p.evaluateValueOrFunction(a.style,b,e,c),g=p.evaluateValueOrFunction(a.weight,
b,e,c),l=p.evaluateValueOrFunction(a.decoration,b,e,c);d*=p.evaluateValueOrFunction(a.size,b,e,c);const k=p.evaluateValueOrFunction(a.horizontalAlignment,b,e,c),q=p.evaluateValueOrFunction(a.verticalAlignment,b,e,c),v=p.colorToArray(p.evaluateValueOrFunction(a.color,b,e,c)),t=p.colorToArray(p.evaluateValueOrFunction(a.outlineColor,b,e,c));a=p.evaluateValueOrFunction(a.outlineSize,b,e,c);return this._textRasterizer.rasterizeText(f,{color:v,size:d,horizontalAlignment:k,verticalAlignment:q,font:{family:m,
style:h,weight:g,decoration:l},halo:{size:a||0,color:t,style:h},pixelRatio:1,premultiplyColors:!this._avoidSDF})};r._rasterizePictureResource=function(a,b,f,e,c,d){const m=document.createElement("canvas");var h=m.getContext("2d");m.height=u.pt2px(Math.max(c.frame.ymax-c.frame.ymin,d));m.width=u.pt2px(c.frame.xmax-c.frame.xmin);f=h.createImageData(f,e);f.data.set(new Uint8ClampedArray(b.buffer));b=this._imageDataToCanvas(f);b=h.createPattern(b,"repeat");f=Math.cos((-a.cim.rotation||0)*Math.PI/180);
e=Math.sin((-a.cim.rotation||0)*Math.PI/180);b.setTransform({m11:f,m12:e,m21:-e,m22:f,m41:u.pt2px(a.cim.offsetX)||0,m42:u.pt2px(a.cim.offsetY)||0});a=c.canvasPaths;let g,l;if(D.isPolygon(a)){var k=a.rings;h.fillStyle=b;g=h.fill;l=["evenodd"]}else D.isPolyline(a)&&(k=a.paths,h.strokeStyle=b,h.lineWidth=d,g=h.stroke,k[0][0][1]=m.height/2,k[0][1][1]=m.height/2);h.beginPath();for(const q of k)if(d=q?q.length:0,1<d){k=q[0];h.moveTo(u.pt2px(k[0]),u.pt2px(k[1]));for(a=1;a<d;++a)k=q[a],h.lineTo(u.pt2px(k[0]),
u.pt2px(k[1]));h.closePath()}g.apply(h,l);h=h.getImageData(0,0,m.width,m.height);h=new Uint8Array(h.data);return{size:[m.width,m.height],image:new Uint32Array(h.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};r._getPictureResource=function(a,b,f){a=this._pictureMarkerCache.get(a.materialHash);if(!a)return null;const e=a.height/a.width,c=b?1<e?u.pt2px(b):u.pt2px(b)/e:a.width;b=b?1<e?u.pt2px(b)*e:u.pt2px(b):a.height;return{image:this._imageTo32Array(a,c,b,f),width:c,height:b}};r._embedCIMLayerInVectorMarker=
function(a,b){const f=D.isPolygon(b.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",e=b.frame;return{type:"CIMVectorMarker",frame:e,size:e.ymax-e.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:b.geometry,symbol:{type:f,symbolLayers:[a]}}]}};return n}();B.CIMSymbolRasterizer=ca;Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});