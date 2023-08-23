const fs = require("fs")

const fileContents = fs.readFileSync('./input.txt').toString("utf8").split("\n")

let totalScore = 0
// A Rock B Paper C Scissors
// for (let i = 0; i < fileContents.length; i++) {
//     if (fileContents[i][2] === 'X') { //Rock
//         totalScore += 1
//         if (fileContents[i][0] === 'A') totalScore += 3
//         else if (fileContents[i][0] === 'C') totalScore += 6
//     }
//     else if (fileContents[i][2] === 'Y') { // Paper
//         totalScore += 2
//         if (fileContents[i][0] === 'B') totalScore += 3
//         else if (fileContents[i][0] === 'A') totalScore += 6
//     }
//     else { //Scissors
//         totalScore += 3
//         if (fileContents[i][0] === 'C') totalScore += 3
//         else if (fileContents[i][0] === 'B') totalScore += 6
//     }
// }
// A Rock (1) B Paper (2) C Scissors (3)
//X Lose Y Draw Z Win
for (let i = 0; i < fileContents.length; i++) {
    if (fileContents[i][0] === 'A') {
        if (fileContents[i][2] === 'X') totalScore += 3
        else if (fileContents[i][2] === 'Y') totalScore += 4
        else totalScore += 8
    }
    else if (fileContents[i][0] === 'B') {
        if (fileContents[i][2] === 'X') totalScore += 1
        else if (fileContents[i][2] === 'Y') totalScore += 5
        else totalScore += 9
    }
    else {
        if (fileContents[i][2] === 'X') totalScore += 2
        else if (fileContents[i][2] === 'Y') totalScore += 6
        else totalScore += 7
    }
}

console.log(totalScore)