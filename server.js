const mongoose = require("mongoose");
require("dotenv").config();

const DBConnect = async()=> {
    try {
       await mongoose.connect("mongodb+srv://jamesugwu:Mongodbikenga@13@cluster0.pzqk6oq.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        } ).then((  )=> console.log('Connected to database'))
    } catch (error) {
        console.log("Error connecting to db",error)
    }
}

module.exports = DBConnect;