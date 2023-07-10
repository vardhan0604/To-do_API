
import  express from "express";
import userRoute from "./routes/user.js"
import taskRoute from "./routes/task.js"
import dotenev from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"


export const app= express();

dotenev.config({
    path: "./data/conifg.env"
})


//using middleware
app.use(express.json())  //use to access elemsts from req.body
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))

//using routes
app.use("/api/v1/users",userRoute)
app.use("/api/v1/tasks",taskRoute)



//get request for / user
app.get("/",(req,res)=>{
    res.send("working")
})


app.use(errorMiddleware)