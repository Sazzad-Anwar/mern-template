import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        if (process.env.NODE_ENV !== 'test') {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });

            console.log(`MongoDB Connected to ${conn.connection.host}`);
        }

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;