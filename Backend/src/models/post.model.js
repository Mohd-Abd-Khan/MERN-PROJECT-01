const mongoose=require("mongoose");


const postSchema=new mongoose.Schema({
  image: String,
  caption: String,
  likes: {
    type: Number,
    default: 0
  }
})

const postModel = mongoose.model("user",postSchema);

module.exports=postModel;