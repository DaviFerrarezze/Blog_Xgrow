//Post para pagina individual

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Posts from "./../ExtractPosts";
import './post.css'

function Post(){
    const { id } = useParams();
  const posts = Posts();
  const filterPost = posts.filter((post) => post.id === id);
  const post = filterPost[0];

  if (filterPost.length === 0) {
    //verifica se o post foi encontrado
    return;
  }

  return (
    <div className="Post">
        <h1>{post.title}</h1>
        <span>
         {post.time_read} min · {post.created_at}
        </span>
        <img src={post.image_url} alt="" />
        <p>{post.body}</p>    
    </div>
  );
}

export default Post;