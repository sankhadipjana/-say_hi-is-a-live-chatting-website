import express from 'express';
import { allUsers,signup, login,logout } from '../controller/user.controller.js';
import secureRoute from '../middlewere/secoureroute.js';
const router  = express.Router() // create a router instance

router.post("/signup",signup) // signup route
router.post("/login",login) // login route
router.post("/logout",logout) // logout route
router.get("/allusers",secureRoute,allUsers) // get all users route

export default router