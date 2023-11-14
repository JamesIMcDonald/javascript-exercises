const findTheOldest = function(arrayName) {
let oldest = -Infinity
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
// this doesn't work and I can't see why so I have gone through the solution to understand why it works
// Do not edit below this line
module.exports = findTheOldest;
