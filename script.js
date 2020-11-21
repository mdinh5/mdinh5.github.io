var randomnumber=0;

var attempts = 10;

var cur=10;

function init(){

randomnumber=Math.floor(Math.random()*101);

document.getElementById('attempts').innerHTML=cur+" guesses left";

}
function countDown(secs,elem){
	var element = document.getElementById(elem);
	element.innerHTML= "Time left " + secs+ " seconds";
	if(secs < 1){
		clearTimeout(timer);
		alert('Time is up, you are too slow');
		var url="http://localhost/Test2/E2.html";
		window.location=url;
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}



function check_num(){

var enterednumber=new Number(document.getElementById('number').value);

if(enterednumber==randomnumber ){

alert('You entered the correct number '+randomnumber+'.\n Restarting game.');

cur=attempts;

init();

}
else{

if(enterednumber>randomnumber && cur>1){

alert('Your guess is higher than the secret number');

cur=cur-1;

document.getElementById('attempts').innerHTML=cur+" guesses left";

}

if(enterednumber<randomnumber && cur>1){

alert('Your guess is lower than secret number');

cur=cur-1;

document.getElementById('attempts').innerHTML=cur+" guesses left";

}

if(cur==0){
	alert('Haha! you suck.Correct number was '+randomnumber+'.\n Restarting game.');

	cur=attempts;

	init();
}
}
}