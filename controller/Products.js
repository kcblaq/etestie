const fs = require("fs");
const path = require("paath");

const filepath = path.join(__dirname, "../data/posts.json");

const CreateUser = (req, res) => {
    const {email, name, username, password} = req.body;
const Users = JSON.parse(fs.readFileSync(filepath, "utf-8"))

    const newUser = {
        id: Date.now(),
        name,
        username,
        email,
        password,
        createdAt: Date.now()

    }
    Users.push(newUser)

    fs.writeFileSync(fs.writeFileSync(filepath, JSON.stringify(Users)))
    res.json({
        message: "Registered successfully",

    }).status(201)
}

module.exports = {
    CreateUser
}