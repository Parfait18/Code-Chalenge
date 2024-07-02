def closest_to_zero(n, inputs):
    if n == 0:
        return 0

    temperatures = list(map(int, inputs))
    closest = temperatures[0]

    for temp in temperatures:
        if abs(temp) < abs(closest) or (abs(temp) == abs(closest) and temp > closest):
            closest = temp

    return closest

# Lecture des données d'entrée
n = int(input())  # le nombre de températures à analyser
inputs = input().split()  # les températures sous forme de chaîne de caractères

print(closest_to_zero(n, inputs))

