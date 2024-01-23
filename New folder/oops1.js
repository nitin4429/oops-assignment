class bankAccount{
    constructor(name,deposits){
        this.name = name;
        this.deposits = deposits;
    }
     checkbalance(){
        console.log(`account balance of${this.name}:${this.deposits}`);
    }
    deposit(amount){
        if(amount>0){
           this.deposits +=amount;
            console.log(`deposit Rs ${amount} new Balance Rs:${this.deposits}`);
        }
        else{
            console.log(`invalid deposit amount please enter positive amount`);
        }
    }
    withdraw(withdraws){
       if(withdraws>0){
        if(withdraws<=this.deposits){
            this.deposits -=withdraws
            console.log(`withdraw amount Rs ${withdraws} new Balance Rs:${this.deposits}`)
        }
        else{
            console.log(`insufficient fund for withdrawal`)
        }
       }
       else{
        console.log(`invalid deposit amount please enter positive amount`);
       }
}}

let MyAccount = new bankAccount('Mithun',1000);
MyAccount.checkbalance();
MyAccount.deposit(500);
MyAccount.withdraw(200);