<div class="row">
	<img class="row-logo" src="./Watermelon_Monochromatic.svg">
	<div class="row-item"><h3>Matthew Grady ☕</h3> 
<div id="about"></div>

In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube, gaming and a wide array of outdoorsy stuff.

Get connected at <a href="https://linkedin.com/in/matthew-grady-7b752a16">LinkedIn</a>
	</div>
</div>

<script>
 
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";

const header = document.getElementsByTagName("header");
window.onwheel = function(event) {headerScrollFunction(event)};
 
function headerScrollFunction(event) {
  if (document.documentElement.scrollTop > 10 && event.deltaY > 0) {

   header[0].classList.remove('expand');
   header[0].classList.add('collapse');

  } 
 else if (document.documentElement.scrollTop < 10 && event.deltaY < 0) {

    header[0].classList.remove('collapse');
    header[0].classList.add('expand');
    window.scrollTo(0,0);

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
 
.row {
 display: flex;
 margin-bottom: 50px;
}

.row-logo {
 width: 100px;
 margin-right: 1rem;
}

.row-item {

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

<div class="row">
	<img class="row-logo" src="./Data Arranging_Monochromatic.svg">
	<div class="row-item"><h3>Stuff & Things (But not limited to)</h3> 
1. Agile
2. Node
3. Python
4. Angular
5. GIS
6. Adobe Creative Cloud, Microsoft Suite
8. MongoDB, Postgres, MySql, MsSql
9. Cloud
10. Linux & Windows
	</div>
</div>

<div class="row">
	<img class="row-logo" src="./Statue of liberty_Monochromatic.svg">
	<div class="row-item"><h3><img src="./10xts.png" style="max-width: 66px;"></h3> 
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on new and exciting databases. <a href = "mailto: info@10xts.com">Inquire Here</a>
	</div>
</div>


<script src="https://d3js.org/d3.v3.min.js"></script>
<script>

// Set the dimensions of the canvas / graph
const	margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 600 - margin.left - margin.right,
	height = 270 - margin.top - margin.bottom;

// Parse the date / time
const	parseDate = d3.time.format("%d-%b-%y").parse;

// Set the ranges
const	x = d3.time.scale().range([0, width]);
const	y = d3.scale.linear().range([height, 0]);

// Define the axes
const	xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(5);

const	yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(5);

// Define the line
const	valueline = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) { return y(d.close); });
    
// Adds the svg canvas
const	svg = d3.select("chart")
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
path { 
  stroke: steelblue;
	stroke-width: 2;
	fill: none;
}

.axis path,
.axis line {
	fill: none;
	stroke: grey;
	stroke-width: 1;
	shape-rendering: crispEdges;
}
 </style>

<div class="row">
	<img class="row-logo" src="./Spotlight _Monochromatic.svg">
	<div class="row-item"><h3>Curiosity Chart</h3> 
This is an aggregate count of views of this repository supplied by GitHub API.
<chart id="container" class="curiosity-container"></chart>
	</div>
</div>

<div class="row">
	<img class="row-logo" src="./Brainstorming session _Monochromatic.svg">
	<div class="row-item"><h3>Special Thanks</h3> 
		My Wife, <a href="https://www.manypixels.co/gallery">ManyPixels Vectors</a>, friends, family, co-workers and mentors who have helped me and continue to help me to become a better engineer.
	</div>
</div>


