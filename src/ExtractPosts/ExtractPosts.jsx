// Extrair os posts do JSON


import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const jsonData = await response.json();

        setPosts(jsonData);
      } catch (error) {
        console.error("Erro ao obter os dados do JSON", error);
      }
    };

    fetchPosts();
  }, []);

  return posts;
}

export default Posts;
