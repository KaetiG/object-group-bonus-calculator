const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let percent = 0;

for (employee of employees) {
  console.log(employee);
}//step 1: loop through employees 

function employeeBonus(employee) {
  let emp = {
    name: employee.name,
    bonusPercentage: percentCalc(employee),
    //totalCompensation: (employee.annualSalary * finalBonus(employee)) + Number(employee.annualSalary)
  }
  return emp;
}

function percentCalc(employee) {
  if (employee.reviewRating < 2) {
    return percent;
  } else if (employee.reviewRating === 3) {
    return finalBonus(percent + 0.04, employee.employeeNumber);
  } else if (employee.reviewRating === 4) { 
    return finalBonus(percent + 0.06, employee.employeeNumber);
    //for the rest of the else if's (), repeat the code above to fire off finalBonus (%, #)
  } else if (employee.reviewRating === 5) {
    return finalBonus(percent + 0.10, employee.employeeNumber);
  }
}
function finalBonus(bonusPercent, empNum) {
console.log(bonusPercent, empNum)
if(empNum.length === 4){
  return percent+ .05;
} else {
  return percent;
}
// if (employee.employeeNumber.length === 4) {
//   percent = percent + 0.05;
//   if (employee.annualSalary > 65000){
//     percent = 0.01;
//   }
// } if (percent > 0.13) {
//   percent = 0.13;
// } return percent;
}


  console.log(employeeBonus(employees[0]));
  console.log(employeeBonus(employees[1]));
  console.log(employeeBonus(employees[2]));
  console.log(employeeBonus(employees[3]));
  console.log(employeeBonus(employees[4]));

  // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);
