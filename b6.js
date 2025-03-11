function isPalindromeString(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "Chuỗi không hợp lệ";
    }
    
    let length = str.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return "Không phải chuỗi đối xứng";
        }
    }
    
    return "Là chuỗi đối xứng";
}

let input = prompt("Mời bạn nhập vào chuỗi");
console.log(isPalindromeString(input));