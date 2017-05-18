/*
JS Hands-On: Day Two
Now that you have more of an understanding of JavaScript Booleans, Operators, and Loops, we will be using these in this project to solidify these concepts through hands-on, practical use. Hands-On projects are completed outside of the browser, using your IDE, or editor of choice.

Description:
In this project, we will be building what is called Bing Bong. This application will loop through a list of 0 - 100. For each number, if it is divisible by 3, you will print 'Bing' to the console. If it is divisible by 5, you will print 'Bong' to the console. If the number is divisible by 3 and 5, you will print both 'Bing' and 'Bong'.

Requirements
You will need to create a loop that iterate through 0 - 100.
Inside the loop, you will have some functionality to compare the numbers and determine if they are divisible by the specified number or not.
You will need to then change the number that are divisible with the word provided in the description.
Example 1 2 Bing 4 Bong Bing 7

Bonus Display the information in the window instead of the console..
Grading
Meets all Requirements: 50% of your grade will be based on meeting the requirements.
Timely Submission: 25% of your grade will be based on having a complete solution on time.
Style: 25% of your grade will be based on having legible, and well-designed code.
Be sure to save your solution, and be prepared to share it with your Instructor or Mentor during your next class, or check-in.

Tip! Your Instructor or Mentor may test your program with additional inputs, so be sure to test it thoroughly with different scenarios.
*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Bing!");
  } else if (i % 5 === 0) {
    console.log("Bong!");
  } else if (i % 15 === 0) {
    console.log("BingBong");
  } else {
    console.log(i);
  }
};
