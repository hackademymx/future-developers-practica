# -*- coding: utf-8 -*-
"""
Created on Thu Sep  2 00:54:31 2021

@author: Gerardo
"""

def fizzBuzz(number):
    for i in range(1,number + 1):
        if i % 3 ==0 and i % 5==0:
            print("FIZZBUZZ")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
        
fizzBuzz(30)        