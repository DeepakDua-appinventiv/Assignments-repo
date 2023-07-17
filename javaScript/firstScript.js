// for(let i=0; i<10; i++){
//     console.log("Hello There!");
// }

// let str = "Hello";
// if(str == "Hello"){
//     console.log("string matched");
// }


//Array Methods Practice

// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f'];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let arr1 = ['cat', 'dog', 'bat'];
// console.log(arr1.includes('cat'));

// let arr1 = ['sun', 'moon', 'stars'];
// console.log(arr1.reverse());

// let colors = ['red', 'green', 'yellow', 'purple', 'orange', 'golden'];
// console.log(colors.slice(2,4));

// let colors = ['red', 'green', 'yellow', 'purple', 'orange', 'golden'];
// console.log(colors.splice(2,1,'pink'));

// const obj = {
//     num : 7,
//     isFav : true,
//     colors : ['red', 'yellow', 'blue']
// }

// console.log(obj.num);

// for(let i=2; i<=20; i+=2){
//     console.log(i);
// }

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// function grumpus(){
//     alert("for the last time");
//     alert("leave me alone");
// 

// for(let i=0; i<9; i++){
//     // setTimeout(() => {
//     //     console.log("printing let");
//     //     console.log(i);
//     // },3000)
//     console.log("printing let");
//     console.log(i);
// }

// for(var i=0; i<9; i++){
//     // setTimeout(() => {
//     //     console.log("printing var");
//     //     console.log(i);
//     // },2000)
//     console.log("printing var");
//     console.log(i);
// }

// let array = [1,2,3,4,5,6,7,8,9];

// array.forEach(function(el){
//     console.log(el);
// })

// const doubles = array.map(function(el){
//     return el*2;
// })

// const doubles = array.map((el)=>{
//     return el*2;
// })

// console.log(doubles);

// console.log("hello");                        //set timeout function
// setTimeout(()=>{
//     console.log("hello after 3 seconds");
// }, 3000)


//callback hell

// setTimeout(()=>{
//     console.log("hello, I am red");
//     setTimeout(()=>{
//         console.log("hello, I am yellow");
//         setTimeout(()=>{
//             console.log("hello, I am blue");
//             setTimeout(()=>{
//                 console.log("hello, I am purple");
//             },1000)
//         },1000)
//     },1000)
// }, 1000)

// import {msg, user} from "./test.js";

// console.log(msg);

// user("Deepak");