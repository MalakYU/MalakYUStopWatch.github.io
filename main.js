
minutes = 00;
seconds = 00;
mili = 00;

function base(){
    let time = minutes + ":" + seconds + ":" + mili ;
    document.getElementById("timer").innerHTML = time;
    document.getElementById("timer").textContent = time;
    
}
base();


function start(){
  
    if (mili != 10){
        mili = mili+1;
    }

    if (mili == 10){
        
            seconds ++;
        mili = 00;
    }

    if (seconds == 60){
        minutes++;
        seconds = 00;
    }


    
    console.log(seconds);

    let time = minutes + ":" + seconds + ":" + mili;
    document.getElementById("timer").innerHTML = time;
    document.getElementById("timer").textContent = time;
    timer = setTimeout(start,100);
    timer ;
}

function reset(){
 
    minutes = 00;
    seconds = 00;
    mili = 00;
    let time = minutes + ":" + seconds + ":" + mili ;
    document.getElementById("timer").innerHTML = time;
    document.getElementById("timer").textContent = time;
}


function stop(){
    clearTimeout(timer);
    let currentMinute = minutes;
    let currentSeconds = seconds;
    let currentMili =mili;


    console.log("Trying to pause")
    let time = currentMinute + ":" + currentSeconds + ":" + currentMili ;
    document.getElementById("timer").innerHTML = time;
    document.getElementById("timer").textContent = time;
    
    mili = currentMili;
    seconds = currentSeconds;
    minutes = currentMinute;
}
