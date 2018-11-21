var script = document.getElementById("script");
var nexBtn = document.getElementById("icon_next");       
var previousBtn = document.getElementById("icon_previous");
var name1 = document.getElementById("name1");
var name2= document.getElementById("name2");
var team_Name= document.getElementById("team_Name");
var photo0= document.getElementById("photo0");
var photo1= document.getElementById("photo1");
var photo2= document.getElementById("photo2");
var photo3= document.getElementById("photo3");
var photo4= document.getElementById("photo4");
var photo5= document.getElementById("photo5");
var photo_float=document.getElementById("photo_float");

const numEvents = 6;
var currentEvent = 0;
var float= 0;
var farewell=
{
    team_name:["Backend","FrontEnd", "Backend","Video","App","Design"],
    details: {
      name1:["Amritanshu", "Partho", "Deepak","Akaash", "Aditya ", "Rajat"],
      name2:["Jain", "Sarthi", "Kar", "Manna", "Raj", "Thakur"],
    },
    photos: [photo0, photo1, photo2, photo3, photo4, photo5]
}
script.addEventListener("load", function(){
  window.addEventListener("keydown", keyMove);
      document.addEventListener("touchstart", startTouch, false);
  document.addEventListener("touchmove", moveTouch, false);
});
function keyMove(e){
  console.log(e);
    if (window.event.key == "s" || window.event.key == "a" || window.event.key == "ArrowDown" || window.event.key == "ArrowLeft"){
       next();
    } else if(window.event.key == " " || window.event.key == "w" || window.event.key == "d" || window.event.key == "ArrowUp" || window.event.key == "ArrowRight"){
       previous();
    }
}
function imageChange(change){
    currentEvent += change;
    currentEvent = mod(currentEvent, numEvents);
    var x=numEvents-1;
    console.log(currentEvent);
   if(currentEvent == 0 && change<=0)
   {
     float = numEvents-1;
   }
   
else if(currentEvent == 5 && change>=0)
   { 
    float = 0;
   }
   else
   {
    float =float+change;
   }
}
function mod(a, b){
    if (a < 0){
        a %= b;
        return (b + a);
    } else {
        return (a % b);
    }
}
function previous()
{

  imageChange(1);
  // if (currentEvent == 0) { name1.style.fontSize = "8vh"; name2.style.fontSize = "8vh"}
  // else if (currentEvent != 0) { name1.style.fontSize = "5vw"; name2.style.fontSize = "5vw"};

  name1.innerHTML=farewell.details.name1[currentEvent];
  name2.innerHTML=farewell.details.name2[currentEvent];
  team_Name.innerHTML=farewell.team_name[currentEvent]; 

 setTimeout(function(){ farewell.photos[currentEvent].style.animation="enter 0.5s forwards";},500);
 if(currentEvent!=0)
  farewell.photos[currentEvent-1].style.animation="exit 0.5s forwards";
else{
  farewell.photos[numEvents-1].style.animation="exit 0.5s forwards";
}
}

function next()
{
  imageChange(-1);
  // if (currentEvent == 0) { name1.style.fontSize = "8vh"; name2.style.fontSize = "8vh"}
  // else if (currentEvent != 0) { name1.style.fontSize = "5vw"; name2.style.fontSize = "5vw"};

  name1.innerHTML=farewell.details.name1[currentEvent];
  name2.innerHTML=farewell.details.name2[currentEvent];
  team_Name.innerHTML=farewell.team_name[currentEvent];
   setTimeout(function(){ farewell.photos[currentEvent].style.animation="enter 0.5s forwards";},500);
   console.log(currentEvent);
 if(currentEvent == 5)
  farewell.photos[0].style.animation="exit 0.5s forwards";
else{
  farewell.photos[currentEvent+1].style.animation="exit 0.5s forwards";
}
  
}
nexBtn.addEventListener("click", function()
  {
    previous();
  }
  );
previousBtn.addEventListener("click", function()
  {
    next();
  }
  );
var initalX = null;
var initialY=null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
    next();
    } else {
      // swiped right
      previous();
    }  
  } 
  initialX = null;
  initialY = null;
   
  
};


