import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB is connected sucessfully to ${mongoose.connection.host}`
    );
    return;
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
