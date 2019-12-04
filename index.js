// implement your API here
const express = require("express");
let db = require("./data/db");

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Test API" })
})

app.get("/api/users", (req, res) => {
    db.find()
        .then(users => {
        res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The users information could not be retrieved." })
        })
})

app.get("/api/users/:id", (req, res) => {
    db.findById(req.params.id)
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The user information could not be retrieved." })
        })
})


app.post("/api/users", (req, res) => {
    if(!req.body.name || !req.body.bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
    } else if (req.body.name && req.body.bio) {

        const newUser = {
            name: req.body.name,
            bio: req.body.bio
        }

        db.insert(newUser)
        res.status(201).json(newUser)
        } else {
            res.status(404).json({ errorMessage: "There was an error while saving the user to the database" })
    }
})

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    
    db.remove(id)
        .then(user => {
            if(user) {
                res.status(204).end();
            } else {
                res.status(500).json({ errorMessage: "Failed to delete, user not found!" })
            }
        })
})

const port = 8080
const host = "127.0.0.1" 
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})
