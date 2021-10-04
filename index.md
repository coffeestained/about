
## Matthew Grady is Coffee Stained ☕

<img src="./Web Developer_Monochromatic.svg" class="top-right">
<img src="./Statue of liberty_Monochromatic.svg" class="bottom-left">

<div id="about"></div>

In my free time, I like to enjoy time with my Wife, friends. Or watching Twitch/YouTube, gaming and a wide array of outdoorsy stuff.

Get connected at [LinkedIn](https://linkedin.com/in/matthew-grady-7b752a16)

<script>
 
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";

const header = document.getElementsByTagName("header");
window.onscroll = function() {headerScrollFunction()};
 
function headerScrollFunction() {
   console.log(document.body.scrollTop, document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 80) {

   header[0].classList.remove('expand');
   header[0].classList.add('collapse');

  } 
 else if (document.documentElement.scrollTop == 0) {

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
  padding: .5em .6em;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
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
   padding-top: 10px;
   padding-bottom: 10px;
   }
 }

 @keyframes expand {
   from {
    padding-top: 10px;
    padding-bottom: 10px;
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
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching, managing and securing traditional asset classes on untraditional databases. <a href = "mailto: info@10xts.com">Inquire Here</a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js" integrity="sha512-COTaPOlz12cG4fSfcBsxZsjauBAyldqp+8FQUM/dZHm+ts/jR4AFoJhCqxy8K10Jrf3pojfsbq7fAPTb1XaVkg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
 
const dataset = [
    [1,1], [12,20], [24,36],
    [32, 50], [40, 70], [50, 100],
    [55, 106], [65, 123], [73, 130],
    [78, 134], [83, 136], [89, 138],
    [100, 140]
];
 
 const svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin
 
 const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);
 
  // Title
 svg.append('text')
 .attr('x', width/2 + 100)
 .attr('y', 100)
 .attr('text-anchor', 'middle')
 .style('font-family', 'Helvetica')
 .style('font-size', 20)
 .text('Line Chart');

 // X label
 svg.append('text')
 .attr('x', width/2 + 100)
 .attr('y', height - 15 + 150)
 .attr('text-anchor', 'middle')
 .style('font-family', 'Helvetica')
 .style('font-size', 12)
 .text('Independant');

 // Y label
 svg.append('text')
 .attr('text-anchor', 'middle')
 .attr('transform', 'translate(60,' + height + ')rotate(-90)')
 .style('font-family', 'Helvetica')
 .style('font-size', 12)
 .text('Dependant');
 
  g.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(xScale));

  g.append("g")
   .call(d3.axisLeft(yScale));
 
   svg.append('g')
  .selectAll("dot")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d) { return xScale(d[0]); } )
  .attr("cy", function (d) { return yScale(d[1]); } )
  .attr("r", 2)
  .attr("transform", "translate(" + 100 + "," + 100 + ")")
  .style("fill", "#CC0000");
 
 const line = d3.line()
        .x(function(d) { return xScale(d[0]); }) 
        .y(function(d) { return yScale(d[1]); }) 
        .curve(d3.curveMonotoneX)
        
        svg.append("path")
        .datum(dataset) 
        .attr("class", "line") 
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#CC0000")
        .style("stroke-width", "2");
 
</script>

### Curiosity Chart
<div id="curiosity-chart"><svg width="500" height="400"></svg></div>

### Special Thanks

My Wife, [ManyPixels Vectors](https://www.manypixels.co/gallery), friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.


