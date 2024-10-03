import express from "express";
import cors from "cors";
import coonectMongo from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
coonectMongo();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("Server started", port);
});
