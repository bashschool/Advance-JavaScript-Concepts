class User {

    constructor(name, role) {
        this.name = name;
        this.role = role; // student or teacher
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    login() {
        console.log(`logged in , ${this.name}!`);
    }
}


class Student extends User {

    constructor(name, role, studentid, marks) {
        super(name, role);
        this.studentid = studentid;
        this.marks = marks;
    }

    updatemarks(newmarks) {
        this.marks = newmarks;
    }
}

class Teacher extends User {
    constructor(name, role, empid, salary) {
        super(name, role);
        this.empid = empid;
        this.salary = salary;
    }

    updatesalary(newsalary) {
        this.salary = newsalary;
    }
}



const abhishek = new Student("Abhishek Kushwaha", "student", 1, 100);
const rajdip = new Teacher("rajdip Kushwaha", "faculty", 1, 90000);



rajdip.login()
abhishek.login()

abhishek.updatemarks(800)
console.log(abhishek)


rajdip.updatesalary(10000000)
console.log(rajdip)




console.log('Start');

setTimeout(() => {
    console.log('Timer ended');
}, 2000);

console.log('End');


// start
// end
// Timer ended

let count = 0;

const intervalId = setInterval(() => {
    console.log('Hello', count);
    if (++count === 5) {
        clearInterval(intervalId);
        console.log('Interval cleared');
    }
}, 1000);



// hello 0
// hello 1
// hello 2
// hello 3
// hello 4
// Interval cleared


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
}

console.log("Start");

fetchData().then(res => {
    console.log(res);
    return new Promise(resolve =>
        setInterval(() => {
            resolve("Interval done")
            console.log("hi am still running in bg")
        }, 3000)
    );
}).then(msgFromInterval => {
    console.log(msgFromInterval);
});

setTimeout(() => {
    fetchData().then(console.log);
}, 2000);

console.log("End");


// start
// End
// Data fetched
// Data fetched

// Interval done