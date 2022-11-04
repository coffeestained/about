"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1865],{49500:(e,t,n)=>{function o(e){return e=e||globalThis.location.hostname,m.some((t=>null!=e?.match(t)))}function l(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(a)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,{a:()=>l,i:()=>o});const s=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,a=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,s,r,/^jsapps.esri.com$/,i,a]},9075:(e,t,n)=>{n.d(t,{t:()=>d});var o=n(96467),l=n(60991),s=n(51589),r=n(62259),i=n(78548),a=n(77894),m=n(60669),c=n(11305),u=n(5909),y=n(44790),b=n(48208),f=n(48243);const p={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function d(e,t=p){if(!e)return{symbol:null};const{retainId:n=p.retainId,ignoreDrivers:d=p.ignoreDrivers,hasLabelingContext:g=p.hasLabelingContext,retainCIM:h=p.retainCIM}=t;let w;if((0,o.dU)(e)||e instanceof s.Z)w=e.clone();else if("cim"===e.type){const t=e.data?.symbol?.type;if("CIMPointSymbol"!==t)return{error:new l.Z("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})};w=h?e.clone():r.Z.fromCIMSymbol(e)}else if(e instanceof i.Z)w=a.Z.fromSimpleLineSymbol(e);else if(e instanceof m.Z)w=r.Z.fromSimpleMarkerSymbol(e);else if(e instanceof c.Z)w=r.Z.fromPictureMarkerSymbol(e);else if(e instanceof u.Z)w=y.Z.fromSimpleFillSymbol(e);else{if(!(e instanceof b.Z))return{error:new l.Z("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};w=g?f.Z.fromTextSymbol(e):r.Z.fromTextSymbol(e)}if(n&&"cim"!==w.type&&(w.id=e.id),d&&(0,o.dU)(w))for(let e=0;e<w.symbolLayers.length;++e)w.symbolLayers.getItemAt(e)._ignoreDrivers=!0;return{symbol:w}}},51865:(e,t,n)=>{n.r(t),n.d(t,{fetchSymbolFromStyle:()=>p,resolveWebStyleSymbol:()=>f});var o=n(96467),l=n(49500),s=n(60991),r=n(71252),i=n(32101),a=n(49900),m=n(38742),c=n(16218),u=n(34635),y=n(68714),b=n(61847);function f(e,t,n,o){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const o=y.S.replace(/\{SymbolName\}/gi,e.name),l=(0,r.i)(t.portal)?t.portal:a.Z.getDefault();return(0,y.r)(o,n).then((e=>{const t=(0,y.m)(e.data);return(0,c.im)(t,{portal:l,url:(0,i.mN)((0,i.Yd)(o)),origin:"portal-item"})}))}(e,t,o):(0,y.f)(e,t,o).then((l=>p(l,e.name,t,n,o))):Promise.reject(new s.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,n,f,p){const d=e.data,g=n&&(0,r.i)(n.portal)?n.portal:a.Z.getDefault(),h={portal:g,url:(0,i.mN)(e.baseUrl),origin:"portal-item"},w=d.items.find((e=>e.name===t));if(!w){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new s.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let S=(0,m.f)((0,y.s)(w,f),h),Z=w.thumbnail&&w.thumbnail.href;const C=w.thumbnail&&w.thumbnail.imageData;(0,l.i)()&&(S=(0,l.a)(S),Z=(0,l.a)(Z));const v={portal:g,url:(0,i.mN)((0,i.Yd)(S)),origin:"portal-item"};return(0,y.r)(S,p).then((l=>{const s="cimRef"===f?(0,y.m)(l.data):l.data,r=(0,c.im)(s,v);if(r&&(0,o.dU)(r)){if(Z){const e=(0,m.f)(Z,h);r.thumbnail=new b.T({url:e})}else C&&(r.thumbnail=new b.T({url:`data:image/png;base64,${C}`}));e.styleUrl?r.styleOrigin=new u.S({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new u.S({portal:n.portal,styleName:e.styleName,name:t}))}return r}))}n(91306),n(76506),n(92143),n(31450),n(71552),n(40642),n(17533),n(86656),n(66396),n(6540),n(63571),n(34250),n(60474),n(59465),n(57251),n(97714),n(2906),n(14249),n(60217),n(74569),n(21801),n(73796),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406),n(60947),n(91597),n(86787),n(35132),n(89623),n(84069),n(44567),n(98380),n(92896),n(22781),n(32422),n(30776),n(48027),n(54174),n(82426),n(29794),n(63130),n(25696),n(98402),n(42775),n(95834),n(34394),n(57150),n(76726),n(20444),n(76393),n(78548),n(2497),n(49906),n(46527),n(11799),n(48649),n(59877),n(9960),n(30823),n(53326),n(92482),n(5853),n(39141),n(48243),n(15324),n(75067),n(89914),n(90814),n(66122),n(16796),n(16955),n(22401),n(10401),n(88762),n(82058),n(81184),n(33101),n(3482),n(67477),n(78533),n(74653),n(91091),n(58943),n(70737),n(36834),n(8487),n(17817),n(15459),n(77894),n(55187),n(8586),n(44509),n(69814),n(11305),n(62259),n(44790),n(5909),n(60669),n(48208),n(51589),n(9075)},16218:(e,t,n)=>{n.d(t,{cW:()=>c,im:()=>f,vX:()=>u});var o=n(96467),l=n(60991),s=n(71252),r=n(34635),i=n(9075),a=n(51589);n(91306),n(76506),n(92143),n(31450),n(71552),n(40642),n(17533),n(86656),n(66396),n(6540),n(63571),n(34250),n(60474),n(59465),n(57251),n(97714),n(2906),n(14249),n(60217),n(74569),n(21801),n(73796),n(12047),n(21972),n(91055),n(19657),n(6906),n(50406),n(60947),n(91597),n(86787),n(35132),n(89623),n(84069),n(44567),n(98380),n(92896),n(22781),n(32422),n(30776),n(48027),n(54174),n(82426),n(29794),n(63130),n(25696),n(98402),n(42775),n(95834),n(34394),n(57150),n(76726),n(20444),n(76393),n(78548),n(2497),n(49906),n(46527),n(11799),n(48649),n(59877),n(9960),n(30823),n(53326),n(92482),n(5853),n(39141),n(32101),n(38742),n(48243),n(15324),n(75067),n(89914),n(90814),n(66122),n(16796),n(16955),n(22401),n(10401),n(49900),n(88762),n(82058),n(81184),n(33101),n(3482),n(67477),n(78533),n(74653),n(91091),n(58943),n(70737),n(36834),n(8487),n(17817),n(15459),n(61847),n(77894),n(55187),n(8586),n(44509),n(69814),n(11305),n(62259),n(44790),n(5909),n(60669),n(48208);const m=["building-scene","integrated-mesh","point-cloud","scene"];function c(e,t,n,o){const l=b(e,{},{context:o,isLabelSymbol:!1});(0,s.i)(l)&&(t[n]=l)}function u(e,t,n,o){const l=b(e,{},{context:o,isLabelSymbol:!0});(0,s.i)(l)&&(t[n]=l)}function y(e){return e instanceof r.Z||e instanceof a.Z}function b(e,t,n){if((0,s.a)(e))return null;const{context:o,isLabelSymbol:r}=n,a=o?.origin,c=o?.messages;if("web-scene"===a&&!y(e)){const n=(0,i.t)(e,{retainCIM:!0,hasLabelingContext:r});return(0,s.i)(n.symbol)?n.symbol.write(t,o):(c?.push(new l.Z("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:o,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!m.includes(o?.layer?.type))&&y(e)?(c?.push(new l.Z("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:o})),null):e.write(t,o)}function f(e,t){return(0,o.S9)(e,null,t)}}}]);