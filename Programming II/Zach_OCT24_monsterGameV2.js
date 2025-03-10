/*
Author: Zach Guillory
Date: Oct 2024
Purpose: Create a second version of monsterGame.js with a class 
*/
class Monster {
    constructor(name,attackPower,attackSpeed,damageThreshold,weakness){
        this.name = name
        this.attackPower = attackPower
        this.attackSpeed = attackSpeed
        this.damageThreshold = damageThreshold
        this.weakness = weakness
        this.health = 100
    }
    
    
    
    
    }
    
let wolfman = new Monster ("Wolfman", 5,5,5,"Silver" )
let dracula = new Monster('Dracula',5,5,5,'Garlic')
let monsters = [wolfman,dracula]
console.log(monsters)

