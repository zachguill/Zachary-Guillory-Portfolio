/*
instructions for max stats
for your name use a string
your stats can add up to 15, but not exceed 15
your weakness should alsop be a string
*/

let monsters = new Map()
class monster {
constructor(name,attackPower,attackSpeed,damageThreshold,weakness){
    this.name = name
    this.attackPower = attackPower
    this.attackSpeed = attackSpeed
    this.damageThreshold = damageThreshold
    this.weakness = weakness
    this.health = 100
}




}

let wolfman = new monster ("Wolfman", 5,5,5,"silver", )
let dracula = new monster('Dracula',5,5,5,'garlic')
monsters.set(1,wolfman)
monsters.set(2,dracula)
console.log(monsters.get(2))

