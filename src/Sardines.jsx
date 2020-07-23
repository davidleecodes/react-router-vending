import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
  return (
    <div>
      <p> you dont eat sardines. they eat you</p>
      <Link exact to="/">
        go back
      </Link>
    </div>
  );
}

export default Sardines;
