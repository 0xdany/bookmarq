"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    url: "",
    desc: "",
    tag: "",
  });

  const createpost = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("api/post/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          url: post.url,
          desc: post.desc,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createpost}
    />
  );
};

export default CreatePost;
