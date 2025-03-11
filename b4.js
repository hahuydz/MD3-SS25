function isPrime(n) {
    //Kiểm tra xem n có phải là một số (number) hay không.
    if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
        return "Giá trị không hợp lệ, nhập một số nguyên dương.";
    }

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(6));    
console.log(isPrime(17));    
console.log(isPrime("abc"));