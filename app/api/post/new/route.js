import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req) => {
  const { userId, url, desc, tag } = await req.json();

  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId,
      url,
      desc,
      tag,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
