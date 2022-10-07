const current_users =['Faheem', 'Malik', 'Khalid', 'Waseem']
const new_users = ['Majeed', 'Waseem', 'Arshad', 'Faheem']

new_users.forEach((user)=>
{
    if(current_users.includes(user))
        console.log(`${user} is already occupied, please select a new username`)
    else
        console.log(`${user} is available`)
})