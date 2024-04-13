import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "./../AllComments";
import "./postComments.css";

function Post_Comments() {
  const { id } = useParams();
  const postId = parseInt(id);
  const comments = Comments();

  const filterComments = comments.filter(
    (comment) => comment.post_id === postId
  );

  const postComments = filterComments.map((comment) => (
    <div className="PostComment">
      <h5>
        <span className="CommentInfo">Usuário:</span> {comment.username} |{" "}
        {comment.email}
      </h5>
      <p>
        <span className="CommentInfo">Comentário:</span> {comment.comment}
      </p>
      <div className="image">
        <img src={comment.avatar} alt="" />
      </div>
    </div>
  ));

  return (
    <div className="PostComments">
      <h3>Comentários</h3>
      {postComments}
    </div>
  );
}

export default Post_Comments;
