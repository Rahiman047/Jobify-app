import User from "../models/User.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError,} from "../errors/index.js"

const register = async (req,res,next) =>{
    const {name,password,email} = req.body
    if(!name || !email || !password){
        throw new BadRequestError("Please provide all values")
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError("email already in Use")
    }
    const user = await User.create({name,email,password})
    res.status(StatusCodes.OK).json({user})
}

const login = async (req,res) =>{
    res.send('login User')
}

const updateUser = async (req,res) =>{
    res.send('Update User')
}

export {register,login,updateUser}