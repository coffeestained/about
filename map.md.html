<style>
    .map-container {
        width: 100%;
        display: block;
        margin-top: 15px;
        position: relative;
    }
    .map {
        position: relative;
        width: 100%;
        height: 500px;
        z-index: 0;
        margin: 1.5em;
    }
</style>
  <link rel="stylesheet" href="/about-this-dev/assets/arcgis_js_api/javascript/4.24/esri/themes/light/main.css">
  <script defer src="https://js.arcgis.com/4.24/"></script>

  <script defer >

    (async () => {
        await sleep(2000)
        require([
            "esri/config",
            "esri/core/reactiveUtils",
            "esri/WebMap",
            "esri/Map",
            "esri/Basemap",
            "esri/views/MapView",
            "esri/layers/MapImageLayer",
            "esri/layers/BaseTileLayer",
            "esri/layers/TileLayer",
            "esri/layers/FeatureLayer",
            "esri/layers/support/LabelClass",
            "esri/widgets/Popup",
            "esri/widgets/Fullscreen",
            "esri/widgets/Legend",
            "esri/widgets/Zoom",
            "esri/widgets/BasemapGallery",
            "esri/widgets/LayerList",
            "esri/popup/FieldInfo",
            "esri/popup/content/FieldsContent",
            "esri/popup/content/CustomContent",
            "esri/renderers/support/jsonUtils",
            ],
        function (
            esriConfig,
            reactiveUtils,
            WebMap,
            Map,
            Basemap,
            MapView,
            MapImageLayer,
            BaseTileLayer,
            TileLayer,
            FeatureLayer,
            LabelClass,
            Popup,
            Fullscreen,
            Legend,
            Zoom,
            BasemapGallery,
            LayerList,
            FieldInfo,
            FieldsContent,
            CustomContent,
            rendererJsonUtils,
            ) {

            // Renderer JSON
            const renderer_json = {
                "type": "uniqueValue",
                "field1": "ZONECODE",
                "field2": null,
                "field3": null,
                "defaultSymbol": null,
                "defaultLabel": null,
                "uniqueValueInfos": [
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                190,
                                239,
                                71,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "AG",
                        "label": "Agriculture",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                99,
                                99,
                                50
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "GC2",
                        "label": "General Commercial",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                152,
                                127,
                                239,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "MI2",
                        "label": "Medium Industrial",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                175,
                                155,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "SR2",
                        "label": "Mobile Home",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                204,
                                127,
                                239,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "RMOI",
                        "label": "Multi-Fam. Res./Office/Institutional",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                238,
                                164,
                                99,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "MR2",
                        "label": "Multi-Fam. Residential 15DU/ac.",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                147,
                                113,
                                78,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "MR3",
                        "label": "Multi-Fam. Residential 20DU/ac.",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                202,
                                169,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "MR1",
                        "label": "Multi-Fam. Residential 8DU/ac.",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                234,
                                51,
                                162,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "PRO",
                        "label": "Parks, Recreation and Open Space",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                189,
                                71,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "PD",
                        "label": "Planned Development",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                252,
                                197,
                                239,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "RC1",
                        "label": "Restricted Commercial",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                155,
                                239,
                                223,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "RI1",
                        "label": "Restricted Industrial",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                236,
                                197,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "SR1AA",
                        "label": "Single Fam. Residential 10,000 sq. ft Lots",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                168,
                                158,
                                10,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "SR1",
                        "label": "Single Fam. Residential 6,000 sq. ft Lots",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                239,
                                231,
                                113,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "SR1A",
                        "label": "Single Fam. Residential 7,500 sq. ft Lots",
                        "description": ""
                    },
                    {
                        "symbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": [
                                185,
                                169,
                                239,
                                100
                            ],
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    100
                                ],
                                "width": 0.40000000000000002
                            }
                        },
                        "value": "SC3",
                        "label": "Special Commercial",
                        "description": ""
                    }
                ],
                "fieldDelimiter": ","
            };

            const new_renderer = rendererJsonUtils.fromJSON(
                renderer_json
            );

            const basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        id: "defaultBasemap",
                        layerType: "ArcGISTiledMapServiceLayer",
                        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
                        title: "Basemap",
                        visibility: true,
                        opacity: 1,
                        title: "Topographic",
                    })
                ],
                title: "basemap",
                id: "basemap"
            });

            const parcel_tile = new TileLayer({
                url: 'https://gis.sanfordfl.gov/server/rest/services/Parcel_Base/MapServer',
                title: 'Sanford Parcels Tile',
            });

            const parcel_feature = new FeatureLayer({
                url: 'https://gis.sanfordfl.gov/server/rest/services/Parcel_Base/MapServer/0',
                title: 'Sanford Parcels',
                outFields: ["*"],
                popupTemplate: {
                    title: "Parcel: {GISAssets.DBO.Parcels.PARCEL}",
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "GISAssets.DBO.Parcels.OBJECTID",
                                    label: "OBJECTID",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.PARCEL",
                                    label: "PARCEL",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.PARCEL_KEY",
                                    label: "PARCEL_KEY",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.GIS_ACRES",
                                    label: "GIS Acres",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.LEG_ACRES",
                                    label: "LEG_ACRES",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.EDIT_DATE",
                                    label: "EDIT_DATE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    dateFormat: "short-date-short-time"
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.SPLIT",
                                    label: "SPLIT",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.EDIT_USER",
                                    label: "USER",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.Shape",
                                    label: "Shape",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.OBJECTID",
                                    label: "OBJECTID",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 0,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.PARCEL",
                                    label: "PARCEL",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.PARCEL_KEY",
                                    label: "PARCEL_KEY",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.TD",
                                    label: "TD",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.DOR",
                                    label: "DOR",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.OWNER",
                                    label: "Owner: ",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.ADD1",
                                    label: "ADD1",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.ADD2",
                                    label: "ADD2",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.CITY",
                                    label: "CITY",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.STATE",
                                    label: "STATE",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.ZIP",
                                    label: "ZIP",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.PAD_NUM",
                                    label: "PAD_NUM",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.PAD_DIR",
                                    label: "PAD_DIR",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.PAD_NAME",
                                    label: "PAD_NAME",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.PAD_STREET",
                                    label: "PAD_STREET",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.EI_CODE",
                                    label: "EI_CODE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.EI_NUMBER",
                                    label: "EI_NUMBER",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 0,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.APPR_BLDG",
                                    label: "APPR_BLDG",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.APPR_EXFT",
                                    label: "APPR_EXFT",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.APPR_LAND",
                                    label: "APPR_LAND",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.ADJ_AG",
                                    label: "ADJ_AG",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.INCOME_VALUE",
                                    label: "INCOME_VALUE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.INCOME_IND",
                                    label: "INCOME_IND",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.TOTAL_ASSESSED_VALUE",
                                    label: "TOTAL_ASSESSED_VALUE",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.TOTAL_JUST_VALUE",
                                    label: "TOTAL_JUST_VALUE",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.EXEMPT_REMOVAL_CODE",
                                    label: "EXEMPT_REMOVAL_CODE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.EXMP",
                                    label: "EXMP",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.NBHD_FACTOR",
                                    label: "NBHD_FACTOR",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.HMST_YEAR_GRANTED",
                                    label: "HMST_YEAR_GRANTED",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 0,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.TOTAL_NEW_CONST",
                                    label: "TOTAL_NEW_CONST",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.TOTAL_AMD10_CLASSIFIED",
                                    label: "TOTAL_AMD10_CLASSIFIED",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.BLDG_TYPE",
                                    label: "BLDG_TYPE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.TOTAL_SQFT",
                                    label: "TOTAL_SQFT",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.LIVING_AREA",
                                    label: "LIVING_AREA",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.BASE_YR_BLT",
                                    label: "BASE_YR_BLT",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.BASE_RATE",
                                    label: "BASE_RATE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 2,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.POOLS",
                                    label: "POOLS",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.FIREPLACES",
                                    label: "FIREPLACES",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.EXFT_CODE",
                                    label: "EXFT_CODE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "Gisassets.DBO.ParcelTable1.LAND_ASSESS_CODE",
                                    label: "LAND_ASSESS_CODE",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.ParcelTable1.FACILITY_NAME",
                                    label: "FACILITY_NAME",
                                    tooltip: "",
                                    visible: true,
                                    stringFieldOption: "text-box"
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.NC_FLAG",
                                    label: "NC_FLAG",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box",
                                    format: {
                                    places: 0,
                                    digitSeparator: true
                                    }
                                },
                                {
                                    fieldName: "GISAssets.DBO.Parcels.GLOBALID",
                                    label: "GISAssets.DBO.Parcels.GLOBALID",
                                    tooltip: "",
                                    visible: false,
                                    stringFieldOption: "text-box"
                                }
                                ],
                                description: null,
                                showAttachments: true,
                                mediaInfos: []
                        }
                    ],
                }
            });

            const site_address_labels = new LabelClass({
                "labelPlacement": "above-right",
                "where": null,
                "labelExpression": "[PAD_NUM]",
                "useCodedValues": true,
                "symbol": {
                 "type": "text",
                 "color": [
                  255,
                  0,
                  0,
                  255
                 ],
                 "backgroundColor": null,
                 "borderLineColor": null,
                 "borderLineSize": null,
                 "verticalAlignment": "bottom",
                 "horizontalAlignment": "center",
                 "rightToLeft": false,
                 "angle": 0,
                 "xoffset": 0,
                 "yoffset": 0,
                 "kerning": true,
                 "haloColor": null,
                 "haloSize": null,
                 "font": {
                  "family": "Arial",
                  "size": 6,
                  "style": "normal",
                  "weight": "normal",
                  "decoration": "none"
                 }
                },
                "minScale": 0,
                "maxScale": 0
               })

            const site_address_tile = new TileLayer({
                url: 'https://gis.sanfordfl.gov/server/rest/services/SiteAddresses/MapServer',
                title: 'Sanford Addresses',
                labelingInfo: [
                    site_address_labels
                ]
            });

            const site_address_feature = new FeatureLayer({
                url: 'https://gis.sanfordfl.gov/server/rest/services/SiteAddresses/MapServer/0',
                title: 'Sanford Addresses',
                labelingInfo: [
                    site_address_labels
                ]
            });

            const zoning_feature = new FeatureLayer({
                url: 'https://services1.arcgis.com/EPXb1p5YttfWtj8l/arcgis/rest/services/Zoning/FeatureServer',
                title: 'Sanford Zoning Feature',
                f: 'pbf',
                renderer: new_renderer,
                outFields: ["*"],
                popupTemplate: {
                    title: "Zoning:",
                    content: [
                    new CustomContent({
                        outFields: ["*"],
                        creator: function(event) {
                            const zoneCode = event.graphic.attributes.ZONECODE;
                            const object = renderer_json.uniqueValueInfos.find((o) => o.value === zoneCode);
                            return `${ object.value }: ${ object.label }`;
                        }
                      })
                    ],
                    showAttachments: true,
                    mediaInfos: []
                },
            });

            const map = new Map({
                basemap: basemap,
                layers: [parcel_feature, zoning_feature, site_address_feature]
            });

            const view = new MapView({
                map: map,
                center: [-81.27152091122406, 28.813592973393817], // Longitude, latitude
                zoom: 14, // Zoom level
                container: "map", // Div element
                constraints: {
                    rotationEnabled: false,
                }
            });

            // Full Screen Handler
            fullscreen = new Fullscreen({
                view: view
            }); // Register
            view.ui.add(fullscreen, "top-right");

            // Click Handler 1
            view.on("pointer-down", eventHandlerOne);
            // Click 1 Function
            function eventHandlerOne(event) {
                view.hitTest(event).then(function (response) {
                    if (response.results.length) {
                        response.results.forEach((resp) => {
                            const graphic = resp.graphic;
                            const attributes = graphic.attributes;
                            console.log(attributes);
                        });


                    }
                });
            }

            // Click Handler 2
            view.on("click", eventHandlerTwo);
            // Click Function 2 (Gis Coords)
            function eventHandlerTwo(event) {
                console.log(event)
            }

            // Legend Handler
            const legend = new Legend({
                view: view,
                layerInfos: [
                    {
                        layer: zoning_feature
                    },
                ],
            }); // Reigster Legend
            view.ui.add(legend, "top-left");

            // Zoom Default Move
            view.ui.move("zoom", "top-right");

            // Basemap Gallery Toggle
            const basemapGallery = new BasemapGallery({
                view: view,
                container: document.createElement("div"),
            }); // Register
            // view.ui.add(basemapGallery, {
            //     position: "top-left",
            // });

            // Layer List Toggle
            const layerList = new LayerList({
                view: view,
            }); // Register
            view.ui.add(layerList, {
                position: "top-left",
            });

        });
    })().catch(err => {
        console.error(err);
    });

  </script>

<div class="map-container">
    <div id="map" class="map"></div>
</div>
