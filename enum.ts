// 3. Type Checking with Enums
// Enums provide a way to define a set of named constants, which can
// make your code more readable and prevent invalid values.

enum Status {
  Pending,
  InProgress,
  Completed,
  Cancelled,
}

function getStatusLabel(status: Status): string {
  if (status === Status.Pending) {
    return "Pending";
  } else if (status === Status.InProgress) {
    return "In Progress";
  } else if (status === Status.Completed) {
    return "Completed";
  } else if (status === Status.Cancelled) {
    return "Cancelled";
  } else {
    return "Unknown";
  }
  // switch (status) {
  //   case Status.Pending:
  //     return "Pending";
  //   case Status.InProgress:
  //     return "In Progress";
  //   case Status.Completed:
  //     return "Completed";
  //   case Status.Cancelled:
  //     return "Cancelled";
  //   default:
  //     return "Unknown";
  // }
}

console.log(getStatusLabel(Status.InProgress)); // Output: In Progress
console.log(getStatusLabel(Status.Completed)); // Output: Completed
console.log(getStatusLabel(Status.Pending)); // Output: Completed
console.log(getStatusLabel(Status.Cancelled)); // Output: Completed
