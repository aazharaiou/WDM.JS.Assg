const magicians = ['Houdini', 'David Copperfield', 'Doug Henning', 'Lance Burton']
function print_magicians(marray)
{
    marray.forEach((item)=>console.log(item))
}
function make_great(marray)
{
    return marray.map((item)=>`${item} the great`)
}
print_magicians(make_great(magicians))