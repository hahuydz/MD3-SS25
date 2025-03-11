function printEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Giá trị không hợp lệ");
        return;
    }

    const evenNumbers = arr.filter(function (num) {
        return typeof num === "number" && num % 2 === 0;
    });

    if (evenNumbers.length === 0) {
        console.log("Mảng không chứa số chẵn");
    } else {
        console.log("Các số chẵn trong mảng:", evenNumbers);
    }
}

printEvenNumbers([11, 4, 65, 6]);  
printEvenNumbers([1, 3, 5, 17]);          
printEvenNumbers("abc");     