//Objects
const me = {
    name:'Oleg',
    lastname: 'Sinkov',
    age: 27
    // greeting() {console.log('Hello')}
}

//Iteration
//1
// const keys = Object.keys(me)
// console.log(keys)

//2
// const keys2 = Object.keys(me)
// keys2.forEach(element => {
//     console.log(me[element])
// });

//3
const logger = {
    keysAndValues (){ 
       Object.keys(this).forEach(element =>{console.log(element,":",this[element])})
    },
    code:'very bad'
}


logger.keysAndValues()