"use client";

import Container from "@/app/components/Container";
// import { post } from "@/utils/post";
import { default as axios } from "axios";
import React, { useEffect, useState } from "react";
import PostComments from "./PostComments";
import PostDetails from "./PostDetails";

function page({ params }: any) {
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
      });
  }, [loaded]);

  return (
    <div className="p-8">
      {loaded ? (
        <Container>
          <PostDetails post={post[params.postId - 1]} />
          <div className="flex flex-col mt-20 gap-4 ">
            <div></div>
          </div>
          <PostComments postID={params.postId} />
        </Container>
      ) : (
        <div className="flex justify-center">loading .. </div>
      )}
    </div>
  );
}

export default page;
