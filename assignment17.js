function display(msg){
    const width = 120
    console.log("\n")
    console.log("=".repeat(width))
    console.log(" ".repeat((width - msg.length)/2) + msg)
    console.log("=".repeat(width))
}

let guests=["Shahid Anjum", "Muhammad Tufail", "Raheel Akhtar", "Hanaan Sadeed"]
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})
const replacement = "Sikandar Sultan"
display(`Oh no, ${guests[2] } is unable to join us, let's invide ${replacement} instead`)
guests[2] = replacement
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})

display(`Wow I found a bigger dinner table, let's have more fun by inviging more people`)
//adding one guest at the beginning of the array using unshift
guests.unshift("Mahboob ur Rehman") 
//adding one guest to the middle by using splice
guests.splice(3,0,"Kashif Jamil")
//adding one guest at the end of the array using guests.length
guests[guests.length] = "Hafiz Safdar Sultan"
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})

display(`Oh crap! I can invite only two people, the bigger table did not arrive :(`)

while(guests.length > 2)
{
    let removedGuest = guests.shift()
    console.log(`I'm sorry ${removedGuest}, I cannot invite you this time, let's meet some other day`)   
}

display(`Inviting the remaining two guests that I have`)
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})
display("Removing remaining two guests from the list")
guests.shift()
guests.shift()
console.log(guests)