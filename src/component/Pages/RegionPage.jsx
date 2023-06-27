import React, { useEffect, useState } from "react";
import db from "../Data/Firebase";
import { Link } from "react-router-dom";
import SecNav from "../blocks/SecNav";
import { Link as ScrollLink } from "react-scroll";

import {
  onSnapshot,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import LoadingSpinner from "../blocks/LoadingSpinner";
import BlockSlider from "../blocks/HomePage/BlockSlider";
import AskedQuestions from "../blocks/AskedQuestions";
import DisplayBlock from "../blocks/DisplayBlock";
function RegionPage({ regionName, regionID }) {
  const [LocationsArr, setLocationArr] = useState([]);
  const [Loading, setLoading] = useState(true);
  async function querylocCollection() {
    console.log("function!");
    const collectionRef = collection(db, "locations");
    const q = query(collectionRef, where("regionID", "==", regionID));
    const NewArr = [];
    const locs = await getDocs(q);
    locs.docs.map((doc) => {
      NewArr.push({ id: doc.id, ...doc.data() });
    });
    setLocationArr(NewArr);
    setLoading(false);
  }
  useEffect(() => {
    console.log("useffect happened");
    querylocCollection();
  }, []);
  return (
    <>
      {Loading ? (
        <LoadingSpinner />
      ) : (
        <div className="RegionPage">
          <div className="center">
            <div className="Head_block">
              <h1>
                <span>Explore</span> {regionName}
              </h1>
              <div className="Region_Inner_Nav">
                <ul>
                  <li>
                    <ScrollLink
                      className="scrollLink"
                      to="Trips"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      onClick={() => {}}
                    >
                      <span>Trips</span>
                      <img src="/icons/Ticket.svg" alt="" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scrollLink"
                      to="Trips"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      onClick={() => {}}
                    >
                      <span>Locations</span>
                      <img src="/icons/key.svg" alt="" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scrollLink"
                      to="Trips"
                      spy={true}
                      smooth={true}
                      ooffset={-10}
                      duration={500}
                      onClick={() => {}}
                    >
                      <span>Food</span>

                      <img src="/icons/food.svg" alt="" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scrollLink"
                      to="MediaGallery"
                      spy={true}
                      smooth={true}
                      ooffset={-10}
                      duration={500}
                      onClick={() => {}}
                    >
                      <span>Media</span>

                      <img src="/icons/Media_Gallery.svg" alt="" />
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              <div className="Region_Gallery">
                <div className="Media">
                  <img
                    src="https://images.pexels.com/photos/3408552/pexels-photo-3408552.jpeg"
                    alt=""
                  />
                </div>
                <div className="Media">
                  <img
                    src="https://images.pexels.com/photos/10528234/pexels-photo-10528234.jpeg"
                    alt=""
                  />
                </div>
                <div className="Media">
                  <img
                    src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="rgn_discription">
              <h3>Discription Header</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                aut repudiandae perspiciatis non minus, quod est, officia nisi
                magni aliquam blanditiis reiciendis. Excepturi nemo totam illum
                eveniet iste qui aliquid necessitatibus eaque, vitae, quia animi
                unde consequatur hic laborum sequi?
              </p>
            </div>
            <h3 id="Trips">Essential {regionName}</h3>
            <div className="Essentials">
              <BlockSlider
                SliderTitle={"Trips"}
                SliderDiscription={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                }
                imgsrc={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e2/9a/90/caption.jpg?w=400&h=300&s=1"
                }
              />
              <BlockSlider
                SliderTitle={"Locations"}
                SliderDiscription={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                }
                imgsrc={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/f7/0a/b9/mohonk-preserve-s-visitor.jpg?w=400&h=-1&s=1"
                }
              />
              <BlockSlider
                SliderTitle={"Gurmanius"}
                SliderDiscription={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                }
                imgsrc={
                  "https://media-cdn.tripadvisor.com/media/photo-s/1d/ff/f7/5e/khinkali.jpg"
                }
              />
              <BlockSlider
                SliderTitle={"Food"}
                SliderDiscription={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                }
                imgsrc={
                  "https://media-cdn.tripadvisor.com/media/photo-s/1d/ff/f7/5e/khinkali.jpg"
                }
              />
            </div>
            <div id="MediaGallery">
              <DisplayBlock
                Title={"Memories From " + regionName}
                Linkto={"/MediaGallery"}
              />
            </div>

            <AskedQuestions />
            <>
              <div className="Content">
                <div className="Filter">Filter</div>
                <div className="Locations">
                  <ul className="loc_arr_block">
                    {LocationsArr.map((locdata) => {
                      return (
                        <li key={locdata.id} className="Loc">
                          <Link to={locdata.id}>
                            <img
                              src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              alt=""
                            />
                            <div className="txt_block">
                              <div className="header">
                                <h2>
                                  {locdata.title} | {locdata.ownerName}
                                </h2>
                                <h2>{locdata.price}$</h2>
                              </div>
                              <p>{locdata.discription}</p>
                              <ul className="att_block">
                                {locdata.attributes.map((att) => {
                                  return (
                                    <li key={att.id}>
                                      <i>{att.label}</i>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
}

export default RegionPage;
