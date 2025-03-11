function capitalize_Words(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
   }
   
   let input = prompt("Nhập vào 1 chuỗi:");
   console.log(capitalize_Words(input));