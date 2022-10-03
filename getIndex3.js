const prompt = require("prompt-sync")({sigint: true});


let userArray = JSON.parse(prompt("Enter an Array: "))

console.log(userArray)
if(getIndex3.length >= 3){
    console.log("The third item in the array is" + userArray)

}
else{
    console.log(`The last item in the array is ${userArray[userArray.length - 1]}`)
}



