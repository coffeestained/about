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
	const rocket = document.getElementById('rocket');
	if(document.documentElement.scrollTop > 10 && event.deltaY > 0) {
		header[0].classList.remove('expand');
		header[0].classList.add('collapse');
	} else if(document.documentElement.scrollTop < 10 && event.deltaY < 0) {
		header[0].classList.remove('collapse');
		header[0].classList.add('expand');
		window.scrollTo(0, 0);
	} 
	console.log(rocket, document.documentElement.scrollTop);

}

let direction = 'down';
setInterval(() => {
	const px = parseInt(rocket.style.top, 10);
	console.log(px);
	//rocket.style.top = top + 'px';
}, 100);
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

</script>
<style>
.absolute { position: absolute; color: white; }
#curiosity-container > path {
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

<script>
	
</script>

<div class="row wide-stuffs footer-stuffs" style="    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0px;
    margin-left: calc(50% - 50vw);">
	


</div>
<style>
.rocket {
position: absolute;
    top: -100px;
    width: 40px;
    left: 100px;
    z-index: 200;
}
 .rocket .rocket-body {
	 width: 40px;
	 left: calc(50% - 50px);
	 animation: bounce 0.5s infinite;
}
 .rocket .rocket-body .body {
	 background-color: #dadada;
	 height: 380px;
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
 
</style>
<div style="z-index:100; position: fixed; bottom: 0px; top: 0px; left: 0px; right: 0px;">
  <div id="rocket" class="rocket">
    <div class="rocket-body">
      <div class="body"></div>
      <div class="fin fin-left"></div>
      <div class="fin fin-right"></div>
      <div class="window"></div>
    </div>
    <div class="exhaust-flame"></div>
    <ul class="exhaust-fumes">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>

