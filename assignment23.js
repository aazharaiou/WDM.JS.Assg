const guests=["Shahid Anjum", "Muhammad Tufail", "Raheel Akhtar", "Hanaan Sadeed", "Nasrullah"]
console.log("1:")
console.log("is guests[2]=='Raheel Akhtar'? I predict true")
console.log(guests[2] == "Raheel Akhtar")
console.log("\n2:")
console.log("Is guests[0]=='Hanaan Sadeed'? I predict false")
console.log(guests[0]=='Hanaan Sadeed')
console.log("\n3:")
console.log("Index of 'Raheel Akhtar' == 2? I predict true")
console.log(guests.indexOf("Raheel Akhtar")==2)
console.log("\n4:")
console.log("guests[0].toLowerCase() == 'shahid anjum'? I predict true")
console.log(guests[0].toLowerCase() == 'shahid anjum')
console.log("\n5:")
console.log("guests[0].toUpperCase() == 'Shahid Anjum'? I predict false")
console.log(guests[0].toUpperCase() == 'Shahid Anjum')
console.log("\n6:")
console.log("2/2==1? I predict true")
console.log(2/2==1)
console.log(typeof(2.3))
console.log("\n7:")
console.log(`guests.includes("Hanaan Sadeed")? I predict true`)
console.log(guests.includes("Hanaan Sadeed"))
console.log("\n8:")
console.log(`guests.includes("hanaan sadeed")? I predict false`)
console.log(guests.includes("hanaan sadeed"))
console.log("\n9:")
console.log(`guests.findIndex((value)=>value.split(' ').length == 1)? I predict 4 because "Nasrullah" is the only name with only one part`)
console.log(guests.findIndex((value)=>value.split(' ').length == 1))
console.log("\n10:")
console.log("guests.length? I predict 5")
console.log(guests.length)