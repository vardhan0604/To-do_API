import mongoose from "mongoose"
import { User } from "./user.js";



//create schema
const schema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

//create model
export const Task =mongoose.model("Task",schema);


