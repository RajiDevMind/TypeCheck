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
function useGeneric(firstNum) {
    return firstNum;
}
function useGenericSum(firstNum) {
    return firstNum;
}
var num1 = useGeneric(5);
var num2 = useGenericSum(5);
var str1 = useGeneric("Hello, ");
var str2 = useGenericSum("my people");
var finalNum = num1 + num2;
var finalStr = str1 + str2;
console.log(finalNum);
console.log(finalStr);
