// Prompt the user to enter in a list of comma-separated flavors
// Then I will need to split their order into separate strings
// Then I will add them to a single array
// Then use if elseif to make it where if the value is = to the flavor, add 1 to the counter


let order = prompt("Enter in your order of flavors separated by commas");
const flavorOrder = order.split(",");
console.log(flavorOrder);
const flavorCounter = {};

flavorOrder.forEach(flavor => {
    if (flavorCounter[flavor]){
        flavorCounter[flavor]++;
    } else {
        flavorCounter[flavor] = 1;
    }
});
console.log(flavorCounter);
