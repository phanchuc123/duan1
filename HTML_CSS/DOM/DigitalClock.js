function updateClock(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hour}:${minute}:${second}`;
    document.getElementById("clock").innerHTML = timeString;
}
setInterval(updateClock, 1000);