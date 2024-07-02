const n: number = parseInt(readline()); // the number of temperatures to analyse
var inputs: string[] = readline().split(' ');

function closestToZero(n, inputs) {
    if (n === 0) {
        return 0;
    }

    let temperatures = inputs.map(Number);
    let closest = temperatures[0];

    temperatures.forEach(temp => {
        if (Math.abs(temp) < Math.abs(closest) || 
            (Math.abs(temp) === Math.abs(closest) && temp > closest)) {
            closest = temp;
        }
    });

    return closest;
}

const result = closestToZero(n,inputs)
    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');
  
console.log(result);
  
