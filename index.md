<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.8.1/css/ol.css" type="text/css">
<style>
.map {
	width: 100%;
	height: 500px;
}
</style>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.8.1/build/ol.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js?r=10"></script>
<div class="row">
	<div class="row-logo" style="background-image:url('./Watermelon_Monochromatic.svg');"></div>
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
      background: url("https://dl.dropboxusercontent.com/s/7xthrrako1qpxy9/parachute.svg")
        no-repeat;
      animation: swing ease-in-out 1s infinite alternate;
      transform-origin: center -20px;
 }

.plane {
  background: url("https://dl.dropboxusercontent.com/s/egcs4ohbyrfa39n/aeroplane.svg")
    no-repeat;
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
    z-index;99;
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

.flex-grow {
 flex-grow: 1;
}
.wide-stuffs {
 padding: 50px;
 background: rgb(203 203 185 / 30%);
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
    border-radius: 5px;"></a></h3> I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on new and exciting databases.
	</div>
</div>
<div class="row">
	<div class="row-logo" style="background-image:url('./Data Arranging_Monochromatic.svg');"></div>
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
<div class="row wide-stuffs" style="width: 100vw;
    margin: 0px;
    margin-left: calc(50% - 50vw);
    margin-bottom: 50px;">
	<div class="row-logo" style="background-image:url('./America_Monochromatic.svg');"></div>
	<div class="row-item flex-grow">
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
	<div class="row-logo" style="background-image:url('./Spotlight _Monochromatic.svg');"></div>
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
window.hoverFriends = document.querySelectorAll('div.row-logo');
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
	
// Cloud animation effect start
$('.cloud').each( function( index, element ){
  var cloud = (element);
TweenLite.set(cloud, {x:"-50vw"});
TweenMax.to(cloud,  30 + (Math.random() * 50), {x:"50vw", repeat:-1})
});
// Cloud animation effect End

// Tyre and tractor bonet animation start
TweenMax.from("#tyre-1, #tyre-2", 3, {rotation: "360", repeat: -1, transformOrigin: "center center", ease:Linear.easeNone});
var bonet = new TimelineMax({repeat:-1,delay:0});
bonet.fromTo("#bonet", 0.2, {y:8, yoyo:true}, {y:0, yoyo:true})
bonet.from("#bonet", 0.2, {y:0, yoyo:true})
// Tyre and tractor bonet animation end

// Covert Path in X Y co-ordinates
  var motionPath = MorphSVGPlugin.pathDataToBezier("#tractorPath",{align:".tractor"});
  TweenMax.set(".tractor", {transformOrigin:"50% 50%"});
  TweenMax.to(".tractor", 55,  {bezier:{ type:"cubic", values:motionPath,autoRotate:["x","y","rotation",180,false],ease:Linear.easeNone}, repeat:-1});
  // Covert Path in X Y co-ordinates

</script>
<style>
.absolute { position: absolute; color: white; }
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
	animation: OpacityAnim 60s ease-in-out 0s infinite alternate;
    mix-blend-mode: initial;
}
.footer-stuffs:after {
	background: linear-gradient(0deg, rgba(85, 48, 83, 0.65) 25%, rgba(85, 48, 83, 0.45) 100%), rgba(0, 0, 0, .35) url('stars.png') repeat;
	animation: OpacityAnim 60s ease-in-out -60s infinite alternate, animatedBackground 1200s linear infinite;
}

.site-footer { position: absolute; color: white; } 
.site-footer-credits { color: white; }
	.cloud{
  z-index:1
}
</style>
<div class="row">
	<div class="row-logo" style="background-image:url('./Brainstorming session _Monochromatic.svg');"></div>
	<div class="row-item">
		<h3>Special Thanks</h3> My Wife, <a href="https://www.manypixels.co/gallery">ManyPixels Vectors</a>, friends, family, co-workers and mentors who have helped me and continue to help me to become a better engineer.
	</div>
</div>

<div class="row wide-stuffs footer-stuffs" style="    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0px;
    margin-left: calc(50% - 50vw);">
	
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> 


	<g style="opacity:0.6;" class="cloud">
		<path style="fill:#FFFFFF;" d="M166.646,141.623c0-10.575,8.573-19.149,19.149-19.149c1.596,0,3.122,0.252,4.604,0.62    c4.997-5.396,12.081-8.827,20.015-8.827c15.108,0,27.355,12.247,27.355,27.355H166.646z"/>
	</g>
	<g style="opacity:0.6;" class="cloud">
		<path style="fill:#FFFFFF;" d="M164.295,65c0-9.442,7.654-17.096,17.096-17.096c1.425,0,2.788,0.225,4.111,0.554    c4.461-4.818,10.786-7.881,17.87-7.881c13.488,0,24.423,10.935,24.423,24.423H164.295z"/>
	</g>
	<g style="opacity:0.6;" class="cloud">
		<path style="fill:#FFFFFF;" d="M400,84.615c0-7.583-6.148-13.731-13.731-13.731c-1.145,0-2.239,0.181-3.302,0.445    c-3.583-3.869-8.663-6.33-14.352-6.33C357.782,65,349,73.782,349,84.615H400z"/>
	</g>

	<g class="cloud">
		<path style="fill:#FFFFFF;" d="M180.261,119.675c-2.303,0-4.479,0.453-6.565,1.111c-6.607-9.498-17.568-15.743-30.014-15.743    s-23.407,6.245-30.014,15.743c-2.086-0.658-4.262-1.111-6.565-1.111c-12.121,0-21.948,9.826-21.948,21.948h117.054    C202.208,129.502,192.382,119.675,180.261,119.675z"/>
	</g>
	<g class="cloud">
		<path style="fill:#FFFFFF;" d="M352,99.333c-2.518,0-4.898,0.496-7.179,1.215c-7.225-10.386-19.21-17.215-32.821-17.215    s-25.596,6.829-32.821,17.215c-2.281-0.719-4.661-1.215-7.179-1.215c-13.255,0-24,10.745-24,24h128    C376,110.078,365.255,99.333,352,99.333z"/>
	</g>
	<g class="cloud">
		<path style="fill:#FFFFFF;" d="M184.705,83.333c0-14.175,11.491-25.667,25.667-25.667c2.139,0,4.185,0.338,6.172,0.832    c6.697-7.233,16.193-11.832,26.828-11.832c20.25,0,36.667,16.416,36.667,36.667H184.705z"/>
	</g>


	<g>
		<path style="fill:transparent;" id="tractorPath" d="M511.39,272.76C398.88,273.31,185,439.91,27.5,452.67,73.36,496.14,187.82,579,256,579,391.75,579,502.75,406.32,511.39,272.76Z"/>
	</g>

  <g class="tractor">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="72.535" viewBox="0 0 360.79 261.7">
    <polygon points="283.16 27.17 232.01 27.17 180.86 27.17 138.25 143.09 232.01 143.24 325.77 143.09 283.16 27.17" style="fill: #666"/>
  <polygon points="278.29 34.15 315.77 136.12 232.03 136.25 148.25 136.12 185.73 34.15 278.29 34.15" style="fill: #64b3f5"/>
  <path d="M199.71,34.15H210l38.41,101.09H238.12Zm18.5,0h40l38.4,101.09h-40Z" style="fill: #e1f1fb"/>
  <path d="M292.57,18.27H169c-1.57,0-3.56,1.46-2.85,2.85l5.39,10.46c.71,1.38,1.29,2.84,2.84,2.84H287.78c1.55,0,2.19-1.42,2.85-2.84l4.78-10.46C296.07,19.69,294.13,18.27,292.57,18.27Z" style="fill: #ff0"/>
  <path d="M239.34,132.74H48.78c-12.54,0-6,10-6,22.53v21.44a22.61,22.61,0,0,0,.16,2.62H12.36v13.46H49.44a22.7,22.7,0,0,0,16.13,6.72H339.05L307.25,113l-48.64.48Z" style="fill: #445a64"/>
  <g>
    <path d="M20.12,194.71H49.44a27.93,27.93,0,0,0,16.13,4.8H339.06l-5.49-10.64H20.12Z" style="fill: #36464e"/>
    <path d="M17.08,168.24H3a3.05,3.05,0,0,0-3,3v29.56a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V171.28A3.05,3.05,0,0,0,17.08,168.24Z" style="fill: #36464e"/>
  </g>
  <g id="bonet">
    <polygon points="86.22 75.91 79.88 75.91 79.88 97.76 86.22 97.76 86.22 75.91" style="fill: #4d4d4d"/>
    <path d="M91.16,66.14H74.94a2.63,2.63,0,0,0-2.62,2.61v9.62A2.63,2.63,0,0,0,74.94,81H91.16a2.62,2.62,0,0,0,2.61-2.61V68.75A2.62,2.62,0,0,0,91.16,66.14Z" style="fill: #606060"/>
    <path d="M157.64,85.58,52.74,94.13C32.37,95.79,25.81,116,25.81,138.48V148c0,22.47-1.12,28.82,19.3,28.82H132.6c20.42,0,37.13-18.39,37.13-40.86v-9.5C169.73,104,178,83.92,157.64,85.58Z" style="fill: #ff0"/>
    <path d="M26.18,129.69c-.25,2.86-.37,5.8-.37,8.78V148c0,22.47-1.12,28.82,19.3,28.82H132.6c20.42,0,37.13-18.39,37.13-40.86v-9.5c0-11,2-21.48,1.62-29.06L55.92,105.22C39.11,106.36,30.14,116.28,26.18,129.69Z" style="fill: #ffd500"/>
    <path id="chimney" d="M145.68,23.49v120.1a5.62,5.62,0,0,0,5.6,5.6h0a5.61,5.61,0,0,0,5.6-5.6V15.28c0-10.45-11.34-16.71-17.25-15V11.7c3.6-.65,6.08,1.92,6.08,3.86C145.7,18.2,145.68,20.84,145.68,23.49Z" style="fill: #424242"/>
  </g>
  <g id="tyre-2">
    <path d="M283.05,129.07c-2.12.16-4.23.43-6.29.79L275,126.29a2.42,2.42,0,0,0-2.68-1.58l-3.41.88a2.4,2.4,0,0,0-1.58,2.67l.14,4q-3,1-5.9,2.35l-2.63-3a2.39,2.39,0,0,0-3-.87l-3.08,1.69a2.43,2.43,0,0,0-.87,3l1.14,3.85A62.67,62.67,0,0,0,248,143l-3.31-2.27a2.41,2.41,0,0,0-3.11-.1L239,143a2.41,2.41,0,0,0-.1,3.1L241,149.6a62.87,62.87,0,0,0-4,4.88l-3.77-1.38a2.42,2.42,0,0,0-3,.68l-1.89,3a2.42,2.42,0,0,0,.68,3l2.85,2.82q-1.48,2.79-2.7,5.74l-4-.4a2.44,2.44,0,0,0-2.78,1.42l-1.08,3.34a2.42,2.42,0,0,0,1.4,2.77l3.47,2c-.49,2-.89,4.12-1.18,6.23l-4,.6c-1.2.19-2.26.85-2.33,2.06l-.23,3.51c-.08,1.21.9,2,2.06,2.33l3.87,1.11a62.69,62.69,0,0,0,.4,6.32l-3.69,1.58a2.41,2.41,0,0,0-1.75,2.57l.66,3.45a2.41,2.41,0,0,0,2.57,1.75l4,.11a61.5,61.5,0,0,0,2,6l-3.17,2.44a2.4,2.4,0,0,0-1,2.92l1.49,3.18a2.42,2.42,0,0,0,2.93,1.06l3.91-.89c1.05,1.84,2.18,3.63,3.4,5.35l-2.47,3.15a2.42,2.42,0,0,0-.29,3.09l2.24,2.72a2.42,2.42,0,0,0,3.1.29l3.57-1.84A62.94,62.94,0,0,0,246.8,241l-1.61,3.67a2.43,2.43,0,0,0,.48,3.08l2.85,2.07a2.41,2.41,0,0,0,3.07-.49l3-2.67a62.32,62.32,0,0,0,5.56,3.06l-.65,3.94a2.42,2.42,0,0,0,1.23,2.86l3.27,1.3a2.43,2.43,0,0,0,2.86-1.23l2.23-3.33a62.39,62.39,0,0,0,6.16,1.57l.35,4a2.4,2.4,0,0,0,1.9,2.45l3.49.45a2.42,2.42,0,0,0,2.46-1.9l1.35-3.8c1,0,2.08.08,3.13.08s2.14,0,3.2-.08l1.34,3.78a2.42,2.42,0,0,0,2.45,1.91l3.5-.44a2.43,2.43,0,0,0,1.91-2.45l.35-4a62.92,62.92,0,0,0,6.15-1.57l2.23,3.31a2.42,2.42,0,0,0,2.85,1.24l3.27-1.29a2.43,2.43,0,0,0,1.24-2.86l-.64-4c1.9-.93,3.76-2,5.55-3.06l3,2.67a2.42,2.42,0,0,0,3.07.49l2.85-2.07a2.42,2.42,0,0,0,.49-3.07l-1.61-3.69a62.8,62.8,0,0,0,4.61-4.33l3.57,1.84a2.41,2.41,0,0,0,3.09-.29l2.25-2.71a2.43,2.43,0,0,0-.29-3.1l-2.47-3.16c1.21-1.72,2.35-3.51,3.39-5.35l3.91.9a2.41,2.41,0,0,0,2.92-1.06l1.5-3.18a2.41,2.41,0,0,0-1.05-2.93l-3.17-2.44c.75-2,1.4-4,2-6l4-.1a2.42,2.42,0,0,0,2.58-1.74l.66-3.46a2.42,2.42,0,0,0-1.75-2.57l-3.69-1.58c.22-2.08.36-4.19.38-6.32l3.87-1.1a2.43,2.43,0,0,0,2.06-2.33l-.22-3.52c-.07-1.2-1.14-1.87-2.33-2.06l-4-.61q-.45-3.17-1.18-6.23l3.45-2a2.42,2.42,0,0,0,1.42-2.77l-1.09-3.35a2.41,2.41,0,0,0-2.77-1.41l-4,.38c-.81-1.95-1.71-3.87-2.7-5.73l2.85-2.82a2.42,2.42,0,0,0,.68-3l-1.88-3a2.42,2.42,0,0,0-3-.68l-3.77,1.38a63.27,63.27,0,0,0-4-4.89l2.07-3.44a2.4,2.4,0,0,0-.1-3.1l-2.56-2.42a2.41,2.41,0,0,0-3.11.1L327.83,143a60.88,60.88,0,0,0-5.12-3.73l1.14-3.84a2.41,2.41,0,0,0-.86-3l-3.08-1.7a2.43,2.43,0,0,0-3,.87l-2.64,3q-2.86-1.31-5.9-2.34l.15-4a2.41,2.41,0,0,0-1.57-2.68l-3.41-.88a2.42,2.42,0,0,0-2.68,1.58l-1.81,3.58c-2.09-.36-4.22-.63-6.38-.79l-.85-3.92c-.26-1.18-1-2.2-2.2-2.2h-3.52c-1.21,0-1.94,1-2.2,2.2Z" style="fill: #202020"/>
    <path d="M286,157a34.45,34.45,0,1,0,34.45,34.44A34.44,34.44,0,0,0,286,157Z" style="fill: #ffd500"/>
  </g>
  <g id="tyre-1">
    <path d="M100,157.28c-1.68.13-3.33.34-5,.62l-1.42-2.81a1.9,1.9,0,0,0-2.11-1.24l-2.68.69a1.9,1.9,0,0,0-1.25,2.1l.12,3.16a45.69,45.69,0,0,0-4.64,1.84L81,159.27a1.91,1.91,0,0,0-2.36-.68l-2.42,1.33a1.9,1.9,0,0,0-.69,2.35l.9,3c-1.39.92-2.74,1.9-4,2.95l-2.6-1.79a1.9,1.9,0,0,0-2.45-.08l-2,1.89a1.92,1.92,0,0,0-.08,2.45l1.63,2.72c-1.12,1.22-2.18,2.51-3.18,3.84l-3-1.08a1.91,1.91,0,0,0-2.39.53l-1.49,2.34a1.91,1.91,0,0,0,.53,2.39l2.25,2.23c-.78,1.46-1.49,3-2.13,4.51l-3.13-.31A1.91,1.91,0,0,0,52.24,189l-.86,2.63a1.91,1.91,0,0,0,1.11,2.19l2.73,1.59c-.39,1.61-.7,3.25-.93,4.91l-3.12.48c-.94.14-1.78.67-1.83,1.62l-.18,2.76A1.9,1.9,0,0,0,50.78,207l3,.87a47.87,47.87,0,0,0,.31,5l-2.9,1.25a1.89,1.89,0,0,0-1.38,2l.52,2.72a1.91,1.91,0,0,0,2,1.38l3.16.08q.66,2.43,1.55,4.75L54.61,227a1.89,1.89,0,0,0-.83,2.3L55,231.79a1.9,1.9,0,0,0,2.3.83l3.08-.7c.82,1.45,1.72,2.85,2.68,4.21l-2,2.48a1.9,1.9,0,0,0-.23,2.43l1.76,2.14a1.91,1.91,0,0,0,2.44.23L67.86,242q1.74,1.78,3.64,3.41l-1.27,2.89a1.9,1.9,0,0,0,.37,2.42l2.25,1.63a1.9,1.9,0,0,0,2.41-.37l2.37-2.11A47.52,47.52,0,0,0,82,252.24l-.5,3.1a1.9,1.9,0,0,0,1,2.25l2.58,1a1.9,1.9,0,0,0,2.25-1L89.05,255a48.27,48.27,0,0,0,4.84,1.23l.28,3.14a1.91,1.91,0,0,0,1.5,1.94l2.74.34a1.9,1.9,0,0,0,1.94-1.49l1.06-3c.82,0,1.64.06,2.47.06s1.68,0,2.51-.06l1.06,3a1.89,1.89,0,0,0,1.93,1.49l2.75-.34a1.9,1.9,0,0,0,1.5-1.93l.29-3.15a46.19,46.19,0,0,0,4.83-1.24l1.76,2.61a1.89,1.89,0,0,0,2.24,1l2.58-1a1.92,1.92,0,0,0,1-2.25l-.51-3.11q2.25-1.11,4.37-2.41l2.35,2.1a1.91,1.91,0,0,0,2.42.38l2.24-1.62a1.9,1.9,0,0,0,.39-2.42l-1.27-2.91a48.65,48.65,0,0,0,3.63-3.41l2.81,1.45a1.9,1.9,0,0,0,2.44-.23L147,241a1.92,1.92,0,0,0-.23-2.44l-1.95-2.49a49.81,49.81,0,0,0,2.67-4.21l3.07.71a1.91,1.91,0,0,0,2.31-.83l1.18-2.51a1.9,1.9,0,0,0-.82-2.3L150.67,225q.89-2.33,1.55-4.75l3.14-.08a1.91,1.91,0,0,0,2-1.37l.52-2.73a1.9,1.9,0,0,0-1.37-2l-2.92-1.25c.19-1.63.29-3.29.32-5l3-.86c.92-.27,1.67-.89,1.61-1.84l-.16-2.76a1.92,1.92,0,0,0-1.84-1.63l-3.13-.48c-.23-1.66-.54-3.3-.93-4.91l2.73-1.58a1.92,1.92,0,0,0,1.11-2.19l-.85-2.63a1.93,1.93,0,0,0-2.19-1.11l-3.14.3c-.64-1.54-1.34-3-2.12-4.51l2.23-2.21a1.91,1.91,0,0,0,.54-2.39l-1.48-2.34a1.9,1.9,0,0,0-2.39-.54l-3,1.08q-1.5-2-3.18-3.84l1.62-2.71a1.91,1.91,0,0,0-.07-2.45l-2-1.89a1.9,1.9,0,0,0-2.45.07l-2.61,1.79q-1.95-1.56-4-2.94l.89-3a1.89,1.89,0,0,0-.67-2.35l-2.43-1.34a1.9,1.9,0,0,0-2.35.68l-2.08,2.37a49.38,49.38,0,0,0-4.65-1.84l.12-3.14a1.9,1.9,0,0,0-1.24-2.11l-2.68-.69a1.9,1.9,0,0,0-2.11,1.24l-1.43,2.82a48.61,48.61,0,0,0-5-.62l-.68-3.09c-.2-.93-.78-1.73-1.73-1.73h-2.77c-1,0-1.53.81-1.73,1.73Z" style="fill: #202020"/>
    <path d="M102.39,179.27a27.12,27.12,0,1,0,27.12,27.12A27.12,27.12,0,0,0,102.39,179.27Z" style="fill: #ffd500"/>
  </g>
  <path d="M321.66,109.53H257.2l-47.82,48.14,7.13,3.09L258.87,119l60.49-.63,36.9,33.18s4.83-4.84,4.51-5.55S321.66,109.53,321.66,109.53Z" style="fill: #ff0"/>
    </g>A

</svg>

</div>

