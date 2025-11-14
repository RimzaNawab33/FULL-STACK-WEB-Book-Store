import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Route/Book.Route.js";
import userRoute from "./User/User.Route.js";

import cors from "cors";

const app = express()
dotenv.config();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 4000;
const URI = process.env.MondoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connect to mongoDB");
    
    
} catch (error) {
    console.log("Error", error);
    
}
// Defining Route 

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
