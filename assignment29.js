const favourite_fruits = ['Bananas', 'Kiwi', 'Grapes']
if(favourite_fruits.includes('Bananas'))
    console.log('You like bananas')
else
    console.log('You don\'t seem to like Bananas')

if(favourite_fruits.includes('Apple'))
    console.log('You like Apples')
else
    console.log('Why not Apples in your basket???')

let my_fruit = 'Kiwi'
if(favourite_fruits.includes(my_fruit))
    console.log(`You like ${my_fruit}`)
else
    console.log(`Why not ${my_fruit} in your basket???`)

my_fruit='Pineapple'
if(favourite_fruits.includes(my_fruit))
    console.log(`You like ${my_fruit}`)
else
    console.log(`Why not ${my_fruit} in your basket???`)

my_fruit='Grapes'
if(favourite_fruits.includes(my_fruit))
    console.log(`You like ${my_fruit}`)
else
    console.log(`Why not ${my_fruit} in your basket???`)