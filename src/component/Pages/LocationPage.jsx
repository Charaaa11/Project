import React, { useEffect, useState } from "react";
import { collection, onSnapshot, getDoc, doc } from "firebase/firestore";
import db from "../Data/Firebase";

import { Link, Outlet, useParams } from "react-router-dom";
import LoadingSpinner from "../blocks/LoadingSpinner";
import MapApp from "../blocks/MapApp";
import AskedQuestions from "../blocks/AskedQuestions";

function LocationPage() {
  const { locationID } = useParams();
  const [LocationData, setLocationData] = useState({});
  const [Loading, setLoading] = useState(true);
  async function GetLocData(locID) {
    const docRef = doc(db, "locations", locID);
    await getDoc(docRef).then((doc) => {
      setLocationData({ id: doc.id, ...doc.data() });
      console.log(doc.data());
      setLoading(false);
    });
  }
  useEffect(() => {
    GetLocData(locationID);
  }, []);
  function DropDowns({ IcoSrc, title }) {
    const [IsClicked, setIsClicked] = useState(false);
    return (
      <li>
        <button
          onClick={() => {
            setIsClicked(!IsClicked);
          }}
        >
          <span>
            <img src={IcoSrc} alt="" />
            <span> {title}</span>
          </span>
          <img src={IsClicked ? "/icons/up.svg" : "/icons/down.svg"} alt="" />
        </button>
        {IsClicked && (
          <div className="expandable">
            <ul>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
            </ul>
          </div>
        )}
      </li>
    );
  }
  return (
    <>
      {Loading ? (
        <LoadingSpinner color={"#34e0a1"} />
      ) : (
        <div className="LocationPage">
          <div className="center">
            <div className="header">
              <div className="left">
                <h2>{LocationData.title}</h2>
                <h3>{LocationData.ownerName}</h3>
              </div>
              <div className="right">
                <div>
                  <img src="/icons/bed.svg" alt="" />
                  <span>Rate</span>
                </div>
                <div>
                  <img src="/icons/bed.svg" alt="" />
                  <span>Save</span>
                </div>
                <div>
                  <img src="/icons/bed.svg" alt="" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
          <div className="img_portfolio">
            <div className="center">
              <ul>
                <li>{/* <img src="/images/Racha.jpg" alt="" /> */}</li>
                <li>{/* <img src="/images/Racha.jpg" alt="" /> */}</li>
                <li>{/* <img src="/images/Racha.jpg" alt="" /> */}</li>
                <li>{/* <img src="/images/Racha.jpg" alt="" /> */}</li>
                <li>{/* <img src="/images/Racha.jpg" alt="" /> */}</li>
              </ul>
            </div>
          </div>
          <div className="info_nav">
            <div className="center">
              <ul>
                <li>info</li>
                <li>prices</li>
                <li>questions</li>
                <li>Reviews</li>
              </ul>
            </div>
          </div>
          <div className="info">
            <div className="center">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
              <p>{LocationData.discription}</p>
              <h4>transport:</h4>
              <ul>
                <li>car</li>
                <li>horse</li>
              </ul>
              <div className="Prices">
                <div className="center">
                  <h3>Prices</h3>
                  <ul>
                    <li>
                      <mark>Price</mark>
                      <span>{LocationData.price}</span>
                    </li>
                    <li>
                      <mark>Price</mark>
                      <span>{LocationData.price}</span>
                    </li>
                    <li>
                      <mark>Price</mark>
                      <span>{LocationData.price}</span>
                    </li>
                    <li>
                      <mark>Price</mark>
                      <span>{LocationData.price}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdowns">
                <ul>
                  <DropDowns
                    IcoSrc={"/icons/globe.svg"}
                    title={"Meetup place"}
                  />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"Languages"} />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"Phone"} />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"Time Table"} />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"duration"} />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"length"} />
                  <DropDowns IcoSrc={"/icons/globe.svg"} title={"difficulty"} />
                </ul>
              </div>
            </div>
          </div>
          <div className="map">
            <h3>Map</h3>
            <div className="Map_App_container">
              <MapApp />
            </div>
          </div>

          <div className="other_reg_locs">
            <div className="center">
              <span>
                <h3>Where else to stay</h3>
                <span>
                  <span>see more</span> <img src="/icons/right.svg" alt="" />
                </span>
              </span>
              <ul>
                <li>
                  <div className="image">
                    <img
                      src="https://cdn.georgiantravelguide.com/storage/thumbnails/294612220-735879417486944-507282-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="loc_info">
                    <h3>Location Title Location Title</h3>
                    <p>Lorem, ipsum.</p>
                    <span>110$ per person</span>
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img
                      src="https://cdn.georgiantravelguide.com/storage/thumbnails/294612220-735879417486944-507282-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="loc_info">
                    <h3>Location Title Location Title</h3>
                    <p>Lorem, ipsum.</p>
                    <span>110$ per person</span>
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img
                      src="https://cdn.georgiantravelguide.com/storage/thumbnails/294612220-735879417486944-507282-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="loc_info">
                    <h3>Location Title Location Title</h3>
                    <p>Lorem, ipsum.</p>
                    <span>110$ per person</span>
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img
                      src="https://cdn.georgiantravelguide.com/storage/thumbnails/294612220-735879417486944-507282-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="loc_info">
                    <h3>Location Title Location Title</h3>
                    <p>Lorem, ipsum.</p>
                    <span>110$ per person</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <AskedQuestions />
          <div className="Reviews">
            <div className="center">
              <strong>
                <h3>18 Reviews</h3>
                <span>
                  5 <img src="/icons/star.svg" alt="" />
                </span>
              </strong>
              <ul>
                <li>
                  <div className="head">
                    <div className="left">
                      <img src="/icons/profile.svg" alt="" />
                      <div className="rp">
                        <span id="pf_name">Leon Schelbach</span>
                        <span>
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="right">
                      <span>05 october, 2022</span>
                    </div>
                  </div>
                  <p></p>
                </li>
                <li>
                  <div className="head">
                    <div className="left">
                      <img src="/icons/profile.svg" alt="" />
                      <div className="rp">
                        <span id="pf_name">Leon Schelbach</span>
                        <span>
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="right">
                      <span>05 october, 2022</span>
                    </div>
                  </div>
                  <p></p>
                </li>
                <li>
                  <div className="head">
                    <div className="left">
                      <img src="/icons/profile.svg" alt="" />
                      <div className="rp">
                        <span id="pf_name">Leon Schelbach</span>
                        <span>
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                          <img src="/icons/star.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="right">
                      <span>05 october, 2022</span>
                    </div>
                  </div>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationPage;
