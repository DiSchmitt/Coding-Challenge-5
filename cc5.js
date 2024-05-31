// U4888-2664 - Dawson Schmitt
//Creating parent class: 'employee'.
class employee{
    constructor (name,salary){
        this.name = name
        this.salary = salary
        console.log(`Employee Name: ${name}`)
        console.log(`Monthly Salary: ${salary}`)
    }
    //I am assuming that the salary property of the employee class is actually the monthly salary as it is not outright stated
    //This is the method to return the annual salary and log the name and monthly salary.
    annualSalaryCalc(){
        console.log(this.name)
        console.log(this.salary * 12)
       return this.salary * 12
    }
}
//Testing the above code with a sample employee object.
let bob = new employee ('Bob Schnider',12000)
bob.annualSalaryCalc()