/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/

const generate = (numRows) => {
    if (numRows <= 0) {
        return [];
      }
    
      const result = [[1]];
    
      for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const currentRow = [1];
    
        for (let j = 1; j < i; j++) {
          currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
    
        currentRow.push(1);

        result.push(currentRow);
        
      }
    
      return result;
}

const numRows = 5

console.log(generate(numRows))