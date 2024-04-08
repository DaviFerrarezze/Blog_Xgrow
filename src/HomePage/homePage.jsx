import React from "react";
import AllPosts from "./../AllPosts";
import "./homePage.css";
import { Link } from "react-router-dom";

function Home_Page() {
  const posts = AllPosts();

  const previews = posts.map((post) => (
    <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
      <div className={post.id === "1" ? "FirstPost" : "PostPreview"}>
        <h2>{post.title}</h2>
        <img src={post.image_url} alt="" />
        <h4>{post.body.substring(0, post.body.lastIndexOf(" ", 115))}...</h4>
        <p>
          {post.time_read} min · {post.created_at}{" "}
        </p>
        <hr />
      </div>
    </Link>
  ));

  return (
    <div className="postsHomePage">
      <header className="HomePageHeader"></header>
      <div>{previews}</div>
    </div>
  );
}

export default Home_Page;
