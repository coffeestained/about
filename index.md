<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>

<div class="row">
	<img class="row-logo" src="./Watermelon_Monochromatic.svg">
	<div class="row-item"><h3>Matthew Grady ☕ <a href = "https://linkedin.com/in/matthew-grady-7b752a16"><img src="./LI-In-Bug.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px; max-height: 29.06px;"></a></h3> 
<div id="about"></div>

In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube, gaming and a wide array of outdoorsy stuff.

Get connected at <a href="https://linkedin.com/in/matthew-grady-7b752a16">LinkedIn</a>
	</div>
</div>

<script>
const element = document.querySelector("h1");

window.sneakyAnimationEnum = ['animate__bounce','animate__pulse','animate__rubberBand','animate__shakeX',
	'animate__shakeY','animate__swing','animate__tada','animate__jello','animate__heartBeat'];
window.sneakyCurrentAnimation = window.sneakyAnimationEnum[Math.floor(Math.random()*window.sneakyAnimationEnum.length)];
element.classList.add(window.sneakyCurrentAnimation);
	
element.addEventListener("mouseover", event => {
  element.classList.remove(window.sneakyCurrentAnimation);
  let current = window.sneakyAnimationEnum[Math.floor(Math.random()*window.sneakyAnimationEnum.length)];
	window.sneakyCurrentAnimation = current;
  element.classList.add(current);
});
	
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

ul li { 
  list-style-image: radial-gradient(circle, #155799,  #155799);
  list-style-border: 1px solid #155799;
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
<ul>
  <li>Agile</li>
  <li>Node</li>
  <li>Python</li>
  <li>Angular</li>
  <li>GIS</li>
  <li>Adobe Creative Cloud, Microsoft Suite</li>
  <li>Coffee</li>
  <li>MongoDB, Postgres, MySql, MsSql</li>
  <li>Cloud</li>
</ul>  
	</div>
</div>

<div class="row">
	<img class="row-logo" src="./Statue of liberty_Monochromatic.svg">
	<div class="row-item"><h3>10XTS <a href = "mailto: info@10xts.com"><img src="./10xts.png" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799; 
    background: rgba(21, 87, 153, .05);
    border-radius: 5px;"></a></h3> 
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on new and exciting databases. 
	</div>
</div>

<div class="row">
	<img class="row-logo" src="./Spotlight _Monochromatic.svg">
	<div class="row-item"><h3>Curiosity Chart</h3> 
This is an aggregate count of views of this repository supplied by GitHub API. 
<section id="curiosity-container" class="curiosity-container"></section>
	</div>
</div>

<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
	
// Set the dimensions of the canvas / graph
var	margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 600 - margin.left - margin.right,
	height = 270 - margin.top - margin.bottom;
 
// Parse the date / time
var	parseDate = d3.time.format("%d-%b-%y").parse;
 
// Set the ranges
var     x = d3.scale.ordinal().rangeRoundBands([0, width], 1);
var	y = d3.scale.linear().range([height, 0]);
 
// Define the axes
var 	xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
 
var	yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(3);
 
// Define the line
var     valueline = d3.svg.line()
	.interpolate("basis")
	.x(function (d) {
	    return x(d.superposition);
	 })
	 .y(function (d) {
	    return y(d.value);
	 });
    
// Adds the svg canvas
var	svg = d3.select("section")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
window.sneakyVariable = [];
 	
$.ajax({

    url : 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
    type : 'GET',
    success : function(data) { 
	const past = {value: (data.value-1)/2, superposition: 'The Past'};
        window.sneakyVariable.push(past);
	$.ajax({

	    url : 'https://api.countapi.xyz/hit/coffeestained.github.io/about-this-dev',
	    type : 'GET',
	    success : function(data) {              
		const present = {value: (data.value)/2, superposition: 'The Present'};
		window.sneakyVariable.push(present);

		window.sneakyVariable.forEach(function(d) {
			d.superposition = d.superposition;
			d.value = +d.value;
		});

		// Scale the range of the data
		x.domain(d3.extent(window.sneakyVariable, function(d) { return d.superposition; }));
		y.domain([0, d3.max(window.sneakyVariable, function(d) { return d.value; })]);

		// Add the valueline path.
		svg.append("path")	
			.attr("class", "line")
			.attr("d", valueline(window.sneakyVariable));

		// Add the X Axis
		svg.append("g")		
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		// Add the Y Axis
		svg.append("g")		
			.attr("class", "y axis")
			.call(yAxis);
	
		svg.selectAll(".dot")
		      .data(window.sneakyVariable, function(d){
			return d.value
		      })
		      .enter()
		      .append("circle")
		      .attr("r", 3)
		      .attr("cx", function(d,i){
			if (i == 0) return 175;
			else return 350;
		      })
		      .attr("cy", function(d){
			return d.value
		      })
		      .attr("fill", function(d){
			return '#155799';
		      });
	
	    },
	    error : function(request,error)
	    {
		alert("Request: "+JSON.stringify(request));
	    }
	});	
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
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
	<img class="row-logo" src="./Brainstorming session _Monochromatic.svg">
	<div class="row-item"><h3>Special Thanks</h3> 
		My Wife, <a href="https://www.manypixels.co/gallery">ManyPixels Vectors</a>, friends, family, co-workers and mentors who have helped me and continue to help me to become a better engineer.
	</div>
</div>



