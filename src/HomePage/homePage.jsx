import React from "react";
import "./homePage.css";
import Previews from './../PostsPreview'

function Home_Page() {

  return (
    <div className="postsHomePage">
      <Previews />
    </div>
  );
}

export default Home_Page;
