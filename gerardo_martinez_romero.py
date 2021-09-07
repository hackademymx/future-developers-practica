def firs_duplicate(numbers):
    dict = {}
    result = -1

    for index in range(0, len(numbers)):
        element = numbers[index]
        if element not in dict.keys():
            dict[element] = True
        else:
            result = element
            break
        
    return result

lista_valores = [2, 3356, 52, 32, 65, 9, 2, 3356]
print(firs_duplicate(lista_valores))

lista_valores = [3356, 52, 32, 65, 9, 2, 3356]
print(firs_duplicate(lista_valores))

lista_valores = [ 52, 32, 65, 9, 2, 3356]
print(firs_duplicate(lista_valores))