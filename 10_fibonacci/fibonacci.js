const fibonacci = function(Value) {
let fiboArray = [0,1]
if (Value >= 0) {
for (let i = 0; i <= Number(Value); i++) {
    let arrayAddition = fiboArray[i] + fiboArray[i+1]
    fiboArray.push(arrayAddition)
}
return fiboArray[Number(Value)]
}
else {return "OOPS"}
}

// Do not edit below this line
module.exports = fibonacci;
