/*
First program in comments assignment
Author: Azhar ul Islam
Date: 02-10-2022
Program was wirtten to show how to remove whitespace characters using string manipulation function(s)
*/
const famousPerson = "\t\tSteve Jobs\n\t" //First block constant storing the name of the Famous Person
const famousQuote = "We're here to put a dent in the universe. Otherwise why else even be here?" //Second block constant storing the Famous Quote of the Famous Person
console.log("White space characters not stripped:")
console.log(`${famousPerson} once said \"${famousQuote}\"`)
console.log("\n\nWhite space characters stripped:")
console.log(`${famousPerson.trim()} once said \"${famousQuote}\"`) //trim function is used to remove any white space characters like spaces, tabs or newline characters