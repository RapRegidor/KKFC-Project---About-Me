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
    document.getElementById("slide-images-1").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/38674_1367953559032_5124261_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=vpBAIeXKVSIAX95ELDx&tn=-CcM_Vt6EHyiTltk&_nc_ht=scontent-lga3-1.xx&oh=5b373afb28f815b2751df36cdc77249e&oe=614089BD)";
    document.getElementById("one").style.backgroundColor="gray";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 1){
    document.getElementById("slide-images-1").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/40478_1367945118821_67994_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=W_eqGnD7ERwAX_zlASl&_nc_ht=scontent-lga3-1.xx&oh=b2b01e01f528538e9b9456a832f968ec&oe=6140A42E)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="gray";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 2){
    document.getElementById("slide-images-1").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/40027_1367953519031_1690463_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=m4Cx6Hy8CngAX8vFZgL&tn=-CcM_Vt6EHyiTltk&_nc_ht=scontent-lga3-1.xx&oh=94dcd15af6286c2a63b573f08eb830e1&oe=613F260D)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="gray";
    document.getElementById("four").style.backgroundColor="white";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 3){
    document.getElementById("slide-images-1").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/40487_1367945518831_809779_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=edfxo9e59TwAX-87Dbx&_nc_ht=scontent-lga3-1.xx&oh=60060717b8e705ae152f38039a3704b0&oe=613F011B)";
    document.getElementById("one").style.backgroundColor="white";
    document.getElementById("two").style.backgroundColor="white";
    document.getElementById("three").style.backgroundColor="white";
    document.getElementById("four").style.backgroundColor="gray";
    document.getElementById("five").style.backgroundColor="white";
  }else if(count == 4){
    document.getElementById("slide-images-1").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/38687_1367947598883_1050302_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=LU_8GZ2AecwAX9UOCr0&tn=-CcM_Vt6EHyiTltk&_nc_ht=scontent-lga3-1.xx&oh=581721dc7e74dd1b308b7649e8eecc1f&oe=613FCC87)";
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
  time = setTimeout("next(count)", 4500);
}


var count1;
var time1;
function next1(c){
  
  count1 = c;
  if(count1 == 0){
    document.getElementById("slide-images-2").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/86970500_10216823387117139_3803902562399158272_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=imIRdmE_UuEAX-EV4uC&tn=-CcM_Vt6EHyiTltk&_nc_ht=scontent-lga3-1.xx&oh=4654287323ba9f308afa6c6545bf25da&oe=61407AC4)";
    document.getElementById("one1").style.backgroundColor="gray";
    document.getElementById("two1").style.backgroundColor="white";
    document.getElementById("three1").style.backgroundColor="white";
  }else if(count1 == 1){
    document.getElementById("slide-images-2").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/86976107_10216823386877133_2204996425484337152_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=n3uHsXC_essAX-wRNTm&_nc_oc=AQm4NzVlHqd2jb3I2Aaj18-Z9cNTZ5eaahlcS-8eINP3fzr89Uezpmlo5KVKRv6fZdE&_nc_ht=scontent-lga3-1.xx&oh=35f257729558fd58e33fc9ffbb15448e&oe=613F6313)";
    document.getElementById("one1").style.backgroundColor="white";
    document.getElementById("two1").style.backgroundColor="gray";
    document.getElementById("three1").style.backgroundColor="white";
  }else if(count1 == 2){
    document.getElementById("slide-images-2").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/86766436_10216808672669287_6808086487775576064_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=n7c5ItsIMP0AX-5vGlg&_nc_ht=scontent-lga3-1.xx&oh=feffd031fa9796c7a812b10cce02c952&oe=614125E8)";
    document.getElementById("one1").style.backgroundColor="white";
    document.getElementById("two1").style.backgroundColor="white";
    document.getElementById("three1").style.backgroundColor="gray";
  }
  count1++;
  if(count1 == 3){
    count1=0;
  }
  time1 = setTimeout("next1(count1)", 4500);
}

var count2;
var time2;
function next2(c){
  
  count2 = c;
  if(count2 == 0){
    document.getElementById("slide-images-3").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/68890216_10215350610778651_6002457365868183552_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=z2Z4PWq8ynUAX-gFpK6&tn=-CcM_Vt6EHyiTltk&_nc_ht=scontent-lga3-1.xx&oh=f5de39cfa4108a78945f0a0e41528f04&oe=614005F5)";
    document.getElementById("one2").style.backgroundColor="gray";
    document.getElementById("two2").style.backgroundColor="white";
    document.getElementById("three2").style.backgroundColor="white";
  }else if(count2 == 1){
    document.getElementById("slide-images-3").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/68669162_10215350609978631_5183304379788165120_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uyHRTGXVwAoAX_i8Erc&_nc_ht=scontent-lga3-1.xx&oh=0dfaca7eeae854f1c054f2447326659e&oe=6142710D)";
    document.getElementById("one2").style.backgroundColor="white";
    document.getElementById("two2").style.backgroundColor="gray";
    document.getElementById("three2").style.backgroundColor="white";
  }else if(count1 == 2){
    document.getElementById("slide-images-3").style.backgroundImage = "url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/67838658_10215350598578346_5233775347937312768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=D9Gpg6OB-o8AX9WjYyZ&_nc_ht=scontent-lga3-1.xx&oh=110bca943465dd9382b3933e6709759c&oe=6141FEF1)";
    document.getElementById("one2").style.backgroundColor="white";
    document.getElementById("two2").style.backgroundColor="white";
    document.getElementById("three2").style.backgroundColor="gray";
  }
  count2++;
  if(count2 == 3){
    count2=0;
  }
  time2 = setTimeout("next2(count2)", 4500);
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

