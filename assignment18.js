function display(msg){
    const width = 120
    console.log("\n")
    console.log("=".repeat(width))
    console.log(" ".repeat((width - msg.length)/2) + msg)
    console.log("=".repeat(width))
}

let destinations=["Nairobi","Tokyo","Denmark","Venezuela","London","Ankara"]
display("Cities in original order:")
destinations.forEach((value)=>{console.log(value)})
//sorting the array into a new copy of array
let sortedDestinations = destinations.slice(0).sort()

display("Cities in alphabetical order:")
sortedDestinations.forEach((value)=>{console.log(value)})


display("Original cities list is still in original order:")
destinations.forEach((value)=>{console.log(value)})

//reversing the original list
destinations.reverse()

display("Original cities list in reverse order:")
destinations.forEach((value)=>{console.log(value)})

//again reversing the original list
destinations.reverse()

display("Original cities list in original order:")
destinations.forEach((value)=>{console.log(value)})


//sorting the original array
destinations.sort()

display("Original cities sorted in alphabetical order:")
destinations.forEach((value)=>{console.log(value)})

//reversing the sorted original array
destinations.reverse()

display("Original cities sorted in alphabetical order:")
destinations.forEach((value)=>{console.log(value)})