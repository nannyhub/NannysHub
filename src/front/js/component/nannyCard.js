import React, { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

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
    <div key={item.id} className="d-flex flex-wrap w-90">
      <Paper
        className="d-flex align-items-center p-3 w-80"
        elevation={0}
        variant="outlined"
        id="cart"
      >
        <Avatar sx={{ width: 56, height: 56 }} src={picture} />
        <div className="ms-4 d-flex flex-column">
          <Link to={"/nannyprofile/" + item.id}>
            <h3 id="nome">
              {item?.first_name} {item?.last_name}
            </h3>
          </Link>
          <h4 id="deet">Age: {item?.age}</h4>
          <h5 id="deet">City: {item?.location}</h5>
          <p id="dets">Skills and education: {item?.skills}</p>
          <p id="dets">Years of experience: {item?.experience}</p>
        </div>
      </Paper>
    </div>
  );
};

export default NannyCard;
