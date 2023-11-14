const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    // so with a reduce they have oldest which is the value that gets carried in the loop and current person which is the current value
    // oldest age is set here with the getAge so its known but can change when someone older is found
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    // here it is setting the accumulator (oldest) to the oldest person by using a ternary operator which is a super basic if statement
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};
// so this gets their age as a single number and deals with when they arent dead yet
const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;
