"use client";
import { default as axios } from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./components/Container";
import NavAdressbar from "./components/nav/NavAdressbar";
import PostCard from "./components/post/PostCard";

export default function Home() {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/posts")
      .then((res) => res.data) // Extract the data from the response
      .then((data) => {
        setPost(data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error retrieving posts:", error);
      })
  }, [loaded]);

  return (
    <div className="p-4">
      {loaded ? (
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {post.map((item: any) => {
              return <PostCard key={item.id} data={item} />;
            })}
          </div>
        </Container>
      ) : (
        <div className="flex justify-center">loading .. </div>
      )}
    </div>
  );
}
