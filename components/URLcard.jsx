"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const URLcard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const [copied, setCopied] = useState("");

  const handleNewTab = () => {
    window.open(`https://www.${post.url}`, "_blank").focus();
  };

  const handleCopy = () => {
    setCopied(post.url);
    navigator.clipboard.writeText(post.url);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          onClick={() => handleNewTab()}
          className="flex-1 flex justify-start items-center cursor-pointer gap-3"
        >
          <Image
            src={`http://www.google.com/s2/favicons?domain=${post.url}&sz=32`}
            width="32"
            height="32"
            alt="favicon"
          />

          <h3 className="font-satoshi font-normal text-base">{post.url}</h3>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.url
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={40}
            height={40}
            alt="profile_image"
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <h3 className="font-satoshi font-thin text-gray-500 green_gradient text-xs">
          <span className="text-gray-400">stared by</span>{" "}
          {post.creator.username}
        </h3>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-500">{post.desc}</p>

      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-300 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>

          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default URLcard;
