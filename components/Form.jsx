import { set } from "mongoose";
import Link from "next/link";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [tags, setTags] = useState([]);
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} aaaa aaaa aaaa aaaa</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Link <span className="font-normal">(bookmarq.io)</span>
          </span>

          <input
            value={post.url}
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            placeholder="bookmarq.io"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Description
          </span>

          <textarea
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
            placeholder="write something here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal">(#aaa, #bbb, #ccc)</span>
          </span>

          <TagsInput
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e });
              console.log(e);
            }}
            name="tags"
            placeHolder="tags"
            separators={[",", " ", "Enter"]}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
