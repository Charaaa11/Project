import React from "react";

function MoreToExploreBlock() {
  return (
    <div className="MoreToExploreBlock">
      <div className="center">
        <h2>More to Explore</h2>
        <div className="content">
          <ul>
            <li>
              <div className="img">
                <img src="/images/beachHouse.jpg" alt="" />
                <img className="fav" src="" alt="" />
              </div>
              <span>6 Best Places to Travel in March</span>
            </li>
            <li>
              <div className="img">
                <img src="/images/ski.jpg" alt="" />
                <img className="fav" src="" alt="" />
              </div>
              <span>3 Best ski resorts to Travel</span>
            </li>
            <li>
              <div className="img">
                <img src="/images/fall.jpg" alt="" />
                <img className="fav" src="" alt="" />
              </div>
              <span>10 Best Places to Travel during fall</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoreToExploreBlock;
