const findTheOldest = function(arr) {
    for (const element of arr) {
        if (Number.isInteger(element.yearOfDeath)) {
            element.age = element.yearOfDeath - element.yearOfBirth;
        } else {
            element.age = new Date().getFullYear() - element.yearOfBirth;
        }
    }

    arr.sort((a, b) => b.age - a.age);
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
