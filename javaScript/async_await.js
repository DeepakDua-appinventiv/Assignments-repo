function func1()
{
    
    setTimeout(()=>{
        console.log("calling function1");
        console.log("hello after 5 sec");
    },5000);
}
function func2()
{
    
    setTimeout(()=>{
        console.log("calling function2");
        console.log("hello after 2 sec");
    },2000);
}
function func3()
{
   
    setTimeout(()=>{
        console.log("calling function3");
        console.log("hello after 4 sec");
    },4000);
}
function func4()
{
    
    setTimeout(()=>{
        console.log("calling fun4");
        console.log("hello after 3 sec");
    },3000);
}

async function main_func()
{

await func1();

await func2();

await func3();

await func4();
}

main_func();