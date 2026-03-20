import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import noteRoutes from "./routes/note.routes.js"

const app = express()
dotenv.config()

// Database connection
try{
mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")
} catch(error){
    console.error("Error connecting to MongoDB:", error)
}

const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

// routing middleware
app.use(express.json())
app.use(cors())
app.use('/api/notes', noteRoutes)

app.listen(port,()=>{
 console.log(`Server is running on port ${port}`)
})