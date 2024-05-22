// var sum = 0;

// add(5,5);

// function add(a, b) {
//     var sum = a + b;

//     console.log(sum);
// }

// console.log(sum);

//conditional statement
//if ,else, else if

//switch case

//conditional statements are used to execute different actions based on different conditions
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// if(true){
//     console.log("execute");
// }

// if(false){
//     console.log("execute"); //false vaye skip hunxa
// }


// //let age=20;
// if(age>18)
//     {
//         console.log("you are an adult");
//     }

//  //let age=16;
// if(age>18)
//     {
//         console.log("you are an adult");
//     }


// let country="Nepal";
// //let age=20;

// if(age>=18 && country=="Nepal")//duetai condition true vayepar execute
//     {
//         console.log("You are nepali citizen")
//     }


// //if/else

// //let age=16;
// if(age>18)
//     {
//         console.log("you are an adult");
//     }
//     else{
//         console.log("you are minor")
//     }


// //elseif
// //let age=19;

// if(age>=18)
//     {
//         console.log("You are an adult")
//     }
// else if(age>=16)
//      {
//         console.log("You are a teenagers")
//      }
//  else{
//         console.log("you are minor")
//      }
            

// //let age=15;

// if(age>=18)
//     {
//         console.log("You are an adult")
//     }
// else if(age>=16)
//      {
//         console.log("You are a teenagers")
//      }
//  else{
//         console.log("you are minor")
//      }
        


//  //switch statement

//  //let value=42;
//  //let value="hello";
//  //let value=true;
//  //let value=[];

 
//  switch (typeof value) {
//     case "number":
//         console.log("number");  
//          break;
//     case "string":
//         console.log("String");
//           break;
//     case "boolean":
//         console.log("boolean");
//          break;
//     default:
//         console.log("others");
//          break;
//  }


// let dayName=2;
// switch (dayName) {
//     case 1:
//         dayName="Sunday";
//         break;
//     case 2:
//         dayName="Monday";
//         break;
//      case 3:
//         dayName="Tuesday";
//         break;
//     case 4:
//         dayName="Wednesday";
//         break;
//     case 5:
//         dayName="Thrusday";
//         break;
//     case 6:
//         dayName="Friday";
//         break;
//     case 7:
//         dayName="Saturday";
//         break;
//     default:
//         dayName="Invalid"
//         break;
// }
// console.log("The day is:" + dayName);


//array function
//const array=[1,2,3,4,5,6,7,8,9];
// array.forEach((array)=>{

//     console.log(array);
// });


// for(const arr of array)
//     {
//         console.log(arr);
//     }


    //js object
    //date,foreach



    //implementing conditional statement

    // const array1=new Array(1,2,3,4,5)
    // const array2=new Array(10);

    // console.log(array1);
    // console.log(array2);


    // let numArr = [1,2,3,4];
    // numArr.splice(1,1,5);
    // console.log(numArr);

//    //splice
//     const arr=new Array(1,2,3,4)
//     arr.splice(1,2,7,8,9);
//     console.log(arr);

//     //concat
//     const array1=[1,2,3];
//     const array2=[4,5,6];
//     let newarray=array1.concat(array2);
//     console.log(newarray)

//     //diff between indexof and lastindex of

//     //indexof
//     const a=[1,2,3,4,5,6];
//     B=a.indexOf(3);
//     console.log(B);

//     //lastindexof
//     const aa=[1,2,3,4,3,6];
//     const BB=aa.lastIndexOf(3);
//     console.log(BB);

//     //sort
//     const ar1=[7,6,4,9,2]
//     ar2=ar1.sort();
//     console.log(ar2);

//      //slice
//     const arr5=[2,6,8,7,8];
//     arr6=arr5.slice(0,3);
//     console.log(arr6);

//     //push/pop/reverse
//    const fruits=["apple","banana","mango","papaya"]
//     //    fruits.push("lemon");
//     //    fruits.pop("papaya");
//    //fruits.reverse();
//    console.log(fruits);


//     //reverse //push ..pop//
//     //shift unshift sort
//     //join filter copywithin reduce tostring value of  isarray
//     //length //map //foreach


//     //string herne

//shift
// Removing elements from the 
// beginning of an array
    let strArr = ["amit", "sumit", "anil"];
    strArr.shift();
    console.log(strArr);


//unshift
// Adding element at the beginning
// of an array
    let strAr = ["amit", "sumit"]
    strAr.unshift("sunil", "anil");
    console.log(strAr);

//find

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);




//some
function isGreaterThan5(element, index, array) {
    return element > 5;
}

let array = [2, 5, 8, 1, 4];

let value = array.some(isGreaterThan5);

console.log(value);




//map

// Original array
let arrr = [4, 9, 16, 25];

// Performing map method
let subb = arrr.map(hello);

function hello() {
    return arrr.map(Math.sqrt);
}

console.log(subb);




//foreach
const arr1=[1,2,3,4,5,6,7,8,9];
array.forEach((arr1)=>{

    console.log(arr1);
});





//join
let course = ["BCS-CSIT","BCA","BIT"];
console.log(course.join('|'));




//filter


const ages = [32, 33, 16, 40];
const r = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(r);


//copywithin
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);



//reduce
let arr = [88, 50, 25, 10];

// Perform reduce method
let sub = arr.reduce(subtract);

function subtract(total, num) {
    return total - num;
}

console.log(sub);




//tostring

// Original Array
let courses = ["BCS-CSIT","BCA","BIT"];

// Converting array ot String
let str = courses.toString();

console.log(str);


//valueof

let text = new String("Hello World!");
let result = text.valueOf();
console.log(result);




// isarray

const fruitss = ["Banana", "Orange", "Apple", "Mango"]
    
console.log(Array.isArray(fruitss));


// console.log(Array.isArray([1, 3, 5]));



