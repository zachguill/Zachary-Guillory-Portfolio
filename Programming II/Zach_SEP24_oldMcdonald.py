"""
Author: Zachary Guillory
Date: September 2024
Purpose: Create a duplicate in python of a javascript file that sings old macdonald
"""

animalDictionary = {
    "cow" :{"name": "Cow",
            "sound": "Moo"
            }, 
    "dog":{"name": "Dog",
           "sound": "Ruff"
            },
    "duck":{"name": "Duck",
           "sound": "Quack"
            },               
    "goat":{"name": "Goat",
           "sound": "Bleet"
            },
}

def song ():
    for i in animalDictionary:
        print("Old McDonald had a farm")
        print("Ei Ei O")
        print("And on that farm he had a "+ animalDictionary[i]["name"])
        print("Ei Ei O")
        print("With a "+ animalDictionary[i]["sound"]+"-"+animalDictionary[i]["sound"]+" here")
        print("And a "+ animalDictionary[i]["sound"]+"-"+animalDictionary[i]["sound"]+" there")
        print("Here a "+ animalDictionary[i]["sound"]+ " there a "+ animalDictionary[i]["sound"])
        print("Everywhere a "+ animalDictionary[i]["sound"]+"-"+animalDictionary[i]["sound"])
        print("Old McDonald had a farm")
        print("Ei Ei O")
        print()
song()
