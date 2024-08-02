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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
   for(let i=1; i<=n;i++){
      // Calculate the number of spaces and hashes for the current line
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        
        // Construct and print the line
        const line = spaces + hashes;
        console.log(line);
   }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
