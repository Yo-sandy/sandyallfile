// let xhttp = new XMLHttpRequest();

// let url = "https://jsonplaceholder.typicode.com/todos/1"
// let method = "GET";
// let isAsync = true;

// xhttp.open(method, url, isAsync);

// document.querySelector("#my-btn").addEventListener("click", ()=> xhttp.send())

// xhttp.onreadystatechange = function(){
//     if(this.readyState ===4 && this.status === 200){
//         document.querySelector("#my-ajax-data").innerHTML = this.responseText;
//     }
// }



let person = {
    name : "sandeep",
    age : 25,
    isMale: true
}

let jsonObject = JSON.stringify(person);

console.log((JSON.parse(jsonObject)).name);







let xhttp = new XMLHttpRequest();

let url = "https://jsonplaceholder.typicode.com/todos/1"
let method = "GET";
let isAsync = true;

xhttp.open(method, url, isAsync);

document.querySelector("#my-btn").addEventListener("click", ()=> xhttp.send())

xhttp.onreadystatechange = function(){
    if(this.readyState ===4 && this.status === 200){
        let el = document.querySelector("#my-ajax-data");
        
         let data = JSON.parse(this.responseText);

         let h3 = document.createElement("h3");
         let h3TextNode = document.createTextNode(data.title);
         h3.appendChild(h3TextNode);


         el.appendChild(h3);
    }
}
