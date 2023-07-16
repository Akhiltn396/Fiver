const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");



const register = async(req,res,next) =>{
    try {

        const hash = bcrypt.hashSync(req.body.password,5);
        const newUser = User({
            ...req.body,
            password:hash
    })
        await newUser.save()
        res.status(200).send("User has been created succcesfully")
    } catch (error) {
        next(error)
    }
}
const login = async(req,res,next) =>{
try {
    const user = await User.findOne({username: req.body.username})
    if(!user) return next(createError(404,"User not found"))

    const isCorrect = bcrypt.compareSync(req.body.password,user.password);
if(!isCorrect) return next(createError(400,"Wrong password or username"))

const token = jwt.sign({
    id:user._id,
    isSeller: user.isSeller,
},process.env.JWT_KEY)
const {password,...info} = user._doc
res
.cookie("accessToken", token, {
  httpOnly: true, useCredentials: true
})
.status(200)
.send(info);
} catch (error) {
    return next(createError(500,"Something went wrong"))
}
}
const logout = async(req,res) =>{
res.clearCookie("accessToken",{
    sameSite:"none",
    secure:true
})
.status(200).send("User has been logged out")
}

module.exports = {register,login,logout}