<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.8.1/css/ol.css" type="text/css">
<style>
.map {
	width: 600px;
	height: 270px;
}
</style>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.8.1/build/ol.js"></script>
<div class="row">
	<div class="row-logo" style="background:url('./Watermelon_Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Matthew Grady ☕ <a href="https://linkedin.com/in/matthew-grady-7b752a16"><img class="hover-friends" src="./LI-In-Bug.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px; max-height: 29.06px;"></a></h3>
		<div id="about"></div> In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube, gaming and a wide array of outdoorsy stuff. Get connected at <a href="https://linkedin.com/in/matthew-grady-7b752a16">LinkedIn</a>
	</div>
</div>
<script>
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";
const header = document.getElementsByTagName("header");
window.onwheel = function(event) {
	headerScrollFunction(event)
};

function headerScrollFunction(event) {
	if(document.documentElement.scrollTop > 10 && event.deltaY > 0) {
		header[0].classList.remove('expand');
		header[0].classList.add('collapse');
	} else if(document.documentElement.scrollTop < 10 && event.deltaY < 0) {
		header[0].classList.remove('collapse');
		header[0].classList.add('expand');
		window.scrollTo(0, 0);
	}
}
</script>
<style>
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
	animation: OpacityAnim 60s ease-in-out 0s infinite alternate;
	border-bottom: 4px rgba(255, 255, 255, .4) solid;
}

.page-header:after {
	background: linear-gradient(0deg, rgba(85, 48, 83, 0.65) 25%, rgba(85, 48, 83, 0.45) 100%), rgba(0, 0, 0, .35) url('stars.png') repeat;
	animation: OpacityAnim 60s ease-in-out -60s infinite alternate, animatedBackground 1200s linear infinite;
	border-bottom: 4px rgba(0, 0, 0, .3) solid;
}

@keyframes OpacityAnim {
	0% {
		opacity: 1.0
	}

	100% {
		opacity: 0.0
	}
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
}

.row-logo {
	width: 100px;
	margin-right: 1rem;
}

