// 2. Using Generics to Write Reusable Code

// Generics in TypeScript allow you to write flexible and
// reusable code components, such as functions or
// classes that work with any data type.

// function identity<Tag>(arg: Tag): Tag {
//   return arg;
// }

// const num = identity<number>(42);
// const str = identity<string>("Hello, TypeScript for typechecking!");

// console.log(num); // Output: 42
// console.log(str); // Output: Hello, TypeScript!

function useGeneric<sum>(firstNum: sum): sum {
  return firstNum;
}
function useGenericSum<sum>(firstNum: sum): sum {
  return firstNum;
}

const num1 = useGeneric<number>(5);
const num2 = useGenericSum<number>(5);

const str1 = useGeneric<string>("Hello, ");
const str2 = useGenericSum<string>("my people");

const finalNum = num1 + num2; // Output: 10
const finalStr = str1 + str2; // Output: Hello, my people

console.log(finalNum);
console.log(finalStr);
