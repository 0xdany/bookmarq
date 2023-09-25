import { Schema, model, models } from "mongoose";

const GroupSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Creator",
  },
  name: {
    type: String,
    required: [true, "name is required!"],
  },
  public: {
    type: Boolean,
    required: [true, "Is this group public or nuh?"],
  },
  desc: {
    type: String,
    required: [true, "description is required!"],
  },
  member: {
    type: [Schema.Types.ObjectId],
    ref: "Members",
  },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: "Posts",
  },
});

const Group = models.Group || model("Group", GroupSchema);

export default Group;
