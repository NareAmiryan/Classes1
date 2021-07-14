/* 4. Create an Account class. Account should have: id, name, balance.It should have setters for name and balance,
 and getters for all fields.It should have a method: credit(amount), which should add amount to balance and 
 return the updated balance.It should have a method: debit(amount), which should subtract the amount from the balance, 
 if amount is less than the balance, otherwise output “Amount exceeded balance.”
 It should have a method: transferTo(anotherAccount, amount): which should subtract theamount from the account balance 
 and add it to the given anotherAccount and return the updated balance,
 if amount is less than the balance, otherwise output “Amount exceeded balance.”
 It should have a static method: identifyAccounts(accountFirst, accountSecond) 
which gets two accounts and identifies if they are the same or not, comparing all fields.It should have toString method. */ 
class Account{
    constructor(id,name,balance){
        this._id=id;
        this.name=name;
        this.balance=balance;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get balance(){
        return this._balance;
    }
    set name(name){
        this._name=name;
    }
    set balance(balance){
        this._balance=balance;
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if(amount < this.balance) {
            this.balance -= amount;
        }else {
            return 'Amount exceeded balance.';
        }
    }

    transferTo(anotherAccount, amount) {                          //   transferTo(anotherAccount, amount) {
        if(amount < this.balance) {                                //  if(this.debit(amount) != 'Amount exceeded balance.'){
            this.balance -= amount;                                 // anotherAccount.credit(amount); }
            anotherAccount.balance += amount;                       //  }
            return this.balance;                                                  
        }else {                                         
            return 'Amount exceeded balance.';
        }
    }  
    static identifyAccounts(accountFirst, accountSecond) {
        let isIdentity = (accountFirst.id === accountSecond.id) &&          
                         (accountFirst.name === accountSecond.name) &&      
                         (accountFirst.balance === accountSecond.balance);  
        
        if(isIdentity) {
            return true;
        }

        return false;
    }
    toString(){
        return "Account id is " + this.id  + " , name is " + this.name + " , balance is " + this.balance ;
    }
}

const account2 = new Account(324, 'Hayk', 500000);
const account1 = new Account(132, 'Ani', 500000);
account1.balance = 1500000;
console.log(account1.balance);
account1.credit(1000000);
console.log(account1.balance);
console.log(account1.debit(3000000));
console.log(account1.balance);

account1.transferTo(account2, 100000);
console.log(account1.balance, account2.balance); 

/* 5.Write classes: Person, Student, Staff. Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.It should have a method: toString().Student is inherited from Person. 
It should have program(array of strings), year, fee.It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. 
passExam will update that data, so if student passed all the exams(grade is great or equal to 50), 
its year should be increased by one.It should have a toString method.
Teacher is inherited from Person.
It should have program(string), pay.
It should have appropriate getters and setters. It should have a toString method. */
class Person {
    constructor(firstName,lastName,gender,age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._gender=gender;
        this._age=age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName=value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName=value;
    }
    get gender(){
        return this._gender;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age=value;
    }
    toString(){
        return "Person's fullname is " + '${this.firstName} ${this.lastName}' + ", age is " + this.age;
    }
}

class Student extends Person {
    constructor(firstName,lastName,gender,age,program,year,fee){
        super(firstName,lastName,gender,age);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }
    get programm() {            
        return this._programm;  
    }                           
                                
    set programm(value) {       
        this._programm = value; 
    }                           

    get year() {            
        return this._year;  
    }                       
                            
    set year(value) {       
        this._year = value; 
    }                       

    get fee() {            
        return this._fee;  
    }                      
                           
    set fee(value) {       
        this._fee = value; 
    } 
    passExam(program,grade){
        let isPassed = this._programm.every(prog => prog.grade >= 50);
        if(isPassed){
          this._year += 1;
        }
    }
    toString() {
        return this;
    }
}

class Teacher extends Person{
    constructor(firstName,lastName,gender,age,program,pay){
        super(firstName,lastName,gender,age);
        this._program = program;
        this._pay = pay;
    }
    get programm() {            
        return this._programm;  
    }                           
                                
    set programm(value) {       
        this._programm = value; 
    } 
    get pay() {            
        return this._pay;  
    }                           
                                
    set pay(value) {       
        this._pay = value; 
    } 
    toString() {
        return this;
    }
}