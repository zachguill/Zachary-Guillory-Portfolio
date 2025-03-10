"""
Author: Zachary Guillory
Date: 19SEP2024
Purpose: Convert already existing javascript code into python code
"""
# this is a python list, similar to a javascript array
fibonaci = [0,1]

#this is a python function, def is short for define
def fib_func ():
    while len(fibonaci) < 20: #python utilizes tabs to denote contains len stands for length
        x = fibonaci[-1] + fibonaci[-2] # using negative indexs chounts backwards in the list
        fibonaci.append(x) # append adds a new list item to the end of the list

fib_func() # calls function

print(fibonaci) #print instead of console.log
