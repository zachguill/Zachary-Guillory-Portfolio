/*
Author: Zach Guillory
Purpose: Create a program that uses loops and conditionals
Date: 17 SEP 2024

Psuedo code:
Create an array 
Use a for of loop to iterate through the array
Have an if statement in the loop to check the integers
Console log the results
*/

const numbers = [1, 12, 4, 17, 19, 7, 13, 15];

for( let number of numbers){
    if (number > 10){
        console.log("You Win!")
    } else( 
        console.log("You Lose :'(")
    )

}