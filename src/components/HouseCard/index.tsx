import { useState, useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { amber } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { DividerLine, UpvotesCount, cardStyles } from "./styles";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { Apartment } from "../../types/apartment";

const HouseCard = ({ houseData }: { houseData: Apartment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isApiInBookmark, setIsApiInBookmark] = useState(false);

  return (
    <Card sx={cardStyles}>
      <CardHeader
        sx={{textAlign: "center", fontSize: "18px", color: "forestgreen"}}
        title={`Matching: ${houseData.match}%`}
        subheader={""}
      />
      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={256}
          height={194}
        />
      ) : (
        <CardMedia
          component="img"
          height="194"
          image={"https://www.apartments.com/images/default-source/2019-naa/parkline-apartment-in-miami-fla2dc2731-e6f2-4dca-89c5-38245ccacea1.tmb-featuredim.jpg?sfvrsn=55bc41ed_1"}
          alt="Paella dish"
        />
      )}
      <CardContent
        sx={{
          padding: "12px 16px",
          height: "135px",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        <Typography variant="body2" color="text.secondary">
        <b>Address:</b> {houseData.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Floor:</b> {houseData.floor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Rooms:</b> {houseData.rooms}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Parking:</b> {houseData.parkings}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Price:</b> {houseData.price} ₪
        </Typography>
      </CardContent>
      <DividerLine />
      <CardActions
        disableSpacing
        sx={{
          position: "absolute",
          bottom: 0,
          width: "calc(100% - 16px);",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          aria-label="share"
          onClick={() => {}}
        >
          <ThumbUpIcon color="primary" />
        </IconButton>
        <Button
          sx={{ color: "#757575" }}
          onClick={() => {}}
        >
          {houseData.name}
        </Button>
        <IconButton aria-label="add to favorites" onClick={() => {}}>
          <FavoriteIcon color="error"/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default HouseCard;
