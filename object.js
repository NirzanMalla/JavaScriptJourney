let person = ['Ram', 44, 'Pokhara'];
let person1 = {
    "name": 'Ram',
    "age": '44',
    "location": 'Pokhara',
    "class name": 'Sagarmatha'
}
console.log(person);
console.log(person1);
console.log(person1.location);//single word vako key mah yesari garna milxa
console.log(person1['age']); 
console.log(person1['class name']); //dherai ota words vako keys mah rakhey
//for in loop matra use hunxa object mah
for (let a in person1){
    console.log(a, person1[a]);
}
console.log(person1.hasOwnProperty('location')); //kunai pani key xah ki xaina vanera find garna use hunxa
console.log(person1.hasOwnProperty('locations'));
console.log('age' in person1); //alternative way ho key exist garxa ki gardaina find garna
// console.log(Object.keys(person1)); //keys haru lai list garney
// console.log(object.keys(person1).length);
// // console.log(object.values(person1));
// console.log(object.entries(person1));

/*let students = {
    person1,
    subjects: ['Mongo', 'Express', 'Node', 'React'],
    payments: [{
        date: 'jan 5',
        amount: 5000,
    },
    {
        date: 'feb 6',
        amount: 6000,
    }]
}

console.log(students); */

let students = {
    ...person1,
    subjects: ['Mongo', 'Express', 'Node', 'React'],
    payments: [{
        date: 'jan 5',
        amount: 5000,
    },
    {
        date: 'feb 6',
        amount: 6000,
    }]
}

console.log(students);

//destrusturing //object ko key bata variable generate garney kaam

// let {subjects, payments} = students;
// console.log(subjects)
// console.log(payments)

//remaining key chai arko variable mah aaunu paryo
//...lai merge garney bela chai spread operator, destruct garney bela cahi rest operator

let {subjects, payments, ...remaining} = students;
console.log(remaining);
