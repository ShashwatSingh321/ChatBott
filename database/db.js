import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db_url, {
      dbName: "ChatbotYoutube",
      connectTimeoutMS: 30000,  // Increase timeout to 30 seconds
    socketTimeoutMS: 30000 
    });

    console.log("Mongo db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
