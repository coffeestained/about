"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6420],{56420:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var r,o=i(29768),a=i(73173),s=i(60991),n=i(12047),l=i(76506),p=i(81184),c=i(71252),d=i(32101),u=i(34250),h=i(91306),m=i(97714),g=i(17533),y=i(21801),b=i(49900),v=i(74742),w=i(28239);i(31450),i(71552),i(82058),i(88762),i(92143),i(40642),i(50406),i(21972),i(60474),i(66396),i(86656),i(91055),i(6540),i(19657),i(6906),i(33101),i(73796),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(3482),i(67477),i(57251),i(78533),i(74653),i(91091),i(58943);let f=r=class extends((0,n.eC)(p.Z)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return(0,h.m)(r,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return"Feature Service"===e||"Feature Collection"===e?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Video Service"===e?i="Video Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"OGCFeatureServer"===e?i="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")&&(i="Instant App"),i}readExtent(e){return e&&e.length?new y.Z(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let i,r=!1,o=!1,s=!1,n=!1,l=!1,p=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(r=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(o=t.includes("Table"),s=t.includes("Route Layer"),n=t.includes("Markup"),l=t.includes("Spatiotemporal"),p=t.includes("UtilityNetwork"),i=l&&o?"spatiotemporaltable":o?"table":s?"routelayer":n?"markup":l?"spatiotemporal":r?"featureshosted":p?"utilitynetwork":"features"):i="map service"===e||"wms"===e||"wmts"===e?r||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"video service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===e?"geodataservice":"layers"):i="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"notebook code snippets"===e?"notebookcodesnippets":"suitability model"===e?"suitabilitymodel":"esri classifier definition"===e?"classifierdefinition":"esri classification schema"===e?"classificationschema":"insights data engineering workbook"===e?"dataengineeringworkbook":"insights data engineering model"===e?"dataengineeringmodel":"deep learning studio project"===e?"deeplearningproject":"maps",i?(0,a.g)("esri/images/portal/"+i+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].includes(this.type)}get itemUrl(){const e=this.get("portal.restUrl");return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=b.Z.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:(0,c.i)(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof w.Z&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new w.Z({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,l.d9)(this.applicationProxies),avgRating:this.avgRating,categories:(0,l.d9)(this.categories),created:(0,l.d9)(this.created),culture:this.culture,description:this.description,extent:(0,l.d9)(this.extent),groupCategories:(0,l.d9)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,l.d9)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,l.d9)(this.screenshots),size:this.size,snippet:this.snippet,spatialReference:this.spatialReference,tags:(0,l.d9)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,l.d9)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new r({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t of["tags","typeKeywords","categories"])e[t]&&(e[t]=e[t].join(", "));const{extent:t}=e;return t&&(e.extent=JSON.stringify(t)),e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new w.Z(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},r)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new s.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r={method:"post"};if("string"==typeof t)(0,d.HK)(t)?r.query={data:t}:r.query={url:(0,d.hF)(t)},(0,c.i)(i)&&(r.query.filename=i);else{const e=new FormData;(0,c.i)(i)?e.append("file",t,i):e.append("file",t),r.body=e}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,r).then((()=>this.reload()))})):Promise.reject(new s.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await i.e(3754).then(i.bind(i,3754))).fetchResources(this,e,t)}async addResource(e,t,r){const o=await i.e(3754).then(i.bind(i,3754));return e.portalItem=this,o.addOrUpdateResource(e,"add",t,r)}async removeResource(e,t){const r=await i.e(3754).then(i.bind(i,3754));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new s.Z("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r.removeResource(this,e,t)}async removeAllResources(e){return(await i.e(3754).then(i.bind(i,3754))).removeAllResources(this,e)}resourceFromPath(e){return new v.Z({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:(0,l.d9)(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,spatialReference:this.spatialReference,tags:(0,l.d9)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,l.d9)(this.typeKeywords),url:this.url};return(0,l.yd)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new r({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,o._)([(0,u.Cb)({type:["private","shared","org","public"]})],f.prototype,"access",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"accessInformation",void 0),(0,o._)([(0,u.Cb)({type:String})],f.prototype,"apiKey",void 0),(0,o._)([(0,u.Cb)({json:{read:{source:"appProxies"}}})],f.prototype,"applicationProxies",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"avgRating",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"categories",void 0),(0,o._)([(0,u.Cb)({type:Date})],f.prototype,"created",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"culture",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"description",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"displayName",null),(0,o._)([(0,u.Cb)({type:y.Z})],f.prototype,"extent",void 0),(0,o._)([(0,m.r)("extent")],f.prototype,"readExtent",null),(0,o._)([(0,u.Cb)()],f.prototype,"groupCategories",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"iconUrl",null),(0,o._)([(0,u.Cb)()],f.prototype,"id",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"isLayer",null),(0,o._)([(0,u.Cb)()],f.prototype,"itemControl",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"itemUrl",null),(0,o._)([(0,u.Cb)()],f.prototype,"licenseInfo",void 0),(0,o._)([(0,u.Cb)({type:Date})],f.prototype,"modified",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"name",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"numComments",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"numRatings",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"numViews",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"owner",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"ownerFolder",void 0),(0,o._)([(0,u.Cb)({type:b.Z})],f.prototype,"portal",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"screenshots",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"size",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"snippet",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"sourceJSON",void 0),(0,o._)([(0,u.Cb)({type:String})],f.prototype,"spatialReference",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"tags",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"thumbnail",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"thumbnailUrl",null),(0,o._)([(0,u.Cb)()],f.prototype,"title",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"typeKeywords",void 0),(0,o._)([(0,u.Cb)({type:String,json:{read(e,t){if("KML"!==t.type)return e;const i=this.portal?.restUrl;return e||(e=i&&this.id?`${i}/content/items/${this.id}/data`:null),e}}})],f.prototype,"url",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],f.prototype,"userItemUrl",null),f=r=(0,o._)([(0,g.j)("esri.portal.PortalItem")],f);const k=f},74742:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(29768),o=i(21972),a=i(60991),s=i(92143),n=i(71252),l=i(32101),p=i(34250),c=(i(76506),i(86787)),d=i(17533);i(60474),i(66396),i(86656),i(91055),i(6540),i(19657),i(6906),i(50406),i(71552),i(31450),i(40642),i(91306);const u=s.L.getLogger("esri.portal.PortalItemResource");let h=class extends o.Z{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){(0,n.i)(e)&&(0,l.YP)(e)?u.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const i=this.url;if((0,n.a)(i))throw new a.Z("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(i,{responseType:e,query:{token:this.portalItem.apiKey},signal:(0,n.h)(t,"signal")})}async update(e,t){return(await i.e(3754).then(i.bind(i,3754))).addOrUpdateResource(this,"update",e,t)}hasPath(){return(0,n.i)(this.path)}_normalizePath(e,t){return(0,n.a)(e)?e:(e=e.replace(/^\/+/,""),(0,n.i)(t)&&(0,l.YP)(e)&&(e=(0,l.PF)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};(0,r._)([(0,p.Cb)()],h.prototype,"portalItem",void 0),(0,r._)([(0,p.Cb)({type:String,value:null})],h.prototype,"path",null),(0,r._)([(0,c.p)("path")],h.prototype,"_castPath",null),(0,r._)([(0,p.Cb)({type:String,readOnly:!0})],h.prototype,"url",null),(0,r._)([(0,p.Cb)({type:String,readOnly:!0})],h.prototype,"itemRelativeUrl",null),h=(0,r._)([(0,d.j)("esri.portal.PortalItemResource")],h);const m=h},28239:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(29768),o=i(21972),a=i(34250),s=(i(76506),i(91306),i(17533));i(60474),i(66396),i(86656),i(92143),i(31450),i(71552),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);let n=class extends o.Z{constructor(e){super(e),this.created=null,this.rating=null}};(0,r._)([(0,a.Cb)()],n.prototype,"created",void 0),(0,r._)([(0,a.Cb)()],n.prototype,"rating",void 0),n=(0,r._)([(0,s.j)("esri.portal.PortalRating")],n);const l=n}}]);