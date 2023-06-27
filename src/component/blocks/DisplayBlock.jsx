import React from "react";
import { Link } from "react-router-dom";

function DisplayBlock({ Title, ImgSrc, Linkto }) {
  return (
    <div className="DisplayBlock">
      <div className="DF">
        <h4>{Title}</h4>
        <Link to={Linkto}>See More Photos</Link>
      </div>

      <img
        src="https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg"
        alt=""
      />
    </div>
  );
}

export default DisplayBlock;
