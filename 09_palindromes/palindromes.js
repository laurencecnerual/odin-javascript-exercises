const palindromes = function (str) {
    let letters = str.toLowerCase().split("").filter(getArrayOfLetters).join("");
    let reversedLetters = str.toLowerCase().split("").filter(getArrayOfLetters).reverse().join("")
    return letters === reversedLetters;
};

function getArrayOfLetters(letter) {
    return (/[a-z0-9]/).test(letter)
}

// Do not edit below this line
module.exports = palindromes;