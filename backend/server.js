import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js"
import connecttoMongodb from "./db/connecttoMongodb.js";
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();


app.get("/",(req,res)=>{
    res.send(" Hello World")


});

app.use(express.json());

app.use(cookieParser());
app.use("/api/auth",authRoutes);

app.use("/api/messages",messagesRoutes);
app.use("/api/users",userRoutes)


server.listen(PORT,()=>{  
    connecttoMongodb()
    console.log(`Server is running on port ${PORT}`)
});