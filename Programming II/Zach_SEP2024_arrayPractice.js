/*
Author: Zachary Guillory
Date: 19SEP2024
Purpose: practice functions and while loops to append an array
*/

const fibonaci = [0,1];

function add () {
while (fibonaci.length < 20){
    let x = fibonaci[fibonaci.length-1] + fibonaci[fibonaci.length-2]
    fibonaci.push(x)
}
};

add();
console.log(fibonaci);
