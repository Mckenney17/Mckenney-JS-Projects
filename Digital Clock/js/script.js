var med = document.getElementById('med');
var dtime = document.getElementById('dtime');
var days = document.querySelector('#day');
var daysArr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

for(i=0;i<=daysArr.length-1;i++){
    days.insertAdjacentHTML("beforeend", `<span id="${i}">${daysArr[i]}</span>`);
}

function showTime(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var dow = d.getDay();
console.log(d.getMilliseconds());



for(i=0;i<=daysArr.length-1;i++){
    if(dow == i){
        document.getElementById(i).style.color = "aqua";
        document.getElementById(i).style.fontWeight = "bold";
    } else {
        document.getElementById(i).style.color = "rgb(85, 129, 129)";
        document.getElementById(i).style.fontWeight = "";
    }
}

function clockConditions(){
    if(h > -1 && h < 12){
        med.innerText = "AM";
    } else {
        med.innerText = "PM";
    }
    
    if(h >= 13){
        h-=12;
    }
    
    if(h < 10){
        h = `0${h}`;
    }
    
    if(m < 10){
        m = `0${m}`;
    }
    
    if(s < 10){
        s = `0${s}`;
    }
}
clockConditions();
dtime.innerHTML = `${h}:${m}:${s}`;
};
showTime();

setInterval(showTime, 1000);