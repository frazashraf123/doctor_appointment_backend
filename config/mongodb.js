import mongoose from "mongoose";

const coonectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database successfully");
  } catch (err) {
    console.log("Error in db connection: ", err);
    process.exit(1);
  }
};

export default coonectMongo;
