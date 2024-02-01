// program to create a countdown timer
// time to countdown from(in milliseconds)
let countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
let X = setInterval(function(){
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;
    const days = math.floor( timeLeft/(1000*60*60*24) );
    const hours = math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = math.floor( (timeLeft/1000/60) % 60 );
    const seconds = math.floor( (timeleft/1000) % 60);
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s " );
    if (timeleft < 0) {
        clearInterval(x);
        console.log('countdown finished');   
     }
}, 2000);