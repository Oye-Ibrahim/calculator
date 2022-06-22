const FIRST_NUMBER = parseInt(prompt("Enter First Number: "));
const SECOND_NUMBER = parseInt(prompt("Enter Second Number: "));
const OPERATOR = prompt("Choose Operator: + - * / ");

switch (OPERATOR) {
  case "+":
    prompt(FIRST_NUMBER + SECOND_NUMBER);
    break;

  case "-":
    prompt(FIRST_NUMBER - SECOND_NUMBER);
    break;

  case "*":
    prompt(FIRST_NUMBER * SECOND_NUMBER);
    break;

  case "/":
    prompt(FIRST_NUMBER / SECOND_NUMBER);
    break;

  default:
    alert("Reload page and enter a valid number");
}
