
import { User } from "../model/user.js"
import bcrypt from "bcrypt"

import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers = async(req,res)=>{
    
}

export const register = async (req,res,next)=>{
    try {
        const{name , email ,password} = req.body;

        //checks if user already exists
        let user = await User.findOne({email});
        if(user)
            return next(new ErrorHandler("User already exists", 400))
        
        //hashes the password 
        const hashedPassword = await bcrypt.hash(password, 10)

        //create new user 
        user = await User.create({
            name,
            email,
            password : hashedPassword
        })
        
        //create token 
        sendCookie(user,res,"created successfully",201)
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next)=>{
    try {
        const{ email ,password} = req.body;
        let user = await User.findOne({email}).select("+password");
        if(!user)
        return next(new ErrorHandler("Invalid email or password", 400))

    

        const isValid = await bcrypt.compare(password, user.password)

        if(!isValid)
        return next(new ErrorHandler("Invalid email or password", 400))    

        sendCookie(user,res,`welcome back captain ${user.name}`,200)
    } catch (error) {
        next(error)
    }
}

export const logout = async (req,res,next)=>{
  try {
        res.status(200).cookie("token","",{
            expires:new Date(Date.now()),
            sameSite:"None",
        secure: true,
        }).json({
            success: true,
            message: "logout successfully"
            
        })
  } catch (error) {
        next(error)
  }

}

export const getMyProfile = async (req,res,next)=>{
try {
    res.status(200).json({
        success: true,
        user:req.user
    })

} catch (error) {
    next(error)
}}