import express from "express";
import mongoose from "mongoose";
import brouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", brouter);
app.use(express.static(path.join(__dirname, './frontend/build')));
app.get("*", function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

mongoose.connect(
    "mongodb+srv://Jaspreet:VBBat2bwFTx7egim@cluster0.ndjs3va.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => app.listen(5001))
    .then(() =>
      console.log("Connected TO Database and Listening TO Localhost 5001")
    )
    .catch((err) => console.log(err));



// VBBat2bwFTx7egim