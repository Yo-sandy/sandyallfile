// function buttonpress(){
//     alert("Register")
// }
// function propertychange(){
//     console.log("input value change");
// }


//  clasess.use

// class Book{
//     constructor(name, writer, price){
//         this.name = name;
//         this.writer = writer;
//         this.price = price;
//     }
    
//     title(){
//         return `${this.name} by ${this.writer} Rs. ${this.price}`;
    // return this.name + " by " + this.writer + " Rs. " + this.price;
//     }

// }

// var book1 = new Book("php cookbook","larry", 100);
// var book2 = new Book("js cookbook","sandeep", 588);
// var book3 = new Book("php advanced","any", 2500);
// var book4 = new Book("fluter","angela", 2550);
// var book5 = new Book("dart lang","google", 5333);

// console.log(book1.title());
// console.log(book2.title());
// console.log(book3.title());
// console.log(book4.title());
// console.log(book5.title());


//    Let. use

// var x = 10;

// for (let x = 0; x < 19; x++){
//     console.log(x);
// }

// console.log(x);

// let abc = 10;

// function callme(){
//     let abc = 50;
//     console.log(abc);
// }
// callme();

// console.log(abc);


//   let.shortcut.use 1
// let sum =(val1, val2) => val1 + val2;

// console.log(sum(45, 45));


//   let.shortcut.use 2
// ['sandeep','manjeet','sonu','kuldeep','monu']

// .forEach(value =>console.log(value));

    // const .use 

// const pi = 545448;

// console.log(pi);


//     Rest perameter .use

// function sum (...value){
//     return value.reduce((total, value) => total + value)
// }

// console.log(sum(0, 25, 30,45));


//    includes. use
//   let arr = ['sandeep','manjeet','sonu','kuldeep','monu']

//   let value = arr.includes("monu");

//   console.log(value);


//    entries,keys,value.use

// let person = {
//     name: "Sandeep",
//     age: 25
// }

// console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));


//   key.use

// let person = {
//         name: "Sandeep",
//         age: 25,
//         address:"vpo kaimri",
//       }

//       person.country =  "India";

//       for(x in person){
//           console.log(x +":" + person[x]);
//       }


//    get.use

// let person = {
//              name: "Sandeep",
//              age: 25,
//              address:"vpo kaimri",
//              get details(){
//                  return this.name + " is " + this.age  + " year old and lives at " + this.address;
//              }
//             }

//             console.log(person.details);


//   set . use
// let person = {
//     name: "Sandeep",
//     age: 25,
//     address:"vpo kaimri",
//     get details(){
//         return this.name + " is " + this.age  + " year old and lives at " + this.address;
//     },
//     set setage(value){
//         this.age = value;
//     }
//    }
//    person.setage = 30;

//    console.log(person.details);



//   defineproperty . use

// var book = {
//     name:"PHP",
//     price: 799
// }
// Object.defineProperty(book, 'writer',{
//     value:"deep",
//     writable:false  //false  //true  . use
// });

// book.writer = "Any";

// console.log(book);



//  preventExtensions . use

// var book = {
//         name:"PHP",
//         price: 799
//     }

//     Object.preventExtensions(book);
//     Object.freeze(book);   //freeze //seal .use

//     book.name = "js";

//     console.log(book);
    

//    sef invoke . use

// (function (){
//     console.log("self invoke");
// })();


//  call  . use

// var person = {
//     fullName: function(){
//         return this.firstName + " " + this.LastName;
//     }
// }

// var person1 = {
//     firstName: "Sandeep",
//     LastName: "Yadav"
// }

// var person2 = {
//     firstName: "Sandeep",
//     LastName: "Yadav"
// }

// console.log(person.fullName.call(person1));

//    apply . use
// var person = {
//     fullName: function(age, address){
//         return this.firstName + " " + this.LastName + " is " + age + " year old! and from " +  address ;
//     }
// }

// var person1 = {
//     firstName: "Sandeep",
//     LastName: "Yadav"
// }

// var person2 = {
//     firstName: "Sandeep",
//     LastName: "Yadav"
// }

// let arrey = [25, "vpo kaimri"];

// // console.log(person.fullName.apply(person2, arrey));

// console.log(person.fullName.call(person2, 25, "vpo kaimri"));


//   closer function . use


// function calculater(a, b, opration){
//     return opration(a, b);
// }

// function add(a, b){
//     return a + b;
// }

// function minus(a, b){
//     return a - b;
// }

// function multi(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }

// let output = calculater(20, 2, minus)

// console.log(output);


//    class inheritance  . use

// class Shape{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea(){
//         return this.width * this.height
//     }
// }


// // inheritance
// class square extends Shape{
//     constructor(sidevalue){
//         super(sidevalue, sidevalue);
//     }
// }

// class Rectangel extends Shape{
//     constructor(width, height){
//         super(width, height);
//     }
// }

// let sq1 = new square(12);
// let sq2 = new square(122);
// let rc1 = new Rectangel(70, 32)
// console.log(sq1.getArea());
// console.log(rc1.getArea());


//    class in static  .  use

// class Shape{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea(){
//         return this.width * this.height
//     }

//     static classname(){
//         console.log("this is a shape class");
//     }
// }


// // inheritance
// class square extends Shape{
//     constructor(sidevalue){
//         super(sidevalue, sidevalue);
//     }
// }

// class Rectangle extends Shape{
//     constructor(width, height){
//         super(width, height);
//     }
// }

// let sq1 = new square(12);
// let sq2 = new square(122);
// let rc1 = new Rectangle(70, 32)
// console.log(sq1.getArea());
// console.log(rc1.getArea());

// square.classname();


//   call wait  .  use

// setTimeout(function(){
//     console.log("this is set timeout function")
// }, 5000);

// console.log("this is line number 342");


//    promise  .  use

let promise =  new Promise(function(myResolve,){
    setTimeout(function(){
        myResolve("i'm here");
    },4000);
    throw new Error("this is Error");
});

promise.then(value => console.log(value))
        .catch(error => console.log(error))