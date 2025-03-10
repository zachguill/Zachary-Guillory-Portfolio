"""
Author: Zachary Guillory
Date: 19SEP24
Purpose: Duplicate a text based game created in JavaScript
"""
print("Welcome to The Witcher text based Game!")
w= input("Type your name: ")
print("You have 15 total points to distribute through your stats")
print('Attack Speed')
print("Attack Power")
print('Damage Threshold')
x= input("Choose Your Attack Speed: ")
y= input("Choose Your Attack Power: ")
z= input("Choose Your Damage Threshold: ")


trophy_list =[]
purse =[]
player_character ={
    'name': w,
    'attack_speed': int(x),
    'attack_power': int(y),
    'dt': int(z),
    'health': 100
}



monsters = {
    0 :{
        'name': 'Striga',
        'attack_speed': 7,
        'attack_power': 3,
        'dt': 6,
        'health': 100,
        'trophy': 'Striga Trophy'
    },
    1 :{
        'name': 'Werewolf',
        'attack_speed': 4,
        'attack_power': 6,
        'dt': 6,
        'health': 100,
        'trophy': 'Werewolf Trophy'
    },
    2 :{
        'name': 'Drowner',
        'attack_speed': 8,
        'attack_power': 2,
        'dt': 6,
        'health': 100,
        'trophy': 'Drowner Trophy'
    },
    3 :{
        'name': 'Wraith',
        'attack_speed': 3,
        'attack_power': 7,
        'dt': 6,
        'health': 100,
        'trophy': 'Wraith Trophy'
    }
}

import random




def start_function ():
    random_monster = random.randrange(0,4)
    print("The Witcher "+player_character['name']+ " is walking through the forest at dusk")
    print("Sudden a deadly "+monsters[random_monster]['name']+' bursts through the trees')
    return random_monster
random_monster = start_function()

def attack_func ():
    dice_roll_one = random.randrange(1,13)
    dice_roll_two = random.randrange(1,13)
    dice_roll_three = random.randrange(1,13)
    monster_chance = dice_roll_one * monsters[random_monster]['attack_speed']
    player_chance = dice_roll_two * player_character['attack_speed']
    print("Monster Roll: ")
    print(dice_roll_one )
    print("Player Roll: ")
    print(dice_roll_two)
    if monster_chance > player_chance:
        player_character['health']-= monsters[random_monster]['attack_power']*dice_roll_three
    elif player_chance > monster_chance:
        monsters[random_monster]['health'] -= player_character['attack_power']*dice_roll_three
    print(monsters[random_monster]['name'])
    print(monsters[random_monster]['health'])
    print(player_character['name'])
    print(player_character['health'])

def game_function():
    choice1 = input('Do you attack or run? ')
    if int(x)+int(y)+int(z) > 15:
        print("Cheaters Never Win")
        player_character['health'] -= 100

    if choice1 == "attack" or choice1 == "Attack":
        attack_func()
    elif choice1 == "run" or choice1 == "Run":
        print("You trip over a tree branch and break your ankle. If only you had the guts to stand and fight.")
        print("The " + monsters[random_monster]['name']+ " devours your liver while you scream in agony.")
        player_character['health'] -= 100
    else:
        print("Incorrect Input")

    while(monsters[random_monster]['health'] > 0 and player_character['health'] > 0):
        choice2 = input("Attack or Run? ")
        if choice2 == "attack" or choice2 == "Attack":
            attack_func()
        elif choice2 == "run" or choice2 == "Run":
            print("You trip over a tree branch and break your ankle. If only you had the guts to stand and fight.")
            print("The " + monsters[random_monster]['name']+ " devours your liver while you scream in agony.")
            player_character['health'] -= 100
        else:
            print("Incorrect Input")
    if (monsters[random_monster]['health'] <= 0):
        print('You win! Go to the village and collect your payment. Good luck on the path')
        player_character['health'] = 100
        trophy_list.append(monsters[random_monster]['trophy'])
    if (player_character['health'] <= 0):
        print('The path has always been brutal. You are just another Witcher who wasnt fast enough.')

game_function()
def village_function():
    print("You check you saddle bags for your collection of trophies")
    print(trophy_list)
    print("Upon returning to the village you ride up to the house of the alderman.")
    print('William, the alderman, greets you at the door')
    print("     William: Master Witcher, what have ye got for me today")
    print("     "+player_character['name']+": I have some trophies I would like to sell.")
    print("     William: Trophies ye say? Well the village coffers are low, I can only offer ye 10 crowns per trophy")
    print("     "+player_character['name']+": I'd rather burn these in the village square than take 10 crowns each.")
    print("     William: Calm ye down now, I may be able to squeeze a bit more if you are willing to barter.")
    choice4 = input("     What are ye willing to take per trophy?")
    if(choice4.isdigit() == False):
        print("     William: Stop fooling arond and give me a number")
    else:
        money = int(choice4)
        if(money >= 300):
            print("     William: Gods ye would steal from the whole village for some paltry trophies")
            print("     Be the gone from my sight before I call the militia on ye.")
        elif(money >= 200 and money < 300):
            print("     William: Ye must come down to at least 150 per trophy.")
            print(player_character['name']+": That will work.")
            print("     William: I'm glad ye be reasonable, take the gold and be off with ye mutant.")
            gold = len(trophy_list)*150
            purse.append(gold)
            print("You walk out of the alderman's house your purse heavier. Maybe you could have gotten more if you were a little more reasonable")
            print("Your Gold")
            print(purse)
        elif(money >= 100 and money < 200):
            print("     William: Witcher ye be as devil, but I can find the gold for ye.")
            gold = len(trophy_list)*money
            purse.append(gold)
            print("You walk out of the alderman's house your purse heavier, glad you bargined for the most money you could get.")
            print("Your Gold")
            print(purse)
        elif(money <100 ):
            print("     William smirks")
            print("     William: I can do that for ye witcher.")
            gold = len(trophy_list)*money 
            purse.append(gold)
            print("You walk out of the alderman's house your purse a little heavier, you cant help but feeling he cheated you")
            print("Your Gold")
            print(purse)
    

while(player_character['health'] > 0):
    choice3 = input("Retun to the village or continue hunting?")
    if(choice3 == "Return" or choice3 == "return"):
        village_function()
        break
    elif(choice3 == "Keep Hunting" or choice3 == "keep hunting" or choice3 == "Hunt" or choice3 == "hunt"):
        random_monster = start_function()
        game_function()
    else:
        print("Please enter Hunt or Return")