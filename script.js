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

document.getElementById("dayOfTheWeek").innerHTML = "Welcome to my webpage! Currently, the day is " + day;


//I'll use this for highlighing buttons when hovered wth a little adjustments

document.getElementById("header").addEventListener("mouseover", function(){document.getElementById("header").style.backgroundColor ='lightblue';
});

document.getElementById("header").addEventListener("mouseout", function(){document.getElementById("header").style.backgroundColor ='white';
});

function highlightImg(){
  document.getElementById("background").style.backgroundColor ='lightblue';
  document.getElementById("name").style.color ='red';
}

function undoHighlightImg(){
  document.getElementById("background").style.backgroundColor ='whitesmoke';
  document.getElementById("name").style.color ='white';
}

//sidebar

function openSidebar(){
  document.getElementById("sidebar").style.width = "200px";
  document.getElementById("mainPanel").style.marginLeft = "200px";
}

function closeSidebar(){
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("mainPanel").style.marginLeft = "0";
}