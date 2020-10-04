/*eslint-env es6*/
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

var TimerFunction = setInterval(function (){
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    
    if(time < 0) {
        clearInterval(TimerFunction);
        document.getElementById("countdown").innerHTML = "Time's up!";
		if(endsound === 'yes')
		{
			end.play();
		}
    }
}
,1000);
    