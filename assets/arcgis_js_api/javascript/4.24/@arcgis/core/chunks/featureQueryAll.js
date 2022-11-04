/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./maybe.js";import r from"../rest/support/Query.js";async function t(r,t,s){t=t.clone(),r.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=o(r));const u=a(r),i=r.capabilities.query.supportsPagination;t.start=0,t.num=u;let n=null;for(;;){const a=await r.source.queryFeaturesJSON(t,s);if(e(n)?n=a:n.features=n.features.concat(a.features),n.exceededTransferLimit=a.exceededTransferLimit,!i||!a.exceededTransferLimit)break;t.start+=u}return n}function a(e){return o(e)*function(e){return e.capabilities.query.maxRecordCount||2e3}(e)}function o(e){return e.capabilities.query.supportsMaxRecordCountFactor?r.MAX_MAX_RECORD_COUNT_FACTOR:1}export{a as g,t as q};
