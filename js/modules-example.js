//
// function show (x, y){
//     let result = 0;
//     if (x===y){
//         result =  (x+y)*10;
//     }else {
//         result = x + y;
//     }
//     console.log(result);
// }
//
// show(10, 10);
//
// show(10,3)


//
// function show (x, y){
//     let result = 0
//     if (x===y){
//         result = x + y;
//     }else {
//         result = (x+y)*10;
//     }
//     console.log(result);
// }
//
// show(10, 10);
//
// show(10,3)
//
//
// show(10,5)


//
// function  show (x){
//     let result = 0;
//     let y = 51;
//     if (x < y){
//         result = y - x;
//     }else  {
//         result = (x-y)*2;
//     }
//     console.log(result);
// }
//
// show(10)
//
// show(60)



//  function  show (x){
//     let result = 0;
//     let  y = 100;
//     if (x < y){
//         result = false
//     }else  {
//         result = true
//     }
//      console.log(result)
//  }
//
//  show(101)
//
// show(99)



//  var amt = 199
//
// if (amt > 100 && amt <= 200){
//     console.log(true)
//
// }else if(amt > 200){
//     console.log(false)
// }else if (amt < 100){
//     console.log(false)
// }

function checkMyAlgo(amt){
    console.log( amt % 10);    // this console.log value check only
    let isDividable = amt % 10 === 0;
    let inRange = amt > 100 && amt <= 200;

    console.log(isDividable || inRange)
}


checkMyAlgo(100);

