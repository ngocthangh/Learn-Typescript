import axios from 'axios'

const url = 'htts://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logToDo(id, title, completed);
})

const logToDo = (id, title, completed) => {
    console.log(`
    id: ${id},
    title: ${title}
    finished: ${completed}
`);
}