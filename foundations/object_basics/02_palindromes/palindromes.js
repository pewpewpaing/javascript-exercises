const palindromes = function (string) {
    const allowed = "abcdefghijklmnopqrstuvwxyz0123456789";
    const sanitisedString = string
        .toLowerCase()
        .split("")
        .filter(c => allowed.includes(c))
        .join("");
    
    const reversedString = sanitisedString.split("").reverse().join("");
    
    return reversedString === sanitisedString;
};

// Do not edit below this line
module.exports = palindromes;
