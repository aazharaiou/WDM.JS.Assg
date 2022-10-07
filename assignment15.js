let guests=["Shahid Anjum", "Muhammad Tufail", "Raheel Akhtar", "Hanaan Sadeed"]
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})
const replacement = "Sikandar Sultan"
console.log(`\n\n====================================================================================`)
console.log(`Oh no, ${guests[2] } is unable to join us, let's invide ${replacement} instead`)
console.log(`====================================================================================\n\n`)
guests[2] = replacement
guests.forEach((value)=>{
    console.log(`Hi ${value}! I would like to invite you to dinner today`)
})