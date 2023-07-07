//for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

//while loop
let num = 0;
while(num < 10){
    console.log(num);
    num++;
}

// do while loop
let i = 1;
const n = 5;
do {
    console.log(i);
    i++;
} while(i <= n);

//for each loop
const nums = [9,8,7,6,5,4,3,2,1];
nums.forEach(function(n){
    console.log(n*n);
})

//for of loop
const colors = ['red', 'yellow', 'blue', 'red', 'green'];
for (let sub of colors){
    console.log(sub);
}
