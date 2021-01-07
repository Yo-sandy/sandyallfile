 document.querySelector("#btn-box").addEventListener("click",movebox)
// document.querySelector("#btn-box").addEventListener("mouseleave",movebox)


// document.querySelector("#btn-box").addEventListener("click",movebox)

// document.querySelector("#btn-box").onclick = movebox;

function movebox(){
    let el = document.querySelector("#animate");
    let pos = 0;
    let intervalId = setInterval(move, 1)

    function move(){
        if(pos === 350){
            clearInterval(intervalId);
        }else{
            pos++;
            el.style.top = pos + "px";
            el.style.left = pos + "px";
        }
    }
}

// function container(){
//     console.log("container");
// }

// function animateabc(){
//     console.log("animate");
// }

// // document.querySelector("#animate").addEventListener("click",animateabc, false);
// // document.querySelector("#container").addEventListener("click",container, false);

// document.querySelector("#animate").addEventListener("click",animateabc, true);
// document.querySelector("#container").addEventListener("click",container, true);