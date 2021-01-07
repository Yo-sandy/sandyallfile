var amt = 510000;

if(amt > 0 && amt <=10000){
    console.log("you can by samsung phone")
}
else if(amt > 10000 && amt <= 50000){
    console.log("you can by one plus phone")
}
else if(amt > 50000 && amt <= 100000){
    console.log("you can buy iphone but not iphone 12")
}
else if(amt > 100000){
    console.log("cou can buy iphone 12")
}

else{
    console.log("you are difalter")
}

// age desigion making
var age = 19;
if(age < 18){
    console.log("you can not eligible for voting");
}
else{
    console.log("you can vote")
}

//comparishion
var value = 10;

var b1 = value === 10; //true

var b2 = value >= 15 //false

var msg ="value is ";

if(b1){
    console.log(msg + value)
}
else{
    console.log("my value is" + value)
}


var day = 1;
switch (day){
    case 0:
            alert("today is sunday");
            break;
        case 1:
            alert("today is monday");
            break;
        case 2:
            alert("today is tuesday");
            break;
        case 3:
            alert("today is wednesday");
            break;
        case 4:
            alert("today is thursday");
            break;
        case 5:
            alert("today is friday");
            break;
        case 6:
            alert("today is saturday");
            break;
        default:
            alert("you enterd a wrong day number");
            break;
}