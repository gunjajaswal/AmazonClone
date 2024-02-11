// const student={
//     fullname:"Rohit",
//     age: 24,
//     isPass:true,
//     cgpa:8.3,

// };
// // console.log(student)
// // console.log(student.age);
// // console.log(student["cgpa"])
// student["name"]="Rohit Sharma";
// console.log(student["name"]);
// const product = {
//     title:"Ball pen",
//     rating:4,
//     offer:5,
//     price: 270,

// }
// console.log(product)
// let a=5;
// let b=2;
// console.log("a =",a,  " & b =",b)
// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a**b=",a**b)
// console.log("a%b=",a%b)
// console.log("--a =",--a);
// console.log("a=",a);
// console.log("++a =",++a);
// console.log("a=",a);
// console.log("a-- =",a--);
// console.log("a=",a);
// console.log("a++ =",a++);
// console.log("a=",a);
// print 1 to 5
// for(let count =1;count<=5; count++){
//     console.log("apna college");
// }
// Calculate sum of 1 t0 5
// let sum =0;
// n=100;

// for(let i=1;i<=n;i++)
// {
//     sum=sum+i;
// }
// console.log("sum=", sum);
// console.log("loop ended");
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }
// let i=20;
// while(i<=10){
//     console.log("i=",i);
//     i++;
// }
// let i=20;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=10);
//for-of loop
// 


                                                                                                                                                                                                                                        //Airthemtic operator


// let str = "Apna college";
// let size =0;
// for(let i of str){
//     console.log("i=",i)
//     size++;
// }
// console.log("String Size=",size);
// let student ={
//     name:"Rahul Kumar",
//     age: 20,
//     cgpa:7.5,
//     isPass:true
// };
// for(let key in student){
// console.log("Key=",key,"Value=",student[key]);
// }
// Practice Question
// practice Test-1
// for(let i=0;i<=100;i++){
//     if(i%2===0)
//     {
//         console.log("i=",i);
//     }
// }
// Practice Test-2
// let gameNum = 25
//  let userNum=prompt("Guess the game Number");
//  while(userNum != gameNum){
//     userNum=prompt("you guess the wrong number. Guess try again");

//  }
//  console.log("congratualtion, you entered the right");
//String
// let str="Apna college";
// let str2 ="Shardha";
//Template Literals
// let obj={
//     item:"pen",
//     price: 10
// };
// let output= `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output)

// let specialString = `This is template Literals ${1+2+3}`;
// console.log( specialString);
// string practice test
let fullName = prompt("enter your full name without Space");
let username = "@" +fullName +fullName.length;
console.log(username);