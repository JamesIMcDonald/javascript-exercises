const reverseString = function reverse(string) {
    let stringlength = string.length
    let reversestring = ''
    function extract(charnum) {
        let character = string.substr(charnum,1)
        return character
    }
    for (let i = stringlength-1; i >= 0 ; i--) {
        reversestring += extract(i)
    }
    return reversestring
};

// how this could work 
// get the length of the string -1 so that its correct for substring
// then iteratively going backwards and substringing that number from it into a new string
// then returning that string at the end


// Do not edit below this line
module.exports = reverseString;
