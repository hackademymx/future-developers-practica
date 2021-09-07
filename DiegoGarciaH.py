'''
Imprimir en pantalla del 1 a N
Si el numero es divisible entre 3 imprimimos Fizz
Si el numero es divisible entre 5 imprimimos Buzz
Si el numero es divisible entre 3 y 5 emprimimos FizzBuzz
'''

def fizzBuzz(number):
    for i in range(1, number + 1):
        if i % 3 == 0 and i % 5 ==0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print ("Fizz")
        elif i % 5 == 0:
            print ("Buzz")
        else:
            print(i)

def fizzBuzz2(number):
    for i in range(1, number + 1):
        fizz = 'Fizz' if i % 3 == 0 else ''
        buzz = 'Buzz' if i % 5 == 0 else ''
        print(f'{fizz}{buzz}' or i)
    print('*****************************************************************************')

fizzBuzz2(30)
fizzBuzz(15)
