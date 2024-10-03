import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function HomeCard({ src, content }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
