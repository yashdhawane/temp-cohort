const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  
]; 

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
    // const token = req.headers['authorization'];
    const token = req.headers.authorization;
    if (!token) return res.status(403).json('Token required');
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) return res.status(403).json('Invalid token');
        req.user = decoded;
        next();
    });
};


// User registration
app.post('/signup', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 8);
      const user = {
        id: users.length + 1,
        username: req.body.username,
        password: hashedPassword
      };
      users.push(user);
      res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Error registering user' });
    }
  });


// Login Route
// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });
        
        res.status(200).send({ auth: true, token: token });
    }else{
        // Return JSON for invalid credentials
    return res.status(400).send({ error: 'Invalid credentials' });
    }
  // Send token as a secure, HTTP-only cookie
  

  
    
});




// Protected Route
app.get('/todos', verifyToken, (req, res) => {
    const user = req.user;  
    res.json({ message: 'Authenticated', user});
});


console.log(users)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
