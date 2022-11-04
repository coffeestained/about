// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../geometry ../kernel ../request ../core/Error ../core/Logger ./knowledgeGraph/GraphQueryResult ./knowledgeGraph/GraphQueryStreamingResult ./knowledgeGraph/KnowledgeGraph ./knowledgeGraph/wasmInterface/knowledgeWasmAccess ./knowledgeGraph/wasmInterface/queryToWasmEncodedFactories ./knowledgeGraph/wasmInterface/wasmToDataModelFactories ./knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories ../geometry/Geometry".split(" "),function(l,f,W,H,
n,g,O,I,J,P,m,p,Q,R,S){function q(){q=f._asyncToGenerator(function*(a,b,c){b=yield n(`${a.url}/graph/query`,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:b.openCypherQuery,...null==c?void 0:c.query},signal:null==c?void 0:c.signal,timeout:null==c?void 0:c.timeout});c=b.getHeader("content-type");a=b.data;if(null!=c&&c.includes("application/x-protobuf"))return b=new ((yield m.getWasmInterface()).GraphQueryDecoder),b.deleteLater(),new I({resultRows:r(b,a)});throw new g("knowledge-graph:unexpected-server-response",
"server returned an unexpected response",{responseType:c,data:b.data});});return q.apply(this,arguments)}function t(){t=f._asyncToGenerator(function*(a,b,c){const d=`${a.url}/graph/query`;yield K(a);a=yield L(d,c);a.data.body=yield T(b);b=yield fetch(a.data.url,a.data);return new J({resultRowsStream:yield M(b)})});return t.apply(this,arguments)}function u(){u=f._asyncToGenerator(function*(a,b,c){b=yield n(`${a.url}/graph/search`,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${b.searchQuery}"`,
typeCategoryFilter:b.typeCategoryFilter,...null==c?void 0:c.query},signal:null==c?void 0:c.signal,timeout:null==c?void 0:c.timeout});c=b.getHeader("content-type");a=b.data;if(null!=c&&c.includes("application/x-protobuf"))return b=new ((yield m.getWasmInterface()).GraphQueryDecoder),b.deleteLater(),new I({resultRows:r(b,a)});throw new g("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:c,data:b.data});});return u.apply(this,arguments)}function v(){v=
f._asyncToGenerator(function*(a,b,c){const d=`${a.url}/graph/search`;yield K(a);a=yield L(d,c);a.data.body=yield U(b);b=yield fetch(a.data.url,a.data);return new J({resultRowsStream:yield M(b)})});return v.apply(this,arguments)}function w(){w=f._asyncToGenerator(function*(a){a=new P({url:a});yield x(a);return a});return w.apply(this,arguments)}function x(a){return y.apply(this,arguments)}function y(){y=f._asyncToGenerator(function*(a){a.dataModel=yield N(a)});return y.apply(this,arguments)}function K(a){return z.apply(this,
arguments)}function z(){z=f._asyncToGenerator(function*(a){null!=H.id&&H.id.findCredential(a.url)||(a.dataModel?yield N(a):yield x(a))});return z.apply(this,arguments)}function T(a){return A.apply(this,arguments)}function A(){A=f._asyncToGenerator(function*(a){var b=yield m.getWasmInterface();const c=new b.GraphQueryRequestEncoder;c.deleteLater();c.open_cypher_query=a.openCypherQuery;if(a.bindParameters){c.input_quantization_parameters=b.InputQuantizationUtil.WGS84_lossless();c.output_spatial_reference=
b.SpatialReferenceUtil.WGS84();for(const [h,B]of Object.entries(a.bindParameters)){a=h;var d=B,e=c,k=b;null===d||void 0===d?e.set_param_key_value(a,""):"object"!==typeof d?e.set_param_key_value(a,d):d instanceof Date?e.set_param_key_value(a,d):d instanceof S?(d=p.geometryToWasm(d,k),e.set_param_key_value(a,d),d.delete()):d instanceof Array?(d=p.bindParamArrayToWasm(d,k),e.set_param_key_value(a,d),d.delete()):(d=p.bindParamObjectToWasm(d,k),e.set_param_key_value(a,d),d.delete())}}try{c.encode()}catch(h){throw new g("knowledge-graph:query-encoding-failed",
"Attempting to encode the query failed",{error:h});}b=c.get_encoding_result();if(0!==b.error.error_code)throw new g("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:b.error.error_code,errorMessage:b.error.error_message});return b.get_byte_buffer()});return A.apply(this,arguments)}function U(a){return C.apply(this,arguments)}function C(){C=f._asyncToGenerator(function*(a){var b;const c=yield m.getWasmInterface(),d=new c.GraphSearchRequestEncoder;d.deleteLater();
d.search_query=a.searchQuery;d.type_category_filter=c.esriNamedTypeCategory[a.typeCategoryFilter.toString()];!0===a.returnSearchContext&&(d.return_search_context=a.returnSearchContext);void 0!==a.start&&0<a.start&&(d.start_index=a.start);void 0!==a.num&&(d.max_num_results=a.num);if(void 0!==a.globalIdsFilter&&Array.isArray(a.globalIdsFilter)&&0<a.globalIdsFilter.length)try{d.set_globalids_filter(p.bindParamArrayToWasm(a.globalIdsFilter,c))}catch(e){throw new g("knowledge-graph:globalIds-format-error",
"Attempting to set globalids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:e});}null==(b=a.namedTypesFilter)?void 0:b.forEach(e=>{d.add_named_type_filter(e)});try{d.encode()}catch(e){throw new g("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:e});}a=d.get_encoding_result();if(0!==a.error.error_code)throw new g("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{errorCode:a.error.error_code,
errorMessage:a.error.error_message});return a.get_byte_buffer()});return C.apply(this,arguments)}function L(a,b){return D.apply(this,arguments)}function D(){D=f._asyncToGenerator(function*(a,b){return n(a,{responseType:"native-request-init",method:"post",query:{f:"pbf",...null==b?void 0:b.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:null==b?void 0:b.signal,timeout:null==b?void 0:b.timeout})});return D.apply(this,arguments)}function r(a,b){a.push_buffer(new Uint8Array(b));
b=[];let c=0;for(;a.next_row();){c||(c=a.get_header_keys().size());const d=Array(c);for(let e=0;e<c;e++){const k=a.get_value(e);d[e]=R.decodedWasmObjToQueryResponseObj(k)}b.push(d)}return b}function M(a){return E.apply(this,arguments)}function E(){E=f._asyncToGenerator(function*(a){const b=a.headers.get("content-type");a.headers.get("content-length")&&V.warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined.");
if(null!=b&&b.includes("application/x-protobuf")){const c=a.body.getReader(),d=new ((yield m.getWasmInterface()).GraphQueryDecoder);return new ReadableStream({start(e){return f._asyncToGenerator(function*(){function k(){return c.read().then(({done:h,value:B})=>{if(h){let F;d.has_error&&(F=new g("knowledge-graph::stream-decoding-error","One or more result rows was not successfully decoded",{errorCode:d.error.error_code,errorMessage:d.error.error_message}));d.delete();e.close();c.releaseLock();if(F)throw F;
}else return h=r(d,B),0<h.length&&e.enqueue(h),k()})}try{return k()}catch(h){throw d.delete(),e.close(),c.releaseLock(),new g("knowledge-graph::stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:h});}})()}})}throw new g("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:b,data:a.text()});});return E.apply(this,arguments)}function N(a){return G.apply(this,arguments)}function G(){G=
f._asyncToGenerator(function*(a){a=yield n(`${a.url}/dataModel/queryDataModel`,{responseType:"array-buffer",query:{f:"pbf"}});const b=a.getHeader("content-type"),c=a.data;if(null!=b&&b.includes("application/x-protobuf"))return a=(yield m.getWasmInterface()).decode_data_model_from_protocol_buffer(new Uint8Array(c)),Q.wasmToDataModel(a);throw new g("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:b,data:a.data});});return G.apply(this,arguments)}const V=
O.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService");l.executeQuery=function(a,b,c){return q.apply(this,arguments)};l.executeQueryStreaming=function(a,b,c){return t.apply(this,arguments)};l.executeSearch=function(a,b,c){return u.apply(this,arguments)};l.executeSearchStreaming=function(a,b,c){return v.apply(this,arguments)};l.fetchKnowledgeGraph=function(a){return w.apply(this,arguments)};l.refreshDataModel=x;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});