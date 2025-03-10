/* 
Author: Zach Guillory
Date: 5 SEP 2024
Purpose: To practice the basic structures all computers utilize. Must include a loop, 
a decision, math operations, and storage into a data structure

Pseudo Code: Create an generator that makes random Football game scores
Create a map that holds team locations and mascot names ex. Texas Longhorns
Create a function that generates random numbers that are only multiples of 7
Create a function that generates a random number to get a team from the map
Stringify the two different team names and scores into 
Pass the string into an array 
Teams cannot repeat    
*/


// map containing team names
const teamNames = new Map ([
    [0, "Texas Longhorns"],
    [1, "Auburn Tigers"],
    [2, "USC Trojans"],
    [3, "Ohio State Buckeyes"],
    [4, "Kansas State Wildcats"],
    [5, "Kansas Jayhawks"],
    [6, "Texas A&M Aggies"],
    [7, "Notre Dame Fighting Irish"],
    [8, "Alabama Crimson Tide"],
    [9, "Georgia Bulldogs"],
    [10, "Florida Gators"],
    [11, "Florida State Seminoles"],
    [12, "Ole Miss Rebels"],
    [13, "Oregon Ducks"],
    [14, "Penn State Nittany Lions"],
    [15, "Missouri Tigers"],
    [16, "Utah Utes"],
    [17, "Miami Hurricanes"],
    [18, "Tennessee Volunteers"],
    [19, "Oklahoma Souners"],
    [20, "LSU Tigers"],
    [21, "Colorado Buffaloes"],
]);

// array for results and if indices that have been used
const results = [];
const usedIndices = [];



// function that generates ramdom scores that are multiples of 7 
function teamScores (){
    let x = Math.floor(Math.random()* 10);
    return x*7;
}

// function that generates random numbers to pick teams from the map
function randomTeams (){
    let x = Math.floor(Math.random()* teamNames.size);  
    while(usedIndices.includes(x) === true){
        x = Math.floor(Math.random()* teamNames.size); 
    };
    usedIndices.push(x);
    return x;
};

// for loop that iterates through the map to create the strings
for(i = 0; i < teamNames.size/2; i++){
    var team1 = randomTeams();
    var team2 = randomTeams();
    while( team1 === team2){
        team2 = randomTeams();
    }
    var score1 = teamScores();
    var score2 = teamScores();
    while( score1 === score2){
        score2 = teamScores();
    }
    createString();
}

// function that concats the strings into a new string and adds them to the results array
function createString (){
    let string1 = teamNames.get(team1);
    let string2 = teamNames.get(team2);
    let string3 = score1;
    let string4 = score2;
    if(string1 === "Texas Longhorns"){
        string3 = 105;
    }
    if(string2 === "Texas Longhorns"){
        string4 = 105;
    }
    let stringComplete = string1.concat(" ",string3, " : ", string2, " ", string4);
    results.push(stringComplete);
}
// loop that lists each value in array results as a new line
for (let result of results){
    console.log(result);
};

// debuging to ensure a team is not repeated
console.log(usedIndices);