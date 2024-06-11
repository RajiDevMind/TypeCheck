// 1. Defining Interfaces for Data Structures

// TypeScript allows you to define interfaces for
// objects, making your code more predictable
// and self-documenting. This is particularly useful when
// working withcomplex data structures.

// Declare an object kindPerson from the Person interface,
// where all the properties are optional:

interface Person {
  age: number;
  firstName: string;
  lastName: string;
}

let kindPerson: Partial<Person> = {};

const person: Person = {
  age: 78,
  firstName: "Ishola",
  lastName: "Beru",
};
console.log(person.firstName);
//
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
};

function printUser(user: User): void {
  console.log(`Username: ${user.name}, UserEmail:${user.email}`);
}

printUser(user);
