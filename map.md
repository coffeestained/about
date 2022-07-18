<div id="map" class="map">
        <div class="mapType">
            <div><input type="radio" name="mapType" onchange="generateMap('navigation', null);" /> <i class="fa-solid fa-compass-drafting"></i> Navigation Map</div>
            <div><input type="radio" name="mapType" onchange="generateMap('topo', null);" /> <i class="fa-solid fa-mountain"></i> Topographic Map</div>
            <div><input type="radio" name="mapType" onchange="generateMap('satellite', null);" /> <i class="fa-solid fa-satellite"></i> Satellite Map</div>
            <div><input type="radio" name="mapType" onchange="generateMap('republic', null);"/> <i class="fa-brands fa-old-republic"></i> Republic Map</div>
            <div><input type="radio" name="mapType" checked="checked" onchange="generateMap('interactive', null);"/> <i class="fa-brands fa-galactic-republic"></i> Republic Interactive Map</div>
            <div id="interactive-options">

                <div>
                    <input type="checkbox" id="county-congressional" name="county-congressional" onchange="addShapeFileLayer('county-congressional', 'https://coffeestained.github.io/about-this-dev/assets/cb_2021_us_county_within_cd116_500k');"/>
                    <i class="fa-solid fa-scale-unbalanced"></i> County Congressional Zoning TODO
                </div>

                <div>
                    <input type="checkbox" id="school-zoning" name="school-zoning" disabled="disabled" onchange="addShapeFileLayer('school-zoning', 'https://coffeestained.github.io/about-this-dev/assets/cb_2021_us_county_within_cd116_500k');"/>
                    <i class="fa-solid fa-school"></i> School Districts with Stats TODO
                </div>

                <div>
                    <input type="checkbox" id="trails-blazers" name="trail-blazers" disabled="disabled" onchange="addShapeFileLayer('trail-blazers', 'https://coffeestained.github.io/about-this-dev/assets/cb_2021_us_county_within_cd116_500k');"/>
                    <i class="fa-solid fa-tree-large"></i> Trail Blazers TODO
                </div>

            </div>

        </div>
        <div class="searchMap">
            <input id="geocode-input" type="text" placeholder="Enter anything (Powered by Wolfram|Alpha) (Coming Soon?) " size="50" />
            <i id="geocode-input-submit" class="fa-solid fa-magnifying-glass-location"></i>
        </div>
        <div id="map-tooltip" class="map-tooltip"></div>
    </div>
    <small>Attribution: Thanks to OpenLayers<span id="map-attribution"></span></small>
    <script
        src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/build/ol.js"></script>
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css">
    <script src="https://cdn.jsdelivr.net/npm/shpjs@4.0.3/dist/shp.js"></script>
    <style>
        .map {
            position: relative;
            width: 100%;
            height: 500px;
            z-index: 0;
            margin: 1.5em;
        }

        .map-tooltip {
            position: relative;
            padding: 5px;
            background: rgba(255,255,255,.6);
            color: black;
            white-space: nowrap;
            font: 10px Arial;
        }

        .searchMap {
            position: absolute;
            padding: 5px;
            top: .5em;
            left: 42px;
            background: rgba(255,255,255,.6);
            z-index: 999;
            border-radius: 5px;
            line-height: 1;
        }

        #geocode-input {
            font-size: 10px;
            padding: .5em;
        }
        #geocode-input-submit {
            position: relative;
            top: .2em;
            cursor: pointer;
        }

        .mapType {
            position: absolute;
            /* width: 150px; */
            margin: .5em;
            padding: 5px;
            top: .5em;
            right: 0px;
            background: rgba(255,255,255,.6);
            z-index: 999;
            border-radius: 5px;
            font-size: 10px;
            /* border: 1px solid #e0e0e0; */
            /* -webkit-box-shadow: 0px 0px 17px -8px #000000; */
            /* box-shadow: 0px 0px 17px -8px #000000; */
        }

        .mapType > .button {
            width: 100%;
            text-align: center;
            padding: 5px;
        }

        .mapType > .button:hover {
            background-color: #e0e0e0;
            color: #606c71;
        }

        .interactive-options-active {
            margin-left: 1.5em !important;
            height: auto !important;
            opacity: 1 !important;
        }

        #interactive-options {
            opacity: 0;
            height: 0px;
            margin-left: 0px;
            display: flex;
            flex-direction: column;
            transition: opacity 2s, height 1s, margin-left .5s;
        }

        .ol-control {
            border-radius: 5px;
            border: 1px solid #e0e0e0;
            -webkit-box-shadow: 0px 0px 17px -8px #000000;
            box-shadow: 0px 0px 17px -8px #000000;
            background: white;
        }

        .ol-control {
            border-radius: 5px;
            border: 1px solid #e0e0e0;
            -webkit-box-shadow: 0px 0px 17px -8px #000000;
            box-shadow: 0px 0px 17px -8px #000000;
            background: white;
        }

        .ol-control button {
            background: white;
            color: black;
        }

        .ol-control button:hover {
            background: #e0e0e0;
            color: #606c71;
        }
    </style>
    <script type="text/javascript">

        const map = new ol.Map({
            target: 'map',
            layers: [],
            view: new ol.View({
                center: ol.proj.fromLonLat([-81.26560360730048, 28.81392793719928]),
                zoom: 16,
            })
        });

        const tooltip = document.getElementById('map-tooltip');
        const overlay = new ol.Overlay({
            element: tooltip,
            offset: [10, 0],
            positioning: 'bottom-left'
        });

        setView(-81.25626560360730048, 28.81392793719928, 16);
        generateMap('interactive');

        // mayType: string ENUM[topo,navigation,satellite,city,zoning]
        function generateMap(mapType) {
            let sources = [];
            document.getElementById('interactive-options').classList.remove('interactive-options-active');
            if (mapType == 'topo') {
                const layers = [
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
                        }),
                        zIndex: 1,
                    }),
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
                        }),
                        zIndex: 2,
                        opacity: .1,
                    }),
                ];
                setView(-83.43186678985587,35.65270715586668,8);
                layers.forEach((layer) => sources.push(layer));
                document.getElementById('map-attribution').innerHTML = '. Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>';
            } else if (mapType == 'navigation') {
                const layers = [
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/World_Navigation_Charts/MapServer',
                        }),
                        zIndex: 1,
                    }),
                ];
                setView(-83.43186678985587,35.65270715586668,8);
                layers.forEach((layer) => sources.push(layer));
                document.getElementById('map-attribution').innerHTML = '. Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                            'rest/services/World_Navigation_Charts/MapServer">ArcGIS</a>';
            } else if (mapType == 'satellite') {
                const layers = [
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
                        }),
                        zIndex: 1,
                    }),
                ];
                setView(-81.25626560360730048, 28.81392793719928, 12);
                layers.forEach((layer) => sources.push(layer));
                document.getElementById('map-attribution').innerHTML = '. Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                            'rest/services/World_Navigation_Charts/MapServer">ArcGIS</a>';
            } else if (mapType == 'republic') {
                const layers = [
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
                        }),
                        zIndex: 1,
                    }),
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
                        }),
                        zIndex: 2,
                        opacity: .1,
                    }),
                ];
                layers.forEach((layer) => sources.push(layer));
                setView(-81.25626560360730048, 28.81392793719928, 8);
                document.getElementById('map-attribution').innerHTML = ' and the U.S. Department of Commerce, U.S. Census Bureau, Geography Division, Geographic Customer Services Branch, the TIGER Team and all private and public workers of the involved in making these datasets possible.';
            } else if (mapType == 'interactive') {
                document.getElementById('interactive-options').classList.add('interactive-options-active');
                const layers = [
                    new ol.layer.Tile({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new ol.source.TileArcGISRest({
                            url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/Basemaps/CommunityTIGER/MapServer',
                        }),
                        zIndex: 1,
                        opacity: 1,
                        style: new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: [0, 0, 0, 0.6],
                                width: 2,
                                lineDash: [4,8]
                            }),
                            fill: new ol.style.Fill({
                                color: 'rgba(122,122,122,.777)'
                            }),
                        })
                    }),
                ];
                layers.forEach((layer) => sources.push(layer));
                setView(-81.25626560360730048, 28.81392793719928, 8);
                document.getElementById('map-attribution').innerHTML = ' and the U.S. Department of Commerce, U.S. Census Bureau, Geography Division, Geographic Customer Services Branch, the TIGER Team and all private and public workers of the involved in making these datasets possible.';
            } else {
                sources.push(new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    zIndex: 1,
                }));
                document.getElementById('map-attribution').innerHTML = '.';
            }

                        // ENABLE AFTER FIXING INTERACTIVE LAYERS
            // Add and then apply Tooltip Overlay Function
            //map.addOverlay(overlay);
            //map.on('pointermove', displayTooltip);

            // Apply BaseLayers To Map
            map.setLayers(sources);

            var tileLayers = map.getLayers().getArray().filter(function(layer){
                console.log(layer)
                return layer.getSource() && layer.getSource().getTileGrid
              });
            console.log(tileLayers)

        }

        function addShapeFileLayer(id, url) {

            const style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: [0, 0, 0, 0.6],
                    width: 2,
                    lineDash: [4,8]
                }),
            });

            const source = new ol.source.Vector();

            const checkbox = document.getElementById(id).checked;

            if (checkbox) {
                const newLayer = new ol.layer.Vector({
                        title: id,
                        name: id,
                        source: source,
                        style: style,
                        zIndex: 3,
                        opacity: .8,
                })
                shp(url).then(function(geojson){
                    source.addFeatures(
                        new ol.format.GeoJSON().readFeatures(geojson, {
                            dataProjection: 'EPSG:4326',
                            featureProjection: map.getView().getProjection()
                        })
                    );
                    const finalLayers = map.getLayers();
                    finalLayers.push(newLayer);
                    const layerAdded = map.setLayers(finalLayers);
                });
            } else {
                const layersToRemove = [];
                const layers = map.getLayers();
                layers.forEach((layer) => {
                    if (layer.get('name') != undefined && layer.get('name') === id) {
                        layersToRemove.push(layer);
                    }
                });
                layersToRemove.forEach((layer) => map.removeLayer(layer));
            }
            document.getElementById('map-attribution').innerHTML = ' and the U.S. Department of Commerce, U.S. Census Bureau, Geography Division, Geographic Customer Services Branch and all private and public workers of the involved in making these datasets possible.';
        }

        // long: FLOAT EPSG:4326 Long
        // lat: FLOAT EPSG:4326 Lat
        // zoom: FLOAT (furthest) 1-16 (closest)
        function setView(long, lat, zoom) {
            map.setView(new ol.View({
                center: ol.proj.fromLonLat([long, lat]),
                zoom: zoom
            }));
        }

        function displayTooltip(event) {
            const pixel = event.pixel;
            const feature = map.forEachFeatureAtPixel(pixel, function(feature) {
                return feature;
            });
            console.log('feature layers', feature)
            const layer = map.forEachLayerAtPixel(pixel, function(layer) {
                return layer;
            });
            console.log('tooltip layers', layer)
            const tooltipContent = feature || layer ?
                `<br>${feature ? feature.get('something') : ''} <br> ${layer ? layer.get('something') : ''}` : 'No Data Found <br>';
            overlay.setPosition(event.coordinate);
            tooltip.innerHTML = tooltipContent;

            tooltip.style.display = feature || layer ? '' : '';
        };

        // Event Click Listener
        map.on('singleclick', function (event) {
            console.log(`${new Date()} DEBUG Maps ClickEventCoordinate RAW ${event.coordinate}`)
            console.log(`${new Date()} DEBUG Maps ClickEventCoordinate EPSG:3857,EPSG:4326 ${ol.proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326')}`);
        });
    </script>
