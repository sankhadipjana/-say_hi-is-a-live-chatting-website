import express from 'express';
import { signup, login } from '../controller/user.controller.js';
const router  = express.Router() // create a router instance

router.post("/signup",signup) // signup route
router.post("/login",login) // login route

export default router