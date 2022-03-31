//{}
// let person={
//     name:'Meghana',
//     age:22,
//     contact:8876567543,
//     place:'Amravati'
// }
// console.log(person)
// console.log(person['contact'])  //can axcess

// this
let person={
    name:'Meghana',
    age:22,
    contact:8876567543,
    place:'Amravati',

    display:function(){  //method
        console.log('my age is'+this.age+'my name is'+this.name)
    }
}
person.display()

//object.key
// const demo=Object.keys()
// console.log(demo)

//object.values
const demo= Object.values(person)
console.log(demo)


//object.create  --- allow us to create object by takin reference of an existin obj

const flag=Object.create(person)
console.log(flag)