import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
  //       .then((res) => setPosts(res.data), console.log(get))
  //       .catch((e) => console.log(e));
  //   }, []);

  //   return (
  //     <div>
  //       <ul>
  //         {posts.map((post) => (
  //           <li key={post.id}>{post.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return null;
}

export default DataFetching;
