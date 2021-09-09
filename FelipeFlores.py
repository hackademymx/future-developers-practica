"""
Dado un arreglo a que contiene solo números en el rango de 1 a una longitud
encuentre el primer númmero duplicado para el que la segunda aparición tiene el índice mínimo.
En otras palabras, si hay más de 1 número duplicado, devuelve el número para el que la segunda
aparición tiene un índice más pequeño que la segunda aparición del otro número.
Si no hay tales elementos, devuelve -1

Ejemplo:

Para:
a = [2, 1, 3, 5, 3, 2]

La cifra debe ser:
firstDuplicate(a) = 3

Hay 2 duplicados: los números 2 y 3 
La segunda aparición de 3 tiene el índice mas pequeño que
la segunda aparición de 2, por lo que la respuesta es 3.

Para a = [2, 2], la salida debe ser firstDuplicate(a) = 2;
Para a = [2, 4, 3, 5, 1], la salida debe ser firstDuplicate(a) = -1
"""

def firstDuplicate(a):
    dict = {}
    result = -1

    for i in range(0, len(a)):
        element = a[i]
        if element not in dict.keys():
            dict[element] = True
        else:
            result = element
            break
    return result

result1 = firstDuplicate([2, 1, 3, 5, 3, 2])
print(result1)

result2 = firstDuplicate([2, 2])
print(result2)
            
result3 = firstDuplicate([2, 4, 3, 5, 1])
print(result3)