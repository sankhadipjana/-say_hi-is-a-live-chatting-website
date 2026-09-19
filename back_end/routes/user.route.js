import express from 'express';
import { signup, login,logout } from '../controller/user.controller.js';
const router  = express.Router() // create a router instance

router.post("/signup",signup) // signup route
router.post("/login",login) // login route
router.post("/logout",logout) // logout route

export default router