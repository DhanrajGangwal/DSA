// greatest
function findGreatest(a, b) {
  // Write your code here
  if (a > b) return a;
  else return b;
}

// odd even
function checkEvenOrOdd(num) {
  // Write your logic here
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

// age check
function checkVoterEligibility(name, age) {
  // Write your logic here
  if (age >= 18) return `${name} is a valid voter.`;
  else return `${name} is not a valid voter.`;
}

// leap year
function isLeapYear(year) {
  // Write your logic here
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    return "Leap Year";
  else return "Not a Leap Year";
}


//discount
function calculateFinalAmount(amount) {
    // Write your logic here
    if (amount <= 5000) return amount;

    else if (amount >= 5001 && amount <= 7000) return amount - (amount * 5 / 100);
        else if (amount >= 7001 && amount <= 9000) return amount - (amount * 10 / 100);
    else if (amount>9000) return amount - (amount * 20 / 100);
}

// bill
function calculateElectricityBill(unit) {
    // Write your logic here
   let bill = 0;

    if(unit > 400) {
        bill += (unit - 400) * 13;
        unit = 400;
    }

    if(unit > 200) {
        bill += (unit - 200) * 8;
        unit = 200;
    }

    if(unit > 100) {
        bill += (unit - 100) * 6;
        unit = 100;
    }

    bill += unit * 4.2;

    return bill.toFixed(1);
}