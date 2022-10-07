const users =['Basheer', 'Waseem', 'Admin', 'Kareem', 'Wajid']

users.forEach((user)=>{
    if (user === 'Admin')
        console.log(`Hello ${user}, would you like to see a status report?`)
    else
        console.log(`Hello ${user}, thank you for logging in again.`)
})