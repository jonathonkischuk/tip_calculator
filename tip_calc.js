var service_rating = {
  'poor': 0.15,
  'good': 0.2,
  'great': 0.25
};


var bill_total = parseFloat(prompt("What is your total bill, excluding tip. (Please enter number seperated by a decimal. Ex: 22.35 )"));

var diner_rating = prompt("How was your dining experience? Type 1 for poor, 2 for good, and 3 for great: ");


if (diner_rating == 1) {
  console.log(bill_total * service_rating['poor']);
}
else if (diner_rating == 2) {
  console.log(bill_total * service_rating['good']);
}
else if (diner_rating == 3) {
  console.log(bill_total * service_rating['great']);
}
else {
  console.log("You entered an incorrect value, please try again inputting 1, 2, or 3.");
}
