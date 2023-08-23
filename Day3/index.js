const fs = require("fs")

const fileContents = fs.readFileSync('./input.txt').toString("utf8").split("\n")

function findCommonUppercaseCharacter(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if (str2.includes(char) || str2.includes(char.toLowerCase())) {
            return char;
        }
    }
    return null; // No common uppercase character found
}

const string1 = "Hello";
const string2 = "hrld";

const commonUppercaseChar = findCommonUppercaseCharacter(string1, string2);

if (commonUppercaseChar !== null) {
    console.log(`A common uppercase character is: ${commonUppercaseChar}`);
} else {
    console.log("No common uppercase character found.");
}

