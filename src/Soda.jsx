import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <p>so much sugar Soda</p>
      <Link exact to="/">
        go back
      </Link>
    </div>
  );
}

export default Soda;
