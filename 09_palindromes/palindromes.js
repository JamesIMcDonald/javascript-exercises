const palindromes = function (string) {
    let workingString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let stringLength = workingString.length
    let valid = true


    for (let i = 0; i < stringLength / 2; i++) {
        if (workingString[i] !== workingString[stringLength - 1 - i]) {
            valid = false
            break
        }
    }
    return valid
};


// so this function needs to take an input clean it up so that it is just a string of characters and then determine if that is a palindrome
// for this we probably just want it to grab every letter
// for palindrome detection: we could do something like make sure that the length is even or half it and chop the extra letter off if not
// then just reverse the second order and make sure there is a strict equality.
// Do not edit below this line
module.exports = palindromes;
