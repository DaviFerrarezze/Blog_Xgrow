//pagina de post 

import './postPage.css';
import PostComments from './../PostComments';
import Post from './../Post'

function PostPage() {
  return(
    <div>
    <Post />
    <hr></hr>
    <PostComments />
    </div>
  )
}
export default PostPage;
