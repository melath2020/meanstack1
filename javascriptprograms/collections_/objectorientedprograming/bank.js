//account create
//deposit
//withdrewal
//balance enq

class Bank{
    static bankName=()=>{
        console.log("sbk name")
    }
    accountCreate=(acno,name,minimum_balance)=>{
        this.acno=acno;
        this.name=name;
        this.minimum_balance=minimum_balance;
    
    }
    deposit=(amount)=>{
        this.minimum_balance+=amount;
        console.log("your account"+this.acno+"has been credited with amount"+amount+"aval bal"+this.minimum_balance)
    }

    withdrew=(amount)=>{
        if(this.minimum_balance>=amount){
            this.minimum_balance -=amount;
            console.log("your account"+this.acno+"has been debited with amount"+amount+"aval bal"+this.minimum_balance)
        }
        else{
            console.log("insufficient balance")
        }
}
    balanceEnq=()=>{
        console.log("aval balance"+this.minimum_balance)
        
    }
}

var obj=new Bank()
obj.accountCreate(100,"aswin",5000)
obj.deposit(5000)
obj.withdrew(20000)
bank.bankName()