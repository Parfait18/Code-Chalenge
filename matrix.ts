class Matrix {
    private data: number[][];

    constructor(data: number[][]) {
        this.data = data;
    }

    // Method to add two matrices
    static add(A: Matrix, B: Matrix): Matrix {
        if (A.data.length !== B.data.length || A.data[0].length !== B.data[0].length) {
            throw new Error('Matrices dimensions do not match for addition.');
        }
        const result = A.data.map((row, i) => row.map((val, j) => val + B.data[i][j]));
        return new Matrix(result);
    }

    // Method to multiply two matrices
    static multiply(A: Matrix, B: Matrix): Matrix {
        if (A.data[0].length !== B.data.length) {
            throw new Error('Matrices dimensions do not match for multiplication.');
        }
        const result = A.data.map(row => 
            B.data[0].map((_, j) => 
                row.reduce((sum, elm, i) => sum + (elm * B.data[i][j]), 0)
            )
        );
        return new Matrix(result);
    }

    // Method to transpose a matrix
    static transpose(A: Matrix): Matrix {
        const result = A.data[0].map((_, i) => A.data.map(row => row[i]));
        return new Matrix(result);
    }

    // Method to display the matrix
    display() {
        this.data.forEach(row => console.log(row.join(' ')));
    }
}
