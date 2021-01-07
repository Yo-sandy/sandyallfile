function changeimage(){
    document.querySelector("#my-image").src ="../image/abc.jpg";
}

function changeclass(){
    document.querySelector("body").className = "background-pink";
}

document.querySelector("title").innerHTML = "this is js";


// function showhideimage(){
//     console.log(document.querySelector("#my-image").style.display ==="none");
//     if(document.querySelector("#my-image").style.display ==="none"){
//         document.querySelector("#my-image").style.display = "inline";
//     }else{
//         document.querySelector("#my-image").style.display = "none";
//     }
// }