import Link from "next/link";
import Container from "../Container";
import React from "react";

function NavAdressbar() {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm pr-4 pl-4">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-center gap-3 md-gap-0">
            Adress Bar
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavAdressbar;
