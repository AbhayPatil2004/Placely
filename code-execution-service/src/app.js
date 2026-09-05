import express from 'express'
import dotenv from 'dotenv'
import executionRoutes from './routes/execution.routes.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT ;

app.use(express.json())

app.use("/api/code" , executionRoutes)
app.get("/" , ( req , res ) => {

    console.log("Get req received")
    res.status(200).json({
        message : "Everything is fine"
    })
})

app.listen( PORT , () => {
    console.log(`Code Execution Server is listeing on Port ${PORT}`)
})