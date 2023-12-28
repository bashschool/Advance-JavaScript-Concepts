// dosomething();

const names = ["abhishek", "aditya"]

console.log("fetching database -------")
try {
    if (names.length === 3) {
        console.log("hey")
    } else {
        throw Error("Hey send me three names not less than 3 or greater than 3")
    }
} catch (error) {
    console.error(error);
} finally {
    console.log("stopped fetching database -------")
}


console.log(names)


const names1 = new Array("abhishek", "aditya")

console.log(names1)


const obj = {}

console.log(obj)
























let abhishek = {
    name: 'Abhishek',
    age: 1000,
    karma: 34,
    isactive: false,
    greet: function () {
        console.log('Hello, I am ' + this.name);
    },
    updateKarma: function (newKarma) {
        this.karma = newKarma;
    }
}

console.log(abhishek)

let aditya = {
    name: 'Aditya',
    age: 1000,
    karma: 34,
    isactive: false,
    greet: function () {
        console.log('Hello, I am ' + this.name);
    },
    updateKarma: function (newKarma) {
        this.karma = newKarma;
    }
}

