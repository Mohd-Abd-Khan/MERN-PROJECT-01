const express=require("express");
const postModel=require("./models/post.model");
const multer=require("multer");
const uploadImage=require("./services/storage.services");
const cors=require("cors")

const app=express();


app.use(express.json());
app.use(cors())
const upload=multer({
  storage: multer.memoryStorage()
})



app.post("/create-post",upload.single("image"),async (req,res)=>{
  const data=await req.body;
  const file=await req.file;

  const result = await uploadImage(req.file.buffer);

  console.log(data);
  console.log(file);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  })

  return res.status(201).json({
    message: "successfully add post in DB",
    post
  })

})

app.get("/get-posts",async (req,res)=>{

  const posts=await postModel.find()

  return res.status(200).json({
      message:"post fetch successfully !",
      posts
  })

})

app.put("/like-post/:id", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.likes = (post.likes || 0) + 1;
    await post.save();
    return res.status(200).json({ message: "Post liked", post });
  } catch (error) {
    return res.status(500).json({ message: "Error liking post", error });
  }
});

app.delete("/delete-post/:id", async (req, res) => {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting post", error });
  }
});

module.exports=app;