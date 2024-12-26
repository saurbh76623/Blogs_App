// import model 
const post = require("../models/postModel");
const comment = require("../models/commentModel");

// bussiness logic data base se interaction 
exports.createComment = async(req, res) => {
    try {

        // fetch data from req body 
        const { post, body, user } = req.body; // ye hme batana pdega db ko 

        // create a new comment object 
        const comment = new Comment({ post, body, user });

        // save the new comment into the data base using save operator
        const savedComment = await comment.save();

        // new comment ke liye => post ko fetch krke usme comment wle array me v update krna hoga 

        // find the post by id add the new comment to its comemnt array

        const updatePost = await post.findByIdAndUpdate(post, { $Push: { comments: savedComment._id } }, { new: true })
            .populate("comments") // populate the comment array to  document reference




    } catch (error) {

    }
};