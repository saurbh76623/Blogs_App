// const express = require("express");
// const app = express();


// app.listen(3000 , ()=>{
//     console.log("app is running successfully");
// })

// app.get("/" , (req ,res) => {

//    res.send("this is my home page");
// })


const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());



//import routes...
const blog = require("./routes/blog");


//mount
app.use("/api/v1", blog);


const connectWithDb = require("./config/database");
connectWithDb();


//start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
})


// default route..
app.get("/", (req, res) => {
    res.send(`<h1>this is my home page</h1>`);
})