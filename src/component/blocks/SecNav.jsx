import React from "react";
import { Link } from "react-router-dom";

function SecNav() {
  return (
    <div className="SecNav">
      <div className="center">
        <ul>
          <Link to={"Regions"}>
            <li>
              <span>Regions</span>
              <img src="/icons/region.svg" alt="" />
            </li>
          </Link>

          <Link to={"Regions"}>
            <li>
              <span>Location Page</span>
              <img src="/icons/ticket.svg" alt="" />
            </li>
          </Link>
          <Link to={"MediaGallery"}>
            <li>
              <span>
                Media <br /> Gallery
              </span>
              <img src="/icons/Media_Gallery.svg" alt="" />
            </li>
          </Link>

          <Link to={"Regions"}>
            <li>
              <span>Restaurants</span>
              <img src="/icons/food.svg" alt="" />
            </li>
          </Link>

          <Link to={"Regions"}>
            <li>
              <span>Travel Stories</span>
              <img src="/icons/globe.svg" alt="" />
            </li>
          </Link>

          <Link to={"Regions"}>
            <li>
              <span>More</span>
              <img src="/icons/dots.svg" alt="" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SecNav;
