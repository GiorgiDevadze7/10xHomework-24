// Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// Calculate both their BMIs using the formula
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;// Print a nice output to the console, saying who has the higher BMI
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
}// Calculate the average score for each team
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;

// Compare the team's average scores to determine the winner of the competition
if (dolphinsScore > koalasScore) {
  console.log(`Dolphins win with an average score of ${dolphinsScore.toFixed(2)}!`);
} else if (dolphinsScore < koalasScore) {
  console.log(`Koalas win with an average score of ${koalasScore.toFixed(2)}!`);
} else {
  console.log(`It's a tie! Both teams have an average score of ${dolphinsScore.toFixed(2)}.`);
}

// Bonus 1: Include a requirement for a minimum score of 100
if (dolphinsScore >= 100 && koalasScore >= 100) {
  if (dolphinsScore > koalasScore) {
    console.log(`Dolphins win with an average score of ${dolphinsScore.toFixed(2)}!`);
  } else if (dolphinsScore < koalasScore) {
    console.log(`Koalas win with an average score of ${koalasScore.toFixed(2)}!`);
  } else {
    console.log(`It's a tie! Both teams have an average score of ${dolphinsScore.toFixed(2)}.`);
  }
} else {
  console.log(`No team wins the trophy!`);
}// Calculate the tip, depending on the bill value
let billValue = 275;
let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// Print a string to the console containing the bill value, the tip, and the final value
console.log(`The bill was ${billValue}, the tip was ${tip.toFixed(2)}, and the total value ${billValue + tip.toFixed(2)}`);function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Error: Division by zero is not allowed';
      }
      return a / b;
    case '%':
      return a % b;
    case '**':
      return a ** b;
    default:
      return 'Invalid operator';
  }
}

console.log(calculate(10, 2, '+')); // Output: 12
console.log(calculate(10, 2, '-')); // Output: 8
console.log(calculate(10, 2, '*')); // Output: 20
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(10, 2, '%')); // Output: 0
console.log(calculate(10, 2, '**')); // Output: 100
console.log(calculate(10, 2, '^')); // Output: Invalid operator