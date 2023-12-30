
export default class TodoManger {

    static getTodos(columnid) {
        const data = readfromlocalstorage().find(
            column => {
                return column.id == columnid
            }
        )
        return data.todos

    }

    static insertTodo(columnid, content) {

        const data = readfromlocalstorage();

        const column = data.find(
            column => {
                return column.id == columnid
            }
        )

        const newTodo = {
            id: Math.floor(Math.random() * 1000000),
            content: content
        }

        column.todos.push(newTodo)

        savetolocalstorage(data)

        return newTodo;

    }

    static updateTodo(todoid, newcontent) {
        const data = readfromlocalstorage();

        function findcolumn() {
            for (const column of data) {
                const todo = column.todos.find(item => {
                    return item.id == todoid

                })

                console.log(todo)

                if (todo) {
                    return [todo, column]
                }
            }
        }

        const [todo, column] = findcolumn()


        const targetcolumn = data.find(column => {
            return column.id == newcontent.id

        })

        todo.content = newcontent.content;
        column.todos.splice(column.todos.indexOf(todo), 1);
        targetcolumn.todos.push(todo);

        savetolocalstorage(data)

    }


    static deleteTodo(todoid) {

        const data = readfromlocalstorage();
        for (const column of data) {
            const todo = column.todos.find(item => {
                return item.id == todoid

            })

            if (todo) {
                column.todos.splice(column.todos.indexOf(todo), 1);
            }
        }

        savetolocalstorage(data)
    }


    static getAllTodos() {

        const data = readfromlocalstorage();
        TodoCount();
        return [
            data[0].todos, data[1].todos, data[2].todos
        ]

    }
}


function readfromlocalstorage() {

    const data = localStorage.getItem("alltodos")

    if (!data) {
        return [

            {
                name: "Not Started",
                id: 0,
                todos: []
            },
            {
                name: "in_progress",
                id: 1,
                todos: []
            },
            {
                name: "completed",
                id: 2,
                todos: []
            }
        ]
    }

    return JSON.parse(data)

}

function savetolocalstorage(data) {
    localStorage.setItem("alltodos", JSON.stringify(data))
    TodoCount()
}



function TodoCount() {
    const data = readfromlocalstorage();

    const not_started = document.getElementById("not_started_count");
    const in_progress = document.getElementById("progress_count");
    const completed = document.getElementById("completed_count");

    not_started.innerText = data[0].todos.length;
    in_progress.innerText = data[1].todos.length;
    completed.innerText = data[2].todos.length;
}