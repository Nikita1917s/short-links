import express from "express";
import config from "config";
import mongoose from "mongoose";
import path from "path";
import authRoute from "./routes/auth.routes.js";
import linkRoute from "./routes/link.routes.js";

const PORT = config.get("port") || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/link", linkRoute);

if (process.env.NODE_ENV === 'production')  {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

mongoose.set("strictQuery", false);

const start = async () => {
  try {
     mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server started on port`, PORT);
    });
  } catch (e) {
    console.log(1, e);
  }
};

start();
