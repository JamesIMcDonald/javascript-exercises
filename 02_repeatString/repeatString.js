
const repeatString = function(string,repeatnum) {
    let word = ''
    if (repeatnum < 0) {return 'ERROR'}
        for (let i = 0; i < repeatnum; i++) {
            word += string
        }
        return word
    }



// so i want it to take a string in this case hey and then add it to itself n number of times

// Do not edit below this line
module.exports = repeatString;
