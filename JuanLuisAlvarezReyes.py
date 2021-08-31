"""
Imprimir en pantalla del 1 a N
Si el nuemro es divisible entre 3 imprimimis Fizz
Si el numero es divisible entre 5 imprimimos Buzz
Si el numero es divisible entre 3 y 5 imprimimos FizzBuzz

"""
def fizzBuzz(number):
    for i in range (1, number +1):
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        elif i % 3 == 0:
            print('Fizz')
        elif i % 5 == 0:
            print('Buzz')
        else:
            print(i)

fizzBuzz(15)