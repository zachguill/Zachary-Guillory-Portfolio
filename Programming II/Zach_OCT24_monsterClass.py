"""
Author: Zachary Guillory
Date: Oct 2024
Purpose: to create a duplicate in python for a javascript file that creates a class
"""

class Monster:
    def __init__(self,name,attackPower,attackSpeed,damageThreshold,weakness):
        self.name = name
        self.attackPower = attackPower
        self.attackSpeed = attackSpeed
        self.damageThreshold = damageThreshold
        self.weakness = weakness
        self.health = 100
        
    def __str__(self):
        return f'Name: {self.name}, Attack Power: {self.attackPower}, Attack Speed: {self.attackSpeed}, Damage Threshold: {self.damageThreshold}, Weakness: {self.weakness}, Health: {self.health}'
        

wolfman = Monster('Wolfman',5,5,5,'Silver')
print(wolfman)