function getLucky(s: string, k: number) {
  // Étape 1 : Convertir les lettres en leurs positions numériques dans l'alphabet et calculer la somme des chiffres de ces positions
  let result = s
    .split("")
    .map(char => char.charCodeAt(0) - 96)
    .reduce((sum, num) => sum + num.toString().split("").reduce((a, b) => a + parseInt(b), 0), 0);

  // Étape 2 : Appliquer la transformation k-1 fois supplémentaires
  for (let i = 1; i < k; i++) {
    result = result
      .toString()
      .split("")
      .reduce((sum, num) => sum + parseInt(num), 0);
  }

  return result;
}
