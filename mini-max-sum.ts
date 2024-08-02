'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
   const len = arr.length
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum (sum of the first four elements)
  const minSum = arr.slice(0, len-1).reduce((sum, num) => sum + num, 0);

  // Calculate the maximum sum (sum of the last four elements)
  const maxSum = arr.slice(1, len).reduce((sum, num) => sum + num, 0);

  // Print the results
  console.log(minSum, maxSum);

}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
