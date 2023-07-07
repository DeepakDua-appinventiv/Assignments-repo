function func1(callback)
{
    
    setTimeout(()=>{
        console.log("calling function1");
        console.log("hello after 5 sec");
        callback();
    },5000);
}
function func2(callback)
{
    
    setTimeout(()=>{
        console.log("calling function2");
        console.log("hello after 3 sec");
        callback();
    
    },3000)
}
function func3(callback)
{
   
    setTimeout(()=>{
        console.log("calling function3");
        console.log("hello after 4 sec");

     callback();
        
        
    },4000);
}
function func4()
{
    
    setTimeout(()=>{
        console.log("calling fun4");
        console.log("hello after 2 sec");
        
    },2000);
}

console.log("AFTER CALLBACK FUNCTION");

func1(function(){
    
    func2(function(){
        func3(function(){
            func4();
        })
    })
        
});
