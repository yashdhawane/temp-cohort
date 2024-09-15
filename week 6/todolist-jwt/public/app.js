// async function fetchTodos() {
//     const response = await fetch('http://localhost:3000/todos');
//     const todos = await response.json();
//     renderTodos(todos);
// }

// function renderTodos(todos) {
//     const todoList = document.getElementById('todo-list');
//     todoList.innerHTML = '';
//     todos.forEach(todo => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span class="${todo.completed ? 'completed' : ''}">${todo.task}</span>
//             <div>
//                 <button onclick="toggleTodo(${todo.id}, ${!todo.completed})">
//                     ${todo.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button onclick="deleteTodo(${todo.id})">Delete</button>
//             </div>
//         `;
//         todoList.appendChild(li);
//     });
// }


async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        // console.log("Token:", data.token);
        document.getElementById('login').style.display = 'none';
        document.getElementById('todoApp').style.display = 'block';
        // loadTodos();
        console.log(data.token);
        console.log("login");
    } else {
        alert('Login failed');
    }
}


async function signup() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    console.log(username,password)

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        document.getElementById('result').textContent = JSON.stringify(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error: ' + error;
    }

}


// async function todo(){
//     const token = localStorage.getItem('token');
//     const response = await fetch('http://localhost:3000/todos', {
//         method: 'GET',
//         headers: {
//             'Authorization': token
//           }
        
//     });
//     const data = await response.json();
//     document.getElementById('result').textContent = JSON.stringify(data);


// }

// async function addTodo(task) {
//     const response = await fetch(`http://localhost:3000/todos`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ task })
//     });
//     if (response.ok) {
//         fetchTodos();
//     }
// }


const API_URL = 'http://localhost:3000';

async function fetchTodos() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: { 'Authorization': token }
    });
    const data = await response.json();
    console.log(data);
    renderTodos(data);

}

        function renderTodos(todos) {
            console.log(todos)
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="${todo.completed ? 'completed' : ''}">${todo.task}</span>
                    <div>
                        <button onclick="toggleTodo(${todo.id}, ${!todo.completed})">
                            ${todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onclick="deleteTodo(${todo.id})">Delete</button>
                    </div>
                `;
                todoList.appendChild(li);
            });
        }

        async function addTodo(task) {
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await fetch(`${API_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token // Include the JWT token
                },
                body: JSON.stringify({ task })
            });
            if (response.ok) {
                fetchTodos();
            }
        }
        

        async function toggleTodo(id, completed) {
            const response = await fetch(`${API_URL}/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed })
            });
            if (response.ok) {
                fetchTodos();
            }
        }

        async function deleteTodo(id) {
            const response = await fetch(`${API_URL}/todos/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchTodos();
            }
        }

        document.getElementById('add-todo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('new-todo');
            addTodo(input.value);
            input.value = '';
        });