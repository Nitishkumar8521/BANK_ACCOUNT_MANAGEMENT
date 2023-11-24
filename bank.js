function BankAccount(accountNumber,name,type,balance)
{
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.active=true;

    this.deposit=function(amount)
    {
        this.balance+=amount;
    }
    this.withdraw=function(amount)
    {
        if(this.balance<amount)
        {
            console.log("Your amount is insufficient");
        }
        else
        {
            this.balance-=amount;
        }
    }
    this.checkBalance=function(){
        console.log(this.balance);
    }
    this.isActive=function()
    {
        if(this.active===true)
        {
            console.log("Active");
        }
        else
        {
            console.log("Inactive");
        }
    }
}
 
function getTotalBalance(accounts){
    let total=0;
    for(let i=0;i<accounts.length;i++){
        total+=accounts[i].balance;
    }
    console.log(total);
}

let per1=new BankAccount(12345,"Nitish","saving",100);
let per2=new BankAccount(23456,"Kumar","saving",200);
let per3=new BankAccount(34567,"Singh","saving",300);
let accounts=[per1,per2,per3];
per1.deposit(100);
per1.withdraw(300);
per1.checkBalance();
per2.checkBalance();
per3.checkBalance();
per1.isActive();
getTotalBalance(accounts);