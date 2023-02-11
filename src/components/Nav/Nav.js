import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav">
        <Link to={"/"}>
          <div className="link">Back to homepage</div>
        </Link>
        <Link to={"/js"}>
          <div className="link">Vanilla JS</div>
        </Link>
        <Link to={"/progressive1"}>
          <div className="link">With progressive loader # 1</div>
        </Link>
        <Link to={"/progressive2"}>
          <div className="link">With progressive loader # 2</div>
        </Link>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Nav;
