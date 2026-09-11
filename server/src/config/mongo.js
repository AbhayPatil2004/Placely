import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log('Mongodb Connected')
    }
    catch(error){
        console.error("Mongo DB Conection Error" , error.message )
        process.exit(1)
    }
}

export default connectDB;