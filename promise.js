console.log("hello from promise.js")

// Promise is a way to handle asynchronous operations in JavaScript

// returns every user in my db
function getuser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // db fecth 
            // crons job
            let users = [
                'John',
                'Jane',
                'Tom'
            ]
            // console.log(users)
            resolve(users)
        }, 3000)
    }).then((value) => {
        console.log(value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // db fecth 
                // crons job
                let users = [
                    '1',
                    '2',
                    '3'
                ]
                console.log(users)
                reject("user id not found")
            }, 3000)
        })
        // fetch your foloer data
    }).catch((error) => {
        console.error("eoooooooooo", error)
    })
}


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // db fecth
        // crons job
        let users = [
            'John',
            'Jane',
            'Tom'
        ]
        // console.log(users)
        reject("error fetching backend")
    }, 3000)
});

console.log(promise)
console.log(promise)


getuser()


const gettodos = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => resolve(json))



})


const profilekacomment = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => resolve(json))

})



const profilekalike = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => resolve(json)).catch((error) => console.log(error))

})


Promise.all([
    gettodos,
    profilekacomment,
    profilekalike
]).then(data => console.log(data))