.row-logo:after,
.row-logo:before {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

.row-logo:before {
	background: linear-gradient(0deg, rgba(255, 255, 255, .4) 25%, rgba(0, 212, 255, 0.3) 100%);
	animation: OpacityAnim 60s ease-in-out 0s infinite alternate;
}

.row-logo:after {
	background: linear-gradient(0deg, rgba(85, 48, 83, 0.65) 25%, rgba(85, 48, 83, 0.45) 100%), rgba(0, 0, 0, .35) url('stars.png') repeat;
	animation: OpacityAnim 60s ease-in-out -60s infinite alternate, animatedBackground 1200s linear infinite;
}

.row-item {}

ul li {
	list-style-image: radial-gradient(circle, #155799, #155799);
	list-style-border: 1px solid #155799;
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
</style>
<div class="row">
	<div class="row-logo" style="background:url('./Statue of liberty_Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>10XTS <a href="mailto: info@10xts.com"><img src="./10xts.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px;"></a></h3> I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on new and exciting databases.
	</div>
</div>
<div class="row">
	<div class="row-logo" style="background:url('./Data Arranging_Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Stuff & Things (But not limited to)</h3>
		<ul>
			<li>Agile</li>
			<li>Node</li>
			<li>Python</li>
			<li>Angular</li>
			<li>GIS</li>
			<li>Adobe Creative Cloud, Microsoft Suite</li>
			<li>Coffee</li>
			<li>MongoDB, Postgres, MySql, MSSql</li>
			<li>Cloud</li>
		</ul>
	</div>
</div>
<div class="row">
	<div class="row-logo" style="background:url('./America_Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Bits & Bobs</h3> I'll think of something interesting for this piece. <div id="map" class="map"></div>
		<script type="text/javascript">

			const parser = new DOMParser();

/* Async function used to retrieve start and end time from RADAR_1KM_RRAI layer GetCapabilities document */
async function getRadarStartEndTime() {
  let response = await fetch(
    "https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RRAI"
  );
  let data = await response
    .text()
    .then((data) =>
      parser
        .parseFromString(data, "text/xml")
        .getElementsByTagName("Dimension")[0]
        .innerHTML.split("/")
    );
  return [new Date(data[0]), new Date(data[1])];
}

let frameRate = 1.0; // frames per second
let animationId = null;
let startTime = null;
let endTime = null;
let current_time = null;

let layers = [
	new ol.layer.Tile({
		source: new ol.source.XYZ({
			attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
			url: 'https://services.arcgisonline.com/arcgis/rest/services/' + 'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}',
			maxZoom: 15,
			projection: 'EPSG:4326',
			tileSize: 512, // the tile size supported by the ArcGIS tile service
			maxResolution: 180 / 512, // Esri's tile grid fits 180 degrees on one 512 px tile
			wrapX: true,
		}),
	}),
    new ol.layer.Image({
        source: new ol.source.ImageWMS({
          format: "image/png",
          url: "https://geo.weather.gc.ca/geomet/",
          params: { LAYERS: "RADAR_1KM_RRAI", TILED: true },
          transition: 0
        }),
        opacity: .5
    })
];

let map = new ol.Map({
	target: "map",
	layers: layers,
	view: new ol.View({
		center: [ -81.37, 28.53 ],
		projection: 'EPSG:4326',
		zoom: 6,
		minZoom: 2,
	}),
});

function updateInfo(current_time) {
   // No Info Container At This time
}

function setTime() {
  current_time = current_time;
  if (current_time === null) {
    current_time = startTime;
  } else if (current_time >= endTime) {
    current_time = startTime;
  } else {
    current_time = new Date(
      current_time.setMinutes(current_time.getMinutes() + 10)
    );
  }
  layers[1]
    .getSource()
    .updateParams({ TIME: current_time.toISOString().split(".")[0] + "Z" });
  layers[2]
    .getSource()
    .updateParams({ TIME: current_time.toISOString().split(".")[0] + "Z" });
  updateInfo(current_time);
}

getRadarStartEndTime().then((data) => {
  startTime = data[0];
  endTime = data[1];
  setTime();
});

let stop = function () {
  if (animationId !== null) {
    window.clearInterval(animationId);
    animationId = null;
  }
};

let play = function () {
  stop();
  animationId = window.setInterval(setTime, 1000 / frameRate);
};
		</script>
	</div>
</div>
<div class="row">
	<div class="row-logo" style="background:url('./Spotlight _Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Curiosity Chart</h3> This is an aggregate count of views of this repository supplied by GitHub API. <section id="curiosity-container" class="curiosity-container"></section>
	</div>
</div>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
const valueline = d3.svg.line().interpolate("basis").x(function(d) {
	return x(d.superposition);
}).y(function(d) {
	return y(d.value);
});
// Adds the svg canvas
const svg = d3.select("section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
window.sneakyVariable = [];
$.ajax({
	url: 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
	type: 'GET',
	success: function(data) {
		const past = {
			value: (data.value - 1) / 2,
			superposition: 'The Past'
		};
		window.sneakyVariable.push(past);
		$.ajax({
			url: 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
			type: 'GET',
			success: function(data) {
				const present = {
					value: (data.value) / 2,
					superposition: 'The Present'
				};
				window.sneakyVariable.push(present);
				window.sneakyVariable.forEach(function(d) {
					d.superposition = d.superposition;
					d.value = +d.value;
				});
				// Scale the range of the data
				x.domain(d3.extent(window.sneakyVariable, function(d) {
					return d.superposition;
				}));
				y.domain([0, d3.max(window.sneakyVariable, function(d) {
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
				svg.selectAll(".dot").data(window.sneakyVariable, function(d) {
					return d.value
				}).enter().append("circle").attr("r", 3).attr("cx", function(d, i) {
					if(i == 0) return 175;
					else return 350;
				}).attr("cy", function(d) {
					return d.value
				}).attr("fill", function(d) {
					return '#155799';
				});
				// Add the line
				svg.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 1.5).attr("d", d3.svg.line().x(function(d) {
					return x(d.superposition)
				}).y(function(d) {
					return y(d.value)
				}))
			},
			error: function(request, error) {
				alert("Request: " + JSON.stringify(request));
			}
		});
	},
	error: function(request, error) {
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
window.hoverFriends = document.querySelectorAll('img');
console.log(hoverFriends);
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
path {
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
</style>
<div class="row">
	<div class="row-logo" style="background:url('./Brainstorming session _Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Special Thanks</h3> My Wife, <a href="https://www.manypixels.co/gallery">ManyPixels Vectors</a>, friends, family, co-workers and mentors who have helped me and continue to help me to become a better engineer.
	</div>
</div>
