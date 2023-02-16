import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import upgradRoutes from "./routes/upgradRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/upgrad", upgradRoutes);

// Till here

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from UPGRAD!",
  });
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/dist"));
}

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
