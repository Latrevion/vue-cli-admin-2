//单页面长时间不操作就会自动退出

var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var timeout = 1000 * 60 * 30; //30分钟超时时间

window.onload = function() {
    window.document.onmousedown = function() {
        localStorage.setItem('lastTime',new Date().getTime())
    }
}

function checkTime() {
    //更新当前时间
    currentTime = new Date().getTime()
    //取出上次操作时间
    lastTime = localStorage.getItem('lastTime')
    //判断是否超时
    if(currentTime-lastTime>timeout){
        var url = window.location.href;
        var newUrl =url.match(/(\S*)#/)
        sessionStorage.clear();
        window.open('/','_self')
    }
}

//定时器，每隔一段时间检查是否超时
window.setInterval(checkTime, 1000*60*30);