import dotenv from "dotenv";
dotenv.config();
import express from 'express' 

const app = express()
const PORT = process.env.PORT 

app.get( "/" , ( req , res ) => {
    res.send("Placely")
})

app.listen( PORT , () => {
    console.log(`App listening on PORT ${PORT} `)
})