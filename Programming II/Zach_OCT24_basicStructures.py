"""
Author: Zachary Guillory
Date: October 2024
Purpose: Duplicate a JavaScript program that creates a list of scores for college football games
"""

teams =['Texas Longhorns', 'Auburn Tigers', 'USC Trojans', 'Ohio State Buckeyes','Houston Cougars', 'Oklahoma Sooners','Kansas State Wildcats','Kansas Jayhawks','Texas A&M Aggies','Notre Dame Fighting Irish','Alabama Crimson Tide','Georgia Bulldogs','Florida Gators','Florida State Seminoles','Ole Miss Rebels','Oregon Ducks','Penn State Nittany Lions','Missouri Tigers','Utah Utes','Miami Hurricanes','Tennessee Volunteers','LSU Tigers','Colorado Buffaloes','Wisconson Badgers']
scores = []
x = len(teams)/2

import random

def result ():
    random.shuffle(teams)
    while len(scores) < x:
        score1 =random.randrange(0,11) *7
        score2 =random.randrange(0,11) *7
        if (score1 == score2):
            score2 += 7
        if (teams[0] == 'Texas Longhorns'):
            score1 = 77
        if (teams[1] == 'Texas Longhorns'):
            score2 = 77
        result = f'{teams[0]} {score1} : {teams[1]} {score2}'
        print(result)
        scores.append(result)
        del teams[0]
        del teams[0]
        
result()

