const start = document.getElementById("start");
const reset = document.getElementById("reset");
const pause= document.getElementById("pause");
const time = document.getElementById("time");
let startTime =0;
let elapsedTime=0;
let currentTime=0;
let paused = true;
let mins= 0;
let hrs=0;
let secs=0
let intervalId=0;
start.addEventListener("click",()=>{
    if (paused){
        paused= false;
        startTime= Date.now()-elapsedTime;
        intervalId= setInterval(updateTime,1000);
    }
    });

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime/1000) %60);
    mins= Math.floor((elapsedTime/(1000 *60 ))% 60);
    hrs = Math.floor((elapsedTime/(1000*60*60)) %60);
    secs= zero(secs);
    mins= zero(mins);
    hrs= zero(hrs);
    time.innerHTML= `${hrs}:${mins}:${secs}`;
    function zero(unit){
        unit = String(unit);
        return (unit.length<2)?`0${unit}`: unit;
    }
}


pause.addEventListener("click", ()=>{
    if (!paused){
        paused= true;
        elapsedTime = Date.now()- startTime;
        clearInterval(intervalId);
    }
});


reset.addEventListener("click", ()=>{
    paused=true;
    clearInterval(intervalId);
    time.innerHTML= "00:00:00";
    elapsedTime=0;
    startTime=0;
    hrs=0;
    mins=0;
    secs=0;
})