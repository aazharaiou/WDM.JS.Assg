function build_car(make, model, {...args})
{
    console.log(`building car for manufacturer: ${make} model: ${model} and `)
    console.log(args)
}

build_car('Honda', '2020', {engine:'2000 cc', color:'black'})