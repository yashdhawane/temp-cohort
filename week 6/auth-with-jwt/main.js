const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const users = []; 
const SECRET_KEY = 'yash-secret-key'; 

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }
  
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

app.get('/',(req,res)=>{
  res.send("done!")
})

// User registration
app.post('/register', async (req, res) => {
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

// User login
app.post('/login', async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (!user) {
    return res.status(404).send({ auth: false, message: 'User not found.' });
  }
  
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ auth: false, token: null });
  }
  
  const token = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: 86400 // expires in 24 hours
  });
  
    
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).send({ message: 'Access granted to protected route' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});