const express = require("express");
const router = express.Router();

// AUTHENTICATION MIDDLEWARE

const AuthMiddleware = require("../middleware/AuthMiddleware");

// USER CONTROLLERS
const { register, login, checkUser } = require("../controller/userController");

// REGISTER ROUTE
router.post("/register", register);

// LOGIN USER
router.post("/login", login);

// CHECK USER
router.get("/check", AuthMiddleware, checkUser);

module.exports = router;
