function sum(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Dữ liệu nhập không hợp lệ");  
}
const total = a + b;
console.log(`Tong hai so ${a} va ${b} = ${total}`);
}

sum(5,6)