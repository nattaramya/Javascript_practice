/* 1***passenger incrementation 
let msg=document.getElementById("hello")
msg.innerText="Welcome To the Website"
let countl=document.getElementById("value")
let count=0
function increment(){
    count = count + 1
   countl.textContent=count
    console.log(count)
}
let save1=document.getElementById("svalue")
function save(){
    save1.textContent=count
    countl.textContent=0
    count=0

}
*/

/* 2***small calculator
let num1=8
let num2=3
document.getElementById("n1").textContent=num1
document.getElementById("n2").textContent=num2
let display=document.getElementById("sumd")
function sum(){
    let value=0
    value=num1+num2
    display.textContent="Sum:"+value
    console.log(value)
}
function sub(){
    let value=0
    value=num1-num2
    display.textContent="Sub:"+value
    console.log(value)
}
function mul(){
    let value=0
    value=num1*num2
    display.textContent="Mul"+value
    console.log(value)
}
*/

/*3***input saving
let inputdata=[]
let msg=document.getElementById("input")
let save=document.getElementById("saveid")
let ulist=document.getElementById("ulid")
save.addEventListener("click",function(){
        inputdata.push(msg.value)
        // console.log(inputdata)
        render()
})
function render(){
    listitems=""
for(let i=0;i<inputdata.length;i++){
    listitems += "<li><a href='#'>" + inputdata[i]  + "</a></li>"
}
ulist.innerHTML=listitems
}
*/

/*4***Event Listener
let value1=document.getElementById("card1")
function changecolor(){
    value1.style.backgroundColor="blue"
}

value1.addEventListener("mouseover",changecolor)*/



/* var a=document.getElementById("input1").value
 let b=document.getElementById("input2").value

 var Sum1=(a,b)=> a+b;
 function Sum1(){
     let sum1=a+b;
     console.log(a)
      return sum1
 }
 console.log(Sum1(a,b))*/


/*template strings
 let age=20;
 let value=800
 let price=500
 console.log(`Hello my age is ${age} and my payment ${price}`)
 document.getElementById('demo').textContent=`Hello my age is ${age} and my payment ${price}`*/


/*  ***How to accept user input
let username
function myfunction(){
    username=document.getElementById("name").value
console.log(username)
}*/

/*Type conversions
let age=window.prompt("What is your age")
age=Number(age)
age=String(age)
console.log(typeof age)
let x=90
let y=100
let z=56
if(x>y){
    console.log("x is greater")
}
else{
    console.log("y is greater")
}
// console.log(Math.max(x,y,z))*/


/****Radio buttons and check box
let check=document.getElementById("box")
let rad1=document.getElementById("rad")
let but1=document.getElementById("result")
but1.onclick=function(){
if(check.checked){
    document.getElementById("demo").textContent="You are entered"
}
else{
    document.getElementById("demo").textContent="Please enter"
}

if(rad1.checked){
    document.getElementById("val").textContent="Payment done"
}
else{
    document.getElementById("val").textContent="Payment not done"
}
}*/


/****Ternary Operator
let age=18
let message= age < 18 ? "You are not eligible" : "You are eligible"
console.log(message)

let value=100
let result= value <= 100 ? 90 : 0
let math1=result+100
console.log(math1)*/


/* ****Switch Case
let age=-9
let msg 
switch(true){
    case age>=18:
        msg = "You are eligible"
        break 
    case age<18 && age>0:
         msg = "You are not eligible"
        break 
    default:
        msg="Invalid input"
}
console.log(msg)*/


/*Logical operator
let age=0
if(age>=18 && age<100){
    console.log("You are in the range")
}
else if(age===0 || age<0){
    console.log("You are not")
}*/

/* Temperature Conversion
let val=document.getElementById("ip")
let cel=document.getElementById("c")
let fr=document.getElementById("f")
let btn=document.getElementById("enter")
let temp
btn.onclick=function(){
    if(cel.checked){
        temp=((val.value)-32)*(5/9)
        document.getElementById("result").textContent=temp+"°C"
    }
    else if(fr.checked){
        temp=((val.value) * 9/5) + 32
        document.getElementById("result").textContent=temp+"°F"
    }
}*/



/*****Spread Operator 
let val=[1,6,4,3,9]
let jal=[3,8,0,4,2]
let max1=Math.min(...val)
let mix=[...val,...jal,9,0]
console.log(mix)
console.log(max1)*/



/*rest parameters
function sum(...values){
    console.log(...values)
    let result=0
    for(let i of values){
        result+=i
    }
    console.log(result)
}
sum(1,2,3,4)*/


/****forEach
let num=[2,3,4,5]
num.forEach(double)
num.forEach(display)

function double(val,arr,i){
    arr[i]=val*2
}
function display(val){
    console.log(val)
}*/


/**** .map() => applies function to each element
let num=[1,2,3,4]
let s=["hello","man","car"]
let double=num.map(square)
let up=s.map(upper)
console.log(double)
console.log(up)
function square(val){
    return Math.pow(val,2)
}
function upper(val){
    return val.toUpperCase()
}*/


/* *** .filter() => filter out the elements according to the function or condition
let num=[2,6,5,3,4,8]
let e=num.map(even)//Giving true or false
let ef=num.filter(even)//Giving even numbers
console.log(e)
function even(val){
    return val%2==0
}*/



/****Arrow Funtion =concise way of writing functions
const hello= (name,age) => console.log(`hello your name is ${name} and age is ${age}`)
hello('Ram',30)
let num=[1,2,3,4]
const sqaures=num.map(val) =>  Math.pow(val,2)
*/


/**** Objects and This
const emp={
    fname: "Ram",
    lname: "niren",
    age: 56,
    salary: 56000,
    sayname:function(){
        console.log("hey i am ram")
    },
    eat:function(){console.log(`my name is ${this.fname}`)},

}
console.log(emp.fname)
console.log(emp.lname)
console.log(emp.age)
emp.sayname()
emp.eat()*/

/**** Constructor = special method for defining the properties
function person(age,name){
    this.age=age,
    this.name=name
}

const p1=new person(23,"gake")
const p2=new person(34,"hale")
console.log(p1.age)
console.log(p1.name)
console.log(p2.age)*/


/*****Class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`hey my name is ${this.name} and age is ${this.age}`)
    }
}
const p1= new Person("Ram",45)
console.log(p1)
p1.display()*/


/****static
class Person{
    static count=0;
    constructor(name){
        this.name=name;
        Person.count+=1
    }
}
const p1=new Person("nani")
console.log(p1.name)
console.log(Person.count)*/


/****Inheritance
class Person{
    details(){
        console.log(`my name is ${this.name}`)
    }
}
class p1 extends Person{
    name='Gan'
}
class p2 extends Person{
    name='yan'
}
const per1=new p1()
const per2=new p2()
per1.details()
per2.details()*/


/****Setter and getter
class Person{
    constructor(age){
        this.age=age;
    }
    set age(newage){
        if(newage>0){
            this._age=newage;
        }
        else{
            console.log("Invalid age")
        }
    }
}

const p1=new Person(-9)*/

/** setTimeout
const timer=setTimeout(function(){window.alert("hello")},2000)
clearTimeout(timer)
*/



let value="Ramya"
let msg=document.getElementById("hw")
msg.textContent=value
msg.style.color='red';



