import { useParams } from "react-router-dom";
import Comments from "./../AllComments";
import "./postComments.css";

function PostComments() {
  const { id } = useParams();
  const comments = Comments();
  const filterComments = comments.filter((comment) => comment.post_id === id);

  const postComments = filterComments.map((comment) => (
    <div>
      <h1>{comment.email}</h1>
    </div>
  ));

  return (
    <div className="PostComments">
      <h3>Comentários</h3>
      {postComments}
    </div>
  );
}

export default PostComments;
