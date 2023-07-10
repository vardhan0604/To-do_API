import mongoose from "mongoose"

//connect to database
export const connectDB= () => 

mongoose.connect(process.env.MONGO_URI,{
    dbName: "backendAPI",
}).then((c)=>{
    console.log(`Database connected ${c.connection.host}`)
}).catch(e=>console.log(e))
