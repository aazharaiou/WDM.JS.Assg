const magicians = ['Houdini', 'David Copperfield', 'Doug Henning', 'Lance Burton']
const great_magicians = make_great(magicians)

console.log('Magicians:')
print_magicians(magicians)
console.log('\nGreat Magicians')
print_magicians(great_magicians)

function print_magicians(marray)
{
    marray.forEach((item)=>console.log(item))
}
function make_great(marray)
{
    return marray.map((item)=>`${item} the great`)
}