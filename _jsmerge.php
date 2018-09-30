<?php
header("Content-Type: application/x-javascript");

?>

var f={
	ac		:(i,j)		=>i.appendChild(j),
	ce		:(i)		=>document.createElement(i),
	ct		:(i)		=>document.createTextNode(i),
	qs		:(i)		=>document.querySelector(i),
	rc		:(i,j)		=>i.removeChild(j),
	sa		:(i,j,k)	=>i.setAttribute(j,k),

	numFormat	:(i)	=>(i+"").split("").reverse().reduce((a,b)=>b+(a.split(".").join("").length%3?a:"."+a)),
	timeFormat	:(i)	=>i>=24*60*60000?((i/24/60/60000|0)+"d "+((i%(24*60*60000))/60/60000|0)+"h"):
		i>=60*60000?((i/60/60000|0)+"h "+((i%(60*60000))/60000|0 )+"m"):((i/60000|0 )+((i/60000|0 )>1?" minutes":" minute")),

	null	:null
};


var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
function beep() {
	let oscillator = audioCtx.createOscillator();
	let gainNode = audioCtx.createGain();

	oscillator.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	gainNode.gain.value = 1;
	oscillator.frequency.value = 6000;
	oscillator.type = "sine";

	oscillator.start();

	setTimeout(
		function() {
			oscillator.stop();
		},
		50
	);
};


<?php

include "../jsvar.js";echo "\n";
include "../Game.js";echo "\n";
include "../Menu.js";echo "\n";
include "../Ikan.js";echo "\n";
include "../Craft.js";echo "\n";
include "../post.js";echo "\n";

?>