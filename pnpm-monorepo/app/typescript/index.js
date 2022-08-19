function greet(person) {
    if ('age' in person) {
        console.log("age: ".concat(person.age));
    }
    if ('hobbit' in person) {
        console.log("hobbit ".concat(person.hobbit));
    }
}
//   greet("Maddison", new Date());
