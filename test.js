//1. Class
class A{
    constructor(casualname, address, newaddress){
        this.name = "Vipin"
        this.surName = "Patel"
        this.newName = casualname
        this.address = address
        this.newaddress = newaddress
    }

    printFullName(){
        console.log(`my full name is ${this.name} ${this.surName}`)
        console.log(this.newName)    
    }
    printAddress(){
        console.log(`i am from ${this.address}`)
        console.log(`i live in ${this.newaddress}`)
    }
}


class B extends A{
    //1. properties


    //2. constructor
    constructor(age){
        super();
        this.age = age
    }
    //3. method
    completeInformation(){
        console.log(`I am from ${this.age}`)
    }
}
const objB = new B(26);
objB.completeInformation()
