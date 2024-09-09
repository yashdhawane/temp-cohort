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
        document.getElementById('login').style.display = 'none';
        document.getElementById('todoApp').style.display = 'block';
        // loadTodos();
        console.log(data.token)
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


async function todo(){
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
            'Authorization': token
          }
        
    });
    const data = await response.json();
    document.getElementById('result').textContent = JSON.stringify(data);


}