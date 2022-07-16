<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
    type="text/css">

<div id="headerControls" class="headerControls tooltip" ondblclick="resetTimeControl()">
    <div class="button sun"><i class="fas fa-sun"></i></div>
    <input type="range" id="dayNightSlider" name="dayNightSlider" oninput="changeTimeOfDay(this.value)"
        onchange="changeTimeOfDay(this.value)" min="1" max="100" value="0">
    <div class="button moon"><i class="fas fa-moon"></i></div>
    <span class="tooltiptext tooltip-bottom">Double Click to Reset</span>
</div>

<script>
    document.documentElement.style
        .setProperty('overflow', 'hidden auto');

    let overrideTimeOfDay = false;
    function changeTimeOfDay(value) {
        if (value == 50) {
            overrideTimeOfDay = false;
        } else {
            overrideTimeOfDay = true;
            document.documentElement.style
                .setProperty('--timeOfDayOpacity', value / 100);
        }
    }

    // Ticker Display (displaying time)
    let ticker = 0;
    let direction = 'ascending';

    window.setInterval(function () {
        if (!overrideTimeOfDay) {
            if (direction == 'ascending') ticker++;
            else ticker--;
            if (ticker == 0) direction = 'ascending';
            if (ticker == 100) direction = 'descending';
            document.documentElement.style
                .setProperty('--timeOfDayOpacity', ticker / 100);
            document.getElementById('dayNightSlider').value = ticker;
        }
    }, 1000);

    function resetTimeControl() {
        document.documentElement.style
            .setProperty('--timeOfDayOpacity', 0);
        document.getElementById('dayNightSlider').value = 0;
        overrideTimeOfDay = false;
    }
</script>

