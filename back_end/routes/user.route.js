import express from 'express';
import { signup } from '../controller/user.controller.js';
const router  = express.Router() // create a router instance

router.post("/signup",signup) // signup route

export default router