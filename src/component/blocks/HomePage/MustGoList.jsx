import React from "react";
import { Link } from "react-router-dom";

function MustGoList({ RegData }) {
  // console.log("regiondata:" + RegData);
  return (
    <div className="MustGoList">
      <div className="center">
        <h2>Where to go, right now</h2>
        <h3>Spots at the top of travelers’ must-go lists</h3>
        <ul>
          {RegData?.map((region) => {
            return (
              <li key={region.id}>
                <Link to={"/Regions/" + region.name}>
                  <img src="/images/Svaneti.jpg" alt="" />
                  <span>{region.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MustGoList;
