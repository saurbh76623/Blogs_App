// import mongoose
const mongoose = require("mongoose");

require("dotenv").config();
// jo v env file ke andar config hai n wo isko ye load kr deta hai process wla object wle ke andar.....


const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedToplogy: true,
    })

    .then(console.log("Db connected successfully"))

    .catch((error)=>{
        console.log("DB facing connection issue");
        console.log(error);
        process.exit(1);

    })
}

module.exports = connectWithDb;