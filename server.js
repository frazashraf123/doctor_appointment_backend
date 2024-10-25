import express from "express";
import cors from "cors";
import coonectMongo from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import dotenv from "dotenv";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
coonectMongo();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("Server started", port);
});
