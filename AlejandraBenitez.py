# Tasa de crecimiento  de tu cuenta

# Cada año la cantidad de dinero en la cuenta crece 20%
# Calcular cuantos años se tardará tu ingreso inicial en crecer a una cantidad meta

def depositProfit(deposit, rate, threshold):
    count = 0
    growthRate = rate * 0.01
    while (deposit < threshold):
        interest = deposit * growthRate
        print('currently in the account ', deposit)
        deposit += interest
        count += 1
    return count

prueba = depositProfit(300, 4, 500)
print(prueba)