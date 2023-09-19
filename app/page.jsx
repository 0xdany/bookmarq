"use client";
import Typewriter from "typewriter-effect";

import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col gap-5">
      <h1 className="head_text orange_gradient text-center font-bold gap-7">
        Dude, have you tried
      </h1>

      <div className="text-center text-6xl font-bold relative z-50 w-auto h-auto">
        <Typewriter
          options={{
            strings: ["bookmarq", "bookmarq"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <span className="  text-center text-5xl font-bold">
        <span className="green_gradient">Discover </span>
        <span className="orange_gradient"> people's favorite </span>
        <span className="green_gradient">spots in the web</span>
      </span>

      <p className="desc text-center">
        Bookmarq is the place where people share their favorite websites, group
        their bookmarks, and tell their friends, their coworkers, their
        students, their families, their neighbors, or even a random guy they met
        in the street.
      </p>

      <Feed />
    </section>
  );
  f;
};

export default Home;
