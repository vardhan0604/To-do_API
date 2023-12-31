import express from "express"

import { newTask , myTasks, updateTask, deleteTask} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/isAutheticated.js";

const router= express.Router()



router.post("/new",isAuthenticated,newTask)


router.get("/my",isAuthenticated,myTasks)

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)


export default router;