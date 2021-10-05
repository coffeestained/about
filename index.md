## Matthew Grady ☕

<img src="./Web Developer_Monochromatic.svg" class="top-right">
<img src="./Statue of liberty_Monochromatic.svg" class="bottom-left">

<div id="about"></div>

In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube, gaming and a wide array of outdoorsy stuff.

Get connected at [LinkedIn](https://linkedin.com/in/matthew-grady-7b752a16)

<script>
 
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";

const header = document.getElementsByTagName("header");
window.onwheel = function(event) {headerScrollFunction(event)};
 
function headerScrollFunction(event) {
 
   console.log(event.deltaY, document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 10 && event.deltaY > 0) {

   header[0].classList.remove('expand');
   header[0].classList.add('collapse');
	
   

  } 
 else if (document.documentElement.scrollTop < 10 && event.deltaY < 0) {

    header[0].classList.remove('collapse');
    header[0].classList.add('expand');

 }
}
</script>

<style>
 
 body {
  scroll-snap-type: y mandatory;
 }
 
 header {
 scroll-snap-align: start;
 }
 
 #content {
 scroll-snap-align: start;
 }
 
 #about {
 scroll-snap-align: start;
 }
 
 #stuff--things-but-not-limited-to {
 scroll-snap-align: start;
 }
 
 #10xts {
 scroll-snap-align: start;
 }

 #curiosity-chart {
 scroll-snap-align: start;
 }
 
.collapse {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: collapse .5s ease forwards;
 
}

.collapse .project-name {
 font-size: 12px;
}

.collapse a.btn {
 display: none;
}
 
.expand {
 animation: expand .5s ease forwards;
 padding-top: 80px;
 padding-bottom: 80px;
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
  background-image: linear-gradient(
  120deg, #155799, #fff);
  position: sticky;
  top: 0px;
  padding-top: 80px;
  padding-bottom: 80px;
 }
 
 .main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {
  color:  #155799;
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

### Stuff & Things (But not limited to)
1. Agile
2. Node
3. Python
4. Angular
5. GIS
6. Adobe Creative Cloud, Microsoft Suite
8. MongoDB, Postgres, MySql, MsSql
9. Cloud
10. Linux & Windows

### 10XTS 
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on new and exciting databases. <a href = "mailto: info@10xts.com">Inquire Here</a>

<script src="https://d3js.org/d3.v3.min.js"></script>
<script>

// Set the dimensions of the canvas / graph
var	margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 600 - margin.left - margin.right,
	height = 270 - margin.top - margin.bottom;

// Parse the date / time
var	parseDate = d3.time.format("%d-%b-%y").parse;

// Set the ranges
var	x = d3.time.scale().range([0, width]);
var	y = d3.scale.linear().range([height, 0]);

// Define the axes
var	xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(5);

var	yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(5);

// Define the line
var	valueline = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) { return y(d.close); });
    
// Adds the svg canvas
var	svg = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data.csv", function(error, data) {
	data.forEach(function(d) {
		d.date = parseDate(d.date);
		d.close = +d.close;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.close; })]);

	// Add the valueline path.
	svg.append("path")		// Add the valueline path.
		.attr("class", "line")
		.attr("d", valueline(data));

	// Add the X Axis
	svg.append("g")			// Add the X Axis
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	// Add the Y Axis
	svg.append("g")			// Add the Y Axis
		.attr("class", "y axis")
		.call(yAxis);

});

</script>

<style>
 /* AXES */
/* ticks */
.axis line{
stroke: #706f6f;
stroke-width: 0.5;
shape-rendering: crispEdges;
}

/* axis contour */
.axis path {
stroke: #706f6f;
stroke-width: 0.7;
shape-rendering: crispEdges;
}

/* axis text */
.axis text {
fill: #2b2929;
font-family: Georgia;
font-size: 120%;
}

/* LINE CHART */
path.line-0 {
    fill: none;
    stroke: #ed3700;
}

path.line-1 {
    fill: none;
    stroke: #2b2929;
    stroke-dasharray: 2;
}

path.line-2 {
    fill: none;
    stroke: #9c9c9c;
    stroke-dasharray: 6;
}

.serie_label {
  fill: #2b2929;
  font-family: Georgia;
  font-size: 80%;
}
 </style>

### Curiosity Chart
This is an aggregate count of views of this repository supplied by GitHub API.
<div id="container" class="svg-container"></div>

### Special Thanks

My Wife, [ManyPixels Vectors](https://www.manypixels.co/gallery), friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.


