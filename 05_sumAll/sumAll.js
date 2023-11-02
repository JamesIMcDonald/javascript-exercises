const sumAll = function(num1, num2) {
    let finalNum = 0
    function isNumber(input) {
        if (typeof input === 'number') {
            return true
        }
        else {return false}
    }
    if (isNumber(num1) === false || isNumber(num2) === false || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
        else {
        for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
        finalNum += i
    }
    return finalNum;
    }
};



// so this function takes num1 and num2, collects all of the numbers in between them and then adds them all together
// considering making a loop that counts down and then adds that to a separate variable which is the answer



// Do not edit below this line
module.exports = sumAll;
