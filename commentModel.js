//import mongoose
const mongoose = require("mongoose");

// router handler.
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post", //reference to the post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});


//export.
module.exports = mongoose.model("comment", commentSchema);