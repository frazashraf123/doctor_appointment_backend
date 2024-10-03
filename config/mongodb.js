import mongoose from "mongoose";

const coonectMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/prescripto");
    console.log("connected to database successfully");
  } catch (err) {
    console.log("Error in db connection: ", err);
    process.exit(1);
  }
};

export default coonectMongo;
