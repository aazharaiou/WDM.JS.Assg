const trains=["Allama Iqbal Express", "Tezgam", "Abaseen Express","Badar Express", "Bolan Mail"]
const destinations = ["Sialkot", "Karachi", "Quetta", "Faisalabad", "Quetta"]
trains.forEach((value, index)=>{
    console.log(`I would like to travel to ${destinations[index]} by ${value}`)
})