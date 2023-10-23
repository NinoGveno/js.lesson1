let number1 = 100;

if (number1 < 50) {
  console.log("ნაკლებია 50ზე");
} else if (number1 > 20) {
  console.log("მეტია 20ზე");
} else {
  console.log("შეცდომა");
}
let userName = "მარიამ";
let newName = userName == "მარიამ" ? true : "false";
console.log(newName);
let userName2 = "მარიამ";
switch (userName2) {
  case "მარიამ":
    console.log("true");
    break;
  default:
    console.log("false");
}
