let name = 'Faheem murad'
console.log(`Hi ${name}! Your name in upper case looks like, ${name.toUpperCase()}`)
console.log(`Hi ${name}! Your name in upper case looks like, ${name.toLowerCase()}`)
let nameParts = name.toLowerCase().split(" ")
for (i=0; i< nameParts.length; i++)
{
    nameParts[i] = nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1)
}
let nameCapitilized = nameParts.join(" ")
console.log(`Hi ${name}! Your name in upper case looks like, ${nameCapitilized}`)