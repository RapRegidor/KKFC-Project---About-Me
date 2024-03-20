var day = new Date().getDay();

switch(day){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("dayOfTheWeek").innerHTML = day + " - " + m + "/" + d + "/" + y;



var open = false;;

function openSidebar(){
  document.getElementById("sidebar").style.width = "350px";
  document.getElementById("mainPanel").style.pointerEvents = "none";
  document.getElementById("mainPanel").style.filter = "opacity(30%)";

  document.getElementById("sidebar").style.transition = "all 0.5s";
  document.getElementById("mainPanel").style.transition = "all 0.5s";

  open=true;
  /*"Animation with opening/closing the sidebar"*/
}

function closeSidebar(){
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("mainPanel").style.filter = "opacity(100%)";
  document.getElementById("mainPanel").style.pointerEvents = "auto";
  open = false;
}

if(open){
  document.getElementById("sidebar").style.display = "block";
}

function deleteTxt(){
  document.getElementById("name").value="";
  document.getElementById("e-mail").value="";
  document.getElementById("subj").value="";
  document.getElementById("msg").value="";
}


var count;
var time;
function next(c){
  
  count = c;
  if(count == 0){
    document.getElementById("slide-images-1").style.backgroundImage = "url(images/mt_apo.jpg)";
    document.getElementById("one").style.backgroundColor="gray";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 1){
    document.getElementById("slide-images-1").style.backgroundImage = "url(images/mtapo1.jpg)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="gray";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 2){
    document.getElementById("slide-images-1").style.backgroundImage = "url(images/mtapo2.jpg)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="gray";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 3){
    document.getElementById("slide-images-1").style.backgroundImage = "url(images/mtapo3.jpg)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="gray";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 4){
    document.getElementById("slide-images-1").style.backgroundImage = "url(images/mtapo4.jpg)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="gray";
  }
  count++;
  if(count == 5){
    count=0;
  }
  time = setTimeout("next(count)", 10000);
}


var count1;
var time1;
function next1(c){
  
  count1 = c;
  if(count1 == 0){
    document.getElementById("slide-images-2").style.backgroundImage = "url(images/greylock.jpg)";
    document.getElementById("one1").style.backgroundColor="gray";
    document.getElementById("two1").style.backgroundColor="white";
    document.getElementById("three1").style.backgroundColor="white";
  }else if(count1 == 1){
    document.getElementById("slide-images-2").style.backgroundImage = "url(images/greylock2.jpg)";
    document.getElementById("one1").style.backgroundColor="white";
    document.getElementById("two1").style.backgroundColor="gray";
    document.getElementById("three1").style.backgroundColor="white";
  }else if(count1 == 2){
    document.getElementById("slide-images-2").style.backgroundImage = "url(images/greylock3.jpg)";
    document.getElementById("one1").style.backgroundColor="white";
    document.getElementById("two1").style.backgroundColor="white";
    document.getElementById("three1").style.backgroundColor="gray";
  }
  count1++;
  if(count1 == 3){
    count1=0;
  }
  time1 = setTimeout("next1(count1)", 10000);
}

var count2;
var time2;
function next2(c){
  
  count2 = c;
  if(count2 == 0){
    document.getElementById("slide-images-3").style.backgroundImage = "url(images/mt_washington.jpg)";
    document.getElementById("one2").style.backgroundColor="gray";
    document.getElementById("two2").style.backgroundColor="white";
    document.getElementById("three2").style.backgroundColor="white";
  }else if(count2 == 1){
    document.getElementById("slide-images-3").style.backgroundImage = "url(images/washington1.jpg)";
    document.getElementById("one2").style.backgroundColor="white";
    document.getElementById("two2").style.backgroundColor="gray";
    document.getElementById("three2").style.backgroundColor="white";
  }else if(count2 == 2){
    document.getElementById("slide-images-3").style.backgroundImage = "url(images/washington2.jpg)";
    document.getElementById("one2").style.backgroundColor="white";
    document.getElementById("two2").style.backgroundColor="white";
    document.getElementById("three2").style.backgroundColor="gray";
  }
  count2++;
  if(count2 == 3){
    count2=0;
  }
  time2 = setTimeout("next2(count2)", 10000);
}








function currentSlide(n){
  clearTimeout(time);
  next(n - 1);
}

function currentSlide1(n){
  clearTimeout(time1);
  next1(n - 1);
}

function currentSlide2(n){
  clearTimeout(time2);
  next2(n - 1);
}

window.onload = next(0);
window.onload = next1(0);
window.onload = next2(0);

