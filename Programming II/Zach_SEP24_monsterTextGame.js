/*
object based on monsters

wolfman
dracula
frankenstein's monster
the mummy
slenderman
lock ness monster
mothman
chuthulu
yeti
ghost


monster properties
attack power (1-10)
attack speed (1-10)
height in feet
weight in pounds
damage threshold (1-10)
weaknesses
name
health (1-10)
temperment
intellect

actions or methods
attack()
roar()
dodge()

*/

const wolfman = {
    name : "Wolfman",
    attackSpeed: 7,
    attackPower: 6,
    height: 6,
    weight: 200,
    dT: 5,
    weakness: "Silver",
    health: 100
};

const dracula = {
    name : "Dracula",
    attackSpeed: 6,
    attackPower: 7,
    height: 5.9,
    weight: 150,
    dT: 8,
    weakness: "Cross",
    health: 150
};

const mummy = {
    name : "The Mummy",
    attackSpeed: 4,
    attackPower: 4,
    height: 5.9,
    weight: 150,
    dT: 7,
    weakness: "Book of the dead",
    health: 150
};

const chuthulu = {
    name : "Chuthulu",
    attackSpeed: 100,
    attackPower: 100,
    height: 200,
    weight: 10000,
    dT: 100,
    weakness: "suplication",
    health: 10000
};

const frankenstein = {
    name: "Frankenstein's Monster",
    attackSpeed: 3,
    attackPower: 8,
    height: 7,
    weight: 300,
    dT: 6,
    weakness: "Villagers",
    health: 100
}

const slenderman = {
    name: "Slenderman",
    attackSpeed: 1,
    attackPower: 1,
    height: 8,
    weight: 200,
    dT: 1,
    weakness: "snopes.com",
    health: 10000
}

const yeti = {
    name: "Yeti",
    attackSpeed: 5,
    attackPower: 9,
    height: 8,
    weight: 500,
    dT: 9,
    weakness: "Fire",
    health: 100
}
const ghost = {
    name: "Ghost",
    attackSpeed: 8,
    attackPower: 3,
    height: 6,
    weight: 1,
    dT: 2,
    weakness: "Salt",
    health: 150
}
const demon = {
    name: "Demon",
    attackSpeed: 10,
    attackPower: 5,
    height: 6,
    weight: 1,
    dT: 3,
    weakness: "Priest",
    health: 100
}

const mothman = {
    name: "Mothman",
    attackSpeed: 9,
    attackPower: 2,
    height: 7,
    weight: 300,
    dT: 4,
    weakness: "Shotgun",
    health: 100
};

const playerCharacter = {
    name: "You",
    attackSpeed: 5,
    attackPower: 5,
    height: 6,
    weight: 200,
    dT: 5,
    weakness: null,
    health: 100
};

const monsters = [mothman, dracula, mummy, demon, ghost, yeti, slenderman, frankenstein, chuthulu, wolfman]
const stories =["Its Halloween night and you are out for a stroll through the park.", 'While on a late drive through the forest, you need to stop and change a flat tire.','While visiting a your granparents cabin you hear a noise outside. You go to investigate.']
var i;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    if(playerCharacter.health <= 0){
        console.log(monsters[i].name + " has defeated you. You lose!");
        playAgain();
        return;  
    }
    if (monsters[i].health <= 0) {
        console.log(monsters[i].name + " is defeated! You win!");
        playAgain();
        return;
    }
    rl.question("Attack or exploit the weakness? ", (input1) => {
        if (input1.toLowerCase() === monsters[i].weakness.toLowerCase()) {
            console.log("You exploited the weakness. You Win!");
            rl.close();
        } else if (input1.toLowerCase() === "attack") {
            console.log("You attack");
            Attack();
            console.log( monsters[i].name + " health: " + monsters[i].health);
            console.log( "Your health: " + playerCharacter.health);
            promptUser(); 
        } else if (input1.toLowerCase() === "run") {
            console.log("You trip over a tree branch and break your ankle. If only you had the guts to stand and fight.");
            console.log("As "+ monsters[i].name +" approaches you scream in terror.")
            console.log("You die. Game Over.")
            rl.close();
        }else {
            console.log("Incorrect weakness, please try again");
            promptUser(); 
        }
    });
}

function Attack() {
    let monsterRoll1 = diceRoll();
    let playerCharacterRoll1 = diceRoll();
    let monsterRoll2 = diceRoll();
    let playerCharacterRoll2 = diceRoll();
    let playerAttack = playerCharacter.attackSpeed * playerCharacterRoll1
    let monsterAttack = monsters[i].attackSpeed * monsterRoll1
    if (playerAttack >= monsterAttack){
    monsters[i].health -= playerCharacter.attackPower * playerCharacterRoll2 - monsters[i].dT;
}else {
    playerCharacter.health -= monsters[i].attackPower * monsterRoll2 - playerCharacter.dT;
}
}

function diceRoll(){
 return Math.floor(Math.random()* 12);
}

function randomMonster(){
    i = Math.floor(Math.random()*monsters.length)
    return i 
}

function playAgain(){
    if(playerCharacter.health <=0 || monsters[i].health <= 0){
        rl.question('Would you like to play again?', (input2)=>{
            if(input2.toLowerCase() === 'yes'){
                playerCharacter.health = 100
                randomMonster()
                let j = Math.floor(Math.random()*stories.length)
                console.log(stories[j]);
                console.log("Suddenly, through the trees appears " + monsters[i].name);
                console.log("What Can You do but stand and fight?");
                promptUser()
            }else{
                console.log('Thank you for playing!')
                rl.close();
            }
        })
    }

}
randomMonster();
console.log(stories[0]);
console.log("Suddenly, through the trees appears " + monsters[i].name);
console.log("What Can You do but stand and fight?");
promptUser();
