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


if(window.location.href == 'https://kkfc-project.rapregidor.repl.co/index.html' || window.location.href=="https://kkfc-project.rapregidor.repl.co/"){
  document.getElementById("dayOfTheWeek").innerHTML = "Welcome to my webpage! Currently, the day is " + day;
}


//I'll use this for highlighing buttons when hovered wth a little adjustments

document.getElementById("nav").addEventListener("mouseover", function(){document.getElementById("nav").style.backgroundColor ='#2EF1DA';
document.getElementById("nav").style.transition = "all 0.5s";
});

document.getElementById("nav").addEventListener("mouseout", function(){document.getElementById("nav").style.backgroundColor ='#B1F8F2';
document.getElementById("nav").style.transition = "all 0.5s";
});

document.getElementById("wall").addEventListener("mouseover", function(){document.getElementById("background-travel").style.filter ='brightness(75%)';
document.getElementById("background-travel").style.transition = "all 0.5s";
});

document.getElementById("wall").addEventListener("mouseout", function(){document.getElementById("background-travel").style.filter ='brightness(100%)';
document.getElementById("background-travel").style.transition = "all 0.5s";
});

//sidebar

function openSidebar(){
  document.getElementById("sidebar").style.width = "275px";
  document.getElementById("mainPanel").style.marginLeft = "275px";
  document.getElementById("sidebar").style.transition = "all 0.5s";
  document.getElementById("mainPanel").style.transition = "all 0.5s";
  /*"Animation with opening/closing the sidebar"*/
}

function closeSidebar(){
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("mainPanel").style.marginLeft = "0px";
}