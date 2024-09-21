import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectMongoDb = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_CONNECT);
    const conn = await mongoose.connect(process.env.MONGODB_CONNECT);
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log("error connections to mongodb", error.message);
    process.exit(1);
  }
};
