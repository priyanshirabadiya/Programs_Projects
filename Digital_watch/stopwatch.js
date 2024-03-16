let x = null; // Define x globally

function showtime() {
    let data = new Date();
    let hours = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
    let minutes = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
    let seconds = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds();
    let AP = data.getHours() <= 12 ? "PM" : "AM";
    displaytime.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + AP;
}
function playwatch() {
    if (!x) {
        x = setInterval(showtime, 1000); 
    }
}

function stopwatch() {
    if (x) {
        clearInterval(x); 
        x = null; 
    }
}

function resetwatch(){
    if(!x){
    x = setInterval(showtime, 1000);
    }
}
