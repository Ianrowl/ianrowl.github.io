//Problem 1
// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false

const employees = [
  {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raise: true,
  },
  {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raise: true,
  },
  {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raise: false,
  },
];
console.log('Problem 1', employees);


//Problem 2
//Create JSON for the company with the following details (companyName, website, employees)
// Tech Stars, www.techstars.site, array of Employees

const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: employees,
};
console.log('Problem 2', company);


//Problem 3
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
// Anna, Tech, Executive, 25600, false

function addEmployee(firstName, department, designation, salary, raise){
  const newEmployee = {firstName, department, designation, salary, raise};
  employees.push(newEmployee);
}
addEmployee('Anna','Tech','Executive',25600, false);
console.log('Problem 3',employees);


//Problem 4
//Given the JSON for the company, calculate the total salary for all company employees.

let totalSalary = 0;

for(const id in employees){
  totalSalary += employees[id].salary;
}
console.log('Problem 4', totalSalary);


//Problem 5
//It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees,
//write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.

for(const id in employees){
  if(employees[id].raise){
    employees[id].salary *= 1.1;
    employees[id].raise = false;
  }
}
console.log('Problem 5', employees);


//Problem 6
//Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the
//company JSON. For each employee, add another property called 'wfh' and set it to true of false
// Working from home: ['Anna', 'Sam']

const workFromHome = ['Anna', 'Sam'];

for(const id in employees){
  employees[id].wfh = workFromHome.includes(employees[id].firstName);
}
console.log('Problem 6', employees);
