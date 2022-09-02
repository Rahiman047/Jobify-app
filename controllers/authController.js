import User from "../models/User.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError,UnAuthenticatedError} from "../errors/index.js"

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
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{email:user.email,name:user.name,lastName:user.lastName,location:user.location},token,location:user.loaction})
}

const login = async (req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError("Please provide all values")
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnAuthenticatedError("Invalid credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnAuthenticatedError("Invalid credentials")
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({user,token,location:user.location})
}

const updateUser = async (req,res) =>{
    console.log(req.user)
    res.send('Update User')
}

export {register,login,updateUser}