// let my_variable = ['a', 'b', 1, 2]

// console.log(my_variable[2])

// let my_variable = {first_name: 'Adam', last_name: 'Smith', age: 30}

// console.log('The winner is ' + my_variable.first_name + '. He is ' + my_variable.age + ' years old.')

// let my_variable = {"first_name": "Adam", "last_name": "Smith"}
// console.log(my_variable.first_name)

// let my_variable = [
//     {"first_name": "Adam", "last_name": "Smith"},
//     {"first_name": "John", "last_name": "Doe"}
// ]

// console.log(my_variable[1].first_name)

let my_variable = {
    "people":[
        {"first_name":"Adam", "last_name":"Smith"},
        {"first_name": "John", "last_name": "Doe"}
    ],
    "another": "another", 
    "yet another": ["and so on"],
    "yet another": {"and so on": "and so on"}
}
console.log(my_variable.people[1].first_name)
console.log(typeof my_variable, my_variable)