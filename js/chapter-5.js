// var cars =["inova","tata","maruti","bmw","jaguar",]

// console.log(cars[3]);


// var cars =["inova","tata","maruti","bmw","jaguar",]

// for (var i=0; i < 5; i++){
    // console.log(cars[i]);
// }

// var cars =["inova","tata","maruti","bmw","jaguar",]

// for (var i=0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// var value1 = 15;
// var value2 = 20;
// var result1 = value1 + value2;
// console.log(result1);


// function add(x =0, y= 0){
//     var result1 = x + y;
//     console.log(result1)
// }

// add(5, 15);
// add(10, 20);
// add(40, 25);
// add(20, 15);
// add(1, 99);
// add(12, 8);
// add(56, 4);
// add(14, 6);
// add(23, 7);
// add(45, 45);
// add(15);
// add();


// function add(x =0, y= 0){
//     var result1 = x + y;
//     return result1;
// }

// var result = add (10, 20);

// console.log(result * 20)

//   methed all.


// methed - 1. split.use
// var name = "mango,apple,kiwi,chiku,banana";

// var fruitarray = name.split(",")

// for (var i = 0; i< fruitarray.length; i++){
//     console.log(fruitarray[i]);
// }


// methed - 2  split lenth.use
// var abc = "ddfsdsdehduidh";

// var items = abc.split("");

// for (var j = 0; j< items.length; j++){
//     console.log(items[j]);
// }


// methed - 3  nan.use
// var i = NaN;

// console.log(isNaN(i));


// METHED - 4  tofixed.use
// var totalAmount = 100.000001235456789;

// console.log(totalAmount.toFixed(4));


// methed - 5  plus+.use
// var rate = "200";
// var gst = "20"

// var totalamount = rate + gst;
// console.log(totalamount);


// methed - 6  parseint.use
// var rate = "200";
// var gst = "20"

// var totalamount = parseInt(rate) + parseInt(gst);
// console.log(totalamount);


// methed - 7   pop.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();


// methed - 8   push.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// console.log(cars);
// cars.push("swift");
// console.log(cars);
// cars.push("jaguar");
// console.log(cars);
// cars.push("kwid");
// console.log(cars);
// cars.push("macedes");
// console.log(cars);
// cars.push("ignis");
// console.log(cars);


// methed - 9   shift.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// console.log(cars)
// cars.shift();
// console.log(cars)
// cars.shift();
// console.log(cars)
// cars.shift();
// console.log(cars)
// cars.shift();
// console.log(cars)
// cars.shift();
// console.log(cars)


// methed - 10   log.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// console.log(cars);
// cars.unshift("swift");
// console.log(cars);
// cars.unshift("jaguar");
// console.log(cars);
// cars.unshift("macedes");
// console.log(cars);
// cars.unshift("kwid");
// console.log(cars);
// cars.unshift("ignis");
// console.log(cars);

// cars[5] = "waganar";

// console.log(cars);


// methed - 11   log delete.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// console.log(cars);
// cars.unshift("swift");
// console.log(cars);
// cars.unshift("jaguar");
// console.log(cars);
// cars.unshift("macedes");
// console.log(cars);
// cars.unshift("kwid");
// console.log(cars);
// cars.unshift("ignis");
// console.log(cars);

// delete cars[5];

// console.log(cars[5]);


// methed - 12   splice.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// cars.splice(4, 1,"ignis","kwid" )

// console.log(cars);


// methed - 13   slice.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

//  var newmodalscars = cars.slice(2)

// console.log(cars);
// console.log(newmodalscars);


// methed - 14    foreach.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// cars.forEach(function(value, i)
// {
//     console.log(value);
// })


// methed - 15   foreach function.use
// var cars  = ['bmw','maruti','alto','astar','saab'];

// cars.forEach(carloopcallback)
// function carloopcallback(value, i)
// {
//     console.log(value);
// }


// methed - 16    map.use
// var numbers  = [1,2,3,4,5,6,7,8,9,10];

// var doubleNumbers = numbers.map(function(value){
//     return value * 2;
// });

// console.log("number arrey:"+ numbers);
// console.log("double number arrey:" +doubleNumbers );


// methed - 17    filter.use
// var numbers  = [1,2,3,4,5,6,7,8,9,10];

// var  filterenumbers = numbers. filter(function(value){
//     return value % 2;
// });

// console.log("number arrey:"+ numbers);
// console.log("double number arrey:" +  filterenumbers );


// methed - 18      reduce.use
// var numbers  = [1,2,3,4,5,6,7,8,9,10];

// var   sum = numbers.reduce(function( total, value){
//     return value + 15;
// });

// console.log("number arrey:"+ numbers);
// console.log("sum:" + sum );


// methed - 19     every.use
// var numbers  = [1,2,3,4,5,6,7,8,9,10];

// var    every = numbers.every(function(value){
//     return value > 5;
// });

// console.log("number arrey:"+ numbers);
// console.log(every);


// // methed - 20     some.use
// var numbers  = [1,2,3,4,5,6,7,8,9,10];

// var     some = numbers.some(function(value){
//     return value > 5;
// });

// console.log("number arrey:"+ numbers);
// console.log(some);


// methed - 21     findindex.use
// var numbers  = [1,2,13,4,5,6,7,8,9,10,5];

// var      number = numbers.findIndex(function(value){
//     return value > 5;
// });

// console.log("number arrey:"+ numbers);
// console.log( number);



// methed - 22     object.use

var book = {
    Name:"English Gramer",
    Writer:"laary",
    Price:799,
    title:function(){
        return this.Name + " by " + this.Writer;
    }
}

book.Name="baagban";

console.log(book.title());
