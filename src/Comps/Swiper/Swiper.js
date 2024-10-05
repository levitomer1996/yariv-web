import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Autoplay } from "swiper/modules"; // Correct Autoplay module import for Swiper v8+
import { useMediaQuery } from "@mui/material";

export default ({ title, list, type }) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const renderSlideContent = (item, index) => {
    switch (type) {
      case "image":
        return (
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            style={{
              width: isMobile ? "100px" : "200px", // Fixed width for all images
              height: isMobile ? "100px" : "200px", // Fixed height for all images
              objectFit: "cover", // Ensures the image covers the area while keeping its aspect ratio
              borderRadius: "8px", // Optional: Adds rounded corners
            }}
          />
        );
      case "comments":
        return (
          <div style={{ padding: "1rem", textAlign: "center", height: "100%" }}>
            {item}
          </div>
        );
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
      <p style={{ fontSize: isMobile ? "2rem" : "5rem", textAlign: "center" }}>
        {title}
      </p>
      <Swiper
        modules={[Autoplay]} // Register Autoplay module
        spaceBetween={isMobile ? 10 : 30}
        slidesPerView={isMobile ? 3 : 5}
        autoplay={{
          delay: isMobile ? 3000 : 5000,
          disableOnInteraction: false, // Autoplay continues after user interaction
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
