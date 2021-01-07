document.getElementById("heading").innerHTML = "i'm jawa in";

document.getElementsByClassName("heading-2")[0].innerHTML = "this is jawa"

let allpel = document.getElementsByTagName("p")

for (let i =0; i < allpel.length; i++){
    allpel[i].innerHTML = "this is p tag"
}


//   queryselacterall . use

// retrun single element  .  use

// document.querySelector(".heading-2").innerHTML = "this is quary selacter"

// //   retrun arrey  .  use

// document.querySelectorAll("p")[0].innerHTML = "this is quary selacter"

// console.log(document.querySelectorAll("p"));