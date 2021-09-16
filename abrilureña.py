#Abril Ureña - Future developers
#Ejercicio de Factorial (video #7) 
def factorial(num):
	if num < 0:
		print("factorial of negative num does not exist")
	elif num == 0:
		return 1
	else:
		fact = 1
		while (num > 1):
			fact *= num
			num -= 1

		return fact

num = 5
print("factorial of", num," is", factorial(num))

