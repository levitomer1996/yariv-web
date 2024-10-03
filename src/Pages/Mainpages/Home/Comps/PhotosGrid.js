import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import photosList from "../../Products/Comps/products"; // Importing the photos array
import "../Home.css";

const PhotosGrid = () => {
  return (
    <Grid container spacing={3} style={{ width: "80%" }}>
      {photosList.map((photo, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card className="image-container">
            <img src={photo} alt={`Photo ${index + 1}`} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotosGrid;
