import { app } from "./app.js";
import { connectDB } from "./Data/Database.js";

//connect to database
connectDB()

//app listen
app.listen(process.env.PORT,()=>{
    console.log("server is working")
})