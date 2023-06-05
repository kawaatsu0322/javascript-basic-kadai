
// if文にて
// 変数設定
let num = Math.floor(Math.random() * 101);

console.log('if文にて確認用です。 ' + num);

if(num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
else {
    console.log(num);
}


// switch文にて
console.log('switc文にて確認用です。 ' + num);

switch (true) {
    case num % 3 === 0 && num % 5 === 0:
        console.log('3と5の倍数です');
        break;
    
    case num % 5 === 0:
        console.log('5の倍数です');
        break;
    
    case num % 3 === 0:
        console.log('3の倍数です');
        break;
    
    default:
        console.log(num);
        break;
}
