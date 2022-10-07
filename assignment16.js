
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

function display(msg){
    const width = 120
    console.log("\n")
    console.log("=".repeat(width))
    console.log(" ".repeat((width - msg.length)/2) + msg)
    console.log("=".repeat(width))
}