import React, { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/nannyCard.css";

export const NannyCard = ({ item }) => {
  const [picture, setPicture] = useState("");

  const getRandomPicture = async () => {
    const response = await fetch("https://randomuser.me/api/?inc=picture");
    const json = await response.json();
    const url = json.results[0].picture.thumbnail;
    setPicture(url);
  };

  useEffect(() => {
    getRandomPicture();
  }, []);

  return (
    <div key={item.id} className="outer-nanny-card d-flex flex-wrap">
      <Paper
        className="d-flex align-items-center p-3 w-100"
        elevation={0}
        variant="outlined"
        id="cart"
      >
        <Avatar sx={{ width: 56, height: 56 }} src={picture} />
        <div className="nanny-card ms-4 d-flex flex-column">
          <Link to={"/nannyprofile/" + item.id}>
            <h3 id={`nanny-name-${item.id}`}>
              {item?.first_name} {item?.last_name}
            </h3>
          </Link>
          <h4 id={`nanny-age-${item.id}`}>Age: {item?.age}</h4>
          <h5 id={`nanny-location-${item.id}`}>City: {item?.location}</h5>
          <p id={`nanny-skills-${item.id}`}>
            Skills and education: {item?.skills}
          </p>
          <p id={`nanny-experience-${item.id}`}>
            Years of experience: {item?.experience}
          </p>
          <p id={`nanny-price-${item.id}`}>Price: {item?.price}€</p>
        </div>
      </Paper>
    </div>
  );
};

export default NannyCard;
