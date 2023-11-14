const findTheOldest = function(arrayName) {
let oldest = -1
let oldestId = 0
let oldestName = ''
for (let i = 0; i <= arrayName.length-1; i++) {
    let age;
    // so this checks if the yearofdeath is falsy if it is it means the person is still alive
    if (!arrayName[i].yearOfDeath) {
        age = new Date().getFullYear() - arrayName[i].yearOfBirth
    }
    else {
        age = arrayName[i].yearOfDeath - arrayName[i].yearOfBirth
    }

    if (age > oldest) {
        oldest = age
        oldestId = i
        oldestName = arrayName[i].name
}
};
return {oldestName}
}

// Do not edit below this line
module.exports = findTheOldest;
