const express = require("express");
const { CreateUser } = require("../controller/Products");

const router = express.Router();

router.post("/create", CreateUser)