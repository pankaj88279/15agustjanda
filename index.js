const { isNumberObject } = require("util/types");


class A{
//property
//constructor
//method

//function defination
myFunctionA1(){
    console.log("thise is class a")
}

}
//function calling
let objA=new A()
objA.myFunctionA1();

class B extends A{
//1.property
//2.constructor
//3.method
// function defenation
myfunB2(){
    console.log('thise is class B')
}
}
let objB=new B()
objB.myfunB2();
objB.myFunctionA1();

class C extends B{
    //1 property


    //2 constructor


    //3 method
    //function defination 
    pankaj(){
       console.log("hello pankaj form c class");
    }
}
let pankajclassobj = new C();
pankajclassobj.pankaj();
//object.property

//object.method
pankajclassobj.myFunctionA1()
 

class D extends C{

    myfunc3(){
        console.log('thise class name is D')

    }
}
let objD=new D();
objD.myfunc3()
pankajclassobj.pankaj()