const express = require("express");
const { UserModel, TodoModel } = require("./db/db");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


app.use(express.json());

const { auth, JWT_SECRET } = require("./auth/auth");

// mongoose.connect("mongodb+srv://yashdhawane17:yash17112001@cluster0.xvk3j.mongodb.net/")

mongoose.connect("mongodb+srv://yashdhawane17:yash17112001@cluster0.xvk3j.mongodb.net/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    // const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(req.body.password, 8);

try{
    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    });
} catch (error) {
    // Catch errors like user already existing or other issues
    res.status(400).json({ message: "User already exists!" });
}
   
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
try{
    const user = await UserModel.findOne({
        email: email
    
    });
    if (!user) {
        return res.status(404).send({ auth: false, message: 'User not found.' });
      }

      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }
    
    if (passwordIsValid) {
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)

        res.json({
            token,
            message: "You are signed in!",
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
}
    
    }catch (error) {
        // Catch any other potential errors
        res.status(500).json({ message: "An error occurred during signin." });
    }
});


// app.post("/todo", auth, async function (req, res) {
//     // Get the userId from the request object
//     const userId = req.token;
    

//     // Get the title, and done from the request body
    
//     const title = req.body.title;
//     const done = req.body.done;
//     console.log(userId);
//     console.log(title);
//     console.log(done);

//     // Create a new todo using the TodoModel.create() method
//     try {
//         // Create a new todo
//         await TodoModel.create({ userId, title, done });

//         // Send a success response
//         res.status(201).json({ message: "Todo created!" });
//     } catch (error) {
//         // Handle potential errors in todo creation
//         res.status(500).json({ message: "Error creating todo" });
//     }
// });


app.post("/todo", auth, async function (req, res) {
    // Get the userId from the request object, properly set in the auth middleware
    const userId = req.userId;

    // Get the title, and done from the request body
    const { title, done } = req.body;

    console.log("User ID:", userId);
    console.log("Title:", title);
    console.log("Done:", done);

    // Create a new todo using the TodoModel.create() method
    try {
        // Create a new todo
        await TodoModel.create({ userId, title, done });

        // Send a success response
        res.status(201).json({ message: "Todo created!" });
    } catch (error) {
        // Handle potential errors in todo creation
        res.status(500).json({ message: "Error creating todo" });
    }
});


app.get("/todo", auth, async function (req, res) {
    // Get the userId from the request object
    const userId = req.userId;

    // Find all the todos with the given userId
     try {
        // Find all the todos for the authenticated user
        const todos = await TodoModel.find({ userId: userId });

        // If todos are found
        if (todos) {
            // Send the todos to the client
            res.status(200).json(todos);
        } else {
            // If no todos are found, send an error message
            res.json({ message: "No todos found" });
        }
    } catch (error) {
        // Handle potential errors in fetching todos
        res.status(500).json({ message: "Error fetching todos" });
    }
});

app.listen(3000);