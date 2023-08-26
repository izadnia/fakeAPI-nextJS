import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        max-w-[1920px]
        mx-auto
        sl:px-20
        md:px-2
        px:-4
    "
    >
      {children}
    </div>
  );
}

Container.propTypes = {};

export default Container;
