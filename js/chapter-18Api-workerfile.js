var i = 0;

function timeout(){
    i++;
    postMessage(i);
    setTimeout(timeout, 1000);
}

timeout();