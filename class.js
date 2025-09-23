// Object literal
const student1 = {
    name: "abc",
    age: 20
};

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}


const student2 = new Student("xyz", 22);

// Calling the greet method
student2.greet();