const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
//4-Body-parser
app.use(express.json());

//3-routes
app.use("/api/contacts", require("./routes/contacts"));

//2-connect db
connectDB();

//1-run server
const port = process.env.PORT || 5000;
app.listen(port, err =>
  err
    ? console.log("cannot connect to database")
    : console.log(`server is running on ${port}`)
);
