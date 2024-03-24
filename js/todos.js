function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data));
}

function displayTodos(todos){
    const todosContainer = document.getElementById('todos-container')
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>user: ${todo.userId}
        <p>completed: ${todo.completed === true ? 'completed': 'not completed'}
        `;
        todosContainer.appendChild(todoDiv);
    }
}
loadTodos();
