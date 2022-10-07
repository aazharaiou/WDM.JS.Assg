const famousPerson = "\t\tSteve Jobs\n\t"
const famousQuote = "We're here to put a dent in the universe. Otherwise why else even be here?"
console.log("White space characters not stripped:")
console.log(`${famousPerson} once said \"${famousQuote}\"`)
console.log("\n\nWhite space characters stripped:")
console.log(`${famousPerson.trim()} once said \"${famousQuote}\"`)