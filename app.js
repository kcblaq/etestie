const express = require("express")
const app = express();
const PORT = process.env.PORT || 3001
const DBCon = require("./server");

DBCon();
app.use(express(express.json()));
app.get("/", (req, res)=> {
    res.send("Welcome to my page ")
})


app.listen(PORT, ()=> console.log(`App listening on port ${PORT} `))