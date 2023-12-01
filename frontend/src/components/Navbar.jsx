import React from "react";

import { logo } from "../assets";
import "../App.css";

const Navbar = () => {
  return (
    <main>
      <div className="gradient" />
      <div className="flex flex-row m-6 justify-between px-10 bg-inherit">
        <div className="">
          <img src={logo} alt="logo" className="w-60 object-contain" />
        </div>
        <div className="items-end">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/xavajk/talk-with-your-docs")
            }
            className="black_btn"
          >
            Github
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