<style>
    :root {
        --one-opacity: 0;
        --two-opacity: .1;
        --three-opacity: .2;
        --four-opacity: .3;
        --five-opacity: .4;
        --six-opacity: .55;
        --seven-opacity: .7;
        --eight-opacity: .8;
        --nine-opacity: .9;
        --ten-opacity: 1;
        --timeOfDayOpacity: 0;
    }

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
        /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        color: darkslategrey;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;

        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;
    }

    /* Tooltip arrow */
    .tooltip .tooltiptext::before {
        content: "";
        position: absolute;
        top: 0%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .tooltip-bottom {
        top: 50%;
        left: 50%;
        margin-left: -60px;
    }

    .headerControls {
        position: fixed;
        padding: 5px;
        top: 0px;
        right: 0px;
        z-index: 999;
        -webkit-box-shadow: 0px 0px 17px -8px #000000;
        box-shadow: 0px 0px 17px -8px #000000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .controlsExpanded {
        background-size: 85%;
        background-repeat: repeat;
        background-position: 0 0;
        padding: 153px 15px;
    }

    .controlsCollapsed {
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 85%;
        background-repeat: repeat;
        background-position: 0 0;
        padding: 11px 15px;
    }

    .headerControls .sun {
        color: gold;
    }

    .headerControls .moon {
        color: darkslategrey
    }
</style>

<div class="row">
    <div class="row-logo" style="background-image:url('./Watermelon_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Matthew Grady ☕ <a href="https://linkedin.com/in/matthew-grady-7b752a16"><img class="hover-friends"
                    src="./LI-In-Bug.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px; max-height: 29.06px;"></a></h3>
        <div id="about"></div> In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube,
        gaming and a wide array of outdoorsy stuff. Get connected at <a
            href="https://linkedin.com/in/matthew-grady-7b752a16">LinkedIn</a>
    </div>
</div>
<script>
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";
    const header = document.getElementsByTagName("header");
    window.onwheel = function (event) {
        headerScrollFunction(event)
    };

    function headerScrollFunction(event) {
        const headerControls = document.getElementById('headerControls');
        if (document.documentElement.scrollTop > 10 && event.deltaY > 0) {
            headerControls.classList.remove('controlsExpanded');
            headerControls.classList.add('controlsCollapsed');
            header[0].classList.remove('expand');
            header[0].classList.add('collapse');
        } else if (document.documentElement.scrollTop < 10 && event.deltaY < 0) {
            headerControls.classList.remove('controlsCollapsed');
            headerControls.classList.add('controlsExpanded');
            header[0].classList.remove('collapse');
            header[0].classList.add('expand');
            window.scrollTo(0, 0);
        }

    }
</script>
<style>
    .parachute {
        margin: 200px;
        width: 400px;
        animation: xAxis 60s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
        position: absolute;
        z-index: 99;
        top: 16.66px;
        left: 100px;
    }

    .parachute__img {
        animation: yAxis 60s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
    }

    .parachute__img:before {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        background: url("https://dl.dropboxusercontent.com/s/7xthrrako1qpxy9/parachute.svg") no-repeat;
        animation: swing ease-in-out 1s infinite alternate;
        transform-origin: center -20px;
    }

    .plane {
        background: url("https://dl.dropboxusercontent.com/s/egcs4ohbyrfa39n/aeroplane.svg") no-repeat;
        width: 42px;
        height: 42px;
        position: absolute;
        z-index: 99;
        top: -16px;
        left: -108px;
        animation: right linear 30s infinite;
    }

    @keyframes yAxis {
        33% {
            animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
            transform: translateY(-200px);
        }

        66% {
            animation-timing-function: cubic-bezier(0, .2, -1.42, -6);
            transform: translateY(-200px);
        }
    }

    @keyframes xAxis {
        33% {
            animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
            transform: translateX(700px);
        }

        66% {
            animation-timing-function: cubic-bezier(0, 0, -1.15, -6.64);
            transform: translateX(700px);
        }
    }

    @keyframes swing {
        0% {
            transform: rotate(5deg);
        }

        100% {
            transform: rotate(-5deg);
        }
    }


    @keyframes right {
        0% {
            left: -108px;
        }

        25% {
            left: calc(25% + 108px);
        }

        35% {
            left: calc(35% + 108px);
            top: 12px;
        }

        50% {
            left: calc(50% + 108px);
            top: 12px;
        }

        75% {
            left: calc(75% + 108px);
            top: 5px;
        }

        100% {
            left: calc(100% + 108px);
        }
    }

    .page-header {
        background-image: url('1610.m00.i125.n015.S.c12.310635362 Vector cartoon blue cloudy sky horizontal seamless pattern.jpg') !important;
        background-size: 85%;
        background-repeat: repeat;
        background-position: 0 0;
        /*adjust s value for speed*/
        animation: animatedBackground 850s linear infinite;
        z-index: 99;
        -webkit-box-shadow: 0px 10px 50px 13px #FFFFFF;
        box-shadow: 0px 10px 50px 13px #FFFFFF;
    }

    .page-header:after,
    .page-header:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        mix-blend-mode: hard-light;
    }

    .page-header:before {
        background: linear-gradient(0deg, rgba(255, 255, 255, .4) 25%, rgba(0, 212, 255, 0.3) 100%);
        border-bottom: 4px rgba(255, 255, 255, .4) solid;
    }

    .page-header:after {
        background: linear-gradient(0deg, rgb(81 89 57 / 65%) 25%, rgba(85, 48, 83, 0.45) 100%), rgba(0, 0, 0, .35) url(stars.png) repeat;
        animation: animatedBackground 1200s linear infinite;
        border-bottom: 4px rgba(0, 0, 0, .3) solid;
        opacity: var(--timeOfDayOpacity);
    }

    @keyframes animatedBackground {
        from {
            background-position: 0 0;
        }

        /*use negative width if you want it to flow right to left else and positive for left to right*/
        to {
            background-position: -10000px 0;
        }
    }

    .row {
        display: flex;
        margin-bottom: 50px;
        scroll-snap-align: start;
        font-size: 15px;
        font-family: Arial;
        line-height: 3;
        color: black;
        z-index: 0;
    }

    .row-logo {
        margin-right: 1rem;
        width: 100px;
        height: 100px;
        max-width: 100px;
        margin-right: 1rem;
        min-width: 100px;
        max-height: 100px;
        min-height: 100%;
        background-size: 100px 100px;
    }

    .row-logo:after {
        content: '';
        display: block;
        position: relative;
        top: -100px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100px;
        height: 100px;
    }

    .row-logo:before {
        content: '';
        display: block;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100px;
        height: 100px;
    }

    ul li {
        list-style-image: radial-gradient(circle, #155799, #155799);
    }

    .collapse {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: collapse .5s ease forwards, animatedBackground 850s linear infinite;
        background-size: 85%;
        background-repeat: repeat;
        background-position: 0 0;
    }

    .project-name {
        z-index: 100;
        position: relative;
    }

    .page-header a {
        z-index: 100;
        position: relative;
        color: rgba(255, 255, 255, .9);
        background-color: rgba(0, 0, 0, .4);
        border-color: white;
    }

    .collapse .project-name {
        font-size: 12px;
    }

    .collapse a.btn {
        display: none;
    }

    .expand {
        animation: expand .5s ease forwards, animatedBackground 850s linear infinite;
        padding-top: 80px;
        padding-bottom: 80px;
        background-size: 85%;
        background-repeat: repeat;
        background-position: 0 0;
    }

    .bottom-left {
        position: fixed;
        bottom: 18px;
        left: -10px;
    }

    .top-right {
        position: fixed;
        top: 60px;
        right: 00px;
    }

    .page-header {
        background-image: linear-gradient(120deg, #155799, #fff);
        position: sticky;
        top: 0px;
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .main-content h1,
    .main-content h2,
    .main-content h3,
    .main-content h4,
    .main-content h5,
    .main-content h6 {
        color: #155799;
    }

    @keyframes collapse {
        from {
            padding-top: 80px;
            padding-bottom: 80px;
        }

        to {
            padding-top: 2px;
            padding-bottom: 2px;
        }
    }

    @keyframes expand {
        from {
            padding-top: 2px;
            padding-bottom: 2px;
        }

        to {
            padding-top: 80px;
            padding-bottom: 80px;
        }
    }

    .flex-grow {
        flex-grow: 1;
    }

    .wide-stuffs {
        padding: 50px;
        background: rgb(240, 240, 233);
    }
</style>

<div class="parachute">
    <div class="parachute__img"></div>
</div>

<div class="plane">

</div>

<div class="row">
    <div class="row-logo" style="background-image:url('./Statue of liberty_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>10XTS <a href="mailto: info@10xts.com"><img src="./10xts.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px;"></a></h3> I'm currently working with a FinTech company out of Ohio. We are work to provide
        regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about
        launching, managing and securing traditional asset classes on new and exciting databases.
    </div>
</div>
<div class="row">
    <div class="row-logo" style="background-image:url('./Data Arranging_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Stuff & Things (But not limited to)</h3>
        <ul>
            <li>Unix, Linux and Windows</li>
            <li>Agile Teams</li>
            <li>Node, Python, C#</li>
            <li>HTML, JS, CSS, SCSS</li>
            <li>Angular, Django, GIS</li>
            <li>GIS, D3</li>
            <li>Adobe Creative Cloud, Microsoft Suite</li>
            <li>MongoDB, Postgres, MySql, MSSql</li>
            <li>Distributed Ledgers/Databases/Contracts</li>
            <li>Cloud</li>
            <li>Coffee & Tea Logistics, Production and Consumption</li>
        </ul>
    </div>
</div>
<div class="row wide-stuffs" style="width: 100vw; z-index: 0; position: relative;
    margin: 0px;
    margin-left: calc(50% - 50vw);
    margin-bottom: 50px;">
    <div class="row-logo" style="background-image:url('./America_Monochromatic.svg');"></div>
    <div class="row-item flex-grow">
        <h3>Bits & Bobs</h3> I'll think of something interesting for this piece.
        <div id="map" class="map">
            <div class="mapControls">
                <div><input type="radio" name="mapType" onchange="generateMap('topo');" /> Topographic Data</div>
                <div><input type="radio" name="mapType" checked="checked" onchange="generateMap('city');"/> City Data</div>
                <div><input type="radio" name="mapType" onchange="generateMap('zoning');"/> Zoning Data</div>
            </div>
        </div>
        <small>Attribution: Thanks to OpenLayers<span id="map-attribution"></span></small>
        <script
            src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/build/ol.js"></script>
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css">
        <style>
            .map {
                position: relative;
                width: 100%;
                height: 500px;
                z-index: 0;
            }

            .mapControls {
                position: absolute;
                width: 150px;
                margin: .5em;
                padding: 5px;
                top: .5em;
                right: 0px;
                background: white;
                z-index: 999;
                border-radius: 5px;
                border: 1px solid #e0e0e0;
                -webkit-box-shadow: 0px 0px 17px -8px #000000;
                box-shadow: 0px 0px 17px -8px #000000;
            }

            .mapControls>.button {
                width: 100%;
                text-align: center;
                padding: 5px;
            }

            .mapControls>.button:hover {
                background-color: #e0e0e0;
                color: #606c71;
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
            var map = new ol.Map({
                target: 'map',
                layers: [
 
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([-81.26560360730048, 28.81392793719928]),
                    zoom: 16
                })
            });

            generateMap('city')
            console.log(map)

            function generateMap(mapType) {
                let sources = [];
                if (mapType == 'topo') {
                    const wmsSource = new ol.source.TileWMS({
                        url: 'http://terraservice.net/ogcmap.ashx',
                        params: {'layers': 'DRG', 'TILED': true},
                    });

                    const wmsLayer = new ol.layer.Tile({
                        source: wmsSource,
                    });
                    
                    sources.push(wmsLayer);
                    document.getElementById('map-attribution').innerHTML = '. Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                                'rest/services/World_Topo_Map/MapServer">ArcGIS</a>';
                } else if (mapType == 'city') {
                    sources.push(new ol.layer.Tile({
                        source: new ol.source.OSM()
                    }));
                    document.getElementById('map-attribution').innerHTML = '.';
                } else if (mapType == 'zoning') {
                    sources.push(new ol.layer.Tile({
                        source: new ol.source.OSM()
                    }));
                    document.getElementById('map-attribution').innerHTML = '.';
                } else {
                    sources.push(new ol.layer.Tile({
                        source: new ol.source.OSM()
                    }));
                    document.getElementByIdD('map-attribution').innerHTML = '.';
                }
                map.setLayers(sources);
                console.log(map)
            }
        </script>
    </div>
</div>
<div class="row">
    <div class="row-logo" style="background-image:url('./Spotlight _Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Curiosity Chart</h3> This is an aggregate count of views of this repository supplied by GitHub API. <section
            id="curiosity-container" class="curiosity-container"></section>
    </div>
</div>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    // Set the dimensions of the canvas / graph
    const margin = {
        top: 30,
        right: 20,
        bottom: 30,
        left: 50
    },
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;
    // Parse the date / time
    const parseDate = d3.time.format("%d-%b-%y").parse;
    // Set the ranges
    const x = d3.scale.ordinal().rangeRoundBands([0, width], 1);
    const y = d3.scale.linear().range([height, 0]);
    // Define the axes
    const xAxis = d3.svg.axis().scale(x).orient("bottom");
    const yAxis = d3.svg.axis().scale(y).orient("left").ticks(3);
    // Define the line
    const valueline = d3.svg.line().interpolate("basis").x(function (d) {
        return x(d.superposition);
    }).y(function (d) {
        return y(d.value);
    });
    // Adds the svg canvas
    const svg = d3.select("section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    window.sneakyVariable = [];
    $.ajax({
        url: 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
        type: 'GET',
        success: function (data) {
            const past = {
                value: (data.value - 1) / 2,
                superposition: 'The Past'
            };
            window.sneakyVariable.push(past);
            $.ajax({
                url: 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
                type: 'GET',
                success: function (data) {
                    const present = {
                        value: (data.value) / 2,
                        superposition: 'The Present'
                    };
                    window.sneakyVariable.push(present);
                    window.sneakyVariable.forEach(function (d) {
                        d.superposition = d.superposition;
                        d.value = +d.value;
                    });
                    // Scale the range of the data
                    x.domain(d3.extent(window.sneakyVariable, function (d) {
                        return d.superposition;
                    }));
                    y.domain([0, d3.max(window.sneakyVariable, function (d) {
                        return d.value;
                    })]);
                    // Add the valueline path.
                    //svg.append("path")	
                    //.attr("class", "line")
                    //.attr("d", valueline(window.sneakyVariable));
                    // Add the X Axis
                    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
                    // Add the Y Axis
                    svg.append("g").attr("class", "y axis").call(yAxis);
                    svg.selectAll(".dot").data(window.sneakyVariable, function (d) {
                        return d.value
                    }).enter().append("circle").attr("r", 3).attr("cx", function (d, i) {
                        if (i == 0) return 175;
                        else return 350;
                    }).attr("cy", function (d) {
                        return d.value
                    }).attr("fill", function (d) {
                        return '#155799';
                    });
                    // Add the line
                    svg.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 1.5).attr("d", d3.svg.line().x(function (d) {
                        return x(d.superposition)
                    }).y(function (d) {
                        return y(d.value)
                    }))
                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(request));
                }
            });
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });
    const element = document.querySelector("h1");
    element.classList.add('animate__animated');
    window.sneakyAnimationEnum = ['animate__bounce', 'animate__pulse', 'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__swing', 'animate__tada', 'animate__jello', 'animate__heartBeat'];
    window.sneakyCurrentAnimation = window.sneakyAnimationEnum[Math.floor(Math.random() * window.sneakyAnimationEnum.length)];
    element.classList.add(window.sneakyCurrentAnimation);
    element.addEventListener("mouseover", event => {
        element.classList.remove(window.sneakyCurrentAnimation);
        let current = window.sneakyAnimationEnum[Math.floor(Math.random() * window.sneakyAnimationEnum.length)];
        window.sneakyCurrentAnimation = current;
        element.classList.add(current);
    });
    window.hoverFriends = document.querySelectorAll('div.row-logo');
    window.hoverFriends.forEach(element => {
        element.classList.add('animate__animated');
        element.addEventListener("mouseover", event => {
            element.classList.remove(window.sneakyCurrentAnimation);
            let current = window.sneakyAnimationEnum[Math.floor(Math.random() * window.sneakyAnimationEnum.length)];
            window.sneakyCurrentAnimation = current;
            element.classList.add(current);
        });
    });

</script>
<style>
    .absolute {
        position: absolute;
        color: white;
    }

    #curiosity-container>path {
        stroke: #155799;
        stroke-width: 2;
        fill: none;
    }

    .axis path,
    .axis line {
        fill: none;
        stroke: #8ba9c7;
        stroke-width: 1;
        shape-rendering: crispEdges;
    }

    .dot {
        fill: #155799;
        stroke: #fff;
    }

    .footer-stuffs {
        background: url('./Landscape-agriculture.svg');
        background-size: cover;
        height: 400px;
    }

    .footer-stuffs:after,
    .footer-stuffs:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        mix-blend-mode: multiply;
        height: 400px;
        margin-top: -50px;
    }

    .footer-stuffs:before {
        background: linear-gradient(0deg, rgba(255, 255, 255, .4) 25%, rgba(0, 212, 255, 0.95) 100%);
        mix-blend-mode: initial;
    }

    .footer-stuffs:after {
        background: linear-gradient(0deg, rgba(85, 48, 83, 0.65) 25%, rgba(85, 48, 83, 0.45) 100%), rgba(0, 0, 0, .35) url('stars.png') repeat;
        animation: animatedBackground 1200s linear infinite;
        opacity: var(--timeOfDayOpacity);
    }

    .site-footer {
        position: absolute;
        color: white;
    }

    .site-footer-credits {
        color: white;
    }

    .cloud {
        z-index: 1
    }
</style>
<div class="row">
    <div class="row-logo" style="background-image:url('./Brainstorming session _Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Special Thanks</h3> My Wife, the open-source community, <a
            href="https://www.manypixels.co/gallery">ManyPixels Vectors</a>, my parents, my friends, my family, my
        co-workers, my colleagues and my mentors who have helped me and continue to help me to become not only a better
        engineer & architect, but a better person.
    </div>
</div>

<script>

</script>

<div class="row wide-stuffs footer-stuffs" style="position: absolute;
    left: 0px;
    right: 0px;
    margin: 0px;
    margin-left: calc(50% - 50vw);">



</div>
<style>
    .rocket {
        position: absolute;
        width: 40px;
        left: 150px;
        z-index: 200;
    }

    .rocket .rocket-body {
        width: 40px;
        position: relative;
        z-index: 99;
        left: calc(50% - 50px);
    }

    .rocketBounce {
        animation: bounce 0.5s infinite;
    }

    .rocket .rocket-body .body {
        background-color: #dadada;
        height: 180px;
        left: calc(50% - 50px);
        border-top-right-radius: 100%;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        border-top: 5px solid #f5f5f5;
    }

    .rocket .rocket-body:before {
        content: '';
        position: absolute;
        left: calc(50% - 24px);
        width: 48px;
        height: 13px;
        background-color: #554842;
        bottom: -13px;
        border-bottom-right-radius: 60%;
        border-bottom-left-radius: 60%;
    }

    .rocket .window {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: #a75248;
        left: calc(50% - 10px);
        top: 40px;
        border: 5px solid #b4b2b2;
    }

    .rocket .fin {
        position: absolute;
        z-index: -100;
        height: 55px;
        width: 25px;
        background-color: #a75248;
    }

    .rocket .fin-left {
        left: -20px;
        top: calc(100% - 55px);
        border-top-left-radius: 80%;
        border-bottom-left-radius: 20%;
    }

    .rocket .fin-right {
        right: -20px;
        top: calc(100% - 55px);
        border-top-right-radius: 80%;
        border-bottom-right-radius: 20%;
    }

    .rocket .exhaust-flame {
        position: absolute;
        top: 90%;
        width: 28px;
        background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
        height: 150px;
        left: calc(50% - 14px);
        animation: exhaust 0.2s infinite;
    }

    .rocket .exhaust-fumes li {
        width: 60px;
        height: 60px;
        background-color: #f5f5f5;
        list-style: none;
        position: absolute;
        border-radius: 100%;
    }

    .rocket .exhaust-fumes li:first-child {
        width: 200px;
        height: 200px;
        bottom: -300px;
        animation: fumes 5s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(2) {
        width: 150px;
        height: 150px;
        left: -120px;
        top: 260px;
        animation: fumes 3.2s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(3) {
        width: 120px;
        height: 120px;
        left: -40px;
        top: 330px;
        animation: fumes 3s 1s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(4) {
        width: 100px;
        height: 100px;
        left: -170px;
        animation: fumes 4s 2s infinite;
        top: 380px;
    }

    .rocket .exhaust-fumes li:nth-child(5) {
        width: 130px;
        height: 130px;
        left: -120px;
        top: 350px;
        animation: fumes 5s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(6) {
        width: 200px;
        height: 200px;
        left: -60px;
        top: 280px;
        animation: fumes2 10s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(7) {
        width: 100px;
        height: 100px;
        left: -100px;
        top: 320px;
    }

    .rocket .exhaust-fumes li:nth-child(8) {
        width: 110px;
        height: 110px;
        left: 70px;
        top: 340px;
    }

    .rocket .exhaust-fumes li:nth-child(9) {
        width: 90px;
        height: 90px;
        left: 200px;
        top: 380px;
        animation: fumes 20s infinite;
    }

    @keyframes fumes {
        50% {
            transform: scale(1.5);
            background-color: transparent;
        }

        51% {
            transform: scale(0.8);
        }

        100% {
            background-color: #f5f5f5;
            transform: scale(1);
        }
    }

    @keyframes bounce {
        0% {
            transform: translate3d(0px, 0px, 0);
        }

        50% {
            transform: translate3d(0px, -4px, 0);
        }

        100% {
            transform: translate3d(0px, 0px, 0);
        }
    }

    @keyframes exhaust {
        0% {
            background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
        }

        50% {
            background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%);
        }

        75% {
            background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%);
        }
    }

    @keyframes fumes2 {
        50% {
            transform: scale(1.1);
        }
    }


    .container {
        position: relative;
        left: -35px;
        top: -5px;
        margin: 0 auto;
        width: 40px;
        height: 60px;
        transform-origin: center top;
        animation-name: flicker;
        animation-duration: 3ms;
        animation-delay: 200ms;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    .container .flame {
        bottom: 0;
        position: absolute;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        transform: rotate(135deg) scale(1.5, 1.5);
        -moz-transform: rotate(135deg) scale(1.5, 1.5);
        -webkit-transform: rotate(135deg) scale(1.5, 1.5);
        -o-transform: rotate(135deg) scale(1.5, 1.5);
    }

    .container .yellow {
        left: 15px;
        width: 20px;
        height: 30px;
        background: gold;
        box-shadow: 0px 0px 9px 4px gold;
    }

    .container .orange {
        left: 10px;
        width: 30px;
        height: 40px;
        background: orange;
        box-shadow: 0px 0px 9px 4px orange;
    }

    .container .red {
        left: 5px;
        top: 20px;
        width: 40px;
        height: 50px;
        background: OrangeRed;
        border: 1px solid OrangeRed;
        box-shadow: 0px 0px 5px 4px OrangeRed;
    }

    .container .white {
        left: 15px;
        top: 20px;
        width: 20px;
        height: 30px;
        background: white;
        box-shadow: 0px 0px 9px 4px white;
    }

    .container .circle {
        border-radius: 50%;
        position: absolute;
    }

    .container .blue {
        width: 10px;
        height: 10px;
        left: 25px;
        top: 5px;
        background: SlateBlue;
        box-shadow: 0px 0px 15px 10px #4fc1e9;
    }

    .container .black {
        width: 30px;
        height: 40px;
        left: 10px;
        top: -30px;
        background: #ddd;
        border: 1px solid #282A3A;
        box-shadow: 0px 0px 10px 10px #282A3A;
    }

    @keyframes flicker {
        0% {
            transform: rotate(-1deg);
            -moz-transform: rotate(-1deg);
            -webkit-transform: rotate(-1deg);
        }

        20% {
            transform: rotate(1deg);
            -moz-transform: rotate(1deg);
            -webkit-transform: rotate(1deg);
        }

        40% {
            transform: rotate(-1deg);
            -moz-transform: rotate(-1deg);
            -webkit-transform: rotate(-1deg);
        }

        60% {
            transform: rotate(1deg) scaleY(1.04);
        }

        80% {
            transform: rotate(-2deg) scaleY(0.92);
            -moz-transform: rotate(-2deg) scaleY(0.92);
            -webkit-transform: rotate(-2deg) scaleY(0.92);
        }

        100% {
            transform: rotate(1deg);
            -webkit-transform: rotate(1deg);
            -moz-transform: rotate(1deg);
        }
    }
</style>
<div style="z-index:100; position: absolute; bottom: 0px; top: 0px; left: 0px;">
    <div id="rocket" class="rocket" style="bottom: 1000px; transform: scale(.5);">
        <div id="rocketBody" class="rocket-body rocketBounce">
            <div class="body"></div>
            <div class="fin fin-left"></div>
            <div class="fin fin-right"></div>
            <div class="window"></div>
        </div>
        <div style="height: 60px;" id="flame" class="container">
            <div class="red flame"></div>
            <div class="orange flame"></div>
            <div class="yellow flame"></div>
            <div class="white flame"></div>
            <div class="blue circle"></div>
            <div class="black circle"></div>
        </div>
    </div>
</div>
<script>

    const animateRocket = async function (direction = 1) {
        const rocket = document.getElementById('rocket');
        let bottom = parseInt(rocket.style.bottom);
        const flame = document.getElementById('flame');
        const rocketBody = document.getElementById('rocketBody');
        flame.classList.add('container');
        rocketBody.classList.add('rocketBounce');
        const scaleFactor = Math.abs(bottom) / document.body.offsetHeight;
        const transformAmount = scaleFactor < .4 ? .4 : scaleFactor;
        rocket.style.transform = `scale(${transformAmount})`;
        await sleep(1);
        if (direction === 1) {
            if (bottom > -(document.body.offsetHeight / 3)) bottom = bottom - 3;
            else if (bottom > -(document.body.offsetHeight / 5)) bottom = bottom - 2;
            else bottom = bottom - 1;
            rocket.style.bottom = bottom + 'px';
            if (bottom < -(document.body.offsetHeight - 350)) {
                flame.classList.remove('container');
                rocketBody.classList.remove('rocketBounce');
                await sleep(15000);
                animateRocket(0);
            } else {
                animateRocket(1);
            }
        } else {
            if (bottom > -(document.body.offsetHeight / 3)) bottom = bottom + 3;
            else if (bottom > -(document.body.offsetHeight / 5)) bottom = bottom + 2;
            else bottom = bottom + 1;
            rocket.style.bottom = bottom + 'px';
            if (bottom > 800) {
                await sleep(4444);
                animateRocket(1);
            } else {
                animateRocket(0);
            }
        }
    };

    animateRocket(0); 
</script>
