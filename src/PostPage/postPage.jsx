import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AllPosts from "./../AllPosts";

function PostPage() {
  const { id } = useParams();
  const posts = AllPosts();

  const filterPost = posts.filter((post) => post.id === id);

  const post = filterPost[0];

  if (filterPost.length === 0) {
    //verifica se o post foi encontrado
    return;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
}

export default PostPage;
