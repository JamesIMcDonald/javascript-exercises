const removeFromArray = function(array, ...removals) {
    Elementselect:
    for (let i = removals.length-1; i >= 0; i--) {
        let searchtarget = removals[i]
        let foundIndex;
        while ((foundIndex = array.indexOf(searchtarget)) !== -1) {
            array.splice(foundIndex,1)
        }
    }
    return array;
};


// so for each entry in removals (loop one) we have to remove all of its entries from the array (loop two)


// so, we get given an array and something we need to remove
// the rest function should be able to do this
// 
// it needs to see the array and the removals array
// for each entry in removals array it needs to remove all copies in the actual array
// this is nested loops - should be a few functions 
// the main function should be a loop which tells the removal function to remove
// so main goes through the removals array and calls the removals function which gets rid of all cases of an object in the array through some sort of counting and locating loop
// Do not edit below this line
module.exports = removeFromArray;
