import React from "react";
import GetWebsiteData from "../Data/GetWebsiteData";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function RegionCollectionpage() {
  const regionsArr = GetWebsiteData().regions;

  return (
    <div className="RegionCollectionpage">
      <div className="center">
        <ul className="Regions">
          {regionsArr.map((region) => {
            return (
              <li className="region" key={region.id}>
                <Link to={"/Regions/" + region.name}>
                  <span>{region.name}</span>
                  <p>{region.discription}</p>
                  <ul className="rgn_att">
                    <li>
                      <img src="/icons/forest.svg" alt="" />
                      <h3>Forest</h3>
                    </li>
                    <li>
                      <img src="/icons/forest.svg" alt="" />
                      <h3>Forest</h3>
                    </li>
                    <li>
                      <img src="/icons/forest.svg" alt="" />
                      <h3>Forest</h3>
                    </li>
                  </ul>
                </Link>
                <div className="rgn_links">
                  <a href="#">Video Collage</a>
                  <a href="#">More About</a>
                </div>
                <img className="rgn_cvr" src="/images/Svaneti.jpg" alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RegionCollectionpage;
