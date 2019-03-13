// De actuele tijd
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
//Deze functie voegt een 0 toe aan de klok wanneer het nummer lager dan 10 is.
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

//De dag van de week
function dag() {
	var d = new Date();
	var weekday = ['Sunday...', 'Monday...', 'Tuesday..', 'Wednesday', 'Thursday.', 'Friday...', 'Saturday.'];
	var n = weekday[d.getDay()];
	document.getElementById("day").innerHTML = n;
}

//Veranderd de achtergrond kleur op basis van tijd.
var now = new Date();
var hours = now.getHours();

if (hours > 8 && hours < 18){
	document.write ('<body style="background-color: rgba(245,245,240 ,1 ); color: black;">');
}
else {
	document.write ('<body style="background-color: black; color: white;">');
}

//Tweenmax animaties


