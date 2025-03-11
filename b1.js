function findMinValue(arr) {
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }

    // Lọc chỉ giữ lại các phần tử là số
    const filteredArr = arr.filter(function (item) {
        return typeof item === "number" && !isNaN(item);
    });

    if (filteredArr.length === 0) {
        return "Mảng không chứa số hợp lệ";
    }

    const minValue = Math.min.apply(null, filteredArr);
    return `Phần tử nhỏ nhất trong mảng là ${minValue}`;
}

// Test
console.log(findMinValue([2, 3, 6, 7, 3]));   
console.log(findMinValue([]));                
console.log(findMinValue("abc"));             
console.log(findMinValue([2, "a", 4]));