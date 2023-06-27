import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function BlockSlider({ SliderTitle, SliderDiscription, imgsrc }) {
  return (
    <div className="BlockSlider">
      <div className="Slider_Content">
        <div className="text">
          <h3>{SliderTitle}</h3>
          <p>{SliderDiscription}</p>
          <a href="">See More</a>
        </div>
        <Carousel
          className="slider"
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={1500}
          swipeable={true}
          showIndicators={false}
          interval={7000}
        >
          <div className="slide_object">
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
          </div>
          <div className="slide_object">
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
          </div>
          <div className="slide_object">
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={imgsrc} alt="" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <div className="review">
                  <span>
                    <img src="/icons/star.svg" alt="" /> <span>4.5</span>
                  </span>
                  <text>3291</text>
                </div>
                <h5>from 100$/Day</h5>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default BlockSlider;
