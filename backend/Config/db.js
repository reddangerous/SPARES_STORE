import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/MYSPARESGUY", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;