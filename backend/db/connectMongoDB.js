import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/form-db');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
    }
}

export default connectMongoDB;