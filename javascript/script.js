// De actuele tijd
function startTijd() {
	var vandaag = new Date();
	var uur 	= vandaag.getHours();
	var minuut 	= vandaag.getMinutes();
	var seconde = vandaag.getSeconds();
	minuut 		= checkTijd(minuut);
	seconde 	= checkTijd(seconde);
	document.getElementById('txt').innerHTML = uur + ":" + minuut + ":" + seconde;
	var t = setTimeout(startTijd, 1000);
}
//Deze functie voegt een 0 toe aan de klok wanneer het nummer lager dan 10 is.
function checkTijd(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

//De dag van de week
var tijd = new Date();
function weekDag() {
	var dagNaam = ['Sunday...', 'Monday...', 'Tuesday..', 'Wednesday', 'Thursday.', 'Friday...', 'Saturday.'];
	var dagVanDeWeek = dagNaam[tijd.getDay()];
	document.getElementById("day").innerHTML = dagVanDeWeek;
}

//Veranderd de achtergrond kleur op basis van tijd.
if (tijd.getHours() > 8 && tijd.getHours() < 18){
	document.body.style.backgroundColor = "rgba(245, 245, 240 ,1 )";
	document.body.style.color = "black";
}
else {
	document.body.style.backgroundColor = "rgba(0, 0, 0 ,1 )";
	document.body.style.color = "white";
}

//Tweenmax animaties
TweenMax.from('#txt', 2, {opacity:0});
TweenMax.from('#logo', 0.5, {scale:.5, opacity: 0, delay:3.2, ease:Back.easeOut.config(2)});

startTijd();
weekDag();