var script = document.getElementById("script");
var nexBtn = document.getElementById("icon_next");       
var previousBtn = document.getElementById("icon_previous");
var photo= document.getElementById("photo");
var name1 = document.getElementById("name1");
var name2= document.getElementById("name2");
var team_Name= document.getElementById("team_Name");

const numEvents = 3;
var currentEvent = 0;
var farewell=
{
    team_name:["Frontend","Design", "Backend"],
    details: {
    	name1:["Johhny 1", "Johhny 2", "Johhny 3"],
    	name2:["English 1", "English 2", "English 3"],
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
}
function mod(a, b){
    if (a < 0){
        a %= b;
        return (b + a);
    } else {
        return (a % b);
    }
}
function next()
{
	imageChange(1);
	photo.style.backgroundImage = "url(images/"+currentEvent+".jpg)";
	name1.innerHTML=farewell.details.name1[currentEvent];
	name2.innerHTML=farewell.details.name2[currentEvent];
	team_Name.innerHTML=farewell.team_name[currentEvent];

}
function previous()
{
	imageChange(-1);
	photo.style.backgroundImage = "url(images/"+currentEvent+".jpg)";
	name1.innerHTML=farewell.details.name1[currentEvent];
	name2.innerHTML=farewell.details.name2[currentEvent];
	team_Name.innerHTML=farewell.team_name[currentEvent];
}
nexBtn.addEventListener("click", function()
	{
		next();
	}
	);
previousBtn.addEventListener("click", function()
	{
		previous();
	}
	);

