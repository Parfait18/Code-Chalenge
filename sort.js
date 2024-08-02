function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const data = [
  1, 9, 3, 8, 2, 6, 4, 0, 5, 1, 9, 3, 8, 2, 6, 4, 0, 5, 1, 9, 3, 8, 2, 6, 4, 0,
  5, 1, 9, 3, 8, 2, 6, 4, 0, 5, 1, 9, 3, 8, 2, 6, 4, 0, 5,
];
const result = sortArray(data);
console.log("result ==> ", result);
