'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
   const period = s.slice(-2)
   let [ hours, minutes,seconds]:number[] = s.slice(0,-2).split(':').map(Number)
   
   if(period=='AM'){
    if (hours == 12) hours = 0
   }else if(period=='PM' ){
        if (hours !== 12) hours += 12;
   }

   const formattedHours = hours.toString().padStart(2,'0')
   const formattedMinutes = minutes.toString().padStart(2,'0')
   const formattedSeconds = seconds.toString().padStart(2,'0')
   
   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
