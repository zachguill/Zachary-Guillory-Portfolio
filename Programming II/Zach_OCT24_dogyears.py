"""
Author: Zachary Guillory
Date: Oct 2024
Purpose: Create a duplicate of a javascript file that calculates a dogs age
"""


print('Have you ever wondered how old your dog is in human years? The common adage is "1 year equals 7 dog years",')
print('but that is simply not true. After their first year, your dogs age equivilent is about 15 years old. After two years your')
print('dog is about 24. Each aditional year after that adds 5 years. Lets figure out your dogs age!')
x = input('How old is Your Dog? ')

if (x.isdigit() == False ):
    print('Please enter a positive whole number.')
    x = input('How old is Your Dog? ')
else:
    x= int(x)

if (x <=1):
    x*=15
elif(x> 1 and x<= 2):
    x = (x-1)*9 +15
else:
    x = (x-2)*5 +24
print('Your Dog Is '+ str(x))
