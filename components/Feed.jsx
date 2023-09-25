"use client";

import { useState, useEffect } from "react";

import URLcard from "./URLcard";

const URLCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((eachPost) => (
        <URLcard
          key={eachPost._id}
          post={eachPost}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchPosts = async () => {
    const response = await fetch("/api/post");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <URLCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
