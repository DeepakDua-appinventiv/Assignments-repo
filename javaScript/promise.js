// function func1()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("function 1");
//             console.log("hello after 5 seconds");
//             resolve();
//         }, 5000);
//     })
// }

// function func2()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("function 2");
//             console.log("hello after 3 seconds");
//             resolve();
//         }, 3000);
//     })
// }

// function func3()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("function 3");
//             console.log("hello after 2 seconds");
//             resolve();
//         }, 2000);
//     })
// }


// func1()
//   .then(func2)
//   .then(func3);

//********************PROMISE EXAMPLE 2**************************** */

function prom(complete){
    return new Promise((resolve, reject)=>{
    console.log("fetching data, please wait");
    setTimeout(()=>{
        if(complete){
            resolve("successful");
        }else{
            reject("failure");
        }
    }, 2000)
    });
}

let onfulfillment = (result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

prom(true).then(onfulfillment);
prom(false).then(onRejection);

//*************************PROMISE EXAMPLE 3********************************/

// const myPromise = new Promise((resolve, reject) => {
//     // Perform an asynchronous operation
//     setTimeout(() => {
//       const randomValue = Math.random();
//       if (randomValue < 0.5) {
//         resolve(randomValue); // Fulfill the promise
//       } else {
//         reject(new Error('Something went wrong')); // Reject the promise
//       }
//     }, 1000);
//   });
  
//   // Handling the promise
//   myPromise
//     .then(result => {
//       console.log('Fulfilled:', result);
//     })
//     .catch(error => {
//       console.log('Rejected:', error);
//     });