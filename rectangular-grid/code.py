import sys
import math

# Lire les entrées
width = int(input())  # le nombre de cellules sur l'axe X
height = int(input())  # le nombre de cellules sur l'axe Y

# Lire la grille
grid = []
for i in range(height):
    line = input()  # largeur caractères, chacun soit 0 soit .
    grid.append(line)

# Fonction pour trouver le premier nœud à droite
def find_right(x, y):
    for i in range(x + 1, width):
        if grid[y][i] == '0':
            return i, y
    return -1, -1

# Fonction pour trouver le premier nœud en dessous
def find_down(x, y):
    for i in range(y + 1, height):
        if grid[i][x] == '0':
            return x, i
    return -1, -1

# Parcourir la grille et trouver les nœuds et leurs voisins
for y in range(height):
    for x in range(width):
        if grid[y][x] == '0':
            right_x, right_y = find_right(x, y)
            down_x, down_y = find_down(x, y)
            print(f"{x} {y} {right_x} {right_y} {down_x} {down_y}")

