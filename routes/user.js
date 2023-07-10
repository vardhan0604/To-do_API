import  express from "express";
import {User} from "../model/user.js";
import {  getAllUsers, register, login,getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/isAutheticated.js";

const router = express.Router();

//post request to create a user
router.post("/login", login)

//post request to create a user
router.post("/new", register)



//get request to fetch users from DB
router.get("/all",getAllUsers)


//get request to fetch,y Profile
router.get("/me",isAuthenticated ,getMyProfile)
//get request to logout
router.get("/logout",isAuthenticated ,logout)



//get request to find user by id
// router
//     .route("/userid/:id")
//     .get(findById)

export  default router;