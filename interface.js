// 1. Defining Interfaces for Data Structures
var kindPerson = {};
var person = {
    age: 78,
    firstName: "Ishola",
    lastName: "Beru",
};
console.log(person.firstName);
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
};
function printUser(user) {
    console.log("Username: ".concat(user.name, ", UserEmail:").concat(user.email));
}
printUser(user);
