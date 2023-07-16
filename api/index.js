const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbconnect = require('./config/DbConnect');
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const reviewRoute = require("./routes/review.routes");
const orderRoute = require("./routes/order.route");
const messageRoute = require("./routes/message.route");
const gigRoute = require("./routes/gig.route");
const conversationRoute = require("./routes/conversation.route");


const app = express()

dotenv.config()
dbconnect.Dbconnect()

app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(cookieParser())
app.use("/api/user/",userRoute)
app.use("/api/auth/",authRoute)

app.use("/api/reviews/",reviewRoute)
app.use("/api/orders/",orderRoute)
app.use("/api/messages/",messageRoute)
app.use("/api/gigs",gigRoute)
app.use("/api/conversation/",conversationRoute,)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    return res.status(errorStatus).send(errorMessage)
})


app.listen(4000,()=>{
    console.log("Server ready ");
})