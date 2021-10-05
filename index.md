
## Matthew Grady is Coffee Stained ☕

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
  if (document.documentElement.scrollTop > 40) {

   header[0].classList.remove('expand');
   header[0].classList.add('collapse');

  } 
 else if (document.documentElement.scrollTop < 40 && event.deltaY < 0) {

    header[0].classList.remove('collapse');
    header[0].classList.add('expand');

 }
}
</script>

<style>
 
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

<script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>
<script>
//------------------------1. PREPARATION------------------------//
//-----------------------------SVG------------------------------// 
const width = 960;
const height = 500;
const margin = 5;
const padding = 5;
const adj = 30;
// we are appending SVG first
const svg = d3.select("div#container").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-"
          + adj + " -"
          + adj + " "
          + (width + adj *3) + " "
          + (height + adj*3))
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

//-----------------------------DATA-----------------------------//
const timeConv = d3.timeParse("%d-%b-%Y");
const dataset = d3.csv("data.csv");
dataset.then(function(data) {
    var slices = data.columns.slice(1).map(function(id) {
        return {
            id: id,
            values: data.map(function(d){
                return {
                    date: timeConv(d.date),
                    measurement: +d[id]
                };
            })
        };
    });

//----------------------------SCALES----------------------------//
const xScale = d3.scaleTime().range([0,width]);
const yScale = d3.scaleLinear().rangeRound([height, 0]);
xScale.domain(d3.extent(data, function(d){
    return timeConv(d.date)}));
yScale.domain([(0), d3.max(slices, function(c) {
    return d3.max(c.values, function(d) {
        return d.measurement + 4; });
        })
    ]);

//-----------------------------AXES-----------------------------//
const yaxis = d3.axisLeft()
    .ticks((slices[0].values).length)
    .scale(yScale);

const xaxis = d3.axisBottom()
    .ticks(d3.timeDay.every(1))
    .tickFormat(d3.timeFormat('%b %d'))
    .scale(xScale);

//----------------------------LINES-----------------------------//
const line = d3.line()
    .x(function(d) { return xScale(d.date); })
    .y(function(d) { return yScale(d.measurement); }); 

let id = 0;
const ids = function () {
    return "line-"+id++;
}  
//-------------------------2. DRAWING---------------------------//
//-----------------------------AXES-----------------------------//
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xaxis);

svg.append("g")
    .attr("class", "axis")
    .call(yaxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("dy", ".75em")
    .attr("y", 6)
    .style("text-anchor", "end")
    .text("Frequency");

//----------------------------LINES-----------------------------//
const lines = svg.selectAll("lines")
    .data(slices)
    .enter()
    .append("g");

    lines.append("path")
    .attr("class", ids)
    .attr("d", function(d) { return line(d.values); });

    lines.append("text")
    .attr("class","serie_label")
    .datum(function(d) {
        return {
            id: d.id,
            value: d.values[d.values.length - 1]}; })
    .attr("transform", function(d) {
            return "translate(" + (xScale(d.value.date) + 10)  
            + "," + (yScale(d.value.measurement) + 5 ) + ")"; })
    .attr("x", 5)
    .text(function(d) { return ("Serie ") + d.id; });

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


