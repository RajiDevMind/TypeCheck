// 3. Type Checking with Enums
// Enums provide a way to define a set of named constants, which can
// make your code more readable and prevent invalid values.
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Cancelled"] = 3] = "Cancelled";
})(Status || (Status = {}));
function getStatusLabel(status) {
    if (status === Status.Pending) {
        return "Pending";
    }
    else if (status === Status.InProgress) {
        return "In Progress";
    }
    else if (status === Status.Completed) {
        return "Completed";
    }
    else if (status === Status.Cancelled) {
        return "Cancelled";
    }
    else {
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
