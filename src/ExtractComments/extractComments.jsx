import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:3001/comments");
        const jsonData = await response.json();

        setComments(jsonData);
      } catch (error) {
        console.error("Erro ao obter os dados do JSON", error);
      }
    };

    fetchComments();
  }, []);

  return comments;
}

export default Comments;
