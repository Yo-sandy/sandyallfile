let el = document.querySelector("#my-bar")
var width = 0;
let myInterval = setInterval(function(){
    if (width ===100){
        clearInterval(myInterval);
    }else{
        width += 5;
        el.style.width = width+"%";
    }
}, 1000);