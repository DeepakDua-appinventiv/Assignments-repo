function func1()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function 1");
            console.log("hello after 5 seconds");
            resolve();
        }, 5000);
    })
}

function func2()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function 2");
            console.log("hello after 3 seconds");
            resolve();
        }, 3000);
    })
}

function func3()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("function 3");
            console.log("hello after 2 seconds");
            resolve();
        }, 2000);
    })
}


func1()
  .then(func2)
  .then(func3);

// function caller()
// {

// await func1();

// await func2();

// await func3();

// }
// caller();