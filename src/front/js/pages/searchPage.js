import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Container,
  Button,
  Col,
  InputGroup,
  Spinner,
  Row,
} from "react-bootstrap";
import { Context } from "../store/appContext";
import Slider from "@mui/material/Slider";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../../styles/searchpage.css";
import Map from "../component/map";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

export const SearchPage = () => {
  const baseUrl = "https://www.google.com/maps/embed/v1/place";
  const apiKey = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

  const renderLocation = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner animation="border" />;
      case Status.FAILURE:
        return <h1>Error loading Map!</h1>;
      case Status.SUCCESS:
        return <Map center={location} zoom={4} />;
    }
  };

  useEffect(() => {
    actions.getNannies();
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const [searchByInfo, setSearchByInfo] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center my-3 mx-5">
          <InputGroup className="mb-3 w-50">
            <Button variant="success" id="button-addon1">
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Row>
            <Col>
              <i className="fas fa-map-marker-alt"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-city"
                type="text"
                placeholder="Filter by city"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    location: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <i className="fas fa-euro-sign"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-amount"
                type="text"
                placeholder="Filter by € per hour"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    price: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <i className="fa-solid fa-badge-check"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-experience"
                type="text"
                placeholder="Filter by Experience"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    experience: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <Button
                variant="light"
                id="ba"
                onClick={() => {
                  actions.getNannyApplyFilter(searchByInfo);
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
          <div className="d-flex flex-column w-50 align-items-center">
            <Wrapper apiKey={apiKey} render={renderLocation} />
            <Slider
              className="w-75"
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
      </Container>
      <div className="d-flex flex-wrap">
        {store.nannies.map((item) => {
          return (
            <div key={item.id} className="d-flex flex-wrap w-90">
              <Paper
                className="d-flex align-items-center p-3 w-80"
                elevation={0}
                variant="outlined"
                id="cart"
              >
                <Avatar sx={{ width: 56, height: 56 }}>
                  {"https://randomuser.me/api/portraits/lego/" +
                    Math.floor(Math.random() * 10) +
                    -".jpg"}
                </Avatar>
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
        })}
      </div>
      <br></br>
    </>
  );
};
