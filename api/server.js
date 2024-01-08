import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

// Import Routes
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
// import hServiceRoute from "./routes/hService.route.js";
// import orderRoute from "./routes/order.route.js";
// import conversationRoute from "./routes/conversation.route.js";
// import messageRoute from "./routes/message.route.js";
// import reviewRoute from "./routes/review.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// MONGODB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// MIDDLEWARE
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// ERRORS
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

// API
app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});