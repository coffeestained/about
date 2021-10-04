
## Matthew Grady is <br> Coffee Stained ☕

<img src="./Web Developer_Monochromatic.svg" class="top-right">
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
   console.log(document.body.scrollTop, document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    if (headerState == 1) {
     header[0].classList.remove('expand');
     header[0].classList.add('collapse');
     headerState = 0;
    }
  } 
 else if (document.documentElement.scrollTop == 0) {
    if (headerState == 0) {
     header[0].classList.remove('collapse');
     header[0].classList.add('expand');
     headerState = 1;
    }
 }
}
</script>

<style>
 
 .project-name {
  visibility: hidden;
 }
 
 .project-name:after {
  visibility: visible;
  content: '☕ Coffee Stained';
 }
 
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
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("curiosity-chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

</script>

### Curiosity Chart
<div id="curiosity-chart"></div>

### Special Thanks

My Wife, [ManyPixels Vectors](https://www.manypixels.co/gallery), friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.


