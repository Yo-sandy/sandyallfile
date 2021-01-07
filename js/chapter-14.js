function addElement(){
    // append child
    let h3 = document.createElement("h3");
    let textNode = document.createTextNode("this is h3 element from js");
    h3.appendChild(textNode)
    let div = document.querySelector("#container");
    div.appendChild(h3);

    //insert before
    // let childElementOfDiv = document.querySelector("#h1");
    // div.insertBefore(h3, childElementOfDiv);

    //  delate element
    // div.remove();
    // div.removeChild(childElementOfDiv)

    //  replace child
    div.replaceChild(h3, childElementOfDiv);
}


document.querySelector("#add").addEventListener("click",addElement)