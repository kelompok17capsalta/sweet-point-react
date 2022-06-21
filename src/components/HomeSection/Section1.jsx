import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCategoryCard from "../ProductCategoryCard";
import RedeemCard from "../Card/RedeemCard";

export default function Section1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="py-3">
      <div className="py-1">
        <h3>Best Deal</h3>
      </div>
      <div className="p-5">
        <div>
          <Slider {...settings}>
            <div>
              <RedeemCard
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                imgLogo={"/assets/logo/logo-1.png"}
                imgProduct={"/assets/product/product-1.png"}
                title={"test"}
              />
            </div>
            <div>
              <RedeemCard
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                imgLogo={"/assets/logo/logo-1.png"}
                imgProduct={"/assets/product/product-1.png"}
                title={"test"}
              />
            </div>
            <div>
              <RedeemCard
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                imgLogo={"/assets/logo/logo-1.png"}
                imgProduct={"/assets/product/product-1.png"}
                title={"test"}
              />
            </div>
            <div>
              <RedeemCard
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                imgLogo={"/assets/logo/logo-1.png"}
                imgProduct={"/assets/product/product-1.png"}
                title={"test"}
              />
            </div>
            <div>
              <RedeemCard
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                imgLogo={"/assets/logo/logo-1.png"}
                imgProduct={"/assets/product/product-1.png"}
                title={"test"}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        paddingTop: "1px",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        paddingTop: "1px",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}
