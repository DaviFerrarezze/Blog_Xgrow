import React from "react";
import Posts from "./../ExtractPosts";
import "./postsPreviews.css";
import { Link } from "react-router-dom";

function Previews() {
  const posts = Posts();

  const previews = posts.map((post) => (
    <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
      <div className={post.id === "1" ? "FirstPost" : "PostPreview"}>
        <h2>{post.title}</h2>
        <img src={post.image_url} alt="" />
        <h4>{post.body.substring(0, post.body.lastIndexOf(" ", 115))}...</h4>
        <span>
          {post.time_read} min · {post.created_at}{" "}
        </span>
        <hr />
      </div>
    </Link>
  ));

  return (
    <div className="PostsPreviews">
      {previews}
    </div>
  );
}

export default Previews;
