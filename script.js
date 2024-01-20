let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000);

document.addEventListener("DOMContentLoaded", function() {
    // Request fullscreen on the document.body
    document.body.requestFullscreen = document.body.requestFullscreen || 
                                      document.body.mozRequestFullScreen || 
                                      document.body.webkitRequestFullscreen || 
                                      document.body.msRequestFullscreen;

    if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
    }
});
