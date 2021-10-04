
## ☕ Coffee Stained

<img src="./Designer _Flatline.svg" class="top-right">
<img src="./Statue of liberty_Monochromatic.svg" class="bottom-left">

<div id="about"></div>

In my free time, I like to enjoy time with my wife, friends, Twitch, gaming and a wide array of outdoorsy stuff.

Get connected at [LinkedIn](https://linkedin.com/in/matthew-grady-7b752a16)

<script>
 
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";

const header = document.getElementsByTagName("header");
window.onscroll = function() {headerScrollFunction()};

let headerState = 1;
 
function headerScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header[0].classList.remove('expand');
    header[0].classList.add('collapse');
    if (headerState == 1) window.scrollTo(0, 51);
    headerState = 0;
  } 
 if (document.body.scrollTop == 0) {
    header[0].classList.remove('collapse');
    header[0].classList.add('expand');
    if (headerState == 0) window.scrollTo(0, 0);
    headerState = 1;
 }
}
</script>

<style>
 
.collapse {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em .6em;
 
  animation: collapse .5s ease forwards;
 
}

{
 
}

.collapse .project-name {
 font-size: 12px;
}

.collapse a.btn {
 display: none;
}
 
.expand {
 animation: expand .5s ease forwards;
}
 
.bottom-left {
  position: fixed;
  bottom: 15px;
  left: 25px;
 }
 
 .top-right {
  position: fixed;
  top: 20px;
  right: 20px;
 }
 
 .page-header {
  background-image: linear-gradient(
  120deg, #155799, #fff);
  position: sticky;
  top: 0px;
  height: 336px;
 }
 
 .main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {
  color:  #155799;
 }
 
  @keyframes collapse {
   from {
     height: 336px;
   }
   to {
    height: 20px;
   }
 }

 @keyframes expand {
   from {
     height: 20px;
   }
   to {
     height: 336px;
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
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on untraditional databases. <a href = "mailto: info@10xts.com">Inquire Here</a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js" integrity="sha512-COTaPOlz12cG4fSfcBsxZsjauBAyldqp+8FQUM/dZHm+ts/jR4AFoJhCqxy8K10Jrf3pojfsbq7fAPTb1XaVkg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("curiosity-chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  },

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

})

</script>

### Curiosity Chart
<div id="curiosity-chart"></div>

### Special Thanks

My Wife, [ManyPixels Vectors](https://www.manypixels.co/gallery), friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.


