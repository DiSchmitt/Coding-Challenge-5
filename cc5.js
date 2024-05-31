// U4888-2664 - Dawson Schmitt
//Creating parent class: 'Employee'.
class Employee{
    constructor (name,salary){
        this.name = name;
        this.salary = salary;
    }
    //I am assuming that the salary property of the employee class is actually the monthly salary as it is not outright stated
    //This is the method to return the annual salary and log the name and monthly salary.
    annualSalaryCalc(){
        const AnnualSalary = this.salary * 12
        console.log(`${this.name} makes an annual salary of $${AnnualSalary}`);
       return AnnualSalary
    }
}
//creating subclass 'Manager' from the 'Employee' class that includes a 'department' property
class Manager extends Employee {
    constructor (name, salary, department){
        super(name,salary);
        this.department = department;
    }
//Overriding the old annualSalaryCalc for employees with a new one that includes a 15% bonus and logs it
    annualSalaryCalc(){
        const baseSalary = this.salary * 12;
        const bonuspercentage = .15
        const bonus = bonuspercentage * baseSalary;
        console.log(`${this.name} is making an annual salary of $${baseSalary}`);
        console.log(`The bonus this year is ${bonuspercentage} of the annual salary, which turns out to $${bonus}.`)
        console.log(`The combined annual salary and bonus of ${this.name} is $${bonus+baseSalary}`)
        return bonus + baseSalary
    }
}
//Testing the above code with both a sample Employee and Manager objects.
let bob = new Employee ('Bob Schnider',12000)
bob.annualSalaryCalc()
bob.annualSalaryCalc()
let mark = new Manager ('Luke Skywalker',14000,'Acquisitions')
mark.annualSalaryCalc()
mark.annualSalaryCalc()
//Everything is looking good