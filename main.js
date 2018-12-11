import * as RxJS from "rxjs";

//callback Function to Define a value

function callbackSum(v1,v2,callback) {
    let sum = v1+v2;
    let value = callback(sum);
    return value;
}

function main() {
    // Testing callback function
    let value = callbackSum(1,2,(sum) => { return sum * 2 });
    console.log(value);
}


main();