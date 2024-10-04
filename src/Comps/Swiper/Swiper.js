import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swip.css";
import { Paper } from "@mui/material";

export default ({ title, list, type }) => {
  const renderSlideContent = (item, index) => {
    switch (type) {
      case "image":
        return <img src={item} alt={`Slide ${index + 1}`} />;
      case "comments":
        return <Paper>{item}</Paper>;
      default:
        return (
          <div
            style={{
              background: "lightcoral",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            Unsupported Type
          </div>
        );
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "5rem" }}>{title}</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 3000, // Delay of 3 seconds
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            {renderSlideContent(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
