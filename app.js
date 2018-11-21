var script = document.getElementById("script");
var nexBtn = document.getElementById("icon_next");       
var previousBtn = document.getElementById("icon_previous");
var name1 = document.getElementById("name1");
var name2= document.getElementById("name2");
var team_Name= document.getElementById("team_Name");
var photo= document.getElementById("photo");
var photo_float=document.getElementById("photo_float");
const numEvents = 4;
var currentEvent = 0;
var float= 0;
var farewell=
{
    team_name:["Frontend","Design", "Backend","AppD"],
    details: {
    	name1:["Johhny 1", "Johhny 2", "Johhny 3","Johhny 4"],
    	name2:["English 1", "English 2", "English 3", "English 4"],
    }
}

script.addEventListener("load", function(){
  window.addEventListener("keydown", keyMove);
});

function keyMove(){
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
    
   	if(currentEvent == 0 && change<=0) { float = numEvents-1;}

	else if(currentEvent == 3 && change>=0) { float = 0;}

   	else { float =float+change;}
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

    photo_float.style.backgroundImage = "url(images/"+float+".jpg)";
	photo_float.style.animation="switch 0.5s linear forwards";
	name1.innerHTML=farewell.details.name1[currentEvent];
	name2.innerHTML=farewell.details.name2[currentEvent];
	team_Name.innerHTML=farewell.team_name[currentEvent];

    setTimeout(function() {
   		photo.style.backgroundImage = "url(images/"+currentEvent+".jpg)";
		photo_float.id = "float";
  		float.id="photo_float";
    }, 500);
	
}

function next()
{
	imageChange(-1);
	photo.style.backgroundImage = "url(images/"+currentEvent+".jpg)";
	name1.innerHTML = farewell.details.name1[currentEvent];
	name2.innerHTML = farewell.details.name2[currentEvent];
	team_Name.innerHTML = farewell.team_name[currentEvent];

}

nexBtn.addEventListener("click", function()
	{
		previous();
	});

previousBtn.addEventListener("click", function()
	{
		next();
	});

// Slider Code ------------------------------------

// let index = 1;
// displayDiv(index);

// function nextDiv(n) {
// 	displayDiv(index += n);
// }

// function displayDiv(n) {
// 	let i;

// 	let x = document.getElementsByClassName("pic");
// 	if (n > x.length) {index = 1};
// 	else if ( n < 1) { index = x.length};

// 	for (let i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	}
// 	x[index-1].style.display = "block";

// }

// ---------------------------------------------


