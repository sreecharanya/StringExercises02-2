let num = 1001;
num=String(num);
let dec=123.45
dec=String(dec);
dec=dec.replace('.','')
console.log(dec)
console.log("length of decimal:",dec.length)
/*let str="Do spaces count?"
console.log(str.length)
let java="JavaScript";
console.log(java[8]);
let str1="Strings are sequences of characters.";
console.log(str1[5])
let str3="Wonderful";
console.log(str3.length)*/
//Returns 'undefined'.
console.log(num.length);
const input =require('readline-sync');
let num2=input.question("Enter the number to find the length:")
num2=String(num2)
if(num2.includes('.')){
  let point=num2.replace('.','');
  console.log("Num2 length",point.length)
}else{
  console.log("Num2 length",num2.length)
}
//Use type conversion to print the length (number of digits) of an integer.




//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).




//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.