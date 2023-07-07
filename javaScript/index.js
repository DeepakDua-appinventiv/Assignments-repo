console.log("Difference between let var and const");

function varScope(){
    var name = 'Deepak';
    if (true){
        var name = 'Deepak Dua';
        console.log(name);
    }
    console.log(name);
}

function  letScope(){
    let name = 'Deepak';
    if (true){
        let name = 'Deepak Dua';
        console.log(name);
    }
    console.log(name);
}

const name = 'I am a constant';
console.log(name);