const palindromes = function (string) {
    const alphaNumerical = "qwertyuiopasdfghjklzxcvbnm1234567890";

    const newString = string
        .toLowerCase()
        .split("")
        .filter(char => alphaNumerical.includes(char))
        .join("");

    const reversedString = newString.split("").reverse().join("");

    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
