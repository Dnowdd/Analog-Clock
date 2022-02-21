function hours12(date) { return (date.getHours() + 24) % 12 || 12; }

function getHour(date){
    return date.getHours();
}
function getMinute(date){
    return date.getMinutes();
}

function setTitle(hour,minute){
    document.title = hour+":"+minute;
}

function getMinuteDeg(date){
    var minute = date.getMinutes();

    var degm = minute*6;

    return degm
}
function getHourDeg(date){
    var hour = hours12(date);

    var degh = hour*30;

    return degh;
}

function setHour(h){
    var hourPointer = document.getElementById("hour");
    hourPointer.style.transform = "rotate("+h+"deg)";
}
function setMinute(m){
    var minutePointer = document.getElementById("minute");
    minutePointer.style.transform = "rotate("+m+"deg)";
}

interval = setInterval(function() {
    const date = new Date();

    setHour(getHourDeg(date));
    setMinute(getMinuteDeg(date));

    var hour = getHour(date);
    var minute = getMinute(date);

    document.getElementById("hourText").innerHTML = hour;
    document.getElementById("minuteText").innerHTML = minute;

    setTitle(hour,minute);
})
