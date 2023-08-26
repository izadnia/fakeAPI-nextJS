import Link from "next/link";
import Container from "../Container";
import React from "react";

function NavBar() {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm pr-4 pl-4">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className="font-bold text-2xl">
              Home
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>
                <Link href="/post/create-content" className="font-bold ">
                  Post
                </Link>
              </div>
              <div>Profile</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;
