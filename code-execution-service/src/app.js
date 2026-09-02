import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const PORT = process.env.PORT ;

app.get("/" , () => {
    res.status(200).send({
        message : "Everything is file"
    })
})

app.listen( PORT , () => {
    console.log(`Server is listeing on Port ${PORT}`)
})