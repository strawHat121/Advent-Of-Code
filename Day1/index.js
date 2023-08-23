const fs = require('fs');

const fileContents = fs.readFileSync('./input.txt').toString("utf8").split("\n")

let maxCalories = -1
let secondMax = -1
let thirdMax = -1
let s = 0
for (let i = 0; i < fileContents.length; i++) {
    // console.log(s)
    if (fileContents[i] === "") {
        //console.log(i)
        if (s > maxCalories) {
            thirdMax = secondMax
            secondMax = maxCalories
            maxCalories = s
        }
        else if (s > secondMax) {
            thirdMax = secondMax
            secondMax = s
        }
        else if (s > thirdMax) {
            thirdMax = s
        }
        s = 0
        continue
    }
    s += parseInt(fileContents[i])
}
if (s > maxCalories) {
    thirdMax = secondMax
    secondMax = maxCalories
    maxCalories = s
}
else if (s > secondMax) {
    thirdMax = secondMax
    secondMax = s
}
else if (s > thirdMax) {
    thirdMax = s
}

console.log(maxCalories, secondMax, thirdMax)
console.log(maxCalories + secondMax + thirdMax)