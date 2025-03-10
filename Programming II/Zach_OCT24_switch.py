"""
Author: Zachary Guillory 
Date: Oct 2024
Purpose: Replicate a javascript switch statment in python
Python has no switch method, so the same thing must be accomplished with an if/elif
"""

collegeDegree = ["Computer Science", "English", "Marketing", "Music Theory"]

for degree in collegeDegree:
    if(degree == 'Computer Science'):
        print(degree + ': College of Engineering')
    elif(degree == 'Marketing'):
        print(degree + ': College of Business')
    else:
        print(degree + ': College of Liberal Arts')