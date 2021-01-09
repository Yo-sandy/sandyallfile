// let worker = new Worker("../js/chapter-18Api-workerfile.js");
// worker.onmessage = function(event){
// document.querySelector("#my-ajax-data").innerHTML = event.data
// }
//
// document.querySelector("#my-btn").addEventListener("click",()=>worker.terminate())


  // Web  fetch API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json =>{
//         document.querySelector("#my-ajax-data").innerHTML = json.title
//     })



//  Web Geolocation API

navigator.geolocation.getCurrentPosition(printPosition)

function printPosition(location){
    console.log(location)
}
