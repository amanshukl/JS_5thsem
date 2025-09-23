const date = new Date();
console.log("Current Date:", date);

console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Day:", date.getDate());

console.log("\nUser defined date:");

const user = new Date("2023-10-15");
console.log("User Date:", user);

console.log("Year:", user.getFullYear());
console.log("Month:", user.getMonth() + 1);
console.log("Day:", user.getDate());