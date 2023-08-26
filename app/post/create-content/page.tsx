"use client";

import Container from "@/app/components/Container";
import { useEffect, useState } from "react";
import PostSender from "./PostSender";

function page() {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
        setLoaded(true);
  }, [loaded]);
  return (
    <div>
      {loaded ? (
        <Container>
          <div className="flex flex-col mt-20 gap-4 ">
            <div>
              <PostSender />
            </div>
          </div>
        </Container>
      ) : (
        <div className="flex justify-center">loading .. </div>
      )}
    </div>
  );
}

export default page;
