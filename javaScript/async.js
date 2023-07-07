function func1()
{
    setTimeout(() => {
        console.log("Hello after 5 seconds");
    },5000);
}

function func2()
{
    setTimeout(() => {
        console.log("Hello after 3 seconds");
    },3000);
}

func1();
func2();