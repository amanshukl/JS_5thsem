// Regular function declaration
const fun = () => {
    console.log("hey");
};

// Arrow function with rest parameter
const sum = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((ese) => {
        sum += ese;
    });
    console.log("Sum:", sum);
};

// Call the functions
fun();
sum(2, 4, 6, 8, 12, 14);