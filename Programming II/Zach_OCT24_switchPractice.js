/*
Author: Zachary Guillory
Purpose: Practice Switch statements

Create an array that can be interated through for the switch statement
Start with array that contains values
create a switch to sort values
console log the string from the array plus the text fromt he switch

*/
const collegeDegree = ["Computer Science", "English", "Marketing", "Music Theory"]

for (let degree of collegeDegree){
switch(degree){
    case "Computer Science" :
       text=  "College of Engineering"
       break;
    case "Marketing":
        text = "College of Business"
        break;
    default :
        text = "College of Liberal Arts"
}

console.log(degree+ ": " + text);

}
