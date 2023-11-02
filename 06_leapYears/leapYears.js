const leapYears = function(year) {
    if (typeof year === 'string') {return 'ERROR'}
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false
    }
    else if (year % 4 === 0) {
        return true
    }
    else {return false}
};



// so, leap year has to be divisible by 4
// if its divisible by 100 its not a leap year HOwever this doesnt apply if it is also divisible by 400


// Do not edit below this line
module.exports = leapYears;
