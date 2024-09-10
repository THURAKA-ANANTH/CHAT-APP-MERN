import mongoose from "mongoose"; // Corrected from "moongose"
mongoose.set('strictQuery', true);

const connecttoMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connecttoMongodb;
