function countPositiveIntegers(...values) {
    let count = 0; 
    for (let value of values) {
        if (Number.isInteger(value) && value > 0) {
            count++;
        }
    }
    return count;
}

console.log(countPositiveIntegers(1, 2, 5, -7, 6)); 
console.log(countPositiveIntegers(1.2, 5.4, 8));    
console.log(countPositiveIntegers(3.6, 4.8, 6.9));  

 