// U4888-2664 - Dawson Schmitt
//I will be editing the comments for ease of understanding
//Task 1:
//Creating parent class: 'Employee' with 'name' and 'salary' properties.
class Employee{
    constructor (name,salary){
        this.name = name;
        this.salary = salary;
    }
 //I am assuming that the salary property of the employee class is actually the monthly salary as it is not outright stated.
 //Creating method to calculate and return the annual salary while logging the name and monthly salary.
    annualSalaryCalc(){
        const AnnualSalary = this.salary * 12;
        console.log(`${this.name} makes an annual salary of $${AnnualSalary}`);
       return AnnualSalary
    }
}
//Task 2:
//creating subclass 'Manager' from the 'Employee' class that includes a 'department' property.
class Manager extends Employee {
    constructor (name, salary, department){
        super(name,salary);
        this.department = department;
    }
//Overriding of the old annualSalaryCalc for employees with a new one for managers which includes a 15% bonus and logs it.
    annualSalaryCalc(){
        const baseSalary = this.salary * 12;
        const bonuspercentage = .15;
        const bonus = bonuspercentage * baseSalary;
        console.log(`${this.name} is making an annual salary of $${baseSalary}`);
        console.log(`The bonus this year is ${bonuspercentage} of the annual salary, which turns out to be $${bonus}.`);
        console.log(`The combined annual salary and bonus of ${this.name} is $${bonus+baseSalary}`);
        return bonus + baseSalary
    }
}
//Task 3:
//Adding the test data provided instead of the sample Data I made.
let Bob = new Manager ('Bob Ross', 6600.00, 'Digital Marketing')
let Debbie = new Manager ('Debbie Little', 7205.00, 'Finance')
//Calculating the annual salary of the two test data objects.
Bob.annualSalaryCalc()
Debbie.annualSalaryCalc()