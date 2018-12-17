var hour = document.getElementById("hour");
var test = 0;
setInterval(function () {
    hour.setAttribute('transform', "rotate(" + test++ + ", 100, 100)");
}, 10);
