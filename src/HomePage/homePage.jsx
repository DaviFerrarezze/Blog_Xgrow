//Pagina principal / Pagina de inicio com as previas de cada post

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
