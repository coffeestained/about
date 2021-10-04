## Coffee Stained

<img src="./Designer _Flatline.svg" class="top-right">
<img src="./Statue of liberty_Monochromatic.svg" class="bottom-left">

<div id="about"></div>

In my free time, I like to enjoy time with my wife, friends, Twitch, gaming and a wide array of outdoorsy stuff.

Get connected at [LinkedIn](linkedin.com/in/matthew-grady-7b752a16)
 
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
.collapse {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
 
.expand {
 
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
 }
 
 .main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {
  color:  #155799;
 }
 
  @keyframes collapse {
   from {
     opacity: 1;
     top: 0;
   }
   to {
     opacity: 0;
     top: -$navBar-height;
   }
 }

 @keyframes open {
   from {
     opacity: 0;
     top: -$navBar-height;
   }
   to {
     opacity: 1;
     top: 0;
   }
 }
</style>

### Stuff & Things (But not limited to)
1. Agile
2. Node
3. Python
4. Angular
5. MongoDB, Postgres, MySql, MsSql
6. Linux & Windows

### Special Thanks

Jekyll Themes, [ManyPixels Vectors](https://www.manypixels.co/gallery) and my Wife, friends, family, co-workers and mentors (you know who you are) who helped me and continue to help me to become a better engineer.

