import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  url: {
    type: String,
    required: [true, "url is required!"],
  },
  desc: {
    type: String,
    required: [true, "Post is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
