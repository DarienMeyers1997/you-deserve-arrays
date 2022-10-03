const prompt = require("prompt-sync")({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))

let firstItem = ["Winter", "fall","Spring", "Summer"]
console.log(firstItem[0])