import mongoose from "mongoose";
import config from '../config/config.js'

mongoose.connect(config.MONGO_DB)
try {
    console.log('database is connected')
} catch (error) {
    console.log(error)
}