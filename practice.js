

//console.log("Problems")
console.log("Q no.1")
console.log("write a program to print poem in given formate")
console.log("\n-Output\n")
console.log("twinkle, twinkle, little star,")
console.log("\tHow I wonder what you are!")
console.log("\t\tUp above the world so high,")
console.log("\t\tLike a diamond in the sky.")
console.log("twinkle, twinkle, little star,")
console.log("\tHow I wonder what you are!")
console.log("Q no.2")
console.log("Current date and time")
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(dateTime)
console.log("Q no.3");
console.log("Area OF Circle");
radius = +prompt("Enter a radius of circle")
console.log(" the radius of circle is :", radius + " meter")
console.log("The formula of Area of cirle is: A=pi*r^2  here pi=3.14")
console.log("The area of circle is " + (3.14) * radius ** 2 + " meter square")

console.log("Q no.4");
console.log("5.Write a Javascript program which accepts the user's first and last name and print them in reverse order with a space between them.\n-Output:")
first_name=prompt("Enter a first name");
last_name=prompt("Enter a last name");
console.log(last_name+" "+first_name);
console.log("Q no.5");
console.log("Write a Javascript program which takes two inputs from user and print them addition.\n-Output");
first=+prompt("Enter a first number");
second=+prompt("Enter a second number");
add=first+second
sub=first-second
console.log("Addition of two numbers :",add);
console.log("Subtraction of two numbers :",sub);


console.log("Q no.5")
console.log(">>-------MARKSHEET------<<")
name=prompt("Enter your Name. ");
console.log("Your name is: ",name);
student_id=prompt("Enter Your Student Id");
console.log("Your Student Id is: ",student_id);
class_name= prompt("Enter Your class.")
console.log("Your Student class is : ",class_name)

var math_Marks=+prompt("Enter a math marks");
var urdu_Marks=+prompt("Enter a urdu marks");
var english_Marks=+prompt("Enter a english marks");
var science_Marks=+prompt("Enter a science marks");
var total_Marks=400;
var obtained_Marks=math_Marks+urdu_Marks+english_Marks+science_Marks;
var percentage=(obtained_Marks/total_Marks)*100;
console.log("Math: "+math_Marks)
console.log("Urdu: "+urdu_Marks)
console.log("English: "+english_Marks)
console.log("Science: "+science_Marks)
console.log("Tatoal Marks: "+total_Marks)
console.log("Percentage: "+percentage+"%")
alert("if you wants to check grade? write ok" )
var check=prompt("IF you want to check grade? yes/no")
if(check==="yes"){
if(percentage>=80 && percentage<100)
console.log(" grade : A+ , Remarks: Congratulations you have succeed, best of luck for next time")
else if(percentage>=70 && percentage<80)
console.log(" grade : A , Remarks: Congratulations you have succeed, best of luck for next time")
else if(percentage>=60 && percentage<70)
console.log(" grade : B , Remarks: Congratulations you have succeed but need to hard work, best of luck for next time")

else if(percentage>=50 && percentage<60)
console.log(" grade : C , Remarks: Congratulations you have succeed but need to hard work, best of luck for next time")
else if(percentage>=40 && percentage<50)
console.log(" grade : D , Remarks: Congratulations you have succeed but need to hard work, best of luck for next time")
else
console.log("Fail , remarks: Need To Hard Work, but don't worry you will clear next time!")

}
else
console.log("Thank You")

console.log("Q no.6");
console.log("Number checker Application weather a number is even or odd");
input=+prompt("Enter a number to check weather even or odd");
if (input%2==0){
    console.log("The Number is even");
}
else{
    console.log("The number is odd");
}

