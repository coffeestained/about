## Coffee Stained

<img src="./Designer _Flatline.svg" class="top-right">
<img src="./Statue of liberty_Monochromatic.svg" class="bottom-left">

<div id="about"></div>

In my free time, I like to enjoy time with my wife, friends, Twitch, gaming and a wide array of outdoorsy stuff.

Get connected at [LinkedIn](linkedin.com/in/matthew-grady-7b752a16)
 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-fetcher/18.0.4/js/twitterFetcher_min.js" integrity="sha512-2m0XVv8vgX9humldeS5h3k2TX7caDztbJ/2fUHcPM/u/5LAo/jHQD9V4/2yU/RcW3vLP2dqJN/Oz9T8k7mLNMw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 
<script>
 
document.getElementById("about").innerHTML = "Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind a monitor ( or 2, or 3 ).";

const header = document.getElementsByTagName("header");
window.onscroll = function() {headerScrollFunction()};

function headerScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header[0].classList.remove('expand');
    header[0].classList.add('collapse');
  } else {
    header[0].classList.remove('collapse');
    header[0].classList.add('expand');
  }
}
</script>

<style>
 body { overflow: hidden; }
 
.collapse {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em .6em;
 
  animation: collapse .5s ease forwards;
 
  .project-name {
   font-size: 12px;
  }
 
  a.btn {
   display: none;
  }
}
 
.expand {
 animation: expand .5s ease forwards;

}
 
.bottom-left {
  position: fixed;
  bottom: 50px;
  left: 50px;
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
 
 .main-content { 
  height: 1000px;
  overflow: auto;
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

https://twitter.com/search?q=Babylon%205&src=typd
### Stuff & Things (But not limited to)
1. Agile
2. Node
3. Python
4. Angular
5. GIS
6. MongoDB, Postgres, MySql, MsSql
7. Linux & Windows

<script>
  function httpGetAsync(theUrl, callback)
 {
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function() { 
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
             callback(xmlHttp.responseText);
     }
     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
     xmlHttp.send(null);
 }
 httpGetAsync('https://twitter.com/search?q=10XTS%205&src=typd', console.log())
</script>

### 10XTS 
I'm currently working with a FinTech company out of Ohio. We are work to provide regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to more about launching and securing traditional asset classes on untraditional databases. <a href = "mailto: info@10xts.com">Inquire Here</a>
<div id=”lastTweet”>
</div>

### Special Thanks

My Wife, Jekyll Themes, [ManyPixels Vectors](https://www.manypixels.co/gallery), friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.

