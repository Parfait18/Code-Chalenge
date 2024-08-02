function makeAnagram(str) {
  const letters = str.split("");
  const anagram = [];

  for (let i = 0; i < letters.length; i++) {
    let word = letters[i];
    const restWord = letters.slice(i, i);
    console.log(word, restWord);
    // for (let j = 0; j < letters.length; j++) {
    //   if (i != j) {
    //     word += letters[j];
    //   }
    // }
    console.log("[word] ==> " + word);
    anagram.push(word);
  }

  return anagram;
}
const result = makeAnagram("toto");

console.log("[result] =>", result);
